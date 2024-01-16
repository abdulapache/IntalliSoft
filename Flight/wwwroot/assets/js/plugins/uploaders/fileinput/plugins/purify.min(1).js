!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.DOMPurify=t()}(this,function(){"use strict";function e(e,t){for(var n=t.length;n--;)"string"==typeof t[n]&&(t[n]=t[n].toLowerCase()),e[t[n]]=!0;return e}function t(e){var t={},n=void 0;for(n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t}function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var x=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A(),S=function(e){return r(e)};if(S.version="1.0.7",S.removed=[],!x||!x.document||9!==x.document.nodeType)return S.isSupported=!1,S;var k=x.document,w=!1,L=!1,E=x.document,O=x.DocumentFragment,M=x.HTMLTemplateElement,N=x.Node,_=x.NodeFilter,D=x.NamedNodeMap,C=void 0===D?x.NamedNodeMap||x.MozNamedAttrMap:D,R=x.Text,F=x.Comment,z=x.DOMParser;if("function"==typeof M){var H=E.createElement("template");H.content&&H.content.ownerDocument&&(E=H.content.ownerDocument)}var I=E,j=I.implementation,P=I.createNodeIterator,W=I.getElementsByTagName,U=I.createDocumentFragment,B=k.importNode,G={};S.isSupported=j&&void 0!==j.createHTMLDocument&&9!==E.documentMode;var q=m,V=p,Y=h,K=g,X=v,$=b,J=y,Q=null,Z=e({},[].concat(n(o),n(i),n(a),n(l),n(s))),ee=null,te=e({},[].concat(n(c),n(d),n(u),n(f))),ne=null,re=null,oe=!0,ie=!0,ae=!1,le=!1,se=!1,ce=!1,de=!1,ue=!1,fe=!1,me=!1,pe=!1,he=!0,ge=!0,ye=!1,ve={},be=e({},["audio","head","math","script","style","template","svg","video"]),Te=e({},["audio","video","img","source","image"]),Ae=e({},["alt","class","for","id","label","name","pattern","placeholder","summary","title","value","style","xmlns"]),xe=null,Se=E.createElement("form"),ke=function(r){"object"!==(void 0===r?"undefined":T(r))&&(r={}),Q="ALLOWED_TAGS"in r?e({},r.ALLOWED_TAGS):Z,ee="ALLOWED_ATTR"in r?e({},r.ALLOWED_ATTR):te,ne="FORBID_TAGS"in r?e({},r.FORBID_TAGS):{},re="FORBID_ATTR"in r?e({},r.FORBID_ATTR):{},ve="USE_PROFILES"in r&&r.USE_PROFILES,oe=!1!==r.ALLOW_ARIA_ATTR,ie=!1!==r.ALLOW_DATA_ATTR,ae=r.ALLOW_UNKNOWN_PROTOCOLS||!1,le=r.SAFE_FOR_JQUERY||!1,se=r.SAFE_FOR_TEMPLATES||!1,ce=r.WHOLE_DOCUMENT||!1,fe=r.RETURN_DOM||!1,me=r.RETURN_DOM_FRAGMENT||!1,pe=r.RETURN_DOM_IMPORT||!1,ue=r.FORCE_BODY||!1,he=!1!==r.SANITIZE_DOM,ge=!1!==r.KEEP_CONTENT,ye=r.IN_PLACE||!1,J=r.ALLOWED_URI_REGEXP||J,se&&(ie=!1),me&&(fe=!0),ve&&(Q=e({},[].concat(n(s))),ee=[],!0===ve.html&&(e(Q,o),e(ee,c)),!0===ve.svg&&(e(Q,i),e(ee,d),e(ee,f)),!0===ve.svgFilters&&(e(Q,a),e(ee,d),e(ee,f)),!0===ve.mathMl&&(e(Q,l),e(ee,u),e(ee,f))),r.ADD_TAGS&&(Q===Z&&(Q=t(Q)),e(Q,r.ADD_TAGS)),r.ADD_ATTR&&(ee===te&&(ee=t(ee)),e(ee,r.ADD_ATTR)),r.ADD_URI_SAFE_ATTR&&e(Ae,r.ADD_URI_SAFE_ATTR),ge&&(Q["#text"]=!0),ce&&e(Q,["html","head","body"]),Q.table&&e(Q,["tbody"]),Object&&"freeze"in Object&&Object.freeze(r),xe=r},we=function(e){S.removed.push({element:e});try{e.parentNode.removeChild(e)}catch(t){e.outerHTML=""}},Le=function(e,t){try{S.removed.push({attribute:t.getAttributeNode(e),from:t})}catch(e){S.removed.push({attribute:null,from:t})}t.removeAttribute(e)},Ee=function(t){var n=void 0;if(ue&&(t="<remove></remove>"+t),w)try{n=(new z).parseFromString(t,"text/html")}catch(e){}if(L&&e(ne,["title"]),!n||!n.documentElement){var r=(n=j.createHTMLDocument("")).body;r.parentNode.removeChild(r.parentNode.firstElementChild),r.outerHTML=t}return W.call(n,ce?"html":"body")[0]};S.isSupported&&(function(){try{Ee('<svg><p><style><img src="</style><img src=x onerror=alert(1)//">').querySelector("svg img")&&(w=!0)}catch(e){}}(),function(){try{Ee("<x/><title>&lt;/title&gt;&lt;img&gt;").querySelector("title").textContent.match(/<\/title/)&&(L=!0)}catch(e){}}());var Oe=function(e){return P.call(e.ownerDocument||e,e,_.SHOW_ELEMENT|_.SHOW_COMMENT|_.SHOW_TEXT,function(){return _.FILTER_ACCEPT},!1)},Me=function(e){return!(e instanceof R||e instanceof F)&&!("string"==typeof e.nodeName&&"string"==typeof e.textContent&&"function"==typeof e.removeChild&&e.attributes instanceof C&&"function"==typeof e.removeAttribute&&"function"==typeof e.setAttribute)},Ne=function(e){return"object"===(void 0===N?"undefined":T(N))?e instanceof N:e&&"object"===(void 0===e?"undefined":T(e))&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},_e=function(e,t,n){G[e]&&G[e].forEach(function(e){e.call(S,t,n,xe)})},De=function(e){var t=void 0;if(_e("beforeSanitizeElements",e,null),Me(e))return we(e),!0;var n=e.nodeName.toLowerCase();if(_e("uponSanitizeElement",e,{tagName:n,allowedTags:Q}),!Q[n]||ne[n]){if(ge&&!be[n]&&"function"==typeof e.insertAdjacentHTML)try{e.insertAdjacentHTML("AfterEnd",e.innerHTML)}catch(e){}return we(e),!0}return!le||e.firstElementChild||e.content&&e.content.firstElementChild||!/</g.test(e.textContent)||(S.removed.push({element:e.cloneNode()}),e.innerHTML?e.innerHTML=e.innerHTML.replace(/</g,"&lt;"):e.innerHTML=e.textContent.replace(/</g,"&lt;")),se&&3===e.nodeType&&(t=(t=(t=e.textContent).replace(q," ")).replace(V," "),e.textContent!==t&&(S.removed.push({element:e.cloneNode()}),e.textContent=t)),_e("afterSanitizeElements",e,null),!1},Ce=function(e,t,n){if(he&&("id"===t||"name"===t)&&(n in E||n in Se))return!1;if(se&&(n=(n=n.replace(q," ")).replace(V," ")),ie&&Y.test(t));else if(oe&&K.test(t));else{if(!ee[t]||re[t])return!1;if(Ae[t]);else if(J.test(n.replace($,"")));else if("src"!==t&&"xlink:href"!==t||0!==n.indexOf("data:")||!Te[e]){if(ae&&!X.test(n.replace($,"")));else if(n)return!1}else;}return!0},Re=function(e){var t=void 0,n=void 0,r=void 0,o=void 0,i=void 0;_e("beforeSanitizeAttributes",e,null);var a=e.attributes;if(a){var l={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:ee};for(i=a.length;i--;){var s=(t=a[i]).name;if(n=t.value.trim(),r=s.toLowerCase(),l.attrName=r,l.attrValue=n,l.keepAttr=!0,_e("uponSanitizeAttribute",e,l),n=l.attrValue,"name"===r&&"IMG"===e.nodeName&&a.id)o=a.id,a=Array.prototype.slice.apply(a),Le("id",e),Le(s,e),a.indexOf(o)>i&&e.setAttribute("id",o.value);else{if("INPUT"===e.nodeName&&"type"===r&&"file"===n&&(ee[r]||!re[r]))continue;"id"===s&&e.setAttribute(s,""),Le(s,e)}if(l.keepAttr){var c=e.nodeName.toLowerCase();if(Ce(c,r,n))try{e.setAttribute(s,n),S.removed.pop()}catch(e){}}}_e("afterSanitizeAttributes",e,null)}},Fe=function e(t){var n=void 0,r=Oe(t);for(_e("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)_e("uponSanitizeShadowNode",n,null),De(n)||(n.content instanceof O&&e(n.content),Re(n));_e("afterSanitizeShadowDOM",t,null)};return S.sanitize=function(e,t){var n=void 0,r=void 0,o=void 0,i=void 0,a=void 0;if(e||(e="\x3c!--\x3e"),"string"!=typeof e&&!Ne(e)){if("function"!=typeof e.toString)throw new TypeError("toString is not a function");if("string"!=typeof(e=e.toString()))throw new TypeError("dirty is not a string, aborting")}if(!S.isSupported){if("object"===T(x.toStaticHTML)||"function"==typeof x.toStaticHTML){if("string"==typeof e)return x.toStaticHTML(e);if(Ne(e))return x.toStaticHTML(e.outerHTML)}return e}if(de||ke(t),S.removed=[],ye);else if(e instanceof N)1===(r=(n=Ee("\x3c!--\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===r.nodeName?n=r:n.appendChild(r);else{if(!fe&&!ce&&-1===e.indexOf("<"))return e;if(!(n=Ee(e)))return fe?null:""}n&&ue&&we(n.firstChild);for(var l=Oe(ye?e:n);o=l.nextNode();)3===o.nodeType&&o===i||De(o)||(o.content instanceof O&&Fe(o.content),Re(o),i=o);if(ye)return e;if(fe){if(me)for(a=U.call(n.ownerDocument);n.firstChild;)a.appendChild(n.firstChild);else a=n;return pe&&(a=B.call(k,a,!0)),a}return ce?n.outerHTML:n.innerHTML},S.setConfig=function(e){ke(e),de=!0},S.clearConfig=function(){xe=null,de=!1},S.isValidAttribute=function(e,t,n){xe||ke({});var r=e.toLowerCase(),o=t.toLowerCase();return Ce(r,o,n)},S.addHook=function(e,t){"function"==typeof t&&(G[e]=G[e]||[],G[e].push(t))},S.removeHook=function(e){G[e]&&G[e].pop()},S.removeHooks=function(e){G[e]&&(G[e]=[])},S.removeAllHooks=function(){G={}},S}var o=["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"],i=["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","audio","canvas","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","video","view","vkern"],a=["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"],l=["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmuliscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mpspace","msqrt","mystyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"],s=["#text"],c=["accept","action","align","alt","autocomplete","background","bgcolor","border","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","coords","crossorigin","datetime","default","dir","disabled","download","enctype","face","for","headers","height","hidden","high","href","hreflang","id","integrity","ismap","label","lang","list","loop","low","max","maxlength","media","method","min","multiple","name","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","type","usemap","valign","value","width","xmlns"],d=["accent-height","accumulate","additivive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","tabindex","targetx","targety","transform","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"],u=["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"],f=["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"],m=/\{\{[\s\S]*|[\s\S]*\}\}/gm,p=/<%[\s\S]*|[\s\S]*%>/gm,h=/^data-[\-\w.\u00B7-\uFFFF]/,g=/^aria-[\-\w]+$/,y=/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,v=/^(?:\w+script|data):/i,b=/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205f\u3000]/g,T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A=function(){return"undefined"==typeof window?null:window};return r()});