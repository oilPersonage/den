var O_=Object.defineProperty;var Ee=(i,e)=>()=>(i&&(e=i(i=0)),e);var Ya=(i,e)=>{for(var t in e)O_(i,t,{get:e[t],enumerable:!0})};var Ps,Jf,ki,_r=Ee(()=>{"use strict";Ps=!!document.querySelector("[data-page-index]"),Jf=!!document.querySelector("[data-page-questions]"),ki=window.matchMedia("(max-width: 480px)").matches});var tn,ii,ct,vt,Ze,Wt,Dt,Vh,xi,$a,yi,jf,Ge,_o,Bn,xo,nn,Qf,xr,Ls,yr,je,ep,tp,np,ip,sp,rp,Hh,Za,op,ap,Ka,lp,Rt=Ee(()=>{tn=typeof window<"u",ii=tn?window:null,ct=tn?document:null,vt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},Ze={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},Wt={NONE:0,AUTO:1,FORCE:2},Dt={replace:0,none:1,blend:2},Vh=Symbol(),xi=Symbol(),$a=Symbol(),yi=Symbol(),jf=Symbol(),Ge=1e-11,_o=1e12,Bn=1e3,xo=240,nn="",Qf="var(",xr=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),Ls=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],yr=Ls.reduce((i,e)=>({...i,[e]:e+"("}),{}),je=()=>{},ep=/\)\s*[-.\d]/,tp=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,np=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,ip=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,sp=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,rp=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Hh=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,Za=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,op=/([a-z])([A-Z])/g,ap=/(\w+)(\([^)]+\)+)/g,Ka=/(\*=|\+=|-=)/,lp=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/});var vr,En,Xe,yo,Gh,wn=Ee(()=>{Rt();vr={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:xo,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Bn,delay:0,loopDelay:0,ease:"out(2)",composition:Dt.replace,modifier:i=>i,onBegin:je,onBeforeUpdate:je,onUpdate:je,onLoop:je,onPause:je,onComplete:je,onRender:je},En={current:null,root:ct},Xe={defaults:vr,precision:4,timeScale:1,tickThreshold:200},yo=tn&&ii.AnimeJSDevTools,Gh={version:"4.3.6",engine:null};tn&&(ii.AnimeJS||(ii.AnimeJS=[]),ii.AnimeJS.push(Gh))});var Sr,Ct,zi,ln,cn,zt,It,Tt,fe,$n,Ja,Xh,qh,Yh,hp,Ns,B_,up,ja,Us,Qa,dp,fp,Ds,vo,pp,mp,So,Wh,Ot,cp,Qe,gp,An,Fs,Vi,Vt,el,rt,kn,gn,Pt=Ee(()=>{Rt();wn();Sr=i=>i.replace(op,"$1-$2").toLowerCase(),Ct=(i,e)=>i.indexOf(e)===0,zi=Date.now,ln=Array.isArray,cn=i=>i&&i.constructor===Object,zt=i=>typeof i=="number"&&!isNaN(i),It=i=>typeof i=="string",Tt=i=>typeof i=="function",fe=i=>typeof i>"u",$n=i=>fe(i)||i===null,Ja=i=>tn&&i instanceof SVGElement,Xh=i=>tp.test(i),qh=i=>Ct(i,"rgb"),Yh=i=>Ct(i,"hsl"),hp=i=>Xh(i)||(qh(i)||Yh(i))&&(i[i.length-1]===")"||!ep.test(i)),Ns=i=>!Xe.defaults.hasOwnProperty(i),B_=["opacity","rotate","overflow","color"],up=(i,e)=>{if(B_.includes(e))return!1;if(i.getAttribute(e)||e in i){if(e==="scale"){let t=i.parentNode;return t&&t.tagName==="filter"}return!0}},ja=i=>It(i)?parseFloat(i):i,Us=Math.pow,Qa=Math.sqrt,dp=Math.sin,fp=Math.cos,Ds=Math.abs,vo=Math.floor,pp=Math.asin,mp=Math.max,So=Math.PI,Wh=Math.round,Ot=(i,e,t)=>i<e?e:i>t?t:i,cp={},Qe=(i,e)=>{if(e<0)return i;if(!e)return Wh(i);let t=cp[e];return t||(t=cp[e]=10**e),Wh(i*t)/t},gp=(i,e)=>ln(e)?e.reduce((t,n)=>Ds(n-i)<Ds(t-i)?n:t):e?Wh(i/e)*e:i,An=(i,e,t)=>i+(e-i)*t,Fs=i=>i===1/0?_o:i===-1/0?-_o:i,Vi=i=>i<=Ge?Ge:Fs(Qe(i,11)),Vt=i=>ln(i)?[...i]:i,el=(i,e)=>{let t={...i};for(let n in e){let s=i[n];t[n]=fe(s)?e[n]:s}return t},rt=(i,e,t,n="_prev",s="_next")=>{let r=i._head,o=s;for(t&&(r=i._tail,o=n);r;){let a=r[o];e(r),r=a}},kn=(i,e,t="_prev",n="_next")=>{let s=e[t],r=e[n];s?s[n]=r:i._head=r,r?r[t]=s:i._tail=s,e[t]=null,e[n]=null},gn=(i,e,t,n="_prev",s="_next")=>{let r=i._tail;for(;r&&t&&t(r,e);)r=r[n];let o=r?r[s]:i._head;r?r[s]=e:i._head=e,o?o[n]=e:i._tail=e,e[n]=r,e[s]=o}});var _p,xp=Ee(()=>{Rt();Pt();_p=(i,e,t)=>{let n=i.style.transform,s;if(n){let r=i[yi],o;for(;o=ap.exec(n);){let a=o[1],l=o[2].slice(1,-1);r[a]=l,a===e&&(s=l,t&&(t[e]=l))}}return n&&!fe(s)?s:Ct(e,"scale")?"1":Ct(e,"rotate")||Ct(e,"skew")?"0deg":"0px"}});var k_,z_,$h,V_,yp,vp=Ee(()=>{Rt();Pt();k_=i=>{let e=np.exec(i)||ip.exec(i),t=fe(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},z_=i=>{let e=i.length,t=e===4||e===5;return[+("0x"+i[1]+i[t?1:2]),+("0x"+i[t?2:3]+i[t?2:4]),+("0x"+i[t?3:5]+i[t?3:6]),e===5||e===9?+(+("0x"+i[t?4:7]+i[t?4:8])/255).toFixed(3):1]},$h=(i,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i),V_=i=>{let e=sp.exec(i)||rp.exec(i),t=+e[1]/360,n=+e[2]/100,s=+e[3]/100,r=fe(e[4])?1:+e[4],o,a,l;if(n===0)o=a=l=s;else{let c=s<.5?s*(1+n):s+n-s*n,h=2*s-c;o=Qe($h(h,c,t+1/3)*255,0),a=Qe($h(h,c,t)*255,0),l=Qe($h(h,c,t-1/3)*255,0)}return[o,a,l,r]},yp=i=>qh(i)?k_(i):Xh(i)?z_(i):Yh(i)?V_(i):[0,0,0,1]});var Ne,sn,Mo,Sp,vi,Si,tl,hn,Zh,rn,Mi=Ee(()=>{Rt();Pt();xp();vp();Ne=(i,e)=>fe(i)?e:i,sn=(i,e,t,n,s)=>{let r;if(Tt(i))r=()=>{let o=i(e,t,n);return isNaN(+o)?o||0:+o};else if(It(i)&&Ct(i,Qf))r=()=>{let o=i.match(lp),a=o[1],l=o[2],c=getComputedStyle(e)?.getPropertyValue(a);return(!c||c.trim()===nn)&&l&&(c=l.trim()),c||0};else return i;return s&&(s.func=r),r()},Mo=(i,e)=>i[xi]?i[$a]&&up(i,e)?vt.ATTRIBUTE:Ls.includes(e)||xr.get(e)?vt.TRANSFORM:Ct(e,"--")?vt.CSS_VAR:e in i.style?vt.CSS:e in i?vt.OBJECT:vt.ATTRIBUTE:vt.OBJECT,Sp=(i,e,t)=>{let n=i.style[e];n&&t&&(t[e]=n);let s=n||getComputedStyle(i[jf]||i).getPropertyValue(e);return s==="auto"?"0":s},vi=(i,e,t,n)=>{let s=fe(t)?Mo(i,e):t;return s===vt.OBJECT?i[e]||0:s===vt.ATTRIBUTE?i.getAttribute(e):s===vt.TRANSFORM?_p(i,e,n):s===vt.CSS_VAR?Sp(i,e,n).trimStart():Sp(i,e,n)},Si=(i,e,t)=>t==="-"?i-e:t==="+"?i+e:i*e,tl=()=>({t:Ze.NUMBER,n:0,u:null,o:null,d:null,s:null}),hn=(i,e)=>{if(e.t=Ze.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!i)return e;let t=+i;if(isNaN(t)){let n=i;n[1]==="="&&(e.o=n[0],n=n.slice(2));let s=n.includes(" ")?!1:Za.exec(n);if(s)return e.t=Ze.UNIT,e.n=+s[1],e.u=s[2],e;if(e.o)return e.n=+n,e;if(hp(n))return e.t=Ze.COLOR,e.d=yp(n),e;{let r=n.match(Hh);return e.t=Ze.COMPLEX,e.d=r?r.map(Number):[],e.s=n.split(Hh)||[],e}}else return e.n=t,e},Zh=(i,e)=>(e.t=i._valueType,e.n=i._toNumber,e.u=i._unit,e.o=null,e.d=Vt(i._toNumbers),e.s=Vt(i._strings),e),rn=tl()});var bo,bi,To=Ee(()=>{wn();Rt();Pt();bo=(i,e,t,n,s)=>{let r=i.parent,o=i.duration,a=i.completed,l=i.iterationDuration,c=i.iterationCount,h=i._currentIteration,u=i._loopDelay,d=i._reversed,p=i._alternate,g=i._hasChildren,_=i._delay,m=i._currentTime,f=_+l,v=e-_,T=Ot(m,-_,o),b=Ot(v,-_,o),E=v-m,A=b>0,R=b>=o,P=o<=Ge,y=s===Wt.FORCE,S=0,C=v,D=0;if(c>1){let H=~~(b/(l+(R?0:u)));i._currentIteration=Ot(H,0,c),R&&i._currentIteration--,S=i._currentIteration%2,C=b%(l+u)||0}let U=d^(p&&S),L=i._ease,z=R?U?0:o:U?l-C:C;L&&(z=l*L(z/l)||0);let O=(r?r.backwards:v<m)?!U:!!U;if(i._currentTime=v,i._iterationTime=z,i.backwards=O,A&&!i.began?(i.began=!0,!t&&!(r&&(O||!r.began))&&i.onBegin(i)):v<=0&&(i.began=!1),!t&&!g&&A&&i._currentIteration!==h&&i.onLoop(i),y||s===Wt.AUTO&&(e>=_&&e<=f||e<=_&&T>_||e>=f&&T!==o)||z>=f&&T!==o||z<=_&&T>0||e<=T&&T===o&&a||R&&!a&&P){if(A&&(i.computeDeltaTime(T),t||i.onBeforeUpdate(i)),!g){let H=y||(O?E*-1:E)>=Xe.tickThreshold,Y=i._offset+(r?r._offset:0)+_+z,G=i._head,K,se,xe,Se,Je=0;for(;G;){let $e=G._composition,$=G._currentTime,J=G._changeDuration,he=G._absoluteStartTime+G._changeDuration,De=G._nextRep,ge=G._prevRep,ze=$e!==Dt.none;if((H||($!==J||Y<=he+(De?De._delay:0))&&($!==0||Y>=G._absoluteStartTime))&&(!ze||!G._isOverridden&&(!G._isOverlapped||Y<=he)&&(!De||De._isOverridden||Y<=De._absoluteStartTime)&&(!ge||ge._isOverridden||Y>=ge._absoluteStartTime+ge._changeDuration+G._delay))){let xt=G._currentTime=Ot(z-G._startTime,0,J),Le=G._ease(xt/G._updateDuration),We=G._modifier,it=G._valueType,Re=G._tweenType,ht=Re===vt.OBJECT,I=it===Ze.NUMBER,pt=I&&ht||Le===0||Le===1?-1:Xe.precision,Ve,lt;if(I)Ve=lt=We(Qe(An(G._fromNumber,G._toNumber,Le),pt));else if(it===Ze.UNIT)lt=We(Qe(An(G._fromNumber,G._toNumber,Le),pt)),Ve=`${lt}${G._unit}`;else if(it===Ze.COLOR){let re=G._fromNumbers,w=G._toNumbers,x=Qe(Ot(We(An(re[0],w[0],Le)),0,255),0),F=Qe(Ot(We(An(re[1],w[1],Le)),0,255),0),Z=Qe(Ot(We(An(re[2],w[2],Le)),0,255),0),j=Ot(We(Qe(An(re[3],w[3],Le),pt)),0,1);if(Ve=`rgba(${x},${F},${Z},${j})`,ze){let q=G._numbers;q[0]=x,q[1]=F,q[2]=Z,q[3]=j}}else if(it===Ze.COMPLEX){Ve=G._strings[0];for(let re=0,w=G._toNumbers.length;re<w;re++){let x=We(Qe(An(G._fromNumbers[re],G._toNumbers[re],Le),pt)),F=G._strings[re+1];Ve+=`${F?x+F:x}`,ze&&(G._numbers[re]=x)}}if(ze&&(G._number=lt),!n&&$e!==Dt.blend){let re=G.property;K=G.target,ht?K[re]=Ve:Re===vt.ATTRIBUTE?K.setAttribute(re,Ve):(se=K.style,Re===vt.TRANSFORM?(K!==xe&&(xe=K,Se=K[yi]),Se[re]=Ve,Je=1):Re===vt.CSS?se[re]=Ve:Re===vt.CSS_VAR&&se.setProperty(re,Ve)),A&&(D=1)}else G._value=Ve}if(Je&&G._renderTransforms){let xt=nn;for(let Le in Se)xt+=`${yr[Le]}${Se[Le]}) `;se.transform=xt,Je=0}G=G._next}!t&&D&&i.onRender(i)}!t&&A&&i.onUpdate(i)}return r&&P?!t&&(r.began&&!O&&v>0&&!a||O&&v<=Ge&&a)&&(i.onComplete(i),i.completed=!O):A&&R?c===1/0?i._startTime+=i.duration:i._currentIteration>=c-1&&(i.paused=!0,!a&&!g&&(i.completed=!0,!t&&!(r&&(O||!r.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,D},bi=(i,e,t,n,s)=>{let r=i._currentIteration;if(bo(i,e,t,n,s),i._hasChildren){let o=i,a=o.backwards,l=n?e:o._iterationTime,c=zi(),h=0,u=!0;if(!n&&o._currentIteration!==r){let d=o.iterationDuration;rt(o,p=>{if(!a)!p.completed&&!p.backwards&&p._currentTime<p.iterationDuration&&bo(p,d,t,1,Wt.FORCE),p.began=!1,p.completed=!1;else{let g=p.duration,_=p._offset+p._delay,m=_+g;!t&&g<=Ge&&(!_||m===d)&&p.onComplete(p)}}),t||o.onLoop(o)}rt(o,d=>{let p=Qe((l-d._offset)*d._speed,12),g=d._fps<o._fps?d.requestTick(c):s;h+=bo(d,p,t,n,g),!d.completed&&u&&(u=!1)},a),!t&&h&&o.onRender(o),(u||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}}});var Mp,Mr,Os,br=Ee(()=>{Rt();Pt();Mp={},Mr=(i,e,t)=>{if(t===vt.TRANSFORM){let n=xr.get(i);return n||i}else if(t===vt.CSS||t===vt.ATTRIBUTE&&Ja(e)&&i in e.style){let n=Mp[i];if(n)return n;{let s=i&&Sr(i);return Mp[i]=s,s}}else return i},Os=i=>{if(i._hasChildren)rt(i,Os,!0);else{let e=i;e.pause(),rt(e,t=>{let n=t.property,s=t.target;if(s[xi]){let r=s.style,o=t._inlineValue,a=$n(o)||o===nn;if(t._tweenType===vt.TRANSFORM){let l=s[yi];if(a?delete l[n]:l[n]=o,t._renderTransforms)if(!Object.keys(l).length)r.removeProperty("transform");else{let c=nn;for(let h in l)c+=yr[h]+l[h]+") ";r.transform=c}}else a?r.removeProperty(Sr(n)):r[n]=o;e._tail===t&&e.targets.forEach(l=>{l.getAttribute&&l.getAttribute("style")===nn&&l.removeAttribute("style")})}})}return i}});var Tr,Kh=Ee(()=>{Rt();wn();Tr=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._scheduledTime=0,this._frameDuration=Bn/xo,this._fps=xo,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=this._frameDuration,n=+e,s=n<Ge?Ge:n,r=Bn/s;s>vr.frameRate&&(vr.frameRate=s),this._fps=s,this._frameDuration=r,this._scheduledTime+=r-t}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<Ge?Ge:t}requestTick(e){let t=this._scheduledTime;if(this._lastTickTime=e,e<t)return Wt.NONE;let n=this._frameDuration,s=e-t;return this._scheduledTime+=s<n?n:s,Wt.AUTO}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}});var Hi,bp,nl=Ee(()=>{Rt();Pt();To();Hi={animation:null,update:je},bp=i=>{let e=Hi.animation;return e||(e={duration:Ge,computeDeltaTime:je,_offset:0,_delay:0,_head:null,_tail:null},Hi.animation=e,Hi.update=()=>{i.forEach(t=>{for(let n in t){let s=t[n],r=s._head;if(r){let o=r._valueType,a=o===Ze.COMPLEX||o===Ze.COLOR?Vt(r._fromNumbers):null,l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(a)for(let h=0,u=c._numbers.length;h<u;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),bo(e,1,1,0,Wt.FORCE)}),e}});var Tp,H_,Jh,Xt,Ep,G_,jh=Ee(()=>{wn();Rt();Pt();Kh();To();nl();Tp=tn?requestAnimationFrame:setImmediate,H_=tn?cancelAnimationFrame:clearImmediate,Jh=class extends Tr{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=vr,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=zi();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,s=this._head;for(;s;){let r=s._next;s.paused?(kn(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):bi(s,(e-s._startTime)*s._speed*t,0,0,s._fps<n?s.requestTick(e):Wt.AUTO),s=r}Hi.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(zi()),this.reqId=Tp(Ep)),this}pause(){if(this.reqId)return this.paused=!0,G_()}resume(){if(this.paused)return this.paused=!1,rt(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Xe.timeScale===1?1:Bn)}set speed(e){this._speed=e*Xe.timeScale,rt(this,t=>t.speed=t._speed)}get timeUnit(){return Xe.timeScale===1?"ms":"s"}set timeUnit(e){let n=e==="s",s=n?.001:1;if(Xe.timeScale!==s){Xe.timeScale=s,Xe.tickThreshold=200*s;let r=n?.001:Bn;this.defaults.duration*=r,this._speed*=r}}get precision(){return Xe.precision}set precision(e){Xe.precision=e}},Xt=(()=>{let i=new Jh(zi());return tn&&(Gh.engine=i,ct.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(ct.hidden?i.pause():i.resume())})),i})(),Ep=()=>{Xt._head?(Xt.reqId=Tp(Ep),Xt.update()):Xt.reqId=0},G_=()=>(H_(Xt.reqId),Xt.reqId=0,Xt)});var il,wo,W_,Eo,sl,Qh,wp,Ao,Ro=Ee(()=>{Rt();Pt();br();jh();nl();il={_rep:new WeakMap,_add:new Map},wo=(i,e,t="_rep")=>{let n=il[t],s=n.get(i);return s||(s={},n.set(i,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},W_=(i,e)=>i._isOverridden||i._absoluteStartTime>e._absoluteStartTime,Eo=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=Ge,i._currentTime=Ge},sl=(i,e)=>{let t=i._composition;if(t===Dt.replace){let n=i._absoluteStartTime;gn(e,i,W_,"_prevRep","_nextRep");let s=i._prevRep;if(s){let r=s.parent,o=s._absoluteStartTime+s._changeDuration;if(i.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>n){Eo(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)Eo(c),c=c._prevRep}let a=n-i._delay;if(o>a){let c=s._startTime,h=o-(c+s._updateDuration),u=Qe(a-h-c,12);s._changeDuration=u,s._currentTime=u,s._isOverlapped=1,u<Ge&&Eo(s)}let l=!0;if(rt(r,c=>{c._isOverlapped||(l=!1)}),l){let c=r.parent;if(c){let h=!0;rt(c,u=>{u!==r&&rt(u,d=>{d._isOverlapped||(h=!1)})}),h&&c.cancel()}else r.cancel()}}}else if(t===Dt.blend){let n=wo(i.target,i.property,"_add"),s=bp(il._add),r=n._head;r||(r={...i},r._composition=Dt.replace,r._updateDuration=Ge,r._startTime=0,r._numbers=Vt(i._fromNumbers),r._number=0,r._next=null,r._prev=null,gn(n,r),gn(s,r));let o=i._toNumber;if(i._fromNumber=r._fromNumber-o,i._toNumber=0,i._numbers=Vt(i._fromNumbers),i._number=0,r._fromNumber=o,i._toNumbers){let a=Vt(i._toNumbers);a&&a.forEach((l,c)=>{i._fromNumbers[c]=r._fromNumbers[c]-l,i._toNumbers[c]=0}),r._fromNumbers=a}gn(n,i,null,"_prevAdd","_nextAdd")}return i},Qh=i=>{let e=i._composition;if(e!==Dt.none){let t=i.target,n=i.property,o=il._rep.get(t)[n];if(kn(o,i,"_prevRep","_nextRep"),e===Dt.blend){let a=il._add,l=a.get(t);if(!l)return;let c=l[n],h=Hi.animation;kn(c,i,"_prevAdd","_nextAdd");let u=c._head;if(u&&u===c._tail){kn(c,u,"_prevAdd","_nextAdd"),kn(h,u);let d=!0;for(let p in l)if(l[p]._head){d=!1;break}d&&a.delete(t)}}}return i},wp=(i,e,t)=>{let n=!1;return rt(e,s=>{let r=s.target;if(i.includes(r)){let o=s.property,a=s._tweenType,l=Mr(t,r,a);(!l||l&&l===o)&&(s.parent._tail===s&&s._tweenType===vt.TRANSFORM&&s._prev&&s._prev._tweenType===vt.TRANSFORM&&(s._prev._renderTransforms=1),kn(e,s),Qh(s),n=!0)}},!0),n},Ao=(i,e,t)=>{let n=e||Xt,s;if(n._hasChildren){let r=0;rt(n,o=>{if(!o._hasChildren)if(s=wp(i,o,t),s&&!o._head)o.cancel(),kn(n,o);else{let l=o._offset+o._delay+o.duration;l>r&&(r=l)}o._head?Ao(i,o,t):o._hasChildren=!1},!0),fe(n.iterationDuration)||(n.iterationDuration=r)}else s=wp(i,n,t);s&&!n._head&&(n._hasChildren=!1,n.cancel&&n.cancel())}});var Ap,eu,Rp,Rn,Co=Ee(()=>{Rt();Pt();wn();Mi();To();Ro();Kh();jh();Ap=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),eu=i=>(i._cancelled&&(i._hasChildren?rt(i,eu):rt(i,e=>{e._composition!==Dt.none&&sl(e,wo(e.target,e.property))}),i._cancelled=0),i),Rp=0,Rn=class extends Tr{constructor(e={},t=null,n=0){super(0),++Rp;let{id:s,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:u,frameRate:d,playbackRate:p,onComplete:g,onLoop:_,onPause:m,onBegin:f,onBeforeUpdate:v,onUpdate:T}=e;En.current&&En.current.register(this);let b=t?0:Xt._lastTickTime,E=t?t.defaults:Xe.defaults,A=Tt(r)||fe(r)?E.delay:+r,R=Tt(o)||fe(o)?1/0:+o,P=Ne(c,E.loop),y=Ne(h,E.loopDelay),S=P===!0||P===1/0||P<0?1/0:P+1;if(yo){let D=S===1/0;if(yo.register(this,e,D)&&D){let L=l?2:1,z=t?yo.maxNestedInfiniteLoops:yo.maxInfiniteLoops;S=Math.max(z,L)}}let C=0;t?C=n:(Xt.reqId||Xt.requestTick(zi()),C=(Xt._lastTickTime-Xt._startTime)*Xe.timeScale),this.id=fe(s)?Rp:s,this.parent=t,this.duration=Fs((R+y)*S-y)||Ge,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=f||E.onBegin,this.onBeforeUpdate=v||E.onBeforeUpdate,this.onUpdate=T||E.onUpdate,this.onLoop=_||E.onLoop,this.onPause=m||E.onPause,this.onComplete=g||E.onComplete,this.iterationDuration=R,this.iterationCount=S,this._autoplay=t?!1:Ne(u,E.autoplay),this._offset=C,this._delay=A,this._loopDelay=y,this._iterationTime=0,this._currentIteration=0,this._resolve=je,this._running=!1,this._reversed=+Ne(a,E.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=Ne(l,E.alternate),this._prev=null,this._next=null,this._lastTickTime=b,this._startTime=b,this._lastTime=b,this._fps=Ne(d,E.frameRate),this._speed=Ne(p,E.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return Ot(Qe(this._currentTime,Xe.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return Ot(Qe(this._iterationTime,Xe.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return Ot(Qe(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return Ot(Qe(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*Ot(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return eu(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,bi(this,0,1,~~e,Wt.FORCE),Ap(this),this._hasChildren&&rt(this,Ap),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&bi(this,this.duration,1,~~e,Wt.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!fe(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*Xt._speed);return this._startTime=zi()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=Ge&&!this._hasChildren?bi(this,Ge,0,0,Wt.FORCE):(this._running||(gn(Xt,this),Xt._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Xt.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){eu(this),this.completed=!1;let s=this.paused;return this.paused=!0,bi(this,e+this._delay,~~t,~~n,Wt.AUTO),s?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,s=t===1/0?vo(_o/n):t;return this._reversed=+(this._alternate&&!(s%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?rt(this,e=>e.cancel(),!0):rt(this,Qh),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=Vi(e);if(t===n)return this;let s=e/t,r=e<=Ge;return this.duration=r?Ge:n,this.iterationDuration=r?Ge:Vi(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){bi(this,0,1,0,Wt.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=je){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=je};return new Promise(s=>(this._resolve=()=>s(n()),this.completed&&this._resolve(),this))}}});function rl(i){let e=It(i)?En.root.querySelectorAll(i):i;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function Gi(i){if($n(i))return[];if(!tn)return ln(i)&&i.flat(1/0)||[i];if(ln(i)){let t=i.flat(1/0),n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];if(!$n(o)){let a=rl(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!$n(h)){let u=!1;for(let d=0,p=n.length;d<p;d++)if(n[d]===h){u=!0;break}u||n.push(h)}}else{let l=!1;for(let c=0,h=n.length;c<h;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}let e=rl(i);return e?Array.from(e):[i]}function Ti(i){let e=Gi(i),t=e.length;if(t)for(let n=0;n<t;n++){let s=e[n];if(!s[Vh]){s[Vh]=!0;let r=Ja(s);(s.nodeType||r)&&(s[xi]=!0,s[$a]=r,s[yi]={})}}return e}var Wi=Ee(()=>{wn();Rt();Pt();});var tu,Cp,Bs,ol=Ee(()=>{Rt();Pt();tu={deg:1,rad:180/So,turn:360},Cp={},Bs=(i,e,t,n=!1)=>{let s=e.u,r=e.n;if(e.t===Ze.UNIT&&s===t)return e;let o=r+s+t,a=Cp[o];if(!fe(a)&&!n)e.n=a;else{let l;if(s in tu)l=r*tu[s]/tu[t];else{let h=i.cloneNode(),u=i.parentNode,d=u&&u!==ct?u:ct.body;d.appendChild(h);let p=h.style;p.width=100+s;let g=h.offsetWidth||100;p.width=100+t;let _=h.offsetWidth||100,m=g/_;d.removeChild(h),l=m*r}e.n=l,Cp[o]=l}return e.t,Ze.UNIT,e.u=t,e}});var un,Io=Ee(()=>{un=i=>i});var Po,iu,X_,Ip,Pp,nu,al,su,Lp,Xi,Er=Ee(()=>{Rt();Pt();Io();Po=(i=1.68)=>e=>Us(e,+i),iu={in:i=>e=>i(e),out:i=>e=>1-i(1-e),inOut:i=>e=>e<.5?i(e*2)/2:1-i(e*-2+2)/2,outIn:i=>e=>e<.5?(1-i(1-e*2))/2:(i(e*2-1)+1)/2},X_=So/2,Ip=So*2,Pp={[nn]:Po,Quad:Po(2),Cubic:Po(3),Quart:Po(4),Quint:Po(5),Sine:i=>1-fp(i*X_),Circ:i=>1-Qa(1-i*i),Expo:i=>i?Us(2,10*i-10):0,Bounce:i=>{let e,t=4;for(;i<((e=Us(2,--t))-1)/11;);return 1/Us(4,3-t)-7.5625*Us((e*3-2)/22-i,2)},Back:(i=1.7)=>e=>(+i+1)*e*e*e-+i*e*e,Elastic:(i=1,e=.3)=>{let t=Ot(+i,1,10),n=Ot(+e,Ge,2),s=n/Ip*pp(1/t),r=Ip/n;return o=>o===0||o===1?o:-t*Us(2,-10*(1-o))*dp((1-o-s)*r)}},nu=(()=>{let i={linear:un,none:un};for(let e in iu)for(let t in Pp){let n=Pp[t],s=iu[e];i[e+t]=t===nn||t==="Back"||t==="Elastic"?(r,o)=>s(n(r,o)):s(n)}return i})(),al={linear:un,none:un},su=i=>{if(al[i])return al[i];if(i.indexOf("(")<=-1){let t=iu[i]||i.includes("Back")||i.includes("Elastic")?nu[i]():nu[i];return t?al[i]=t:un}else{let e=i.slice(0,-1).split("("),t=nu[e[0]];return t?al[i]=t(...e[1].split(",")):un}},Lp=["steps(","irregular(","linear(","cubicBezier("],Xi=i=>{if(It(i)){for(let t=0,n=Lp.length;t<n;t++)if(Ct(i,Lp[t]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),un}return Tt(i)?i:It(i)?su(i):un}});var Oe,et,wr,ll,ru,cl,Ar,hl,q_,Dp,ls,Ei,Y_,cs,qt,ul=Ee(()=>{Rt();Pt();wn();Wi();Mi();br();ol();Er();Co();Ro();nl();Oe=tl(),et=tl(),wr={},ll={func:null},ru={func:null},cl=[null],Ar=[null,null],hl={to:null},q_=0,Dp=0,Y_=(i,e)=>{let t={};if(ln(i)){let n=[].concat(...i.map(s=>Object.keys(s))).filter(Ns);for(let s=0,r=n.length;s<r;s++){let o=n[s],a=i.map(l=>{let c={};for(let h in l){let u=l[h];Ns(h)?h===o&&(c.to=u):c[h]=u}return c});t[o]=a}}else{let n=Ne(e.duration,Xe.defaults.duration);Object.keys(i).map(r=>({o:parseFloat(r)/100,p:i[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(Ns(l)){let c=t[l];c||(c=t[l]=[]);let h=o*n,u=c.length,d=c[u-1],p={to:a[l]},g=0;for(let _=0;_<u;_++)g+=c[_].duration;u===1&&(p.from=d.to),a.ease&&(p.ease=a.ease),p.duration=h-(u?g:0),c.push(p)}return r});for(let r in t){let o=t[r],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],u=h.ease;h.ease=a||void 0,a=u}o[0].duration||o.shift()}}return t},cs=class extends Rn{constructor(e,t,n,s,r=!1,o=0,a=0){super(t,n,s),++Dp;let l=Ti(e),c=l.length,h=t.keyframes,u=h?el(Y_(h,t),t):t,{id:d,delay:p,duration:g,ease:_,playbackEase:m,modifier:f,composition:v,onRender:T}=u,b=n?n.defaults:Xe.defaults,E=Ne(_,b.ease),A=Ne(m,b.playbackEase),R=A?Xi(A):null,P=!fe(E.ease),y=P?E.ease:Ne(_,R?"linear":b.ease),S=P?E.settlingDuration:Ne(g,b.duration),C=Ne(p,b.delay),D=f||b.modifier,U=fe(v)&&c>=Bn?Dt.none:fe(v)?b.composition:v,L=this._offset+(n?n._offset:0);P&&(E.parent=this);let z=NaN,O=NaN,H=0,Y=0;for(let G=0;G<c;G++){let K=l[G],se=o||G,xe=a||c,Se=NaN,Je=NaN;for(let $e in u)if(Ns($e)){let $=Mo(K,$e),J=Mr($e,K,$),he=u[$e],De=ln(he);if(r&&!De&&(Ar[0]=he,Ar[1]=he,he=Ar),De){let it=he.length,Re=!cn(he[0]);it===2&&Re?(hl.to=he,cl[0]=hl,ls=cl):it>2&&Re?(ls=[],he.forEach((ht,I)=>{I?I===1?(Ar[1]=ht,ls.push(Ar)):ls.push(ht):Ar[0]=ht})):ls=he}else cl[0]=he,ls=cl;let ge=null,ze=null,xt=NaN,Le=0,We=0;for(let it=ls.length;We<it;We++){let Re=ls[We];cn(Re)?Ei=Re:(hl.to=Re,Ei=hl),ll.func=null,ru.func=null;let ht=sn(Ei.to,K,se,xe,ll),I;cn(ht)&&!fe(ht.to)?(Ei=ht,I=ht.to):I=ht;let pt=sn(Ei.from,K,se,xe),Ve=Ei.ease||y,lt=sn(Ve,K,se,xe),re=Tt(lt)||It(lt)?lt:Ve,w=!fe(re)&&!fe(re.ease),x=w?re.ease:re,F=w?re.settlingDuration:sn(Ne(Ei.duration,it>1?sn(S,K,se,xe)/it:S),K,se,xe),Z=sn(Ne(Ei.delay,We?0:C),K,se,xe),j=sn(Ne(Ei.composition,U),K,se,xe),q=zt(j)?j:Dt[j],Te=Ei.modifier||D,oe=!fe(pt),Me=!fe(I),Ce=ln(I),ie=Ce||oe&&Me,le=ze?Le+Z:Z,ye=Qe(L+le,12);!Y&&(oe||Ce)&&(Y=1);let me=ze;if(q!==Dt.none){ge||(ge=wo(K,J));let te=ge._head;for(;te&&!te._isOverridden&&te._absoluteStartTime<=ye;)if(me=te,te=te._nextRep,te&&te._absoluteStartTime>=ye)for(;te;)Eo(te),te=te._nextRep}if(ie){hn(Ce?sn(I[0],K,se,xe,ru):pt,Oe),hn(Ce?sn(I[1],K,se,xe,ll):I,et);let te=vi(K,J,$,wr);Oe.t===Ze.NUMBER&&(me?me._valueType===Ze.UNIT&&(Oe.t=Ze.UNIT,Oe.u=me._unit):(hn(te,rn),rn.t===Ze.UNIT&&(Oe.t=Ze.UNIT,Oe.u=rn.u)))}else Me?hn(I,et):ze?Zh(ze,et):hn(n&&me&&me.parent.parent===n?me._value:vi(K,J,$,wr),et),oe?hn(pt,Oe):ze?Zh(ze,Oe):hn(n&&me&&me.parent.parent===n?me._value:vi(K,J,$,wr),Oe);if(Oe.o&&(Oe.n=Si(me?me._toNumber:hn(vi(K,J,$,wr),rn).n,Oe.n,Oe.o)),et.o&&(et.n=Si(Oe.n,et.n,et.o)),Oe.t!==et.t){if(Oe.t===Ze.COMPLEX||et.t===Ze.COMPLEX){let te=Oe.t===Ze.COMPLEX?Oe:et,ee=Oe.t===Ze.COMPLEX?et:Oe;ee.t=Ze.COMPLEX,ee.s=Vt(te.s),ee.d=te.d.map(()=>ee.n)}else if(Oe.t===Ze.UNIT||et.t===Ze.UNIT){let te=Oe.t===Ze.UNIT?Oe:et,ee=Oe.t===Ze.UNIT?et:Oe;ee.t=Ze.UNIT,ee.u=te.u}else if(Oe.t===Ze.COLOR||et.t===Ze.COLOR){let te=Oe.t===Ze.COLOR?Oe:et,ee=Oe.t===Ze.COLOR?et:Oe;ee.t=Ze.COLOR,ee.s=te.s,ee.d=[0,0,0,1]}}if(Oe.u!==et.u){let te=et.u?Oe:et;te=Bs(K,te,et.u?et.u:Oe.u,!1)}if(et.d&&Oe.d&&et.d.length!==Oe.d.length){let te=Oe.d.length>et.d.length?Oe:et,ee=te===Oe?et:Oe;ee.d=te.d.map((_e,ne)=>fe(ee.d[ne])?0:ee.d[ne]),ee.s=Vt(te.s)}let ae=Qe(+F||Ge,12),qe=wr[J];$n(qe)||(wr[J]=null);let N={parent:this,id:q_++,property:J,target:K,_value:null,_toFunc:ll.func,_fromFunc:ru.func,_ease:Xi(x),_fromNumbers:Vt(Oe.d),_toNumbers:Vt(et.d),_strings:Vt(et.s),_fromNumber:Oe.n,_toNumber:et.n,_numbers:Vt(Oe.d),_number:Oe.n,_unit:et.u,_modifier:Te,_currentTime:0,_startTime:le,_delay:+Z,_updateDuration:ae,_changeDuration:ae,_absoluteStartTime:ye,_tweenType:$,_valueType:et.t,_composition:q,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:qe,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};q!==Dt.none&&sl(N,ge),isNaN(xt)&&(xt=N._startTime),Le=Qe(le+ae,12),ze=N,H++,gn(this,N)}(isNaN(O)||xt<O)&&(O=xt),(isNaN(z)||Le>z)&&(z=Le),$===vt.TRANSFORM&&(Se=H-We,Je=H)}if(!isNaN(Se)){let $e=0;rt(this,$=>{$e>=Se&&$e<Je&&($._renderTransforms=1,$._composition===Dt.blend&&rt(Hi.animation,J=>{J.id===$.id&&(J._renderTransforms=1)})),$e++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),O?(rt(this,G=>{G._startTime-G._delay||(G._delay-=O),G._startTime-=O}),z-=O):O=0,z||(z=Ge,this.iterationCount=0),this.targets=l,this.id=fe(d)?Dp:d,this.duration=z===Ge?Ge:Fs((z+this._loopDelay)*this.iterationCount-this._loopDelay)||Ge,this.onRender=T||b.onRender,this._ease=R,this._delay=O,this.iterationDuration=z,!this._autoplay&&Y&&this.onRender(this)}stretch(e){let t=this.duration;if(t===Vi(e))return this;let n=e/t;return rt(this,s=>{s._updateDuration=Vi(s._updateDuration*n),s._changeDuration=Vi(s._changeDuration*n),s._currentTime*=n,s._startTime*=n,s._absoluteStartTime*=n}),super.stretch(e)}refresh(){return rt(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(hn(n(),Oe),Oe.u!==e._unit&&e.target[xi]&&Bs(e.target,Oe,e._unit,!0),e._fromNumbers=Vt(Oe.d),e._fromNumber=Oe.n):t&&(hn(vi(e.target,e.property,e._tweenType),rn),e._fromNumbers=Vt(rn.d),e._fromNumber=rn.n),t&&(hn(t(),et),e._toNumbers=Vt(et.d),e._strings=Vt(et.s),e._toNumber=et.o?Si(e._fromNumber,et.n,et.o):et.n))}),this.duration===Ge&&this.restart(),this}revert(){return super.revert(),Os(this)}then(e){return super.then(e)}},qt=(i,e)=>new cs(i,e,null,0,!1).init()});var $_,ks,ou=Ee(()=>{Rt();Pt();Mi();$_=(i,e)=>{if(Ct(e,"<")){let t=e[1]==="<",n=i._tail,s=n?n._offset+n._delay:0;return t?s:s+n.duration}},ks=(i,e)=>{let t=i.iterationDuration;if(t===Ge&&(t=0),fe(e))return t;if(zt(+e))return+e;let n=e,s=i?i.labels:null,r=!$n(s),o=$_(i,n),a=!fe(o),l=Ka.exec(n);if(l){let c=l[0],h=n.split(c),u=r&&h[0]?s[h[0]]:t,d=a?o:r?u:t,p=+h[1];return Si(d,p,c[0])}else return a?o:r?fe(s[n])?t:s[n]:t}});function Z_(i){return Fs((i.iterationDuration+i._loopDelay)*i.iterationCount-i._loopDelay)||Ge}function au(i,e,t,n,s,r){let a=zt(i.duration)&&i.duration<=Ge?t-Ge:t;e.composition&&bi(e,a,1,1,Wt.AUTO);let l=n?new cs(n,i,e,a,!1,s,r):new Rn(i,e,a);return e.composition&&l.init(!0),gn(e,l),rt(e,c=>{let u=c._offset+c._delay+c.duration;u>e.iterationDuration&&(e.iterationDuration=u)}),e.duration=Z_(e),e}var Np,dl,_n,Up=Ee(()=>{wn();Rt();Pt();Mi();Wi();To();br();Ro();ul();Co();Er();ou();Np=0,dl=class extends Rn{constructor(e={}){super(e,null,0),++Np,this.id=fe(e.id)?Np:e.id,this.duration=0,this.labels={};let t=e.defaults,n=Xe.defaults;this.defaults=t?el(t,n):n,this.composition=Ne(e.composition,!0),this.onRender=e.onRender||n.onRender;let s=Ne(e.playbackEase,n.playbackEase);this._ease=s?Xi(s):null,this.iterationDuration=0}add(e,t,n){let s=cn(t),r=cn(e);if(s||r){if(this._hasChildren=!0,s){let o=t;if(Tt(n)){let a=n,l=Gi(e),c=this.duration,h=this.iterationDuration,u=o.id,d=0,p=l.length;l.forEach(g=>{let _={...o};this.duration=c,this.iterationDuration=h,fe(u)||(_.id=u+"-"+d),au(_,this,ks(this,a(g,d,p,this)),g,d,p),d++})}else au(o,this,ks(this,n),e)}else au(e,this,ks(this,t));return this.composition&&this.init(!0),this}}sync(e,t){if(fe(e)||e&&fe(e.pause))return this;e.pause();let n=+(e.effect?e.effect.getTiming().duration:e.duration);return!fe(e)&&!fe(e.persist)&&(e.persist=!0),this.add(e,{currentTime:[0,n],duration:n,delay:0,ease:"linear",playbackEase:"linear"},t)}set(e,t,n){return fe(t)?this:(t.duration=Ge,t.composition=Dt.replace,this.add(e,t,n))}call(e,t){return fe(e)||e&&!Tt(e)?this:this.add({duration:0,delay:0,onComplete:()=>e(this)},t)}label(e,t){return fe(e)||e&&!It(e)?this:(this.labels[e]=ks(this,t),this)}remove(e,t){return Ao(Gi(e),this,t),this}stretch(e){let t=this.duration;if(t===Vi(e))return this;let n=e/t,s=this.labels;rt(this,r=>r.stretch(r.duration*n));for(let r in s)s[r]*=n;return super.stretch(e)}refresh(){return rt(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),rt(this,e=>e.revert,!0),Os(this)}then(e){return super.then(e)}},_n=i=>new dl(i).init()});var lu={};Ya(lu,{clamp:()=>Ot,damp:()=>ix,degToRad:()=>tx,lerp:()=>An,mapRange:()=>ex,padEnd:()=>j_,padStart:()=>J_,radToDeg:()=>nx,round:()=>Qe,roundPad:()=>K_,snap:()=>gp,wrap:()=>Q_});var K_,J_,j_,Q_,ex,tx,nx,ix,Fp=Ee(()=>{Pt();Pt();K_=(i,e)=>(+i).toFixed(e),J_=(i,e,t)=>`${i}`.padStart(e,t),j_=(i,e,t)=>`${i}`.padEnd(e,t),Q_=(i,e,t)=>((i-e)%(t-e)+(t-e))%(t-e)+e,ex=(i,e,t,n,s)=>n+(i-e)/(t-e)*(s-n),tx=i=>i*Math.PI/180,nx=i=>i*180/Math.PI,ix=(i,e,t,n)=>n?n===1?e:An(i,e,1-Math.exp(-n*t*.1)):i});var cu,fl,hu,uu=Ee(()=>{Pt();cu={_head:null,_tail:null},fl=(i,e,t)=>{let n=cu._head,s;for(;n;){let r=n._next,o=n.$el===i,a=!e||n.property===e,l=!t||n.parent===t;if(o&&a&&l){s=n.animation;try{s.commitStyles()}catch{}s.cancel(),kn(cu,n);let c=n.parent;c&&(c._completed++,c.animations.length===c._completed&&(c.completed=!0,c.paused=!0,c.muteCallbacks||(c.onComplete(c),c._resolve(c))))}n=r}return s},hu=(i,e,t,n,s)=>{let r=e.animate(n,s),o=s.delay+ +s.duration*s.iterations;r.playbackRate=i._speed,i.paused&&r.pause(),i.duration<o&&(i.duration=o,i.controlAnimation=r),i.animations.push(r),fl(e,t),gn(cu,{parent:i,animation:r,$el:e,property:t,_next:null,_prev:null});let a=()=>fl(e,t,i);return r.oncancel=a,r.onremove=a,i.persist||(r.onfinish=a),r}});function Lo(i,e,t){let n=Ti(i);if(!n.length)return;let[s]=n,r=Mo(s,e),o=Mr(e,s,r),a=vi(s,o);if(fe(t))return a;if(hn(a,rn),rn.t===Ze.NUMBER||rn.t===Ze.UNIT){if(t===!1)return rn.n;{let l=Bs(s,rn,t,!1);return`${Qe(l.n,Xe.precision)}${l.u}`}}}var Do,Op,du=Ee(()=>{wn();Rt();Pt();Wi();br();Mi();ol();uu();Ro();ul();Do=(i,e)=>{if(!fe(e))return e.duration=Ge,e.composition=Ne(e.composition,Dt.none),new cs(i,e,null,0,!0).resume()},Op=(i,e,t)=>{let n=Gi(i);for(let s=0,r=n.length;s<r;s++)fl(n[s],t,e&&e.controlAnimation&&e);return Ao(n,e,t),n}});var pl,ml,gl=Ee(()=>{Rt();wn();Pt();Co();pl=(i=je)=>new Rn({duration:1*Xe.timeScale,onComplete:i},null,0).resume(),ml=i=>{let e;return(...t)=>{let n,s,r,o;e&&(n=e.currentIteration,s=e.iterationProgress,r=e.reversed,o=e._alternate,e.revert());let a=i(...t);return a&&!Tt(a)&&a.revert&&(e=a),fe(s)||(e.currentIteration=n,e.iterationProgress=(o&&n%2?!r:r)?1-s:s),a||je}}});var sx,_l,yl,fu,rx,No,xl,Bp,ox,kp,vl,Zn,zp=Ee(()=>{Rt();wn();Pt();Wi();Mi();ol();Co();du();gl();Io();Er();sx=()=>{let i=ct.createElement("div");ct.body.appendChild(i),i.style.height="100lvh";let e=i.offsetHeight;return ct.body.removeChild(i),e},_l=(i,e)=>i&&Tt(i)?i(e):i,yl=new Map,fu=class{constructor(e){this.element=e,this.useWin=this.element===ct.body,this.winWidth=0,this.winHeight=0,this.width=0,this.height=0,this.left=0,this.top=0,this.scale=1,this.zIndex=0,this.scrollX=0,this.scrollY=0,this.prevScrollX=0,this.prevScrollY=0,this.scrollWidth=0,this.scrollHeight=0,this.velocity=0,this.backwardX=!1,this.backwardY=!1,this.scrollTicker=new Rn({autoplay:!1,onBegin:()=>this.dataTimer.resume(),onUpdate:()=>{let t=this.backwardX||this.backwardY;rt(this,n=>n.handleScroll(),t)},onComplete:()=>this.dataTimer.pause()}).init(),this.dataTimer=new Rn({autoplay:!1,frameRate:30,onUpdate:t=>{let n=t.deltaTime,s=this.prevScrollX,r=this.prevScrollY,o=this.scrollX,a=this.scrollY,l=s-o,c=r-a;this.prevScrollX=o,this.prevScrollY=a,l&&(this.backwardX=s>o),c&&(this.backwardY=r>a),this.velocity=Qe(n>0?Math.sqrt(l*l+c*c)/n:0,5)}}).init(),this.resizeTicker=new Rn({autoplay:!1,duration:250*Xe.timeScale,onComplete:()=>{this.updateWindowBounds(),this.refreshScrollObservers(),this.handleScroll()}}).init(),this.wakeTicker=new Rn({autoplay:!1,duration:500*Xe.timeScale,onBegin:()=>{this.scrollTicker.resume()},onComplete:()=>{this.scrollTicker.pause()}}).init(),this._head=null,this._tail=null,this.updateScrollCoords(),this.updateWindowBounds(),this.updateBounds(),this.refreshScrollObservers(),this.handleScroll(),this.resizeObserver=new ResizeObserver(()=>this.resizeTicker.restart()),this.resizeObserver.observe(this.element),(this.useWin?ii:this.element).addEventListener("scroll",this,!1)}updateScrollCoords(){let e=this.useWin,t=this.element;this.scrollX=Qe(e?ii.scrollX:t.scrollLeft,0),this.scrollY=Qe(e?ii.scrollY:t.scrollTop,0)}updateWindowBounds(){this.winWidth=ii.innerWidth,this.winHeight=sx()}updateBounds(){let e=getComputedStyle(this.element),t=this.element;this.scrollWidth=t.scrollWidth+parseFloat(e.marginLeft)+parseFloat(e.marginRight),this.scrollHeight=t.scrollHeight+parseFloat(e.marginTop)+parseFloat(e.marginBottom),this.updateWindowBounds();let n,s;if(this.useWin)n=this.winWidth,s=this.winHeight;else{let r=t.getBoundingClientRect();n=t.clientWidth,s=t.clientHeight,this.top=r.top,this.left=r.left,this.scale=r.width?n/r.width:r.height?s/r.height:1}this.width=n,this.height=s}refreshScrollObservers(){rt(this,e=>{e._debug&&e.removeDebug()}),this.updateBounds(),rt(this,e=>{e.refresh(),e.onResize(e),e._debug&&e.debug()})}refresh(){this.updateWindowBounds(),this.updateBounds(),this.refreshScrollObservers(),this.handleScroll()}handleScroll(){this.updateScrollCoords(),this.wakeTicker.restart()}handleEvent(e){e.type==="scroll"&&this.handleScroll()}revert(){this.scrollTicker.cancel(),this.dataTimer.cancel(),this.resizeTicker.cancel(),this.wakeTicker.cancel(),this.resizeObserver.disconnect(),(this.useWin?ii:this.element).removeEventListener("scroll",this),yl.delete(this.element)}},rx=i=>{let e=i?Gi(i)[0]||ct.body:ct.body,t=yl.get(e);return t||(t=new fu(e),yl.set(e,t)),t},No=(i,e,t,n,s)=>{let r=e==="min",o=e==="max",a=e==="top"||e==="left"||e==="start"||r?0:e==="bottom"||e==="right"||e==="end"||o?"100%":e==="center"?"50%":e,{n:l,u:c}=hn(a,rn),h=l;return c==="%"?h=l/100*t:c&&(h=Bs(i,rn,"px",!0).n),o&&n<0&&(h+=n),r&&s>0&&(h+=s),h},xl=(i,e,t,n,s)=>{let r;if(It(e)){let o=Ka.exec(e);if(o){let a=o[0],l=a[0],c=e.split(a),h=c[0]==="min",u=c[0]==="max",d=No(i,c[0],t,n,s),p=No(i,c[1],t,n,s);if(h){let g=Si(No(i,"min",t),p,l);r=g<d?d:g}else if(u){let g=Si(No(i,"max",t),p,l);r=g>d?d:g}else r=Si(d,p,l)}else r=No(i,e,t,n,s)}else r=e;return Qe(r,0)},Bp=i=>{let e,t=i.targets;for(let n=0,s=t.length;n<s;n++){let r=t[n];if(r[xi]){e=r;break}}return e},ox=0,kp=["#FF4B4B","#FF971B","#FFC730","#F9F640","#7AFF5A","#18FF74","#17E09B","#3CFFEC","#05DBE9","#33B3F1","#638CF9","#C563FE","#FF4FCF","#F93F8A"],vl=class{constructor(e={}){En.current&&En.current.register(this);let t=Ne(e.sync,"play pause"),n=t?Xi(t):null,s=t&&(t==="linear"||t===un),r=t&&!(n===un&&!s),o=t&&(zt(t)||t===!0||s),a=t&&It(t)&&!r&&!o,l=a?t.split(" ").map(h=>()=>{let u=this.linked;return u&&u[h]?u[h]():null}):null,c=a&&l.length>2;this.index=ox++,this.id=fe(e.id)?this.index:e.id,this.container=rx(e.container),this.target=null,this.linked=null,this.repeat=null,this.horizontal=null,this.enter=null,this.leave=null,this.sync=r||o||!!l,this.syncEase=r?n:null,this.syncSmooth=o?t===!0||s?1:t:null,this.onSyncEnter=l&&!c&&l[0]?l[0]:je,this.onSyncLeave=l&&!c&&l[1]?l[1]:je,this.onSyncEnterForward=l&&c&&l[0]?l[0]:je,this.onSyncLeaveForward=l&&c&&l[1]?l[1]:je,this.onSyncEnterBackward=l&&c&&l[2]?l[2]:je,this.onSyncLeaveBackward=l&&c&&l[3]?l[3]:je,this.onEnter=e.onEnter||je,this.onLeave=e.onLeave||je,this.onEnterForward=e.onEnterForward||je,this.onLeaveForward=e.onLeaveForward||je,this.onEnterBackward=e.onEnterBackward||je,this.onLeaveBackward=e.onLeaveBackward||je,this.onUpdate=e.onUpdate||je,this.onResize=e.onResize||je,this.onSyncComplete=e.onSyncComplete||je,this.reverted=!1,this.ready=!1,this.completed=!1,this.began=!1,this.isInView=!1,this.forceEnter=!1,this.hasEntered=!1,this.offset=0,this.offsetStart=0,this.offsetEnd=0,this.distance=0,this.prevProgress=0,this.thresholds=["start","end","end","start"],this.coords=[0,0,0,0],this.debugStyles=null,this.$debug=null,this._params=e,this._debug=Ne(e.debug,!1),this._next=null,this._prev=null,gn(this.container,this),pl(()=>{if(!this.reverted){if(!this.target){let h=Gi(e.target)[0];this.target=h||ct.body,this.refresh()}this._debug&&this.debug()}})}link(e){if(e&&(e.pause(),this.linked=e,!fe(e)&&!fe(e.persist)&&(e.persist=!0),!this._params.target)){let t;fe(e.targets)?rt(e,n=>{n.targets&&!t&&(t=Bp(n))}):t=Bp(e),this.target=t||ct.body,this.refresh()}return this}get velocity(){return this.container.velocity}get backward(){return this.horizontal?this.container.backwardX:this.container.backwardY}get scroll(){return this.horizontal?this.container.scrollX:this.container.scrollY}get progress(){let e=(this.scroll-this.offsetStart)/this.distance;return e===1/0||isNaN(e)?0:Qe(Ot(e,0,1),6)}refresh(){this.ready=!0,this.reverted=!1;let e=this._params;return this.repeat=Ne(_l(e.repeat,this),!0),this.horizontal=Ne(_l(e.axis,this),"y")==="x",this.enter=Ne(_l(e.enter,this),"end start"),this.leave=Ne(_l(e.leave,this),"start end"),this.updateBounds(),this.handleScroll(),this}removeDebug(){return this.$debug&&(this.$debug.parentNode.removeChild(this.$debug),this.$debug=null),this.debugStyles&&(this.debugStyles.revert(),this.$debug=null),this}debug(){this.removeDebug();let e=this.container,t=this.horizontal,n=e.element.querySelector(":scope > .animejs-onscroll-debug"),s=ct.createElement("div"),r=ct.createElement("div"),o=ct.createElement("div"),a=kp[this.index%kp.length],l=e.useWin,c=l?e.winWidth:e.width,h=l?e.winHeight:e.height,u=e.scrollWidth,d=e.scrollHeight,p=this.container.width>360?320:260,g=t?0:10,_=t?10:0,m=t?24:p/2,f=t?m:15,v=t?60:m,T=t?v:f,b=t?"repeat-x":"repeat-y",E=S=>t?"0px "+S+"px":S+"px 2px",A=S=>`linear-gradient(${t?90:0}deg, ${S} 2px, transparent 1px)`,R=(S,C,D,U,L)=>`position:${S};left:${C}px;top:${D}px;width:${U}px;height:${L}px;`;s.style.cssText=`${R("absolute",g,_,t?u:p,t?p:d)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${t?"column":"row"};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `,r.style.cssText=`${R("sticky",0,0,t?c:m,t?m:h)}`,n||(r.style.cssText+=`background:
        ${A("#FFFF")}${E(m-10)} / 100px 100px ${b},
        ${A("#FFF8")}${E(m-10)} / 10px 10px ${b};
      `),o.style.cssText=`${R("relative",0,0,t?u:m,t?m:d)}`,n||(o.style.cssText+=`background:
        ${A("#FFFF")}${E(0)} / ${t?"100px 10px":"10px 100px"} ${b},
        ${A("#FFF8")}${E(0)} / ${t?"10px 0px":"0px 10px"} ${b};
      `);let P=[" enter: "," leave: "];this.coords.forEach((S,C)=>{let D=C>1,U=(D?0:this.offset)+S,L=C%2,z=U<T,O=U>(D?t?c:h:t?u:d)-T,H=(D?L&&!z:!L&&!z)||O,Y=ct.createElement("div"),G=ct.createElement("div"),K=t?H?"right":"left":H?"bottom":"top",se=H?(t?v:f)+(D?t?-1:O?0:-2:t?-1:-2):t?1:0;G.innerHTML=`${this.id}${P[L]}${this.thresholds[C]}`,Y.style.cssText=`${R("absolute",0,0,v,f)}
        display: flex;
        flex-direction: ${t?"column":"row"};
        justify-content: flex-${D?"start":"end"};
        align-items: flex-${H?"end":"start"};
        border-${K}: 2px solid ${a};
      `,G.style.cssText=`
        overflow: hidden;
        max-width: ${p/2-10}px;
        height: ${f};
        margin-${t?H?"right":"left":H?"bottom":"top"}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${t&&H||!t&&!D?"right":"left"};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${L?a:"rgba(0,0,0,.75)"};
        background-color: ${L?"rgba(0,0,0,.65)":a};
        border: 2px solid ${L?a:"transparent"};
        border-${t?H?"top-left":"top-right":H?"top-left":"bottom-left"}-radius: 5px;
        border-${t?H?"bottom-left":"bottom-right":H?"top-right":"bottom-right"}-radius: 5px;
      `,Y.appendChild(G);let xe=U-se+(t?1:0);Y.style[t?"left":"top"]=`${xe}px`,(D?r:o).appendChild(Y)}),s.appendChild(r),s.appendChild(o),e.element.appendChild(s),n||s.classList.add("animejs-onscroll-debug"),this.$debug=s,Lo(e.element,"position")==="static"&&(this.debugStyles=Do(e.element,{position:"relative "}))}updateBounds(){this._debug&&this.removeDebug();let e,t=this.target,n=this.container,s=this.horizontal,r=this.linked,o,a=t;for(r&&(o=r.currentTime,r.seek(0,!0));a&&a!==n.element&&a!==ct.body;){let L=Lo(a,"position")==="sticky"?Do(a,{position:"static"}):!1;a=a.parentElement,L&&(e||(e=[]),e.push(L))}let l=t.getBoundingClientRect(),c=n.scale,h=(s?l.left+n.scrollX-n.left:l.top+n.scrollY-n.top)*c,u=(s?l.width:l.height)*c,d=s?n.width:n.height,g=(s?n.scrollWidth:n.scrollHeight)-d,_=this.enter,m=this.leave,f="start",v="end",T="end",b="start";if(It(_)){let L=_.split(" ");T=L[0],f=L.length>1?L[1]:f}else if(cn(_)){let L=_;fe(L.container)||(T=L.container),fe(L.target)||(f=L.target)}else zt(_)&&(T=_);if(It(m)){let L=m.split(" ");b=L[0],v=L.length>1?L[1]:v}else if(cn(m)){let L=m;fe(L.container)||(b=L.container),fe(L.target)||(v=L.target)}else zt(m)&&(b=m);let E=xl(t,f,u),A=xl(t,v,u),R=E+h-d,P=A+h-g,y=xl(t,T,d,R,P),S=xl(t,b,d,R,P),C=E+h-y,D=A+h-S,U=D-C;this.offset=h,this.offsetStart=C,this.offsetEnd=D,this.distance=U<=0?0:U,this.thresholds=[f,v,T,b],this.coords=[E,A,y,S],e&&e.forEach(L=>L.revert()),r&&r.seek(o,!0),this._debug&&this.debug()}handleScroll(){if(!this.ready)return;let e=this.linked,t=this.sync,n=this.syncEase,s=this.syncSmooth,r=e&&(n||s),o=this.horizontal,a=this.container,l=this.scroll,c=l<=this.offsetStart,h=l>=this.offsetEnd,u=!c&&!h,d=l===this.offsetStart||l===this.offsetEnd,p=!this.hasEntered&&d,g=this._debug&&this.$debug,_=!1,m=!1,f=this.progress;if(c&&this.began&&(this.began=!1),f>0&&!this.began&&(this.began=!0),r){let v=e.progress;if(s&&zt(s)){if(s<1){let b=v<f&&f===1?1e-4:v>f&&!f?-1e-4:0;f=Qe(An(v,f,An(.01,.2,s))+b,6)}}else n&&(f=n(f));_=f!==this.prevProgress,m=v===1,_&&!m&&s&&v&&a.wakeTicker.restart()}if(g){let v=o?a.scrollY:a.scrollX;g.style[o?"top":"left"]=v+10+"px"}(u&&!this.isInView||p&&!this.forceEnter&&!this.hasEntered)&&(u&&(this.isInView=!0),!this.forceEnter||!this.hasEntered?(g&&u&&(g.style.zIndex=`${this.container.zIndex++}`),this.onSyncEnter(this),this.onEnter(this),this.backward?(this.onSyncEnterBackward(this),this.onEnterBackward(this)):(this.onSyncEnterForward(this),this.onEnterForward(this)),this.hasEntered=!0,p&&(this.forceEnter=!0)):u&&(this.forceEnter=!1)),(u||!u&&this.isInView)&&(_=!0),_&&(r&&e.seek(e.duration*f),this.onUpdate(this)),!u&&this.isInView&&(this.isInView=!1,this.onSyncLeave(this),this.onLeave(this),this.backward?(this.onSyncLeaveBackward(this),this.onLeaveBackward(this)):(this.onSyncLeaveForward(this),this.onLeaveForward(this)),t&&!s&&(m=!0)),f>=1&&this.began&&!this.completed&&(t&&m||!t)&&(t&&this.onSyncComplete(this),this.completed=!0,(!this.repeat&&!e||!this.repeat&&e&&e.completed)&&this.revert()),f<1&&this.completed&&(this.completed=!1),this.prevProgress=f}revert(){if(this.reverted)return;let e=this.container;return kn(e,this),e._head||e.revert(),this._debug&&this.removeDebug(),this.reverted=!0,this.ready=!1,this}},Zn=(i={})=>new vl(i)});var Vp,ax,Uo,Hp=Ee(()=>{Pt();Io();Vp=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,ax=(i,e,t)=>{let n=0,s=1,r,o,a=0;do o=n+(s-n)/2,r=Vp(o,e,t)-i,r>0?s=o:n=o;while(Ds(r)>1e-7&&++a<100);return o},Uo=(i=.5,e=0,t=.5,n=1)=>i===e&&t===n?un:s=>s===0||s===1?s:Vp(ax(s,i,t),e,n)});var Sl,Gp,Wp,qp,lx,cx,pu,Fo,Xp,Ml,Rr,Yp=Ee(()=>{Pt();wn();Wi();Mi();Rt();Io();Er();uu();Sl=(i,e=100)=>{let t=[];for(let n=0;n<=e;n++)t.push(Qe(i(n/e),4));return`linear(${t.join(", ")})`},Gp={},Wp=i=>{let e=Gp[i];if(e)return e;if(e="linear",It(i)){if(Ct(i,"linear")||Ct(i,"cubic-")||Ct(i,"steps")||Ct(i,"ease"))e=i;else if(Ct(i,"cubicB"))e=Sr(i);else{let t=su(i);Tt(t)&&(e=t===un?"linear":Sl(t))}Gp[i]=e}else if(Tt(i)){let t=Sl(i);t&&(e=t)}else i.ease&&(e=Sl(i.ease));return e},qp=["x","y","z"],lx=["perspective","width","height","margin","padding","top","right","bottom","left","borderWidth","fontSize","borderRadius",...qp],cx=[...qp,...Ls.filter(i=>["X","Y","Z"].some(e=>i.endsWith(e)))],pu=null,Fo=(i,e,t,n,s)=>{let r=It(e)?e:sn(e,t,n,s);return zt(r)?lx.includes(i)||Ct(i,"translate")?`${r}px`:Ct(i,"rotate")||Ct(i,"skew")?`${r}deg`:`${r}`:r},Xp=(i,e,t,n,s,r)=>{let o="0",a=fe(n)?getComputedStyle(i)[e]:Fo(e,n,i,s,r);return fe(t)?o=ln(n)?n.map(l=>Fo(e,l,i,s,r)):a:o=[Fo(e,t,i,s,r),a],o},Ml=class{constructor(e,t){En.current&&En.current.register(this),$n(pu)&&(tn&&(fe(CSS)||!Object.hasOwnProperty.call(CSS,"registerProperty"))?pu=!1:(Ls.forEach(g=>{let _=Ct(g,"skew"),m=Ct(g,"scale"),f=Ct(g,"rotate"),v=Ct(g,"translate"),T=f||_,b=T?"<angle>":m?"<number>":v?"<length-percentage>":"*";try{CSS.registerProperty({name:"--"+g,syntax:b,inherits:!1,initialValue:v?"0px":T?"0deg":m?"1":"0"})}catch{}}),pu=!0));let n=Ti(e),s=n.length;s||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation.");let r=Ne(t.autoplay,Xe.defaults.autoplay),o=r&&r.link?r:!1,a=t.alternate&&t.alternate===!0,l=t.reversed&&t.reversed===!0,c=Ne(t.loop,Xe.defaults.loop),h=c===!0||c===1/0?1/0:zt(c)?c+1:1,u=a?l?"alternate-reverse":"alternate":l?"reverse":"normal",d="both",p=Xe.timeScale===1?1:Bn;this.targets=n,this.animations=[],this.controlAnimation=null,this.onComplete=t.onComplete||Xe.defaults.onComplete,this.duration=0,this.muteCallbacks=!1,this.completed=!1,this.paused=!r||o!==!1,this.reversed=l,this.persist=Ne(t.persist,Xe.defaults.persist),this.autoplay=r,this._speed=Ne(t.playbackRate,Xe.defaults.playbackRate),this._resolve=je,this._completed=0,this._inlineStyles=[],n.forEach((g,_)=>{let m=g[yi],f=cx.some(D=>t.hasOwnProperty(D)),v=g.style,T=this._inlineStyles[_]={},b=Ne(t.ease,Xe.defaults.ease),E=sn(b,g,_,s),A=Tt(E)||It(E)?E:b,R=b.ease&&b,P=Wp(A),y=(R?R.settlingDuration:sn(Ne(t.duration,Xe.defaults.duration),g,_,s))*p,S=sn(Ne(t.delay,Xe.defaults.delay),g,_,s)*p,C=Ne(t.composition,"replace");for(let D in t){if(!Ns(D))continue;let U={},L={iterations:h,direction:u,fill:d,easing:P,duration:y,delay:S,composite:C},z=t[D],O=f?Ls.includes(D)?D:xr.get(D):!1,H=O?"transform":D;T[H]||(T[H]=v[H]);let Y;if(cn(z)){let G=z,K=Ne(G.ease,P),se=K.ease&&K,xe=G.to,Se=G.from;if(L.duration=(se?se.settlingDuration:sn(Ne(G.duration,y),g,_,s))*p,L.delay=sn(Ne(G.delay,S),g,_,s)*p,L.composite=Ne(G.composition,C),L.easing=Wp(K),Y=Xp(g,D,Se,xe,_,s),O?(U[`--${O}`]=Y,m[O]=Y):U[D]=Xp(g,D,Se,xe,_,s),hu(this,g,D,U,L),!fe(Se))if(!O)v[D]=U[D][0];else{let Je=`--${O}`;v.setProperty(Je,U[Je][0])}}else Y=ln(z)?z.map(G=>Fo(D,G,g,_,s)):Fo(D,z,g,_,s),O?(U[`--${O}`]=Y,m[O]=Y):U[D]=Y,hu(this,g,D,U,L)}if(f){let D=nn;for(let U in m)D+=`${yr[U]}var(--${U})) `;v.transform=D}}),o&&this.autoplay.link(this)}forEach(e){try{let t=It(e)?n=>n[e]():e;this.animations.forEach(t)}catch{}return this}get speed(){return this._speed}set speed(e){this._speed=+e,this.forEach(t=>t.playbackRate=e)}get currentTime(){let e=this.controlAnimation,t=Xe.timeScale;return this.completed?this.duration:e?+e.currentTime*(t===1?1:t):0}set currentTime(e){let t=e*(Xe.timeScale===1?1:Bn);this.forEach(n=>{!this.persist&&t>=this.duration&&n.play(),n.currentTime=t})}get progress(){return this.currentTime/this.duration}set progress(e){this.forEach(t=>t.currentTime=e*this.duration||0)}resume(){return this.paused?(this.paused=!1,this.forEach("play")):this}pause(){return this.paused?this:(this.paused=!0,this.forEach("pause"))}alternate(){return this.reversed=!this.reversed,this.forEach("reverse"),this.paused&&this.forEach("pause"),this}play(){return this.reversed&&this.alternate(),this.resume()}reverse(){return this.reversed||this.alternate(),this.resume()}seek(e,t=!1){return t&&(this.muteCallbacks=!0),e<this.duration&&(this.completed=!1),this.currentTime=e,this.muteCallbacks=!1,this.paused&&this.pause(),this}restart(){return this.completed=!1,this.seek(0,!0).resume()}commitStyles(){return this.forEach("commitStyles")}complete(){return this.seek(this.duration)}cancel(){return this.muteCallbacks=!0,this.commitStyles().forEach("cancel"),this.animations.length=0,requestAnimationFrame(()=>{this.targets.forEach(e=>{e.style.transform==="none"&&e.style.removeProperty("transform")})}),this}revert(){return this.cancel().targets.forEach((e,t)=>{let n=e.style,s=this._inlineStyles[t];for(let r in s){let o=s[r];fe(o)||o===nn?n.removeProperty(Sr(r)):e.style[r]=o}e.getAttribute("style")===nn&&e.removeAttribute("style")}),this}then(e=je){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=je};return new Promise(s=>(this._resolve=()=>s(n()),this.completed&&this._resolve(),this))}},Rr={animate:(i,e)=>new Ml(i,e),convertEase:Sl}});var Kn,mu,hx,$p,Jn,Zp,Kp,Jp,jp,Qp,em,tm,nm,im,sm,rm,om,am=Ee(()=>{Rt();Fp();Kn=lu,mu={},hx=(i,e=0)=>(...t)=>e?n=>i(...t,n):n=>i(n,...t),$p=i=>(...e)=>{let t=i(...e);return new Proxy(je,{apply:(n,s,[r])=>t(r),get:(n,s)=>$p((...r)=>{let o=mu[s](...r);return a=>o(t(a))})})},Jn=(i,e,t=0)=>{let n=(...s)=>(s.length<e.length?$p(hx(e,t)):e)(...s);return mu[i]||(mu[i]=n),n},Zp=Jn("roundPad",Kn.roundPad),Kp=Jn("padStart",Kn.padStart),Jp=Jn("padEnd",Kn.padEnd),jp=Jn("wrap",Kn.wrap),Qp=Jn("mapRange",Kn.mapRange),em=Jn("degToRad",Kn.degToRad),tm=Jn("radToDeg",Kn.radToDeg),nm=Jn("snap",Kn.snap),im=Jn("clamp",Kn.clamp),sm=Jn("round",Kn.round),rm=Jn("lerp",Kn.lerp,1),om=Jn("damp",Kn.damp,1)});var bl,ux,lm,cm,Tl,gu=Ee(()=>{bl=(i=0,e=1,t=0)=>{let n=10**t;return Math.floor((Math.random()*(e-i+1/n)+i)*n)/n},ux=0,lm=(i,e=0,t=1,n=0)=>{let s=i===void 0?ux++:i;return(r=e,o=t,a=n)=>{s+=1831565813,s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61);let l=10**a;return Math.floor((((s^s>>>14)>>>0)/4294967296*(o-r+1/l)+r)*l)/l}},cm=i=>i[bl(0,i.length-1)],Tl=i=>{let e=i.length,t,n;for(;e;)n=bl(0,--e),t=i[e],i[e]=i[n],i[n]=t;return i}});var dt,_u=Ee(()=>{Rt();Pt();Er();ou();Mi();Wi();gu();dt=(i,e={})=>{let t=[],n=0,s=e.from,r=e.reversed,o=e.ease,a=!fe(o),c=a&&!fe(o.ease)?o.ease:a?Xi(o):null,h=e.grid,u=e.axis,d=e.total,p=fe(s)||s===0||s==="first",g=s==="center",_=s==="last",m=s==="random",f=ln(i),v=e.use,T=f?ja(i[0]):ja(i),b=f?ja(i[1]):0,E=Za.exec((f?i[1]:i)+nn),A=e.start||0+(f?T:0),R=p?0:zt(s)?s:0;return(P,y,S,C)=>{let[D]=Ti(P),U=fe(d)?S:d,L=fe(v)?!1:Tt(v)?v(D,y,U):vi(D,v),z=zt(L)||It(L)&&zt(+L)?+L:y;if(g&&(R=(U-1)/2),_&&(R=U-1),!t.length){for(let G=0;G<U;G++){if(!h)t.push(Ds(R-G));else{let K=g?(h[0]-1)/2:R%h[0],se=g?(h[1]-1)/2:vo(R/h[0]),xe=G%h[0],Se=vo(G/h[0]),Je=K-xe,$e=se-Se,$=Qa(Je*Je+$e*$e);u==="x"&&($=-Je),u==="y"&&($=-$e),t.push($)}n=mp(...t)}c&&(t=t.map(G=>c(G/n)*n)),r&&(t=t.map(G=>u?G<0?G*-1:-G:Ds(n-G))),m&&(t=Tl(t))}let O=f?(b-T)/n:T,Y=(C?ks(C,fe(e.start)?C.iterationDuration:A):A)+(O*Qe(t[z],2)||0);return e.modifier&&(Y=e.modifier(Y)),E&&(Y=`${Y}${E[2]}`),Y}}});var Oo={};Ya(Oo,{$:()=>Ti,clamp:()=>im,cleanInlineStyles:()=>Os,createSeededRandom:()=>lm,damp:()=>om,degToRad:()=>em,get:()=>Lo,keepTime:()=>ml,lerp:()=>rm,mapRange:()=>Qp,padEnd:()=>Jp,padStart:()=>Kp,radToDeg:()=>tm,random:()=>bl,randomPick:()=>cm,remove:()=>Op,round:()=>sm,roundPad:()=>Zp,set:()=>Do,shuffle:()=>Tl,snap:()=>nm,stagger:()=>dt,sync:()=>pl,wrap:()=>jp});var hm=Ee(()=>{am();gu();gl();du();_u();br();Wi();});var El,dx,fx,xu,Tu,Eu,Bo,ko,zo,yu,vu,Al,um,Su,wl,px,dm,fm,Mu,bu,Rl,wi,pm=Ee(()=>{Rt();wn();Pt();Wi();Mi();gl();El=typeof Intl<"u"&&Intl.Segmenter,dx=/\{value\}/g,fx=/\{i\}/g,xu=/(\s+)/,Tu=/^\s+$/,Eu="line",Bo="word",ko="char",zo="data-line",yu=null,vu=null,Al=null,um=i=>i.isWordLike||i.segment===" "||zt(+i.segment),Su=i=>i.setAttribute("aria-hidden","true"),wl=(i,e)=>[...i.querySelectorAll(`[data-${e}]:not([data-${e}] [data-${e}])`)],px={line:"#00D672",word:"#FF4B4B",char:"#5A87FF"},dm=i=>{if(!i.childElementCount&&!i.textContent.trim()){let e=i.parentElement;i.remove(),e&&dm(e)}},fm=(i,e,t)=>{let n=i.getAttribute(zo);if(n!==null&&+n!==e||i.tagName==="BR"){t.add(i);let r=i.previousSibling,o=i.nextSibling;r&&r.nodeType===3&&Tu.test(r.textContent)&&t.add(r),o&&o.nodeType===3&&Tu.test(o.textContent)&&t.add(o)}let s=i.childElementCount;for(;s--;)fm(i.children[s],e,t);return t},Mu=(i,e={})=>{let t="",n=It(e.class)?` class="${e.class}"`:"",s=Ne(e.clone,!1),r=Ne(e.wrap,!1),o=r?r===!0?"clip":r:s?"clip":!1;if(r&&(t+=`<span${o?` style="overflow:${o};"`:""}>`),t+=`<span${n}${s?' style="position:relative;"':""} data-${i}="{i}">`,s){let a=s==="left"?"-100%":s==="right"?"100%":"0",l=s==="top"?"-100%":s==="bottom"?"100%":"0";t+="<span>{value}</span>",t+=`<span inert style="position:absolute;top:${l};left:${a};white-space:nowrap;">{value}</span>`}else t+="{value}";return t+="</span>",r&&(t+="</span>"),t},bu=(i,e,t,n,s,r,o,a,l)=>{let c=s===Eu,h=s===ko,u=`_${s}_`,d=Tt(i)?i(t):i,p=c?"block":"inline-block";Al.innerHTML=d.replace(dx,`<i class="${u}"></i>`).replace(fx,`${h?l:c?o:a}`);let g=Al.content,_=g.firstElementChild,m=g.querySelector(`[data-${s}]`)||_,f=g.querySelectorAll(`i.${u}`),v=f.length;if(v){_.style.display=p,m.style.display=p,m.setAttribute(zo,`${o}`),c||(m.setAttribute("data-word",`${a}`),h&&m.setAttribute("data-char",`${l}`));let T=v;for(;T--;){let b=f[T],E=b.parentElement;E.style.display=p,c?E.innerHTML=t.innerHTML:E.replaceChild(t.cloneNode(!0),b)}e.push(m),n.appendChild(g)}else console.warn('The expression "{value}" is missing from the provided template.');return r&&(_.style.outline=`1px dotted ${px[s]}`),_},Rl=class{constructor(e,t={}){yu||(yu=El?new El([],{granularity:Bo}):{segment:g=>{let _=[],m=g.split(xu);for(let f=0,v=m.length;f<v;f++){let T=m[f];_.push({segment:T,isWordLike:!Tu.test(T)})}return _}}),vu||(vu=El?new El([],{granularity:"grapheme"}):{segment:g=>[...g].map(_=>({segment:_}))}),!Al&&tn&&(Al=ct.createElement("template")),En.current&&En.current.register(this);let{words:n,chars:s,lines:r,accessible:o,includeSpaces:a,debug:l}=t,c=(e=ln(e)?e[0]:e)&&e.nodeType?e:(rl(e)||[])[0],h=r===!0?{}:r,u=n===!0||fe(n)?{}:n,d=s===!0?{}:s;this.debug=Ne(l,!1),this.includeSpaces=Ne(a,!1),this.accessible=Ne(o,!0),this.linesOnly=h&&!u&&!d,this.lineTemplate=cn(h)?Mu(Eu,h):h,this.wordTemplate=cn(u)||this.linesOnly?Mu(Bo,u):u,this.charTemplate=cn(d)?Mu(ko,d):d,this.$target=c,this.html=c&&c.innerHTML,this.lines=[],this.words=[],this.chars=[],this.effects=[],this.effectsCleanups=[],this.cache=null,this.ready=!1,this.width=0,this.resizeTimeout=null;let p=()=>this.html&&(h||u||d)&&this.split();this.resizeObserver=new ResizeObserver(()=>{clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{let g=c.offsetWidth;g!==this.width&&(this.width=g,p())},150)}),this.lineTemplate&&!this.ready?ct.fonts.ready.then(p):p(),c?this.resizeObserver.observe(c):console.warn("No Text Splitter target found.")}addEffect(e){if(!Tt(e))return console.warn("Effect must return a function.");let t=ml(e);return this.effects.push(t),this.ready&&(this.effectsCleanups[this.effects.length-1]=t(this)),this}revert(){return clearTimeout(this.resizeTimeout),this.lines.length=this.words.length=this.chars.length=0,this.resizeObserver.disconnect(),this.effectsCleanups.forEach(e=>Tt(e)?e(this):e.revert&&e.revert()),this.$target.innerHTML=this.html,this}splitNode(e){let t=this.wordTemplate,n=this.charTemplate,s=this.includeSpaces,r=this.debug,o=e.nodeType;if(o===3){let a=e.nodeValue;if(a.trim()){let l=[],c=this.words,h=this.chars,u=yu.segment(a),d=ct.createDocumentFragment(),p=null;for(let g of u){let _=g.segment,m=um(g);if(!p||m&&p&&um(p))l.push(_);else{let f=l.length-1,v=l[f];!xu.test(v)&&!xu.test(_)?l[f]+=_:l.push(_)}p=g}for(let g=0,_=l.length;g<_;g++){let m=l[g];if(m.trim()){let f=l[g+1],v=s&&f&&!f.trim(),T=m,b=n?vu.segment(T):null,E=n?ct.createDocumentFragment():ct.createTextNode(v?m+"\xA0":m);if(n){let A=[...b];for(let R=0,P=A.length;R<P;R++){let y=A[R],C=R===P-1&&v?y.segment+"\xA0":y.segment,D=ct.createTextNode(C);bu(n,h,D,E,ko,r,-1,c.length,h.length)}}t?bu(t,c,E,d,Bo,r,-1,c.length,h.length):n?d.appendChild(E):d.appendChild(ct.createTextNode(m)),v&&g++}else{if(g&&s)continue;d.appendChild(ct.createTextNode(m))}}e.parentNode.replaceChild(d,e)}}else if(o===1){let a=[...e.childNodes];for(let l=0,c=a.length;l<c;l++)this.splitNode(a[l])}}split(e=!1){let t=this.$target,n=!!this.cache&&!e,s=this.lineTemplate,r=this.wordTemplate,o=this.charTemplate,a=ct.fonts.status!=="loading",l=s&&a;this.ready=!s||a,(l||e)&&this.effectsCleanups.forEach(d=>Tt(d)&&d(this)),n||(e&&(t.innerHTML=this.html,this.words.length=this.chars.length=0),this.splitNode(t),this.cache=t.innerHTML),l&&(n&&(t.innerHTML=this.cache),this.lines.length=0,r&&(this.words=wl(t,Bo))),o&&(l||r)&&(this.chars=wl(t,ko));let c=this.words.length?this.words:this.chars,h,u=0;for(let d=0,p=c.length;d<p;d++){let g=c[d],{top:_,height:m}=g.getBoundingClientRect();!fe(h)&&_-h>m*.5&&u++,g.setAttribute(zo,`${u}`);let f=g.querySelectorAll(`[${zo}]`),v=f.length;for(;v--;)f[v].setAttribute(zo,`${u}`);h=_}if(l){let d=ct.createDocumentFragment(),p=new Set,g=[];for(let _=0;_<u+1;_++){let m=t.cloneNode(!0);fm(m,_,new Set).forEach(f=>{let v=f.parentNode;v&&(f.nodeType===1&&p.add(v),v.removeChild(f))}),g.push(m)}p.forEach(dm);for(let _=0,m=g.length;_<m;_++)bu(s,this.lines,g[_],d,Eu,this.debug,_);t.innerHTML="",t.appendChild(d),r&&(this.words=wl(t,Bo)),o&&(this.chars=wl(t,ko))}if(this.linesOnly){let d=this.words,p=d.length;for(;p--;){let g=d[p];g.replaceWith(g.textContent)}d.length=0}if(this.accessible&&(l||!n)){let d=ct.createElement("span");d.style.cssText="position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;white-space:nowrap;",d.innerHTML=this.html,t.insertBefore(d,t.firstChild),this.lines.forEach(Su),this.words.forEach(Su),this.chars.forEach(Su)}return this.width=t.offsetWidth,(l||e)&&this.effects.forEach((d,p)=>this.effectsCleanups[p]=d(this)),this}refresh(){this.split(!0)}},wi=(i,e)=>new Rl(i,e)});var Ai=Ee(()=>{ul();Up();zp();hm();Yp();Hp();_u();pm();});var mx={};var mm=Ee(()=>{"use strict";Ai();_n({autoplay:!0,loop:!0}).label("start").add(".loading-shadow",{opacity:[0,.1,0],scale:[{from:1,to:.7,duration:750},{from:.7,to:1,duration:750}],duration:1500,delay:1500},"start").add(".loading-inner",{scaleY:[{from:1,to:.9,duration:100,ease:"outCirc"},{from:.9,to:1,duration:100,ease:"inCirc"},{from:1,to:.9,duration:100,ease:"outCirc",delay:1500},{from:.9,to:1,duration:100,ease:"inCirc"}],delay:1300},"start").add(".loading-wrapper",{y:[{from:0,ease:"outSine",to:-40,delay:1500},{from:-40,ease:"inSine",to:0}],rotate:[{from:0,to:-360,delay:1500,easy:"inOutSine",duration:1500}],easing:"inOutExpo",duration:1500,delay:1500},"start").add(".anime22 path",{opacity:[0,1,{to:0,delay:1500}],delay:dt(100,{start:500}),duration:1e3},"start")});function Ad(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Xr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pg(){let i=Xr("canvas");return i.style.display="block",i}function Qo(...i){let e="THREE."+i.shift();qr?qr("log",e,...i):console.log(e,...i)}function we(...i){let e="THREE."+i.shift();qr?qr("warn",e,...i):console.warn(e,...i)}function Ue(...i){let e="THREE."+i.shift();qr?qr("error",e,...i):console.error(e,...i)}function Yr(...i){let e=i.join(" ");e in gm||(gm[e]=!0,we(...i))}function Lg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function hi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[i&255]+dn[i>>8&255]+dn[i>>16&255]+dn[i>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function tt(i,e,t){return Math.max(e,Math.min(t,i))}function Rd(i,e){return(i%e+e)%e}function _x(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function xx(i,e,t){return i!==e?(t-i)/(e-i):0}function Zo(i,e,t){return(1-t)*i+t*e}function yx(i,e,t,n){return Zo(i,e,1-Math.exp(-t*n))}function vx(i,e=1){return e-Math.abs(Rd(i,e*2)-e)}function Sx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Mx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function bx(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Tx(i,e){return i+Math.random()*(e-i)}function Ex(i){return i*(.5-Math.random())}function wx(i){i!==void 0&&(_m=i);let e=_m+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Ax(i){return i*$o}function Rx(i){return i*Js}function Cx(i){return(i&i-1)===0&&i!==0}function Ix(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Px(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Lx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:we("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ai(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function _t(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Dx(){let i={enabled:!0,workingColorSpace:Yt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===ft&&(s.r=Qi(s.r),s.g=Qi(s.g),s.b=Qi(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(s.r=Gr(s.r),s.g=Gr(s.g),s.b=Gr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===rs?Jo:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Yr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Yr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Yt]:{primaries:e,whitePoint:n,transfer:Jo,toXYZ:ym,fromXYZ:vm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Bt},outputColorSpaceConfig:{drawingBufferColorSpace:Bt}},[Bt]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:ym,fromXYZ:vm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Bt}}}),i}function Qi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Gr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Ru(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ic.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(we("Texture: Unable to serialize Texture."),{})}function Iu(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vs.fromArray(i,r);let a=s.x*Math.abs(Vs.x)+s.y*Math.abs(Vs.y)+s.z*Math.abs(Vs.z),l=e.dot(Vs),c=t.dot(Vs),h=n.dot(Vs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function Gu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function Wx(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Xx(i){Math.abs(i)>65504&&we("DataUtils.toHalfFloat(): Value out of range."),i=tt(i,-65504,65504),ji.floatView[0]=i;let e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function qx(i){let e=i>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(i&1023)]+ji.exponentTable[e],ji.floatView[0]}function Zx(i,e,t,n,s,r,o,a){let l;if(e.side===Sn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Hn,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Gl);return c<t.near||c>t.far?null:{distance:c,point:Gl.clone(),object:i}}function Wl(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,kl),i.getVertexPosition(l,zl),i.getVertexPosition(c,Vl);let h=Zx(i,e,t,n,kl,zl,Vl,Pm);if(h){let u=new B;gs.getBarycoord(Pm,kl,zl,Vl,u),s&&(h.uv=gs.getInterpolatedAttribute(s,a,l,c,u,new Be)),r&&(h.uv1=gs.getInterpolatedAttribute(r,a,l,c,u,new Be)),o&&(h.normal=gs.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};gs.getNormal(kl,zl,Vl,d.normal),h.face=d,h.barycoord=u}return h}function cr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(we("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function pn(i){let e={};for(let t=0;t<i.length;t++){let n=cr(i[t]);for(let s in n)e[s]=n[s]}return e}function Kx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Cd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}function Zl(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(ac.fromBufferAttribute(a,s),lc.fromBufferAttribute(a,r),t.distanceSqToSegment(ac,lc,Zu,Gm)>n)return;Zu.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zu);if(!(c<e.near||c>e.far))return{distance:c,point:Gm.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function Ym(i,e,t,n,s,r,o){let a=ed.distanceSqToPoint(i);if(a<t){let l=new B;ed.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function jl(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function oy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function $m(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Ug(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function ay(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Ii;case"vector":case"vector2":case"vector3":case"vector4":return Li;case"color":return _a;case"quaternion":return Pi;case"bool":case"boolean":return ns;case"string":return is}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function ly(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=ay(i.type);if(i.times===void 0){let t=[],n=[];Ug(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function Ld(i,e,t,n){let s=xy(n);switch(t){case Md:return i*e;case Nc:return i*e/s.components*s.byteLength;case Uc:return i*e/s.components*s.byteLength;case lr:return i*e*2/s.components*s.byteLength;case Fc:return i*e*2/s.components*s.byteLength;case bd:return i*e*3/s.components*s.byteLength;case qn:return i*e*4/s.components*s.byteLength;case Oc:return i*e*4/s.components*s.byteLength;case Pa:case La:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Da:case Na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case kc:case Vc:return Math.max(i,16)*Math.max(e,8)/4;case Bc:case zc:return Math.max(i,8)*Math.max(e,8)/2;case Hc:case Gc:case Xc:case qc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Wc:case Yc:case $c:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Kc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Jc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case eh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case th:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case nh:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ih:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case sh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case rh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case oh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ah:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case lh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ch:case hh:case uh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case dh:case fh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ph:case mh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xy(i){switch(i){case Nn:case xd:return{byteLength:1,components:1};case oo:case yd:case Mn:return{byteLength:2,components:1};case Lc:case Dc:return{byteLength:2,components:4};case gi:case Pc:case an:return{byteLength:4,components:1};case vd:case Sd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var Ms,bs,Jm,od,jm,Ra,Sc,so,Hn,Sn,ei,Ni,Ys,ad,ld,cd,Qm,_s,eg,tg,ng,ig,sg,rg,og,ag,ec,tc,lg,cg,hg,ug,dg,fg,pg,mg,gg,Mc,bc,Tc,$s,Ec,wc,Ac,Rc,hd,_g,xg,mi,ud,dd,fd,Ca,pd,md,gd,ju,yg,_d,Ts,rr,or,Cc,Ia,xs,Cn,Wr,kt,Ic,ar,Et,ro,ti,Nn,xd,yd,oo,Pc,gi,an,Mn,Lc,Dc,ao,vd,Sd,Md,bd,qn,Ci,Es,Nc,Uc,lr,Fc,Oc,Pa,La,Da,Na,Bc,kc,zc,Vc,Hc,Gc,Wc,Xc,qc,Yc,$c,Zc,Kc,Jc,jc,Qc,eh,th,nh,ih,sh,rh,oh,ah,lh,ch,hh,uh,dh,fh,ph,mh,gh,vg,Sg,Zs,Ks,Ql,Xs,qs,Ko,_h,Mg,Td,Ua,lo,bg,Ed,Tg,rs,Bt,Yt,Jo,ft,Ws,Qu,Eg,wg,Ag,xh,Rg,Cg,yh,Ig,nc,wd,li,jo,gm,qr,ui,dn,_m,$o,Js,Fa,Be,Qt,B,wu,xm,Ye,Au,ym,vm,ot,Cr,ic,Nx,$r,Ux,Cu,en,Lt,sc,Gn,ea,rc,Wn,qi,si,Cl,Ir,Pr,Lr,hs,us,zs,Vo,Il,Pl,Vs,Fx,Ho,Pu,In,Yi,Lu,Ll,ds,Du,Dl,Nu,es,Ke,Dr,ri,Ox,Bx,fs,Nl,zn,Sm,Mm,di,ta,kx,bm,Nr,$i,Ul,Go,zx,Vx,Tm,Em,wm,Am,Hx,Ur,Uu,Nt,oi,Zi,Fu,Ki,Fr,Or,Rm,Ou,Bu,ku,zu,Vu,Hu,gs,Dg,ps,Fl,ke,fn,Gx,Pn,fi,ji,ys,Ht,Ol,Yx,Gt,na,ia,yn,$x,jn,Wu,Br,Vn,Wo,Jt,vn,Cm,Hs,Bl,Im,kl,zl,Vl,Xu,Hl,Pm,Gl,on,Zr,Ng,Jx,jx,Xn,sa,ms,Lm,Dm,jt,kr,zr,oc,ra,oa,ci,Qx,Kr,aa,Jr,xn,jr,Nm,Um,Fm,ey,Om,Xl,qu,Bm,Yu,la,Qr,js,km,ty,ca,vs,Vr,zm,ql,Vm,ny,Xo,qo,ha,$u,iy,sy,Qn,Gs,ry,Yl,eo,to,ac,lc,Hm,Yo,$l,Zu,Gm,Qs,Wm,Xm,ua,da,no,qm,ed,Kl,Jl,fa,Ss,cc,pa,ma,hc,er,Ln,uc,dc,ts,fc,ga,pc,Dn,ns,_a,Ii,mc,Pi,is,Li,tr,Ri,gc,Fg,pi,Ji,td,nr,Hr,_c,xa,ya,ir,Ku,Zm,Km,va,nd,sr,id,Sa,Di,sd,Ma,ba,ss,Ju,Ta,xc,Ea,yc,Id,cy,Pd,hy,uy,dy,fy,py,my,gy,rd,St,vc,_y,wa,io,Aa,Dd=Ee(()=>{Ms={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},bs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jm=0,od=1,jm=2,Ra=1,Sc=2,so=3,Hn=0,Sn=1,ei=2,Ni=0,Ys=1,ad=2,ld=3,cd=4,Qm=5,_s=100,eg=101,tg=102,ng=103,ig=104,sg=200,rg=201,og=202,ag=203,ec=204,tc=205,lg=206,cg=207,hg=208,ug=209,dg=210,fg=211,pg=212,mg=213,gg=214,Mc=0,bc=1,Tc=2,$s=3,Ec=4,wc=5,Ac=6,Rc=7,hd=0,_g=1,xg=2,mi=0,ud=1,dd=2,fd=3,Ca=4,pd=5,md=6,gd=7,ju="attached",yg="detached",_d=300,Ts=301,rr=302,or=303,Cc=304,Ia=306,xs=1e3,Cn=1001,Wr=1002,kt=1003,Ic=1004,ar=1005,Et=1006,ro=1007,ti=1008,Nn=1009,xd=1010,yd=1011,oo=1012,Pc=1013,gi=1014,an=1015,Mn=1016,Lc=1017,Dc=1018,ao=1020,vd=35902,Sd=35899,Md=1021,bd=1022,qn=1023,Ci=1026,Es=1027,Nc=1028,Uc=1029,lr=1030,Fc=1031,Oc=1033,Pa=33776,La=33777,Da=33778,Na=33779,Bc=35840,kc=35841,zc=35842,Vc=35843,Hc=36196,Gc=37492,Wc=37496,Xc=37488,qc=37489,Yc=37490,$c=37491,Zc=37808,Kc=37809,Jc=37810,jc=37811,Qc=37812,eh=37813,th=37814,nh=37815,ih=37816,sh=37817,rh=37818,oh=37819,ah=37820,lh=37821,ch=36492,hh=36494,uh=36495,dh=36283,fh=36284,ph=36285,mh=36286,gh=2200,vg=2201,Sg=2202,Zs=2300,Ks=2301,Ql=2302,Xs=2400,qs=2401,Ko=2402,_h=2500,Mg=2501,Td=0,Ua=1,lo=2,bg=3200,Ed=0,Tg=1,rs="",Bt="srgb",Yt="srgb-linear",Jo="linear",ft="srgb",Ws=7680,Qu=519,Eg=512,wg=513,Ag=514,xh=515,Rg=516,Cg=517,yh=518,Ig=519,nc=35044,wd="300 es",li=2e3,jo=2001;gm={},qr=null;ui=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_m=1234567,$o=Math.PI/180,Js=180/Math.PI;Fa={DEG2RAD:$o,RAD2DEG:Js,generateUUID:hi,clamp:tt,euclideanModulo:Rd,mapLinear:_x,inverseLerp:xx,lerp:Zo,damp:yx,pingpong:vx,smoothstep:Sx,smootherstep:Mx,randInt:bx,randFloat:Tx,randFloatSpread:Ex,seededRandom:wx,degToRad:Ax,radToDeg:Rx,isPowerOfTwo:Cx,ceilPowerOfTwo:Ix,floorPowerOfTwo:Px,setQuaternionFromProperEuler:Lx,normalize:_t,denormalize:ai},Be=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=l*d+c*p+h*g+u*_;m<0&&(d=-d,p=-p,g=-g,_=-_,m=-m);let f=1-a;if(m<.9995){let v=Math.acos(m),T=Math.sin(v);f=Math.sin(f*v)/T,a=Math.sin(a*v)/T,l=l*f+d*a,c=c*f+p*a,h=h*f+g*a,u=u*f+_*a}else{l=l*f+d*a,c=c*f+p*a,h=h*f+g*a,u=u*f+_*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:we("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){let p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){let p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xm.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wu.copy(this).projectOnVector(e),this.sub(wu)}reflect(e){return this.sub(wu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},wu=new B,xm=new Qt,Ye=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],v=s[1],T=s[4],b=s[7],E=s[2],A=s[5],R=s[8];return r[0]=o*_+a*v+l*E,r[3]=o*m+a*T+l*A,r[6]=o*f+a*b+l*R,r[1]=c*_+h*v+u*E,r[4]=c*m+h*T+u*A,r[7]=c*f+h*b+u*R,r[2]=d*_+p*v+g*E,r[5]=d*m+p*T+g*A,r[8]=d*f+p*b+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Au.makeScale(e,t)),this}rotate(e){return this.premultiply(Au.makeRotation(-e)),this}translate(e,t){return this.premultiply(Au.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Au=new Ye,ym=new Ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vm=new Ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ot=Dx();ic=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Cr===void 0&&(Cr=Xr("canvas")),Cr.width=e.width,Cr.height=e.height;let s=Cr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Cr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Xr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qi(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qi(t[n]/255)*255):t[n]=Qi(t[n]);return{data:t,width:e.width,height:e.height}}else return we("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nx=0,$r=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=hi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ru(s[o].image)):r.push(Ru(s[o]))}else r=Ru(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Ux=0,Cu=new B,en=class i extends ui{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Et,o=ti,a=qn,l=Nn,c=i.DEFAULT_ANISOTROPY,h=rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ux++}),this.uuid=hi(),this.name="",this.source=new $r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cu).x}get height(){return this.source.getSize(Cu).y}get depth(){return this.source.getSize(Cu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){we(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_d)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Wr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Wr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=_d;en.DEFAULT_ANISOTROPY=1;Lt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,b=(p+1)/2,E=(f+1)/2,A=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return T>b&&T>E?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=A/n,r=R/n):b>E?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=P/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=P/r),this.set(n,s,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-_)/v,this.z=(d-h)/v,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=tt(this.x,e.x,t.x),this.y=tt(this.y,e.y,t.y),this.z=tt(this.z,e.z,t.z),this.w=tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=tt(this.x,e,t),this.y=tt(this.y,e,t),this.z=tt(this.z,e,t),this.w=tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},sc=class extends ui{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Et,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new en(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new $r(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gn=class extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ea=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},rc=class extends en{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=kt,this.minFilter=kt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,si):si.fromBufferAttribute(r,o),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Cl.copy(n.boundingBox)),Cl.applyMatrix4(e.matrixWorld),this.union(Cl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vo),Il.subVectors(this.max,Vo),Ir.subVectors(e.a,Vo),Pr.subVectors(e.b,Vo),Lr.subVectors(e.c,Vo),hs.subVectors(Pr,Ir),us.subVectors(Lr,Pr),zs.subVectors(Ir,Lr);let t=[0,-hs.z,hs.y,0,-us.z,us.y,0,-zs.z,zs.y,hs.z,0,-hs.x,us.z,0,-us.x,zs.z,0,-zs.x,-hs.y,hs.x,0,-us.y,us.x,0,-zs.y,zs.x,0];return!Iu(t,Ir,Pr,Lr,Il)||(t=[1,0,0,0,1,0,0,0,1],!Iu(t,Ir,Pr,Lr,Il))?!1:(Pl.crossVectors(hs,us),t=[Pl.x,Pl.y,Pl.z],Iu(t,Ir,Pr,Lr,Il))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(qi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),qi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),qi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),qi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),qi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),qi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),qi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),qi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(qi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},qi=[new B,new B,new B,new B,new B,new B,new B,new B],si=new B,Cl=new Wn,Ir=new B,Pr=new B,Lr=new B,hs=new B,us=new B,zs=new B,Vo=new B,Il=new B,Pl=new B,Vs=new B;Fx=new Wn,Ho=new B,Pu=new B,In=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Fx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ho.subVectors(e,this.center);let t=Ho.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ho,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Pu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ho.copy(e.center).add(Pu)),this.expandByPoint(Ho.copy(e.center).sub(Pu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Yi=new B,Lu=new B,Ll=new B,ds=new B,Du=new B,Dl=new B,Nu=new B,es=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Yi.copy(this.origin).addScaledVector(this.direction,t),Yi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Lu.copy(e).add(t).multiplyScalar(.5),Ll.copy(t).sub(e).normalize(),ds.copy(this.origin).sub(Lu);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ll),a=ds.dot(this.direction),l=-ds.dot(Ll),c=ds.lengthSq(),h=Math.abs(1-o*o),u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Lu).addScaledVector(Ll,d),p}intersectSphere(e,t){Yi.subVectors(e.center,this.origin);let n=Yi.dot(this.direction),s=Yi.dot(Yi)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Yi)!==null}intersectTriangle(e,t,n,s,r){Du.subVectors(t,e),Dl.subVectors(n,e),Nu.crossVectors(Du,Dl);let o=this.direction.dot(Nu),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ds.subVectors(this.origin,e);let l=a*this.direction.dot(Dl.crossVectors(ds,Dl));if(l<0)return null;let c=a*this.direction.dot(Du.cross(ds));if(c<0||l+c>o)return null;let h=-a*ds.dot(Nu);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ke=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m){let f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Dr.setFromMatrixColumn(e,0).length(),r=1/Dr.setFromMatrixColumn(e,1).length(),o=1/Dr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ox,e,Bx)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),fs.crossVectors(n,zn),fs.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),fs.crossVectors(n,zn)),fs.normalize(),Nl.crossVectors(zn,fs),s[0]=fs.x,s[4]=Nl.x,s[8]=zn.x,s[1]=fs.y,s[5]=Nl.y,s[9]=zn.y,s[2]=fs.z,s[6]=Nl.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],v=n[3],T=n[7],b=n[11],E=n[15],A=s[0],R=s[4],P=s[8],y=s[12],S=s[1],C=s[5],D=s[9],U=s[13],L=s[2],z=s[6],O=s[10],H=s[14],Y=s[3],G=s[7],K=s[11],se=s[15];return r[0]=o*A+a*S+l*L+c*Y,r[4]=o*R+a*C+l*z+c*G,r[8]=o*P+a*D+l*O+c*K,r[12]=o*y+a*U+l*H+c*se,r[1]=h*A+u*S+d*L+p*Y,r[5]=h*R+u*C+d*z+p*G,r[9]=h*P+u*D+d*O+p*K,r[13]=h*y+u*U+d*H+p*se,r[2]=g*A+_*S+m*L+f*Y,r[6]=g*R+_*C+m*z+f*G,r[10]=g*P+_*D+m*O+f*K,r[14]=g*y+_*U+m*H+f*se,r[3]=v*A+T*S+b*L+E*Y,r[7]=v*R+T*C+b*z+E*G,r[11]=v*P+T*D+b*O+E*K,r[15]=v*y+T*U+b*H+E*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15],v=l*p-c*d,T=a*p-c*u,b=a*d-l*u,E=o*p-c*h,A=o*d-l*h,R=o*u-a*h;return t*(_*v-m*T+f*b)-n*(g*v-m*E+f*A)+s*(g*T-_*E+f*R)-r*(g*b-_*A+m*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],v=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,T=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,b=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,E=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,A=t*v+n*T+s*b+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=v*R,e[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*R,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*R,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*R,e[4]=T*R,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*R,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*R,e[8]=b*R,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*R,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*R,e[12]=E*R,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*R,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,v=l*c,T=l*h,b=l*u,E=n.x,A=n.y,R=n.z;return s[0]=(1-(_+f))*E,s[1]=(p+b)*E,s[2]=(g-T)*E,s[3]=0,s[4]=(p-b)*A,s[5]=(1-(d+f))*A,s[6]=(m+v)*A,s[7]=0,s[8]=(g+T)*R,s[9]=(m-v)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Dr.set(s[0],s[1],s[2]).length(),o=Dr.set(s[4],s[5],s[6]).length(),a=Dr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),ri.copy(this);let c=1/r,h=1/o,u=1/a;return ri.elements[0]*=c,ri.elements[1]*=c,ri.elements[2]*=c,ri.elements[4]*=h,ri.elements[5]*=h,ri.elements[6]*=h,ri.elements[8]*=u,ri.elements[9]*=u,ri.elements[10]*=u,t.setFromRotationMatrix(ri),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=li,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s),g,_;if(l)g=r/(o-r),_=o*r/(o-r);else if(a===li)g=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===jo)g=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=li,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),p=-(n+s)/(n-s),g,_;if(l)g=1/(o-r),_=o/(o-r);else if(a===li)g=-2/(o-r),_=-(o+r)/(o-r);else if(a===jo)g=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Dr=new B,ri=new Ke,Ox=new B(0,0,0),Bx=new B(1,1,1),fs=new B,Nl=new B,zn=new B,Sm=new Ke,Mm=new Qt,di=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(tt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:we("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Sm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Sm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mm.setFromEuler(this),this.setFromQuaternion(Mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};di.DEFAULT_ORDER="XYZ";ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},kx=0,bm=new B,Nr=new Qt,$i=new Ke,Ul=new B,Go=new B,zx=new B,Vx=new Qt,Tm=new B(1,0,0),Em=new B(0,1,0),wm=new B(0,0,1),Am={type:"added"},Hx={type:"removed"},Ur={type:"childadded",child:null},Uu={type:"childremoved",child:null},Nt=class i extends ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kx++}),this.uuid=hi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new di,n=new Qt,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ke},normalMatrix:{value:new Ye}}),this.matrix=new Ke,this.matrixWorld=new Ke,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.multiply(Nr),this}rotateOnWorldAxis(e,t){return Nr.setFromAxisAngle(e,t),this.quaternion.premultiply(Nr),this}rotateX(e){return this.rotateOnAxis(Tm,e)}rotateY(e){return this.rotateOnAxis(Em,e)}rotateZ(e){return this.rotateOnAxis(wm,e)}translateOnAxis(e,t){return bm.copy(e).applyQuaternion(this.quaternion),this.position.add(bm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tm,e)}translateY(e){return this.translateOnAxis(Em,e)}translateZ(e){return this.translateOnAxis(wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4($i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ul.copy(e):Ul.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?$i.lookAt(Go,Ul,this.up):$i.lookAt(Ul,Go,this.up),this.quaternion.setFromRotationMatrix($i),s&&($i.extractRotation(s.matrixWorld),Nr.setFromRotationMatrix($i),this.quaternion.premultiply(Nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ue("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Am),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):Ue("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Hx),Uu.child=e,this.dispatchEvent(Uu),Uu.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),$i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),$i.multiply(e.parent.matrixWorld)),e.applyMatrix4($i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Am),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,zx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,Vx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new B(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;oi=new B,Zi=new B,Fu=new B,Ki=new B,Fr=new B,Or=new B,Rm=new B,Ou=new B,Bu=new B,ku=new B,zu=new Lt,Vu=new Lt,Hu=new Lt,gs=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),oi.subVectors(e,t),s.cross(oi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){oi.subVectors(s,t),Zi.subVectors(n,t),Fu.subVectors(e,t);let o=oi.dot(oi),a=oi.dot(Zi),l=oi.dot(Fu),c=Zi.dot(Zi),h=Zi.dot(Fu),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ki)===null?!1:Ki.x>=0&&Ki.y>=0&&Ki.x+Ki.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ki.x),l.addScaledVector(o,Ki.y),l.addScaledVector(a,Ki.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return zu.setScalar(0),Vu.setScalar(0),Hu.setScalar(0),zu.fromBufferAttribute(e,t),Vu.fromBufferAttribute(e,n),Hu.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(zu,r.x),o.addScaledVector(Vu,r.y),o.addScaledVector(Hu,r.z),o}static isFrontFacing(e,t,n,s){return oi.subVectors(n,t),Zi.subVectors(e,t),oi.cross(Zi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return oi.subVectors(this.c,this.b),Zi.subVectors(this.a,this.b),oi.cross(Zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Fr.subVectors(s,n),Or.subVectors(r,n),Ou.subVectors(e,n);let l=Fr.dot(Ou),c=Or.dot(Ou);if(l<=0&&c<=0)return t.copy(n);Bu.subVectors(e,s);let h=Fr.dot(Bu),u=Or.dot(Bu);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Fr,o);ku.subVectors(e,r);let p=Fr.dot(ku),g=Or.dot(ku);if(g>=0&&p<=g)return t.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Or,a);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Rm.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(Rm,a);let f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(Fr,o).addScaledVector(Or,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ps={h:0,s:0,l:0},Fl={h:0,s:0,l:0};ke=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=n,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ot.workingColorSpace){if(e=Rd(e,1),t=tt(t,0,1),n=tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Gu(o,r,e+1/3),this.g=Gu(o,r,e),this.b=Gu(o,r,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Bt){function n(r){r!==void 0&&parseFloat(r)<1&&we("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:we("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);we("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let n=Dg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):we("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return ot.workingToColorSpace(fn.copy(this),e),Math.round(tt(fn.r*255,0,255))*65536+Math.round(tt(fn.g*255,0,255))*256+Math.round(tt(fn.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(fn.copy(this),t);let n=fn.r,s=fn.g,r=fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(fn.copy(this),t),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Bt){ot.workingToColorSpace(fn.copy(this),e);let t=fn.r,n=fn.g,s=fn.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ps),this.setHSL(ps.h+e,ps.s+t,ps.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ps),e.getHSL(Fl);let n=Zo(ps.h,Fl.h,t),s=Zo(ps.s,Fl.s,t),r=Zo(ps.l,Fl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new ke;ke.NAMES=Dg;Gx=0,Pn=class extends ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gx++}),this.uuid=hi(),this.name="",this.type="Material",this.blending=Ys,this.side=Hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ec,this.blendDst=tc,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ws,this.stencilZFail=Ws,this.stencilZPass=Ws,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){we(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){we(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==Hn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ec&&(n.blendSrc=this.blendSrc),this.blendDst!==tc&&(n.blendDst=this.blendDst),this.blendEquation!==_s&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Qu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ws&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ws&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ws&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},fi=class extends Pn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=hd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},ji=Wx();ys=class{static toHalfFloat(e){return Xx(e)}static fromHalfFloat(e){return qx(e)}},Ht=new B,Ol=new Be,Yx=0,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nc,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ai(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ai(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ai(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ai(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nc&&(e.usage=this.usage),e}},na=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ia=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},yn=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},$x=0,jn=new Ke,Wu=new Nt,Br=new B,Vn=new Wn,Wo=new Wn,Jt=new B,vn=class i extends ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=hi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ad(e)?ia:na)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ye().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return Wu.lookAt(e),Wu.updateMatrix(),this.applyMatrix4(Wu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Br).negate(),this.translate(Br.x,Br.y,Br.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new yn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&we("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Vn.setFromBufferAttribute(r),this.morphTargetsRelative?(Jt.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(Jt),Jt.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(Jt)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Jt.addVectors(Vn.min,Wo.min),Vn.expandByPoint(Jt),Jt.addVectors(Vn.max,Wo.max),Vn.expandByPoint(Jt)):(Vn.expandByPoint(Wo.min),Vn.expandByPoint(Wo.max))}Vn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Jt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Jt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Jt.fromBufferAttribute(a,c),l&&(Br.fromBufferAttribute(e,c),Jt.add(Br)),s=Math.max(s,n.distanceToSquared(Jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;let c=new B,h=new B,u=new B,d=new Be,p=new Be,g=new Be,_=new B,m=new B;function f(P,y,S){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,P),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,S),h.sub(c),u.sub(c),p.sub(d),g.sub(d);let C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[y].add(_),a[S].add(_),l[P].add(m),l[y].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let P=0,y=v.length;P<y;++P){let S=v[P],C=S.start,D=S.count;for(let U=C,L=C+D;U<L;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}let T=new B,b=new B,E=new B,A=new B;function R(P){E.fromBufferAttribute(s,P),A.copy(E);let y=a[P];T.copy(y),T.sub(E.multiplyScalar(E.dot(y))).normalize(),b.crossVectors(A,y);let C=b.dot(l[P])<0?-1:1;o.setXYZW(P,T.x,T.y,T.z,C)}for(let P=0,y=v.length;P<y;++P){let S=v[P],C=S.start,D=S.count;for(let U=C,L=C+D;U<L;U+=3)R(e.getX(U+0)),R(e.getX(U+1)),R(e.getX(U+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,p=e.count;d<p;d+=3){let g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Jt.fromBufferAttribute(e,t),Jt.normalize(),e.setXYZ(t,Jt.x,Jt.y,Jt.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Gt(d,h,u)}if(this.index===null)return we("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Cm=new Ke,Hs=new es,Bl=new In,Im=new B,kl=new B,zl=new B,Vl=new B,Xu=new B,Hl=new B,Pm=new B,Gl=new B,on=class extends Nt{constructor(e=new vn,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Hl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(Xu.fromBufferAttribute(u,e),o?Hl.addScaledVector(Xu,h):Hl.addScaledVector(Xu.sub(t),h))}t.add(Hl)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bl.copy(n.boundingSphere),Bl.applyMatrix4(r),Hs.copy(e.ray).recast(e.near),!(Bl.containsPoint(Hs.origin)===!1&&(Hs.intersectSphere(Bl,Im)===null||Hs.origin.distanceToSquared(Im)>(e.far-e.near)**2))&&(Cm.copy(r).invert(),Hs.copy(e.ray).applyMatrix4(Cm),!(n.boundingBox!==null&&Hs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hs)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,E=T;b<E;b+=3){let A=a.getX(b),R=a.getX(b+1),P=a.getX(b+2);s=Wl(this,f,e,n,c,h,u,A,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=a.getX(m),T=a.getX(m+1),b=a.getX(m+2);s=Wl(this,o,e,n,c,h,u,v,T,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){let m=d[g],f=o[m.materialIndex],v=Math.max(m.start,p.start),T=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=v,E=T;b<E;b+=3){let A=b,R=b+1,P=b+2;s=Wl(this,f,e,n,c,h,u,A,R,P),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){let v=m,T=m+1,b=m+2;s=Wl(this,o,e,n,c,h,u,v,T,b),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};Zr=class i extends vn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new yn(c,3)),this.setAttribute("normal",new yn(h,3)),this.setAttribute("uv",new yn(u,2));function g(_,m,f,v,T,b,E,A,R,P,y){let S=b/R,C=E/P,D=b/2,U=E/2,L=A/2,z=R+1,O=P+1,H=0,Y=0,G=new B;for(let K=0;K<O;K++){let se=K*C-U;for(let xe=0;xe<z;xe++){let Se=xe*S-D;G[_]=Se*v,G[m]=se*T,G[f]=L,c.push(G.x,G.y,G.z),G[_]=0,G[m]=0,G[f]=A>0?1:-1,h.push(G.x,G.y,G.z),u.push(xe/R),u.push(1-K/P),H+=1}}for(let K=0;K<P;K++)for(let se=0;se<R;se++){let xe=d+se+z*K,Se=d+se+z*(K+1),Je=d+(se+1)+z*(K+1),$e=d+(se+1)+z*K;l.push(xe,Se,$e),l.push(Se,Je,$e),Y+=6}a.addGroup(p,Y,y),p+=Y,d+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Ng={clone:cr,merge:pn},Jx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Xn=class extends Pn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jx,this.fragmentShader=jx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=cr(e.uniforms),this.uniformsGroups=Kx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},sa=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ke,this.projectionMatrix=new Ke,this.projectionMatrixInverse=new Ke,this.coordinateSystem=li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ms=new B,Lm=new Be,Dm=new Be,jt=class extends sa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan($o*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan($o*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ms.x,ms.y).multiplyScalar(-e/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ms.x,ms.y).multiplyScalar(-e/ms.z)}getViewSize(e,t){return this.getViewBounds(e,Lm,Dm),t.subVectors(Dm,Lm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan($o*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},kr=-90,zr=1,oc=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new jt(kr,zr,e,t);s.layers=this.layers,this.add(s);let r=new jt(kr,zr,e,t);r.layers=this.layers,this.add(r);let o=new jt(kr,zr,e,t);o.layers=this.layers,this.add(o);let a=new jt(kr,zr,e,t);a.layers=this.layers,this.add(a);let l=new jt(kr,zr,e,t);l.layers=this.layers,this.add(l);let c=new jt(kr,zr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===li)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===jo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ra=class extends en{constructor(e=[],t=Ts,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oa=class extends Gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ra(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Zr(5,5,5),r=new Xn({name:"CubemapFromEquirect",uniforms:cr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:Ni});r.uniforms.tEquirect.value=t;let o=new on(s,r),a=t.minFilter;return t.minFilter===ti&&(t.minFilter=Et),new oc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},ci=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qx={type:"move"},Kr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ci,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ci,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ci,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new ci;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},aa=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Jr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nc,this.updateRanges=[],this.version=0,this.uuid=hi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=hi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new B,jr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ai(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ai(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ai(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ai(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ai(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),n=_t(n,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){Qo("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Qo("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Nm=new B,Um=new Lt,Fm=new Lt,ey=new B,Om=new Ke,Xl=new B,qu=new In,Bm=new Ke,Yu=new es,la=class extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=ju,this.bindMatrix=new Ke,this.bindMatrixInverse=new Ke,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Wn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xl),this.boundingBox.expandByPoint(Xl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Xl),this.boundingSphere.expandByPoint(Xl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qu.copy(this.boundingSphere),qu.applyMatrix4(s),e.ray.intersectsSphere(qu)!==!1&&(Bm.copy(s).invert(),Yu.copy(e.ray).applyMatrix4(Bm),!(this.boundingBox!==null&&Yu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Yu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Lt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===ju?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===yg?this.bindMatrixInverse.copy(this.bindMatrix).invert():we("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;Um.fromBufferAttribute(s.attributes.skinIndex,e),Fm.fromBufferAttribute(s.attributes.skinWeight,e),Nm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Fm.getComponent(r);if(o!==0){let a=Um.getComponent(r);Om.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ey.copy(Nm).applyMatrix4(Om),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},Qr=class extends Nt{constructor(){super(),this.isBone=!0,this.type="Bone"}},js=class extends en{constructor(e=null,t=1,n=1,s,r,o,a,l,c=kt,h=kt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},km=new Ke,ty=new Ke,ca=class i{constructor(e=[],t=[]){this.uuid=hi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){we("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ke)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ke;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:ty;km.multiplyMatrices(a,t[r]),km.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new js(t,e,e,qn,an);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(we("Skeleton: No bone found with UUID:",r),o=new Qr),this.bones.push(o),this.boneInverses.push(new Ke().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},vs=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vr=new Ke,zm=new Ke,ql=[],Vm=new Wn,ny=new Ke,Xo=new on,qo=new In,ha=class extends on{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ny)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Wn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),Vm.copy(e.boundingBox).applyMatrix4(Vr),this.boundingBox.union(Vm)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vr),qo.copy(e.boundingSphere).applyMatrix4(Vr),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Vr),zm.multiplyMatrices(n,Vr),Xo.matrixWorld=zm,Xo.raycast(e,ql);for(let o=0,a=ql.length;o<a;o++){let l=ql[o];l.instanceId=r,l.object=this,t.push(l)}ql.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new js(new Float32Array(s*this.count),s,this.count,Nc,an));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},$u=new B,iy=new B,sy=new Ye,Qn=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$u.subVectors(n,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($u),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sy.getNormalMatrix(e),s=this.coplanarPoint($u).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gs=new In,ry=new Be(.5,.5),Yl=new B,eo=class{constructor(e=new Qn,t=new Qn,n=new Qn,s=new Qn,r=new Qn,o=new Qn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=li,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],p=r[7],g=r[8],_=r[9],m=r[10],f=r[11],v=r[12],T=r[13],b=r[14],E=r[15];if(s[0].setComponents(c-o,p-h,f-g,E-v).normalize(),s[1].setComponents(c+o,p+h,f+g,E+v).normalize(),s[2].setComponents(c+a,p+u,f+_,E+T).normalize(),s[3].setComponents(c-a,p-u,f-_,E-T).normalize(),n)s[4].setComponents(l,d,m,b).normalize(),s[5].setComponents(c-l,p-d,f-m,E-b).normalize();else if(s[4].setComponents(c-l,p-d,f-m,E-b).normalize(),t===li)s[5].setComponents(c+l,p+d,f+m,E+b).normalize();else if(t===jo)s[5].setComponents(l,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gs)}intersectsSprite(e){Gs.center.set(0,0,0);let t=ry.distanceTo(e.center);return Gs.radius=.7071067811865476+t,Gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Yl.x=s.normal.x>0?e.max.x:e.min.x,Yl.y=s.normal.y>0?e.max.y:e.min.y,Yl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},to=class extends Pn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ac=new B,lc=new B,Hm=new Ke,Yo=new es,$l=new In,Zu=new B,Gm=new B,Qs=class extends Nt{constructor(e=new vn,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)ac.fromBufferAttribute(t,s-1),lc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=ac.distanceTo(lc);e.setAttribute("lineDistance",new yn(n,1))}else we("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$l.copy(n.boundingSphere),$l.applyMatrix4(s),$l.radius+=r,e.ray.intersectsSphere($l)===!1)return;Hm.copy(s).invert(),Yo.copy(e.ray).applyMatrix4(Hm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=h.getX(_),v=h.getX(_+1),T=Zl(this,e,Yo,l,f,v,_);T&&t.push(T)}if(this.isLineLoop){let _=h.getX(g-1),m=h.getX(p),f=Zl(this,e,Yo,l,_,m,g-1);f&&t.push(f)}}else{let p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){let f=Zl(this,e,Yo,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){let _=Zl(this,e,Yo,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Wm=new B,Xm=new B,ua=class extends Qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Wm.fromBufferAttribute(t,s),Xm.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wm.distanceTo(Xm);e.setAttribute("lineDistance",new yn(n,1))}else we("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},da=class extends Qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},no=class extends Pn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ke(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qm=new Ke,ed=new es,Kl=new In,Jl=new B,fa=class extends Nt{constructor(e=new vn,t=new no){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Kl.copy(n.boundingSphere),Kl.applyMatrix4(s),Kl.radius+=r,e.ray.intersectsSphere(Kl)===!1)return;qm.copy(s).invert(),ed.copy(e.ray).applyMatrix4(qm);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){let m=c.getX(g);Jl.fromBufferAttribute(u,m),Ym(Jl,m,l,s,e,t,this)}}else{let d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)Jl.fromBufferAttribute(u,g),Ym(Jl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Ss=class extends en{constructor(e,t,n=gi,s,r,o,a=kt,l=kt,c,h=Ci,u=1){if(h!==Ci&&h!==Es)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new $r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cc=class extends Ss{constructor(e,t=gi,n=Ts,s,r,o=kt,a=kt,l,c=Ci){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},pa=class extends en{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ma=class i extends vn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){let v=f*d-o;for(let T=0;T<c;T++){let b=T*u-r;g.push(b,-v,0),_.push(0,0,1),m.push(T/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let v=0;v<a;v++){let T=v+c*f,b=v+c*(f+1),E=v+1+c*(f+1),A=v+1+c*f;p.push(T,b,A),p.push(b,E,A)}this.setIndex(p),this.setAttribute("position",new yn(g,3)),this.setAttribute("normal",new yn(_,3)),this.setAttribute("uv",new yn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},hc=class extends Xn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},er=class extends Pn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ke(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ed,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ln=class extends er{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ke(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ke(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ke(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},uc=class extends Pn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=bg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dc=class extends Pn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fc=class extends ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xs,endingEnd:Xs}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case qs:r=e,a=2*t-n;break;case Ko:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case qs:o=e,l=2*n-t;break;case Ko:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,v=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,T=(-1-p)*m+(1.5+p)*_+.5*g,b=p*m-p*_;for(let E=0;E!==a;++E)r[E]=f*o[h+E]+v*o[c+E]+T*o[l+E]+b*o[u+E];return r}},ga=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},pc=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Dn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=jl(t,this.TimeBufferType),this.values=jl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:jl(e.times,Array),values:jl(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ga(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Zs:t=this.InterpolantFactoryMethodDiscrete;break;case Ks:t=this.InterpolantFactoryMethodLinear;break;case Ql:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return we("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Ks;case this.InterpolantFactoryMethodSmooth:return Ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ue("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ue("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ue("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ue("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gx(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ue("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ql,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){let _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Dn.prototype.ValueTypeName="";Dn.prototype.TimeBufferType=Float32Array;Dn.prototype.ValueBufferType=Float32Array;Dn.prototype.DefaultInterpolation=Ks;ns=class extends Dn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=Zs;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;_a=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="color";Ii=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};Ii.prototype.ValueTypeName="number";mc=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)Qt.slerpFlat(r,0,o,c-a,o,c,l);return r}},Pi=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new mc(this.times,this.values,this.getValueSize(),e)}};Pi.prototype.ValueTypeName="quaternion";Pi.prototype.InterpolantFactoryMethodSmooth=void 0;is=class extends Dn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=Zs;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;Li=class extends Dn{constructor(e,t,n,s){super(e,t,n,s)}};Li.prototype.ValueTypeName="vector";tr=class{constructor(e="",t=-1,n=[],s=_h){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=hi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(ly(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Dn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=oy(l);l=$m(l,1,h),c=$m(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Ii(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(we("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ue("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,p,g,_){if(p.length!==0){let m=[],f=[];Ug(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let p={},g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(let _ in p){let m=[],f=[];for(let v=0;v!==d[g].morphTargets.length;++v){let T=d[g];m.push(T.time),f.push(T.morphTarget===_?1:0)}s.push(new Ii(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{let p=".bones["+t[u].name+"]";n(Li,p+".position",d,"pos",s),n(Pi,p+".quaternion",d,"rot",s),n(Li,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Ri={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},gc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Fg=new gc,pi=class{constructor(e){this.manager=e!==void 0?e:Fg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};pi.DEFAULT_MATERIAL_NAME="__DEFAULT";Ji={},td=class extends Error{constructor(e,t){super(e),this.response=t}},nr=class extends pi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ri.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ji[e]!==void 0){Ji[e].push({onLoad:t,onProgress:n,onError:s});return}Ji[e]=[],Ji[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&we("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=Ji[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0,_=0,m=new ReadableStream({start(f){v();function v(){u.read().then(({done:T,value:b})=>{if(T)f.close();else{_+=b.byteLength;let E=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let A=0,R=h.length;A<R;A++){let P=h[A];P.onProgress&&P.onProgress(E)}f.enqueue(b),v()}},T=>{f.error(T)})}}});return new Response(m)}else throw new td(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Ri.add(`file:${e}`,c);let h=Ji[e];delete Ji[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{let h=Ji[e];if(h===void 0)throw this.manager.itemError(e),c;delete Ji[e];for(let u=0,d=h.length;u<d;u++){let p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Hr=new WeakMap,_c=class extends pi{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ri.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=Hr.get(o);u===void 0&&(u=[],Hr.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=Xr("img");function l(){h(),t&&t(this);let u=Hr.get(this)||[];for(let d=0;d<u.length;d++){let p=u[d];p.onLoad&&p.onLoad(this)}Hr.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Ri.remove(`image:${e}`);let d=Hr.get(this)||[];for(let p=0;p<d.length;p++){let g=d[p];g.onError&&g.onError(u)}Hr.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Ri.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},xa=class extends pi{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new js,a=new nr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{h(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Cn,o.wrapT=c.wrapT!==void 0?c.wrapT:Cn,o.magFilter=c.magFilter!==void 0?c.magFilter:Et,o.minFilter=c.minFilter!==void 0?c.minFilter:Et,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=ti),c.mipmapCount===1&&(o.minFilter=Et),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}},ya=class extends pi{constructor(e){super(e)}load(e,t,n,s){let r=new en,o=new _c(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},ir=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ku=new Ke,Zm=new B,Km=new B,va=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.mapType=Nn,this.map=null,this.mapPass=null,this.matrix=new Ke,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zm),Km.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Km),t.updateMatrixWorld(),Ku.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ku,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ku)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},nd=class extends va{constructor(){super(new jt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Js*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},sr=class extends ir{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new nd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},id=class extends va{constructor(){super(new jt(90,1,.5,500)),this.isPointLightShadow=!0}},Sa=class extends ir{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new id}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Di=class extends sa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},sd=class extends va{constructor(){super(new Di(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ma=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new sd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},ba=class extends ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},ss=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},Ju=new WeakMap,Ta=class extends pi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&we("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&we("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Ri.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(Ju.has(o)===!0)s&&s(Ju.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Ri.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),Ju.set(l,c),Ri.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ri.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},xc=class extends jt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},Ea=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},yc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){Qt.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;Qt.multiplyQuaternionsFlat(e,o,e,t,e,n),Qt.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Id="\\[\\]\\.:\\/",cy=new RegExp("["+Id+"]","g"),Pd="[^"+Id+"]",hy="[^"+Id.replace("\\.","")+"]",uy=/((?:WC+[\/:])*)/.source.replace("WC",Pd),dy=/(WCOD+)?/.source.replace("WCOD",hy),fy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pd),py=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pd),my=new RegExp("^"+uy+dy+fy+py+"$"),gy=["material","materials","bones","map"],rd=class{constructor(e,t,n){let s=n||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},St=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cy,"")}static parseTrackName(e){let t=my.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);gy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){we("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=rd;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];vc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Xs,endingEnd:Xs};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=vg,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Mg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case _h:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Sg;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===gh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=qs,s.endingEnd=qs):(e?s.endingStart=this.zeroSlopeAtStart?qs:Xs:s.endingStart=Ko,t?s.endingEnd=this.zeroSlopeAtEnd?qs:Xs:s.endingEnd=Ko)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},_y=new Float32Array(1),wa=class extends ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],p=d.name,g=h[p];if(g!==void 0)++g.referenceCount,o[u]=g;else{if(g=o[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,p));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;g=new yc(St.create(n,p,_),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,p),o[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new ga(new Float32Array(2),new Float32Array(2),1,_y),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?tr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=_h),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new vc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?tr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},io=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Aa=class extends ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){we("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?we("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182")});function r0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function vy(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){let g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){let _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function tM(i,e,t,n,s,r,o){let a=new ke(0),l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(T){let b=T.isScene===!0?T.background:null;return b&&b.isTexture&&(b=(T.backgroundBlurriness>0?t:e).get(b)),b}function _(T){let b=!1,E=g(T);E===null?f(a,l):E&&E.isColor&&(f(E,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(T,b){let E=g(b);E&&(E.isCubeTexture||E.mapping===Ia)?(h===void 0&&(h=new on(new Zr(1,1,1),new Xn({name:"BackgroundCubeMaterial",uniforms:cr(Fi.backgroundCube.uniforms),vertexShader:Fi.backgroundCube.vertexShader,fragmentShader:Fi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),hr.copy(b.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(eM.makeRotationFromEuler(hr)),h.material.toneMapped=ot.getTransfer(E.colorSpace)!==ft,(u!==E||d!==E.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new on(new ma(2,2),new Xn({name:"BackgroundMaterial",uniforms:cr(Fi.background.uniforms),vertexShader:Fi.background.vertexShader,fragmentShader:Fi.background.fragmentShader,side:Hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=ot.getTransfer(E.colorSpace)!==ft,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,p=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function f(T,b){T.getRGB(vh,Cd(i)),n.buffers.color.setClear(vh.r,vh.g,vh.b,b,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,b=1){a.set(T),l=b,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,f(a,l)},render:_,addToRenderList:m,dispose:v}}function nM(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(S,C,D,U,L){let z=!1,O=u(U,D,C);r!==O&&(r=O,c(r.object)),z=p(S,U,D,L),z&&g(S,U,D,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(S,C,D,U),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function h(S){return i.deleteVertexArray(S)}function u(S,C,D){let U=D.wireframe===!0,L=n[S.id];L===void 0&&(L={},n[S.id]=L);let z=L[C.id];z===void 0&&(z={},L[C.id]=z);let O=z[U];return O===void 0&&(O=d(l()),z[U]=O),O}function d(S){let C=[],D=[],U=[];for(let L=0;L<t;L++)C[L]=0,D[L]=0,U[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:U,object:S,attributes:{},index:null}}function p(S,C,D,U){let L=r.attributes,z=C.attributes,O=0,H=D.getAttributes();for(let Y in H)if(H[Y].location>=0){let K=L[Y],se=z[Y];if(se===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),K===void 0||K.attribute!==se||se&&K.data!==se.data)return!0;O++}return r.attributesNum!==O||r.index!==U}function g(S,C,D,U){let L={},z=C.attributes,O=0,H=D.getAttributes();for(let Y in H)if(H[Y].location>=0){let K=z[Y];K===void 0&&(Y==="instanceMatrix"&&S.instanceMatrix&&(K=S.instanceMatrix),Y==="instanceColor"&&S.instanceColor&&(K=S.instanceColor));let se={};se.attribute=K,K&&K.data&&(se.data=K.data),L[Y]=se,O++}r.attributes=L,r.attributesNum=O,r.index=U}function _(){let S=r.newAttributes;for(let C=0,D=S.length;C<D;C++)S[C]=0}function m(S){f(S,0)}function f(S,C){let D=r.newAttributes,U=r.enabledAttributes,L=r.attributeDivisors;D[S]=1,U[S]===0&&(i.enableVertexAttribArray(S),U[S]=1),L[S]!==C&&(i.vertexAttribDivisor(S,C),L[S]=C)}function v(){let S=r.newAttributes,C=r.enabledAttributes;for(let D=0,U=C.length;D<U;D++)C[D]!==S[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function T(S,C,D,U,L,z,O){O===!0?i.vertexAttribIPointer(S,C,D,L,z):i.vertexAttribPointer(S,C,D,U,L,z)}function b(S,C,D,U){_();let L=U.attributes,z=D.getAttributes(),O=C.defaultAttributeValues;for(let H in z){let Y=z[H];if(Y.location>=0){let G=L[H];if(G===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),G!==void 0){let K=G.normalized,se=G.itemSize,xe=e.get(G);if(xe===void 0)continue;let Se=xe.buffer,Je=xe.type,$e=xe.bytesPerElement,$=Je===i.INT||Je===i.UNSIGNED_INT||G.gpuType===Pc;if(G.isInterleavedBufferAttribute){let J=G.data,he=J.stride,De=G.offset;if(J.isInstancedInterleavedBuffer){for(let ge=0;ge<Y.locationSize;ge++)f(Y.location+ge,J.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ge=0;ge<Y.locationSize;ge++)m(Y.location+ge);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let ge=0;ge<Y.locationSize;ge++)T(Y.location+ge,se/Y.locationSize,Je,K,he*$e,(De+se/Y.locationSize*ge)*$e,$)}else{if(G.isInstancedBufferAttribute){for(let J=0;J<Y.locationSize;J++)f(Y.location+J,G.meshPerAttribute);S.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=G.meshPerAttribute*G.count)}else for(let J=0;J<Y.locationSize;J++)m(Y.location+J);i.bindBuffer(i.ARRAY_BUFFER,Se);for(let J=0;J<Y.locationSize;J++)T(Y.location+J,se/Y.locationSize,Je,K,se*$e,se/Y.locationSize*J*$e,$)}}else if(O!==void 0){let K=O[H];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(Y.location,K);break;case 3:i.vertexAttrib3fv(Y.location,K);break;case 4:i.vertexAttrib4fv(Y.location,K);break;default:i.vertexAttrib1fv(Y.location,K)}}}}v()}function E(){P();for(let S in n){let C=n[S];for(let D in C){let U=C[D];for(let L in U)h(U[L].object),delete U[L];delete C[D]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let C=n[S.id];for(let D in C){let U=C[D];for(let L in U)h(U[L].object),delete U[L];delete C[D]}delete n[S.id]}function R(S){for(let C in n){let D=n[C];if(D[S.id]===void 0)continue;let U=D[S.id];for(let L in U)h(U[L].object),delete U[L];delete D[S.id]}}function P(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:y,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:v}}function iM(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];t.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function sM(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==qn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let P=R===Mn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==an&&!P)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(we("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:v,maxVaryings:T,maxFragmentUniforms:b,maxSamples:E,samples:A}}function rM(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Qn,a=new Ye,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,T=v*4,b=f.clippingState||null;l.value=b,b=h(g,d,T,p);for(let E=0;E!==T;++E)b[E]=t[E];f.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let f=p+_*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<f)&&(m=new Float32Array(f));for(let T=0,b=p;T!==_;++T,b+=4)o.copy(u[T]).applyMatrix4(v,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function oM(i){let e=new WeakMap;function t(o,a){return a===or?o.mapping=Ts:a===Cc&&(o.mapping=rr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===or||a===Cc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new oa(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function cM(i){let e=[],t=[],n=[],s=i,r=i-ws+1+Og.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-ws?l=Og[o-i+ws-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,v=new Float32Array(_*g*p),T=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let A=0;A<p;A++){let R=A%3*2/3-1,P=A>2?0:-1,y=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];v.set(y,_*g*A),T.set(d,m*g*A);let S=[A,A,A,A,A,A];b.set(S,f*g*A)}let E=new vn;E.setAttribute("position",new Gt(v,_)),E.setAttribute("uv",new Gt(T,m)),E.setAttribute("faceIndex",new Gt(b,f)),n.push(new on(E,null)),s>ws&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function kg(i,e,t){let n=new Gn(i,e,t);return n.texture.mapping=Ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function co(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function hM(i,e,t){return new Xn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:aM,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:bh(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function uM(i,e,t){let n=new Float32Array(dr),s=new B(0,1,0);return new Xn({name:"SphericalGaussianBlur",defines:{n:dr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function zg(){return new Xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function Vg(){return new Xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ni,depthTest:!1,depthWrite:!1})}function bh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dM(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===or||l===Cc,h=l===Ts||l===rr;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new uo(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new uo(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function fM(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Yr("WebGLRenderer: "+n+" extension not supported."),s}}}function pM(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete s[d.id];let p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let p in d)e.update(d[p],i.ARRAY_BUFFER)}function c(u){let d=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let v=p.array;_=p.version;for(let T=0,b=v.length;T<b;T+=3){let E=v[T+0],A=v[T+1],R=v[T+2];d.push(E,A,A,R,R,E)}}else if(g!==void 0){let v=g.array;_=g.version;for(let T=0,b=v.length/3-1;T<b;T+=3){let E=T+0,A=T+1,R=T+2;d.push(E,A,A,R,R,E)}}else return;let m=new(Ad(d)?ia:na)(d,1);m.version=_;let f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){let d=r.get(u);if(d){let p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mM(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let v=0;v<g;v++)f+=p[v]*_[v];t.update(f,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function gM(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ue("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _M(i,e,t){let n=new WeakMap,s=new Lt;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let y=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],T=0;p===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let b=a.attributes.position.count*T,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*E*4*u),R=new ea(A,b,E,u);R.type=an,R.needsUpdate=!0;let P=T*4;for(let S=0;S<u;S++){let C=m[S],D=f[S],U=v[S],L=b*E*4*S;for(let z=0;z<C.count;z++){let O=z*P;p===!0&&(s.fromBufferAttribute(C,z),A[L+O+0]=s.x,A[L+O+1]=s.y,A[L+O+2]=s.z,A[L+O+3]=0),g===!0&&(s.fromBufferAttribute(D,z),A[L+O+4]=s.x,A[L+O+5]=s.y,A[L+O+6]=s.z,A[L+O+7]=0),_===!0&&(s.fromBufferAttribute(U,z),A[L+O+8]=s.x,A[L+O+9]=s.y,A[L+O+10]=s.z,A[L+O+11]=U.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Be(b,E)},n.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];let g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function xM(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function vM(i,e,t,n,s){let r=new Gn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new Gn(e,t,{type:Mn,depthBuffer:!1,stencilBuffer:!1}),a=new vn;a.setAttribute("position",new yn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new yn([0,2,0,0,2,0],2));let l=new hc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new on(a,l),h=new Di(-1,1,1,-1,0,1),u=null,d=null,p=!1,g,_=null,m=[],f=!1;this.setSize=function(v,T){r.setSize(v,T),o.setSize(v,T);for(let b=0;b<m.length;b++){let E=m[b];E.setSize&&E.setSize(v,T)}},this.setEffects=function(v){m=v,f=m.length>0&&m[0].isRenderPass===!0;let T=r.width,b=r.height;for(let E=0;E<m.length;E++){let A=m[E];A.setSize&&A.setSize(T,b)}},this.begin=function(v,T){if(p||v.toneMapping===mi&&m.length===0)return!1;if(_=T,T!==null){let b=T.width,E=T.height;(r.width!==b||r.height!==E)&&this.setSize(b,E)}return f===!1&&v.setRenderTarget(r),g=v.toneMapping,v.toneMapping=mi,!0},this.hasRenderPass=function(){return f},this.end=function(v,T){v.toneMapping=g,p=!0;let b=r,E=o;for(let A=0;A<m.length;A++){let R=m[A];if(R.enabled!==!1&&(R.render(v,E,b,T),R.needsSwap!==!1)){let P=b;b=E,E=P}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,l.defines={},ot.getTransfer(u)===ft&&(l.defines.SRGB_TRANSFER="");let A=yM[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,v.setRenderTarget(_),v.render(c,h),_=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}function fo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Hg[s];if(r===void 0&&(r=new Float32Array(s),Hg[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function $t(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Zt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Th(i,e){let t=Gg[e];t===void 0&&(t=new Int32Array(e),Gg[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function SM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function MM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2fv(this.addr,e),Zt(t,e)}}function bM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if($t(t,e))return;i.uniform3fv(this.addr,e),Zt(t,e)}}function TM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4fv(this.addr,e),Zt(t,e)}}function EM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;qg.set(n),i.uniformMatrix2fv(this.addr,!1,qg),Zt(t,n)}}function wM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Xg.set(n),i.uniformMatrix3fv(this.addr,!1,Xg),Zt(t,n)}}function AM(i,e){let t=this.cache,n=e.elements;if(n===void 0){if($t(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if($t(t,n))return;Wg.set(n),i.uniformMatrix4fv(this.addr,!1,Wg),Zt(t,n)}}function RM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function CM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2iv(this.addr,e),Zt(t,e)}}function IM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3iv(this.addr,e),Zt(t,e)}}function PM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4iv(this.addr,e),Zt(t,e)}}function LM(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if($t(t,e))return;i.uniform2uiv(this.addr,e),Zt(t,e)}}function NM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if($t(t,e))return;i.uniform3uiv(this.addr,e),Zt(t,e)}}function UM(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if($t(t,e))return;i.uniform4uiv(this.addr,e),Zt(t,e)}}function FM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zd.compareFunction=t.isReversedDepthBuffer()?yh:xh,r=zd):r=o0,t.setTexture2D(e||r,s)}function OM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||l0,s)}function BM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||c0,s)}function kM(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||a0,s)}function zM(i){switch(i){case 5126:return SM;case 35664:return MM;case 35665:return bM;case 35666:return TM;case 35674:return EM;case 35675:return wM;case 35676:return AM;case 5124:case 35670:return RM;case 35667:case 35671:return CM;case 35668:case 35672:return IM;case 35669:case 35673:return PM;case 5125:return LM;case 36294:return DM;case 36295:return NM;case 36296:return UM;case 35678:case 36198:case 36298:case 36306:case 35682:return FM;case 35679:case 36299:case 36307:return OM;case 35680:case 36300:case 36308:case 36293:return BM;case 36289:case 36303:case 36311:case 36292:return kM}}function VM(i,e){i.uniform1fv(this.addr,e)}function HM(i,e){let t=fo(e,this.size,2);i.uniform2fv(this.addr,t)}function GM(i,e){let t=fo(e,this.size,3);i.uniform3fv(this.addr,t)}function WM(i,e){let t=fo(e,this.size,4);i.uniform4fv(this.addr,t)}function XM(i,e){let t=fo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qM(i,e){let t=fo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function YM(i,e){let t=fo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $M(i,e){i.uniform1iv(this.addr,e)}function ZM(i,e){i.uniform2iv(this.addr,e)}function KM(i,e){i.uniform3iv(this.addr,e)}function JM(i,e){i.uniform4iv(this.addr,e)}function jM(i,e){i.uniform1uiv(this.addr,e)}function QM(i,e){i.uniform2uiv(this.addr,e)}function eb(i,e){i.uniform3uiv(this.addr,e)}function tb(i,e){i.uniform4uiv(this.addr,e)}function nb(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=zd:o=o0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function ib(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||l0,r[o])}function sb(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||c0,r[o])}function rb(i,e,t){let n=this.cache,s=e.length,r=Th(t,s);$t(n,r)||(i.uniform1iv(this.addr,r),Zt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||a0,r[o])}function ob(i){switch(i){case 5126:return VM;case 35664:return HM;case 35665:return GM;case 35666:return WM;case 35674:return XM;case 35675:return qM;case 35676:return YM;case 5124:case 35670:return $M;case 35667:case 35671:return ZM;case 35668:case 35672:return KM;case 35669:case 35673:return JM;case 5125:return jM;case 36294:return QM;case 36295:return eb;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return nb;case 35679:case 36299:case 36307:return ib;case 35680:case 36300:case 36308:case 36293:return sb;case 36289:case 36303:case 36311:case 36292:return rb}}function Yg(i,e){i.seq.push(e),i.map[e.id]=e}function ab(i,e,t){let n=i.name,s=n.length;for(Bd.lastIndex=0;;){let r=Bd.exec(n),o=Bd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Yg(t,c===void 0?new Vd(a,i,e):new Hd(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new Gd(a),Yg(t,u)),t=u}}}function $g(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function hb(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function ub(i){ot._getMatrix(Zg,ot.workingColorSpace,i);let e=`mat3( ${Zg.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(i)){case Jo:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return we("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Kg(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+hb(i.getShaderSource(e),a)}else return r}function db(i,e){let t=ub(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pb(i,e){let t=fb[e];return t===void 0?(we("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mb(){ot.getLuminanceCoefficients(Sh);let i=Sh.x.toFixed(4),e=Sh.y.toFixed(4),t=Sh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ka).join(`
`)}function _b(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xb(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ka(i){return i!==""}function Jg(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jg(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Wd(i){return i.replace(yb,Sb)}function Sb(i,e){let t=nt[e];if(t===void 0){let n=vb.get(e);if(n!==void 0)t=nt[n],we('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wd(t)}function Qg(i){return i.replace(Mb,bb)}function bb(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function e0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Eb(i){return Tb[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function Ab(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":wb[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function Cb(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Rb[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Pb(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ib[i.combine]||"ENVMAP_BLENDING_NONE"}function Lb(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Db(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Eb(t),c=Ab(t),h=Cb(t),u=Pb(t),d=Lb(t),p=gb(t),g=_b(r),_=s.createProgram(),m,f,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ka).join(`
`),f.length>0&&(f+=`
`)):(m=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ka).join(`
`),f=[e0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mi?"#define TONE_MAPPING":"",t.toneMapping!==mi?nt.tonemapping_pars_fragment:"",t.toneMapping!==mi?pb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,db("linearToOutputTexel",t.outputColorSpace),mb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ka).join(`
`)),o=Wd(o),o=Jg(o,t),o=jg(o,t),a=Wd(a),a=Jg(a,t),a=jg(a,t),o=Qg(o),a=Qg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===wd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);let T=v+m+o,b=v+f+a,E=$g(s,s.VERTEX_SHADER,T),A=$g(s,s.FRAGMENT_SHADER,b);s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",U=s.getShaderInfoLog(E)||"",L=s.getShaderInfoLog(A)||"",z=D.trim(),O=U.trim(),H=L.trim(),Y=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,A);else{let K=Kg(s,E,"vertex"),se=Kg(s,A,"fragment");Ue("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+K+`
`+se)}else z!==""?we("WebGLProgram: Program Info Log:",z):(O===""||H==="")&&(G=!1);G&&(C.diagnostics={runnable:Y,programLog:z,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(E),s.deleteShader(A),P=new ho(s,_),y=xb(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(_,lb)),S},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}function Ub(i,e,t,n,s,r,o){let a=new ta,l=new Xd,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,S,C,D,U){let L=D.fog,z=U.geometry,O=y.isMeshStandardMaterial?D.environment:null,H=(y.isMeshStandardMaterial?t:e).get(y.envMap||O),Y=H&&H.mapping===Ia?H.image.height:null,G=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&we("WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));let K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=K!==void 0?K.length:0,xe=0;z.morphAttributes.position!==void 0&&(xe=1),z.morphAttributes.normal!==void 0&&(xe=2),z.morphAttributes.color!==void 0&&(xe=3);let Se,Je,$e,$;if(G){let mt=Fi[G];Se=mt.vertexShader,Je=mt.fragmentShader}else Se=y.vertexShader,Je=y.fragmentShader,l.update(y),$e=l.getVertexShaderID(y),$=l.getFragmentShaderID(y);let J=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),De=U.isInstancedMesh===!0,ge=U.isBatchedMesh===!0,ze=!!y.map,xt=!!y.matcap,Le=!!H,We=!!y.aoMap,it=!!y.lightMap,Re=!!y.bumpMap,ht=!!y.normalMap,I=!!y.displacementMap,pt=!!y.emissiveMap,Ve=!!y.metalnessMap,lt=!!y.roughnessMap,re=y.anisotropy>0,w=y.clearcoat>0,x=y.dispersion>0,F=y.iridescence>0,Z=y.sheen>0,j=y.transmission>0,q=re&&!!y.anisotropyMap,Te=w&&!!y.clearcoatMap,oe=w&&!!y.clearcoatNormalMap,Me=w&&!!y.clearcoatRoughnessMap,Ce=F&&!!y.iridescenceMap,ie=F&&!!y.iridescenceThicknessMap,le=Z&&!!y.sheenColorMap,ye=Z&&!!y.sheenRoughnessMap,me=!!y.specularMap,ae=!!y.specularColorMap,qe=!!y.specularIntensityMap,N=j&&!!y.transmissionMap,te=j&&!!y.thicknessMap,ee=!!y.gradientMap,_e=!!y.alphaMap,ne=y.alphaTest>0,Q=!!y.alphaHash,ce=!!y.extensions,He=mi;y.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(He=i.toneMapping);let wt={shaderID:G,shaderType:y.type,shaderName:y.name,vertexShader:Se,fragmentShader:Je,defines:y.defines,customVertexShaderID:$e,customFragmentShaderID:$,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:ge,batchingColor:ge&&U._colorsTexture!==null,instancing:De,instancingColor:De&&U.instanceColor!==null,instancingMorph:De&&U.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Yt,alphaToCoverage:!!y.alphaToCoverage,map:ze,matcap:xt,envMap:Le,envMapMode:Le&&H.mapping,envMapCubeUVHeight:Y,aoMap:We,lightMap:it,bumpMap:Re,normalMap:ht,displacementMap:I,emissiveMap:pt,normalMapObjectSpace:ht&&y.normalMapType===Tg,normalMapTangentSpace:ht&&y.normalMapType===Ed,metalnessMap:Ve,roughnessMap:lt,anisotropy:re,anisotropyMap:q,clearcoat:w,clearcoatMap:Te,clearcoatNormalMap:oe,clearcoatRoughnessMap:Me,dispersion:x,iridescence:F,iridescenceMap:Ce,iridescenceThicknessMap:ie,sheen:Z,sheenColorMap:le,sheenRoughnessMap:ye,specularMap:me,specularColorMap:ae,specularIntensityMap:qe,transmission:j,transmissionMap:N,thicknessMap:te,gradientMap:ee,opaque:y.transparent===!1&&y.blending===Ys&&y.alphaToCoverage===!1,alphaMap:_e,alphaTest:ne,alphaHash:Q,combine:y.combine,mapUv:ze&&_(y.map.channel),aoMapUv:We&&_(y.aoMap.channel),lightMapUv:it&&_(y.lightMap.channel),bumpMapUv:Re&&_(y.bumpMap.channel),normalMapUv:ht&&_(y.normalMap.channel),displacementMapUv:I&&_(y.displacementMap.channel),emissiveMapUv:pt&&_(y.emissiveMap.channel),metalnessMapUv:Ve&&_(y.metalnessMap.channel),roughnessMapUv:lt&&_(y.roughnessMap.channel),anisotropyMapUv:q&&_(y.anisotropyMap.channel),clearcoatMapUv:Te&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:oe&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ce&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:le&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(y.sheenRoughnessMap.channel),specularMapUv:me&&_(y.specularMap.channel),specularColorMapUv:ae&&_(y.specularColorMap.channel),specularIntensityMapUv:qe&&_(y.specularIntensityMap.channel),transmissionMapUv:N&&_(y.transmissionMap.channel),thicknessMapUv:te&&_(y.thicknessMap.channel),alphaMapUv:_e&&_(y.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ht||re),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!z.attributes.uv&&(ze||_e),fog:!!L,useFog:y.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:y.flatShading===!0&&y.wireframe===!1,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:U.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:He,decodeVideoTexture:ze&&y.map.isVideoTexture===!0&&ot.getTransfer(y.map.colorSpace)===ft,decodeVideoTextureEmissive:pt&&y.emissiveMap.isVideoTexture===!0&&ot.getTransfer(y.emissiveMap.colorSpace)===ft,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ei,flipSided:y.side===Sn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:ce&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&y.extensions.multiDraw===!0||ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return wt.vertexUv1s=c.has(1),wt.vertexUv2s=c.has(2),wt.vertexUv3s=c.has(3),c.clear(),wt}function f(y){let S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(let C in y.defines)S.push(C),S.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(v(S,y),T(S,y),S.push(i.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function v(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function T(y,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),y.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),y.push(a.mask)}function b(y){let S=g[y.type],C;if(S){let D=Fi[S];C=Ng.clone(D.uniforms)}else C=y.uniforms;return C}function E(y,S){let C=u.get(S);return C!==void 0?++C.usedTimes:(C=new Db(i,S,y,r),h.push(C),u.set(S,C)),C}function A(y){if(--y.usedTimes===0){let S=h.indexOf(y);h[S]=h[h.length-1],h.pop(),u.delete(y.cacheKey),y.destroy()}}function R(y){l.remove(y)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:b,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:P}}function Fb(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ob(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function t0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function n0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,_,m){let f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Ob),n.length>1&&n.sort(d||t0),s.length>1&&s.sort(d||t0)}function h(){for(let u=e,d=i.length;u<d;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Bb(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new n0,i.set(n,[o])):s>=r.length?(o=new n0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function kb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new ke};break;case"SpotLight":t={position:new B,direction:new B,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function zb(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function Hb(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Gb(i){let e=new kb,t=zb(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new Ke,o=new Ke;function a(c){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,v=0,T=0,b=0,E=0,A=0,R=0;c.sort(Hb);for(let y=0,S=c.length;y<S;y++){let C=c[y],D=C.color,U=C.intensity,L=C.distance,z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===lr?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*U,u+=D.g*U,d+=D.b*U;else if(C.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(C.sh.coefficients[O],U);R++}else if(C.isDirectionalLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let H=C.shadow,Y=t.get(C);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=z,n.directionalShadowMatrix[p]=C.shadow.matrix,v++}n.directional[p]=O,p++}else if(C.isSpotLight){let O=e.get(C);O.position.setFromMatrixPosition(C.matrixWorld),O.color.copy(D).multiplyScalar(U),O.distance=L,O.coneCos=Math.cos(C.angle),O.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),O.decay=C.decay,n.spot[_]=O;let H=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,H.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=H.matrix,C.castShadow){let Y=t.get(C);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=z,b++}_++}else if(C.isRectAreaLight){let O=e.get(C);O.color.copy(D).multiplyScalar(U),O.halfWidth.set(C.width*.5,0,0),O.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=O,m++}else if(C.isPointLight){let O=e.get(C);if(O.color.copy(C.color).multiplyScalar(C.intensity),O.distance=C.distance,O.decay=C.decay,C.castShadow){let H=C.shadow,Y=t.get(C);Y.shadowIntensity=H.intensity,Y.shadowBias=H.bias,Y.shadowNormalBias=H.normalBias,Y.shadowRadius=H.radius,Y.shadowMapSize=H.mapSize,Y.shadowCameraNear=H.camera.near,Y.shadowCameraFar=H.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=z,n.pointShadowMatrix[g]=C.shadow.matrix,T++}n.point[g]=O,g++}else if(C.isHemisphereLight){let O=e.get(C);O.skyColor.copy(C.color).multiplyScalar(U),O.groundColor.copy(C.groundColor).multiplyScalar(U),n.hemi[f]=O,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=de.LTC_FLOAT_1,n.rectAreaLTC2=de.LTC_FLOAT_2):(n.rectAreaLTC1=de.LTC_HALF_1,n.rectAreaLTC2=de.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==f||P.numDirectionalShadows!==v||P.numPointShadows!==T||P.numSpotShadows!==b||P.numSpotMaps!==E||P.numLightProbes!==R)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=b+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=f,P.numDirectionalShadows=v,P.numPointShadows=T,P.numSpotShadows=b,P.numSpotMaps=E,P.numLightProbes=R,n.version=Vb++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0,m=h.matrixWorldInverse;for(let f=0,v=c.length;f<v;f++){let T=c[f];if(T.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),u++}else if(T.isSpotLight){let b=n.spot[p];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),p++}else if(T.isRectAreaLight){let b=n.rectArea[g];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(T.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(T.width*.5,0,0),b.halfHeight.set(0,T.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(T.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(T.matrixWorld),b.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(T.matrixWorld),b.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function i0(i){let e=new Gb(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wb(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new i0(i),e.set(s,[a])):r>=o.length?(a=new i0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function Zb(i,e,t){let n=new eo,s=new Be,r=new Be,o=new Lt,a=new uc,l=new dc,c={},h=t.maxTextureSize,u={[Hn]:Sn,[Sn]:Hn,[ei]:ei},d=new Xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Xb,fragmentShader:qb}),p=d.clone();p.defines.HORIZONTAL_PASS=1;let g=new vn;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new on(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ra;let f=this.type;this.render=function(A,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Sc&&(we("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Ra);let y=i.getRenderTarget(),S=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Ni),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let U=f!==this.type;U&&R.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(z=>z.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,z=A.length;L<z;L++){let O=A[L],H=O.shadow;if(H===void 0){we("WebGLShadowMap:",O,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let Y=H.getFrameExtents();if(s.multiply(Y),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Y.x),s.x=r.x*Y.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Y.y),s.y=r.y*Y.y,H.mapSize.y=r.y)),H.map===null||U===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===so){if(O.isPointLight){we("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Gn(s.x,s.y,{format:lr,type:Mn,minFilter:Et,magFilter:Et,generateMipmaps:!1}),H.map.texture.name=O.name+".shadowMap",H.map.depthTexture=new Ss(s.x,s.y,an),H.map.depthTexture.name=O.name+".shadowMapDepth",H.map.depthTexture.format=Ci,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt}else{O.isPointLight?(H.map=new oa(s.x),H.map.depthTexture=new cc(s.x,gi)):(H.map=new Gn(s.x,s.y),H.map.depthTexture=new Ss(s.x,s.y,gi)),H.map.depthTexture.name=O.name+".shadowMap",H.map.depthTexture.format=Ci;let K=i.state.buffers.depth.getReversed();this.type===Ra?(H.map.depthTexture.compareFunction=K?yh:xh,H.map.depthTexture.minFilter=Et,H.map.depthTexture.magFilter=Et):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=kt,H.map.depthTexture.magFilter=kt)}H.camera.updateProjectionMatrix()}let G=H.map.isWebGLCubeRenderTarget?6:1;for(let K=0;K<G;K++){if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,K),i.clear();else{K===0&&(i.setRenderTarget(H.map),i.clear());let se=H.getViewport(K);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),D.viewport(o)}if(O.isPointLight){let se=H.camera,xe=H.matrix,Se=O.distance||se.far;Se!==se.far&&(se.far=Se,se.updateProjectionMatrix()),Ba.setFromMatrixPosition(O.matrixWorld),se.position.copy(Ba),kd.copy(se.position),kd.add(Yb[K]),se.up.copy($b[K]),se.lookAt(kd),se.updateMatrixWorld(),xe.makeTranslation(-Ba.x,-Ba.y,-Ba.z),s0.multiplyMatrices(se.projectionMatrix,se.matrixWorldInverse),H._frustum.setFromProjectionMatrix(s0,se.coordinateSystem,se.reversedDepth)}else H.updateMatrices(O);n=H.getFrustum(),b(R,P,H.camera,O,this.type)}H.isPointLightShadow!==!0&&this.type===so&&v(H,P),H.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(y,S,C)};function v(A,R){let P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Gn(s.x,s.y,{format:lr,type:Mn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,P,p,_,null)}function T(A,R,P,y){let S=null,C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=P.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=S.uuid,U=R.uuid,L=c[D];L===void 0&&(L={},c[D]=L);let z=L[U];z===void 0&&(z=S.clone(),L[U]=z,R.addEventListener("dispose",E)),S=z}if(S.visible=R.visible,S.wireframe=R.wireframe,y===so?S.side=R.shadowSide!==null?R.shadowSide:R.side:S.side=R.shadowSide!==null?R.shadowSide:u[R.side],S.alphaMap=R.alphaMap,S.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,S.map=R.map,S.clipShadows=R.clipShadows,S.clippingPlanes=R.clippingPlanes,S.clipIntersection=R.clipIntersection,S.displacementMap=R.displacementMap,S.displacementScale=R.displacementScale,S.displacementBias=R.displacementBias,S.wireframeLinewidth=R.wireframeLinewidth,S.linewidth=R.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let D=i.properties.get(S);D.light=P}return S}function b(A,R,P,y,S){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===so)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let U=e.update(A),L=A.material;if(Array.isArray(L)){let z=U.groups;for(let O=0,H=z.length;O<H;O++){let Y=z[O],G=L[Y.materialIndex];if(G&&G.visible){let K=T(A,G,y,S);A.onBeforeShadow(i,A,R,P,U,K,Y),i.renderBufferDirect(P,null,U,K,A,Y),A.onAfterShadow(i,A,R,P,U,K,Y)}}}else if(L.visible){let z=T(A,L,y,S);A.onBeforeShadow(i,A,R,P,U,z,null),i.renderBufferDirect(P,null,U,z,A,null),A.onAfterShadow(i,A,R,P,U,z,null)}}let D=A.children;for(let U=0,L=D.length;U<L;U++)b(D[U],R,P,y,S)}function E(A){A.target.removeEventListener("dispose",E);for(let P in c){let y=c[P],S=A.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}function Jb(i,e){function t(){let N=!1,te=new Lt,ee=null,_e=new Lt(0,0,0,0);return{setMask:function(ne){ee!==ne&&!N&&(i.colorMask(ne,ne,ne,ne),ee=ne)},setLocked:function(ne){N=ne},setClear:function(ne,Q,ce,He,wt){wt===!0&&(ne*=He,Q*=He,ce*=He),te.set(ne,Q,ce,He),_e.equals(te)===!1&&(i.clearColor(ne,Q,ce,He),_e.copy(te))},reset:function(){N=!1,ee=null,_e.set(-1,0,0,0)}}}function n(){let N=!1,te=!1,ee=null,_e=null,ne=null;return{setReversed:function(Q){if(te!==Q){let ce=e.get("EXT_clip_control");Q?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),te=Q;let He=ne;ne=null,this.setClear(He)}},getReversed:function(){return te},setTest:function(Q){Q?J(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Q){ee!==Q&&!N&&(i.depthMask(Q),ee=Q)},setFunc:function(Q){if(te&&(Q=Kb[Q]),_e!==Q){switch(Q){case Mc:i.depthFunc(i.NEVER);break;case bc:i.depthFunc(i.ALWAYS);break;case Tc:i.depthFunc(i.LESS);break;case $s:i.depthFunc(i.LEQUAL);break;case Ec:i.depthFunc(i.EQUAL);break;case wc:i.depthFunc(i.GEQUAL);break;case Ac:i.depthFunc(i.GREATER);break;case Rc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=Q}},setLocked:function(Q){N=Q},setClear:function(Q){ne!==Q&&(te&&(Q=1-Q),i.clearDepth(Q),ne=Q)},reset:function(){N=!1,ee=null,_e=null,ne=null,te=!1}}}function s(){let N=!1,te=null,ee=null,_e=null,ne=null,Q=null,ce=null,He=null,wt=null;return{setTest:function(mt){N||(mt?J(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(mt){te!==mt&&!N&&(i.stencilMask(mt),te=mt)},setFunc:function(mt,_i,Bi){(ee!==mt||_e!==_i||ne!==Bi)&&(i.stencilFunc(mt,_i,Bi),ee=mt,_e=_i,ne=Bi)},setOp:function(mt,_i,Bi){(Q!==mt||ce!==_i||He!==Bi)&&(i.stencilOp(mt,_i,Bi),Q=mt,ce=_i,He=Bi)},setLocked:function(mt){N=mt},setClear:function(mt){wt!==mt&&(i.clearStencil(mt),wt=mt)},reset:function(){N=!1,te=null,ee=null,_e=null,ne=null,Q=null,ce=null,He=null,wt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,T=null,b=null,E=null,A=null,R=new ke(0,0,0),P=0,y=!1,S=null,C=null,D=null,U=null,L=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,H=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Y)[1]),O=H>=1):Y.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),O=H>=2);let G=null,K={},se=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),Se=new Lt().fromArray(se),Je=new Lt().fromArray(xe);function $e(N,te,ee,_e){let ne=new Uint8Array(4),Q=i.createTexture();i.bindTexture(N,Q),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ce=0;ce<ee;ce++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(te,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,ne):i.texImage2D(te+ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ne);return Q}let $={};$[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc($s),Re(!1),ht(od),J(i.CULL_FACE),We(Ni);function J(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function he(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function De(N,te){return u[N]!==te?(i.bindFramebuffer(N,te),u[N]=te,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=te),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=te),!0):!1}function ge(N,te){let ee=p,_e=!1;if(N){ee=d.get(te),ee===void 0&&(ee=[],d.set(te,ee));let ne=N.textures;if(ee.length!==ne.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,ce=ne.length;Q<ce;Q++)ee[Q]=i.COLOR_ATTACHMENT0+Q;ee.length=ne.length,_e=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,_e=!0);_e&&i.drawBuffers(ee)}function ze(N){return g!==N?(i.useProgram(N),g=N,!0):!1}let xt={[_s]:i.FUNC_ADD,[eg]:i.FUNC_SUBTRACT,[tg]:i.FUNC_REVERSE_SUBTRACT};xt[ng]=i.MIN,xt[ig]=i.MAX;let Le={[sg]:i.ZERO,[rg]:i.ONE,[og]:i.SRC_COLOR,[ec]:i.SRC_ALPHA,[dg]:i.SRC_ALPHA_SATURATE,[hg]:i.DST_COLOR,[lg]:i.DST_ALPHA,[ag]:i.ONE_MINUS_SRC_COLOR,[tc]:i.ONE_MINUS_SRC_ALPHA,[ug]:i.ONE_MINUS_DST_COLOR,[cg]:i.ONE_MINUS_DST_ALPHA,[fg]:i.CONSTANT_COLOR,[pg]:i.ONE_MINUS_CONSTANT_COLOR,[mg]:i.CONSTANT_ALPHA,[gg]:i.ONE_MINUS_CONSTANT_ALPHA};function We(N,te,ee,_e,ne,Q,ce,He,wt,mt){if(N===Ni){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),N!==Qm){if(N!==m||mt!==y){if((f!==_s||b!==_s)&&(i.blendEquation(i.FUNC_ADD),f=_s,b=_s),mt)switch(N){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFunc(i.ONE,i.ONE);break;case ld:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case cd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ue("WebGLState: Invalid blending: ",N);break}else switch(N){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ad:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ld:Ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case cd:Ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ue("WebGLState: Invalid blending: ",N);break}v=null,T=null,E=null,A=null,R.set(0,0,0),P=0,m=N,y=mt}return}ne=ne||te,Q=Q||ee,ce=ce||_e,(te!==f||ne!==b)&&(i.blendEquationSeparate(xt[te],xt[ne]),f=te,b=ne),(ee!==v||_e!==T||Q!==E||ce!==A)&&(i.blendFuncSeparate(Le[ee],Le[_e],Le[Q],Le[ce]),v=ee,T=_e,E=Q,A=ce),(He.equals(R)===!1||wt!==P)&&(i.blendColor(He.r,He.g,He.b,wt),R.copy(He),P=wt),m=N,y=!1}function it(N,te){N.side===ei?he(i.CULL_FACE):J(i.CULL_FACE);let ee=N.side===Sn;te&&(ee=!ee),Re(ee),N.blending===Ys&&N.transparent===!1?We(Ni):We(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);let _e=N.stencilWrite;a.setTest(_e),_e&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Re(N){S!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),S=N)}function ht(N){N!==Jm?(J(i.CULL_FACE),N!==C&&(N===od?i.cullFace(i.BACK):N===jm?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),C=N}function I(N){N!==D&&(O&&i.lineWidth(N),D=N)}function pt(N,te,ee){N?(J(i.POLYGON_OFFSET_FILL),(U!==te||L!==ee)&&(i.polygonOffset(te,ee),U=te,L=ee)):he(i.POLYGON_OFFSET_FILL)}function Ve(N){N?J(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function lt(N){N===void 0&&(N=i.TEXTURE0+z-1),G!==N&&(i.activeTexture(N),G=N)}function re(N,te,ee){ee===void 0&&(G===null?ee=i.TEXTURE0+z-1:ee=G);let _e=K[ee];_e===void 0&&(_e={type:void 0,texture:void 0},K[ee]=_e),(_e.type!==N||_e.texture!==te)&&(G!==ee&&(i.activeTexture(ee),G=ee),i.bindTexture(N,te||$[N]),_e.type=N,_e.texture=te)}function w(){let N=K[G];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Z(){try{i.texSubImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function j(){try{i.texSubImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function q(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function oe(){try{i.texStorage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Me(){try{i.texStorage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function Ce(){try{i.texImage2D(...arguments)}catch(N){Ue("WebGLState:",N)}}function ie(){try{i.texImage3D(...arguments)}catch(N){Ue("WebGLState:",N)}}function le(N){Se.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Se.copy(N))}function ye(N){Je.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Je.copy(N))}function me(N,te){let ee=c.get(te);ee===void 0&&(ee=new WeakMap,c.set(te,ee));let _e=ee.get(N);_e===void 0&&(_e=i.getUniformBlockIndex(te,N.name),ee.set(N,_e))}function ae(N,te){let _e=c.get(te).get(N);l.get(te)!==_e&&(i.uniformBlockBinding(te,_e,N.__bindingPointIndex),l.set(te,_e))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},G=null,K={},u={},d=new WeakMap,p=[],g=null,_=!1,m=null,f=null,v=null,T=null,b=null,E=null,A=null,R=new ke(0,0,0),P=0,y=!1,S=null,C=null,D=null,U=null,L=null,Se.set(0,0,i.canvas.width,i.canvas.height),Je.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:he,bindFramebuffer:De,drawBuffers:ge,useProgram:ze,setBlending:We,setMaterial:it,setFlipSided:Re,setCullFace:ht,setLineWidth:I,setPolygonOffset:pt,setScissorTest:Ve,activeTexture:lt,bindTexture:re,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:F,texImage2D:Ce,texImage3D:ie,updateUBOMapping:me,uniformBlockBinding:ae,texStorage2D:oe,texStorage3D:Me,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:q,compressedTexSubImage3D:Te,scissor:le,viewport:ye,reset:qe}}function jb(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,h=new WeakMap,u,d=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):Xr("canvas")}function _(w,x,F){let Z=1,j=re(w);if((j.width>F||j.height>F)&&(Z=F/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let q=Math.floor(Z*j.width),Te=Math.floor(Z*j.height);u===void 0&&(u=g(q,Te));let oe=x?g(q,Te):u;return oe.width=q,oe.height=Te,oe.getContext("2d").drawImage(w,0,0,q,Te),we("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+q+"x"+Te+")."),oe}else return"data"in w&&we("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function m(w){return w.generateMipmaps}function f(w){i.generateMipmap(w)}function v(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(w,x,F,Z,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];we("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let q=x;if(x===i.RED&&(F===i.FLOAT&&(q=i.R32F),F===i.HALF_FLOAT&&(q=i.R16F),F===i.UNSIGNED_BYTE&&(q=i.R8)),x===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.R8UI),F===i.UNSIGNED_SHORT&&(q=i.R16UI),F===i.UNSIGNED_INT&&(q=i.R32UI),F===i.BYTE&&(q=i.R8I),F===i.SHORT&&(q=i.R16I),F===i.INT&&(q=i.R32I)),x===i.RG&&(F===i.FLOAT&&(q=i.RG32F),F===i.HALF_FLOAT&&(q=i.RG16F),F===i.UNSIGNED_BYTE&&(q=i.RG8)),x===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RG8UI),F===i.UNSIGNED_SHORT&&(q=i.RG16UI),F===i.UNSIGNED_INT&&(q=i.RG32UI),F===i.BYTE&&(q=i.RG8I),F===i.SHORT&&(q=i.RG16I),F===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGB8UI),F===i.UNSIGNED_SHORT&&(q=i.RGB16UI),F===i.UNSIGNED_INT&&(q=i.RGB32UI),F===i.BYTE&&(q=i.RGB8I),F===i.SHORT&&(q=i.RGB16I),F===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(F===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),F===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),F===i.UNSIGNED_INT&&(q=i.RGBA32UI),F===i.BYTE&&(q=i.RGBA8I),F===i.SHORT&&(q=i.RGBA16I),F===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(F===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),F===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let Te=j?Jo:ot.getTransfer(Z);F===i.FLOAT&&(q=i.RGBA32F),F===i.HALF_FLOAT&&(q=i.RGBA16F),F===i.UNSIGNED_BYTE&&(q=Te===ft?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function b(w,x){let F;return w?x===null||x===gi||x===ao?F=i.DEPTH24_STENCIL8:x===an?F=i.DEPTH32F_STENCIL8:x===oo&&(F=i.DEPTH24_STENCIL8,we("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===gi||x===ao?F=i.DEPTH_COMPONENT24:x===an?F=i.DEPTH_COMPONENT32F:x===oo&&(F=i.DEPTH_COMPONENT16),F}function E(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==kt&&w.minFilter!==Et?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&h.delete(x)}function R(w){let x=w.target;x.removeEventListener("dispose",R),S(x)}function P(w){let x=n.get(w);if(x.__webglInit===void 0)return;let F=w.source,Z=d.get(F);if(Z){let j=Z[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&y(w),Object.keys(Z).length===0&&d.delete(F)}n.remove(w)}function y(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let F=w.source,Z=d.get(F);delete Z[x.__cacheKey],o.memory.textures--}function S(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let j=0;j<x.__webglFramebuffer[Z].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[Z][j]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let F=w.textures;for(let Z=0,j=F.length;Z<j;Z++){let q=n.get(F[Z]);q.__webglTexture&&(i.deleteTexture(q.__webglTexture),o.memory.textures--),n.remove(F[Z])}n.remove(w)}let C=0;function D(){C=0}function U(){let w=C;return w>=s.maxTextures&&we("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function L(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function z(w,x){let F=n.get(w);if(w.isVideoTexture&&Ve(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&F.__version!==w.version){let Z=w.image;if(Z===null)we("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)we("WebGLRenderer: Texture marked for update but image is incomplete");else{$(F,w,x);return}}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+x)}function O(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){$(F,w,x);return}else w.isExternalTexture&&(F.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+x)}function H(w,x){let F=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&F.__version!==w.version){$(F,w,x);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+x)}function Y(w,x){let F=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&F.__version!==w.version){J(F,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+x)}let G={[xs]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[Wr]:i.MIRRORED_REPEAT},K={[kt]:i.NEAREST,[Ic]:i.NEAREST_MIPMAP_NEAREST,[ar]:i.NEAREST_MIPMAP_LINEAR,[Et]:i.LINEAR,[ro]:i.LINEAR_MIPMAP_NEAREST,[ti]:i.LINEAR_MIPMAP_LINEAR},se={[Eg]:i.NEVER,[Ig]:i.ALWAYS,[wg]:i.LESS,[xh]:i.LEQUAL,[Ag]:i.EQUAL,[yh]:i.GEQUAL,[Rg]:i.GREATER,[Cg]:i.NOTEQUAL};function xe(w,x){if(x.type===an&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Et||x.magFilter===ro||x.magFilter===ar||x.magFilter===ti||x.minFilter===Et||x.minFilter===ro||x.minFilter===ar||x.minFilter===ti)&&we("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,G[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,G[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,G[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,K[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,K[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,se[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===kt||x.minFilter!==ar&&x.minFilter!==ti||x.type===an&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Se(w,x){let F=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let Z=x.source,j=d.get(Z);j===void 0&&(j={},d.set(Z,j));let q=L(x);if(q!==w.__cacheKey){j[q]===void 0&&(j[q]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),j[q].usedTimes++;let Te=j[w.__cacheKey];Te!==void 0&&(j[w.__cacheKey].usedTimes--,Te.usedTimes===0&&y(x)),w.__cacheKey=q,w.__webglTexture=j[q].texture}return F}function Je(w,x,F){return Math.floor(Math.floor(w/F)/x)}function $e(w,x,F,Z){let q=w.updateRanges;if(q.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,F,Z,x.data);else{q.sort((ie,le)=>ie.start-le.start);let Te=0;for(let ie=1;ie<q.length;ie++){let le=q[Te],ye=q[ie],me=le.start+le.count,ae=Je(ye.start,x.width,4),qe=Je(le.start,x.width,4);ye.start<=me+1&&ae===qe&&Je(ye.start+ye.count-1,x.width,4)===ae?le.count=Math.max(le.count,ye.start+ye.count-le.start):(++Te,q[Te]=ye)}q.length=Te+1;let oe=i.getParameter(i.UNPACK_ROW_LENGTH),Me=i.getParameter(i.UNPACK_SKIP_PIXELS),Ce=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let ie=0,le=q.length;ie<le;ie++){let ye=q[ie],me=Math.floor(ye.start/4),ae=Math.ceil(ye.count/4),qe=me%x.width,N=Math.floor(me/x.width),te=ae,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),i.pixelStorei(i.UNPACK_SKIP_ROWS,N),t.texSubImage2D(i.TEXTURE_2D,0,qe,N,te,ee,F,Z,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,oe),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Me),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ce)}}function $(w,x,F){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);let j=Se(w,x),q=x.source;t.bindTexture(Z,w.__webglTexture,i.TEXTURE0+F);let Te=n.get(q);if(q.version!==Te.__version||j===!0){t.activeTexture(i.TEXTURE0+F);let oe=ot.getPrimaries(ot.workingColorSpace),Me=x.colorSpace===rs?null:ot.getPrimaries(x.colorSpace),Ce=x.colorSpace===rs||oe===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ce);let ie=_(x.image,!1,s.maxTextureSize);ie=lt(x,ie);let le=r.convert(x.format,x.colorSpace),ye=r.convert(x.type),me=T(x.internalFormat,le,ye,x.colorSpace,x.isVideoTexture);xe(Z,x);let ae,qe=x.mipmaps,N=x.isVideoTexture!==!0,te=Te.__version===void 0||j===!0,ee=q.dataReady,_e=E(x,ie);if(x.isDepthTexture)me=b(x.format===Es,x.type),te&&(N?t.texStorage2D(i.TEXTURE_2D,1,me,ie.width,ie.height):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,le,ye,null));else if(x.isDataTexture)if(qe.length>0){N&&te&&t.texStorage2D(i.TEXTURE_2D,_e,me,qe[0].width,qe[0].height);for(let ne=0,Q=qe.length;ne<Q;ne++)ae=qe[ne],N?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,le,ye,ae.data):t.texImage2D(i.TEXTURE_2D,ne,me,ae.width,ae.height,0,le,ye,ae.data);x.generateMipmaps=!1}else N?(te&&t.texStorage2D(i.TEXTURE_2D,_e,me,ie.width,ie.height),ee&&$e(x,ie,le,ye)):t.texImage2D(i.TEXTURE_2D,0,me,ie.width,ie.height,0,le,ye,ie.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){N&&te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,qe[0].width,qe[0].height,ie.depth);for(let ne=0,Q=qe.length;ne<Q;ne++)if(ae=qe[ne],x.format!==qn)if(le!==null)if(N){if(ee)if(x.layerUpdates.size>0){let ce=Ld(ae.width,ae.height,x.format,x.type);for(let He of x.layerUpdates){let wt=ae.data.subarray(He*ce/ae.data.BYTES_PER_ELEMENT,(He+1)*ce/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,He,ae.width,ae.height,1,le,wt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ie.depth,le,ae.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,me,ae.width,ae.height,ie.depth,0,ae.data,0,0);else we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else N?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,ae.width,ae.height,ie.depth,le,ye,ae.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,me,ae.width,ae.height,ie.depth,0,le,ye,ae.data)}else{N&&te&&t.texStorage2D(i.TEXTURE_2D,_e,me,qe[0].width,qe[0].height);for(let ne=0,Q=qe.length;ne<Q;ne++)ae=qe[ne],x.format!==qn?le!==null?N?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,le,ae.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,me,ae.width,ae.height,0,ae.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):N?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae.width,ae.height,le,ye,ae.data):t.texImage2D(i.TEXTURE_2D,ne,me,ae.width,ae.height,0,le,ye,ae.data)}else if(x.isDataArrayTexture)if(N){if(te&&t.texStorage3D(i.TEXTURE_2D_ARRAY,_e,me,ie.width,ie.height,ie.depth),ee)if(x.layerUpdates.size>0){let ne=Ld(ie.width,ie.height,x.format,x.type);for(let Q of x.layerUpdates){let ce=ie.data.subarray(Q*ne/ie.data.BYTES_PER_ELEMENT,(Q+1)*ne/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ie.width,ie.height,1,le,ye,ce)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,le,ye,ie.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,ie.width,ie.height,ie.depth,0,le,ye,ie.data);else if(x.isData3DTexture)N?(te&&t.texStorage3D(i.TEXTURE_3D,_e,me,ie.width,ie.height,ie.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,le,ye,ie.data)):t.texImage3D(i.TEXTURE_3D,0,me,ie.width,ie.height,ie.depth,0,le,ye,ie.data);else if(x.isFramebufferTexture){if(te)if(N)t.texStorage2D(i.TEXTURE_2D,_e,me,ie.width,ie.height);else{let ne=ie.width,Q=ie.height;for(let ce=0;ce<_e;ce++)t.texImage2D(i.TEXTURE_2D,ce,me,ne,Q,0,le,ye,null),ne>>=1,Q>>=1}}else if(qe.length>0){if(N&&te){let ne=re(qe[0]);t.texStorage2D(i.TEXTURE_2D,_e,me,ne.width,ne.height)}for(let ne=0,Q=qe.length;ne<Q;ne++)ae=qe[ne],N?ee&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,le,ye,ae):t.texImage2D(i.TEXTURE_2D,ne,me,le,ye,ae);x.generateMipmaps=!1}else if(N){if(te){let ne=re(ie);t.texStorage2D(i.TEXTURE_2D,_e,me,ne.width,ne.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,le,ye,ie)}else t.texImage2D(i.TEXTURE_2D,0,me,le,ye,ie);m(x)&&f(Z),Te.__version=q.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,F){if(x.image.length!==6)return;let Z=Se(w,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+F);let q=n.get(j);if(j.version!==q.__version||Z===!0){t.activeTexture(i.TEXTURE0+F);let Te=ot.getPrimaries(ot.workingColorSpace),oe=x.colorSpace===rs?null:ot.getPrimaries(x.colorSpace),Me=x.colorSpace===rs||Te===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let Ce=x.isCompressedTexture||x.image[0].isCompressedTexture,ie=x.image[0]&&x.image[0].isDataTexture,le=[];for(let Q=0;Q<6;Q++)!Ce&&!ie?le[Q]=_(x.image[Q],!0,s.maxCubemapSize):le[Q]=ie?x.image[Q].image:x.image[Q],le[Q]=lt(x,le[Q]);let ye=le[0],me=r.convert(x.format,x.colorSpace),ae=r.convert(x.type),qe=T(x.internalFormat,me,ae,x.colorSpace),N=x.isVideoTexture!==!0,te=q.__version===void 0||Z===!0,ee=j.dataReady,_e=E(x,ye);xe(i.TEXTURE_CUBE_MAP,x);let ne;if(Ce){N&&te&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,qe,ye.width,ye.height);for(let Q=0;Q<6;Q++){ne=le[Q].mipmaps;for(let ce=0;ce<ne.length;ce++){let He=ne[ce];x.format!==qn?me!==null?N?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,He.width,He.height,me,He.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,qe,He.width,He.height,0,He.data):we("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,He.width,He.height,me,ae,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,qe,He.width,He.height,0,me,ae,He.data)}}}else{if(ne=x.mipmaps,N&&te){ne.length>0&&_e++;let Q=re(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ie){N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,le[Q].width,le[Q].height,me,ae,le[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,le[Q].width,le[Q].height,0,me,ae,le[Q].data);for(let ce=0;ce<ne.length;ce++){let wt=ne[ce].image[Q].image;N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,wt.width,wt.height,me,ae,wt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,qe,wt.width,wt.height,0,me,ae,wt.data)}}else{N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,me,ae,le[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,me,ae,le[Q]);for(let ce=0;ce<ne.length;ce++){let He=ne[ce];N?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,me,ae,He.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,qe,me,ae,He.image[Q])}}}m(x)&&f(i.TEXTURE_CUBE_MAP),q.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function he(w,x,F,Z,j,q){let Te=r.convert(F.format,F.colorSpace),oe=r.convert(F.type),Me=T(F.internalFormat,Te,oe,F.colorSpace),Ce=n.get(x),ie=n.get(F);if(ie.__renderTarget=x,!Ce.__hasExternalTextures){let le=Math.max(1,x.width>>q),ye=Math.max(1,x.height>>q);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,q,Me,le,ye,x.depth,0,Te,oe,null):t.texImage2D(j,q,Me,le,ye,0,Te,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,j,ie.__webglTexture,0,I(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,j,ie.__webglTexture,q),t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(w,x,F){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let Z=x.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,q=b(x.stencilBuffer,j),Te=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;pt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(x),q,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(x),q,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,q,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,w)}else{let Z=x.textures;for(let j=0;j<Z.length;j++){let q=Z[j],Te=r.convert(q.format,q.colorSpace),oe=r.convert(q.type),Me=T(q.internalFormat,Te,oe,q.colorSpace);pt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,I(x),Me,x.width,x.height):F?i.renderbufferStorageMultisample(i.RENDERBUFFER,I(x),Me,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Me,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ge(w,x,F){let Z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),xe(i.TEXTURE_CUBE_MAP,x.depthTexture);let Ce=r.convert(x.depthTexture.format),ie=r.convert(x.depthTexture.type),le;x.depthTexture.format===Ci?le=i.DEPTH_COMPONENT24:x.depthTexture.format===Es&&(le=i.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,le,x.width,x.height,0,Ce,ie,null)}}else z(x.depthTexture,0);let q=j.__webglTexture,Te=I(x),oe=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+F:i.TEXTURE_2D,Me=x.depthTexture.format===Es?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ci)pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,oe,q,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Me,oe,q,0);else if(x.depthTexture.format===Es)pt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Me,oe,q,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,Me,oe,q,0);else throw new Error("Unknown depthTexture format")}function ze(w){let x=n.get(w),F=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(F)for(let Z=0;Z<6;Z++)ge(x.__webglFramebuffer[Z],w,Z);else{let Z=w.texture.mipmaps;Z&&Z.length>0?ge(x.__webglFramebuffer[0],w,0):ge(x.__webglFramebuffer,w,0)}else if(F){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),De(x.__webglDepthbuffer[Z],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}else{let Z=w.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),De(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,q=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,q),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,q)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xt(w,x,F){let Z=n.get(w);x!==void 0&&he(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&ze(w)}function Le(w){let x=w.texture,F=n.get(w),Z=n.get(x);w.addEventListener("dispose",R);let j=w.textures,q=w.isWebGLCubeRenderTarget===!0,Te=j.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),q){F.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer[oe]=[];for(let Me=0;Me<x.mipmaps.length;Me++)F.__webglFramebuffer[oe][Me]=i.createFramebuffer()}else F.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){F.__webglFramebuffer=[];for(let oe=0;oe<x.mipmaps.length;oe++)F.__webglFramebuffer[oe]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(Te)for(let oe=0,Me=j.length;oe<Me;oe++){let Ce=n.get(j[oe]);Ce.__webglTexture===void 0&&(Ce.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&pt(w)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let oe=0;oe<j.length;oe++){let Me=j[oe];F.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[oe]);let Ce=r.convert(Me.format,Me.colorSpace),ie=r.convert(Me.type),le=T(Me.internalFormat,Ce,ie,Me.colorSpace,w.isXRRenderTarget===!0),ye=I(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,le,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,F.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),De(F.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(q){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),xe(i.TEXTURE_CUBE_MAP,x);for(let oe=0;oe<6;oe++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)he(F.__webglFramebuffer[oe][Me],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Me);else he(F.__webglFramebuffer[oe],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);m(x)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){for(let oe=0,Me=j.length;oe<Me;oe++){let Ce=j[oe],ie=n.get(Ce),le=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(le=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,ie.__webglTexture),xe(le,Ce),he(F.__webglFramebuffer,w,Ce,i.COLOR_ATTACHMENT0+oe,le,0),m(Ce)&&f(le)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(oe=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,Z.__webglTexture),xe(oe,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)he(F.__webglFramebuffer[Me],w,x,i.COLOR_ATTACHMENT0,oe,Me);else he(F.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,oe,0);m(x)&&f(oe),t.unbindTexture()}w.depthBuffer&&ze(w)}function We(w){let x=w.textures;for(let F=0,Z=x.length;F<Z;F++){let j=x[F];if(m(j)){let q=v(w),Te=n.get(j).__webglTexture;t.bindTexture(q,Te),f(q),t.unbindTexture()}}}let it=[],Re=[];function ht(w){if(w.samples>0){if(pt(w)===!1){let x=w.textures,F=w.width,Z=w.height,j=i.COLOR_BUFFER_BIT,q=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(w),oe=x.length>1;if(oe)for(let Ce=0;Ce<x.length;Ce++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer);let Me=w.texture.mipmaps;Me&&Me.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Ce=0;Ce<x.length;Ce++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let ie=n.get(x[Ce]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,F,Z,0,0,F,Z,j,i.NEAREST),l===!0&&(it.length=0,Re.length=0,it.push(i.COLOR_ATTACHMENT0+Ce),w.depthBuffer&&w.resolveDepthBuffer===!1&&(it.push(q),Re.push(q),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let Ce=0;Ce<x.length;Ce++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.RENDERBUFFER,Te.__webglColorRenderbuffer[Ce]);let ie=n.get(x[Ce]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ce,i.TEXTURE_2D,ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function I(w){return Math.min(s.maxSamples,w.samples)}function pt(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ve(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function lt(w,x){let F=w.colorSpace,Z=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||F!==Yt&&F!==rs&&(ot.getTransfer(F)===ft?(Z!==qn||j!==Nn)&&we("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ue("WebGLTextures: Unsupported texture color space:",F)),x}function re(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=O,this.setTexture3D=H,this.setTextureCube=Y,this.rebindTextures=xt,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=he,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Qb(i,e){function t(n,s=rs){let r,o=ot.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===Lc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===vd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Sd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===xd)return i.BYTE;if(n===yd)return i.SHORT;if(n===oo)return i.UNSIGNED_SHORT;if(n===Pc)return i.INT;if(n===gi)return i.UNSIGNED_INT;if(n===an)return i.FLOAT;if(n===Mn)return i.HALF_FLOAT;if(n===Md)return i.ALPHA;if(n===bd)return i.RGB;if(n===qn)return i.RGBA;if(n===Ci)return i.DEPTH_COMPONENT;if(n===Es)return i.DEPTH_STENCIL;if(n===Nc)return i.RED;if(n===Uc)return i.RED_INTEGER;if(n===lr)return i.RG;if(n===Fc)return i.RG_INTEGER;if(n===Oc)return i.RGBA_INTEGER;if(n===Pa||n===La||n===Da||n===Na)if(o===ft)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Pa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===La)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Da)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Na)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Bc||n===kc||n===zc||n===Vc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Bc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Vc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hc||n===Gc)return o===ft?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Wc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Xc)return r.COMPRESSED_R11_EAC;if(n===qc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Yc)return r.COMPRESSED_RG11_EAC;if(n===$c)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Zc||n===Kc||n===Jc||n===jc||n===Qc||n===eh||n===th||n===nh||n===ih||n===sh||n===rh||n===oh||n===ah||n===lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Kc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===jc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qc)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===eh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===th)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ih)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===sh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===rh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===oh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ah)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lh)return o===ft?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ch||n===hh||n===uh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ch)return o===ft?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===hh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===uh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dh||n===fh||n===ph||n===mh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===dh)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ph)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===mh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ao?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function iT(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Cd(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,v,T,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,v,T):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Sn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Sn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);let v=e.get(f),T=v.envMap,b=v.envMapRotation;T&&(m.envMap.value=T,ur.copy(b),ur.x*=-1,ur.y*=-1,ur.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),m.envMapRotation.value.setFromMatrix4(nT.makeRotationFromEuler(ur)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,v,T){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*v,m.scale.value=T*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,v){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Sn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){let v=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sT(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,T){let b=T.program;n.uniformBlockBinding(v,b)}function c(v,T){let b=s[v.id];b===void 0&&(g(v),b=h(v),s[v.id]=b,v.addEventListener("dispose",m));let E=T.program;n.updateUBOMapping(v,E);let A=e.render.frame;r[v.id]!==A&&(d(v),r[v.id]=A)}function h(v){let T=u();v.__bindingPointIndex=T;let b=i.createBuffer(),E=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,b),b}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return Ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let T=s[v.id],b=v.uniforms,E=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let A=0,R=b.length;A<R;A++){let P=Array.isArray(b[A])?b[A]:[b[A]];for(let y=0,S=P.length;y<S;y++){let C=P[y];if(p(C,A,y,E)===!0){let D=C.__offset,U=Array.isArray(C.value)?C.value:[C.value],L=0;for(let z=0;z<U.length;z++){let O=U[z],H=_(O);typeof O=="number"||typeof O=="boolean"?(C.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,D+L,C.__data)):O.isMatrix3?(C.__data[0]=O.elements[0],C.__data[1]=O.elements[1],C.__data[2]=O.elements[2],C.__data[3]=0,C.__data[4]=O.elements[3],C.__data[5]=O.elements[4],C.__data[6]=O.elements[5],C.__data[7]=0,C.__data[8]=O.elements[6],C.__data[9]=O.elements[7],C.__data[10]=O.elements[8],C.__data[11]=0):(O.toArray(C.__data,L),L+=H.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(v,T,b,E){let A=v.value,R=T+"_"+b;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{let P=E[R];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return E[R]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(v){let T=v.uniforms,b=0,E=16;for(let R=0,P=T.length;R<P;R++){let y=Array.isArray(T[R])?T[R]:[T[R]];for(let S=0,C=y.length;S<C;S++){let D=y[S],U=Array.isArray(D.value)?D.value:[D.value];for(let L=0,z=U.length;L<z;L++){let O=U[L],H=_(O),Y=b%E,G=Y%H.boundary,K=Y+G;b+=G,K!==0&&E-K<H.storage&&(b+=E-K),D.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=H.storage}}}let A=b%E;return A>0&&(b+=E-A),v.__size=b,v.__cache={},this}function _(v){let T={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(T.boundary=4,T.storage=4):v.isVector2?(T.boundary=8,T.storage=8):v.isVector3||v.isColor?(T.boundary=16,T.storage=12):v.isVector4?(T.boundary=16,T.storage=16):v.isMatrix3?(T.boundary=48,T.storage=48):v.isMatrix4?(T.boundary=64,T.storage=64):v.isTexture?we("WebGLRenderer: Texture samplers can not be part of an uniforms group."):we("WebGLRenderer: Unsupported uniform value type.",v),T}function m(v){let T=v.target;T.removeEventListener("dispose",m);let b=o.indexOf(T.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function f(){for(let v in s)i.deleteBuffer(s[v]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}function oT(){return Ui===null&&(Ui=new js(rT,16,16,lr,Mn),Ui.name="DFG_LUT",Ui.minFilter=Et,Ui.magFilter=Et,Ui.wrapS=Cn,Ui.wrapT=Cn,Ui.generateMipmaps=!1,Ui.needsUpdate=!0),Ui}var Sy,My,by,Ty,Ey,wy,Ay,Ry,Cy,Iy,Py,Ly,Dy,Ny,Uy,Fy,Oy,By,ky,zy,Vy,Hy,Gy,Wy,Xy,qy,Yy,$y,Zy,Ky,Jy,jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,_v,xv,yv,vv,Sv,Mv,bv,Tv,Ev,wv,Av,Rv,Cv,Iv,Pv,Lv,Dv,Nv,Uv,Fv,Ov,Bv,kv,zv,Vv,Hv,Gv,Wv,Xv,qv,Yv,$v,Zv,Kv,Jv,jv,Qv,eS,tS,nS,iS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,_S,xS,yS,vS,SS,MS,bS,TS,ES,wS,AS,RS,CS,IS,PS,LS,DS,NS,US,FS,OS,BS,kS,zS,VS,HS,GS,WS,XS,qS,YS,$S,ZS,KS,JS,jS,QS,nt,de,Fi,vh,hr,eM,ws,Og,dr,aM,Oa,Bg,Nd,Ud,Fd,Od,lM,uo,yM,o0,zd,a0,l0,c0,Hg,Gg,Wg,Xg,qg,Vd,Hd,Gd,Bd,ho,lb,cb,Zg,fb,Sh,yb,vb,Mb,Tb,wb,Rb,Ib,Nb,Xd,qd,Vb,Xb,qb,Yb,$b,s0,Ba,kd,Kb,eT,tT,Yd,$d,ur,nT,rT,Ui,Mh,fr=Ee(()=>{Dd();Dd();Sy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,My=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,by=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ty=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ey=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ay=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ry=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Iy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ly=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Dy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ny=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Uy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Oy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,By=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Vy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Gy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Wy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Yy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$y=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ky=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jy="gl_FragColor = linearToOutputTexel( gl_FragColor );",jy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,tv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,nv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,iv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,sv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ov=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,av=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,lv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,cv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,uv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,dv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,fv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,pv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,mv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,gv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_v=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,yv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,vv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Sv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Mv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ev=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Av=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Rv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Iv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Dv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Nv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ov=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Gv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$v=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Kv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,jv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,iS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,sS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_S=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,yS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,SS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ES=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,AS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,RS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,IS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,US=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,XS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$S=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,KS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,jS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:Sy,alphahash_pars_fragment:My,alphamap_fragment:by,alphamap_pars_fragment:Ty,alphatest_fragment:Ey,alphatest_pars_fragment:wy,aomap_fragment:Ay,aomap_pars_fragment:Ry,batching_pars_vertex:Cy,batching_vertex:Iy,begin_vertex:Py,beginnormal_vertex:Ly,bsdfs:Dy,iridescence_fragment:Ny,bumpmap_pars_fragment:Uy,clipping_planes_fragment:Fy,clipping_planes_pars_fragment:Oy,clipping_planes_pars_vertex:By,clipping_planes_vertex:ky,color_fragment:zy,color_pars_fragment:Vy,color_pars_vertex:Hy,color_vertex:Gy,common:Wy,cube_uv_reflection_fragment:Xy,defaultnormal_vertex:qy,displacementmap_pars_vertex:Yy,displacementmap_vertex:$y,emissivemap_fragment:Zy,emissivemap_pars_fragment:Ky,colorspace_fragment:Jy,colorspace_pars_fragment:jy,envmap_fragment:Qy,envmap_common_pars_fragment:ev,envmap_pars_fragment:tv,envmap_pars_vertex:nv,envmap_physical_pars_fragment:fv,envmap_vertex:iv,fog_vertex:sv,fog_pars_vertex:rv,fog_fragment:ov,fog_pars_fragment:av,gradientmap_pars_fragment:lv,lightmap_pars_fragment:cv,lights_lambert_fragment:hv,lights_lambert_pars_fragment:uv,lights_pars_begin:dv,lights_toon_fragment:pv,lights_toon_pars_fragment:mv,lights_phong_fragment:gv,lights_phong_pars_fragment:_v,lights_physical_fragment:xv,lights_physical_pars_fragment:yv,lights_fragment_begin:vv,lights_fragment_maps:Sv,lights_fragment_end:Mv,logdepthbuf_fragment:bv,logdepthbuf_pars_fragment:Tv,logdepthbuf_pars_vertex:Ev,logdepthbuf_vertex:wv,map_fragment:Av,map_pars_fragment:Rv,map_particle_fragment:Cv,map_particle_pars_fragment:Iv,metalnessmap_fragment:Pv,metalnessmap_pars_fragment:Lv,morphinstance_vertex:Dv,morphcolor_vertex:Nv,morphnormal_vertex:Uv,morphtarget_pars_vertex:Fv,morphtarget_vertex:Ov,normal_fragment_begin:Bv,normal_fragment_maps:kv,normal_pars_fragment:zv,normal_pars_vertex:Vv,normal_vertex:Hv,normalmap_pars_fragment:Gv,clearcoat_normal_fragment_begin:Wv,clearcoat_normal_fragment_maps:Xv,clearcoat_pars_fragment:qv,iridescence_pars_fragment:Yv,opaque_fragment:$v,packing:Zv,premultiplied_alpha_fragment:Kv,project_vertex:Jv,dithering_fragment:jv,dithering_pars_fragment:Qv,roughnessmap_fragment:eS,roughnessmap_pars_fragment:tS,shadowmap_pars_fragment:nS,shadowmap_pars_vertex:iS,shadowmap_vertex:sS,shadowmask_pars_fragment:rS,skinbase_vertex:oS,skinning_pars_vertex:aS,skinning_vertex:lS,skinnormal_vertex:cS,specularmap_fragment:hS,specularmap_pars_fragment:uS,tonemapping_fragment:dS,tonemapping_pars_fragment:fS,transmission_fragment:pS,transmission_pars_fragment:mS,uv_pars_fragment:gS,uv_pars_vertex:_S,uv_vertex:xS,worldpos_vertex:yS,background_vert:vS,background_frag:SS,backgroundCube_vert:MS,backgroundCube_frag:bS,cube_vert:TS,cube_frag:ES,depth_vert:wS,depth_frag:AS,distance_vert:RS,distance_frag:CS,equirect_vert:IS,equirect_frag:PS,linedashed_vert:LS,linedashed_frag:DS,meshbasic_vert:NS,meshbasic_frag:US,meshlambert_vert:FS,meshlambert_frag:OS,meshmatcap_vert:BS,meshmatcap_frag:kS,meshnormal_vert:zS,meshnormal_frag:VS,meshphong_vert:HS,meshphong_frag:GS,meshphysical_vert:WS,meshphysical_frag:XS,meshtoon_vert:qS,meshtoon_frag:YS,points_vert:$S,points_frag:ZS,shadow_vert:KS,shadow_frag:JS,sprite_vert:jS,sprite_frag:QS},de={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ye}},envmap:{envMap:{value:null},envMapRotation:{value:new Ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ye},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0},uvTransform:{value:new Ye}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ye},alphaMap:{value:null},alphaMapTransform:{value:new Ye},alphaTest:{value:0}}},Fi={basic:{uniforms:pn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:pn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:pn([de.common,de.specularmap,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.fog,de.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:pn([de.common,de.envmap,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.roughnessmap,de.metalnessmap,de.fog,de.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:pn([de.common,de.aomap,de.lightmap,de.emissivemap,de.bumpmap,de.normalmap,de.displacementmap,de.gradientmap,de.fog,de.lights,{emissive:{value:new ke(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:pn([de.common,de.bumpmap,de.normalmap,de.displacementmap,de.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:pn([de.points,de.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:pn([de.common,de.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:pn([de.common,de.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:pn([de.common,de.bumpmap,de.normalmap,de.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:pn([de.sprite,de.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ye}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:pn([de.common,de.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:pn([de.lights,de.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};Fi.physical={uniforms:pn([Fi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ye},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ye},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ye},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ye},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ye},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ye}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};vh={r:0,b:0,g:0},hr=new di,eM=new Ke;ws=4,Og=[.125,.215,.35,.446,.526,.582],dr=20,aM=256,Oa=new Di,Bg=new ke,Nd=null,Ud=0,Fd=0,Od=!1,lM=new B,uo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=lM}=r;Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Nd,Ud,Fd),this._renderer.xr.enabled=Od,e.scissorTest=!1,co(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Nd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Fd=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Et,minFilter:Et,generateMipmaps:!1,type:Mn,format:qn,colorSpace:Yt,depthBuffer:!1},s=kg(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kg(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=cM(r)),this._blurMaterial=uM(r,e,t),this._ggxMaterial=hM(r,e,t)}return s}_compileMaterial(e){let t=new on(new vn,e);this._renderer.compile(t,Oa)}_sceneToCubeUV(e,t,n,s,r){let l=new jt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(Bg),u.toneMapping=mi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new on(new Zr,new fi({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,f=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,f=!0):(m.color.copy(Bg),f=!0);for(let T=0;T<6;T++){let b=T%3;b===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):b===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));let E=this._cubeSize;co(s,b*E,T>2?E:0,E,E),u.setRenderTarget(s),f&&u.render(_,l),u.render(e,l)}u.toneMapping=p,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Ts||e.mapping===rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zg());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;co(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Oa)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,p=u*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-ws?n-g+ws:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,co(r,m,f,3*_,2*_),s.setRenderTarget(r),s.render(a,Oa),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-n,co(e,m,f,3*_,2*_),s.setRenderTarget(e),s.render(a,Oa)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ue("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*dr-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):dr;m>dr&&we(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${dr}`);let f=[],v=0;for(let R=0;R<dr;++R){let P=R/_,y=Math.exp(-P*P/2);f.push(y),R===0?v+=y:R<m&&(v+=2*y)}for(let R=0;R<f.length;R++)f[R]=f[R]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;let b=this._sizeLods[s],E=3*b*(s>T-ws?s-T+ws:0),A=4*(this._cubeSize-b);co(t,E,A,3*b,2*b),l.setRenderTarget(t),l.render(u,Oa)}};yM={[ud]:"LINEAR_TONE_MAPPING",[dd]:"REINHARD_TONE_MAPPING",[fd]:"CINEON_TONE_MAPPING",[Ca]:"ACES_FILMIC_TONE_MAPPING",[md]:"AGX_TONE_MAPPING",[gd]:"NEUTRAL_TONE_MAPPING",[pd]:"CUSTOM_TONE_MAPPING"};o0=new en,zd=new Ss(1,1),a0=new ea,l0=new rc,c0=new ra,Hg=[],Gg=[],Wg=new Float32Array(16),Xg=new Float32Array(9),qg=new Float32Array(4);Vd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=zM(t.type)}},Hd=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ob(t.type)}},Gd=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Bd=/(\w+)(\])?(\[|\.)?/g;ho=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);ab(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};lb=37297,cb=0;Zg=new Ye;fb={[ud]:"Linear",[dd]:"Reinhard",[fd]:"Cineon",[Ca]:"ACESFilmic",[md]:"AgX",[gd]:"Neutral",[pd]:"Custom"};Sh=new B;yb=/^[ \t]*#include +<([\w\d./]+)>/gm;vb=new Map;Mb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Tb={[Ra]:"SHADOWMAP_TYPE_PCF",[so]:"SHADOWMAP_TYPE_VSM"};wb={[Ts]:"ENVMAP_TYPE_CUBE",[rr]:"ENVMAP_TYPE_CUBE",[Ia]:"ENVMAP_TYPE_CUBE_UV"};Rb={[rr]:"ENVMAP_MODE_REFRACTION"};Ib={[hd]:"ENVMAP_BLENDING_MULTIPLY",[_g]:"ENVMAP_BLENDING_MIX",[xg]:"ENVMAP_BLENDING_ADD"};Nb=0,Xd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qd(e),t.set(e,n)),n}},qd=class{constructor(e){this.id=Nb++,this.code=e,this.usedTimes=0}};Vb=0;Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Yb=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],$b=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],s0=new Ke,Ba=new B,kd=new B;Kb={[Mc]:bc,[Tc]:Ac,[Ec]:Rc,[$s]:wc,[bc]:Mc,[Ac]:Tc,[Rc]:Ec,[wc]:$s};eT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new pa(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Xn({vertexShader:eT,fragmentShader:tT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new on(new ma(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$d=class extends ui{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null,_=typeof XRWebGLBinding<"u",m=new Yd,f={},v=t.getContextAttributes(),T=null,b=null,E=[],A=[],R=new Be,P=null,y=new jt;y.viewport=new Lt;let S=new jt;S.viewport=new Lt;let C=[y,S],D=new xc,U=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let J=E[$];return J===void 0&&(J=new Kr,E[$]=J),J.getTargetRaySpace()},this.getControllerGrip=function($){let J=E[$];return J===void 0&&(J=new Kr,E[$]=J),J.getGripSpace()},this.getHand=function($){let J=E[$];return J===void 0&&(J=new Kr,E[$]=J),J.getHandSpace()};function z($){let J=A.indexOf($.inputSource);if(J===-1)return;let he=E[J];he!==void 0&&(he.update($.inputSource,$.frame,c||o),he.dispatchEvent({type:$.type,data:$.inputSource}))}function O(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",O),s.removeEventListener("inputsourceschange",H);for(let $=0;$<E.length;$++){let J=A[$];J!==null&&(A[$]=null,E[$].disconnect(J))}U=null,L=null,m.reset();for(let $ in f)delete f[$];e.setRenderTarget(T),p=null,d=null,u=null,s=null,b=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&we("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&we("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",O),s.addEventListener("inputsourceschange",H),v.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,De=null,ge=null;v.depth&&(ge=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=v.stencil?Es:Ci,De=v.stencil?ao:gi);let ze={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(ze),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new Gn(d.textureWidth,d.textureHeight,{format:qn,type:Nn,depthTexture:new Ss(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Gn(p.framebufferWidth,p.framebufferHeight,{format:qn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),$e.setContext(s),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function H($){for(let J=0;J<$.removed.length;J++){let he=$.removed[J],De=A.indexOf(he);De>=0&&(A[De]=null,E[De].disconnect(he))}for(let J=0;J<$.added.length;J++){let he=$.added[J],De=A.indexOf(he);if(De===-1){for(let ze=0;ze<E.length;ze++)if(ze>=A.length){A.push(he),De=ze;break}else if(A[ze]===null){A[ze]=he,De=ze;break}if(De===-1)break}let ge=E[De];ge&&ge.connect(he)}}let Y=new B,G=new B;function K($,J,he){Y.setFromMatrixPosition(J.matrixWorld),G.setFromMatrixPosition(he.matrixWorld);let De=Y.distanceTo(G),ge=J.projectionMatrix.elements,ze=he.projectionMatrix.elements,xt=ge[14]/(ge[10]-1),Le=ge[14]/(ge[10]+1),We=(ge[9]+1)/ge[5],it=(ge[9]-1)/ge[5],Re=(ge[8]-1)/ge[0],ht=(ze[8]+1)/ze[0],I=xt*Re,pt=xt*ht,Ve=De/(-Re+ht),lt=Ve*-Re;if(J.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(lt),$.translateZ(Ve),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ge[10]===-1)$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let re=xt+Ve,w=Le+Ve,x=I-lt,F=pt+(De-lt),Z=We*Le/w*re,j=it*Le/w*re;$.projectionMatrix.makePerspective(x,F,Z,j,re,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function se($,J){J===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(J.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let J=$.near,he=$.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(he=m.depthFar)),D.near=S.near=y.near=J,D.far=S.far=y.far=he,(U!==D.near||L!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),U=D.near,L=D.far),D.layers.mask=$.layers.mask|6,y.layers.mask=D.layers.mask&3,S.layers.mask=D.layers.mask&5;let De=$.parent,ge=D.cameras;se(D,De);for(let ze=0;ze<ge.length;ze++)se(ge[ze],De);ge.length===2?K(D,y,S):D.projectionMatrix.copy(y.projectionMatrix),xe($,D,De)};function xe($,J,he){he===null?$.matrix.copy(J.matrixWorld):($.matrix.copy(he.matrixWorld),$.matrix.invert(),$.matrix.multiply(J.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(J.projectionMatrix),$.projectionMatrixInverse.copy(J.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Js*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(D)},this.getCameraTexture=function($){return f[$]};let Se=null;function Je($,J){if(h=J.getViewerPose(c||o),g=J,h!==null){let he=h.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let De=!1;he.length!==D.cameras.length&&(D.cameras.length=0,De=!0);for(let Le=0;Le<he.length;Le++){let We=he[Le],it=null;if(p!==null)it=p.getViewport(We);else{let ht=u.getViewSubImage(d,We);it=ht.viewport,Le===0&&(e.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(b))}let Re=C[Le];Re===void 0&&(Re=new jt,Re.layers.enable(Le),Re.viewport=new Lt,C[Le]=Re),Re.matrix.fromArray(We.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(We.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(it.x,it.y,it.width,it.height),Le===0&&(D.matrix.copy(Re.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),De===!0&&D.cameras.push(Re)}let ge=s.enabledFeatures;if(ge&&ge.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let Le=u.getDepthInformation(he[0]);Le&&Le.isValid&&Le.texture&&m.init(Le,s.renderState)}if(ge&&ge.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let Le=0;Le<he.length;Le++){let We=he[Le].camera;if(We){let it=f[We];it||(it=new pa,f[We]=it);let Re=u.getCameraImage(We);it.sourceTexture=Re}}}}for(let he=0;he<E.length;he++){let De=A[he],ge=E[he];De!==null&&ge!==void 0&&ge.update(De,J,c||o)}Se&&Se($,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}let $e=new r0;$e.setAnimationLoop(Je),this.setAnimationLoop=function($){Se=$},this.dispose=function(){}}},ur=new di,nT=new Ke;rT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ui=null;Mh=class{constructor(e={}){let{canvas:t=Pg(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:p=Nn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let _=p,m=new Set([Oc,Fc,Uc]),f=new Set([Nn,gi,oo,ao,Lc,Dc]),v=new Uint32Array(4),T=new Int32Array(4),b=null,E=null,A=[],R=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=mi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let y=this,S=!1;this._outputColorSpace=Bt;let C=0,D=0,U=null,L=-1,z=null,O=new Lt,H=new Lt,Y=null,G=new ke(0),K=0,se=t.width,xe=t.height,Se=1,Je=null,$e=null,$=new Lt(0,0,se,xe),J=new Lt(0,0,se,xe),he=!1,De=new eo,ge=!1,ze=!1,xt=new Ke,Le=new B,We=new Lt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Re=!1;function ht(){return U===null?Se:1}let I=n;function pt(M,k){return t.getContext(M,k)}try{let M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",He,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",mt,!1),I===null){let k="webgl2";if(I=pt(k,M),I===null)throw pt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw Ue("WebGLRenderer: "+M.message),M}let Ve,lt,re,w,x,F,Z,j,q,Te,oe,Me,Ce,ie,le,ye,me,ae,qe,N,te,ee,_e,ne;function Q(){Ve=new fM(I),Ve.init(),ee=new Qb(I,Ve),lt=new sM(I,Ve,e,ee),re=new Jb(I,Ve),lt.reversedDepthBuffer&&d&&re.buffers.depth.setReversed(!0),w=new gM(I),x=new Fb,F=new jb(I,Ve,re,x,lt,ee,w),Z=new oM(y),j=new dM(y),q=new vy(I),_e=new nM(I,q),Te=new pM(I,q,w,_e),oe=new xM(I,Te,q,w),qe=new _M(I,lt,F),ye=new rM(x),Me=new Ub(y,Z,j,Ve,lt,_e,ye),Ce=new iT(y,x),ie=new Bb,le=new Wb(Ve),ae=new tM(y,Z,j,re,oe,g,l),me=new Zb(y,oe,lt),ne=new sT(I,w,lt,re),N=new iM(I,Ve,w),te=new mM(I,Ve,w),w.programs=Me.programs,y.capabilities=lt,y.extensions=Ve,y.properties=x,y.renderLists=ie,y.shadowMap=me,y.state=re,y.info=w}Q(),_!==Nn&&(P=new vM(_,t.width,t.height,s,r));let ce=new $d(y,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let M=Ve.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Ve.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(M){M!==void 0&&(Se=M,this.setSize(se,xe,!1))},this.getSize=function(M){return M.set(se,xe)},this.setSize=function(M,k,X=!0){if(ce.isPresenting){we("WebGLRenderer: Can't change size while VR device is presenting.");return}se=M,xe=k,t.width=Math.floor(M*Se),t.height=Math.floor(k*Se),X===!0&&(t.style.width=M+"px",t.style.height=k+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,M,k)},this.getDrawingBufferSize=function(M){return M.set(se*Se,xe*Se).floor()},this.setDrawingBufferSize=function(M,k,X){se=M,xe=k,Se=X,t.width=Math.floor(M*X),t.height=Math.floor(k*X),this.setViewport(0,0,M,k)},this.setEffects=function(M){if(_===Nn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let k=0;k<M.length;k++)if(M[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(O)},this.getViewport=function(M){return M.copy($)},this.setViewport=function(M,k,X,W){M.isVector4?$.set(M.x,M.y,M.z,M.w):$.set(M,k,X,W),re.viewport(O.copy($).multiplyScalar(Se).round())},this.getScissor=function(M){return M.copy(J)},this.setScissor=function(M,k,X,W){M.isVector4?J.set(M.x,M.y,M.z,M.w):J.set(M,k,X,W),re.scissor(H.copy(J).multiplyScalar(Se).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(M){re.setScissorTest(he=M)},this.setOpaqueSort=function(M){Je=M},this.setTransparentSort=function(M){$e=M},this.getClearColor=function(M){return M.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(M=!0,k=!0,X=!0){let W=0;if(M){let V=!1;if(U!==null){let ue=U.texture.format;V=m.has(ue)}if(V){let ue=U.texture.type,ve=f.has(ue),pe=ae.getClearColor(),be=ae.getClearAlpha(),Ae=pe.r,Fe=pe.g,Ie=pe.b;ve?(v[0]=Ae,v[1]=Fe,v[2]=Ie,v[3]=be,I.clearBufferuiv(I.COLOR,0,v)):(T[0]=Ae,T[1]=Fe,T[2]=Ie,T[3]=be,I.clearBufferiv(I.COLOR,0,T))}else W|=I.COLOR_BUFFER_BIT}k&&(W|=I.DEPTH_BUFFER_BIT),X&&(W|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",He,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",mt,!1),ae.dispose(),ie.dispose(),le.dispose(),x.dispose(),Z.dispose(),j.dispose(),oe.dispose(),_e.dispose(),ne.dispose(),Me.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Wf),ce.removeEventListener("sessionend",Xf),Cs.stop()};function He(M){M.preventDefault(),Qo("WebGLRenderer: Context Lost."),S=!0}function wt(){Qo("WebGLRenderer: Context Restored."),S=!1;let M=w.autoReset,k=me.enabled,X=me.autoUpdate,W=me.needsUpdate,V=me.type;Q(),w.autoReset=M,me.enabled=k,me.autoUpdate=X,me.needsUpdate=W,me.type=V}function mt(M){Ue("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _i(M){let k=M.target;k.removeEventListener("dispose",_i),Bi(k)}function Bi(M){C_(M),x.remove(M)}function C_(M){let k=x.get(M).programs;k!==void 0&&(k.forEach(function(X){Me.releaseProgram(X)}),M.isShaderMaterial&&Me.releaseShaderCache(M))}this.renderBufferDirect=function(M,k,X,W,V,ue){k===null&&(k=it);let ve=V.isMesh&&V.matrixWorld.determinant()<0,pe=P_(M,k,X,W,V);re.setMaterial(W,ve);let be=X.index,Ae=1;if(W.wireframe===!0){if(be=Te.getWireframeAttribute(X),be===void 0)return;Ae=2}let Fe=X.drawRange,Ie=X.attributes.position,st=Fe.start*Ae,yt=(Fe.start+Fe.count)*Ae;ue!==null&&(st=Math.max(st,ue.start*Ae),yt=Math.min(yt,(ue.start+ue.count)*Ae)),be!==null?(st=Math.max(st,0),yt=Math.min(yt,be.count)):Ie!=null&&(st=Math.max(st,0),yt=Math.min(yt,Ie.count));let Ut=yt-st;if(Ut<0||Ut===1/0)return;_e.setup(V,W,pe,X,be);let Ft,bt=N;if(be!==null&&(Ft=q.get(be),bt=te,bt.setIndex(Ft)),V.isMesh)W.wireframe===!0?(re.setLineWidth(W.wireframeLinewidth*ht()),bt.setMode(I.LINES)):bt.setMode(I.TRIANGLES);else if(V.isLine){let Pe=W.linewidth;Pe===void 0&&(Pe=1),re.setLineWidth(Pe*ht()),V.isLineSegments?bt.setMode(I.LINES):V.isLineLoop?bt.setMode(I.LINE_LOOP):bt.setMode(I.LINE_STRIP)}else V.isPoints?bt.setMode(I.POINTS):V.isSprite&&bt.setMode(I.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)Yr("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),bt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))bt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{let Pe=V._multiDrawStarts,gt=V._multiDrawCounts,ut=V._multiDrawCount,Fn=be?q.get(be).bytesPerElement:1,gr=x.get(W).currentProgram.getUniforms();for(let On=0;On<ut;On++)gr.setValue(I,"_gl_DrawID",On),bt.render(Pe[On]/Fn,gt[On])}else if(V.isInstancedMesh)bt.renderInstances(st,Ut,V.count);else if(X.isInstancedBufferGeometry){let Pe=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,gt=Math.min(X.instanceCount,Pe);bt.renderInstances(st,Ut,gt)}else bt.render(st,Ut)};function Gf(M,k,X){M.transparent===!0&&M.side===ei&&M.forceSinglePass===!1?(M.side=Sn,M.needsUpdate=!0,qa(M,k,X),M.side=Hn,M.needsUpdate=!0,qa(M,k,X),M.side=ei):qa(M,k,X)}this.compile=function(M,k,X=null){X===null&&(X=M),E=le.get(X),E.init(k),R.push(E),X.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),M!==X&&M.traverseVisible(function(V){V.isLight&&V.layers.test(k.layers)&&(E.pushLight(V),V.castShadow&&E.pushShadow(V))}),E.setupLights();let W=new Set;return M.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;let ue=V.material;if(ue)if(Array.isArray(ue))for(let ve=0;ve<ue.length;ve++){let pe=ue[ve];Gf(pe,X,V),W.add(pe)}else Gf(ue,X,V),W.add(ue)}),E=R.pop(),W},this.compileAsync=function(M,k,X=null){let W=this.compile(M,k,X);return new Promise(V=>{function ue(){if(W.forEach(function(ve){x.get(ve).currentProgram.isReady()&&W.delete(ve)}),W.size===0){V(M);return}setTimeout(ue,10)}Ve.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Bh=null;function I_(M){Bh&&Bh(M)}function Wf(){Cs.stop()}function Xf(){Cs.start()}let Cs=new r0;Cs.setAnimationLoop(I_),typeof self<"u"&&Cs.setContext(self),this.setAnimationLoop=function(M){Bh=M,ce.setAnimationLoop(M),M===null?Cs.stop():Cs.start()},ce.addEventListener("sessionstart",Wf),ce.addEventListener("sessionend",Xf),this.render=function(M,k){if(k!==void 0&&k.isCamera!==!0){Ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;let X=ce.enabled===!0&&ce.isPresenting===!0,W=P!==null&&(U===null||X)&&P.begin(y,U);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(k),k=ce.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,k,U),E=le.get(M,R.length),E.init(k),R.push(E),xt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),De.setFromProjectionMatrix(xt,li,k.reversedDepth),ze=this.localClippingEnabled,ge=ye.init(this.clippingPlanes,ze),b=ie.get(M,A.length),b.init(),A.push(b),ce.enabled===!0&&ce.isPresenting===!0){let ve=y.xr.getDepthSensingMesh();ve!==null&&kh(ve,k,-1/0,y.sortObjects)}kh(M,k,0,y.sortObjects),b.finish(),y.sortObjects===!0&&b.sort(Je,$e),Re=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Re&&ae.addToRenderList(b,M),this.info.render.frame++,ge===!0&&ye.beginShadows();let V=E.state.shadowsArray;if(me.render(V,M,k),ge===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){let ve=b.opaque,pe=b.transmissive;if(E.setupLights(),k.isArrayCamera){let be=k.cameras;if(pe.length>0)for(let Ae=0,Fe=be.length;Ae<Fe;Ae++){let Ie=be[Ae];Yf(ve,pe,M,Ie)}Re&&ae.render(M);for(let Ae=0,Fe=be.length;Ae<Fe;Ae++){let Ie=be[Ae];qf(b,M,Ie,Ie.viewport)}}else pe.length>0&&Yf(ve,pe,M,k),Re&&ae.render(M),qf(b,M,k)}U!==null&&D===0&&(F.updateMultisampleRenderTarget(U),F.updateRenderTargetMipmap(U)),W&&P.end(y),M.isScene===!0&&M.onAfterRender(y,M,k),_e.resetDefaultState(),L=-1,z=null,R.pop(),R.length>0?(E=R[R.length-1],ge===!0&&ye.setGlobalState(y.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function kh(M,k,X,W){if(M.visible===!1)return;if(M.layers.test(k.layers)){if(M.isGroup)X=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(k);else if(M.isLight)E.pushLight(M),M.castShadow&&E.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||De.intersectsSprite(M)){W&&We.setFromMatrixPosition(M.matrixWorld).applyMatrix4(xt);let ve=oe.update(M),pe=M.material;pe.visible&&b.push(M,ve,pe,X,We.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||De.intersectsObject(M))){let ve=oe.update(M),pe=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),We.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),We.copy(ve.boundingSphere.center)),We.applyMatrix4(M.matrixWorld).applyMatrix4(xt)),Array.isArray(pe)){let be=ve.groups;for(let Ae=0,Fe=be.length;Ae<Fe;Ae++){let Ie=be[Ae],st=pe[Ie.materialIndex];st&&st.visible&&b.push(M,ve,st,X,We.z,Ie)}}else pe.visible&&b.push(M,ve,pe,X,We.z,null)}}let ue=M.children;for(let ve=0,pe=ue.length;ve<pe;ve++)kh(ue[ve],k,X,W)}function qf(M,k,X,W){let{opaque:V,transmissive:ue,transparent:ve}=M;E.setupLightsView(X),ge===!0&&ye.setGlobalState(y.clippingPlanes,X),W&&re.viewport(O.copy(W)),V.length>0&&Xa(V,k,X),ue.length>0&&Xa(ue,k,X),ve.length>0&&Xa(ve,k,X),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function Yf(M,k,X,W){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){let st=Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Gn(1,1,{generateMipmaps:!0,type:st?Mn:Nn,minFilter:ti,samples:lt.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace})}let ue=E.state.transmissionRenderTarget[W.id],ve=W.viewport||O;ue.setSize(ve.z*y.transmissionResolutionScale,ve.w*y.transmissionResolutionScale);let pe=y.getRenderTarget(),be=y.getActiveCubeFace(),Ae=y.getActiveMipmapLevel();y.setRenderTarget(ue),y.getClearColor(G),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Re&&ae.render(X);let Fe=y.toneMapping;y.toneMapping=mi;let Ie=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),ge===!0&&ye.setGlobalState(y.clippingPlanes,W),Xa(M,X,W),F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let st=!1;for(let yt=0,Ut=k.length;yt<Ut;yt++){let Ft=k[yt],{object:bt,geometry:Pe,material:gt,group:ut}=Ft;if(gt.side===ei&&bt.layers.test(W.layers)){let Fn=gt.side;gt.side=Sn,gt.needsUpdate=!0,$f(bt,X,W,Pe,gt,ut),gt.side=Fn,gt.needsUpdate=!0,st=!0}}st===!0&&(F.updateMultisampleRenderTarget(ue),F.updateRenderTargetMipmap(ue))}y.setRenderTarget(pe,be,Ae),y.setClearColor(G,K),Ie!==void 0&&(W.viewport=Ie),y.toneMapping=Fe}function Xa(M,k,X){let W=k.isScene===!0?k.overrideMaterial:null;for(let V=0,ue=M.length;V<ue;V++){let ve=M[V],{object:pe,geometry:be,group:Ae}=ve,Fe=ve.material;Fe.allowOverride===!0&&W!==null&&(Fe=W),pe.layers.test(X.layers)&&$f(pe,k,X,be,Fe,Ae)}}function $f(M,k,X,W,V,ue){M.onBeforeRender(y,k,X,W,V,ue),M.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),V.onBeforeRender(y,k,X,W,M,ue),V.transparent===!0&&V.side===ei&&V.forceSinglePass===!1?(V.side=Sn,V.needsUpdate=!0,y.renderBufferDirect(X,k,W,V,M,ue),V.side=Hn,V.needsUpdate=!0,y.renderBufferDirect(X,k,W,V,M,ue),V.side=ei):y.renderBufferDirect(X,k,W,V,M,ue),M.onAfterRender(y,k,X,W,V,ue)}function qa(M,k,X){k.isScene!==!0&&(k=it);let W=x.get(M),V=E.state.lights,ue=E.state.shadowsArray,ve=V.state.version,pe=Me.getParameters(M,V.state,ue,k,X),be=Me.getProgramCacheKey(pe),Ae=W.programs;W.environment=M.isMeshStandardMaterial?k.environment:null,W.fog=k.fog,W.envMap=(M.isMeshStandardMaterial?j:Z).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?k.environmentRotation:M.envMapRotation,Ae===void 0&&(M.addEventListener("dispose",_i),Ae=new Map,W.programs=Ae);let Fe=Ae.get(be);if(Fe!==void 0){if(W.currentProgram===Fe&&W.lightsStateVersion===ve)return Kf(M,pe),Fe}else pe.uniforms=Me.getUniforms(M),M.onBeforeCompile(pe,y),Fe=Me.acquireProgram(pe,be),Ae.set(be,Fe),W.uniforms=pe.uniforms;let Ie=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ie.clippingPlanes=ye.uniform),Kf(M,pe),W.needsLights=D_(M),W.lightsStateVersion=ve,W.needsLights&&(Ie.ambientLightColor.value=V.state.ambient,Ie.lightProbe.value=V.state.probe,Ie.directionalLights.value=V.state.directional,Ie.directionalLightShadows.value=V.state.directionalShadow,Ie.spotLights.value=V.state.spot,Ie.spotLightShadows.value=V.state.spotShadow,Ie.rectAreaLights.value=V.state.rectArea,Ie.ltc_1.value=V.state.rectAreaLTC1,Ie.ltc_2.value=V.state.rectAreaLTC2,Ie.pointLights.value=V.state.point,Ie.pointLightShadows.value=V.state.pointShadow,Ie.hemisphereLights.value=V.state.hemi,Ie.directionalShadowMap.value=V.state.directionalShadowMap,Ie.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ie.spotShadowMap.value=V.state.spotShadowMap,Ie.spotLightMatrix.value=V.state.spotLightMatrix,Ie.spotLightMap.value=V.state.spotLightMap,Ie.pointShadowMap.value=V.state.pointShadowMap,Ie.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Fe,W.uniformsList=null,Fe}function Zf(M){if(M.uniformsList===null){let k=M.currentProgram.getUniforms();M.uniformsList=ho.seqWithValue(k.seq,M.uniforms)}return M.uniformsList}function Kf(M,k){let X=x.get(M);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function P_(M,k,X,W,V){k.isScene!==!0&&(k=it),F.resetTextureUnits();let ue=k.fog,ve=W.isMeshStandardMaterial?k.environment:null,pe=U===null?y.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:Yt,be=(W.isMeshStandardMaterial?j:Z).get(W.envMap||ve),Ae=W.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ie=!!X.morphAttributes.position,st=!!X.morphAttributes.normal,yt=!!X.morphAttributes.color,Ut=mi;W.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Ut=y.toneMapping);let Ft=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,bt=Ft!==void 0?Ft.length:0,Pe=x.get(W),gt=E.state.lights;if(ge===!0&&(ze===!0||M!==z)){let mn=M===z&&W.id===L;ye.setState(W,M,mn)}let ut=!1;W.version===Pe.__version?(Pe.needsLights&&Pe.lightsStateVersion!==gt.state.version||Pe.outputColorSpace!==pe||V.isBatchedMesh&&Pe.batching===!1||!V.isBatchedMesh&&Pe.batching===!0||V.isBatchedMesh&&Pe.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Pe.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Pe.instancing===!1||!V.isInstancedMesh&&Pe.instancing===!0||V.isSkinnedMesh&&Pe.skinning===!1||!V.isSkinnedMesh&&Pe.skinning===!0||V.isInstancedMesh&&Pe.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Pe.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Pe.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Pe.instancingMorph===!1&&V.morphTexture!==null||Pe.envMap!==be||W.fog===!0&&Pe.fog!==ue||Pe.numClippingPlanes!==void 0&&(Pe.numClippingPlanes!==ye.numPlanes||Pe.numIntersection!==ye.numIntersection)||Pe.vertexAlphas!==Ae||Pe.vertexTangents!==Fe||Pe.morphTargets!==Ie||Pe.morphNormals!==st||Pe.morphColors!==yt||Pe.toneMapping!==Ut||Pe.morphTargetsCount!==bt)&&(ut=!0):(ut=!0,Pe.__version=W.version);let Fn=Pe.currentProgram;ut===!0&&(Fn=qa(W,k,V));let gr=!1,On=!1,go=!1,At=Fn.getUniforms(),bn=Pe.uniforms;if(re.useProgram(Fn.program)&&(gr=!0,On=!0,go=!0),W.id!==L&&(L=W.id,On=!0),gr||z!==M){re.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),At.setValue(I,"projectionMatrix",M.projectionMatrix),At.setValue(I,"viewMatrix",M.matrixWorldInverse);let Tn=At.map.cameraPosition;Tn!==void 0&&Tn.setValue(I,Le.setFromMatrixPosition(M.matrixWorld)),lt.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&At.setValue(I,"isOrthographic",M.isOrthographicCamera===!0),z!==M&&(z=M,On=!0,go=!0)}if(Pe.needsLights&&(gt.state.directionalShadowMap.length>0&&At.setValue(I,"directionalShadowMap",gt.state.directionalShadowMap,F),gt.state.spotShadowMap.length>0&&At.setValue(I,"spotShadowMap",gt.state.spotShadowMap,F),gt.state.pointShadowMap.length>0&&At.setValue(I,"pointShadowMap",gt.state.pointShadowMap,F)),V.isSkinnedMesh){At.setOptional(I,V,"bindMatrix"),At.setOptional(I,V,"bindMatrixInverse");let mn=V.skeleton;mn&&(mn.boneTexture===null&&mn.computeBoneTexture(),At.setValue(I,"boneTexture",mn.boneTexture,F))}V.isBatchedMesh&&(At.setOptional(I,V,"batchingTexture"),At.setValue(I,"batchingTexture",V._matricesTexture,F),At.setOptional(I,V,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",V._indirectTexture,F),At.setOptional(I,V,"batchingColorTexture"),V._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",V._colorsTexture,F));let Yn=X.morphAttributes;if((Yn.position!==void 0||Yn.normal!==void 0||Yn.color!==void 0)&&qe.update(V,X,Fn),(On||Pe.receiveShadow!==V.receiveShadow)&&(Pe.receiveShadow=V.receiveShadow,At.setValue(I,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(bn.envMap.value=be,bn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&k.environment!==null&&(bn.envMapIntensity.value=k.environmentIntensity),bn.dfgLUT!==void 0&&(bn.dfgLUT.value=oT()),On&&(At.setValue(I,"toneMappingExposure",y.toneMappingExposure),Pe.needsLights&&L_(bn,go),ue&&W.fog===!0&&Ce.refreshFogUniforms(bn,ue),Ce.refreshMaterialUniforms(bn,W,Se,xe,E.state.transmissionRenderTarget[M.id]),ho.upload(I,Zf(Pe),bn,F)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(ho.upload(I,Zf(Pe),bn,F),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&At.setValue(I,"center",V.center),At.setValue(I,"modelViewMatrix",V.modelViewMatrix),At.setValue(I,"normalMatrix",V.normalMatrix),At.setValue(I,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){let mn=W.uniformsGroups;for(let Tn=0,zh=mn.length;Tn<zh;Tn++){let Is=mn[Tn];ne.update(Is,Fn),ne.bind(Is,Fn)}}return Fn}function L_(M,k){M.ambientLightColor.needsUpdate=k,M.lightProbe.needsUpdate=k,M.directionalLights.needsUpdate=k,M.directionalLightShadows.needsUpdate=k,M.pointLights.needsUpdate=k,M.pointLightShadows.needsUpdate=k,M.spotLights.needsUpdate=k,M.spotLightShadows.needsUpdate=k,M.rectAreaLights.needsUpdate=k,M.hemisphereLights.needsUpdate=k}function D_(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(M,k,X){let W=x.get(M);W.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),x.get(M.texture).__webglTexture=k,x.get(M.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:X,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,k){let X=x.get(M);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0};let N_=I.createFramebuffer();this.setRenderTarget=function(M,k=0,X=0){U=M,C=k,D=X;let W=null,V=!1,ue=!1;if(M){let pe=x.get(M);if(pe.__useDefaultFramebuffer!==void 0){re.bindFramebuffer(I.FRAMEBUFFER,pe.__webglFramebuffer),O.copy(M.viewport),H.copy(M.scissor),Y=M.scissorTest,re.viewport(O),re.scissor(H),re.setScissorTest(Y),L=-1;return}else if(pe.__webglFramebuffer===void 0)F.setupRenderTarget(M);else if(pe.__hasExternalTextures)F.rebindTextures(M,x.get(M.texture).__webglTexture,x.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Fe=M.depthTexture;if(pe.__boundDepthTexture!==Fe){if(Fe!==null&&x.has(Fe)&&(M.width!==Fe.image.width||M.height!==Fe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");F.setupDepthRenderbuffer(M)}}let be=M.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(ue=!0);let Ae=x.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ae[k])?W=Ae[k][X]:W=Ae[k],V=!0):M.samples>0&&F.useMultisampledRTT(M)===!1?W=x.get(M).__webglMultisampledFramebuffer:Array.isArray(Ae)?W=Ae[X]:W=Ae,O.copy(M.viewport),H.copy(M.scissor),Y=M.scissorTest}else O.copy($).multiplyScalar(Se).floor(),H.copy(J).multiplyScalar(Se).floor(),Y=he;if(X!==0&&(W=N_),re.bindFramebuffer(I.FRAMEBUFFER,W)&&re.drawBuffers(M,W),re.viewport(O),re.scissor(H),re.setScissorTest(Y),V){let pe=x.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,pe.__webglTexture,X)}else if(ue){let pe=k;for(let be=0;be<M.textures.length;be++){let Ae=x.get(M.textures[be]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+be,Ae.__webglTexture,X,pe)}}else if(M!==null&&X!==0){let pe=x.get(M.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,pe.__webglTexture,X)}L=-1},this.readRenderTargetPixels=function(M,k,X,W,V,ue,ve,pe=0){if(!(M&&M.isWebGLRenderTarget)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be){re.bindFramebuffer(I.FRAMEBUFFER,be);try{let Ae=M.textures[pe],Fe=Ae.format,Ie=Ae.type;if(!lt.textureFormatReadable(Fe)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(Ie)){Ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=M.width-W&&X>=0&&X<=M.height-V&&(M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(k,X,W,V,ee.convert(Fe),ee.convert(Ie),ue))}finally{let Ae=U!==null?x.get(U).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(M,k,X,W,V,ue,ve,pe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=x.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(be=be[ve]),be)if(k>=0&&k<=M.width-W&&X>=0&&X<=M.height-V){re.bindFramebuffer(I.FRAMEBUFFER,be);let Ae=M.textures[pe],Fe=Ae.format,Ie=Ae.type;if(!lt.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let st=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.bufferData(I.PIXEL_PACK_BUFFER,ue.byteLength,I.STREAM_READ),M.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+pe),I.readPixels(k,X,W,V,ee.convert(Fe),ee.convert(Ie),0);let yt=U!==null?x.get(U).__webglFramebuffer:null;re.bindFramebuffer(I.FRAMEBUFFER,yt);let Ut=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Lg(I,Ut,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,st),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,ue),I.deleteBuffer(st),I.deleteSync(Ut),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,k=null,X=0){let W=Math.pow(2,-X),V=Math.floor(M.image.width*W),ue=Math.floor(M.image.height*W),ve=k!==null?k.x:0,pe=k!==null?k.y:0;F.setTexture2D(M,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,ve,pe,V,ue),re.unbindTexture()};let U_=I.createFramebuffer(),F_=I.createFramebuffer();this.copyTextureToTexture=function(M,k,X=null,W=null,V=0,ue=null){ue===null&&(V!==0?(Yr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ue=V,V=0):ue=0);let ve,pe,be,Ae,Fe,Ie,st,yt,Ut,Ft=M.isCompressedTexture?M.mipmaps[ue]:M.image;if(X!==null)ve=X.max.x-X.min.x,pe=X.max.y-X.min.y,be=X.isBox3?X.max.z-X.min.z:1,Ae=X.min.x,Fe=X.min.y,Ie=X.isBox3?X.min.z:0;else{let Yn=Math.pow(2,-V);ve=Math.floor(Ft.width*Yn),pe=Math.floor(Ft.height*Yn),M.isDataArrayTexture?be=Ft.depth:M.isData3DTexture?be=Math.floor(Ft.depth*Yn):be=1,Ae=0,Fe=0,Ie=0}W!==null?(st=W.x,yt=W.y,Ut=W.z):(st=0,yt=0,Ut=0);let bt=ee.convert(k.format),Pe=ee.convert(k.type),gt;k.isData3DTexture?(F.setTexture3D(k,0),gt=I.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(F.setTexture2DArray(k,0),gt=I.TEXTURE_2D_ARRAY):(F.setTexture2D(k,0),gt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);let ut=I.getParameter(I.UNPACK_ROW_LENGTH),Fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gr=I.getParameter(I.UNPACK_SKIP_PIXELS),On=I.getParameter(I.UNPACK_SKIP_ROWS),go=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ft.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ft.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ae),I.pixelStorei(I.UNPACK_SKIP_ROWS,Fe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ie);let At=M.isDataArrayTexture||M.isData3DTexture,bn=k.isDataArrayTexture||k.isData3DTexture;if(M.isDepthTexture){let Yn=x.get(M),mn=x.get(k),Tn=x.get(Yn.__renderTarget),zh=x.get(mn.__renderTarget);re.bindFramebuffer(I.READ_FRAMEBUFFER,Tn.__webglFramebuffer),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,zh.__webglFramebuffer);for(let Is=0;Is<be;Is++)At&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,x.get(M).__webglTexture,V,Ie+Is),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,x.get(k).__webglTexture,ue,Ut+Is)),I.blitFramebuffer(Ae,Fe,ve,pe,st,yt,ve,pe,I.DEPTH_BUFFER_BIT,I.NEAREST);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(V!==0||M.isRenderTargetTexture||x.has(M)){let Yn=x.get(M),mn=x.get(k);re.bindFramebuffer(I.READ_FRAMEBUFFER,U_),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,F_);for(let Tn=0;Tn<be;Tn++)At?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Yn.__webglTexture,V,Ie+Tn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Yn.__webglTexture,V),bn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,ue,Ut+Tn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,ue),V!==0?I.blitFramebuffer(Ae,Fe,ve,pe,st,yt,ve,pe,I.COLOR_BUFFER_BIT,I.NEAREST):bn?I.copyTexSubImage3D(gt,ue,st,yt,Ut+Tn,Ae,Fe,ve,pe):I.copyTexSubImage2D(gt,ue,st,yt,Ae,Fe,ve,pe);re.bindFramebuffer(I.READ_FRAMEBUFFER,null),re.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else bn?M.isDataTexture||M.isData3DTexture?I.texSubImage3D(gt,ue,st,yt,Ut,ve,pe,be,bt,Pe,Ft.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(gt,ue,st,yt,Ut,ve,pe,be,bt,Ft.data):I.texSubImage3D(gt,ue,st,yt,Ut,ve,pe,be,bt,Pe,Ft):M.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ue,st,yt,ve,pe,bt,Pe,Ft.data):M.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ue,st,yt,Ft.width,Ft.height,bt,Ft.data):I.texSubImage2D(I.TEXTURE_2D,ue,st,yt,ve,pe,bt,Pe,Ft);I.pixelStorei(I.UNPACK_ROW_LENGTH,ut),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gr),I.pixelStorei(I.UNPACK_SKIP_ROWS,On),I.pixelStorei(I.UNPACK_SKIP_IMAGES,go),ue===0&&k.generateMipmaps&&I.generateMipmap(gt),re.unbindTexture()},this.initRenderTarget=function(M){x.get(M).__webglFramebuffer===void 0&&F.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?F.setTextureCube(M,0):M.isData3DTexture?F.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?F.setTexture2DArray(M,0):F.setTexture2D(M,0),re.unbindTexture()},this.resetState=function(){C=0,D=0,U=null,re.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}});function lT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function cT(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function hT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(f0),this.state=Mt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function uT(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ms.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Mt.DOLLY;break;case Ms.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}break;case Ms.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Mt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Mt.PAN}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Kd)}function dT(i){switch(this.state){case Mt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Mt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Mt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function fT(i){this.enabled===!1||this.enableZoom===!1||this.state!==Mt.NONE||(i.preventDefault(),this.dispatchEvent(Kd),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(f0))}function pT(i){this.enabled!==!1&&this._handleKeyDown(i)}function mT(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case bs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Mt.TOUCH_ROTATE;break;case bs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Mt.TOUCH_PAN;break;default:this.state=Mt.NONE}break;case 2:switch(this.touches.TWO){case bs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Mt.TOUCH_DOLLY_PAN;break;case bs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Mt.TOUCH_DOLLY_ROTATE;break;default:this.state=Mt.NONE}break;default:this.state=Mt.NONE}this.state!==Mt.NONE&&this.dispatchEvent(Kd)}function gT(i){switch(this._trackPointer(i),this.state){case Mt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Mt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Mt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Mt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Mt.NONE}}function _T(i){this.enabled!==!1&&i.preventDefault()}function xT(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function yT(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var u0,Kd,f0,Eh,d0,aT,Kt,Un,Mt,Zd,wh,p0=Ee(()=>{fr();u0={type:"change"},Kd={type:"start"},f0={type:"end"},Eh=new es,d0=new Qn,aT=Math.cos(70*Fa.DEG2RAD),Kt=new B,Un=2*Math.PI,Mt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Zd=1e-6,wh=class extends Aa{constructor(e,t=null){super(e,t),this.state=Mt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ms.ROTATE,MIDDLE:Ms.DOLLY,RIGHT:Ms.PAN},this.touches={ONE:bs.ROTATE,TWO:bs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Qt,this._lastTargetPosition=new B,this._quat=new Qt().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new io,this._sphericalDelta=new io,this._scale=1,this._panOffset=new B,this._rotateStart=new Be,this._rotateEnd=new Be,this._rotateDelta=new Be,this._panStart=new Be,this._panEnd=new Be,this._panDelta=new Be,this._dollyStart=new Be,this._dollyEnd=new Be,this._dollyDelta=new Be,this._dollyDirection=new B,this._mouse=new Be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=cT.bind(this),this._onPointerDown=lT.bind(this),this._onPointerUp=hT.bind(this),this._onContextMenu=_T.bind(this),this._onMouseWheel=fT.bind(this),this._onKeyDown=pT.bind(this),this._onTouchStart=mT.bind(this),this._onTouchMove=gT.bind(this),this._onMouseDown=uT.bind(this),this._onMouseMove=dT.bind(this),this._interceptControlDown=xT.bind(this),this._interceptControlUp=yT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(u0),this.update(),this.state=Mt.NONE}update(e=null){let t=this.object.position;Kt.copy(t).sub(this.target),Kt.applyQuaternion(this._quat),this._spherical.setFromVector3(Kt),this.autoRotate&&this.state===Mt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Un:n>Math.PI&&(n-=Un),s<-Math.PI?s+=Un:s>Math.PI&&(s-=Un),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Kt.setFromSpherical(this._spherical),Kt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Kt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Kt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Kt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Eh.origin.copy(this.object.position),Eh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Eh.direction))<aT?this.object.lookAt(this.target):(d0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Eh.intersectPlane(d0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Zd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Zd||this._lastTargetPosition.distanceToSquared(this.target)>Zd?(this.dispatchEvent(u0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Un/60*this.autoRotateSpeed*e:Un/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Kt.setFromMatrixColumn(t,0),Kt.multiplyScalar(-e),this._panOffset.add(Kt)}_panUp(e,t){this.screenSpacePanning===!0?Kt.setFromMatrixColumn(t,1):(Kt.setFromMatrixColumn(t,0),Kt.crossVectors(this.object.up,Kt)),Kt.multiplyScalar(e),this._panOffset.add(Kt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Kt.copy(s).sub(this.target);let r=Kt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Un*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Un*this._rotateDelta.x/t.clientHeight),this._rotateUp(Un*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Be,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function Jd(i,e){if(e===Td)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===lo||e===Ua){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===lo)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var m0=Ee(()=>{fr()});function vT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function bT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new er({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hn})),i.DefaultMaterial}function pr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function TT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function ET(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function wT(i){let e,t=i.extensions&&i.extensions[at.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ef(t.attributes):e=i.indices+":"+ef(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+ef(i.targets[n]);return e}function ef(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function wf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function AT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function CT(i,e,t){let n=e.attributes,s=new Wn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){let h=wf(po[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new B,l=new B;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){let _=wf(po[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new In;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function y0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Ef[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return ot.workingColorSpace!==Yt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ot.workingColorSpace}" not supported.`),Oi(i,e),CT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?TT(i,e.targets,t):i})}var Ah,at,tf,nf,sf,rf,of,af,lf,cf,hf,uf,df,ff,pf,mf,gf,_f,xf,yf,v0,za,g0,vf,Sf,Mf,bf,Rh,ST,Tf,ni,po,_0,x0,jd,Ef,As,MT,Qd,RT,Af,S0=Ee(()=>{fr();m0();Ah=class extends pi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new rf(t)}),this.register(function(t){return new of(t)}),this.register(function(t){return new mf(t)}),this.register(function(t){return new gf(t)}),this.register(function(t){return new _f(t)}),this.register(function(t){return new lf(t)}),this.register(function(t){return new cf(t)}),this.register(function(t){return new hf(t)}),this.register(function(t){return new uf(t)}),this.register(function(t){return new sf(t)}),this.register(function(t){return new df(t)}),this.register(function(t){return new af(t)}),this.register(function(t){return new pf(t)}),this.register(function(t){return new ff(t)}),this.register(function(t){return new tf(t)}),this.register(function(t){return new xf(t)}),this.register(function(t){return new yf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=ss.extractUrlBase(e);o=ss.resolveURL(c,this.path)}else o=ss.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new nr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===v0){try{o[at.KHR_BINARY_GLTF]=new vf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[at.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Af(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case at.KHR_MATERIALS_UNLIT:o[u]=new nf;break;case at.KHR_DRACO_MESH_COMPRESSION:o[u]=new Sf(r,this.dracoLoader);break;case at.KHR_TEXTURE_TRANSFORM:o[u]=new Mf;break;case at.KHR_MESH_QUANTIZATION:o[u]=new bf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};at={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},tf=class{constructor(e){this.parser=e,this.name=at.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new ke(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Yt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ma(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Sa(h),c.distance=u;break;case"spot":c=new sr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},nf=class{constructor(){this.name=at.KHR_MATERIALS_UNLIT}getMaterialType(){return fi}extendParams(e,t,n){let s=[];e.color=new ke(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Yt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Bt))}return Promise.all(s)}},sf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},rf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}},of=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},af=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},lf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new ke(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Yt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Bt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},cf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},hf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new ke().setRGB(a[0],a[1],a[2],Yt),Promise.all(r)}},uf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},df=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new ke().setRGB(a[0],a[1],a[2],Yt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Bt)),Promise.all(r)}},ff=class{constructor(e){this.parser=e,this.name=at.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},pf=class{constructor(e){this.parser=e,this.name=at.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},mf=class{constructor(e){this.parser=e,this.name=at.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},gf=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},_f=class{constructor(e){this.parser=e,this.name=at.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},xf=class{constructor(e){this.name=at.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){let p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}},yf=class{constructor(e){this.name=at.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==ni.TRIANGLES&&c.mode!==ni.TRIANGLE_STRIP&&c.mode!==ni.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(let g of u){let _=new Ke,m=new B,f=new Qt,v=new B(1,1,1),T=new ha(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&v.fromBufferAttribute(l.SCALE,b),T.setMatrixAt(b,_.compose(m,f,v));for(let b in l)if(b==="_COLOR_0"){let E=l[b];T.instanceColor=new vs(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);Nt.prototype.copy.call(T,g),this.parser.assignFinalMaterial(T),p.push(T)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}},v0="glTF",za=12,g0={JSON:1313821514,BIN:5130562},vf=class{constructor(e){this.name=at.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,za),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==v0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-za,r=new DataView(e,za),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===g0.JSON){let c=new Uint8Array(e,za+o,a);this.content=n.decode(c)}else if(l===g0.BIN){let c=za+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Sf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=at.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Ef[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Ef[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],p=po[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(let g in p.attributes){let _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,Yt,d)})})}},Mf=class{constructor(){this.name=at.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},bf=class{constructor(){this.name=at.KHR_MESH_QUANTIZATION}},Rh=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,v=1-m,T=f-d+u;for(let b=0;b!==a;b++){let E=o[_+b+a],A=o[_+b+l]*h,R=o[g+b+a],P=o[g+b]*h;r[b]=v*E+T*A+m*R+f*P}return r}},ST=new Qt,Tf=class extends Rh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return ST.fromArray(r).normalize().toArray(r),r}},ni={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},po={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},_0={9728:kt,9729:Et,9984:Ic,9985:ro,9986:ar,9987:ti},x0={33071:Cn,33648:Wr,10497:xs},jd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ef={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},As={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},MT={CUBICSPLINE:void 0,LINEAR:Ks,STEP:Zs},Qd={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};RT=new Ke,Af=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new vT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new ya(this.options.manager):this.textureLoader=new Ta(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new nr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return pr(r,a,s),Oi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[at.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(ss.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=jd[s.type],a=po[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Gt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=jd[s.type],c=po[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,_,m;if(p&&p!==u){let f=Math.floor(d/p),v="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count,T=t.cache.get(v);T||(_=new c(a,f*p,s.count*p/h),T=new Jr(_,p/h),t.cache.add(v,T)),m=new jr(T,l,d%p/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Gt(_,l,g);if(s.sparse!==void 0){let f=jd.SCALAR,v=po[s.sparse.indices.componentType],T=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,E=new v(o[1],T,s.sparse.count*f),A=new c(o[2],b,s.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let R=0,P=E.length;R<P;R++){let y=E[R];if(m.setX(y,A[R*l]),l>=2&&m.setY(y,A[R*l+1]),l>=3&&m.setZ(y,A[R*l+2]),l>=4&&m.setW(y,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=_0[d.magFilter]||Et,h.minFilter=_0[d.minFilter]||ti,h.wrapS=x0[d.wrapS]||xs,h.wrapT=x0[d.wrapT]||xs,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==kt&&h.minFilter!==Et,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){let m=new en(_);m.needsUpdate=!0,d(m)}),t.load(ss.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Oi(u,o),u.userData.mimeType=o.mimeType||AT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[at.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[at.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[at.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new no,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new to,Pn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return er}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[at.KHR_MATERIALS_UNLIT]){let u=s[at.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new ke(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Yt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Bt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=ei);let h=r.alphaMode||Qd.OPAQUE;if(h===Qd.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Qd.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==fi&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==fi&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==fi){let u=r.emissiveFactor;a.emissive=new ke().setRGB(u[0],u[1],u[2],Yt)}return r.emissiveTexture!==void 0&&o!==fi&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Bt)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Oi(u,r),t.associations.set(u,{materials:e}),r.extensions&&pr(s,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[at.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return y0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=wT(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[at.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=y0(new vn,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?bT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){let _=h[p],m=o[p],f,v=c[p];if(m.mode===ni.TRIANGLES||m.mode===ni.TRIANGLE_STRIP||m.mode===ni.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new la(_,v):new on(_,v),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===ni.TRIANGLE_STRIP?f.geometry=Jd(f.geometry,Ua):m.mode===ni.TRIANGLE_FAN&&(f.geometry=Jd(f.geometry,lo));else if(m.mode===ni.LINES)f=new ua(_,v);else if(m.mode===ni.LINE_STRIP)f=new Qs(_,v);else if(m.mode===ni.LINE_LOOP)f=new da(_,v);else if(m.mode===ni.POINTS)f=new fa(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&ET(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Oi(f,r),m.extensions&&pr(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&pr(s,u[0],r),u[0];let d=new ci;r.extensions&&pr(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new jt(Fa.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Di(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new Ke;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ca(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,v=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",v)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let T=0,b=d.length;T<b;T++){let E=d[T],A=p[T],R=g[T],P=_[T],y=m[T];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let S=n._createAnimationTracks(E,A,R,P,y);if(S)for(let C=0;C<S.length;C++)f.push(S[C])}let v=new tr(r,void 0,f);return Oi(v,s),v})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,RT)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new Qr:c.length>1?h=new ci:c.length===1?h=c[0]:h=new Nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Oi(h,r),r.extensions&&pr(n,h,r),r.matrix!==void 0){let u=new Ke;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new ci;n.name&&(r.name=s.createUniqueName(n.name)),Oi(r,n),n.extensions&&pr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,p]of s.associations)(d instanceof Pn||d instanceof en)&&u.set(d,p);return h.traverse(d=>{let p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];As[r.path]===As.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(As[r.path]){case As.weights:c=Ii;break;case As.rotation:c=Pi;break;case As.translation:case As.scale:c=Li;break;default:n.itemSize===1?c=Ii:c=Li;break}let h=s.interpolation!==void 0?MT[s.interpolation]:Ks,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){let g=new c(l[d]+"."+As[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=wf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Pi?Tf:Rh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Ch,M0=Ee(()=>{fr();Ch=class extends xa{constructor(e){super(e),this.type=Mn}parse(e){let o=function(P,y){switch(P){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(y||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(y||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(y||""))}},u=function(P,y,S){y=y||1024;let D=P.pos,U=-1,L=0,z="",O=String.fromCharCode.apply(null,new Uint16Array(P.subarray(D,D+128)));for(;0>(U=O.indexOf(`
`))&&L<y&&D<P.byteLength;)z+=O,L+=O.length,D+=128,O+=String.fromCharCode.apply(null,new Uint16Array(P.subarray(D,D+128)));return-1<U?(S!==!1&&(P.pos+=L+U+1),z+O.slice(0,U)):!1},d=function(P){let y=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,L={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},z,O;for((P.pos>=P.byteLength||!(z=u(P)))&&o(1,"no header found"),(O=z.match(y))||o(3,"bad initial token"),L.valid|=1,L.programtype=O[1],L.string+=z+`
`;z=u(P),z!==!1;){if(L.string+=z+`
`,z.charAt(0)==="#"){L.comments+=z+`
`;continue}if((O=z.match(S))&&(L.gamma=parseFloat(O[1])),(O=z.match(C))&&(L.exposure=parseFloat(O[1])),(O=z.match(D))&&(L.valid|=2,L.format=O[1]),(O=z.match(U))&&(L.valid|=4,L.height=parseInt(O[1],10),L.width=parseInt(O[2],10)),L.valid&2&&L.valid&4)break}return L.valid&2||o(3,"missing format specifier"),L.valid&4||o(3,"missing image size specifier"),L},p=function(P,y,S){let C=y;if(C<8||C>32767||P[0]!==2||P[1]!==2||P[2]&128)return new Uint8Array(P);C!==(P[2]<<8|P[3])&&o(3,"wrong scanline width");let D=new Uint8Array(4*y*S);D.length||o(4,"unable to allocate buffer space");let U=0,L=0,z=4*C,O=new Uint8Array(4),H=new Uint8Array(z),Y=S;for(;Y>0&&L<P.byteLength;){L+4>P.byteLength&&o(1),O[0]=P[L++],O[1]=P[L++],O[2]=P[L++],O[3]=P[L++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=C)&&o(3,"bad rgbe scanline format");let G=0,K;for(;G<z&&L<P.byteLength;){K=P[L++];let xe=K>128;if(xe&&(K-=128),(K===0||G+K>z)&&o(3,"bad scanline data"),xe){let Se=P[L++];for(let Je=0;Je<K;Je++)H[G++]=Se}else H.set(P.subarray(L,L+K),G),G+=K,L+=K}let se=C;for(let xe=0;xe<se;xe++){let Se=0;D[U]=H[xe+Se],Se+=C,D[U+1]=H[xe+Se],Se+=C,D[U+2]=H[xe+Se],Se+=C,D[U+3]=H[xe+Se],U+=4}Y--}return D},g=function(P,y,S,C){let D=P[y+3],U=Math.pow(2,D-128)/255;S[C+0]=P[y+0]*U,S[C+1]=P[y+1]*U,S[C+2]=P[y+2]*U,S[C+3]=1},_=function(P,y,S,C){let D=P[y+3],U=Math.pow(2,D-128)/255;S[C+0]=ys.toHalfFloat(Math.min(P[y+0]*U,65504)),S[C+1]=ys.toHalfFloat(Math.min(P[y+1]*U,65504)),S[C+2]=ys.toHalfFloat(Math.min(P[y+2]*U,65504)),S[C+3]=ys.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let f=d(m),v=f.width,T=f.height,b=p(m.subarray(m.pos),v,T),E,A,R;switch(this.type){case an:R=b.length/4;let P=new Float32Array(R*4);for(let S=0;S<R;S++)g(b,S*4,P,S*4);E=P,A=an;break;case Mn:R=b.length/4;let y=new Uint16Array(R*4);for(let S=0;S<R;S++)_(b,S*4,y,S*4);E=y,A=Mn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:v,height:T,data:E,header:f.string,gamma:f.gamma,exposure:f.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case an:case Mn:o.colorSpace=Yt,o.minFilter=Et,o.magFilter=Et,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}});function b0(i){let{scene:e,color:t,strength:n,position:s,delayIntensity:r,noShadow:o}=i,a=new sr(t,r?0:n);return a.position.copy(s),a.lookAt(0,0,-1),e.add(a.target),a.angle=Math.PI/4,a.penumbra=.7,a.distance=30,o||(a.castShadow=!0,a.shadow.mapSize.set(5200,5200),a.shadow.camera.near=.5,a.shadow.camera.far=50,a.shadow.normalBias=.02,a.shadow.camera.fov=60),r&&setTimeout(()=>{a.intensity=n},5e3),a}var T0=Ee(()=>{"use strict";fr()});var A0={};Ya(A0,{animateModel:()=>If,playAnimationModel:()=>Dh,stopAnimationModel:()=>Lh});function Lh(){Cf.stop(),cancelAnimationFrame(w0),Ph=!1}function Dh(){Ph||(Cf.start(),Rf?.(),Ph=!0)}function If(){Va?.classList.add("show"),IT.observe(Va)}var w0,Ih,Ph,Rf,E0,Va,Cf,PT,IT,Nh=Ee(()=>{"use strict";fr();p0();S0();M0();_r();T0();w0=null,Ih=null,Ph=!1,Rf=null,E0="",Va=document.querySelector(".canvas-wrapper"),Cf=new Ea;if(Ps){let l=function(){for(let g of Object.keys(e)){let{x:_,y:m,z:f,strength:v,target:T,noShadow:b}=e[g],E=b0({scene:n,color:16777215,strength:v,position:new B(_,m,f),delayIntensity:!!T,noShadow:b});n.add(E),T&&E.target.position.copy(T)}};PT=l;let i=ki?new B(-1.5,0,1.5):new B(0,0,-0),e={1:{x:-.8,y:20,z:15,strength:2400},2:{x:20,y:20,z:-6,strength:2400},3:{x:-20,y:8,z:-6,strength:2500}},t=[],n=new aa,s=Va.clientWidth,r=Va.clientHeight,o=new Di(-s/2,s/2,r/2,-r/2,-1e3,1e3),a=new Mh({antialias:!0,alpha:!0});a.setClearColor(0,0),a.setClearAlpha(0),a.setSize(s,r),a.shadowMap.enabled=!0,a.shadowMap.type=Sc,a.toneMapping=Ca,a.outputColorSpace=Bt,a.toneMappingExposure=1,Va.appendChild(a.domElement);let c=new Ah,h;c.load(E0+"/home2.glb",g=>{h=g.scene,n.background=null,n.add(h),Ih=new wa(g.scene),g.animations.forEach(_=>{let m=Ih.clipAction(_);m.setLoop(gh),m.clampWhenFinished=!0,m.play(),t.push(m)}),g.scene.traverse(_=>{_.isMesh&&(_.material.mapping=or,_.castShadow=!0,_.receiveShadow=!0,_.material.side=Hn)}),l()},void 0,g=>console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438:",g));let u=new wh(o,a.domElement);u.enableDamping=!0,u.minDistance=5,u.maxDistance=5,u.minPolarAngle=Math.PI/8,u.maxPolarAngle=Math.PI/2.4,u.target.copy(i),u.enablePan=!1,u.enableZoom=!1,u.minAzimuthAngle=Math.PI/4,u.maxAzimuthAngle=Math.PI/1.6,window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(s,r)}),new Ch().load(E0+"/sky.hdr",g=>{g.mapping=or;let _=new uo(a),m=_.fromEquirectangular(g).texture;n.environment=m,_.dispose(),n.background=null});let p=new ba(16777215,.7);n.add(p),o.position.set(5,5,5),o.zoom=55,o.updateProjectionMatrix(),o.lookAt(i),Rf=()=>{w0=requestAnimationFrame(Rf),u.update(),Ph&&Ih&&Ih.update(Cf.getDelta()),a.render(n,o)}}IT=new IntersectionObserver(i=>{i.forEach(e=>{e.isIntersecting?Dh():Lh()})},{threshold:.1})});var I0={};Ya(I0,{isMobile:()=>Uh,startIntro:()=>NT});function NT(i){let e=_n({defaults:{ease:Uo(.1,.7,.5,1)},autoplay:!1,onComplete(){document.body.classList.add("intro-complete"),i&&If()}});e.label("start").add("[data-ai='0']",{translateY:[DT,0],opacity:[0,1],duration:400,delay:dt(40)}).add(LT,{y:[-Pf,0],opacity:[0,1],duration:600,delay:dt(10)},"start").add("h1Box p",{y:[C0,0],opacity:[0,1],duration:300},"start").add(Uh?[]:["header [data-ai='1']","header [data-ai='1.1']"],{translateY:[-Ha,0],opacity:[0,1],duration:1e3,delay:dt(40)},"start").add("[data-ai='3']",{y:[Ha,0],opacity:[0,1],duration:1e3,delay:dt(100)},"start").add("[data-ai='2']",{y:[-Ha,0],opacity:[0,1],delay:dt(100)},"start").add("[data-ai='4']",{y:[-Ha,0],opacity:[0,1],delay:dt(100)},"start").add("#header-button",{y:[Pf,0],opacity:[0,1]},"start"),R0?(R0?.classList.add("closed"),qt(".loader",{opacity:[1,0],onComplete(){e.play()}})):e.play()}var Uh,R0,LT,C0,Pf,Ha,DT,Lf=Ee(()=>{"use strict";Ai();Nh();Uh=window.matchMedia("(max-width: 768px)").matches,R0=document.querySelector(".loader"),{chars:LT}=wi(".h1Box .animate-chars",{chars:!0}),C0=5,Pf=C0*2,Ha=Pf*2,DT=Ha*2});var qT={};var L0,UT,FT,OT,BT,kT,D0,os,P0,Df,N0,zT,VT,U0,HT,GT,WT,Nf,XT,F0=Ee(()=>{"use strict";Ai();L0=document.querySelector(".adv-main"),UT=[...document.querySelectorAll(".adv-decor p")],FT=[...document.querySelectorAll(".adv-decor")],OT=document.querySelector(".adv-right-progress"),BT=document.querySelector(".adv-right-line"),kT=[...document.querySelectorAll(".adv-decor p")],D0=document.querySelector(".adv-text-inner"),os=[...D0.querySelectorAll("ul")],P0=[...document.querySelectorAll(".adv-right-progress p")];OT.style.width=L0.clientWidth+"px";Df=-1,N0=3e3,zT={p:0},VT=os.reduce((i,e,t)=>[...i,i[i.length-1]+e.clientWidth+48],[0]),U0=_n({duration:N0,autoplay:Zn({target:".adv-wrapper",sync:!0,enter:"top",leave:"bottom"})}),HT=UT.reduce((i,e)=>[...i,i[i.length-1]-e.clientWidth],[0]).slice(0,-1).map((i,e)=>({to:`${i}px`,ease:"outExpo"})),GT=(i,e)=>{let t=Math.floor(i*os.length);if(t>os.length-1)return;qt(D0,{translateX:VT[t]*-1,duration:300,ease:"out(3)"});let n=os[t];!(e<0)&&e!==os.length&&qt(n.querySelectorAll("li"),{translateY:[20,0],opacity:[0,1],ease:"out(3)",delay:dt(100,{start:400})}),os.forEach((s,r)=>{r<=t?P0[r].classList.add("active"):P0[r].classList.remove("active"),qt(FT,{translateX:HT[t],ease:"linear"}),os[r].classList.toggle("active",r===t),kT[r].classList.toggle("active",r===t),s.classList.toggle("active",r===t)})},WT=i=>{let e=Math.floor(i*os.length);if(e!==Df){let t=Df;Df=e,GT(e/os.length,t)}},Nf=qt(BT,{width:[0,L0.clientWidth-76],ease:"linear",duration:2300,autoplay:!1}),XT=qt(zT,{p:1});U0.onRender=i=>{Nf.seek(i.progress/(Nf.duration/N0)*Nf.duration),WT(i.progress)};U0.sync(XT,0)});var KT={};var YT,Uf,$T,Ff,O0,Of,ZT,B0=Ee(()=>{"use strict";Ai();_r();YT=document.querySelector(".navs-wrapper"),Uf=[...document.querySelectorAll('nav [data-ai="1"]')],$T=document.querySelector("nav")||"",Ff=document.querySelector(".header-contacts"),O0=document.querySelector(".hamb"),Of=!1;if(ki){let r=function(o){o.target.id!=="catalog-btn"&&(YT?.classList.toggle("opened"),document.body.classList.toggle("menu-opened"),Of?(t.reverse(),n.reverse(),s.reverse()):(t.play(),n.play(),s.play()),Of=!Of)};ZT=r;let{chars:i}=wi(".hamb-open",{chars:!0}),{chars:e}=wi(".hamb-close",{chars:!0});[...Uf,...Ff.querySelectorAll("a")].forEach(o=>o.removeAttribute("data-ai"));let t=_n({autoplay:!1,defaults:{duration:300}}).label("close",0).label("open",100).add(i,{translateY:[0,-12],easing:"inOutCirc",delay:dt(60)},"open").add(e,{translateY:[0,-12],easing:"inOutCirc",delay:dt(60)},"close"),n=_n({autoplay:!1,defaults:{duration:500}}).add($T,{translateX:[40,0],opacity:[0,1],easing:"easeOutQuad"}).add(Uf,{translateY:[dt("-10",{from:"first"}),0],opacity:[0,1],scale:[.8,1],easing:"easeOutQuad",duration:300,delay:dt([0,150],{from:"first",ease:"inInOut(3)"})},"-=200"),s=_n({autoplay:!1,defaults:{duration:500}}).add(Ff,{translateX:[-40,0],opacity:[0,1],easing:"easeOutQuad"}).add(Ff.querySelectorAll("a"),{translateY:[dt("-10"),0],opacity:[0,1],scale:[.8,1],duration:300,easing:"easeOutQuad",delay:dt(40)});Uf.forEach(o=>o.addEventListener("click",r)),O0&&O0.addEventListener("click",r)}});var nE={};function H0(i,e){i.preventDefault(),e==="close"?zf.reverse():(Lh(),z0.classList.add("opened"),zf.play())}function k0(i,e){let t=document.createElement("div");t.className=e.className,i.append(t);let n=new IntersectionObserver(([s])=>{i.classList.toggle(e.className.replace("-trigger",""),s.isIntersecting===e.isIntersectingAction)},{root:i,threshold:0,rootMargin:e.rootMargin});return n.observe(t),n}var JT,jT,z0,QT,Bf,kf,V0,zf,eE,tE,G0=Ee(()=>{"use strict";Ai();Nh();_r();JT=document.querySelector("#catalog-close-btn"),jT=document.querySelector("#catalog-btn"),z0=document.querySelector("#catalog-wrapper"),QT=document.querySelector("#catalog-inner"),Bf=document.querySelectorAll("[data-catalog-bottom]"),kf=500,V0=ki?"translateX":"translateY",zf=_n({autoplay:!1,defaults:{ease:"outExpo"},onComplete(i){i.reversed&&(z0.classList.remove("opened"),Dh())}}),eE=Rr.animate(QT,{[V0]:[50,0],opacity:[0,1],duration:kf}),tE=Rr.animate(Bf,{[V0]:[ki?30:60,0],opacity:[0,1],duration:kf,delay:dt((kf-300)/Bf.length)});zf.sync(eE,0).sync(tE,"-=300");JT?.addEventListener("click",i=>H0(i,"close"));jT?.addEventListener("click",i=>H0(i,"open"));Bf.forEach(i=>{let e=i.querySelector(".catalog-sub-wrapper");e.scrollHeight>e.clientHeight&&(e.classList.add("has-scroll"),k0(e,{className:"scroll-end-trigger",isIntersectingAction:!1,rootMargin:"0px 0px -100% 0px"}),k0(e,{className:"scroll-top-trigger",isIntersectingAction:!0,rootMargin:"-100% 0px 0px 0px"}))})});function Y0(i,e,t){return Math.max(i,Math.min(e,t))}function iE(i,e,t){return(1-t)*i+t*e}function sE(i,e,t,n){return iE(i,e,1-Math.exp(-t*n))}function rE(i,e){return(i%e+e)%e}function aE(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}function X0(i,e){return i===1?cE:i===2?e:1}var W0,oE,lE,$0,cE,Rs,hE,q0,Z0,K0=Ee(()=>{W0="1.3.18";oE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;let t=Y0(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=sE(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};lE=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=i,this.content=e,t&&(this.debouncedResize=aE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$0=class{events={};emit(i,...e){let t=this.events[i]||[];for(let n=0,s=t.length;n<s;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}},cE=100/6,Rs={passive:!1};hE=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Rs),this.element.addEventListener("touchstart",this.onTouchStart,Rs),this.element.addEventListener("touchmove",this.onTouchMove,Rs),this.element.addEventListener("touchend",this.onTouchEnd,Rs)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new $0;on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Rs),this.element.removeEventListener("touchstart",this.onTouchStart,Rs),this.element.removeEventListener("touchmove",this.onTouchMove,Rs),this.element.removeEventListener("touchend",this.onTouchEnd,Rs)}onTouchStart=i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i,s=X0(n,this.window.width),r=X0(n,this.window.height);e*=s,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},q0=i=>Math.min(1,1.001-2**(-10*i)),Z0=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new oE;emitter=new $0;dimensions;virtualScroll;constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:p=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:f,overscroll:v=!0,autoRaf:T=!1,anchors:b=!1,autoToggle:E=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:P=R,stopInertiaOnNavigate:y=!1}={}){window.lenisVersion=W0,window.lenis||(window.lenis={}),window.lenis.version=W0,u==="horizontal"&&(window.lenis.horizontal=!0),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=q0:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:p,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:f,overscroll:v,autoRaf:T,anchors:b,autoToggle:E,allowNestedScroll:A,naiveDimensions:P,stopInertiaOnNavigate:y},this.dimensions=new lE(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new hE(t,{touchMultiplier:p,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{let t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){let n=t.find(s=>s.getAttribute("href")?.includes("#"));if(n){let s=n.getAttribute("href");if(s){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${s.split("#")[1]}`;this.scrollTo(o,r)}}}this.options.stopInertiaOnNavigate&&t.find(s=>s.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(f=>f instanceof HTMLElement&&(typeof h=="function"&&h?.(f)||f.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&f.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&f.hasAttribute?.("data-lenis-prevent-horizontal")||s&&f.hasAttribute?.("data-lenis-prevent-touch")||r&&f.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(f,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let p=t;this.options.gestureOrientation==="both"?p=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(p=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let g=s&&this.options.syncTouch,m=s&&n.type==="touchend";m&&(p=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+p,{programmatic:!1,...g?{lerp:m?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{let e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:o=s?this.options.duration:void 0,easing:a=s?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if((this.isStopped||this.isLocked)&&!h)return;let d=i,p=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let g=null;if(typeof d=="string"?(g=document.querySelector(d),g||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&d?.nodeType&&(g=d),g){if(this.options.wrapper!==window){let m=this.rootElement.getBoundingClientRect();p-=this.isHorizontal?m.left:m.top}let _=g.getBoundingClientRect();d=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof d=="number"){if(d+=p,d=Math.round(d),this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;let g=d-this.animatedScroll;g>this.limit/2?d-=this.limit:g<-this.limit/2&&(d+=this.limit)}}else d=Y0(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=q0:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(g,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=g-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=g,this.setScroll(this.scroll),s&&(this.targetScroll=g),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){let n=Date.now();i._lenis||(i._lenis={});let s=i._lenis,r,o,a,l,c,h,u,d,p,g;if(n-(s.time??0)>2e3){s.time=Date.now();let R=window.getComputedStyle(i);if(s.computedStyle=R,r=["auto","overlay","scroll"].includes(R.overflowX),o=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),h=["auto"].includes(R.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=o,!(r||o))return!1;u=i.scrollWidth,d=i.scrollHeight,p=i.clientWidth,g=i.clientHeight,a=u>p,l=d>g,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=u,s.scrollHeight=d,s.clientWidth=p,s.clientHeight=g,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=h}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,u=s.scrollWidth,d=s.scrollHeight,p=s.clientWidth,g=s.clientHeight,c=s.hasOverscrollBehaviorX,h=s.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",m,f,v,T,b,E;if(_==="horizontal")m=Math.round(i.scrollLeft),f=u-p,v=e,T=r,b=a,E=c;else if(_==="vertical")m=Math.round(i.scrollTop),f=d-g,v=t,T=o,b=l,E=h;else return!1;return!E&&(m>=f||m<=0)?!0:(v>0?m<f:m>0)&&T&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?rE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}});var J0=Ee(()=>{});var gE={};function j0(i){let{chars:e}=wi(i,{chars:!0});return{el:i,chars:e}}var Vf,uE,dE,fE,pE,mE,Q0=Ee(()=>{"use strict";Ai();K0();J0();_r();window.len=new Z0({autoRaf:!0,autoResize:!0});Vf=ki?{enter:"end",leave:"start"}:{enter:"80% 20%",leave:"20% 80%"};uE=document.querySelector("footer .wrapper"),dE=[...document.querySelectorAll("[data-typing]")].map(j0),fE=[...document.querySelectorAll("[data-animate-container]")],pE=[...document.querySelectorAll("[data-from-top]")].map(j0),mE=[...document.querySelectorAll("[data-zoom]")];dE.forEach(({el:i,chars:e})=>{let t=i.closest("[data-animate-container]"),s=(t?t.dataset.isSticky!==void 0:!1)?{enter:"end",leave:"start"}:Vf;qt(e,{y:[14,0],opacity:[0,1],duration:600,delay:dt(10,{start:200}),easing:"inSine",autoplay:Zn({target:i.closest("[data-animate-container]"),...s})})});fE.forEach(i=>{let e=i.dataset.isSticky!==void 0,t=i.dataset.animateInvert!==void 0,n=[...i.querySelectorAll("[data-from-bottom]")],s=100;qt(n,{y:[14,0],opacity:[0,1],duration:600,delay:dt(s*-1,{start:s*n.length,from:t?"firts":"last"}),easing:"inSine",autoplay:Zn({debug:n.length===1,target:e?i:void 0})})});pE.forEach(i=>qt(i,{y:[-14,0],opacity:[0,1],duration:600,easing:"inSine",autoplay:Zn(Vf)}));mE.forEach(i=>qt(i,{scale:[1.2,1],duration:1400,ease:Uo(.163,.11,.304,.992),autoplay:Zn(Vf)}));qt("#header",{alternate:!0,"--alpha":[0,1],autoplay:Zn({container:".scroll-container",enter:"top+=100 top+=100",leave:"top bottom+=100",sync:.5}),easing:"linear"});qt(uE,{y:[-100,0],ease:"linear",autoplay:Zn({enter:"bottom top",leave:"bottom bottom+=100",sync:!0})})});var SE={};function vE(i){let e=i.querySelector(".modal-wrapper"),{chars:t}=wi(i.querySelector("[data-modal-title]"),{chars:!0});return _n({autoplay:!1,defaults:{ease:"outSine"},onComplete:n=>{n.reversed&&i&&i.classList.remove("opened")}}).add(i,{"--alpha":[0,.2],duration:600}).add(e,{opacity:[0,1],y:[40,0],duration:400},0).label("modal p").add(t,{opacity:[0,1],y:[-10,0],duration:dt("-20",{start:600}),delay:dt(10),autoplay:!1},"modal p").add([...i.querySelectorAll("[data-modal-anim='1']")],{opacity:[0,1],y:[14,0],duration:500,delay:dt("+100")},"-=400").add([...i.querySelectorAll("[data-modal-anim='2']")],{opacity:[0,1],y:[-14,0],duration:500,delay:dt("+100")},"modal p")}function r_(i){isNaN(i)||(t_?.classList.toggle("disabled",i===0),n_?.classList.toggle("disabled",i===s_-1))}function Hf(){if(!as||!mo)return;let i=new Image;i.src=as.src;let{width:e,height:t}=i,n=e/t,s=window.innerWidth/window.innerHeight;if(n>s){let r=window.innerWidth-e_;mo.style.width=r+"px",mo.style.height=r/n+"px",as.style.width=r+"px",as.style.height=r/n+"px"}else{let r=window.innerHeight-e_;mo.style.height=r+"px",mo.style.width=r*n+"px",as.style.height=r+"px",as.style.width=r*n+"px"}}function o_(i){mr===0&&i<0||mr===s_-1&&i>0||(mr+=i,as.src=i_+mr+".png",Hf(),r_(mr))}var _E,xE,yE,Ga,e_,t_,n_,mr,i_,as,mo,s_,a_=Ee(()=>{"use strict";Ai();Lf();_E=[...document.querySelectorAll("[data-modal]")],xE=[...document.querySelectorAll("[data-modal-close]")],yE=[...document.querySelectorAll("[data-modal-name]")],Ga={};yE.forEach(i=>{let e=i.dataset.modalName,t=document.querySelector(`[data-modal-name=${e}]`);Ga[e]={timeline:vE(t),modal:t}});e_=Uh?46:120,t_=document.querySelector("[data-photo-prev]"),n_=document.querySelector("[data-photo-next]"),mr=0,i_="",as=null,mo=null,s_=[...document.querySelectorAll('[data-modal="photos"]')].length;t_?.addEventListener("click",()=>o_(-1));n_?.addEventListener("click",()=>o_(1));window.addEventListener("resize",Hf);_E.forEach(i=>{i.addEventListener("click",e=>{e.preventDefault();let t=i.dataset.modal,{timeline:n,modal:s}=Ga[t];if(t==="photos"){as=s.querySelector("img"),mo=s.querySelector(".modal-wrapper");let{src:r=""}=i.dataset;as.src=r;let o=parseInt(r.match(/\d+/)[0]);i_=r.match(/^.*?(?=\d+)/)?.[0]||"",mr=o,r_(mr),Hf()}console.log(s),s.classList.add("opened"),n.speed=1,n.play()})});xE.forEach(i=>{i.addEventListener("click",e=>{e.preventDefault();let t=i.dataset.modalClose,{timeline:n}=Ga[t];n.speed=2,n.reverse()})});Object.keys(Ga).forEach(i=>{let{timeline:e,modal:t}=Ga[i];t.addEventListener("click",async n=>{n.target===t&&(e.speed=2,e.reverse())})})});var ME,bE,l_,c_=Ee(()=>{"use strict";ME={easeInOut:"cubic-bezier(0.422,0,0.552,1)",easeIn:"cubic-bezier(0, 0.515,0.552,1)",easeOut:"cubic-bezier(0.585, 0.002,1,0.467)",linear:"linear"},bE={gap:0,items:1,duration:.3,widthAuto:!1,ease:ME.easeInOut,perPage:1,media:{}},l_=(i,e={},t=[])=>{let n,s={currentIdx:0,disabledPrev:!1,disabledNext:!1,changeCount:1};if(typeof i=="string"?n=document.querySelector(i):i instanceof HTMLElement&&(n=i),!n)throw new Error("Target element not found");let r=n.querySelector(".slider-track");if(!r)throw new Error("Track element not found");let o=[...r.querySelectorAll(":scope >  .slide")],a=Object.fromEntries(Object.entries(e).filter(([f,v])=>v!==void 0)),l={...bE,...a};l.duration=l.duration*1e3;function c(){Object.keys(l.media).forEach(f=>{window.matchMedia(`(width<=${f}px)`).matches&&(console.log(l),l.items=l.media[f].items||l.items||l.items,s.changeCount=Number(l.media[f].changeCount)||s.changeCount)}),l.widthAuto?n.style.setProperty("--items","auto"):(n.style.setProperty("--items",l.items.toString()),n.style.minWidth="0px"),n?.style.setProperty("--gap",`${l.gap}px`)}c();let h=o.map(f=>f.clientWidth),u=h.reduce((f,v)=>f+v,0);if(!o.length)throw new Error("No slides found");let d={changed:[]},p=(f,...v)=>{d[f]?.forEach(T=>T(...v))};function g(f,v){m.dom.next?.classList.toggle("disabled",f>=v),m.dom.prev?.classList.toggle("disabled",f===0)}function _(){c()}_(),window.addEventListener("resize",_);let m={id:crypto.randomUUID(),dom:{container:n,slides:o,track:r,prev:void 0,next:void 0},info:{disableNext:s.disabledNext,disablePrev:s.disabledPrev,currentIdx:s.currentIdx,slidesLength:o.length,totalWidth:u,totalLength:o.length-l.items},options:l,on:(f,v)=>{d[f]&&d[f].push(v)},engine:f=>{h=o.map(v=>v.clientWidth),u=h.reduce((v,T)=>v+T,0),r.style.transitionTimingFunction=l.ease,r.style.transitionDuration=`${l.duration}ms`,r.style.translate=`-${h[f]*f}px 0`,g(f,m.info.totalLength),s.currentIdx=f,p("changed",f)},goTo:f=>{let v=m.info.totalLength;if(!(f>=v+s.changeCount||f===-s.changeCount))return m.engine(f),s.currentIdx=f,f},goPrev:()=>{m.goTo(Math.max(0,s.currentIdx-s.changeCount))},goNext:()=>{m.goTo(Math.min(m.info.totalLength,s.currentIdx+s.changeCount))},checkChangeDependSlider:f=>{f>=m.options.items?m.goNext():m.goPrev()}};return t.length>0&&t.forEach(f=>{f(m)}),m}});var h_,u_=Ee(()=>{"use strict";h_=(i,e)=>{let{arrowsWrapper:t,selector:n}=e,s=i.dom.container.querySelector(t)||document.querySelector(t);if(!s)return;let[r,o]=[...s.querySelectorAll(n)];i.options.items>i.info.slidesLength&&(r.classList.add("hidden"),o.classList.add("hidden")),r.addEventListener("click",()=>i.goPrev()),o.addEventListener("click",()=>i.goNext()),r.classList.add("disabled"),i.dom.prev=r,i.dom.next=o}});var d_,f_=Ee(()=>{"use strict";d_=(i,e)=>{let{dotsWrapper:t,parentIdentifier:n,selector:s}=e,r;if(n?r=i.dom.container.closest(n):r=i.dom.container.querySelector(t),!r)throw new Error("Parent element for dots not found");let o=[...r.querySelectorAll(s||"button")].filter(a=>a.offsetParent!==null);o.forEach((a,l)=>{a.addEventListener("click",c=>{c.preventDefault(),i.goTo(l)})}),i.on("changed",a=>{o.forEach(l=>l.classList.remove("active")),o[a]?.classList.add("active")})}});var p_,m_,g_=Ee(()=>{"use strict";Ai();p_=i=>{let{dom:e,options:{duration:t,ease:n}}=i,{track:s,slides:r}=e,o=r[0].clientHeight;s.style.height=`${o}px`,s.style.transform="none",r.forEach((a,l)=>{a.style.transition=`opacity ${t}ms ${n}`,a.style.position="absolute",a.style.inset="0",a.style.opacity=l===0?"1":"0"}),i.engine=a=>{r.forEach((l,c)=>{l.style.opacity=c===a?"1":"0",l.style.zIndex=c===a?"1":"0"})}},m_=i=>{let{slides:e,track:t}=i.dom;t.style.transition="none",Rr.animate(t,{x:-i.info.totalWidth,duration:i.options.duration,autoplay:!0,ease:"linear",loop:!0}),e.forEach(n=>t.appendChild(n.cloneNode(!0))),i.engine=()=>{}}});var __,x_=Ee(()=>{"use strict";c_();u_();f_();g_();__={generateArrows:h_,generateDots:d_,slider:l_,fadePlugin:p_,infinityScroll:m_}});var RE={};function y_(i){let{duration:e,dots:t,dotSelector:n,arrows:s,widthAuto:r,gap:o=0,perPage:a="1",mobilePerPage:l}=i.dataset,c={items:Number(a),gap:Number(o),widthAuto:r,duration:e?Number(e):void 0};c.media=l?{480:{items:Number(l),changeCount:1}}:void 0;let h=M_(i,c);return s&&v_(h,{arrowsWrapper:s,selector:"button"}),t!==void 0&&S_(h,{dotsWrapper:t,parentIdentifier:".card",selector:n||"button"}),h}var TE,v_,S_,EE,M_,wE,AE,b_=Ee(()=>{"use strict";x_();({fadePlugin:TE,generateArrows:v_,generateDots:S_,infinityScroll:EE,slider:M_}=__),wE=[...document.querySelectorAll("[data-slider]")],AE=[...document.querySelectorAll("[data-combined-slider]")];for(let i of AE){let e=i.querySelector("[data-combined-slider-outer]"),t=y_(e),n=i.querySelector("[data-combined-slider-inner]");n&&(t.dependSlider=y_(n))}for(let i of wE){let{duration:e,infinity:t,fade:n,dots:s,dotSelector:r,arrows:o,widthAuto:a,gap:l=0,perPage:c=1,mobilePerPage:h,parentIdentifier:u}=i.dataset,d=[];t!==void 0&&d.push(EE),n!==void 0&&d.push(TE);let p=M_(i,{items:Number(c),gap:Number(l),widthAuto:a,duration:e?Number(e):void 0,media:{480:{items:h?+h:+c,changeCount:1}}},d);o&&v_(p,{arrowsWrapper:o,selector:"button"}),s!==void 0&&S_(p,{dotsWrapper:s,parentIdentifier:u??".card",selector:r||"button"})}});var CE={};var Wa,Fh,T_=Ee(()=>{"use strict";Wa=[...document.querySelectorAll(".main-variants .btn")],Fh=[...document.querySelectorAll(".main-variants .main-variants-img")];Wa.forEach((i,e)=>{i.addEventListener("click",t=>{if(t.preventDefault(),e){Wa[1].classList.add("active"),Wa[0].classList.remove("active"),Fh[1].classList.add("active"),Fh[0].classList.remove("active");return}Fh[1].classList.remove("active"),Fh[0].classList.add("active"),Wa[1].classList.remove("active"),Wa[0].classList.add("active")})})});var PE={};var IE,E_=Ee(()=>{"use strict";IE=[...document.querySelectorAll("[data-phone]")];IE.forEach(i=>{i&&(i.value="+7"),i?.addEventListener("keydown",e=>{let t=e.target,n=e.ctrlKey||e.metaKey||["Backspace","Delete","Tab","Enter","Escape","ArrowLeft","ArrowRight","Home","End"].includes(e.key),s=/^[0-9]$/.test(e.key);if(!n&&!s){e.preventDefault();return}e.key==="Backspace"&&t.value.replace(/\D/g,"").length<=2&&(t.value="+7",e.preventDefault())}),i?.addEventListener("input",e=>{let t=e.target;if(!t?.value)return;let n=t.value.replace(/\D/g,"");n.startsWith("7")&&(n=n.substring(1)),n.length>10&&(n=n.substring(0,10));let s=n.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);s&&(t.value=s[1]?`+7 (${s[1]}`+(s[2]?`) ${s[2]}`:"")+(s[3]?`-${s[3]}`:"")+(s[4]?`-${s[4]}`:""):"")})})});var BE={};var LE,Oh,DE,NE,UE,FE,OE,w_=Ee(()=>{"use strict";Ai();LE=[...document.querySelectorAll(".accordion-btn")],Oh=[...document.querySelectorAll(".accordion")],DE=document.querySelector(".fake-div"),[NE]=Oo.$(".question-total"),[UE]=Oo.$(".question-count");NE.textContent=Oh.length;FE={p:0},OE=qt(FE,{p:[0,1],duration:1e3,autoplay:!1,ease:"linear",onRender(){window.len.resize()}});LE.forEach(i=>{i.addEventListener("click",e=>{e.preventDefault(),OE.restart()})});Oh.forEach((i,e)=>{let t=document.createElement("div");t.style.height=i.clientHeight+"px",DE?.appendChild(t),qt(t,{"--alpha":[0,1],alternate:!0,duration:1,autoplay:Zn({repeat:!0,enter:"top+=41vh top",leave:"top+=41vh bottom",onEnter(){Oh.forEach((n,s)=>{n.classList.toggle("upper",s<e),n.classList.toggle("current",s<=e)}),UE.textContent=e+1},onLeave(){}})})});Oh.forEach((i,e)=>e!==0&&i.classList.remove("current"))});_r();var[VP,A_,HP]=await Promise.all([Promise.resolve().then(()=>(mm(),mx)),Promise.resolve().then(()=>(Lf(),I0))]),kE=[...document.querySelectorAll("navs a")];kE.forEach(i=>i.addEventListener("click",e=>{i.href===window.location.href&&e.preventDefault()}));Ps&&await Promise.all([Promise.resolve().then(()=>(Nh(),A0)),Promise.resolve().then(()=>(F0(),qT))]);Ps?setTimeout(()=>A_.startIntro(Ps),1e3):A_.startIntro(Ps);var R_=[Promise.resolve().then(()=>(B0(),KT)),Promise.resolve().then(()=>(G0(),nE)),Promise.resolve().then(()=>(Q0(),gE)),Promise.resolve().then(()=>(a_(),SE)),Promise.resolve().then(()=>(b_(),RE)),Promise.resolve().then(()=>(T_(),CE)),Promise.resolve().then(()=>(E_(),PE))];Jf&&R_.push(Promise.resolve().then(()=>(w_(),BE)));await Promise.all(R_);
/*! Bundled license information:

animejs/dist/modules/core/consts.js:
animejs/dist/modules/core/globals.js:
animejs/dist/modules/core/helpers.js:
animejs/dist/modules/core/transforms.js:
animejs/dist/modules/core/colors.js:
animejs/dist/modules/core/values.js:
animejs/dist/modules/core/render.js:
animejs/dist/modules/core/styles.js:
animejs/dist/modules/core/clock.js:
animejs/dist/modules/core/targets.js:
animejs/dist/modules/core/units.js:
  (**
   * Anime.js - core - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/animation/additive.js:
animejs/dist/modules/animation/composition.js:
animejs/dist/modules/animation/animation.js:
  (**
   * Anime.js - animation - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/engine/engine.js:
  (**
   * Anime.js - engine - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timer/timer.js:
  (**
   * Anime.js - timer - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/easings/none.js:
animejs/dist/modules/easings/eases/parser.js:
animejs/dist/modules/easings/cubic-bezier/index.js:
  (**
   * Anime.js - easings - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/timeline/position.js:
animejs/dist/modules/timeline/timeline.js:
  (**
   * Anime.js - timeline - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/utils/number.js:
animejs/dist/modules/utils/target.js:
animejs/dist/modules/utils/time.js:
animejs/dist/modules/utils/chainable.js:
animejs/dist/modules/utils/random.js:
animejs/dist/modules/utils/stagger.js:
animejs/dist/modules/utils/index.js:
  (**
   * Anime.js - utils - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/waapi/composition.js:
animejs/dist/modules/waapi/waapi.js:
  (**
   * Anime.js - waapi - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/events/scroll.js:
  (**
   * Anime.js - events - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/text/split.js:
  (**
   * Anime.js - text - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

animejs/dist/modules/index.js:
  (**
   * Anime.js - ESM
   * @version v4.3.6
   * @license MIT
   * @copyright 2026 - Julian Garnier
   *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
