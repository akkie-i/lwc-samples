function e(e){var t=e.default;if("function"==typeof t){var r=function e(){if(this instanceof e){var r=[null];r.push.apply(r,arguments);var a=Function.bind.apply(t,r);return new a}return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var a=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,a.get?a:{enumerable:!0,get:function(){return e[t]}})})),r}var t={},r=2147483647,a=/[^\x20-\x7E]/,n=/[\x2E\u3002\uFF0E\uFF61]/g,i={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},o=Math.floor,s=String.fromCharCode;
/*! https://mths.be/punycode v1.4.1 by @mathias */function u(e){throw new RangeError(i[e])}function h(e,t){return e+22+75*(e<26)-((0!=t)<<5)}function f(e,t,r){var a=0;for(e=r?o(e/700):e>>1,e+=o(e/t);e>455;a+=36)e=o(e/35);return o(a+36*e/(e+38))}function c(e){return function(e,t){var r=e.split("@"),a="";r.length>1&&(a=r[0]+"@",e=r[1]);var i=function(e,t){for(var r=e.length,a=[];r--;)a[r]=t(e[r]);return a}((e=e.replace(n,".")).split("."),t).join(".");return a+i}(e,(function(e){return a.test(e)?"xn--"+function(e){var t,a,n,i,c,m,l,p,d,v,y,g,F,A,b,w=[];for(e=function(e){for(var t,r,a=[],n=0,i=e.length;n<i;)(t=e.charCodeAt(n++))>=55296&&t<=56319&&n<i?56320==(64512&(r=e.charCodeAt(n++)))?a.push(((1023&t)<<10)+(1023&r)+65536):(a.push(t),n--):a.push(t);return a}(e),g=e.length,t=128,a=0,c=72,m=0;m<g;++m)(y=e[m])<128&&w.push(s(y));for(n=i=w.length,i&&w.push("-");n<g;){for(l=r,m=0;m<g;++m)(y=e[m])>=t&&y<l&&(l=y);for(l-t>o((r-a)/(F=n+1))&&u("overflow"),a+=(l-t)*F,t=l,m=0;m<g;++m)if((y=e[m])<t&&++a>r&&u("overflow"),y==t){for(p=a,d=36;!(p<(v=d<=c?1:d>=c+26?26:d-c));d+=36)b=p-v,A=36-v,w.push(s(h(v+b%A,0))),p=o(b/A);w.push(s(h(p,0))),c=f(a,F,n==i),a=0,++n}++a,++t}return w.join("")}(e):e}))}var m="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};m.setTimeout,m.clearTimeout;var l=m.performance||{};function p(e){return null===e}function d(e){return"string"==typeof e}function v(e){return"object"==typeof e&&null!==e}function y(e,t){return Object.prototype.hasOwnProperty.call(e,t)}l.now||l.mozNow||l.msNow||l.oNow||l.webkitNow;var g=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function F(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}}function A(e,t){if(e.map)return e.map(t);for(var r=[],a=0;a<e.length;a++)r.push(t(e[a],a));return r}var b=Object.keys||function(e){var t=[];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.push(r);return t};function w(e,t,r,a){t=t||"&",r=r||"=";var n={};if("string"!=typeof e||0===e.length)return n;var i=/\+/g;e=e.split(t);var o=1e3;a&&"number"==typeof a.maxKeys&&(o=a.maxKeys);var s=e.length;o>0&&s>o&&(s=o);for(var u=0;u<s;++u){var h,f,c,m,l=e[u].replace(i,"%20"),p=l.indexOf(r);p>=0?(h=l.substr(0,p),f=l.substr(p+1)):(h=l,f=""),c=decodeURIComponent(h),m=decodeURIComponent(f),y(n,c)?g(n[c])?n[c].push(m):n[c]=[n[c],m]:n[c]=m}return n}var x={parse:I,resolve:U,resolveObject:T,format:V,Url:E};function E(){this.protocol=null,this.slashes=null,this.auth=null,this.host=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.query=null,this.pathname=null,this.path=null,this.href=null}var z=/^([a-z0-9.+-]+:)/i,Z=/:[0-9]*$/,$=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,O=["{","}","|","\\","^","`"].concat(["<",">",'"',"`"," ","\r","\n","\t"]),j=["'"].concat(O),S=["%","/","?",";","#"].concat(j),_=["/","?","#"],P=/^[+a-z0-9A-Z_-]{0,63}$/,R=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,C={javascript:!0,"javascript:":!0},k={javascript:!0,"javascript:":!0},q={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function I(e,t,r){if(e&&v(e)&&e instanceof E)return e;var a=new E;return a.parse(e,t,r),a}function M(e,t,r,a){if(!d(t))throw new TypeError("Parameter 'url' must be a string, not "+typeof t);var n=t.indexOf("?"),i=-1!==n&&n<t.indexOf("#")?"?":"#",o=t.split(i);o[0]=o[0].replace(/\\/g,"/");var s=t=o.join(i);if(s=s.trim(),!a&&1===t.split("#").length){var u=$.exec(s);if(u)return e.path=s,e.href=s,e.pathname=u[1],u[2]?(e.search=u[2],e.query=r?w(e.search.substr(1)):e.search.substr(1)):r&&(e.search="",e.query={}),e}var h,f,m,l,p=z.exec(s);if(p){var v=(p=p[0]).toLowerCase();e.protocol=v,s=s.substr(p.length)}if(a||p||s.match(/^\/\/[^@\/]+@[^@\/]+/)){var y="//"===s.substr(0,2);!y||p&&k[p]||(s=s.substr(2),e.slashes=!0)}if(!k[p]&&(y||p&&!q[p])){var g,F,A=-1;for(h=0;h<_.length;h++)-1!==(f=s.indexOf(_[h]))&&(-1===A||f<A)&&(A=f);for(-1!==(F=-1===A?s.lastIndexOf("@"):s.lastIndexOf("@",A))&&(g=s.slice(0,F),s=s.slice(F+1),e.auth=decodeURIComponent(g)),A=-1,h=0;h<S.length;h++)-1!==(f=s.indexOf(S[h]))&&(-1===A||f<A)&&(A=f);-1===A&&(A=s.length),e.host=s.slice(0,A),s=s.slice(A),D(e),e.hostname=e.hostname||"";var b="["===e.hostname[0]&&"]"===e.hostname[e.hostname.length-1];if(!b){var x=e.hostname.split(/\./);for(h=0,m=x.length;h<m;h++){var E=x[h];if(E&&!E.match(P)){for(var Z="",O=0,I=E.length;O<I;O++)E.charCodeAt(O)>127?Z+="x":Z+=E[O];if(!Z.match(P)){var M=x.slice(0,h),V=x.slice(h+1),U=E.match(R);U&&(M.push(U[1]),V.unshift(U[2])),V.length&&(s="/"+V.join(".")+s),e.hostname=M.join(".");break}}}}e.hostname.length>255?e.hostname="":e.hostname=e.hostname.toLowerCase(),b||(e.hostname=c(e.hostname)),l=e.port?":"+e.port:"";var T=e.hostname||"";e.host=T+l,e.href+=e.host,b&&(e.hostname=e.hostname.substr(1,e.hostname.length-2),"/"!==s[0]&&(s="/"+s))}if(!C[v])for(h=0,m=j.length;h<m;h++){var L=j[h];if(-1!==s.indexOf(L)){var J=encodeURIComponent(L);J===L&&(J=escape(L)),s=s.split(L).join(J)}}var G=s.indexOf("#");-1!==G&&(e.hash=s.substr(G),s=s.slice(0,G));var H=s.indexOf("?");if(-1!==H?(e.search=s.substr(H),e.query=s.substr(H+1),r&&(e.query=w(e.query)),s=s.slice(0,H)):r&&(e.search="",e.query={}),s&&(e.pathname=s),q[v]&&e.hostname&&!e.pathname&&(e.pathname="/"),e.pathname||e.search){l=e.pathname||"";var B=e.search||"";e.path=l+B}return e.href=N(e),e}function V(e){return d(e)&&(e=M({},e)),N(e)}function N(e){var t=e.auth||"";t&&(t=(t=encodeURIComponent(t)).replace(/%3A/i,":"),t+="@");var r,a,n,i,o=e.protocol||"",s=e.pathname||"",u=e.hash||"",h=!1,f="";e.host?h=t+e.host:e.hostname&&(h=t+(-1===e.hostname.indexOf(":")?e.hostname:"["+this.hostname+"]"),e.port&&(h+=":"+e.port)),e.query&&v(e.query)&&Object.keys(e.query).length&&(r=e.query,a=a||"&",n=n||"=",null===r&&(r=void 0),f="object"==typeof r?A(b(r),(function(e){var t=encodeURIComponent(F(e))+n;return g(r[e])?A(r[e],(function(e){return t+encodeURIComponent(F(e))})).join(a):t+encodeURIComponent(F(r[e]))})).join(a):i?encodeURIComponent(F(i))+n+encodeURIComponent(F(r)):"");var c=e.search||f&&"?"+f||"";return o&&":"!==o.substr(-1)&&(o+=":"),e.slashes||(!o||q[o])&&!1!==h?(h="//"+(h||""),s&&"/"!==s.charAt(0)&&(s="/"+s)):h||(h=""),u&&"#"!==u.charAt(0)&&(u="#"+u),c&&"?"!==c.charAt(0)&&(c="?"+c),o+h+(s=s.replace(/[?#]/g,(function(e){return encodeURIComponent(e)})))+(c=c.replace("#","%23"))+u}function U(e,t){return I(e,!1,!0).resolve(t)}function T(e,t){return e?I(e,!1,!0).resolveObject(t):t}function D(e){var t=e.host,r=Z.exec(t);r&&(":"!==(r=r[0])&&(e.port=r.substr(1)),t=t.substr(0,t.length-r.length)),t&&(e.hostname=t)}E.prototype.parse=function(e,t,r){return M(this,e,t,r)},E.prototype.format=function(){return N(this)},E.prototype.resolve=function(e){return this.resolveObject(I(e,!1,!0)).format()},E.prototype.resolveObject=function(e){if(d(e)){var t=new E;t.parse(e,!1,!0),e=t}for(var r,a=new E,n=Object.keys(this),i=0;i<n.length;i++){var o=n[i];a[o]=this[o]}if(a.hash=e.hash,""===e.href)return a.href=a.format(),a;if(e.slashes&&!e.protocol){for(var s=Object.keys(e),u=0;u<s.length;u++){var h=s[u];"protocol"!==h&&(a[h]=e[h])}return q[a.protocol]&&a.hostname&&!a.pathname&&(a.path=a.pathname="/"),a.href=a.format(),a}if(e.protocol&&e.protocol!==a.protocol){if(!q[e.protocol]){for(var f=Object.keys(e),c=0;c<f.length;c++){var m=f[c];a[m]=e[m]}return a.href=a.format(),a}if(a.protocol=e.protocol,e.host||k[e.protocol])a.pathname=e.pathname;else{for(r=(e.pathname||"").split("/");r.length&&!(e.host=r.shift()););e.host||(e.host=""),e.hostname||(e.hostname=""),""!==r[0]&&r.unshift(""),r.length<2&&r.unshift(""),a.pathname=r.join("/")}if(a.search=e.search,a.query=e.query,a.host=e.host||"",a.auth=e.auth,a.hostname=e.hostname||e.host,a.port=e.port,a.pathname||a.search){var l=a.pathname||"",v=a.search||"";a.path=l+v}return a.slashes=a.slashes||e.slashes,a.href=a.format(),a}var y,g=a.pathname&&"/"===a.pathname.charAt(0),F=e.host||e.pathname&&"/"===e.pathname.charAt(0),A=F||g||a.host&&e.pathname,b=A,w=a.pathname&&a.pathname.split("/")||[],x=a.protocol&&!q[a.protocol];if(r=e.pathname&&e.pathname.split("/")||[],x&&(a.hostname="",a.port=null,a.host&&(""===w[0]?w[0]=a.host:w.unshift(a.host)),a.host="",e.protocol&&(e.hostname=null,e.port=null,e.host&&(""===r[0]?r[0]=e.host:r.unshift(e.host)),e.host=null),A=A&&(""===r[0]||""===w[0])),F)a.host=e.host||""===e.host?e.host:a.host,a.hostname=e.hostname||""===e.hostname?e.hostname:a.hostname,a.search=e.search,a.query=e.query,w=r;else if(r.length)w||(w=[]),w.pop(),w=w.concat(r),a.search=e.search,a.query=e.query;else if(null!=e.search)return x&&(a.hostname=a.host=w.shift(),(y=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=y.shift(),a.host=a.hostname=y.shift())),a.search=e.search,a.query=e.query,p(a.pathname)&&p(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.href=a.format(),a;if(!w.length)return a.pathname=null,a.search?a.path="/"+a.search:a.path=null,a.href=a.format(),a;for(var z=w.slice(-1)[0],Z=(a.host||e.host||w.length>1)&&("."===z||".."===z)||""===z,$=0,O=w.length;O>=0;O--)"."===(z=w[O])?w.splice(O,1):".."===z?(w.splice(O,1),$++):$&&(w.splice(O,1),$--);if(!A&&!b)for(;$--;$)w.unshift("..");!A||""===w[0]||w[0]&&"/"===w[0].charAt(0)||w.unshift(""),Z&&"/"!==w.join("/").substr(-1)&&w.push("");var j=""===w[0]||w[0]&&"/"===w[0].charAt(0);return x&&(a.hostname=a.host=j?"":w.length?w.shift():"",(y=!!(a.host&&a.host.indexOf("@")>0)&&a.host.split("@"))&&(a.auth=y.shift(),a.host=a.hostname=y.shift())),(A=A||a.host&&w.length)&&!j&&w.unshift(""),w.length?a.pathname=w.join("/"):(a.pathname=null,a.path=null),p(a.pathname)&&p(a.search)||(a.path=(a.pathname?a.pathname:"")+(a.search?a.search:"")),a.auth=e.auth||a.auth,a.slashes=a.slashes||e.slashes,a.href=a.format(),a},E.prototype.parseHost=function(){return D(this)};var L=e(Object.freeze({__proto__:null,parse:I,resolve:U,resolveObject:T,format:V,default:x,Url:E})),J={},G=L,H=J.ValidationError=function(e,t,r,a,n,i){if(Array.isArray(a)?(this.path=a,this.property=a.reduce((function(e,t){return e+ee(t)}),"instance")):void 0!==a&&(this.property=a),e&&(this.message=e),r){var o=r.$id||r.id;this.schema=o||r}void 0!==t&&(this.instance=t),this.name=n,this.argument=i,this.stack=this.toString()};H.prototype.toString=function(){return this.property+" "+this.message};var B=J.ValidatorResult=function(e,t,r,a){this.instance=e,this.schema=t,this.options=r,this.path=a.path,this.propertyPath=a.propertyPath,this.errors=[],this.throwError=r&&r.throwError,this.throwFirst=r&&r.throwFirst,this.throwAll=r&&r.throwAll,this.disableFormat=r&&!0===r.disableFormat};function K(e,t){return t+": "+e.toString()+"\n"}function W(e){Error.captureStackTrace&&Error.captureStackTrace(this,W),this.instance=e.instance,this.schema=e.schema,this.options=e.options,this.errors=e.errors}B.prototype.addError=function(e){var t;if("string"==typeof e)t=new H(e,this.instance,this.schema,this.path);else{if(!e)throw new Error("Missing error detail");if(!e.message)throw new Error("Missing error message");if(!e.name)throw new Error("Missing validator type");t=new H(e.message,this.instance,this.schema,this.path,e.name,e.argument)}if(this.errors.push(t),this.throwFirst)throw new W(this);if(this.throwError)throw t;return t},B.prototype.importErrors=function(e){"string"==typeof e||e&&e.validatorType?this.addError(e):e&&e.errors&&(this.errors=this.errors.concat(e.errors))},B.prototype.toString=function(e){return this.errors.map(K).join("")},Object.defineProperty(B.prototype,"valid",{get:function(){return!this.errors.length}}),J.ValidatorResultError=W,W.prototype=new Error,W.prototype.constructor=W,W.prototype.name="Validation Error";var X=J.SchemaError=function e(t,r){this.message=t,this.schema=r,Error.call(this,t),Error.captureStackTrace(this,e)};X.prototype=Object.create(Error.prototype,{constructor:{value:X,enumerable:!1},name:{value:"SchemaError",enumerable:!1}});var Y=J.SchemaContext=function(e,t,r,a,n){this.schema=e,this.options=t,Array.isArray(r)?(this.path=r,this.propertyPath=r.reduce((function(e,t){return e+ee(t)}),"instance")):this.propertyPath=r,this.base=a,this.schemas=n};Y.prototype.resolve=function(e){return G.resolve(this.base,e)},Y.prototype.makeChild=function(e,t){var r=void 0===t?this.path:this.path.concat([t]),a=e.$id||e.id,n=G.resolve(this.base,a||""),i=new Y(e,this.options,r,n,Object.create(this.schemas));return a&&!i.schemas[n]&&(i.schemas[n]=e),i};var Q=J.FORMAT_REGEXPS={"date-time":/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])[tT ](2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])(\.\d+)?([zZ]|[+-]([0-5][0-9]):(60|[0-5][0-9]))$/,date:/^\d{4}-(?:0[0-9]{1}|1[0-2]{1})-(3[01]|0[1-9]|[12][0-9])$/,time:/^(2[0-4]|[01][0-9]):([0-5][0-9]):(60|[0-5][0-9])$/,duration:/P(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S)|\d+(D|M(\d+D)?|Y(\d+M(\d+D)?)?)(T\d+(H(\d+M(\d+S)?)?|M(\d+S)?|S))?|\d+W)/i,email:/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/,"idn-email":/^("(?:[!#-\[\]-\u{10FFFF}]|\\[\t -\u{10FFFF}])*"|[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*)@([!#-'*+\-/-9=?A-Z\^-\u{10FFFF}](?:\.?[!#-'*+\-/-9=?A-Z\^-\u{10FFFF}])*|\[[!-Z\^-\u{10FFFF}]*\])$/u,"ip-address":/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,ipv6:/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/,uri:/^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,"uri-reference":/^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/,iri:/^[a-zA-Z][a-zA-Z0-9+.-]*:[^\s]*$/,"iri-reference":/^(((([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:?)?)|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?)?))#(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|(([A-Za-z][+\-.0-9A-Za-z]*)?%[0-9A-Fa-f]{2}|[!$&-.0-9;=@_~-\u{10FFFF}]|[A-Za-z][+\-.0-9A-Za-z]*[!$&-*,;=@_~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-.0-9;=@-Z_a-z~-\u{10FFFF}])*((([/?](%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?#|[/?])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*)?|([A-Za-z][+\-.0-9A-Za-z]*(:%[0-9A-Fa-f]{2}|:[!$&-.0-;=?-Z_a-z~-\u{10FFFF}]|[/?])|\?)(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|([A-Za-z][+\-.0-9A-Za-z]*:)?\/((%[0-9A-Fa-f]{2}|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)(:\d*)?[/?]|[!$&-.0-;=?-Z_a-z~-\u{10FFFF}])(%[0-9A-Fa-f]{2}|[!$&-;=?-Z_a-z~-\u{10FFFF}])*|\/((%[0-9A-Fa-f]{2}|[!$&-.0-9;=A-Z_a-z~-\u{10FFFF}])+(:\d*)?|(\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?:\d*|\[(([Vv][0-9A-Fa-f]+\.[!$&-.0-;=A-Z_a-z~-\u{10FFFF}]+)?|[.0-:A-Fa-f]+)\])?)?|[A-Za-z][+\-.0-9A-Za-z]*:?)?$/u,uuid:/^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i,"uri-template":/(%[0-9a-f]{2}|[!#$&(-;=?@\[\]_a-z~]|\{[!#&+,./;=?@|]?(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?(,(%[0-9a-f]{2}|[0-9_a-z])(\.?(%[0-9a-f]{2}|[0-9_a-z]))*(:[1-9]\d{0,3}|\*)?)*\})*/iu,"json-pointer":/^(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*$/iu,"relative-json-pointer":/^\d+(#|(\/([\x00-\x2e0-@\[-}\x7f]|~[01])*)*)$/iu,hostname:/^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,"host-name":/^(?=.{1,255}$)[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?(?:\.[0-9A-Za-z](?:(?:[0-9A-Za-z]|-){0,61}[0-9A-Za-z])?)*\.?$/,"utc-millisec":function(e){return"string"==typeof e&&parseFloat(e)===parseInt(e,10)&&!isNaN(e)},regex:function(e){var t=!0;try{new RegExp(e)}catch(e){t=!1}return t},style:/[\r\n\t ]*[^\r\n\t ][^:]*:[\r\n\t ]*[^\r\n\t ;]*[\r\n\t ]*;?/,color:/^(#?([0-9A-Fa-f]{3}){1,2}\b|aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow|(rgb\(\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*,\s*\b([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\b\s*\))|(rgb\(\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*,\s*(\d?\d%|100%)+\s*\)))$/,phone:/^\+(?:[0-9] ?){6,14}[0-9]$/,alpha:/^[a-zA-Z]+$/,alphanumeric:/^[a-zA-Z0-9]+$/};Q.regexp=Q.regex,Q.pattern=Q.regex,Q.ipv4=Q["ip-address"],J.isFormat=function(e,t,r){if("string"==typeof e&&void 0!==Q[t]){if(Q[t]instanceof RegExp)return Q[t].test(e);if("function"==typeof Q[t])return Q[t](e)}else if(r&&r.customFormats&&"function"==typeof r.customFormats[t])return r.customFormats[t](e);return!0};var ee=J.makeSuffix=function(e){return(e=e.toString()).match(/[.\s\[\]]/)||e.match(/^[\d]/)?e.match(/^\d+$/)?"["+e+"]":"["+JSON.stringify(e)+"]":"."+e};function te(e,t,r,a){"object"==typeof r?t[a]=ne(e[a],r):-1===e.indexOf(r)&&t.push(r)}function re(e,t,r){t[r]=e[r]}function ae(e,t,r,a){"object"==typeof t[a]&&t[a]&&e[a]?r[a]=ne(e[a],t[a]):r[a]=t[a]}function ne(e,t){var r=Array.isArray(t),a=r&&[]||{};return r?(e=e||[],a=a.concat(e),t.forEach(te.bind(null,e,a))):(e&&"object"==typeof e&&Object.keys(e).forEach(re.bind(null,e,a)),Object.keys(t).forEach(ae.bind(null,e,t,a))),a}function ie(e){return"/"+encodeURIComponent(e).replace(/~/g,"%7E")}J.deepCompareStrict=function e(t,r){if(typeof t!=typeof r)return!1;if(Array.isArray(t))return!!Array.isArray(r)&&(t.length===r.length&&t.every((function(a,n){return e(t[n],r[n])})));if("object"==typeof t){if(!t||!r)return t===r;var a=Object.keys(t),n=Object.keys(r);return a.length===n.length&&a.every((function(a){return e(t[a],r[a])}))}return t===r},J.deepMerge=ne,J.objectGetPath=function(e,t){for(var r,a=t.split("/").slice(1);"string"==typeof(r=a.shift());){var n=decodeURIComponent(r.replace(/~0/,"~").replace(/~1/g,"/"));if(!(n in e))return;e=e[n]}return e},J.encodePath=function(e){return e.map(ie).join("")},J.getDecimalPlaces=function(e){var t=0;if(isNaN(e))return t;"number"!=typeof e&&(e=Number(e));var r=e.toString().split("e");if(2===r.length){if("-"!==r[1][0])return t;t=Number(r[1].slice(1))}var a=r[0].split(".");return 2===a.length&&(t+=a[1].length),t},J.isSchema=function(e){return"object"==typeof e&&e||"boolean"==typeof e};var oe=J,se=oe.ValidatorResult,ue=oe.SchemaError,he={ignoreProperties:{id:!0,default:!0,description:!0,title:!0,additionalItems:!0,then:!0,else:!0,$schema:!0,$ref:!0,extends:!0}},fe=he.validators={};function ce(e,t,r,a,n){var i=t.throwError,o=t.throwAll;t.throwError=!1,t.throwAll=!1;var s=this.validateSchema(e,n,t,r);return t.throwError=i,t.throwAll=o,!s.valid&&a instanceof Function&&a(s),s.valid}function me(e,t){if(Object.hasOwnProperty.call(e,t))return e[t];if(t in e)for(;e=Object.getPrototypeOf(e);)if(Object.propertyIsEnumerable.call(e,t))return e[t]}function le(e,t,r,a,n,i){if(this.types.object(e)&&(!t.properties||void 0===t.properties[n]))if(!1===t.additionalProperties)i.addError({name:"additionalProperties",argument:n,message:"is not allowed to have the additional property "+JSON.stringify(n)});else{var o=t.additionalProperties||{};"function"==typeof r.preValidateProperty&&r.preValidateProperty(e,n,o,r,a);var s=this.validateSchema(e[n],o,r,a.makeChild(o,n));s.instance!==i.instance[n]&&(i.instance[n]=s.instance),i.importErrors(s)}}fe.type=function(e,t,r,a){if(void 0===e)return null;var n=new se(e,t,r,a),i=Array.isArray(t.type)?t.type:[t.type];if(!i.some(this.testType.bind(this,e,t,r,a))){var o=i.map((function(e){if(e){var t=e.$id||e.id;return t?"<"+t+">":e+""}}));n.addError({name:"type",argument:o,message:"is not of a type(s) "+o})}return n},fe.anyOf=function(e,t,r,a){if(void 0===e)return null;var n=new se(e,t,r,a),i=new se(e,t,r,a);if(!Array.isArray(t.anyOf))throw new ue("anyOf must be an array");if(!t.anyOf.some(ce.bind(this,e,r,a,(function(e){i.importErrors(e)})))){var o=t.anyOf.map((function(e,t){var r=e.$id||e.id;return r?"<"+r+">":e.title&&JSON.stringify(e.title)||e.$ref&&"<"+e.$ref+">"||"[subschema "+t+"]"}));r.nestedErrors&&n.importErrors(i),n.addError({name:"anyOf",argument:o,message:"is not any of "+o.join(",")})}return n},fe.allOf=function(e,t,r,a){if(void 0===e)return null;if(!Array.isArray(t.allOf))throw new ue("allOf must be an array");var n=new se(e,t,r,a),i=this;return t.allOf.forEach((function(t,o){var s=i.validateSchema(e,t,r,a);if(!s.valid){var u=t.$id||t.id||t.title&&JSON.stringify(t.title)||t.$ref&&"<"+t.$ref+">"||"[subschema "+o+"]";n.addError({name:"allOf",argument:{id:u,length:s.errors.length,valid:s},message:"does not match allOf schema "+u+" with "+s.errors.length+" error[s]:"}),n.importErrors(s)}})),n},fe.oneOf=function(e,t,r,a){if(void 0===e)return null;if(!Array.isArray(t.oneOf))throw new ue("oneOf must be an array");var n=new se(e,t,r,a),i=new se(e,t,r,a),o=t.oneOf.filter(ce.bind(this,e,r,a,(function(e){i.importErrors(e)}))).length,s=t.oneOf.map((function(e,t){return e.$id||e.id||e.title&&JSON.stringify(e.title)||e.$ref&&"<"+e.$ref+">"||"[subschema "+t+"]"}));return 1!==o&&(r.nestedErrors&&n.importErrors(i),n.addError({name:"oneOf",argument:s,message:"is not exactly one from "+s.join(",")})),n},fe.if=function(e,t,r,a){if(void 0===e)return null;if(!oe.isSchema(t.if))throw new Error('Expected "if" keyword to be a schema');var n,i=ce.call(this,e,r,a,null,t.if),o=new se(e,t,r,a);if(i){if(void 0===t.then)return;if(!oe.isSchema(t.then))throw new Error('Expected "then" keyword to be a schema');n=this.validateSchema(e,t.then,r,a.makeChild(t.then)),o.importErrors(n)}else{if(void 0===t.else)return;if(!oe.isSchema(t.else))throw new Error('Expected "else" keyword to be a schema');n=this.validateSchema(e,t.else,r,a.makeChild(t.else)),o.importErrors(n)}return o},fe.propertyNames=function(e,t,r,a){if(this.types.object(e)){var n=new se(e,t,r,a),i=void 0!==t.propertyNames?t.propertyNames:{};if(!oe.isSchema(i))throw new ue('Expected "propertyNames" to be a schema (object or boolean)');for(var o in e)if(void 0!==me(e,o)){var s=this.validateSchema(o,i,r,a.makeChild(i));n.importErrors(s)}return n}},fe.properties=function(e,t,r,a){if(this.types.object(e)){var n=new se(e,t,r,a),i=t.properties||{};for(var o in i){var s=i[o];if(void 0!==s){if(null===s)throw new ue('Unexpected null, expected schema in "properties"');"function"==typeof r.preValidateProperty&&r.preValidateProperty(e,o,s,r,a);var u=me(e,o),h=this.validateSchema(u,s,r,a.makeChild(s,o));h.instance!==n.instance[o]&&(n.instance[o]=h.instance),n.importErrors(h)}}return n}},fe.patternProperties=function(e,t,r,a){if(this.types.object(e)){var n=new se(e,t,r,a),i=t.patternProperties||{};for(var o in e){var s=!0;for(var u in i){var h=i[u];if(void 0!==h){if(null===h)throw new ue('Unexpected null, expected schema in "patternProperties"');try{var f=new RegExp(u,"u")}catch(e){f=new RegExp(u)}if(f.test(o)){s=!1,"function"==typeof r.preValidateProperty&&r.preValidateProperty(e,o,h,r,a);var c=this.validateSchema(e[o],h,r,a.makeChild(h,o));c.instance!==n.instance[o]&&(n.instance[o]=c.instance),n.importErrors(c)}}}s&&le.call(this,e,t,r,a,o,n)}return n}},fe.additionalProperties=function(e,t,r,a){if(this.types.object(e)){if(t.patternProperties)return null;var n=new se(e,t,r,a);for(var i in e)le.call(this,e,t,r,a,i,n);return n}},fe.minProperties=function(e,t,r,a){if(this.types.object(e)){var n=new se(e,t,r,a);return Object.keys(e).length>=t.minProperties||n.addError({name:"minProperties",argument:t.minProperties,message:"does not meet minimum property length of "+t.minProperties}),n}},fe.maxProperties=function(e,t,r,a){if(this.types.object(e)){var n=new se(e,t,r,a);return Object.keys(e).length<=t.maxProperties||n.addError({name:"maxProperties",argument:t.maxProperties,message:"does not meet maximum property length of "+t.maxProperties}),n}},fe.items=function(e,t,r,a){var n=this;if(this.types.array(e)&&void 0!==t.items){var i=new se(e,t,r,a);return e.every((function(e,o){if(Array.isArray(t.items))var s=void 0===t.items[o]?t.additionalItems:t.items[o];else s=t.items;if(void 0===s)return!0;if(!1===s)return i.addError({name:"items",message:"additionalItems not permitted"}),!1;var u=n.validateSchema(e,s,r,a.makeChild(s,o));return u.instance!==i.instance[o]&&(i.instance[o]=u.instance),i.importErrors(u),!0})),i}},fe.contains=function(e,t,r,a){var n=this;if(this.types.array(e)&&void 0!==t.contains){if(!oe.isSchema(t.contains))throw new Error('Expected "contains" keyword to be a schema');var i=new se(e,t,r,a);return!1===e.some((function(e,i){return 0===n.validateSchema(e,t.contains,r,a.makeChild(t.contains,i)).errors.length}))&&i.addError({name:"contains",argument:t.contains,message:"must contain an item matching given schema"}),i}},fe.minimum=function(e,t,r,a){if(this.types.number(e)){var n=new se(e,t,r,a);return t.exclusiveMinimum&&!0===t.exclusiveMinimum?e>t.minimum||n.addError({name:"minimum",argument:t.minimum,message:"must be greater than "+t.minimum}):e>=t.minimum||n.addError({name:"minimum",argument:t.minimum,message:"must be greater than or equal to "+t.minimum}),n}},fe.maximum=function(e,t,r,a){if(this.types.number(e)){var n=new se(e,t,r,a);return t.exclusiveMaximum&&!0===t.exclusiveMaximum?e<t.maximum||n.addError({name:"maximum",argument:t.maximum,message:"must be less than "+t.maximum}):e<=t.maximum||n.addError({name:"maximum",argument:t.maximum,message:"must be less than or equal to "+t.maximum}),n}},fe.exclusiveMinimum=function(e,t,r,a){if("boolean"!=typeof t.exclusiveMinimum&&this.types.number(e)){var n=new se(e,t,r,a);return e>t.exclusiveMinimum||n.addError({name:"exclusiveMinimum",argument:t.exclusiveMinimum,message:"must be strictly greater than "+t.exclusiveMinimum}),n}},fe.exclusiveMaximum=function(e,t,r,a){if("boolean"!=typeof t.exclusiveMaximum&&this.types.number(e)){var n=new se(e,t,r,a);return e<t.exclusiveMaximum||n.addError({name:"exclusiveMaximum",argument:t.exclusiveMaximum,message:"must be strictly less than "+t.exclusiveMaximum}),n}};var pe=function(e,t,r,a,n,i){if(this.types.number(e)){var o=t[n];if(0==o)throw new ue(n+" cannot be zero");var s=new se(e,t,r,a),u=oe.getDecimalPlaces(e),h=oe.getDecimalPlaces(o),f=Math.max(u,h),c=Math.pow(10,f);return Math.round(e*c)%Math.round(o*c)!=0&&s.addError({name:n,argument:o,message:i+JSON.stringify(o)}),s}};function de(e,t,r){var a,n=r.length;for(a=t+1;a<n;a++)if(oe.deepCompareStrict(e,r[a]))return!1;return!0}fe.multipleOf=function(e,t,r,a){return pe.call(this,e,t,r,a,"multipleOf","is not a multiple of (divisible by) ")},fe.divisibleBy=function(e,t,r,a){return pe.call(this,e,t,r,a,"divisibleBy","is not divisible by (multiple of) ")},fe.required=function(e,t,r,a){var n=new se(e,t,r,a);return void 0===e&&!0===t.required?n.addError({name:"required",message:"is required"}):this.types.object(e)&&Array.isArray(t.required)&&t.required.forEach((function(t){void 0===me(e,t)&&n.addError({name:"required",argument:t,message:"requires property "+JSON.stringify(t)})})),n},fe.pattern=function(e,t,r,a){if(this.types.string(e)){var n=new se(e,t,r,a),i=t.pattern;try{var o=new RegExp(i,"u")}catch(e){o=new RegExp(i)}return e.match(o)||n.addError({name:"pattern",argument:t.pattern,message:"does not match pattern "+JSON.stringify(t.pattern.toString())}),n}},fe.format=function(e,t,r,a){if(void 0!==e){var n=new se(e,t,r,a);return n.disableFormat||oe.isFormat(e,t.format,this)||n.addError({name:"format",argument:t.format,message:"does not conform to the "+JSON.stringify(t.format)+" format"}),n}},fe.minLength=function(e,t,r,a){if(this.types.string(e)){var n=new se(e,t,r,a),i=e.match(/[\uDC00-\uDFFF]/g);return e.length-(i?i.length:0)>=t.minLength||n.addError({name:"minLength",argument:t.minLength,message:"does not meet minimum length of "+t.minLength}),n}},fe.maxLength=function(e,t,r,a){if(this.types.string(e)){var n=new se(e,t,r,a),i=e.match(/[\uDC00-\uDFFF]/g);return e.length-(i?i.length:0)<=t.maxLength||n.addError({name:"maxLength",argument:t.maxLength,message:"does not meet maximum length of "+t.maxLength}),n}},fe.minItems=function(e,t,r,a){if(this.types.array(e)){var n=new se(e,t,r,a);return e.length>=t.minItems||n.addError({name:"minItems",argument:t.minItems,message:"does not meet minimum length of "+t.minItems}),n}},fe.maxItems=function(e,t,r,a){if(this.types.array(e)){var n=new se(e,t,r,a);return e.length<=t.maxItems||n.addError({name:"maxItems",argument:t.maxItems,message:"does not meet maximum length of "+t.maxItems}),n}},fe.uniqueItems=function(e,t,r,a){if(!0===t.uniqueItems&&this.types.array(e)){var n=new se(e,t,r,a);return e.every(de)||n.addError({name:"uniqueItems",message:"contains duplicate item"}),n}},fe.dependencies=function(e,t,r,a){if(this.types.object(e)){var n=new se(e,t,r,a);for(var i in t.dependencies)if(void 0!==e[i]){var o=t.dependencies[i],s=a.makeChild(o,i);if("string"==typeof o&&(o=[o]),Array.isArray(o))o.forEach((function(t){void 0===e[t]&&n.addError({name:"dependencies",argument:s.propertyPath,message:"property "+t+" not found, required by "+s.propertyPath})}));else{var u=this.validateSchema(e,o,r,s);n.instance!==u.instance&&(n.instance=u.instance),u&&u.errors.length&&(n.addError({name:"dependencies",argument:s.propertyPath,message:"does not meet dependency required by "+s.propertyPath}),n.importErrors(u))}}return n}},fe.enum=function(e,t,r,a){if(void 0===e)return null;if(!Array.isArray(t.enum))throw new ue("enum expects an array",t);var n=new se(e,t,r,a);return t.enum.some(oe.deepCompareStrict.bind(null,e))||n.addError({name:"enum",argument:t.enum,message:"is not one of enum values: "+t.enum.map(String).join(",")}),n},fe.const=function(e,t,r,a){if(void 0===e)return null;var n=new se(e,t,r,a);return oe.deepCompareStrict(t.const,e)||n.addError({name:"const",argument:t.const,message:"does not exactly match expected constant: "+t.const}),n},fe.not=fe.disallow=function(e,t,r,a){var n=this;if(void 0===e)return null;var i=new se(e,t,r,a),o=t.not||t.disallow;return o?(Array.isArray(o)||(o=[o]),o.forEach((function(o){if(n.testType(e,t,r,a,o)){var s=o&&(o.$id||o.id)||o;i.addError({name:"not",argument:s,message:"is of prohibited type "+s})}})),i):null};var ve=he,ye={},ge=L,Fe=J;function Ae(e,t){this.id=e,this.ref=t}ye.SchemaScanResult=Ae,ye.scan=function(e,t){function r(e,t){if(t&&"object"==typeof t)if(t.$ref){var s=ge.resolve(e,t.$ref);o[s]=o[s]?o[s]+1:0}else{var u=t.$id||t.id,h=u?ge.resolve(e,u):e;if(h){if(h.indexOf("#")<0&&(h+="#"),i[h]){if(!Fe.deepCompareStrict(i[h],t))throw new Error("Schema <"+h+"> already exists with different definition");return i[h]}i[h]=t,"#"==h[h.length-1]&&(i[h.substring(0,h.length-1)]=t)}a(h+"/items",Array.isArray(t.items)?t.items:[t.items]),a(h+"/extends",Array.isArray(t.extends)?t.extends:[t.extends]),r(h+"/additionalItems",t.additionalItems),n(h+"/properties",t.properties),r(h+"/additionalProperties",t.additionalProperties),n(h+"/definitions",t.definitions),n(h+"/patternProperties",t.patternProperties),n(h+"/dependencies",t.dependencies),a(h+"/disallow",t.disallow),a(h+"/allOf",t.allOf),a(h+"/anyOf",t.anyOf),a(h+"/oneOf",t.oneOf),r(h+"/not",t.not)}}function a(e,t){if(Array.isArray(t))for(var a=0;a<t.length;a++)r(e+"/"+a,t[a])}function n(e,t){if(t&&"object"==typeof t)for(var a in t)r(e+"/"+a,t[a])}var i={},o={};return r(e,t),new Ae(i,o)};var be=L,we=ve,xe=J,Ee=ye.scan,ze=xe.ValidatorResult,Ze=xe.ValidatorResultError,$e=xe.SchemaError,Oe=xe.SchemaContext,je=function e(){this.customFormats=Object.create(e.prototype.customFormats),this.schemas={},this.unresolvedRefs=[],this.types=Object.create(_e),this.attributes=Object.create(we.validators)};function Se(e){var t="string"==typeof e?e:e.$ref;return"string"==typeof t&&t}je.prototype.customFormats={},je.prototype.schemas=null,je.prototype.types=null,je.prototype.attributes=null,je.prototype.unresolvedRefs=null,je.prototype.addSchema=function(e,t){var r=this;if(!e)return null;var a=Ee(t||"/",e),n=t||e.$id||e.id;for(var i in a.id)this.schemas[i]=a.id[i];for(var i in a.ref)this.unresolvedRefs.push(i);return this.unresolvedRefs=this.unresolvedRefs.filter((function(e){return void 0===r.schemas[e]})),this.schemas[n]},je.prototype.addSubSchemaArray=function(e,t){if(Array.isArray(t))for(var r=0;r<t.length;r++)this.addSubSchema(e,t[r])},je.prototype.addSubSchemaObject=function(e,t){if(t&&"object"==typeof t)for(var r in t)this.addSubSchema(e,t[r])},je.prototype.setSchemas=function(e){this.schemas=e},je.prototype.getSchema=function(e){return this.schemas[e]},je.prototype.validate=function(e,t,r,a){if("boolean"!=typeof t&&"object"!=typeof t||null===t)throw new $e("Expected `schema` to be an object or boolean");r||(r={});var n,i=t.$id||t.id,o=be.resolve(r.base||"/",i||"");if(!a){(a=new Oe(t,r,[],o,Object.create(this.schemas))).schemas[o]||(a.schemas[o]=t);var s=Ee(o,t);for(var u in s.id){var h=s.id[u];a.schemas[u]=h}}if(r.required&&void 0===e)return(n=new ze(e,t,r,a)).addError("is required, but is undefined"),n;if(!(n=this.validateSchema(e,t,r,a)))throw new Error("Result undefined");if(r.throwAll&&n.errors.length)throw new Ze(n);return n},je.prototype.validateSchema=function(e,t,r,a){var n=new ze(e,t,r,a);if("boolean"==typeof t)!0===t?t={}:!1===t&&(t={type:[]});else if(!t)throw new Error("schema is undefined");if(t.extends)if(Array.isArray(t.extends)){var i={schema:t,ctx:a};t.extends.forEach(this.schemaTraverser.bind(this,i)),t=i.schema,i.schema=null,i.ctx=null,i=null}else t=xe.deepMerge(t,this.superResolve(t.extends,a));var o=Se(t);if(o){var s=this.resolve(t,o,a),u=new Oe(s.subschema,r,a.path,s.switchSchema,a.schemas);return this.validateSchema(e,s.subschema,r,u)}var h=r&&r.skipAttributes||[];for(var f in t)if(!we.ignoreProperties[f]&&h.indexOf(f)<0){var c=null,m=this.attributes[f];if(m)c=m.call(this,e,t,r,a);else if(!1===r.allowUnknownAttributes)throw new $e("Unsupported attribute: "+f,t);c&&n.importErrors(c)}if("function"==typeof r.rewrite){var l=r.rewrite.call(this,e,t,r,a);n.instance=l}return n},je.prototype.schemaTraverser=function(e,t){e.schema=xe.deepMerge(e.schema,this.superResolve(t,e.ctx))},je.prototype.superResolve=function(e,t){var r=Se(e);return r?this.resolve(e,r,t).subschema:e},je.prototype.resolve=function(e,t,r){if(t=r.resolve(t),r.schemas[t])return{subschema:r.schemas[t],switchSchema:t};var a=be.parse(t),n=a&&a.hash,i=n&&n.length&&t.substr(0,t.length-n.length);if(!i||!r.schemas[i])throw new $e("no such schema <"+t+">",e);var o=xe.objectGetPath(r.schemas[i],n.substr(1));if(void 0===o)throw new $e("no such schema "+n+" located in <"+i+">",e);return{subschema:o,switchSchema:t}},je.prototype.testType=function(e,t,r,a,n){if(void 0!==n){if(null===n)throw new $e('Unexpected null in "type" keyword');if("function"==typeof this.types[n])return this.types[n].call(this,e);if(n&&"object"==typeof n){var i=this.validateSchema(e,n,r,a);return void 0===i||!(i&&i.errors.length)}return!0}};var _e=je.prototype.types={};_e.string=function(e){return"string"==typeof e},_e.number=function(e){return"number"==typeof e&&isFinite(e)},_e.integer=function(e){return"number"==typeof e&&e%1==0},_e.boolean=function(e){return"boolean"==typeof e},_e.array=function(e){return Array.isArray(e)},_e.null=function(e){return null===e},_e.date=function(e){return e instanceof Date},_e.any=function(e){return!0},_e.object=function(e){return e&&"object"==typeof e&&!Array.isArray(e)&&!(e instanceof Date)};var Pe=je,Re=t.Validator=Pe;t.ValidatorResult=J.ValidatorResult,t.ValidatorResultError=J.ValidatorResultError,t.ValidationError=J.ValidationError,t.SchemaError=J.SchemaError,t.SchemaScanResult=ye.SchemaScanResult,t.scan=ye.scan,t.validate=function(e,t,r){return(new Re).validate(e,t,r)};export{t as jsonschema};
