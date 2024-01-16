!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.i18next=e()}(this,function(){"use strict";function t(t){return null==t?"":""+t}function e(t,e,n){t.forEach(function(t){e[t]&&(n[t]=e[t])})}function n(t,e,n){function o(t){return t&&t.indexOf("###")>-1?t.replace(/###/g,"."):t}function r(){return!t||"string"==typeof t}for(var i="string"!=typeof e?[].concat(e):e.split(".");i.length>1;){if(r())return{};var s=o(i.shift());!t[s]&&n&&(t[s]=new n),t=t[s]}return r()?{}:{obj:t,k:o(i.shift())}}function o(t,e,o){var r=n(t,e,Object);r.obj[r.k]=o}function r(t,e,o,r){var i=n(t,e,Object),s=i.obj,a=i.k;s[a]=s[a]||[],r&&(s[a]=s[a].concat(o)),r||s[a].push(o)}function i(t,e){var o=n(t,e),r=o.obj,i=o.k;if(r)return r[i]}function s(t,e,n){for(var o in e)o in t?"string"==typeof t[o]||t[o]instanceof String||"string"==typeof e[o]||e[o]instanceof String?n&&(t[o]=e[o]):s(t[o],e[o],n):t[o]=e[o];return t}function a(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function l(t){return"string"==typeof t?t.replace(/[&<>"'\/]/g,function(t){return R[t]}):t}function u(t){return t.charAt(0).toUpperCase()+t.slice(1)}function c(){var t={};return P.forEach(function(e){e.lngs.forEach(function(n){t[n]={numbers:e.nr,plurals:A[e.fc]}})}),t}function p(t,e){for(var n=t.indexOf(e);-1!==n;)t.splice(n,1),n=t.indexOf(e)}function f(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){var e={};return t[1]&&(e.defaultValue=t[1]),t[2]&&(e.tDescription=t[2]),e},interpolation:{escapeValue:!0,format:function(t,e,n){return t},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1e3}}}function g(t){return"string"==typeof t.ns&&(t.ns=[t.ns]),"string"==typeof t.fallbackLng&&(t.fallbackLng=[t.fallbackLng]),"string"==typeof t.fallbackNS&&(t.fallbackNS=[t.fallbackNS]),t.whitelist&&t.whitelist.indexOf("cimode")<0&&t.whitelist.push("cimode"),t}function h(){}var d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},y=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},m=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},x=function(){function t(t,e){var n=[],o=!0,r=!1,i=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done)&&(n.push(s.value),!e||n.length!==e);o=!0);}catch(t){r=!0,i=t}finally{try{!o&&a.return&&a.return()}finally{if(r)throw i}}return n}return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),k=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)},S={type:"logger",log:function(t){this.output("log",t)},warn:function(t){this.output("warn",t)},error:function(t){this.output("error",t)},output:function(t,e){var n;console&&console[t]&&(n=console)[t].apply(n,k(e))}},w=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,t),this.init(e,n)}return t.prototype.init=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.prefix=e.prefix||"i18next:",this.logger=t||S,this.options=e,this.debug=e.debug},t.prototype.setDebug=function(t){this.debug=t},t.prototype.log=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"log","",!0)},t.prototype.warn=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","",!0)},t.prototype.error=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"error","")},t.prototype.deprecate=function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return this.forward(e,"warn","WARNING DEPRECATED: ",!0)},t.prototype.forward=function(t,e,n,o){return o&&!this.debug?null:("string"==typeof t[0]&&(t[0]=""+n+this.prefix+" "+t[0]),this.logger[e](t))},t.prototype.create=function(e){return new t(this.logger,y({prefix:this.prefix+":"+e+":"},this.options))},t}(),O=new w,L=function(){function t(){v(this,t),this.observers={}}return t.prototype.on=function(t,e){var n=this;t.split(" ").forEach(function(t){n.observers[t]=n.observers[t]||[],n.observers[t].push(e)})},t.prototype.off=function(t,e){var n=this;this.observers[t]&&this.observers[t].forEach(function(){if(e){var o=n.observers[t].indexOf(e);o>-1&&n.observers[t].splice(o,1)}else delete n.observers[t]})},t.prototype.emit=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];if(this.observers[t]){[].concat(this.observers[t]).forEach(function(t){t.apply(void 0,n)})}if(this.observers["*"]){[].concat(this.observers["*"]).forEach(function(e){var o;e.apply(e,(o=[t]).concat.apply(o,n))})}},t}(),R={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},j=function(t){function e(n){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};v(this,e);var r=b(this,t.call(this));return r.data=n||{},r.options=o,r}return m(e,t),e.prototype.addNamespaces=function(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)},e.prototype.removeNamespaces=function(t){var e=this.options.ns.indexOf(t);e>-1&&this.options.ns.splice(e,1)},e.prototype.getResource=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=o.keySeparator||this.options.keySeparator;void 0===r&&(r=".");var s=[t,e];return n&&"string"!=typeof n&&(s=s.concat(n)),n&&"string"==typeof n&&(s=s.concat(r?n.split(r):n)),t.indexOf(".")>-1&&(s=t.split(".")),i(this.data,s)},e.prototype.addResource=function(t,e,n,r){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{silent:!1},s=this.options.keySeparator;void 0===s&&(s=".");var a=[t,e];n&&(a=a.concat(s?n.split(s):n)),t.indexOf(".")>-1&&(a=t.split("."),r=e,e=a[1]),this.addNamespaces(e),o(this.data,a,r),i.silent||this.emit("added",t,e,n,r)},e.prototype.addResources=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{silent:!1};for(var r in n)"string"==typeof n[r]&&this.addResource(t,e,r,n[r],{silent:!0});o.silent||this.emit("added",t,e,n)},e.prototype.addResourceBundle=function(t,e,n,r,a){var l=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{silent:!1},u=[t,e];t.indexOf(".")>-1&&(u=t.split("."),r=n,n=e,e=u[1]),this.addNamespaces(e);var c=i(this.data,u)||{};r?s(c,n,a):c=y({},c,n),o(this.data,u,c),l.silent||this.emit("added",t,e,n)},e.prototype.removeResourceBundle=function(t,e){this.hasResourceBundle(t,e)&&delete this.data[t][e],this.removeNamespaces(e),this.emit("removed",t,e)},e.prototype.hasResourceBundle=function(t,e){return void 0!==this.getResource(t,e)},e.prototype.getResourceBundle=function(t,e){return e||(e=this.options.defaultNS),"v1"===this.options.compatibilityAPI?y({},this.getResource(t,e)):this.getResource(t,e)},e.prototype.toJSON=function(){return this.data},e}(L),C={processors:{},addPostProcessor:function(t){this.processors[t.name]=t},handle:function(t,e,n,o,r){var i=this;return t.forEach(function(t){i.processors[t]&&(e=i.processors[t].process(e,n,o,r))}),e}},N=function(t){function n(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,n);var i=b(this,t.call(this));return e(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],o,i),i.options=r,i.logger=O.create("translator"),i}return m(n,t),n.prototype.changeLanguage=function(t){t&&(this.language=t)},n.prototype.exists=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{interpolation:{}},n=this.resolve(t,e);return n&&void 0!==n.res},n.prototype.extractFromKey=function(t,e){var n=e.nsSeparator||this.options.nsSeparator;void 0===n&&(n=":");var o=e.keySeparator||this.options.keySeparator||".",r=e.ns||this.options.defaultNS;if(n&&t.indexOf(n)>-1){var i=t.split(n);(n!==o||n===o&&this.options.ns.indexOf(i[0])>-1)&&(r=i.shift()),t=i.join(o)}return"string"==typeof r&&(r=[r]),{key:t,namespaces:r}},n.prototype.translate=function(t,e){var n=this;if("object"!==(void 0===e?"undefined":d(e))&&this.options.overloadTranslationOptionHandler&&(e=this.options.overloadTranslationOptionHandler(arguments)),e||(e={}),void 0===t||null===t||""===t)return"";"number"==typeof t&&(t=String(t)),"string"==typeof t&&(t=[t]);var o=e.keySeparator||this.options.keySeparator||".",r=this.extractFromKey(t[t.length-1],e),i=r.key,s=r.namespaces,a=s[s.length-1],l=e.lng||this.language,u=e.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(l&&"cimode"===l.toLowerCase()){if(u){var c=e.nsSeparator||this.options.nsSeparator;return a+c+i}return i}var p=this.resolve(t,e),f=p&&p.res,g=p&&p.usedKey||i,h=Object.prototype.toString.apply(f),v=["[object Number]","[object Function]","[object RegExp]"],m=void 0!==e.joinArrays?e.joinArrays:this.options.joinArrays,b="string"!=typeof f&&"boolean"!=typeof f&&"number"!=typeof f;if(f&&b&&v.indexOf(h)<0&&(!m||"[object Array]"!==h)){if(!e.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(g,f,e):"key '"+i+" ("+this.language+")' returned an object instead of string.";if(e.keySeparator||this.options.keySeparator){var x="[object Array]"===h?[]:{};for(var k in f)if(Object.prototype.hasOwnProperty.call(f,k)){var S=""+g+o+k;x[k]=this.translate(S,y({},e,{joinArrays:!1,ns:s})),x[k]===S&&(x[k]=f[k])}f=x}}else if(m&&"[object Array]"===h)(f=f.join(m))&&(f=this.extendTranslation(f,t,e));else{var w=!1,O=!1;this.isValidLookup(f)||void 0===e.defaultValue||(w=!0,f=e.defaultValue),this.isValidLookup(f)||(O=!0,f=i);var L=e.defaultValue&&e.defaultValue!==f&&this.options.updateMissing;if(O||w||L){this.logger.log(L?"updateKey":"missingKey",l,a,i,L?e.defaultValue:f);var R=[],j=this.languageUtils.getFallbackCodes(this.options.fallbackLng,e.lng||this.language);if("fallback"===this.options.saveMissingTo&&j&&j[0])for(var C=0;C<j.length;C++)R.push(j[C]);else"all"===this.options.saveMissingTo?R=this.languageUtils.toResolveHierarchy(e.lng||this.language):R.push(e.lng||this.language);var N=function(t,o){n.options.missingKeyHandler?n.options.missingKeyHandler(t,a,o,L?e.defaultValue:f,L,e):n.backendConnector&&n.backendConnector.saveMissing&&n.backendConnector.saveMissing(t,a,o,L?e.defaultValue:f,L,e),n.emit("missingKey",t,a,o,f)};this.options.saveMissing&&(this.options.saveMissingPlurals&&e.count?R.forEach(function(t){n.pluralResolver.getPluralFormsOfKey(t,i).forEach(function(e){return N([t],e)})}):N(R,i))}f=this.extendTranslation(f,t,e),O&&f===i&&this.options.appendNamespaceToMissingKey&&(f=a+":"+i),O&&this.options.parseMissingKeyHandler&&(f=this.options.parseMissingKeyHandler(f))}return f},n.prototype.extendTranslation=function(t,e,n){var o=this;n.interpolation&&this.interpolator.init(y({},n,{interpolation:y({},this.options.interpolation,n.interpolation)}));var r=n.replace&&"string"!=typeof n.replace?n.replace:n;this.options.interpolation.defaultVariables&&(r=y({},this.options.interpolation.defaultVariables,r)),t=this.interpolator.interpolate(t,r,n.lng||this.language),!1!==n.nest&&(t=this.interpolator.nest(t,function(){return o.translate.apply(o,arguments)},n)),n.interpolation&&this.interpolator.reset();var i=n.postProcess||this.options.postProcess,s="string"==typeof i?[i]:i;return void 0!==t&&null!==t&&s&&s.length&&!1!==n.applyPostProcessor&&(t=C.handle(s,t,e,n,this)),t},n.prototype.resolve=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=void 0,r=void 0;return"string"==typeof t&&(t=[t]),t.forEach(function(t){if(!e.isValidLookup(o)){var i=e.extractFromKey(t,n),s=i.key;r=s;var a=i.namespaces;e.options.fallbackNS&&(a=a.concat(e.options.fallbackNS));var l=void 0!==n.count&&"string"!=typeof n.count,u=void 0!==n.context&&"string"==typeof n.context&&""!==n.context,c=n.lngs?n.lngs:e.languageUtils.toResolveHierarchy(n.lng||e.language);a.forEach(function(t){e.isValidLookup(o)||c.forEach(function(r){if(!e.isValidLookup(o)){var i=s,a=[i],c=void 0;l&&(c=e.pluralResolver.getSuffix(r,n.count)),l&&u&&a.push(i+c),u&&a.push(i+=""+e.options.contextSeparator+n.context),l&&a.push(i+=c);for(var p=void 0;p=a.pop();)e.isValidLookup(o)||(o=e.getResource(r,t,p,n))}})})}}),{res:o,usedKey:r}},n.prototype.isValidLookup=function(t){return!(void 0===t||!this.options.returnNull&&null===t||!this.options.returnEmptyString&&""===t)},n.prototype.getResource=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return this.resourceStore.getResource(t,e,n,o)},n}(L),E=function(){function t(e){v(this,t),this.options=e,this.whitelist=this.options.whitelist||!1,this.logger=O.create("languageUtils")}return t.prototype.getScriptPartFromCode=function(t){if(!t||t.indexOf("-")<0)return null;var e=t.split("-");return 2===e.length?null:(e.pop(),this.formatLanguageCode(e.join("-")))},t.prototype.getLanguagePartFromCode=function(t){if(!t||t.indexOf("-")<0)return t;var e=t.split("-");return this.formatLanguageCode(e[0])},t.prototype.formatLanguageCode=function(t){if("string"==typeof t&&t.indexOf("-")>-1){var e=["hans","hant","latn","cyrl","cans","mong","arab"],n=t.split("-");return this.options.lowerCaseLng?n=n.map(function(t){return t.toLowerCase()}):2===n.length?(n[0]=n[0].toLowerCase(),n[1]=n[1].toUpperCase(),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=u(n[1].toLowerCase()))):3===n.length&&(n[0]=n[0].toLowerCase(),2===n[1].length&&(n[1]=n[1].toUpperCase()),"sgn"!==n[0]&&2===n[2].length&&(n[2]=n[2].toUpperCase()),e.indexOf(n[1].toLowerCase())>-1&&(n[1]=u(n[1].toLowerCase())),e.indexOf(n[2].toLowerCase())>-1&&(n[2]=u(n[2].toLowerCase()))),n.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t},t.prototype.isWhitelisted=function(t){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(t=this.getLanguagePartFromCode(t)),!this.whitelist||!this.whitelist.length||this.whitelist.indexOf(t)>-1},t.prototype.getFallbackCodes=function(t,e){if(!t)return[];if("string"==typeof t&&(t=[t]),"[object Array]"===Object.prototype.toString.apply(t))return t;if(!e)return t.default||[];var n=t[e];return n||(n=t[this.getScriptPartFromCode(e)]),n||(n=t[this.formatLanguageCode(e)]),n||(n=t.default),n||[]},t.prototype.toResolveHierarchy=function(t,e){var n=this,o=this.getFallbackCodes(e||this.options.fallbackLng||[],t),r=[],i=function(t){t&&(n.isWhitelisted(t)?r.push(t):n.logger.warn("rejecting non-whitelisted language code: "+t))};return"string"==typeof t&&t.indexOf("-")>-1?("languageOnly"!==this.options.load&&i(this.formatLanguageCode(t)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&i(this.getScriptPartFromCode(t)),"currentOnly"!==this.options.load&&i(this.getLanguagePartFromCode(t))):"string"==typeof t&&i(this.formatLanguageCode(t)),o.forEach(function(t){r.indexOf(t)<0&&i(n.formatLanguageCode(t))}),r},t}(),P=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","he","hi","hu","hy","ia","it","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","id","ja","jbo","ka","kk","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],A={1:function(t){return Number(t>1)},2:function(t){return Number(1!=t)},3:function(t){return 0},4:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},5:function(t){return Number(0===t?0:1==t?1:2==t?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5)},6:function(t){return Number(1==t?0:t>=2&&t<=4?1:2)},7:function(t){return Number(1==t?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2)},8:function(t){return Number(1==t?0:2==t?1:8!=t&&11!=t?2:3)},9:function(t){return Number(t>=2)},10:function(t){return Number(1==t?0:2==t?1:t<7?2:t<11?3:4)},11:function(t){return Number(1==t||11==t?0:2==t||12==t?1:t>2&&t<20?2:3)},12:function(t){return Number(t%10!=1||t%100==11)},13:function(t){return Number(0!==t)},14:function(t){return Number(1==t?0:2==t?1:3==t?2:3)},15:function(t){return Number(t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2)},16:function(t){return Number(t%10==1&&t%100!=11?0:0!==t?1:2)},17:function(t){return Number(1==t||t%10==1?0:1)},18:function(t){return Number(0==t?0:1==t?1:2)},19:function(t){return Number(1==t?0:0===t||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3)},20:function(t){return Number(1==t?0:0===t||t%100>0&&t%100<20?1:2)},21:function(t){return Number(t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0)}},M=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};v(this,t),this.languageUtils=e,this.options=n,this.logger=O.create("pluralResolver"),this.rules=c()}return t.prototype.addRule=function(t,e){this.rules[t]=e},t.prototype.getRule=function(t){return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]},t.prototype.needsPlural=function(t){var e=this.getRule(t);return e&&e.numbers.length>1},t.prototype.getPluralFormsOfKey=function(t,e){var n=this,o=[];return this.getRule(t).numbers.forEach(function(r){var i=n.getSuffix(t,r);o.push(""+e+i)}),o},t.prototype.getSuffix=function(t,e){var n=this,o=this.getRule(t);if(o){var r=o.noAbs?o.plurals(e):o.plurals(Math.abs(e)),i=o.numbers[r];this.options.simplifyPluralSuffix&&2===o.numbers.length&&1===o.numbers[0]&&(2===i?i="plural":1===i&&(i=""));var s=function(){return n.options.prepend&&i.toString()?n.options.prepend+i.toString():i.toString()};return"v1"===this.options.compatibilityJSON?1===i?"":"number"==typeof i?"_plural_"+i.toString():s():"v2"===this.options.compatibilityJSON||2===o.numbers.length&&1===o.numbers[0]?s():2===o.numbers.length&&1===o.numbers[0]?s():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}return this.logger.warn("no plural rule found for: "+t),""},t}(),U=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};v(this,e),this.logger=O.create("interpolator"),this.init(t,!0)}return e.prototype.init=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};arguments[1]&&(this.options=t,this.format=t.interpolation&&t.interpolation.format||function(t){return t},this.escape=t.interpolation&&t.interpolation.escape||l),t.interpolation||(t.interpolation={escapeValue:!0});var e=t.interpolation;this.escapeValue=void 0===e.escapeValue||e.escapeValue,this.prefix=e.prefix?a(e.prefix):e.prefixEscaped||"{{",this.suffix=e.suffix?a(e.suffix):e.suffixEscaped||"}}",this.formatSeparator=e.formatSeparator?e.formatSeparator:e.formatSeparator||",",this.unescapePrefix=e.unescapeSuffix?"":e.unescapePrefix||"-",this.unescapeSuffix=this.unescapePrefix?"":e.unescapeSuffix||"",this.nestingPrefix=e.nestingPrefix?a(e.nestingPrefix):e.nestingPrefixEscaped||a("$t("),this.nestingSuffix=e.nestingSuffix?a(e.nestingSuffix):e.nestingSuffixEscaped||a(")"),this.maxReplaces=e.maxReplaces?e.maxReplaces:1e3,this.resetRegExp()},e.prototype.reset=function(){this.options&&this.init(this.options)},e.prototype.resetRegExp=function(){var t=this.prefix+"(.+?)"+this.suffix;this.regexp=new RegExp(t,"g");var e=""+this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix;this.regexpUnescape=new RegExp(e,"g");var n=this.nestingPrefix+"(.+?)"+this.nestingSuffix;this.nestingRegexp=new RegExp(n,"g")},e.prototype.interpolate=function(e,n,o){function r(t){return t.replace(/\$/g,"$$$$")}var s=this,a=void 0,l=void 0,u=void 0,c=function(t){if(t.indexOf(s.formatSeparator)<0)return i(n,t);var e=t.split(s.formatSeparator),r=e.shift().trim(),a=e.join(s.formatSeparator).trim();return s.format(i(n,r),a,o)};for(this.resetRegExp(),u=0;(a=this.regexpUnescape.exec(e))&&(l=c(a[1].trim()),e=e.replace(a[0],l),this.regexpUnescape.lastIndex=0,!(++u>=this.maxReplaces)););for(u=0;(a=this.regexp.exec(e))&&(l=c(a[1].trim()),"string"!=typeof l&&(l=t(l)),l||(this.logger.warn("missed to pass in variable "+a[1]+" for interpolating "+e),l=""),l=r(this.escapeValue?this.escape(l):l),e=e.replace(a[0],l),this.regexp.lastIndex=0,!(++u>=this.maxReplaces)););return e},e.prototype.nest=function(e,n){function o(t,e){if(t.indexOf(",")<0)return t;var n=t.split(",");t=n.shift();var o=n.join(",");o=this.interpolate(o,a),o=o.replace(/'/g,'"');try{a=JSON.parse(o),e&&(a=y({},e,a))}catch(e){this.logger.error("failed parsing options string in nesting for key "+t,e)}return t}var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=void 0,s=void 0,a=y({},r);for(a.applyPostProcessor=!1;i=this.nestingRegexp.exec(e);){if((s=n(o.call(this,i[1].trim(),a),a))&&i[0]===e&&"string"!=typeof s)return s;"string"!=typeof s&&(s=t(s)),s||(this.logger.warn("missed to resolve "+i[1]+" for nesting "+e),s=""),e=e.replace(i[0],s),this.regexp.lastIndex=0}return e},e}(),T=function(t){function e(n,o,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};v(this,e);var s=b(this,t.call(this));return s.backend=n,s.store=o,s.languageUtils=r.languageUtils,s.options=i,s.logger=O.create("backendConnector"),s.state={},s.queue=[],s.backend&&s.backend.init&&s.backend.init(r,i.backend,i),s}return m(e,t),e.prototype.queueLoad=function(t,e,n){var o=this,r=[],i=[],s=[],a=[];return t.forEach(function(t){var n=!0;e.forEach(function(e){var s=t+"|"+e;o.store.hasResourceBundle(t,e)?o.state[s]=2:o.state[s]<0||(1===o.state[s]?i.indexOf(s)<0&&i.push(s):(o.state[s]=1,n=!1,i.indexOf(s)<0&&i.push(s),r.indexOf(s)<0&&r.push(s),a.indexOf(e)<0&&a.push(e)))}),n||s.push(t)}),(r.length||i.length)&&this.queue.push({pending:i,loaded:{},errors:[],callback:n}),{toLoad:r,pending:i,toLoadLanguages:s,toLoadNamespaces:a}},e.prototype.loaded=function(t,e,n){var o=this,i=t.split("|"),s=x(i,2),a=s[0],l=s[1];e&&this.emit("failedLoading",a,l,e),n&&this.store.addResourceBundle(a,l,n),this.state[t]=e?-1:2,this.queue.forEach(function(n){r(n.loaded,[a],l),p(n.pending,t),e&&n.errors.push(e),0!==n.pending.length||n.done||(o.emit("loaded",n.loaded),n.done=!0,n.errors.length?n.callback(n.errors):n.callback())}),this.queue=this.queue.filter(function(t){return!t.done})},e.prototype.read=function(t,e,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,r=this,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:250,s=arguments[5];return t.length?this.backend[n](t,e,function(a,l){if(a&&l&&o<5)return void setTimeout(function(){r.read.call(r,t,e,n,o+1,2*i,s)},i);s(a,l)}):s(null,{})},e.prototype.load=function(t,e,n){var o=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),n&&n();var r=y({},this.backend.options,this.options.backend);"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]);var s=this.queueLoad(t,e,n);if(!s.toLoad.length)return s.pending.length||n(),null;r.allowMultiLoading&&this.backend.readMulti?this.read(s.toLoadLanguages,s.toLoadNamespaces,"readMulti",null,null,function(t,e){t&&o.logger.warn("loading namespaces "+s.toLoadNamespaces.join(", ")+" for languages "+s.toLoadLanguages.join(", ")+" via multiloading failed",t),!t&&e&&o.logger.log("successfully loaded namespaces "+s.toLoadNamespaces.join(", ")+" for languages "+s.toLoadLanguages.join(", ")+" via multiloading",e),s.toLoad.forEach(function(n){var r=n.split("|"),s=x(r,2),a=s[0],l=s[1],u=i(e,[a,l]);if(u)o.loaded(n,t,u);else{var c="loading namespace "+l+" for language "+a+" via multiloading failed";o.loaded(n,c),o.logger.error(c)}})}):s.toLoad.forEach(function(t){o.loadOne(t)})},e.prototype.reload=function(t,e){var n=this;this.backend||this.logger.warn("No backend was added via i18next.use. Will not load resources.");var o=y({},this.backend.options,this.options.backend);"string"==typeof t&&(t=this.languageUtils.toResolveHierarchy(t)),"string"==typeof e&&(e=[e]),o.allowMultiLoading&&this.backend.readMulti?this.read(t,e,"readMulti",null,null,function(o,r){o&&n.logger.warn("reloading namespaces "+e.join(", ")+" for languages "+t.join(", ")+" via multiloading failed",o),!o&&r&&n.logger.log("successfully reloaded namespaces "+e.join(", ")+" for languages "+t.join(", ")+" via multiloading",r),t.forEach(function(t){e.forEach(function(e){var s=i(r,[t,e]);if(s)n.loaded(t+"|"+e,o,s);else{var a="reloading namespace "+e+" for language "+t+" via multiloading failed";n.loaded(t+"|"+e,a),n.logger.error(a)}})})}):t.forEach(function(t){e.forEach(function(e){n.loadOne(t+"|"+e,"re")})})},e.prototype.loadOne=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=t.split("|"),r=x(o,2),i=r[0],s=r[1];this.read(i,s,"read",null,null,function(o,r){o&&e.logger.warn(n+"loading namespace "+s+" for language "+i+" failed",o),!o&&r&&e.logger.log(n+"loaded namespace "+s+" for language "+i,r),e.loaded(t,o,r)})},e.prototype.saveMissing=function(t,e,n,o,r){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};this.backend&&this.backend.create&&this.backend.create(t,e,n,o,null,y({},i,{isUpdate:r})),t&&t[0]&&this.store.addResource(t[0],e,n,o)},e}(L),V=function(t){function e(n,o,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};v(this,e);var s=b(this,t.call(this));return s.cache=n,s.store=o,s.services=r,s.options=i,s.logger=O.create("cacheConnector"),s.cache&&s.cache.init&&s.cache.init(r,i.cache,i),s}return m(e,t),e.prototype.load=function(t,e,n){var o=this;if(!this.cache)return n&&n();var r=y({},this.cache.options,this.options.cache),i="string"==typeof t?this.services.languageUtils.toResolveHierarchy(t):t;r.enabled?this.cache.load(i,function(t,e){if(t&&o.logger.error("loading languages "+i.join(", ")+" from cache failed",t),e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r))for(var s in e[r])if(Object.prototype.hasOwnProperty.call(e[r],s)&&"i18nStamp"!==s){var a=e[r][s];a&&o.store.addResourceBundle(r,s,a)}n&&n()}):n&&n()},e.prototype.save=function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)},e}(L);return new(function(t){function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];v(this,e);var r=b(this,t.call(this));if(r.options=g(n),r.services={},r.logger=O,r.modules={external:[]},o&&!r.isInitialized&&!n.isClone){var i;if(!r.options.initImmediate)return i=r.init(n,o),b(r,i);setTimeout(function(){r.init(n,o)},0)}return r}return m(e,t),e.prototype.init=function(){function t(t){return t?"function"==typeof t?new t:t:null}var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments[1];if("function"==typeof n&&(o=n,n={}),this.options=y({},f(),this.options,g(n)),this.format=this.options.interpolation.format,o||(o=h),!this.options.isClone){this.modules.logger?O.init(t(this.modules.logger),this.options):O.init(null,this.options);var r=new E(this.options);this.store=new j(this.options.resources,this.options);var i=this.services;i.logger=O,i.resourceStore=this.store,i.resourceStore.on("added removed",function(t,e){i.cacheConnector.save()}),i.languageUtils=r,i.pluralResolver=new M(r,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),i.interpolator=new U(this.options),i.backendConnector=new T(t(this.modules.backend),i.resourceStore,i,this.options),i.backendConnector.on("*",function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e.emit.apply(e,[t].concat(o))}),i.backendConnector.on("loaded",function(t){i.cacheConnector.save()}),i.cacheConnector=new V(t(this.modules.cache),i.resourceStore,i,this.options),i.cacheConnector.on("*",function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e.emit.apply(e,[t].concat(o))}),this.modules.languageDetector&&(i.languageDetector=t(this.modules.languageDetector),i.languageDetector.init(i,this.options.detection,this.options)),this.translator=new N(this.services,this.options),this.translator.on("*",function(t){for(var n=arguments.length,o=Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];e.emit.apply(e,[t].concat(o))}),this.modules.external.forEach(function(t){t.init&&t.init(e)})}["getResource","addResource","addResources","addResourceBundle","removeResourceBundle","hasResourceBundle","getResourceBundle"].forEach(function(t){e[t]=function(){var n;return(n=e.store)[t].apply(n,arguments)}});var s=function(){e.changeLanguage(e.options.lng,function(t,n){e.isInitialized=!0,e.logger.log("initialized",e.options),e.emit("initialized",e.options),o(t,n)})};return this.options.resources||!this.options.initImmediate?s():setTimeout(s,0),this},e.prototype.loadResources=function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;if(this.options.resources)e(null);else{if(this.language&&"cimode"===this.language.toLowerCase())return e();var n=[],o=function(e){if(e){t.services.languageUtils.toResolveHierarchy(e).forEach(function(t){n.indexOf(t)<0&&n.push(t)})}};if(this.language)o(this.language);else{this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(t){return o(t)})}this.options.preload&&this.options.preload.forEach(function(t){return o(t)}),this.services.cacheConnector.load(n,this.options.ns,function(){t.services.backendConnector.load(n,t.options.ns,e)})}},e.prototype.reloadResources=function(t,e){t||(t=this.languages),e||(e=this.options.ns),this.services.backendConnector.reload(t,e)},e.prototype.use=function(t){return"backend"===t.type&&(this.modules.backend=t),"cache"===t.type&&(this.modules.cache=t),("logger"===t.type||t.log&&t.warn&&t.error)&&(this.modules.logger=t),"languageDetector"===t.type&&(this.modules.languageDetector=t),"postProcessor"===t.type&&C.addPostProcessor(t),"3rdParty"===t.type&&this.modules.external.push(t),this},
e.prototype.changeLanguage=function(t,e){var n=this,o=function(t,o){n.translator.changeLanguage(o),o&&(n.emit("languageChanged",o),n.logger.log("languageChanged",o)),e&&e(t,function(){return n.t.apply(n,arguments)})},r=function(t){t&&(n.language=t,n.languages=n.services.languageUtils.toResolveHierarchy(t),n.translator.language||n.translator.changeLanguage(t),n.services.languageDetector&&n.services.languageDetector.cacheUserLanguage(t)),n.loadResources(function(e){o(e,t)})};t||!this.services.languageDetector||this.services.languageDetector.async?!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect(r):r(t):r(this.services.languageDetector.detect())},e.prototype.getFixedT=function(t,e){var n=this,o=function t(e,o){for(var r=arguments.length,i=Array(r>2?r-2:0),s=2;s<r;s++)i[s-2]=arguments[s];var a=y({},o);return"object"!==(void 0===o?"undefined":d(o))&&(a=n.options.overloadTranslationOptionHandler([e,o].concat(i))),a.lng=a.lng||t.lng,a.lngs=a.lngs||t.lngs,a.ns=a.ns||t.ns,n.t(e,a)};return"string"==typeof t?o.lng=t:o.lngs=t,o.ns=e,o},e.prototype.t=function(){var t;return this.translator&&(t=this.translator).translate.apply(t,arguments)},e.prototype.exists=function(){var t;return this.translator&&(t=this.translator).exists.apply(t,arguments)},e.prototype.setDefaultNamespace=function(t){this.options.defaultNS=t},e.prototype.loadNamespaces=function(t,e){var n=this;if(!this.options.ns)return e&&e();"string"==typeof t&&(t=[t]),t.forEach(function(t){n.options.ns.indexOf(t)<0&&n.options.ns.push(t)}),this.loadResources(e)},e.prototype.loadLanguages=function(t,e){"string"==typeof t&&(t=[t]);var n=this.options.preload||[],o=t.filter(function(t){return n.indexOf(t)<0});if(!o.length)return e();this.options.preload=n.concat(o),this.loadResources(e)},e.prototype.dir=function(t){return t||(t=this.languages&&this.languages.length>0?this.languages[0]:this.language),t?["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(t))>=0?"rtl":"ltr":"rtl"},e.prototype.createInstance=function(){return new e(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},arguments[1])},e.prototype.cloneInstance=function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,r=y({},this.options,n,{isClone:!0}),i=new e(r);return["store","services","language"].forEach(function(e){i[e]=t[e]}),i.translator=new N(i.services,i.options),i.translator.on("*",function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];i.emit.apply(i,[t].concat(n))}),i.init(r,o),i.translator.options=i.options,i},e}(L))});
