!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.i18nextXHRBackend=e()}(this,function(){"use strict";function t(t){return r.call(s.call(arguments,1),function(e){if(e)for(var n in e)void 0===t[n]&&(t[n]=e[n])}),t}function e(t,e){if(e&&"object"===(void 0===e?"undefined":l(e))){var n="",o=encodeURIComponent;for(var i in e)n+="&"+o(i)+"="+o(e[i]);if(!n)return t;t=t+(-1!==t.indexOf("?")?"&":"?")+n.slice(1)}return t}function n(t,n,o,i,a){i&&"object"===(void 0===i?"undefined":l(i))&&(a||(i._t=new Date),i=e("",i).slice(1)),n.queryStringParams&&(t=e(t,n.queryStringParams));try{var r;r=XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("MSXML2.XMLHTTP.3.0"),r.open(i?"POST":"GET",t,1),n.crossDomain||r.setRequestHeader("X-Requested-With","XMLHttpRequest"),r.withCredentials=!!n.withCredentials,i&&r.setRequestHeader("Content-type","application/x-www-form-urlencoded"),r.overrideMimeType&&r.overrideMimeType("application/json");var s=n.customHeaders;if(s)for(var u in s)r.setRequestHeader(u,s[u]);r.onreadystatechange=function(){r.readyState>3&&o&&o(r.responseText,r)},r.send(i)}catch(t){console&&console.log(t)}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(){return{loadPath:"/locales/{{lng}}/{{ns}}.json",addPath:"/locales/add/{{lng}}/{{ns}}",allowMultiLoading:!1,parse:JSON.parse,crossDomain:!1,ajax:n}}var a=[],r=a.forEach,s=a.slice,l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),c=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,e),this.init(t,n),this.type="backend"}return u(e,[{key:"init",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.services=e,this.options=t(n,this.options||{},i())}},{key:"readMulti",value:function(t,e,n){var o=this.options.loadPath;"function"==typeof this.options.loadPath&&(o=this.options.loadPath(t,e));var i=this.services.interpolator.interpolate(o,{lng:t.join("+"),ns:e.join("+")});this.loadUrl(i,n)}},{key:"read",value:function(t,e,n){var o=this.options.loadPath;"function"==typeof this.options.loadPath&&(o=this.options.loadPath([t],[e]));var i=this.services.interpolator.interpolate(o,{lng:t,ns:e});this.loadUrl(i,n)}},{key:"loadUrl",value:function(t,e){var n=this;this.options.ajax(t,this.options,function(o,i){if(i.status>=500&&i.status<600)return e("failed loading "+t,!0);if(i.status>=400&&i.status<500)return e("failed loading "+t,!1);var a=void 0,r=void 0;try{a=n.options.parse(o,t)}catch(e){r="failed parsing "+t+" to json"}if(r)return e(r,!1);e(null,a)})}},{key:"create",value:function(t,e,n,o){var i=this;"string"==typeof t&&(t=[t]);var a={};a[n]=o||"",t.forEach(function(t){var n=i.services.interpolator.interpolate(i.options.addPath,{lng:t,ns:e});i.options.ajax(n,i.options,function(t,e){},a)})}}]),e}();return c.type="backend",c});