(function(){
  'use strict';
  var root = window.__CERT_ROOT__ || new URL('../', document.currentScript.src).href;
  var marker='/prweb/PRAuth/QRCode/viewCertificateDetails/';
  function tokenFromPath(){
    var p=location.pathname; var i=p.indexOf(marker); if(i<0) return '';
    return decodeURIComponent(p.slice(i+marker.length).split('/')[0]||'');
  }
  function esc(s){ return String(s==null?'':s); }
  function setField(key,value){
    document.querySelectorAll('[data-cert-field="'+key+'"]').forEach(function(el){ el.textContent=esc(value); });
  }
  function dataTables(name){
    return document.querySelectorAll('table[data-cert-table="'+name+'"][pl_prop]');
  }
  function clearDynamic(){
    document.querySelectorAll('[data-cert-field]').forEach(function(el){el.textContent='';});
    ['classifications','versions'].forEach(function(name){
      dataTables(name).forEach(function(table){
        var tb=table.tBodies[0];
        if(!tb) return;
        while(tb.children.length>1) tb.removeChild(tb.lastChild);
      });
    });
    document.querySelectorAll('[data-cert-list="owners"]').forEach(function(el){el.innerHTML='';});
  }
  function makeActivityDetail(row,idx,colspan){
    var detail=document.createElement('tr');
    detail.className='cert-activity-detail';
    detail.hidden=true;
    detail.setAttribute('data-cert-activity-detail',String(idx));
    var td=document.createElement('td');
    td.colSpan=colspan;
    var panel=document.createElement('div');
    panel.className='cert-activities-panel';
    var title=document.createElement('div');
    title.className='cert-activities-title';
    title.textContent='Sector Activities';
    panel.appendChild(title);
    var grid=document.createElement('div');
    grid.className='cert-activities-grid';
    var activities=Array.isArray(row.activities)?row.activities:[];
    if(activities.length){
      activities.forEach(function(name){
        var chip=document.createElement('div');
        chip.className='cert-activity-chip';
        chip.textContent=esc(name);
        grid.appendChild(chip);
      });
    } else {
      var empty=document.createElement('div');
      empty.className='cert-activities-empty';
      empty.textContent='لا توجد أنشطة محفوظة لهذا القطاع في ملف البيانات الحالي';
      grid.appendChild(empty);
    }
    panel.appendChild(grid); td.appendChild(panel); detail.appendChild(td);
    return detail;
  }
  function toggleDetail(btn,detail){
    var open=btn.getAttribute('aria-expanded')==='true';
    btn.setAttribute('aria-expanded',open?'false':'true');
    btn.classList.toggle('is-open',!open);
    detail.hidden=open;
  }
  function renderClassifications(rows){
    dataTables('classifications').forEach(function(table){
      var tb=table.tBodies[0]; if(!tb) return;
      while(tb.children.length>1) tb.removeChild(tb.lastChild);
      (rows||[]).forEach(function(row,idx){
        var tr=document.createElement('tr');
        tr.className=(idx%2?'evenRow':'oddRow')+' cellCont cert-classification-row';
        tr.setAttribute('data-cert-classification',String(idx));
        var exp=document.createElement('td');
        exp.className='expandPane rowHandle '+(idx%2?'evenRow':'oddRow');
        exp.style.width='1%'; exp.style.height='57px';
        var btn=document.createElement('button');
        btn.type='button'; btn.className='cert-expander'; btn.setAttribute('aria-expanded','false');
        btn.setAttribute('aria-label','فتح أو إغلاق أنشطة القطاع');
        exp.appendChild(btn); tr.appendChild(exp);
        ['sector','degree','nonFinancialScore','financialScore','status'].forEach(function(c){
          var td=document.createElement('td'); td.className='dataValueRead gridCell';
          var d=document.createElement('div'); d.className='oflowDivM';
          var sp=document.createElement('span'); sp.textContent=esc(row[c]);
          d.appendChild(sp); td.appendChild(d); tr.appendChild(td);
        });
        var detail=makeActivityDetail(row,idx,6);
        btn.addEventListener('click',function(ev){ev.preventDefault(); ev.stopPropagation(); toggleDetail(btn,detail);});
        tr.addEventListener('click',function(ev){ if(ev.target.closest('.cert-expander')) return; toggleDetail(btn,detail); });
        tr.tabIndex=0;
        tr.addEventListener('keydown',function(ev){ if(ev.key==='Enter'||ev.key===' '){ev.preventDefault();toggleDetail(btn,detail);} });
        tb.appendChild(tr); tb.appendChild(detail);
      });
    });
  }
  function renderRows(tableName,rows,cols){
    if(tableName==='classifications'){ renderClassifications(rows); return; }
    dataTables(tableName).forEach(function(table){
      var tb=table.tBodies[0]; if(!tb) return; while(tb.children.length>1) tb.removeChild(tb.lastChild);
      (rows||[]).forEach(function(row,idx){
        var tr=document.createElement('tr'); tr.className=(idx%2?'evenRow':'oddRow')+' cellCont';
        cols.forEach(function(c,colIdx){
          var td=document.createElement('td');
          td.className=(tableName==='versions' && c==='userType') ? 'centered gridCell' : 'dataValueRead gridCell';
          if(tableName==='versions'){
            td.style.height=(colIdx===0?'51px':'49px');
            td.setAttribute('data-importance','secondary');
            if(c==='version') td.setAttribute('data-attribute-name','Certificate Version');
            if(c==='updatedAt') td.setAttribute('data-attribute-name','Certificate Update Date and Time');
            if(c==='userType') td.setAttribute('data-attribute-name','Certificate Update User Type');
            if(c==='versionType') td.setAttribute('data-attribute-name','Certificate Version Type');
          }
          var d=document.createElement('div'); d.className='oflowDivM';
          if(tableName==='versions' && c==='userType'){
            var fi=document.createElement('div'); fi.className='field-item'; fi.setAttribute('datavalueread','');
            var sp=document.createElement('span'); sp.className='readonly_text'; sp.textContent=esc(row[c]);
            fi.appendChild(sp); d.appendChild(fi);
          } else {
            var sp=document.createElement('span'); sp.textContent=esc(row[c]); d.appendChild(sp);
          }
          td.appendChild(d); tr.appendChild(td);
        });
        tb.appendChild(tr);
      });
    });
  }
  function renderOwners(list){
    document.querySelectorAll('[data-cert-list="owners"]').forEach(function(container){
      container.innerHTML='';
      (list||[]).forEach(function(name,idx){
        var outer=document.createElement('div'); outer.className='content-item content-sub_section item-'+(idx+1)+' flex flex-row';
        var box=document.createElement('div'); box.className='layout layout-noheader layout-noheader-cc_border_grey margin-b-1x';
        var body=document.createElement('div'); body.className='layout-body';
        var content=document.createElement('div'); content.className='flex content layout-content-stacked content-stacked';
        var field=document.createElement('div'); field.className='content-item content-field item-1 flex flex-row baladyreadstyle dataValueRead';
        var sp=document.createElement('span'); sp.textContent=esc(name);
        field.appendChild(sp); content.appendChild(field); body.appendChild(content); box.appendChild(body); outer.appendChild(box); container.appendChild(outer);
      });
    });
  }

  function wireDownload(id,data){
    var file=(data&&data.pdfFile)||String(id)+'.pdf';
    var url=new URL('data/'+encodeURIComponent(file),root).href;
    document.querySelectorAll('button').forEach(function(btn){
      if((btn.textContent||'').trim()!=='تنزيل') return;
      btn.removeAttribute('disabled');
      btn.style.cursor='pointer';
      btn.onclick=function(ev){
        ev.preventDefault();
        ev.stopPropagation();
        var a=document.createElement('a');
        a.href=url;
        a.download=file;
        document.body.appendChild(a);
        a.click();
        a.remove();
      };
    });
  }

  async function start(){
    var token=tokenFromPath();
    if(!token){ clearDynamic(); return; }
    try{
      var routes=await fetch(new URL('data/routes.json',root),{cache:'no-store'}).then(function(r){if(!r.ok)throw Error(r.status);return r.json();});
      var id=routes[token]; if(!id){ clearDynamic(); return; }
      var data=await fetch(new URL('data/'+encodeURIComponent(id)+'.json',root),{cache:'no-store'}).then(function(r){if(!r.ok)throw Error(r.status);return r.json();});
      Object.keys(data.fields||{}).forEach(function(k){setField(k,data.fields[k]);});
      renderRows('classifications',data.classifications,['sector','degree','nonFinancialScore','financialScore','status']);
      renderRows('versions',data.versions,['version','updatedAt','userType','versionType']);
      renderOwners(data.owners);
      wireDownload(id,data);
    }catch(e){ console.error('Certificate data load failed',e); clearDynamic(); }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();
