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
  function clearDynamic(){
    document.querySelectorAll('[data-cert-field]').forEach(function(el){el.textContent='';});
    document.querySelectorAll('[data-cert-table] tbody').forEach(function(tb){ while(tb.children.length>1) tb.removeChild(tb.lastChild); });
    document.querySelectorAll('[data-cert-list="owners"]').forEach(function(el){el.innerHTML='';});
  }
  function renderRows(tableName,rows,cols){
    document.querySelectorAll('table[data-cert-table="'+tableName+'"]').forEach(function(table){
      var tb=table.tBodies[0]; if(!tb) return; while(tb.children.length>1) tb.removeChild(tb.lastChild);
      (rows||[]).forEach(function(row,idx){
        var tr=document.createElement('tr'); tr.className=(idx%2?'evenRow':'oddRow')+' cellCont';
        if(tableName==='classifications'){
          var exp=document.createElement('td'); exp.className='expandPane rowHandle '+(idx%2?'evenRow':'oddRow'); exp.style.width='1%'; tr.appendChild(exp);
        }
        cols.forEach(function(c){ var td=document.createElement('td'); td.className='dataValueRead gridCell'; var d=document.createElement('div'); d.className='oflowDivM'; var sp=document.createElement('span'); sp.textContent=esc(row[c]); d.appendChild(sp); td.appendChild(d); tr.appendChild(td); });
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
    }catch(e){ console.error('Certificate data load failed',e); clearDynamic(); }
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();