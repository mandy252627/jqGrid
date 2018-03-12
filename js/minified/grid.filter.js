/**
*
* @license Guriddo jqGrid JS - v5.3.1 
* Copyright(c) 2008, Tony Tomov, tony@trirand.com
* 
* License: http://guriddo.net/?page_id=103334
*/
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],a):a(jQuery)}(function(a){"use strict";a.fn.jqFilter=function(b){if("string"==typeof b){var c=a.fn.jqFilter[b];if(!c)throw"jqFilter - No such method: "+b;var d=a.makeArray(arguments).slice(1);return c.apply(this,d)}var e=a.extend(!0,{filter:null,columns:[],sortStrategy:null,onChange:null,afterRedraw:null,checkValues:null,error:!1,errmsg:"",errorcheck:!0,showQuery:!0,sopt:null,ops:[],operands:null,numopts:["eq","ne","lt","le","gt","ge","nu","nn","in","ni"],stropts:["eq","ne","bw","bn","ew","en","cn","nc","nu","nn","in","ni"],strarr:["text","string","blob"],groupOps:[{op:"AND",text:"AND"},{op:"OR",text:"OR"}],groupButton:!0,ruleButtons:!0,uniqueSearchFields:!1,direction:"ltr",addsubgrup:"Add subgroup",addrule:"Add rule",delgroup:"Delete group",delrule:"Delete rule",autoencode:!1},a.jgrid.filter,b||{});return this.each(function(){if(!this.filter){this.p=e,null!==this.p.filter&&void 0!==this.p.filter||(this.p.filter={groupOp:this.p.groupOps[0].op,rules:[],groups:[]}),null!=this.p.sortStrategy&&a.isFunction(this.p.sortStrategy)&&this.p.columns.sort(this.p.sortStrategy);var b,c,d=this.p.columns.length,f=/msie/i.test(navigator.userAgent)&&!window.opera;if(this.p.initFilter=a.extend(!0,{},this.p.filter),d){for(b=0;b<d;b++)c=this.p.columns[b],c.stype?c.inputtype=c.stype:c.inputtype||(c.inputtype="text"),c.sorttype?c.searchtype=c.sorttype:c.searchtype||(c.searchtype="string"),void 0===c.hidden&&(c.hidden=!1),c.label||(c.label=c.name),c.index&&(c.name=c.index),c.hasOwnProperty("searchoptions")||(c.searchoptions={}),c.hasOwnProperty("searchrules")||(c.searchrules={}),void 0===c.search?c.inlist=!0:c.inlist=c.search;var g=function(){return a("#"+a.jgrid.jqID(e.id))[0]||null},h=g(),i=a.jgrid.styleUI[h.p.styleUI||"jQueryUI"].filter,j=a.jgrid.styleUI[h.p.styleUI||"jQueryUI"].common;this.p.showQuery&&a(this).append("<table class='queryresult "+i.table_widget+"' style='display:block;max-width:440px;border:0px none;' dir='"+this.p.direction+"'><tbody><tr><td class='query'></td></tr></tbody></table>");var k=function(b,c){var d=[!0,""],f=g();if(a.isFunction(c.searchrules))d=c.searchrules.call(f,b,c);else if(a.jgrid&&a.jgrid.checkValues)try{d=a.jgrid.checkValues.call(f,b,-1,c.searchrules,c.label)}catch(a){}d&&d.length&&!1===d[0]&&(e.error=!d[0],e.errmsg=d[1])};this.onchange=function(){return this.p.error=!1,this.p.errmsg="",!!a.isFunction(this.p.onChange)&&this.p.onChange.call(this,this.p)},this.reDraw=function(){a("table.group:first",this).remove();var b=this.createTableForGroup(e.filter,null);a(this).append(b),a.isFunction(this.p.afterRedraw)&&this.p.afterRedraw.call(this,this.p)},this.createTableForGroup=function(b,c){var d,f=this,g=a("<table class='group "+i.table_widget+" ui-search-table' style='border:0px none;'><tbody></tbody></table>"),h="left";"rtl"===this.p.direction&&(h="right",g.attr("dir","rtl")),null===c&&g.append("<tr class='error' style='display:none;'><th colspan='5' class='"+j.error+"' align='"+h+"'></th></tr>");var k=a("<tr></tr>");g.append(k);var l=a("<th colspan='5' align='"+h+"'></th>");if(k.append(l),!0===this.p.ruleButtons){var m=a("<select size='1' class='opsel "+i.srSelect+"'></select>");l.append(m);var n,o="";for(d=0;d<e.groupOps.length;d++)n=b.groupOp===f.p.groupOps[d].op?" selected='selected'":"",o+="<option value='"+f.p.groupOps[d].op+"'"+n+">"+f.p.groupOps[d].text+"</option>";m.append(o).on("change",function(){b.groupOp=a(m).val(),f.onchange()})}var p="<span></span>";if(this.p.groupButton&&(p=a("<input type='button' value='+ {}' title='"+f.p.subgroup+"' class='add-group "+j.button+"'/>"),p.on("click",function(){return void 0===b.groups&&(b.groups=[]),b.groups.push({groupOp:e.groupOps[0].op,rules:[],groups:[]}),f.reDraw(),f.onchange(),!1})),l.append(p),!0===this.p.ruleButtons){var q,r=a("<input type='button' value='+' title='"+f.p.addrule+"' class='add-rule ui-add "+j.button+"'/>");r.on("click",function(){for(void 0===b.rules&&(b.rules=[]),d=0;d<f.p.columns.length;d++){var c=void 0===f.p.columns[d].search||f.p.columns[d].search,e=!0===f.p.columns[d].hidden;if(!0===f.p.columns[d].searchoptions.searchhidden&&c||c&&!e){q=f.p.columns[d];break}}if(!q)return!1;var g;return g=q.searchoptions.sopt?q.searchoptions.sopt:f.p.sopt?f.p.sopt:-1!==a.inArray(q.searchtype,f.p.strarr)?f.p.stropts:f.p.numopts,b.rules.push({field:q.name,op:g[0],data:""}),f.reDraw(),!1}),l.append(r)}if(null!==c){var s=a("<input type='button' value='-' title='"+f.p.delgroup+"' class='delete-group "+j.button+"'/>");l.append(s),s.on("click",function(){for(d=0;d<c.groups.length;d++)if(c.groups[d]===b){c.groups.splice(d,1);break}return f.reDraw(),f.onchange(),!1})}if(void 0!==b.groups)for(d=0;d<b.groups.length;d++){var t=a("<tr></tr>");g.append(t);var u=a("<td class='first'></td>");t.append(u);var v=a("<td colspan='4'></td>");v.append(this.createTableForGroup(b.groups[d],b)),t.append(v)}void 0===b.groupOp&&(b.groupOp=f.p.groupOps[0].op);var w,x=f.p.ruleButtons&&f.p.uniqueSearchFields;if(x)for(w=0;w<f.p.columns.length;w++)f.p.columns[w].inlist&&(f.p.columns[w].search=!0);if(void 0!==b.rules)for(d=0;d<b.rules.length;d++)if(g.append(this.createTableRowForRule(b.rules[d],b)),x){var y=b.rules[d].field;for(w=0;w<f.p.columns.length;w++)if(y===f.p.columns[w].name){f.p.columns[w].search=!1;break}}return g},this.createTableRowForRule=function(b,c){var d,h,k,l,m,n=this,o=g(),p=a("<tr></tr>"),q="";p.append("<td class='first'></td>");var r=a("<td class='columns'></td>");p.append(r);var s,t=a("<select size='1' class='"+i.srSelect+"'></select>"),u=[];r.append(t),t.on("change",function(){if(n.p.ruleButtons&&n.p.uniqueSearchFields){var c=parseInt(a(this).data("curr"),10),e=this.selectedIndex;c>=0&&(n.p.columns[c].search=!0,a(this).data("curr",e),n.p.columns[e].search=!1)}for(b.field=a(t).val(),k=a(this).parents("tr:first"),a(".data",k).empty(),d=0;d<n.p.columns.length;d++)if(n.p.columns[d].name===b.field){l=n.p.columns[d];break}if(l){l.searchoptions.id=a.jgrid.randId(),l.searchoptions.name=b.field,l.searchoptions.oper="filter",f&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10));var g=a.jgrid.createEl.call(o,l.inputtype,l.searchoptions,"",!0,n.p.ajaxSelectOptions||{},!0);a(g).addClass("input-elm "+i.srInput),h=l.searchoptions.sopt?l.searchoptions.sopt:n.p.sopt?n.p.sopt:-1!==a.inArray(l.searchtype,n.p.strarr)?n.p.stropts:n.p.numopts;var j="",m=0;for(u=[],a.each(n.p.ops,function(){u.push(this.oper)}),d=0;d<h.length;d++)-1!==(s=a.inArray(h[d],u))&&(0===m&&(b.op=n.p.ops[s].oper),j+="<option value='"+n.p.ops[s].oper+"'>"+n.p.ops[s].text+"</option>",m++);if(a(".selectopts",k).empty().append(j),a(".selectopts",k)[0].selectedIndex=0,a.jgrid.msie()&&a.jgrid.msiever()<9){var p=parseInt(a("select.selectopts",k)[0].offsetWidth,10)+1;a(".selectopts",k).width(p),a(".selectopts",k).css("width","auto")}a(".data",k).append(g),a.jgrid.bindEv.call(o,g,l.searchoptions),a(".input-elm",k).on("change",function(c){var d=c.target;"custom"===l.inputtype&&a.isFunction(l.searchoptions.custom_value)?b.data=l.searchoptions.custom_value.call(o,a(".customelement",this),"get"):b.data=a(d).val(),"select"===l.inputtype&&l.searchoptions.multiple&&(b.data=b.data.join(",")),n.onchange()}),setTimeout(function(){b.data=a(g).val(),n.onchange()},0)}});var v=0;for(d=0;d<n.p.columns.length;d++){var w=void 0===n.p.columns[d].search||n.p.columns[d].search,x=!0===n.p.columns[d].hidden;(!0===n.p.columns[d].searchoptions.searchhidden&&w||w&&!x)&&(m="",b.field===n.p.columns[d].name&&(m=" selected='selected'",v=d),q+="<option value='"+n.p.columns[d].name+"'"+m+">"+n.p.columns[d].label+"</option>")}t.append(q),t.data("curr",v);var y=a("<td class='operators'></td>");p.append(y),l=e.columns[v],l.searchoptions.id=a.jgrid.randId(),f&&"text"===l.inputtype&&(l.searchoptions.size||(l.searchoptions.size=10)),l.searchoptions.name=b.field,l.searchoptions.oper="filter";var z=a.jgrid.createEl.call(o,l.inputtype,l.searchoptions,b.data,!0,n.p.ajaxSelectOptions||{},!0);"nu"!==b.op&&"nn"!==b.op||(a(z).attr("readonly","true"),a(z).attr("disabled","true"));var A=a("<select size='1' class='selectopts "+i.srSelect+"'></select>");for(y.append(A),A.on("change",function(){b.op=a(A).val(),k=a(this).parents("tr:first");var c=a(".input-elm",k)[0];"nu"===b.op||"nn"===b.op?(b.data="","SELECT"!==c.tagName.toUpperCase()&&(c.value=""),c.setAttribute("readonly","true"),c.setAttribute("disabled","true")):("SELECT"===c.tagName.toUpperCase()&&(b.data=c.value),c.removeAttribute("readonly"),c.removeAttribute("disabled")),n.onchange()}),h=l.searchoptions.sopt?l.searchoptions.sopt:n.p.sopt?n.p.sopt:-1!==a.inArray(l.searchtype,n.p.strarr)?n.p.stropts:n.p.numopts,q="",a.each(n.p.ops,function(){u.push(this.oper)}),d=0;d<h.length;d++)-1!==(s=a.inArray(h[d],u))&&(m=b.op===n.p.ops[s].oper?" selected='selected'":"",q+="<option value='"+n.p.ops[s].oper+"'"+m+">"+n.p.ops[s].text+"</option>");A.append(q);var B=a("<td class='data'></td>");p.append(B),B.append(z),a.jgrid.bindEv.call(o,z,l.searchoptions),a(z).addClass("input-elm "+i.srInput).on("change",function(){b.data="custom"===l.inputtype?l.searchoptions.custom_value.call(o,a(".customelement",this),"get"):a(this).val(),n.onchange()});var C=a("<td></td>");if(p.append(C),!0===this.p.ruleButtons){var D=a("<input type='button' value='-' title='"+n.p.delrule+"' class='delete-rule ui-del "+j.button+"'/>");C.append(D),D.on("click",function(){for(d=0;d<c.rules.length;d++)if(c.rules[d]===b){c.rules.splice(d,1);break}return n.reDraw(),n.onchange(),!1})}return p},this.getStringForGroup=function(a){var b,c="(";if(void 0!==a.groups)for(b=0;b<a.groups.length;b++){c.length>1&&(c+=" "+a.groupOp+" ");try{c+=this.getStringForGroup(a.groups[b])}catch(a){alert(a)}}if(void 0!==a.rules)try{for(b=0;b<a.rules.length;b++)c.length>1&&(c+=" "+a.groupOp+" "),c+=this.getStringForRule(a.rules[b])}catch(a){alert(a)}return c+=")","()"===c?"":c},this.getStringForRule=function(b){var c,d,f,g="",h="",i=["int","integer","float","number","currency"];for(c=0;c<this.p.ops.length;c++)if(this.p.ops[c].oper===b.op){g=this.p.operands.hasOwnProperty(b.op)?this.p.operands[b.op]:"",h=this.p.ops[c].oper;break}for(c=0;c<this.p.columns.length;c++)if(this.p.columns[c].name===b.field){d=this.p.columns[c];break}return void 0===d?"":(f=this.p.autoencode?a.jgrid.htmlEncode(b.data):b.data,"bw"!==h&&"bn"!==h||(f+="%"),"ew"!==h&&"en"!==h||(f="%"+f),"cn"!==h&&"nc"!==h||(f="%"+f+"%"),"in"!==h&&"ni"!==h||(f=" ("+f+")"),e.errorcheck&&k(b.data,d),-1!==a.inArray(d.searchtype,i)||"nn"===h||"nu"===h?b.field+" "+g+" "+f:b.field+" "+g+' "'+f+'"')},this.resetFilter=function(){this.p.filter=a.extend(!0,{},this.p.initFilter),this.reDraw(),this.onchange()},this.hideError=function(){a("th."+j.error,this).html(""),a("tr.error",this).hide()},this.showError=function(){a("th."+j.error,this).html(this.p.errmsg),a("tr.error",this).show()},this.toUserFriendlyString=function(){return this.getStringForGroup(e.filter)},this.toString=function(){function a(a){if(c.p.errorcheck){var b,d;for(b=0;b<c.p.columns.length;b++)if(c.p.columns[b].name===a.field){d=c.p.columns[b];break}d&&k(a.data,d)}return a.op+"(item."+a.field+",'"+a.data+"')"}function b(c){var d,e="(";if(void 0!==c.groups)for(d=0;d<c.groups.length;d++)e.length>1&&("OR"===c.groupOp?e+=" || ":e+=" && "),e+=b(c.groups[d]);if(void 0!==c.rules)for(d=0;d<c.rules.length;d++)e.length>1&&("OR"===c.groupOp?e+=" || ":e+=" && "),e+=a(c.rules[d]);return e+=")","()"===e?"":e}var c=this;return b(this.p.filter)},this.reDraw(),this.p.showQuery&&this.onchange(),this.filter=!0}}})},a.extend(a.fn.jqFilter,{toSQLString:function(){var a="";return this.each(function(){a=this.toUserFriendlyString()}),a},filterData:function(){var a;return this.each(function(){a=this.p.filter}),a},getParameter:function(a){var b=null;return void 0!==a&&this.each(function(c,d){d.p.hasOwnProperty(a)&&(b=d.p[a])}),b||this[0].p},resetFilter:function(){return this.each(function(){this.resetFilter()})},addFilter:function(b){"string"==typeof b&&(b=a.jgrid.parse(b)),this.each(function(){this.p.filter=b,this.reDraw(),this.onchange()})}}),a.extend(a.jgrid,{filterRefactor:function(b){var c,d,e,f,g,h={};try{if(h="string"==typeof b.ruleGroudp?a.jgrid.parse(b.ruleGroup):b.ruleGroup,h.rules&&h.rules.length)for(c=h.rules,d=0;d<c.length;d++)e=c[d],a.inArray(e.filed,b.ssfield)&&(f=e.data.split(b.splitSelect),f.length>1&&(void 0===h.groups&&(h.groups=[]),g={groupOp:b.groupOpSelect,groups:[],rules:[]},h.groups.push(g),a.each(f,function(a){f[a]&&g.rules.push({data:f[a],op:e.op,field:e.field})}),c.splice(d,1),d--))}catch(a){}return h}}),a.jgrid.extend({filterToolbar:function(b){var c=a.jgrid.getRegional(this[0],"search");return b=a.extend({autosearch:!0,autosearchDelay:500,searchOnEnter:!0,beforeSearch:null,afterSearch:null,beforeClear:null,afterClear:null,onClearSearchValue:null,url:"",stringResult:!1,groupOp:"AND",defaultSearch:"bw",searchOperators:!1,resetIcon:"x",splitSelect:",",groupOpSelect:"OR",errorcheck:!0,operands:{eq:"==",ne:"!",lt:"<",le:"<=",gt:">",ge:">=",bw:"^",bn:"!^",in:"=",ni:"!=",ew:"|",en:"!@",cn:"~",nc:"!~",nu:"#",nn:"!#",bt:"..."}},c,b||{}),this.each(function(){var d=this;if(!d.p.filterToolbar){a(d).data("filterToolbar")||a(d).data("filterToolbar",b),d.p.force_regional&&(b=a.extend(b,c));var e,f,g,h=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].filter,i=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common,j=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].base,k=function(){var c,e,f,g,h={},i=0,j={},k=!1,l=[],m=!1,n=[!0,"",""],o=!1;if(a.each(d.p.colModel,function(){var p=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),!0===this.frozen&&!0===d.p.frozenColumns?d.grid.fhDiv:d.grid.hDiv);if(e=this.index||this.name,g=this.searchoptions||{},f=b.searchOperators&&g.searchOperMenu?p.parent().prev().children("a").attr("soper")||b.defaultSearch:g.sopt?g.sopt[0]:"select"===this.stype?"eq":b.defaultSearch,c="custom"===this.stype&&a.isFunction(g.custom_value)&&p.length>0?g.custom_value.call(d,p,"get"):p.val(),"select"===this.stype&&g.multiple&&a.isArray(c)&&c.length&&(k=!0,l.push(e),c=1===c.length?c[0]:c),this.searchrules&&b.errorcheck&&(a.isFunction(this.searchrules)?n=this.searchrules.call(d,c,this):a.jgrid&&a.jgrid.checkValues&&(n=a.jgrid.checkValues.call(d,c,-1,this.searchrules,this.label||this.name)),n&&n.length&&!1===n[0]))return this.searchrules.hasOwnProperty("validationError")&&(o=this.searchrules.validationError),!1;if("bt"===f&&(m=!0),c||"nu"===f||"nn"===f)h[e]=c,j[e]=f,i++;else try{delete d.p.postData[e]}catch(a){}}),!1!==n[0]){var p=i>0;if(!0===b.stringResult||"local"===d.p.datatype||!0===b.searchOperators){var q='{"groupOp":"'+b.groupOp+'","rules":[',r=0;a.each(h,function(a,b){r>0&&(q+=","),q+='{"field":"'+a+'",',q+='"op":"'+j[a]+'",',b+="",q+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',r++}),q+="]}";var s,t,u,v,w,x,y;if(k&&a.jgrid.filterRefactor({ruleGroup:q,ssfield:l,splitSelect:b.splitSelect,groupOpSelect:b.groupOpSelect}),m&&(a.isPlainObject(s)||(s=a.jgrid.parse(q)),s.rules&&s.rules.length))for(t=s.rules,u=0;u<t.length;u++)w=t[u],"bt"===w.op&&(x=w.data.split("..."),x.length>1&&(void 0===s.groups&&(s.groups=[]),y={groupOp:"AND",groups:[],rules:[]},s.groups.push(y),a.each(x,function(a){var b=0===a?"ge":"le";(v=x[a])&&y.rules.push({data:x[a],op:b,field:w.field})}),t.splice(u,1),u--));(m||k)&&(q=JSON.stringify(s)),a.extend(d.p.postData,{filters:q}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete d.p.postData[b]})}else a.extend(d.p.postData,h);var z;b.url&&(z=d.p.url,a(d).jqGrid("setGridParam",{url:b.url}));var A="stop"===a(d).triggerHandler("jqGridToolbarBeforeSearch");!A&&a.isFunction(b.beforeSearch)&&(A=b.beforeSearch.call(d)),A||a(d).jqGrid("setGridParam",{search:p}).trigger("reloadGrid",[{page:1}]),z&&a(d).jqGrid("setGridParam",{url:z}),a(d).triggerHandler("jqGridToolbarAfterSearch"),a.isFunction(b.afterSearch)&&b.afterSearch.call(d)}else if(a.isFunction(o))o.call(d,n[1]);else{var B=a.jgrid.getRegional(d,"errors");a.jgrid.info_dialog(B.errcap,n[1],"",{styleUI:d.p.styleUI})}},l=function(c){var e,f={},g=0;c="boolean"!=typeof c||c,a.each(d.p.colModel,function(){var b,c=a("#gs_"+d.p.idPrefix+a.jgrid.jqID(this.name),!0===this.frozen&&!0===d.p.frozenColumns?d.grid.fhDiv:d.grid.hDiv);switch(this.searchoptions&&void 0!==this.searchoptions.defaultValue&&(b=this.searchoptions.defaultValue),e=this.index||this.name,this.stype){case"select":if(c.find("option").each(function(c){if(0===c&&(this.selected=!0),a(this).val()===b)return this.selected=!0,!1}),void 0!==b)f[e]=b,g++;else try{delete d.p.postData[e]}catch(a){}break;case"text":if(c.val(b||""),void 0!==b)f[e]=b,g++;else try{delete d.p.postData[e]}catch(a){}break;case"custom":a.isFunction(this.searchoptions.custom_value)&&c.length>0&&this.searchoptions.custom_value.call(d,c,"set",b||"")}});var h=g>0;if(d.p.resetsearch=!0,!0===b.stringResult||"local"===d.p.datatype){var i='{"groupOp":"'+b.groupOp+'","rules":[',j=0;a.each(f,function(a,b){j>0&&(i+=","),i+='{"field":"'+a+'",',i+='"op":"eq",',b+="",i+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',j++}),i+="]}",a.extend(d.p.postData,{filters:i}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete d.p.postData[b]})}else a.extend(d.p.postData,f);var k;b.url&&(k=d.p.url,a(d).jqGrid("setGridParam",{url:b.url}));var l="stop"===a(d).triggerHandler("jqGridToolbarBeforeClear");!l&&a.isFunction(b.beforeClear)&&(l=b.beforeClear.call(d)),l||c&&a(d).jqGrid("setGridParam",{search:h}).trigger("reloadGrid",[{page:1}]),k&&a(d).jqGrid("setGridParam",{url:k}),a(d).triggerHandler("jqGridToolbarAfterClear"),a.isFunction(b.afterClear)&&b.afterClear()},m=function(){var b=a("tr.ui-search-toolbar",d.grid.hDiv);!0===d.p.frozenColumns&&a(d).jqGrid("destroyFrozenColumns"),"none"===b.css("display")?b.show():b.hide(),!0===d.p.frozenColumns&&a(d).jqGrid("setFrozenColumns")},n=function(c,e,f){a("#sopt_menu").remove(),e=parseInt(e,10),f=parseInt(f,10)+18;for(var g,j,l=a(".ui-jqgrid").css("font-size")||"11px",m='<ul id="sopt_menu" class="ui-search-menu modal-content" role="menu" tabindex="0" style="font-size:'+l+";left:"+e+"px;top:"+f+'px;">',n=a(c).attr("soper"),o=[],p=0,q=a(c).attr("colname"),r=d.p.colModel.length;p<r&&d.p.colModel[p].name!==q;)p++;var s=d.p.colModel[p],t=a.extend({},s.searchoptions);for(t.sopt||(t.sopt=[],t.sopt[0]="select"===s.stype?"eq":b.defaultSearch),a.each(b.odata,function(){o.push(this.oper)}),p=0;p<t.sopt.length;p++)-1!==(j=a.inArray(t.sopt[p],o))&&(g=n===b.odata[j].oper?i.highlight:"",m+='<li class="ui-menu-item '+g+'" role="presentation"><a class="'+i.cornerall+' g-menu-item" tabindex="0" role="menuitem" value="'+b.odata[j].oper+'" oper="'+b.operands[b.odata[j].oper]+'"><table class="ui-common-table"><tr><td width="25px">'+b.operands[b.odata[j].oper]+"</td><td>"+b.odata[j].text+"</td></tr></table></a></li>");m+="</ul>",a("body").append(m),a("#sopt_menu").addClass("ui-menu "+h.menu_widget),a("#sopt_menu > li > a").hover(function(){a(this).addClass(i.hover)},function(){a(this).removeClass(i.hover)}).click(function(){var e=a(this).attr("value"),f=a(this).attr("oper");if(a(d).triggerHandler("jqGridToolbarSelectOper",[e,f,c]),a("#sopt_menu").hide(),a(c).text(f).attr("soper",e),!0===b.autosearch){var g=a(c).parent().next().children()[0];(a(g).val()||"nu"===e||"nn"===e)&&k()}})},o=a("<tr class='ui-search-toolbar' role='row'></tr>");b.restoreFromFilters&&(g=d.p.postData.filters)&&("string"==typeof g&&(g=a.jgrid.parse(g)),f=!!g.rules.length&&g.rules),a.each(d.p.colModel,function(c){var g,i,l,m,n,p,q,r,s=this,t="",u="=",v=a("<th role='columnheader' class='"+j.headerBox+" ui-th-"+d.p.direction+"' id='gsh_"+d.p.id+"_"+s.name+"' ></th>"),w=a("<div></div>"),x=a("<table class='ui-search-table' cellspacing='0'><tr><td class='ui-search-oper' headers=''></td><td class='ui-search-input' headers=''></td><td class='ui-search-clear' headers=''></td></tr></table>");if(!0===this.hidden&&a(v).css("display","none"),this.search=!1!==this.search,void 0===this.stype&&(this.stype="text"),this.searchoptions=this.searchoptions||{},void 0===this.searchoptions.searchOperMenu&&(this.searchoptions.searchOperMenu=!0),g=a.extend({},this.searchoptions,{name:s.index||s.name,id:"gs_"+d.p.idPrefix+s.name,oper:"search"}),this.search){if(b.restoreFromFilters&&f){r=!1;for(var y=0;y<f.length;y++)if(f[y].field){var z=s.index||s.name;if(z===f[y].field){r=f[y];break}}}if(b.searchOperators){for(i=g.sopt?g.sopt[0]:"select"===s.stype?"eq":b.defaultSearch,b.restoreFromFilters&&r&&(i=r.op),l=0;l<b.odata.length;l++)if(b.odata[l].oper===i){u=b.operands[i]||"";break}m=null!=g.searchtitle?g.searchtitle:b.operandTitle,t=this.searchoptions.searchOperMenu?"<a title='"+m+"' style='padding-right: 0.5em;' soper='"+i+"' class='soptclass' colname='"+this.name+"'>"+u+"</a>":""}switch(a("td:eq(0)",x).attr("colindex",c).append(t),void 0===g.clearSearch&&(g.clearSearch=!0),g.clearSearch?(n=b.resetTitle||"Clear Search Value",a("td:eq(2)",x).append("<a title='"+n+"' style='padding-right: 0.3em;padding-left: 0.3em;' class='clearsearchclass'>"+b.resetIcon+"</a>")):a("td:eq(2)",x).hide(),this.surl&&(g.dataUrl=this.surl),p="",g.defaultValue&&(p=a.isFunction(g.defaultValue)?g.defaultValue.call(d):g.defaultValue),b.restoreFromFilters&&r&&(p=r.data),q=a.jgrid.createEl.call(d,this.stype,g,p,!1,a.extend({},a.jgrid.ajaxOptions,d.p.ajaxSelectOptions||{})),a(q).addClass(h.srInput),a("td:eq(1)",x).append(q),a(w).append(x),null==g.dataEvents&&(g.dataEvents=[]),this.stype){case"select":!0===b.autosearch&&g.dataEvents.push({type:"change",fn:function(){return k(),!1}});break;case"text":!0===b.autosearch&&(b.searchOnEnter?g.dataEvents.push({type:"keypress",fn:function(a){return 13===(a.charCode||a.keyCode||0)?(k(),!1):this}}):g.dataEvents.push({type:"keydown",fn:function(a){switch(a.which){case 13:return!1;case 9:case 16:case 37:case 38:case 39:case 40:case 27:break;default:e&&clearTimeout(e),e=setTimeout(function(){k()},b.autosearchDelay)}}}))}a.jgrid.bindEv.call(d,q,g)}a(v).append(w),a(o).append(v),b.searchOperators&&""!==t||a("td:eq(0)",x).hide()}),a("table thead",d.grid.hDiv).append(o),b.searchOperators&&(a(".soptclass",o).click(function(b){var c=a(this).offset(),d=c.left,e=c.top;n(this,d,e),b.stopPropagation()}),a("body").on("click",function(b){"soptclass"!==b.target.className&&a("#sopt_menu").remove()})),a(".clearsearchclass",o).click(function(){var c,e=a(this).parents("tr:first"),f=parseInt(a("td.ui-search-oper",e).attr("colindex"),10),g=a.extend({},d.p.colModel[f].searchoptions||{}),h=g.defaultValue?g.defaultValue:"";"select"===d.p.colModel[f].stype?(c=a("td.ui-search-input select",e),h?c.val(h):c[0].selectedIndex=0):(c=a("td.ui-search-input input",e),c.val(h)),a(d).triggerHandler("jqGridToolbarClearVal",[c[0],f,g,h]),a.isFunction(b.onClearSearchValue)&&b.onClearSearchValue.call(d,c[0],f,g,h),!0===b.autosearch&&k()}),this.p.filterToolbar=!0,this.triggerToolbar=k,this.clearToolbar=l,this.toggleToolbar=m}})},destroyFilterToolbar:function(){return this.each(function(){this.p.filterToolbar&&(this.triggerToolbar=null,this.clearToolbar=null,this.toggleToolbar=null,this.p.filterToolbar=!1,a(this.grid.hDiv).find("table thead tr.ui-search-toolbar").remove())})},refreshFilterToolbar:function(b){return b=a.extend(!0,{filters:"",onClearVal:null,onSetVal:null},b||{}),this.each(function(){function c(f){if(f&&f.rules){for(g=f.rules,l=g.length,d=0;d<l;d++)h=g[d],-1!==(i=a.inArray(h.field,m))&&(e=a("#gs_"+j.p.idPrefix+a.jgrid.jqID(k[i].name)),e.length>0&&("select"===k[i].stype?e.find("option[value='"+a.jgrid.jqID(h.data)+"']").prop("selected",!0):"text"===k[i].stype&&e.val(h.data),a.isFunction(b.onSetVal)&&b.onSetVal.call(j,e,k[i].name)));if(f.groups)for(var n=0;n<f.groups.length;n++)c(f.groups[n])}}var d,e,f,g,h,i,j=this,k=j.p.colModel,l=j.p.colModel.length,m=[];if(j.p.filterToolbar){for(d=0;d<l;d++){switch(m.push(k[d].name),e=a("#gs_"+j.p.idPrefix+a.jgrid.jqID(k[d].name)),k[d].stype){case"select":case"text":e.val("")}a.isFunction(b.onClearVal)&&b.onClearVal.call(j,e,k[d].name)}"string"==typeof b.filters&&b.filters.length&&(f=a.jgrid.parse(b.filters)),a.isPlainObject(f)&&c(f)}})},searchGrid:function(b){var c=a.jgrid.getRegional(this[0],"search");return b=a.extend(!0,{recreateFilter:!1,drag:!0,sField:"searchField",sValue:"searchString",sOper:"searchOper",sFilter:"filters",loadDefaults:!0,beforeShowSearch:null,afterShowSearch:null,onInitializeSearch:null,afterRedraw:null,afterChange:null,sortStrategy:null,closeAfterSearch:!1,closeAfterReset:!1,closeOnEscape:!1,searchOnEnter:!1,multipleSearch:!1,multipleGroup:!1,top:0,left:0,jqModal:!0,modal:!1,resize:!0,width:450,height:"auto",dataheight:"auto",showQuery:!1,errorcheck:!0,sopt:null,stringResult:void 0,onClose:null,onSearch:null,onReset:null,toTop:!0,overlay:30,columns:[],tmplNames:null,tmplFilters:null,tmplLabel:" Template: ",showOnLoad:!1,layer:null,splitSelect:",",groupOpSelect:"OR",operands:{eq:"=",ne:"<>",lt:"<",le:"<=",gt:">",ge:">=",bw:"LIKE",bn:"NOT LIKE",in:"IN",ni:"NOT IN",ew:"LIKE",en:"NOT LIKE",cn:"LIKE",nc:"NOT LIKE",nu:"IS NULL",nn:"ISNOT NULL"},buttons:[]},c,b||{}),this.each(function(){function c(c){g=a(d).triggerHandler("jqGridFilterBeforeShow",[c]),void 0===g&&(g=!0),g&&a.isFunction(b.beforeShowSearch)&&(g=b.beforeShowSearch.call(d,c)),g&&(a.jgrid.viewModal("#"+a.jgrid.jqID(i.themodal),{gbox:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,modal:b.modal,overlay:b.overlay,toTop:b.toTop}),a(d).triggerHandler("jqGridFilterAfterShow",[c]),a.isFunction(b.afterShowSearch)&&b.afterShowSearch.call(d,c))}var d=this;if(d.grid){var e,f="fbox_"+d.p.id,g=!0,h=!0,i={themodal:"searchmod"+f,modalhead:"searchhd"+f,modalcontent:"searchcnt"+f,scrollelm:f},j=a.isPlainObject(d.p_savedFilter)&&!a.isEmptyObject(d.p_savedFilter)?d.p_savedFilter:d.p.postData[b.sFilter],k=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].filter,l=a.jgrid.styleUI[d.p.styleUI||"jQueryUI"].common;if(b.styleUI=d.p.styleUI,"string"==typeof j&&(j=a.jgrid.parse(j)),!0===b.recreateFilter&&a("#"+a.jgrid.jqID(i.themodal)).remove(),void 0!==a("#"+a.jgrid.jqID(i.themodal))[0])c(a("#fbox_"+a.jgrid.jqID(d.p.id)));else{var m=a("<div><div id='"+f+"' class='searchFilter' style='overflow:auto'></div></div>").insertBefore("#gview_"+a.jgrid.jqID(d.p.id)),n="left",o="";"rtl"===d.p.direction&&(n="right",o=" style='text-align:left'",m.attr("dir","rtl"));var p,q,r=a.extend([],d.p.colModel),s="<a id='"+f+"_search' class='fm-button "+l.button+" fm-button-icon-right ui-search'><span class='"+l.icon_base+" "+k.icon_search+"'></span>"+b.Find+"</a>",t="<a id='"+f+"_reset' class='fm-button "+l.button+" fm-button-icon-left ui-reset'><span class='"+l.icon_base+" "+k.icon_reset+"'></span>"+b.Reset+"</a>",u="",v="",w=!1,x=-1,y=!1,z=[];b.showQuery&&(u="<a id='"+f+"_query' class='fm-button "+l.button+" fm-button-icon-left'><span class='"+l.icon_base+" "+k.icon_query+"'></span>Query</a>");var A=a.jgrid.buildButtons(b.buttons,u+s,l);if(b.columns.length?(r=b.columns,x=0,p=r[0].index||r[0].name):a.each(r,function(a,b){if(b.label||(b.label=d.p.colNames[a]),!w){var c=void 0===b.search||b.search,e=!0===b.hidden;(b.searchoptions&&!0===b.searchoptions.searchhidden&&c||c&&!e)&&(w=!0,p=b.index||b.name,x=a)}"select"===b.stype&&b.searchoptions&&b.searchoptions.multiple&&(y=!0,z.push(b.index||b.name))}),!j&&p||!1===b.multipleSearch){var B="eq";x>=0&&r[x].searchoptions&&r[x].searchoptions.sopt?B=r[x].searchoptions.sopt[0]:b.sopt&&b.sopt.length&&(B=b.sopt[0]),j={groupOp:"AND",rules:[{field:p,op:B,data:""}]}}w=!1,b.tmplNames&&b.tmplNames.length&&(w=!0,v="<tr><td class='ui-search-label'>"+b.tmplLabel+"</td>",v+="<td><select size='1' class='ui-template "+k.srSelect+"'>",v+="<option value='default'>Default</option>",a.each(b.tmplNames,function(a,b){v+="<option value='"+a+"'>"+b+"</option>"}),v+="</select></td></tr>"),q="<table class='EditTable' style='border:0px none;margin-top:5px' id='"+f+"_2'><tbody><tr><td colspan='2'><hr class='"+l.content+"' style='margin:1px'/></td></tr>"+v+"<tr><td class='EditButton' style='text-align:"+n+"'>"+t+"</td><td class='EditButton' "+o+">"+A+"</td></tr></tbody></table>",f=a.jgrid.jqID(f),a("#"+f).jqFilter({columns:r,sortStrategy:b.sortStrategy,filter:b.loadDefaults?j:null,showQuery:b.showQuery,errorcheck:b.errorcheck,sopt:b.sopt,groupButton:b.multipleGroup,ruleButtons:b.multipleSearch,uniqueSearchFields:b.uniqueSearchFields,afterRedraw:b.afterRedraw,ops:b.odata,operands:b.operands,ajaxSelectOptions:d.p.ajaxSelectOptions,groupOps:b.groupOps,addsubgrup:b.addsubgrup,addrule:b.addrule,delgroup:b.delgroup,delrule:b.delrule,autoencode:d.p.autoencode,onChange:function(){this.p.showQuery&&a(".query",this).html(this.toUserFriendlyString()),a.isFunction(b.afterChange)&&b.afterChange.call(d,a("#"+f),b)},direction:d.p.direction,id:d.p.id}),m.append(q),a("#"+f+"_2").find("[data-index]").each(function(){var c=parseInt(a(this).attr("data-index"),10);c>=0&&a(this).on("click",function(e){b.buttons[c].click.call(d,a("#"+f),b,e)})}),w&&b.tmplFilters&&b.tmplFilters.length&&a(".ui-template",m).on("change",function(){var c=a(this).val();return"default"===c?a("#"+f).jqFilter("addFilter",j):a("#"+f).jqFilter("addFilter",b.tmplFilters[parseInt(c,10)]),!1}),!0===b.multipleGroup&&(b.multipleSearch=!0),a(d).triggerHandler("jqGridFilterInitialize",[a("#"+f)]),a.isFunction(b.onInitializeSearch)&&b.onInitializeSearch.call(d,a("#"+f)),b.gbox="#gbox_"+f;var C=a(".ui-jqgrid").css("font-size")||"11px";b.layer?a.jgrid.createModal(i,m,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0],"string"==typeof b.layer?"#"+a.jgrid.jqID(b.layer):b.layer,"string"==typeof b.layer?{position:"relative","font-size":C}:{"font-size":C}):a.jgrid.createModal(i,m,b,"#gview_"+a.jgrid.jqID(d.p.id),a("#gbox_"+a.jgrid.jqID(d.p.id))[0],null,{"font-size":C}),(b.searchOnEnter||b.closeOnEscape)&&a("#"+a.jgrid.jqID(i.themodal)).keydown(function(c){var d=a(c.target);return!b.searchOnEnter||13!==c.which||d.hasClass("add-group")||d.hasClass("add-rule")||d.hasClass("delete-group")||d.hasClass("delete-rule")||d.hasClass("fm-button")&&d.is("[id$=_query]")?b.closeOnEscape&&27===c.which?(a("#"+a.jgrid.jqID(i.modalhead)).find(".ui-jqdialog-titlebar-close").click(),!1):void 0:(a("#"+f+"_search").click(),!1)}),u&&a("#"+f+"_query").on("click",function(){return a(".queryresult",m).toggle(),!1}),void 0===b.stringResult&&(b.stringResult=b.multipleSearch),a("#"+f+"_search").on("click",function(){var c,g,j={};if(e=a("#"+f),e.find(".input-elm:focus").change(),y&&b.multipleSearch?(d.p_savedFilter={},g=a.jgrid.filterRefactor({ruleGroup:a.extend(!0,{},e.jqFilter("filterData")),ssfield:z,splitSelect:b.splitSelect,groupOpSelect:b.groupOpSelect}),d.p_savedFilter=a.extend(!0,{},e.jqFilter("filterData"))):g=e.jqFilter("filterData"),b.errorcheck&&(e[0].hideError(),b.showQuery||e.jqFilter("toSQLString"),e[0].p.error))return e[0].showError(),!1;if(b.stringResult){try{c=JSON.stringify(g)}catch(a){}"string"==typeof c&&(j[b.sFilter]=c,a.each([b.sField,b.sValue,b.sOper],function(){j[this]=""}))}else b.multipleSearch?(j[b.sFilter]=g,a.each([b.sField,b.sValue,b.sOper],function(){j[this]=""})):(j[b.sField]=g.rules[0].field,j[b.sValue]=g.rules[0].data,j[b.sOper]=g.rules[0].op,j[b.sFilter]="");return d.p.search=!0,a.extend(d.p.postData,j),h=a(d).triggerHandler("jqGridFilterSearch"),void 0===h&&(h=!0),h&&a.isFunction(b.onSearch)&&(h=b.onSearch.call(d,d.p.filters)),!1!==h&&a(d).trigger("reloadGrid",[{page:1}]),b.closeAfterSearch&&a.jgrid.hideModal("#"+a.jgrid.jqID(i.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose}),!1}),a("#"+f+"_reset").on("click",function(){var c={},e=a("#"+f);return d.p.search=!1,d.p.resetsearch=!0,!1===b.multipleSearch?c[b.sField]=c[b.sValue]=c[b.sOper]="":c[b.sFilter]="",e[0].resetFilter(),w&&a(".ui-template",m).val("default"),a.extend(d.p.postData,c),h=a(d).triggerHandler("jqGridFilterReset"),void 0===h&&(h=!0),h&&a.isFunction(b.onReset)&&(h=b.onReset.call(d)),
!1!==h&&a(d).trigger("reloadGrid",[{page:1}]),b.closeAfterReset&&a.jgrid.hideModal("#"+a.jgrid.jqID(i.themodal),{gb:"#gbox_"+a.jgrid.jqID(d.p.id),jqm:b.jqModal,onClose:b.onClose}),!1}),c(a("#"+f)),a(".fm-button:not(."+l.disabled+")",m).hover(function(){a(this).addClass(l.hover)},function(){a(this).removeClass(l.hover)})}}})},filterInput:function(b,c){return c=a.extend(!0,{defaultSearch:"cn",groupOp:"OR",searchAll:!1,beforeSearch:null,afterSearch:null},c||{}),this.each(function(){var d=this;if(d.grid){var e,f,g,h='{"groupOp":"'+c.groupOp+'","rules":[',i=0;if(b+="","local"===d.p.datatype){a.each(d.p.colModel,function(){e=this.index||this.name,f=this.searchoptions||{},g=c.defaultSearch?c.defaultSearch:f.sopt?f.sopt[0]:c.defaultSearch,this.search=!1!==this.search,(this.search||c.searchAll)&&(i>0&&(h+=","),h+='{"field":"'+e+'",',h+='"op":"'+g+'",',h+='"data":"'+b.replace(/\\/g,"\\\\").replace(/\"/g,'\\"')+'"}',i++)}),h+="]}",a.extend(d.p.postData,{filters:h}),a.each(["searchField","searchString","searchOper"],function(a,b){d.p.postData.hasOwnProperty(b)&&delete d.p.postData[b]});var j="stop"===a(d).triggerHandler("jqGridFilterInputBeforeSearch");!j&&a.isFunction(c.beforeSearch)&&(j=c.beforeSearch.call(d)),j||a(d).jqGrid("setGridParam",{search:!0}).trigger("reloadGrid",[{page:1}]),a(d).triggerHandler("jqGridFilterInputAfterSearch"),a.isFunction(c.afterSearch)&&c.afterSearch.call(d)}}})}})});