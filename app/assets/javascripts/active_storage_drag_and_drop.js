!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ActiveStorage=e():t.ActiveStorage=e()}(window,function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)r.d(n,i,function(e){return t[e]}.bind(null,i));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1)}([function(t,e,r){t.exports=function(t){function e(n){if(r[n])return r[n].exports;var i=r[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,e),i.l=!0,i.exports}var r={};return e.m=t,e.c=r,e.d=function(t,r,n){e.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(r,"a",r),r},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=2)}([function(t,e,r){"use strict";function n(t,e){return"string"==typeof t&&(e=t,t=document),t.querySelector(e)}function i(t){return Array.isArray(t)?t:Array.from?Array.from(t):[].slice.call(t)}e.d=function(t){var e=n(document.head,'meta[name="'+t+'"]');if(e)return e.getAttribute("content")},e.c=function(t,e){return"string"==typeof t&&(e=t,t=document),i(t.querySelectorAll(e))},e.b=n,e.a=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=t.disabled,i=r.bubbles,a=r.cancelable,o=r.detail,s=document.createEvent("Event");s.initEvent(e,i||!0,a||!0),s.detail=o||{};try{t.disabled=!1,t.dispatchEvent(s)}finally{t.disabled=n}return s},e.e=i},function(t,e,r){"use strict";function n(t,e){if(t&&"function"==typeof t[e]){for(var r=arguments.length,n=Array(r>2?r-2:0),i=2;i<r;i++)n[i-2]=arguments[i];return t[e].apply(t,n)}}r.d(e,"a",function(){return d});var i=r(6),a=r(8),o=r(9),s=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),u=0,d=function(){function t(e,r,n){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.id=++u,this.file=e,this.url=r,this.delegate=n}return s(t,[{key:"create",value:function(t){var e=this;i.a.create(this.file,function(r,i){if(r)t(r);else{var s=new a.a(e.file,i,e.url);n(e.delegate,"directUploadWillCreateBlobWithXHR",s.xhr),s.create(function(r){if(r)t(r);else{var i=new o.a(s);n(e.delegate,"directUploadWillStoreFileWithXHR",i.xhr),i.create(function(e){e?t(e):t(null,s.toJSON())})}})}})}}]),t}()},function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(3),i=r(1);r.d(e,"start",function(){return n.a}),r.d(e,"DirectUpload",function(){return i.a}),setTimeout(function(){window.ActiveStorage&&Object(n.a)()},1)},function(t,e,r){"use strict";function n(t){a(t)}function i(t){"FORM"==t.target.tagName&&a(t)}function a(t){var e=t.target;if(e.hasAttribute(c))t.preventDefault();else{var r=new u.a(e),n=r.inputs;n.length&&(t.preventDefault(),e.setAttribute(c,""),n.forEach(o),r.start(function(t){e.removeAttribute(c),t?n.forEach(s):function(t){var e=Object(d.b)(t,"input[type=submit]");if(e){var r=e,n=r.disabled;e.disabled=!1,e.focus(),e.click(),e.disabled=n}else(e=document.createElement("input")).type="submit",e.style.display="none",t.appendChild(e),e.click(),t.removeChild(e)}(e)}))}}function o(t){t.disabled=!0}function s(t){t.disabled=!1}e.a=function(){l||(l=!0,document.addEventListener("submit",n),document.addEventListener("ajax:before",i))};var u=r(4),d=r(0),c="data-direct-uploads-processing",l=!1},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(5),i=r(0),a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o="input[type=file][data-direct-upload-url]:not([disabled])",s=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.form=e,this.inputs=Object(i.c)(e,o).filter(function(t){return t.files.length})}return a(t,[{key:"start",value:function(t){var e=this,r=this.createDirectUploadControllers();this.dispatch("start"),function n(){var i=r.shift();i?i.start(function(r){r?(t(r),e.dispatch("end")):n()}):(t(),e.dispatch("end"))}()}},{key:"createDirectUploadControllers",value:function(){var t=[];return this.inputs.forEach(function(e){Object(i.e)(e.files).forEach(function(r){var i=new n.a(e,r);t.push(i)})}),t}},{key:"dispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object(i.a)(this.form,"direct-uploads:"+t,{detail:e})}}]),t}()},function(t,e,r){"use strict";r.d(e,"a",function(){return o});var n=r(1),i=r(0),a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=function(){function t(e,r){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.input=e,this.file=r,this.directUpload=new n.a(this.file,this.url,this),this.dispatch("initialize")}return a(t,[{key:"start",value:function(t){var e=this,r=document.createElement("input");r.type="hidden",r.name=this.input.name,this.input.insertAdjacentElement("beforebegin",r),this.dispatch("start"),this.directUpload.create(function(n,i){n?(r.parentNode.removeChild(r),e.dispatchError(n)):r.value=i.signed_id,e.dispatch("end"),t(n)})}},{key:"uploadRequestDidProgress",value:function(t){var e=t.loaded/t.total*100;e&&this.dispatch("progress",{progress:e})}},{key:"dispatch",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.file=this.file,e.id=this.directUpload.id,Object(i.a)(this.input,"direct-upload:"+t,{detail:e})}},{key:"dispatchError",value:function(t){this.dispatch("error",{error:t}).defaultPrevented||alert(t)}},{key:"directUploadWillCreateBlobWithXHR",value:function(t){this.dispatch("before-blob-request",{xhr:t})}},{key:"directUploadWillStoreFileWithXHR",value:function(t){var e=this;this.dispatch("before-storage-request",{xhr:t}),t.upload.addEventListener("progress",function(t){return e.uploadRequestDidProgress(t)})}},{key:"url",get:function(){return this.input.getAttribute("data-direct-upload-url")}}]),t}()},function(t,e,r){"use strict";r.d(e,"a",function(){return s});var n=r(7),i=r.n(n),a=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),o=File.prototype.slice||File.prototype.mozSlice||File.prototype.webkitSlice,s=function(){function t(e){(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.file=e,this.chunkSize=2097152,this.chunkCount=Math.ceil(this.file.size/this.chunkSize),this.chunkIndex=0}return a(t,null,[{key:"create",value:function(e,r){new t(e).create(r)}}]),a(t,[{key:"create",value:function(t){var e=this;this.callback=t,this.md5Buffer=new i.a.ArrayBuffer,this.fileReader=new FileReader,this.fileReader.addEventListener("load",function(t){return e.fileReaderDidLoad(t)}),this.fileReader.addEventListener("error",function(t){return e.fileReaderDidError(t)}),this.readNextChunk()}},{key:"fileReaderDidLoad",value:function(t){if(this.md5Buffer.append(t.target.result),!this.readNextChunk()){var e=this.md5Buffer.end(!0),r=btoa(e);this.callback(null,r)}}},{key:"fileReaderDidError",value:function(t){this.callback("Error reading "+this.file.name)}},{key:"readNextChunk",value:function(){if(this.chunkIndex<this.chunkCount){var t=this.chunkIndex*this.chunkSize,e=Math.min(t+this.chunkSize,this.file.size),r=o.call(this.file,t,e);return this.fileReader.readAsArrayBuffer(r),this.chunkIndex++,!0}return!1}}]),t}()},function(t,e,r){t.exports=function(t){"use strict";function e(t,e){var r=t[0],n=t[1],i=t[2],a=t[3];r+=(n&i|~n&a)+e[0]-680876936|0,a+=((r=(r<<7|r>>>25)+n|0)&n|~r&i)+e[1]-389564586|0,i+=((a=(a<<12|a>>>20)+r|0)&r|~a&n)+e[2]+606105819|0,n+=((i=(i<<17|i>>>15)+a|0)&a|~i&r)+e[3]-1044525330|0,r+=((n=(n<<22|n>>>10)+i|0)&i|~n&a)+e[4]-176418897|0,a+=((r=(r<<7|r>>>25)+n|0)&n|~r&i)+e[5]+1200080426|0,i+=((a=(a<<12|a>>>20)+r|0)&r|~a&n)+e[6]-1473231341|0,n+=((i=(i<<17|i>>>15)+a|0)&a|~i&r)+e[7]-45705983|0,r+=((n=(n<<22|n>>>10)+i|0)&i|~n&a)+e[8]+1770035416|0,a+=((r=(r<<7|r>>>25)+n|0)&n|~r&i)+e[9]-1958414417|0,i+=((a=(a<<12|a>>>20)+r|0)&r|~a&n)+e[10]-42063|0,n+=((i=(i<<17|i>>>15)+a|0)&a|~i&r)+e[11]-1990404162|0,r+=((n=(n<<22|n>>>10)+i|0)&i|~n&a)+e[12]+1804603682|0,a+=((r=(r<<7|r>>>25)+n|0)&n|~r&i)+e[13]-40341101|0,i+=((a=(a<<12|a>>>20)+r|0)&r|~a&n)+e[14]-1502002290|0,n+=((i=(i<<17|i>>>15)+a|0)&a|~i&r)+e[15]+1236535329|0,r+=((n=(n<<22|n>>>10)+i|0)&a|i&~a)+e[1]-165796510|0,a+=((r=(r<<5|r>>>27)+n|0)&i|n&~i)+e[6]-1069501632|0,i+=((a=(a<<9|a>>>23)+r|0)&n|r&~n)+e[11]+643717713|0,n+=((i=(i<<14|i>>>18)+a|0)&r|a&~r)+e[0]-373897302|0,r+=((n=(n<<20|n>>>12)+i|0)&a|i&~a)+e[5]-701558691|0,a+=((r=(r<<5|r>>>27)+n|0)&i|n&~i)+e[10]+38016083|0,i+=((a=(a<<9|a>>>23)+r|0)&n|r&~n)+e[15]-660478335|0,n+=((i=(i<<14|i>>>18)+a|0)&r|a&~r)+e[4]-405537848|0,r+=((n=(n<<20|n>>>12)+i|0)&a|i&~a)+e[9]+568446438|0,a+=((r=(r<<5|r>>>27)+n|0)&i|n&~i)+e[14]-1019803690|0,i+=((a=(a<<9|a>>>23)+r|0)&n|r&~n)+e[3]-187363961|0,n+=((i=(i<<14|i>>>18)+a|0)&r|a&~r)+e[8]+1163531501|0,r+=((n=(n<<20|n>>>12)+i|0)&a|i&~a)+e[13]-1444681467|0,a+=((r=(r<<5|r>>>27)+n|0)&i|n&~i)+e[2]-51403784|0,i+=((a=(a<<9|a>>>23)+r|0)&n|r&~n)+e[7]+1735328473|0,n+=((i=(i<<14|i>>>18)+a|0)&r|a&~r)+e[12]-1926607734|0,r+=((n=(n<<20|n>>>12)+i|0)^i^a)+e[5]-378558|0,a+=((r=(r<<4|r>>>28)+n|0)^n^i)+e[8]-2022574463|0,i+=((a=(a<<11|a>>>21)+r|0)^r^n)+e[11]+1839030562|0,n+=((i=(i<<16|i>>>16)+a|0)^a^r)+e[14]-35309556|0,r+=((n=(n<<23|n>>>9)+i|0)^i^a)+e[1]-1530992060|0,a+=((r=(r<<4|r>>>28)+n|0)^n^i)+e[4]+1272893353|0,i+=((a=(a<<11|a>>>21)+r|0)^r^n)+e[7]-155497632|0,n+=((i=(i<<16|i>>>16)+a|0)^a^r)+e[10]-1094730640|0,r+=((n=(n<<23|n>>>9)+i|0)^i^a)+e[13]+681279174|0,a+=((r=(r<<4|r>>>28)+n|0)^n^i)+e[0]-358537222|0,i+=((a=(a<<11|a>>>21)+r|0)^r^n)+e[3]-722521979|0,n+=((i=(i<<16|i>>>16)+a|0)^a^r)+e[6]+76029189|0,r+=((n=(n<<23|n>>>9)+i|0)^i^a)+e[9]-640364487|0,a+=((r=(r<<4|r>>>28)+n|0)^n^i)+e[12]-421815835|0,i+=((a=(a<<11|a>>>21)+r|0)^r^n)+e[15]+530742520|0,n+=((i=(i<<16|i>>>16)+a|0)^a^r)+e[2]-995338651|0,r+=(i^((n=(n<<23|n>>>9)+i|0)|~a))+e[0]-198630844|0,a+=(n^((r=(r<<6|r>>>26)+n|0)|~i))+e[7]+1126891415|0,i+=(r^((a=(a<<10|a>>>22)+r|0)|~n))+e[14]-1416354905|0,n+=(a^((i=(i<<15|i>>>17)+a|0)|~r))+e[5]-57434055|0,r+=(i^((n=(n<<21|n>>>11)+i|0)|~a))+e[12]+1700485571|0,a+=(n^((r=(r<<6|r>>>26)+n|0)|~i))+e[3]-1894986606|0,i+=(r^((a=(a<<10|a>>>22)+r|0)|~n))+e[10]-1051523|0,n+=(a^((i=(i<<15|i>>>17)+a|0)|~r))+e[1]-2054922799|0,r+=(i^((n=(n<<21|n>>>11)+i|0)|~a))+e[8]+1873313359|0,a+=(n^((r=(r<<6|r>>>26)+n|0)|~i))+e[15]-30611744|0,i+=(r^((a=(a<<10|a>>>22)+r|0)|~n))+e[6]-1560198380|0,n+=(a^((i=(i<<15|i>>>17)+a|0)|~r))+e[13]+1309151649|0,r+=(i^((n=(n<<21|n>>>11)+i|0)|~a))+e[4]-145523070|0,a+=(n^((r=(r<<6|r>>>26)+n|0)|~i))+e[11]-1120210379|0,i+=(r^((a=(a<<10|a>>>22)+r|0)|~n))+e[2]+718787259|0,n=((n+=(a^((i=(i<<15|i>>>17)+a|0)|~r))+e[9]-343485551|0)<<21|n>>>11)+i|0,t[0]=r+t[0]|0,t[1]=n+t[1]|0,t[2]=i+t[2]|0,t[3]=a+t[3]|0}function r(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t.charCodeAt(e)+(t.charCodeAt(e+1)<<8)+(t.charCodeAt(e+2)<<16)+(t.charCodeAt(e+3)<<24);return r}function n(t){var e,r=[];for(e=0;e<64;e+=4)r[e>>2]=t[e]+(t[e+1]<<8)+(t[e+2]<<16)+(t[e+3]<<24);return r}function i(t){var n,i,a,o,s,u,d=t.length,c=[1732584193,-271733879,-1732584194,271733878];for(n=64;n<=d;n+=64)e(c,r(t.substring(n-64,n)));for(t=t.substring(n-64),i=t.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<i;n+=1)a[n>>2]|=t.charCodeAt(n)<<(n%4<<3);if(a[n>>2]|=128<<(n%4<<3),n>55)for(e(c,a),n=0;n<16;n+=1)a[n]=0;return o=(o=8*d).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(o[2],16),u=parseInt(o[1],16)||0,a[14]=s,a[15]=u,e(c,a),c}function a(t){var r,i,a,o,s,u,d=t.length,c=[1732584193,-271733879,-1732584194,271733878];for(r=64;r<=d;r+=64)e(c,n(t.subarray(r-64,r)));for(t=r-64<d?t.subarray(r-64):new Uint8Array(0),i=t.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],r=0;r<i;r+=1)a[r>>2]|=t[r]<<(r%4<<3);if(a[r>>2]|=128<<(r%4<<3),r>55)for(e(c,a),r=0;r<16;r+=1)a[r]=0;return o=(o=8*d).toString(16).match(/(.*?)(.{0,8})$/),s=parseInt(o[2],16),u=parseInt(o[1],16)||0,a[14]=s,a[15]=u,e(c,a),c}function o(t){var e,r="";for(e=0;e<4;e+=1)r+=l[t>>8*e+4&15]+l[t>>8*e&15];return r}function s(t){var e;for(e=0;e<t.length;e+=1)t[e]=o(t[e]);return t.join("")}function u(t){return/[\u0080-\uFFFF]/.test(t)&&(t=unescape(encodeURIComponent(t))),t}function d(t){var e,r=[],n=t.length;for(e=0;e<n-1;e+=2)r.push(parseInt(t.substr(e,2),16));return String.fromCharCode.apply(String,r)}function c(){this.reset()}var l=["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];return s(i("hello")),"undefined"==typeof ArrayBuffer||ArrayBuffer.prototype.slice||function(){function e(t,e){return(t=0|t||0)<0?Math.max(t+e,0):Math.min(t,e)}ArrayBuffer.prototype.slice=function(r,n){var i,a,o,s,u=this.byteLength,d=e(r,u),c=u;return n!==t&&(c=e(n,u)),d>c?new ArrayBuffer(0):(i=c-d,a=new ArrayBuffer(i),o=new Uint8Array(a),s=new Uint8Array(this,d,i),o.set(s),a)}}(),c.prototype.append=function(t){return this.appendBinary(u(t)),this},c.prototype.appendBinary=function(t){this._buff+=t,this._length+=t.length;var n,i=this._buff.length;for(n=64;n<=i;n+=64)e(this._hash,r(this._buff.substring(n-64,n)));return this._buff=this._buff.substring(n-64),this},c.prototype.end=function(t){var e,r,n=this._buff,i=n.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=n.charCodeAt(e)<<(e%4<<3);return this._finish(a,i),r=s(this._hash),t&&(r=d(r)),this.reset(),r},c.prototype.reset=function(){return this._buff="",this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.prototype.getState=function(){return{buff:this._buff,length:this._length,hash:this._hash}},c.prototype.setState=function(t){return this._buff=t.buff,this._length=t.length,this._hash=t.hash,this},c.prototype.destroy=function(){delete this._hash,delete this._buff,delete this._length},c.prototype._finish=function(t,r){var n,i,a,o=r;if(t[o>>2]|=128<<(o%4<<3),o>55)for(e(this._hash,t),o=0;o<16;o+=1)t[o]=0;n=(n=8*this._length).toString(16).match(/(.*?)(.{0,8})$/),i=parseInt(n[2],16),a=parseInt(n[1],16)||0,t[14]=i,t[15]=a,e(this._hash,t)},c.hash=function(t,e){return c.hashBinary(u(t),e)},c.hashBinary=function(t,e){var r=i(t),n=s(r);return e?d(n):n},c.ArrayBuffer=function(){this.reset()},c.ArrayBuffer.prototype.append=function(t){var r,i=function(t,e,r){var n=new Uint8Array(t.byteLength+e.byteLength);return n.set(new Uint8Array(t)),n.set(new Uint8Array(e),t.byteLength),r?n:n.buffer}(this._buff.buffer,t,!0),a=i.length;for(this._length+=t.byteLength,r=64;r<=a;r+=64)e(this._hash,n(i.subarray(r-64,r)));return this._buff=r-64<a?new Uint8Array(i.buffer.slice(r-64)):new Uint8Array(0),this},c.ArrayBuffer.prototype.end=function(t){var e,r,n=this._buff,i=n.length,a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(e=0;e<i;e+=1)a[e>>2]|=n[e]<<(e%4<<3);return this._finish(a,i),r=s(this._hash),t&&(r=d(r)),this.reset(),r},c.ArrayBuffer.prototype.reset=function(){return this._buff=new Uint8Array(0),this._length=0,this._hash=[1732584193,-271733879,-1732584194,271733878],this},c.ArrayBuffer.prototype.getState=function(){var t=c.prototype.getState.call(this);return t.buff=function(t){return String.fromCharCode.apply(null,new Uint8Array(t))}(t.buff),t},c.ArrayBuffer.prototype.setState=function(t){return t.buff=function(t,e){var r,n=t.length,i=new ArrayBuffer(n),a=new Uint8Array(i);for(r=0;r<n;r+=1)a[r]=t.charCodeAt(r);return e?a:i}(t.buff,!0),c.prototype.setState.call(this,t)},c.ArrayBuffer.prototype.destroy=c.prototype.destroy,c.ArrayBuffer.prototype._finish=c.prototype._finish,c.ArrayBuffer.hash=function(t,e){var r=a(new Uint8Array(t)),n=s(r);return e?d(n):n},c}()},function(t,e,r){"use strict";r.d(e,"a",function(){return a});var n=r(0),i=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),a=function(){function t(e,r,i){var a=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.file=e,this.attributes={filename:e.name,content_type:e.type,byte_size:e.size,checksum:r},this.xhr=new XMLHttpRequest,this.xhr.open("POST",i,!0),this.xhr.responseType="json",this.xhr.setRequestHeader("Content-Type","application/json"),this.xhr.setRequestHeader("Accept","application/json"),this.xhr.setRequestHeader("X-Requested-With","XMLHttpRequest"),this.xhr.setRequestHeader("X-CSRF-Token",Object(n.d)("csrf-token")),this.xhr.addEventListener("load",function(t){return a.requestDidLoad(t)}),this.xhr.addEventListener("error",function(t){return a.requestDidError(t)})}return i(t,[{key:"create",value:function(t){this.callback=t,this.xhr.send(JSON.stringify({blob:this.attributes}))}},{key:"requestDidLoad",value:function(t){if(this.status>=200&&this.status<300){var e=this.response,r=e.direct_upload;delete e.direct_upload,this.attributes=e,this.directUploadData=r,this.callback(null,this.toJSON())}else this.requestDidError(t)}},{key:"requestDidError",value:function(t){this.callback('Error creating Blob for "'+this.file.name+'". Status: '+this.status)}},{key:"toJSON",value:function(){var t={};for(var e in this.attributes)t[e]=this.attributes[e];return t}},{key:"status",get:function(){return this.xhr.status}},{key:"response",get:function(){var t=this.xhr,e=t.responseType,r=t.response;return"json"==e?r:JSON.parse(r)}}]),t}()},function(t,e,r){"use strict";r.d(e,"a",function(){return i});var n=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),i=function(){function t(e){var r=this;(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")})(this,t),this.blob=e,this.file=e.file;var n=e.directUploadData,i=n.url,a=n.headers;for(var o in this.xhr=new XMLHttpRequest,this.xhr.open("PUT",i,!0),this.xhr.responseType="text",a)this.xhr.setRequestHeader(o,a[o]);this.xhr.addEventListener("load",function(t){return r.requestDidLoad(t)}),this.xhr.addEventListener("error",function(t){return r.requestDidError(t)})}return n(t,[{key:"create",value:function(t){this.callback=t,this.xhr.send(this.file.slice())}},{key:"requestDidLoad",value:function(t){var e=this.xhr,r=e.status,n=e.response;r>=200&&r<300?this.callback(null,n):this.requestDidError(t)}},{key:"requestDidError",value:function(t){this.callback('Error storing "'+this.file.name+'". Status: '+this.xhr.status)}}]),t}()}])},function(t,e,r){"use strict";function n(t,e,r={}){const{bubbles:n,cancelable:i,detail:a}=r,o=document.createEvent("Event");return o.initEvent(e,n||!0,i||!0),o.detail=a||{},t.dispatchEvent(o),o}r.r(e);var i=r(0);const a="dnd-upload",o=[];class s{constructor(t,e){this.input=t,this.form=t.closest("form"),this.url=this.input.dataset.directUploadUrl,this.iconContainer=document.getElementById(this.input.dataset.iconContainerId),this.file=e,this.upload=new i.DirectUpload(this.file,this.url,this),this.dispatch("initialize")}start(t){this.upload.create((e,r)=>{if(e)console.log("Upload Error:"),console.log(e),this.dispatchError(e),t(e);else{console.log("Upload SUCCESS!!");const n=document.createElement("input");n.setAttribute("type","hidden"),n.setAttribute("value",r.signed_id),n.name=this.input.name,n.setAttribute("data-direct-upload-id",this.upload.id),this.form.appendChild(n),this.dispatch("end"),t(e)}})}dispatch(t,e={}){return e.file=this.file,e.id=this.upload.id,e.iconContainer=this.iconContainer,n(this.input,`${a}:${t}`,{detail:e})}dispatchError(t){this.dispatch("error",{error:t}).defaultPrevented||alert(t)}directUploadWillCreateBlobWithXHR(t){this.dispatch("before-blob-request",{xhr:t})}directUploadWillStoreFileWithXHR(t){this.dispatch("before-storage-request",{xhr:t}),t.upload.addEventListener("progress",t=>this.uploadRequestDidProgress(t))}uploadRequestDidProgress(t){const e=t.loaded/t.total*100;e&&this.dispatch("progress",{progress:e})}}function u(t,e){o.push(new s(t,e))}const d="dnd-uploads";class c{constructor(t){this.form=t,this.current_uploaders=[],o.forEach(e=>{t==e.form&&this.current_uploaders.push(e)})}start(t){const e=()=>{const r=this.current_uploaders.shift();r?r.start(r=>{r?(t(r),this.dispatch("end")):e()}):(t(),this.dispatch("end"))};this.dispatch("start"),e()}dispatch(t,e={}){return n(this.form,`${d}:${t}`,{detail:e})}}const l="dnd-upload";class f{constructor(t){this.input=t,this.start(t)}start(t){console.log("Binding input:change to createUploader");const e=t.closest("form"),r=t.dataset.dndZoneId,i=document.getElementById(r),a=(t.dataset.iconContainerId,document.getElementById(t.dataset.iconContainerId));t.addEventListener("change",e=>{console.log("input:change"),Array.from(t.files).forEach(e=>u(t,e)),t.value=null}),i.addEventListener("dragover",function(t){t.preventDefault()}),i.addEventListener("drop",function(e){e.preventDefault();const r=e.dataTransfer.files;Array.from(r).forEach(e=>u(t,e))});i.addEventListener("click",t=>{var e=t.target;if("true"==e.dataset.dndDelete&&e.hasAttribute("data-direct-upload-id")){t.preventDefault(),console.log("Delete Uploaded File: "+e.dataset.directUploadId),document.querySelectorAll('[data-direct-upload-id="'+e.dataset.directUploadId+'"]').forEach(t=>{t.remove()});for(var r=0;r<o.length;r++)if(o[r].upload.id==e.dataset.directUploadId){o.splice(r,1);break}}}),e.querySelectorAll("input[name='"+t.name+"'][type='hidden'][data-direct-upload-id][data-uploaded-file-name]").forEach(t=>{const e=t.dataset;let r={id:e.directUploadId,fileName:e.uploadedFileName,iconContainer:a};n(t,`${l}:placeholder`,{detail:r})})}}let h=!1;function p(t){v(t)}function y(t){"FORM"==t.target.tagName&&v(t)}function v(t){const e=t.target,r=new c(e);r.current_uploaders.length>0&&(t.preventDefault(),r.start(t=>{t||e.submit()}))}function b(){document.querySelectorAll("input[type=file][data-dnd=true]").forEach(t=>{new f(t)})}function g(){h||(h=!0,document.addEventListener("submit",p),document.addEventListener("ajax:before",y),addEventListener("turbolinks:load",b),addEventListener("load",b))}r.d(e,"start",function(){return g}),setTimeout(function(){g()},1);var m=function(t,e,r,n){var i=n?"complete":"pending",a=n?100:0;t.insertAdjacentHTML("beforeend",`\n    <div id="direct-upload-${e}" class="direct-upload direct-upload--${i}" data-direct-upload-id="${e}">\n      <div id="direct-upload-progress-${e}" class="direct-upload__progress" style="width: ${a}%"></div>\n      <span class="direct-upload__filename">${r}</span>\n    </div>\n    <a href='remove' class='direct-upload__remove' data-dnd-delete='true' data-direct-upload-id="${e}">x</a>\n  `)};addEventListener("dnd-uploads:start",t=>{console.log("dnd-uploads:start")}),addEventListener("dnd-uploads:end",t=>{console.log("dnd-uploads:end")}),addEventListener("dnd-upload:initialize",t=>{console.log("dnd-upload:initialize");const{target:e,detail:r}=t,{id:n,file:i,iconContainer:a}=r;m(a,n,i.name,!1)}),addEventListener("dnd-upload:placeholder",t=>{console.log("dnd-upload:placeholder");const{target:e,detail:r}=t,{id:n,fileName:i,iconContainer:a}=r;m(a,n,i,!0)}),addEventListener("dnd-upload:start",t=>{console.log("dnd-upload:start");const{id:e}=t.detail;document.getElementById(`direct-upload-${e}`).classList.remove("direct-upload--pending")}),addEventListener("dnd-upload:progress",t=>{console.log("dnd-upload:progress");const{id:e,progress:r}=t.detail;document.getElementById(`direct-upload-progress-${e}`).style.width=`${r}%`}),addEventListener("dnd-upload:error",t=>{console.log("dnd-upload:error"),t.preventDefault();const{id:e,error:r}=t.detail,n=document.getElementById(`direct-upload-${e}`);n.classList.add("direct-upload--error"),n.setAttribute("title",r)}),addEventListener("dnd-upload:end",t=>{console.log("dnd-upload:end");const{id:e}=t.detail,r=document.getElementById(`direct-upload-${e}`);r.classList.remove("direct-upload--pending"),r.classList.add("direct-upload--complete")})}])});