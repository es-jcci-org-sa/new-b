#!/usr/bin/env python3
from pathlib import Path
from bs4 import BeautifulSoup
import json,re,sys,base64

def txt(x): return ' '.join(x.get_text(' ',strip=True).split()) if x else ''
if len(sys.argv)<2:
    print('Usage: python add-output.py PATH_TO_OUTPUT_FOLDER'); raise SystemExit(2)
src=Path(sys.argv[1]); site=Path(__file__).resolve().parents[1]
html=(src/'index.html').read_text('utf-8',errors='ignore'); soup=BeautifulSoup(html,'html.parser')
manifest=json.loads((src/'clone-manifest.json').read_text('utf-8'))
field_keys={'حالة الشهادة':'certificateStatus','رقم الشهادة':'certificateNumber','تاريخ إصدار الشهادة':'issueDate','تاريخ انتهاء الشهادة':'expiryDate','نوع التصنيف':'classificationType','Current Certificate Version':'currentVersion','Certificate Type':'certificateType','الرقم الوطني الموحد/رقم الترخيص':'unifiedNumber','تاريخ اصدار السجل التجاري/الترخيص':'registrationIssueDate','اسم المنشأة':'entityName','نوع المنشأة':'entityType','جنسية المنشأة':'entityNationality','رأس مال المنشأة':'capital','المنطقة':'region','مدينة':'city','رقم الهاتف':'phone','رقم الفاكس':'fax','البريد الإلكتروني':'email'}
fields={}
for cap in soup.select('span.field-caption'):
    key=field_keys.get(txt(cap)); v=cap.parent.select_one('.field-item') if cap.parent else None
    if key and v: fields[key]=txt(v)
for el in soup.select('.label_green_heading_dataLabelRead'):
    if txt(el): fields['entityNameHeading']=txt(el); break
classifications=[]; seen=set()
for table in soup.find_all('table'):
    h=[txt(th) for th in table.find_all('th')]
    if 'القطاع' in h and 'Classification Degree' in h and 'Financial Criteria Score' in h:
        for tr in table.find_all('tr'):
            v=[txt(td) for td in tr.find_all('td',recursive=False)]
            if len(v)>=6 and v[1] and v[1]!='القطاع':
                r={'sector':v[1],'degree':v[2],'nonFinancialScore':v[3],'financialScore':v[4],'status':v[5]}; k=tuple(r.values())
                if k not in seen: classifications.append(r); seen.add(k)
        if classifications: break
versions=[]; seen=set()
for table in soup.find_all('table'):
    h=[txt(th) for th in table.find_all('th')]
    if 'Certificate Version' in h and 'Certificate Update Date and Time' in h:
        for tr in table.find_all('tr'):
            v=[txt(td) for td in tr.find_all('td',recursive=False)]
            if len(v)==4 and v[0].isdigit():
                r={'version':v[0],'updatedAt':v[1],'userType':v[2],'versionType':v[3]}; k=tuple(r.values())
                if k not in seen: versions.append(r); seen.add(k)
        if versions: break
owners=[]; oc=soup.find(attrs={'data-repeat-source':re.compile('CROwnersList')})
if oc:
    for item in oc.find_all(attrs={'base_ref':re.compile(r'CROwnersList\\(\\d+\\)')}):
        d=item.select_one('.baladyreadstyle.dataValueRead'); val=txt(d)
        if val and val not in owners: owners.append(val)
url=manifest.get('targetUrl',''); marker='/viewCertificateDetails/'; token=url.split(marker,1)[1].split('?',1)[0] if marker in url else ''
try: case_id=base64.b64decode(token+'===').decode('utf-8')
except: case_id=fields.get('certificateNumber','certificate')
payload={'caseId':case_id,'token':token,'fields':fields,'classifications':classifications,'versions':versions,'owners':owners}
(site/'data'/f'{case_id}.json').write_text(json.dumps(payload,ensure_ascii=False,indent=2),'utf-8')
routes=json.loads((site/'data'/'routes.json').read_text('utf-8')) if (site/'data'/'routes.json').exists() else {}
routes[token]=case_id
(site/'data'/'routes.json').write_text(json.dumps(routes,ensure_ascii=False,indent=2),'utf-8')
print('Added:',case_id,'token:',token)
