(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{9938:function(e,t,i){"use strict";var n=i(930),r=i(5696),a=i(7980);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,i=e.src,o=e.sizes,l=e.unoptimized,g=void 0!==l&&l,m=e.priority,w=void 0!==m&&m,O=e.loading,k=e.lazyRoot,E=void 0===k?null:k,I=e.lazyBoundary,R=void 0===I?"200px":I,L=e.className,P=e.quality,_=e.width,q=e.height,C=e.style,N=e.objectFit,D=e.objectPosition,W=e.onLoadingComplete,B=e.placeholder,M=void 0===B?"empty":B,U=e.blurDataURL,F=h(e,["src","sizes","unoptimized","priority","loading","lazyRoot","lazyBoundary","className","quality","width","height","style","objectFit","objectPosition","onLoadingComplete","placeholder","blurDataURL"]),H=c.useContext(f.ImageConfigContext),V=c.useMemo((function(){var e=y||H||d.imageConfigDefault,t=[].concat(a(e.deviceSizes),a(e.imageSizes)).sort((function(e,t){return e-t})),i=e.deviceSizes.sort((function(e,t){return e-t}));return p({},e,{allSizes:t,deviceSizes:i})}),[H]),T=F,G=o?"responsive":"intrinsic";"layout"in T&&(T.layout&&(G=T.layout),delete T.layout);var J=A;if("loader"in T){if(T.loader){var Q=T.loader;J=function(e){e.config;var t=h(e,["config"]);return Q(t)}}delete T.loader}var K="";if(function(e){return"object"===typeof e&&(S(e)||function(e){return void 0!==e.src}(e))}(i)){var X=S(i)?i.default:i;if(!X.src)throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(X)));if(U=U||X.blurDataURL,K=X.src,(!G||"fill"!==G)&&(q=q||X.height,_=_||X.width,!X.height||!X.width))throw new Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(X)))}i="string"===typeof i?i:K;var Y=j(_),Z=j(q),$=j(P),ee=!w&&("lazy"===O||"undefined"===typeof O);(i.startsWith("data:")||i.startsWith("blob:"))&&(g=!0,ee=!1);b.has(i)&&(ee=!1);var te,ie=c.useState(!1),ne=r(ie,2),re=ne[0],ae=ne[1],oe=u.useIntersection({rootRef:E,rootMargin:R,disabled:!ee}),le=r(oe,3),ce=le[0],se=le[1],de=le[2],ue=!ee||se,fe={boxSizing:"border-box",display:"block",overflow:"hidden",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},ge={boxSizing:"border-box",display:"block",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},me=!1,pe={position:"absolute",top:0,left:0,bottom:0,right:0,boxSizing:"border-box",padding:0,border:"none",margin:"auto",display:"block",width:0,height:0,minWidth:"100%",maxWidth:"100%",minHeight:"100%",maxHeight:"100%",objectFit:N,objectPosition:D};0;0;var he=Object.assign({},C,"raw"===G?{}:pe),ye="blur"!==M||re?{}:{filter:"blur(20px)",backgroundSize:N||"cover",backgroundImage:'url("'.concat(U,'")'),backgroundPosition:D||"0% 0%"};if("fill"===G)fe.display="block",fe.position="absolute",fe.top=0,fe.left=0,fe.bottom=0,fe.right=0;else if("undefined"!==typeof Y&&"undefined"!==typeof Z){var be=Z/Y,ve=isNaN(be)?"100%":"".concat(100*be,"%");"responsive"===G?(fe.display="block",fe.position="relative",me=!0,ge.paddingTop=ve):"intrinsic"===G?(fe.display="inline-block",fe.position="relative",fe.maxWidth="100%",me=!0,ge.maxWidth="100%",te="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27".concat(Y,"%27%20height=%27").concat(Z,"%27/%3e")):"fixed"===G&&(fe.display="inline-block",fe.position="relative",fe.width=Y,fe.height=Z)}else 0;var we={src:v,srcSet:void 0,sizes:void 0};ue&&(we=z({config:V,src:i,unoptimized:g,layout:G,width:Y,quality:$,sizes:o,loader:J}));var Se=i;0;var ze="imagesrcset",je="imagesizes";ze="imageSrcSet",je="imageSizes";var Ae=(n(t={},ze,we.srcSet),n(t,je,we.sizes),t),Oe=c.default.useLayoutEffect,xe=c.useRef(W),ke=c.useRef(i);c.useEffect((function(){xe.current=W}),[W]),Oe((function(){ke.current!==i&&(de(),ke.current=i)}),[de,i]);var Ee=p({isLazy:ee,imgAttributes:we,heightInt:Z,widthInt:Y,qualityInt:$,layout:G,className:L,imgStyle:he,blurStyle:ye,loading:O,config:V,unoptimized:g,placeholder:M,loader:J,srcString:Se,onLoadingCompleteRef:xe,setBlurComplete:ae,setIntersection:ce,isVisible:ue},T);return c.default.createElement(c.default.Fragment,null,"raw"===G?c.default.createElement(x,Object.assign({},Ee)):c.default.createElement("span",{style:fe},me?c.default.createElement("span",{style:ge},te?c.default.createElement("img",{style:{display:"block",maxWidth:"100%",width:"initial",height:"initial",background:"none",opacity:1,border:0,margin:0,padding:0},alt:"","aria-hidden":!0,src:te}):null):null,c.default.createElement(x,Object.assign({},Ee))),w?c.default.createElement(s.default,null,c.default.createElement("link",Object.assign({key:"__nimg-"+we.src+we.srcSet+we.sizes,rel:"preload",as:"image",href:we.srcSet?void 0:we.src},Ae))):null)};var o,l,c=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,i):{};n.get||n.set?Object.defineProperty(t,i,n):t[i]=e[i]}return t.default=e,t}(i(7294)),s=(o=i(6505))&&o.__esModule?o:{default:o},d=i(5980),u=i(7215),f=i(1059),g=(i(7206),i(4979));function m(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable})))),n.forEach((function(t){m(e,t,i[t])}))}return e}function h(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}l={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",experimentalLayoutRaw:!1};var y={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image/",loader:"default",experimentalLayoutRaw:!1},b=new Set,v=(new Map,"data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");var w=new Map([["default",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality;0;if(i.endsWith(".svg")&&!t.dangerouslyAllowSVG)return i;return"".concat(g.normalizePathTrailingSlash(t.path),"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}],["imgix",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,a=new URL("".concat(t.path).concat(k(i))),o=a.searchParams;o.set("auto",o.get("auto")||"format"),o.set("fit",o.get("fit")||"max"),o.set("w",o.get("w")||n.toString()),r&&o.set("q",r.toString());return a.href}],["cloudinary",function(e){var t=e.config,i=e.src,n=e.width,r=e.quality,a=["f_auto","c_limit","w_"+n,"q_"+(r||"auto")].join(",")+"/";return"".concat(t.path).concat(a).concat(k(i))}],["akamai",function(e){var t=e.config,i=e.src,n=e.width;return"".concat(t.path).concat(k(i),"?imwidth=").concat(n)}],["custom",function(e){var t=e.src;throw new Error('Image with src "'.concat(t,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}]]);function S(e){return void 0!==e.default}function z(e){var t=e.config,i=e.src,n=e.unoptimized,r=e.layout,o=e.width,l=e.quality,c=e.sizes,s=e.loader;if(n)return{src:i,srcSet:void 0,sizes:void 0};var d=function(e,t,i,n){var r=e.deviceSizes,o=e.allSizes;if(n&&("fill"===i||"responsive"===i||"raw"===i)){for(var l,c=/(^|\s)(1?\d?\d)vw/g,s=[];l=c.exec(n);l)s.push(parseInt(l[2]));if(s.length){var d=.01*Math.min.apply(Math,s);return{widths:o.filter((function(e){return e>=r[0]*d})),kind:"w"}}return{widths:o,kind:"w"}}return"number"!==typeof t||"fill"===i||"responsive"===i?{widths:r,kind:"w"}:{widths:a(new Set([t,2*t].map((function(e){return o.find((function(t){return t>=e}))||o[o.length-1]})))),kind:"x"}}(t,o,r,c),u=d.widths,f=d.kind,g=u.length-1;return{sizes:c||"w"!==f?c:"100vw",srcSet:u.map((function(e,n){return"".concat(s({config:t,src:i,quality:l,width:e})," ").concat("w"===f?e:n+1).concat(f)})).join(", "),src:s({config:t,src:i,quality:l,width:u[g]})}}function j(e){return"number"===typeof e?e:"string"===typeof e?parseInt(e,10):void 0}function A(e){var t,i=(null===(t=e.config)||void 0===t?void 0:t.loader)||"default",n=w.get(i);if(n)return n(e);throw new Error('Unknown "loader" found in "next.config.js". Expected: '.concat(d.VALID_LOADERS.join(", "),". Received: ").concat(i))}function O(e,t,i,n,r,a){e&&e.src!==v&&e["data-loaded-src"]!==t&&(e["data-loaded-src"]=t,("decode"in e?e.decode():Promise.resolve()).catch((function(){})).then((function(){if(e.parentNode&&(b.add(t),"blur"===n&&a(!0),null===r||void 0===r?void 0:r.current)){var i=e.naturalWidth,o=e.naturalHeight;r.current({naturalWidth:i,naturalHeight:o})}})))}var x=function(e){var t=e.imgAttributes,i=e.heightInt,n=e.widthInt,r=e.qualityInt,a=e.layout,o=e.className,l=e.imgStyle,s=e.blurStyle,d=e.isLazy,u=e.placeholder,f=e.loading,g=e.srcString,m=e.config,y=e.unoptimized,b=e.loader,v=e.onLoadingCompleteRef,w=e.setBlurComplete,S=e.setIntersection,j=e.onLoad,A=e.onError,x=(e.isVisible,h(e,["imgAttributes","heightInt","widthInt","qualityInt","layout","className","imgStyle","blurStyle","isLazy","placeholder","loading","srcString","config","unoptimized","loader","onLoadingCompleteRef","setBlurComplete","setIntersection","onLoad","onError","isVisible"]));return c.default.createElement(c.default.Fragment,null,c.default.createElement("img",Object.assign({},x,t,"raw"===a?{height:i,width:n}:{},{decoding:"async","data-nimg":a,className:o,style:p({},l,s),ref:c.useCallback((function(e){S(e),(null===e||void 0===e?void 0:e.complete)&&O(e,g,0,u,v,w)}),[S,g,a,u,v,w]),onLoad:function(e){O(e.currentTarget,g,0,u,v,w),j&&j(e)},onError:function(e){"blur"===u&&w(!0),A&&A(e)}})),(d||"blur"===u)&&c.default.createElement("noscript",null,c.default.createElement("img",Object.assign({},x,z({config:m,src:g,unoptimized:y,layout:a,width:n,quality:r,sizes:t.sizes,loader:b}),"raw"===a?{height:i,width:n}:{},{decoding:"async","data-nimg":a,style:l,className:o,loading:f||"lazy"}))))};function k(e){return"/"===e[0]?e.slice(1):e}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&(Object.assign(t.default,t),e.exports=t.default)},5675:function(e,t,i){e.exports=i(9938)}}]);