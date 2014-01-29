/* interact.js v1.0.4 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(e){"use strict";function t(){}function n(e){j=e.pageX,q=e.pageY,L=e.clientX,N=e.clientY}function r(e,t){var n,r,i;return e=e||"page",t.touches?(n=t.touches.length?t.touches[0]:t.changedTouches[0],r=n[e+"X"],i=n[e+"Y"]):(r=t[e+"X"],i=t[e+"Y"]),{x:r,y:i}}function i(t){if(St){var n=r("screen",t);return n.x+=e.scrollX,n.y+=e.scrollY,n}return r("page",t)}function o(e){return r(St?"screen":"client",e)}function s(){return{x:e.scrollX||I.documentElement.scrollLeft,y:e.scrollY||I.documentElement.scrollTop}}function a(e){var t,n=e.touches,r=0,i=0,o=0,s=0;for(t=0;t<n.length;t++)r+=n[t].pageX/n.length,i+=n[t].pageY/n.length,o+=n[t].clientX/n.length,s+=n[t].clientY/n.length;return{pageX:r,pageY:i,clientX:o,clientY:s}}function l(e){if(e.touches.length){var t,n=e.touches,r=e.touches[0].pageX,i=e.touches[0].pageY,o=r,s=i;for(t=1;t<n.length;t++)r=r>e.touches[t].pageX?r:e.touches[t].pageX,i=r>e.touches[t].pageX?i:e.touches[t].pageY;return{left:r,top:i,width:o-r,height:s-i}}}function c(e){var t=(Z&&Z.options||nt).deltaSource,n=t+"X",r=t+"Y",i=e.touches[0][n],o=e.touches[0][r];return"touchend"===e.type&&1===e.touches.length?(i-=e.changedTouches[0][n],o-=e.changedTouches[0][r]):(i-=e.touches[1][n],o-=e.touches[1][r]),Math.sqrt(i*i+o*o)}function h(e,t){var n=(Z&&Z.options||nt).deltaSource,r=n+"X",i=n+"Y",o=e.touches[0][r],s=e.touches[0][i];"touchend"===e.type&&1===e.touches.length?(o-=e.changedTouches[0][r],s-=e.changedTouches[0][i]):(o-=e.touches[1][r],s-=e.touches[1][i]);var a=180*Math.atan(s/o)/Math.PI;if("number"==typeof t){var l=a-t,c=l%360;c>315?a-=360+a/360|0:c>135?a-=180+a/360|0:-315>c?a+=360+a/360|0:-135>c&&(a+=180+a/360|0)}return a}function u(e){for(var t=0,n=e.length;n>t;t++)e[t].rect=e[t].getRect()}function d(e){if(e.length){var t,n,r,i,o,s=e[0],a=[],l=[];for(i=1;i<e.length;i++){if(t=e[i],!a.length)for(n=s;n.parentNode!==I;)a.unshift(n),n=n.parentNode;if(s instanceof P&&t instanceof C&&!(t instanceof k)){if(t===s.parentNode)continue;n=t.ownerSVGElement}else n=t;for(l=[];n.parentNode!==I;)l.unshift(n),n=n.parentNode;for(o=0;l[o]&&l[o]===a[o];)o++;var c=[l[o-1],l[o],a[o]];for(r=c[0].lastChild;r;){if(r===c[1]){s=t,a=[];break}if(r===c[2])break;r=r.previousSibling}}return{element:s,index:e.indexOf(s)}}}function p(e){if(F.length||J.length){var t,n,r=[],i=[],o=[],s=[];for(t=0;t<F.length;t++)F[t].dropCheck(e)&&(r.push(F[t]),i.push(F[t]._element));if(n=d(i),et=n?F[n.index]:null,J.length){var a=Z._element;for(t=0;t<J.length;t++)for(var l=J[t],c=I.querySelectorAll(l.selector),h=0,u=c.length;u>h;h++)l._element=c[h],l.rect=l.getRect(),l._element!==a&&-1===i.indexOf(l._element)&&s.indexOf(-1===l._element)&&l.dropCheck(e)&&(o.push(l),s.push(l._element));s.length&&(et&&(o.push(et),s.push(et._element)),n=d(s),n&&(et=o[n.index],et.selector&&(et._element=s[n.index])))}return et}}function g(e,t,n,r,s){var u,d,p=(Z&&Z.options||nt).deltaSource,g=Z?Z.options:nt;if(r=r||Z._element,"gesture"===t){var f=a(e);d={x:f.pageX-g.origin.x,y:f.pageY-g.origin.y},u={x:f.clientX-g.origin.x,y:f.clientY-g.origin.y}}else if(u=o(e),d=i(e),d.x-=g.origin.x,d.y-=g.origin.y,Z.options.snapEnabled){var y=g.snap;this.snap={mode:y.mode,anchors:rt.anchors,range:rt.range,locked:rt.locked,x:rt.x,y:rt.y,realX:rt.realX,realY:rt.realY,dx:rt.dx,dy:rt.dy},rt.locked&&("path"===y.mode?(rt.xInRange&&(d.x+=rt.dx,u.x+=rt.dx),rt.yInRange&&(d.y+=rt.dy,u.y+=rt.dy)):(d.x+=rt.dx,d.y+=rt.dy,u.x+=rt.dx,u.y+=rt.dy))}this.x0=$,this.y0=B,this.clientX0=K,this.clientY0=G,this.pageX=d.x,this.pageY=d.y,this.clientX=u.x,this.clientY=u.y,this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.button=e.button,this.target=r,this.timeStamp=(new Date).getTime(),this.type=t+(n||""),s&&(this.relatedTarget=s),"start"===n||"end"===n||"drop"===t?"client"===p?(this.dx=u.x-$,this.dy=u.y-B):(this.dx=d.x-$,this.dy=d.y-B):"client"===p?(this.dx=u.x-L,this.dy=u.y-N):(this.dx=d.x-j,this.dy=d.y-q),"resize"===t?g.squareResize||e.shiftKey?("y"===gt?this.dx=this.dy:this.dy=this.dx,this.axes="xy"):(this.axes=gt,"x"===gt?this.dy=0:"y"===gt&&(this.dx=0)):"gesture"===t&&(this.touches=e.touches,this.distance=c(e),this.box=l(e),"start"===n?(this.scale=1,this.ds=0,this.angle=h(e),this.da=0):(this.scale=this.distance/V.startDistance,this.angle=h(e,V.prevAngle),"end"===n?(this.da=this.angle-V.startAngle,this.ds=this.scale-1):(this.da=this.angle-V.prevAngle,this.ds=this.scale-V.prevScale)))}function f(e,t){if("string"!=typeof e)return null;t=t||Z;var n=-1!==e.indexOf("resize")?"resize":e,r=(t||Z).options;return("resize"===n&&r.resizeable||"drag"===e&&r.draggable||"gesture"===e&&r.gestureable)&&yt[n]?(("resize"===e||"resizeyx"===e)&&(e="resizexy"),e):null}function y(e){var t;if(!(ut||pt||ht)){if(Q.length&&"mousedown"===e.type)t=S(e,Q);else for(var n,r,i=e.target instanceof D?e.target.correspondingUseElement:e.target;i!==I.documentElement&&!t;){Q=[];for(n in W)r=Element.prototype[Ot]===A?I.querySelectorAll(n):void 0,i[Ot](n,r)&&(W[n]._element=i,Q.push(W[n]));t=S(e,Q),i=i.parentNode}return t?(at=!0,m(e,t)):void 0}}function m(e,t){if(e.touches&&e.touches.length<2&&!Z||!at){var n=wt.useAttachEvent?e.currentTarget:this;Z=U.get(n)}var r=Z&&Z.options;if(Z&&!(ut||pt||ht)){var s,l,c,h=f(t||Z.getAction(e));if(e.touches?(s=a(e),l={x:s.pageX,y:s.pageY},c={x:s.clientX,y:s.clientY}):(l=i(e),c=o(e)),!h)return e;at=!0,lt=!1,r.styleCursor&&(I.documentElement.style.cursor=ft[h].cursor),gt="resizexy"===h?"xy":"resizex"===h?"x":"resizey"===h?"y":"",mt=h,$=l.x-r.origin.x,B=l.y-r.origin.y,K=c.x-r.origin.x,G=c.y-r.origin.y,rt.x=null,rt.y=null,e.preventDefault()}}function v(e){if(at&&($===j&&B===q&&(lt=!0),mt&&Z))if(Z.options.snapEnabled){var t,n,r,o,s,a,l,c,h,u=Z.options.snap,d=i(e);if(rt.realX=d.x,rt.realY=d.y,d.x-=Z.options.origin.x,d.y-=Z.options.origin.y,u.range<0&&(u.range=1/0),"anchor"===u.mode&&u.anchors.length){for(t={anchor:null,distance:0,range:0,distX:0,distY:0},c=0,h=u.anchors.length;h>c;c++){var p=u.anchors[c];n="number"==typeof p.range?p.range:u.range,s=p.x-d.x,a=p.y-d.y,l=Math.sqrt(s*s+a*a),r=n>l,1/0===n&&t.inRange&&1/0!==t.range&&(r=!1),(!t.anchor||(r?t.inRange&&1/0!==n?l/n<t.distance/t.range:l<t.distance:!t.inRange&&l<t.distance))&&(1/0===n&&(r=!0),t.anchor=p,t.distance=l,t.range=n,t.inRange=r,t.distX=s,t.distY=a,rt.range=n)}r=t.inRange,o=t.anchor.x!==rt.x||t.anchor.y!==rt.y,rt.x=t.anchor.x,rt.y=t.anchor.y,rt.dx=t.distX,rt.dy=t.distY,Z.options.snap.anchors.closest=rt.anchors.closest=t.anchor}else if("grid"===u.mode){var g=Math.round((d.x-u.gridOffset.x)/u.grid.x),f=Math.round((d.y-u.gridOffset.y)/u.grid.y),y=g*u.grid.x+u.gridOffset.x,m=f*u.grid.y+u.gridOffset.y;s=y-d.x,a=m-d.y,l=Math.sqrt(s*s+a*a),r=l<u.range,o=y!==rt.x||m!==rt.y,rt.x=y,rt.y=m,rt.dx=s,rt.dy=a,rt.range=u.range}if("path"===u.mode&&u.paths.length){for(t={path:{},distX:0,distY:0,range:0},c=0,h=u.paths.length;h>c;c++){var v,x,b=u.paths[c],E=!1,S=!1,O=b;"function"==typeof b&&(O=b(d.x,d.y)),"number"==typeof O.x?(v=O.x,E=!0):v=d.x,"number"==typeof O.y?(x=O.y,S=!0):x=d.y,n="number"==typeof O.range?O.range:u.range,s=v-d.x,a=x-d.y;var z=Math.abs(s)<n&&E,_=Math.abs(a)<n&&S;1/0===n&&t.xInRange&&1/0!==t.range&&(z=!1),"x"in t.path&&!(z?t.xInRange&&1/0!==n?l/n<t.distX/t.range:Math.abs(s)<Math.abs(t.distX):!t.xInRange&&Math.abs(s)<Math.abs(t.distX))||(1/0===n&&(z=!0),t.path.x=v,t.distX=s,t.xInRange=z,t.range=n,rt.range=n),1/0===n&&t.yInRange&&1/0!==t.range&&(_=!1),"y"in t.path&&!(_?t.yInRange&&1/0!==n?l/n<t.distY/t.range:Math.abs(a)<Math.abs(t.distY):!t.yInRange&&Math.abs(a)<Math.abs(t.distY))||(1/0===n&&(_=!0),t.path.y=x,t.distY=a,t.yInRange=_,t.range=n,rt.range=n)}r=t.xInRange||t.yInRange,o=!t.xInRange||!t.yInRange||rt.xInRange&&rt.yInRange?!t.xInRange||!t.yInRange||t.path.x!==rt.x||t.path.y!==rt.y:!0,rt.x=t.path.x,rt.y=t.path.y,rt.dx=t.distX,rt.dy=t.distY,rt.xInRange=t.xInRange,rt.yInRange=t.yInRange,Z.options.snap.paths.closest=rt.paths.closest=t.path}!o&&rt.locked||!r?(o||!r)&&(rt.locked=!1,ft[mt].moveListener(e)):(rt.locked=!0,ft[mt].moveListener(e))}else ft[mt].moveListener(e);(ut||pt)&&it.edgeMove(e)}function x(e){e.preventDefault();var t,r,i,o,s;if(ut){var a=Z._element,l=o?o._element:null;t=new g(e,"drag","move"),o=p(e,Z),Z._element=a,o!==tt&&(tt&&(i=new g(e,"drag","leave",l,a),t.dragLeave=tt._element,s=tt,tt=null),o&&(r=new g(e,"drag","enter",l,a),t.dragEnter=o._element,tt=o))}else if(t=new g(e,"drag","start"),ut=!0,!dt){u(F);for(var c=0;c<J.length;c++)J[c]._elements=I.querySelectorAll(J[c].selector)}Z.fire(t),i&&s.fire(i),r&&o.fire(r),n(t)}function b(e){e.preventDefault();var t;pt?(t=new g(e,"resize","move"),Z.fire(t)):(t=new g(e,"resize","start"),Z.fire(t),pt=!0),n(t)}function E(e){if(e.touches&&!(e.touches.length<2)){e.preventDefault();var t;ht?(t=new g(e,"gesture","move"),t.ds=t.scale-V.scale,Z.fire(t)):(t=new g(e,"gesture","start"),t.ds=0,V.startDistance=t.distance,V.startAngle=t.angle,V.scale=1,Z.fire(t),ht=!0),n(t),V.prevAngle=t.angle,V.prevDistance=t.distance,1/0===t.scale||null===t.scale||void 0===t.scale||isNaN(t.scale)||(V.scale=t.scale)}}function S(e,t){for(var n=0,r=t.length;r>n;n++){var i=t[n],o=f(i.getAction(e,i),i);if(o)return Z=i,o}}function O(e){if(!(at||ut||pt||ht)){var t=[],n=Z&&Z._element,r=e.target instanceof D?e.target.correspondingUseElement:e.target;for(var i in W)W.hasOwnProperty(i)&&W[i]&&r[Ot](i)&&(W[i]._element=r,t.push(W[i]));{var o=U.get(r);o&&f(o.getAction(e,o),o)}if(!o||!f(o.getAction(e),o))if(S(e,t))Q=t,_(e,Q),wt.addToElement(r,"mousemove",_);else if(Z){var s=n.querySelectorAll("*");if(-1!==Array.prototype.indexOf.call(s,r)){for(var a=0;a<Q.length;a++)Q[a]._element=n;_(e,Q),wt.addToElement(Z._element,"mousemove",_)}else Z=null,Q=[]}}}function z(e){var t=e.target instanceof D?e.target.correspondingUseElement:e.target;U.get(t)||wt.removeFromElement(t,_),Z&&Z.options.styleCursor&&!(ut||pt||ht)&&(I.documentElement.style.cursor="")}function _(e,t){if(at||ut||pt||ht)e.preventDefault();else{var n;t?n=S(e,t):Z&&(n=f(Z.getAction(e))),Z&&Z.options.styleCursor&&(I.documentElement.style.cursor=n?ft[n].cursor:"")}}function R(e){var t;if(!(e.touches&&e.touches.length>=2)){if(ut){t=new g(e,"drag","end");var n,r=Z._element,i=p(e,Z),o=i?i._element:null;if(Z._element=r,i)n=new g(e,"drop",null,o,r),t.dropzone=o;else if(tt){var s=new g(e,"drag","leave",o,r);tt.fire(s,r),t.dragLeave=tt._element}Z.fire(t),n&&et.fire(n)}else if(pt)t=new g(e,"resize","end"),Z.fire(t);else if(ht)t=new g(e,"gesture","end"),t.ds=t.scale,Z.fire(t);else if(("mouseup"===e.type||"touchend"===e.type)&&Z&&at&&!lt){var a={};for(var l in e)e.hasOwnProperty(l)&&(a[l]=e[l]);a.type="tap",Z.fire(a)}return w.stop(),e}}function X(){Z.selector||(Z=null),et=tt=null}function w(e){return U.get(e)||new T(e)}function Y(e){for(var t in nt)e.hasOwnProperty(t)&&typeof e[t]==typeof nt[t]&&(this[t]=e[t])}function T(e,t){this._element=e,this._iEvents=this._iEvents||{},"string"==typeof e?(I.querySelector(e),W[e]=this,this.selector=e):(e instanceof Element&&(wt.add(this,"mousemove",_),wt.add(this,"mousedown",m),wt.add(this,"touchmove",_),wt.add(this,"touchstart",m)),H.push(this)),U.push(this),this.set(t)}var A,I=e.document,M=e.console,C=e.SVGElement||t,k=e.SVGSVGElement||t,D=e.SVGElementInstance||t,P=e.HTMLElement||e.Element,j=0,q=0,L=0,N=0,$=0,B=0,K=0,G=0,V={start:{x:0,y:0},startDistance:0,prevDistance:0,distance:0,scale:1,startAngle:0,prevAngle:0},U=[],F=[],H=[],W={},J=[],Q=[],Z=null,et=null,tt=null,nt={draggable:!1,dropzone:!1,resizeable:!1,squareResize:!1,gestureable:!1,styleCursor:!0,snap:{mode:"grid",range:1/0,grid:{x:100,y:100},gridOffset:{x:0,y:0},anchors:[],paths:[],arrayTypes:/^anchors$|^paths$/,objectTypes:/^grid$|^gridOffset$/,stringTypes:/^mode$/,numberTypes:/^range$/},snapEnabled:!1,autoScroll:{container:e,margin:60,interval:20,distance:10,elementTypes:/^container$/,numberTypes:/^range$|^interval$|^distance$/},autoScrollEnabled:!1,origin:{x:0,y:0},deltaSource:"page"},rt={locked:!1,x:0,y:0,dx:0,dy:0,realX:0,realY:0,anchors:[],paths:[]},it={margin:60,interval:20,i:null,distance:10,x:0,y:0,scroll:function(){var t=Z.options.autoScroll.container;t===e?e.scrollBy(it.x,it.y):t&&(t.scrollLeft+=it.x,t.scrollTop+=it.y)},edgeMove:function(t){if(Z&&Z.options.autoScrollEnabled&&(ut||pt)){var n,r,i,o,s=Z.options.autoScroll;if(s.container===e)o=t.clientX<it.margin,n=t.clientY<it.margin,r=t.clientX>e.innerWidth-it.margin,i=t.clientY>e.innerHeight-it.margin;else{var a=w(s.container).getRect();o=t.clientX<a.left+it.margin,n=t.clientY<a.top+it.margin,r=t.clientX>a.right-it.margin,i=t.clientY>a.bottom-it.margin}it.x=it.distance*(r?1:o?-1:0),it.y=it.distance*(i?1:n?-1:0),it.isScrolling||(it.margin=s.margin,it.distance=s.distance,it.interval=s.interval,it.start())}},isScrolling:!1,start:function(){it.isScrolling=!0,e.clearInterval(it.i),it.i=e.setInterval(it.scroll,it.interval)},stop:function(){e.clearInterval(it.i),it.isScrolling=!1}},ot="createTouch"in I,st=ot?20:10,at=!1,lt=!1,ct=!1,ht=!1,ut=!1,dt=!1,pt=!1,gt="xy",ft={drag:{cursor:"move",moveListener:x},resizex:{cursor:"e-resize",moveListener:b},resizey:{cursor:"s-resize",moveListener:b},resizexy:{cursor:"se-resize",moveListener:b},gesture:{cursor:"",moveListener:E}},yt={drag:!0,resize:!0,gesture:!0},mt=null,vt="onmousewheel"in I?"mousewheel":"wheel",xt=["resizestart","resizemove","resizeend","dragstart","dragmove","dragend","dragenter","dragleave","drop","gesturestart","gesturemove","gestureend","tap"],bt={},Et={onevent:0,directBind:1,globalBind:2},St="Opera"==navigator.appName&&ot&&navigator.userAgent.match("Presto"),Ot="matchesSelector"in Element.prototype?"matchesSelector":"webkitMatchesSelector"in Element.prototype?"webkitMatchesSelector":"mozMatchesSelector"in Element.prototype?"mozMatchesSelector":"oMatchesSelector"in Element.prototype?"oMatchesSelector":"msMatchesSelector",zt={_element:e,events:{}},_t={_element:I,events:{}},Rt={_element:e.parent,events:{}},Xt={_element:e.parent.document,events:{}},wt=function(){function t(e,t,n,r){var s=c[l.indexOf(e)];if(s||(s={events:{},typeCount:0},l.push(e),c.push(s)),t in s.events||(s.events[t]=[],s.typeCount++),-1===s.events[t].indexOf(n)){var h;return h=i?e[o](a+t,function(t){t.immediatePropagationStopped||(t.target=t.srcElement,t.currentTarget=e,/mouse|click/.test(t.type)&&(t.pageX=t.clientX+I.documentElement.scrollLeft,t.pageY=t.clientY+I.documentElement.scrollTop),n(t))},n,r||!1):e[o](t,n,r||!1),s.events[t].push(n),h}}function n(e,t,r,i){var o,h=c[l.indexOf(e)];if(h&&h.events)if("all"!==t){if(h.events[t]){var u=h.events[t].length;if("all"===r){for(o=0;u>o;o++)e[s](a+t,h.events[t][o],i||!1);h.events[t]=null,h.typeCount--}else for(o=0;u>o;o++)if(h.events[t][o]===r){e[s](a+t,h.events[t][o],i||!1),h.events[t].splice(o,1);break}h.events[t]&&0===h.events[t].length&&(h.events[t]=null,h.typeCount--)}h.typeCount||(c.splice(c.indexOf(h),1),l.splice(l.indexOf(e),1))}else for(t in h.events)h.events.hasOwnProperty(t)&&n(e,t,"all")}var r=e.Event,i="attachEvent"in e&&!("addEventListener"in e),o=i?"attachEvent":"addEventListener",s=i?"detachEvent":"removeEventListener",a=i?"on":"",l=[],c=[];return"indexOf"in Array.prototype||(Array.prototype.indexOf=function(e){var t=this.length>>>0,n=Number(arguments[1])||0;for(n=0>n?Math.ceil(n):Math.floor(n),0>n&&(n+=t);t>n;n++)if(n in this&&this[n]===e)return n;return-1}),"stopPropagation"in r.prototype||(r.prototype.stopPropagation=function(){this.cancelBubble=!0},r.prototype.stopImmediatePropagation=function(){this.cancelBubble=!0,this.immediatePropagationStopped=!0}),"preventDefault"in r.prototype||(r.prototype.preventDefault=function(){this.returnValue=!1}),"hasOwnProperty"in r.prototype||(r.prototype.hasOwnProperty=Object.prototype.hasOwnProperty),{add:function(e,n,r,i){t(e._element,n,r,i)},remove:function(e,t,r,i){n(e._element,t,r,i)},addToElement:t,removeFromElement:n,useAttachEvent:i}}();if(g.prototype={preventDefault:t,stopImmediatePropagation:function(){ct=!0},stopPropagation:t},U.indexOfElement=F.indexOfElement=function(e){for(var t=0;t<this.length;t++){var n=this[t];if(n.selector===e||!n.selector&&n._element===e)return t}return-1},U.get=function(e){return"string"==typeof e?W[e]:this[this.indexOfElement(e)]},F.get=function(e){return this[this.indexOfElement(e)]},Y.prototype=nt,T.prototype={setOnEvents:function(e,t){var n=t.onstart||t.onStart,r=t.onmove||t.onMove,i=t.onend||t.onEnd;e="on"+e,"function"==typeof n&&(this[e+"start"]=n),"function"==typeof r&&(this[e+"move"]=r),"function"==typeof i&&(this[e+"end"]=i)},draggable:function(e){return e instanceof Object?(this.options.draggable=!0,this.setOnEvents("drag",e),this):"boolean"==typeof e?(this.options.draggable=e,this):null===e?(delete this.options.draggable,this):this.options.draggable},dropzone:function(e){if(e instanceof Object){var t=e.ondrop||e.onDrop;return"function"==typeof t&&(this.ondrop=t),this.options.dropzone=!0,(this.selector?J:F).push(this),dt||this.selector||(this.rect=this.getRect()),this}if("boolean"==typeof e){if(e)(this.selector?J:F).push(this),dt||this.selector||(this.rect=this.getRect());else{var n=this.selector?J:F,r=n.indexOf(this);-1!==r&&n.splice(r,1)}return this.options.dropzone=e,this}return null===e?(delete this.options.dropzone,this):this.options.dropzone},dropCheck:function(e){var t,n,r=i(e);return dt&&(this.rect=this.getRect()),t=r.x>this.rect.left&&r.x<this.rect.right,n=r.y>this.rect.top&&r.y<this.rect.bottom,t&&n},dropChecker:function(e){return"function"==typeof e?(this.dropCheck=e,this):this.dropCheck},resizeable:function(e){return e instanceof Object?(this.options.resizeable=!0,this.setOnEvents("resize",e),this):"boolean"==typeof e?(this.options.resizeable=e,this):this.options.resizeable},squareResize:function(e){return"boolean"==typeof e?(this.options.squareResize=e,this):null===e?(delete this.options.squareResize,this):this.options.squareResize},gestureable:function(e){return e instanceof Object?(this.options.gestureable=!0,this.setOnEvents("gesture",e),this):"boolean"==typeof e?(this.options.gestureable=e,this):null===e?(delete this.options.gestureable,this):this.options.gestureable},autoScroll:function(e){var t=nt.autoScroll;if(e instanceof Object){var n=this.options.autoScroll;return n===t&&(n=this.options.autoScroll={margin:t.margin,distance:t.distance,interval:t.interval,container:t.container}),n.margin=this.validateSetting("autoScroll","margin",e.margin),n.distance=this.validateSetting("autoScroll","distance",e.distance),n.interval=this.validateSetting("autoScroll","interval",e.interval),n.container=this.validateSetting("autoScroll","container",e.container),this.options.autoScrollEnabled=!0,this.options.autoScroll=n,this}return"boolean"==typeof e?(this.options.autoScrollEnabled=e,this):null===e?(delete this.options.autoScrollEnabled,delete this.options.autoScroll,this):this.options.autoScrollEnabled?this.options.autoScroll:!1},snap:function(e){var t=nt.snap;if(e instanceof Object){var n=this.options.snap;return n===t&&(n=this.options.snap={mode:t.mode,range:t.range,grid:t.grid,gridOffset:t.gridOffset,anchors:t.anchors}),n.mode=this.validateSetting("snap","mode",e.mode),n.range=this.validateSetting("snap","range",e.range),n.paths=this.validateSetting("snap","paths",e.paths),n.grid=this.validateSetting("snap","grid",e.grid),n.gridOffset=this.validateSetting("snap","gridOffset",e.gridOffset),n.anchors=this.validateSetting("snap","anchors",e.anchors),this.options.snapEnabled=!0,this.options.snap=n,this}return"boolean"==typeof e?(this.options.snapEnabled=e,this):null===e?(delete this.options.snapEnabled,delete this.options.snap,this):this.options.snapEnabled?this.options.snap:!1},getAction:function(e){var t,n,r,o=this.getRect(),s=i(e),a=this.options;return yt.resize&&a.resizeable&&(t=s.x>o.right-st,n=s.y>o.bottom-st),yt.gesture&&e.touches&&e.touches.length>=2&&!ut&&!pt?r="gesture":(gt=(t?"x":"")+(n?"y":""),r=gt?"resize"+gt:yt.drag&&a.draggable?"drag":null),r},actionChecker:function(e){return"function"==typeof e?(this.getAction=e,this):null===e?(delete this.options.getAction,this):this.getAction},getRect:function(){var e=s(),t=this._element instanceof C?this._element.getBoundingClientRect():this._element.getClientRects()[0];return{left:t.left+e.x,right:t.right+e.x,top:t.top+e.y,bottom:t.bottom+e.y,width:t.width||t.right-t.left,height:t.heigh||t.bottom-t.top}},rectChecker:function(e){return"function"==typeof e?(this.getRect=e,this):null===e?(delete this.options.getRect,this):this.getRect},styleCursor:function(e){return"boolean"==typeof e?(this.options.styleCursor=e,this):null===e?(delete this.options.styleCursor,this):this.options.styleCursor},origin:function(e){return e instanceof Object?(this.options.origin=e,this):null===e?(delete this.options.origin,this):this.options.origin},deltaSource:function(e){return"page"===e||"client"===e?(this.options.deltaSource=e,this):null===e?(delete this.options.deltaSource,this):this.options.deltaSource},validateSetting:function(e,t,n){var r=nt[e],i=this.options[e];if(void 0!==r&&void 0!==r[t]){if("objectTypes"in r&&r.objectTypes.test(t))return n instanceof Object?n:t in i&&i[t]instanceof Object?i[t]:r[t];if("arrayTypes"in r&&r.arrayTypes.test(t))return n instanceof Array?n:t in i&&i[t]instanceof Array?i[t]:r[t];if("stringTypes"in r&&r.stringTypes.test(t))return"string"==typeof n?n:t in i&&"string"==typeof i[t]?i[t]:r[t];if("numberTypes"in r&&r.numberTypes.test(t))return"number"==typeof n?n:t in i&&"number"==typeof i[t]?i[t]:r[t];if("elementTypes"in r&&r.elementTypes.test(t))return n instanceof Element?n:t in i&&i[t]instanceof Element?i[t]:r[t]}return null},element:function(){return this._element},fire:function(e){if(!e||!e.type||-1===xt.indexOf(e.type))return this;for(var t,n,r=0,i=0,o="on"+e.type;3>r;)try{switch(r){case Et.onevent:"function"==typeof this[o]&&this[o](e);break;case Et.directBind:if(e.type in this._iEvents){for(t=this._iEvents[e.type],n=t.length;n>i&&!ct;i++)t[i](e);break}break;case Et.globalBind:if(e.type in bt&&(t=bt[e.type]))for(t=bt[e.type],n=t.length;n>i&&!ct;i++)t[i](e)}i=0,r++}catch(s){M.error("Error thrown from "+e.type+" listener"),M.error(s),i++,r===Et.onevent&&r++}return ct=!1,this},on:function(e,t,n){if("wheel"===e&&(e=vt),-1!==xt.indexOf(e))e in this._iEvents?-1===this._iEvents[e].indexOf(t)&&this._iEvents[e].push(t):this._iEvents[e]=[t];else if(this.selector)for(var r=I.querySelectorAll(this.selector),i=0,o=r.length;o>i;i++)wt.addToElement(r[i],e,t,n);else wt.add(this,e,t,n);return this},off:function(e,t,n){if("wheel"===e&&(e=vt),-1!==xt.indexOf(e)){var r,i=this._iEvents[e];i&&-1!==(r=i.indexOf(t))&&this._iEvents[e].splice(r,1)}else if(this.selector)for(var o=I.querySelectorAll(this.selector),s=0,a=o.length;a>s;s++)wt.removeFromElement(o[s],e,t,n);else wt.remove(this._element,t,n);return this},set:function(e){return e&&"object"==typeof e||(e={}),this.options=new Y(e),this.draggable("draggable"in e?e.draggable:this.options.draggable),this.dropzone("dropzone"in e?e.dropzone:this.options.dropzone),this.resizeable("resizeable"in e?e.resizeable:this.options.resizeable),this.gestureable("gestureable"in e?e.gestureable:this.options.gestureable),"autoScroll"in e&&this.autoScroll(e.autoScroll),this},unset:function(){return wt.remove(this,"all"),"string"==typeof this.selector?delete W[this.selector]:(wt.remove(this,"all"),this.options.styleCursor&&(this._element.style.cursor=""),H.splice(H.indexOf(this.element()))),this.dropzone(!1),U.splice(U.indexOf(this),1),w}},w.isSet=function(e){return-1!==U.indexOfElement(e)},w.on=function(e,t){return-1!==xt.indexOf(e)&&(bt[e]?-1===bt[e].indexOf(t)&&bt[e].push(t):bt[e]=[t]),w},w.off=function(e,t){var n=bt[e].indexOf(t);return-1!==n&&bt[e].splice(n,1),w},w.simulate=function(e,n,r){var i,o,s={};if("resize"===e&&(e="resizexy"),!(e in ft))return w;if(r)for(i in r)r.hasOwnProperty(i)&&(s[i]=r[i]);else o=Z._element instanceof C?n.getBoundingClientRect():o=n.getClientRects()[0],"drag"===e?(s.pageX=o.left+o.width/2,s.pageY=o.top+o.height/2):(s.pageX=o.right,s.pageY=o.bottom);return s.target=s.currentTarget=n,s.preventDefault=s.stopPropagation=t,m(s,e),w},w.enableDragging=function(e){return null!==e&&void 0!==e?(yt.drag=e,w):yt.drag},w.enableResizing=function(e){return null!==e&&void 0!==e?(yt.resize=e,w):yt.resize},w.enableGesturing=function(e){return null!==e&&void 0!==e?(yt.gesture=e,w):yt.gesture},w.eventTypes=xt,w.debug=function(){return{target:Z,dragging:ut,resizing:pt,gesturing:ht,prevX:j,prevY:q,x0:$,y0:B,Interactable:T,IOptions:Y,interactables:U,dropzones:F,pointerIsDown:at,supportsTouch:ot,defaultOptions:nt,defaultActionChecker:T.prototype.getAction,dragMove:x,resizeMove:b,gestureMove:E,pointerUp:R,pointerDown:m,pointerHover:_,events:wt,globalEvents:bt,log:function(){M.log("target         :  "+Z),M.log("prevX, prevY   :  "+j,q),M.log("x0, y0         :  "+$,B),M.log("supportsTouch  :  "+ot),M.log("pointerIsDown  :  "+at),M.log("currentAction  :  "+w.currentAction())}}},w.margin=function(e){return"number"==typeof e?(st=e,w):st},w.styleCursor=function(e){return"boolean"==typeof e?(nt.styleCursor=e,w):nt.styleCursor},w.autoScroll=function(e){var t=nt.autoScroll;return e instanceof Object?(nt.autoScrollEnabled=!0,"number"==typeof e.margin&&(t.margin=e.margin),"number"==typeof e.distance&&(t.distance=e.distance),"number"==typeof e.interval&&(t.interval=e.interval),t.container=e.container instanceof Element?e.container:t.container,w):"boolean"==typeof e?(nt.autoScrollEnabled=e,w):nt.autoScrollEnabled?t:!1},w.snap=function(e){var t=nt.snap;return e instanceof Object?(nt.snapEnabled=!0,"string"==typeof e.mode&&(t.mode=e.mode),"number"==typeof e.range&&(t.range=e.range),e.anchors instanceof Array&&(t.anchors=e.anchors),e.grid instanceof Object&&(t.grid=e.grid),e.gridOffset instanceof Object&&(t.gridOffset=e.gridOffset),w):"boolean"==typeof e?(nt.snapEnabled=e,w):{enabled:nt.snapEnabled,mode:t.mode,grid:t.grid,gridOffset:t.gridOffset,anchors:t.anchors,paths:t.paths,range:t.range,locked:rt.locked,x:rt.x,y:rt.y,realX:rt.realX,realY:rt.realY,dx:rt.dx,dy:rt.dy}},w.supportsTouch=function(){return ot},w.currentAction=function(){return ut&&"drag"||pt&&"resize"||ht&&"gesture"||null},w.stop=function(e){if(ut||pt||ht){it.stop(),Q=[],Z.options.styleCursor&&(I.documentElement.style.cursor=""),X();for(var t=0;t<J.length;t++)J._elements=[];e&&"function"==typeof e.preventDefault&&e.preventDefault()}return at=rt.locked=ut=pt=ht=!1,lt=!0,mt=null,w},w.dynamicDrop=function(e){return"boolean"==typeof e?(ut&&dt!==e&&!e&&u(F),dt=e,w):dt},w.deltaSource=function(e){return"page"===e||"client"===e?(nt.deltaSource=e,this):nt.deltaSource},wt.add(_t,"mousedown",y),wt.add(_t,"touchstart",y),wt.add(_t,"mousemove",v),wt.add(_t,"touchmove",v),wt.add(_t,"mouseover",O),wt.add(_t,"mouseout",z),wt.add(_t,"mouseup",R),wt.add(_t,"touchend",R),wt.add(_t,"touchcancel",R),wt.add(zt,"blur",R),e.parent!==e)try{wt.add(Xt,"mouseup",R),wt.add(Xt,"touchend",R),wt.add(Xt,"touchcancel",R),wt.add(Rt,"blur",R)}catch(Yt){w.windowParentError=Yt}wt.add(_t,"selectstart",function(e){(ut||pt||ht)&&e.preventDefault()}),Ot in Element.prototype&&"function"==typeof Element.prototype[Ot]||(Element.prototype[Ot]=A=function(e,t){t=t||this.parentNode.querySelectorAll(e),count=t.length;for(var n=0;count>n;n++)if(t[n]===this)return!0;return!1}),"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=w),exports.interact=w):e.interact=w}(this);
