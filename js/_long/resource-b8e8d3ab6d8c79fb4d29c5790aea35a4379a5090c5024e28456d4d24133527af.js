(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzPaginateTemplate=B({"1":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'<div class="content-item content-field">\n  <div class="content-inner">\n    <div class="field-item dataValueWrite">\n       <button type="button" \n               data-click=\'[["runScript",["paginate(\\"'+C.escapeExpression(C.lambda(((E=(I!=null?H(I,"params"):I))!=null?H(E,"direction"):E),I))+'\\",\\"'+C.escapeExpression(C.lambda((I!=null?H(I,"parentId"):I),I))+'\\",event)"]]]\'     \n               '+((E=(H(F,"ifCond")||(I&&H(I,"ifCond"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),((E=(I!=null?H(I,"params"):I))!=null?H(E,"direction"):E),"==","P",{name:"ifCond",hash:{},fn:C.program(2,G,0),inverse:C.noop,data:G,loc:{start:{line:9,column:15},end:{line:9,column:92}}}))!=null?E:"")+"\n               "+((E=(H(F,"ifCond")||(I&&H(I,"ifCond"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),((E=(I!=null?H(I,"params"):I))!=null?H(E,"direction"):E),"==","N",{name:"ifCond",hash:{},fn:C.program(4,G,0),inverse:C.noop,data:G,loc:{start:{line:10,column:15},end:{line:10,column:92}}}))!=null?E:"")+'\n               class="Standard pzhc">\n               <img class="pzbtn-i grid-pg-link" src="webwb/'+C.escapeExpression(C.lambda(((E=(I!=null?H(I,"params"):I))!=null?H(E,"icon"):E),I))+"\" data-click='.'></img>\n       </button>\n      </div>\n   </div>\n</div>\n"},"2":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return C.escapeExpression(C.lambda((H!=null?G(H,"mbPrevDisabled"):H),H))+" "},"4":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return C.escapeExpression(C.lambda((H!=null?G(H,"mbNextDisabled"):H),H))+" "},"6":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return'         <a href="javascript:void(0)" \n            data-click=\'[["runScript",["paginate(\\"P\\",\\"'+C.escapeExpression(C.lambda((H!=null?G(H,"parentId"):H),H))+'\\",event)"]]]\'\n            title="'+C.escapeExpression(C.lambda((H!=null?G(H,"previousPage"):H),H))+'" \n            aria-label="'+C.escapeExpression(C.lambda((H!=null?G(H,"previousPage"):H),H))+'">\n            '+C.escapeExpression(C.lambda((H!=null?G(H,"pyPrevious"):H),H))+"\n         </a>\n"},"8":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return'        <a href="javascript:void(0)" \n          data-click=\'[["runScript",["paginate(\\"PE\\",\\"'+C.escapeExpression(C.lambda((H!=null?G(H,"parentId"):H),H))+'\\",event)"]]]\'\n          title="'+C.escapeExpression(C.lambda((H!=null?G(H,"previousWindow"):H),H))+'" \n          aria-label="'+C.escapeExpression(C.lambda((H!=null?G(H,"previousWindow"):H),H))+'">\n          ...\n       </a>\n'},"10":function(D,J,E,H,F,I,K){var C,G=D.lookupProperty||function(M,L){if(Object.prototype.hasOwnProperty.call(M,L)){return M[L]}return undefined};return'        <a href="javascript:void(0)" \n           data-click=\'[["runScript",["paginate(\\"'+D.escapeExpression(D.lambda(J,J))+'\\",\\"'+D.escapeExpression(D.lambda((K[1]!=null?G(K[1],"parentId"):K[1]),J))+'\\",event)"]]]\'\n'+((C=(G(E,"ifCond")||(J&&G(J,"ifCond"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),J,"===",(K[1]!=null?G(K[1],"currentPageIndex"):K[1]),{name:"ifCond",hash:{},fn:D.program(11,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:51,column:11},end:{line:54,column:22}}}))!=null?C:"")+((C=(G(E,"ifCond")||(J&&G(J,"ifCond"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),J,"!=",(K[1]!=null?G(K[1],"currentPageIndex"):K[1]),{name:"ifCond",hash:{},fn:D.program(13,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:55,column:11},end:{line:58,column:22}}}))!=null?C:"")+"           >"+D.escapeExpression(D.lambda(J,J))+"</a>\n"},"11":function(C,J,F,D,G,E,I){var H=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return"               aria-label=\"Current Page. Page '"+C.escapeExpression(C.lambda((I[1]!=null?H(I[1],"currentPageIndex"):I[1]),J))+"' of '"+C.escapeExpression(C.lambda((I[1]!=null?H(I[1],"lastIndex"):I[1]),J))+'\'"\n               class ="grid-pg-link selected"\n'},"13":function(C,G,E,D,F){return"               aria-label=\"Page '"+C.escapeExpression(C.lambda(G,G))+'\'"\n               class ="grid-pg-link"\n'},"15":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return'         <a href="javascript:void(0)" \n            data-click=\'[["runScript",["paginate(\\"NE\\",\\"'+C.escapeExpression(C.lambda((H!=null?G(H,"parentId"):H),H))+'\\",event)"]]]\'\n            title="'+C.escapeExpression(C.lambda((H!=null?G(H,"nextWindow"):H),H))+'" \n            aria-label="'+C.escapeExpression(C.lambda((H!=null?G(H,"nextWindow"):H),H))+'">\n            ...\n         </a>\n'},"17":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return'         <a href="javascript:void(0)"  \n            data-click=\'[["runScript",["paginate(\\"N\\",\\"'+C.escapeExpression(C.lambda((H!=null?G(H,"parentId"):H),H))+'\\",event)"]]]\'\n            title="'+C.escapeExpression(C.lambda((H!=null?G(H,"nextPage"):H),H))+'" \n            aria-label="'+C.escapeExpression(C.lambda((H!=null?G(H,"nextPage"):H),H))+'">\n            '+C.escapeExpression(C.lambda((H!=null?G(H,"pyNext"):H),H))+"\n         </a>\n"},"19":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'    <div class="content layout-content-inline content-inline grid-mobile-paginator">\n      '+((E=(H(F,"includePartial")||(I&&H(I,"includePartial"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),"mbGridpgLink",{name:"includePartial",hash:{icon:"pymenuleftarrow.png",direction:"P"},fn:C.program(20,G,0),inverse:C.noop,data:G,loc:{start:{line:88,column:6},end:{line:88,column:100}}}))!=null?E:"")+"\n      "+C.escapeExpression(C.lambda((I!=null?H(I,"paginationPrefix"):I),I))+" "+C.escapeExpression(C.lambda((I!=null?H(I,"mbStartIndex"):I),I))+" - "+C.escapeExpression(C.lambda((I!=null?H(I,"mbEndIndex"):I),I))+"\n      "+((E=(H(F,"includePartial")||(I&&H(I,"includePartial"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),"mbGridpgLink",{name:"includePartial",hash:{icon:"pymenurightarrow.png",direction:"N"},fn:C.program(20,G,0),inverse:C.noop,data:G,loc:{start:{line:90,column:6},end:{line:90,column:101}}}))!=null?E:"")+"\n    </div>\n"},"20":function(C,G,E,D,F){return""},compiler:[8,">= 4.3.0"],main:function(D,J,E,H,F,I,K){var C,G=D.lookupProperty||function(M,L){if(Object.prototype.hasOwnProperty.call(M,L)){return M[L]}return undefined};return((C=(G(E,"partial")||(J&&G(J,"partial"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),"mbGridpgLink",{name:"partial",hash:{},fn:D.program(1,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:3,column:0},end:{line:17,column:12}}}))!=null?C:"")+'\n\n<div node_name="pyGridPaginator" class="gridActionAlignRight">\n\n    <div id="grid-desktop-paginator" class="pagination-links" style="margin-right:10px;margin-top:5px;">\n     \n'+((C=(G(E,"ifCond")||(J&&G(J,"ifCond"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"currentPageIndex"):J),">",1,{name:"ifCond",hash:{},fn:D.program(6,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:28,column:5},end:{line:35,column:16}}}))!=null?C:"")+"\n"+((C=(G(E,"ifCond")||(J&&G(J,"ifCond"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"currentPageIndex"):J),">",3,{name:"ifCond",hash:{},fn:D.program(8,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:38,column:5},end:{line:45,column:16}}}))!=null?C:"")+"     \n"+((C=(G(E,"for")||(J&&G(J,"for"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"startIndex"):J),(J!=null?G(J,"lastIndex"):J),1,{name:"for",hash:{},fn:D.program(10,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:48,column:5},end:{line:60,column:13}}}))!=null?C:"")+"     \n"+((C=(G(E,"if_in")||(J&&G(J,"if_in"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"more"):J),"true",true,{name:"if_in",hash:{},fn:D.program(15,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:63,column:5},end:{line:70,column:15}}}))!=null?C:"")+"     \n"+((C=(G(E,"ifCond")||(J&&G(J,"ifCond"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"currentPageIndex"):J),"!=",(J!=null?G(J,"finalIndex"):J),{name:"ifCond",hash:{},fn:D.program(17,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:73,column:5},end:{line:80,column:16}}}))!=null?C:"")+"    </div>\n   \n   \n"+((C=(G(E,"if_eq")||(J&&G(J,"if_eq"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"responsive"):J),"true",{name:"if_eq",hash:{},fn:D.program(19,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:86,column:3},end:{line:92,column:15}}}))!=null?C:"")+"</div>\n   \n"},useData:true,useDepths:true})})();var paginationConstants={PAGE_COUNT:3};function paginate(B,C,A){if(!C){console.log("Pagination:paginate():'parentId' is not defined")}else{if(pega.ui.PaginateUtils.getIsPaginationEnabled()){pega.ui.PaginateUtils.setIsPaginationEnabled(false);pega.ui.PaginateUtils.fire(C,B,A)}}}function isHybridClient(){if(typeof pega.offline=="undefined"||pega.offline==undefined){return false}return true}pega.ui.template.RenderingEngine.register("pxPaginate",function(C,B,D){var A=JSON.parse(C.templatePage.getJSON());A.refId=C.templatePage._ref;A.parentId=D;A.parentRefPath=B;return Handlebars.templates.pzPaginateTemplate(A)});pega=pega||{};pega.ui=pega.ui||{};pega.ui.PaginateUtils=pega.ui.PaginateUtils||(function(){var G=new Array();var D=true;var E=function(){return D};var H=function(I){D=I};var B=function(K,J,I){K=K.toString();if(!G[K]){G[K]={scope:J||window,fn:I};return true}else{return false}};var A=function(I){I=I.toString();if(G[I]){return delete G[I]}else{return false}};var C=function(J,K,I){if(G[J]&&G[J]!=null){(G[J]["scope"][G[J]["fn"]]).call(this,J,K,this.onSuccessHandler,I)}};var F=function(){pega.ui.PaginateUtils.setIsPaginationEnabled(true)};return{subscribe:B,unsubscribe:A,fire:C,onSuccessHandler:F,getIsPaginationEnabled:E,setIsPaginationEnabled:H}})();
pega=pega||{};pega.ui=pega.ui||{};
pega.ui.FilterUtils=pega.ui.FilterUtils||function(){function K(a){var b=$("[data-repeat-source] \x3e div",this).remove(":empty").filter(":not(:empty)"),c=b.length;0===c&&$(this).html("");1!==c||a||b.addClass("single-filter-bar")}function L(a,b,c){var d=$(a).attr(b),e=$(a).attr("class").split(" ").join(" .");e&&c.nextAll().each(function(){var a=$(this).find("."+e),c=a.attr(b);a.attr(b,d);d=c})}function z(a){var b=-1,c=/pyColumns\((\d+)\)/;c.test(a.target.getAttribute("data-click"))&&(b=parseInt(c.exec(a.target.getAttribute("data-click"))[1]));
return b}function M(a){for(var b=!1,c=0;c<A.length&&($(a).closest("div[node_name\x3d'pzFilterColumns']").find(A[c]).each(function(){b=b||$(this).val().trim()}),!b);c++);return b}function g(a,b){a=$(a).closest("div[node_name\x3d'pzFilterColumns']").find("a[data-click*\x3d'expandNClear']").closest("span[class*\x3d'header-element header-title-table']");b?$(a).hide():$(a).show()}function t(a){var b;(b=$(a).closest("div[node_name\x3d'pzFilterColumns']").find("input[name*\x3d'pySelected']:checked").length||
M(a))||(a=$(a).closest("div[node_name\x3d'pzFilterColumns']").find("select"),b=a.length&&0!==a[0].selectedIndex);return b}function B(a){var b=[],c="",d,e=[];$(a).find("input[name*\x3d'pyFrom']").each(function(){b.push(this)}).end().find("input[name*\x3d'pyTo']").each(function(a){if((a=b[a])&&a.value&&this.value){var d,f,p,g,h="",k=a.name.indexOf("pyFrom");-1!==k&&(h=a.name.substring(k));switch(h){case "pyFromInteger":d=parseInt(a.value);f=parseInt(this.value);p=filterPanelRangeMsg1;break;case "pyFromDecimal":d=
parseFloat(a.getAttribute("data-value"));f=parseFloat(this.getAttribute("data-value"));p=filterPanelRangeMsg1;break;case "pyFromDateTime":d=new Date(pega.u.d.wrapperProcessDate(a.value,"1"));f=new Date(pega.u.d.wrapperProcessDate(this.value,"1"));p=filterPanelRangeMsg2;break;case "pyFromDate":d=new Date(pega.u.d.wrapperProcessDate(a.value,"0")),f=new Date(pega.u.d.wrapperProcessDate(this.value,"0")),p=filterPanelRangeMsg2}!isNaN(d)&&!isNaN(f)&&d>f&&(g=display_getValidationError(this,"",p));(c=g)&&
e.push(c)}}).end().find("input[name*\x3d'pyNoOfDays']:first").each(function(){var a=parseInt(this.value);isNaN(a)&&!0===$(this).is(":visible")?d=emptyValueMsg:0>=a&&(d=filterPanelRangeMsg3);d&&(c=display_getValidationError(this,"",d))&&e.push(c)});return e}function N(a,b){a=$(a).closest("div[node_name\x3d'pyModalTemplateFilter']").find("div[node_name\x3d'pzFilterColumns']");b=pega.ui.tGridInstanceManager.getInstance(b);a=$(a).find("span[class*\x3d'clear-filter-link']");for(var c=!1,d=0;d<a.length;d++)if(""==
a[d].style.display||"block"==a[d].style.display){c=!0;break}b.state.isFiltered=c}function v(a){var b=$(a).find("div[class\x3d'iconErrorDiv dynamic-icon-error-div']").siblings()[0];b&&display_removeErrorImage(b);$(a).find("input[name*\x3d'pySearchText'],input[name*\x3d'pyFrom'],input[name*\x3d'pyTo'],input[name*\x3d'pyNoOfDays']").val("").attr("data-value","").end().find("input[name*\x3d'pySelected']:checked,input[name*\x3d'pyInclude']").each(function(){this.checked=!1}).end().find("select[name*\x3d'pySymbolicDate']").each(function(){this.selectedIndex=
0}).end().find("input[name*\x3d'pyNoOfDays'],input[name*\x3d'pyInclude']").closest(".content-item").hide().end().end().find("input[name*\x3d'pyFromDate'],input[name*\x3d'pyToDate']").closest(".flex-row").hide()}var h=null,k=[],l=!1,C,w=function(){var a;return{show:function(){a=pega.u.d.gBusyInd?pega.u.d.gBusyInd.busyIndInterval:pega.u.d.busyIndInterval;pega.u.d.gBusyInd&&(pega.u.d.gBusyInd.busyIndInterval=200,pega.u.d.setBusyIndicator(document.body,!1,!0))},hide:function(){pega.u.d.gBusyInd&&(pega.u.d.gBusyInd.busyIndInterval=
a||pega.u.d.gBusyInd.busyIndInterval,pega.u.d.gBusyInd.hide())}}}(),D=function(a,b,c){var d=SafeURL_createFromURL(pega.u.d.url),e;for(e in b)d.put(e,b[e]);pega.u.d.asyncRequest(a.toUpperCase(),d,c)},q=function(a){var b=a.closest("[node_name]");a=b.querySelector("[id\x3d'EXPAND-INNERDIV'] [node_name]");b=b.querySelector("[name*\x3d'pyPropertyName']").getAttribute("value");return{sectionNode:a,propName:b}},r=function(){return $("div[node_name\x3d'pzFilterPanelMobile']").find(".collapsible").filter(".Expanded").find("[class*\x3d'header-bar']")},
m=function(a,b){var c="action\x3d"+b,d=pega.ui.tGridConstants.PXGRID_FILTER_PANEL_ACTIONS_ACTIVITY_NAME,e=!1;switch(b){case pega.ui.tGridConstants.PXGRID_FILTER_PANEL_EXPAND_ACTION:a=q(a);c+="\x26columnName\x3d"+a.propName;e=!0;break;case pega.ui.tGridConstants.PXGRID_FILTER_PANEL_CLEAR_ACTION:a=q(a);var f=r()[0];f&&(f=q(f),c+="\x26columnName\x3d"+a.propName+"\x26prevColName\x3d"+f.propName,a=f,e=!0);break;case pega.ui.tGridConstants.PXGRID_FILTER_PANEL_CLEARALL_ACTION:if(a=r()[0])a=q(a),c+="\x26columnName\x3d"+
a.propName,e=!0}e?pega.u.d.reloadSectionEncoded(a.sectionNode,d,c,!1,!1,-1,!1,null,[]):(b={pyActivity:d,action:b},a&&a.propName&&(b.columnName=a.propName),D("POST",b,{success:function(a){},failure:function(a){console.error("Ajax request fail : "+a)}}))},E=function(a,b,c){k[a]&&null!=k[a]&&k[a].scope[k[a].fn].call(this,a,b,c)},F=function(a,b,c){var d=pega.ui.tGridInstanceManager.getInstance(a),e=d.state.isFiltered,f=d.getPaginationState(),n=pega.ui.TEMPLATE_CONSTANTS,u=f?parseInt(f[n.PYPAGESIZE]):
"";pega.ui.TemplateGrids.performGridAjaxAction({uniqueid:a,gridAction:b,startIndex:f?f.mbStartIndex:"",endIndex:f?f.mbStartIndex+u-1:"",pxPageSize:u?u:-1,pxPageIndex:f?f.currentPageIndex:-1,isFiltered:e,callBack:{success:function(b){d.synchTotalRecordsWithServer(c);"undefined"!==typeof d.state.pyAllRowsHidden&&(d.state.pyAllRowsHidden=!0);d.state.pyHiddenRows=[];d.updateFilteringState(!0)?F(a,"GRID-REFRESHLIST",d.getMetaData()[n.PZGRIDWRAPPER][n.PYPAGELISTPROPERTY]):(pega.ui.TemplateGrids.refreshGrid(a,
pega.ui.tGridConstants.GRID_PAGINATE_ACTION),w.hide())},failure:function(a){}}})},x=function(a,b,c){var d=pega.ui.TEMPLATE_CONSTANTS;c=c||c;if(l){var e=pega.ui.tGridInstanceManager.getInstance(b),f=$("table[uniqueid\x3d"+b+"]")[0];pega.ui.TemplateGrids.pagesToRemoveList(f);d=e.getPaginationState()[d.PYPAGESIZE];e=e.getSortedColumn()||{};pega.ui.TemplateGrids.performGridAjaxAction({uniqueid:b,gridAction:pega.ui.tGridConstants.GRID_FILTER_ACTION,sortProperty:e.sortProperty?e.sortProperty:"",sortType:e.sortType?
e.sortType:"",pxPageSize:d?d:-1,pxPageIndex:1,callBack:{success:function(d){var e=d.responseText.split("#####");d=e[3];var e=e[4],f=z(a);G(b,d,e);E(b,c,f);w.hide()},failure:function(a){}}});l=!1}pega.u.d.gBusyInd.busyIndInterval=C},G=function(a,b,c){a=pega.ui.tGridInstanceManager.getInstance(a);a.setFilterBarMarkup(c);c=b.split(",");for(var d=a.getColumns(),e=0;e<d.length;e++)-1!=c.indexOf(d[e].pyPropertyName)?d[e].isFiltered="true":d[e].isFiltered="false";a.setColumns(d);-1!=b.indexOf(",")?a.state.isFiltered=
"true":a.state.isFiltered="false"},A=[".grid-filter-searchtext input[type\x3d'text']",".grid-filter-fromdecimal input[type\x3d'number']",".grid-filter-todecimal input[type\x3d'number']"],H=function(a){var b=pega.util.Event.getTarget(a),c=$(b).closest("div[node_name\x3d'pzFilterColumns']");v(c);g(b,!0);m(b,pega.ui.tGridConstants.PXGRID_FILTER_PANEL_CLEAR_ACTION);pega.util.Event.stopPropagation(a);a.preventDefault();return!1},y=function(a){pega.u.d.submitModalDlgParam.bReload=!1;"undefined"!=typeof pega&&
pega.u.d&&setUserStart();doOverlayAction(pega.u.d.submitModalDlgParam,a)},O=function(){var a=pega.u.d.getPopOver(pega.u.d.insertButton),a=a.getContentContainerElement();a.querySelectorAll("div[style\x3d' display:none;']").forEach(function(a){a.firstElementChild.querySelectorAll("input[name*\x3d'IncludeCurrent']").forEach(function(a){a.remove()})})},I=function(a,b,c){var d=!1;a=pega.util.Event.getTarget(a);var e=$(a).closest("div[node_name\x3d'pyOverlayTemplate']");a=$(e).find("input[name*\x3d'pySelected']:checked");
var f=$(e).find("input[name*\x3d'pySearchText']").val(),n=$(e).find("input[name*\x3d'pyFrom']").val(),g=$(e).find("input[name*\x3d'pyTo']").val(),e=$(e).find("select[name*\x3d'pySymbolicDate']").val(),h=0<="Previous Week;Next Week;Last X Days;Next X Days;Yesterday;Tomorrow;Previous Month;Next Month;Previous Quarter;Next Quarter;Previous Year;Next Year;Previous 2 Years".split(";").indexOf(e);e&&h&&O();if(0<a.length||f||n||g||e)d="true";b=pega.ui.tGridInstanceManager.getInstance(b);a=b.getColumns();
for(f=0;f<a.length;f++)a[f].pyPropertyName==c&&(a[f].isFiltered=d);b.setColumns(a)},J=function(a){a=pega.util.Event.getTarget(a);a=$(a).closest("div[node_name\x3d'pyOverlayTemplate']");a=B(a);a.length&&display_showImageErrors(a,[],[]);return a.length?!1:!0},P=function(a,b){var c=[],d=pega.util.Event.getTarget(a);$(d).closest("div[node_name\x3d'pyModalTemplateFilter']").find("div[node_name\x3d'pzFilterColumns']").each(function(){var a=B(this);pega.ui.ArrayUtil.merge(c,a)});0<c.length?display_showImageErrors(c,
[],[]):($("div[data-ui-meta*\x3d'pzFilterPanelMobile']").find("div#CT[swp\x3d'.pyMobileFilterPanelSection'][style\x3d'display:none;']").remove(),N(d,b),pega.u.d.submitModalDlgParam.bReload=!1,doModalAction(pega.u.d.submitModalDlgParam,a),$("body").removeClass("filter-pannel-on"));return 0==c.length};return{buildFilterIcon:function(a,b){var c="",d=pega.ui.tGridInstanceManager.getInstance(a);(c=d.getMobileFilterIcon())?c=c[0].outerHTML:(c=pega.ui.tGridUtility.getSectionMarkup("filterPage",b),c=c.replace(/(DummyFilterPanelMetaData)|(filterPage)|(DummyGridUniqueID)/g,
function(b,c,d){switch(b){case "DummyFilterPanelMetaData":case "filterPage":return pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE+a;case "DummyGridUniqueID":return a}}),c=d.setMobileFilterIcon(c));return c},handleCollapseExpand:function(a){"Clear"!==a.target.text&&(a=r(),0<a.length?1===a.length?(h=a[0],m(h,pega.ui.tGridConstants.PXGRID_FILTER_PANEL_EXPAND_ACTION)):h===a[0]?(m(h,pega.ui.tGridConstants.PXGRID_FILTER_PANEL_EXPAND_ACTION),a[0].click(),h=a[1]):(m(h,pega.ui.tGridConstants.PXGRID_FILTER_PANEL_EXPAND_ACTION),
a[1].click(),h=a[0]):m(h,pega.ui.tGridConstants.PXGRID_FILTER_PANEL_EXPAND_ACTION))},handleApplyFilters:x,applyFilterCallback:function(a){a=a.responseText.split("#####")[2];E(a)},handleColumnApplyFilters:I,handleColumnValidateFilter:function(a,b,c){if(!J(a))return!1;I(a,b,c);y(a);l=!0},handleColumnApplyFilterWrapper:function(a,b){var c=pega.util.Event.getTarget(a),c=$(c).closest("div[node_name\x3d'pyOverlayTemplate']");$(c).find("div[class\x3d'iconErrorDiv dynamic-icon-error-div']").siblings()[0]||
(l=!0,x(a,b))},handleColumnCancelFilters:function(a){"undefined"!=typeof pega&&pega.u.d&&setUserStart();doOverlayAction("",a)},handleColumnClearFilters:function(a,b,c){var d=pega.util.Event.getTarget(a),d=$(d).closest("div[node_name\x3d'pzGridFilterPanelWrapper']");v(d);b=pega.ui.tGridInstanceManager.getInstance(b);for(var d=b.getColumns(),e=0;e<d.length;e++)d[e].pyPropertyName==c&&(d[e].isFiltered=!1);b.setColumns(d);y(a);l=!0},validateRange:J,applyFilters:function(a,b){P(a,b)&&(l=!0)},subscribe:function(a,
b,c){a=a.toString();if(k[a])return!1;k[a]={scope:b||window,fn:c};return!0},handleSelected:function(a){$(a.target).is(":checked")||t(a.target)?g(a.target,!1):g(a.target,!0)},onSerachTexChange:function(a){""!==$(a.target).val().trim()||t(a.target)?g(a.target,!1):g(a.target,!0)},onFilterDropDownChange:function(a){a=pega.util.Event.getTarget(a);a=$("[name\x3d'"+a.name+"']");0!==a.selectedIndex||t(a)?g(a,!1):g(a,!0)},handleClearFilter:H,handleCollapseExpandMobile:function(a){setTimeout("pega.ui.FilterUtils.handleCollapseExpand",
500)},submitOverlay:y,unsubscribe:function(a){a=a.toString();return k[a]?delete k[a]:!1},buildFilterBar:function(a,b){var c=a.getFilterBarMarkup();c&&(a=a.getFilterBarGadget())&&(a.classList.add("hide-in-pc"),a.innerHTML=c,K.call(a,b),b||a.classList.remove("hide-in-pc"),pega.ui.template.DataBinder.bindData(document))},deleteFilterBar:function(a,b,c){var d=pega.util.Event.getTarget(c),e,f=$(d).closest("[node_name\x3d'pyFilterBarInner']");e=1==$(d).closest("[node_name\x3d'pyFilterBar']").find("[node_name\x3d'pyFilterBarInner']").length?
"delete-last-filter":"delete-filter";b={pyActivity:"pzDeleteFilterBar",instanceId:a,colName:b};$(f).remove();L(d,"data-click",f);w.show();D("POST",b,{success:function(b){var d=b.responseText.split("#####");b=d[0];d=d[1];pega.ui.tGridInstanceManager.getInstance(a).state.isFiltered=b;G(a,d);l=!0;x(c,a,e)},failure:function(a){console.error("Ajax request fail : "+a)}})},expandNClear:function(a){H(a)},handleRefreshList:F,postFilterValue:function(a){pega.api.ui.actions.postValue(a)},clearAllFilters:function(a){$(".clear-filter-link:visible").each(function(){var a=
$(this).closest("div[node_name\x3d'pzFilterColumns']");v(a);g(this,!0)});m(null,pega.ui.tGridConstants.PXGRID_FILTER_PANEL_CLEARALL_ACTION);pega.util.Event.stopPropagation(a);a.preventDefault();return!1},doFilterPanelActions:m,getExpandedNodesArray:r,getNodeInfo:q,setBusyIndInterval:function(){pega.u.d.gBusyInd&&(C=pega.u.d.gBusyInd.busyIndInterval,pega.u.d.gBusyInd.busyIndInterval=0)},getFilteredColIndex:z}}();
$(document).on("click keypress","div[node_name\x3d'pyModalTemplateFilter'] div[class*\x3d'collapsible']",pega.ui.FilterUtils.handleCollapseExpand);$(document).on("tap","div[node_name\x3d'pyModalTemplateFilter'] div[class*\x3d'collapsible']",pega.ui.FilterUtils.handleCollapseExpandMobile);$(document).on("change","div[node_name\x3d'pyModalTemplateFilter'] input[name*\x3d'GridCascadingMetadata']",pega.ui.FilterUtils.postFilterValue);
$(document).on("blur","div[node_name\x3d'pyModalTemplateFilter'] [name*\x3d'pyFromDate'],div[node_name\x3d'pyModalTemplateFilter'] [name*\x3d'pyToDate']",pega.ui.FilterUtils.postFilterValue);
(function(){var k=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).pzPaginateTemplateNew=k({1:function(b,a,d,c,e){var g;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'\x3cdiv class\x3d"content-item content-field"\x3e\n  \x3cdiv class\x3d"content-inner"\x3e\n    \x3cdiv class\x3d"field-item dataValueWrite"\x3e\n       \x3cbutton type\x3d"button" \n               data-click\x3d\'[["runScript",["paginate(\\"'+b.escapeExpression(b.lambda(null!=
(g=null!=a?c(a,"params"):a)?c(g,"direction"):g,a))+'\\",\\"'+b.escapeExpression(b.lambda(null!=a?c(a,"parentId"):a,a))+'\\",event)"]]]\'     \n               '+(null!=(g=(c(d,"ifCond")||a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=(g=null!=a?c(a,"params"):a)?c(g,"direction"):g,"\x3d\x3d","P",{name:"ifCond",hash:{},fn:b.program(2,e,0),inverse:b.noop,data:e,loc:{start:{line:9,column:15},end:{line:9,column:92}}}))?g:"")+"\n               "+(null!=(g=(c(d,"ifCond")||
a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=(g=null!=a?c(a,"params"):a)?c(g,"direction"):g,"\x3d\x3d","N",{name:"ifCond",hash:{},fn:b.program(4,e,0),inverse:b.noop,data:e,loc:{start:{line:10,column:15},end:{line:10,column:92}}}))?g:"")+'\n               class\x3d"Standard pzhc"\x3e\n               \x3cimg class\x3d"pzbtn-i grid-pg-link" src\x3d"webwb/'+b.escapeExpression(b.lambda(null!=(g=null!=a?c(a,"params"):a)?c(g,"icon"):g,a))+"\" data-click\x3d'.'\x3e\x3c/img\x3e\n       \x3c/button\x3e\n      \x3c/div\x3e\n   \x3c/div\x3e\n\x3c/div\x3e\n"},
2:function(b,a,d,c,e){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return b.escapeExpression(b.lambda(null!=a?d(a,"mbPrevDisabled"):a,a))+" "},4:function(b,a,d,c,e){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return b.escapeExpression(b.lambda(null!=a?d(a,"mbNextDisabled"):a,a))+" "},6:function(b,a,d,c,e){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'         \x3ca href\x3d"javascript:void(0)" \n            data-click\x3d\'[["runScript",["paginate(\\"P\\",\\"'+
b.escapeExpression(b.lambda(null!=a?d(a,"parentId"):a,a))+'\\",event)"]]]\'\n            title\x3d"'+b.escapeExpression(b.lambda(null!=a?d(a,"previousPage"):a,a))+'" \n            aria-label\x3d"'+b.escapeExpression(b.lambda(null!=a?d(a,"previousPage"):a,a))+'"\x3e\n            '+b.escapeExpression(b.lambda(null!=a?d(a,"pyPrevious"):a,a))+"\n         \x3c/a\x3e\n"},8:function(b,a,d,c,e){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'        \x3ca href\x3d"javascript:void(0)" \n          data-click\x3d\'[["runScript",["paginate(\\"1\\",\\"'+
b.escapeExpression(b.lambda(null!=a?d(a,"parentId"):a,a))+'\\",event)"]]]\'\n          class \x3d"grid-pg-link"\n          aria-label\x3d"Page \'1\'"\x3e\n          1\n        \x3c/a\x3e\n        \x3cspan\x3e\n          ...\n        \x3c/span\x3e\n'},10:function(b,a,d,c,e,g,f){var h;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'        \x3ca href\x3d"javascript:void(0)" \n           data-click\x3d\'[["runScript",["paginate(\\"'+b.escapeExpression(b.lambda(a,
a))+'\\",\\"'+b.escapeExpression(b.lambda(null!=f[1]?c(f[1],"parentId"):f[1],a))+'\\",event)"]]]\'\n'+(null!=(h=(c(d,"ifCond")||a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},a,"\x3d\x3d\x3d",null!=f[1]?c(f[1],"currentPageIndex"):f[1],{name:"ifCond",hash:{},fn:b.program(11,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:54,column:11},end:{line:57,column:22}}}))?h:"")+(null!=(h=(c(d,"ifCond")||a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},a,"!\x3d",
null!=f[1]?c(f[1],"currentPageIndex"):f[1],{name:"ifCond",hash:{},fn:b.program(13,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:58,column:11},end:{line:61,column:22}}}))?h:"")+"           \x3e"+b.escapeExpression(b.lambda(a,a))+"\x3c/a\x3e\n"},11:function(b,a,d,c,e,g,f){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'               aria-label\x3d"'+b.escapeExpression(b.lambda(null!=f[1]?d(f[1],"currentPageText"):f[1],a))+". "+b.escapeExpression(b.lambda(null!=
f[1]?d(f[1],"pageText"):f[1],a))+" '"+b.escapeExpression(b.lambda(null!=f[1]?d(f[1],"currentPageIndex"):f[1],a))+"' "+b.escapeExpression(b.lambda(null!=f[1]?d(f[1],"ofText"):f[1],a))+" '"+b.escapeExpression(b.lambda(null!=f[1]?d(f[1],"finalIndex"):f[1],a))+'\'"\n               class \x3d"grid-pg-link selected"\n'},13:function(b,a,d,c,e,g,f){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'               aria-label\x3d"'+b.escapeExpression(b.lambda(null!=
f[1]?d(f[1],"pageText"):f[1],a))+" '"+b.escapeExpression(b.lambda(a,a))+'\'"\n               class \x3d"grid-pg-link"\n'},15:function(b,a,d,c,e){var g;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return null!=(g=(c(d,"if_in")||a&&c(a,"if_in")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"more"):a,"true",!0,{name:"if_in",hash:{},fn:b.program(16,e,0),inverse:b.noop,data:e,loc:{start:{line:69,column:9},end:{line:79,column:19}}}))?
g:""},16:function(b,a,d,c,e){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'             \x3cspan\x3e\n                ...\n             \x3c/span\x3e\n             \x3ca href\x3d"javascript:void(0)" \n                data-click\x3d\'[["runScript",["paginate(\\"'+b.escapeExpression(b.lambda(null!=a?d(a,"finalIndex"):a,a))+'\\",\\"'+b.escapeExpression(b.lambda(null!=a?d(a,"parentId"):a,a))+'\\",event)"]]]\'\n                class \x3d"grid-pg-link"\n                aria-label\x3d"Page \''+
b.escapeExpression(b.lambda(null!=a?d(a,"finalIndex"):a,a))+"'\"\x3e\n                "+b.escapeExpression(b.lambda(null!=a?d(a,"finalIndex"):a,a))+"\n             \x3c/a\x3e\n"},18:function(b,a,d,c,e){d=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'         \x3ca href\x3d"javascript:void(0)"  \n            data-click\x3d\'[["runScript",["paginate(\\"N\\",\\"'+b.escapeExpression(b.lambda(null!=a?d(a,"parentId"):a,a))+'\\",event)"]]]\'\n            title\x3d"'+
b.escapeExpression(b.lambda(null!=a?d(a,"nextPage"):a,a))+'" \n            aria-label\x3d"'+b.escapeExpression(b.lambda(null!=a?d(a,"nextPage"):a,a))+'"\x3e\n            '+b.escapeExpression(b.lambda(null!=a?d(a,"pyNext"):a,a))+"\n         \x3c/a\x3e\n"},20:function(b,a,d,c,e){var g;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'    \x3cdiv class\x3d"content layout-content-inline content-inline grid-mobile-paginator"\x3e\n      '+(null!=(g=(c(d,
"includePartial")||a&&c(a,"includePartial")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},"mbGridpgLink",{name:"includePartial",hash:{icon:"pymenuleftarrow.png",direction:"P"},fn:b.program(21,e,0),inverse:b.noop,data:e,loc:{start:{line:98,column:6},end:{line:98,column:100}}}))?g:"")+"\n      "+b.escapeExpression(b.lambda(null!=a?c(a,"paginationPrefix"):a,a))+" "+b.escapeExpression(b.lambda(null!=a?c(a,"mbStartIndex"):a,a))+" - "+b.escapeExpression(b.lambda(null!=a?c(a,"mbEndIndex"):a,a))+
"\n      "+(null!=(g=(c(d,"includePartial")||a&&c(a,"includePartial")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},"mbGridpgLink",{name:"includePartial",hash:{icon:"pymenurightarrow.png",direction:"N"},fn:b.program(21,e,0),inverse:b.noop,data:e,loc:{start:{line:100,column:6},end:{line:100,column:101}}}))?g:"")+"\n    \x3c/div\x3e\n"},21:function(b,a,d,c,e){return""},compiler:[8,"\x3e\x3d 4.3.0"],main:function(b,a,d,c,e,g,f){var h;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,
b))return a[b]};return(null!=(h=(c(d,"partial")||a&&c(a,"partial")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},"mbGridpgLink",{name:"partial",hash:{},fn:b.program(1,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:3,column:0},end:{line:17,column:12}}}))?h:"")+'\n\n\x3cdiv node_name\x3d"pyGridPaginator" class\x3d"gridActionAlignRight"\x3e\n\n    \x3cdiv id\x3d"grid-desktop-paginator" class\x3d"pagination-links" style\x3d"margin-right:10px;margin-top:5px;"\x3e\n     \n'+(null!=(h=(c(d,"ifCond")||
a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"currentPageIndex"):a,"\x3e",1,{name:"ifCond",hash:{},fn:b.program(6,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:28,column:5},end:{line:35,column:16}}}))?h:"")+"\n"+(null!=(h=(c(d,"ifCond")||a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"currentPageIndex"):a,"\x3e",3,{name:"ifCond",hash:{},fn:b.program(8,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:38,column:5},end:{line:48,
column:16}}}))?h:"")+"     \n"+(null!=(h=(c(d,"for")||a&&c(a,"for")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"startIndex"):a,null!=a?c(a,"lastIndex"):a,1,{name:"for",hash:{},fn:b.program(10,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:51,column:5},end:{line:63,column:13}}}))?h:"")+"     \n     \n     \n"+(null!=(h=(c(d,"ifCond")||a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"currentPageIndex"):a,"!\x3d",null!=a?c(a,"finalIndex"):
a,{name:"ifCond",hash:{},fn:b.program(15,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:68,column:5},end:{line:80,column:16}}}))?h:"")+"     \n"+(null!=(h=(c(d,"ifCond")||a&&c(a,"ifCond")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"currentPageIndex"):a,"!\x3d",null!=a?c(a,"finalIndex"):a,{name:"ifCond",hash:{},fn:b.program(18,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:83,column:5},end:{line:90,column:16}}}))?h:"")+"    \x3c/div\x3e\n   \n   \n"+(null!=(h=(c(d,"if_eq")||
a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"responsive"):a,"true",{name:"if_eq",hash:{},fn:b.program(20,e,0,g,f),inverse:b.noop,data:e,loc:{start:{line:96,column:3},end:{line:102,column:15}}}))?h:"")+"\x3c/div\x3e\n   \n"},useData:!0,useDepths:!0})})();var paginationConstants={PAGE_COUNT:3};
function paginate(k,b,a){b?pega.ui.PaginateUtils.getIsPaginationEnabled()&&(pega.ui.PaginateUtils.setIsPaginationEnabled(!1),pega.ui.PaginateUtils.fire(b,k,a)):console.log("Pagination:paginate():'parentId' is not defined")}function isHybridClient(){return"undefined"==typeof pega.offline||void 0==pega.offline?!1:!0}pega.ui.template.RenderingEngine.register("pxPaginate",function(k,b,a){var d=JSON.parse(k.templatePage.getJSON());d.refId=k.templatePage._ref;d.parentId=a;d.parentRefPath=b;return Handlebars.templates.pzPaginateTemplate(d)});
pega=pega||{};pega.ui=pega.ui||{};
pega.ui.PaginateUtils=pega.ui.PaginateUtils||function(){var k=[],b=!0;return{subscribe:function(a,b,c){a=a.toString();if(k[a])return!1;k[a]={scope:b||window,fn:c};return!0},unsubscribe:function(a){a=a.toString();return k[a]?delete k[a]:!1},fire:function(a,b,c){k[a]&&null!=k[a]&&k[a].scope[k[a].fn].call(this,a,b,this.onSuccessHandler,c)},onSuccessHandler:function(){pega.ui.PaginateUtils.setIsPaginationEnabled(!0)},getIsPaginationEnabled:function(){return b},setIsPaginationEnabled:function(a){b=a}}}();
/*
 * This api is a set of utility functions for template Grid.
 */
pega.namespace("pega.ui");
pega.ui.TemplateGrids = pega.ui.TemplateGrids || (function() {
    var _sortGridColumn = function(event) {
        // BUG-578233 : On resize of column the column is sorted
        // do not sort if sort is triggered while column is resized
        if(!pega.ui.isTGridColumnResizing) {
            var target = pega.util.Event.getTarget(event);
            if(target && (target.className == "JColResizer" || target.className == "JCLRgrip"))//if click is on gripper
                return;
            if (!$(target).is("th")) {
                if ($(target).attr("data-click")) return true;
                target = $(target).parents("th");
            }
            var colIndex = $(target).attr(pega.ui.tGridConstants.PY_DATA_INITIAL_ORDER);
            var uniqueid = $(target).parents("table[uniqueid]").attr("uniqueid");
            return _sortColumnByIndex(colIndex, uniqueid, event);
        }
    };
    var _sortColumnByName = function(propName, uniqueId, event) {
        //Get grid metaData from TemplatesGrid
        var gridInstance = pega.ui.tGrid(uniqueId);
        var gridObjJSON = gridInstance.getMetaData();
        var pyDataCells = pega.ui.tGridMetaDataManager.getGridRowHeader(gridObjJSON);
        var colIndex = 0;
        for (var i = 0; i < pyDataCells.length; i++) {
            if (pyDataCells[i].pyPropertyName == "." + propName || pyDataCells[i].pyPropertyName == propName) {
                colIndex = pyDataCells[i][pega.ui.tGridConstants.PY_INITIAL_ORDER];
                break;
            }
        }
        return _sortColumnByIndex(colIndex, uniqueId, event);
    };
    var _sortColumnByIndex = function(colIndex, uniqueid, event, overrideSortType) {
      var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
        var bSuccess = false;
        //Get grid metaData from TemplatesGrid
        var gridInstance = pega.ui.tGrid(uniqueid);
           if(gridInstance.state.doNotSort){
        delete gridInstance.state.doNotSort ; 
        return;
      }
        var gridObjJSON = gridInstance.getMetaData();
        var gridRowHeader = pega.ui.tGridMetaDataManager.getGridRowHeader(gridObjJSON);
        // Here the colindex is the initial order
        var tgridUtil = pega.ui.tGridUtility;
        var gridCol = tgridUtil.findElementInArray(gridRowHeader,tgridUtil.getGridStateColumn(pega.ui.tGridConstants.PY_INITIAL_ORDER,colIndex));
        var propName = gridCol.pyPropertyName;
        if(gridCol.pyContentType === "SUB_SECTION"){
          propName = gridCol.pySortFilterProperty;
        }
        var sortType = overrideSortType || gridCol.pySortType;
        //If page is empty or propertyName doesn't exist then don't sort
      if (gridObjJSON[TEMPLATE_CONSTANTS["PZGRIDTABLE"]][TEMPLATE_CONSTANTS["PYISDATAPAGEEMPTY"]] == "true" || !propName || propName == "") return;
        //Set appropriate sort type
        if (sortType && sortType == 'ASC') {
            sortType = 'DESC';
        } else {
            sortType = 'ASC';
        }
        if (pega.u.d.ServerProxy && pega.u.d.ServerProxy.isDestinationRemote()) { //Online mode
            bSuccess = _sortServerSide(gridObjJSON, propName, sortType, colIndex, uniqueid,event);
        } else {
          var dataPageName = gridObjJSON[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYDATAPAGENAME"]].split(".")[0];
            var dataType = gridCol.pyDataType;
            var prop = propName.substring(propName.lastIndexOf('.') + 1);
            if (dataType && (dataType == "Integer" || dataType == "Double" || dataType == "Decimal"))
                dataType = "Number";
            //Sort the Data page
            bSuccess = _sortClientSide(dataPageName, prop, sortType, dataType);
            if (bSuccess) {
                //reset hidden rows array
              if(typeof gridInstance.state['pyAllRowsHidden'] !== "undefined"){
           		gridInstance.state['pyAllRowsHidden'] = true;
       		  }
                gridInstance.state.pyHiddenRows = [];
                gridInstance.resetPagingState();
                gridInstance.updateSortState(colIndex, sortType);
                //Refresh grid
                _refreshGrid(uniqueid, pega.ui.tGridConstants.GRID_SORT_ACTION);
                // Focus on the sorted column
                _focusColumnByIndex(colIndex,uniqueid,pega.ui.tGridConstants.GRID_SORT_ACTION);
            }
        }
        return bSuccess;
    };
  
    var _focusGridPaginate = function(eTarget,isBottomDiv,uniqueid){
       // Focus on selected page
        var focusEl,gridInstance = pega.ui.tGridInstanceManager.getInstance(uniqueid);
        var rootMarker = $(gridInstance.getGridElement()).closest(".template-root-marker");   
        var paginateParent = rootMarker.find(isBottomDiv ? ".paging-gadget-bottom:last" : ".paging-gadget-top:first");
        if(eTarget.tagName == 'A'){
         focusEl = paginateParent.find("a[aria-label*='Current Page']")
        }
         // Mobile
       
        else {
           var pText= 'P', nText= 'N',mPaginatorDiv,whichArrow; 
           if(eTarget.tagName == "BUTTON"){
            whichArrow = /('P')/g.test(eTarget.outerHTML)? pText:nText;
           }else{
            whichArrow =  $(eTarget).attr("src") && $(eTarget).attr("src").includes("left") ? pText:nText; 
          }    
          mPaginatorDiv= paginateParent.find(".grid-mobile-paginator");
          focusEl=mPaginatorDiv.find("button[onclick*=\"'"+whichArrow+"'\"]"); 
          if(focusEl.attr("disabled")){
            whichArrow = whichArrow == nText ? 'P':nText;
            focusEl= mPaginatorDiv.find("button[onclick*=\"'"+whichArrow+"'\"]");
          }
        }
        focusEl.focus();
    }
    
    // calculate & returns the slot to which current paginationCurrIndex belongs
    var getGridCurrentPaginationIndexSlot = function(paginationCurrIndex, nextWindowSize) {
       return Math.ceil(paginationCurrIndex / nextWindowSize);
    }
  
  	//Callback function -Function will be triggered when any action is taken from pagination gadget
 var refreshGrid_Paginate = function(uniqueid, str,callbackFun,e) {
   var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
        if(e){ // Focus bringing back to the paginated page
           var eTarget = pega.util.Event.getTarget(e);
           var isBottomDiv = $(eTarget).closest(".paging-gadget-bottom").length;
        }
        var gridInstance = pega.ui.tGrid(uniqueid); //Update Paginate metadata
        var pagingObj = gridInstance.getPaginationState();
      	var pyPageListProperty = gridInstance.getMetaData()[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]];
        gridInstance.synchTotalRecordsWithServer(pyPageListProperty.substring(0, pyPageListProperty.indexOf(".")));
        var remainderZero = 0;
        var oneNum = 1;
   
        var paginationCurrIndex = parseInt(pagingObj[TEMPLATE_CONSTANTS["PYCURRENTPAGEINDEX"]]);
        var pageSize = pagingObj[TEMPLATE_CONSTANTS["PYPAGESIZE"]];
   
        var totalRecords = parseInt(pagingObj.pxTotalResultCount);
        
        var nextWindowSize = parseInt(pega.ui.tGridConstants.PAGINATION_MORE_WINDOW_SIZE);
        var pxCurrentPagingSlot = getGridCurrentPaginationIndexSlot(paginationCurrIndex, nextWindowSize);

        switch (str) {
          case 'P':
          paginationCurrIndex = paginationCurrIndex - oneNum;
          if ((paginationCurrIndex % nextWindowSize) == remainderZero) {
              pxCurrentPagingSlot = pxCurrentPagingSlot - oneNum;
          }
          break;
          case 'N':
            if ((paginationCurrIndex % nextWindowSize) == remainderZero) {
                pxCurrentPagingSlot = pxCurrentPagingSlot + oneNum;
            }
            paginationCurrIndex = paginationCurrIndex + oneNum;
          break;
          case 'NE':
            paginationCurrIndex = (pxCurrentPagingSlot * nextWindowSize) + oneNum;
            pxCurrentPagingSlot = pxCurrentPagingSlot + oneNum;
          break;
          case 'PE':
            paginationCurrIndex = (pxCurrentPagingSlot - oneNum) * nextWindowSize;
            pxCurrentPagingSlot = pxCurrentPagingSlot - oneNum;
          break;
          case 'R':
            paginationCurrIndex = paginationCurrIndex;
            pxCurrentPagingSlot = pxCurrentPagingSlot;
          break;
          default:
            paginationCurrIndex = str;
            pxCurrentPagingSlot = getGridCurrentPaginationIndexSlot(paginationCurrIndex, nextWindowSize);
        }
   
   pagingObj[TEMPLATE_CONSTANTS["PYCURRENTPAGEINDEX"]] = paginationCurrIndex;
        pagingObj[TEMPLATE_CONSTANTS["PXMORE"]] = (pxCurrentPagingSlot * pageSize * nextWindowSize) >= totalRecords ? false : true;
        pagingObj[TEMPLATE_CONSTANTS["PXCURRENTPAGINGSLOT"]] = pxCurrentPagingSlot;
   
        if(typeof gridInstance.state['pyAllRowsHidden'] !== "undefined"){
           gridInstance.state['pyAllRowsHidden'] = true;
         }
          gridInstance.state.pyHiddenRows = {};
   
      var _onPostRefreshGrid = function(responseObj) {
            gridInstance.setPaginationState(pagingObj);
       _refreshGrid(uniqueid, str == 'R'? pega.ui.tGridConstants.GRID_REFRESH_PAGINATE_ACTION: pega.ui.tGridConstants.GRID_PAGINATE_ACTION); //Refersh grid
            if(callbackFun)callbackFun();
            if(eTarget) {
                _focusGridPaginate(eTarget,isBottomDiv,uniqueid);
            }
        }
        
        if (!(pega.u.d.ServerProxy && pega.u.d.ServerProxy.isDestinationLocal())) {//Online case
            var options = {
                uniqueid:uniqueid,
                startIndex: gridInstance.startIndex || ((paginationCurrIndex - oneNum) * pageSize) + oneNum,
                endIndex : gridInstance.endIndex || ((paginationCurrIndex*pageSize) > totalRecords ? totalRecords: (paginationCurrIndex*pageSize)),
                pxPageSize:pageSize, 
              	pxPageIndex:paginationCurrIndex,
                gridAction:pega.ui.tGridConstants.GRID_PAGINATE_ACTION,
                callBack:{
                success: _onPostRefreshGrid,
                failure: pega.ui.tGridUtility.getErrorHandler("refreshGrid_Paginate()")
                }
            };   
          
          
          var isQueryable = gridInstance.getMetaData()["gridWrapper"]["isQueryable"] === "true";
          
          if(isQueryable){
            options.startIndex = 1;
            options.endIndex = pageSize;
          }
            _performGridAjaxAction(options);
        } else {
            _onPostRefreshGrid();
        }
        
    };
  
    var _sortServerSide = function(gridObjJSON, propName, sortType, colIndex, uniqueid, event) {
      var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
      var gridInstance = pega.ui.tGrid(uniqueid);
      var onPostSuccess = function(responseObj) {
        gridInstance.resetPagingState();
        gridInstance.updateSortState(colIndex, sortType);
        _refreshGrid(uniqueid, pega.ui.tGridConstants.GRID_SORT_ACTION); //Refresh grid
        _focusColumnByIndex(colIndex,uniqueid,pega.ui.tGridConstants.GRID_SORT_ACTION); // Focus on the sorted column
        return true;
      };
      var gridWrapper = TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]
      var pyPageListProperty = gridObjJSON[gridWrapper][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]];
      var dataPageName = pyPageListProperty.substring(0, pyPageListProperty.lastIndexOf("."));
      var pagingObj = gridInstance.getPaginationState();        
      //TODO : If filtering is applied, should consider it and unpdate the endIndex accordingly
      var endIndex,pxPageSize;
      if(pagingObj){
        var totalRecords = parseInt(pagingObj.pxTotalResultCount);
        var pageSize = pagingObj[TEMPLATE_CONSTANTS["PYPAGESIZE"]];
        endIndex = (pageSize > totalRecords) ? totalRecords: pageSize;
        pxPageSize = pageSize;
      }else {
        endIndex = gridInstance.getSourceLength(pyPageListProperty, false, false);
        pxPageSize = endIndex;
      }
      
      var target = pega.util.Event.getTarget(event);
      var currentGrid = $(target).closest("table[uniqueid]");//get the grid which triggered the sort
      var pagesToBeRemove = _pagesToRemoveList(currentGrid);
      
        var options = {
          startIndex:1,
          endIndex : endIndex,
          dataPageName:dataPageName,
          //filterIndex: gridObjJSON.filterIndex ? gridObjJSON.filterIndex.toString():undefined,
          gridAction:pega.ui.tGridConstants.GRID_SORT_ACTION,
          implicitSave: gridObjJSON[gridWrapper].isImplicitSaveEnabled,
          uniqueid:uniqueid,
          propName:propName,
          sortType:sortType,
          PagesToRemove:pagesToBeRemove?pagesToBeRemove.toString():"",
	  pxPageIndex:1,
          pxPageSize : pxPageSize,
          callBack : {
          success: onPostSuccess,
          failure: pega.ui.tGridUtility.getErrorHandler("sortServerSide()")
        }
      };
      _performGridAjaxAction(options);
    };
    var _sortClientSide = function(dataPageName, propName, sortType, dataType) {
        return pega.ui.ListUtils.sort(dataPageName, {
            "propName": propName,
            "sortType": sortType,
            "dataType": dataType
        });
    };
  
   /****** 
      Following are the accessibility methods:
      detachFocus(): used to avoid memory leaks due to partial refresh;
      attachFocus(): used to re-attach focus/blur events after partial refresh.
      TODO: when the PegaWAI rule set is re-written, below methods should be removed 
      and the grid should be updated to adopt to new css classes.
    ****/
    var accessibility = pega.ui.Doc && pega.ui.Doc.prototype && pega.ui.Doc.prototype.Axisbility;
    function detachFocus(nodes){
       if(accessibility && typeof accessibility.detachVisualFocus == "function"){
            $.each(nodes,function(index,el){
              el && accessibility.detachVisualFocus(el);
            });
       }
    }
    function attachFocus(nodes){
       if(accessibility && typeof accessibility.attachVisualFocus == "function"){
            $.each(nodes,function(index,el){
              el && accessibility.attachVisualFocus(el);
            });
       }
    }
    /****** END OF Accessibility methods ******/
  
  
   /* This function is used to remove the hidden headers from DOM 
   in case of categorization refresh, since we refresh only data row markup */
   function removeHiddenHeaders(styleElement, gridElement){
     var styles = styleElement.innerHTML;
     var stylesArr = styles.trim().split("\n");
     var headersArr = []; 
     for(var i = 0; i < stylesArr.length; i = i + 2){
       var style = stylesArr[i];
       style = style.substring(0, style.indexOf("{"));
       headersArr.push(gridElement.querySelector(style));
     }
     for(i = 0; i < headersArr.length; i++){
       var header = headersArr[i];
       header.parentNode.removeChild(header);
     }
   }
  
  	/*
    	API to refresh the grid
        uniqueid -  unique id of the Grid.
        action -  action taken from user, Based on action pasrts of the template grid will be refreshed.
  	*/
    var _refreshGrid = function(uniqueid, action) {
        var gridInstance = pega.ui.tGrid(uniqueid);
      
        gridInstance.setSelectedRecord(null);
        //TODO:mircoDC pega.ctx.dom
        var gridEl = $(gridInstance.getGridElement());
        // removing the accessibility keydown and click event listeners
        if(gridEl[0]) {
           gridEl[0].removeEventListener("click",gridInstance.manageFocus,false);
           gridEl[0].removeEventListener("keydown",gridInstance.handleGridkeyPress,false);  
        }
        //Publishing event to cache components
        pega.ui.EventsEmitter.publishSync(pega.u.d.BEFORE_COMPONENT_REFRESH, gridEl[0]);
        var gridParent = gridEl.parent()[0];
        var rootMarker = gridEl.closest(".template-root-marker");
        var sortEl = rootMarker.find(".grid-sorting-gadget")[0];
        var refEl = gridEl.parents("div[id='PEGA_GRID_SKIIN']:first").parent();
        //var refEl = gridEl.parents("div[id='"+gridInstance.refPath+"']");
        var paginateEl = rootMarker.find(".paging-gadget-top:first, .paging-gadget-bottom:last");
        var paginateTop = paginateEl[0];
        var paginateBottom = paginateEl[1]; 
        var gridMarkup, sortMarkup, paginateMarkup;
        action= action? action.toUpperCase():action; // todo: Need to remove
       switch (action) {
            case pega.ui.tGridConstants.GRID_SORT_ACTION:
                gridMarkup = gridInstance.getGridMarkup();
                sortMarkup = gridInstance.getGridSortMarkup();
                detachFocus([paginateTop,paginateBottom,sortEl,gridParent]);
                $(sortEl).html(sortMarkup);
                gridEl.html(gridMarkup);
                if(gridInstance.state.isPagingEnabled !== "false"){
                  paginateMarkup = gridInstance.getGridPaginateMarkup();
                  paginateEl.html(paginateMarkup);
                }
                attachFocus([paginateTop,paginateBottom,sortEl,gridParent]);
                break;
            case pega.ui.tGridConstants.GRID_DELETE_FILTER_ACTION:
                gridMarkup = gridInstance.getGridMarkup();
                detachFocus([gridParent,paginateTop,paginateBottom]);
                gridEl.html(gridMarkup);
                if(gridInstance.state.isPagingEnabled !== "false"){
                  paginateMarkup = gridInstance.getGridPaginateMarkup();
                  paginateEl.html(paginateMarkup);
                }
                attachFocus([gridParent,paginateTop,paginateBottom]);
                break;
            case pega.ui.tGridConstants.GRID_PAGINATE_ACTION:
                gridMarkup = gridInstance.getGridMarkup();
                detachFocus([gridParent]);
                gridEl.html(gridMarkup);
                attachFocus([gridParent]);
            case pega.ui.tGridConstants.GRID_REFRESH_PAGINATE_ACTION:
                detachFocus([paginateTop,paginateBottom]);
                if(gridInstance.state.isPagingEnabled !== "false"){
                  paginateMarkup = gridInstance.getGridPaginateMarkup();
                  paginateEl.html(paginateMarkup);
                }
                attachFocus([paginateTop,paginateBottom]);
                break;
            case pega.ui.tGridConstants.GRID_FILTER_ACTION:
                //refresh paginator
                gridInstance.resetPagingState();
                if(gridInstance.state.isPagingEnabled !== "false"){
                  paginateMarkup = gridInstance.getGridPaginateWrapperMarkup();
                  paginateEl.html(paginateMarkup);
                }else if(paginateEl){
                   paginateEl.html("");
                }
                //display filter pills only if responsiveness is enabled
                var gridMetaData = gridInstance.getMetaData();
                if(gridMetaData["gridWrapper"]["responsive"] === "true"){
                  var hideFilterGadgetInPC = gridMetaData.pyShowFiltersInModal !== "true";
                  pega.ui.FilterUtils.buildFilterBar(gridInstance, hideFilterGadgetInPC);
                  var mobileFilterEl = rootMarker.find(".grid-filtering-gadget")[0];
                  var filterMarkup = gridInstance.getMobileFilterIcon();
                  $(mobileFilterEl).html(filterMarkup);
                }
               
                //refresh table
                gridMarkup = gridInstance.getGridMarkup();
                detachFocus([gridParent]);
                gridEl.html(gridMarkup);
                attachFocus([gridParent]);
                // BUG-705993 : trigger resizeHarness for proper height calculation for mashup configuration
		            if (pega.Mashup){
                  pega.u.d.resizeHarness();
                  
                }
                break;
           case pega.ui.tGridConstants.CATEGORIZE_GRID:
                var pyPageListProperty = gridInstance.state.pageListProp;
                var visibleColumns = gridInstance.state.pyColumns;
                var colCount = 0;
                var fullRefresh = false;
                var groupingInfo = pega.ui.tGridUtility.getContextInfo(pyPageListProperty, gridInstance.getMetaData()["GROUPING_INFO"]);
                if (groupingInfo.columns && gridInstance.getMetaData().gridWrapper.isSortingEnabled) {
                    for (var datacol in visibleColumns) {
                        var index = groupingInfo.columns.indexOf(visibleColumns[datacol].pyPropertyName);
                        if (index !== -1) {
                            colCount += 1;
                            if (visibleColumns[datacol].pySortType) {
                                fullRefresh = true;
                                break;
                            }
                        }
                        if (colCount === groupingInfo.columns.length) {
                            break;
                        }
                    }
                }
           
                //Pagination markup should be updated - BUG-511926
                if(gridInstance.state.isPagingEnabled !== "false"){
                  paginateMarkup = gridInstance.getGridPaginateWrapperMarkup();
                  paginateEl.html(paginateMarkup);
                }else if(paginateEl){
                   paginateEl.html("");
                }
                if (fullRefresh || gridInstance.getMetaData().gridWrapper.isRowSelectionEnabled === "true") {
                    gridMarkup = gridInstance.getGridMarkup();
                    detachFocus([gridParent]);
                    gridEl.html(gridMarkup);
                    attachFocus([gridParent]);
                    if(gridInstance.state.categorizeColumnInd)
                      gridInstance.moveCellFocus(1,parseInt(gridInstance.state.categorizeColumnInd),gridInstance.getGridElement());
                    break;
                }
                var rowMarkup = gridInstance.getDataRowMarkup();
                var gridEl = gridInstance.getGridElement();
                var dataRows = gridEl.querySelectorAll("tr[role='row']");
                Array.prototype.forEach.call( dataRows, function( node ) {
                  node.parentNode.removeChild( node );
                });
                var headerRow = gridEl.querySelector("tr");
                var styleElement = gridEl.querySelector("style");
                //Since header markup is not refreshed in case of categorization, removing the hidden headers from DOM
                if(styleElement){
                  removeHiddenHeaders(styleElement, gridEl);
                  styleElement.parentNode.removeChild(styleElement)
                }
                headerRow.insertAdjacentHTML("afterend", rowMarkup);
                break;
          case pega.ui.tGridConstants.GRID_COLUMNS_SHOW_HIDE:
           if(gridInstance.state.hasNonTemplate){
             _refreshGridByGridObject(gridInstance);
           }
           else{
             gridMarkup = gridInstance.getGridMarkup();
                detachFocus([gridParent]);
                gridEl.html(gridMarkup);
                attachFocus([gridParent]);
           }
           break;
                
          default:
                var rootMarkup = gridInstance.getMarkup();
                var rootParent = refEl.parent();
                detachFocus(rootParent[0]);
                rootParent.html(rootMarkup);
                attachFocus([rootParent]);
                break;
        }   
      
     gridInstance.__fromRefreshGrid = true;
     gridInstance.initializeGridOnloadsWrapper();
     delete gridInstance.__fromRefreshGrid;
     // Publish event post gird action
     if(action){   
     	_publishGridAction("POST",action,gridInstance.uniqueId);
     }
      //Publishing event to clear component from cache
      pega.ui.EventsEmitter.publishSync(pega.u.d.AFTER_COMPONENT_REFRESH, gridEl[0]);
    };
   var updateResult_Count= function(resultLength){
      var countLiveRegion = document.getElementById("resultcount_aria_region");
        if(countLiveRegion) {
             countLiveRegion.textContent = resultLength;
        }
     
   }
   
   var updateCountText = function(uniqueID, countText) {
      var toolbar = pega.ui.tGrid(uniqueID).getToolBar();
      if(toolbar !== null) {
        var countTextElement = pega.ctx.dom.getElementsByClassName("count-text", toolbar);
        if (countTextElement.length > 0) {
          var spanElement = countTextElement[0].children[0];
          if(spanElement) {
            spanElement.innerText = countText;
          }
        }
      }
    }
     
  	//Call function -  Function will be triggered when any action taken on filtering gadget
    var refreshGrid_Filter = function(uniqueId, action,colIndex) {
      var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
      var gridInstance = pega.ui.tGrid(uniqueId);
      var pyPageListProperty = gridInstance.getMetaData()[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] || "";
      var source = pyPageListProperty.substring(0, pyPageListProperty.indexOf("."));
      var isNotFiltered = (gridInstance.state.isFiltered == "false");	
      var filtered_length = gridInstance.getSourceLength();
      var pageName = "GridMetadata_"+uniqueId;
      if(!gridInstance.state.selectedRowsCount > 0){
        updateCountText(uniqueId, filtered_length+" results");
        updateResult_Count(filtered_length+"results");        
      } 
      action = action || pega.ui.tGridConstants.GRID_FILTER_ACTION;
      gridInstance.resetPagingState();
      //Refresh grid
      _refreshGrid(uniqueId, action);
      // Focus on the sorted column
      _focusColumnByIndex(colIndex,uniqueId,pega.ui.tGridConstants.GRID_FILTER_ACTION);
    };
  
  
    /* API to refresh the grid toolbar section */
    var _refreshToolBarSection = function(gridObj){
      var gridElemObj = gridObj.getGridElement();
      var toolBarWrapper = null;
      if(gridElemObj) { toolBarWrapper = gridObj.getToolBar(); }
      if(toolBarWrapper){
        var toolBar = toolBarWrapper.querySelector("div[node_name]");
        if(toolBar){
          pega.u.d.reloadSection(toolBar);
        } 
      }
    }
  
  
  	/*
    	API to focus the row based on the provided postion and layout
      	postion -  before/after  
    */
  	
    var _focusRow = function(position, layoutInfo) {
        var offset = position.offset;
        var $rowNode = $(layoutInfo.rowNode);
       var tableElm = layoutInfo.domNode && layoutInfo.domNode.querySelector ? layoutInfo.domNode.querySelector('table[uniqueid]') : null;
      if(tableElm) {
         var rowFocussed = tableElm.querySelector('.rowFocussed');
         var gridSelected = tableElm.querySelector('.gridCellSelected');
         var currentFocus = rowFocussed ? rowFocussed.getAttribute("aria-rowindex") : 0;
         var olderFocus = gridSelected ? gridSelected.getAttribute("aria-rowindex") : 0;
         if(Number(currentFocus) === Number(olderFocus)+1) {
          offset = 1;
          $rowNode = $(tableElm.querySelector('.gridCellSelected'));
        } else if(Number(currentFocus) === Number(olderFocus)-1) {
          offset = -1;
          $rowNode = $(tableElm.querySelector('.gridCellSelected'));
        } else if(Number(currentFocus) === Number(olderFocus)) {
          offset = 0;
        }  
      }
        if (layoutInfo && layoutInfo.rowNode) {
            var rowNode = null;
            switch (offset) {
                case 0:
                    rowNode = $rowNode;
                    break;
                case 1:
                       rowNode = $rowNode.next();
                    break;
                case -1:
                       rowNode = $rowNode.prev();   
                    break;
              default:
                // do nothing
                break;
            }
            if (rowNode && rowNode.children("th").length == 0) {
                /* Update selected record with current row */
                var uniqueid = $(layoutInfo.domNode).find("table#gridLayoutTable").attr("uniqueid");
                pega.ui.tGrid(uniqueid).focusRow(rowNode,true);
                
            }
        }
    };
    //Row context object, It will hold the information about action and active row and its attributes
    var actUponRowCtx = {};
  
  	//Open dialog box to edit a row
    var _editrow = function(e, layoutInfo) {
        var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS;
        actUponRowCtx.action = "editrow";
        var uniqueid = $(layoutInfo.domNode).find("table#gridLayoutTable").attr("uniqueid");
        var gridInstance = pega.ui.tGrid(uniqueid);
        var pzRowOperations = pega.ui.tGridMetaDataManager.getRowOperations(gridInstance.instanceId);
        //Store the uniqueId and Row index for refreshRow callback
        //TODO -  Move the below 2 args to instanceManager and GridInstance
        actUponRowCtx.uniqueid = uniqueid;
        actUponRowCtx.base_ref = pega.u.d.getBaseRef($(layoutInfo.rowNode).children(0).get(0));
        if (pzRowOperations) {
            var flowActionName = pzRowOperations[TEMPLATE_CONSTANTS["PYFANAME"]];
            var modalTemplate = pzRowOperations[TEMPLATE_CONSTANTS["PYTEMPLATENAME"]];
            var modalStyle = pzRowOperations.pyModalFormat;
            var paramURL = new SafeURL();
            paramURL.put("ShowOnlyOKCancel", true);
            paramURL.put("BaseReference", actUponRowCtx.base_ref);
            pega.u.d.processAction(flowActionName, "", "", "", "", true, e, modalTemplate, paramURL, "",
                false, modalStyle);
        }
    };
  
    var _refreshList = function(event,source, layoutInfo){
        var grid;
        //If event is from inside grid, then layout Info is available, otherwise get it based on source
        if( layoutInfo && layoutInfo.domNode &&(!source || (layoutInfo.rowRef && layoutInfo.rowRef.indexOf(source) != -1))){
          /*
          Usecase1 : When refreshList is triggered from inside grid in row context with or without specifying source
          Usecase2 : When refreshList is triggered from inside personalization section and source is not specified
          */
          grid = pega.ui.tGrid.getGridByLayoutInfo(layoutInfo);
        }else{
          /*
          Usecase1 : When refreshList is triggered from outside grid in which case layout info is not available - (with or without source)
          Usecase2 : When refreshList is triggered from personalization section and source is specified
          */
          grid = pega.ui.tGrid.getGridBySource(source, null, event);
        }
        /*If no grid exists then do nothing*/
        if (!grid) {
            console.warn("No grid exists with source :"+ source);
            return false;
        }
        _refreshGridByGridObject(grid);
    }; 
  /*
  * Parameter source : data page name
  * sectionName : name of the section
  * Usage : pega.ui.TemplateGrids.refreshGridInSection("Refresh", "D_EmpList")
  */

  var _refreshGridInSection = function(sectionName, source){ 
       if(!(sectionName && source)){
         console.warn("Specify both the section name and source name");
         return;
       }
       var sectionNode = pega.ctx.dom.querySelector("div[node_name ="+sectionName+"]");
        if(sectionNode){
            var grid = pega.ui.tGrid.getGridBySource(source,sectionNode);
            /*If no grid exists then do nothing*/
            if (!grid) {
              console.warn("No grid exists with source :"+ source);
             return false;
              }
    _refreshGridByGridObject(grid);
        }else{
           console.warn("No Section exists with the given Name : "+ sectionName);
       }
  };
  var _refreshGridByGridObject = function(grid){
    var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
      var action = pega.ui.tGridConstants.GRID_REFRESHLIST;
      var pyPageListProperty = grid.getMetaData()[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] || "";
      var source = pyPageListProperty.substring(0, pyPageListProperty.indexOf("."));
      if(pega.u.d.ServerProxy && pega.u.d.ServerProxy.isDestinationRemote()){//online case
        //pega.ui.TemplateEngine.invalidateDataSource && pega.ui.TemplateEngine.invalidateDataSource(source);
        pega.ui.FilterUtils.handleRefreshList(grid.uniqueId,action,source);
      }else{
        _refreshGrid(grid.uniqueId, pega.ui.tGridConstants.GRID_PAGINATE_ACTION);        
      }
  };
  
  //AddRow post-processing - Server call to for change track the records and add a new DOM row to grid
    var _addRow = function(skipModal, rowClass, pyDataTransform) {
      var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
       var gridInstance = pega.ui.tGrid(actUponRowCtx.uniqueid);
       var gridMetaData = gridInstance.getMetaData();
       var pyPageListProperty = gridMetaData[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] || "",
           base_ref = actUponRowCtx.base_ref || "";
       var rowIndex = base_ref.substring(base_ref.lastIndexOf("(")+1 , base_ref.lastIndexOf(")"));
       var lastDomRowIndex = actUponRowCtx.lastDomRowIndex;
       lastDomRowIndex = lastDomRowIndex ? 
                         lastDomRowIndex.substring(lastDomRowIndex.lastIndexOf("(")+1 , lastDomRowIndex.lastIndexOf(")")) : 0;
       actUponRowCtx.lastDomRowIndex = lastDomRowIndex;
       var newArraysNeeded = getArraysForAdd(gridInstance, gridMetaData, rowIndex);
       var arrToBeChangeTracked = newArraysNeeded.arrToBeChangeTracked;
       var newFilterIndices = newArraysNeeded.newFilterIndices;
       actUponRowCtx.source = pyPageListProperty.substring(0, pyPageListProperty.indexOf("."));
       var onPostSuccess = function(responseObj) {
           if (!_handleErrorAfterPartialSuccess(responseObj) && responseObj.responseText.indexOf("ERRORTABLE") === -1) {
               var grid = pega.ui.tGrid(actUponRowCtx.uniqueid);
               var addedRow = grid.addRow(actUponRowCtx.rowNode, actUponRowCtx.isBelow);
               grid.focusRow(addedRow);
               if(gridMetaData.pxFilterConditionId){
                pega.ui.tGrid.setFilterRecordsIndices(pyPageListProperty, gridMetaData.pxFilterConditionId, newFilterIndices);
                if(grid.getGridRows().length === 1){
                 pega.ui.tGrid.setFilterRecordsCount(actUponRowCtx.source, gridMetaData.pxFilterConditionId, 1);  
                } 
               }
               grid.synchTotalRecordsWithServer(actUponRowCtx.source);
               actUponRowCtx = {};
           }
       }
       var options = {
         arrToBeChangeTracked: arrToBeChangeTracked,
         rowIndex:rowIndex,
         uniqueid:actUponRowCtx.uniqueid,
         gridAction: pega.ui.tGridConstants.GRID_ADDITEM_ACTION,
         skipModal : skipModal,
         rowClass : rowClass,
         modal : pyDataTransform,
         IntermediatePageName : pega.ui.tGridConstants.ADD_NEW_PAGE,
         callBack :{
         success: onPostSuccess,
         failure: pega.ui.tGridUtility.getErrorHandler("addRow()")
       }
     };
      _performGridAjaxAction(options);
   };
    //Opens dialog box in context of intermediate page to compose a new row
      var _composeRow = function(argList){    
      var event = argList.event , layoutInfo = argList.layoutInfo;
      var source = argList.source , position = argList.position;
      var flowActionName = argList.flowActionName, templateName = argList.templateName;
      var skipModal = argList.skipModal ,  pyDataTransform = argList.pyDataTransform;
      var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
      var grid, baseRef, isBelow, row, lastDomRowIndex,rowClass;
        isBelow = (pega.ui.tGridConstants.BELOW == position);
        //If event is from inside grid, then layout Info is available, otherwise get it based on source
        if(layoutInfo && layoutInfo.domNode && layoutInfo.rowRef &&(!source || layoutInfo.rowRef.indexOf(source) != -1)){
            /*
            Usecase1 : When add action is triggered from inside grid in row context with or without specifying source
            */
            grid = pega.ui.tGrid.getGridByLayoutInfo(layoutInfo);
            row = layoutInfo.rowNode;
            baseRef = layoutInfo.rowRef;
            baseRef = pega.ui.tGridUtility.getIncrimentedBaseRef(baseRef, isBelow ? 1 : 0);
        } else{
            /*
            Usecase1 : When add action is triggered from outside grid in which case layout info is not available - (with or without source)
            Usecase2 : When add action is triggered from inside personalization section with or without specifying source
            */
            grid = pega.ui.tGrid.getGridBySource(source);
        }
        //If no grid exists then do nothing
        if (!grid) {
            console.warn("No grid exixts");
            return false;
        }
        //Get row and base_ref in case layout info is null
        var rows = grid.getGridRows();
        if(!row){
           baseRef =  baseRef || grid.state.pySelectedRecord;
           if(baseRef) {
               row = grid.getRowNodeFromBaseRef(baseRef);
           }else if(rows.length > 0){
               row = isBelow ? rows.last() : rows.first();
               baseRef = pega.u.d.getBaseRef(row.children(0).get(0));
           }
           if(baseRef) {
             baseRef = pega.ui.tGridUtility.getIncrimentedBaseRef(baseRef, isBelow ? 1 : 0);
           }
        }
      
        //if none exists (i.e. empty grid), use har coded baseref from source or metadata.
        if(rows.length == 0){
           baseRef = grid.getMetaData()[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] + "(1)";
        }
        //Get the last row base ref index to change track
        if (rows.length) {
           lastDomRowIndex = pega.u.d.getBaseRef(rows.last().children(0).get(0));
        }	
        //Get flowAction and template from grid if not defined in Add Item action 
        var gridMetaData = grid.getMetaData();
        skipModal = skipModal || "false";
        //skip modal dialogue if skipModal = true
        if(skipModal === "false"){
          var pzRowOperations = gridMetaData[TEMPLATE_CONSTANTS["PZROWOPERATIONS"]];
          if (pzRowOperations) {
            flowActionName = flowActionName || pzRowOperations[TEMPLATE_CONSTANTS["PYFANAME"]];
            templateName = templateName || pzRowOperations[TEMPLATE_CONSTANTS["PYTEMPLATENAME"]];
          }
          if (!flowActionName) {
            console.warn("Flow action doesn't exists");
            return false;
          }
        }
        var gridWrapper = TEMPLATE_CONSTANTS["PZGRIDWRAPPER"];
        rowClass = gridMetaData[gridWrapper][TEMPLATE_CONSTANTS["PYRESULTSCLASS"]];
        actUponRowCtx.rowNode = row;
        actUponRowCtx.action = "addrow";
        actUponRowCtx.uniqueid = grid.uniqueId + "";
        actUponRowCtx.instanceId = grid.instanceId;
        actUponRowCtx.base_ref = baseRef;
        actUponRowCtx.isBelow = isBelow;
        actUponRowCtx.lastDomRowIndex = lastDomRowIndex;
        var pyPageListProperty = gridMetaData[gridWrapper][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] || ""; 
        var urlObj = new SafeURL();
        urlObj.put("pyActivity", pega.ui.tGridConstants.ADD_PRE_ACTIVITY);
        urlObj.put("rowClass", rowClass);
        urlObj.put("modal", pyDataTransform || "pyDefault");
        urlObj.put("IntermediatePageName", pega.ui.tGridConstants.ADD_NEW_PAGE);
        urlObj.put("PageListProperty", pyPageListProperty);
        urlObj.put("DSName", pyPageListProperty);
        var options = {
            mTObjClass: rowClass,
            fAObjClass: rowClass,
            isLocalAction: "true",
            doNotRefresh: true};
        if(skipModal === "false"){
          pega.u.d.processAction(flowActionName, "", "Rule-Obj-FlowAction", "", "", true, event, templateName,
            urlObj, null, null, "", null, options, false);
        }else{
          _addRow(skipModal, rowClass, pyDataTransform);
        }
    };
    function getArraysForAdd(gridInstance, gridMetaData, rowIndex){
      var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS;
      var pyPageListProperty = gridMetaData[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] || "";
      var isPaginationEnabled = gridMetaData[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["ISPAGINGENABLED"]]
      var pageSize, currentPageIndex, pxTotalResultCount;
      isPaginationEnabled = (isPaginationEnabled === "true");
      if(isPaginationEnabled){
        pageSize = parseInt(gridMetaData[TEMPLATE_CONSTANTS["PYPAGINGSETTINGS"]][TEMPLATE_CONSTANTS["PYPAGESIZE"]]);
        currentPageIndex = parseInt(gridMetaData[TEMPLATE_CONSTANTS["PYPAGINGSETTINGS"]][TEMPLATE_CONSTANTS["PYCURRENTPAGEINDEX"]]);
        pxTotalResultCount = gridMetaData[TEMPLATE_CONSTANTS["PYPAGINGSETTINGS"]].pxTotalResultCount;
      }
      var indexForAdd = parseInt(rowIndex);
      var count,i;
      //Populate the array to be change tracked and the new filter indices
      var arrToBeChangeTracked = [], newFilterIndices = [];
      arrToBeChangeTracked.push(indexForAdd);   
      if(gridMetaData.pxFilterConditionId){ //If filter condition is present - server row visibility or filter enabled
        var indices = pega.ui.tGrid.getFilterRecordsindices(pyPageListProperty, gridMetaData.pxFilterConditionId);
        indices[0] === "" ? indices="" : "";
        var indicesLength = indices.length;
        // Push all the indices before the newly added record to the new filter indices
        for(i=0; i<indicesLength; i++){
            if(indices[i] >= indexForAdd)
              break;
            newFilterIndices.push(indices[i]);
        }
        //Push the newly added record index to the new filter indices
          newFilterIndices.push(indexForAdd);
        //Push all the indices after the newly added record to the new filter indices and the array to be change tracked
        for(; i<indicesLength; i++){
          arrToBeChangeTracked.push(indices[i]+1);
          newFilterIndices.push(indices[i]+1);
        }
      } 
      else if(!isPaginationEnabled){
           //If pagination not enabled, push all the records after the inserted record
           var resultsCount = gridInstance.getSourceLength(gridMetaData,false,false);
           for(i=indexForAdd+1;i<=resultsCount+1;i++){
             arrToBeChangeTracked.push(i);
           }
      }
      else{
        //If pagination is enabled, push the records after the inserted record in the current page window
        count = pageSize*currentPageIndex;
        for(i=indexForAdd+1;i<=count && i<=pxTotalResultCount+1 ;i++){
          arrToBeChangeTracked.push(i);
        }
      }
      return {
        arrToBeChangeTracked: arrToBeChangeTracked,
        newFilterIndices: newFilterIndices
      }
    }
    
  var _updateRowContents = function() {
       var gridInstance = pega.ui.tGrid(actUponRowCtx.uniqueid);       
       var base_ref = actUponRowCtx.base_ref || "",
           //rowIndex = base_ref.split(/[\(,\)]/)[1]; //parse
           rowIndex = base_ref.substring(base_ref.lastIndexOf("(")+1 , base_ref.lastIndexOf(")"));
       var onPostSuccess = function(responseObj) {
        if (!_handleErrorAfterPartialSuccess(responseObj) && responseObj.responseText.indexOf("ERRORTABLE") === -1) {
          gridInstance.refreshRow(base_ref);
        }
      };
       var options = {
         Index:rowIndex,
         uniqueid:actUponRowCtx.uniqueid,
         gridAction: pega.ui.tGridConstants.GRID_EDITITEM_ACTION,
         callBack :{
         success: onPostSuccess,
         failure: pega.ui.tGridUtility.getErrorHandler("updateRowContents()")
       }
     };
      _performGridAjaxAction(options);
   };
    //delete row - pre-processing
    var _deleterow = function(e, layoutInfo, showConfirmBox) {
        var uniqueid = $(layoutInfo.domNode).find("table#gridLayoutTable").attr("uniqueid");
        actUponRowCtx = {
            "uniqueid": uniqueid,
            action: "deleterow",
            "rowNode": $(layoutInfo.rowNode),
            "base_ref": layoutInfo.rowRef
        };
        var flowActionName = "pzNextGenGridDeleteFA",
            modalTemplate = "pyNextGenGridDeleteModalTemplate";
        if ("true" == showConfirmBox) {
            pega.u.d.processAction(flowActionName, "", "", "", "", true, e, modalTemplate, "", "", false, "");
        } else {
            _onDeleteRow();
        }
    }
  function onDeleteSuccess(responseObj){
    if (!pega.u.d.handleErrorAfterPartialSuccess(responseObj) && responseObj.responseText.indexOf("ERRORTABLE") === -1) {
        pega.ui.tGrid(actUponRowCtx.uniqueid).deleteRow(actUponRowCtx.rowNode, actUponRowCtx.source,actUponRowCtx.isLastRow);
        actUponRowCtx = {};
    }
  }  
  
  function moveToPrevPage(pagingObj){
    var TCONST = pega.ui.TEMPLATE_CONSTANTS;
    var totalRecords = +pagingObj.pxTotalResultCount;
    var pageSize = +pagingObj[TCONST.PYPAGESIZE];
    var pgCurrIndex = parseInt(pagingObj[TCONST.PYCURRENTPAGEINDEX]);
    
    var totalPages = Math.ceil(totalRecords/pageSize);
    var rowsInLastPage = totalRecords%pageSize;
    var isLastPage = pgCurrIndex == totalPages;
    var morePages = totalPages>1;

    if(morePages && isLastPage && rowsInLastPage == 1){
       return true;
    }else{
      return false;
    }
  }
 
  var _onDeleteRow = function(){
    var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
     var gridInstance = pega.ui.tGrid(actUponRowCtx.uniqueid);
     var gridObj = gridInstance.getMetaData();
     var pyPageListProperty = gridObj[TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]] || "",
         base_ref = actUponRowCtx.base_ref || "",
         rowIndex = base_ref.substring(base_ref.lastIndexOf("(")+1 , base_ref.lastIndexOf(")"));
    var totalRecords,pageSize,paginationCurrIndex,pxCurrentPagingSlot,goToPrevPage,isLastRow;
    var options = {
        rowIndex: rowIndex,
        baseRef: base_ref,
        uniqueid: actUponRowCtx.uniqueid,
        gridAction: pega.ui.tGridConstants.GRID_DELETEITEM_ACTION,
        callBack : {
          success: onDeleteSuccess,
          failure: pega.ui.tGridUtility.getErrorHandler("onDeleteRow()")
      } 
     };   
    
     var dataPageName = pyPageListProperty.split(".")[0];
     var pagingObj = gridInstance.getPaginationState();
    
     if (pagingObj) {
        totalRecords = parseInt(pagingObj.pxTotalResultCount);
        pageSize = pagingObj[TEMPLATE_CONSTANTS["PYPAGESIZE"]];
        paginationCurrIndex = parseInt(pagingObj[TEMPLATE_CONSTANTS["PYCURRENTPAGEINDEX"]]);
        pxCurrentPagingSlot = parseInt(pagingObj[TEMPLATE_CONSTANTS["PXCURRENTPAGINGSLOT"]]);
        //var filterIndices = gridInstance.getFilterIndices();
        if (gridObj.pxFilterConditionId) {
          goToPrevPage = moveToPrevPage(pagingObj); // make 2 to 1
          if (goToPrevPage) {
            options.pxPageIndex = paginationCurrIndex - 1;
            options.pxPageSize = pageSize;
          }else {
            options.pxPageIndex = paginationCurrIndex;
            options.pxPageSize = pageSize;
          }
          isLastRow = totalRecords==1; 
       }else{ 
        options.startIndex = ((paginationCurrIndex - 1) * pageSize) + 1;
        options.endIndex = (paginationCurrIndex * pageSize) > totalRecords ? totalRecords : (paginationCurrIndex * pageSize);
        isLastRow = options.endIndex == 1;  
       }
       
    } else {
      options.startIndex = 1;
      totalRecords = options.endIndex = gridInstance.getSourceLength(pyPageListProperty,false, false);
      isLastRow = options.endIndex === 1;
    }
    
    if(!isLastRow && (options.endIndex == totalRecords)){
      options.endIndex -=1;
    }
         
    actUponRowCtx.isLastRow = isLastRow;
    actUponRowCtx.source = pyPageListProperty.substring(0, pyPageListProperty.indexOf("."));

    _performGridAjaxAction(options);
  };
  
 var _pagesToRemoveList = function(node){
   var pagesToBeRemove = [];
   /*check all nested sections and get if they have any remove pages being added*/
      $(node).find("table[uniqueid]").each(function() {
          var uniqueid = $(this).attr("uniqueid");
          var secId = $(this).closest("div[uniqueid]").attr("uniqueid");
          if (uniqueid) {
            pagesToBeRemove.push(pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE+uniqueid);
          }
        delete pega.u.template.utility.pagesToRemoveMap[secId];
        pega.u.template.utility.removeRefsOfSection(secId);
      });
      //TODO:microDC -pega.ctx.dom
     pega.u.template.utility.removePageRefs(pagesToBeRemove.toString(), $(pega.ctx.dom.getElementById("pzHarnessID")).attr("value"));
   return pagesToBeRemove;
 };
    
    //ModalDialog Action APIS
    var _submitModelDialog = function(e) {
        var bModelReload = false;
        pega.u.d.submitModalDlgParam.bReload = bModelReload;
        doModalAction(pega.u.d.submitModalDlgParam, e);
    };
    var _cancelModelDialog = function(e) {
        if (actUponRowCtx.action === "addrow") {
            pega.ui.tGridUtility.removePage("IntermediateAddPage", function() {
                console.info("Grid::removePage(): Cancel Success");
            });
        }
        doModalAction("", e);
    };
    var _refreshRow = function() {
        //Call a activity to change track the values.
        var strActionSF = SafeURL_createFromURL(pega.u.d.url);
        strActionSF.put("pyActivity", "pzGetChangeTrackJSON");
        var onPostSuccess = function(responseObj) {
            //Calling row Refresh
            var grid = pega.ui.tGrid(actUponRowCtx.uniqueid);
            if (grid && actUponRowCtx.base_ref) {
                grid.refreshRow(actUponRowCtx.base_ref);
                actUponRowCtx = {};
            }
        }
        var callBack = {
            success: onPostSuccess,
            failure: pega.ui.tGridUtility.getErrorHandler("onDeleteRow()")
        };        
        pega.u.d.asyncRequest('POST', strActionSF, callBack);
    };
    var _processGridActions = function() {
        if (!pega.u.d.bModalDialogOpen) {
            var action = actUponRowCtx.action;
            if (action == "editrow") {
              _updateRowContents();  
              
            } else if (action == "addrow") {
                _addRow();
            } else if (action == "deleterow") {
                _onDeleteRow();
            }else if (action == "OPENLOCALACTION") {
               _updateRowContents();
            }
        }
    };
  var _focusColumnByIndex = function(colIndex,uniqueId,action) {
    var gridInstance = pega.ui.tGridInstanceManager.getInstance(uniqueId);
    var gridEl =  gridInstance.getGridElement();
    var focusEle,rootMarker;
    switch( action ) {
      case pega.ui.tGridConstants.GRID_SORT_ACTION:
      focusEle = gridEl.querySelector("th[data-initialorder='"+colIndex+"']");
        if(focusEle && getComputedStyle(focusEle.parentElement).display === 'none'){
           rootMarker = gridEl.closest(".template-root-marker");
           focusEle = rootMarker.querySelector(".sortable-parent");
        }
        /** changes start **/
         if(gridEl.querySelector("th.gridCell[tabindex='0']")) 
         gridEl.querySelector("th.gridCell[tabindex='0']").setAttribute("tabindex","-1");
         // below if condition will be false in case of mobile
         if(focusEle && focusEle.querySelector(".gridHeaderLabel")) {
            focusEle.querySelector("a[class='columnMenu']").focus();  
         }
        /** changes ends. **/
        /** Live sort update changes start. Let screen readers announce the Sorting **/
        var sortOrder = gridEl.querySelector("th[data-order='" + colIndex + "']") ? gridEl.querySelector("th[data-order='" + colIndex + "']").getAttribute("aria-sort") : null;
        var gridLive = document.querySelector("#GridLiveUpdate")
        if(sortOrder === "ascending") {
           gridLive.textContent="";
           gridLive.textContent="Sorted in Ascending order";
        } else if(sortOrder === "descending") {
          gridLive.textContent="";
           gridLive.textContent="Sorted in Descending order";
        }
        /** Live sort update changes ends **/
        return;
      break;
      case pega.ui.tGridConstants.GRID_FILTER_ACTION:
     if( colIndex === -1) {
        rootMarker = gridEl.closest(".template-root-marker");
        focusEle = rootMarker.querySelector("i[class*='filter']").parentElement;
      }
      else {
         if(gridEl)
        var filteredCol = gridEl.querySelector("th[data-initialorder='"+colIndex+"']");
        if(filteredCol)
          focusEle = filteredCol.querySelector("a[class='columnMenu']");
      }
        break;
    }
      if(focusEle)
       focusEle.focus();
   };
  
  /**
   Wrapper for all the list actions like paginate,sort,add item, delete item,filter.
  **/
   var _performGridAjaxAction = function(options) {
     var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS; 
     var gridInstance = pega.ui.tGrid(options.uniqueid);
     var pyExpressionId = gridInstance.state['pyExpressionId'];
     var restoreHiddenRowsFlag = (typeof gridInstance.state['pyAllRowsHidden'] !== "undefined" && pyExpressionId);
     var tableElem = gridInstance.getGridElement();
     var gridWrapper = TEMPLATE_CONSTANTS["PZGRIDWRAPPER"];
     var strActionSF = SafeURL_createFromURL(pega.u.d.url);
     var metadata = gridInstance.getMetaData();
     var pyPageListProperty = metadata[gridWrapper][TEMPLATE_CONSTANTS["PYPAGELISTPROPERTY"]];
     strActionSF.put("pyActivity", pega.ui.tGridConstants.ACTION_ACTIVITY);
     strActionSF.put("listAction", options.gridAction);
     /* BUG-786005 - START: Passing custom error section details */
     var harCtxMgr = pega.ui.HarnessContextMgr;
     if(harCtxMgr) {
       var fieldErrorType = harCtxMgr.get("fieldErrorType");
       var formErrorType = harCtxMgr.get("formErrorType");
       var pyCustomError = harCtxMgr.get("pyCustomError");
       if(formErrorType === "NONE" && pyCustomError != "") {
         strActionSF.put("FieldError", fieldErrorType);
         strActionSF.put("FormError", formErrorType);
         strActionSF.put("pyCustomError", pyCustomError);
       }
     }
     /* BUG-786005 - END */
     
     //Implict save parameter
     if(metadata[gridWrapper].isImplicitSaveEnabled === "true"){
       if(options.implicitSave){
         strActionSF.put("implicitSave", options.implicitSave);
       }
     }
     options.isQueryable = metadata[gridWrapper].isQueryable || "false";
     strActionSF.put("instanceId",options.uniqueid);
     strActionSF.put("UITemplatingStatus","Y");
     strActionSF.put("PagesToRemove",options.PagesToRemove?options.PagesToRemove:"");
     strActionSF.put("pxPageIndex", options.pxPageIndex?options.pxPageIndex :-1);
     strActionSF.put("pxPageSize",options.pxPageSize?options.pxPageSize :-1);
          
     switch(options.gridAction)
     {
      case pega.ui.tGridConstants.GRID_PAGINATE_ACTION:
          strActionSF.put("startIndex", options.startIndex);
          strActionSF.put("endIndex", options.endIndex);
         if(restoreHiddenRowsFlag){
           gridInstance.state['pyAllRowsHidden'] = true;
         }
         gridInstance.state.pyHiddenRows = {};
         if(metadata[TEMPLATE_CONSTANTS["PYPAGINGSETTINGS"]])
         strActionSF.put("pxPageMode", metadata[TEMPLATE_CONSTANTS["PYPAGINGSETTINGS"]][TEMPLATE_CONSTANTS["PYPAGINATIONMODE"]]);
         strActionSF.put("isQueryable", options.isQueryable);
      break;
      case pega.ui.tGridConstants.GRID_SORT_ACTION:
          strActionSF.put("sortProperty", options.propName);
          strActionSF.put("sortType", options.sortType);
          strActionSF.put("dataPageName", options.dataPageName);
          strActionSF.put("startIndex", options.startIndex);
          strActionSF.put("endIndex", options.endIndex);
         if(restoreHiddenRowsFlag){
           gridInstance.state['pyAllRowsHidden'] = true;
         }
          gridInstance.state.pyHiddenRows = {};
         strActionSF.put("isQueryable", options.isQueryable);
      break;
      case pega.ui.tGridConstants.GRID_FILTER_ACTION: 
          gridInstance.state.pyHiddenRows = {};
          if(restoreHiddenRowsFlag){
           gridInstance.state['pyAllRowsHidden'] = true;
         }
          options.sortProperty?strActionSF.put("sortProperty", options.sortProperty):"";
          options.sortType?strActionSF.put("sortType", options.sortType):"";
          strActionSF.put("isQueryable", options.isQueryable);
      break;
      case pega.ui.tGridConstants.GRID_ADDITEM_ACTION:
          strActionSF.put("arrToBeChangeTracked", options.arrToBeChangeTracked.toString());
          strActionSF.put("Index", options.rowIndex);
          options.rowClass && strActionSF.put("rowClass", options.rowClass);
          options.modal && strActionSF.put("skipModal", options.skipModal);
          options.skipModal && strActionSF.put("modal", options.modal);  
          if(!options.skipModal || options.skipModal === "false") {
            strActionSF.put("pzPrimaryPageName", pega.ui.tGridConstants.ADD_NEW_PAGE);
          }
          strActionSF.put("IntermediatePageName", pega.ui.tGridConstants.ADD_NEW_PAGE);
       break;
       case pega.ui.tGridConstants.GRID_DELETEITEM_ACTION: 
         strActionSF.put("BaseReference", options.baseRef);
         strActionSF.put("Index", options.rowIndex);      
         options.startIndex && strActionSF.put("startIndex", options.startIndex);
         options.endIndex && strActionSF.put("endIndex", options.endIndex);
         options.pxPageIndex && strActionSF.put("pxPageIndex", options.pxPageIndex);
         options.pxPageSize && strActionSF.put("pxPageSize", options.pxPageSize);
        break;
        case pega.ui.tGridConstants.GRID_EDITITEM_ACTION: 
          strActionSF.put("Index", options.Index);      
        break;
         case pega.ui.tGridConstants.GRID_UPDATE_COLSTATE: 
          strActionSF.put("pyColumns", options.pyColumns); 
          options.pyGridMinWidth && strActionSF.put("pyGridMinWidth", options.pyGridMinWidth); 
        break;
         case pega.ui.tGridConstants.GRID_COLUMNS_SHOW_HIDE:
         strActionSF.put("doRefresh", options.doRefresh);
         options.pxPageIndex && strActionSF.put("pxPageIndex", options.pxPageIndex);
         options.pxPageSize && strActionSF.put("pxPageSize", options.pxPageSize);
          /*** TODO Remove this parameter after personalization section is deprecated ***/
          strActionSF.put("doPostValueOnToggle", options.doPostValueOnToggle);
          if(options.doPostValueOnToggle === "true"){
             strActionSF.put("pyShow", options.pyShow);
             strActionSF.put("colIndex", options.colIndex);
             strActionSF.put("isFromHideCol", options.isFromHideCol);
          }
          break;
         case pega.ui.tGridConstants.GRID_SAVE_PERSONALIZATION: 
         //For now, there are no specific paramets for personalization.
        break;
       case pega.ui.tGridConstants.UPDATE_ROWHEIGHT: 
        strActionSF.put("pyGridRowHeight", options.rowheight);
        break;
        
       case pega.ui.tGridConstants.DELETE_VIEW :
        strActionSF.put("sectionContext", gridInstance.state.sectionContext);
        break;
       case pega.ui.tGridConstants.SWITCH_VIEW :
        strActionSF.put("sectionContext", gridInstance.state.sectionContext);
        strActionSF.put("pyPersonalizedName", options.pyPersonalizedName);
        break;
         
       case pega.ui.tGridConstants.GRID_DISCARD_OR_RESET:
        strActionSF.put("dicardPersonalization", options.isDiscard);
        strActionSF.put("sectionContext", gridInstance.state.sectionContext);
        break;
       case pega.ui.tGridConstants.CATEGORIZE_GRID :
        strActionSF.put("categorizeAction", options.categorizeAction);
        strActionSF.put("rowNumber", options.rowNumber);
        strActionSF.put("doRefresh", options.doRefresh);
        strActionSF.put("isQueryable", options.isQueryable);
        break;
       case pega.ui.tGridConstants.GRID_REORDER_ACTION :
        strActionSF.put("fromFullRefToPageList", options.fromFullRefToPageList);
        strActionSF.put("toFullRefToPageList", options.toFullRefToPageList);
        strActionSF.put("fromIndex", options.fromIndex);
        strActionSF.put("toIndex", options.toIndex);
        strActionSF.put("arrToBeChangeTracked", options.arrToBeChangeTracked.toString());
        break;
       case "SEARCH" : 
        gridInstance.state.pySearchKeyword = options.pySearchKeyword;
        strActionSF.put("isQueryable", options.isQueryable);
       break;
      default:
      break;
    }
     if(gridInstance.state.pySearchKeyword)
     strActionSF.put("pySearchKeyword", gridInstance.state.pySearchKeyword); 

     var callback = function(responseObj) {
        if(options.gridAction === pega.ui.tGridConstants.GRID_DELETEITEM_ACTION || options.gridAction === pega.ui.tGridConstants.GRID_ADDITEM_ACTION ||options.gridAction === pega.ui.tGridConstants.GRID_EDITITEM_ACTION){
         gridInstance.dirty = true;
        }
        if(metadata[gridWrapper][TEMPLATE_CONSTANTS["PZPROPERTYTYPE"]] === "Property") {
          pega.ui.tGridUtility.setPartialListProperty(pyPageListProperty,false);
        }
       options.callBack.success(responseObj);
       pega.u.d.processOnloads(tableElem);
     };
     var callbackOptions = {
          success: callback,
          failure: options.callBack.failure
      };
     if(metadata[gridWrapper][TEMPLATE_CONSTANTS["PZPROPERTYTYPE"]] ==="Property") {
         pega.ui.tGridUtility.setPartialListProperty(pyPageListProperty,true);
      }
    pega.u.d.asyncRequest('POST', strActionSF, callbackOptions);
   };
var _handleErrorAfterPartialSuccess =  function(responseObj){
   var errors = pega.u.d.handleErrorAfterPartialSuccess(responseObj);
   return errors;
 }

/*** Column Toggle code starts here ***/
var bAllColsHidden;
    //Check if all columns are hidden in the table
    function checkAllColumnsHidden(gridInstance) {
        bAllColsHidden = false;
        var pyColumns = gridInstance.state.pyColumns;
        var count = 0;
        for(var i=0; i < pyColumns.length ; i++){
          if(pyColumns[i].pyShow){
            count++;
          }
        }
        if(count === 1){
          bAllColsHidden = true;
        }
        return bAllColsHidden;
    }
  
    var _updateTableLiveInfo = function(accessibleInfo) {
      var liveRegion = document.getElementById("resultcount_aria_region");
      if(liveRegion) {
        liveRegion.textContent = "";
        setTimeout(function() {
         liveRegion.textContent = accessibleInfo;
        }, 0);
      }
    };
  
    var _postColumnVisibilityValues = function(event, uniqueId, doPostValueOnToggle) {
        var gridInstance = pega.ui.tGrid(uniqueId);
        var target = pega.util.Event.getTarget(event);
        if(!target.checked){
          checkAllColumnsHidden(gridInstance);
          if (bAllColsHidden) {
            var message = gridInstance.getMetaData().gridWrapper.noVisibleColumns;
            alert(message);
            return;
          }
        }
      
        var columnName = target.nextSibling && target.nextSibling.textContent;
        var visibilityText = target.checked ? "visible" : "hidden";
        var accessibleInfo = columnName + " " + visibilityText;
        _updateTableLiveInfo(accessibleInfo);
      
        if (doPostValueOnToggle === "true") {
            //Post the values on change of checkbox value
            pega.api.ui.actions.postValue(event, true);
        } else {
            //Post the values on click of Apply from modal dialog/overlay
            pega.u.d.submitModalDlgParam.bReload = false;
            var isOverlay = (pega.u.d.submitModalDlgParam && pega.u.d.submitModalDlgParam.bIsOverlay==="true") ? true : false; 
            if (isOverlay){
              doOverlayAction(pega.u.d.submitModalDlgParam, event);
            } else {
              doModalAction(pega.u.d.submitModalDlgParam, event);
            }
        }
    }
    
    var getNextVisibleHeader = function(target){
       var nextVisibleHeader = target && target.closest('th[data-order]').nextAll(':visible:first');
       if( !nextVisibleHeader || !nextVisibleHeader[0] || !isColumnHidden(nextVisibleHeader))
         return nextVisibleHeader;
       else
         return getNextVisibleHeader(nextVisibleHeader);
    }
    
    var getPreviousVisibleHeader = function(target){
      var previousVisibleHeader = target && target.closest('th[data-order]').prevAll(':visible:first');
      if( !previousVisibleHeader || !previousVisibleHeader[0] || !isColumnHidden(previousVisibleHeader))
         return previousVisibleHeader;
       else
         return getPreviousVisibleHeader(previousVisibleHeader);        
    }
    
    var isColumnHidden = function(target){
      return target && target.css('visibility') == "hidden";
    }
    
    var _hideColumn = function(event, uniqueId, pyInitialOrder){
      var gridInstance = pega.ui.tGrid(uniqueId);
      checkAllColumnsHidden(gridInstance);
      if (bAllColsHidden) {
            var message = gridInstance.getMetaData().gridWrapper.noVisibleColumns;
            alert(message);
            return;
       }
       var $target = $(event.target);
       var nextVisibleHeader = getNextVisibleHeader($target);
       var previousVisibleHeader = getPreviousVisibleHeader($target);
        
      _performPersonalizeAction(event, uniqueId, "true", true, pyInitialOrder);
            
      if (nextVisibleHeader && nextVisibleHeader[0]){
        gridInstance.moveCellFocus(1,parseInt(nextVisibleHeader[0].getAttribute("data-order")),gridInstance.getGridElement());
      }
      else if(previousVisibleHeader && previousVisibleHeader[0]){
        gridInstance.moveCellFocus(1,parseInt(previousVisibleHeader[0].getAttribute("data-order")),gridInstance.getGridElement());
      }
        
    }
     
    var _performPersonalizeAction = function(event, uniqueId, doPostValueOnToggle, isFromHideCol, hideColIndex) {
        var target = pega.util.Event.getTarget(event);
        if (bAllColsHidden && !target.checked) {
            target.checked = true;
            return;
        }
        var gridInstance = pega.ui.tGrid(uniqueId);
        if(doPostValueOnToggle === "true") {  
          var pyShow, colIndex;
          if (isFromHideCol) {
            pyShow = false;
            colIndex = hideColIndex;
          } else {
            pyShow = target.checked;
            target = pega.ui.tGridUtility.closest(target, function(ele) {
              return ele.tagName.toLowerCase() === "div" && ele.getAttribute("base_ref");
            });
            colIndex = gridInstance.getRowIndex(target);
            isFromHideCol = false;
          }
        }
       var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS;
    var pagingObj = gridInstance.getPaginationState();
    var pageSize = pagingObj[TEMPLATE_CONSTANTS["PYPAGESIZE"]];
      var doRefresh = false;
       var gridMetaData = gridInstance.getMetaData();
       if(gridInstance.state.pySearchKeyword || (gridMetaData.gridWrapper && gridMetaData.gridWrapper.isRowSelectionEnabled === "true")){
         doRefresh= true;
       }
        var gridWrapper = pega.ui.TEMPLATE_CONSTANTS["PZGRIDWRAPPER"];
        var options = {
            uniqueid: uniqueId,
            gridAction: pega.ui.tGridConstants.GRID_COLUMNS_SHOW_HIDE,
            implicitSave: gridInstance.getMetaData()[gridWrapper].isImplicitSaveEnabled,
            pyShow: pyShow,
            colIndex: colIndex,
            isFromHideCol: isFromHideCol,
            doRefresh : doRefresh,
           pxPageIndex : 1,
      pxPageSize : pageSize,
            doPostValueOnToggle : doPostValueOnToggle ? doPostValueOnToggle : "false",
            callBack: {
                success: function(response) {
                     if(doPostValueOnToggle === "true"){
                        var pyInitialOrder = parseInt(response.responseText.trim());
                        var pyColumns = gridInstance.state.pyColumns;
                        pyColumns[pyInitialOrder - 1].pyShow = pyShow;
                 if(doRefresh){
                   gridInstance.resetPagingState();
                   _refreshGrid(gridInstance.uniqueId, pega.ui.tGridConstants.GRID_SORT_ACTION);
                 }else{
                   _showOrHideColumn(gridInstance, colIndex,isFromHideCol);
                 } 
                     } else{
                       /*** TODO Remove this code when personalization section is depreacted - START ***/
                       var responseArray = response.responseText.split("#####");
                       var uniqueId = responseArray[0];
                       var orderArr = responseArray[1];
                       _updateOrderAndRefreshGrid(uniqueId,orderArr,pega.ui.tGridConstants.GRID_COLUMNS_SHOW_HIDE,doPostValueOnToggle);
                       /*** TODO Remove this code when personalization section is depreacted - END ***/
                     }
                    pega.ui.logger.LogHelper.debug("Column is shown/hidden successfully");
                },
                failure: function(response) {
                    pega.ui.logger.LogHelper.error("Ajax request fail: " + response);
                }
            }
        };
        _performGridAjaxAction(options);
    };

    function getIndexOfTdInTable(thElement, gridElement) {
        var ths = gridElement.querySelectorAll("th");
        for (var i = 0; i < ths.length; i++) {
            var ele = ths[i];
            if (ele === thElement) {
                return i + 1;
            }
        }
    }
  
    var _changeColumnVisibilityStyles = function(gridInstance, gridElement) {
        var tableStyle = "table[uniqueid='" + gridInstance.uniqueId + "']";
        var styles = "";
        var pyColumns = gridInstance.state.pyColumns;
        for (var i = 0; i < pyColumns.length; i++) {
            if (!(pyColumns[i].pyShow)) {
                var thElement = gridElement.querySelector("th[data-order='" + (pyColumns[i].pyOrder) + "']");
                var index = getIndexOfTdInTable(thElement, gridElement);
                if (thElement && index > 0) {
                    styles += tableStyle + " tr.cellCont th:nth-child(" + (index) + ") {display:none !important;}\n";
                    styles += tableStyle + " tr[data-row='true'].cellCont td:nth-child(" + (index) + ") {display:none !important;}\n";
                }
            }
        }
        var styleElement = gridElement.getElementsByTagName("style")[0];
        if (!styleElement) {
            styleElement = document.createElement("style");
            gridElement.appendChild(styleElement);
        }
        if (styles) {
            styleElement.innerHTML = styles;
        } else {
            styleElement.parentNode.removeChild(styleElement);
        }
    }
    
    var _showOrHideColumn = function(gridInstance, colIndex, isFromHideCol){
        var gridElement = gridInstance.getGridElement();
        
        if(isFromHideCol){
          _changeColumnVisibilityStyles(gridInstance, gridElement);
          return;
        }
        var action = pega.ui.tGridConstants.GRID_COLUMNS_SHOW_HIDE;
        var th = gridElement.querySelector("th[data-order='"+ (colIndex) + "']");
        if(!th){
          _refreshGrid(gridInstance.uniqueId, action);
          return;
        }
        var isTableCategorized = gridInstance.state.isTableCategorized;
        if(isTableCategorized === "true"){
          var firstThElement = gridElement.querySelector("th:first-child");
          if(th === firstThElement){
            _refreshGrid(gridInstance.uniqueId, action);
            return;
          }
        }
        _changeColumnVisibilityStyles(gridInstance, gridElement);
    }
    
    /*** TODO Remove this code when personalization section is depreacted - START ***/
    var _updateOrderAndRefreshGrid = function(uniqueId,orderArr,action, doPostValueOnToggle){
    orderArr = orderArr.split(",");
    orderArr.splice(orderArr.length-1,1);
    var size = orderArr.length;
    var newArr = [];
    for(var j=0;j<size;j++){
      var localObj = {};
      var localArr = orderArr[j].split("#");
      //for pyShow
      var actvar = localArr[0].split(":");
      localObj[actvar[0]] = actvar[1]=="true";
      //for pyOrder
      actvar = localArr[1].split(":");
      localObj[actvar[0]] = parseInt(actvar[1]);
      newArr.push(localObj);
    }
    orderArr = newArr;
    var gridInstance = pega.ui.tGridInstanceManager.getInstance(uniqueId);
    var dataRows = gridInstance.state.pyColumns;
    size = dataRows.length;
    for(var i=0;i<size;i++){
      Object.assign(dataRows[i],orderArr[i]);
    }
  };
  /*** TODO Remove this code when personalization section is depreacted - END***/
    
/*** Column Toggle code ends here ***/
  
  var _performOpenLocalAction = function(event, layoutInfo, flowActionName,templateName, paramURL){
     var grid = pega.ui.tGrid.getGridByLayoutInfo(layoutInfo);
     actUponRowCtx = {
            "uniqueid": grid.uniqueId,
            action: "OPENLOCALACTION",
            "rowNode": $(layoutInfo.rowNode),
            "base_ref": layoutInfo.rowRef
        };
     processAction(flowActionName, "","", "", "",true, event, templateName, paramURL, "",false);
  };
  /*
  Publishes grid actions like SORT, PAGINATE, FILTER, REORDER, RESIZE, PERSONALIZE and INITIALLOAD to all the subscribers
  */
  var _publishGridAction = function(type, action, gridUniqueId){
      var jsonData = {"gridAction": action, "gridUniqueId": gridUniqueId};
      type = type.toUpperCase();
      switch (type){
        case "POST":
          // Publish event post grid actions
          pega.ui.EventsEmitter.publish(pega.ui.tGridConstants.GRID_POST_ACTION, jsonData);
          break;
        default:
          break;
      }
  };
  /*  
  Returns the row index of the current active row. 
  */
  var _getSelectedRecord = function(gridUniqueId){
    var gridInstance = pega.ui.tGrid(gridUniqueId);
    return gridInstance.getSelectedRecord();
  };
  
  var _clearPersonalizedDataPage = function(contextPage){
    var options = {
      uniqueid : contextPage,
      contextPage : contextPage,
      gridAction : pega.ui.tGridConstants.GRID_CLEAR_PERSONALIZE_DATAPAGE,
      callBack : {
        success : function(responseObj) {
          var dataPageName = responseObj.responseText;
          pega.ui.TemplateEngine.invalidateDataSource(dataPageName);
        }, 
        failure : pega.ui.tGridUtility.getErrorHandler("clearPersonalizedDataPage()")
      }
    }
    _performGridAjaxAction(options);    
  };
  
  // function to change the row-height-class on table
  var _changeRowHeight = function changeRowHeight(rowHeightClass, event, id, updateAriaLabel) {
      var uniqueId, gridTable = null, gridObj = null;
      if(id) {
        uniqueId = id;
        gridObj = pega.ui.tGrid(uniqueId);
        gridTable = gridObj.getGridElement();
      } else {
        gridTable = pega.ui.tGridUtility.closest(event.target, function(ele) {
        return ele.classList.contains("template-root-marker");
      }).querySelector("table[uniqueid]");
        uniqueId = gridTable.getAttribute("uniqueid");
        gridObj = pega.ui.tGrid(uniqueId);
      }
      var rowheight = rowHeightClass || pega.ui.tGridConstants.GRID_ROWHEIGHT_COMPACT;
      if(gridTable && rowHeightClass) {
      gridTable.classList.remove(gridObj.state.rowHeightClass);
      gridTable.classList.add(rowHeightClass); 
      }
      gridObj.state.rowHeightClass = rowHeightClass;
	    var options = {
        uniqueid: uniqueId,
        gridAction: pega.ui.tGridConstants.UPDATE_ROWHEIGHT,
        implicitSave: pega.ui.tGridInstanceManager.getInstance(uniqueId).getMetaData()[pega.ui.TEMPLATE_CONSTANTS["PZGRIDWRAPPER"]].isImplicitSaveEnabled,
        rowheight: rowheight,
        callBack: {
            success: function () {
                pega.ui.TemplateGrids.publishGridAction("POST",pega.ui.tGridConstants.UPDATE_ROWHEIGHT,uniqueId);
                // Updates aria-label to grid density button
                if(updateAriaLabel) {
                  var densityButton = event.target;
                  var buttonLabelFieldValue = "";
                  switch(rowHeightClass) {
                    case "row-compact":
                      buttonLabelFieldValue = pega.u.d.fieldValuesList.get("Short");
                      break;
                    case "row-default":
                      buttonLabelFieldValue = pega.u.d.fieldValuesList.get("Medium");
                      break;
                    case "row-multi-line":
                      buttonLabelFieldValue = pega.u.d.fieldValuesList.get("Tall");
                      break;
                    case "row-full-content":
                      buttonLabelFieldValue = pega.u.d.fieldValuesList.get("FullContent");
                      break;
                  }
                  if(densityButton) {
                    densityButton.setAttribute("aria-label", buttonLabelFieldValue);
                  }
                }
            },
            failure: pega.ui.tGridUtility.getErrorHandler("changeRowHeight()")
        }
      };
      pega.ui.TemplateGrids.performGridAjaxAction(options);
  };
  
    
 var _getActiveMenuList = function(event,id){
  var gridTable = null;
  if(id) {
      var gridObj = pega.ui.tGrid(id);
      gridTable = gridObj.getGridElement();
    } else {
      gridTable = pega.ui.tGridUtility.closest(event.target, function(ele) {
         return ele.classList.contains("template-root-marker");
       }).querySelector("table[uniqueid]");
    }
   var menuItemIndex;
   if (gridTable) {
    var gridClasses = gridTable.classList;
    if (gridClasses.contains(pega.ui.tGridConstants.GRID_ROWHEIGHT_COMPACT)) {
      menuItemIndex = 0;
    } else if (gridClasses.contains(pega.ui.tGridConstants.GRID_ROWHEIGHT_DEFAULT)) {
      menuItemIndex = 1;
    } else if (gridClasses.contains(pega.ui.tGridConstants.GRID_ROWHEIGHT_MULTI_LINE)) {
      menuItemIndex = 2;
    } else if (gridClasses.contains(pega.ui.tGridConstants.GRID_ROWHEIGHT_FULL_CONTENT)) {
      menuItemIndex = 3;
    }
    if (menuItemIndex !== undefined) {
      var menu = pega.ctx.dom.querySelectorAll('ul[id = ' + event.target.getAttribute("data-menuid") + ']');
      menu[0].classList.add("row-height-menu");
      var menuList = menu[0].children;
    }
    return {
      menuList,
      menuItemIndex
    };
 }
}
  var _setAriaSelected = function(event,overRideMenuIndex,id){
    var {menuList,menuItemIndex} = _getActiveMenuList(event,id);
    //the below overriding logic is needed for personalised view drop down as the labels are dynamic in nature
    if(overRideMenuIndex == "true"){
       for(let i = 0; i< menuList.length;i++){
         var menuItemsSelected = menuList[i].getElementsByClassName('menu-item-icon-check');
         if(menuItemsSelected > 0 && menuList[i].getAttribute("role") !== "separator"){
           menuItemIndex = i;
           break;
         }
       }  
    }
    menuList[menuItemIndex].setAttribute("aria-selected",true);
    for(let i = 0;i<menuList.length;i++){
      if(i !== menuItemIndex && menuList[i].getAttribute("role") !== "separator"){
        menuList[i].setAttribute("aria-selected",false)
      }
    }
  }  
 
 
  // function to activate the menu items
  var _activateMenuItems = function activateMenuItems(event, id) {
		  	var {menuList,menuItemIndex} = _getActiveMenuList(event,id)
		  	if (menuList) {
		  	for(var i = 0; i< menuList.length ; i ++ ){
            menuList[i].classList.remove("rowheight-menu-heighlight");
            menuList[i].children[0].children[0].classList.remove("pi");
            menuList[i].children[0].children[0].classList.remove("pi-check");
            menuList[i].removeAttribute("aria-selected");
          }
		  		menuList[0].classList.remove("menu-item-active");
		  		menuList[menuItemIndex].classList.add("rowheight-menu-heighlight");
          menuList[menuItemIndex].classList.add("menu-item-active");
          menuList[menuItemIndex].children[0].children[0].classList.add("pi");
          menuList[menuItemIndex].children[0].children[0].classList.add("pi-check");
          _setAriaSelected(event,false);
		  	}
	}
  

  
  var _setAriaExpanded = function(event){
          event.target.removeAttribute("aria-collapsed");
          event.target.setAttribute("aria-expanded",true);
  }
  



  
  function categorizeSucessCallback(uniqueId, action, colname, doRefreshGrid) {
    var gridObj = pega.ui.tGrid(uniqueId);
            var gridEl = gridObj.getGridElement();
            var groupingInfo = pega.ui.tGridUtility.getContextInfo(gridObj.state.pageListProp, gridObj.getMetaData()["GROUPING_INFO"]);
            if (groupingInfo && groupingInfo.columns) {
                gridObj.resetPagingState();
                gridObj.state.isPagingEnabled = "false";
                gridObj.state.isTableCategorized = "true";
                if (action === "POST") {
                    var colLength = groupingInfo.columns.length;
                    var removeClass = (gridEl.className.match(/cat-l[0-9]/) || []).join('');
                    if (removeClass)
                        gridEl.classList.remove(removeClass);
                    gridEl.classList.add("cat-l" + (colLength));
                    gridEl.setAttribute("data-cat-level", (colLength));
                }
            } else {
                var gridMetadata = pega.ui.tGridMetaDataManager.getMetaData(gridObj.instanceId);
                gridObj.state.isPagingEnabled = gridMetadata.gridWrapper["isPagingEnabled"];
                gridObj.state.isTableCategorized = "false";
               if (action === "POST") {
                  gridEl.classList.remove("cat-l1");
               }
            }
            if (action === "DELETE" && colname) {
                var visibleColumns = gridObj.state.pyColumns;
                if (gridObj.getMetaData().gridWrapper.isSortingEnabled) {
                    for (var datacol in visibleColumns) {
                        if (visibleColumns[datacol].pyPropertyName == colname) {
                            visibleColumns[datacol].pySortType = "";
                        }
                    }
                }
            }
            if (doRefreshGrid) {
                _refreshGrid(uniqueId, pega.ui.tGridConstants.CATEGORIZE_GRID)
            }
            pega.ui.logger.LogHelper.debug("categorization is successfull");
            //Refresh the toolbar section to reflect the count
            _refreshToolBarSection(gridObj);
  }
  
  var focusVisbileButton = function(event){
    if(event.keyCode === 27){
      var _popOver = pega.u.d.getPopOver(event);
      var popOverContainerElem = _popOver && _popOver.getContentContainerElement();
      var targetButton = _popOver && _popOver.getAssociatedElement();
      popOverContainerElem && popOverContainerElem.removeEventListener("keydown", focusVisbileButton);
      if(!targetButton.checkVisibility()){
        setTimeout(function(){
          var gridId = targetButton && targetButton.getAttribute("name").match(/\d+/);
          var gridObj = pega.ui.tGrid(gridId[0]);
          var toolBar = gridObj && gridObj.getToolBar();
          var finalButtonChild = $(toolBar).find(`button:visible i[class*='groupbybutton']`).get(0);
          var groupByButton = finalButtonChild && finalButtonChild.parentElement;
          if(groupByButton)
            groupByButton.focus();
        },100); 
      }
    }
  }
  
  /*
    BUG-759020
    overriding the focus of groupbybutton which is removed from the dom due to refresh or button change and to point the new visible groupby button
  */
  var _changeGroupByButtonFocus = function(event){
      var _popOver = pega.u.d.getPopOver(event.target);
      var popOverContainerElem = _popOver && _popOver.getContentContainerElement();
      
      popOverContainerElem && popOverContainerElem.addEventListener("keydown", focusVisbileButton);
  }
  
    var _focusCategorizationDropdown = function(event){
      var _popOver = pega.u.d.getPopOver(event.target);
      var popOverContainerElem = _popOver && _popOver.getContentContainerElement();
      
      var $popOverContainerElem = $(popOverContainerElem);
      var groupingElements = $popOverContainerElem.find("select");
      var totalGroupings = groupingElements.length;
      var focussableElement = groupingElements.last().get(0);
      if (totalGroupings == 3){
        focussableElement && focussableElement.setAttribute("aria-label","Please note that Only 3 levels of grouping is allowed!");
      }
      focussableElement && focussableElement.focus();
      setTimeout(function(){
        focussableElement && focussableElement.removeAttribute("aria-label");    
      },100);
      
  }
  
  var _setDDFlag = function(setDDFlag){
     pega.ui.dropdown =  pega.ui.dropdown|| {};
    if(setDDFlag){
       pega.ui.dropdown.stampDPName = true;
    }else{
      delete pega.ui.dropdown.stampDPName;
    }
  }
 
   var _cleanDP = function(event, setDDFlag){
    _setDDFlag(setDDFlag);
   var dropDownElements = document.getElementById("_popOversContainer").querySelectorAll("select");
   for (var i = 0; i < dropDownElements.length; i++) {
     pega.ui.TemplateEngine.invalidateDataSource(dropDownElements[i].getAttribute("data-datapage-name").split(".pxResults")[0]);
   }
}
  
  var _categorizeGrid = function(event, uniqueId,action,rowNumber,colname) {
    var gridWrapper = pega.ui.TEMPLATE_CONSTANTS["PZGRIDWRAPPER"];
    if (uniqueId === "") {
      uniqueId = pega.ui.tGridUtility.closest(event.target, function(ele) {
                    return ele.getAttribute("node_name") === "pyGridCategorization"
                 }).querySelector("div.uniqueid>input[type='hidden']").value;
    }
    rowNumber = rowNumber ? parseInt(rowNumber) : "";
    var doRefreshGrid = true;
    var gridObj = pega.ui.tGrid(uniqueId);
    var headerElement = event.target && event.target.closest("th");
    gridObj.state.categorizeColumnInd = headerElement && headerElement.getAttribute("data-order");
    var pyPageListProperty = gridObj.state.pageListProp;
    var groupingInfo = pega.ui.tGridUtility.getContextInfo(pyPageListProperty, gridObj.getMetaData()["GROUPING_INFO"]);
    var gridEl = gridObj.getGridElement();
    var options = {
      uniqueid: uniqueId,
      gridAction: pega.ui.tGridConstants.CATEGORIZE_GRID,
      categorizeAction: action,
      rowNumber: rowNumber,
      doRefresh : doRefreshGrid,
      implicitSave: pega.ui.tGridInstanceManager.getInstance(uniqueId).getMetaData()[gridWrapper].isImplicitSaveEnabled,
      callBack: {
        success: function(response) {
            categorizeSucessCallback(uniqueId, action, colname, doRefreshGrid);
        },
        failure: function(response) {
            pega.ui.logger.LogHelper.error("Ajax request fail: " + response);
        }
      }
    };
    if (action === "DELETE") {
      if (groupingInfo && groupingInfo.columns) {
        var colLength = groupingInfo.columns.length;
      }
      gridEl.classList.remove("cat-l" + colLength);
      if (colLength && colLength !== 1) {
        gridEl.classList.add("cat-l" + (colLength - 1));
        gridEl.setAttribute("data-cat-level", (colLength - 1));
      }
      if(colLength === 1) {
        //Enable pagination after the removal of categorization
        var gridMetadata = pega.ui.tGridMetaDataManager.getMetaData(gridObj.instanceId);
        gridObj.state.isPagingEnabled = gridMetadata[gridWrapper]["isPagingEnabled"];
        var paging = gridObj.getPaginationState();
        if (gridObj.state.isPagingEnabled != "false" && paging) {
          options.pxPageIndex = 1;
          options.pxPageSize = paging.pageSize;
        }
      } else if(groupingInfo && groupingInfo.columns && groupingInfo.columns[colLength-1] === colname) {
        //Delete categorized rows from DOM - optimization for some usecases for delete
        groupingInfo.columns.pop();
        options.doRefresh = doRefreshGrid = false;
        var catRows = gridEl.querySelectorAll("tr.level-" + colLength);
        Array.prototype.forEach.call(catRows, function(node) {
          node.parentNode.removeChild(node);
        });
      }
    }
  _performGridAjaxAction(options);   
};
  
  var _searchGrid = function(event, uniqueId, keyword) {  
    var gridInstance = pega.ui.tGrid(uniqueId);
    var TEMPLATE_CONSTANTS = pega.ui.TEMPLATE_CONSTANTS;
    var pagingObj = gridInstance.getPaginationState();
    var pageSize = pagingObj[TEMPLATE_CONSTANTS["PYPAGESIZE"]];
    var options = {
      uniqueid: uniqueId,
      gridAction: "SEARCH",
      pySearchKeyword : keyword,
      pxPageIndex : 1,
      pxPageSize : pageSize,
      callBack: {
        success: function() {
         gridInstance.resetPagingState();
         _refreshGrid(uniqueId, pega.ui.tGridConstants.GRID_SORT_ACTION);
         var search_length = gridInstance.getSourceLength();
         var pageName = "GridMetadata_"+uniqueId;
         if(!gridInstance.state.selectedRowsCount > 0){
           updateCountText(uniqueId, search_length + " results");
           updateResult_Count(search_length+"results");
         }
         pega.ui.logger.LogHelper.debug("Search is successfull");
        },
        failure: function (response) {
          pega.ui.logger.LogHelper.error("Search failed : " + response);
        }
      }
    };
    _performGridAjaxAction(options);   
  };
  
  var _toggleClearButton = function(event) {
    var container = event.target.closest('.tabletoolbar-search-container');
    container.querySelector('.pi-close').closest('.content-item')
      .style.visibility = container.querySelector('input').value ? 'visible' : 'hidden';
  }
  
  var _clearSearch = function(event, uniqueId) {
    var inputEl = event.target.closest('.tabletoolbar-search-container').querySelector('input');
    inputEl.value = '';
    _toggleClearButton(event);
    _searchGrid(event, uniqueId, '');
    inputEl.focus();
  }
  
  var _expandCollapseCategorizeGrid=function(event,rowIdentifier){ 
    var target=event.target;
    var tableUniqueId=target.closest('table').getAttribute('uniqueid');
    var parentOfGrid = target.closest('.layout-body');
    var styleOfGrid=parentOfGrid.querySelector("style[data-style-id='"+tableUniqueId+"']");
    var stringOfStyle = "";
    var startCmt = "/* Ref: "+rowIdentifier+"-Start */\n";
    var endCmt = "\n/*"+rowIdentifier+"-End*/\n";
    var nestingLevel= target.closest('table').getAttribute("data-cat-level");
    var hide,disclose ;
    var isRTLOriented=pega.u.d.isOrientationRTL();
    var iconTransForm = isRTLOriented? "transform: rotate(180deg)" : "transform: rotate(-90deg)";
    var cssString;
    var currentLevel= target.closest('tr').getAttribute("data-level");
    var nextSibling = target.closest('tr').nextElementSibling;
   var dataRowIdentifier=  nextSibling ? nextSibling.getAttribute("data-row-identifier"): rowIdentifier;
    if(nestingLevel == 1 && dataRowIdentifier && dataRowIdentifier.indexOf(".")  === -1 ){
        cssString =startCmt+".gridTable[uniqueid='"+tableUniqueId+"'] [data-row-identifier='"+rowIdentifier+"'],.gridTable[uniqueid='"+tableUniqueId+"'] [data-row-identifier^='"+rowIdentifier+".'] {display:none;}  .gridTable[uniqueid='"+tableUniqueId+"'] [data-master-identifier='"+rowIdentifier+".']{display:none;} .gridTable[uniqueid='"+tableUniqueId+"'] tr.cellCont[data-master-identifier='"+rowIdentifier+"'] td .caret-down-icon{"+iconTransForm+"; transition-duration: 0.7s; transition-property: transform;}  "+endCmt;
    }else if (nestingLevel == 1 && dataRowIdentifier && dataRowIdentifier.indexOf(".")  !== -1){
        cssString =startCmt+".gridTable[uniqueid='"+tableUniqueId+"'] [data-row-identifier='"+rowIdentifier+"'],.gridTable[uniqueid='"+tableUniqueId+"'] [data-row-identifier^='"+rowIdentifier+".'] {display:none;}  .gridTable[uniqueid='"+tableUniqueId+"'] [data-master-identifier='"+rowIdentifier+".']{display:none;} .gridTable[uniqueid='"+tableUniqueId+"'] tr.cellCont[data-master-identifier='"+rowIdentifier+"'] td .caret-down-icon{"+iconTransForm+"; transition-duration: 0.7s; transition-property: transform;}  "+endCmt;
    
    }else{
       cssString =startCmt+".gridTable[uniqueid='"+tableUniqueId+"'] [data-row-identifier='"+rowIdentifier+"'],.gridTable[uniqueid='"+tableUniqueId+"'] [data-row-identifier^='"+rowIdentifier+".'] {display:none;}  .gridTable[uniqueid='"+tableUniqueId+"'] [data-master-identifier^='"+rowIdentifier+".']{display:none;} .gridTable[uniqueid='"+tableUniqueId+"'] tr.cellCont[data-master-identifier='"+rowIdentifier+"'] td .caret-down-icon{"+iconTransForm+"; transition-duration: 0.7s; transition-property: transform;}  "+endCmt; 
    }
    if(!styleOfGrid){
      styleOfGrid = document.createElement('style');
      styleOfGrid.setAttribute("data-style-id",tableUniqueId);
      stringOfStyle += cssString;
      //target.setAttribute('aria-expanded',"true");
       target.closest('td').setAttribute('aria-expanded',"false");
       disclose=pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to expand", "pyActionPrompt").trim();
      target.closest('td').querySelector('i').setAttribute('aria-label',(disclose));
      target.closest('td').querySelector('i').setAttribute('aria-expanded',"false");
    } else{    
      stringOfStyle = styleOfGrid.innerHTML;      
      //if(stringOfStyle.indexOf("/* Expand/Collpase") >= 0 && rowIdentifier.indexOf(".") > 0){
      if(stringOfStyle.indexOf("/* Expand/Collpase") >= 0 && currentLevel==nestingLevel ){
        
        var masterRow = rowIdentifier.indexOf(".")>0?rowIdentifier.substring(0,rowIdentifier.indexOf(".")):rowIdentifier;
        startCmt = "/* Expand/Collpase : " + masterRow + "-Start */\n";
        endCmt = "\n/*" + masterRow + "-ECEnd*/\n";
        
        var removeStartIndex =  stringOfStyle.indexOf(startCmt);
        var removeEndIndex =  stringOfStyle.indexOf(endCmt)+endCmt.length;
        var tempStyles = stringOfStyle.substring(removeStartIndex, removeEndIndex);
        
        stringOfStyle = stringOfStyle.replace(stringOfStyle.substring(removeStartIndex, removeEndIndex), "");        
        var stylesArr = [];
        if(tempStyles.indexOf(":not([data-row-identifier^='"+rowIdentifier+"'])") == -1){
          stylesArr = tempStyles.split("{display");
          stylesArr[0] += ":not([data-row-identifier^='"+rowIdentifier+"']){display";
          tempStyles = stylesArr.join("");
        } else{
          tempStyles = tempStyles.replace(":not([data-row-identifier^='"+rowIdentifier+"'])", "");
        }
        
        if(tempStyles.indexOf(":not([data-master-identifier='"+rowIdentifier+"'])") == -1){
          stylesArr = tempStyles.split(".level");
          stylesArr[0] += ":not([data-master-identifier='"+rowIdentifier+"']).level";
          tempStyles = stylesArr.join("");
        } else{
          tempStyles = tempStyles.replace(":not([data-master-identifier='"+rowIdentifier+"'])", "");
        }
        
        stringOfStyle += tempStyles;
          if(target.closest('td').getAttribute('aria-expanded')==="true"){
         target.closest('td').setAttribute('aria-expanded', "false");
                disclose = pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to expand", "pyActionPrompt").trim();
                if (target.closest('td') && target.closest('td').querySelector('i')) {
                    target.closest('td').querySelector('i').setAttribute('aria-label', (disclose));
                    target.closest('td').querySelector('i').setAttribute('aria-expanded', "false");
                }
      }
      else if(target.closest('td').getAttribute('aria-expanded')==="false"){
                target.closest('td').setAttribute('aria-expanded',"true");
        hide=pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to collapse", "pyActionPrompt").trim();
        if(target.closest('td') && target.closest('td').querySelector('i')){
          target.closest('td').querySelector('i').setAttribute('aria-label',(hide));
          target.closest('td').querySelector('i').setAttribute('aria-expanded',"true"); 
        }
              
              }
      }else if(stringOfStyle.indexOf(cssString) == -1){
        stringOfStyle += cssString;   
        target.closest('td').setAttribute('aria-expanded',"false");
        disclose = pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to expand", "pyActionPrompt").trim();
        if(target.closest('td') && target.closest('td').querySelector('i')){
          target.closest('td').querySelector('i').setAttribute('aria-label',(disclose ));
          target.closest('td').querySelector('i').setAttribute('aria-expanded',"false");
        }
        
      } else if(stringOfStyle.indexOf(cssString) != -1){
        var removeStartIndex =  stringOfStyle.indexOf(startCmt);
        var removeEndIndex =  stringOfStyle.indexOf(endCmt)+endCmt.length;
        stringOfStyle = stringOfStyle.replace(stringOfStyle.substring(removeStartIndex, removeEndIndex), "");
        target.closest('td').setAttribute('aria-expanded',"true");
        hide=pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to collapse", "pyActionPrompt").trim();
        if(target.closest('td') && target.closest('td').querySelector('i')){
          target.closest('td').querySelector('i').setAttribute('aria-label',(hide));
          target.closest('td').querySelector('i').setAttribute('aria-expanded',"true"); 
        }
      } 
    }
    styleOfGrid.innerHTML=stringOfStyle;
    parentOfGrid.appendChild(styleOfGrid);
    //When categorized row is clicked, change the focus
    var gridObj = pega.ui.tGrid(tableUniqueId);
    var rowNode = pega.ui.tGridUtility.closest(target, function(ele) {
       return ele.tagName.toLowerCase() === "tr";
    });
    gridObj.focusRow($(rowNode), true);
  };
  
  var _gridCatExpandAll=function(uniqueId){
    if(uniqueId === ""){
      uniqueId=document.querySelector("div[node_name='pyGridCategorization'] div.uniqueid>input[type='hidden']").value;
    }
    var parentOfGrid = document.querySelector("table[uniqueid='"+uniqueId+"']").closest('.layout-body');
    var styleOfGrid=parentOfGrid.querySelector("style[data-style-id='"+uniqueId+"']");
    if(styleOfGrid){
       styleOfGrid.remove();
    }
  }
  
  var _gridCatExpandAllCollapseAll=function(event){
      var target = event.target;
      var parentOfGrid = target.closest('.layout-body');
      var layoutTable = target.closest('table');
      var tableUniqueId = layoutTable.getAttribute('uniqueid');
      var styleOfGrid = parentOfGrid.querySelector("style[data-style-id='"+tableUniqueId+"']");
      var stringOfStyle = '';
      var startCmt = "";
      var endCmt = "";
      var disclose;
      var divs=layoutTable.querySelectorAll('tr');
      var isRTLOriented=pega.u.d.isOrientationRTL();
      var iconTransForm = isRTLOriented? "transform: rotate(180deg)" : "transform: rotate(-90deg)";
    var nextHeaderRow = target.closest('tr').nextElementSibling;
    var dataRowIdentifier = 1;
    if(nextHeaderRow){
      var headerSibling = nextHeaderRow.nextElementSibling;
      dataRowIdentifier = headerSibling ? headerSibling.getAttribute('data-row-identifier') : dataRowIdentifier;
    }
      if (!styleOfGrid) {
          styleOfGrid = document.createElement('style');
          styleOfGrid.setAttribute("data-style-id",tableUniqueId);
          disclose = pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Expand all groups", "pyActionPrompt").trim();
          if( layoutTable.querySelector('th') && layoutTable.querySelector('th').querySelector('i')){
            layoutTable.querySelector('th').querySelector('i').setAttribute('aria-label',(disclose));
            layoutTable.querySelector('th').querySelector('i').setAttribute('aria-expanded', "false");
          }
        for (i = 0; i < divs.length; ++i) {
          if(divs[i].querySelector('td') && divs[i].querySelector('td').querySelector('i')){
              divs[i].querySelector('td').querySelector('i').setAttribute('aria-expanded', "false");
            divs[i].querySelector('td').setAttribute('aria-expanded', "false");
            disclose = pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to expand", "pyActionPrompt").trim();
            divs[i].querySelector('td').querySelector('i').setAttribute('aria-label',(disclose));
          }
         }
      } else {
          styleOfGrid.remove();
          disclose = pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Collapse all groups", "pyActionPrompt").trim();
          if( layoutTable.querySelector('th') && layoutTable.querySelector('th').querySelector('i')){
            layoutTable.querySelector('th').querySelector('i').setAttribute('aria-label',(disclose));
            layoutTable.querySelector('th').querySelector('i').setAttribute('aria-expanded',"true");
          }
         for (i = 0; i < divs.length; ++i) {
          if(divs[i].querySelector('td') && divs[i].querySelector('td').querySelector('i')){
              divs[i].querySelector('td').querySelector('i').setAttribute('aria-expanded', "true");
            divs[i].querySelector('td').setAttribute('aria-expanded', "true");
            disclose = pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to collapse", "pyActionPrompt").trim();
            divs[i].querySelector('td').querySelector('i').setAttribute('aria-label',(disclose));
          }
         }
          return;
      }
      var totalL1 = layoutTable.querySelectorAll("[data-level='1']");
      var totalNesting = layoutTable.getAttribute("data-cat-level");
      var expandCollapseAll = styleOfGrid.innerHTML;

      for (var i = 1; i <= totalL1.length; i++) {
          startCmt = "/* Expand/Collpase : " + i + "-Start */\n";
          endCmt = "\n/*" + i + "-ECEnd*/\n";
          if (totalNesting == 1 && dataRowIdentifier && dataRowIdentifier.indexOf(".")  === -1) {
              stringOfStyle += startCmt + ".gridTable[uniqueid='" + tableUniqueId + "'] [data-master-identifier='" + i + "']~[data-row-identifier ='" + i + "']{display:none;}.gridTable[uniqueid='" + tableUniqueId + "'] [data-master-identifier='" + i + "'].level-" + totalNesting + " .caret-down-icon{"+iconTransForm+";transition-duration: 0.7s; transition-property: transform;}" + endCmt;
          } else if(totalNesting == 1 && dataRowIdentifier && dataRowIdentifier.indexOf(".")  !== -1){
                      stringOfStyle += startCmt + ".gridTable[uniqueid='" + tableUniqueId + "'] [data-master-identifier='" + i + "']~[data-row-identifier^='" + i + ".']{display:none;}.gridTable[uniqueid='" + tableUniqueId + "'] [data-master-identifier='" + i + "'].level-" + totalNesting + " .caret-down-icon{"+iconTransForm+";transition-duration: 0.7s; transition-property: transform;}" + endCmt;
          }else {
              stringOfStyle += startCmt + ".gridTable[uniqueid='" + tableUniqueId + "'] [data-master-identifier='" + i + "']~[data-row-identifier^='" + i + ".']{display:none;}.gridTable[uniqueid='" + tableUniqueId + "'] [data-master-identifier='" + i + "']~[data-master-identifier^='" + i + ".'].level-" + totalNesting + " .caret-down-icon{"+iconTransForm+";transition-duration: 0.7s; transition-property: transform;}" + endCmt;
          }

      }
      stringOfStyle += "/*Header Icon*/ \n .gridTable[uniqueid='" + tableUniqueId + "'] tr.cellCont th .caret-down-icon{"+iconTransForm+";transition-duration: 0.7s; transition-property: transform;}\n/*Header End*/\n";
      styleOfGrid.innerHTML = stringOfStyle;
      parentOfGrid.appendChild(styleOfGrid);
    
  }
  
  var _addInlineRow = function(event, source, position, pyDataTransform){
    pega.ui.template.DataRepeater.Actions.doListAction(event, "ADDITEM", source, position, "", "", "true", pyDataTransform);
  }
  
  
  var _createOrEditNamedView = function(event, uniqueId, action) {
    if(pega.u.d.getPopOver && pega.u.d.getPopOver().getActivePopOverElement()) {
      return;
    }
    var options = {
      uniqueid: uniqueId,
      gridAction: action,
      callBack:{
         success: function(){
             var gridObj = pega.ui.tGrid(uniqueId);
             _refreshToolBarSection(gridObj);
             pega.ui.TemplateEngine.invalidateDataSource("EditPersonalizePage");
             pega.ui.logger.LogHelper.debug("View updated successfully");
             
        },
        failure: pega.ui.tGridUtility.getErrorHandler("Create view failed")
      }
    }
    _performGridAjaxAction(options);
  }

  var _deleteNamedView = function(event, uniqueId) {
        var gridInstance = pega.ui.tGrid(uniqueId);
        var options = {
            uniqueid: uniqueId,
            gridAction: pega.ui.tGridConstants.DELETE_VIEW,
            callBack:{
               success: function(response){
                 var newGridInstance = $(response.responseText).filter(".template-root-marker.gridDefault");
                 var rootElement =  gridInstance.getRootElement();
                 gridInstance.nullify();
                // load the new markup
                rootElement.outerHTML = newGridInstance[0].outerHTML;
                pega.ui.logger.LogHelper.debug("View deleted successfully");
                 
               },
               failure: pega.ui.tGridUtility.getErrorHandler("delete view failed")
             }
        };
    _performGridAjaxAction(options);
  }
  
  var _switchNamedView = function(event, uniqueId, viewName, previousViewLabel, currentViewLabel) {
    if(previousViewLabel === currentViewLabel){
      return;
    }     
    var gridInstance = pega.ui.tGrid(uniqueId);
    var options = {
            uniqueid: uniqueId,
            gridAction: pega.ui.tGridConstants.SWITCH_VIEW,
            pyPersonalizedName : viewName,
            callBack:{
               success: function(response){
                 var newGridInstance = $(response.responseText).filter(".template-root-marker.gridDefault");
                 var rootElement =  gridInstance.getRootElement();
                 gridInstance.nullify();
                // load the new markup
                 rootElement.outerHTML = newGridInstance[0].outerHTML;
                 pega.ui.logger.LogHelper.debug("View changed successfully");
               },
               failure: pega.ui.tGridUtility.getErrorHandler("switch view failed")
             }
        };
    _performGridAjaxAction(options);
  }
  
  var _selectTableRows = function(event, uniqueID) {
    var selected = event.target.checked;
    event.target.setAttribute("aria-checked", selected);
    var gridInstance = pega.ui.tGrid(uniqueID);
    var tableElement = gridInstance.getGridElement();
    var gridState = gridInstance.state;
    var mode = gridInstance.getMetaData().gridWrapper.pyRowSelectionMode;
    if(selected) {     
      if(gridState.isFiltered==="true") {
        gridState.selectedRowsCount = gridState.selectedRowsCount + gridInstance.getSourceLength()- gridState.filteredSelectedRowsCount;
        gridState.filteredSelectedRowsCount = gridInstance.getSourceLength();
      }
      else {
        gridState.selectedRowsCount = gridInstance.getSourceLength();      
      }
    } 
    else {
      if(gridState.isFiltered==="true") {
         gridState.selectedRowsCount=gridState.selectedRowsCount - gridInstance.getSourceLength();
         gridState.filteredSelectedRowsCount=0;
      }
      else {
         gridState.selectedRowsCount = 0;     
      }
    }
    updateCountText(uniqueID, gridState.selectedRowsCount===0 ? gridInstance.getSourceLength() + " results" : gridState.selectedRowsCount + " selected");

    if(gridState.selectedRowsCount===0){  
      updateResult_Count(gridInstance.getSourceLength()+" results");
    }
    else{
      updateResult_Count(gridState.selectedRowsCount+" selected");
    }
       
    var rows = tableElement.querySelectorAll("tbody#gridTableBody>tr");
    for(var rowIndex=0; rowIndex<rows.length; rowIndex++) {
      var eachRow = rows[rowIndex];
      var checkboxCell = eachRow.querySelector("*[data-template-type='pxCheckbox'][aria-colindex='0']");
      if(!checkboxCell) {
        continue;
      }
      var cellElements = checkboxCell.getElementsByTagName("input");
      var cellElementsLen = cellElements.length;
      for(var cellElementsIndex =0; cellElementsIndex<cellElementsLen; cellElementsIndex++){
        if((cellElements[cellElementsIndex].type).toUpperCase() === "CHECKBOX"){
           // If checkbox is disabled, skip
           if (cellElements[cellElementsIndex].disabled) {
             continue;
           }
           cellElements[cellElementsIndex].checked = selected;
           cellElements[cellElementsIndex].setAttribute("aria-checked", selected);
        }
      }
    }
    
    var paramsStr = "selected=" + selected + "&sourcePage=" + gridState.pageListProp + "&mode=" + mode + "&selectAll=true" + "&uniqueID=" + uniqueID + "&isFiltered=" + gridState.isFiltered;
    pega.u.invoke.runActivity(["", paramsStr, "", "", "", "", "", pega.u.d.selectTableRowsEncryptedUrl, ""]);
  }
  
  var _handleSingleSelect = function(event, uniqueID){
    var selected = event.target.checked;
    event.target.setAttribute("aria-checked", selected);
    var gridInstance = pega.ui.tGrid(uniqueID);
    var tableElement = gridInstance.getGridElement();
    var gridState = gridInstance.state;
    var mode = gridInstance.getMetaData().gridWrapper.pyRowSelectionMode;
    var currentSelectedIndex = event.target.closest("tr").getAttribute("aria-rowindex") - 1;
    var previousSelectedIndex = gridState.pyRowSelectionIndex || 0;
    if (previousSelectedIndex === currentSelectedIndex)
      return;
    if(previousSelectedIndex){
     var prevSelectedRow = tableElement.querySelector(`tr[aria-rowindex="${gridState.pyRowSelectionIndex+1}"]`);
     if(prevSelectedRow){
       var radioButton = prevSelectedRow.querySelector("input[type='radio']");
       if (radioButton){
         radioButton.checked = false;
         radioButton.setAttribute("aria-checked", "false");
         radioButton.removeAttribute("checked");
       }
     }
    }
  
    gridState.pyRowSelectionIndex = currentSelectedIndex;

    //used to deselect the previous radio button based on the index
    var paramsStr = "rowIndex=" + currentSelectedIndex + "&deSelectRowIndex=" + previousSelectedIndex + "&selected=true&sourcePage=" + gridState.pageListProp + "&mode=" + mode;
    pega.u.invoke.runActivity(["", paramsStr, "", "", "", "", "", pega.u.d.selectTableRowsEncryptedUrl, ""]);
    
  }
  
  var _updateSelectedCount = function(event, uniqueID) {
    var selected = event.target.checked;
    event.target.setAttribute("aria-checked", selected);
    var gridInstance = pega.ui.tGrid(uniqueID);
    var gridEl = gridInstance.getGridElement();
    var gridState = gridInstance.state;
    var mode = gridInstance.getMetaData().gridWrapper.pyRowSelectionMode;
    var currentSelectedIndex = event.target.closest("tr").getAttribute("aria-rowindex") - 1;
    if(gridState.filteredSelectedRowsCount === undefined){
      gridState.filteredSelectedRowsCount = 0;
    }
     if(gridState.selectedRowsCount === undefined){
      gridState.selectedRowsCount = 0;
    }
    if(selected) {
      if(gridState.isFiltered==="true") {
      gridState.filteredSelectedRowsCount++;
      }
      gridState.selectedRowsCount++;

    } else {
     if(gridState.isFiltered==="true") {
      gridState.filteredSelectedRowsCount--;
     }
      gridState.selectedRowsCount--;
    }
 
    updateCountText(uniqueID, gridState.selectedRowsCount===0 ? gridInstance.getSourceLength() + " results" : gridState.selectedRowsCount + " selected");

    if(gridState.selectedRowsCount===0){  
        updateResult_Count(gridInstance.getSourceLength()+" results");
    }
    else{
      updateResult_Count(gridState.selectedRowsCount+" selected");
    }
         
    var headerCheckboxElement = gridEl.querySelector("th[role=columnheader] input[type=checkbox], th.expand-collapse input[type=checkbox]");
    if(headerCheckboxElement) {
      var selectedCount;
      if(gridState.isFiltered==="true"){
        selectedCount = gridState.filteredSelectedRowsCount; 
      }
      else{
        selectedCount = gridState.selectedRowsCount;     
      }
      if(selectedCount === 0) {
        headerCheckboxElement.setAttribute("aria-checked","false");
        headerCheckboxElement.checked = false;
      }
      else if(selectedCount === gridInstance.getSourceLength()) {
        headerCheckboxElement.setAttribute("aria-checked","true");
        headerCheckboxElement.checked = true;
      }
      else if(selectedCount < gridInstance.getSourceLength()) {
        headerCheckboxElement.setAttribute("aria-checked","mixed");
        headerCheckboxElement.checked = false;
      } 
    }
    
    var paramsStr = "rowIndex=" + currentSelectedIndex + "&selected="+ selected +"&sourcePage=" + gridState.pageListProp + "&mode=" + mode + "&selectAll=false";
    pega.u.invoke.runActivity(["", paramsStr, "", "", "", "", "", pega.u.d.selectTableRowsEncryptedUrl, ""]);
  }
  
  var _resetGridDirtyState = function (baseElement) {
    var sectionIds = pega.u.d.getSectionIds(baseElement);
    if (sectionIds && sectionIds.length && sectionIds.length >= 1) {
      var gridInstances = pega.u.d.getHarnessElements(false,false,true,sectionIds);
      if (gridInstances && gridInstances.length && gridInstances.length >= 1) {
        for (var j = 0; j < gridInstances.length; j++) {
          if (gridInstances[j].element && gridInstances[j].element instanceof pega.ui.tGrid) {
            gridInstances[j].element.dirty = false;
          }
        }
      }
    }
  }

  var _onGridFilterClose = function() {
    let onCloseCallback = {
            onClose: function() {
              var filterWrapper = $(document).find("div[data-node-id='pzGridFilterPanelWrapper']");
              if(filterWrapper && filterWrapper.length > 0){
                  filterWrapper[0].parentNode.removeChild(filterWrapper[0]);
               }
              pega.u.d.removePopOverListener(onCloseCallback);
            }
          }
    if (pega.u.d && pega.u.d.addPopOverListener) {
          pega.u.d.addPopOverListener(onCloseCallback);
        }
  }
    return {
        sortGridColumn: _sortGridColumn,
        sortColumnByName: _sortColumnByName,
        sortColumnByIndex: _sortColumnByIndex,
        sortClientSide: _sortClientSide,
        refreshGrid_Filter: refreshGrid_Filter,
        refreshGrid_Paginate: refreshGrid_Paginate,
        focusRow: _focusRow,
        editrow: _editrow,
        deleterow: _deleterow,
        submitModelDialog: _submitModelDialog,
        cancelModelDialog: _cancelModelDialog,
        refreshRow: _refreshRow,
        processGridActions: _processGridActions,
        composeRow: _composeRow,
        refreshList: _refreshList,
        refreshGrid: _refreshGrid,
        refreshGridInSection: _refreshGridInSection,
        focusColumnByIndex: _focusColumnByIndex,
        pagesToRemoveList : _pagesToRemoveList,
        postColumnVisibilityValues: _postColumnVisibilityValues,
        performPersonalizeAction : _performPersonalizeAction,
        performGridAjaxAction:_performGridAjaxAction,
        performOpenLocalAction:_performOpenLocalAction,
        publishGridAction:_publishGridAction,
        getSelectedRecord:_getSelectedRecord,
        clearPersonalizedDataPage:_clearPersonalizedDataPage,
        changeRowHeight:_changeRowHeight,
        activateMenuItems:_activateMenuItems,
        categorizeGrid : _categorizeGrid,
		    expandCollapseCategorizeGrid : _expandCollapseCategorizeGrid,
        gridCatExpandAll : _gridCatExpandAll,
        gridCatExpandAllCollapseAll: _gridCatExpandAllCollapseAll,
        changeColumnVisibilityStyles: _changeColumnVisibilityStyles,
        hideColumn: _hideColumn,
        refreshToolBarSection : _refreshToolBarSection,
        addInlineRow : _addInlineRow,
        deleteNamedView : _deleteNamedView,
        switchNamedView : _switchNamedView,
        createOrEditNamedView: _createOrEditNamedView,
        cleanDP : _cleanDP,        
        setDDFlag : _setDDFlag,
        changeGroupByButtonFocus : _changeGroupByButtonFocus,
        focusCategorizationDropdown : _focusCategorizationDropdown,
        searchGrid: _searchGrid,
        clearSearch: _clearSearch,
        toggleClearButton: _toggleClearButton,
        setAriaSelected:_setAriaSelected,
        setAriaExpanded:_setAriaExpanded,
        selectTableRows: _selectTableRows,
        handleSingleSelect: _handleSingleSelect,
        updateSelectedCount:_updateSelectedCount,
        updateTableLiveInfo:_updateTableLiveInfo,
        resetGridDirtyState:_resetGridDirtyState,
        onGridFilterClose: _onGridFilterClose
        
    };
})();
//static-content-hash-trigger-GCC
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzSortTemplate=B({"1":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"   "+((E=(H(F,"ifCond")||(I&&H(I,"ifCond"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),(I!=null?H(I,"pySortOrder"):I),"==","ASC",{name:"ifCond",hash:{},fn:C.program(2,G,0),inverse:C.program(4,G,0),data:G,loc:{start:{line:3,column:3},end:{line:3,column:97}}}))!=null?E:"")+"\n"},"2":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" "+C.escapeExpression(((E=(E=H(F,"pyAscSortText")||(I!=null?H(I,"pyAscSortText"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyAscSortText",hash:{},data:G,loc:{start:{line:3,column:39},end:{line:3,column:56}}}):E)))+" "},"4":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" "+C.escapeExpression(((E=(E=H(F,"pyDescSortText")||(I!=null?H(I,"pyDescSortText"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyDescSortText",hash:{},data:G,loc:{start:{line:3,column:67},end:{line:3,column:85}}}):E)))+" "},"6":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"    "+C.escapeExpression(((E=(E=H(F,"pySortText")||(I!=null?H(I,"pySortText"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pySortText",hash:{},data:G,loc:{start:{line:5,column:4},end:{line:5,column:18}}}):E)))+"\n"},"8":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"\n   "+((E=(H(F,"ifCond")||(I&&H(I,"ifCond"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),(I!=null?H(I,"pySortOrder"):I),"==","ASC",{name:"ifCond",hash:{},fn:C.program(2,G,0),inverse:C.program(4,G,0),data:G,loc:{start:{line:9,column:3},end:{line:9,column:97}}}))!=null?E:"")+"\n"},"10":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"    "+C.escapeExpression(((E=(E=H(F,"pySortText")||(I!=null?H(I,"pySortText"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pySortText",hash:{},data:G,loc:{start:{line:11,column:4},end:{line:11,column:18}}}):E)))+"\n   "},"12":function(C,G,E,D,F){return" selected "},"14":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'     <option value="'+C.escapeExpression(((E=(E=H(F,"pyPropName")||(I!=null?H(I,"pyPropName"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyPropName",hash:{},data:G,loc:{start:{line:15,column:20},end:{line:15,column:34}}}):E)))+'" data-Type="'+C.escapeExpression(((E=(E=H(F,"pyDataType")||(I!=null?H(I,"pyDataType"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyDataType",hash:{},data:G,loc:{start:{line:15,column:47},end:{line:15,column:61}}}):E)))+'" '+C.escapeExpression(((E=(E=H(F,"pySelected")||(I!=null?H(I,"pySelected"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pySelected",hash:{},data:G,loc:{start:{line:15,column:63},end:{line:15,column:77}}}):E)))+" >"+C.escapeExpression(((E=(E=H(F,"pyLabel")||(I!=null?H(I,"pyLabel"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyLabel",hash:{},data:G,loc:{start:{line:15,column:79},end:{line:15,column:91}}}):E)))+"</option>\n"},"16":function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return'<a href="#" title="'+((E=(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pySortOrder"):J),"==","ASC",{name:"ifCond",hash:{},fn:C.program(17,H,0),inverse:C.program(19,H,0),data:H,loc:{start:{line:19,column:19},end:{line:23,column:14}}}))!=null?E:"")+'" class="sortable-parent">\n   <span aria-hidden="true" src="" class=\'sortable sort-'+C.escapeExpression(((F=(F=I(G,"pySortOrder")||(J!=null?I(J,"pySortOrder"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pySortOrder",hash:{},data:H,loc:{start:{line:24,column:56},end:{line:24,column:71}}}):F)))+"' sortOrder= \""+C.escapeExpression(((F=(F=I(G,"pySortOrder")||(J!=null?I(J,"pySortOrder"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pySortOrder",hash:{},data:H,loc:{start:{line:24,column:85},end:{line:24,column:100}}}):F)))+'" /></span>\n</a>\n'},"17":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"\n   "+C.escapeExpression(((E=(E=H(F,"pyIconAscSortText")||(I!=null?H(I,"pyIconAscSortText"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyIconAscSortText",hash:{},data:G,loc:{start:{line:20,column:3},end:{line:20,column:24}}}):E)))+"\n"},"19":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"   "+C.escapeExpression(((E=(E=H(F,"pyIconDescSortText")||(I!=null?H(I,"pyIconDescSortText"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyIconDescSortText",hash:{},data:G,loc:{start:{line:22,column:3},end:{line:22,column:25}}}):E)))+"\n   "},"21":function(C,G,E,D,F){return'<a href="#" aria-hidden="true" class="sortable-parent">\n<span aria-hidden="true" src="" class=\'sortable\'/></span>\n</a>\n'},compiler:[8,">= 4.3.0"],main:function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return'<div node_name="pySortingGadget" class="sorting-gadget">\n'+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pySortOrder"):J),{name:"if",hash:{},fn:C.program(1,H,0),inverse:C.program(6,H,0),data:H,loc:{start:{line:2,column:1},end:{line:6,column:10}}}))!=null?E:"")+' <select class="dropdown standard" name="sort-columns" dataPageName ="'+C.escapeExpression(((F=(F=I(G,"pyDataPageName")||(J!=null?I(J,"pyDataPageName"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyDataPageName",hash:{},data:H,loc:{start:{line:7,column:70},end:{line:7,column:88}}}):F)))+'" sortOrder= "'+C.escapeExpression(((F=(F=I(G,"pySortOrder")||(J!=null?I(J,"pySortOrder"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pySortOrder",hash:{},data:H,loc:{start:{line:7,column:102},end:{line:7,column:117}}}):F)))+'" callbackObj ='+((E=(I(G,"callBackObjectParms")||(J&&I(J,"callBackObjectParms"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"CallBackObject"):J),{name:"callBackObjectParms",hash:{},data:H,loc:{start:{line:7,column:132},end:{line:7,column:172}}}))!=null?E:"")+' title =\n "'+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pySortOrder"):J),{name:"if",hash:{},fn:C.program(8,H,0),inverse:C.program(10,H,0),data:H,loc:{start:{line:8,column:2},end:{line:12,column:10}}}))!=null?E:"")+'" >\n  <option disabled '+((E=(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pySelectedColumn"):J),"===",undefined,{name:"ifCond",hash:{},fn:C.program(12,H,0),inverse:C.noop,data:H,loc:{start:{line:13,column:19},end:{line:13,column:84}}}))!=null?E:"")+' class="tg-nodisplay">'+C.escapeExpression(((F=(F=I(G,"pysortThisListBy")||(J!=null?I(J,"pysortThisListBy"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pysortThisListBy",hash:{},data:H,loc:{start:{line:13,column:106},end:{line:13,column:126}}}):F)))+"</option>"+((E=I(G,"each").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"ColumnList"):J),{name:"each",hash:{},fn:C.program(14,H,0),inverse:C.noop,data:H,loc:{start:{line:14,column:2},end:{line:16,column:12}}}))!=null?E:"")+"</select>\n"+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pySortOrder"):J),{name:"if",hash:{},fn:C.program(16,H,0),inverse:C.program(21,H,0),data:H,loc:{start:{line:18,column:0},end:{line:30,column:7}}}))!=null?E:"")+"</div>"},useData:true})})();Handlebars.registerHelper("callBackObjectParms",function(A){return JSON.stringify(A)});function sortDP(B){var L=pega.util.Event.getTarget(B);var N=L.nodeName;var J="";var C="ASC";var E="";var G="";if(L.options){J=L.options[L.selectedIndex].value;E=L;C="ASC"}else{if(N=="SPAN"){E=L.parentElement.previousElementSibling;J=E.value;var F=L.getAttribute("sortOrder");F=="ASC"?C="DESC":C="ASC"}}var A=E.getAttribute("callbackObj");var D=JSON.parse(A);var M=D.Name;var O=pega.c.eventParser.pegaStringToObject(M);var K=M.lastIndexOf(".");var H;if(K!=-1){var I=M.slice(0,K);H=pega.c.eventParser.pegaStringToObject(I)}if(J.indexOf(".")==0){J=J.substring(1)}O.call(H,J,D.params.pyUniqueId,C)}if(!window.gridEventsLoaded){$(document).on("change","div.sorting-gadget select.dropdown[name='sort-columns']",sortDP);$(document).on("click","div.sorting-gadget span.sortable",sortDP);window.gridEventsLoaded=true};
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridTemplate=B({"1":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'       <div class="grid-sorting-gadget tg-noFont-noDisplay">\n    	 '+((E=(H(F,"includeSortTemplate")||(I&&H(I,"includeSortTemplate"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),I,{name:"includeSortTemplate",hash:{},data:G,loc:{start:{line:8,column:6},end:{line:8,column:36}}}))!=null?E:"")+"\n       </div>\n"},"3":function(C,G,E,D,F){return"tg-nodisplay"},"5":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'    <div class="grid-filterbar-gadget">\n         '+((E=(H(F,"includeFilterbarGadget")||(I&&H(I,"includeFilterbarGadget"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),I,{name:"includeFilterbarGadget",hash:{},data:G,loc:{start:{line:17,column:9},end:{line:17,column:42}}}))!=null?E:"")+"\n    </div>\n"},"7":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'    <div class="grid-toolbar-section">\n     '+((E=(H(F,"includeToolbarSection")||(I&&H(I,"includeToolbarSection"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),I,{name:"includeToolbarSection",hash:{},data:G,loc:{start:{line:22,column:5},end:{line:22,column:37}}}))!=null?E:"")+"\n    </div>\n"},"9":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'    <div class="grid-personalization-icon">\n      '+((E=(H(F,"includePersonalizationIcon")||(I&&H(I,"includePersonalizationIcon"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),I,{name:"includePersonalizationIcon",hash:{},data:G,loc:{start:{line:26,column:6},end:{line:26,column:43}}}))!=null?E:"")+"\n    </div>\n"},"11":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'      <div class="paging-gadget-top '+((E=(H(F,"if_not_eq")||(I&&H(I,"if_not_eq"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),(I!=null?H(I,"responsive"):I),"true",{name:"if_not_eq",hash:{},fn:C.program(12,G,0),inverse:C.noop,data:G,loc:{start:{line:32,column:36},end:{line:32,column:109}}}))!=null?E:"")+' "> \n          '+C.escapeExpression((H(F,"includePartial")||(I&&H(I,"includePartial"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),"pzGridTemplatePaginate",{name:"includePartial",hash:{cache:"SAVE"},data:G,loc:{start:{line:33,column:10},end:{line:33,column:66}}}))+" \n      </div>\n"},"12":function(C,G,E,D,F){return" paging-gadget-alwaysShow  "},"14":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return"            "+C.escapeExpression((G(E,"includePartial")||(H&&G(H,"includePartial"))||C.hooks.helperMissing).call(H!=null?H:(C.nullContext||{}),"pzGridTemplatePaginate",{name:"includePartial",hash:{cache:"PLUCK"},data:F,loc:{start:{line:46,column:12},end:{line:46,column:69}}}))+"\n            "},"16":function(C,H,E,D,F){var G=C.lookupProperty||function(J,I){if(Object.prototype.hasOwnProperty.call(J,I)){return J[I]}return undefined};return" "+C.escapeExpression((G(E,"includePartial")||(H&&G(H,"includePartial"))||C.hooks.helperMissing).call(H!=null?H:(C.nullContext||{}),"pzGridTemplatePaginate",{name:"includePartial",hash:{},data:F,loc:{start:{line:47,column:21},end:{line:47,column:64}}}))+"\n"},compiler:[8,">= 4.3.0"],main:function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return"<div CLASS='template-root-marker gridDefault "+C.escapeExpression(((F=(F=I(G,"pzContainerClass")||(J!=null?I(J,"pzContainerClass"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pzContainerClass",hash:{},data:H,loc:{start:{line:1,column:45},end:{line:1,column:65}}}):F)))+"' id='"+C.escapeExpression(((F=(F=I(G,"refId")||(J!=null?I(J,"refId"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"refId",hash:{},data:H,loc:{start:{line:1,column:71},end:{line:1,column:80}}}):F)))+"' "+((E=((F=(F=I(G,"pxGridActions")||(J!=null?I(J,"pxGridActions"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pxGridActions",hash:{},data:H,loc:{start:{line:1,column:82},end:{line:1,column:101}}}):F)))!=null?E:"")+'>\n  <div id="PEGA_GRID_SKIIN" class="'+C.escapeExpression(((F=(F=I(G,"pzClass")||(J!=null?I(J,"pzClass"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pzClass",hash:{},data:H,loc:{start:{line:2,column:35},end:{line:2,column:46}}}):F)))+'">\n  '+((E=(I(G,"prepareMetaDataPageInServer")||(J&&I(J,"prepareMetaDataPageInServer"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),J,{name:"prepareMetaDataPageInServer",hash:{},data:H,loc:{start:{line:3,column:2},end:{line:3,column:40}}}))!=null?E:"")+'\n  <div class="grid-gadgets-wrapper">\n    <div class="grid-sort-filter">\n'+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"responsive"):J),"eq","true",{name:"ifCond",hash:{},data:H,loc:{start:{line:6,column:19},end:{line:6,column:50}}}),"and",(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),((E=(J!=null?I(J,"gridWrapper"):J))!=null?I(E,"isCategorizationEnabled"):E),"eq","false",{name:"ifCond",hash:{},data:H,loc:{start:{line:6,column:57},end:{line:6,column:119}}}),{name:"ifCond",hash:{},data:H,loc:{start:{line:6,column:11},end:{line:6,column:120}}}),{name:"if",hash:{},fn:C.program(1,H,0),inverse:C.noop,data:H,loc:{start:{line:6,column:5},end:{line:10,column:13}}}))!=null?E:"")+'       <div class="grid-filtering-gadget '+((E=(I(G,"if_not_eq")||(J&&I(J,"if_not_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyShowFiltersInModal"):J),"true",{name:"if_not_eq",hash:{},fn:C.program(3,H,0),inverse:C.noop,data:H,loc:{start:{line:11,column:41},end:{line:11,column:109}}}))!=null?E:"")+'">\n          '+((E=(I(G,"includeFilterGadget")||(J&&I(J,"includeFilterGadget"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),J,{name:"includeFilterGadget",hash:{},data:H,loc:{start:{line:12,column:10},end:{line:12,column:40}}}))!=null?E:"")+"\n       </div>\n    </div>\n"+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"responsive"):J),"eq","true",{name:"ifCond",hash:{},data:H,loc:{start:{line:15,column:17},end:{line:15,column:48}}}),"and",(I(G,"ifCond")||(J&&I(J,"ifCond"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),((E=(J!=null?I(J,"gridWrapper"):J))!=null?I(E,"isCategorizationEnabled"):E),"eq","false",{name:"ifCond",hash:{},data:H,loc:{start:{line:15,column:55},end:{line:15,column:117}}}),{name:"ifCond",hash:{},data:H,loc:{start:{line:15,column:9},end:{line:15,column:118}}}),{name:"if",hash:{},fn:C.program(5,H,0),inverse:C.noop,data:H,loc:{start:{line:15,column:3},end:{line:19,column:10}}}))!=null?E:"")+((E=(I(G,"if_eq")||(J&&I(J,"if_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"generateToolbar"):J),true,{name:"if_eq",hash:{},fn:C.program(7,H,0),inverse:C.program(9,H,0),data:H,loc:{start:{line:20,column:4},end:{line:28,column:14}}}))!=null?E:"")+"    \n    \n"+((E=(I(G,"if_not_eq")||(J&&I(J,"if_not_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"generateToolbar"):J),true,{name:"if_not_eq",hash:{},fn:C.program(11,H,0),inverse:C.noop,data:H,loc:{start:{line:31,column:4},end:{line:35,column:18}}}))!=null?E:"")+'    \n   </div>\n    <div id="PEGA_GRID_CONTENT" class=\''+C.escapeExpression(((F=(F=I(G,"pzContentClass")||(J!=null?I(J,"pzContentClass"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pzContentClass",hash:{},data:H,loc:{start:{line:38,column:39},end:{line:38,column:57}}}):F)))+" tg-clear' propertyType='"+C.escapeExpression(((F=(F=I(G,"pzPropertyType")||(J!=null?I(J,"pzPropertyType"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pzPropertyType",hash:{},data:H,loc:{start:{line:38,column:82},end:{line:38,column:100}}}):F)))+"' pl_prop = '"+C.escapeExpression(((F=(F=I(G,"pyPageListProperty")||(J!=null?I(J,"pyPageListProperty"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyPageListProperty",hash:{},data:H,loc:{start:{line:38,column:113},end:{line:38,column:135}}}):F)))+'\' >\n        <div id="gridBody_right"  >\n          <!-- grid body --->\n          '+C.escapeExpression((I(G,"includePartial")||(J&&I(J,"includePartial"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),"pzGridTemplateMini",{name:"includePartial",hash:{},data:H,loc:{start:{line:41,column:10},end:{line:41,column:49}}}))+'\n         </div>\n     </div>  \n     <div class="paging-gadget-bottom '+((E=(I(G,"if_not_eq")||(J&&I(J,"if_not_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"responsive"):J),"true",{name:"if_not_eq",hash:{},fn:C.program(12,H,0),inverse:C.noop,data:H,loc:{start:{line:44,column:38},end:{line:44,column:111}}}))!=null?E:"")+'"> \n'+((E=(I(G,"if_not_eq")||(J&&I(J,"if_not_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"generateToolbar"):J),true,{name:"if_not_eq",hash:{},fn:C.program(14,H,0),inverse:C.program(16,H,0),data:H,loc:{start:{line:45,column:10},end:{line:48,column:24}}}))!=null?E:"")+"      </div>\n   </div>\n</div>"},useData:true})})();
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridSortTemplate=B({compiler:[8,">= 4.3.0"],main:function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return((E=(H(F,"includeSortTemplate")||(I&&H(I,"includeSortTemplate"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),I,{name:"includeSortTemplate",hash:{},data:G,loc:{start:{line:1,column:0},end:{line:1,column:30}}}))!=null?E:"")},useData:true})})();
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridTemplatePaginate=B({"1":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"      <div>"+((E=(H(F,"generatePaginationMeta")||(I&&H(I,"generatePaginationMeta"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),I,{name:"generatePaginationMeta",hash:{},data:G,loc:{start:{line:2,column:11},end:{line:2,column:44}}}))!=null?E:"")+"</div>\n"},compiler:[8,">= 4.3.0"],main:function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return((E=H(F,"if").call(I!=null?I:(C.nullContext||{}),(I!=null?H(I,"pyPagingSettings"):I),{name:"if",hash:{},fn:C.program(1,G,0),inverse:C.noop,data:G,loc:{start:{line:1,column:0},end:{line:3,column:7}}}))!=null?E:"")},useData:true})})();
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridTemplateRow=B({"1":function(D,K,E,I,G,J,L){var C,F,H=D.lookupProperty||function(N,M){if(Object.prototype.hasOwnProperty.call(N,M)){return N[M]}return undefined};return"    <tr "+D.escapeExpression(D.lambda(((C=(K!=null?H(K,"dataRow"):K))!=null?H(C,"automationId"):C),K))+" "+((C=H(E,"if").call(K!=null?K:(D.nullContext||{}),(K!=null?H(K,"pyExpressionIdMeta"):K),{name:"if",hash:{},fn:D.program(2,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:2,column:38},end:{line:2,column:153}}}))!=null?C:"")+" class='cellCont"+((C=H(E,"if").call(K!=null?K:(D.nullContext||{}),((C=(K!=null?H(K,"dataRow"):K))!=null?H(C,"isSelected"):C),{name:"if",hash:{},fn:D.program(5,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:2,column:169},end:{line:2,column:224}}}))!=null?C:"")+'\' role="row" data-row="true" aria-rowindex=\''+D.escapeExpression((H(E,"math")||(K&&H(K,"math"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),((C=(K!=null?H(K,"dataRow"):K))!=null?H(C,"index"):C),"+",1,{name:"math",hash:{},data:G,loc:{start:{line:2,column:268},end:{line:2,column:301}}}))+"' name='BASE_REF' base_ref='"+((C=D.lambda(((C=(K!=null?H(K,"dataRow"):K))!=null?H(C,"base_ref"):C),K))!=null?C:"")+"' data-row-identifier='"+D.escapeExpression(D.lambda((K!=null?H(K,"rowIdentifier"):K),K))+"'>\n"+((C=(H(E,"if_eq")||(K&&H(K,"if_eq"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),(K!=null?H(K,"showRowSelection"):K),true,{name:"if_eq",hash:{},fn:D.program(7,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:3,column:6},end:{line:9,column:16}}}))!=null?C:"")+"      \n      <td class='gridCell expand-collapse "+((C=H(E,"if").call(K!=null?K:(D.nullContext||{}),((C=(K!=null?H(K,"dataRow"):K))!=null?H(C,"isSelected"):C),{name:"if",hash:{},fn:D.program(10,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:11,column:42},end:{line:11,column:96}}}))!=null?C:"")+'\'  role="gridcell" class="gridCell " data-template-type="'+D.escapeExpression(((F=(F=H(E,"_dataTemplateType")||(K!=null?H(K,"_dataTemplateType"):K))!=null?F:D.hooks.helperMissing),(typeof F==="function"?F.call(K!=null?K:(D.nullContext||{}),{name:"_dataTemplateType",hash:{},data:G,loc:{start:{line:11,column:153},end:{line:11,column:174}}}):F)))+'" aria-colindex="0" style="">\n'+((C=(H(E,"if_eq")||(K&&H(K,"if_eq"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),(K!=null?H(K,"showRowSelection"):K),true,{name:"if_eq",hash:{},fn:D.program(12,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:12,column:6},end:{line:17,column:16}}}))!=null?C:"")+"      </td>\n"+((C=H(E,"each").call(K!=null?K:(D.nullContext||{}),((C=(K!=null?H(K,"dataRow"):K))!=null?H(C,"dataCells"):C),{name:"each",hash:{},fn:D.program(15,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:19,column:14},end:{line:23,column:23}}}))!=null?C:"")+"            </tr>  \n"},"2":function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return" "+C.escapeExpression(((F=(F=I(G,"pyExpressionIdMeta")||(J!=null?I(J,"pyExpressionIdMeta"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyExpressionIdMeta",hash:{},data:H,loc:{start:{line:2,column:70},end:{line:2,column:92}}}):F)))+" "+((E=(I(G,"if_eq")||(J&&I(J,"if_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyHide"):J),true,{name:"if_eq",hash:{},fn:C.program(3,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:93},end:{line:2,column:145}}}))!=null?E:"")+" "},"3":function(C,G,E,D,F){return"style='display:none'"},"5":function(C,G,E,D,F){return" gridCellSelected"},"7":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return((E=(H(F,"if_eq")||(I&&H(I,"if_eq"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),(I!=null?H(I,"isTableCategorized"):I),"false",{name:"if_eq",hash:{},fn:C.program(8,G,0),inverse:C.noop,data:G,loc:{start:{line:4,column:6},end:{line:8,column:16}}}))!=null?E:"")},"8":function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return'      <td role="gridcell" class="rowSelection gridCell  " data-template-type="'+C.escapeExpression(((F=(F=I(G,"_dataTemplateType")||(J!=null?I(J,"_dataTemplateType"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_dataTemplateType",hash:{},data:H,loc:{start:{line:5,column:78},end:{line:5,column:99}}}):F)))+'" aria-colindex="0" style="width: 0%"><input type="hidden" value="false" name="'+C.escapeExpression(((F=(F=I(G,"pageListPropHandle")||(J!=null?I(J,"pageListPropHandle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pageListPropHandle",hash:{},data:H,loc:{start:{line:5,column:178},end:{line:5,column:200}}}):F)))+"$l"+C.escapeExpression(C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"index"):E),J))+'$ppySelected">\n<input type="'+C.escapeExpression(((F=(F=I(G,"_type")||(J!=null?I(J,"_type"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_type",hash:{},data:H,loc:{start:{line:6,column:13},end:{line:6,column:22}}}):F)))+'" '+((E=C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"pySelected"):E),J))!=null?E:"")+' data-template="" class="'+C.escapeExpression(((F=(F=I(G,"_class")||(J!=null?I(J,"_class"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_class",hash:{},data:H,loc:{start:{line:6,column:78},end:{line:6,column:88}}}):F)))+'" value="true" name="'+C.escapeExpression(((F=(F=I(G,"pageListPropHandle")||(J!=null?I(J,"pageListPropHandle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pageListPropHandle",hash:{},data:H,loc:{start:{line:6,column:109},end:{line:6,column:131}}}):F)))+"$l"+C.escapeExpression(C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"index"):E),J))+'$ppySelected" aria-describedby="'+C.escapeExpression(((F=(F=I(G,"pageListPropHandle")||(J!=null?I(J,"pageListPropHandle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pageListPropHandle",hash:{},data:H,loc:{start:{line:6,column:187},end:{line:6,column:209}}}):F)))+"$l"+C.escapeExpression(C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"index"):E),J))+'$ppySelectedError " validationtype="true-false" data-ctl="" data-click=\''+((E=((F=(F=I(G,"_dataClickForRows")||(J!=null?I(J,"_dataClickForRows"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_dataClickForRows",hash:{},data:H,loc:{start:{line:6,column:305},end:{line:6,column:328}}}):F)))!=null?E:"")+'\' aria-invalid="false" tabindex="-1" aria-label=\''+((E=C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"ariaLabel"):E),J))!=null?E:"")+'\' style="height: 21px !important; width: 21px !important">\n<label for="" class=""></label></td>\n'},"10":function(C,G,E,D,F){return"gridCellSelected"},"12":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return((E=(H(F,"if_eq")||(I&&H(I,"if_eq"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),(I!=null?H(I,"isTableCategorized"):I),"true",{name:"if_eq",hash:{},fn:C.program(13,G,0),inverse:C.noop,data:G,loc:{start:{line:13,column:6},end:{line:16,column:16}}}))!=null?E:"")},"13":function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return'        <input type="hidden" value="false" name="'+C.escapeExpression(((F=(F=I(G,"pageListPropHandle")||(J!=null?I(J,"pageListPropHandle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pageListPropHandle",hash:{},data:H,loc:{start:{line:14,column:49},end:{line:14,column:71}}}):F)))+"$l"+C.escapeExpression(C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"index"):E),J))+'$ppySelected">\n<input type="'+C.escapeExpression(((F=(F=I(G,"_type")||(J!=null?I(J,"_type"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_type",hash:{},data:H,loc:{start:{line:15,column:13},end:{line:15,column:22}}}):F)))+'" '+((E=C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"pySelected"):E),J))!=null?E:"")+' data-template="" class="'+C.escapeExpression(((F=(F=I(G,"_class")||(J!=null?I(J,"_class"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_class",hash:{},data:H,loc:{start:{line:15,column:78},end:{line:15,column:88}}}):F)))+'" value="true" name="'+C.escapeExpression(((F=(F=I(G,"pageListPropHandle")||(J!=null?I(J,"pageListPropHandle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pageListPropHandle",hash:{},data:H,loc:{start:{line:15,column:109},end:{line:15,column:131}}}):F)))+"$l"+C.escapeExpression(C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"index"):E),J))+'$ppySelected" aria-describedby="'+C.escapeExpression(((F=(F=I(G,"pageListPropHandle")||(J!=null?I(J,"pageListPropHandle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pageListPropHandle",hash:{},data:H,loc:{start:{line:15,column:187},end:{line:15,column:209}}}):F)))+"$l"+C.escapeExpression(C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"index"):E),J))+'$ppySelectedError " validationtype="true-false" data-ctl="" data-click=\''+((E=((F=(F=I(G,"_dataClickForRows")||(J!=null?I(J,"_dataClickForRows"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"_dataClickForRows",hash:{},data:H,loc:{start:{line:15,column:305},end:{line:15,column:328}}}):F)))!=null?E:"")+'\' aria-invalid="false" tabindex="-1" aria-label=\''+((E=C.lambda(((E=(J!=null?I(J,"dataRow"):J))!=null?I(E,"ariaLabel"):E),J))!=null?E:"")+'\' style="height: 21px !important; width: 21px !important; margin-left: 18px !important;">\n'},"15":function(D,J,E,H,F,I,K){var C,G=D.lookupProperty||function(M,L){if(Object.prototype.hasOwnProperty.call(M,L)){return M[L]}return undefined};return((C=(G(E,"if_not_eq")||(J&&G(J,"if_not_eq"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"pyShow"):J),false,{name:"if_not_eq",hash:{},fn:D.program(16,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:20,column:14},end:{line:22,column:28}}}))!=null?C:"")},"16":function(D,K,E,I,G,J,L){var C,F,H=D.lookupProperty||function(N,M){if(Object.prototype.hasOwnProperty.call(N,M)){return N[M]}return undefined};return"                <td role='"+((C=(H(E,"if_eq")||(K&&H(K,"if_eq"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),(K!=null?H(K,"pyColumnImportance"):K),"primary",{name:"if_eq",hash:{},fn:D.program(17,G,0,J,L),inverse:D.program(19,G,0,J,L),data:G,loc:{start:{line:21,column:26},end:{line:21,column:100}}}))!=null?C:"")+"' class='gridCell "+((C=H(E,"if").call(K!=null?K:(D.nullContext||{}),((C=(L[3]!=null?H(L[3],"dataRow"):L[3]))!=null?H(C,"isSelected"):C),{name:"if",hash:{},fn:D.program(10,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:21,column:118},end:{line:21,column:181}}}))!=null?C:"")+" "+((C=(H(E,"getPropertyValue")||(K&&H(K,"getPropertyValue"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),(K!=null?H(K,"pyDataReadOnlyStyle"):K),{name:"getPropertyValue",hash:{},data:G,loc:{start:{line:21,column:182},end:{line:21,column:224}}}))!=null?C:"")+"' "+((C=H(E,"if").call(K!=null?K:(D.nullContext||{}),(L[2]!=null?H(L[2],"pyGridCategorization"):L[2]),{name:"if",hash:{},fn:D.program(21,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:21,column:226},end:{line:21,column:325}}}))!=null?C:"")+" aria-colindex='"+D.escapeExpression((H(E,"math")||(K&&H(K,"math"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),(G&&H(G,"index")),"+",1,{name:"math",hash:{},data:G,loc:{start:{line:21,column:341},end:{line:21,column:362}}}))+"' data-importance='"+((C=((F=(F=H(E,"pyColumnImportance")||(K!=null?H(K,"pyColumnImportance"):K))!=null?F:D.hooks.helperMissing),(typeof F==="function"?F.call(K!=null?K:(D.nullContext||{}),{name:"pyColumnImportance",hash:{},data:G,loc:{start:{line:21,column:381},end:{line:21,column:405}}}):F)))!=null?C:"")+"' data-attribute-name='"+((C=((F=(F=H(E,"pyHeaderLabel")||(K!=null?H(K,"pyHeaderLabel"):K))!=null?F:D.hooks.helperMissing),(typeof F==="function"?F.call(K!=null?K:(D.nullContext||{}),{name:"pyHeaderLabel",hash:{},data:G,loc:{start:{line:21,column:428},end:{line:21,column:447}}}):F)))!=null?C:"")+"' data-template-type='"+((C=H(E,"each").call(K!=null?K:(D.nullContext||{}),(K!=null?H(K,"pyTemplates"):K),{name:"each",hash:{},fn:D.program(24,G,0,J,L),inverse:D.noop,data:G,loc:{start:{line:21,column:469},end:{line:21,column:509}}}))!=null?C:"")+"' "+((C=((F=(F=H(E,"data-ui-meta")||(K!=null?H(K,"data-ui-meta"):K))!=null?F:D.hooks.helperMissing),(typeof F==="function"?F.call(K!=null?K:(D.nullContext||{}),{name:"data-ui-meta",hash:{},data:G,loc:{start:{line:21,column:511},end:{line:21,column:529}}}):F)))!=null?C:"")+" style='"+((C=((F=(F=H(E,"pyDataInlineStyle")||(K!=null?H(K,"pyDataInlineStyle"):K))!=null?F:D.hooks.helperMissing),(typeof F==="function"?F.call(K!=null?K:(D.nullContext||{}),{name:"pyDataInlineStyle",hash:{},data:G,loc:{start:{line:21,column:537},end:{line:21,column:560}}}):F)))!=null?C:"")+"'>"+D.escapeExpression((H(E,"includePartial")||(K&&H(K,"includePartial"))||D.hooks.helperMissing).call(K!=null?K:(D.nullContext||{}),"pzGridCellTemplate",{name:"includePartial",hash:{},data:G,loc:{start:{line:21,column:562},end:{line:21,column:601}}}))+"</td>\n"},"17":function(C,G,E,D,F){return"rowheader"},"19":function(C,G,E,D,F){return"gridcell"},"21":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" "+((E=H(F,"if").call(I!=null?I:(C.nullContext||{}),(H(F,"ifCond")||(I&&H(I,"ifCond"))||C.hooks.helperMissing).call(I!=null?I:(C.nullContext||{}),(G&&H(G,"index")),"eq","0",{name:"ifCond",hash:{},data:G,loc:{start:{line:21,column:272},end:{line:21,column:296}}}),{name:"if",hash:{},fn:C.program(22,G,0),inverse:C.noop,data:G,loc:{start:{line:21,column:266},end:{line:21,column:317}}}))!=null?E:"")+" "},"22":function(C,G,E,D,F){return' colspan="1"'},"24":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return C.escapeExpression(((E=(E=H(F,"pyName")||(I!=null?H(I,"pyName"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyName",hash:{},data:G,loc:{start:{line:21,column:490},end:{line:21,column:500}}}):E)))},compiler:[8,">= 4.3.0"],main:function(D,J,E,H,F,I,K){var C,G=D.lookupProperty||function(M,L){if(Object.prototype.hasOwnProperty.call(M,L)){return M[L]}return undefined};return((C=(G(E,"gridRowIterator")||(J&&G(J,"gridRowIterator"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),((C=(J!=null?G(J,"params"):J))!=null?G(C,"startIndex"):C),((C=(J!=null?G(J,"params"):J))!=null?G(C,"endIndex"):C),J,{name:"gridRowIterator",hash:{},fn:D.program(1,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:1,column:0},end:{line:25,column:20}}}))!=null?C:"")},useData:true,useDepths:true})})();(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridCellTemplate=B({"1":function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return"<span></span><span "+C.escapeExpression(((F=(F=I(G,"pyExpressionIdMeta")||(J!=null?I(J,"pyExpressionIdMeta"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyExpressionIdMeta",hash:{},data:H,loc:{start:{line:1,column:82},end:{line:1,column:104}}}):F)))+((E=(I(G,"if_eq")||(J&&I(J,"if_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyHide"):J),true,{name:"if_eq",hash:{},fn:C.program(2,H,0),inverse:C.noop,data:H,loc:{start:{line:1,column:104},end:{line:1,column:157}}}))!=null?E:"")+">"},"2":function(C,G,E,D,F){return" style='display:none'"},"4":function(C,G,E,D,F){return"</span>"},compiler:[8,">= 4.3.0"],main:function(D,J,E,H,F,I,K){var C,G=D.lookupProperty||function(M,L){if(Object.prototype.hasOwnProperty.call(M,L)){return M[L]}return undefined};return((C=(G(E,"prepareVisibilityInfo")||(J&&G(J,"prepareVisibilityInfo"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),J,{name:"prepareVisibilityInfo",hash:{},data:F,loc:{start:{line:1,column:0},end:{line:1,column:32}}}))!=null?C:"")+((C=G(E,"if").call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"pyExpressionIdMeta"):J),{name:"if",hash:{},fn:D.program(1,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:1,column:32},end:{line:1,column:165}}}))!=null?C:"")+((C=(G(E,"renderControl")||(J&&G(J,"renderControl"))||D.hooks.helperMissing).call(J!=null?J:(D.nullContext||{}),J,((C=(K[1]!=null?G(K[1],"gridRowHelperData"):K[1]))!=null?G(C,"refId"):C),((C=(K[1]!=null?G(K[1],"dataRow"):K[1]))!=null?G(C,"index"):C),((C=(K[1]!=null?G(K[1],"gridRowHelperData"):K[1]))!=null?G(C,"instanceId"):C),(F&&G(F,"index")),(K[1]!=null?G(K[1],"pyUniqueId"):K[1]),{name:"renderControl",hash:{},data:F,loc:{start:{line:1,column:165},end:{line:1,column:296}}}))!=null?C:"")+((C=G(E,"if").call(J!=null?J:(D.nullContext||{}),(J!=null?G(J,"pyExpressionIdMeta"):J),{name:"if",hash:{},fn:D.program(4,F,0,I,K),inverse:D.noop,data:F,loc:{start:{line:1,column:296},end:{line:1,column:341}}}))!=null?C:"")},useData:true,useDepths:true})})();
(function(){var l=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).pzGridTemplateHeaderRow=l({1:function(b,a,g,c,f){var h;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return(null!=(h=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"isTableCategorized"):a,"true",{name:"if_eq",hash:{},fn:b.program(2,f,0),inverse:b.noop,data:f,loc:{start:{line:3,column:3},end:{line:6,column:12}}}))?h:
"")+(null!=(h=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"isTableCategorized"):a,"false",{name:"if_eq",hash:{},fn:b.program(4,f,0),inverse:b.noop,data:f,loc:{start:{line:7,column:2},end:{line:11,column:14}}}))?h:"")},2:function(b,a,g,c,f){var h,d;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'   \x3cth class\x3d"rowSelectionHeader cellCont expand-collapse" tabindex\x3d"-1" aria-label\x3d"Expand/collapse Select" \x3e\x3ci  data-ctl aria-label\x3d"'+
(null!=(h=(d=null!=(d=c(g,"ariaCollapseLabel")||(null!=a?c(a,"ariaCollapseLabel"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"ariaCollapseLabel",hash:{},data:f,loc:{start:{line:4,column:135},end:{line:4,column:158}}}):d))?h:"")+'" data-keydown\x3d"[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.gridCatExpandAllCollapseAll(event)\x26quot;],,\x26quot;enter\x26quot;]]" data-click\x3d"[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.gridCatExpandAllCollapseAll(event)\x26quot;]]]" tabindex\x3d\'0\'  aria-expanded\x3d"true" role\x3d"button" class\x3d"pi caret-down-icon"\x3e\x3c/i\x3e\x3cinput type\x3d"hidden" value\x3d"false" name\x3d"$P'+
b.escapeExpression((d=null!=(d=c(g,"dataPageName")||(null!=a?c(a,"dataPageName"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"dataPageName",hash:{},data:f,loc:{start:{line:4,column:526},end:{line:4,column:542}}}):d))+'$ppySelected"\x3e\n\x3cinput type\x3d"checkbox" data-template\x3d"" class\x3d"checkbox chkBxCtl selectChkbxCtl" value\x3d"true" name\x3d"'+b.escapeExpression((d=null!=(d=c(g,"dataPageName")||(null!=a?c(a,"dataPageName"):a))?d:b.hooks.helperMissing,
"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"dataPageName",hash:{},data:f,loc:{start:{line:5,column:100},end:{line:5,column:116}}}):d))+'$ppySelected" aria-describedby\x3d"$'+b.escapeExpression((d=null!=(d=c(g,"dataPageName")||(null!=a?c(a,"dataPageName"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"dataPageName",hash:{},data:f,loc:{start:{line:5,column:149},end:{line:5,column:165}}}):d))+'$ppySelectedError"  validationtype\x3d"true-false" aria-label\x3d"Select All" data-ctl\x3d"Checkbox" '+
(null!=(h=(d=null!=(d=c(g,"pySelectAllChecked")||(null!=a?c(a,"pySelectAllChecked"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"pySelectAllChecked",hash:{},data:f,loc:{start:{line:5,column:257},end:{line:5,column:281}}}):d))?h:"")+' data-click\x3d"'+(null!=(h=(d=null!=(d=c(g,"_dataClickForHeaderRow")||(null!=a?c(a,"_dataClickForHeaderRow"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"_dataClickForHeaderRow",
hash:{},data:f,loc:{start:{line:5,column:294},end:{line:5,column:322}}}):d))?h:"")+'" aria-invalid\x3d"false" style\x3d"margin-right: 1px !important; margin-top: 3px !important;"\x3e\x3c/th\x3e\n'},4:function(b,a,g,c,f){var h,d;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return' \x3cth class\x3d"rowSelectionHeader cellCont gridCell pointerStyle selectableColumn" aria-label\x3d"Select" role\x3d"columnheader" style\x3d"width: 100px; "\x3e\x3cinput type\x3d"hidden" value\x3d"false" name\x3d"$P'+
b.escapeExpression((d=null!=(d=c(g,"dataPageName")||(null!=a?c(a,"dataPageName"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"dataPageName",hash:{},data:f,loc:{start:{line:8,column:186},end:{line:8,column:202}}}):d))+'$ppySelected"\x3e\n\x3cinput type\x3d"checkbox" data-template\x3d"" tabindex\x3d"0"  class\x3d"checkbox chkBxCtl selectChkbxCtl"  value\x3d"true" name\x3d"$P'+b.escapeExpression((d=null!=(d=c(g,"dataPageName")||(null!=a?c(a,"dataPageName"):
a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"dataPageName",hash:{},data:f,loc:{start:{line:9,column:117},end:{line:9,column:133}}}):d))+'$ppySelected" aria-describedby\x3d"$P'+b.escapeExpression((d=null!=(d=c(g,"dataPageName")||(null!=a?c(a,"dataPageName"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"dataPageName",hash:{},data:f,loc:{start:{line:9,column:167},end:{line:9,column:183}}}):d))+'$ppySelectedError " '+
(null!=(h=(d=null!=(d=c(g,"pySelectAllChecked")||(null!=a?c(a,"pySelectAllChecked"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"pySelectAllChecked",hash:{},data:f,loc:{start:{line:9,column:203},end:{line:9,column:227}}}):d))?h:"")+'  validationtype\x3d"true-false" aria-label\x3d"Select All" data-ctl\x3d"Checkbox" data-click\x3d"'+(null!=(h=(d=null!=(d=c(g,"_dataClickForHeaderRow")||(null!=a?c(a,"_dataClickForHeaderRow"):a))?d:b.hooks.helperMissing,"function"===
typeof d?d.call(null!=a?a:b.nullContext||{},{name:"_dataClickForHeaderRow",hash:{},data:f,loc:{start:{line:9,column:313},end:{line:9,column:341}}}):d))?h:"")+'" aria-invalid\x3d"false"\x3e\n  \x3c/th\x3e\n'},6:function(b,a,g,c,f){var h;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return(null!=(h=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"isTableCategorized"):a,"false",{name:"if_eq",hash:{},fn:b.program(7,
f,0),inverse:b.noop,data:f,loc:{start:{line:14,column:5},end:{line:17,column:14}}}))?h:"")+(null!=(h=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"isTableCategorized"):a,"true",{name:"if_eq",hash:{},fn:b.program(9,f,0),inverse:b.noop,data:f,loc:{start:{line:18,column:4},end:{line:20,column:14}}}))?h:"")},7:function(b,a,g,c,f){return' \x3cth class\x3d"cellCont gridCell pointerStyle selectableColumn singleSelectHeader" aria-label\x3d"Select" role\x3d"columnheader" data-order\x3d"0" style\x3d"width: 100px; " \x3e\x3cdiv tabindex\x3d"-1" role\x3d"button" class\x3d"gridHeaderLabel "\x3e\x3c/div\x3e\n \x3c/th\x3e\n'},
9:function(b,a,g,c,f){var h,d;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'    \x3cth class\x3d"cellCont expand-collapse singleSelectHeader" tabindex\x3d"-1" aria-label\x3d"Expand/collapse Select" \x3e\x3ci  data-ctl aria-label\x3d"'+(null!=(h=(d=null!=(d=c(g,"ariaCollapseLabel")||(null!=a?c(a,"ariaCollapseLabel"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"ariaCollapseLabel",hash:{},data:f,loc:{start:{line:19,
column:136},end:{line:19,column:159}}}):d))?h:"")+'" data-keydown\x3d"[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.gridCatExpandAllCollapseAll(event)\x26quot;],,\x26quot;enter\x26quot;]]" data-click\x3d"[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.gridCatExpandAllCollapseAll(event)\x26quot;]]]" tabindex\x3d\'0\'  aria-expanded\x3d"true" role\x3d"button" class\x3d"pi caret-down-icon"\x3e\x3c/i\x3e\x3c/th\x3e\n'},11:function(b,a,g,c,f){var h,d;c=b.lookupProperty||
function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'   \x3cth class\x3d"cellCont expand-collapse" tabindex\x3d"-1" aria-label\x3d"Expand/collapse" \x3e\x3ci  data-ctl aria-label\x3d"'+(null!=(h=(d=null!=(d=c(g,"ariaCollapseLabel")||(null!=a?c(a,"ariaCollapseLabel"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"ariaCollapseLabel",hash:{},data:f,loc:{start:{line:23,column:109},end:{line:23,column:132}}}):d))?h:"")+'" data-keydown\x3d"[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.gridCatExpandAllCollapseAll(event)\x26quot;],,\x26quot;enter\x26quot;]]" data-click\x3d"[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.gridCatExpandAllCollapseAll(event)\x26quot;]]]" tabindex\x3d\'0\'  aria-expanded\x3d"true" role\x3d"button" class\x3d"pi caret-down-icon"\x3e\x3c/i\x3e\x3c/th\x3e\n'},
13:function(b,a,g,c,f,h,d){var k;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return null!=(k=(c(g,"if_not_eq")||a&&c(a,"if_not_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyShow"):a,!1,{name:"if_not_eq",hash:{},fn:b.program(14,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:26,column:18},end:{line:37,column:19}}}))?k:""},14:function(b,a,g,c,f,h,d){var k,e;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,
b))return a[b]};return" \x3cth "+b.escapeExpression((e=null!=(e=c(g,"automationId")||(null!=a?c(a,"automationId"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"automationId",hash:{},data:f,loc:{start:{line:27,column:5},end:{line:27,column:21}}}):e))+" data-order \x3d'"+(null!=(k=(e=null!=(e=c(g,"pyOrder")||(null!=a?c(a,"pyOrder"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyOrder",hash:{},data:f,loc:{start:{line:27,
column:35},end:{line:27,column:48}}}):e))?k:"")+"' aria-label \x3d '"+(null!=(k=(e=null!=(e=c(g,"pyHeaderLabel")||(null!=a?c(a,"pyHeaderLabel"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyHeaderLabel",hash:{},data:f,loc:{start:{line:27,column:64},end:{line:27,column:83}}}):e))?k:"")+"' data-initialOrder \x3d'"+(null!=(k=(e=null!=(e=c(g,"pyInitialOrder")||(null!=a?c(a,"pyInitialOrder"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=
a?a:b.nullContext||{},{name:"pyInitialOrder",hash:{},data:f,loc:{start:{line:27,column:105},end:{line:27,column:125}}}):e))?k:"")+"'"+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyColumnSorting"):a,"true",{name:"if_eq",hash:{},fn:b.program(15,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:27,column:126},end:{line:27,column:169}}}))?k:"")+' class\x3d"'+(null!=(k=(e=null!=(e=c(g,"pyReadOnlyStyle")||(null!=a?c(a,"pyReadOnlyStyle"):a))?
e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyReadOnlyStyle",hash:{},data:f,loc:{start:{line:27,column:177},end:{line:27,column:198}}}):e))?k:"")+" cellCont gridCell "+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyColumnSorting"):a,"true",{name:"if_eq",hash:{},fn:b.program(17,f,0,h,d),inverse:b.program(19,f,0,h,d),data:f,loc:{start:{line:27,column:217},end:{line:27,column:293}}}))?k:"")+
(null!=(k=c(g,"if").call(null!=a?a:b.nullContext||{},null!=a?c(a,"showColumnFilterIcon"):a,{name:"if",hash:{},fn:b.program(21,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:27,column:293},end:{line:27,column:339}}}))?k:"")+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"showColumnMenuIcon"):a,"true",{name:"if_eq",hash:{},fn:b.program(23,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:27,column:339},end:{line:27,column:399}}}))?k:"")+
'" role\x3d"columnheader" '+(null!=(k=c(g,"if").call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyCellWidth"):a,{name:"if",hash:{},fn:b.program(25,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:27,column:421},end:{line:27,column:449}}}))?k:"")+"  data-importance\x3d'"+(null!=(k=(e=null!=(e=c(g,"pyColumnImportance")||(null!=a?c(a,"pyColumnImportance"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyColumnImportance",hash:{},data:f,loc:{start:{line:27,column:468},
end:{line:27,column:492}}}):e))?k:"")+"' colIndex\x3d'"+(null!=(k=(e=null!=(e=c(g,"index")||(null!=a?c(a,"index"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"index",hash:{},data:f,loc:{start:{line:27,column:504},end:{line:27,column:515}}}):e))?k:"")+"' issortable\x3d'"+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyColumnSorting"):a,"true",{name:"if_eq",hash:{},fn:b.program(27,f,0,h,d),
inverse:b.program(29,f,0,h,d),data:f,loc:{start:{line:27,column:529},end:{line:27,column:589}}}))?k:"")+"' isFilterable\x3d'"+b.escapeExpression((e=null!=(e=c(g,"showColumnFilterIcon")||(null!=a?c(a,"showColumnFilterIcon"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"showColumnFilterIcon",hash:{},data:f,loc:{start:{line:27,column:605},end:{line:27,column:629}}}):e))+"' filterType\x3d'"+b.escapeExpression((e=null!=(e=c(g,"pyColumnFiltering")||(null!=a?
c(a,"pyColumnFiltering"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyColumnFiltering",hash:{},data:f,loc:{start:{line:27,column:643},end:{line:27,column:664}}}):e))+"' style\x3d'width: "+(null!=(k=(e=null!=(e=c(g,"pyCellWidth")||(null!=a?c(a,"pyCellWidth"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyCellWidth",hash:{},data:f,loc:{start:{line:27,column:680},end:{line:27,column:697}}}):e))?k:"")+"; "+
(null!=(k=c(g,"if").call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyMinWidth"):a,{name:"if",hash:{},fn:b.program(31,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:27,column:699},end:{line:27,column:752}}}))?k:"")+(null!=(k=c(g,"if").call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyMaxWidth"):a,{name:"if",hash:{},fn:b.program(33,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:27,column:752},end:{line:27,column:805}}}))?k:"")+(null!=(k=(e=null!=(e=c(g,"pyInlineStyle")||(null!=a?c(a,"pyInlineStyle"):
a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyInlineStyle",hash:{},data:f,loc:{start:{line:27,column:805},end:{line:27,column:824}}}):e))?k:"")+'\'\x3e\n  \x3cdiv aria-hidden\x3d"true" class\x3d"gridHeaderLabel '+(null!=(k=(e=null!=(e=c(g,"pyAlignOptions")||(null!=a?c(a,"pyAlignOptions"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"pyAlignOptions",hash:{},data:f,loc:{start:{line:28,column:49},end:{line:28,
column:69}}}):e))?k:"")+'"\x3e'+b.escapeExpression((c(g,"includePartial")||a&&c(a,"includePartial")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},"pzGridCellTemplate",{name:"includePartial",hash:{},data:f,loc:{start:{line:28,column:71},end:{line:28,column:110}}}))+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyColumnSorting"):a,"true",{name:"if_eq",hash:{},fn:b.program(35,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:28,
column:110},end:{line:28,column:221}}}))?k:"")+(null!=(k=c(g,"if").call(null!=a?a:b.nullContext||{},null!=a?c(a,"showColumnFilterIcon"):a,{name:"if",hash:{},fn:b.program(38,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:28,column:221},end:{line:29,column:144}}}))?k:"")+"\n \x3c/div\x3e\n \n  "+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"showColumnMenuIcon"):a,"true",{name:"if_eq",hash:{},fn:b.program(41,f,0,h,d),inverse:b.noop,data:f,
loc:{start:{line:32,column:2},end:{line:36,column:120}}}))?k:"")+"\n\x3c/th\x3e"},15:function(b,a,g,c,f){return""},17:function(b,a,g,c,f){return"pointerStyle"},19:function(b,a,g,c,f){return"defaultCursor"},21:function(b,a,g,c,f){return" filterable"},23:function(b,a,g,c,f){return" categorisable"},25:function(b,a,g,c,f){return"  "},27:function(b,a,g,c,f){return"true"},29:function(b,a,g,c,f){return"false"},31:function(b,a,g,c,f){var h,d;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,
b))return a[b]};return"min-width:"+(null!=(h=(d=null!=(d=c(g,"pyMinWidth")||(null!=a?c(a,"pyMinWidth"):a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"pyMinWidth",hash:{},data:f,loc:{start:{line:27,column:727},end:{line:27,column:743}}}):d))?h:"")+"; "},33:function(b,a,g,c,f){var h,d;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return" max-width:"+(null!=(h=(d=null!=(d=c(g,"pyMaxWidth")||(null!=a?c(a,"pyMaxWidth"):
a))?d:b.hooks.helperMissing,"function"===typeof d?d.call(null!=a?a:b.nullContext||{},{name:"pyMaxWidth",hash:{},data:f,loc:{start:{line:27,column:781},end:{line:27,column:797}}}):d))?h:"")+";"},35:function(b,a,g,c,f){var h;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'\x3cdiv id\x3d"sort" '+(null!=(h=c(g,"if").call(null!=a?a:b.nullContext||{},null!=a?c(a,"sortClass"):a,{name:"if",hash:{},fn:b.program(36,f,0),inverse:b.noop,data:f,loc:{start:{line:28,
column:158},end:{line:28,column:204}}}))?h:"")+"\x3e\x3c/div\x3e"},36:function(b,a,g,c,f){var h;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return" class\x3d'"+b.escapeExpression((h=null!=(h=c(g,"sortClass")||(null!=a?c(a,"sortClass"):a))?h:b.hooks.helperMissing,"function"===typeof h?h.call(null!=a?a:b.nullContext||{},{name:"sortClass",hash:{},data:f,loc:{start:{line:28,column:183},end:{line:28,column:196}}}):h))+"'"},38:function(b,a,g,c,f){var h;c=
b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'\x3cdiv id\x3d\'RULE_KEY\' node_type\x3d\'MAIN_RULE\' node_name\x3d\'pzColumnFilterIcon\' data-node-id\x3d"pzColumnFilterIcon" version\x3d"1" objclass\x3d"Rule-HTML-Section" pyclassname\x3d"Embed-FilterColumn" readonly\x3d"true" \x3e\n \x3ci tabindex\x3d"-1" id\x3d"template_filter" data-ctl\x3d"Icon" class\x3d"pi pi-filter '+(null!=(h=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?
a:b.nullContext||{},null!=a?c(a,"isFiltered"):a,"true",{name:"if_eq",hash:{},fn:b.program(39,f,0),inverse:b.noop,data:f,loc:{start:{line:29,column:75},end:{line:29,column:125}}}))?h:"")+'"\x3e\x3c/i\x3e\x3c/div\x3e'},39:function(b,a,g,c,f){return"col-filtered"},41:function(b,a,g,c,f,h,d){var k,e;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return'\x3cdiv  name\x3d"BASE_REF" pyclassname\x3d"Embed-FilterColumn"  readonly\x3d"false" base_ref\x3d"'+b.escapeExpression((e=
null!=(e=c(g,"filterPanelPage")||(null!=a?c(a,"filterPanelPage"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"filterPanelPage",hash:{},data:f,loc:{start:{line:32,column:121},end:{line:32,column:140}}}):e))+'"\x3e\n \x3cp style\x3d"display:none" id\x3d'+b.escapeExpression((e=null!=(e=c(g,"ariaDivID")||(null!=a?c(a,"ariaDivID"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"ariaDivID",hash:{},data:f,loc:{start:{line:33,
column:28},end:{line:33,column:41}}}):e))+"\x3e"+b.escapeExpression((e=null!=(e=c(g,"ariaLabel")||(null!=a?c(a,"ariaLabel"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"ariaLabel",hash:{},data:f,loc:{start:{line:33,column:42},end:{line:33,column:55}}}):e))+'\x3c/p\x3e\n \n  \x3ca aria-label\x3d"'+(null!=(k=(e=null!=(e=c(g,"pyHeaderLabel")||(null!=a?c(a,"pyHeaderLabel"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||
{},{name:"pyHeaderLabel",hash:{},data:f,loc:{start:{line:35,column:17},end:{line:35,column:36}}}):e))?k:"")+' Actions" aria-expanded\x3d"false" role\x3d"button" href\x3d"#"  tabindex\x3d\'-1\' onclick\x3d"pd(event);" class\x3d"columnMenu" data-ctl\x3d"" data-click\x3d"[[\x26quot;showMenu\x26quot;,[{\x26quot;dataSource\x26quot;:\x26quot;pzTemplateGridMenuNavRule\x26quot;, \x26quot;isNavNLDeferLoaded\x26quot;:\x26quot;false\x26quot;, \x26quot;isNavTypeCustom\x26quot;:\x26quot;false\x26quot;, \x26quot;className\x26quot;:\x26quot;Embed-FilterColumn\x26quot;,\x26quot;UITemplatingStatus\x26quot;:\x26quot;Y\x26quot;,\x26quot;menuAlign\x26quot;:\x26quot;right\x26quot;,\x26quot;format\x26quot;:\x26quot;menu-format-standard\x26quot; , \x26quot;loadBehavior\x26quot;:\x26quot;ondisplay\x26quot;, \x26quot;ellipsisAfter\x26quot;:\x26quot;999\x26quot;,\x26quot;usingPage\x26quot;:\x26quot;'+
b.escapeExpression((e=null!=(e=c(g,"filterPanelPage")||(null!=a?c(a,"filterPanelPage"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"filterPanelPage",hash:{},data:f,loc:{start:{line:35,column:664},end:{line:35,column:683}}}):e))+"\x26quot;, \x26quot;useNewMenu\x26quot;:\x26quot;true\x26quot;},\x26quot;:event\x26quot;]]]\"\n                        title\x3d'"+b.escapeExpression(b.lambda(null!=(k=null!=d[3]?c(d[3],"gridWrapper"):d[3])?c(k,"openMenu"):k,
a))+"' aria-describedby \x3d "+b.escapeExpression((e=null!=(e=c(g,"ariaDivID")||(null!=a?c(a,"ariaDivID"):a))?e:b.hooks.helperMissing,"function"===typeof e?e.call(null!=a?a:b.nullContext||{},{name:"ariaDivID",hash:{},data:f,loc:{start:{line:36,column:85},end:{line:36,column:98}}}):e))+" \x3e\x3c/a\x3e\x3c/div\x3e"},compiler:[8,"\x3e\x3d 4.3.0"],main:function(b,a,g,c,f,h,d){var k;c=b.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return"\x3ctr aria-rowindex\x3d\"1\" class\x3d'cellCont'\x3e\n"+
(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"showHeaderCheckbox"):a,!0,{name:"if_eq",hash:{},fn:b.program(1,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:2,column:1},end:{line:12,column:10}}}))?k:"")+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"hideHeaderCheckbox"):a,!0,{name:"if_eq",hash:{},fn:b.program(6,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:13,column:4},
end:{line:21,column:12}}}))?k:"")+(null!=(k=(c(g,"if_eq")||a&&c(a,"if_eq")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=(k=null!=a?c(a,"gridWrapper"):a)?c(k,"isRowSelectionEnabled"):k,"false",{name:"if_eq",hash:{},fn:b.program(11,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:22,column:0},end:{line:24,column:12}}}))?k:"")+(null!=(k=(c(g,"gridHeaderRowIterator")||a&&c(a,"gridHeaderRowIterator")||b.hooks.helperMissing).call(null!=a?a:b.nullContext||{},null!=a?c(a,"pyUniqueId"):a,
null!=(k=null!=a?c(a,"gridRowHelperData"):a)?c(k,"headerCols"):k,null!=a?c(a,"gridRowHelperData"):a,a,{name:"gridHeaderRowIterator",hash:{},fn:b.program(13,f,0,h,d),inverse:b.noop,data:f,loc:{start:{line:25,column:0},end:{line:37,column:45}}}))?k:"")+"\n                \x3c/tr\x3e"},useData:!0,useDepths:!0})})();
(function(){var h=Handlebars.template;(Handlebars.templates=Handlebars.templates||{}).pzGridTemplateDataRow=h({1:function(c,a,f,b,e){return""},3:function(c,a,f,b,e){var d;b=c.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return null!=(d=b(f,"if").call(null!=a?a:c.nullContext||{},null!=a?b(a,"pyGridCategorization"):a,{name:"if",hash:{},fn:c.program(4,e,0),inverse:c.program(6,e,0),data:e,loc:{start:{line:4,column:16},end:{line:9,column:22}}}))?d:""},4:function(c,
a,f,b,e){var d;b=c.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return"                 "+(null!=(d=(b(f,"prepareCategorizationHelperData")||a&&b(a,"prepareCategorizationHelperData")||c.hooks.helperMissing).call(null!=a?a:c.nullContext||{},a,{name:"prepareCategorizationHelperData",hash:{},data:e,loc:{start:{line:5,column:17},end:{line:5,column:59}}}))?d:"")+"\n                 "+c.escapeExpression((b(f,"includePartial")||a&&b(a,"includePartial")||c.hooks.helperMissing).call(null!=
a?a:c.nullContext||{},"pzGridTemplateCategoriseRow",{name:"includePartial",hash:{gridMetadata:a,groups:null!=(d=null!=(d=null!=a?b(a,"gridRowHelperData"):a)?b(d,"categoriseMetaData"):d)?b(d,"groups"):d},data:e,loc:{start:{line:6,column:17},end:{line:6,column:140}}}))+"\n"},6:function(c,a,f,b,e){var d;b=c.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return"                "+c.escapeExpression((b(f,"includePartial")||a&&b(a,"includePartial")||c.hooks.helperMissing).call(null!=
a?a:c.nullContext||{},"pzGridTemplateRow",{name:"includePartial",hash:{endIndex:null!=(d=null!=a?b(a,"gridRowHelperData"):a)?b(d,"endIndex"):d,startIndex:null!=(d=null!=a?b(a,"gridRowHelperData"):a)?b(d,"startIndex"):d},data:e,loc:{start:{line:8,column:16},end:{line:8,column:140}}}))+"\n"},compiler:[8,"\x3e\x3d 4.3.0"],main:function(c,a,f,b,e){var d,g;b=c.lookupProperty||function(a,b){if(Object.prototype.hasOwnProperty.call(a,b))return a[b]};return(null!=(d=(b(f,"pushGridConText")||a&&b(a,"pushGridConText")||
c.hooks.helperMissing).call(null!=a?a:c.nullContext||{},a,{name:"pushGridConText",hash:{},data:e,loc:{start:{line:1,column:0},end:{line:1,column:26}}}))?d:"")+"\n"+(null!=(d=b(f,"if").call(null!=a?a:c.nullContext||{},(b(f,"ifCond")||a&&b(a,"ifCond")||c.hooks.helperMissing).call(null!=a?a:c.nullContext||{},(b(f,"ifCond")||a&&b(a,"ifCond")||c.hooks.helperMissing).call(null!=a?a:c.nullContext||{},null!=(d=null!=a?b(a,"gridRowHelperData"):a)?b(d,"isDataPageEmpty"):d,"eq",!0,{name:"ifCond",hash:{},data:e,
loc:{start:{line:2,column:27},end:{line:2,column:84}}}),"and",(b(f,"ifCond")||a&&b(a,"ifCond")||c.hooks.helperMissing).call(null!=a?a:c.nullContext||{},null!=(d=null!=a?b(a,"gridRowHelperData"):a)?b(d,"nodataWithFilter"):d,"eq",!0,{name:"ifCond",hash:{},data:e,loc:{start:{line:2,column:91},end:{line:2,column:149}}}),{name:"ifCond",hash:{},data:e,loc:{start:{line:2,column:19},end:{line:2,column:150}}}),{name:"if",hash:{},fn:c.program(1,e,0),inverse:c.program(3,e,0),data:e,loc:{start:{line:2,column:13},
end:{line:10,column:21}}}))?d:"")+"              "+c.escapeExpression((b(f,"includePartial")||a&&b(a,"includePartial")||c.hooks.helperMissing).call(null!=a?a:c.nullContext||{},"pzGridMsgTemplate",{name:"includePartial",hash:{},data:e,loc:{start:{line:11,column:14},end:{line:11,column:52}}}))+"\n              "+(null!=(d=(g=null!=(g=b(f,"popGridConText")||(null!=a?b(a,"popGridConText"):a))?g:c.hooks.helperMissing,"function"===typeof g?g.call(null!=a?a:c.nullContext||{},{name:"popGridConText",hash:{},
data:e,loc:{start:{line:12,column:14},end:{line:12,column:34}}}):g))?d:"")},useData:!0})})();
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridMsgTemplate=B({"1":function(C,G,E,D,F){return"style='display:none'"},"3":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"<td class='grid-no-data gridCell' width='100%' colspan='"+((E=C.lambda(((E=(I!=null?H(I,"noDataMessageInfo"):I))!=null?H(E,"headerColsLength"):E),I))!=null?E:"")+"'>\n "+((E=C.lambda(((E=(I!=null?H(I,"noDataMessageInfo"):I))!=null?H(E,"noResultsText"):E),I))!=null?E:"")+"\n                      </td>\n"},"5":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return'                       <td class="gridCell tg-pd-10" data-attribute-name=\''+((E=C.lambda(((E=(I!=null?H(I,"noDataMessageInfo"):I))!=null?H(E,"noDataTextAttrName"):E),I))!=null?E:"")+"' colspan='"+((E=C.lambda(((E=(I!=null?H(I,"noDataMessageInfo"):I))!=null?H(E,"colLength"):E),I))!=null?E:"")+"'>\n                       "+((E=C.lambda(((E=(I!=null?H(I,"noDataMessageInfo"):I))!=null?H(E,"noDataText"):E),I))!=null?E:"")+"</td>\n"},compiler:[8,">= 4.3.0"],main:function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return((E=(I(G,"prepareNoDataMessageInfo")||(J&&I(J,"prepareNoDataMessageInfo"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),J,{name:"prepareNoDataMessageInfo",hash:{},data:H,loc:{start:{line:1,column:0},end:{line:1,column:35}}}))!=null?E:"")+"\n<tr class='cellCont' role='row' data-row=\"false\" id='pyAllRowsHidden_"+C.escapeExpression(((F=(F=I(G,"pyUniqueId")||(J!=null?I(J,"pyUniqueId"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyUniqueId",hash:{},data:H,loc:{start:{line:2,column:69},end:{line:2,column:83}}}):F)))+"' "+((E=(I(G,"if_eq")||(J&&I(J,"if_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),((E=(J!=null?I(J,"noDataMessageInfo"):J))!=null?I(E,"pyAllRowsHidden"):E),false,{name:"if_eq",hash:{},fn:C.program(1,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:85},end:{line:2,column:175}}}))!=null?E:"")+' onclick="event.stopPropagation();return false;" data-rightclick data-dblclick data-keyup data-click>\n'+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),((E=(J!=null?I(J,"noDataMessageInfo"):J))!=null?I(E,"nodataWithFilter"):E),{name:"if",hash:{},fn:C.program(3,H,0),inverse:C.program(5,H,0),data:H,loc:{start:{line:3,column:0},end:{line:10,column:26}}}))!=null?E:"")+"</tr>"},useData:true})})();
(function(){var B=Handlebars.template,A=Handlebars.templates=Handlebars.templates||{};A.pzGridTemplateMini=B({"1":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" data-test-id='"+C.escapeExpression(((E=(E=H(F,"automationId")||(I!=null?H(I,"automationId"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"automationId",hash:{},data:G,loc:{start:{line:2,column:89},end:{line:2,column:105}}}):E)))+"-layout' "},"3":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" ; min-width:"+C.escapeExpression(((E=(E=H(F,"pyGridMinWidth")||(I!=null?H(I,"pyGridMinWidth"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"pyGridMinWidth",hash:{},data:G,loc:{start:{line:2,column:192},end:{line:2,column:210}}}):E)))+" "},"5":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" summary='"+C.escapeExpression(((E=(E=H(F,"summary")||(I!=null?H(I,"summary"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"summary",hash:{},data:G,loc:{start:{line:2,column:250},end:{line:2,column:261}}}):E)))+"'"},"7":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"cat-l"+C.escapeExpression(((E=(E=H(F,"catColLength")||(I!=null?H(I,"catColLength"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"catColLength",hash:{},data:G,loc:{start:{line:2,column:323},end:{line:2,column:339}}}):E)))},"9":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return" "+C.escapeExpression(((E=(E=H(F,"rowHeightClass")||(I!=null?H(I,"rowHeightClass"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"rowHeightClass",hash:{},data:G,loc:{start:{line:2,column:376},end:{line:2,column:394}}}):E)))},"11":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"data-cat-level='"+C.escapeExpression(((E=(E=H(F,"catColLength")||(I!=null?H(I,"catColLength"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"catColLength",hash:{},data:G,loc:{start:{line:2,column:466},end:{line:2,column:482}}}):E)))+"'"},"13":function(C,I,F,D,G){var E,H=C.lookupProperty||function(K,J){if(Object.prototype.hasOwnProperty.call(K,J)){return K[J]}return undefined};return"  <caption class='grid-caption'>"+C.escapeExpression(((E=(E=H(F,"caption")||(I!=null?H(I,"caption"):I))!=null?E:C.hooks.helperMissing),(typeof E==="function"?E.call(I!=null?I:(C.nullContext||{}),{name:"caption",hash:{},data:G,loc:{start:{line:3,column:47},end:{line:3,column:58}}}):E)))+"</caption> "},compiler:[8,">= 4.3.0"],main:function(C,J,G,D,H){var E,F,I=C.lookupProperty||function(L,K){if(Object.prototype.hasOwnProperty.call(L,K)){return L[K]}return undefined};return((E=(I(G,"prepareGridHelperData")||(J&&I(J,"prepareGridHelperData"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),J,{name:"prepareGridHelperData",hash:{},data:H,loc:{start:{line:1,column:0},end:{line:1,column:32}}}))!=null?E:"")+'\n<table id="gridLayoutTable" uniqueid=\''+C.escapeExpression(((F=(F=I(G,"pyUniqueId")||(J!=null?I(J,"pyUniqueId"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyUniqueId",hash:{},data:H,loc:{start:{line:2,column:38},end:{line:2,column:52}}}):F)))+"' "+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"automationId"):J),{name:"if",hash:{},fn:C.program(1,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:54},end:{line:2,column:121}}}))!=null?E:"")+" role='grid' style='"+C.escapeExpression(((F=(F=I(G,"inlineStyle")||(J!=null?I(J,"inlineStyle"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"inlineStyle",hash:{},data:H,loc:{start:{line:2,column:141},end:{line:2,column:156}}}):F)))+" "+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyGridMinWidth"):J),{name:"if",hash:{},fn:C.program(3,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:157},end:{line:2,column:218}}}))!=null?E:"")+"'"+((E=(I(G,"if_eq")||(J&&I(J,"if_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"caption"):J),"",{name:"if_eq",hash:{},fn:C.program(5,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:219},end:{line:2,column:272}}}))!=null?E:"")+" class='gridTable "+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyGridCategorization"):J),{name:"if",hash:{},fn:C.program(7,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:290},end:{line:2,column:346}}}))!=null?E:"")+((E=(I(G,"if_eq")||(J&&I(J,"if_eq"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyRowHeight"):J),"true",{name:"if_eq",hash:{},fn:C.program(9,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:346},end:{line:2,column:404}}}))!=null?E:"")+'\' cellspacing="0" '+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"pyGridCategorization"):J),{name:"if",hash:{},fn:C.program(11,H,0),inverse:C.noop,data:H,loc:{start:{line:2,column:422},end:{line:2,column:490}}}))!=null?E:"")+">\n"+((E=I(G,"if").call(J!=null?J:(C.nullContext||{}),(J!=null?I(J,"caption"):J),{name:"if",hash:{},fn:C.program(13,H,0),inverse:C.noop,data:H,loc:{start:{line:3,column:0},end:{line:3,column:76}}}))!=null?E:"")+'\n<p style="display:none" id=\'table_'+C.escapeExpression(((F=(F=I(G,"pyUniqueId")||(J!=null?I(J,"pyUniqueId"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"pyUniqueId",hash:{},data:H,loc:{start:{line:4,column:34},end:{line:4,column:48}}}):F)))+"'>"+C.escapeExpression(((F=(F=I(G,"ariaTableinstruction")||(J!=null?I(J,"ariaTableinstruction"):J))!=null?F:C.hooks.helperMissing),(typeof F==="function"?F.call(J!=null?J:(C.nullContext||{}),{name:"ariaTableinstruction",hash:{},data:H,loc:{start:{line:4,column:50},end:{line:4,column:74}}}):F)))+'</p>\n              <tbody id="gridTableBody">              \n              '+((E=(I(G,"prepareRowHelperData")||(J&&I(J,"prepareRowHelperData"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),J,{name:"prepareRowHelperData",hash:{},data:H,loc:{start:{line:6,column:14},end:{line:6,column:45}}}))!=null?E:"")+"\n              "+C.escapeExpression((I(G,"includePartial")||(J&&I(J,"includePartial"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),"pzGridTemplateHeaderRow",{name:"includePartial",hash:{},data:H,loc:{start:{line:7,column:14},end:{line:7,column:58}}}))+"\n              "+C.escapeExpression((I(G,"includePartial")||(J&&I(J,"includePartial"))||C.hooks.helperMissing).call(J!=null?J:(C.nullContext||{}),"pzGridTemplateDataRow",{name:"includePartial",hash:{},data:H,loc:{start:{line:8,column:14},end:{line:8,column:56}}}))+"\n              \n  </tbody>\n  </table>"},useData:true})})();
/*
{{#gridCategoriseIterator this.params.groups this.params.gridMetadata}}
 <tr  class='cellCont cat-row level-{{../this.params.gridMetadata.gridRowHelperData.categoriseMetaData.catindex}}' data-level="{{../this.params.gridMetadata.gridRowHelperData.categoriseMetaData.catindex}}" role="row" data-row="false" data-master-identifier='{{../this.params.gridMetadata.msterRw}}' data-rightclick data-dblclick data-keyup data-click>
 <td class='gridCell'  tabindex='-1'  role="button"  aria-expanded="true" data-ctl data-keydown="[[&quot;runScript&quot;, [&quot;pega.ui.TemplateGrids.expandCollapseCategorizeGrid(event,'{{../this.params.gridMetadata.msterRw}}')&quot;],,&quot;enter&quot;]]" data-click="[[&quot;runScript&quot;, [&quot;pega.ui.TemplateGrids.expandCollapseCategorizeGrid(event,'{{../this.params.gridMetadata.msterRw}}')&quot;]]]"  colspan={{math ../this.params.gridMetadata.gridRowHelperData.categoriseMetaData.colspan "+" 1}}><div class="flex-cont" data-click="." data-keydown="."><i data-click=".." data-keydown=".." aria-label="{{../this.params.gridMetadata.gridRowHelperData.categoriseMetaData.ariaLabel}}"  class="pi caret-down-icon"></i>{{{../this.params.gridMetadata.gridRowHelperData.categoriseMetaData.columninfo.pyHeaderLabel}}}:&nbsp;{{{../this.params.gridMetadata.gridRowHelperData.categoriseMetaData.columnValue}}} <span data-click=".." data-keydown=".." class= 'cat-count'>{{../this.params.gridMetadata.gridWrapper.Total}} {{this.count}}</span></div></td></tr>
  {{#if this.groups}}
     {{includePartial "pzGridTemplateCategoriseRow"  groups=this.groups gridMetadata= ../this.params.gridMetadata}}
  {{else}}
{{#with ../this.params.gridMetadata}}
  {{includePartial "pzGridTemplateRow" startIndex=this.gridRowHelperData.startIndex endIndex=this.gridRowHelperData.endIndex }}
{{/with}}
  {{/if}}                   
{{/gridCategoriseIterator}}

*/
(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {}; 
templates['pzGridTemplateCategoriseRow'] = template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return " <tr  class='cellCont cat-row level-"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridRowHelperData") : stack1)) != null ? lookupProperty(stack1,"categoriseMetaData") : stack1)) != null ? lookupProperty(stack1,"catindex") : stack1), depth0))
    + "' data-level=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridRowHelperData") : stack1)) != null ? lookupProperty(stack1,"categoriseMetaData") : stack1)) != null ? lookupProperty(stack1,"catindex") : stack1), depth0))
    + "\" role=\"row\" data-row=\"false\" data-master-identifier='"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"msterRw") : stack1), depth0))
    + "' data-rightclick data-dblclick data-keyup data-click>\n <td class='gridCell'  tabindex='-1'  role=\"button\"  aria-expanded=\"true\" data-ctl data-keydown=\"[[&quot;runScript&quot;, [&quot;pega.ui.TemplateGrids.expandCollapseCategorizeGrid(event,'"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"msterRw") : stack1), depth0))
    + "')&quot;],,&quot;enter&quot;]]\" data-click=\"[[&quot;runScript&quot;, [&quot;pega.ui.TemplateGrids.expandCollapseCategorizeGrid(event,'"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"msterRw") : stack1), depth0))
    + "')&quot;]]]\"  colspan="
    + container.escapeExpression((lookupProperty(helpers,"math")||(depth0 && lookupProperty(depth0,"math"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridRowHelperData") : stack1)) != null ? lookupProperty(stack1,"categoriseMetaData") : stack1)) != null ? lookupProperty(stack1,"colspan") : stack1),"+",1,{"name":"math","hash":{},"data":data,"loc":{"start":{"line":3,"column":422},"end":{"line":3,"column":509}}}))
    + "><div class=\"flex-cont\" data-click=\".\" data-keydown=\".\"><i data-click=\"..\" data-keydown=\"..\" aria-label=\""
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridRowHelperData") : stack1)) != null ? lookupProperty(stack1,"categoriseMetaData") : stack1)) != null ? lookupProperty(stack1,"ariaLabel") : stack1), depth0))
    + "\"  class=\"pi caret-down-icon\"></i>"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridRowHelperData") : stack1)) != null ? lookupProperty(stack1,"categoriseMetaData") : stack1)) != null ? lookupProperty(stack1,"columninfo") : stack1)) != null ? lookupProperty(stack1,"pyHeaderLabel") : stack1), depth0)) != null ? stack1 : "")
    + ":&nbsp;"
    + ((stack1 = container.lambda(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridRowHelperData") : stack1)) != null ? lookupProperty(stack1,"categoriseMetaData") : stack1)) != null ? lookupProperty(stack1,"columnValue") : stack1), depth0)) != null ? stack1 : "")
    + " <span data-click=\"..\" data-keydown=\"..\" class= 'cat-count'>"
    + container.escapeExpression(container.lambda(((stack1 = ((stack1 = ((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1)) != null ? lookupProperty(stack1,"gridWrapper") : stack1)) != null ? lookupProperty(stack1,"Total") : stack1), depth0))
    + " "
    + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0,"count") : depth0), depth0))
    + "</span></div></td></tr>\n"
    + ((stack1 = lookupProperty(helpers,"if").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,"groups") : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.program(4, data, 0, blockParams, depths),"data":data,"loc":{"start":{"line":4,"column":2},"end":{"line":10,"column":9}}})) != null ? stack1 : "");
},"2":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "     "
    + container.escapeExpression((lookupProperty(helpers,"includePartial")||(depth0 && lookupProperty(depth0,"includePartial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"pzGridTemplateCategoriseRow",{"name":"includePartial","hash":{"gridMetadata":((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1),"groups":(depth0 != null ? lookupProperty(depth0,"groups") : depth0)},"data":data,"loc":{"start":{"line":5,"column":5},"end":{"line":5,"column":115}}}))
    + "\n";
},"4":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = lookupProperty(helpers,"with").call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depths[1] != null ? lookupProperty(depths[1],"params") : depths[1])) != null ? lookupProperty(stack1,"gridMetadata") : stack1),{"name":"with","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":0},"end":{"line":9,"column":9}}})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "  "
    + container.escapeExpression((lookupProperty(helpers,"includePartial")||(depth0 && lookupProperty(depth0,"includePartial"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),"pzGridTemplateRow",{"name":"includePartial","hash":{"endIndex":((stack1 = (depth0 != null ? lookupProperty(depth0,"gridRowHelperData") : depth0)) != null ? lookupProperty(stack1,"endIndex") : stack1),"startIndex":((stack1 = (depth0 != null ? lookupProperty(depth0,"gridRowHelperData") : depth0)) != null ? lookupProperty(stack1,"startIndex") : stack1)},"data":data,"loc":{"start":{"line":8,"column":2},"end":{"line":8,"column":127}}}))
    + "\n";
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return ((stack1 = (lookupProperty(helpers,"gridCategoriseIterator")||(depth0 && lookupProperty(depth0,"gridCategoriseIterator"))||container.hooks.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),((stack1 = (depth0 != null ? lookupProperty(depth0,"params") : depth0)) != null ? lookupProperty(stack1,"groups") : stack1),((stack1 = (depth0 != null ? lookupProperty(depth0,"params") : depth0)) != null ? lookupProperty(stack1,"gridMetadata") : stack1),{"name":"gridCategoriseIterator","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data,"loc":{"start":{"line":1,"column":0},"end":{"line":11,"column":27}}})) != null ? stack1 : "");
},"useData":true,"useDepths":true});
})();
//static-content-hash-trigger-NON
pega.ui.TemplateEngine.registerHelper("prepareMetaDataPageInServer",function(a){if(!pega.u.d.ServerProxy||!pega.u.d.ServerProxy.isDestinationLocal()){var b=pega.ui.tGridUtility.prepareAugmentedMetaDataForServer(a),d=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId),e=new SafeURL_createFromURL(pega.u.d.url);e.put(pega.u.d.buildFilterIconEncryptedUrl,"");e.put("instanceId",a.pyUniqueId);e.put("pzKeepPageMessages",!0);var c=new SafeURL;a.generateToolbar=a.isToolBar;c.put("strJSON",JSON.stringify(b));
pega.u.d.asyncRequest(pega.ui.tGridConstants.HTTP_POST,e,{success:function(b){"#####"!==b.responseText&&(b=b.responseText.split("#####")[0],d.setFilterBarMarkup(b),pega.ui.FilterUtils.buildFilterBar(d,"true"!==a.pyShowFiltersInModal))},failure:function(a){console.error("Ajax request fail while creating server meta data page: "+a)}},c,{skipAlert:!0})}});
pega.ui.TemplateEngine.registerHelper("includeSortTemplate",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,e=b.PYPAGELISTPROPERTY,c={},d=a[d];c.pyDataPageName=d[e].split(".")[0];e={};e.pyUniqueId=a.pyUniqueId;c.CallBackObject={};c.CallBackObject.params=e;c.CallBackObject.Name="pega.ui.TemplateGrids.sortColumnByName";c.pySortOrder="";c.ColumnList=[];var e=b.PZASCSORTTEXT,f=b.PZDESCSORTTEXT,g=b.PZSORTTEXT,m=b.PZICONASCSORTTEXT,n=b.PZICONDESCSORTTEXT,b=b.PZSORTTHISLISTBY;c.pyAscSortText=
d[e];c.pyDescSortText=d[f];c.pySortText=d[g];c.pyIconAscSortText=d[m];c.pyIconDescSortText=d[n];c.pysortThisListBy=d[b];a=pega.ui.tGridMetaDataManager.getGridRowHeader(a);for(var h=a.length,l=0;l<h;l++){var p=a[l];if(p.pyColumnSorting&&"false"!==p.pyColumnSorting){var k={};k.pyLabel=p.pyHeaderLabel;k.pyPropName=p.pyPropertyName;k.pyDataType=p.pyDataType;k.pySelected=p.pySortType?"selected":"";p.pySortType?c.pySortOrder=p.pySortType:"";p.pySortType&&(c.pySelectedColumn=p.pyHeaderLabel);c.ColumnList.push(k)}}c.pyAscSortText=
d[e].replace("{1}",c.pySelectedColumn);c.pyDescSortText=d[f].replace("{1}",c.pySelectedColumn);c.pySortText=d[g];c.pyIconAscSortText=d[m].replace("{1}",c.pySelectedColumn);c.pyIconDescSortText=d[n].replace("{1}",c.pySelectedColumn);c.pysortThisListBy=d[b];d="";0!==c.ColumnList.length&&(d=Handlebars.templates.pzSortTemplate(c));return d},!1);
pega.ui.template.RenderingEngine.register("pxGrid1",function(a){var b=pega.ui.template.RenderingEngine.getCurrentDocument().querySelector("div[data-template-name\x3d'pxGrid1']").innerHTML;pega.ui.tGridInstanceManager.getInstance(a.uniqueId).state.hasNonTemplate=b?!0:!1;return b});
pega.ui.template.RenderingEngine.register("pxGrid",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,e=b.PYPAGINGSETTINGS,c=b.PZROWOPERATIONS,f=a[d][b.PYPAGELISTPROPERTY],g=f.substring(f.lastIndexOf(".")+1);a.SOURCE_PAGELIST_SIZE="$pxPageSize$"+g;a.GROUPING_INFO="pxGroupingInfo$"+g;"false"===a[d][b.ISPAGINGENABLED]&&delete a[e];"false"===a[d][b.HASROWOPERATIONS]&&delete a[c];a.responsive=a[d].responsive;a.pyPropertiesToCT="";a.pyInstanceID=a.pyTemplates[0].pyTemplates[1].pyRepeatingId;
b=pega.ui.tGridMetaDataManager.getDataRow(a);if(!f||!b)return pega.ui.tGridUtility.getGridMsg(a,pega.ui.tGridConstants.PXGRID_NODATA_MSG_TEMPLATENAME);f=new pega.ui.tGrid(a);f.state.hasNonTemplate=!0;(b=pega.ui.tGridUtility.getContextInfo(f.state.pageListProp,a.GROUPING_INFO))&&b.columns&&(f.state.isPagingEnabled="false");pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal()&&f.updateDP_params(a);return f.getMarkup()});
pega.ui.TemplateEngine.registerHelper("renderControl",function(a,b,d,e,c,f){a=JSON.parse(JSON.stringify(a));b=pega.ui.TEMPLATE_CONSTANTS;e=pega.ui.TemplateEngine.getCurrentContext();a=pega.ui.TemplateEngine.processMetadataPerComponent(a,e,!0);if(!1===a.pyVisibility&&!a.pyExpressionId)return"";if(c=a.pyTemplates&&a.pyTemplates[0]){var g=c.pyName;if("function"==typeof pega.ui.template.RenderingEngine.getRenderer(g)){var m=pega.ui.TemplateEngine.getTemplates(c);if("pxVisible"==g)if(void 0!=m)c=m[0];
else return a.pyHeaderLabel;g=c.pyName;if("pxNonTemplate"==g)pega.ui.tGridInstanceManager.getInstance(f),f=pega.ui.template.RenderingEngine.getRenderer(g)(c),f=f.split("$index").join(d);else{d="pxSection pxButton pxLink pxIcon pxVideo pxHidden pxMultiSelect pxMenu".split(" ");if(-1==d.indexOf(g)&&c.pyCell&&c.pyCell.pyValue&&(f=c.pyCell.pyValue,e.isSecuredProperty(f)))return f=e.getPropertyValue(f),"\x3cspan\x3e"+f+"\x3c/span\x3e";-1==d.indexOf(g)&&"Auto"==a.pyEditOptions&&(g="pxDisplayText");"Auto"==
a.pyEditOptions&&"pxMultiSelect"==g?c[b.PYCELL][b.PXREADONLY]=!0:"pxSection"!=g||"Auto"!=a.pyEditOptions&&"Read-only"!=a.pyEditOptions||(c.pxReadOnly="true");f=pega.ui.template.RenderingEngine.getRenderer(g)(c)}return f}}else if("pxGridHeaderCell"===a.pyName)return-1!==a["data-ui-meta"].indexOf("SUB_SECTION")?"":a.pyHeaderLabel;return"\x26nbsp"},!1);
pega.ui.TemplateEngine.registerHelper("prepareVisibilityInfo",function(a){if(a.pyExpressionId){a.pyExpressionIdMeta=pega.ui.ExpressionEvaluator.getExpressionMetaToStamp(a.pyExpressionId);var b=pega.ui.ExpressionEvaluator.evaluateClientExpressions(a.pyExpressionId)[pega.ui.ExpressionEvaluator.SHOW_WHEN];a.pyHide="undefined"==typeof b?!1:!b}},!1);
pega.ui.TemplateEngine.registerHelper("prepareGridHelperData",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,e=b.PYPAGELISTPROPERTY;a.pyGridCategorization=a[d][b.ISCATEGORIZATIONENABLED];try{a.ariaTableinstruction=tableAccessibilityInstruction||"For navigation instructions, use Keyboard instructions in table toolbar."}catch(f){a.ariaTableinstruction="For navigation instructions, use Keyboard instructions in table toolbar."}b=pega.ui.tGrid(a.pyUniqueId).state;a.pyRowHeight=a[d].isRowHeightEnabled;
a.isTableCategorized=b.isTableCategorized;if("true"==a.pyRowHeight){var c;a.pyGridRowHeight&&""!=a.pyGridRowHeight&&(c=a.pyGridRowHeight);a.rowHeightClass=b.rowHeightClass?b.rowHeightClass:c?c:pega.ui.tGridConstants.GRID_ROWHEIGHT_COMPACT;b.rowHeightClass=a.rowHeightClass}d=a[d][e];prepareRowSelectionHelperData(a);a.pyGridCategorization&&((d=pega.ui.tGridUtility.getContextInfo(d,a.GROUPING_INFO))&&d.columns?(a.groups=d.groups,a.columns=d.columns,a.catColLength=d.columns.length):a.pyGridCategorization=
!1)},!1);
pega.ui.TemplateEngine.registerHelper("prepareCategorizationHelperData",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,b=b.PYPAGELISTPROPERTY,e=a.gridRowHelperData.categoriseMetaData={};e.groups=a.groups;e.columns=a.columns;e.catindex=0;e.doPushContext=!0;e.actualEndIndex=0;e.ariaLabel=pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to collapse","pyActionPrompt").trim();var c=0;pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId);var f=a.gridRowHelperData.dataCols;e.colspan=
f.length;e.dataColumns=[];for(var g in f){var m=e.columns.indexOf(f[g].pyPropertyName);-1!==m&&(c+=1,e.dataColumns[m]=f[g]);if(c===a.catColLength)break}a.pxFilterConditionId&&(e.indicesArr=pega.ui.tGrid.getFilterRecordsindices(a[d][b],a.pxFilterConditionId))},!1);
pega.ui.TemplateEngine.registerHelper("prepareRowHelperData",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,e=b.PYPAGELISTPROPERTY,c=a.pyInstanceID,f=a[d],g=a[b.PZGRIDTABLE];this.gridRowHelperData={};this.gridRowHelperData.pySortIconLabel=g[b.PYSORTICONLABEL];this.gridRowHelperData.pyAscSortIconLabel=g[b.PYASCSORTICONLABEL];this.gridRowHelperData.pyDescSortIconLabel=g[b.PYDESCSORTICONLABEL];this.gridRowHelperData.isPersonalizationEnabled=f.isPersonalizationEnabled;this.gridRowHelperData.isRowHeightEnabled=
a.pyRowHeight;this.gridRowHelperData.headerCols=pega.ui.tGridMetaDataManager.getGridRowHeader(a);this.gridRowHelperData.refId=a.refId+".pyTemplates(1).pyTemplates(2)";this.gridRowHelperData.instanceId=c;this.gridRowHelperData.pyFilterText=f[b.PZFILTERTEXT];this.gridRowHelperData.pyUpdateFilterText=f[b.PZUPDATEFILTERTEXT];this.gridRowHelperData.pyShowFiltersInModal=a.pyShowFiltersInModal||!1;this.gridRowHelperData.automationId=a.automationId;"%"===a[b.PYWIDTHOFCONTENT]&&(this.gridRowHelperData.fixedGrid=
!0);var c=f[e],m,n=b.PYISDATAPAGEEMPTY,f=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId);m=f.getSourceLength(c);g[n]=0===m?"true":"false";g[n]&&"false"!==g[n]&&(this.gridRowHelperData.isDataPageEmpty=!0,this.gridRowHelperData.colLength=pega.ui.tGridMetaDataManager.getRowHeader(a).length,this.gridRowHelperData.noDataTextAttrName=g[b.PYNODATATEXT]);var h;a[b.PYPAGINGSETTINGS]&&(h=a[b.PYPAGINGSETTINGS]);var l;a.pxFilterConditionId&&(l=pega.ui.tGrid.getFilterRecordsindices(a[d][e],a.pxFilterConditionId));
var p="true"===a[d].isQueryable;h?(g=h[b.PYPAGESIZE],n=h[b.PYCURRENTPAGEINDEX],p?(pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal()&&(h.pxTotalResultCount=m),b=1,l=h.pxTotalResultCount<n*g?1<n?Math.abs(h.pxTotalResultCount-(n-1)*g):h.pxTotalResultCount:g):l?(b=Array.isArray(l)?1:l,l=Array.isArray(l)?g:l):(pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal()&&(h.pxTotalResultCount=m),b=(n-1)*g+1,l=n*g,h.pxTotalResultCount<l&&(l=h.pxTotalResultCount))):(b=1,l=m);this.gridRowHelperData.startIndex=
b;this.gridRowHelperData.endIndex=l;this.gridRowHelperData.dataCols=pega.ui.tGridMetaDataManager.getRowHeader(a);h=this.gridRowHelperData.nodataWithFilter=!1;l=this.gridRowHelperData.headerCols;for(b=0;b<l.length;b++)this.gridRowHelperData.dataCols[b].pyHeaderLabel=l[b].pyHeaderLabel,l[b].isFiltered&&(h=!0);!0===h&&0==pega.ui.tGrid.getFilterRecordsCount(a[d][e],a.pxFilterConditionId)&&(this.gridRowHelperData.nodataWithFilter=!0);this.gridRowHelperData.isFiltered=h;pega.ui.tGridUtility.resolveContext(c);
f.gridRowHelperData=this.gridRowHelperData},!1);pega.ui.TemplateEngine.registerHelper("pushGridConText",function(a){var b=pega.ui.TEMPLATE_CONSTANTS;a=a[b.PZGRIDWRAPPER][b.PYPAGELISTPROPERTY];a=pega.ui.tGridUtility.resolveContext(a);pega.ui.TemplateEngine.getCurrentContext().push(a,void 0,{component:"pxGrid"})},!1);pega.ui.TemplateEngine.registerHelper("popGridConText",function(){pega.ui.TemplateEngine.getCurrentContext().pop()},!1);
pega.ui.TemplateEngine.registerHelper("prepareNoDataMessageInfo",function(a){var b=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId),d=pega.ui.TEMPLATE_CONSTANTS,e=a[d.PZGRIDTABLE],d=d.PYISDATAPAGEEMPTY,c=b.state.isFiltered;this.noDataMessageInfo={};b=b.state.pyAllRowsHidden;this.noDataMessageInfo.pyAllRowsHidden=!1;"undefined"!==typeof b&&b?this.noDataMessageInfo.pyAllRowsHidden=!0:e[d]&&"false"!==e[d]&&(this.noDataMessageInfo.pyAllRowsHidden=!0);!0===c||"true"===c?(this.noDataMessageInfo.nodataWithFilter=
!0,this.noDataMessageInfo.noResultsText=pega.ui.tGridUtility.getGridMsg(a,pega.ui.tGridConstants.PXGRID_NOFILTERDATA_MSG_TEMPLATENAME),this.noDataMessageInfo.headerColsLength=pega.ui.tGridMetaDataManager.getRowHeader(a).length):(this.noDataMessageInfo.colLength=pega.ui.tGridMetaDataManager.getRowHeader(a).length,this.noDataMessageInfo.noDataText=pega.ui.tGridUtility.getGridMsg(a,pega.ui.tGridConstants.PXGRID_NODATA_MSG_TEMPLATENAME))},!1);
pega.ui.TemplateEngine.registerHelper("gridCategoriseIterator",function(a,b,d){for(var e="",c=b.gridRowHelperData.categoriseMetaData,f=0;f<a.length;f++){0===f&&c.catindex++;b["catLevel"+c.catindex]=f+1;b["catLevel"+(c.catindex+1)]?b["catLevel"+(c.catindex+1)]=0:"";b["catLevel"+(c.catindex+2)]?b["catLevel"+(c.catindex+2)]=0:"";b.msterRw=String(b.catLevel1)+(b.catLevel2?"."+b.catLevel2:"")+(b.catLevel3?"."+b.catLevel3:"");a[f].startIndex&&(b.gridRowHelperData.startIndex=a[f].startIndex,b.gridRowHelperData.endIndex=
a[f].endIndex);c.columnName=c.columns[c.catindex-1];c.columninfo=c.dataColumns[c.catindex-1];c.doPushContext&&(c.currentContext=pega.ui.TemplateEngine.getCurrentContext(),b.pxFilterConditionId?c.currentContext.push(c.indicesArr[c.actualEndIndex]-1):c.currentContext.push(c.actualEndIndex),c.doPushContext=!1);var g=$.extend(!0,{},c.columninfo);if(-1!=["pxButton","pxLink","pxIcon"].indexOf(g.pyTemplates[0].pyName))c.columnValue="\x3cspan data-click\x3d'..' data-keydown\x3d'..'\x3e"+c.currentContext.getPropertyValue(c.columnName)+
"\x3c/span\x3e";else{var g=Handlebars.helpers.renderControl(g),m=document.createElement("div");m.innerHTML=g;m.querySelector("span")&&m.querySelector("span").setAttribute("data-click","..");m.querySelector("span")&&m.querySelector("span").setAttribute("data-keydown","..");g=m.innerHTML;c.columnValue=g}(c.actualEndIndex||0===c.actualEndIndex)&&a[f].endIndex&&(c.actualEndIndex=a[f].endIndex,c.currentContext.pop(),c.doPushContext=!0);e+=d.fn(a[f])}c.catindex--;return e},!1);
pega.ui.TemplateEngine.registerHelper("getPropertyValue",function(a){return a&&-1!==a.indexOf(".")?pega.ui.TemplateEngine.getCurrentContext().getPropertyValue(a):a},!1);
pega.ui.TemplateEngine.registerHelper("gridRowIterator",function(a,b,d,e){var c=pega.ui.TEMPLATE_CONSTANTS,f=c.PZGRIDWRAPPER,g=c.PYPAGELISTPROPERTY,c="",m=!1;d=d||{};var n=pega.ui.tGrid(d.pyUniqueId),h=n.state.pySelectedRowKey,l=null,g=d[f][g];d.pxFilterConditionId&&(l=pega.ui.tGrid.getFilterRecordsindices(g,d.pxFilterConditionId));var p=d.isNewAddedRow||!1,k=pega.ui.tGridMetaDataManager.getGridBody(d,1);pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal()&&(g=d[f].offlinePageListProp);
f=pega.ui.TemplateEngine.getCurrentContext();k=pega.ui.TemplateEngine.cloneMetadata(k);k.dataCells=k.pyTemplates;var r="";if(k.dataCells)for(var q=0;q<k.dataCells.length;q++)if("primary"==k.dataCells[q].pyColumnImportance){r=k.dataCells[q].pyPropertyName;break}for(q=a;q<=b;q++){if(l&&!p&&Array.isArray(l))if(l[q-1])a=parseInt(l[q-1]),k.index=a,k.base_ref=g+"("+a+")";else break;else k.index=q,k.base_ref=g+"("+q+")";k.isSelected=!1;d.groups&&(d.rowIdentifier=d.msterRw);k.automationId="data-test-id\x3d"+
d.automationId+"-R"+k.index;d.dataRow=k;f.push(k.index-1);a=f.getPropertyValue(pega.ui.tGridConstants.ROW_UNIQUE_PROPERTY);var t=f.getPropertyValue(".pySelected");k.pySelected="true"===t?"checked aria-checked\x3d'true'":"aria-checked\x3d'false'";k.ariaLabel=f.getPropertyValue(r);"true"!==t||n.state.pyRowSelectionIndex||(n.state.pyRowSelectionIndex=k.index);!m&&(k.base_ref==d.pySelectedRecord||a&&h&&a==h)&&(m=k.isSelected=!0,n.state.pySelectedRecord=k.base_ref);evaluateRowVisibility(d);c+=e.fn(d);
f.pop()}return c},!1);
pega.ui.TemplateEngine.registerHelper("gridHeaderRowIterator",function(a,b,d,e,c){var f="",g=pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal();b=b.length;for(var m=e.gridWrapper.isCategorizationEnabled,n=0;n<b;n++){var h=pega.ui.tGridMetaDataManager.getGridBody(e,0),l=pega.ui.TemplateEngine.getCurrentContext();l.push(pega.ui.tGrid(e.pyUniqueId).state.sectionContext);h=h.pyTemplates[n];h.index=n;h.automationId=d.automationId?"data-test-id\x3d"+d.automationId+"-th-"+n:"";h.ariaDivID=a+
"-th"+n;h.showColumnMenuIcon=m;"false"!==m||"true"!==h.pyColumnSorting&&"false"===h.pyColumnFiltering||(h.showColumnMenuIcon="true");"true"===m&&(h.showColumnMenuIcon=(!("false"===h.pyColumnSorting&&"false"===h.pyColumnFiltering)&&!h.pyPropertyName.startsWith(".pyTemplate")).toString(),"true"===e.gridWrapper.isColumnTogglerEnabled&&"AV"!==h.pyColumnVisibility&&(h.showColumnMenuIcon=m));var p="true"==e.pyGridCategorization&&-1!=e.columns.indexOf(h.pyPropertyName),k="";"true"===h.isFiltered&&(k=" filtered column");
"true"==h.pyColumnSorting?"ASC"==h.pySortType?(h.ariaLabel="sorted in ascending order"+k,h.sortClass="sortable pi"+(p?"":" pi-arrow-up")):"DESC"==h.pySortType?(h.ariaLabel="sorted in descending order"+k,h.sortClass="sortable pi"+(p?"":" pi-arrow-down")):(h.ariaLabel=k,h.sortClass=""):h.ariaLabel=k;g?(h.filteringEnabled=!1,h.showColumnFilterIcon=!1):(h.filteringEnabled="false"!=h.pyColumnFiltering,h.showColumnFilterIcon="true"!==d.pyShowFiltersInModal&&"false"!=h.pyColumnFiltering);h.pyFilterText=
d.pyFilterText;h.pyUpdateFilterText=d.pyUpdateFilterText;h.filterMetaDataPage=pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE+a;h.filterPanelPage=h.filterMetaDataPage+".pyColumns("+h.pyInitialOrder+")";h.ariaCollapseLabel=pega.ui.TemplateEngine.getCurrentContext().getLocalizedValue("Click to collapse all rows","pyActionPrompt").trim();f+=c.fn(h);l.pop()}return f},!1);
pega.ui.TemplateEngine.registerHelper("includeToolbarSection",function(a){if(pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal())return!1;var b,d="",e="",c=a[pega.ui.TEMPLATE_CONSTANTS.PZGRIDSECTIONSINFO],f=pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE,g=c.pxGridToolbarPage;c&&(b=c.pxGridToolbarId)&&g&&(d=pega.ui.tGridUtility.getSectionMarkup(g,b),d=d.replace(new RegExp(g,"g"),f+a.pyUniqueId));c&&(b=c.pxGridOtherActionId)&&(e=pega.ui.tGridUtility.getSectionMarkup(pega.ui.tGrid(a.pyUniqueId).state.sectionContext,
b));return d+e});
pega.ui.TemplateEngine.registerHelper("includePersonalizationIcon",function(a){if(!(a.generateToolbar||pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal())){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER;if("true"===a[d].isPersonalizationEnabled){var e=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId),c=e.getPersonalizationIcon();if(!c){var c=b.PZGRIDSECTIONSINFO,f=pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE,g=a[c][b.PYPERSONALIZESECTIONCONTEXT],b=new RegExp("(PersonalizedGrid)|("+g+
")|(DummyGridUniqueID)","g"),c=pega.ui.tGridUtility.getSectionMarkup(g,a[c][pega.ui.tGridConstants.GRID_PERSONALIZATION_ICON_ID]),c=c.replace(b,function(b,c,d){switch(b){case pega.ui.tGridConstants.PERSONALIZED_GRID:case g:return f+a.pyUniqueId+".pyActionTopPage";case pega.ui.tGridConstants.DUMMY_GRID_UNIQUE_ID:return a.pyUniqueId}}),b=$(c)[0],c=b.querySelector("div.save-buttons-wrapper");"true"===a[d].isImplicitSaveEnabled&&c?c.parentNode.removeChild(c):pega.ui.tGridUtility.togglePersonalizationButtons(b,
"includePersonalizationIcon",e);c=b.outerHTML;e.setPersonalizationIcon(c)}return c}}});
pega.ui.TemplateEngine.registerHelper("includeFilterGadget",function(a){if(pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal())return!1;var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDSECTIONSINFO,b=b.PZGRIDWRAPPER,e="",c=pega.ui.tGridUtility.isFilterableColumns(a);!c||"true"!==a.pyShowFiltersInModal&&"true"!==a[b].responsive||(e=pega.ui.FilterUtils.buildFilterIcon(a.pyUniqueId,a[d].pxGridFilterIconId));c&&pega.ui.FilterUtils.subscribe(a.pyUniqueId,pega.ui.TemplateGrids,"refreshGrid_Filter");
return e},!1);pega.ui.TemplateEngine.registerHelper("includeFilterbarGadget",function(a){if(pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal())return!1;var b=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId),d="true"!==a.pyShowFiltersInModal;pega.ui.tGridUtility.isFilterableColumns(a)&&"true"===b.state.isFiltered&&setTimeout(function(){pega.ui.FilterUtils.buildFilterBar(b,d)},0);return""},!1);
pega.ui.TemplateEngine.registerHelper("generatePaginationMeta",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,e=b.PYPAGELISTPROPERTY;pega.ui.PaginateUtils.subscribe(a.pyUniqueId,pega.ui.TemplateGrids,"refreshGrid_Paginate");b=a.pyPagingSettings;e=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId).getSourceLength(a[d][e]);b.pxTotalResultCount=e;b.parentId=a.pyUniqueId;b.responsive=a[d].responsive;return Handlebars.helpers.getPaginationMarkup(b)},!1);
pega.ui.TemplateEngine.registerHelper("getPaginationMarkup",function(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PYCURRENTPAGEINDEX;a[d]=parseInt(a[d]||"1");a.pyPageSize=a[b.PYPAGESIZE]&&parseInt(a[b.PYPAGESIZE]);if(isGridPgnHidden(a))return"";var e=Math.ceil(a.pxTotalResultCount/a.pyPageSize),c=getGridPaginationIndices(paginationConstants.PAGE_COUNT,a[d],e);a.finalIndex=e;a.startIndex=c.startIndex;a.lastIndex=c.lastIndex;a.mbStartIndex=1+a.pyPageSize*(a[d]-1);a.mbEndIndex=a[d]==a.finalIndex?a.pxTotalResultCount:
a.pyPageSize*a[d];a.mbPrevDisabled=1==a[d]?"disabled":"";a.mbNextDisabled=a[d]==a.finalIndex?"disabled":"";a.nextWindow=a[b.PYNEXTWINDOW];a.previousPage=a[b.PYPREVIOUSPAGE];a.nextPage=a[b.PYNEXTPAGE];a.pyPrevious=a[b.PYPREVIOUS];a.currentPageIndex=a[b.PYCURRENTPAGEINDEX];a.previousWindow=a[b.PYPREVIOUSWINDOW];a.pyNext=a[b.PYNEXT];a.paginationPrefix=a[b.PYPAGINATIONPREFIX];a.currentPageText=a[b.PYCURRENTPAGETEXT];a.pageText=a[b.PYPAGETEXT];a.ofText=a[b.PYOFTEXT];return void 0!==pega.u.d.UseNewPaginationForOptimisedGrid&&
!0===pega.u.d.UseNewPaginationForOptimisedGrid?Handlebars.templates.pzPaginateTemplateNew(a):Handlebars.templates.pzPaginateTemplate(a)});function isGridPgnHidden(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=a[b.PYPAGESIZE],e=a[b.PXCURRENTPAGINGSLOT],b=a[b.PYPAGELISTPROPERTY],c=!1;d&&e&&b&&a.parentId||(c=!0);parseInt(a.pxTotalResultCount)<=parseInt(d)&&(c=!0);return c}
function getGridPaginationIndices(a,b,d){var e=1,c=a=a||paginationConstants.PAGE_COUNT,f,g;if(b>a)for(f=0;f<a;f++)if(g=b+f,0==g%a){e=g-(a-1);c=g;break}return{startIndex:e,lastIndex:c>d?d:c}}
function evaluateRowVisibility(a){if(a.pyExpressionId){a.pyExpressionIdMeta=pega.ui.ExpressionEvaluator.getExpressionMetaToStamp(a.pyExpressionId);var b=pega.ui.ExpressionEvaluator.evaluateClientExpressions(a.pyExpressionId)[pega.ui.ExpressionEvaluator.SHOW_WHEN];a.pyHide="undefined"==typeof b?!1:!b;var d=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId);b?d.state.pyAllRowsHidden=!1:d.state.pyHiddenRows[a.dataRow.base_ref]=b}}
function prepareRowSelectionHelperData(a){var b=pega.ui.TEMPLATE_CONSTANTS,d=b.PZGRIDWRAPPER,e=b.ISROWSELECTIONENABLED;if(d&&e&&"true"===a[d][e]){var e=a[d][b.PYPAGELISTPROPERTY],c=b.PYROWSELECTIONMODE,f=pega.ui.tGrid(a.pyUniqueId).state,b=pega.ui.tGrid(a.pyUniqueId);a.dataRow={pySelected:""};a.isTableCategorized=f.isTableCategorized;a.showCheckbox="multi"===a[d][c];a.showRadiobutton="single"===a[d][c];a.showHeaderCheckbox=a.showCheckbox&&f.pxTotalResultCount<=pega.u.d.rowSelectionThreshold;a.hideHeaderCheckbox=
a.showRadiobutton||!a.showHeaderCheckbox;a.dataPageName=e.substring(0,e.lastIndexOf("."));a.pageListPropHandle=pega.u.property.toHandle(e);d=pega.ui.tGridUtility.getContextInfo(e,"pxSelectedRowsCount");f.selectedRowsCount=d;e=pega.ui.tGridUtility.getContextInfo(e,"pxFilteredSelectedRowsCount");f.filteredSelectedRowsCount=e;d="true"===f.isFiltered?e:d;0===d?a.pySelectAllChecked="aria-checked\x3d'false'":d===b.getSourceLength()?a.pySelectAllChecked="checked aria-checked\x3d'true'":d<b.getSourceLength()&&
(a.pySelectAllChecked="aria-checked\x3d'mixed'");a.showRowSelection=a.showCheckbox||a.showRadiobutton;a.showCheckbox?(a._dataTemplateType="pxCheckbox",a._type="checkbox",a._class="checkbox chkBxCtl selectChkbxCtl",a._dataClickForRows="[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.updateSelectedCount(event,"+a.pyUniqueId+")\x26quot;]]]",a._dataClickForHeaderRow="[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.selectTableRows(event,"+a.pyUniqueId+")\x26quot;]]]"):a.showRadiobutton&&
(a._dataTemplateType="pxRadioButton",a._type="radio",a._class="Radio rb_ selectRadioCtl",a._dataClickForRows="[[\x26quot;runScript\x26quot;, [\x26quot;pega.ui.TemplateGrids.handleSingleSelect(event,"+a.pyUniqueId+")\x26quot;]]]")}};
pega.namespace("pega.ui");var Dom=pega.util.Dom;
pega.ui.tGridConstants={TEMPLATE_NAME:"pzGridTemplate",HTTP_POST:"POST",EVENT_CLICK:"click keypress",EVENT_RDL_DROPSUCCESS:"RDL.DROPSUCCESS",EVENT_RDL_DROPFAILURE:"RDL.DROPFAILURE",EVENT_GRID_DROPSUCCESS:"GRID.DROPSUCCESS",EVENT_GRID_DROPFAILURE:"GRID.DROPFAILURE",SORTABALE_COLUMN_SELECTOR:"table[uniqueid] \x3e tbody \x3e tr th[isSortable\x3d'true']",SELECTED_ROW_CLASS:"gridCellSelected",BELOW:"INSERTAFTER",ABOVE:"INSERTBEFORE",MODAL_TEMPLATE:"pyNextGenGridModalTemplate",ACTION_ACTIVITY:"@baseclass.pzDoListAction",
ADD_NEW_PAGE:"IntermediateAddPage",ADD_PRE_ACTIVITY:"@baseclass.pzDoListPreAddItem",GRID_PAGINATE_ACTION:"PAGINATE",GRID_SORT_ACTION:"SORT",GRID_ADDITEM_ACTION:"ADDITEM",GRID_EDITITEM_ACTION:"EDITITEM",GRID_DELETEITEM_ACTION:"DELETEITEM",GRID_FILTER_ACTION:"FILTER",GRID_DELETE_FILTER_ACTION:"DELETE-FILTER",GRID_REFRESH_PAGINATE_ACTION:"REFRESH-PAGINATE",GRID_REORDER_ACTION:"REORDER",GRID_RESIZE_ACTION:"RESIZE",GRID_ONLOAD_ACTION:"INITIALLOAD",GRID_PERSONALIZE_ACTION:"PERSONALIZE",GRID_POST_ACTION:"GRIDPOSTACTION",
PAGINATION_MORE_WINDOW_SIZE:"3",GRID_REFRESHLIST:"GRID-REFRESHLIST",PXGRID_BODY_TEMPLATENAME:"pxGridBody",PXGRID_HEADER_ROW_TEMPLATENAME:"pxGridHeaderRow",PXGRID_DATA_ROW_TEMPLATENAME:"pxGridDataRow",PXGRID_NODATA_MSG_TEMPLATENAME:"NODATA",PXGRID_NOFILTERDATA_MSG_TEMPLATENAME:"FILTERNODATA",PXGRID_CRITERIA_PAGE:"GridMetadata_",PXGRID_FILTER_PANEL_ACTIONS_ACTIVITY_NAME:"pzFilterPanelActions",PXGRID_FILTER_PANEL_EXPAND_ACTION:"EXPAND",PXGRID_FILTER_PANEL_CLEAR_ACTION:"CLEAR",PXGRID_FILTER_PANEL_CLEARALL_ACTION:"CLEARALL",
PERSONALIZED_GRID:"PersonalizedGrid",AFTER_VISIBLE_WHENS_HANDLED:"AfterVisibleWhenExpressionsEvaluated",GRID_UPDATE_COLSTATE:"UPDATEGRIDCOLUMNSSTATE",UPDATE_ROWHEIGHT:"UPDATEROWHEIGHT",GRID_SAVE_PERSONALIZATION:"SAVEGRIDPERSONALIZATION",GRID_COLUMNS_SHOW_HIDE:"SHOWHIDE",GRID_CLEAR_PERSONALIZE_DATAPAGE:"CLEARPERSONALIZEDGRIDPAGE",ROW_UNIQUE_PROPERTY:".pzInsKey",PY_INITIAL_ORDER:"pyInitialOrder",PY_ORDER:"pyOrder",PY_DATA_INITIAL_ORDER:"data-initialorder",PY_DATA_ORDER:"data-order",PERSONALIZATION_ICONS_PAGE:"gridPersonalizationPage",
GRID_PERSONALIZATION_ICON_ID:"pxGridPersonalizeIconId",DUMMY_GRID_UNIQUE_ID:"DummyGridUniqueID",GRID_DISCARD_OR_RESET:"DISCARDORRESET",GRID_CATEGORIZATION_SECTION:"pxGridCategorizeId",GRID_CATEGORIZATION_SECTION_PAGE:"pyCategorizeSectionContext",GRID_ROWHEIGHT_SECTION:"pxGridRowHeightIconId",GRID_ROWHEIGHT_COMPACT:"row-compact",GRID_ROWHEIGHT_DEFAULT:"row-default",GRID_ROWHEIGHT_MULTI_LINE:"row-multi-line",GRID_ROWHEIGHT_FULL_CONTENT:"row-full-content",GRID_ROWHEIGHT_SECTION_PAGE:"pyRowHeightSectionContext",
CATEGORIZE_GRID:"CATEGORIZEGRID",DELETE_VIEW:"DELETE_VIEW",SWITCH_VIEW:"SWITCH_VIEW"};
pega.ui.tGridUtility=function(){function a(a,c,f){var b=a.querySelector("div.save-personalize"),d=a.querySelector("div.saving-personalize");a=a.querySelector("div.state-discarded");var g;f&&(g=f.getMetaData());switch(c){case "duringSave":b&&(b.style.display="none");d&&(d.style.display="block");break;case "saveSuccessCallback":b&&(b.style.display="block",b.classList.add("split-left"));d&&(d.style.display="none");"false"===g.pyIsPersonalized&&(a&&(a.style.display="block"),c=$(f.getPersonalizationIcon())[0],
a=c.querySelector("div.state-discarded"),b=c.querySelector("div.save-personalize"),a&&(a.style.display="block"),b&&b.classList.add("split-left"),f.setPersonalizationIcon(c.outerHTML));break;case "includePersonalizationIcon":"false"===g.pyIsPersonalized?a&&(a.style.display="none"):b&&b.classList.add("split-left"),d&&(d.style.display="none")}}function c(a,d){if(a)return d(a)?a:c(a.parentNode,d);pega.ui.logger.LogHelper.debug("tGrid::getClosestElement: element not defined")}return{updateEntryHandlesOnCtrls:function(a,
c,f,e,h){a&&["name","data-context","data-change","data-config","data-click"].forEach(function(b){a.querySelectorAll("["+b+"]").forEach(function(a){var d=a.getAttribute(b).replace(new RegExp(e.replace(/[.*+?^${}()|[\]\\]/g,"\\$\x26"),"g"),h),d=d.replace(new RegExp(c.replace(/[.*+?^${}()|[\]\\]/g,"\\$\x26"),"g"),f);a.setAttribute(b,d)})})},getIncrimentedBaseRef:function(a,c){if(a)return c=c||0,c=parseInt(a.substring(a.lastIndexOf("(")+1,a.length-1))+c||1,a.substring(0,a.lastIndexOf("(")+1)+c+")"},getErrorHandler:function(a){var b=
"tGrid::"+(a?a+":":"")+"Ajax failed";return function(a){console.warn(b,a)}},removePage:function(a,c){a=SafeURL_createFromURL(pega.u.d.url);a.put("pyActivity","RemovePage");a.put("thePage","IntermediateAddPage");c={success:c,failure:pega.ui.tGridUtility.getErrorHandler("removePage()")};pega.u.d.asyncRequest("POST",a,c)},getGridMsg:function(a,c){var b=pega.ui.TEMPLATE_CONSTANTS,d=a[b.PZGRIDTABLE],h,g="",l=a[b.PZGRIDSECTIONSINFO];switch(c){case pega.ui.tGridConstants.PXGRID_NODATA_MSG_TEMPLATENAME:g=
l&&(h=l[b.PXGRIDNODATAMSGID])?pega.ui.tGridUtility.getSectionMarkup(l[b.PYNOMSGSECTIONCONTEXT],h):a.isDPHasError?d.dataSourceErrorText:d[b.PYNODATATEXT];break;case pega.ui.tGridConstants.PXGRID_NOFILTERDATA_MSG_TEMPLATENAME:l&&(h=l[b.PXGRIDNOFILTERDATAMSGID])?g=pega.ui.tGridUtility.getSectionMarkup(l[b.PYNOMSGSECTIONCONTEXT],h):(a=b.PYNORESULTTEXT,b=b.PYUDATEFILTER,d[b]?(g=g+"\x3cdiv class\x3d'grid-no-data'\x3e\x3cdiv class\x3d'grid-no-data-img'\x3e\x3c/div\x3e\x3cdiv\x3e"+d[a],g=g+"\x3c/div\x3e\x3cdiv\x3e"+
d[b],g+="\x3c/div\x3e\x3c/div\x3e"):g=d[a])}return g},getSectionMarkup:function(a,c){var b=pega.ui.TemplateEngine.getCurrentContext();b.push(a);var d=pega.ui.ClientDataProvider.getMetadataStoreByType("SECTION");c=b.getDynamicSectionId(c);c=c instanceof Array?1==c.length?c[0]:c.shift():c;d=d[c];d=pega.ui.TemplateEngine.cloneMetadata(d);d.sectionBaseRef=a;pega.ui.TemplateEngine.processMetadataPerComponent(d,null,!0);a=pega.ui.template.RenderingEngine.getRenderer(d.pyName)(d);b.pop();return a},closest:c,
registerExpressionHandler:function(a,c,f){pega.ui.EventsEmitter.unsubscribe(pega.ui.tGridConstants.AFTER_VISIBLE_WHENS_HANDLED,c,f);pega.ui.EventsEmitter.subscribe(pega.ui.tGridConstants.AFTER_VISIBLE_WHENS_HANDLED,c,!1,a,f)},registerRDLDropHandler:function(a,c,f){pega.ui.EventsEmitter.unsubscribe(pega.ui.tGridConstants.EVENT_RDL_DROPSUCCESS,c);pega.ui.EventsEmitter.subscribe(pega.ui.tGridConstants.EVENT_RDL_DROPSUCCESS,c)},getPropertyValue:function(a,c){var b=function(a){return a?a.replace(/\(([^)]+)\)/g,
function(a,c){return isNaN(c)?"."+c:a}):""};a.includes("(")&&(a=b(a));c=pega.ui.tGridUtility.resolveContext(a+c);a=pega.ui.TemplateEngine.getClientDataProvider().trackedPropertiesList;if(c&&-1!==c.indexOf("."))for(c=c.split("."),b=0;b<c.length;b++)c[b]&&a&&(a=a[c[b]]);return a},resolveContext:function(a){return a=a.replace(/\((\d+)\)/g,function(a,c,b,h){return"0"==c?".0":"."+(parseInt(c)-1)})},setPartialListProperty:function(a,c){a=a.split(".");a[1]=a[1].replace(/\(\d+\)/g,function(a,c,b,d){return""});
var b=pega.ui.TemplateEngine.getClientDataProvider().trackedPropertiesList;c?b[a[0]]["$partialListProperty$"+a[1]]=c:delete b[a[0]]["$partialListProperty$"+a[1]]},prepareAugmentedMetaDataForServer:function(a){for(var c=pega.ui.TEMPLATE_CONSTANTS,b=[],e=pega.ui.tGridMetaDataManager.getGridRowHeader(a),h=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId),g=e.length,l=0,k=0;k<g;k++){var m=e[k],n={};n.pyLabel=m.pyHeaderLabel;n.pyPropertyName=m.pyPropertyName;var p=m.pyDataType;"True-False"==p&&(p=
"TrueFalse");"Date Time"==p&&(p="DateTime");n.pyDataType=p;n.pyFilterType=m.pyColumnFiltering;n.pyColumnSorting=m.pyColumnSorting;n.pySortType=m.pySortType;n.pyCellWidth=m.pyCellWidth;n.pyInitialOrder=m.pyInitialOrder;m.pyIsSearchable&&(n.pyIsSearchable=m.pyIsSearchable);n.pyContentType=m.pyContentType;"SUB_SECTION"===m.pyContentType&&""!==m.pySortFilterProperty&&(n.pySortFilterProperty=m.pySortFilterProperty);"TrueFalse"==p||"Identifier"==p?(n.pyFilterPanelSection="pzFilterPanelText",n.pyMobileFilterPanelSection=
"pzMobileFilterPanelText"):(n.pyFilterPanelSection="pzFilterPanel"+p,n.pyMobileFilterPanelSection="pzMobileFilterPanel"+p);m.pyVisibilityWhenRule&&(n.pyVisibilityWhenRule=m.pyVisibilityWhenRule);n.pyColumnVisibility=m.pyColumnVisibility||"IV";n.pyOrder=m.pyOrder;n.pyShow=m.pyShow;n.pyIsCategorized=m.pyIsCategorized;n.pyIsCategorized&&"true"===n.pyIsCategorized&&(l+=1);n.pySortOrder=m.pySortOrder;b.push(n)}e={};k=pega.ui.TEMPLATE_CONSTANTS;g=k.PZGRIDWRAPPER;e.pyIsCategorizationEnabled=a[g].isCategorizationEnabled;
e.pyIsRowHeightEnabled=a[g].isRowHeightEnabled;e.pyIsColumnTogglerEnabled=a[g].isColumnTogglerEnabled;e.pyIsRefreshListEnabled=a[g].isRefreshListEnabled;e.pyIsPersonalizationEnabled=a[g].isPersonalizationEnabled;e.pySectionName=a[g][k.PYSECTIONNAME];e.pySectionClass=a[g][k.PYSECTIONCLASS];e.pzModesMethodName=a[g].pzModesMethodName;e.pzCellMethodName=a[g][k.PZCELLMETHODNAME];e.pyRowVisibleCondition=a.pyRowVisibleCondition||"";e.pxFilterConditionId=a.pxFilterConditionId||"";e.pyResultsClass=a[g].resultsClass;
e.pyColumnInfoProp=a[g].pyColumnInfo;e.pyIsSearchEnabled=a[g].isSearchEnabled;e.pyPassCurrentParamPage=a[g].pyPassCurrentParamPage;e.pxDataSrcId=a[g].datasrcid;a[g].preActivity&&(e.preActivity=a[g].preActivity);a[g].postActivity&&(e.postActivity=a[g].postActivity);"true"===a[g].isPersonalizationEnabled&&(e.pyGridStateUniqueID=a.pyGridStateUniqueID,e.pySectionInsName=a.pySectionInsName,e.pyHarnessInsName=a.pyHarnessInsName,e.pyOperatorID=a.pyOperatorID,e.pyPersonalizedName=a.pyPersonalizedName,e.pyIsPersonalized=
a.pyIsPersonalized,e.pyImplicitSave=a[g].isImplicitSaveEnabled,e.pyGridRowHeight=a.pyGridRowHeight,e.pzCTResetSaveMethodName=a[k.PZGRIDWRAPPER][k.PZCTRESETSAVEMETHODNAME]);e.pyID=a.pyUniqueId;e.pyPageList=a[g][k.PYPAGELISTPROPERTY];e.isQueryable=a[g].isQueryable;e.isFilteringEnabled=a[g].isFilteringEnabled;e.isSortingEnabled=a[g].isSortingEnabled;e.pyDesignViewName=a[g].pyDesignViewName;e.isRowSelectionEnabled=a[g].isRowSelectionEnabled;e.pyRowSelectionMode=a[g].pyRowSelectionMode;e.pzCTMethodName=
h.state[c.PZCTMETHODNAME];e.pyNoOfColumnsCategorized=l;e.pyIsTableCategorized=h.state.isTableCategorized;e.pxObjClass="Pega-UI-Component-Grid-Filter";a=pega.ui.tGridUtility.getContextInfo(a.gridWrapper.pageListProp,"pxSelectedRowsCount");e.pyCountText=a?a+" selected":h.getSourceLength()+" results";for(k=0;k<b.length;k++)b[k].pxObjClass="Embed-FilterColumn";e.pyColumns=b;e.pyIsModified="false";return e},isFilterableColumns:function(a){var c=!1;a=pega.ui.tGridMetaDataManager.getGridRowHeader(a);for(var b=
a.length,e=0;e<b;e++)if("false"!=a[e].pyColumnFiltering){c=!0;break}return c},updateColumnOrder:function(a,c,f){var b,d,g=a.querySelectorAll("th"),l=a.getAttribute("uniqueid");b=g[parseInt(c)];d=g[parseInt(f)];var g=pega.ui.tGridInstanceManager.getInstance(l),k=parseInt(b.getAttribute("data-order"));d=parseInt(d.getAttribute("data-order"));b=Object.assign([],g.state.pyColumns);for(var m in b){var n=parseInt(b[m].pyOrder),p='th[data-initialOrder \x3d "'+parseInt(b[m].pyInitialOrder)+'" ]',p=a.querySelector(p);
k<d?n===k?b[m].pyOrder=d:n<k||n>d||(b[m].pyOrder=n-1):n===k?b[m].pyOrder=d:n<d||n>k||(b[m].pyOrder=n+1);p&&p.setAttribute("data-order",b[m].pyOrder)}m=pega.ui.TEMPLATE_CONSTANTS.PZGRIDWRAPPER;pega.ui.tGridUtility.handleColumnRearrangeSuccess(g,b,c,f,a);a={};a={uniqueid:l,implicitSave:g.getMetaData()[m].isImplicitSaveEnabled,pyColumns:JSON.stringify({pyColumns:b}),gridAction:pega.ui.tGridConstants.GRID_UPDATE_COLSTATE,callBack:{success:function(){pega.ui.TemplateGrids.publishGridAction("POST",pega.ui.tGridConstants.GRID_REORDER_ACTION,
l)},failure:pega.ui.tGridUtility.getErrorHandler("updateColumnOrder()")}};pega.ui.TemplateGrids.performGridAjaxAction(a)},sortColumns:function(a){return function(c,b){return c[a]<b[a]?-1:c[a]>b[a]?1:0}},getGridStateColumn:function(a,c){return function(b){return b[a]==c}},getGridStateDomNode:function(a,c){return function(b){return b.getAttribute(a)==c}},showFloatingDiv:function(a,c,f,e){var b=document.getElementById("DropfloatDiv");b||(b=document.createElement("div"),b.id="DropfloatDiv",b.className=
"dropFloatingIndicator",document.getElementsByTagName("body")[0].appendChild(b));Dom.setStyle(b,"width",f);Dom.setStyle(b,"height",e+"px");Dom.setStyle(b,"display","inline");Dom.setXY(b,[a,c])},hideFloatingDiv:function(){var a=Dom.get("DropfloatDiv");a&&a.parentElement.removeChild(a)},handleColumnRearrangeSuccess:function(a,c,f,e,h){a.state.pyColumns=c;for(pyColumn in c)a='th[data-initialOrder \x3d "'+parseInt(c[pyColumn].pyInitialOrder)+'" ]',(a=h.querySelector(a))&&a.setAttribute("data-order",c[pyColumn].pyOrder);
pega.ui.ListUtils.moveNodes(h,f,e)},saveTablePersonalization:function(c,d,f){var b=null,h,g;f?(h=f,g=pega.ui.tGridInstanceManager.getInstance(h),f=g.getGridElement()):(f=pega.ui.tGridUtility.closest(c.target,function(a){return a.classList.contains("template-root-marker")}).querySelector("table[uniqueid]"),h=f.getAttribute("uniqueid"),g=pega.ui.tGridInstanceManager.getInstance(h));g.getToolBar()||!0!==d&&"true"!==d||(b=pega.ui.tGridUtility.closest(c.target,function(a){return"grid-personalization-icon"===
a.getAttribute("class")}),a(b,"duringSave"));c={uniqueid:h,gridAction:pega.ui.tGridConstants.GRID_SAVE_PERSONALIZATION,callBack:{success:function(){var c=pega.ui.tGridInstanceManager.getInstance(h),d=c.getMetaData();b&&a(b,"saveSuccessCallback",c);"false"===d.pyIsPersonalized&&(d.pyIsPersonalized="true");pega.ui.logger.LogHelper.debug("Table personalization is successfully saved")},failure:pega.ui.tGridUtility.getErrorHandler("saveTablePersonalization()")}};pega.ui.TemplateGrids.performGridAjaxAction(c)},
discardOrResetTablePersonalization:function(a,c,f){var b;f?(a=f,b=pega.ui.tGridInstanceManager.getInstance(a),f=b.getGridElement()):(f=pega.ui.tGridUtility.closest(a.target,function(a){return a.classList.contains("template-root-marker")}).querySelector("table[uniqueid]"),a=f.getAttribute("uniqueid"),b=pega.ui.tGridInstanceManager.getInstance(a));pega.pushStackFrame("secID",b.secID);pega.ui.TemplateGrids.performGridAjaxAction({uniqueid:a,gridAction:pega.ui.tGridConstants.GRID_DISCARD_OR_RESET,isDiscard:c,
callBack:{success:function(a){pega.popStackFrame("secID");a=$(a.responseText).filter(".template-root-marker.gridDefault");var c=b.getRootElement();b.nullify();c.outerHTML=a[0].outerHTML;pega.ui.logger.LogHelper.debug("Table personalization either successfully reset or discarded")},failure:function(a){pega.popStackFrame("secID");pega.ui.tGridUtility.getErrorHandler("discardOrResetTablePersonalization()")()}}})},findElementInArray:function(a,c){for(var b=0;b<a.length;b++)if(c(a[b],b))return a[b]},togglePersonalizationButtons:a,
getContextInfo:function(a,c){var b=a;0<a.indexOf(".")&&(b=a.substring(0,a.lastIndexOf(".")));a=pega.ui.TemplateEngine.getCurrentContext().getPropertyValue(b);"object"!=typeof a&&(a=pega.ui.ClientDataProvider.getTracker().getPropertyValue(b));if(a)return a[c]},updateClientDataProvider:function(a,c){var b=a.split("."),d=pega.ui.ClientDataProvider.getTracker().trackedPropertiesList[b[0]];if(d)for(a=1;a<b.length;a++){var h=b[a];if(-1===h.indexOf("("))a===b.length-1?d[h]=c:d=d[h];else{var g=h.substring(0,
h.indexOf("(")),h=h.substring(h.indexOf("(")+1,h.indexOf(")"));a===b.length-1?d[g][h-1]=c:d=d[g][h-1]}}else pega.ui.ClientDataProvider.getTracker().trackedPropertiesList[a]=c}}}();
pega.ui.tGrid=pega.ui.tGrid||function(a){if(this.constructor!==pega.ui.tGrid&&"object"!==typeof a){var c=pega.ui.tGridInstanceManager.getInstance(a);if(c)return c;console.warn("Grid::grid not found for uniqueid:"+a)}this.uniqueId=a.pyUniqueId=+new Date;this.instanceId=a.pyInstanceID;this.automationId=a.gridWrapper.automationId?a.gridWrapper.automationId:"";this.gridColumns="";this.tagName=a.tagName||"table";this.initialize(a);pega.ui.TemplateGrids.publishGridAction("POST",pega.ui.tGridConstants.GRID_ONLOAD_ACTION,
this.uniqueId)};pega.ui.tGrid.getFilterRecordsCount=function(a,c){var b=a;0<a.indexOf(".")&&(b=a.substring(0,a.lastIndexOf(".")));return pega.ui.tGridUtility.getPropertyValue(b,".$pxFilters."+c+".$pxSize")};pega.ui.tGrid.setFilterRecordsCount=function(a,c,b){var d=a;0<a.indexOf(".")&&(d=a.substring(0,a.lastIndexOf(".")));pega.ui.tGridUtility.getPropertyValue(d,".$pxFilters."+c).$pxSize=b};
pega.ui.tGrid.setFilterRecordsIndices=function(a,c,b){var d=a;0<a.indexOf(".")&&(d=a.substring(0,a.lastIndexOf(".")));pega.ui.tGridUtility.getPropertyValue(d,".$pxFilters."+c).$pxIndices=b};pega.ui.tGrid.getFilterRecordsindices=function(a,c){var b=a;0<a.indexOf(".")&&(b=a.substring(0,a.lastIndexOf(".")));a=pega.ui.tGridUtility.getPropertyValue(b,".$pxFilters."+c+".$pxIndices");Array.isArray(a)||(a=[a]);return a};
pega.ui.tGrid.prototype.initialize=function(a){pega.ui.tGridInstanceManager.addInstance(this);this.state=pega.ui.tGridMetaDataManager.getInitialState(a);pega.ui.tGridMetaDataManager.addToMetaDataMap(a);this.addEventListeners();var c=this.state.pyExpressionId;c&&pega.ui.tGridUtility.registerExpressionHandler(c,this.visibilityCallBack,this);"true"===a.gridWrapper.isCategorizationEnabled&&pega.ui.tGridUtility.registerRDLDropHandler(this.uniqueId,this.handleRDLDropSuccess,this);this.registerNullify(a)};
pega.ui.tGrid.prototype.getSourceLength=function(a,c,b){var d=pega.ui.TEMPLATE_CONSTANTS;b=d.PZGRIDWRAPPER;var f=pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal();a="object"==typeof a?a:this.getMetaData();var e=a[b][d.PYPAGELISTPROPERTY],h=e;0<e.indexOf(".")&&(h=e.substring(0,e.lastIndexOf(".")));var g=e.substring(e.lastIndexOf(".")+1),l,k=d.PZGRIDTABLE,m=d.PYISDATAPAGEPARAMETRIZED,d=a.SOURCE_PAGELIST_SIZE;if(f)a[k][m]&&"true"==a[k][m]&&this.updateDP_params(a),(c=pega.ui.ClientCache.find(h))&&
null!=c?((l=c.get(g))&&null!=l?l=c.get(g).size():(l=0,console.warn("Check for custom populator as DP might be parametrized")),a[b].offlinePageListProp=c._ref+".pxResults"):(l=0,console.warn("Check for custom populator as DP might be parametrized"));else if(b=pega.ui.TemplateEngine.getCurrentContext().getPropertyValue(h),"object"!=typeof b&&(b=pega.ui.ClientDataProvider.getTracker().getPropertyValue(h)),b&&b.hasMessage&&(a.isDPHasError=!0),a.pxFilterConditionId?l=pega.ui.tGrid.getFilterRecordsCount(e,
a.pxFilterConditionId):b&&(l=b[d]),void 0==l||null==l||c)l=0,b=b?b:{},b[g]=[],b[d]=0,pega.ui.tGridUtility.updateClientDataProvider(h,b);return l};
pega.ui.tGrid.prototype.updateDP_params=function(a){var c=pega.ui.TEMPLATE_CONSTANTS,b=a[c.PZGRIDTABLE],d=c.PYNAME,f=c.PYVALUE;if(b[c.PYISDATAPAGEPARAMETRIZED]&&"true"==b[c.PYISDATAPAGEPARAMETRIZED]){var e;this.state=this.state||{};b=!1;this.state.datapageParam?(a=this.state.datapageParam,e=a.length,b=!0):(a=a[c.PYDATAPAGEPARAMS],e=a.length,this.state.datapageParam=[]);for(var h=0;h<e;h++){var g=a[h][d],l=a[h][f];if(b)l=this.state.datapageParam[h][f];else{if(""!=l&&(-1<l.indexOf("$")||-1<l.indexOf("#")))var k=
pega.ui.TemplateEngine.getCurrentContext(),l=k.replaceActionStringTokens(l),l=l.replace("#~","").replace("~#",""),l=k.getPropertyValue(l);k={};k[c.PYNAME]=g;k[c.PYVALUE]=l;this.state.datapageParam.push(k)}pega.clientTools&&pega.clientTools.getParamPage().put(g,l)}}};pega.ui.tGrid.prototype.setSelectedRecord=function(a){this.state.pySelectedRecord=a};pega.ui.tGrid.prototype.getSelectedRecord=function(){return this.state.pySelectedRecord};
pega.ui.tGrid.prototype.setSelectedRowKey=function(a){a=a&&pega.ui.tGridUtility.getPropertyValue(a,pega.ui.tGridConstants.ROW_UNIQUE_PROPERTY);this.state.pySelectedRowKey=a};pega.ui.tGrid.prototype.getSelectedRowKey=function(){return this.state.pySelectedRowKey};pega.ui.tGrid.prototype.updateSortState=function(a,c){var b=this.state.pyColumns,d=b.length;if(b){for(var f=0;f<d;f++)delete b[f].pySortType,b[f][pega.ui.tGridConstants.PY_INITIAL_ORDER]==a&&(b[f].pySortType=c);this.state.pyColumns=b}};
pega.ui.tGrid.prototype.getPersonalizationIcon=function(){return this.pyPersonalizationIcon};pega.ui.tGrid.prototype.setPersonalizationIcon=function(a){this.pyPersonalizationIcon=a};pega.ui.tGrid.prototype.getMobileFilterIcon=function(){var a=this.pyMobileFilterIcon;if(a){var a=$(a),c=this.state.isFiltered;1==c||"true"==c?a.find(".pi-filter").attr("class","pi pi-filter-on"):a.find(".pi-filter-on").attr("class","pi pi-filter")}return a};
pega.ui.tGrid.prototype.setMobileFilterIcon=function(a){a=a.replace(/DummyPage123/g,pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE+this.uniqueId);-1!=a.indexOf("AJAXCT")&&(a=$(a)[0].outerHTML);var c=this.state.isFiltered;if(1==c||"true"==c)a=$(a),a.find(".pi-filter").attr("class","pi pi-filter-on"),a=a[0].outerHTML;return this.pyMobileFilterIcon=a};pega.ui.tGrid.prototype.setFilterBarMarkup=function(a){this.pyFilterBarMarkup=a};pega.ui.tGrid.prototype.getFilterBarMarkup=function(){return this.pyFilterBarMarkup};
pega.ui.tGrid.prototype.getSortedColumn=function(){for(var a={},c=this.state.pyColumns,b=0;b<c.length;b++){var d=c[b];if(d.pySortType){a.sortType=d.pySortType;a.sortProperty=d.pyPropertyName;break}}a.sortProperty&&0!==a.sortProperty.indexOf(".")&&(c=this.getMetaData(),c=pega.ui.tGridMetaDataManager.getGridRowHeader(c),d=pega.ui.tGridUtility,b=d.findElementInArray(c,d.getGridStateColumn(pega.ui.tGridConstants.PY_INITIAL_ORDER,b+1)),"SUB_SECTION"===b.pyContentType&&(a.sortProperty=b.pySortFilterProperty));
return a};pega.ui.tGrid.prototype.getColumns=function(){return this.state.pyColumns};pega.ui.tGrid.prototype.setColumns=function(a){this.state.pyColumns=a};pega.ui.tGrid.prototype.getPaginationState=function(){var a=pega.ui.TEMPLATE_CONSTANTS;return this.state[a.PYPAGINGSETTINGS]?this.state[a.PYPAGINGSETTINGS]:""};pega.ui.tGrid.prototype.setPaginationState=function(a){this.state[pega.ui.TEMPLATE_CONSTANTS.PYPAGINGSETTINGS]=a};
pega.ui.tGrid.prototype.resetPagingState=function(){var a=pega.ui.TEMPLATE_CONSTANTS,c=this.getPaginationState();if(c){c[a.PXCURRENTPAGINGSLOT]=1;c[a.PYCURRENTPAGEINDEX]=1;c[a.PYPAGEINDEX]=1;var b=this.getMetaData(),d=c[a.PYPAGESIZE],b=this.getSourceLength(b,!1,!1);c.pxTotalResultCount=b;parseInt(c[a.PXCURRENTPAGINGSLOT]*d*3)>=parseInt(b)?c[a.PXMORE]=!1:c[a.PXMORE]=!0;this.setPaginationState(c)}};
pega.ui.tGrid.prototype.refreshPagination=function(){var a=pega.ui.TEMPLATE_CONSTANTS,c=this.getPaginationState();if(c){var b=+c.pxTotalResultCount,d=+c[a.PYPAGESIZE],f=Math.ceil(b/d),e=+c[a.PXCURRENTPAGINGSLOT],h=+c[a.PYCURRENTPAGEINDEX],g=Math.ceil(b/(3*d));b<d||(f<h&&(c[a.PYCURRENTPAGEINDEX]=f),g<c[a.PXCURRENTPAGINGSLOT]&&(c[a.PXCURRENTPAGINGSLOT]=g),c[a.PXMORE]=b>e*d*3,b<=(h-1)*d?paginate(h-1,this.uniqueId):paginate("R",this.uniqueId))}};
pega.ui.tGrid.prototype.updateFilteringState=function(a){var c=pega.ui.TEMPLATE_CONSTANTS,b,d=this.getPaginationState();if(d){var f=parseInt(d[c.PXCURRENTPAGINGSLOT]),e=parseInt(d[c.PYPAGESIZE]),h=parseInt(d.pxTotalResultCount);if(a&&1!=d[c.PYCURRENTPAGEINDEX])for(;parseInt(d[c.PYCURRENTPAGEINDEX])*e-e>=h;)d[c.PYCURRENTPAGEINDEX]=parseInt(d[c.PYCURRENTPAGEINDEX])-1,b=!0;else d[c.PYCURRENTPAGEINDEX]=1;parseInt(f*e*3)>=parseInt(h)?d[c.PXMORE]=!1:d[c.PXMORE]=!0;this.setPaginationState(d);return b}};
pega.ui.tGrid.prototype.getMetaData=function(){var a=pega.ui.TEMPLATE_CONSTANTS,c=pega.ui.tGridMetaDataManager.getMetaData(this.instanceId),c=pega.ui.tGridMetaDataManager.mergeMetaData(this.state,c);c.pyUniqueId=this.uniqueId;c.automationId=this.automationId;var b=a.PZGRIDWRAPPER,d=a.PZGRIDTABLE;c.pzContainerClass=c[b].pzContainerClass;c.pzClass=c[b][a.PZCLASS];c.pzContentClass=c[b][a.PZCONTENTCLASS];c.pzPropertyType=c[b][a.PZPROPERTYTYPE];c.pyPageListProperty=c[b][a.PYPAGELISTPROPERTY];c.pxGridActions=
c[a.PXGRIDACTIONS];c.inlineStyle=c[d][a.PYINLINESTYLE];c.pyGridMinWidth=c.pyGridMinWidth;c.summary=c[d][a.PYGRIDSUMMARY];c.caption=c[d].gridCaption;c.pyPagingSettings=c[a.PYPAGINGSETTINGS];return c};pega.ui.tGrid.prototype.getMarkup=function(){return Handlebars.templates[pega.ui.tGridConstants.TEMPLATE_NAME](this.getMetaData())};pega.ui.tGrid.prototype.getGridMarkup=function(){return Handlebars.templates.pzGridTemplateMini(this.getMetaData())};
pega.ui.tGrid.prototype.getRowMarkup=function(a){var c=this.getMetaData();c.gridRowHelperData=this.gridRowHelperData;c.params={startIndex:a,endIndex:a};prepareRowSelectionHelperData(c);c.isNewAddedRow=!0;Handlebars.helpers.pushGridConText(c);a=Handlebars.templates.pzGridTemplateRow(c);Handlebars.helpers.popGridConText();return a};
pega.ui.tGrid.prototype.getDataRowMarkup=function(){var a=this.getMetaData();Handlebars.helpers.prepareGridHelperData(a);Handlebars.helpers.prepareRowHelperData(a);a.gridRowHelperData=this.gridRowHelperData;return Handlebars.templates.pzGridTemplateDataRow(a)};pega.ui.tGrid.prototype.getGridSortMarkup=function(){return Handlebars.templates.pzGridSortTemplate(this.getMetaData())};pega.ui.tGrid.prototype.getGridPaginateMarkup=function(){var a=this.getPaginationState();return Handlebars.helpers.getPaginationMarkup(a)};
pega.ui.tGrid.prototype.getGridPaginateWrapperMarkup=function(){return Handlebars.templates.pzGridTemplatePaginate(this.getMetaData())};pega.ui.tGrid.prototype.getGridElement=function(){return pega.ctx.dom.querySelector(this.tagName+"[uniqueid\x3d'"+this.uniqueId+"']")};pega.ui.tGrid.prototype.getRootElement=function(){var a=this.getGridElement();return pega.ui.tGridUtility.closest(a,function(a){return a.classList.contains("template-root-marker")})};
pega.ui.tGrid.prototype.getToolBar=function(){var a=this.getGridElement();return pega.ui.tGridUtility.closest(a,function(a){return a.classList.contains("template-root-marker")}).querySelector(".grid-toolbar-section")};pega.ui.tGrid.prototype.getFilterBarGadget=function(){var a=this.getGridElement();return(a=pega.ui.tGridUtility.closest(a,function(a){return a.classList&&a.classList.contains("template-root-marker")}))&&a.querySelector(".grid-filterbar-gadget")};
pega.ui.tGrid.prototype.getGridRows=function(){return $("table[uniqueid\x3d'"+this.uniqueId+"'] \x3e tbody \x3e tr[data-row\x3d'true']")};pega.ui.tGrid.prototype.getVisibleRows=function(){for(var a=this.getGridRows(),c=[],b=0;b<a.length;b++)"none"!=a[b].style.display&&c.push(a[b]);return c};pega.ui.tGrid.prototype.getRowNodeFromBaseRef=function(a){return $("table[uniqueid\x3d'"+this.uniqueId+"'] \x3e tbody \x3e tr[base_ref\x3d'"+a+"']")};
pega.ui.tGrid.prototype.getFocusedRow=function(){return $("table[uniqueid\x3d'"+this.uniqueId+"'] \x3e tbody \x3e tr."+pega.ui.tGridConstants.SELECTED_ROW_CLASS)};pega.ui.tGrid.prototype.refreshGrid=function(){var a=this.getGridMarkup(),c=this.getGridElement();$(c).replaceWith(a);this.initializeDragDrop()};pega.ui.tGrid.prototype.refreshGridIfNeeded=function(a){return(a?a:this.getGridElement()).getElementsByTagName("style").length?(this.refreshGrid(),!0):!1};
pega.ui.tGrid.prototype.refreshRow=function(a,c){var b=this.getGridElement(),d=$("[base_ref\x3d'"+a+"']",b),f=this.getRowIndex(d),e=this.getMetaData();this.refreshGridIfNeeded(b)?(d=$("[base_ref\x3d'"+a+"']",b),c||this.focusRow(d)):(e.isNewAddedRow=!0,e.gridRowHelperData=this.gridRowHelperData,d.length?(e.params={startIndex:f,endIndex:f},Handlebars.helpers.pushGridConText(e),d.empty(),f=Handlebars.templates.pzGridTemplateRow(e),Handlebars.helpers.popGridConText(),d.replaceWith(f),d=$("[base_ref\x3d'"+
a+"']",b),pega.u.d.processOnloads(d[0]),c||this.focusRow(d)):console.warn("Grid::refreshRow():row doesn't exist"))};pega.ui.tGrid.prototype.getRowIndex=function(a){if(a)return a=$(a).attr("base_ref"),a=a.substring(a.lastIndexOf("(")+1,a.lastIndexOf(")")),parseInt(a)};
pega.ui.tGrid.prototype.addRow=function(a,c){if(!this.refreshGridIfNeeded()){var b,d;a&&0<$(a).length?(a=$(a),b=this.getRowIndex(a)+(c?1:0),d=a.nextAll("tr[data-row\x3d'true']"),c||d.push(a[0]),this.updateEntryHandles(d,1),b=this.getRowMarkup(b),c?($(b).insertAfter(a),a=a.next("tr[data-row\x3d'true']")):($(b).insertBefore(a),a=a.prev("tr[data-row\x3d'true']"))):(b=this.getRowMarkup(1),a=this.getGridElement(),$(a).find("tr[data-row\x3d'false']").remove(),a=$(a).find("tBody#gridTableBody"),$(b).appendTo(a),
a=a.find("tr[data-row\x3d'true']"));return a}};
pega.ui.tGrid.prototype.addRowPostdelete=function(a,c){var b,d;a&&0<$(a).length?(a=$(a),b=this.getRowIndex(a),(d=this.getFilterIndices())&&0<d.length?(b=d.indexOf(b),b=d[b+1]):b=this.getRowIndex(a)+1,d=this.getRowMarkup(b),c?($(d).insertAfter(a),a=a.next("tr[data-row\x3d'true']")):($(d).insertBefore(a),a=a.prev("tr[data-row\x3d'true']"))):(d=this.getRowMarkup(1),a=this.getGridElement(),$(a).find("tr[data-row\x3d'false']").remove(),a=$(a).find("tBody#gridTableBody"),$(d).appendTo(a),a=a.find("tr[data-row\x3d'true']"));
return a};pega.ui.tGrid.prototype.getFilterIndices=function(){var a=pega.ui.TEMPLATE_CONSTANTS,c=this.getMetaData(),a=c[a.PZGRIDWRAPPER][a.PYPAGELISTPROPERTY];if(c=c.pxFilterConditionId)return pega.ui.tGrid.getFilterRecordsindices(a,c)};
pega.ui.tGrid.prototype.deleteRow=function(a,c,b){var d=this.preDelete(a);this.refreshGridIfNeeded()?this.isFocussible()&&(a=this.getGridRows(),focusRow=d.isOnlyRow?a.last():a.slice(0,d.index).last(),this.focusRow(focusRow)):(a.remove(),this.postDelete(d,c,b),this.state.pyExpressionId&&this.evaluateNoDataMessageVisibility())};pega.ui.tGrid.prototype.preDelete=function(a){var c=a.index();this.updateEntryHandles(a.nextAll(),-1);this.removeGridsByRow(a);return{index:c,isOnlyRow:this.isOnlyRow(a)}};
pega.ui.tGrid.prototype.updateEntryHandles=function(a,c){for(var b=a.length,d=0;d<b;d++)this.updateAttributes(a[d],c)};pega.ui.tGrid.prototype.restampCellExpressionId=function(a){if(this.gridRowHelperData)for(var c=this.gridRowHelperData.dataCols,b={component:"pxGrid"},d=0;d<c.length;d++)c[d].pyExpressionId&&(pega.ui.TemplateEngine.getCurrentContext().push(a,void 0,b),c[d].pyExpressionIdMeta=pega.ui.ExpressionEvaluator.getExpressionMetaToStamp(c[d].pyExpressionId),pega.ui.TemplateEngine.getCurrentContext().pop())};
pega.ui.tGrid.prototype.updateAttributes=function(a,c){var b=a.getAttribute("base_ref");if(b){["base_ref","full_base_ref"].forEach(function(b){var d=a.getAttribute(b);d&&(d=pega.ui.tGridUtility.getIncrimentedBaseRef(d,c),a.setAttribute(b,d),a.setAttribute("data-context",d))});var d=a.getAttribute("base_ref"),f=pega.ui.property.toHandle(b),e=pega.ui.property.toHandle(d);pega.ui.tGridUtility.updateEntryHandlesOnCtrls(a,f,e,b,d);this.state.pyHiddenRows&&"undefined"!==typeof this.state.pyHiddenRows[b]&&
(delete this.state.pyHiddenRows[b],this.state.pyHiddenRows[d]=!1);this.restampCellExpressionId(d);(b=a.getAttribute("aria-rowindex"))&&a.setAttribute("aria-rowindex",+b+c);(d=a.getAttribute("data-test-id"))&&a.setAttribute("data-test-id",d.replace(/R[0-9]+/,"R"+(+b+c)))}};
pega.ui.tGrid.prototype.postDelete=function(a,c,b){c=pega.ui.TEMPLATE_CONSTANTS;var d,f,e,h,g;d=this.getGridRows();if(f=this.getPaginationState())e=f[c.PYPAGESIZE],h=f.pxTotalResultCount,g=f[c.PYCURRENTPAGEINDEX];f&&d.length<parseInt(e)&&h>g*parseInt(e)&&this.addRowPostdelete(d.last(),!0);c=this.getMetaData()[c.PZGRIDWRAPPER][c.PYPAGELISTPROPERTY];c=c.substring(0,c.indexOf("."));e=this.getFilterIndices();this.synchTotalRecordsWithServer(c,b||e&&0==e.length);b=this.state.pyAllRowsHidden;e=this.state.pyHiddenRows;
this.refreshPagination();this.state.pyAllRowsHidden=b;this.state.pyHiddenRows=e;this.isFocussible()&&(d=this.getGridRows(),focusRow=a.isOnlyRow?d.last():d.slice(0,a.index).last(),this.focusRow(focusRow))};pega.ui.tGrid.prototype.isOnlyRow=function(a){return 0==a.siblings("tr[role\x3d'row']").length};pega.ui.tGrid.prototype.removeFilterIndex=function(a){var c=this.state.filterIndex;if(c){a=this.getRowIndex(a);c.splice(a-1,1);for(--a;a<c.length;a++)c[a]=+c[a]-1;0==c.length&&this.refreshGrid()}};
pega.ui.tGrid.prototype.synchTotalRecordsWithServer=function(a,c){var b=this.getPaginationState();a=this.getSourceLength(a,c);b&&(b.pxTotalResultCount=parseInt(a));this.state.pxTotalResultCount=a;this.refreshGridIfRquired(a)};pega.ui.tGrid.prototype.refreshGridIfRquired=function(a){var c=pega.ui.TEMPLATE_CONSTANTS;0==a?("true"!=this.state.isFiltered&&(this.state[c.PYISDATAPAGEEMPTY]="true"),this.refreshGrid()):this.state[c.PYISDATAPAGEEMPTY]="false"};pega.ui.tGrid.prototype.bFocussible;
pega.ui.tGrid.prototype.isFocussible=function(){var a=this.bFocussible;if(void 0!=a)return a;for(var a=this.getGridElement(),a=$(a).closest(".template-root-marker"),c=["data-click","data-dblclick","data-rightclick","data-keydown","data-keyup"],b,d=0;d<c.length;d++)if(b=a.attr(c[d])||"",-1<b.indexOf("SETFOCUS"))return a=!0;return!1};
pega.ui.tGrid.prototype.focusRow=function(a,c){var b=pega.ui.tGridConstants.SELECTED_ROW_CLASS,d;a instanceof jQuery&&a.length&&(d=pega.u.d.getBaseRef($(a).children(0).get(0)),this.setSelectedRecord(d),this.setSelectedRowKey(d),a.siblings("tr."+b).removeClass(b).removeAttr("tabIndex").children().removeClass(b),1==c?a.addClass(b).children().addClass(b):a.addClass(b).focus().children().addClass(b))};
pega.ui.tGrid.prototype.removeGridsByRow=function(a){$(a).find("table[uniqueid]").each(function(){var a=$(this).attr("uniqueid"),b=pega.ui.tGridInstanceManager.getInstance(a);pega.ui.tGridInstanceManager.removeInstance(a);b.removeEventListeners()})};
pega.ui.tGrid.prototype.handleRDLDropSuccess=function(a){var c=!1;(a=pega.ui.tGridUtility.closest(a.draggedElement,function(a){if((a=a.getAttribute("node_name"))&&""!==a)return"pyGridCategorization"===a&&(c=!0),!0}))&&c&&(a=a.querySelector("div.uniqueid\x3einput[type\x3d'hidden']").value||"","true"===pega.ui.tGridInstanceManager.getInstance(a).state.isTableCategorized&&(pega.ui.TemplateGrids.categorizeGrid(null,a,"DRAGDROP",""),pega.ui.TemplateGrids.gridCatExpandAll("")))};
pega.ui.tGrid.prototype.addEventListeners=function(){if(1===pega.ui.tGridInstanceManager.getGridInstanceCount())$(document).on(pega.ui.tGridConstants.EVENT_CLICK,pega.ui.tGridConstants.SORTABALE_COLUMN_SELECTOR,pega.ui.TemplateGrids.sortGridColumn)};
pega.ui.tGrid.prototype.removeEventListeners=function(){1===pega.ui.tGridInstanceManager.getGridInstanceCount()&&($(document).off(pega.ui.tGridConstants.EVENT_CLICK,pega.ui.tGridConstants.SORTABALE_COLUMN_SELECTOR,pega.ui.TemplateGrids.sortGridColumn),this.state.pyExpressionId&&pega.ui.EventsEmitter.unsubscribe("AfterVisibleWhenExpressionsEvaluated",this.visibilityCallBack),pega.ui.EventsEmitter.unsubscribe(pega.ui.tGridConstants.EVENT_RDL_DROPSUCCESS,pega.ui.tGrid.prototype.handleRDLDropSuccess))};
pega.ui.tGrid.prototype.getNumberOfRowsInCurrentPage=function(){var a,c=this.getPaginationState();if(c){var b=pega.ui.TEMPLATE_CONSTANTS;a=parseInt(c.pxTotalResultCount);var d=c[b.PYPAGESIZE],c=parseInt(c[b.PYCURRENTPAGEINDEX]);a=c*d>a?a-(c-1)*d:d}else a=this.state.pxTotalResultCount;return a};
pega.ui.tGrid.prototype.evaluateNoDataMessageVisibility=function(){var a=Object.keys(this.state.pyHiddenRows).length,c=pega.ctx.dom.getElementById("pyAllRowsHidden_"+this.uniqueId),b=!1;c&&(b=""===c.style.display);if(0!==a||b){var d=this.getGridRows().length;this.state.pyAllRowsHidden=a===parseInt(d)?!0:!1;d>a||d===a&&b||!this.state.pyAllRowsHidden&&!b||(a=Handlebars.templates.pzGridMsgTemplate(this.getMetaData()),c.parentElement.appendChild($(a)[0]),c.parentElement.removeChild(c))}};
pega.ui.tGrid.prototype.visibilityCallBack=function(a){a=a.context;var c=!1,b;for(b in a)b.substring(0,b.lastIndexOf("("))===this.state.pageListProp&&(c=!0,a[b]?delete this.state.pyHiddenRows[b]:"undefined"===typeof this.state.pyHiddenRows[b]&&(this.state.pyHiddenRows[b]=a[b]));c&&this.evaluateNoDataMessageVisibility()};
pega.ui.tGrid.prototype.nullify=function(){var a=this.getGridElement();a&&(pega.util.Event.purgeElement(a,!0),pega.u.d.triggerImplicitRefresh?pega.u.d.triggerImplicitRefresh=!1:a.parentNode.removeChild(a),a=$(a).find("th"),a.data("ui-resizable")&&a.resizable("destroy"));this.removeEventListeners();pega.ui.tGridInstanceManager.removeInstance(this.uniqueId);this.state.pyExpressionId&&pega.ui.EventsEmitter.unsubscribe(pega.ui.tGridConstants.AFTER_VISIBLE_WHENS_HANDLED,this.visibilityCallBack,this)};
pega.ui.tGrid.filtersMap={};
pega.ui.tGrid.prototype.registerNullify=function(a){var c=this,b=pega.peekStackFrame("secID");c.secID=b;var d=pega.ui.TEMPLATE_CONSTANTS.PZGRIDWRAPPER;c.initializeGridOnloadsWrapper=function(){if(!c.__fromRefreshGrid&&!c.state.pySelectedRecord&&c.isFocussible()){var b=c.getVisibleRows();b&&b[0]&&(c.setSelectedRowKey(b[0].getAttribute("base_ref")),c.getSelectedRowKey()&&c.focusRow($(b[0]),!0))}(b=c.getRootElement())&&(b=b.querySelector(".table_search input"))&&b.classList.add("table_searchBox");("true"===
a[d].isColumnReorderEnabled||a[d].dragDrop)&&c.initializeDragDrop();"true"===a[d].isColumnResizeEnabled&&setTimeout(function(){c.initializeColResizeGrid()},1E3);c.initGridAccessibility();document.querySelector('[uniqueid \x3d "'+c.uniqueId+'"]')&&pega.u.d.detachOnload(c.initializeGridOnloadsWrapper)};c.isDirty=function(){return c.dirty};pega.ui.tGrid.prototype.markCellChildren=function(a){Array.prototype.forEach.call(a,function(a){var c=a.nodeName,b=window.getComputedStyle&&window.getComputedStyle(a,
"");if(("A"===c||"BUTTON"===c||("TD"===c||"SPAN"===c||"DIV"===c||"IMG"===c||"I"===c)&&-1!==a.outerHTML.split("\x3e")[0].toUpperCase().indexOf("TABINDEX")||"SELECT"===c||"INPUT"===c||"TEXTAREA"===c)&&"hidden"!==a.type&&(a.currentStyle&&"hidden"!==a.currentStyle.visibility&&"none"!==a.currentStyle.display||"hidden"!==b.visibility&&"none"!==b.display&&(0!==b.left.indexOf("-")&&0!==b.right.indexOf("-")||"absolute"!==b.position))){a.setAttribute("tabindex",-1);var b=!("INPUT"===c&&a.classList.contains("autocomplete_input"))&&
!("INPUT"===c&&"range"===a.getAttribute("type"))&&!("INPUT"===c&&a.classList.contains("anypicker-input"))&&"SELECT"!==c&&!("BUTTON"===c&&a.classList.contains("anypicker-caret-btn")),d="checkbox"===a.type&&a.classList.contains("selectChkbxCtl"),m="radio"===a.type&&a.classList.contains("selectRadioCtl");d||m||b&&"INPUT"!==c||a.classList.add("gridInnerFocussable");b&&("INPUT"!==c||"INPUT"===c&&(d||m))&&a.classList.add("gridFocussable")}})};pega.ui.tGrid.prototype.initGridAccessibility=function(){if(!document.querySelector("#GridLiveUpdate")){var a=
document.createElement("div");a.setAttribute("id","GridLiveUpdate");a.setAttribute("aria-live","assertive");document.querySelector("body").appendChild(a)}var b=this.uniqueId;if((a=document.querySelector('[uniqueid \x3d "'+b+'"]'))&&!a.getAttribute("aria-describedby")){var d=a.closest("div .layout-outline"),f=d&&d.querySelector("div .header-title"),d="";(!a.caption||!a.caption.innerText)&&f&&(d=f.innerText,f=pega.util.Dom.get("table_"+b))&&(f.innerText=d+" "+f.innerText);a.setAttribute("aria-describedby",
"table_"+b)}if(a){b=a.querySelectorAll('td[role\x3d"rowheader"],td[role\x3d"gridcell"],th.gridCell');d=b[0];if("true"===this.state.isTableCategorized)a.querySelector('[aria-rowindex\x3d"1"] th.expand-collapse')&&(a.querySelector('[aria-rowindex\x3d"1"] th.expand-collapse i').setAttribute("tabindex",0),a.querySelector('[aria-rowindex\x3d"1"] th.expand-collapse i').setAttribute("aria-label","collapse all groups"));else if(d&&(d.querySelector("a.columnMenu")||d.querySelector("input[type\x3d'checkbox'].selectChkbxCtl"))||
this.isFocussible())""===d.innerText&&2===b.length?(b[1].setAttribute("tabindex","0"),d.setAttribute("tabindex","-1")):d.querySelector("input[type\x3d'checkbox'].selectChkbxCtl")?d.querySelector("input[type\x3d'checkbox'].selectChkbxCtl").setAttribute("tabindex",0):d.querySelector("a.columnMenu")?d.querySelector("a.columnMenu").setAttribute("tabindex",0):d.setAttribute("tabindex","0");b=a.querySelectorAll('td[role\x3d"rowheader"] *,td[role\x3d"gridcell"] *');this.markCellChildren(b);b=a.querySelectorAll("tbody tr");
b[0]&&b[0].setAttribute("tabindex","-1");pega.ui.tGrid.prototype.moveCellFocus=function(a,c,b,d){var m=b.querySelector('[aria-rowindex\x3d"'+a+'"] [data-order\x3d"'+c+'"],[aria-rowindex\x3d"'+a+'"] [aria-colindex\x3d"'+c+'"]');1!==a||0!==c||m||(m=b.querySelector('th [type\x3d"checkbox"].selectChkbxCtl'),a=b.querySelector('[aria-rowindex\x3d"1"] th.expand-collapse'),m?d&&d.classList.contains("selectChkbxCtl")&&a&&(m=b.querySelector('[aria-rowindex\x3d"1"] th.expand-collapse i')):m=b.querySelector('[aria-rowindex\x3d"1"] th.expand-collapse i'));
if(m)d=b.querySelectorAll('th[role\x3d"columnheader"][tabindex\x3d"0"],td[role\x3d"rowheader"][tabindex\x3d"0"],td[role\x3d"gridcell"][tabindex\x3d"0"],td[role\x3d"gridcell"] .gridFocussable, td[role\x3d"rowheader"] .gridFocussable,th[role\x3d"columnheader"] .gridHeaderLabel'),Array.prototype.forEach.call(d,function(a){a.setAttribute("tabindex","-1")});else return!1;b.querySelector(".rowFocussed")&&b.querySelector(".rowFocussed").classList.remove("rowFocussed");if(!m||"gridcell"!==m.getAttribute("role")&&
"rowheader"!==m.getAttribute("role"))return m&&"columnheader"===m.getAttribute("role")?(b=m.querySelector("a.columnMenu"),(d=m.querySelector("input[type\x3d'checkbox'].selectChkbxCtl"))?d.focus():b?b.focus():(m.setAttribute("tabindex","0"),m.focus()),!0):m.classList.contains("expand-collapse")||m.classList.contains("caret-down-icon")||m.classList.contains("chkBxCtl")?(m.setAttribute("tabindex","0"),m.focus(),!0):!1;this.markCellChildren(m.querySelectorAll("*"));d=null;a=m.getElementsByTagName("*");
for(var e=c=0;e<a.length;e++){var f=a[e];f.classList.contains("gridFocussable")&&(d=f,c++)}1===c&&null!=d?(d.setAttribute("tabindex","0"),d.focus(),d.closest("tr").classList.add("rowFocussed")):(m.setAttribute("tabindex","0"),m.focus(),1<c&&m.querySelectorAll(".gridFocussable").forEach(function(a){a.classList.remove("gridFocussable");a.classList.add("gridInnerFocussable")}),b.querySelector(".rowFocussed")&&b.querySelector(".rowFocussed").classList.remove("rowFocussed"),m.parentNode.classList.add("rowFocussed"));
return!0};pega.ui.tGrid.prototype.handleGridkeyPress=function(a){var b=a.target;"Space"===a.code&&(b.classList.contains("caret-down-icon")||b.classList.contains("columnMenu"))&&(b.click(),a.preventDefault(),a.stopPropagation());var d=b.closest("tr[aria-rowindex]")?b.closest("tr[aria-rowindex]").getAttribute("aria-rowindex"):null,e=b.getAttribute("data-order")||b.getAttribute("aria-colindex")||b.closest("th[data-order]")&&b.closest("th[data-order]").getAttribute("data-order")||b.closest("td[aria-colindex]")&&
b.closest("td[aria-colindex]").getAttribute("aria-colindex");if(b.classList.contains("expand-collapse")||b.classList.contains("caret-down-icon")||b.classList.contains("chkBxCtl")||b.classList.contains("singleSelectHeader"))e="0";"Escape"===a.key&&b.closest("th.expand-collapse")&&(e="0");var f=!1,g=b.closest("tr"),h=!1;g&&"false"==g.getAttribute("data-row")&&g.getAttribute("id")&&-1!==g.getAttribute("id").indexOf("pyAllRowsHidden_")&&(h=!0);g&&g.hasAttribute("data-master-identifier")&&"false"===g.getAttribute("data-row")&&
(f=!0);var l=$(b);if(d&&e||f||h)switch(a.key){case "ArrowRight":b.classList.contains("gridInnerFocussable")?b.tagName&&"input"===b.tagName.toLowerCase()&&(null==b.getAttribute("role")||""==b.getAttribute("role"))&&""!=b.value&&b.selectionStart<b.value.length||(e=Array.from(b.closest("td.gridCell").querySelectorAll(".gridInnerFocussable")),a=e.indexOf(b),e[a+1]&&(e[a+1].setAttribute("tabindex","0"),e[a+1].focus(),b.setAttribute("tabindex","-1"))):b.classList.contains("expand-collapse")?(b.setAttribute("tabindex",
"-1"),h=l.nextAll(":visible:first").attr("data-order"),c.moveCellFocus(parseInt(d,10),parseInt(h,10),a.currentTarget)):b.classList.contains("caret-down-icon")||b.classList.contains("chkBxCtl")&&"TD"!==b.parentNode.tagName?b.classList.contains("caret-down-icon")&&b.parentNode.querySelector("input[type\x3d'checkbox'].selectChkbxCtl")?(b.parentNode.querySelector("input[type\x3d'checkbox'].selectChkbxCtl").focus(),b.setAttribute("tabindex","-1")):(b.setAttribute("tabindex","0"),h=l.parent().nextAll(":visible:first").attr("data-order"),
c.moveCellFocus(parseInt(d,10),parseInt(h,10),a.currentTarget)):"template_filter"===b.getAttribute("id")||b.classList.contains("columnMenu")?b.classList.contains("columnMenu")&&(h=l.closest("th[data-order]").nextAll(":visible:first").attr("data-order")||l.closest("td[aria-colindex]").nextAll(":visible:first").attr("aria-colindex"),c.moveCellFocus(parseInt(d,10),parseInt(h,10),a.currentTarget)):(h=l.closest("th[data-order]").nextAll(":visible:first").attr("data-order")||l.closest("td[aria-colindex]").nextAll(":visible:first").attr("aria-colindex"),
c.moveCellFocus(parseInt(d,10),parseInt(h,10),a.currentTarget));break;case "ArrowLeft":e=l.closest("th[data-order]").prevAll(":visible:first").attr("data-order")||l.closest("td[aria-colindex]").prevAll(":visible:first").attr("aria-colindex");if("columnheader"===b.getAttribute("role"))e=e||0,c.moveCellFocus(parseInt(d,10),parseInt(e,10),a.currentTarget,b);else if("template_filter"===b.getAttribute("id")||b.classList.contains("columnMenu"))b.classList.contains("columnMenu")?(e=e||0,c.moveCellFocus(parseInt(d,
10),parseInt(e,10),a.currentTarget,b)):(b.setAttribute("tabindex","-1"),b.closest("th.gridCell").querySelector(".gridHeaderLabel").setAttribute("tabindex","0"),b.closest("th.gridCell").querySelector(".gridHeaderLabel").focus(),b.setAttribute("tabindex","-1"));else if(b.classList.contains("gridInnerFocussable")){if(!b.tagName||"input"!==b.tagName.toLowerCase()||null!=b.getAttribute("role")&&""!=b.getAttribute("role")||0===b.selectionStart)e=Array.from(b.closest("td.gridCell").querySelectorAll(".gridInnerFocussable")),
a=e.indexOf(b),e[a-1]&&(e[a-1].setAttribute("tabindex","0"),e[a-1].focus(),b.setAttribute("tabindex","-1"))}else b.classList.contains("gridHeaderLabel")||(b.classList.contains("selectChkbxCtl")&&(e=0),c.moveCellFocus(parseInt(d,10),parseInt(e,10),a.currentTarget,b));break;case "ArrowDown":for(var d=!1,k=$(b).closest("tr").next()[0];k&&window.getComputedStyle&&"none"===window.getComputedStyle(k,null).display;)k=$(k).next()[0];k&&k.hasAttribute("data-master-identifier")&&"false"===k.getAttribute("data-row")&&
(d=!0,h=l.closest("th.expand-collapse").nextAll(":visible:first").attr("data-order")||l.closest("th.expand-collapse").nextAll(":visible:first").attr("aria-colindex"),void 0===h&&(b.classList.contains("selectChkbxCtl")||b.classList.contains("selectRadioCtl"))&&(h=0),e="0"===e?h:e,k.setAttribute("data-selectedColIndex",e));h=!1;k&&"false"===k.getAttribute("data-row")&&k.getAttribute("id")&&-1!==k.getAttribute("id").indexOf("pyAllRowsHidden_")&&(h=!0,k.setAttribute("data-selectedColIndex",e));f&&d&&
k.setAttribute("data-selectedColIndex",g.getAttribute("data-selectedColIndex"));var v=b.classList.contains("gridHeaderLabel")&&b.closest("th.gridCell").querySelector("a");"template_filter"===b.getAttribute("id")||v||b.classList.contains("gridInnerFocussable")?b.classList.contains("gridInnerFocussable")&&(a.preventDefault(),e=Array.from(b.closest("td.gridCell").querySelectorAll(".gridInnerFocussable")),a=e.indexOf(b),e[a+1]&&(e[a+1].setAttribute("tabindex","0"),e[a+1].focus(),b.setAttribute("tabindex",
"-1"))):(a.preventDefault(),d||h?(a=$(k).children("td:first")[0],a.setAttribute("tabindex","0"),a&&a.focus(),b.setAttribute("tabindex","-1")):f&&!d?(d=k.getAttribute("aria-rowindex"),e=g.hasAttribute("data-selectedColIndex")&&"null"!==g.getAttribute("data-selectedColIndex")?g.getAttribute("data-selectedColIndex"):0,b.setAttribute("tabindex","-1"),c.moveCellFocus(parseInt(d,10),parseInt(e,10),a.currentTarget)):(b=l.closest("tr[aria-rowindex]").next().attr("aria-rowindex"),c.moveCellFocus(parseInt(b,
10),parseInt(e,10),a.currentTarget)));break;case "ArrowUp":d=!1;for(k=$(b).closest("tr").prev()[0];k&&window.getComputedStyle&&"none"===window.getComputedStyle(k,null).display;)k=$(k).prev()[0];k&&k.hasAttribute("data-master-identifier")&&"false"===k.getAttribute("data-row")&&(d=!0,k.setAttribute("data-selectedColIndex",e));f&&d&&k.setAttribute("data-selectedColIndex",g.getAttribute("data-selectedColIndex"));b.classList.contains("gridInnerFocussable")?(a.preventDefault(),e=Array.from(b.closest("td.gridCell").querySelectorAll(".gridInnerFocussable")),
a=e.indexOf(b),e[a-1]&&(e[a-1].setAttribute("tabindex","0"),e[a-1].focus(),b.setAttribute("tabindex","-1"))):(a.preventDefault(),d&&k?(a=$(k).children("td:last")[0],a.setAttribute("tabindex","0"),a&&a.focus(),b.setAttribute("tabindex","-1")):f&&!d||h?(d=k.getAttribute("aria-rowindex"),e=g.hasAttribute("data-selectedColIndex")&&"null"!==g.getAttribute("data-selectedColIndex")?g.getAttribute("data-selectedColIndex"):0,b.setAttribute("tabindex","-1"),c.moveCellFocus(parseInt(d,10),parseInt(e,10),a.currentTarget)):
(b=l.closest("tr[aria-rowindex]").prev().attr("aria-rowindex"),c.moveCellFocus(parseInt(b,10),parseInt(e,10),a.currentTarget)));break;case "Enter":"columnheader"===b.getAttribute("role")&&(b.querySelector("#sort")||b.querySelector("a#template_filter")||b.querySelector("a.columnMenu"))&&(b.querySelector("div.gridHeaderLabel ").setAttribute("tabindex","0"),b.querySelector("div.gridHeaderLabel ").focus(),b.setAttribute("tabindex","-1"),a.preventDefault());if("template_filter"===b.getAttribute("id")||
b.classList.contains("columnMenu"))b.click(),a.stopPropagation();"gridcell"===b.getAttribute("role")&&(e=b.querySelectorAll(".gridFocussable,.gridInnerFocussable"),e[0]&&(e[0].setAttribute("tabindex","0"),e[0].focus(),b.setAttribute("tabindex","-1")));b.classList.contains("expand-collapse")&&"TH"===b.tagName&&(b.querySelector("i").setAttribute("tabindex","0"),b.querySelector("i").focus(),"true"===b.querySelector("i").getAttribute("aria-expanded")?b.querySelector("i").setAttribute("aria-label","collapse all groups"):
b.querySelector("i").setAttribute("aria-label","expand all groups"),b.setAttribute("tabindex","-1"),a.preventDefault());break;case "Escape":b.classList.contains("gridInnerFocussable")||b.classList.contains("gridFocussable")?(b.closest("td.gridCell").setAttribute("tabindex","0"),b.closest("td.gridCell").focus(),b.setAttribute("tabindex","-1"),a.preventDefault(),a.stopPropagation()):b.focus();break;case "Home":b.classList.contains("gridInnerFocussable")||(e=-1<c.getGridElement().classList.toString().indexOf("cat-l")&&
("TH"===b.tagName||a.ctrlKey)?0:1,d=a.ctrlKey?1:d,c.moveCellFocus(parseInt(d,10),e,a.currentTarget),a.preventDefault());break;case "End":b.classList.contains("gridInnerFocussable")||(e=a.currentTarget.rows[0].cells.length-1,d=a.ctrlKey?c.getGridRows().length+1:d,c.moveCellFocus(parseInt(d,10),e,a.currentTarget),a.preventDefault())}};a.addEventListener("keydown",this.handleGridkeyPress,!1);pega.ui.tGrid.prototype.manageFocus=function(a){var b=a.target,d=a.target.closest('td[role\x3d"gridcell"],td[role\x3d"rowheader"],th[role\x3d"columnheader"]'),
e,f;if(d&&(e=d.closest("tr[aria-rowindex]").getAttribute("aria-rowindex"),f=d.getAttribute("data-order")?d.getAttribute("data-order"):d.getAttribute("aria-colindex"),"TD"===d.tagName)){if("checkbox"===b.type&&"INPUT"===b.nodeName)return;c.markCellChildren(d.querySelectorAll("*"))}"template_filter"===b.getAttribute("id")||b.classList.contains("columnMenu")||b.classList.contains("gridFocussable")||b.classList.contains("gridInnerFocussable")||c.moveCellFocus(e,f,a.currentTarget)};a.addEventListener("click",
this.manageFocus,!1)}};pega.u.d.attachOnload(c.initializeGridOnloadsWrapper,!0,c);if(pega.u.d.ServerProxy&&pega.u.d.ServerProxy.isDestinationLocal())setTimeout(function(){pega.u.d.registerAsHarnessElement(c,b)},0);else{pega.u.d.registerAsHarnessElement(c,b);var f=pega.u.template.utility;f.addPageToRemoveList(b,pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE+c.uniqueId);f.addPageToRemoveList(pega.ctx.pzHarnessID,pega.ui.tGridConstants.PXGRID_CRITERIA_PAGE+c.uniqueId)}};
pega.ui.tGrid.prototype.onColumnStart=function(a){a=a.draggedElement;"TH"==a.tagName&&a.classList.contains("expand-collapse")&&(a.classList.remove("dragging"),a.setAttribute("draggable",!1))};
pega.ui.tGrid.prototype.onColumnMove=function(a,c){var b=c.target;"TH"!==b.tagName&&(b=pega.ui.tGridUtility.closest(b,function(a){return"TH"===a.tagName}));var d=c.clientX;c=Dom.getXY(b);var f=c[0];c=c[1];var e=f;(d=d<=f+b.offsetWidth/2)||(e+=b.offsetWidth);var f=!0,h=a.draggedElement.cellIndex,g=b.cellIndex;1===Math.abs(h-g)&&(h<g?d&&(f=!1):d||(f=!1));if(0===g&&b.classList.contains("expand-collapse")||a.draggedElement.classList.contains("expand-collapse")&&0===h)f=!1;f?(a=pega.ui.tGridUtility.closest(b,
function(a){return"TABLE"===a.tagName}),pega.ui.tGridUtility.showFloatingDiv(e,c,"4px",a.offsetHeight)):pega.ui.tGridUtility.hideFloatingDiv()};
pega.ui.tGrid.prototype.onColumnDrop=function(a){var c=-1<a.targetLocation.closest("table").classList.toString().indexOf("cat-l")?0!=a.oldIndex&&0!=a.newIndex:!0;-1!=a.oldIndex&&-1!=a.newIndex&&a.oldIndex!==a.newIndex&&c&&(c=pega.ui.tGridUtility.closest(a.targetLocation,function(a){return"table"===a.tagName.toLowerCase()}),pega.ui.tGridUtility.updateColumnOrder(c,a.oldIndex,a.newIndex),pega.ui.tGridUtility.hideFloatingDiv(),a.draggedElement.focus(),c.querySelector("style")&&(a=c.getAttribute("uniqueid"),
pega.ui.TemplateGrids.changeColumnVisibilityStyles(pega.ui.tGrid(a),c)))};pega.ui.tGrid.prototype.onColumnEnd=function(a){pega.ui.tGridUtility.hideFloatingDiv()};pega.ui.tGrid.prototype.onRowDragStart=function(a,c){pega.ui.tGrid(c.pyUniqueId).focusRow($(a.draggedElement),!0)};pega.ui.tGrid.prototype.onRowMove=function(a,c){return"true"===a.relatedElement.dataset.row};
function getArrayIndicesForReorder(a,c,b,d,f){var e,h,g=[];b?(e=c,h=a):(e=a,h=c);f=pega.ui.tGrid.getFilterRecordsindices(f.pageListProp,f.pxFilterConditionId);b&&g.push(c);for(var l=0;f[l]<=h;l++)f[l]!==a&&e<=f[l]&&g.push(f[l]+d);b||g.push(c);return g}
pega.ui.tGrid.prototype.onRowDrop=function(a,c){if(a.oldIndex!==a.newIndex){var b,d,f,e=[],h=a.oldIndex>a.newIndex;h?(b=a.newIndex,d=a.oldIndex,f=1):(b=a.oldIndex,d=a.newIndex,f=-1);var g=this.getRowIndex(a.draggedElement),l=this.getRowIndex(c.tbodyContainer.children[a.newIndex+f]);if(c.pxFilterConditionId)e=getArrayIndicesForReorder(g,l,h,f,c);else{f=b;for(var k=g;f<=d;f++)h?(e.splice(0,0,k),k--):(e.push(k),k++)}var m=this;pega.ui.TemplateGrids.performGridAjaxAction({uniqueid:this.uniqueId,fromFullRefToPageList:c.pageListProp,
toFullRefToPageList:c.pageListProp,fromIndex:g,toIndex:l,gridAction:pega.ui.tGridConstants.GRID_REORDER_ACTION,arrToBeChangeTracked:e,callBack:{success:function(){pega.ui.EventsEmitter.publishSync(pega.ui.tGridConstants.EVENT_GRID_DROPSUCCESS,a);for(var f=b,g=0;f<=d;f++,g++){var h=c.tbodyContainer.children[f],k=e[g];if(h.hasAttribute("data-test-id")){var l=h.dataset.testId;h.setAttribute("data-test-id",l.substring(0,l.lastIndexOf("R")+1)+k)}h.hasAttribute("aria-rowindex")&&h.setAttribute("aria-rowindex",
f);var q,r;h.hasAttribute("base_ref")&&(q=h.getAttribute("base_ref"),r=q.substring(0,q.lastIndexOf("(")+1)+k+")",h.setAttribute("base_ref",r),h.hasAttribute("data-context")&&h.setAttribute("data-context",r));h.hasAttribute("full_base_ref")&&h.removeAttribute("full_base_ref");k=pega.ui.property.toHandle(q);l=pega.ui.property.toHandle(r);pega.ui.tGridUtility.updateEntryHandlesOnCtrls(h,k,l,q,r)}m.refreshRow(a.draggedElement.getAttribute("base_ref"),!0)},failure:function(){pega.ui.logger.LogHelper.debug("Unable to successfully drop");
pega.ui.EventsEmitter.publishSync(pega.ui.tGridConstants.EVENT_GRID_DROPFAILURE,a)}}})}};
pega.ui.tGrid.prototype.initializeColResizeGrid=function(){var a=this.getGridElement();if(a){c&&c.data("ui-resizable")&&c.resizable("destroy");var c=$(a).find("th:not([class*\x3d'expand-collapse'])"),b=this,d=this.getMetaData(),f="fit";d.inlineStyle||(f="overflow");var e=$(a).find("th:last").height();c.resizable({handles:"e",minHeight:e,maxHeight:e,minWidth:15,resize:function(a,b){$(a.target).closest("th").width(b.size.width)},start:function(a,b){pega.ui.TemplateGrids.actualResizeTarget||(pega.ui.TemplateGrids.actualResizeTarget=
a.target.closest("th"))},stop:function(c,e){var g={};e=$(a).find("th[data-order]:visible");$(e).each(function(a){a=$(this).attr("data-order");g[a]=$(this)});c.columns=g;c.tableMinWidth=$(a).css("min-width");b.updateCellWidth(c,d,f);(c=pega.util.Event.getTarget(c))&&c.closest("th")===pega.ui.TemplateGrids.actualResizeTarget&&(c=c.closest("table[uniqueid]").getAttribute("uniqueid"),pega.ui.tGrid(c).state.doNotSort=!0);delete pega.ui.TemplateGrids.actualResizeTarget}})}};
pega.ui.tGrid.prototype.updateCellWidth=function(a,c,b){var d=a.columns,f=this.uniqueId;if("undefined"!=typeof d){var e=this.state.pyColumns,h;for(h in e){var g=e[h];g.pyShow&&d.hasOwnProperty(g.pyOrder)&&(g.pyCellWidth=d[g.pyOrder].outerWidth()+"px")}d=pega.ui.TEMPLATE_CONSTANTS.PZGRIDWRAPPER;"true"!==c[d].isPersonalizationEnabled?pega.ui.TemplateGrids.publishGridAction("POST",pega.ui.tGridConstants.GRID_RESIZE_ACTION,f):("overflow"===b&&(this.state.pyGridMinWidth=a.tableMinWidth),a={uniqueid:f,
pyColumns:JSON.stringify({pyColumns:e}),pyGridMinWidth:this.state.pyGridMinWidth,gridAction:pega.ui.tGridConstants.GRID_UPDATE_COLSTATE,implicitSave:c[d].isImplicitSaveEnabled,callBack:{success:function(){pega.ui.TemplateGrids.publishGridAction("POST",pega.ui.tGridConstants.GRID_RESIZE_ACTION,f)},failure:pega.ui.tGridUtility.getErrorHandler("updateCellWidth()")}},pega.ui.TemplateGrids.performGridAjaxAction(a))}};
pega.ui.tGrid.prototype.initializeDragDrop=function(){var a=this.getGridElement();if(a){var c=this.getMetaData(),b=pega.ui.TEMPLATE_CONSTANTS.PZGRIDWRAPPER;if("true"===c[b].isColumnReorderEnabled){this.state.colSortableObject&&(this.state.colSortableObject=null);var d={},d={animation:100,ghostClass:"selectedGridHeader",dragClass:"dragClass",virtualDrop:!1,dropPositionLeftClass:"none",dropPositionRightClass:"none",dropPositionTopClass:"none",dropPositionBottomClass:"none",previewOnDrag:!1,dropPosition:"horizontal"},
f=a.querySelector("tr"),d=new pega.ui.Sortable(f,this.uniqueId,d);d.onEnd=this.onColumnEnd;d.onDrop=this.onColumnDrop;d.onMove=this.onColumnMove;d.onStart=this.onColumnStart;this.state.colSortableObject=d}if(c[b].dragDrop){this.state.rowSortableObject&&(this.state.rowSortableObject.destroy(),this.state.rowSortableObject=null);var d={animation:100,dragClass:"draggingClass",customUIClass:"grid-row-drag-drop",chosenClass:"dragged-row-item",filter:function(a,b,c){if(!b.dataset.row)return!0}},e=this,h=
a.querySelector("tbody"),a=new pega.ui.Sortable(h,this.uniqueId+"-row",d);a.onStart=function(a){e.onRowDragStart(a,{pyUniqueId:c.pyUniqueId})};a.onMove=function(a){return e.onRowMove(a,{})};a.onDrop=function(a){e.onRowDrop(a,{pageListProp:c[b].pageListProp,tbodyContainer:h,pxFilterConditionId:c.pxFilterConditionId})};this.state.rowSortableObject=a}}};
pega.ui.tGrid.prototype.getVisibleColumns=function(){var a=[],c;for(c in this.gridRowHelperData.dataCols){var b=this.gridRowHelperData.dataCols[c];b.pyShow&&a.push(b)}return a};pega.ui.tGrid.getGridByUniqueid=function(a){var c=pega.ui.tGridInstanceManager.getInstance(a);if(c)return c;console.warn("Grid::grid not found for uniqueid:"+a)};
pega.ui.tGrid.getGridBySource=function(a,c,b){var d=null;b=c?$(c).find("[pl_prop *\x3d'"+a+".'] table[uniqueid]"):a?pega.ui.tGrid.getGridElementsBySourceType(a):pega.ctx.dom.closest(b.target,"[pl_prop] table[uniqueid]");a&&b&&0==b.length&&(c?b=$(c).find("[pl_prop *\x3d'"+a+"_'] table[uniqueid]"):b=$("[pl_prop *\x3d'"+a+"_'] table[uniqueid]"));if(0===$(b).length)return null;if(b.length)for(a=0;a<b.length;a++){if($(b[a]).is(":visible")){d=$(b[a]);break}}else d=b;if(!d)return null;d=$(d).attr("uniqueid");
return pega.ui.tGrid.getGridByUniqueid(d)};pega.ui.tGrid.getGridElementsBySourceType=function(a){for(var c=pega.ctx.dom.querySelectorAll("div[pl_prop]"),b=0;b<c.length;b++){var d=!1;"Property"===c[b].getAttribute("propertytype")&&c[b].getAttribute("pl_prop")===a?d=!0:-1!==c[b].getAttribute("pl_prop").indexOf(a+".")&&(d=!0);if(d&&(d=c[b].querySelector("table[uniqueid]"),$(d).is(":visible")))return d}return[]};
pega.ui.tGrid.getGridByLayoutInfo=function(a){a=$(a.domNode).find("table#gridLayoutTable").attr("uniqueid");return pega.ui.tGrid.getGridByUniqueid(a)};
pega.ui.tGridMetaDataManager=pega.ui.tGridMetaDataManager||new function(){this.metaDataMap={};this.metaDataPathMap={};this.getInitialState=function(a){var c=pega.ui.TEMPLATE_CONSTANTS,b=c.PZGRIDWRAPPER,d=c.PYISDATAPAGEEMPTY,f={},e=[],h=[];f.isTableCategorized="false";f.isPagingEnabled=a[b].isPagingEnabled;var g="",l=document.querySelector("div[uniqueid\x3d '"+pega.peekStackFrame("secID")+"']");l&&(g=pega.u.d.getBaseRef(l));g||(g=pega.ui.TemplateEngine.getCurrentContext().getReference());for(var l=
this.getGridBody(a,0),k=this.getGridBody(a,1),m=l.pyTemplates.length,n=0;n<m;n++){var p=l.pyTemplates[n],u=k.pyTemplates[n];e.push({pyPropertyName:p.pyPropertyName,pySortType:p.pySortType,isFiltered:p.isFiltered,pyOrder:parseInt(p.pyOrder),pyShow:p.pyShow,pyCellWidth:p.pyCellWidth,pyInitialOrder:parseInt(p.pyInitialOrder)});h.push(p.pyPropertyName);var t=pega.ui.TemplateEngine.getCurrentContext();t.push(g);-1!==p.pyHeaderLabel.indexOf(".")&&(-1===p["data-ui-meta"].indexOf("SUB_SECTION")||p.pyTemplates?
u.pyHeaderLabel=p.pyHeaderLabel=t.getPropertyValue(p.pyHeaderLabel):u.pyHeaderLabel=p.pyHeaderLabel="");t.pop();void 0!==f.isFiltered||"true"!==p.isFiltered&&!0!==p.isFiltered||(f.isFiltered=p.isFiltered)}f.sectionContext=g;f.pyColumns=e;a.pyGridMinWidth&&(f.pyGridMinWidth=a.pyGridMinWidth);a[c.PYPAGINGSETTINGS]&&(f[c.PYPAGINGSETTINGS]=$.extend({},a[c.PYPAGINGSETTINGS]));f[d]=a[c.PZGRIDTABLE][d];f.gridCols=h;f[c.PZCTMETHODNAME]=a[b][c.PZCTMETHODNAME];f[c.PYPAGELISTPROPERTY]=a[b][c.PYPAGELISTPROPERTY];
e=a[b][c.PXDATASOURCEID];h=a[b][c.PYPAGELISTPROPERTY];e?(e=pega.ui.TemplateEngine.ContextObject.getDataSource(e),e+=h.substring(h.lastIndexOf(".")),a[b][c.PYPAGELISTPROPERTY]=e):e=/(\$CTX\$)|(\$PRIMARY\$)|(\$PARENT\d*\$)|(\$TOP\$)/.test(h)?pega.ui.TemplateEngine.getCurrentContext().replaceActionStringTokens(h):a[b][c.PYPAGELISTPROPERTY];f[c.PYPAGELISTPROPERTY]=e;a[b][c.PYPAGELISTPROPERTY]=e;b=pega.ui.tGridInstanceManager.getInstance(a.pyUniqueId).getSourceLength(a,!1,!0);f[d]=0===b?"true":"false";
if(d=f[c.PYPAGINGSETTINGS])d.pxTotalResultCount=b,d[c.PXCURRENTPAGINGSLOT]=1,d[c.PYCURRENTPAGEINDEX]=1,d[c.PYPAGEINDEX]=1,h=d.pxTotalResultCount,parseInt(d[c.PXCURRENTPAGINGSLOT]*d[c.PYPAGESIZE]*3)>=parseInt(h)?d[c.PXMORE]=!1:d[c.PXMORE]=!0,d.parentId=a.pyUniqueId;f.pyHiddenRows={};a.pyExpressionId&&(f.pyExpressionId=a.pyExpressionId,f.pyAllRowsHidden=!0);f.pxTotalResultCount=b;(a=pega.ui.tGridUtility.getContextInfo(e,a.GROUPING_INFO))&&a.columns&&(f.isTableCategorized="true",f.isPagingEnabled="false");
return f};this.getRowOperations=function(a){var c=pega.ui.TEMPLATE_CONSTANTS;return this.getMetaData(a)[c.PZROWOPERATIONS]};this.addToMetaDataMap=function(a){this.metaDataMap[a.pyInstanceID]=a};this.getMetaData=function(a){a=this.metaDataMap[a];return a=JSON.parse(JSON.stringify(a))};this.mergeDefaults=function(a){var c=a[pega.ui.TEMPLATE_CONSTANTS.PYPAGINGSETTINGS];a=pega.ui.TemplateEngine.mergeDefaults(a);c||delete a.pyPagingSettings;return a};this.mergeMetaData=function(a,c){var b=pega.ui.TEMPLATE_CONSTANTS,
d=b.PZGRIDTABLE,f=b.PZGRIDWRAPPER;c.pxGridActions=c[b.PXGRIDACTIONS];var e=this.getGridRowHeader(c),h=a.pyColumns,g=this.getRowHeader(c);g.splice(h.length);for(var l=0;l<h.length;l++){var k=h[l],m=e[l],n=g[l];m.pySortType=k.pySortType;m.isFiltered=k.isFiltered;m.pyOrder=parseInt(k.pyOrder);n.pyOrder=parseInt(k.pyOrder);n.pyShow=k.pyShow;m.pyShow=k.pyShow;m.pyCellWidth=k.pyCellWidth;m.pyInitialOrder=parseInt(k.pyInitialOrder)}e.sort(pega.ui.tGridUtility.sortColumns("pyOrder"));g.sort(pega.ui.tGridUtility.sortColumns("pyOrder"));
a[b.PYPAGINGSETTINGS]&&(c.pyPagingSettings=c[b.PYPAGINGSETTINGS]=a[b.PYPAGINGSETTINGS]);c[d][b.PYISDATAPAGEEMPTY]=a[b.PYISDATAPAGEEMPTY];c.pySelectedRecord=a.pySelectedRecord;a.pyGridMinWidth&&(c.pyGridMinWidth=a.pyGridMinWidth);c[f][b.PYPAGELISTPROPERTY]=a[b.PYPAGELISTPROPERTY];"false"===a.isPagingEnabled&&(delete c.pyPagingSettings,delete c[b.PYPAGINGSETTINGS]);return c};this.getGridBody=function(a,c){return(a=pega.ui.ArrayUtil.find(a.pyTemplates,function(){return this.pyName===pega.ui.tGridConstants.PXGRID_BODY_TEMPLATENAME}))?
0<=c?a.pyTemplates[c]:a.pyTemplates:null};this.getRowHeader=function(a){return this.getDataRow(a)};this.getGridRowHeader=function(a){a=this.getGridBody(a);return(a=pega.ui.ArrayUtil.find(a,function(){return this.pyName===pega.ui.tGridConstants.PXGRID_HEADER_ROW_TEMPLATENAME}))?a.pyTemplates:null};this.getDataRow=function(a){a=this.getGridBody(a);return(a=pega.ui.ArrayUtil.find(a,function(){return this.pyName===pega.ui.tGridConstants.PXGRID_DATA_ROW_TEMPLATENAME}))?a.pyTemplates:null}};
pega.ui.tGridInstanceManager=pega.ui.tGridInstanceManager||function(){var a={};return{addInstance:function(c){a[c.uniqueId]=c},getInstance:function(c){return a[c]},removeInstance:function(c){delete a[c]},getAllInstances:function(){return a},getGridInstanceCount:function(){return Object.keys(a).length}}}();
var pega=pega||{};pega.ui=pega.ui||{};pega.ui.ListUtils=(function(){var B=function(H,M){try{var L=pega.ui.ClientCache.find(H);if(L==null){return false}var I=JSON.parse(L.getJSON());var K=I.pxResults;var G=K;K=E(G,M);I.pxResults=K;L.adoptJSON(JSON.stringify(I));return true}catch(J){console.error("Error : "+J);return false}};var E=function(L,O){var M=L.length;var N=0;var K=O.propName;var P=A;if(O.dataType=="Number"){P=D}var I=[];while(M>0){var G=0;var J=L[0][K];for(var H=0;H<M;H++){if(P(J,L[H][K],O.sortType)){G=H;J=L[G][K]}}I.push(L[G]);L.splice(G,1);M=L.length}return I};var A=function(H,G,I){if(I=="ASC"){return H>G?true:false}else{return H<G?true:false}};var D=function(H,G,I){if(I=="ASC"){return parseFloat(H)>parseFloat(G)?true:false}else{return parseFloat(H)<parseFloat(G)?true:false}};var C=function(M,H,L){var I,G,K,J,N=M.getAttribute("uniqueid");$(">tbody>tr",M).each(function(O){var P=$(this);if(P.attr("id")=="pyAllRowsHidden_"+N||P.hasClass("cat-row")){return }if(O==0){K="th";J="colindex"}else{K="td";J="aria-colindex"}I=$(P).find(">"+K+":eq("+H+")");G=$(P).find(">"+K+":eq("+L+")");$(I).attr(J,$(G).attr(J));if(H<L){I.detach().insertAfter(G)}else{I.detach().insertBefore(G)}});F(M,H,L)};var F=function(N,G,M){var I,L,K,J,H;L=Math.abs(G-M);$(N).find("tr").each(function(O){var Q=$(this);if(O==0){K="th";J="colindex"}else{K="td";J="aria-colindex"}for(var P=1;P<=L;P++){if(G<M){H=$(Q).find(K+":eq("+(G+P-1)+")");$(H).attr(J,parseInt($(H).attr(J))-1)}else{H=$(Q).find(K+":eq("+(M+P)+")");$(H).attr(J,parseInt($(H).attr(J))+1)}}})};return{sort:B,moveNodes:C}})();
/*! jQuery UI - v1.13.2 - 2022-09-16
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/draggable.js, widgets/droppable.js, widgets/resizable.js, widgets/autocomplete.js, widgets/button.js, widgets/checkboxradio.js, widgets/controlgroup.js, widgets/dialog.js, widgets/menu.js, widgets/mouse.js, widgets/progressbar.js, widgets/slider.js, widgets/spinner.js, effect.js, effects/effect-slide.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(x){x.ui=x.ui||{};x.ui.version="1.13.2";var n,i=0,a=Array.prototype.hasOwnProperty,r=Array.prototype.slice;x.cleanData=(n=x.cleanData,function(t){for(var e,i,s=0;null!=(i=t[s]);s++)(e=x._data(i,"events"))&&e.remove&&x(i).triggerHandler("remove");n(t)}),x.widget=function(t,i,e){var s,n,o,a={},r=t.split(".")[0],l=r+"-"+(t=t.split(".")[1]);return e||(e=i,i=x.Widget),Array.isArray(e)&&(e=x.extend.apply(null,[{}].concat(e))),x.expr.pseudos[l.toLowerCase()]=function(t){return!!x.data(t,l)},x[r]=x[r]||{},s=x[r][t],n=x[r][t]=function(t,e){if(!this||!this._createWidget)return new n(t,e);arguments.length&&this._createWidget(t,e)},x.extend(n,s,{version:e.version,_proto:x.extend({},e),_childConstructors:[]}),(o=new i).options=x.widget.extend({},o.options),x.each(e,function(e,s){function n(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}a[e]="function"==typeof s?function(){var t,e=this._super,i=this._superApply;return this._super=n,this._superApply=o,t=s.apply(this,arguments),this._super=e,this._superApply=i,t}:s}),n.prototype=x.widget.extend(o,{widgetEventPrefix:s&&o.widgetEventPrefix||t},a,{constructor:n,namespace:r,widgetName:t,widgetFullName:l}),s?(x.each(s._childConstructors,function(t,e){var i=e.prototype;x.widget(i.namespace+"."+i.widgetName,n,e._proto)}),delete s._childConstructors):i._childConstructors.push(n),x.widget.bridge(t,n),n},x.widget.extend=function(t){for(var e,i,s=r.call(arguments,1),n=0,o=s.length;n<o;n++)for(e in s[n])i=s[n][e],a.call(s[n],e)&&void 0!==i&&(x.isPlainObject(i)?t[e]=x.isPlainObject(t[e])?x.widget.extend({},t[e],i):x.widget.extend({},i):t[e]=i);return t},x.widget.bridge=function(o,e){var a=e.prototype.widgetFullName||o;x.fn[o]=function(i){var t="string"==typeof i,s=r.call(arguments,1),n=this;return t?this.length||"instance"!==i?this.each(function(){var t,e=x.data(this,a);return"instance"===i?(n=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for "+o+" widget instance"):(t=e[i].apply(e,s))!==e&&void 0!==t?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on "+o+" prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=x.widget.extend.apply(null,[i].concat(s))),this.each(function(){var t=x.data(this,a);t?(t.option(i||{}),t._init&&t._init()):x.data(this,a,new e(i,this))})),n}},x.Widget=function(){},x.Widget._childConstructors=[],x.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(t,e){e=x(e||this.defaultElement||this)[0],this.element=x(e),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=x(),this.hoverable=x(),this.focusable=x(),this.classesElementLookup={},e!==this&&(x.data(e,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===e&&this.destroy()}}),this.document=x(e.style?e.ownerDocument:e.document||e),this.window=x(this.document[0].defaultView||this.document[0].parentWindow)),this.options=x.widget.extend({},this.options,this._getCreateOptions(),t),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:x.noop,_create:x.noop,_init:x.noop,destroy:function(){var i=this;this._destroy(),x.each(this.classesElementLookup,function(t,e){i._removeClass(e,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:x.noop,widget:function(){return this.element},option:function(t,e){var i,s,n,o=t;if(0===arguments.length)return x.widget.extend({},this.options);if("string"==typeof t)if(o={},t=(i=t.split(".")).shift(),i.length){for(s=o[t]=x.widget.extend({},this.options[t]),n=0;n<i.length-1;n++)s[i[n]]=s[i[n]]||{},s=s[i[n]];if(t=i.pop(),1===arguments.length)return void 0===s[t]?null:s[t];s[t]=e}else{if(1===arguments.length)return void 0===this.options[t]?null:this.options[t];o[t]=e}return this._setOptions(o),this},_setOptions:function(t){for(var e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(t){var e,i,s;for(e in t)s=this.classesElementLookup[e],t[e]!==this.options.classes[e]&&s&&s.length&&(i=x(s.get()),this._removeClass(s,e),i.addClass(this._classes({element:i,keys:e,classes:t,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(n){var o=[],a=this;function t(t,e){for(var i,s=0;s<t.length;s++)i=a.classesElementLookup[t[s]]||x(),i=n.add?(function(){var i=[];n.element.each(function(t,e){x.map(a.classesElementLookup,function(t){return t}).some(function(t){return t.is(e)})||i.push(e)}),a._on(x(i),{remove:"_untrackClassesElement"})}(),x(x.uniqueSort(i.get().concat(n.element.get())))):x(i.not(n.element).get()),a.classesElementLookup[t[s]]=i,o.push(t[s]),e&&n.classes[t[s]]&&o.push(n.classes[t[s]])}return(n=x.extend({element:this.element,classes:this.options.classes||{}},n)).keys&&t(n.keys.match(/\S+/g)||[],!0),n.extra&&t(n.extra.match(/\S+/g)||[]),o.join(" ")},_untrackClassesElement:function(i){var s=this;x.each(s.classesElementLookup,function(t,e){-1!==x.inArray(i.target,e)&&(s.classesElementLookup[t]=x(e.not(i.target).get()))}),this._off(x(i.target))},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){var n="string"==typeof t||null===t,i={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s="boolean"==typeof s?s:i};return i.element.toggleClass(this._classes(i),s),this},_on:function(n,o,t){var a,r=this;"boolean"!=typeof n&&(t=o,o=n,n=!1),t?(o=a=x(o),this.bindings=this.bindings.add(o)):(t=o,o=this.element,a=this.widget()),x.each(t,function(t,e){function i(){if(n||!0!==r.options.disabled&&!x(this).hasClass("ui-state-disabled"))return("string"==typeof e?r[e]:e).apply(r,arguments)}"string"!=typeof e&&(i.guid=e.guid=e.guid||i.guid||x.guid++);var s=t.match(/^([\w:-]*)\s*(.*)$/),t=s[1]+r.eventNamespace,s=s[2];s?a.on(t,s,i):o.on(t,i)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.off(e),this.bindings=x(this.bindings.not(t).get()),this.focusable=x(this.focusable.not(t).get()),this.hoverable=x(this.hoverable.not(t).get())},_delay:function(t,e){var i=this;return setTimeout(function(){return("string"==typeof t?i[t]:t).apply(i,arguments)},e||0)},_hoverable:function(t){this.hoverable=this.hoverable.add(t),this._on(t,{mouseenter:function(t){this._addClass(x(t.currentTarget),null,"ui-state-hover")},mouseleave:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-hover")}})},_focusable:function(t){this.focusable=this.focusable.add(t),this._on(t,{focusin:function(t){this._addClass(x(t.currentTarget),null,"ui-state-focus")},focusout:function(t){this._removeClass(x(t.currentTarget),null,"ui-state-focus")}})},_trigger:function(t,e,i){var s,n,o=this.options[t];if(i=i||{},(e=x.Event(e)).type=(t===this.widgetEventPrefix?t:this.widgetEventPrefix+t).toLowerCase(),e.target=this.element[0],n=e.originalEvent)for(s in n)s in e||(e[s]=n[s]);return this.element.trigger(e,i),!("function"==typeof o&&!1===o.apply(this.element[0],[e].concat(i))||e.isDefaultPrevented())}},x.each({show:"fadeIn",hide:"fadeOut"},function(o,a){x.Widget.prototype["_"+o]=function(e,t,i){var s,n=(t="string"==typeof t?{effect:t}:t)?!0!==t&&"number"!=typeof t&&t.effect||a:o;"number"==typeof(t=t||{})?t={duration:t}:!0===t&&(t={}),s=!x.isEmptyObject(t),t.complete=i,t.delay&&e.delay(t.delay),s&&x.effects&&x.effects.effect[n]?e[o](t):n!==o&&e[n]?e[n](t.duration,t.easing,i):e.queue(function(t){x(this)[o](),i&&i.call(e[0]),t()})}});var s,C,k,o,l,h,u,c,z;x.widget;function P(t,e,i){return[parseFloat(t[0])*(c.test(t[0])?e/100:1),parseFloat(t[1])*(c.test(t[1])?i/100:1)]}function T(t,e){return parseInt(x.css(t,e),10)||0}function D(t){return null!=t&&t===t.window}C=Math.max,k=Math.abs,o=/left|center|right/,l=/top|center|bottom/,h=/[\+\-]\d+(\.[\d]+)?%?/,u=/^\w+/,c=/%$/,z=x.fn.position,x.position={scrollbarWidth:function(){if(void 0!==s)return s;var t,e=x("<div style='display:block;position:absolute;width:200px;height:200px;overflow:hidden;'><div style='height:300px;width:auto;'></div></div>"),i=e.children()[0];return x("body").append(e),t=i.offsetWidth,e.css("overflow","scroll"),t===(i=i.offsetWidth)&&(i=e[0].clientWidth),e.remove(),s=t-i},getScrollInfo:function(t){var e=t.isWindow||t.isDocument?"":t.element.css("overflow-x"),i=t.isWindow||t.isDocument?"":t.element.css("overflow-y"),e="scroll"===e||"auto"===e&&t.width<t.element[0].scrollWidth;return{width:"scroll"===i||"auto"===i&&t.height<t.element[0].scrollHeight?x.position.scrollbarWidth():0,height:e?x.position.scrollbarWidth():0}},getWithinInfo:function(t){var e=x(t||window),i=D(e[0]),s=!!e[0]&&9===e[0].nodeType;return{element:e,isWindow:i,isDocument:s,offset:!i&&!s?x(t).offset():{left:0,top:0},scrollLeft:e.scrollLeft(),scrollTop:e.scrollTop(),width:e.outerWidth(),height:e.outerHeight()}}},x.fn.position=function(c){if(!c||!c.of)return z.apply(this,arguments);var p,d,f,m,g,t,_="string"==typeof(c=x.extend({},c)).of?x(document).find(c.of):x(c.of),v=x.position.getWithinInfo(c.within),b=x.position.getScrollInfo(v),y=(c.collision||"flip").split(" "),w={},e=9===(t=(e=_)[0]).nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:D(t)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:t.preventDefault?{width:0,height:0,offset:{top:t.pageY,left:t.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()};return _[0].preventDefault&&(c.at="left top"),d=e.width,f=e.height,g=x.extend({},m=e.offset),x.each(["my","at"],function(){var t,e,i=(c[this]||"").split(" ");(i=1===i.length?o.test(i[0])?i.concat(["center"]):l.test(i[0])?["center"].concat(i):["center","center"]:i)[0]=o.test(i[0])?i[0]:"center",i[1]=l.test(i[1])?i[1]:"center",t=h.exec(i[0]),e=h.exec(i[1]),w[this]=[t?t[0]:0,e?e[0]:0],c[this]=[u.exec(i[0])[0],u.exec(i[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===c.at[0]?g.left+=d:"center"===c.at[0]&&(g.left+=d/2),"bottom"===c.at[1]?g.top+=f:"center"===c.at[1]&&(g.top+=f/2),p=P(w.at,d,f),g.left+=p[0],g.top+=p[1],this.each(function(){var i,t,a=x(this),r=a.outerWidth(),l=a.outerHeight(),e=T(this,"marginLeft"),s=T(this,"marginTop"),n=r+e+T(this,"marginRight")+b.width,o=l+s+T(this,"marginBottom")+b.height,h=x.extend({},g),u=P(w.my,a.outerWidth(),a.outerHeight());"right"===c.my[0]?h.left-=r:"center"===c.my[0]&&(h.left-=r/2),"bottom"===c.my[1]?h.top-=l:"center"===c.my[1]&&(h.top-=l/2),h.left+=u[0],h.top+=u[1],i={marginLeft:e,marginTop:s},x.each(["left","top"],function(t,e){x.ui.position[y[t]]&&x.ui.position[y[t]][e](h,{targetWidth:d,targetHeight:f,elemWidth:r,elemHeight:l,collisionPosition:i,collisionWidth:n,collisionHeight:o,offset:[p[0]+u[0],p[1]+u[1]],my:c.my,at:c.at,within:v,elem:a})}),c.using&&(t=function(t){var e=m.left-h.left,i=e+d-r,s=m.top-h.top,n=s+f-l,o={target:{element:_,left:m.left,top:m.top,width:d,height:f},element:{element:a,left:h.left,top:h.top,width:r,height:l},horizontal:i<0?"left":0<e?"right":"center",vertical:n<0?"top":0<s?"bottom":"middle"};d<r&&k(e+i)<d&&(o.horizontal="center"),f<l&&k(s+n)<f&&(o.vertical="middle"),C(k(e),k(i))>C(k(s),k(n))?o.important="horizontal":o.important="vertical",c.using.call(this,t,o)}),a.offset(x.extend(h,{using:t}))})},x.ui.position={fit:{left:function(t,e){var i=e.within,s=i.isWindow?i.scrollLeft:i.offset.left,n=i.width,o=t.left-e.collisionPosition.marginLeft,a=s-o,r=o+e.collisionWidth-n-s;e.collisionWidth>n?0<a&&r<=0?(i=t.left+a+e.collisionWidth-n-s,t.left+=a-i):t.left=!(0<r&&a<=0)&&r<a?s+n-e.collisionWidth:s:0<a?t.left+=a:0<r?t.left-=r:t.left=C(t.left-o,t.left)},top:function(t,e){var i=e.within,s=i.isWindow?i.scrollTop:i.offset.top,n=e.within.height,o=t.top-e.collisionPosition.marginTop,a=s-o,r=o+e.collisionHeight-n-s;e.collisionHeight>n?0<a&&r<=0?(i=t.top+a+e.collisionHeight-n-s,t.top+=a-i):t.top=!(0<r&&a<=0)&&r<a?s+n-e.collisionHeight:s:0<a?t.top+=a:0<r?t.top-=r:t.top=C(t.top-o,t.top)}},flip:{left:function(t,e){var i=e.within,s=i.offset.left+i.scrollLeft,n=i.width,o=i.isWindow?i.scrollLeft:i.offset.left,a=t.left-e.collisionPosition.marginLeft,r=a-o,l=a+e.collisionWidth-n-o,h="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,i="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,a=-2*e.offset[0];r<0?((s=t.left+h+i+a+e.collisionWidth-n-s)<0||s<k(r))&&(t.left+=h+i+a):0<l&&(0<(o=t.left-e.collisionPosition.marginLeft+h+i+a-o)||k(o)<l)&&(t.left+=h+i+a)},top:function(t,e){var i=e.within,s=i.offset.top+i.scrollTop,n=i.height,o=i.isWindow?i.scrollTop:i.offset.top,a=t.top-e.collisionPosition.marginTop,r=a-o,l=a+e.collisionHeight-n-o,h="top"===e.my[1]?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,i="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,a=-2*e.offset[1];r<0?((s=t.top+h+i+a+e.collisionHeight-n-s)<0||s<k(r))&&(t.top+=h+i+a):0<l&&(0<(o=t.top-e.collisionPosition.marginTop+h+i+a-o)||k(o)<l)&&(t.top+=h+i+a)}},flipfit:{left:function(){x.ui.position.flip.left.apply(this,arguments),x.ui.position.fit.left.apply(this,arguments)},top:function(){x.ui.position.flip.top.apply(this,arguments),x.ui.position.fit.top.apply(this,arguments)}}};var t;x.ui.position,x.extend(x.expr.pseudos,{data:x.expr.createPseudo?x.expr.createPseudo(function(e){return function(t){return!!x.data(t,e)}}):function(t,e,i){return!!x.data(t,i[3])}}),x.fn.extend({disableSelection:(t="onselectstart"in document.createElement("div")?"selectstart":"mousedown",function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}),enableSelection:function(){return this.off(".ui-disableSelection")}});x.ui.focusable=function(t,e){var i,s,n,o,a=t.nodeName.toLowerCase();return"area"===a?(s=(i=t.parentNode).name,!(!t.href||!s||"map"!==i.nodeName.toLowerCase())&&(0<(s=x("img[usemap='#"+s+"']")).length&&s.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(a)?(n=!t.disabled)&&(o=x(t).closest("fieldset")[0])&&(n=!o.disabled):n="a"===a&&t.href||e,n&&x(t).is(":visible")&&function(t){var e=t.css("visibility");for(;"inherit"===e;)t=t.parent(),e=t.css("visibility");return"visible"===e}(x(t)))},x.extend(x.expr.pseudos,{focusable:function(t){return x.ui.focusable(t,null!=x.attr(t,"tabindex"))}});x.ui.focusable,x.fn._form=function(){return"string"==typeof this[0].form?this.closest("form"):x(this[0].form)},x.ui.formResetMixin={_formResetHandler:function(){var e=x(this);setTimeout(function(){var t=e.data("ui-form-reset-instances");x.each(t,function(){this.refresh()})})},_bindFormResetHandler:function(){var t;this.form=this.element._form(),this.form.length&&((t=this.form.data("ui-form-reset-instances")||[]).length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t))},_unbindFormResetHandler:function(){var t;this.form.length&&((t=this.form.data("ui-form-reset-instances")).splice(x.inArray(this,t),1),t.length?this.form.data("ui-form-reset-instances",t):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset"))}},x.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},x.fn.labels=function(){var t,e,i;return this.length?this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(e=this.eq(0).parents("label"),(t=this.attr("id"))&&(i=(i=this.eq(0).parents().last()).add((i.length?i:this).siblings()),t="label[for='"+x.escapeSelector(t)+"']",e=e.add(i.find(t).addBack(t))),this.pushStack(e)):this.pushStack([])},x.fn.scrollParent=function(t){var e=this.css("position"),i="absolute"===e,s=t?/(auto|scroll|hidden)/:/(auto|scroll)/,t=this.parents().filter(function(){var t=x(this);return(!i||"static"!==t.css("position"))&&s.test(t.css("overflow")+t.css("overflow-y")+t.css("overflow-x"))}).eq(0);return"fixed"!==e&&t.length?t:x(this[0].ownerDocument||document)},x.extend(x.expr.pseudos,{tabbable:function(t){var e=x.attr(t,"tabindex"),i=null!=e;return(!i||0<=e)&&x.ui.focusable(t,i)}}),x.fn.extend({uniqueId:(e=0,function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++e)})}),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&x(this).removeAttr("id")})}}),x.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var e,p=!1;x(document).on("mouseup",function(){p=!1});x.widget("ui.mouse",{version:"1.13.2",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(t){if(!0===x.data(t.target,e.widgetName+".preventClickEvent"))return x.removeData(t.target,e.widgetName+".preventClickEvent"),t.stopImmediatePropagation(),!1}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(t){if(!p){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(t),this._mouseDownEvent=t;var e=this,i=1===t.which,s=!("string"!=typeof this.options.cancel||!t.target.nodeName)&&x(t.target).closest(this.options.cancel).length;return i&&!s&&this._mouseCapture(t)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){e.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(t),!this._mouseStarted)?(t.preventDefault(),!0):(!0===x.data(t.target,this.widgetName+".preventClickEvent")&&x.removeData(t.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return e._mouseMove(t)},this._mouseUpDelegate=function(t){return e._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),t.preventDefault(),p=!0)):!0}},_mouseMove:function(t){if(this._mouseMoved){if(x.ui.ie&&(!document.documentMode||document.documentMode<9)&&!t.button)return this._mouseUp(t);if(!t.which)if(t.originalEvent.altKey||t.originalEvent.ctrlKey||t.originalEvent.metaKey||t.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(t)}return(t.which||t.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(t),t.preventDefault()):(this._mouseDistanceMet(t)&&this._mouseDelayMet(t)&&(this._mouseStarted=!1!==this._mouseStart(this._mouseDownEvent,t),this._mouseStarted?this._mouseDrag(t):this._mouseUp(t)),!this._mouseStarted)},_mouseUp:function(t){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,t.target===this._mouseDownEvent.target&&x.data(t.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(t)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,p=!1,t.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),x.ui.plugin={add:function(t,e,i){var s,n=x.ui[t].prototype;for(s in i)n.plugins[s]=n.plugins[s]||[],n.plugins[s].push([e,i[s]])},call:function(t,e,i,s){var n,o=t.plugins[e];if(o&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(n=0;n<o.length;n++)t.options[o[n][0]]&&o[n][1].apply(t.element,i)}},x.ui.safeActiveElement=function(e){var i;try{i=e.activeElement}catch(t){i=e.body}return i=!(i=i||e.body).nodeName?e.body:i},x.ui.safeBlur=function(t){t&&"body"!==t.nodeName.toLowerCase()&&x(t).trigger("blur")};x.widget("ui.draggable",x.ui.mouse,{version:"1.13.2",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){(this.helper||this.element).is(".ui-draggable-dragging")?this.destroyOnClear=!0:(this._removeHandleClassName(),this._mouseDestroy())},_mouseCapture:function(t){var e=this.options;return!(this.helper||e.disabled||0<x(t.target).closest(".ui-resizable-handle").length)&&(this.handle=this._getHandle(t),!!this.handle&&(this._blurActiveElement(t),this._blockFrames(!0===e.iframeFix?"iframe":e.iframeFix),!0))},_blockFrames:function(t){this.iframeBlocks=this.document.find(t).map(function(){var t=x(this);return x("<div>").css("position","absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(t){var e=x.ui.safeActiveElement(this.document[0]);x(t.target).closest(e).length||x.ui.safeBlur(e)},_mouseStart:function(t){var e=this.options;return this.helper=this._createHelper(t),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),x.ui.ddmanager&&(x.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=0<this.helper.parents().filter(function(){return"fixed"===x(this).css("position")}).length,this.positionAbs=this.element.offset(),this._refreshOffsets(t),this.originalPosition=this.position=this._generatePosition(t,!1),this.originalPageX=t.pageX,this.originalPageY=t.pageY,e.cursorAt&&this._adjustOffsetFromHelper(e.cursorAt),this._setContainment(),!1===this._trigger("start",t)?(this._clear(),!1):(this._cacheHelperProportions(),x.ui.ddmanager&&!e.dropBehaviour&&x.ui.ddmanager.prepareOffsets(this,t),this._mouseDrag(t,!0),x.ui.ddmanager&&x.ui.ddmanager.dragStart(this,t),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(t,e){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(t,!0),this.positionAbs=this._convertPositionTo("absolute"),!e){e=this._uiHash();if(!1===this._trigger("drag",t,e))return this._mouseUp(new x.Event("mouseup",t)),!1;this.position=e.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",x.ui.ddmanager&&x.ui.ddmanager.drag(this,t),!1},_mouseStop:function(t){var e=this,i=!1;return x.ui.ddmanager&&!this.options.dropBehaviour&&(i=x.ui.ddmanager.drop(this,t)),this.dropped&&(i=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!i||"valid"===this.options.revert&&i||!0===this.options.revert||"function"==typeof this.options.revert&&this.options.revert.call(this.element,i)?x(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){!1!==e._trigger("stop",t)&&e._clear()}):!1!==this._trigger("stop",t)&&this._clear(),!1},_mouseUp:function(t){return this._unblockFrames(),x.ui.ddmanager&&x.ui.ddmanager.dragStop(this,t),this.handleElement.is(t.target)&&this.element.trigger("focus"),x.ui.mouse.prototype._mouseUp.call(this,t)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new x.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(t){return!this.options.handle||!!x(t.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(t){var e=this.options,i="function"==typeof e.helper,t=i?x(e.helper.apply(this.element[0],[t])):"clone"===e.helper?this.element.clone().removeAttr("id"):this.element;return t.parents("body").length||t.appendTo("parent"===e.appendTo?this.element[0].parentNode:e.appendTo),i&&t[0]===this.element[0]&&this._setPositionRelative(),t[0]===this.element[0]||/(fixed|absolute)/.test(t.css("position"))||t.css("position","absolute"),t},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(t){"string"==typeof t&&(t=t.split(" ")),"left"in(t=Array.isArray(t)?{left:+t[0],top:+t[1]||0}:t)&&(this.offset.click.left=t.left+this.margins.left),"right"in t&&(this.offset.click.left=this.helperProportions.width-t.right+this.margins.left),"top"in t&&(this.offset.click.top=t.top+this.margins.top),"bottom"in t&&(this.offset.click.top=this.helperProportions.height-t.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var t=this.offsetParent.offset(),e=this.document[0];return"absolute"===this.cssPosition&&this.scrollParent[0]!==e&&x.contains(this.scrollParent[0],this.offsetParent[0])&&(t.left+=this.scrollParent.scrollLeft(),t.top+=this.scrollParent.scrollTop()),{top:(t=this._isRootNode(this.offsetParent[0])?{top:0,left:0}:t).top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:t.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0};var t=this.element.position(),e=this._isRootNode(this.scrollParent[0]);return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var t,e,i,s=this.options,n=this.document[0];this.relativeContainer=null,s.containment?"window"!==s.containment?"document"!==s.containment?s.containment.constructor!==Array?("parent"===s.containment&&(s.containment=this.helper[0].parentNode),(i=(e=x(s.containment))[0])&&(t=/(scroll|auto)/.test(e.css("overflow")),this.containment=[(parseInt(e.css("borderLeftWidth"),10)||0)+(parseInt(e.css("paddingLeft"),10)||0),(parseInt(e.css("borderTopWidth"),10)||0)+(parseInt(e.css("paddingTop"),10)||0),(t?Math.max(i.scrollWidth,i.offsetWidth):i.offsetWidth)-(parseInt(e.css("borderRightWidth"),10)||0)-(parseInt(e.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(t?Math.max(i.scrollHeight,i.offsetHeight):i.offsetHeight)-(parseInt(e.css("borderBottomWidth"),10)||0)-(parseInt(e.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=e)):this.containment=s.containment:this.containment=[0,0,x(n).width()-this.helperProportions.width-this.margins.left,(x(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=[x(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,x(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,x(window).scrollLeft()+x(window).width()-this.helperProportions.width-this.margins.left,x(window).scrollTop()+(x(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]:this.containment=null},_convertPositionTo:function(t,e){e=e||this.position;var i="absolute"===t?1:-1,t=this._isRootNode(this.scrollParent[0]);return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:t?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:t?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s=this.options,n=this._isRootNode(this.scrollParent[0]),o=t.pageX,a=t.pageY;return n&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(i=this.relativeContainer?(i=this.relativeContainer.offset(),[this.containment[0]+i.left,this.containment[1]+i.top,this.containment[2]+i.left,this.containment[3]+i.top]):this.containment,t.pageX-this.offset.click.left<i[0]&&(o=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(a=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(o=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(a=i[3]+this.offset.click.top)),s.grid&&(t=s.grid[1]?this.originalPageY+Math.round((a-this.originalPageY)/s.grid[1])*s.grid[1]:this.originalPageY,a=!i||t-this.offset.click.top>=i[1]||t-this.offset.click.top>i[3]?t:t-this.offset.click.top>=i[1]?t-s.grid[1]:t+s.grid[1],t=s.grid[0]?this.originalPageX+Math.round((o-this.originalPageX)/s.grid[0])*s.grid[0]:this.originalPageX,o=!i||t-this.offset.click.left>=i[0]||t-this.offset.click.left>i[2]?t:t-this.offset.click.left>=i[0]?t-s.grid[0]:t+s.grid[0]),"y"===s.axis&&(o=this.originalPageX),"x"===s.axis&&(a=this.originalPageY)),{top:a-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:n?0:this.offset.scroll.top),left:o-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:n?0:this.offset.scroll.left)}},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(t,e,i){return i=i||this._uiHash(),x.ui.plugin.call(this,t,[e,i,this],!0),/^(drag|start|stop)/.test(t)&&(this.positionAbs=this._convertPositionTo("absolute"),i.offset=this.positionAbs),x.Widget.prototype._trigger.call(this,t,e,i)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),x.ui.plugin.add("draggable","connectToSortable",{start:function(e,t,i){var s=x.extend({},t,{item:i.element});i.sortables=[],x(i.options.connectToSortable).each(function(){var t=x(this).sortable("instance");t&&!t.options.disabled&&(i.sortables.push(t),t.refreshPositions(),t._trigger("activate",e,s))})},stop:function(e,t,i){var s=x.extend({},t,{item:i.element});i.cancelHelperRemoval=!1,x.each(i.sortables,function(){var t=this;t.isOver?(t.isOver=0,i.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,s))})},drag:function(i,s,n){x.each(n.sortables,function(){var t=!1,e=this;e.positionAbs=n.positionAbs,e.helperProportions=n.helperProportions,e.offset.click=n.offset.click,e._intersectsWith(e.containerCache)&&(t=!0,x.each(n.sortables,function(){return this.positionAbs=n.positionAbs,this.helperProportions=n.helperProportions,this.offset.click=n.offset.click,t=this!==e&&this._intersectsWith(this.containerCache)&&x.contains(e.element[0],this.element[0])?!1:t})),t?(e.isOver||(e.isOver=1,n._parent=s.helper.parent(),e.currentItem=s.helper.appendTo(e.element).data("ui-sortable-item",!0),e.options._helper=e.options.helper,e.options.helper=function(){return s.helper[0]},i.target=e.currentItem[0],e._mouseCapture(i,!0),e._mouseStart(i,!0,!0),e.offset.click.top=n.offset.click.top,e.offset.click.left=n.offset.click.left,e.offset.parent.left-=n.offset.parent.left-e.offset.parent.left,e.offset.parent.top-=n.offset.parent.top-e.offset.parent.top,n._trigger("toSortable",i),n.dropped=e.element,x.each(n.sortables,function(){this.refreshPositions()}),n.currentItem=n.element,e.fromOutside=n),e.currentItem&&(e._mouseDrag(i),s.position=e.position)):e.isOver&&(e.isOver=0,e.cancelHelperRemoval=!0,e.options._revert=e.options.revert,e.options.revert=!1,e._trigger("out",i,e._uiHash(e)),e._mouseStop(i,!0),e.options.revert=e.options._revert,e.options.helper=e.options._helper,e.placeholder&&e.placeholder.remove(),s.helper.appendTo(n._parent),n._refreshOffsets(i),s.position=n._generatePosition(i,!0),n._trigger("fromSortable",i),n.dropped=!1,x.each(n.sortables,function(){this.refreshPositions()}))})}}),x.ui.plugin.add("draggable","cursor",{start:function(t,e,i){var s=x("body"),i=i.options;s.css("cursor")&&(i._cursor=s.css("cursor")),s.css("cursor",i.cursor)},stop:function(t,e,i){i=i.options;i._cursor&&x("body").css("cursor",i._cursor)}}),x.ui.plugin.add("draggable","opacity",{start:function(t,e,i){e=x(e.helper),i=i.options;e.css("opacity")&&(i._opacity=e.css("opacity")),e.css("opacity",i.opacity)},stop:function(t,e,i){i=i.options;i._opacity&&x(e.helper).css("opacity",i._opacity)}}),x.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(t,e,i){var s=i.options,n=!1,o=i.scrollParentNotHidden[0],a=i.document[0];o!==a&&"HTML"!==o.tagName?(s.axis&&"x"===s.axis||(i.overflowOffset.top+o.offsetHeight-t.pageY<s.scrollSensitivity?o.scrollTop=n=o.scrollTop+s.scrollSpeed:t.pageY-i.overflowOffset.top<s.scrollSensitivity&&(o.scrollTop=n=o.scrollTop-s.scrollSpeed)),s.axis&&"y"===s.axis||(i.overflowOffset.left+o.offsetWidth-t.pageX<s.scrollSensitivity?o.scrollLeft=n=o.scrollLeft+s.scrollSpeed:t.pageX-i.overflowOffset.left<s.scrollSensitivity&&(o.scrollLeft=n=o.scrollLeft-s.scrollSpeed))):(s.axis&&"x"===s.axis||(t.pageY-x(a).scrollTop()<s.scrollSensitivity?n=x(a).scrollTop(x(a).scrollTop()-s.scrollSpeed):x(window).height()-(t.pageY-x(a).scrollTop())<s.scrollSensitivity&&(n=x(a).scrollTop(x(a).scrollTop()+s.scrollSpeed))),s.axis&&"y"===s.axis||(t.pageX-x(a).scrollLeft()<s.scrollSensitivity?n=x(a).scrollLeft(x(a).scrollLeft()-s.scrollSpeed):x(window).width()-(t.pageX-x(a).scrollLeft())<s.scrollSensitivity&&(n=x(a).scrollLeft(x(a).scrollLeft()+s.scrollSpeed)))),!1!==n&&x.ui.ddmanager&&!s.dropBehaviour&&x.ui.ddmanager.prepareOffsets(i,t)}}),x.ui.plugin.add("draggable","snap",{start:function(t,e,i){var s=i.options;i.snapElements=[],x(s.snap.constructor!==String?s.snap.items||":data(ui-draggable)":s.snap).each(function(){var t=x(this),e=t.offset();this!==i.element[0]&&i.snapElements.push({item:this,width:t.outerWidth(),height:t.outerHeight(),top:e.top,left:e.left})})},drag:function(t,e,i){for(var s,n,o,a,r,l,h,u,c,p=i.options,d=p.snapTolerance,f=e.offset.left,m=f+i.helperProportions.width,g=e.offset.top,_=g+i.helperProportions.height,v=i.snapElements.length-1;0<=v;v--)l=(r=i.snapElements[v].left-i.margins.left)+i.snapElements[v].width,u=(h=i.snapElements[v].top-i.margins.top)+i.snapElements[v].height,m<r-d||l+d<f||_<h-d||u+d<g||!x.contains(i.snapElements[v].item.ownerDocument,i.snapElements[v].item)?(i.snapElements[v].snapping&&i.options.snap.release&&i.options.snap.release.call(i.element,t,x.extend(i._uiHash(),{snapItem:i.snapElements[v].item})),i.snapElements[v].snapping=!1):("inner"!==p.snapMode&&(s=Math.abs(h-_)<=d,n=Math.abs(u-g)<=d,o=Math.abs(r-m)<=d,a=Math.abs(l-f)<=d,s&&(e.position.top=i._convertPositionTo("relative",{top:h-i.helperProportions.height,left:0}).top),n&&(e.position.top=i._convertPositionTo("relative",{top:u,left:0}).top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r-i.helperProportions.width}).left),a&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l}).left)),c=s||n||o||a,"outer"!==p.snapMode&&(s=Math.abs(h-g)<=d,n=Math.abs(u-_)<=d,o=Math.abs(r-f)<=d,a=Math.abs(l-m)<=d,s&&(e.position.top=i._convertPositionTo("relative",{top:h,left:0}).top),n&&(e.position.top=i._convertPositionTo("relative",{top:u-i.helperProportions.height,left:0}).top),o&&(e.position.left=i._convertPositionTo("relative",{top:0,left:r}).left),a&&(e.position.left=i._convertPositionTo("relative",{top:0,left:l-i.helperProportions.width}).left)),!i.snapElements[v].snapping&&(s||n||o||a||c)&&i.options.snap.snap&&i.options.snap.snap.call(i.element,t,x.extend(i._uiHash(),{snapItem:i.snapElements[v].item})),i.snapElements[v].snapping=s||n||o||a||c)}}),x.ui.plugin.add("draggable","stack",{start:function(t,e,i){var s,i=i.options,i=x.makeArray(x(i.stack)).sort(function(t,e){return(parseInt(x(t).css("zIndex"),10)||0)-(parseInt(x(e).css("zIndex"),10)||0)});i.length&&(s=parseInt(x(i[0]).css("zIndex"),10)||0,x(i).each(function(t){x(this).css("zIndex",s+t)}),this.css("zIndex",s+i.length))}}),x.ui.plugin.add("draggable","zIndex",{start:function(t,e,i){e=x(e.helper),i=i.options;e.css("zIndex")&&(i._zIndex=e.css("zIndex")),e.css("zIndex",i.zIndex)},stop:function(t,e,i){i=i.options;i._zIndex&&x(e.helper).css("zIndex",i._zIndex)}});x.ui.draggable;function d(t,e,i){return e<=t&&t<e+i}x.widget("ui.droppable",{version:"1.13.2",widgetEventPrefix:"drop",options:{accept:"*",addClasses:!0,greedy:!1,scope:"default",tolerance:"intersect",activate:null,deactivate:null,drop:null,out:null,over:null},_create:function(){var t,e=this.options,i=e.accept;this.isover=!1,this.isout=!0,this.accept="function"==typeof i?i:function(t){return t.is(i)},this.proportions=function(){if(!arguments.length)return t=t||{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};t=arguments[0]},this._addToManager(e.scope),e.addClasses&&this._addClass("ui-droppable")},_addToManager:function(t){x.ui.ddmanager.droppables[t]=x.ui.ddmanager.droppables[t]||[],x.ui.ddmanager.droppables[t].push(this)},_splice:function(t){for(var e=0;e<t.length;e++)t[e]===this&&t.splice(e,1)},_destroy:function(){var t=x.ui.ddmanager.droppables[this.options.scope];this._splice(t)},_setOption:function(t,e){var i;"accept"===t?this.accept="function"==typeof e?e:function(t){return t.is(e)}:"scope"===t&&(i=x.ui.ddmanager.droppables[this.options.scope],this._splice(i),this._addToManager(e)),this._super(t,e)},_activate:function(t){var e=x.ui.ddmanager.current;this._addActiveClass(),e&&this._trigger("activate",t,this.ui(e))},_deactivate:function(t){var e=x.ui.ddmanager.current;this._removeActiveClass(),e&&this._trigger("deactivate",t,this.ui(e))},_over:function(t){var e=x.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this._addHoverClass(),this._trigger("over",t,this.ui(e)))},_out:function(t){var e=x.ui.ddmanager.current;e&&(e.currentItem||e.element)[0]!==this.element[0]&&this.accept.call(this.element[0],e.currentItem||e.element)&&(this._removeHoverClass(),this._trigger("out",t,this.ui(e)))},_drop:function(e,t){var i=t||x.ui.ddmanager.current,s=!1;return!(!i||(i.currentItem||i.element)[0]===this.element[0])&&(this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function(){var t=x(this).droppable("instance");if(t.options.greedy&&!t.options.disabled&&t.options.scope===i.options.scope&&t.accept.call(t.element[0],i.currentItem||i.element)&&x.ui.intersect(i,x.extend(t,{offset:t.element.offset()}),t.options.tolerance,e))return!(s=!0)}),!s&&(!!this.accept.call(this.element[0],i.currentItem||i.element)&&(this._removeActiveClass(),this._removeHoverClass(),this._trigger("drop",e,this.ui(i)),this.element)))},ui:function(t){return{draggable:t.currentItem||t.element,helper:t.helper,position:t.position,offset:t.positionAbs}},_addHoverClass:function(){this._addClass("ui-droppable-hover")},_removeHoverClass:function(){this._removeClass("ui-droppable-hover")},_addActiveClass:function(){this._addClass("ui-droppable-active")},_removeActiveClass:function(){this._removeClass("ui-droppable-active")}}),x.ui.intersect=function(t,e,i,s){if(!e.offset)return!1;var n=(t.positionAbs||t.position.absolute).left+t.margins.left,o=(t.positionAbs||t.position.absolute).top+t.margins.top,a=n+t.helperProportions.width,r=o+t.helperProportions.height,l=e.offset.left,h=e.offset.top,u=l+e.proportions().width,c=h+e.proportions().height;switch(i){case"fit":return l<=n&&a<=u&&h<=o&&r<=c;case"intersect":return l<n+t.helperProportions.width/2&&a-t.helperProportions.width/2<u&&h<o+t.helperProportions.height/2&&r-t.helperProportions.height/2<c;case"pointer":return d(s.pageY,h,e.proportions().height)&&d(s.pageX,l,e.proportions().width);case"touch":return(h<=o&&o<=c||h<=r&&r<=c||o<h&&c<r)&&(l<=n&&n<=u||l<=a&&a<=u||n<l&&u<a);default:return!1}},!(x.ui.ddmanager={current:null,droppables:{default:[]},prepareOffsets:function(t,e){var i,s,n=x.ui.ddmanager.droppables[t.options.scope]||[],o=e?e.type:null,a=(t.currentItem||t.element).find(":data(ui-droppable)").addBack();t:for(i=0;i<n.length;i++)if(!(n[i].options.disabled||t&&!n[i].accept.call(n[i].element[0],t.currentItem||t.element))){for(s=0;s<a.length;s++)if(a[s]===n[i].element[0]){n[i].proportions().height=0;continue t}n[i].visible="none"!==n[i].element.css("display"),n[i].visible&&("mousedown"===o&&n[i]._activate.call(n[i],e),n[i].offset=n[i].element.offset(),n[i].proportions({width:n[i].element[0].offsetWidth,height:n[i].element[0].offsetHeight}))}},drop:function(t,e){var i=!1;return x.each((x.ui.ddmanager.droppables[t.options.scope]||[]).slice(),function(){this.options&&(!this.options.disabled&&this.visible&&x.ui.intersect(t,this,this.options.tolerance,e)&&(i=this._drop.call(this,e)||i),!this.options.disabled&&this.visible&&this.accept.call(this.element[0],t.currentItem||t.element)&&(this.isout=!0,this.isover=!1,this._deactivate.call(this,e)))}),i},dragStart:function(t,e){t.element.parentsUntil("body").on("scroll.droppable",function(){t.options.refreshPositions||x.ui.ddmanager.prepareOffsets(t,e)})},drag:function(n,o){n.options.refreshPositions&&x.ui.ddmanager.prepareOffsets(n,o),x.each(x.ui.ddmanager.droppables[n.options.scope]||[],function(){var t,e,i,s;this.options.disabled||this.greedyChild||!this.visible||(s=!(i=x.ui.intersect(n,this,this.options.tolerance,o))&&this.isover?"isout":i&&!this.isover?"isover":null)&&(this.options.greedy&&(e=this.options.scope,(i=this.element.parents(":data(ui-droppable)").filter(function(){return x(this).droppable("instance").options.scope===e})).length&&((t=x(i[0]).droppable("instance")).greedyChild="isover"===s)),t&&"isover"===s&&(t.isover=!1,t.isout=!0,t._out.call(t,o)),this[s]=!0,this["isout"===s?"isover":"isout"]=!1,this["isover"===s?"_over":"_out"].call(this,o),t&&"isout"===s&&(t.isout=!1,t.isover=!0,t._over.call(t,o)))})},dragStop:function(t,e){t.element.parentsUntil("body").off("scroll.droppable"),t.options.refreshPositions||x.ui.ddmanager.prepareOffsets(t,e)}})!==x.uiBackCompat&&x.widget("ui.droppable",x.ui.droppable,{options:{hoverClass:!1,activeClass:!1},_addActiveClass:function(){this._super(),this.options.activeClass&&this.element.addClass(this.options.activeClass)},_removeActiveClass:function(){this._super(),this.options.activeClass&&this.element.removeClass(this.options.activeClass)},_addHoverClass:function(){this._super(),this.options.hoverClass&&this.element.addClass(this.options.hoverClass)},_removeHoverClass:function(){this._super(),this.options.hoverClass&&this.element.removeClass(this.options.hoverClass)}});x.ui.droppable;x.widget("ui.resizable",x.ui.mouse,{version:"1.13.2",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(t,e){if("hidden"===x(t).css("overflow"))return!1;var i=e&&"left"===e?"scrollLeft":"scrollTop",e=!1;if(0<t[i])return!0;try{t[i]=1,e=0<t[i],t[i]=0}catch(t){}return e},_create:function(){var t,e=this.options,i=this;this._addClass("ui-resizable"),x.extend(this,{_aspectRatio:!!e.aspectRatio,aspectRatio:e.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:e.helper||e.ghost||e.animate?e.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(x("<div class='ui-wrapper'></div>").css({overflow:"hidden",position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,t={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(t),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(t),this._proportionallyResize()),this._setupHandles(),e.autoHide&&x(this.element).on("mouseenter",function(){e.disabled||(i._removeClass("ui-resizable-autohide"),i._handles.show())}).on("mouseleave",function(){e.disabled||i.resizing||(i._addClass("ui-resizable-autohide"),i._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy(),this._addedHandles.remove();function t(t){x(t).removeData("resizable").removeData("ui-resizable").off(".resizable")}var e;return this.elementIsWrapper&&(t(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),t(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles();break;case"aspectRatio":this._aspectRatio=!!e}},_setupHandles:function(){var t,e,i,s,n,o=this.options,a=this;if(this.handles=o.handles||(x(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=x(),this._addedHandles=x(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),i=this.handles.split(","),this.handles={},e=0;e<i.length;e++)s="ui-resizable-"+(t=String.prototype.trim.call(i[e])),n=x("<div>"),this._addClass(n,"ui-resizable-handle "+s),n.css({zIndex:o.zIndex}),this.handles[t]=".ui-resizable-"+t,this.element.children(this.handles[t]).length||(this.element.append(n),this._addedHandles=this._addedHandles.add(n));this._renderAxis=function(t){var e,i,s;for(e in t=t||this.element,this.handles)this.handles[e].constructor===String?this.handles[e]=this.element.children(this.handles[e]).first().show():(this.handles[e].jquery||this.handles[e].nodeType)&&(this.handles[e]=x(this.handles[e]),this._on(this.handles[e],{mousedown:a._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(i=x(this.handles[e],this.element),s=/sw|ne|nw|se|n|s/.test(e)?i.outerHeight():i.outerWidth(),i=["padding",/ne|nw|n/.test(e)?"Top":/se|sw|s/.test(e)?"Bottom":/^e$/.test(e)?"Right":"Left"].join(""),t.css(i,s),this._proportionallyResize()),this._handles=this._handles.add(this.handles[e])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){a.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),a.axis=n&&n[1]?n[1]:"se")}),o.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._addedHandles.remove()},_mouseCapture:function(t){var e,i,s=!1;for(e in this.handles)(i=x(this.handles[e])[0])!==t.target&&!x.contains(i,t.target)||(s=!0);return!this.options.disabled&&s},_mouseStart:function(t){var e,i,s=this.options,n=this.element;return this.resizing=!0,this._renderProxy(),e=this._num(this.helper.css("left")),i=this._num(this.helper.css("top")),s.containment&&(e+=x(s.containment).scrollLeft()||0,i+=x(s.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:e,top:i},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:n.width(),height:n.height()},this.originalSize=this._helper?{width:n.outerWidth(),height:n.outerHeight()}:{width:n.width(),height:n.height()},this.sizeDiff={width:n.outerWidth()-n.width(),height:n.outerHeight()-n.height()},this.originalPosition={left:e,top:i},this.originalMousePosition={left:t.pageX,top:t.pageY},this.aspectRatio="number"==typeof s.aspectRatio?s.aspectRatio:this.originalSize.width/this.originalSize.height||1,s=x(".ui-resizable-"+this.axis).css("cursor"),x("body").css("cursor","auto"===s?this.axis+"-resize":s),this._addClass("ui-resizable-resizing"),this._propagate("start",t),!0},_mouseDrag:function(t){var e=this.originalMousePosition,i=this.axis,s=t.pageX-e.left||0,e=t.pageY-e.top||0,i=this._change[i];return this._updatePrevProperties(),i&&(e=i.apply(this,[t,s,e]),this._updateVirtualBoundaries(t.shiftKey),(this._aspectRatio||t.shiftKey)&&(e=this._updateRatio(e,t)),e=this._respectSize(e,t),this._updateCache(e),this._propagate("resize",t),e=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),x.isEmptyObject(e)||(this._updatePrevProperties(),this._trigger("resize",t,this.ui()),this._applyChanges())),!1},_mouseStop:function(t){this.resizing=!1;var e,i,s,n=this.options,o=this;return this._helper&&(s=(e=(i=this._proportionallyResizeElements).length&&/textarea/i.test(i[0].nodeName))&&this._hasScroll(i[0],"left")?0:o.sizeDiff.height,i=e?0:o.sizeDiff.width,e={width:o.helper.width()-i,height:o.helper.height()-s},i=parseFloat(o.element.css("left"))+(o.position.left-o.originalPosition.left)||null,s=parseFloat(o.element.css("top"))+(o.position.top-o.originalPosition.top)||null,n.animate||this.element.css(x.extend(e,{top:s,left:i})),o.helper.height(o.size.height),o.helper.width(o.size.width),this._helper&&!n.animate&&this._proportionallyResize()),x("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",t),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={};return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s=this.options,n={minWidth:this._isNumber(s.minWidth)?s.minWidth:0,maxWidth:this._isNumber(s.maxWidth)?s.maxWidth:1/0,minHeight:this._isNumber(s.minHeight)?s.minHeight:0,maxHeight:this._isNumber(s.maxHeight)?s.maxHeight:1/0};(this._aspectRatio||t)&&(e=n.minHeight*this.aspectRatio,i=n.minWidth/this.aspectRatio,s=n.maxHeight*this.aspectRatio,t=n.maxWidth/this.aspectRatio,e>n.minWidth&&(n.minWidth=e),i>n.minHeight&&(n.minHeight=i),s<n.maxWidth&&(n.maxWidth=s),t<n.maxHeight&&(n.maxHeight=t)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis;return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,n=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,o=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,a=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,r=this.originalPosition.left+this.originalSize.width,l=this.originalPosition.top+this.originalSize.height,h=/sw|nw|w/.test(i),i=/nw|ne|n/.test(i);return o&&(t.width=e.minWidth),a&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),n&&(t.height=e.maxHeight),o&&h&&(t.left=r-e.minWidth),s&&h&&(t.left=r-e.maxWidth),a&&i&&(t.top=l-e.minHeight),n&&i&&(t.top=l-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],n=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")];e<4;e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(n[e])||0;return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element;e<this._proportionallyResizeElements.length;e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var t=this.element,e=this.options;this.elementOffset=t.offset(),this._helper?(this.helper=this.helper||x("<div></div>").css({overflow:"hidden"}),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++e.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize;return{left:this.originalPosition.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize;return{top:this.originalPosition.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(t,e,i){return x.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},sw:function(t,e,i){return x.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[t,e,i]))},ne:function(t,e,i){return x.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[t,e,i]))},nw:function(t,e,i){return x.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[t,e,i]))}},_propagate:function(t,e){x.ui.plugin.call(this,t,[e,this.ui()]),"resize"!==t&&this._trigger(t,e,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),x.ui.plugin.add("resizable","animate",{stop:function(e){var i=x(this).resizable("instance"),t=i.options,s=i._proportionallyResizeElements,n=s.length&&/textarea/i.test(s[0].nodeName),o=n&&i._hasScroll(s[0],"left")?0:i.sizeDiff.height,a=n?0:i.sizeDiff.width,n={width:i.size.width-a,height:i.size.height-o},a=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,o=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null;i.element.animate(x.extend(n,o&&a?{top:o,left:a}:{}),{duration:t.animateDuration,easing:t.animateEasing,step:function(){var t={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))};s&&s.length&&x(s[0]).css({width:t.width,height:t.height}),i._updateCache(t),i._propagate("resize",e)}})}}),x.ui.plugin.add("resizable","containment",{start:function(){var i,s,n=x(this).resizable("instance"),t=n.options,e=n.element,o=t.containment,a=o instanceof x?o.get(0):/parent/.test(o)?e.parent().get(0):o;a&&(n.containerElement=x(a),/document/.test(o)||o===document?(n.containerOffset={left:0,top:0},n.containerPosition={left:0,top:0},n.parentData={element:x(document),left:0,top:0,width:x(document).width(),height:x(document).height()||document.body.parentNode.scrollHeight}):(i=x(a),s=[],x(["Top","Right","Left","Bottom"]).each(function(t,e){s[t]=n._num(i.css("padding"+e))}),n.containerOffset=i.offset(),n.containerPosition=i.position(),n.containerSize={height:i.innerHeight()-s[3],width:i.innerWidth()-s[1]},t=n.containerOffset,e=n.containerSize.height,o=n.containerSize.width,o=n._hasScroll(a,"left")?a.scrollWidth:o,e=n._hasScroll(a)?a.scrollHeight:e,n.parentData={element:a,left:t.left,top:t.top,width:o,height:e}))},resize:function(t){var e=x(this).resizable("instance"),i=e.options,s=e.containerOffset,n=e.position,o=e._aspectRatio||t.shiftKey,a={top:0,left:0},r=e.containerElement,t=!0;r[0]!==document&&/static/.test(r.css("position"))&&(a=s),n.left<(e._helper?s.left:0)&&(e.size.width=e.size.width+(e._helper?e.position.left-s.left:e.position.left-a.left),o&&(e.size.height=e.size.width/e.aspectRatio,t=!1),e.position.left=i.helper?s.left:0),n.top<(e._helper?s.top:0)&&(e.size.height=e.size.height+(e._helper?e.position.top-s.top:e.position.top),o&&(e.size.width=e.size.height*e.aspectRatio,t=!1),e.position.top=e._helper?s.top:0),i=e.containerElement.get(0)===e.element.parent().get(0),n=/relative|absolute/.test(e.containerElement.css("position")),i&&n?(e.offset.left=e.parentData.left+e.position.left,e.offset.top=e.parentData.top+e.position.top):(e.offset.left=e.element.offset().left,e.offset.top=e.element.offset().top),n=Math.abs(e.sizeDiff.width+(e._helper?e.offset.left-a.left:e.offset.left-s.left)),s=Math.abs(e.sizeDiff.height+(e._helper?e.offset.top-a.top:e.offset.top-s.top)),n+e.size.width>=e.parentData.width&&(e.size.width=e.parentData.width-n,o&&(e.size.height=e.size.width/e.aspectRatio,t=!1)),s+e.size.height>=e.parentData.height&&(e.size.height=e.parentData.height-s,o&&(e.size.width=e.size.height*e.aspectRatio,t=!1)),t||(e.position.left=e.prevPosition.left,e.position.top=e.prevPosition.top,e.size.width=e.prevSize.width,e.size.height=e.prevSize.height)},stop:function(){var t=x(this).resizable("instance"),e=t.options,i=t.containerOffset,s=t.containerPosition,n=t.containerElement,o=x(t.helper),a=o.offset(),r=o.outerWidth()-t.sizeDiff.width,o=o.outerHeight()-t.sizeDiff.height;t._helper&&!e.animate&&/relative/.test(n.css("position"))&&x(this).css({left:a.left-s.left-i.left,width:r,height:o}),t._helper&&!e.animate&&/static/.test(n.css("position"))&&x(this).css({left:a.left-s.left-i.left,width:r,height:o})}}),x.ui.plugin.add("resizable","alsoResize",{start:function(){var t=x(this).resizable("instance").options;x(t.alsoResize).each(function(){var t=x(this);t.data("ui-resizable-alsoresize",{width:parseFloat(t.width()),height:parseFloat(t.height()),left:parseFloat(t.css("left")),top:parseFloat(t.css("top"))})})},resize:function(t,i){var e=x(this).resizable("instance"),s=e.options,n=e.originalSize,o=e.originalPosition,a={height:e.size.height-n.height||0,width:e.size.width-n.width||0,top:e.position.top-o.top||0,left:e.position.left-o.left||0};x(s.alsoResize).each(function(){var t=x(this),s=x(this).data("ui-resizable-alsoresize"),n={},e=t.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"];x.each(e,function(t,e){var i=(s[e]||0)+(a[e]||0);i&&0<=i&&(n[e]=i||null)}),t.css(n)})},stop:function(){x(this).removeData("ui-resizable-alsoresize")}}),x.ui.plugin.add("resizable","ghost",{start:function(){var t=x(this).resizable("instance"),e=t.size;t.ghost=t.originalElement.clone(),t.ghost.css({opacity:.25,display:"block",position:"relative",height:e.height,width:e.width,margin:0,left:0,top:0}),t._addClass(t.ghost,"ui-resizable-ghost"),!1!==x.uiBackCompat&&"string"==typeof t.options.ghost&&t.ghost.addClass(this.options.ghost),t.ghost.appendTo(t.helper)},resize:function(){var t=x(this).resizable("instance");t.ghost&&t.ghost.css({position:"relative",height:t.size.height,width:t.size.width})},stop:function(){var t=x(this).resizable("instance");t.ghost&&t.helper&&t.helper.get(0).removeChild(t.ghost.get(0))}}),x.ui.plugin.add("resizable","grid",{resize:function(){var t,e=x(this).resizable("instance"),i=e.options,s=e.size,n=e.originalSize,o=e.originalPosition,a=e.axis,r="number"==typeof i.grid?[i.grid,i.grid]:i.grid,l=r[0]||1,h=r[1]||1,u=Math.round((s.width-n.width)/l)*l,c=Math.round((s.height-n.height)/h)*h,p=n.width+u,d=n.height+c,f=i.maxWidth&&i.maxWidth<p,m=i.maxHeight&&i.maxHeight<d,g=i.minWidth&&i.minWidth>p,s=i.minHeight&&i.minHeight>d;i.grid=r,g&&(p+=l),s&&(d+=h),f&&(p-=l),m&&(d-=h),/^(se|s|e)$/.test(a)?(e.size.width=p,e.size.height=d):/^(ne)$/.test(a)?(e.size.width=p,e.size.height=d,e.position.top=o.top-c):/^(sw)$/.test(a)?(e.size.width=p,e.size.height=d,e.position.left=o.left-u):((d-h<=0||p-l<=0)&&(t=e._getPaddingPlusBorderDimensions(this)),0<d-h?(e.size.height=d,e.position.top=o.top-c):(d=h-t.height,e.size.height=d,e.position.top=o.top+n.height-d),0<p-l?(e.size.width=p,e.position.left=o.left-u):(p=l-t.width,e.size.width=p,e.position.left=o.left+n.width-p))}});x.ui.resizable,x.widget("ui.menu",{version:"1.13.2",defaultElement:"<ul>",delay:300,options:{icons:{submenu:"ui-icon-caret-1-e"},items:"> *",menus:"ul",position:{my:"left top",at:"right top"},role:"menu",blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.lastMousePosition={x:null,y:null},this.element.uniqueId().attr({role:this.options.role,tabIndex:0}),this._addClass("ui-menu","ui-widget ui-widget-content"),this._on({"mousedown .ui-menu-item":function(t){t.preventDefault(),this._activateItem(t)},"click .ui-menu-item":function(t){var e=x(t.target),i=x(x.ui.safeActiveElement(this.document[0]));!this.mouseHandled&&e.not(".ui-state-disabled").length&&(this.select(t),t.isPropagationStopped()||(this.mouseHandled=!0),e.has(".ui-menu").length?this.expand(t):!this.element.is(":focus")&&i.closest(".ui-menu").length&&(this.element.trigger("focus",[!0]),this.active&&1===this.active.parents(".ui-menu").length&&clearTimeout(this.timer)))},"mouseenter .ui-menu-item":"_activateItem","mousemove .ui-menu-item":"_activateItem",mouseleave:"collapseAll","mouseleave .ui-menu":"collapseAll",focus:function(t,e){var i=this.active||this._menuItems().first();e||this.focus(t,i)},blur:function(t){this._delay(function(){x.contains(this.element[0],x.ui.safeActiveElement(this.document[0]))||this.collapseAll(t)})},keydown:"_keydown"}),this.refresh(),this._on(this.document,{click:function(t){this._closeOnDocumentClick(t)&&this.collapseAll(t,!0),this.mouseHandled=!1}})},_activateItem:function(t){var e,i;this.previousFilter||t.clientX===this.lastMousePosition.x&&t.clientY===this.lastMousePosition.y||(this.lastMousePosition={x:t.clientX,y:t.clientY},e=x(t.target).closest(".ui-menu-item"),i=x(t.currentTarget),e[0]===i[0]&&(i.is(".ui-state-active")||(this._removeClass(i.siblings().children(".ui-state-active"),null,"ui-state-active"),this.focus(t,i))))},_destroy:function(){var t=this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(),t.children().each(function(){var t=x(this);t.data("ui-menu-submenu-caret")&&t.remove()})},_keydown:function(t){var e,i,s,n=!0;switch(t.keyCode){case x.ui.keyCode.PAGE_UP:this.previousPage(t);break;case x.ui.keyCode.PAGE_DOWN:this.nextPage(t);break;case x.ui.keyCode.HOME:this._move("first","first",t);break;case x.ui.keyCode.END:this._move("last","last",t);break;case x.ui.keyCode.UP:this.previous(t);break;case x.ui.keyCode.DOWN:this.next(t);break;case x.ui.keyCode.LEFT:this.collapse(t);break;case x.ui.keyCode.RIGHT:this.active&&!this.active.is(".ui-state-disabled")&&this.expand(t);break;case x.ui.keyCode.ENTER:case x.ui.keyCode.SPACE:this._activate(t);break;case x.ui.keyCode.ESCAPE:this.collapse(t);break;default:e=this.previousFilter||"",s=n=!1,i=96<=t.keyCode&&t.keyCode<=105?(t.keyCode-96).toString():String.fromCharCode(t.keyCode),clearTimeout(this.filterTimer),i===e?s=!0:i=e+i,e=this._filterMenuItems(i),(e=s&&-1!==e.index(this.active.next())?this.active.nextAll(".ui-menu-item"):e).length||(i=String.fromCharCode(t.keyCode),e=this._filterMenuItems(i)),e.length?(this.focus(t,e),this.previousFilter=i,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}n&&t.preventDefault()},_activate:function(t){this.active&&!this.active.is(".ui-state-disabled")&&(this.active.children("[aria-haspopup='true']").length?this.expand(t):this.select(t))},refresh:function(){var t,e,s=this,n=this.options.icons.submenu,i=this.element.find(this.options.menus);this._toggleClass("ui-menu-icons",null,!!this.element.find(".ui-icon").length),e=i.filter(":not(.ui-menu)").hide().attr({role:this.options.role,"aria-hidden":"true","aria-expanded":"false"}).each(function(){var t=x(this),e=t.prev(),i=x("<span>").data("ui-menu-submenu-caret",!0);s._addClass(i,"ui-menu-icon","ui-icon "+n),e.attr("aria-haspopup","true").prepend(i),t.attr("aria-labelledby",e.attr("id"))}),this._addClass(e,"ui-menu","ui-widget ui-widget-content ui-front"),(t=i.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function(){var t=x(this);s._isDivider(t)&&s._addClass(t,"ui-menu-divider","ui-widget-content")}),i=(e=t.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({tabIndex:-1,role:this._itemRole()}),this._addClass(e,"ui-menu-item")._addClass(i,"ui-menu-item-wrapper"),t.filter(".ui-state-disabled").attr("aria-disabled","true"),this.active&&!x.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:"menuitem",listbox:"option"}[this.options.role]},_setOption:function(t,e){var i;"icons"===t&&(i=this.element.find(".ui-menu-icon"),this._removeClass(i,null,this.options.icons.submenu)._addClass(i,null,e.submenu)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",String(t)),this._toggleClass(null,"ui-state-disabled",!!t)},focus:function(t,e){var i;this.blur(t,t&&"focus"===t.type),this._scrollIntoView(e),this.active=e.first(),i=this.active.children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),this.options.role&&this.element.attr("aria-activedescendant",i.attr("id")),i=this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"),this._addClass(i,null,"ui-state-active"),t&&"keydown"===t.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),(i=e.children(".ui-menu")).length&&t&&/^mouse/.test(t.type)&&this._startOpening(i),this.activeMenu=e.parent(),this._trigger("focus",t,{item:e})},_scrollIntoView:function(t){var e,i,s;this._hasScroll()&&(i=parseFloat(x.css(this.activeMenu[0],"borderTopWidth"))||0,s=parseFloat(x.css(this.activeMenu[0],"paddingTop"))||0,e=t.offset().top-this.activeMenu.offset().top-i-s,i=this.activeMenu.scrollTop(),s=this.activeMenu.height(),t=t.outerHeight(),e<0?this.activeMenu.scrollTop(i+e):s<e+t&&this.activeMenu.scrollTop(i+e-s+t))},blur:function(t,e){e||clearTimeout(this.timer),this.active&&(this._removeClass(this.active.children(".ui-menu-item-wrapper"),null,"ui-state-active"),this._trigger("blur",t,{item:this.active}),this.active=null)},_startOpening:function(t){clearTimeout(this.timer),"true"===t.attr("aria-hidden")&&(this.timer=this._delay(function(){this._close(),this._open(t)},this.delay))},_open:function(t){var e=x.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden","true"),t.show().removeAttr("aria-hidden").attr("aria-expanded","true").position(e)},collapseAll:function(e,i){clearTimeout(this.timer),this.timer=this._delay(function(){var t=i?this.element:x(e&&e.target).closest(this.element.find(".ui-menu"));t.length||(t=this.element),this._close(t),this.blur(e),this._removeClass(t.find(".ui-state-active"),null,"ui-state-active"),this.activeMenu=t},i?0:this.delay)},_close:function(t){(t=t||(this.active?this.active.parent():this.element)).find(".ui-menu").hide().attr("aria-hidden","true").attr("aria-expanded","false")},_closeOnDocumentClick:function(t){return!x(t.target).closest(".ui-menu").length},_isDivider:function(t){return!/[^\-\u2014\u2013\s]/.test(t.text())},collapse:function(t){var e=this.active&&this.active.parent().closest(".ui-menu-item",this.element);e&&e.length&&(this._close(),this.focus(t,e))},expand:function(t){var e=this.active&&this._menuItems(this.active.children(".ui-menu")).first();e&&e.length&&(this._open(e.parent()),this._delay(function(){this.focus(t,e)}))},next:function(t){this._move("next","first",t)},previous:function(t){this._move("prev","last",t)},isFirstItem:function(){return this.active&&!this.active.prevAll(".ui-menu-item").length},isLastItem:function(){return this.active&&!this.active.nextAll(".ui-menu-item").length},_menuItems:function(t){return(t||this.element).find(this.options.items).filter(".ui-menu-item")},_move:function(t,e,i){var s;(s=this.active?"first"===t||"last"===t?this.active["first"===t?"prevAll":"nextAll"](".ui-menu-item").last():this.active[t+"All"](".ui-menu-item").first():s)&&s.length&&this.active||(s=this._menuItems(this.activeMenu)[e]()),this.focus(i,s)},nextPage:function(t){var e,i,s;this.active?this.isLastItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===x.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.nextAll(".ui-menu-item").each(function(){return(e=x(this)).offset().top-i-s<0}),this.focus(t,e)):this.focus(t,this._menuItems(this.activeMenu)[this.active?"last":"first"]())):this.next(t)},previousPage:function(t){var e,i,s;this.active?this.isFirstItem()||(this._hasScroll()?(i=this.active.offset().top,s=this.element.innerHeight(),0===x.fn.jquery.indexOf("3.2.")&&(s+=this.element[0].offsetHeight-this.element.outerHeight()),this.active.prevAll(".ui-menu-item").each(function(){return 0<(e=x(this)).offset().top-i+s}),this.focus(t,e)):this.focus(t,this._menuItems(this.activeMenu).first())):this.next(t)},_hasScroll:function(){return this.element.outerHeight()<this.element.prop("scrollHeight")},select:function(t){this.active=this.active||x(t.target).closest(".ui-menu-item");var e={item:this.active};this.active.has(".ui-menu").length||this.collapseAll(t,!0),this._trigger("select",t,e)},_filterMenuItems:function(t){var t=t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),e=new RegExp("^"+t,"i");return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function(){return e.test(String.prototype.trim.call(x(this).children(".ui-menu-item-wrapper").text()))})}});x.widget("ui.autocomplete",{version:"1.13.2",defaultElement:"<input>",options:{appendTo:null,autoFocus:!1,delay:300,minLength:1,position:{my:"left top",at:"left bottom",collision:"none"},source:null,change:null,close:null,focus:null,open:null,response:null,search:null,select:null},requestIndex:0,pending:0,liveRegionTimer:null,_create:function(){var i,s,n,t=this.element[0].nodeName.toLowerCase(),e="textarea"===t,t="input"===t;this.isMultiLine=e||!t&&this._isContentEditable(this.element),this.valueMethod=this.element[e||t?"val":"text"],this.isNewMenu=!0,this._addClass("ui-autocomplete-input"),this.element.attr("autocomplete","off"),this._on(this.element,{keydown:function(t){if(this.element.prop("readOnly"))s=n=i=!0;else{s=n=i=!1;var e=x.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:i=!0,this._move("previousPage",t);break;case e.PAGE_DOWN:i=!0,this._move("nextPage",t);break;case e.UP:i=!0,this._keyEvent("previous",t);break;case e.DOWN:i=!0,this._keyEvent("next",t);break;case e.ENTER:this.menu.active&&(i=!0,t.preventDefault(),this.menu.select(t));break;case e.TAB:this.menu.active&&this.menu.select(t);break;case e.ESCAPE:this.menu.element.is(":visible")&&(this.isMultiLine||this._value(this.term),this.close(t),t.preventDefault());break;default:s=!0,this._searchTimeout(t)}}},keypress:function(t){if(i)return i=!1,void(this.isMultiLine&&!this.menu.element.is(":visible")||t.preventDefault());if(!s){var e=x.ui.keyCode;switch(t.keyCode){case e.PAGE_UP:this._move("previousPage",t);break;case e.PAGE_DOWN:this._move("nextPage",t);break;case e.UP:this._keyEvent("previous",t);break;case e.DOWN:this._keyEvent("next",t)}}},input:function(t){if(n)return n=!1,void t.preventDefault();this._searchTimeout(t)},focus:function(){this.selectedItem=null,this.previous=this._value()},blur:function(t){clearTimeout(this.searching),this.close(t),this._change(t)}}),this._initSource(),this.menu=x("<ul>").appendTo(this._appendTo()).menu({role:null}).hide().attr({unselectable:"on"}).menu("instance"),this._addClass(this.menu.element,"ui-autocomplete","ui-front"),this._on(this.menu.element,{mousedown:function(t){t.preventDefault()},menufocus:function(t,e){var i,s;if(this.isNewMenu&&(this.isNewMenu=!1,t.originalEvent&&/^mouse/.test(t.originalEvent.type)))return this.menu.blur(),void this.document.one("mousemove",function(){x(t.target).trigger(t.originalEvent)});s=e.item.data("ui-autocomplete-item"),!1!==this._trigger("focus",t,{item:s})&&t.originalEvent&&/^key/.test(t.originalEvent.type)&&this._value(s.value),(i=e.item.attr("aria-label")||s.value)&&String.prototype.trim.call(i).length&&(clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html(x("<div>").text(i))},100))},menuselect:function(t,e){var i=e.item.data("ui-autocomplete-item"),s=this.previous;this.element[0]!==x.ui.safeActiveElement(this.document[0])&&(this.element.trigger("focus"),this.previous=s,this._delay(function(){this.previous=s,this.selectedItem=i})),!1!==this._trigger("select",t,{item:i})&&this._value(i.value),this.term=this._value(),this.close(t),this.selectedItem=i}}),this.liveRegion=x("<div>",{role:"status","aria-live":"assertive","aria-relevant":"additions"}).appendTo(this.document[0].body),this._addClass(this.liveRegion,null,"ui-helper-hidden-accessible"),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_destroy:function(){clearTimeout(this.searching),this.element.removeAttr("autocomplete"),this.menu.element.remove(),this.liveRegion.remove()},_setOption:function(t,e){this._super(t,e),"source"===t&&this._initSource(),"appendTo"===t&&this.menu.element.appendTo(this._appendTo()),"disabled"===t&&e&&this.xhr&&this.xhr.abort()},_isEventTargetInWidget:function(t){var e=this.menu.element[0];return t.target===this.element[0]||t.target===e||x.contains(e,t.target)},_closeOnClickOutside:function(t){this._isEventTargetInWidget(t)||this.close()},_appendTo:function(){var t=this.options.appendTo;return t=!(t=!(t=t&&(t.jquery||t.nodeType?x(t):this.document.find(t).eq(0)))||!t[0]?this.element.closest(".ui-front, dialog"):t).length?this.document[0].body:t},_initSource:function(){var i,s,n=this;Array.isArray(this.options.source)?(i=this.options.source,this.source=function(t,e){e(x.ui.autocomplete.filter(i,t.term))}):"string"==typeof this.options.source?(s=this.options.source,this.source=function(t,e){n.xhr&&n.xhr.abort(),n.xhr=x.ajax({url:s,data:t,dataType:"json",success:function(t){e(t)},error:function(){e([])}})}):this.source=this.options.source},_searchTimeout:function(s){clearTimeout(this.searching),this.searching=this._delay(function(){var t=this.term===this._value(),e=this.menu.element.is(":visible"),i=s.altKey||s.ctrlKey||s.metaKey||s.shiftKey;t&&(e||i)||(this.selectedItem=null,this.search(null,s))},this.options.delay)},search:function(t,e){return t=null!=t?t:this._value(),this.term=this._value(),t.length<this.options.minLength?this.close(e):!1!==this._trigger("search",e)?this._search(t):void 0},_search:function(t){this.pending++,this._addClass("ui-autocomplete-loading"),this.cancelSearch=!1,this.source({term:t},this._response())},_response:function(){var e=++this.requestIndex;return function(t){e===this.requestIndex&&this.__response(t),this.pending--,this.pending||this._removeClass("ui-autocomplete-loading")}.bind(this)},__response:function(t){t=t&&this._normalize(t),this._trigger("response",null,{content:t}),!this.options.disabled&&t&&t.length&&!this.cancelSearch?(this._suggest(t),this._trigger("open")):this._close()},close:function(t){this.cancelSearch=!0,this._close(t)},_close:function(t){this._off(this.document,"mousedown"),this.menu.element.is(":visible")&&(this.menu.element.hide(),this.menu.blur(),this.isNewMenu=!0,this._trigger("close",t))},_change:function(t){this.previous!==this._value()&&this._trigger("change",t,{item:this.selectedItem})},_normalize:function(t){return t.length&&t[0].label&&t[0].value?t:x.map(t,function(t){return"string"==typeof t?{label:t,value:t}:x.extend({},t,{label:t.label||t.value,value:t.value||t.label})})},_suggest:function(t){var e=this.menu.element.empty();this._renderMenu(e,t),this.isNewMenu=!0,this.menu.refresh(),e.show(),this._resizeMenu(),e.position(x.extend({of:this.element},this.options.position)),this.options.autoFocus&&this.menu.next(),this._on(this.document,{mousedown:"_closeOnClickOutside"})},_resizeMenu:function(){var t=this.menu.element;t.outerWidth(Math.max(t.width("").outerWidth()+1,this.element.outerWidth()))},_renderMenu:function(i,t){var s=this;x.each(t,function(t,e){s._renderItemData(i,e)})},_renderItemData:function(t,e){return this._renderItem(t,e).data("ui-autocomplete-item",e)},_renderItem:function(t,e){return x("<li>").append(x("<div>").text(e.label)).appendTo(t)},_move:function(t,e){if(this.menu.element.is(":visible"))return this.menu.isFirstItem()&&/^previous/.test(t)||this.menu.isLastItem()&&/^next/.test(t)?(this.isMultiLine||this._value(this.term),void this.menu.blur()):void this.menu[t](e);this.search(null,e)},widget:function(){return this.menu.element},_value:function(){return this.valueMethod.apply(this.element,arguments)},_keyEvent:function(t,e){this.isMultiLine&&!this.menu.element.is(":visible")||(this._move(t,e),e.preventDefault())},_isContentEditable:function(t){if(!t.length)return!1;var e=t.prop("contentEditable");return"inherit"===e?this._isContentEditable(t.parent()):"true"===e}}),x.extend(x.ui.autocomplete,{escapeRegex:function(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")},filter:function(t,e){var i=new RegExp(x.ui.autocomplete.escapeRegex(e),"i");return x.grep(t,function(t){return i.test(t.label||t.value||t)})}}),x.widget("ui.autocomplete",x.ui.autocomplete,{options:{messages:{noResults:"No search results.",results:function(t){return t+(1<t?" results are":" result is")+" available, use up and down arrow keys to navigate."}}},__response:function(t){var e;this._superApply(arguments),this.options.disabled||this.cancelSearch||(e=t&&t.length?this.options.messages.results(t.length):this.options.messages.noResults,clearTimeout(this.liveRegionTimer),this.liveRegionTimer=this._delay(function(){this.liveRegion.html(x("<div>").text(e))},100))}});x.ui.autocomplete;var f=/ui-corner-([a-z]){2,6}/g;x.widget("ui.controlgroup",{version:"1.13.2",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var o=this,a=[];x.each(this.options.items,function(s,t){var e,n={};if(t)return"controlgroupLabel"===s?((e=o.element.find(t)).each(function(){var t=x(this);t.children(".ui-controlgroup-label-contents").length||t.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),o._addClass(e,null,"ui-widget ui-widget-content ui-state-default"),void(a=a.concat(e.get()))):void(x.fn[s]&&(n=o["_"+s+"Options"]?o["_"+s+"Options"]("middle"):{classes:{}},o.element.find(t).each(function(){var t=x(this),e=t[s]("instance"),i=x.widget.extend({},n);"button"===s&&t.parent(".ui-spinner").length||((e=e||t[s]()[s]("instance"))&&(i.classes=o._resolveClassesValues(i.classes,e)),t[s](i),i=t[s]("widget"),x.data(i[0],"ui-controlgroup-data",e||t[s]("instance")),a.push(i[0]))})))}),this.childWidgets=x(x.uniqueSort(a)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var t=x(this).data("ui-controlgroup-data");t&&t[e]&&t[e]()})},_updateCornerClass:function(t,e){e=this._buildSimpleOptions(e,"label").classes.label;this._removeClass(t,null,"ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"),this._addClass(t,null,e)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}};return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){t=this._buildSimpleOptions(t,"ui-spinner");return t.classes["ui-spinner-up"]="",t.classes["ui-spinner-down"]="",t},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction;return{width:e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(i,s){var n={};return x.each(i,function(t){var e=s.options.classes[t]||"",e=String.prototype.trim.call(e.replace(f,""));n[t]=(e+" "+i[t]).replace(/\s+/g," ")}),n},_setOption:function(t,e){"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"!==t?this.refresh():this._callChildMethod(e?"disable":"enable")},refresh:function(){var n,o=this;this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),n=this.childWidgets,(n=this.options.onlyVisible?n.filter(":visible"):n).length&&(x.each(["first","last"],function(t,e){var i,s=n[e]().data("ui-controlgroup-data");s&&o["_"+s.widgetName+"Options"]?((i=o["_"+s.widgetName+"Options"](1===n.length?"only":e)).classes=o._resolveClassesValues(i.classes,s),s.element[s.widgetName](i)):o._updateCornerClass(n[e](),e)}),this._callChildMethod("refresh"))}});x.widget("ui.checkboxradio",[x.ui.formResetMixin,{version:"1.13.2",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var t,e=this._super()||{};return this._readType(),t=this.element.labels(),this.label=x(t[t.length-1]),this.label.length||x.error("No label found for checkboxradio widget"),this.originalLabel="",(t=this.label.contents().not(this.element[0])).length&&(this.originalLabel+=t.clone().wrapAll("<div></div>").parent().html()),this.originalLabel&&(e.label=this.originalLabel),null!=(t=this.element[0].disabled)&&(e.disabled=t),e},_create:function(){var t=this.element[0].checked;this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var t=this.element[0].nodeName.toLowerCase();this.type=this.element[0].type,"input"===t&&/radio|checkbox/.test(this.type)||x.error("Can't create checkboxradio on element.nodeName="+t+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var t=this.element[0].name,e="input[name='"+x.escapeSelector(t)+"']";return t?(this.form.length?x(this.form[0].elements).filter(e):x(e).filter(function(){return 0===x(this)._form().length})).not(this.element):x([])},_toggleClasses:function(){var t=this.element[0].checked;this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",t)._toggleClass(this.icon,null,"ui-icon-blank",!t),"radio"===this.type&&this._getRadioGroup().each(function(){var t=x(this).checkboxradio("instance");t&&t._removeClass(t.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){if("label"!==t||e){if(this._super(t,e),"disabled"===t)return this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e);this.refresh()}},_updateIcon:function(t){var e="ui-icon ui-icon-background ";this.options.icon?(this.icon||(this.icon=x("<span>"),this.iconSpace=x("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(e+=t?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,t?"ui-icon-blank":"ui-icon-check")):e+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",e),t||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){var t=this.label.contents().not(this.element[0]);this.icon&&(t=t.not(this.icon[0])),(t=this.iconSpace?t.not(this.iconSpace[0]):t).remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled;this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]);var m;x.ui.checkboxradio;x.widget("ui.button",{version:"1.13.2",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{};return this.isInput=this.element.is("input"),null!=(t=this.element[0].disabled)&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(t){t.keyCode===x.ui.keyCode.SPACE&&(t.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(t,e){var i="iconPosition"!==t,s=i?this.options.iconPosition:e,t="top"===s||"bottom"===s;this.icon?i&&this._removeClass(this.icon,null,this.options.icon):(this.icon=x("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),i&&this._addClass(this.icon,null,e),this._attachIcon(s),t?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=x("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(s))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=(void 0===t.showLabel?this.options:t).showLabel,i=(void 0===t.icon?this.options:t).icon;e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),(this.element[0].disabled=e)&&this.element.trigger("blur"))},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled");t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),!1!==x.uiBackCompat&&(x.widget("ui.button",x.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){"text"!==t?("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),this._superApply(arguments)):this._super("showLabel",e)}}),x.fn.button=(m=x.fn.button,function(i){var t="string"==typeof i,s=Array.prototype.slice.call(arguments,1),n=this;return t?this.length||"instance"!==i?this.each(function(){var t=x(this).attr("type"),e=x.data(this,"ui-"+("checkbox"!==t&&"radio"!==t?"button":"checkboxradio"));return"instance"===i?(n=e,!1):e?"function"!=typeof e[i]||"_"===i.charAt(0)?x.error("no such method '"+i+"' for button widget instance"):(t=e[i].apply(e,s))!==e&&void 0!==t?(n=t&&t.jquery?n.pushStack(t.get()):t,!1):void 0:x.error("cannot call methods on button prior to initialization; attempted to call method '"+i+"'")}):n=void 0:(s.length&&(i=x.widget.extend.apply(null,[i].concat(s))),this.each(function(){var t=x(this).attr("type"),e="checkbox"!==t&&"radio"!==t?"button":"checkboxradio",t=x.data(this,"ui-"+e);t?(t.option(i||{}),t._init&&t._init()):"button"!=e?x(this).checkboxradio(x.extend({icon:!1},i)):m.call(x(this),i)})),n}),x.fn.buttonset=function(){return x.ui.controlgroup||x.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))});x.ui.button;x.widget("ui.dialog",{version:"1.13.2",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",at:"center",of:window,collision:"fit",using:function(t){var e=x(this).css(t).offset().top;e<0&&x(this).css("top",t.top-e)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&x.fn.draggable&&this._makeDraggable(),this.options.resizable&&x.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var t=this.options.appendTo;return t&&(t.jquery||t.nodeType)?x(t):this.document.find(t||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition;this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),(t=e.parent.children().eq(e.index)).length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:x.noop,enable:x.noop,close:function(t){var e=this;this._isOpen&&!1!==this._trigger("beforeClose",t)&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||x.ui.safeBlur(x.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){e._trigger("close",t)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(t,e){var i=!1,s=this.uiDialog.siblings(".ui-front:visible").map(function(){return+x(this).css("z-index")}).get(),s=Math.max.apply(null,s);return s>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",s+1),i=!0),i&&!e&&this._trigger("focus",t),i},open:function(){var t=this;this._isOpen?this._moveToTop()&&this._focusTabbable():(this._isOpen=!0,this.opener=x(x.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){t._focusTabbable(),t._trigger("focus")}),this._makeFocusTarget(),this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement;(t=!(t=!(t=!(t=!(t=t||this.element.find("[autofocus]")).length?this.element.find(":tabbable"):t).length?this.uiDialogButtonPane.find(":tabbable"):t).length?this.uiDialogTitlebarClose.filter(":tabbable"):t).length?this.uiDialog:t).eq(0).trigger("focus")},_restoreTabbableFocus:function(){var t=x.ui.safeActiveElement(this.document[0]);this.uiDialog[0]===t||x.contains(this.uiDialog[0],t)||this._focusTabbable()},_keepFocus:function(t){t.preventDefault(),this._restoreTabbableFocus(),this._delay(this._restoreTabbableFocus)},_createWrapper:function(){this.uiDialog=x("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(t){if(this.options.closeOnEscape&&!t.isDefaultPrevented()&&t.keyCode&&t.keyCode===x.ui.keyCode.ESCAPE)return t.preventDefault(),void this.close(t);var e,i,s;t.keyCode!==x.ui.keyCode.TAB||t.isDefaultPrevented()||(e=this.uiDialog.find(":tabbable"),i=e.first(),s=e.last(),t.target!==s[0]&&t.target!==this.uiDialog[0]||t.shiftKey?t.target!==i[0]&&t.target!==this.uiDialog[0]||!t.shiftKey||(this._delay(function(){s.trigger("focus")}),t.preventDefault()):(this._delay(function(){i.trigger("focus")}),t.preventDefault()))},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var t;this.uiDialogTitlebar=x("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(t){x(t.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=x("<button type='button'></button>").button({label:x("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),t=x("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(t,"ui-dialog-title"),this._title(t),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":t.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160;")},_createButtonPane:function(){this.uiDialogButtonPane=x("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=x("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var s=this,t=this.options.buttons;this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),x.isEmptyObject(t)||Array.isArray(t)&&!t.length?this._removeClass(this.uiDialog,"ui-dialog-buttons"):(x.each(t,function(t,e){var i;e=x.extend({type:"button"},e="function"==typeof e?{click:e,text:t}:e),i=e.click,t={icon:e.icon,iconPosition:e.iconPosition,showLabel:e.showLabel,icons:e.icons,text:e.text},delete e.click,delete e.icon,delete e.iconPosition,delete e.showLabel,delete e.icons,"boolean"==typeof e.text&&delete e.text,x("<button></button>",e).button(t).appendTo(s.uiButtonSet).on("click",function(){i.apply(s.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){var n=this,o=this.options;function a(t){return{position:t.position,offset:t.offset}}this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(t,e){n._addClass(x(this),"ui-dialog-dragging"),n._blockFrames(),n._trigger("dragStart",t,a(e))},drag:function(t,e){n._trigger("drag",t,a(e))},stop:function(t,e){var i=e.offset.left-n.document.scrollLeft(),s=e.offset.top-n.document.scrollTop();o.position={my:"left top",at:"left"+(0<=i?"+":"")+i+" top"+(0<=s?"+":"")+s,of:n.window},n._removeClass(x(this),"ui-dialog-dragging"),n._unblockFrames(),n._trigger("dragStop",t,a(e))}})},_makeResizable:function(){var n=this,o=this.options,t=o.resizable,e=this.uiDialog.css("position"),t="string"==typeof t?t:"n,e,s,w,se,sw,ne,nw";function a(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:o.maxWidth,maxHeight:o.maxHeight,minWidth:o.minWidth,minHeight:this._minHeight(),handles:t,start:function(t,e){n._addClass(x(this),"ui-dialog-resizing"),n._blockFrames(),n._trigger("resizeStart",t,a(e))},resize:function(t,e){n._trigger("resize",t,a(e))},stop:function(t,e){var i=n.uiDialog.offset(),s=i.left-n.document.scrollLeft(),i=i.top-n.document.scrollTop();o.height=n.uiDialog.height(),o.width=n.uiDialog.width(),o.position={my:"left top",at:"left"+(0<=s?"+":"")+s+" top"+(0<=i?"+":"")+i,of:n.window},n._removeClass(x(this),"ui-dialog-resizing"),n._unblockFrames(),n._trigger("resizeStop",t,a(e))}}).css("position",e)},_trackFocus:function(){this._on(this.widget(),{focusin:function(t){this._makeFocusTarget(),this._focusedElement=x(t.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var t=this._trackingInstances(),e=x.inArray(this,t);-1!==e&&t.splice(e,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances");return t||this.document.data("ui-dialog-instances",t=[]),t},_minHeight:function(){var t=this.options;return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible");t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(t){var i=this,s=!1,n={};x.each(t,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(n[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",n)},_setOption:function(t,e){var i,s=this.uiDialog;"disabled"!==t&&(this._super(t,e),"appendTo"===t&&this.uiDialog.appendTo(this._appendTo()),"buttons"===t&&this._createButtons(),"closeText"===t&&this.uiDialogTitlebarClose.button({label:x("<a>").text(""+this.options.closeText).html()}),"draggable"===t&&((i=s.is(":data(ui-draggable)"))&&!e&&s.draggable("destroy"),!i&&e&&this._makeDraggable()),"position"===t&&this._position(),"resizable"===t&&((i=s.is(":data(ui-resizable)"))&&!e&&s.resizable("destroy"),i&&"string"==typeof e&&s.resizable("option","handles",e),i||!1===e||this._makeResizable()),"title"===t&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var t=x(this);return x("<div>").css({position:"absolute",width:t.outerWidth(),height:t.outerHeight()}).appendTo(t.parent()).offset(t.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(t){return!!x(t.target).closest(".ui-dialog").length||!!x(t.target).closest(".ui-datepicker").length},_createOverlay:function(){var i,s;this.options.modal&&(i=x.fn.jquery.substring(0,4),s=!0,this._delay(function(){s=!1}),this.document.data("ui-dialog-overlays")||this.document.on("focusin.ui-dialog",function(t){var e;s||((e=this._trackingInstances()[0])._allowInteraction(t)||(t.preventDefault(),e._focusTabbable(),"3.4."!==i&&"3.5."!==i||e._delay(e._restoreTabbableFocus)))}.bind(this)),this.overlay=x("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1))},_destroyOverlay:function(){var t;this.options.modal&&this.overlay&&((t=this.document.data("ui-dialog-overlays")-1)?this.document.data("ui-dialog-overlays",t):(this.document.off("focusin.ui-dialog"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null)}}),!1!==x.uiBackCompat&&x.widget("ui.dialog",x.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}});x.ui.dialog,x.widget("ui.progressbar",{version:"1.13.2",options:{classes:{"ui-progressbar":"ui-corner-all","ui-progressbar-value":"ui-corner-left","ui-progressbar-complete":"ui-corner-right"},max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue(),this.element.attr({role:"progressbar","aria-valuemin":this.min}),this._addClass("ui-progressbar","ui-widget ui-widget-content"),this.valueDiv=x("<div>").appendTo(this.element),this._addClass(this.valueDiv,"ui-progressbar-value","ui-widget-header"),this._refreshValue()},_destroy:function(){this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"),this.valueDiv.remove()},value:function(t){if(void 0===t)return this.options.value;this.options.value=this._constrainedValue(t),this._refreshValue()},_constrainedValue:function(t){return void 0===t&&(t=this.options.value),this.indeterminate=!1===t,"number"!=typeof t&&(t=0),!this.indeterminate&&Math.min(this.options.max,Math.max(this.min,t))},_setOptions:function(t){var e=t.value;delete t.value,this._super(t),this.options.value=this._constrainedValue(e),this._refreshValue()},_setOption:function(t,e){"max"===t&&(e=Math.max(this.min,e)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this.element.attr("aria-disabled",t),this._toggleClass(null,"ui-state-disabled",!!t)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var t=this.options.value,e=this._percentage();this.valueDiv.toggle(this.indeterminate||t>this.min).width(e.toFixed(0)+"%"),this._toggleClass(this.valueDiv,"ui-progressbar-complete",null,t===this.options.max)._toggleClass("ui-progressbar-indeterminate",null,this.indeterminate),this.indeterminate?(this.element.removeAttr("aria-valuenow"),this.overlayDiv||(this.overlayDiv=x("<div>").appendTo(this.valueDiv),this._addClass(this.overlayDiv,"ui-progressbar-overlay"))):(this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":t}),this.overlayDiv&&(this.overlayDiv.remove(),this.overlayDiv=null)),this.oldValue!==t&&(this.oldValue=t,this._trigger("change")),t===this.options.max&&this._trigger("complete")}}),x.widget("ui.slider",x.ui.mouse,{version:"1.13.2",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var t,e=this.options,i=this.element.find(".ui-slider-handle"),s=[],n=e.values&&e.values.length||1;for(i.length>n&&(i.slice(n).remove(),i=i.slice(0,n)),t=i.length;t<n;t++)s.push("<span tabindex='0'></span>");this.handles=i.add(x(s.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(t){x(this).data("ui-slider-handle-index",t).attr("tabIndex",0)})},_createRange:function(){var t=this.options;t.range?(!0===t.range&&(t.values?t.values.length&&2!==t.values.length?t.values=[t.values[0],t.values[0]]:Array.isArray(t.values)&&(t.values=t.values.slice(0)):t.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=x("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),"min"!==t.range&&"max"!==t.range||this._addClass(this.range,"ui-slider-range-"+t.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(t){var i,s,n,o,e,a,r=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),a={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(a),s=this._valueMax()-this._valueMin()+1,this.handles.each(function(t){var e=Math.abs(i-r.values(t));(e<s||s===e&&(t===r._lastChangedValue||r.values(t)===l.min))&&(s=e,n=x(this),o=t)}),!1!==this._start(t,o)&&(this._mouseSliding=!0,this._handleIndex=o,this._addClass(n,null,"ui-state-active"),n.trigger("focus"),e=n.offset(),a=!x(t.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=a?{left:0,top:0}:{left:t.pageX-e.left-n.width()/2,top:t.pageY-e.top-n.height()/2-(parseInt(n.css("borderTopWidth"),10)||0)-(parseInt(n.css("borderBottomWidth"),10)||0)+(parseInt(n.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(t,o,i),this._animateOff=!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},e=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,e),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,t="horizontal"===this.orientation?(e=this.elementSize.width,t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),t=t/e;return(t=1<t?1:t)<0&&(t=0),"vertical"===this.orientation&&(t=1-t),e=this._valueMax()-this._valueMin(),e=this._valueMin()+t*e,this._trimAlignValue(e)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n=this.value(),o=this.values();this._hasMultipleValues()&&(s=this.values(e?0:1),n=this.values(e),2===this.options.values.length&&!0===this.options.range&&(i=0===e?Math.min(s,i):Math.max(s,i)),o[e]=i),i!==n&&!1!==this._trigger("slide",t,this._uiHash(e,i,o))&&(this._hasMultipleValues()?this.values(e,i):this.value(i))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),void this._change(null,0)):this._value()},values:function(t,e){var i,s,n;if(1<arguments.length)return this.options.values[t]=this._trimAlignValue(e),this._refreshValue(),void this._change(null,t);if(!arguments.length)return this._values();if(!Array.isArray(t))return this._hasMultipleValues()?this._values(t):this.value();for(i=this.options.values,s=t,n=0;n<i.length;n+=1)i[n]=this._trimAlignValue(s[n]),this._change(null,n);this._refreshValue()},_setOption:function(t,e){var i,s=0;switch("range"===t&&!0===this.options.range&&("min"===e?(this.options.value=this._values(0),this.options.values=null):"max"===e&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),Array.isArray(this.options.values)&&(s=this.options.values.length),this._super(t,e),t){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(e),this.handles.css("horizontal"===e?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),i=s-1;0<=i;i--)this._change(null,i);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i;if(arguments.length)return t=this.options.values[t],t=this._trimAlignValue(t);if(this._hasMultipleValues()){for(e=this.options.values.slice(),i=0;i<e.length;i+=1)e[i]=this._trimAlignValue(e[i]);return e}return[]},_trimAlignValue:function(t){if(t<=this._valueMin())return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=0<this.options.step?this.options.step:1,i=(t-this._valueMin())%e,t=t-i;return 2*Math.abs(i)>=e&&(t+=0<i?e:-e),parseFloat(t.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step;(t=Math.round((t-e)/i)*i+e)>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return t=null!==this.options.min?Math.max(t,this._precisionOf(this.options.min)):t},_precisionOf:function(t){var e=t.toString(),t=e.indexOf(".");return-1===t?0:e.length-t-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,t,s,n,o=this.options.range,a=this.options,r=this,l=!this._animateOff&&a.animate,h={};this._hasMultipleValues()?this.handles.each(function(t){i=(r.values(t)-r._valueMin())/(r._valueMax()-r._valueMin())*100,h["horizontal"===r.orientation?"left":"bottom"]=i+"%",x(this).stop(1,1)[l?"animate":"css"](h,a.animate),!0===r.options.range&&("horizontal"===r.orientation?(0===t&&r.range.stop(1,1)[l?"animate":"css"]({left:i+"%"},a.animate),1===t&&r.range[l?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:a.animate})):(0===t&&r.range.stop(1,1)[l?"animate":"css"]({bottom:i+"%"},a.animate),1===t&&r.range[l?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:a.animate}))),e=i}):(t=this.value(),s=this._valueMin(),n=this._valueMax(),i=n!==s?(t-s)/(n-s)*100:0,h["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[l?"animate":"css"](h,a.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:i+"%"},a.animate),"max"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({width:100-i+"%"},a.animate),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:i+"%"},a.animate),"max"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[l?"animate":"css"]({height:100-i+"%"},a.animate))},_handleEvents:{keydown:function(t){var e,i,s,n=x(t.target).data("ui-slider-handle-index");switch(t.keyCode){case x.ui.keyCode.HOME:case x.ui.keyCode.END:case x.ui.keyCode.PAGE_UP:case x.ui.keyCode.PAGE_DOWN:case x.ui.keyCode.UP:case x.ui.keyCode.RIGHT:case x.ui.keyCode.DOWN:case x.ui.keyCode.LEFT:if(t.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(x(t.target),null,"ui-state-active"),!1===this._start(t,n)))return}switch(s=this.options.step,e=i=this._hasMultipleValues()?this.values(n):this.value(),t.keyCode){case x.ui.keyCode.HOME:i=this._valueMin();break;case x.ui.keyCode.END:i=this._valueMax();break;case x.ui.keyCode.PAGE_UP:i=this._trimAlignValue(e+(this._valueMax()-this._valueMin())/this.numPages);break;case x.ui.keyCode.PAGE_DOWN:i=this._trimAlignValue(e-(this._valueMax()-this._valueMin())/this.numPages);break;case x.ui.keyCode.UP:case x.ui.keyCode.RIGHT:if(e===this._valueMax())return;i=this._trimAlignValue(e+s);break;case x.ui.keyCode.DOWN:case x.ui.keyCode.LEFT:if(e===this._valueMin())return;i=this._trimAlignValue(e-s)}this._slide(t,n,i)},keyup:function(t){var e=x(t.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(t,e),this._change(t,e),this._removeClass(x(t.target),null,"ui-state-active"))}}});function g(e){return function(){var t=this.element.val();e.apply(this,arguments),this._refresh(),t!==this.element.val()&&this._trigger("change")}}x.widget("ui.spinner",{version:"1.13.2",defaultElement:"<input>",widgetEventPrefix:"spin",options:{classes:{"ui-spinner":"ui-corner-all","ui-spinner-down":"ui-corner-br","ui-spinner-up":"ui-corner-tr"},culture:null,icons:{down:"ui-icon-triangle-1-s",up:"ui-icon-triangle-1-n"},incremental:!0,max:null,min:null,numberFormat:null,page:10,step:1,change:null,spin:null,start:null,stop:null},_create:function(){this._setOption("max",this.options.max),this._setOption("min",this.options.min),this._setOption("step",this.options.step),""!==this.value()&&this._value(this.element.val(),!0),this._draw(),this._on(this._events),this._refresh(),this._on(this.window,{beforeunload:function(){this.element.removeAttr("autocomplete")}})},_getCreateOptions:function(){var s=this._super(),n=this.element;return x.each(["min","max","step"],function(t,e){var i=n.attr(e);null!=i&&i.length&&(s[e]=i)}),s},_events:{keydown:function(t){this._start(t)&&this._keydown(t)&&t.preventDefault()},keyup:"_stop",focus:function(){this.previous=this.element.val()},blur:function(t){this.cancelBlur?delete this.cancelBlur:(this._stop(),this._refresh(),this.previous!==this.element.val()&&this._trigger("change",t))},mousewheel:function(t,e){var i=x.ui.safeActiveElement(this.document[0]);if(this.element[0]===i&&e){if(!this.spinning&&!this._start(t))return!1;this._spin((0<e?1:-1)*this.options.step,t),clearTimeout(this.mousewheelTimer),this.mousewheelTimer=this._delay(function(){this.spinning&&this._stop(t)},100),t.preventDefault()}},"mousedown .ui-spinner-button":function(t){var e;function i(){this.element[0]===x.ui.safeActiveElement(this.document[0])||(this.element.trigger("focus"),this.previous=e,this._delay(function(){this.previous=e}))}e=this.element[0]===x.ui.safeActiveElement(this.document[0])?this.previous:this.element.val(),t.preventDefault(),i.call(this),this.cancelBlur=!0,this._delay(function(){delete this.cancelBlur,i.call(this)}),!1!==this._start(t)&&this._repeat(null,x(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseup .ui-spinner-button":"_stop","mouseenter .ui-spinner-button":function(t){if(x(t.currentTarget).hasClass("ui-state-active"))return!1!==this._start(t)&&void this._repeat(null,x(t.currentTarget).hasClass("ui-spinner-up")?1:-1,t)},"mouseleave .ui-spinner-button":"_stop"},_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap("<span>").parent().append("<a></a><a></a>")},_draw:function(){this._enhance(),this._addClass(this.uiSpinner,"ui-spinner","ui-widget ui-widget-content"),this._addClass("ui-spinner-input"),this.element.attr("role","spinbutton"),this.buttons=this.uiSpinner.children("a").attr("tabIndex",-1).attr("aria-hidden",!0).button({classes:{"ui-button":""}}),this._removeClass(this.buttons,"ui-corner-all"),this._addClass(this.buttons.first(),"ui-spinner-button ui-spinner-up"),this._addClass(this.buttons.last(),"ui-spinner-button ui-spinner-down"),this.buttons.first().button({icon:this.options.icons.up,showLabel:!1}),this.buttons.last().button({icon:this.options.icons.down,showLabel:!1}),this.buttons.height()>Math.ceil(.5*this.uiSpinner.height())&&0<this.uiSpinner.height()&&this.uiSpinner.height(this.uiSpinner.height())},_keydown:function(t){var e=this.options,i=x.ui.keyCode;switch(t.keyCode){case i.UP:return this._repeat(null,1,t),!0;case i.DOWN:return this._repeat(null,-1,t),!0;case i.PAGE_UP:return this._repeat(null,e.page,t),!0;case i.PAGE_DOWN:return this._repeat(null,-e.page,t),!0}return!1},_start:function(t){return!(!this.spinning&&!1===this._trigger("start",t))&&(this.counter||(this.counter=1),this.spinning=!0)},_repeat:function(t,e,i){t=t||500,clearTimeout(this.timer),this.timer=this._delay(function(){this._repeat(40,e,i)},t),this._spin(e*this.options.step,i)},_spin:function(t,e){var i=this.value()||0;this.counter||(this.counter=1),i=this._adjustValue(i+t*this._increment(this.counter)),this.spinning&&!1===this._trigger("spin",e,{value:i})||(this._value(i),this.counter++)},_increment:function(t){var e=this.options.incremental;return e?"function"==typeof e?e(t):Math.floor(t*t*t/5e4-t*t/500+17*t/200+1):1},_precision:function(){var t=this._precisionOf(this.options.step);return t=null!==this.options.min?Math.max(t,this._precisionOf(this.options.min)):t},_precisionOf:function(t){var e=t.toString(),t=e.indexOf(".");return-1===t?0:e.length-t-1},_adjustValue:function(t){var e=this.options,i=null!==e.min?e.min:0,s=t-i;return t=i+Math.round(s/e.step)*e.step,t=parseFloat(t.toFixed(this._precision())),null!==e.max&&t>e.max?e.max:null!==e.min&&t<e.min?e.min:t},_stop:function(t){this.spinning&&(clearTimeout(this.timer),clearTimeout(this.mousewheelTimer),this.counter=0,this.spinning=!1,this._trigger("stop",t))},_setOption:function(t,e){var i;if("culture"===t||"numberFormat"===t)return i=this._parse(this.element.val()),this.options[t]=e,void this.element.val(this._format(i));"max"!==t&&"min"!==t&&"step"!==t||"string"==typeof e&&(e=this._parse(e)),"icons"===t&&(i=this.buttons.first().find(".ui-icon"),this._removeClass(i,null,this.options.icons.up),this._addClass(i,null,e.up),i=this.buttons.last().find(".ui-icon"),this._removeClass(i,null,this.options.icons.down),this._addClass(i,null,e.down)),this._super(t,e)},_setOptionDisabled:function(t){this._super(t),this._toggleClass(this.uiSpinner,null,"ui-state-disabled",!!t),this.element.prop("disabled",!!t),this.buttons.button(t?"disable":"enable")},_setOptions:g(function(t){this._super(t)}),_parse:function(t){return""===(t="string"==typeof t&&""!==t?window.Globalize&&this.options.numberFormat?Globalize.parseFloat(t,10,this.options.culture):+t:t)||isNaN(t)?null:t},_format:function(t){return""===t?"":window.Globalize&&this.options.numberFormat?Globalize.format(t,this.options.numberFormat,this.options.culture):t},_refresh:function(){this.element.attr({"aria-valuemin":this.options.min,"aria-valuemax":this.options.max,"aria-valuenow":this._parse(this.element.val())})},isValid:function(){var t=this.value();return null!==t&&t===this._adjustValue(t)},_value:function(t,e){var i;""!==t&&null!==(i=this._parse(t))&&(e||(i=this._adjustValue(i)),t=this._format(i)),this.element.val(t),this._refresh()},_destroy:function(){this.element.prop("disabled",!1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"),this.uiSpinner.replaceWith(this.element)},stepUp:g(function(t){this._stepUp(t)}),_stepUp:function(t){this._start()&&(this._spin((t||1)*this.options.step),this._stop())},stepDown:g(function(t){this._stepDown(t)}),_stepDown:function(t){this._start()&&(this._spin((t||1)*-this.options.step),this._stop())},pageUp:g(function(t){this._stepUp((t||1)*this.options.page)}),pageDown:g(function(t){this._stepDown((t||1)*this.options.page)}),value:function(t){if(!arguments.length)return this._parse(this.element.val());g(this._value).call(this,t)},widget:function(){return this.uiSpinner}}),!1!==x.uiBackCompat&&x.widget("ui.spinner",x.ui.spinner,{_enhance:function(){this.uiSpinner=this.element.attr("autocomplete","off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())},_uiSpinnerHtml:function(){return"<span>"},_buttonHtml:function(){return"<a></a><a></a>"}});x.ui.spinner;var _=x,v={},b=v.toString,y=/^([\-+])=\s*(\d+\.?\d*)/,w=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[t[1],t[2],t[3],t[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(t){return[2.55*t[1],2.55*t[2],2.55*t[3],t[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})?/,parse:function(t){return[parseInt(t[1],16),parseInt(t[2],16),parseInt(t[3],16),t[4]?(parseInt(t[4],16)/255).toFixed(2):1]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])([a-f0-9])?/,parse:function(t){return[parseInt(t[1]+t[1],16),parseInt(t[2]+t[2],16),parseInt(t[3]+t[3],16),t[4]?(parseInt(t[4]+t[4],16)/255).toFixed(2):1]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(t){return[t[1],t[2]/100,t[3]/100,t[4]]}}],S=_.Color=function(t,e,i,s){return new _.Color.fn.parse(t,e,i,s)},H={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},E={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},O=S.support={},M=_("<p>")[0],I=_.each;function W(t){return null==t?t+"":"object"==typeof t?v[b.call(t)]||"object":typeof t}function A(t,e,i){var s=E[e.type]||{};return null==t?i||!e.def?null:e.def:(t=s.floor?~~t:parseFloat(t),isNaN(t)?e.def:s.mod?(t+s.mod)%s.mod:Math.min(s.max,Math.max(0,t)))}function N(s){var n=S(),o=n._rgba=[];return s=s.toLowerCase(),I(w,function(t,e){var i=e.re.exec(s),i=i&&e.parse(i),e=e.space||"rgba";if(i)return i=n[e](i),n[H[e].cache]=i[H[e].cache],o=n._rgba=i._rgba,!1}),o.length?("0,0,0,0"===o.join()&&_.extend(o,$.transparent),n):$[s]}function R(t,e,i){return 6*(i=(i+1)%1)<1?t+(e-t)*i*6:2*i<1?e:3*i<2?t+(e-t)*(2/3-i)*6:t}M.style.cssText="background-color:rgba(1,1,1,.5)",O.rgba=-1<M.style.backgroundColor.indexOf("rgba"),I(H,function(t,e){e.cache="_"+t,e.props.alpha={idx:3,type:"percent",def:1}}),_.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,e){v["[object "+e+"]"]=e.toLowerCase()}),(S.fn=_.extend(S.prototype,{parse:function(n,t,e,i){if(void 0===n)return this._rgba=[null,null,null,null],this;(n.jquery||n.nodeType)&&(n=_(n).css(t),t=void 0);var o=this,s=W(n),a=this._rgba=[];return void 0!==t&&(n=[n,t,e,i],s="array"),"string"===s?this.parse(N(n)||$._default):"array"===s?(I(H.rgba.props,function(t,e){a[e.idx]=A(n[e.idx],e)}),this):"object"===s?(I(H,n instanceof S?function(t,e){n[e.cache]&&(o[e.cache]=n[e.cache].slice())}:function(t,i){var s=i.cache;I(i.props,function(t,e){if(!o[s]&&i.to){if("alpha"===t||null==n[t])return;o[s]=i.to(o._rgba)}o[s][e.idx]=A(n[t],e,!0)}),o[s]&&_.inArray(null,o[s].slice(0,3))<0&&(null==o[s][3]&&(o[s][3]=1),i.from&&(o._rgba=i.from(o[s])))}),this):void 0},is:function(t){var n=S(t),o=!0,a=this;return I(H,function(t,e){var i,s=n[e.cache];return s&&(i=a[e.cache]||e.to&&e.to(a._rgba)||[],I(e.props,function(t,e){if(null!=s[e.idx])return o=s[e.idx]===i[e.idx]})),o}),o},_space:function(){var i=[],s=this;return I(H,function(t,e){s[e.cache]&&i.push(t)}),i.pop()},transition:function(t,a){var e=(h=S(t))._space(),i=H[e],t=0===this.alpha()?S("transparent"):this,r=t[i.cache]||i.to(t._rgba),l=r.slice(),h=h[i.cache];return I(i.props,function(t,e){var i=e.idx,s=r[i],n=h[i],o=E[e.type]||{};null!==n&&(null===s?l[i]=n:(o.mod&&(n-s>o.mod/2?s+=o.mod:s-n>o.mod/2&&(s-=o.mod)),l[i]=A((n-s)*a+s,e)))}),this[e](l)},blend:function(t){if(1===this._rgba[3])return this;var e=this._rgba.slice(),i=e.pop(),s=S(t)._rgba;return S(_.map(e,function(t,e){return(1-i)*s[e]+i*t}))},toRgbaString:function(){var t="rgba(",e=_.map(this._rgba,function(t,e){return null!=t?t:2<e?1:0});return 1===e[3]&&(e.pop(),t="rgb("),t+e.join()+")"},toHslaString:function(){var t="hsla(",e=_.map(this.hsla(),function(t,e){return null==t&&(t=2<e?1:0),t=e&&e<3?Math.round(100*t)+"%":t});return 1===e[3]&&(e.pop(),t="hsl("),t+e.join()+")"},toHexString:function(t){var e=this._rgba.slice(),i=e.pop();return t&&e.push(~~(255*i)),"#"+_.map(e,function(t){return 1===(t=(t||0).toString(16)).length?"0"+t:t}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}})).parse.prototype=S.fn,H.hsla.to=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/255,i=t[1]/255,s=t[2]/255,n=t[3],o=Math.max(e,i,s),a=Math.min(e,i,s),r=o-a,l=o+a,t=.5*l,i=a===o?0:e===o?60*(i-s)/r+360:i===o?60*(s-e)/r+120:60*(e-i)/r+240,l=0==r?0:t<=.5?r/l:r/(2-l);return[Math.round(i)%360,l,t,null==n?1:n]},H.hsla.from=function(t){if(null==t[0]||null==t[1]||null==t[2])return[null,null,null,t[3]];var e=t[0]/360,i=t[1],s=t[2],t=t[3],i=s<=.5?s*(1+i):s+i-s*i,s=2*s-i;return[Math.round(255*R(s,i,e+1/3)),Math.round(255*R(s,i,e)),Math.round(255*R(s,i,e-1/3)),t]},I(H,function(l,t){var e=t.props,o=t.cache,a=t.to,r=t.from;S.fn[l]=function(t){if(a&&!this[o]&&(this[o]=a(this._rgba)),void 0===t)return this[o].slice();var i=W(t),s="array"===i||"object"===i?t:arguments,n=this[o].slice();return I(e,function(t,e){t=s["object"===i?t:e.idx];null==t&&(t=n[e.idx]),n[e.idx]=A(t,e)}),r?((t=S(r(n)))[o]=n,t):S(n)},I(e,function(a,r){S.fn[a]||(S.fn[a]=function(t){var e,i=W(t),s="alpha"===a?this._hsla?"hsla":"rgba":l,n=this[s](),o=n[r.idx];return"undefined"===i?o:("function"===i&&(i=W(t=t.call(this,o))),null==t&&r.empty?this:("string"===i&&(e=y.exec(t))&&(t=o+parseFloat(e[2])*("+"===e[1]?1:-1)),n[r.idx]=t,this[s](n)))})})}),(S.hook=function(t){t=t.split(" ");I(t,function(t,o){_.cssHooks[o]={set:function(t,e){var i,s,n="";if("transparent"!==e&&("string"!==W(e)||(i=N(e)))){if(e=S(i||e),!O.rgba&&1!==e._rgba[3]){for(s="backgroundColor"===o?t.parentNode:t;(""===n||"transparent"===n)&&s&&s.style;)try{n=_.css(s,"backgroundColor"),s=s.parentNode}catch(t){}e=e.blend(n&&"transparent"!==n?n:"_default")}e=e.toRgbaString()}try{t.style[o]=e}catch(t){}}},_.fx.step[o]=function(t){t.colorInit||(t.start=S(t.elem,o),t.end=S(t.end),t.colorInit=!0),_.cssHooks[o].set(t.elem,t.start.transition(t.end,t.pos))}})})("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),_.cssHooks.borderColor={expand:function(i){var s={};return I(["Top","Right","Bottom","Left"],function(t,e){s["border"+e+"Color"]=i}),s}};var L,F,B,V,j,q,U,X,Y,G,$=_.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"},K="ui-effects-",Q="ui-effects-style",J="ui-effects-animated";function Z(t){var e,i,s=t.ownerDocument.defaultView?t.ownerDocument.defaultView.getComputedStyle(t,null):t.currentStyle,n={};if(s&&s.length&&s[0]&&s[s[0]])for(i=s.length;i--;)"string"==typeof s[e=s[i]]&&(n[e.replace(/-([\da-z])/gi,function(t,e){return e.toUpperCase()})]=s[e]);else for(e in s)"string"==typeof s[e]&&(n[e]=s[e]);return n}function tt(t,e,i,s){return t={effect:t=x.isPlainObject(t)?(e=t).effect:t},"function"==typeof(e=null==e?{}:e)&&(s=e,i=null,e={}),"number"!=typeof e&&!x.fx.speeds[e]||(s=i,i=e,e={}),"function"==typeof i&&(s=i,i=null),e&&x.extend(t,e),i=i||e.duration,t.duration=x.fx.off?0:"number"==typeof i?i:i in x.fx.speeds?x.fx.speeds[i]:x.fx.speeds._default,t.complete=s||e.complete,t}function et(t){return!t||"number"==typeof t||x.fx.speeds[t]||("string"==typeof t&&!x.effects.effect[t]||("function"==typeof t||"object"==typeof t&&!t.effect))}function it(t,e){var i=e.outerWidth(),e=e.outerHeight(),t=/^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t)||["",0,i,e,0];return{top:parseFloat(t[1])||0,right:"auto"===t[2]?i:parseFloat(t[2]),bottom:"auto"===t[3]?e:parseFloat(t[3]),left:parseFloat(t[4])||0}}x.effects={effect:{}},V=["add","remove","toggle"],j={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1},x.each(["borderLeftStyle","borderRightStyle","borderBottomStyle","borderTopStyle"],function(t,e){x.fx.step[e]=function(t){("none"!==t.end&&!t.setAttr||1===t.pos&&!t.setAttr)&&(_.style(t.elem,e,t.end),t.setAttr=!0)}}),x.fn.addBack||(x.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),x.effects.animateClass=function(n,t,e,i){var o=x.speed(t,e,i);return this.queue(function(){var i=x(this),t=i.attr("class")||"",e=(e=o.children?i.find("*").addBack():i).map(function(){return{el:x(this),start:Z(this)}}),s=function(){x.each(V,function(t,e){n[e]&&i[e+"Class"](n[e])})};s(),e=e.map(function(){return this.end=Z(this.el[0]),this.diff=function(t,e){var i,s,n={};for(i in e)s=e[i],t[i]!==s&&(j[i]||!x.fx.step[i]&&isNaN(parseFloat(s))||(n[i]=s));return n}(this.start,this.end),this}),i.attr("class",t),e=e.map(function(){var t=this,e=x.Deferred(),i=x.extend({},o,{queue:!1,complete:function(){e.resolve(t)}});return this.el.animate(this.diff,i),e.promise()}),x.when.apply(x,e.get()).done(function(){s(),x.each(arguments,function(){var e=this.el;x.each(this.diff,function(t){e.css(t,"")})}),o.complete.call(i[0])})})},x.fn.extend({addClass:(B=x.fn.addClass,function(t,e,i,s){return e?x.effects.animateClass.call(this,{add:t},e,i,s):B.apply(this,arguments)}),removeClass:(F=x.fn.removeClass,function(t,e,i,s){return 1<arguments.length?x.effects.animateClass.call(this,{remove:t},e,i,s):F.apply(this,arguments)}),toggleClass:(L=x.fn.toggleClass,function(t,e,i,s,n){return"boolean"==typeof e||void 0===e?i?x.effects.animateClass.call(this,e?{add:t}:{remove:t},i,s,n):L.apply(this,arguments):x.effects.animateClass.call(this,{toggle:t},e,i,s)}),switchClass:function(t,e,i,s,n){return x.effects.animateClass.call(this,{add:e,remove:t},i,s,n)}}),x.expr&&x.expr.pseudos&&x.expr.pseudos.animated&&(x.expr.pseudos.animated=(q=x.expr.pseudos.animated,function(t){return!!x(t).data(J)||q(t)})),!1!==x.uiBackCompat&&x.extend(x.effects,{save:function(t,e){for(var i=0,s=e.length;i<s;i++)null!==e[i]&&t.data(K+e[i],t[0].style[e[i]])},restore:function(t,e){for(var i,s=0,n=e.length;s<n;s++)null!==e[s]&&(i=t.data(K+e[s]),t.css(e[s],i))},setMode:function(t,e){return e="toggle"===e?t.is(":hidden")?"show":"hide":e},createWrapper:function(i){if(i.parent().is(".ui-effects-wrapper"))return i.parent();var s={width:i.outerWidth(!0),height:i.outerHeight(!0),float:i.css("float")},t=x("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0}),e={width:i.width(),height:i.height()},n=document.activeElement;try{n.id}catch(t){n=document.body}return i.wrap(t),i[0]!==n&&!x.contains(i[0],n)||x(n).trigger("focus"),t=i.parent(),"static"===i.css("position")?(t.css({position:"relative"}),i.css({position:"relative"})):(x.extend(s,{position:i.css("position"),zIndex:i.css("z-index")}),x.each(["top","left","bottom","right"],function(t,e){s[e]=i.css(e),isNaN(parseInt(s[e],10))&&(s[e]="auto")}),i.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})),i.css(e),t.css(s).show()},removeWrapper:function(t){var e=document.activeElement;return t.parent().is(".ui-effects-wrapper")&&(t.parent().replaceWith(t),t[0]!==e&&!x.contains(t[0],e)||x(e).trigger("focus")),t}}),x.extend(x.effects,{version:"1.13.2",define:function(t,e,i){return i||(i=e,e="effect"),x.effects.effect[t]=i,x.effects.effect[t].mode=e,i},scaledDimensions:function(t,e,i){if(0===e)return{height:0,width:0,outerHeight:0,outerWidth:0};var s="horizontal"!==i?(e||100)/100:1,e="vertical"!==i?(e||100)/100:1;return{height:t.height()*e,width:t.width()*s,outerHeight:t.outerHeight()*e,outerWidth:t.outerWidth()*s}},clipToBox:function(t){return{width:t.clip.right-t.clip.left,height:t.clip.bottom-t.clip.top,left:t.clip.left,top:t.clip.top}},unshift:function(t,e,i){var s=t.queue();1<e&&s.splice.apply(s,[1,0].concat(s.splice(e,i))),t.dequeue()},saveStyle:function(t){t.data(Q,t[0].style.cssText)},restoreStyle:function(t){t[0].style.cssText=t.data(Q)||"",t.removeData(Q)},mode:function(t,e){t=t.is(":hidden");return"toggle"===e&&(e=t?"show":"hide"),e=(t?"hide"===e:"show"===e)?"none":e},getBaseline:function(t,e){var i,s;switch(t[0]){case"top":i=0;break;case"middle":i=.5;break;case"bottom":i=1;break;default:i=t[0]/e.height}switch(t[1]){case"left":s=0;break;case"center":s=.5;break;case"right":s=1;break;default:s=t[1]/e.width}return{x:s,y:i}},createPlaceholder:function(t){var e,i=t.css("position"),s=t.position();return t.css({marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()),/^(static|relative)/.test(i)&&(i="absolute",e=x("<"+t[0].nodeName+">").insertAfter(t).css({display:/^(inline|ruby)/.test(t.css("display"))?"inline-block":"block",visibility:"hidden",marginTop:t.css("marginTop"),marginBottom:t.css("marginBottom"),marginLeft:t.css("marginLeft"),marginRight:t.css("marginRight"),float:t.css("float")}).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"),t.data(K+"placeholder",e)),t.css({position:i,left:s.left,top:s.top}),e},removePlaceholder:function(t){var e=K+"placeholder",i=t.data(e);i&&(i.remove(),t.removeData(e))},cleanUp:function(t){x.effects.restoreStyle(t),x.effects.removePlaceholder(t)},setTransition:function(s,t,n,o){return o=o||{},x.each(t,function(t,e){var i=s.cssUnit(e);0<i[0]&&(o[e]=i[0]*n+i[1])}),o}}),x.fn.extend({effect:function(){function t(t){var e=x(this),i=x.effects.mode(e,r)||o;e.data(J,!0),l.push(i),o&&("show"===i||i===o&&"hide"===i)&&e.show(),o&&"none"===i||x.effects.saveStyle(e),"function"==typeof t&&t()}var s=tt.apply(this,arguments),n=x.effects.effect[s.effect],o=n.mode,e=s.queue,i=e||"fx",a=s.complete,r=s.mode,l=[];return x.fx.off||!n?r?this[r](s.duration,a):this.each(function(){a&&a.call(this)}):!1===e?this.each(t).each(h):this.queue(i,t).queue(i,h);function h(t){var e=x(this);function i(){"function"==typeof a&&a.call(e[0]),"function"==typeof t&&t()}s.mode=l.shift(),!1===x.uiBackCompat||o?"none"===s.mode?(e[r](),i()):n.call(e[0],s,function(){e.removeData(J),x.effects.cleanUp(e),"hide"===s.mode&&e.hide(),i()}):(e.is(":hidden")?"hide"===r:"show"===r)?(e[r](),i()):n.call(e[0],s,i)}},show:(Y=x.fn.show,function(t){if(et(t))return Y.apply(this,arguments);t=tt.apply(this,arguments);return t.mode="show",this.effect.call(this,t)}),hide:(X=x.fn.hide,function(t){if(et(t))return X.apply(this,arguments);t=tt.apply(this,arguments);return t.mode="hide",this.effect.call(this,t)}),toggle:(U=x.fn.toggle,function(t){if(et(t)||"boolean"==typeof t)return U.apply(this,arguments);t=tt.apply(this,arguments);return t.mode="toggle",this.effect.call(this,t)}),cssUnit:function(t){var i=this.css(t),s=[];return x.each(["em","px","%","pt"],function(t,e){0<i.indexOf(e)&&(s=[parseFloat(i),e])}),s},cssClip:function(t){return t?this.css("clip","rect("+t.top+"px "+t.right+"px "+t.bottom+"px "+t.left+"px)"):it(this.css("clip"),this)},transfer:function(t,e){var i=x(this),s=x(t.to),n="fixed"===s.css("position"),o=x("body"),a=n?o.scrollTop():0,r=n?o.scrollLeft():0,o=s.offset(),o={top:o.top-a,left:o.left-r,height:s.innerHeight(),width:s.innerWidth()},s=i.offset(),l=x("<div class='ui-effects-transfer'></div>");l.appendTo("body").addClass(t.className).css({top:s.top-a,left:s.left-r,height:i.innerHeight(),width:i.innerWidth(),position:n?"fixed":"absolute"}).animate(o,t.duration,t.easing,function(){l.remove(),"function"==typeof e&&e()})}}),x.fx.step.clip=function(t){t.clipInit||(t.start=x(t.elem).cssClip(),"string"==typeof t.end&&(t.end=it(t.end,t.elem)),t.clipInit=!0),x(t.elem).cssClip({top:t.pos*(t.end.top-t.start.top)+t.start.top,right:t.pos*(t.end.right-t.start.right)+t.start.right,bottom:t.pos*(t.end.bottom-t.start.bottom)+t.start.bottom,left:t.pos*(t.end.left-t.start.left)+t.start.left})},G={},x.each(["Quad","Cubic","Quart","Quint","Expo"],function(e,t){G[t]=function(t){return Math.pow(t,e+2)}}),x.extend(G,{Sine:function(t){return 1-Math.cos(t*Math.PI/2)},Circ:function(t){return 1-Math.sqrt(1-t*t)},Elastic:function(t){return 0===t||1===t?t:-Math.pow(2,8*(t-1))*Math.sin((80*(t-1)-7.5)*Math.PI/15)},Back:function(t){return t*t*(3*t-2)},Bounce:function(t){for(var e,i=4;t<((e=Math.pow(2,--i))-1)/11;);return 1/Math.pow(4,3-i)-7.5625*Math.pow((3*e-2)/22-t,2)}}),x.each(G,function(t,e){x.easing["easeIn"+t]=e,x.easing["easeOut"+t]=function(t){return 1-e(1-t)},x.easing["easeInOut"+t]=function(t){return t<.5?e(2*t)/2:1-e(-2*t+2)/2}});x.effects,x.effects.define("slide","show",function(t,e){var i,s,n=x(this),o={up:["bottom","top"],down:["top","bottom"],left:["right","left"],right:["left","right"]},a=t.mode,r=t.direction||"left",l="up"===r||"down"===r?"top":"left",h="up"===r||"left"===r,u=t.distance||n["top"==l?"outerHeight":"outerWidth"](!0),c={};x.effects.createPlaceholder(n),i=n.cssClip(),s=n.position()[l],c[l]=(h?-1:1)*u+s,c.clip=n.cssClip(),c.clip[o[r][1]]=c.clip[o[r][0]],"show"===a&&(n.cssClip(c.clip),n.css(l,c[l]),c.clip=i,c[l]=s),n.animate(c,{queue:!1,duration:t.duration,easing:t.easing,complete:e})})});
//static-content-hash-trigger-NON
