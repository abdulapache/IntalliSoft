/*!
 AutoFill 2.3.0
 ©2008-2018 SpryMedia Ltd - datatables.net/license
*/
(function(f){"function"===typeof define&&define.amd?define(["jquery","datatables.net"],function(j){return f(j,window,document)}):"object"===typeof exports?module.exports=function(j,k){j||(j=window);if(!k||!k.fn.dataTable)k=require("datatables.net")(j,k).$;return f(k,j,j.document)}:f(jQuery,window,document)})(function(f,j,k,q){var l=f.fn.dataTable,s=0,h=function(b,c){if(!l.versionCheck||!l.versionCheck("1.10.8"))throw"Warning: AutoFill requires DataTables 1.10.8 or greater";this.c=f.extend(!0,{},l.defaults.autoFill,
h.defaults,c);this.s={dt:new l.Api(b),namespace:".autoFill"+s++,scroll:{},scrollInterval:null,handle:{height:0,width:0},enabled:!1};this.dom={handle:f('<div class="dt-autofill-handle"/>'),select:{top:f('<div class="dt-autofill-select top"/>'),right:f('<div class="dt-autofill-select right"/>'),bottom:f('<div class="dt-autofill-select bottom"/>'),left:f('<div class="dt-autofill-select left"/>')},background:f('<div class="dt-autofill-background"/>'),list:f('<div class="dt-autofill-list">'+this.s.dt.i18n("autoFill.info",
"")+"<ul/></div>"),dtScroll:null,offsetParent:null};this._constructor()};f.extend(h.prototype,{enabled:function(){return this.s.enabled},enable:function(b){var c=this;if(!1===b)return this.disable();this.s.enabled=!0;this._focusListener();this.dom.handle.on("mousedown",function(a){c._mousedown(a);return!1});return this},disable:function(){this.s.enabled=!1;this._focusListenerRemove();return this},_constructor:function(){var b=this,c=this.s.dt,a=f("div.dataTables_scrollBody",this.s.dt.table().container());
c.settings()[0].autoFill=this;a.length&&(this.dom.dtScroll=a,"static"===a.css("position")&&a.css("position","relative"));!1!==this.c.enable&&this.enable();c.on("destroy.autoFill",function(){b._focusListenerRemove()})},_attach:function(b){var c=this.s.dt,a=c.cell(b).index(),d=this.dom.handle,e=this.s.handle;if(!a||-1===c.columns(this.c.columns).indexes().indexOf(a.column))this._detach();else{this.dom.offsetParent||(this.dom.offsetParent=f(c.table().node()).offsetParent());if(!e.height||!e.width)d.appendTo("body"),
e.height=d.outerHeight(),e.width=d.outerWidth();c=this._getPosition(b,this.dom.offsetParent);this.dom.attachedTo=b;d.css({top:c.top+b.offsetHeight-e.height,left:c.left+b.offsetWidth-e.width}).appendTo(this.dom.offsetParent)}},_actionSelector:function(b){var c=this,a=this.s.dt,d=h.actions,e=[];f.each(d,function(c,d){d.available(a,b)&&e.push(c)});if(1===e.length&&!1===this.c.alwaysAsk){var i=d[e[0]].execute(a,b);this._update(i,b)}else{var g=this.dom.list.children("ul").empty();e.push("cancel");f.each(e,
function(e,i){g.append(f("<li/>").append('<div class="dt-autofill-question">'+d[i].option(a,b)+"<div>").append(f('<div class="dt-autofill-button">').append(f('<button class="'+h.classes.btn+'">'+a.i18n("autoFill.button","&gt;")+"</button>").on("click",function(){var e=d[i].execute(a,b,f(this).closest("li"));c._update(e,b);c.dom.background.remove();c.dom.list.remove()}))))});this.dom.background.appendTo("body");this.dom.list.appendTo("body");this.dom.list.css("margin-top",-1*(this.dom.list.outerHeight()/
2))}},_detach:function(){this.dom.attachedTo=null;this.dom.handle.detach()},_drawSelection:function(b){var c=this.s.dt,a=this.s.start,d=f(this.dom.start),e={row:this.c.vertical?c.rows({page:"current"}).nodes().indexOf(b.parentNode):a.row,column:this.c.horizontal?f(b).index():a.column},b=c.column.index("toData",e.column),i=f(c.cell(":eq("+e.row+")",b).node());if(c.cell(i).any()&&-1!==c.columns(this.c.columns).indexes().indexOf(b)){this.s.end=e;var g,c=a.row<e.row?d:i;g=a.row<e.row?i:d;b=a.column<e.column?
d:i;d=a.column<e.column?i:d;c=this._getPosition(c).top;b=this._getPosition(b).left;a=this._getPosition(g).top+g.outerHeight()-c;d=this._getPosition(d).left+d.outerWidth()-b;e=this.dom.select;e.top.css({top:c,left:b,width:d});e.left.css({top:c,left:b,height:a});e.bottom.css({top:c+a,left:b,width:d});e.right.css({top:c,left:b+d,height:a})}},_editor:function(b){var c=this.s.dt,a=this.c.editor;if(a){for(var d={},e=[],f=a.fields(),g=0,k=b.length;g<k;g++)for(var h=0,j=b[g].length;h<j;h++){var m=b[g][h],
n=c.settings()[0].aoColumns[m.index.column],o=n.editField;if(o===q)for(var n=n.mData,l=0,p=f.length;l<p;l++){var r=a.field(f[l]);if(r.dataSrc()===n){o=r.name();break}}if(!o)throw"Could not automatically determine field data. Please see https://datatables.net/tn/11";d[o]||(d[o]={});n=c.row(m.index.row).id();d[o][n]=m.set;e.push(m.index)}a.bubble(e,!1).multiSet(d).submit()}},_emitEvent:function(b,c){this.s.dt.iterator("table",function(a){f(a.nTable).triggerHandler(b+".dt",c)})},_focusListener:function(){var b=
this,c=this.s.dt,a=this.s.namespace,d=null!==this.c.focus?this.c.focus:c.init().keys||c.settings()[0].keytable?"focus":"hover";if("focus"===d)c.on("key-focus.autoFill",function(a,c,d){b._attach(d.node())}).on("key-blur.autoFill",function(){b._detach()});else if("click"===d)f(c.table().body()).on("click"+a,"td, th",function(){b._attach(this)}),f(k.body).on("click"+a,function(a){f(a.target).parents().filter(c.table().body()).length||b._detach()});else f(c.table().body()).on("mouseenter"+a,"td, th",
function(){b._attach(this)}).on("mouseleave"+a,function(a){f(a.relatedTarget).hasClass("dt-autofill-handle")||b._detach()})},_focusListenerRemove:function(){var b=this.s.dt;b.off(".autoFill");f(b.table().body()).off(this.s.namespace);f(k.body).off(this.s.namespace)},_getPosition:function(b,c){var a=f(b),d,e,i=0,g=0;c||(c=f(f(this.s.dt.table().node())[0].offsetParent));do{e=a.position();d=f(a[0].offsetParent);i+=e.top+d.scrollTop();g+=e.left+d.scrollLeft();i+=1*parseInt(d.css("margin-top"));i+=1*parseInt(d.css("border-top-width"));
if("body"===a.get(0).nodeName.toLowerCase())break;a=d}while(d.get(0)!==c.get(0));return{top:i,left:g}},_mousedown:function(b){var c=this,a=this.s.dt;this.dom.start=this.dom.attachedTo;this.s.start={row:a.rows({page:"current"}).nodes().indexOf(f(this.dom.start).parent()[0]),column:f(this.dom.start).index()};f(k.body).on("mousemove.autoFill",function(a){c._mousemove(a)}).on("mouseup.autoFill",function(a){c._mouseup(a)});var d=this.dom.select,a=f(a.table().node()).offsetParent();d.top.appendTo(a);d.left.appendTo(a);
d.right.appendTo(a);d.bottom.appendTo(a);this._drawSelection(this.dom.start,b);this.dom.handle.css("display","none");b=this.dom.dtScroll;this.s.scroll={windowHeight:f(j).height(),windowWidth:f(j).width(),dtTop:b?b.offset().top:null,dtLeft:b?b.offset().left:null,dtHeight:b?b.outerHeight():null,dtWidth:b?b.outerWidth():null}},_mousemove:function(b){var c=b.target.nodeName.toLowerCase();"td"!==c&&"th"!==c||(this._drawSelection(b.target,b),this._shiftScroll(b))},_mouseup:function(b){f(k.body).off(".autoFill");
var c=this,a=this.s.dt,d=this.dom.select;d.top.remove();d.left.remove();d.right.remove();d.bottom.remove();this.dom.handle.css("display","block");var d=this.s.start,e=this.s.end;if(!(d.row===e.row&&d.column===e.column)){var i=a.cell(":eq("+d.row+")",d.column+":visible",{page:"current"});if(f("div.DTE",i.node()).length){var g=a.editor();g.on("submitSuccess.kt",function(){g.off(".kt");c._mouseup(b)}).on("submitComplete.kt preSubmitCancelled.kt",function(){g.off(".kt")});g.submit()}else{for(var h=this._range(d.row,
e.row),d=this._range(d.column,e.column),e=[],j=a.settings()[0],l=j.aoColumns,m=0;m<h.length;m++)e.push(f.map(d,function(b){var b=a.cell(":eq("+h[m]+")",b+":visible",{page:"current"}),c=b.data(),d=b.index(),e=l[d.column].editField;e!==q&&(c=j.oApi._fnGetObjectDataFn(e)(a.row(d.row).data()));return{cell:b,data:c,label:b.data(),index:d}}));this._actionSelector(e);clearInterval(this.s.scrollInterval);this.s.scrollInterval=null}}},_range:function(b,c){var a=[],d;if(b<=c)for(d=b;d<=c;d++)a.push(d);else for(d=
b;d>=c;d--)a.push(d);return a},_shiftScroll:function(b){var c=this,a=this.s.scroll,d=!1,e=b.pageY-k.body.scrollTop,f=b.pageX-k.body.scrollLeft,g,h,j,l;65>e?g=-5:e>a.windowHeight-65&&(g=5);65>f?h=-5:f>a.windowWidth-65&&(h=5);null!==a.dtTop&&b.pageY<a.dtTop+65?j=-5:null!==a.dtTop&&b.pageY>a.dtTop+a.dtHeight-65&&(j=5);null!==a.dtLeft&&b.pageX<a.dtLeft+65?l=-5:null!==a.dtLeft&&b.pageX>a.dtLeft+a.dtWidth-65&&(l=5);g||h||j||l?(a.windowVert=g,a.windowHoriz=h,a.dtVert=j,a.dtHoriz=l,d=!0):this.s.scrollInterval&&
(clearInterval(this.s.scrollInterval),this.s.scrollInterval=null);!this.s.scrollInterval&&d&&(this.s.scrollInterval=setInterval(function(){if(a.windowVert)k.body.scrollTop=k.body.scrollTop+a.windowVert;if(a.windowHoriz)k.body.scrollLeft=k.body.scrollLeft+a.windowHoriz;if(a.dtVert||a.dtHoriz){var b=c.dom.dtScroll[0];if(a.dtVert)b.scrollTop=b.scrollTop+a.dtVert;if(a.dtHoriz)b.scrollLeft=b.scrollLeft+a.dtHoriz}},20))},_update:function(b,c){if(!1!==b){var a=this.s.dt,d;this._emitEvent("preAutoFill",[a,
c]);this._editor(c);if(null!==this.c.update?this.c.update:!this.c.editor){for(var e=0,f=c.length;e<f;e++)for(var g=0,h=c[e].length;g<h;g++)d=c[e][g],d.cell.data(d.set);a.draw(!1)}this._emitEvent("autoFill",[a,c])}}});h.actions={increment:{available:function(b,c){var a=c[0][0].label;return!isNaN(a-parseFloat(a))},option:function(b){return b.i18n("autoFill.increment",'Increment / decrement each cell by: <input type="number" value="1">')},execute:function(b,c,a){for(var b=1*c[0][0].data,a=1*f("input",
a).val(),d=0,e=c.length;d<e;d++)for(var i=0,g=c[d].length;i<g;i++)c[d][i].set=b,b+=a}},fill:{available:function(){return!0},option:function(b,c){return b.i18n("autoFill.fill","Fill all cells with <i>"+c[0][0].label+"</i>")},execute:function(b,c){for(var a=c[0][0].data,d=0,e=c.length;d<e;d++)for(var f=0,g=c[d].length;f<g;f++)c[d][f].set=a}},fillHorizontal:{available:function(b,c){return 1<c.length&&1<c[0].length},option:function(b){return b.i18n("autoFill.fillHorizontal","Fill cells horizontally")},
execute:function(b,c){for(var a=0,d=c.length;a<d;a++)for(var e=0,f=c[a].length;e<f;e++)c[a][e].set=c[a][0].data}},fillVertical:{available:function(b,c){return 1<c.length&&1<c[0].length},option:function(b){return b.i18n("autoFill.fillVertical","Fill cells vertically")},execute:function(b,c){for(var a=0,d=c.length;a<d;a++)for(var e=0,f=c[a].length;e<f;e++)c[a][e].set=c[0][e].data}},cancel:{available:function(){return!1},option:function(b){return b.i18n("autoFill.cancel","Cancel")},execute:function(){return!1}}};
h.version="2.3.0";h.defaults={alwaysAsk:!1,focus:null,columns:"",enable:!0,update:null,editor:null,vertical:!0,horizontal:!0};h.classes={btn:"btn"};var p=f.fn.dataTable.Api;p.register("autoFill()",function(){return this});p.register("autoFill().enabled()",function(){var b=this.context[0];return b.autoFill?b.autoFill.enabled():!1});p.register("autoFill().enable()",function(b){return this.iterator("table",function(c){c.autoFill&&c.autoFill.enable(b)})});p.register("autoFill().disable()",function(){return this.iterator("table",
function(b){b.autoFill&&b.autoFill.disable()})});f(k).on("preInit.dt.autofill",function(b,c){if("dt"===b.namespace){var a=c.oInit.autoFill,d=l.defaults.autoFill;if(a||d)d=f.extend({},a,d),!1!==a&&new h(c,d)}});l.AutoFill=h;return l.AutoFill=h});