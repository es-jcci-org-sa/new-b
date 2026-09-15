(function(){
  'use strict';

  // Restore the ORIGINAL Pega action for the Establishment Evaluation grid.
  // No row colors/classes are set here. Pega's own SETFOCUS chain does that.
  function getRatingRoot(){
    var grid=document.querySelector('[pl_prop="CertificateDetails.StarRatingDetails"]');
    return grid ? grid.closest('.template-root-marker.gridDefault') : null;
  }

  function isRatingRowTarget(ev,root){
    var t=ev && ev.target;
    if(!t || !t.closest) return false;
    var row=t.closest('tr[data-row="true"]');
    return !!(row && root && root.contains(row));
  }

  function originalSetFocus(ev,offset){
    try{
      // This is the same Pega action resolved by the original declarative
      // data-click: doListAction(:event,"SETFOCUS",null,{offset:N})
      if(window.pega && pega.control && pega.control.UIElement &&
         pega.control.UIElement.Actions &&
         typeof pega.control.UIElement.Actions.doListAction==='function'){
        pega.control.UIElement.Actions.doListAction(ev,'SETFOCUS',null,{offset:offset});
        return true;
      }
    }catch(e){
      console.warn('Pega UIElement doListAction failed',e);
    }

    try{
      // Same original DataRepeater action one layer below UIElement.Actions.
      if(window.pega && pega.ui && pega.ui.template &&
         pega.ui.template.DataRepeater && pega.ui.template.DataRepeater.Actions &&
         typeof pega.ui.template.DataRepeater.Actions.doListAction==='function'){
        pega.ui.template.DataRepeater.Actions.doListAction(ev,'SETFOCUS',null,{offset:offset});
        return true;
      }
    }catch(e2){
      console.warn('Pega DataRepeater doListAction failed',e2);
    }

    try{
      // Final fallback still uses Pega's original focusRow implementation.
      if(window.pega && pega.ui && pega.ui.DataRepeaterUtils && pega.ui.TemplateGrids){
        var info=pega.ui.DataRepeaterUtils.getClosestRepeatLayoutInfo(ev,true);
        if(info && info.rowNode){
          pega.ui.TemplateGrids.focusRow({offset:offset},info);
          return true;
        }
      }
    }catch(e3){
      console.error('Pega TemplateGrids SETFOCUS failed',e3);
    }
    return false;
  }

  function install(){
    var root=getRatingRoot();
    if(!root || root.__pegaRatingOriginalBridge) return;
    root.__pegaRatingOriginalBridge=true;

    root.addEventListener('click',function(ev){
      if(!isRatingRowTarget(ev,root)) return;
      originalSetFocus(ev,0);
    },false);

    root.addEventListener('keyup',function(ev){
      if(!isRatingRowTarget(ev,root)) return;
      if(ev.key==='ArrowUp' || ev.keyCode===38) originalSetFocus(ev,-1);
      else if(ev.key==='ArrowDown' || ev.keyCode===40) originalSetFocus(ev,1);
    },false);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',install);
  else install();
  window.addEventListener('load',install);
})();
