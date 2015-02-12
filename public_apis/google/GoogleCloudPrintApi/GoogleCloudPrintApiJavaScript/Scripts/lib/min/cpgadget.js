(function(){var g,k=this,aa=function(a,b){var c=a.split("."),d=k;c[0]in d||!d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d=d[e]?d[e]:d[e]={}:d[e]=b},ba=function(){},l=function(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==b&&"undefined"==typeof a.call)return"object";return b},n=function(a){return"array"==l(a)},p=function(a){return"string"==typeof a},q=function(a){return"number"==typeof a},ca=function(a){var b=typeof a;return"object"==b&&null!=a||"function"==b},da=function(a,b,c){return a.call.apply(a.bind,
arguments)},ea=function(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}},r=function(a,b,c){r=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return r.apply(null,arguments)},s=function(a,b){function c(){}c.prototype=b.prototype;a.ja=b.prototype;
a.prototype=new c;a.Ma=function(a,c,f){return b.prototype[c].apply(a,Array.prototype.slice.call(arguments,2))}};Function.prototype.bind=Function.prototype.bind||function(a,b){if(1<arguments.length){var c=Array.prototype.slice.call(arguments,1);c.unshift(this,a);return r.apply(null,c)}return r(this,a)};var fa=function(){this.R=void 0},t=function(a){var b=[];ga(new fa,a,b);return b.join("")},ga=function(a,b,c){switch(typeof b){case "string":ha(b,c);break;case "number":c.push(isFinite(b)&&!isNaN(b)?b:"null");break;case "boolean":c.push(b);break;case "undefined":c.push("null");break;case "object":if(null==b){c.push("null");break}if(n(b)){var d=b.length;c.push("[");for(var e="",f=0;f<d;f++)c.push(e),e=b[f],ga(a,a.R?a.R.call(b,String(f),e):e,c),e=",";c.push("]");break}c.push("{");d="";for(f in b)Object.prototype.hasOwnProperty.call(b,
f)&&(e=b[f],"function"!=typeof e&&(c.push(d),ha(f,c),c.push(":"),ga(a,a.R?a.R.call(b,f,e):e,c),d=","));c.push("}");break;case "function":break;default:throw Error("Unknown type: "+typeof b);}},ia={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},ja=/\uffff/.test("\uffff")?/[\\\"\x00-\x1f\x7f-\uffff]/g:/[\\\"\x00-\x1f\x7f-\xff]/g,ha=function(a,b){b.push('"',a.replace(ja,function(a){if(a in ia)return ia[a];var b=a.charCodeAt(0),e="\\u";16>b?e+=
"000":256>b?e+="00":4096>b&&(e+="0");return ia[a]=e+b.toString(16)}),'"')};var u=function(){this.V="print-document";this.X=0;this.ea=!1},ka={Na:"print-document",Oa:"print-file"};u.prototype.Ga=function(a){this.V=a;return this};u.prototype.Ia=function(a){this.X=a;return this};u.prototype.Ja=function(a){this.ea=a;return this};aa("cloudprint.Configuration",u);u.prototype.setMode=u.prototype.Ga;u.prototype.setSelectedUser=u.prototype.Ia;u.prototype.setShowPrintLocally=u.prototype.Ja;aa("cloudprint.Configuration.Mode",ka);ka.PRINT_DOCUMENT="print-document";ka.PRINT_FILE="print-file";var la=function(a,b,c,d){this.Ca=a;this.Ba=b;this.ya=c;this.za=d||""};var v=function(a){if(Error.captureStackTrace)Error.captureStackTrace(this,v);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))};s(v,Error);v.prototype.name="CustomError";var w;var ma=function(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")},ta=function(a){if(!na.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(oa,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(pa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(qa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ra,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(sa,"&#39;"));return a},oa=/&/g,pa=/</g,qa=/>/g,ra=/"/g,sa=/'/g,na=/[&<>"']/,wa=function(a){var b=
0,c=String(ua).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");a=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split(".");for(var d=Math.max(c.length,a.length),e=0;0==b&&e<d;e++){var f=c[e]||"",h=a[e]||"",m=RegExp("(\\d*)(\\D*)","g"),B=RegExp("(\\d*)(\\D*)","g");do{var O=m.exec(f)||["","",""],P=B.exec(h)||["","",""];if(0==O[0].length&&0==P[0].length)break;b=va(0==O[1].length?0:parseInt(O[1],10),0==P[1].length?0:parseInt(P[1],10))||va(0==O[2].length,0==P[2].length)||va(O[2],P[2])}while(0==b)}return b},
va=function(a,b){return a<b?-1:a>b?1:0};var x=function(a,b){b.unshift(a);v.call(this,ma.apply(null,b));b.shift()};s(x,v);x.prototype.name="AssertionError";
var xa=function(a,b,c,d){var e="Assertion failed";if(c)var e=e+(": "+c),f=d;else a&&(e+=": "+a,f=b);throw new x(""+e,f||[]);},y=function(a,b,c){a||xa("",null,b,Array.prototype.slice.call(arguments,2))},ya=function(a,b){throw new x("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));},za=function(a,b,c){p(a)||xa("Expected string but got %s: %s.",[l(a),a],b,Array.prototype.slice.call(arguments,2));return a},Aa=function(a,b,c,d){a instanceof b||xa("instanceof check failed.",null,c,Array.prototype.slice.call(arguments,
3))};var z=Array.prototype,Ba=z.indexOf?function(a,b,c){y(null!=a.length);return z.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(p(a))return p(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Ca=function(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var Da="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),Ea=function(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Da.length;f++)c=Da[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}};var A;t:{var Fa=k.navigator;if(Fa){var Ga=Fa.userAgent;if(Ga){A=Ga;break t}}A=""}var C=function(a){return-1!=A.indexOf(a)};var D,Ha,Ia=C("Opera")||C("OPR"),E=C("Trident")||C("MSIE"),F=C("Gecko")&&-1==A.toLowerCase().indexOf("webkit")&&!(C("Trident")||C("MSIE")),G=-1!=A.toLowerCase().indexOf("webkit"),Ja=G&&C("Mobile"),Ka=k.navigator||null,La=Ka&&Ka.platform||"";D=-1!=La.indexOf("Mac");Ha=-1!=La.indexOf("Win");
var Ma=-1!=La.indexOf("Linux"),Na=function(){var a=k.document;return a?a.documentMode:void 0},ua=function(){var a="",b;if(Ia&&k.opera)return a=k.opera.version,"function"==l(a)?a():a;F?b=/rv\:([^\);]+)(\)|;)/:E?b=/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/:G&&(b=/WebKit\/(\S+)/);b&&(a=(a=b.exec(A))?a[1]:"");return E&&(b=Na(),b>parseFloat(a))?String(b):a}(),Oa={},H=function(a){return Oa[a]||(Oa[a]=0<=wa(a))},Pa=k.document,Qa=Pa&&E?Na()||("CSS1Compat"==Pa.compatMode?parseInt(ua,10):5):void 0;!F&&!E||E&&E&&9<=Qa||F&&H("1.9.1");E&&H("9");var Sa=function(a,b){var c=b||document,d=null;return(d=c.querySelectorAll&&c.querySelector?c.querySelector("."+a):Ra(a,b)[0])||null},Ra=function(a,b){var c,d,e,f;c=document;c=b||c;if(c.querySelectorAll&&c.querySelector&&a)return c.querySelectorAll(""+(a?"."+a:""));if(a&&c.getElementsByClassName){var h=c.getElementsByClassName(a);return h}h=c.getElementsByTagName("*");if(a){f={};for(d=e=0;c=h[d];d++){var m=c.className,B;if(B="function"==typeof m.split)B=0<=Ba(m.split(/\s+/),a);B&&(f[e++]=c)}f.length=
e;return f}return h},I=function(a){this.Fa=a||k.document||document};I.prototype.createElement=function(a){return this.Fa.createElement(a)};I.prototype.appendChild=function(a,b){a.appendChild(b)};ta("".Ra?"".Pa():"");var Ta={Ta:!0},Ua={Ua:!0},J=function(){throw Error("Do not instantiate directly");};J.prototype.ba=null;J.prototype.toString=function(){return this.content};var Va=function(a){if(!ca(a))return String(a);if(a instanceof J){if(a.t===Ta)return za(a.content);if(a.t===Ua)return ta(a.content)}ya("Soy template output is unsafe for use as HTML: "+a);return"zSoyz"},Wa=/^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,Xa={};var Ya=function(a,b){b||w||(w=new I);this.pa=a||null;this.qa=[]};Ya.prototype.ra=ba;var $a=function(){var a=Za;return a.pa?a.pa.getData():{}};var Za=new Ya;var ab=function(){};var bb=function(a){bb[" "](a);return a};bb[" "]=ba;var cb=!E||E&&9<=Qa,db=E&&!H("9");!G||H("528");F&&H("1.9b")||E&&H("8")||Ia&&H("9.5")||G&&H("528");F&&!H("8")||E&&H("9");var K=function(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.r=!1;this.ca=!0};K.prototype.preventDefault=function(){this.defaultPrevented=!0;this.ca=!1};var L=function(a,b){K.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.O=this.state=null;if(a){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(F){var e;t:{try{bb(d.nodeName);e=!0;break t}catch(f){}e=!1}e||(d=null)}}else"mouseover"==
c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=G||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=G||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=
a.metaKey;this.state=a.state;this.O=a;a.defaultPrevented&&this.preventDefault()}};s(L,K);L.prototype.preventDefault=function(){L.ja.preventDefault.call(this);var a=this.O;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,db)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var eb="closure_listenable_"+(1E6*Math.random()|0),M=function(a){try{return!(!a||!a[eb])}catch(b){return!1}},fb=0;var gb=function(a,b,c,d,e){this.l=a;this.K=null;this.src=b;this.type=c;this.H=!!d;this.J=e;this.key=++fb;this.p=this.I=!1},N=function(a){a.p=!0;a.l=null;a.K=null;a.src=null;a.J=null};var Q=function(a){this.src=a;this.b={};this.u=0};Q.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.b[f];a||(a=this.b[f]=[],this.u++);var h=hb(a,b,d,e);-1<h?(b=a[h],c||(b.I=!1)):(b=new gb(b,this.src,f,!!d,e),b.I=c,a.push(b));return b};Q.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.b))return!1;var e=this.b[a];b=hb(e,b,c,d);return-1<b?(N(e[b]),y(null!=e.length),z.splice.call(e,b,1),0==e.length&&(delete this.b[a],this.u--),!0):!1};
var ib=function(a,b){var c=b.type;if(!(c in a.b))return!1;var d=a.b[c],e=Ba(d,b),f;if(f=0<=e)y(null!=d.length),z.splice.call(d,e,1);f&&(N(b),0==a.b[c].length&&(delete a.b[c],a.u--));return f};Q.prototype.N=function(a){a=a&&a.toString();var b=0,c;for(c in this.b)if(!a||c==a){for(var d=this.b[c],e=0;e<d.length;e++)++b,N(d[e]);delete this.b[c];this.u--}return b};Q.prototype.v=function(a,b,c,d){a=this.b[a.toString()];var e=-1;a&&(e=hb(a,b,c,d));return-1<e?a[e]:null};
var hb=function(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.p&&f.l==b&&f.H==!!c&&f.J==d)return e}return-1};var jb="closure_lm_"+(1E6*Math.random()|0),kb={},lb=0,R=function(a,b,c,d,e){if(n(b)){for(var f=0;f<b.length;f++)R(a,b[f],c,d,e);return null}c=mb(c);if(M(a))a=a.q(b,c,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,h=S(a);h||(a[jb]=h=new Q(a));c=h.add(b,c,!1,d,e);c.K||(d=nb(),c.K=d,d.src=a,d.l=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(ob(b.toString()),d),lb++);a=c}return a},nb=function(){var a=pb,b=cb?function(c){return a.call(b.src,b.l,c)}:function(c){c=a.call(b.src,
b.l,c);if(!c)return c};return b},qb=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)qb(a,b[f],c,d,e);else c=mb(c),M(a)?a.aa(b,c,d,e):a&&(a=S(a))&&(b=a.v(b,c,!!d,e))&&T(b)},T=function(a){if(q(a)||!a||a.p)return!1;var b=a.src;if(M(b))return ib(b.e,a);var c=a.type,d=a.K;b.removeEventListener?b.removeEventListener(c,d,a.H):b.detachEvent&&b.detachEvent(ob(c),d);lb--;(c=S(b))?(ib(c,a),0==c.u&&(c.src=null,b[jb]=null)):N(a);return!0},ob=function(a){return a in kb?kb[a]:kb[a]="on"+a},sb=function(a,
b,c,d){var e=1;if(a=S(a))if(b=a.b[b.toString()])for(b=Ca(b),a=0;a<b.length;a++){var f=b[a];f&&f.H==c&&!f.p&&(e&=!1!==rb(f,d))}return Boolean(e)},rb=function(a,b){var c=a.l,d=a.J||a.src;a.I&&T(a);return c.call(d,b)},pb=function(a,b){if(a.p)return!0;if(!cb){var c;if(!(c=b))t:{c=["window","event"];for(var d=k,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break t}c=d}e=c;c=new L(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){t:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break t}catch(h){f=!0}if(f||
void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,m=e.length-1;!c.r&&0<=m;m--)c.currentTarget=e[m],d&=sb(e[m],f,!0,c);for(m=0;!c.r&&m<e.length;m++)c.currentTarget=e[m],d&=sb(e[m],f,!1,c)}return d}return rb(a,new L(b,this))},S=function(a){a=a[jb];return a instanceof Q?a:null},tb="__closure_events_fn_"+(1E9*Math.random()>>>0),mb=function(a){y(a,"Listener can not be null.");if("function"==l(a))return a;y(a.handleEvent,"An object listener must have handleEvent method.");
return a[tb]||(a[tb]=function(b){return a.handleEvent(b)})};var U=function(a){this.la=a;this.P={}};s(U,ab);var ub=[];U.prototype.q=function(a,b,c,d){n(b)||(b&&(ub[0]=b.toString()),b=ub);for(var e=0;e<b.length;e++){var f=R(a,b[e],c||this.handleEvent,d||!1,this.la||this);if(!f)break;this.P[f.key]=f}return this};U.prototype.aa=function(a,b,c,d,e){if(n(b))for(var f=0;f<b.length;f++)this.aa(a,b[f],c,d,e);else c=c||this.handleEvent,e=e||this.la||this,c=mb(c),d=!!d,b=M(a)?a.v(b,c,d,e):a?(a=S(a))?a.v(b,c,d,e):null:null,b&&(T(b),delete this.P[b.key]);return this};
U.prototype.N=function(){var a=this.P,b=T,c;for(c in a)b.call(void 0,a[c],c,a);this.P={}};U.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented");};E&&H(8);var V=function(){J.call(this)};s(V,J);V.prototype.t=Ta;var vb=function(){J.call(this)};s(vb,J);vb.prototype.t={Sa:!0};var wb=function(a,b){this.content=String(a);this.ba=null!=b?b:null};s(wb,J);wb.prototype.t=Ua;var xb=function(a){function b(){}b.prototype=a.prototype;return function(a,d){var e=new b;e.content=String(a);void 0!==d&&(e.ba=d);return e}},yb=xb(V);xb(vb);
var zb=function(a){var b;t:{b=new I(void 0);y(a,"Soy template may not be null.");b=(b||w||(w=new I)).createElement("DIV");a=Va(a(Xa,void 0,void 0));var c=a.match(Wa);y(!c,"This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s",c&&c[0],a);b.innerHTML=a;if(1==b.childNodes.length&&(a=b.firstChild,1==a.nodeType)){b=a;break t}}return b};
(function(a){function b(){}b.prototype=a.prototype;return function(a,d){if(!String(a))return"";var e=new b;e.content=String(a);void 0!==d&&(e.ba=d);return e}})(V);var Ab=function(){return yb('<style type="text/css">.__gcp_button_cls {display: block; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAoCAYAAAA/tpB3AAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAAK6wAACusBgosNWgAAAAd0SU1FB9sEFhYNCw4IkMgAAAA1SURBVAjXvcexCQAxDATB5aT+C1UNEufEYOzPP1lmsW1VFepuNDNbzx4B/yQzUUR8dC+2vQAZOSMDprhidAAAAABJRU5ErkJggg==) repeat-x; border: 1px solid #ccc; height: 20px; text-decoration: none; font: bold 14px/20px "Droid Sans", "Helvetica Neue", Arial, Helvetica, Geneva, sans-serif; color: #666; position: relative; padding: 0 5px 0 25px; float: left; text-shadow: #fff 0 1px 1px; cursor: pointer; -webkit-border-radius: 3px; -moz-border-radius: 3px; border-radius: 3px; -webkit-transition: background-position .2s ease-out, color .2s ease-out;}.__gcp_button_cls:hover {background-position: 0 -20px; color: #111;}.__gcp_button_img_cls {height: 18px; width: 17px; position: absolute; left: 5px; top: 2px; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASBAMAAABP1yhnAAAAA3NCSVQICAjb4U/gAAAAFVBMVEX///+RkZH///+RkZEAmQDLPDwAVKrOcjT8AAAAB3RSTlMA7v//////bfV3xQAAAAlwSFlzAAALEgAACxIB0t1+/AAAABx0RVh0U29mdHdhcmUAQWRvYmUgRmlyZXdvcmtzIENTNXG14zYAAAAVdEVYdENyZWF0aW9uIFRpbWUANC8xOS8xMcNUYbQAAABuSURBVAiZXY7BCcAwCEVFQxboAmLoPegCoTv0HnrI/iNUDb3Ug3588r8AQGYGWYdI6yFIATCXxN5aqmyBEwSOs42NLVwcK2m4YIdO512u7rtmKGWYMWCrswyVsKoP8k6ra82/0u8XDGfOIPHy8QKJ2w71g2IHXgAAAABJRU5ErkJggg==) no-repeat center;}</style><div class="__gcp_button_cls"><div class="__gcp_button_img_cls"></div><div>Print</div></div>')};
Ab.S="cp.gadget.tpl.printButton";var Bb=function(){return new wb("You are using an outdated browser. For better performance and more advanced features such as Google Cloud Print - please upgrade to a modern browser such as Google Chrome, Firefox 3 or IE9 (if using IE9, ensure that compatibility mode is turned off).",void 0)};Bb.S="cp.gadget.tpl.browserIsNotSupported";var Cb=function(a,b,c,d){this.name=a;this.data=b;this.source=c;this.origin=d},Db=function(){this.Q={};var a=this.G=r(this.Aa,this);window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent("onmessage",a)};Db.prototype.addListener=function(a,b,c,d){var e=this.Q[a]||[];b=new Eb(b,c,d);0<=Ba(e,b)||e.push(b);this.Q[a]=e;return this};Db.prototype.ga=function(){this.Q={};return this};
Db.prototype.Aa=function(a){if(a.data){var b=a.data.indexOf("::");if(!(0>=b))for(var c=a.data.substr(0,b),b=new Cb(c,a.data.substr(b+2),a.source,a.origin),c=this.Q[c]||[],d,e=0;d=c[e];e++)d.source&&d.source!=a.source||"*"!=d.origin&&d.origin!=a.origin||d.Da(b)}};var Eb=function(a,b,c){this.Da=a;this.source=b||null;this.origin=c||"*"};var W=function(a){this.G=new Db;this.U=this.T=!1;this.k=this.j=this.g=this.i=null;this.h=[];this.o=a};g=W.prototype;g.open=function(){this.U&&this.close();this.U=!0;this.ha();var a=this.$();a&&this.G.addListener("cp-dialog-on-init",r(this.Y,this),a).addListener("cp-dialog-on-close",r(this.close,this),a).addListener("cp-dialog-on-print-locally",r(this.wa,this),a)};g.close=function(){this.fa();this.G.ga();this.U=this.T=!1;this.j&&this.j()};g.B=function(a){this.i=a;this.a&&this.a.B(this.i)};
g.A=function(a){this.g=a;Fb(this,this.g)};g.C=function(a){this.j=a};g.D=function(a){this.k=a};g.F=function(a){this.h=a;Gb(this,"cp-dialog-set-tags",t(this.h))};var Hb=function(a){return(a.i||"https://www.google.com/")+a.ia()+"?user="+a.o.X+"&hl=en"};W.prototype.Y=function(){this.T=!0;Fb(this,this.g);Gb(this,"cp-dialog-set-tags",t(this.h));var a;a=this.o;a=t({mode:a.V,selected_user:a.X,"show-print-locally":a.ea});Gb(this,"cp-dialog-set-configuration",a)};
var Fb=function(a,b){if(b){var c;c={};c.type=b.Ca;c.title=b.Ba;c.content=b.ya;c.encoding=b.za;c=t(c);Gb(a,"cp-dialog-set-print-document",c)}},Gb=function(a,b,c){var d=a.$();d&&a.T&&d.postMessage&&d.postMessage(b+"::"+c,"*")};W.prototype.wa=function(){this.close();this.k?this.k():window.print()};var Kb=function(a,b,c,d,e){if(!(E||G&&H("525")))return!0;if(D&&e)return Ib(a);if(e&&!d)return!1;q(b)&&(b=Jb(b));if(!c&&(17==b||18==b||D&&91==b))return!1;if(G&&d&&c)switch(a){case 220:case 219:case 221:case 192:case 186:case 189:case 187:case 188:case 190:case 191:case 192:case 222:return!1}if(E&&d&&b==a)return!1;switch(a){case 13:return!(E&&E&&9<=Qa);case 27:return!G}return Ib(a)},Ib=function(a){if(48<=a&&57>=a||96<=a&&106>=a||65<=a&&90>=a||G&&0==a)return!0;switch(a){case 32:case 63:case 107:case 109:case 110:case 111:case 186:case 59:case 189:case 187:case 61:case 188:case 190:case 191:case 192:case 222:case 219:case 220:case 221:return!0;
default:return!1}},Jb=function(a){if(F)a=Lb(a);else if(D&&G)t:switch(a){case 93:a=91;break t}return a},Lb=function(a){switch(a){case 61:return 187;case 59:return 186;case 173:return 189;case 224:return 91;case 0:return 224;default:return a}};var X=function(){this.e=new Q(this);this.xa=this};s(X,ab);X.prototype[eb]=!0;g=X.prototype;g.ma=null;g.addEventListener=function(a,b,c,d){R(this,a,b,c,d)};g.removeEventListener=function(a,b,c,d){qb(this,a,b,c,d)};
g.dispatchEvent=function(a){Mb(this);var b,c=this.ma;if(c){b=[];for(var d=1;c;c=c.ma)b.push(c),y(1E3>++d,"infinite loop")}c=this.xa;d=a.type||a;if(p(a))a=new K(a,c);else if(a instanceof K)a.target=a.target||c;else{var e=a;a=new K(d,c);Ea(a,e)}var e=!0,f;if(b)for(var h=b.length-1;!a.r&&0<=h;h--)f=a.currentTarget=b[h],e=Nb(f,d,!0,a)&&e;a.r||(f=a.currentTarget=c,e=Nb(f,d,!0,a)&&e,a.r||(e=Nb(f,d,!1,a)&&e));if(b)for(h=0;!a.r&&h<b.length;h++)f=a.currentTarget=b[h],e=Nb(f,d,!1,a)&&e;return e};
g.q=function(a,b,c,d){Mb(this);return this.e.add(String(a),b,!1,c,d)};g.aa=function(a,b,c,d){return this.e.remove(String(a),b,c,d)};g.ga=function(a){return this.e?this.e.N(a):0};var Nb=function(a,b,c,d){b=a.e.b[String(b)];if(!b)return!0;b=Ca(b);for(var e=!0,f=0;f<b.length;++f){var h=b[f];if(h&&!h.p&&h.H==c){var m=h.l,B=h.J||h.src;h.I&&ib(a.e,h);e=!1!==m.call(B,d)&&e}}return e&&!1!=d.ca};X.prototype.v=function(a,b,c,d){return this.e.v(String(a),b,c,d)};var Mb=function(a){y(a.e,"Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")};var Y=function(a,b){X.call(this);a&&(this.M&&this.detach(),this.d=a,this.L=R(this.d,"keypress",this,b),this.W=R(this.d,"keydown",this.ua,b,this),this.M=R(this.d,"keyup",this.va,b,this))};s(Y,X);g=Y.prototype;g.d=null;g.L=null;g.W=null;g.M=null;g.c=-1;g.f=-1;g.Z=!1;
var Ob={3:13,12:144,63232:38,63233:40,63234:37,63235:39,63236:112,63237:113,63238:114,63239:115,63240:116,63241:117,63242:118,63243:119,63244:120,63245:121,63246:122,63247:123,63248:44,63272:46,63273:36,63275:35,63276:33,63277:34,63289:144,63302:45},Pb={Up:38,Down:40,Left:37,Right:39,Enter:13,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,"U+007F":46,Home:36,End:35,PageUp:33,PageDown:34,Insert:45},Qb=E||G&&H("525"),Rb=D&&F;
Y.prototype.ua=function(a){G&&(17==this.c&&!a.ctrlKey||18==this.c&&!a.altKey||D&&91==this.c&&!a.metaKey)&&(this.f=this.c=-1);-1==this.c&&(a.ctrlKey&&17!=a.keyCode?this.c=17:a.altKey&&18!=a.keyCode?this.c=18:a.metaKey&&91!=a.keyCode&&(this.c=91));Qb&&!Kb(a.keyCode,this.c,a.shiftKey,a.ctrlKey,a.altKey)?this.handleEvent(a):(this.f=Jb(a.keyCode),Rb&&(this.Z=a.altKey))};Y.prototype.va=function(a){this.f=this.c=-1;this.Z=a.altKey};
Y.prototype.handleEvent=function(a){var b=a.O,c,d,e=b.altKey;E&&"keypress"==a.type?(c=this.f,d=13!=c&&27!=c?b.keyCode:0):G&&"keypress"==a.type?(c=this.f,d=0<=b.charCode&&63232>b.charCode&&Ib(c)?b.charCode:0):Ia?(c=this.f,d=Ib(c)?b.keyCode:0):(c=b.keyCode||this.f,d=b.charCode||0,Rb&&(e=this.Z),D&&63==d&&224==c&&(c=191));var f=c=Jb(c),h=b.keyIdentifier;c?63232<=c&&c in Ob?f=Ob[c]:25==c&&a.shiftKey&&(f=9):h&&h in Pb&&(f=Pb[h]);a=f==this.c;this.c=f;b=new Sb(f,d,a,b);b.altKey=e;this.dispatchEvent(b)};
Y.prototype.detach=function(){this.L&&(T(this.L),T(this.W),T(this.M),this.M=this.W=this.L=null);this.d=null;this.f=this.c=-1};var Sb=function(a,b,c,d){L.call(this,d);this.type="key";this.keyCode=a;this.charCode=b;this.repeat=c};s(Sb,L);var Tb=function(a,b){X.call(this);var c=this.d=a;if(c=ca(c)&&1==c.nodeType?this.d:this.d?this.d.body:null){var d=9==c.nodeType?c:c.ownerDocument||c.document;d.defaultView&&d.defaultView.getComputedStyle&&(c=d.defaultView.getComputedStyle(c,null))&&(c.direction||c.getPropertyValue("direction"))}R(this.d,F?"DOMMouseScroll":"mousewheel",this,b)};s(Tb,X);
Tb.prototype.handleEvent=function(a){var b=0,c=0,d=0;a=a.O;if("mousewheel"==a.type){c=1;if(E||G&&(Ha||H("532.0")))c=40;d=Ub(-a.wheelDelta,c);void 0!==a.wheelDeltaX?(b=Ub(-a.wheelDeltaX,c),c=Ub(-a.wheelDeltaY,c)):c=d}else d=a.detail,100<d?d=3:-100>d&&(d=-3),void 0!==a.axis&&a.axis===a.HORIZONTAL_AXIS?b=d:c=d;if(q(this.na)){var e=this.na;Math.min(Math.max(b,-this.na),e)}q(this.oa)&&(b=this.oa,Math.min(Math.max(c,-this.oa),b));d=new Vb(d,a);this.dispatchEvent(d)};
var Ub=function(a,b){return G&&(D||Ma)&&0!=a%b?a:a/b},Vb=function(a,b){L.call(this,b);this.type="mousewheel";this.detail=a};s(Vb,L);var Wb=function(){return yb('<style type="text/css">.__gcp_dialog_background_cls {position: fixed; top: 0; bottom: 0; left: 0; right: 0; z-index: 1002; background: white; opacity: 0.75;}.__gcp_dialog_container_cls {height: 385px; width: 600px; top: 50%; margin-top: -190px; left: 50%; margin-left: -325px; padding: 15px 25px; -webkit-box-shadow: 0 4px 16px rgba(0,0,0,.2); -moz-box-shadow: 0 4px 16px rgba(0,0,0,.2); box-shadow: 0 4px 16px rgba(0,0,0,.2); background: white; background-clip: padding-box; border: 1px solid #ACACAC; border: 1px solid rgba(0, 0, 0, .333); outline: 0; position: fixed; background: white; z-index: 2147483646;}.__gcp_dialog_close_cls {height: 15px; width: 15px; top: 21px; right: 31px; position: absolute; background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sEGRcrKtgeedMAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAWklEQVQoz8WTuQ0AMQgEDc1S01Zrp77TgPwEJoQdtCAwSb2dxiksqXu7CF91QnknwV+Y5T9wRFgFzHW0TQ0IRJiEBKZwNvPWtrMRym3PYNlg1SLqnp2n3XzVAKIEULf6A6q/AAAAAElFTkSuQmCC) no-repeat center; cursor: pointer; z-index: 2147483647;}</style><div class="__gcp_dialog_background_cls"></div><div class="__gcp_dialog_container_cls"><div class="__gcp_dialog_close_cls"></div><iframe class="__gcp_dialog_iframe_cls" style="height: 100%; width: 100%; border: 0;"></iframe></div>')};
Wb.S="cp.gadget.tpl.printDialogDesktop";var Xb=function(a){W.call(this,a);this.s=new U(this);this.sa=new Tb(document);this.m=zb(Wb);this.da=this.n=null};s(Xb,W);g=Xb.prototype;g.ha=function(){document.body.appendChild(this.m);this.n=Sa("__gcp_dialog_iframe_cls",this.m);var a=Sa("__gcp_dialog_close_cls",this.m);this.m.style.display="";this.da=new Y(this.m.ownerDocument.body);this.s.q(a,"click",r(this.close,this)).q(this.da,"key",r(this.ta,this)).q(this.sa,"mousewheel",function(a){a.preventDefault()});this.n.src=Hb(this);this.n.focus()};
g.fa=function(){this.m.style.display="none";this.n&&(this.n.src="");this.s.N()};g.$=function(){return this.n&&this.n.contentWindow};g.ia=function(){return"cloudprint/gadget.html"};g.Y=function(){Xb.ja.Y.call(this);Sa("__gcp_dialog_close_cls",this.m).style.display="none"};g.ta=function(a){27==a.keyCode&&(a.preventDefault(),this.close())};var Z=function(a){W.call(this,a);this.w=null};s(Z,W);Z.prototype.$=function(){return this.w};Z.prototype.ia=function(){return"cloudprint/dialog.html"};Z.prototype.ha=function(){this.w=window.open(Hb(this))};Z.prototype.fa=function(){this.w&&!this.w.closed&&this.w.close()};var $=function(a){this.s=new U(this);this.k=this.j=this.g=this.a=this.i=null;this.h=[];this.o=a||new u};g=$.prototype;g.Ha=function(a){this.s.N();a&&this.s.q(a,"click",r(this.ka,this))};g.B=function(a){this.i=a;this.a&&this.a.B(this.i)};g.A=function(a,b,c,d){if("print-document"!=this.o.V)throw Error("Cannot set print document on gadget which is not in PRINT_DOCUMENT mode.");this.g=new la(a,b,c,d);this.a&&this.a.A(this.g)};g.C=function(a){this.j=a||null;this.a&&this.a.C(this.j)};
g.D=function(a){this.k=a||null;this.a&&this.a.D(this.k)};g.F=function(a){this.h=a;this.a&&this.a.F(this.h)};
g.ka=function(){if(E?0<=wa("9"):F?0<=wa("1.9.0"):1){if(!this.a){var a;Ja?a=!0:(a=A,a=-1!=a.indexOf("Android")||-1!=a.indexOf("iPad")||-1!=a.indexOf("iPod")||-1!=a.indexOf("iPhone"));this.a=a?new Z(this.o):new Xb(this.o);this.a.B(this.i);this.a.A(this.g);this.a.C(this.j);this.a.D(this.k);this.a.F(this.h)}this.a.open()}else{a=alert;var b=Bb($a());Aa(b,J,"renderText cannot be called on a non-strict soy template");y(b.t===Ua,'renderText was called with a template of kind other than "text"');Za.qa.push({La:Bb.S,
data:void 0,Ka:$a()});Za.ra();a(String(b))}};g.Ea=function(){this.a&&this.a.close()};aa("cloudprint.Gadget",$);$.createDefaultPrintButton=function(a){var b=zb(Ab);(a=p(a)?document.getElementById(a):a)&&a.appendChild(b);return b};$.prototype.setPrintButton=$.prototype.Ha;$.prototype.setPrintDocument=$.prototype.A;$.prototype.setOnCloseCallback=$.prototype.C;$.prototype.setOnPrintLocallyCallback=$.prototype.D;$.prototype.setPrintTags=$.prototype.F;$.prototype.openPrintDialog=$.prototype.ka;
$.prototype.closePrintDialog=$.prototype.Ea;})();
