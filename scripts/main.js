var j_=Object.defineProperty;var Ae=(i,e)=>()=>(i&&(e=i(i=0)),e);var al=(i,e)=>{for(var t in e)j_(i,t,{get:e[t],enumerable:!0})};var Xs,gp,Qi,Cr=Ae(()=>{"use strict";Xs=!!document.querySelector("[data-page-index]"),gp=!!document.querySelector("[data-page-questions]"),Qi=window.matchMedia("(max-width: 480px)").matches});var an,en,Re,Tt,et,$t,It,iu,Li,ll,Di,_p,ze,Ln,Vt,Fo,ln,xp,Ir,qs,Pr,Ne,yp,vp,Sp,bp,Mp,Tp,su,cl,Ep,wp,hl,Ap,xt=Ae(()=>{an=typeof window<"u",en=an?window:null,Re=an?document:null,Tt={OBJECT:0,ATTRIBUTE:1,CSS:2,TRANSFORM:3,CSS_VAR:4},et={NUMBER:0,UNIT:1,COLOR:2,COMPLEX:3},$t={NONE:0,AUTO:1,FORCE:2},It={replace:0,none:1,blend:2},iu=Symbol(),Li=Symbol(),ll=Symbol(),Di=Symbol(),_p=Symbol(),ze=1e-11,Ln=1e12,Vt=1e3,Fo=240,ln="",xp="var(",Ir=(()=>{let i=new Map;return i.set("x","translateX"),i.set("y","translateY"),i.set("z","translateZ"),i})(),qs=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","matrix","matrix3d","perspective"],Pr=qs.reduce((i,e)=>({...i,[e]:e+"("}),{}),Ne=()=>{},yp=/\)\s*[-.\d]/,vp=/(^#([\da-f]{3}){1,2}$)|(^#([\da-f]{4}){1,2}$)/i,Sp=/rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/i,bp=/rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,Mp=/hsl\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*\)/i,Tp=/hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/i,su=/[-+]?\d*\.?\d+(?:e[-+]?\d)?/gi,cl=/^([-+]?\d*\.?\d+(?:e[-+]?\d+)?)([a-z]+|%)$/i,Ep=/([a-z])([A-Z])/g,wp=/(\w+)(\([^)]+\)+)/g,hl=/(\*=|\+=|-=)/,Ap=/var\(\s*(--[\w-]+)(?:\s*,\s*([^)]+))?\s*\)/});var Lr,Wt,Ce,Oo,ru,cn=Ae(()=>{xt();Lr={id:null,keyframes:null,playbackEase:null,playbackRate:1,frameRate:Fo,loop:0,reversed:!1,alternate:!1,autoplay:!0,persist:!1,duration:Vt,delay:0,loopDelay:0,ease:"out(2)",composition:It.replace,modifier:i=>i,onBegin:Ne,onBeforeUpdate:Ne,onUpdate:Ne,onLoop:Ne,onPause:Ne,onComplete:Ne,onRender:Ne},Wt={current:null,root:Re},Ce={defaults:Lr,precision:4,timeScale:1,tickThreshold:200},Oo=an&&en.AnimeJSDevTools,ru={version:"4.3.6",engine:null};an&&(en.AnimeJS||(en.AnimeJS=[]),en.AnimeJS.push(ru))});var Dr,Et,ii,Ft,Pt,zt,wt,yt,ie,si,ul,au,lu,cu,Cp,es,Q_,Ip,dl,ts,qn,Nr,Ur,Dn,Bo,ko,Pp,zo,fl,ri,ou,Se,Rp,ue,ns,Nn,Ys,is,Xt,$s,ot,Yn,Sn,vt=Ae(()=>{xt();cn();Dr=i=>i.replace(Ep,"$1-$2").toLowerCase(),Et=(i,e)=>i.indexOf(e)===0,ii=Date.now,Ft=Array.isArray,Pt=i=>i&&i.constructor===Object,zt=i=>typeof i=="number"&&!isNaN(i),wt=i=>typeof i=="string",yt=i=>typeof i=="function",ie=i=>typeof i>"u",si=i=>ie(i)||i===null,ul=i=>an&&i instanceof SVGElement,au=i=>vp.test(i),lu=i=>Et(i,"rgb"),cu=i=>Et(i,"hsl"),Cp=i=>au(i)||(lu(i)||cu(i))&&(i[i.length-1]===")"||!yp.test(i)),es=i=>!Ce.defaults.hasOwnProperty(i),Q_=["opacity","rotate","overflow","color"],Ip=(i,e)=>{if(Q_.includes(e))return!1;if(i.getAttribute(e)||e in i){if(e==="scale"){let t=i.parentNode;return t&&t.tagName==="filter"}return!0}},dl=i=>wt(i)?parseFloat(i):i,ts=Math.pow,qn=Math.sqrt,Nr=Math.sin,Ur=Math.cos,Dn=Math.abs,Bo=Math.exp,ko=Math.floor,Pp=Math.asin,zo=Math.max,fl=Math.atan2,ri=Math.PI,ou=Math.round,Se=(i,e,t)=>i<e?e:i>t?t:i,Rp={},ue=(i,e)=>{if(e<0)return i;if(!e)return ou(i);let t=Rp[e];return t||(t=Rp[e]=10**e),ou(i*t)/t},ns=(i,e)=>Ft(e)?e.reduce((t,n)=>Dn(n-i)<Dn(t-i)?n:t):e?ou(i/e)*e:i,Nn=(i,e,t)=>i+(e-i)*t,Ys=i=>i===1/0?Ln:i===-1/0?-Ln:i,is=i=>i<=ze?ze:Ys(ue(i,11)),Xt=i=>Ft(i)?[...i]:i,$s=(i,e)=>{let t={...i};for(let n in e){let s=i[n];t[n]=ie(s)?e[n]:s}return t},ot=(i,e,t,n="_prev",s="_next")=>{let r=i._head,o=s;for(t&&(r=i._tail,o=n);r;){let a=r[o];e(r),r=a}},Yn=(i,e,t="_prev",n="_next")=>{let s=e[t],r=e[n];s?s[n]=r:i._head=r,r?r[t]=s:i._tail=s,e[t]=null,e[n]=null},Sn=(i,e,t,n="_prev",s="_next")=>{let r=i._tail;for(;r&&t&&t(r,e);)r=r[n];let o=r?r[s]:i._head;r?r[s]=e:i._head=e,o?o[n]=e:i._tail=e,e[n]=r,e[s]=o}});var Lp,Dp=Ae(()=>{xt();vt();Lp=(i,e,t)=>{let n=i.style.transform,s;if(n){let r=i[Di],o;for(;o=wp.exec(n);){let a=o[1],l=o[2].slice(1,-1);r[a]=l,a===e&&(s=l,t&&(t[e]=l))}}return n&&!ie(s)?s:Et(e,"scale")?"1":Et(e,"rotate")||Et(e,"skew")?"0deg":"0px"}});var ex,tx,hu,nx,Np,Up=Ae(()=>{xt();vt();ex=i=>{let e=Sp.exec(i)||bp.exec(i),t=ie(e[4])?1:+e[4];return[+e[1],+e[2],+e[3],t]},tx=i=>{let e=i.length,t=e===4||e===5;return[+("0x"+i[1]+i[t?1:2]),+("0x"+i[t?2:3]+i[t?2:4]),+("0x"+i[t?3:5]+i[t?3:6]),e===5||e===9?+(+("0x"+i[t?4:7]+i[t?4:8])/255).toFixed(3):1]},hu=(i,e,t)=>(t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*(2/3-t)*6:i),nx=i=>{let e=Mp.exec(i)||Tp.exec(i),t=+e[1]/360,n=+e[2]/100,s=+e[3]/100,r=ie(e[4])?1:+e[4],o,a,l;if(n===0)o=a=l=s;else{let c=s<.5?s*(1+n):s+n-s*n,h=2*s-c;o=ue(hu(h,c,t+1/3)*255,0),a=ue(hu(h,c,t)*255,0),l=ue(hu(h,c,t-1/3)*255,0)}return[o,a,l,r]},Np=i=>lu(i)?ex(i):au(i)?tx(i):cu(i)?nx(i):[0,0,0,1]});var fe,hn,Vo,Fp,Ni,Ui,pl,mn,uu,un,oi=Ae(()=>{xt();vt();Dp();Up();fe=(i,e)=>ie(i)?e:i,hn=(i,e,t,n,s)=>{let r;if(yt(i))r=()=>{let o=i(e,t,n);return isNaN(+o)?o||0:+o};else if(wt(i)&&Et(i,xp))r=()=>{let o=i.match(Ap),a=o[1],l=o[2],c=getComputedStyle(e)?.getPropertyValue(a);return(!c||c.trim()===ln)&&l&&(c=l.trim()),c||0};else return i;return s&&(s.func=r),r()},Vo=(i,e)=>i[Li]?i[ll]&&Ip(i,e)?Tt.ATTRIBUTE:qs.includes(e)||Ir.get(e)?Tt.TRANSFORM:Et(e,"--")?Tt.CSS_VAR:e in i.style?Tt.CSS:e in i?Tt.OBJECT:Tt.ATTRIBUTE:Tt.OBJECT,Fp=(i,e,t)=>{let n=i.style[e];n&&t&&(t[e]=n);let s=n||getComputedStyle(i[_p]||i).getPropertyValue(e);return s==="auto"?"0":s},Ni=(i,e,t,n)=>{let s=ie(t)?Vo(i,e):t;return s===Tt.OBJECT?i[e]||0:s===Tt.ATTRIBUTE?i.getAttribute(e):s===Tt.TRANSFORM?Lp(i,e,n):s===Tt.CSS_VAR?Fp(i,e,n).trimStart():Fp(i,e,n)},Ui=(i,e,t)=>t==="-"?i-e:t==="+"?i+e:i*e,pl=()=>({t:et.NUMBER,n:0,u:null,o:null,d:null,s:null}),mn=(i,e)=>{if(e.t=et.NUMBER,e.n=0,e.u=null,e.o=null,e.d=null,e.s=null,!i)return e;let t=+i;if(isNaN(t)){let n=i;n[1]==="="&&(e.o=n[0],n=n.slice(2));let s=n.includes(" ")?!1:cl.exec(n);if(s)return e.t=et.UNIT,e.n=+s[1],e.u=s[2],e;if(e.o)return e.n=+n,e;if(Cp(n))return e.t=et.COLOR,e.d=Np(n),e;{let r=n.match(su);return e.t=et.COMPLEX,e.d=r?r.map(Number):[],e.s=n.split(su)||[],e}}else return e.n=t,e},uu=(i,e)=>(e.t=i._valueType,e.n=i._toNumber,e.u=i._unit,e.o=null,e.d=Xt(i._toNumbers),e.s=Xt(i._strings),e),un=pl()});var Ho,Fi,Go=Ae(()=>{cn();xt();vt();Ho=(i,e,t,n,s)=>{let r=i.parent,o=i.duration,a=i.completed,l=i.iterationDuration,c=i.iterationCount,h=i._currentIteration,u=i._loopDelay,d=i._reversed,f=i._alternate,m=i._hasChildren,_=i._delay,g=i._currentTime,p=_+l,y=e-_,S=Se(g,-_,o),b=Se(y,-_,o),E=y-g,A=b>0,R=b>=o,I=o<=ze,v=s===$t.FORCE,M=0,C=y,D=0;if(c>1){let V=~~(b/(l+(R?0:u)));i._currentIteration=Se(V,0,c),R&&i._currentIteration--,M=i._currentIteration%2,C=b%(l+u)||0}let N=d^(f&&M),P=i._ease,z=R?N?0:o:N?l-C:C;P&&(z=l*P(z/l)||0);let F=(r?r.backwards:y<g)?!N:!!N;if(i._currentTime=y,i._iterationTime=z,i.backwards=F,A&&!i.began?(i.began=!0,!t&&!(r&&(F||!r.began))&&i.onBegin(i)):y<=0&&(i.began=!1),!t&&!m&&A&&i._currentIteration!==h&&i.onLoop(i),v||s===$t.AUTO&&(e>=_&&e<=p||e<=_&&S>_||e>=p&&S!==o)||z>=p&&S!==o||z<=_&&S>0||e<=S&&S===o&&a||R&&!a&&I){if(A&&(i.computeDeltaTime(S),t||i.onBeforeUpdate(i)),!m){let V=v||(F?E*-1:E)>=Ce.tickThreshold,W=i._offset+(r?r._offset:0)+_+z,H=i._head,Z,te,ge,_e,He=0;for(;H;){let qe=H._composition,q=H._currentTime,J=H._changeDuration,he=H._absoluteStartTime+H._changeDuration,Ue=H._nextRep,ye=H._prevRep,Ye=qe!==It.none;if((V||(q!==J||W<=he+(Ue?Ue._delay:0))&&(q!==0||W>=H._absoluteStartTime))&&(!Ye||!H._isOverridden&&(!H._isOverlapped||W<=he)&&(!Ue||Ue._isOverridden||W<=Ue._absoluteStartTime)&&(!ye||ye._isOverridden||W>=ye._absoluteStartTime+ye._changeDuration+H._delay))){let ut=H._currentTime=Se(z-H._startTime,0,J),De=H._ease(ut/H._updateDuration),Je=H._modifier,rt=H._valueType,Fe=H._tweenType,dt=Fe===Tt.OBJECT,L=rt===et.NUMBER,mt=L&&dt||De===0||De===1?-1:Ce.precision,Ze,ht;if(L)Ze=ht=Je(ue(Nn(H._fromNumber,H._toNumber,De),mt));else if(rt===et.UNIT)ht=Je(ue(Nn(H._fromNumber,H._toNumber,De),mt)),Ze=`${ht}${H._unit}`;else if(rt===et.COLOR){let oe=H._fromNumbers,w=H._toNumbers,x=ue(Se(Je(Nn(oe[0],w[0],De)),0,255),0),O=ue(Se(Je(Nn(oe[1],w[1],De)),0,255),0),K=ue(Se(Je(Nn(oe[2],w[2],De)),0,255),0),j=Se(Je(ue(Nn(oe[3],w[3],De),mt)),0,1);if(Ze=`rgba(${x},${O},${K},${j})`,Ye){let $=H._numbers;$[0]=x,$[1]=O,$[2]=K,$[3]=j}}else if(rt===et.COMPLEX){Ze=H._strings[0];for(let oe=0,w=H._toNumbers.length;oe<w;oe++){let x=Je(ue(Nn(H._fromNumbers[oe],H._toNumbers[oe],De),mt)),O=H._strings[oe+1];Ze+=`${O?x+O:x}`,Ye&&(H._numbers[oe]=x)}}if(Ye&&(H._number=ht),!n&&qe!==It.blend){let oe=H.property;Z=H.target,dt?Z[oe]=Ze:Fe===Tt.ATTRIBUTE?Z.setAttribute(oe,Ze):(te=Z.style,Fe===Tt.TRANSFORM?(Z!==ge&&(ge=Z,_e=Z[Di]),_e[oe]=Ze,He=1):Fe===Tt.CSS?te[oe]=Ze:Fe===Tt.CSS_VAR&&te.setProperty(oe,Ze)),A&&(D=1)}else H._value=Ze}if(He&&H._renderTransforms){let ut=ln;for(let De in _e)ut+=`${Pr[De]}${_e[De]}) `;te.transform=ut,He=0}H=H._next}!t&&D&&i.onRender(i)}!t&&A&&i.onUpdate(i)}return r&&I?!t&&(r.began&&!F&&y>0&&!a||F&&y<=ze&&a)&&(i.onComplete(i),i.completed=!F):A&&R?c===1/0?i._startTime+=i.duration:i._currentIteration>=c-1&&(i.paused=!0,!a&&!m&&(i.completed=!0,!t&&!(r&&(F||!r.began))&&(i.onComplete(i),i._resolve(i)))):i.completed=!1,D},Fi=(i,e,t,n,s)=>{let r=i._currentIteration;if(Ho(i,e,t,n,s),i._hasChildren){let o=i,a=o.backwards,l=n?e:o._iterationTime,c=ii(),h=0,u=!0;if(!n&&o._currentIteration!==r){let d=o.iterationDuration;ot(o,f=>{if(!a)!f.completed&&!f.backwards&&f._currentTime<f.iterationDuration&&Ho(f,d,t,1,$t.FORCE),f.began=!1,f.completed=!1;else{let m=f.duration,_=f._offset+f._delay,g=_+m;!t&&m<=ze&&(!_||g===d)&&f.onComplete(f)}}),t||o.onLoop(o)}ot(o,d=>{let f=ue((l-d._offset)*d._speed,12),m=d._fps<o._fps?d.requestTick(c):s;h+=Ho(d,f,t,n,m),!d.completed&&u&&(u=!1)},a),!t&&h&&o.onRender(o),(u||a)&&o._currentTime>=o.duration&&(o.paused=!0,o.completed||(o.completed=!0,t||(o.onComplete(o),o._resolve(o))))}}});var Op,Fr,Zs,Or=Ae(()=>{xt();vt();Op={},Fr=(i,e,t)=>{if(t===Tt.TRANSFORM){let n=Ir.get(i);return n||i}else if(t===Tt.CSS||t===Tt.ATTRIBUTE&&ul(e)&&i in e.style){let n=Op[i];if(n)return n;{let s=i&&Dr(i);return Op[i]=s,s}}else return i},Zs=i=>{if(i._hasChildren)ot(i,Zs,!0);else{let e=i;e.pause(),ot(e,t=>{let n=t.property,s=t.target;if(s[Li]){let r=s.style,o=t._inlineValue,a=si(o)||o===ln;if(t._tweenType===Tt.TRANSFORM){let l=s[Di];if(a?delete l[n]:l[n]=o,t._renderTransforms)if(!Object.keys(l).length)r.removeProperty("transform");else{let c=ln;for(let h in l)c+=Pr[h]+l[h]+") ";r.transform=c}}else a?r.removeProperty(Dr(n)):r[n]=o;e._tail===t&&e.targets.forEach(l=>{l.getAttribute&&l.getAttribute("style")===ln&&l.removeAttribute("style")})}})}return i}});var Br,du=Ae(()=>{xt();cn();Br=class{constructor(e=0){this.deltaTime=0,this._currentTime=e,this._lastTickTime=e,this._startTime=e,this._lastTime=e,this._scheduledTime=0,this._frameDuration=Vt/Fo,this._fps=Fo,this._speed=1,this._hasChildren=!1,this._head=null,this._tail=null}get fps(){return this._fps}set fps(e){let t=this._frameDuration,n=+e,s=n<ze?ze:n,r=Vt/s;s>Lr.frameRate&&(Lr.frameRate=s),this._fps=s,this._frameDuration=r,this._scheduledTime+=r-t}get speed(){return this._speed}set speed(e){let t=+e;this._speed=t<ze?ze:t}requestTick(e){let t=this._scheduledTime;if(this._lastTickTime=e,e<t)return $t.NONE;let n=this._frameDuration,s=e-t;return this._scheduledTime+=s<n?n:s,$t.AUTO}computeDeltaTime(e){let t=e-this._lastTime;return this.deltaTime=t,this._lastTime=e,t}}});var ss,Bp,ml=Ae(()=>{xt();vt();Go();ss={animation:null,update:Ne},Bp=i=>{let e=ss.animation;return e||(e={duration:ze,computeDeltaTime:Ne,_offset:0,_delay:0,_head:null,_tail:null},ss.animation=e,ss.update=()=>{i.forEach(t=>{for(let n in t){let s=t[n],r=s._head;if(r){let o=r._valueType,a=o===et.COMPLEX||o===et.COLOR?Xt(r._fromNumbers):null,l=r._fromNumber,c=s._tail;for(;c&&c!==r;){if(a)for(let h=0,u=c._numbers.length;h<u;h++)a[h]+=c._numbers[h];else l+=c._number;c=c._prevAdd}r._toNumber=l,r._toNumbers=a}}}),Ho(e,1,1,0,$t.FORCE)}),e}});var kp,ix,fu,Zt,zp,sx,pu=Ae(()=>{cn();xt();vt();du();Go();ml();kp=an?requestAnimationFrame:setImmediate,ix=an?cancelAnimationFrame:clearImmediate,fu=class extends Br{constructor(e){super(e),this.useDefaultMainLoop=!0,this.pauseOnDocumentHidden=!0,this.defaults=Lr,this.paused=!0,this.reqId=0}update(){let e=this._currentTime=ii();if(this.requestTick(e)){this.computeDeltaTime(e);let t=this._speed,n=this._fps,s=this._head;for(;s;){let r=s._next;s.paused?(Yn(this,s),this._hasChildren=!!this._tail,s._running=!1,s.completed&&!s._cancelled&&s.cancel()):Fi(s,(e-s._startTime)*s._speed*t,0,0,s._fps<n?s.requestTick(e):$t.AUTO),s=r}ss.update()}}wake(){return this.useDefaultMainLoop&&!this.reqId&&(this.requestTick(ii()),this.reqId=kp(zp)),this}pause(){if(this.reqId)return this.paused=!0,sx()}resume(){if(this.paused)return this.paused=!1,ot(this,e=>e.resetTime()),this.wake()}get speed(){return this._speed*(Ce.timeScale===1?1:Vt)}set speed(e){this._speed=e*Ce.timeScale,ot(this,t=>t.speed=t._speed)}get timeUnit(){return Ce.timeScale===1?"ms":"s"}set timeUnit(e){let n=e==="s",s=n?.001:1;if(Ce.timeScale!==s){Ce.timeScale=s,Ce.tickThreshold=200*s;let r=n?.001:Vt;this.defaults.duration*=r,this._speed*=r}}get precision(){return Ce.precision}set precision(e){Ce.precision=e}},Zt=(()=>{let i=new fu(ii());return an&&(ru.engine=i,Re.addEventListener("visibilitychange",()=>{i.pauseOnDocumentHidden&&(Re.hidden?i.pause():i.resume())})),i})(),zp=()=>{Zt._head?(Zt.reqId=kp(zp),Zt.update()):Zt.reqId=0},sx=()=>(ix(Zt.reqId),Zt.reqId=0,Zt)});var gl,Xo,rx,Wo,_l,mu,Vp,ai,kr=Ae(()=>{xt();vt();Or();pu();ml();gl={_rep:new WeakMap,_add:new Map},Xo=(i,e,t="_rep")=>{let n=gl[t],s=n.get(i);return s||(s={},n.set(i,s)),s[e]?s[e]:s[e]={_head:null,_tail:null}},rx=(i,e)=>i._isOverridden||i._absoluteStartTime>e._absoluteStartTime,Wo=i=>{i._isOverlapped=1,i._isOverridden=1,i._changeDuration=ze,i._currentTime=ze},_l=(i,e)=>{let t=i._composition;if(t===It.replace){let n=i._absoluteStartTime;Sn(e,i,rx,"_prevRep","_nextRep");let s=i._prevRep;if(s){let r=s.parent,o=s._absoluteStartTime+s._changeDuration;if(i.parent.id!==r.id&&r.iterationCount>1&&o+(r.duration-r.iterationDuration)>n){Wo(s);let c=s._prevRep;for(;c&&c.parent.id===r.id;)Wo(c),c=c._prevRep}let a=n-i._delay;if(o>a){let c=s._startTime,h=o-(c+s._updateDuration),u=ue(a-h-c,12);s._changeDuration=u,s._currentTime=u,s._isOverlapped=1,u<ze&&Wo(s)}let l=!0;if(ot(r,c=>{c._isOverlapped||(l=!1)}),l){let c=r.parent;if(c){let h=!0;ot(c,u=>{u!==r&&ot(u,d=>{d._isOverlapped||(h=!1)})}),h&&c.cancel()}else r.cancel()}}}else if(t===It.blend){let n=Xo(i.target,i.property,"_add"),s=Bp(gl._add),r=n._head;r||(r={...i},r._composition=It.replace,r._updateDuration=ze,r._startTime=0,r._numbers=Xt(i._fromNumbers),r._number=0,r._next=null,r._prev=null,Sn(n,r),Sn(s,r));let o=i._toNumber;if(i._fromNumber=r._fromNumber-o,i._toNumber=0,i._numbers=Xt(i._fromNumbers),i._number=0,r._fromNumber=o,i._toNumbers){let a=Xt(i._toNumbers);a&&a.forEach((l,c)=>{i._fromNumbers[c]=r._fromNumbers[c]-l,i._toNumbers[c]=0}),r._fromNumbers=a}Sn(n,i,null,"_prevAdd","_nextAdd")}return i},mu=i=>{let e=i._composition;if(e!==It.none){let t=i.target,n=i.property,o=gl._rep.get(t)[n];if(Yn(o,i,"_prevRep","_nextRep"),e===It.blend){let a=gl._add,l=a.get(t);if(!l)return;let c=l[n],h=ss.animation;Yn(c,i,"_prevAdd","_nextAdd");let u=c._head;if(u&&u===c._tail){Yn(c,u,"_prevAdd","_nextAdd"),Yn(h,u);let d=!0;for(let f in l)if(l[f]._head){d=!1;break}d&&a.delete(t)}}}return i},Vp=(i,e,t)=>{let n=!1;return ot(e,s=>{let r=s.target;if(i.includes(r)){let o=s.property,a=s._tweenType,l=Fr(t,r,a);(!l||l&&l===o)&&(s.parent._tail===s&&s._tweenType===Tt.TRANSFORM&&s._prev&&s._prev._tweenType===Tt.TRANSFORM&&(s._prev._renderTransforms=1),Yn(e,s),mu(s),n=!0)}},!0),n},ai=(i,e,t)=>{let n=e||Zt,s;if(n._hasChildren){let r=0;ot(n,o=>{if(!o._hasChildren)if(s=Vp(i,o,t),s&&!o._head)o.cancel(),Yn(n,o);else{let l=o._offset+o._delay+o.duration;l>r&&(r=l)}o._head?ai(i,o,t):o._hasChildren=!1},!0),ie(n.iterationDuration)||(n.iterationDuration=r)}else s=Vp(i,n,t);s&&!n._head&&(n._hasChildren=!1,n.cancel&&n.cancel())}});var Hp,gu,Gp,tn,zr=Ae(()=>{xt();vt();cn();oi();Go();kr();du();pu();Hp=i=>(i.paused=!0,i.began=!1,i.completed=!1,i),gu=i=>(i._cancelled&&(i._hasChildren?ot(i,gu):ot(i,e=>{e._composition!==It.none&&_l(e,Xo(e.target,e.property))}),i._cancelled=0),i),Gp=0,tn=class extends Br{constructor(e={},t=null,n=0){super(0),++Gp;let{id:s,delay:r,duration:o,reversed:a,alternate:l,loop:c,loopDelay:h,autoplay:u,frameRate:d,playbackRate:f,onComplete:m,onLoop:_,onPause:g,onBegin:p,onBeforeUpdate:y,onUpdate:S}=e;Wt.current&&Wt.current.register(this);let b=t?0:Zt._lastTickTime,E=t?t.defaults:Ce.defaults,A=yt(r)||ie(r)?E.delay:+r,R=yt(o)||ie(o)?1/0:+o,I=fe(c,E.loop),v=fe(h,E.loopDelay),M=I===!0||I===1/0||I<0?1/0:I+1;if(Oo){let D=M===1/0;if(Oo.register(this,e,D)&&D){let P=l?2:1,z=t?Oo.maxNestedInfiniteLoops:Oo.maxInfiniteLoops;M=Math.max(z,P)}}let C=0;t?C=n:(Zt.reqId||Zt.requestTick(ii()),C=(Zt._lastTickTime-Zt._startTime)*Ce.timeScale),this.id=ie(s)?Gp:s,this.parent=t,this.duration=Ys((R+v)*M-v)||ze,this.backwards=!1,this.paused=!0,this.began=!1,this.completed=!1,this.onBegin=p||E.onBegin,this.onBeforeUpdate=y||E.onBeforeUpdate,this.onUpdate=S||E.onUpdate,this.onLoop=_||E.onLoop,this.onPause=g||E.onPause,this.onComplete=m||E.onComplete,this.iterationDuration=R,this.iterationCount=M,this._autoplay=t?!1:fe(u,E.autoplay),this._offset=C,this._delay=A,this._loopDelay=v,this._iterationTime=0,this._currentIteration=0,this._resolve=Ne,this._running=!1,this._reversed=+fe(a,E.reversed),this._reverse=this._reversed,this._cancelled=0,this._alternate=fe(l,E.alternate),this._prev=null,this._next=null,this._lastTickTime=b,this._startTime=b,this._lastTime=b,this._fps=fe(d,E.frameRate),this._speed=fe(f,E.playbackRate)}get cancelled(){return!!this._cancelled}set cancelled(e){e?this.cancel():this.reset(!0).play()}get currentTime(){return Se(ue(this._currentTime,Ce.precision),-this._delay,this.duration)}set currentTime(e){let t=this.paused;this.pause().seek(+e),t||this.resume()}get iterationCurrentTime(){return Se(ue(this._iterationTime,Ce.precision),0,this.iterationDuration)}set iterationCurrentTime(e){this.currentTime=this.iterationDuration*this._currentIteration+e}get progress(){return Se(ue(this._currentTime/this.duration,10),0,1)}set progress(e){this.currentTime=this.duration*e}get iterationProgress(){return Se(ue(this._iterationTime/this.iterationDuration,10),0,1)}set iterationProgress(e){let t=this.iterationDuration;this.currentTime=t*this._currentIteration+t*e}get currentIteration(){return this._currentIteration}set currentIteration(e){this.currentTime=this.iterationDuration*Se(+e,0,this.iterationCount-1)}get reversed(){return!!this._reversed}set reversed(e){e?this.reverse():this.play()}get speed(){return super.speed}set speed(e){super.speed=e,this.resetTime()}reset(e=!1){return gu(this),this._reversed&&!this._reverse&&(this.reversed=!1),this._iterationTime=this.iterationDuration,Fi(this,0,1,~~e,$t.FORCE),Hp(this),this._hasChildren&&ot(this,Hp),this}init(e=!1){this.fps=this._fps,this.speed=this._speed,!e&&this._hasChildren&&Fi(this,this.duration,1,~~e,$t.FORCE),this.reset(e);let t=this._autoplay;return t===!0?this.resume():t&&!ie(t.linked)&&t.link(this),this}resetTime(){let e=1/(this._speed*Zt._speed);return this._startTime=ii()-(this._currentTime+this._delay)*e,this}pause(){return this.paused?this:(this.paused=!0,this.onPause(this),this)}resume(){return this.paused?(this.paused=!1,this.duration<=ze&&!this._hasChildren?Fi(this,ze,0,0,$t.FORCE):(this._running||(Sn(Zt,this),Zt._hasChildren=!0,this._running=!0),this.resetTime(),this._startTime-=12,Zt.wake()),this):this}restart(){return this.reset().resume()}seek(e,t=0,n=0){gu(this),this.completed=!1;let s=this.paused;return this.paused=!0,Fi(this,e+this._delay,~~t,~~n,$t.AUTO),s?this:this.resume()}alternate(){let e=this._reversed,t=this.iterationCount,n=this.iterationDuration,s=t===1/0?ko(Ln/n):t;return this._reversed=+(this._alternate&&!(s%2)?e:!e),t===1/0?this.iterationProgress=this._reversed?1-this.iterationProgress:this.iterationProgress:this.seek(n*s-this._currentTime),this.resetTime(),this}play(){return this._reversed&&this.alternate(),this.resume()}reverse(){return this._reversed||this.alternate(),this.resume()}cancel(){return this._hasChildren?ot(this,e=>e.cancel(),!0):ot(this,mu),this._cancelled=1,this.pause()}stretch(e){let t=this.duration,n=is(e);if(t===n)return this;let s=e/t,r=e<=ze;return this.duration=r?ze:n,this.iterationDuration=r?ze:is(this.iterationDuration*s),this._offset*=s,this._delay*=s,this._loopDelay*=s,this}revert(){Fi(this,0,1,0,$t.AUTO);let e=this._autoplay;return e&&e.linked&&e.linked===this&&e.revert(),this.cancel()}complete(e=0){return this.seek(this.duration,e).cancel()}then(e=Ne){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=Ne};return new Promise(s=>(this._resolve=()=>s(n()),this.completed&&this._resolve(),this))}}});function xl(i){let e=wt(i)?Wt.root.querySelectorAll(i):i;if(e instanceof NodeList||e instanceof HTMLCollection)return e}function Un(i){if(si(i))return[];if(!an)return Ft(i)&&i.flat(1/0)||[i];if(Ft(i)){let t=i.flat(1/0),n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];if(!si(o)){let a=xl(o);if(a)for(let l=0,c=a.length;l<c;l++){let h=a[l];if(!si(h)){let u=!1;for(let d=0,f=n.length;d<f;d++)if(n[d]===h){u=!0;break}u||n.push(h)}}else{let l=!1;for(let c=0,h=n.length;c<h;c++)if(n[c]===o){l=!0;break}l||n.push(o)}}}return n}let e=xl(i);return e?Array.from(e):[i]}function Oi(i){let e=Un(i),t=e.length;if(t)for(let n=0;n<t;n++){let s=e[n];if(!s[iu]){s[iu]=!0;let r=ul(s);(s.nodeType||r)&&(s[Li]=!0,s[ll]=r,s[Di]={})}}return e}var Bi=Ae(()=>{cn();xt();vt();});var _u,Wp,Ks,yl=Ae(()=>{xt();vt();_u={deg:1,rad:180/ri,turn:360},Wp={},Ks=(i,e,t,n=!1)=>{let s=e.u,r=e.n;if(e.t===et.UNIT&&s===t)return e;let o=r+s+t,a=Wp[o];if(!ie(a)&&!n)e.n=a;else{let l;if(s in _u)l=r*_u[s]/_u[t];else{let h=i.cloneNode(),u=i.parentNode,d=u&&u!==Re?u:Re.body;d.appendChild(h);let f=h.style;f.width=100+s;let m=h.offsetWidth||100;f.width=100+t;let _=h.offsetWidth||100,g=m/_;d.removeChild(h),l=g*r}e.n=l,Wp[o]=l}return e.t,et.UNIT,e.u=t,e}});var gn,qo=Ae(()=>{gn=i=>i});var Yo,xu,ox,Xp,qp,vs,vl,yu,Yp,$n,Ss=Ae(()=>{xt();vt();qo();Yo=(i=1.68)=>e=>ts(e,+i),xu={in:i=>e=>i(e),out:i=>e=>1-i(1-e),inOut:i=>e=>e<.5?i(e*2)/2:1-i(e*-2+2)/2,outIn:i=>e=>e<.5?(1-i(1-e*2))/2:(i(e*2-1)+1)/2},ox=ri/2,Xp=ri*2,qp={[ln]:Yo,Quad:Yo(2),Cubic:Yo(3),Quart:Yo(4),Quint:Yo(5),Sine:i=>1-Ur(i*ox),Circ:i=>1-qn(1-i*i),Expo:i=>i?ts(2,10*i-10):0,Bounce:i=>{let e,t=4;for(;i<((e=ts(2,--t))-1)/11;);return 1/ts(4,3-t)-7.5625*ts((e*3-2)/22-i,2)},Back:(i=1.7)=>e=>(+i+1)*e*e*e-+i*e*e,Elastic:(i=1,e=.3)=>{let t=Se(+i,1,10),n=Se(+e,ze,2),s=n/Xp*Pp(1/t),r=Xp/n;return o=>o===0||o===1?o:-t*ts(2,-10*(1-o))*Nr((1-o-s)*r)}},vs=(()=>{let i={linear:gn,none:gn};for(let e in xu)for(let t in qp){let n=qp[t],s=xu[e];i[e+t]=t===ln||t==="Back"||t==="Elastic"?(r,o)=>s(n(r,o)):s(n)}return i})(),vl={linear:gn,none:gn},yu=i=>{if(vl[i])return vl[i];if(i.indexOf("(")<=-1){let t=xu[i]||i.includes("Back")||i.includes("Elastic")?vs[i]():vs[i];return t?vl[i]=t:gn}else{let e=i.slice(0,-1).split("("),t=vs[e[0]];return t?vl[i]=t(...e[1].split(",")):gn}},Yp=["steps(","irregular(","linear(","cubicBezier("],$n=i=>{if(wt(i)){for(let t=0,n=Yp.length;t<n;t++)if(Et(i,Yp[t]))return console.warn(`String syntax for \`ease: "${i}"\` has been removed from the core and replaced by importing and passing the easing function directly: \`ease: ${i}\``),gn}return yt(i)?i:wt(i)?yu(i):gn}});var We,nt,Vr,Sl,vu,bl,Hr,Ml,ax,$p,bs,ki,lx,bn,dn,Gr=Ae(()=>{xt();vt();cn();Bi();oi();Or();yl();Ss();zr();kr();ml();We=pl(),nt=pl(),Vr={},Sl={func:null},vu={func:null},bl=[null],Hr=[null,null],Ml={to:null},ax=0,$p=0,lx=(i,e)=>{let t={};if(Ft(i)){let n=[].concat(...i.map(s=>Object.keys(s))).filter(es);for(let s=0,r=n.length;s<r;s++){let o=n[s],a=i.map(l=>{let c={};for(let h in l){let u=l[h];es(h)?h===o&&(c.to=u):c[h]=u}return c});t[o]=a}}else{let n=fe(e.duration,Ce.defaults.duration);Object.keys(i).map(r=>({o:parseFloat(r)/100,p:i[r]})).sort((r,o)=>r.o-o.o).forEach(r=>{let o=r.o,a=r.p;for(let l in a)if(es(l)){let c=t[l];c||(c=t[l]=[]);let h=o*n,u=c.length,d=c[u-1],f={to:a[l]},m=0;for(let _=0;_<u;_++)m+=c[_].duration;u===1&&(f.from=d.to),a.ease&&(f.ease=a.ease),f.duration=h-(u?m:0),c.push(f)}return r});for(let r in t){let o=t[r],a;for(let l=0,c=o.length;l<c;l++){let h=o[l],u=h.ease;h.ease=a||void 0,a=u}o[0].duration||o.shift()}}return t},bn=class extends tn{constructor(e,t,n,s,r=!1,o=0,a=0){super(t,n,s),++$p;let l=Oi(e),c=l.length,h=t.keyframes,u=h?$s(lx(h,t),t):t,{id:d,delay:f,duration:m,ease:_,playbackEase:g,modifier:p,composition:y,onRender:S}=u,b=n?n.defaults:Ce.defaults,E=fe(_,b.ease),A=fe(g,b.playbackEase),R=A?$n(A):null,I=!ie(E.ease),v=I?E.ease:fe(_,R?"linear":b.ease),M=I?E.settlingDuration:fe(m,b.duration),C=fe(f,b.delay),D=p||b.modifier,N=ie(y)&&c>=Vt?It.none:ie(y)?b.composition:y,P=this._offset+(n?n._offset:0);I&&(E.parent=this);let z=NaN,F=NaN,V=0,W=0;for(let H=0;H<c;H++){let Z=l[H],te=o||H,ge=a||c,_e=NaN,He=NaN;for(let qe in u)if(es(qe)){let q=Vo(Z,qe),J=Fr(qe,Z,q),he=u[qe],Ue=Ft(he);if(r&&!Ue&&(Hr[0]=he,Hr[1]=he,he=Hr),Ue){let rt=he.length,Fe=!Pt(he[0]);rt===2&&Fe?(Ml.to=he,bl[0]=Ml,bs=bl):rt>2&&Fe?(bs=[],he.forEach((dt,L)=>{L?L===1?(Hr[1]=dt,bs.push(Hr)):bs.push(dt):Hr[0]=dt})):bs=he}else bl[0]=he,bs=bl;let ye=null,Ye=null,ut=NaN,De=0,Je=0;for(let rt=bs.length;Je<rt;Je++){let Fe=bs[Je];Pt(Fe)?ki=Fe:(Ml.to=Fe,ki=Ml),Sl.func=null,vu.func=null;let dt=hn(ki.to,Z,te,ge,Sl),L;Pt(dt)&&!ie(dt.to)?(ki=dt,L=dt.to):L=dt;let mt=hn(ki.from,Z,te,ge),Ze=ki.ease||v,ht=hn(Ze,Z,te,ge),oe=yt(ht)||wt(ht)?ht:Ze,w=!ie(oe)&&!ie(oe.ease),x=w?oe.ease:oe,O=w?oe.settlingDuration:hn(fe(ki.duration,rt>1?hn(M,Z,te,ge)/rt:M),Z,te,ge),K=hn(fe(ki.delay,Je?0:C),Z,te,ge),j=hn(fe(ki.composition,N),Z,te,ge),$=zt(j)?j:It[j],Ie=ki.modifier||D,ae=!ie(mt),Ee=!ie(L),Oe=Ft(L),re=Oe||ae&&Ee,ce=Ye?De+K:K,Me=ue(P+ce,12);!W&&(ae||Oe)&&(W=1);let ve=Ye;if($!==It.none){ye||(ye=Xo(Z,J));let ne=ye._head;for(;ne&&!ne._isOverridden&&ne._absoluteStartTime<=Me;)if(ve=ne,ne=ne._nextRep,ne&&ne._absoluteStartTime>=Me)for(;ne;)Wo(ne),ne=ne._nextRep}if(re){mn(Oe?hn(L[0],Z,te,ge,vu):mt,We),mn(Oe?hn(L[1],Z,te,ge,Sl):L,nt);let ne=Ni(Z,J,q,Vr);We.t===et.NUMBER&&(ve?ve._valueType===et.UNIT&&(We.t=et.UNIT,We.u=ve._unit):(mn(ne,un),un.t===et.UNIT&&(We.t=et.UNIT,We.u=un.u)))}else Ee?mn(L,nt):Ye?uu(Ye,nt):mn(n&&ve&&ve.parent.parent===n?ve._value:Ni(Z,J,q,Vr),nt),ae?mn(mt,We):Ye?uu(Ye,We):mn(n&&ve&&ve.parent.parent===n?ve._value:Ni(Z,J,q,Vr),We);if(We.o&&(We.n=Ui(ve?ve._toNumber:mn(Ni(Z,J,q,Vr),un).n,We.n,We.o)),nt.o&&(nt.n=Ui(We.n,nt.n,nt.o)),We.t!==nt.t){if(We.t===et.COMPLEX||nt.t===et.COMPLEX){let ne=We.t===et.COMPLEX?We:nt,ee=We.t===et.COMPLEX?nt:We;ee.t=et.COMPLEX,ee.s=Xt(ne.s),ee.d=ne.d.map(()=>ee.n)}else if(We.t===et.UNIT||nt.t===et.UNIT){let ne=We.t===et.UNIT?We:nt,ee=We.t===et.UNIT?nt:We;ee.t=et.UNIT,ee.u=ne.u}else if(We.t===et.COLOR||nt.t===et.COLOR){let ne=We.t===et.COLOR?We:nt,ee=We.t===et.COLOR?nt:We;ee.t=et.COLOR,ee.s=ne.s,ee.d=[0,0,0,1]}}if(We.u!==nt.u){let ne=nt.u?We:nt;ne=Ks(Z,ne,nt.u?nt.u:We.u,!1)}if(nt.d&&We.d&&nt.d.length!==We.d.length){let ne=We.d.length>nt.d.length?We:nt,ee=ne===We?nt:We;ee.d=ne.d.map((be,se)=>ie(ee.d[se])?0:ee.d[se]),ee.s=Xt(ne.s)}let le=ue(+O||ze,12),je=Vr[J];si(je)||(Vr[J]=null);let U={parent:this,id:ax++,property:J,target:Z,_value:null,_toFunc:Sl.func,_fromFunc:vu.func,_ease:$n(x),_fromNumbers:Xt(We.d),_toNumbers:Xt(nt.d),_strings:Xt(nt.s),_fromNumber:We.n,_toNumber:nt.n,_numbers:Xt(We.d),_number:We.n,_unit:nt.u,_modifier:Ie,_currentTime:0,_startTime:ce,_delay:+K,_updateDuration:le,_changeDuration:le,_absoluteStartTime:Me,_tweenType:q,_valueType:nt.t,_composition:$,_isOverlapped:0,_isOverridden:0,_renderTransforms:0,_inlineValue:je,_prevRep:null,_nextRep:null,_prevAdd:null,_nextAdd:null,_prev:null,_next:null};$!==It.none&&_l(U,ye),isNaN(ut)&&(ut=U._startTime),De=ue(ce+le,12),Ye=U,V++,Sn(this,U)}(isNaN(F)||ut<F)&&(F=ut),(isNaN(z)||De>z)&&(z=De),q===Tt.TRANSFORM&&(_e=V-Je,He=V)}if(!isNaN(_e)){let qe=0;ot(this,q=>{qe>=_e&&qe<He&&(q._renderTransforms=1,q._composition===It.blend&&ot(ss.animation,J=>{J.id===q.id&&(J._renderTransforms=1)})),qe++})}}c||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation."),F?(ot(this,H=>{H._startTime-H._delay||(H._delay-=F),H._startTime-=F}),z-=F):F=0,z||(z=ze,this.iterationCount=0),this.targets=l,this.id=ie(d)?$p:d,this.duration=z===ze?ze:Ys((z+this._loopDelay)*this.iterationCount-this._loopDelay)||ze,this.onRender=S||b.onRender,this._ease=R,this._delay=F,this.iterationDuration=z,!this._autoplay&&W&&this.onRender(this)}stretch(e){let t=this.duration;if(t===is(e))return this;let n=e/t;return ot(this,s=>{s._updateDuration=is(s._updateDuration*n),s._changeDuration=is(s._changeDuration*n),s._currentTime*=n,s._startTime*=n,s._absoluteStartTime*=n}),super.stretch(e)}refresh(){return ot(this,e=>{let t=e._toFunc,n=e._fromFunc;(t||n)&&(n?(mn(n(),We),We.u!==e._unit&&e.target[Li]&&Ks(e.target,We,e._unit,!0),e._fromNumbers=Xt(We.d),e._fromNumber=We.n):t&&(mn(Ni(e.target,e.property,e._tweenType),un),e._fromNumbers=Xt(un.d),e._fromNumber=un.n),t&&(mn(t(),nt),e._toNumbers=Xt(nt.d),e._strings=Xt(nt.s),e._toNumber=nt.o?Ui(e._fromNumber,nt.n,nt.o):nt.n))}),this.duration===ze&&this.restart(),this}revert(){return super.revert(),Zs(this)}then(e){return super.then(e)}},dn=(i,e)=>new bn(i,e,null,0,!1).init()});var cx,Js,Su=Ae(()=>{xt();vt();oi();cx=(i,e)=>{if(Et(e,"<")){let t=e[1]==="<",n=i._tail,s=n?n._offset+n._delay:0;return t?s:s+n.duration}},Js=(i,e)=>{let t=i.iterationDuration;if(t===ze&&(t=0),ie(e))return t;if(zt(+e))return+e;let n=e,s=i?i.labels:null,r=!si(s),o=cx(i,n),a=!ie(o),l=hl.exec(n);if(l){let c=l[0],h=n.split(c),u=r&&h[0]?s[h[0]]:t,d=a?o:r?u:t,f=+h[1];return Ui(d,f,c[0])}else return a?o:r?ie(s[n])?t:s[n]:t}});function hx(i){return Ys((i.iterationDuration+i._loopDelay)*i.iterationCount-i._loopDelay)||ze}function bu(i,e,t,n,s,r){let a=zt(i.duration)&&i.duration<=ze?t-ze:t;e.composition&&Fi(e,a,1,1,$t.AUTO);let l=n?new bn(n,i,e,a,!1,s,r):new tn(i,e,a);return e.composition&&l.init(!0),Sn(e,l),ot(e,c=>{let u=c._offset+c._delay+c.duration;u>e.iterationDuration&&(e.iterationDuration=u)}),e.duration=hx(e),e}var Zp,Tl,Mn,Kp=Ae(()=>{cn();xt();vt();oi();Bi();Go();Or();kr();Gr();zr();Ss();Su();Zp=0,Tl=class extends tn{constructor(e={}){super(e,null,0),++Zp,this.id=ie(e.id)?Zp:e.id,this.duration=0,this.labels={};let t=e.defaults,n=Ce.defaults;this.defaults=t?$s(t,n):n,this.composition=fe(e.composition,!0),this.onRender=e.onRender||n.onRender;let s=fe(e.playbackEase,n.playbackEase);this._ease=s?$n(s):null,this.iterationDuration=0}add(e,t,n){let s=Pt(t),r=Pt(e);if(s||r){if(this._hasChildren=!0,s){let o=t;if(yt(n)){let a=n,l=Un(e),c=this.duration,h=this.iterationDuration,u=o.id,d=0,f=l.length;l.forEach(m=>{let _={...o};this.duration=c,this.iterationDuration=h,ie(u)||(_.id=u+"-"+d),bu(_,this,Js(this,a(m,d,f,this)),m,d,f),d++})}else bu(o,this,Js(this,n),e)}else bu(e,this,Js(this,t));return this.composition&&this.init(!0),this}}sync(e,t){if(ie(e)||e&&ie(e.pause))return this;e.pause();let n=+(e.effect?e.effect.getTiming().duration:e.duration);return!ie(e)&&!ie(e.persist)&&(e.persist=!0),this.add(e,{currentTime:[0,n],duration:n,delay:0,ease:"linear",playbackEase:"linear"},t)}set(e,t,n){return ie(t)?this:(t.duration=ze,t.composition=It.replace,this.add(e,t,n))}call(e,t){return ie(e)||e&&!yt(e)?this:this.add({duration:0,delay:0,onComplete:()=>e(this)},t)}label(e,t){return ie(e)||e&&!wt(e)?this:(this.labels[e]=Js(this,t),this)}remove(e,t){return ai(Un(e),this,t),this}stretch(e){let t=this.duration;if(t===is(e))return this;let n=e/t,s=this.labels;ot(this,r=>r.stretch(r.duration*n));for(let r in s)s[r]*=n;return super.stretch(e)}refresh(){return ot(this,e=>{e.refresh&&e.refresh()}),this}revert(){return super.revert(),ot(this,e=>e.revert,!0),Zs(this)}then(e){return super.then(e)}},Mn=i=>new Tl(i).init()});var El,Jp=Ae(()=>{xt();cn();vt();Gr();Ss();El=class{constructor(e,t){Wt.current&&Wt.current.register(this);let n=()=>{this.callbacks.completed&&this.callbacks.reset(),this.callbacks.play()},s=()=>{if(this.callbacks.completed)return;let l=!0;for(let c in this.animations)if(!this.animations[c].paused&&l){l=!1;break}l&&this.callbacks.complete()},r={onBegin:n,onComplete:s,onPause:s},o={v:1,autoplay:!1},a={};if(this.targets=[],this.animations={},this.callbacks=null,!(ie(e)||ie(t))){for(let l in t){let c=t[l];es(l)?a[l]=c:Et(l,"on")?o[l]=c:r[l]=c}this.callbacks=new bn({v:0},o);for(let l in a){let c=a[l],h=Pt(c),u={},d="+=0";if(h){let _=c.unit;wt(_)&&(d+=_)}else u.duration=c;u[l]=h?$s({to:d},c):d;let f=$s(r,u);f.composition=It.replace,f.autoplay=!1;let m=this.animations[l]=new bn(e,f,null,0,!1).init();this.targets.length||this.targets.push(...m.targets),this[l]=(_,g,p)=>{let y=m._head;if(ie(_)&&y){let S=y._numbers;return S&&S.length?S:y._modifier(y._number)}else return ot(m,S=>{if(Ft(_))for(let b=0,E=_.length;b<E;b++)ie(S._numbers[b])||(S._fromNumbers[b]=S._modifier(S._numbers[b]),S._toNumbers[b]=_[b]);else S._fromNumber=S._modifier(S._number),S._toNumber=_;ie(p)||(S._ease=$n(p)),S._currentTime=0}),ie(g)||m.stretch(g),m.reset(!0).resume(),this}}}}revert(){for(let e in this.animations)this[e]=Ne,this.animations[e].revert();return this.animations={},this.targets.length=0,this.callbacks&&this.callbacks.revert(),this}}});var Mu={};al(Mu,{clamp:()=>Se,damp:()=>_x,degToRad:()=>mx,lerp:()=>Nn,mapRange:()=>Wr,padEnd:()=>fx,padStart:()=>dx,radToDeg:()=>gx,round:()=>ue,roundPad:()=>ux,snap:()=>ns,wrap:()=>px});var ux,dx,fx,px,Wr,mx,gx,_x,Tu=Ae(()=>{vt();vt();ux=(i,e)=>(+i).toFixed(e),dx=(i,e,t)=>`${i}`.padStart(e,t),fx=(i,e,t)=>`${i}`.padEnd(e,t),px=(i,e,t)=>((i-e)%(t-e)+(t-e))%(t-e)+e,Wr=(i,e,t,n,s)=>n+(i-e)/(t-e)*(s-n),mx=i=>i*Math.PI/180,gx=i=>i*180/Math.PI,_x=(i,e,t,n)=>n?n===1?e:Nn(i,e,1-Math.exp(-n*t*.1)):i});var Fn,Eu,wu,jp=Ae(()=>{xt();cn();vt();oi();Fn=Vt*10,Eu=class{constructor(e={}){let t=!ie(e.bounce)||!ie(e.duration);this.timeStep=.02,this.restThreshold=5e-4,this.restDuration=200,this.maxDuration=6e4,this.maxRestSteps=this.restDuration/this.timeStep/Vt,this.maxIterations=this.maxDuration/this.timeStep/Vt,this.bn=Se(fe(e.bounce,.5),-1,1),this.pd=Se(fe(e.duration,628),10*Ce.timeScale,Fn*Ce.timeScale),this.m=Se(fe(e.mass,1),1,Fn),this.s=Se(fe(e.stiffness,100),ze,Fn),this.d=Se(fe(e.damping,10),ze,Fn),this.v=Se(fe(e.velocity,0),-Fn,Fn),this.w0=0,this.zeta=0,this.wd=0,this.b=0,this.completed=!1,this.solverDuration=0,this.settlingDuration=0,this.parent=null,this.onComplete=e.onComplete||Ne,t&&this.calculateSDFromBD(),this.compute(),this.ease=n=>{let s=n*this.settlingDuration,r=this.completed,o=this.pd;return s>=o&&!r&&(this.completed=!0,this.onComplete(this.parent)),s<o&&r&&(this.completed=!1),n===0||n===1?n:this.solve(n*this.solverDuration)}}solve(e){let{zeta:t,w0:n,wd:s,b:r}=this,o=e;return t<1?o=Bo(-o*t*n)*(1*Ur(s*o)+r*Nr(s*o)):t===1?o=(1+r*o)*Bo(-o*n):o=((1+r)*Bo((-t*n+s)*o)+(1-r)*Bo((-t*n-s)*o))/2,1-o}calculateSDFromBD(){let e=Ce.timeScale===1?this.pd/Vt:this.pd;this.m=1,this.v=0,this.s=ts(2*ri/e,2),this.bn>=0?this.d=(1-this.bn)*4*ri/e:this.d=4*ri/(e*(1+this.bn)),this.s=ue(Se(this.s,ze,Fn),3),this.d=ue(Se(this.d,ze,300),3)}calculateBDFromSD(){let e=2*ri/qn(this.s);this.pd=e*(Ce.timeScale===1?Vt:1),this.d/(2*qn(this.s))<=1?this.bn=1-this.d*e/(4*ri):this.bn=4*ri/(this.d*e)-1,this.bn=ue(Se(this.bn,-1,1),3),this.pd=ue(Se(this.pd,10*Ce.timeScale,Fn*Ce.timeScale),3)}compute(){let{maxRestSteps:e,maxIterations:t,restThreshold:n,timeStep:s,m:r,d:o,s:a,v:l}=this,c=this.w0=Se(qn(a/r),ze,Vt),h=this.zeta=o/(2*qn(a*r));h<1?(this.wd=c*qn(1-h*h),this.b=(h*c+-l)/this.wd):h===1?(this.wd=0,this.b=-l+c):(this.wd=c*qn(h*h-1),this.b=(h*c+-l)/this.wd);let u=0,d=0,f=0;for(;d<=e&&f<=t;)Dn(1-this.solve(u))<n?d++:d=0,this.solverDuration=u,u+=s,f++;this.settlingDuration=ue(this.solverDuration*Vt,0)*Ce.timeScale}get bounce(){return this.bn}set bounce(e){this.bn=Se(fe(e,1),-1,1),this.calculateSDFromBD(),this.compute()}get duration(){return this.pd}set duration(e){this.pd=Se(fe(e,1),10*Ce.timeScale,Fn*Ce.timeScale),this.calculateSDFromBD(),this.compute()}get stiffness(){return this.s}set stiffness(e){this.s=Se(fe(e,100),ze,Fn),this.calculateBDFromSD(),this.compute()}get damping(){return this.d}set damping(e){this.d=Se(fe(e,10),ze,Fn),this.calculateBDFromSD(),this.compute()}get mass(){return this.m}set mass(e){this.m=Se(fe(e,1),1,Fn),this.compute()}get velocity(){return this.v}set velocity(e){this.v=Se(fe(e,0),-Fn,Fn),this.compute()}},wu=i=>new Eu(i)});var Au,wl,Ru,Cu=Ae(()=>{vt();Au={_head:null,_tail:null},wl=(i,e,t)=>{let n=Au._head,s;for(;n;){let r=n._next,o=n.$el===i,a=!e||n.property===e,l=!t||n.parent===t;if(o&&a&&l){s=n.animation;try{s.commitStyles()}catch{}s.cancel(),Yn(Au,n);let c=n.parent;c&&(c._completed++,c.animations.length===c._completed&&(c.completed=!0,c.paused=!0,c.muteCallbacks||(c.onComplete(c),c._resolve(c))))}n=r}return s},Ru=(i,e,t,n,s)=>{let r=e.animate(n,s),o=s.delay+ +s.duration*s.iterations;r.playbackRate=i._speed,i.paused&&r.pause(),i.duration<o&&(i.duration=o,i.controlAnimation=r),i.animations.push(r),wl(e,t),Sn(Au,{parent:i,animation:r,$el:e,property:t,_next:null,_prev:null});let a=()=>wl(e,t,i);return r.oncancel=a,r.onremove=a,i.persist||(r.onfinish=a),r}});function zi(i,e,t){let n=Oi(i);if(!n.length)return;let[s]=n,r=Vo(s,e),o=Fr(e,s,r),a=Ni(s,o);if(ie(t))return a;if(mn(a,un),un.t===et.NUMBER||un.t===et.UNIT){if(t===!1)return un.n;{let l=Ks(s,un,t,!1);return`${ue(l.n,Ce.precision)}${l.u}`}}}var gi,Qp,Al=Ae(()=>{cn();xt();vt();Bi();Or();oi();yl();Cu();kr();Gr();gi=(i,e)=>{if(!ie(e))return e.duration=ze,e.composition=fe(e.composition,It.none),new bn(i,e,null,0,!0).resume()},Qp=(i,e,t)=>{let n=Un(i);for(let s=0,r=n.length;s<r;s++)wl(n[s],t,e&&e.controlAnimation&&e);return ai(n,e,t),n}});var Ms,Iu,Pu,Tn,Rl,Xr,Lu,em=Ae(()=>{cn();xt();Bi();vt();oi();Tu();zr();Gr();kr();Jp();Ss();jp();Al();Ms=i=>{i.cancelable&&i.preventDefault()},Iu=class{constructor(e){this.el=e,this.zIndex=0,this.parentElement=null,this.classList={add:Ne,remove:Ne}}get x(){return this.el.x||0}set x(e){this.el.x=e}get y(){return this.el.y||0}set y(e){this.el.y=e}get width(){return this.el.width||0}set width(e){this.el.width=e}get height(){return this.el.height||0}set height(e){this.el.height=e}getBoundingClientRect(){return{top:this.y,right:this.x,bottom:this.y+this.height,left:this.x+this.width}}},Pu=class{constructor(e){this.$el=e,this.inlineTransforms=[],this.point=new DOMPoint,this.inversedMatrix=this.getMatrix().inverse()}normalizePoint(e,t){return this.point.x=e,this.point.y=t,this.point.matrixTransform(this.inversedMatrix)}traverseUp(e){let t=this.$el.parentElement,n=0;for(;t&&t!==Re;)e(t,n),t=t.parentElement,n++}getMatrix(){let e=new DOMMatrix;return this.traverseUp(t=>{let n=getComputedStyle(t).transform;if(n){let s=new DOMMatrix(n);e.preMultiplySelf(s)}}),e}remove(){this.traverseUp((e,t)=>{this.inlineTransforms[t]=e.style.transform,e.style.transform="none"})}revert(){this.traverseUp((e,t)=>{let n=this.inlineTransforms[t];n===""?e.style.removeProperty("transform"):e.style.transform=n})}},Tn=(i,e)=>i&&yt(i)?i(e):i,Rl=0,Xr=class{constructor(e,t={}){if(!e)return;Wt.current&&Wt.current.register(this);let n=t.x,s=t.y,r=t.trigger,o=t.modifier,a=t.releaseEase,l=a&&$n(a),c=!ie(a)&&!ie(a.ease),h=Pt(n)&&!ie(n.mapTo)?n.mapTo:"translateX",u=Pt(s)&&!ie(s.mapTo)?s.mapTo:"translateY",d=Tn(t.container,this);this.containerArray=Ft(d)?d:null,this.$container=d&&!this.containerArray?Un(d)[0]:Re.body,this.useWin=this.$container===Re.body,this.$scrollContainer=this.useWin?en:this.$container,this.$target=Pt(e)?new Iu(e):Un(e)[0],this.$trigger=Un(r||e)[0],this.fixed=zi(this.$target,"position")==="fixed",this.isFinePointer=!0,this.containerPadding=[0,0,0,0],this.containerFriction=0,this.releaseContainerFriction=0,this.snapX=0,this.snapY=0,this.scrollSpeed=0,this.scrollThreshold=0,this.dragSpeed=0,this.dragThreshold=3,this.maxVelocity=0,this.minVelocity=0,this.velocityMultiplier=0,this.cursor=!1,this.releaseXSpring=c?a:wu({mass:fe(t.releaseMass,1),stiffness:fe(t.releaseStiffness,80),damping:fe(t.releaseDamping,20)}),this.releaseYSpring=c?a:wu({mass:fe(t.releaseMass,1),stiffness:fe(t.releaseStiffness,80),damping:fe(t.releaseDamping,20)}),this.releaseEase=l||vs.outQuint,this.hasReleaseSpring=c,this.onGrab=t.onGrab||Ne,this.onDrag=t.onDrag||Ne,this.onRelease=t.onRelease||Ne,this.onUpdate=t.onUpdate||Ne,this.onSettle=t.onSettle||Ne,this.onSnap=t.onSnap||Ne,this.onResize=t.onResize||Ne,this.onAfterResize=t.onAfterResize||Ne,this.disabled=[0,0];let f={};if(o&&(f.modifier=o),ie(n)||n===!0)f[h]=0;else if(Pt(n)){let m=n,_={};m.modifier&&(_.modifier=m.modifier),m.composition&&(_.composition=m.composition),f[h]=_}else n===!1&&(f[h]=0,this.disabled[0]=1);if(ie(s)||s===!0)f[u]=0;else if(Pt(s)){let m=s,_={};m.modifier&&(_.modifier=m.modifier),m.composition&&(_.composition=m.composition),f[u]=_}else s===!1&&(f[u]=0,this.disabled[1]=1);this.animate=new El(this.$target,f),this.xProp=h,this.yProp=u,this.destX=0,this.destY=0,this.deltaX=0,this.deltaY=0,this.scroll={x:0,y:0},this.coords=[this.x,this.y,0,0],this.snapped=[0,0],this.pointer=[0,0,0,0,0,0,0,0],this.scrollView=[0,0],this.dragArea=[0,0,0,0],this.containerBounds=[-Ln,Ln,Ln,-Ln],this.scrollBounds=[0,0,0,0],this.targetBounds=[0,0,0,0],this.window=[0,0],this.velocityStack=[0,0,0],this.velocityStackIndex=0,this.velocityTime=ii(),this.velocity=0,this.angle=0,this.cursorStyles=null,this.triggerStyles=null,this.bodyStyles=null,this.targetStyles=null,this.touchActionStyles=null,this.transforms=new Pu(this.$target),this.overshootCoords={x:0,y:0},this.overshootTicker=new tn({autoplay:!1,onUpdate:()=>{this.updated=!0,this.manual=!0,this.disabled[0]||this.animate[this.xProp](this.overshootCoords.x,1),this.disabled[1]||this.animate[this.yProp](this.overshootCoords.y,1)},onComplete:()=>{this.manual=!1,this.disabled[0]||this.animate[this.xProp](this.overshootCoords.x,0),this.disabled[1]||this.animate[this.yProp](this.overshootCoords.y,0)}},null,0).init(),this.updateTicker=new tn({autoplay:!1,onUpdate:()=>this.update()},null,0).init(),this.contained=!ie(d),this.manual=!1,this.grabbed=!1,this.dragged=!1,this.updated=!1,this.released=!1,this.canScroll=!1,this.enabled=!1,this.initialized=!1,this.activeProp=this.disabled[1]?h:u,this.animate.callbacks.onRender=()=>{let m=this.updated,g=!(this.grabbed&&m)&&this.released,p=this.x,y=this.y,S=p-this.coords[2],b=y-this.coords[3];this.deltaX=S,this.deltaY=b,this.coords[2]=p,this.coords[3]=y,m&&(S||b)&&this.onUpdate(this),g?(this.computeVelocity(S,b),this.angle=fl(b,S)):this.updated=!1},this.animate.callbacks.onComplete=()=>{!this.grabbed&&this.released&&(this.released=!1),this.manual||(this.deltaX=0,this.deltaY=0,this.velocity=0,this.velocityStack[0]=0,this.velocityStack[1]=0,this.velocityStack[2]=0,this.velocityStackIndex=0,this.onSettle(this))},this.resizeTicker=new tn({autoplay:!1,duration:150*Ce.timeScale,onComplete:()=>{this.onResize(this),this.refresh(),this.onAfterResize(this)}}).init(),this.parameters=t,this.resizeObserver=new ResizeObserver(()=>{this.initialized?this.resizeTicker.restart():this.initialized=!0}),this.enable(),this.refresh(),this.resizeObserver.observe(this.$container),Pt(e)||this.resizeObserver.observe(this.$target)}computeVelocity(e,t){let n=this.velocityTime,s=ii(),r=s-n;if(r<17)return this.velocity;this.velocityTime=s;let o=this.velocityStack,a=this.velocityMultiplier,l=this.minVelocity,c=this.maxVelocity,h=this.velocityStackIndex;o[h]=ue(Se(qn(e*e+t*t)/r*a,l,c),5);let u=zo(o[0],o[1],o[2]);return this.velocity=u,this.velocityStackIndex=(h+1)%3,u}setX(e,t=!1){if(this.disabled[0])return;let n=ue(e,5);return this.overshootTicker.pause(),this.manual=!0,this.updated=!t,this.destX=n,this.snapped[0]=ns(n,this.snapX),this.animate[this.xProp](n,0),this.manual=!1,this}setY(e,t=!1){if(this.disabled[1])return;let n=ue(e,5);return this.overshootTicker.pause(),this.manual=!0,this.updated=!t,this.destY=n,this.snapped[1]=ns(n,this.snapY),this.animate[this.yProp](n,0),this.manual=!1,this}get x(){return ue(this.animate[this.xProp](),Ce.precision)}set x(e){this.setX(e,!1)}get y(){return ue(this.animate[this.yProp](),Ce.precision)}set y(e){this.setY(e,!1)}get progressX(){return Wr(this.x,this.containerBounds[3],this.containerBounds[1],0,1)}set progressX(e){this.setX(Wr(e,0,1,this.containerBounds[3],this.containerBounds[1]),!1)}get progressY(){return Wr(this.y,this.containerBounds[0],this.containerBounds[2],0,1)}set progressY(e){this.setY(Wr(e,0,1,this.containerBounds[0],this.containerBounds[2]),!1)}updateScrollCoords(){let e=ue(this.useWin?en.scrollX:this.$container.scrollLeft,0),t=ue(this.useWin?en.scrollY:this.$container.scrollTop,0),[n,s,r,o]=this.containerPadding,a=this.scrollThreshold;this.scroll.x=e,this.scroll.y=t,this.scrollBounds[0]=t-this.targetBounds[0]+n-a,this.scrollBounds[1]=e-this.targetBounds[1]-s+a,this.scrollBounds[2]=t-this.targetBounds[2]-r+a,this.scrollBounds[3]=e-this.targetBounds[3]+o-a}updateBoundingValues(){let e=this.$container;if(!e)return;let t=this.x,n=this.y,s=this.coords[2],r=this.coords[3];this.coords[2]=0,this.coords[3]=0,this.setX(0,!0),this.setY(0,!0),this.transforms.remove();let o=this.window[0]=en.innerWidth,a=this.window[1]=en.innerHeight,l=this.useWin,c=e.scrollWidth,h=e.scrollHeight,u=this.fixed,d=e.getBoundingClientRect(),[f,m,_,g]=this.containerPadding;this.dragArea[0]=l?0:d.left,this.dragArea[1]=l?0:d.top,this.scrollView[0]=l?Se(c,o,c):c,this.scrollView[1]=l?Se(h,a,h):h,this.updateScrollCoords();let{width:p,height:y,left:S,top:b,right:E,bottom:A}=e.getBoundingClientRect();this.dragArea[2]=ue(l?Se(p,o,o):p,0),this.dragArea[3]=ue(l?Se(y,a,a):y,0);let R=zi(e,"overflow"),I=R==="visible",v=R==="hidden";if(this.canScroll=u?!1:this.contained&&(e===Re.body&&I||!v&&!I)&&(c>this.dragArea[2]+g-m||h>this.dragArea[3]+f-_)&&(!this.containerArray||this.containerArray&&!Ft(this.containerArray)),this.contained){let M=this.scroll.x,C=this.scroll.y,D=this.canScroll,N=this.$target.getBoundingClientRect(),P=D?l?0:e.scrollLeft:0,z=D?l?0:e.scrollTop:0,F=D?this.scrollView[0]-P-p:0,V=D?this.scrollView[1]-z-y:0;this.targetBounds[0]=ue(N.top+C-(l?0:b),0),this.targetBounds[1]=ue(N.right+M-(l?o:E),0),this.targetBounds[2]=ue(N.bottom+C-(l?a:A),0),this.targetBounds[3]=ue(N.left+M-(l?0:S),0),this.containerArray?(this.containerBounds[0]=this.containerArray[0]+f,this.containerBounds[1]=this.containerArray[1]-m,this.containerBounds[2]=this.containerArray[2]-_,this.containerBounds[3]=this.containerArray[3]+g):(this.containerBounds[0]=-ue(N.top-(u?Se(b,0,a):b)+z-f,0),this.containerBounds[1]=-ue(N.right-(u?Se(E,0,o):E)-F+m,0),this.containerBounds[2]=-ue(N.bottom-(u?Se(A,0,a):A)-V+_,0),this.containerBounds[3]=-ue(N.left-(u?Se(S,0,o):S)+P-g,0))}this.transforms.revert(),this.coords[2]=s,this.coords[3]=r,this.setX(t,!0),this.setY(n,!0)}isOutOfBounds(e,t,n){if(!this.contained)return 0;let[s,r,o,a]=e,[l,c]=this.disabled,h=!l&&t<a||!l&&t>r,u=!c&&n<s||!c&&n>o;return h&&!u?1:!h&&u?2:h&&u?3:0}refresh(){let e=this.parameters,t=e.x,n=e.y,s=Tn(e.container,this),r=Tn(e.containerPadding,this)||0,o=Ft(r)?r:[r,r,r,r],a=this.x,l=this.y,c=Tn(e.cursor,this),h={onHover:"grab",onGrab:"grabbing"};if(c){let{onHover:p,onGrab:y}=c;p&&(h.onHover=p),y&&(h.onGrab=y)}let u=Tn(e.dragThreshold,this),d={mouse:3,touch:7};if(zt(u))d.mouse=u,d.touch=u;else if(u){let{mouse:p,touch:y}=u;ie(p)||(d.mouse=p),ie(y)||(d.touch=y)}this.containerArray=Ft(s)?s:null,this.$container=s&&!this.containerArray?Un(s)[0]:Re.body,this.useWin=this.$container===Re.body,this.$scrollContainer=this.useWin?en:this.$container,this.isFinePointer=matchMedia("(pointer:fine)").matches,this.containerPadding=fe(o,[0,0,0,0]),this.containerFriction=Se(fe(Tn(e.containerFriction,this),.8),0,1),this.releaseContainerFriction=Se(fe(Tn(e.releaseContainerFriction,this),this.containerFriction),0,1),this.snapX=Tn(Pt(t)&&!ie(t.snap)?t.snap:e.snap,this),this.snapY=Tn(Pt(n)&&!ie(n.snap)?n.snap:e.snap,this),this.scrollSpeed=fe(Tn(e.scrollSpeed,this),1.5),this.scrollThreshold=fe(Tn(e.scrollThreshold,this),20),this.dragSpeed=fe(Tn(e.dragSpeed,this),1),this.dragThreshold=this.isFinePointer?d.mouse:d.touch,this.minVelocity=fe(Tn(e.minVelocity,this),0),this.maxVelocity=fe(Tn(e.maxVelocity,this),50),this.velocityMultiplier=fe(Tn(e.velocityMultiplier,this),1),this.cursor=c===!1?!1:h,this.updateBoundingValues();let[f,m,_,g]=this.containerBounds;this.setX(Se(a,g,m),!0),this.setY(Se(l,f,_),!0)}update(){if(this.updateScrollCoords(),this.canScroll){let[y,S,b,E]=this.containerPadding,[A,R]=this.scrollView,I=this.dragArea[2],v=this.dragArea[3],M=this.scroll.x,C=this.scroll.y,D=this.$container.scrollWidth,N=this.$container.scrollHeight,P=this.useWin?Se(D,this.window[0],D):D,z=this.useWin?Se(N,this.window[1],N):N,F=A-P,V=R-z;this.dragged&&F>0&&(this.coords[0]-=F,this.scrollView[0]=P),this.dragged&&V>0&&(this.coords[1]-=V,this.scrollView[1]=z);let W=this.scrollSpeed*10,H=this.scrollThreshold,[Z,te]=this.coords,[ge,_e,He,qe]=this.scrollBounds,q=ue(Se((te-ge+y)/H,-1,0)*W,0),J=ue(Se((Z-_e-S)/H,0,1)*W,0),he=ue(Se((te-He-b)/H,0,1)*W,0),Ue=ue(Se((Z-qe+E)/H,-1,0)*W,0);if(q||he||Ue||J){let[ye,Ye]=this.disabled,ut=M,De=C;ye||(ut=ue(Se(M+(Ue||J),0,A-I),0),this.coords[0]-=M-ut),Ye||(De=ue(Se(C+(q||he),0,R-v),0),this.coords[1]-=C-De),this.useWin?this.$scrollContainer.scrollBy(-(M-ut),-(C-De)):this.$scrollContainer.scrollTo(ut,De)}}let[e,t,n,s]=this.containerBounds,[r,o,a,l,c,h]=this.pointer;this.coords[0]+=(r-c)*this.dragSpeed,this.coords[1]+=(o-h)*this.dragSpeed,this.pointer[4]=r,this.pointer[5]=o;let[u,d]=this.coords,[f,m]=this.snapped,_=(1-this.containerFriction)*this.dragSpeed;this.setX(u>t?t+(u-t)*_:u<s?s+(u-s)*_:u,!1),this.setY(d>n?n+(d-n)*_:d<e?e+(d-e)*_:d,!1),this.computeVelocity(r-c,o-h),this.angle=fl(o-l,r-a);let[g,p]=this.snapped;(g!==f&&this.snapX||p!==m&&this.snapY)&&this.onSnap(this)}stop(){this.updateTicker.pause(),this.overshootTicker.pause();for(let e in this.animate.animations)this.animate.animations[e].pause();return ai([this],null,"x"),ai([this],null,"y"),ai([this],null,"progressX"),ai([this],null,"progressY"),ai([this.scroll]),ai([this.overshootCoords]),this}scrollInView(e,t=0,n=vs.inOutQuad){this.updateScrollCoords();let s=this.destX,r=this.destY,o=this.scroll,a=this.scrollBounds,l=this.canScroll;if(!this.containerArray&&this.isOutOfBounds(a,s,r)){let[c,h,u,d]=a,f=ue(Se(r-c,-Ln,0),0),m=ue(Se(s-h,0,Ln),0),_=ue(Se(r-u,0,Ln),0),g=ue(Se(s-d,-Ln,0),0);new bn(o,{x:ue(o.x+(g?g-t:m?m+t:0),0),y:ue(o.y+(f?f-t:_?_+t:0),0),duration:ie(e)?350*Ce.timeScale:e,ease:n,onUpdate:()=>{this.canScroll=!1,this.$scrollContainer.scrollTo(o.x,o.y)}}).init().then(()=>{this.canScroll=l})}return this}handleHover(){this.isFinePointer&&this.cursor&&!this.cursorStyles&&(this.cursorStyles=gi(this.$trigger,{cursor:this.cursor.onHover}))}animateInView(e,t=0,n=vs.inOutQuad){this.stop(),this.updateBoundingValues();let s=this.x,r=this.y,[o,a,l,c]=this.containerPadding,h=this.scroll.y-this.targetBounds[0]+o+t,u=this.scroll.x-this.targetBounds[1]-a-t,d=this.scroll.y-this.targetBounds[2]-l-t,f=this.scroll.x-this.targetBounds[3]+c+t,m=this.isOutOfBounds([h,u,d,f],s,r);if(m){let[_,g]=this.disabled,p=Se(ns(s,this.snapX),f,u),y=Se(ns(r,this.snapY),h,d),S=ie(e)?350*Ce.timeScale:e;!_&&(m===1||m===3)&&this.animate[this.xProp](p,S,n),!g&&(m===2||m===3)&&this.animate[this.yProp](y,S,n)}return this}handleDown(e){let t=e.target;if(this.grabbed||t.type==="range")return;e.stopPropagation(),this.grabbed=!0,this.released=!1,this.stop(),this.updateBoundingValues();let n=e.changedTouches,s=n?n[0].clientX:e.clientX,r=n?n[0].clientY:e.clientY,{x:o,y:a}=this.transforms.normalizePoint(s,r),[l,c,h,u]=this.containerBounds,d=(1-this.containerFriction)*this.dragSpeed,f=this.x,m=this.y;this.coords[0]=this.coords[2]=d?f>c?c+(f-c)/d:f<u?u+(f-u)/d:f:f,this.coords[1]=this.coords[3]=d?m>h?h+(m-h)/d:m<l?l+(m-l)/d:m:m,this.pointer[0]=o,this.pointer[1]=a,this.pointer[2]=o,this.pointer[3]=a,this.pointer[4]=o,this.pointer[5]=a,this.pointer[6]=o,this.pointer[7]=a,this.deltaX=0,this.deltaY=0,this.velocity=0,this.velocityStack[0]=0,this.velocityStack[1]=0,this.velocityStack[2]=0,this.velocityStackIndex=0,this.angle=0,this.targetStyles&&(this.targetStyles.revert(),this.targetStyles=null);let _=zi(this.$target,"zIndex",!1);Rl=(_>Rl?_:Rl)+1,this.targetStyles=gi(this.$target,{zIndex:Rl}),this.triggerStyles&&(this.triggerStyles.revert(),this.triggerStyles=null),this.cursorStyles&&(this.cursorStyles.revert(),this.cursorStyles=null),this.isFinePointer&&this.cursor&&(this.bodyStyles=gi(Re.body,{cursor:this.cursor.onGrab})),this.scrollInView(100,0,vs.out(3)),this.onGrab(this),Re.addEventListener("touchmove",this),Re.addEventListener("touchend",this),Re.addEventListener("touchcancel",this),Re.addEventListener("mousemove",this),Re.addEventListener("mouseup",this),Re.addEventListener("selectstart",this)}handleMove(e){if(!this.grabbed)return;let t=e.changedTouches,n=t?t[0].clientX:e.clientX,s=t?t[0].clientY:e.clientY,{x:r,y:o}=this.transforms.normalizePoint(n,s),a=r-this.pointer[6],l=o-this.pointer[7],c=e.target,h=!1,u=!1,d=!1;for(;t&&c&&c!==this.$trigger;){let f=zi(c,"overflow-y");if(f!=="hidden"&&f!=="visible"){let{scrollTop:m,scrollHeight:_,clientHeight:g}=c;if(_>g){d=!0,h=m<=3,u=m>=_-g-3;break}}c=c.parentElement}d&&(!h&&!u||h&&l<0||u&&l>0)?(this.pointer[0]=r,this.pointer[1]=o,this.pointer[2]=r,this.pointer[3]=o,this.pointer[4]=r,this.pointer[5]=o,this.pointer[6]=r,this.pointer[7]=o):(Ms(e),this.triggerStyles||(this.triggerStyles=gi(this.$trigger,{pointerEvents:"none"})),this.$trigger.addEventListener("touchstart",Ms,{passive:!1}),this.$trigger.addEventListener("touchmove",Ms,{passive:!1}),this.$trigger.addEventListener("touchend",Ms),(this.dragged||!this.disabled[0]&&Dn(a)>this.dragThreshold||!this.disabled[1]&&Dn(l)>this.dragThreshold)&&(this.updateTicker.resume(),this.pointer[2]=this.pointer[0],this.pointer[3]=this.pointer[1],this.pointer[0]=r,this.pointer[1]=o,this.dragged=!0,this.released=!1,this.onDrag(this)))}handleUp(){if(!this.grabbed)return;this.updateTicker.pause(),this.triggerStyles&&(this.triggerStyles.revert(),this.triggerStyles=null),this.bodyStyles&&(this.bodyStyles.revert(),this.bodyStyles=null);let[e,t]=this.disabled,[n,s,r,o,a,l]=this.pointer,[c,h,u,d]=this.containerBounds,[f,m]=this.snapped,_=this.releaseXSpring,g=this.releaseYSpring,p=this.releaseEase,y=this.hasReleaseSpring,S=this.overshootCoords,b=this.x,E=this.y,A=this.computeVelocity(n-a,s-l),R=this.angle=fl(s-o,n-r),I=A*150,v=(1-this.releaseContainerFriction)*this.dragSpeed,M=b+Ur(R)*I,C=E+Nr(R)*I,D=M>h?h+(M-h)*v:M<d?d+(M-d)*v:M,N=C>u?u+(C-u)*v:C<c?c+(C-c)*v:C,P=this.destX=Se(ue(ns(D,this.snapX),5),d,h),z=this.destY=Se(ue(ns(N,this.snapY),5),c,u),F=this.isOutOfBounds(this.containerBounds,M,C),V=0,W=0,H=p,Z=p,te=0;if(S.x=b,S.y=E,!e){let _e=P===h?b>h?-1:1:b<d?-1:1,He=ue(b-P,0);_.velocity=t&&y?He?I*_e/Dn(He):0:A;let{ease:qe,settlingDuration:q,restDuration:J}=_;V=b===P?0:y?q:q-J*Ce.timeScale,y&&(H=qe),V>te&&(te=V)}if(!t){let _e=z===u?E>u?-1:1:E<c?-1:1,He=ue(E-z,0);g.velocity=e&&y?He?I*_e/Dn(He):0:A;let{ease:qe,settlingDuration:q,restDuration:J}=g;W=E===z?0:y?q:q-J*Ce.timeScale,y&&(Z=qe),W>te&&(te=W)}if(!y&&F&&v&&(V||W)){let _e=It.blend;new bn(S,{x:{to:D,duration:V*.65},y:{to:N,duration:W*.65},ease:p,composition:_e}).init(),new bn(S,{x:{to:P,duration:V},y:{to:z,duration:W},ease:p,composition:_e}).init(),this.overshootTicker.stretch(zo(V,W)).restart()}else e||this.animate[this.xProp](P,V,H),t||this.animate[this.yProp](z,W,Z);this.scrollInView(te,this.scrollThreshold,p);let ge=!1;P!==f&&(this.snapped[0]=P,this.snapX&&(ge=!0)),z!==m&&this.snapY&&(this.snapped[1]=z,this.snapY&&(ge=!0)),ge&&this.onSnap(this),this.grabbed=!1,this.dragged=!1,this.updated=!0,this.released=!0,this.onRelease(this),this.$trigger.removeEventListener("touchstart",Ms),this.$trigger.removeEventListener("touchmove",Ms),this.$trigger.removeEventListener("touchend",Ms),Re.removeEventListener("touchmove",this),Re.removeEventListener("touchend",this),Re.removeEventListener("touchcancel",this),Re.removeEventListener("mousemove",this),Re.removeEventListener("mouseup",this),Re.removeEventListener("selectstart",this)}reset(){return this.stop(),this.resizeTicker.pause(),this.grabbed=!1,this.dragged=!1,this.updated=!1,this.released=!1,this.canScroll=!1,this.setX(0,!0),this.setY(0,!0),this.coords[0]=0,this.coords[1]=0,this.pointer[0]=0,this.pointer[1]=0,this.pointer[2]=0,this.pointer[3]=0,this.pointer[4]=0,this.pointer[5]=0,this.pointer[6]=0,this.pointer[7]=0,this.velocity=0,this.velocityStack[0]=0,this.velocityStack[1]=0,this.velocityStack[2]=0,this.velocityStackIndex=0,this.angle=0,this}enable(){return this.enabled||(this.enabled=!0,this.$target.classList.remove("is-disabled"),this.touchActionStyles=gi(this.$trigger,{touchAction:this.disabled[0]?"pan-x":this.disabled[1]?"pan-y":"none"}),this.$trigger.addEventListener("touchstart",this,{passive:!0}),this.$trigger.addEventListener("mousedown",this,{passive:!0}),this.$trigger.addEventListener("mouseenter",this)),this}disable(){return this.enabled=!1,this.grabbed=!1,this.dragged=!1,this.updated=!1,this.released=!1,this.canScroll=!1,this.touchActionStyles.revert(),this.cursorStyles&&(this.cursorStyles.revert(),this.cursorStyles=null),this.triggerStyles&&(this.triggerStyles.revert(),this.triggerStyles=null),this.bodyStyles&&(this.bodyStyles.revert(),this.bodyStyles=null),this.targetStyles&&(this.targetStyles.revert(),this.targetStyles=null),this.$target.classList.add("is-disabled"),this.$trigger.removeEventListener("touchstart",this),this.$trigger.removeEventListener("mousedown",this),this.$trigger.removeEventListener("mouseenter",this),Re.removeEventListener("touchmove",this),Re.removeEventListener("touchend",this),Re.removeEventListener("touchcancel",this),Re.removeEventListener("mousemove",this),Re.removeEventListener("mouseup",this),Re.removeEventListener("selectstart",this),this}revert(){return this.reset(),this.disable(),this.$target.classList.remove("is-disabled"),this.updateTicker.revert(),this.overshootTicker.revert(),this.resizeTicker.revert(),this.animate.revert(),this.resizeObserver.disconnect(),this}handleEvent(e){switch(e.type){case"mousedown":this.handleDown(e);break;case"touchstart":this.handleDown(e);break;case"mousemove":this.handleMove(e);break;case"touchmove":this.handleMove(e);break;case"mouseup":this.handleUp();break;case"touchend":this.handleUp();break;case"touchcancel":this.handleUp();break;case"mouseenter":this.handleHover();break;case"selectstart":Ms(e);break}}},Lu=(i,e)=>new Xr(i,e)});var Cl,Il,Pl=Ae(()=>{xt();cn();vt();zr();Cl=(i=Ne)=>new tn({duration:1*Ce.timeScale,onComplete:i},null,0).resume(),Il=i=>{let e;return(...t)=>{let n,s,r,o;e&&(n=e.currentIteration,s=e.iterationProgress,r=e.reversed,o=e._alternate,e.revert());let a=i(...t);return a&&!yt(a)&&a.revert&&(e=a),ie(s)||(e.currentIteration=n,e.iterationProgress=(o&&n%2?!r:r)?1-s:s),a||Ne}}});var xx,Ll,Nl,Du,yx,$o,Dl,tm,vx,nm,Ul,li,im=Ae(()=>{xt();cn();vt();Bi();oi();yl();zr();Al();Pl();qo();Ss();xx=()=>{let i=Re.createElement("div");Re.body.appendChild(i),i.style.height="100lvh";let e=i.offsetHeight;return Re.body.removeChild(i),e},Ll=(i,e)=>i&&yt(i)?i(e):i,Nl=new Map,Du=class{constructor(e){this.element=e,this.useWin=this.element===Re.body,this.winWidth=0,this.winHeight=0,this.width=0,this.height=0,this.left=0,this.top=0,this.scale=1,this.zIndex=0,this.scrollX=0,this.scrollY=0,this.prevScrollX=0,this.prevScrollY=0,this.scrollWidth=0,this.scrollHeight=0,this.velocity=0,this.backwardX=!1,this.backwardY=!1,this.scrollTicker=new tn({autoplay:!1,onBegin:()=>this.dataTimer.resume(),onUpdate:()=>{let t=this.backwardX||this.backwardY;ot(this,n=>n.handleScroll(),t)},onComplete:()=>this.dataTimer.pause()}).init(),this.dataTimer=new tn({autoplay:!1,frameRate:30,onUpdate:t=>{let n=t.deltaTime,s=this.prevScrollX,r=this.prevScrollY,o=this.scrollX,a=this.scrollY,l=s-o,c=r-a;this.prevScrollX=o,this.prevScrollY=a,l&&(this.backwardX=s>o),c&&(this.backwardY=r>a),this.velocity=ue(n>0?Math.sqrt(l*l+c*c)/n:0,5)}}).init(),this.resizeTicker=new tn({autoplay:!1,duration:250*Ce.timeScale,onComplete:()=>{this.updateWindowBounds(),this.refreshScrollObservers(),this.handleScroll()}}).init(),this.wakeTicker=new tn({autoplay:!1,duration:500*Ce.timeScale,onBegin:()=>{this.scrollTicker.resume()},onComplete:()=>{this.scrollTicker.pause()}}).init(),this._head=null,this._tail=null,this.updateScrollCoords(),this.updateWindowBounds(),this.updateBounds(),this.refreshScrollObservers(),this.handleScroll(),this.resizeObserver=new ResizeObserver(()=>this.resizeTicker.restart()),this.resizeObserver.observe(this.element),(this.useWin?en:this.element).addEventListener("scroll",this,!1)}updateScrollCoords(){let e=this.useWin,t=this.element;this.scrollX=ue(e?en.scrollX:t.scrollLeft,0),this.scrollY=ue(e?en.scrollY:t.scrollTop,0)}updateWindowBounds(){this.winWidth=en.innerWidth,this.winHeight=xx()}updateBounds(){let e=getComputedStyle(this.element),t=this.element;this.scrollWidth=t.scrollWidth+parseFloat(e.marginLeft)+parseFloat(e.marginRight),this.scrollHeight=t.scrollHeight+parseFloat(e.marginTop)+parseFloat(e.marginBottom),this.updateWindowBounds();let n,s;if(this.useWin)n=this.winWidth,s=this.winHeight;else{let r=t.getBoundingClientRect();n=t.clientWidth,s=t.clientHeight,this.top=r.top,this.left=r.left,this.scale=r.width?n/r.width:r.height?s/r.height:1}this.width=n,this.height=s}refreshScrollObservers(){ot(this,e=>{e._debug&&e.removeDebug()}),this.updateBounds(),ot(this,e=>{e.refresh(),e.onResize(e),e._debug&&e.debug()})}refresh(){this.updateWindowBounds(),this.updateBounds(),this.refreshScrollObservers(),this.handleScroll()}handleScroll(){this.updateScrollCoords(),this.wakeTicker.restart()}handleEvent(e){e.type==="scroll"&&this.handleScroll()}revert(){this.scrollTicker.cancel(),this.dataTimer.cancel(),this.resizeTicker.cancel(),this.wakeTicker.cancel(),this.resizeObserver.disconnect(),(this.useWin?en:this.element).removeEventListener("scroll",this),Nl.delete(this.element)}},yx=i=>{let e=i?Un(i)[0]||Re.body:Re.body,t=Nl.get(e);return t||(t=new Du(e),Nl.set(e,t)),t},$o=(i,e,t,n,s)=>{let r=e==="min",o=e==="max",a=e==="top"||e==="left"||e==="start"||r?0:e==="bottom"||e==="right"||e==="end"||o?"100%":e==="center"?"50%":e,{n:l,u:c}=mn(a,un),h=l;return c==="%"?h=l/100*t:c&&(h=Ks(i,un,"px",!0).n),o&&n<0&&(h+=n),r&&s>0&&(h+=s),h},Dl=(i,e,t,n,s)=>{let r;if(wt(e)){let o=hl.exec(e);if(o){let a=o[0],l=a[0],c=e.split(a),h=c[0]==="min",u=c[0]==="max",d=$o(i,c[0],t,n,s),f=$o(i,c[1],t,n,s);if(h){let m=Ui($o(i,"min",t),f,l);r=m<d?d:m}else if(u){let m=Ui($o(i,"max",t),f,l);r=m>d?d:m}else r=Ui(d,f,l)}else r=$o(i,e,t,n,s)}else r=e;return ue(r,0)},tm=i=>{let e,t=i.targets;for(let n=0,s=t.length;n<s;n++){let r=t[n];if(r[Li]){e=r;break}}return e},vx=0,nm=["#FF4B4B","#FF971B","#FFC730","#F9F640","#7AFF5A","#18FF74","#17E09B","#3CFFEC","#05DBE9","#33B3F1","#638CF9","#C563FE","#FF4FCF","#F93F8A"],Ul=class{constructor(e={}){Wt.current&&Wt.current.register(this);let t=fe(e.sync,"play pause"),n=t?$n(t):null,s=t&&(t==="linear"||t===gn),r=t&&!(n===gn&&!s),o=t&&(zt(t)||t===!0||s),a=t&&wt(t)&&!r&&!o,l=a?t.split(" ").map(h=>()=>{let u=this.linked;return u&&u[h]?u[h]():null}):null,c=a&&l.length>2;this.index=vx++,this.id=ie(e.id)?this.index:e.id,this.container=yx(e.container),this.target=null,this.linked=null,this.repeat=null,this.horizontal=null,this.enter=null,this.leave=null,this.sync=r||o||!!l,this.syncEase=r?n:null,this.syncSmooth=o?t===!0||s?1:t:null,this.onSyncEnter=l&&!c&&l[0]?l[0]:Ne,this.onSyncLeave=l&&!c&&l[1]?l[1]:Ne,this.onSyncEnterForward=l&&c&&l[0]?l[0]:Ne,this.onSyncLeaveForward=l&&c&&l[1]?l[1]:Ne,this.onSyncEnterBackward=l&&c&&l[2]?l[2]:Ne,this.onSyncLeaveBackward=l&&c&&l[3]?l[3]:Ne,this.onEnter=e.onEnter||Ne,this.onLeave=e.onLeave||Ne,this.onEnterForward=e.onEnterForward||Ne,this.onLeaveForward=e.onLeaveForward||Ne,this.onEnterBackward=e.onEnterBackward||Ne,this.onLeaveBackward=e.onLeaveBackward||Ne,this.onUpdate=e.onUpdate||Ne,this.onResize=e.onResize||Ne,this.onSyncComplete=e.onSyncComplete||Ne,this.reverted=!1,this.ready=!1,this.completed=!1,this.began=!1,this.isInView=!1,this.forceEnter=!1,this.hasEntered=!1,this.offset=0,this.offsetStart=0,this.offsetEnd=0,this.distance=0,this.prevProgress=0,this.thresholds=["start","end","end","start"],this.coords=[0,0,0,0],this.debugStyles=null,this.$debug=null,this._params=e,this._debug=fe(e.debug,!1),this._next=null,this._prev=null,Sn(this.container,this),Cl(()=>{if(!this.reverted){if(!this.target){let h=Un(e.target)[0];this.target=h||Re.body,this.refresh()}this._debug&&this.debug()}})}link(e){if(e&&(e.pause(),this.linked=e,!ie(e)&&!ie(e.persist)&&(e.persist=!0),!this._params.target)){let t;ie(e.targets)?ot(e,n=>{n.targets&&!t&&(t=tm(n))}):t=tm(e),this.target=t||Re.body,this.refresh()}return this}get velocity(){return this.container.velocity}get backward(){return this.horizontal?this.container.backwardX:this.container.backwardY}get scroll(){return this.horizontal?this.container.scrollX:this.container.scrollY}get progress(){let e=(this.scroll-this.offsetStart)/this.distance;return e===1/0||isNaN(e)?0:ue(Se(e,0,1),6)}refresh(){this.ready=!0,this.reverted=!1;let e=this._params;return this.repeat=fe(Ll(e.repeat,this),!0),this.horizontal=fe(Ll(e.axis,this),"y")==="x",this.enter=fe(Ll(e.enter,this),"end start"),this.leave=fe(Ll(e.leave,this),"start end"),this.updateBounds(),this.handleScroll(),this}removeDebug(){return this.$debug&&(this.$debug.parentNode.removeChild(this.$debug),this.$debug=null),this.debugStyles&&(this.debugStyles.revert(),this.$debug=null),this}debug(){this.removeDebug();let e=this.container,t=this.horizontal,n=e.element.querySelector(":scope > .animejs-onscroll-debug"),s=Re.createElement("div"),r=Re.createElement("div"),o=Re.createElement("div"),a=nm[this.index%nm.length],l=e.useWin,c=l?e.winWidth:e.width,h=l?e.winHeight:e.height,u=e.scrollWidth,d=e.scrollHeight,f=this.container.width>360?320:260,m=t?0:10,_=t?10:0,g=t?24:f/2,p=t?g:15,y=t?60:g,S=t?y:p,b=t?"repeat-x":"repeat-y",E=M=>t?"0px "+M+"px":M+"px 2px",A=M=>`linear-gradient(${t?90:0}deg, ${M} 2px, transparent 1px)`,R=(M,C,D,N,P)=>`position:${M};left:${C}px;top:${D}px;width:${N}px;height:${P}px;`;s.style.cssText=`${R("absolute",m,_,t?u:f,t?f:d)}
      pointer-events: none;
      z-index: ${this.container.zIndex++};
      display: flex;
      flex-direction: ${t?"column":"row"};
      filter: drop-shadow(0px 1px 0px rgba(0,0,0,.75));
    `,r.style.cssText=`${R("sticky",0,0,t?c:g,t?g:h)}`,n||(r.style.cssText+=`background:
        ${A("#FFFF")}${E(g-10)} / 100px 100px ${b},
        ${A("#FFF8")}${E(g-10)} / 10px 10px ${b};
      `),o.style.cssText=`${R("relative",0,0,t?u:g,t?g:d)}`,n||(o.style.cssText+=`background:
        ${A("#FFFF")}${E(0)} / ${t?"100px 10px":"10px 100px"} ${b},
        ${A("#FFF8")}${E(0)} / ${t?"10px 0px":"0px 10px"} ${b};
      `);let I=[" enter: "," leave: "];this.coords.forEach((M,C)=>{let D=C>1,N=(D?0:this.offset)+M,P=C%2,z=N<S,F=N>(D?t?c:h:t?u:d)-S,V=(D?P&&!z:!P&&!z)||F,W=Re.createElement("div"),H=Re.createElement("div"),Z=t?V?"right":"left":V?"bottom":"top",te=V?(t?y:p)+(D?t?-1:F?0:-2:t?-1:-2):t?1:0;H.innerHTML=`${this.id}${I[P]}${this.thresholds[C]}`,W.style.cssText=`${R("absolute",0,0,y,p)}
        display: flex;
        flex-direction: ${t?"column":"row"};
        justify-content: flex-${D?"start":"end"};
        align-items: flex-${V?"end":"start"};
        border-${Z}: 2px solid ${a};
      `,H.style.cssText=`
        overflow: hidden;
        max-width: ${f/2-10}px;
        height: ${p};
        margin-${t?V?"right":"left":V?"bottom":"top"}: -2px;
        padding: 1px;
        font-family: ui-monospace, monospace;
        font-size: 10px;
        letter-spacing: -.025em;
        line-height: 9px;
        font-weight: 600;
        text-align: ${t&&V||!t&&!D?"right":"left"};
        white-space: pre;
        text-overflow: ellipsis;
        color: ${P?a:"rgba(0,0,0,.75)"};
        background-color: ${P?"rgba(0,0,0,.65)":a};
        border: 2px solid ${P?a:"transparent"};
        border-${t?V?"top-left":"top-right":V?"top-left":"bottom-left"}-radius: 5px;
        border-${t?V?"bottom-left":"bottom-right":V?"top-right":"bottom-right"}-radius: 5px;
      `,W.appendChild(H);let ge=N-te+(t?1:0);W.style[t?"left":"top"]=`${ge}px`,(D?r:o).appendChild(W)}),s.appendChild(r),s.appendChild(o),e.element.appendChild(s),n||s.classList.add("animejs-onscroll-debug"),this.$debug=s,zi(e.element,"position")==="static"&&(this.debugStyles=gi(e.element,{position:"relative "}))}updateBounds(){this._debug&&this.removeDebug();let e,t=this.target,n=this.container,s=this.horizontal,r=this.linked,o,a=t;for(r&&(o=r.currentTime,r.seek(0,!0));a&&a!==n.element&&a!==Re.body;){let P=zi(a,"position")==="sticky"?gi(a,{position:"static"}):!1;a=a.parentElement,P&&(e||(e=[]),e.push(P))}let l=t.getBoundingClientRect(),c=n.scale,h=(s?l.left+n.scrollX-n.left:l.top+n.scrollY-n.top)*c,u=(s?l.width:l.height)*c,d=s?n.width:n.height,m=(s?n.scrollWidth:n.scrollHeight)-d,_=this.enter,g=this.leave,p="start",y="end",S="end",b="start";if(wt(_)){let P=_.split(" ");S=P[0],p=P.length>1?P[1]:p}else if(Pt(_)){let P=_;ie(P.container)||(S=P.container),ie(P.target)||(p=P.target)}else zt(_)&&(S=_);if(wt(g)){let P=g.split(" ");b=P[0],y=P.length>1?P[1]:y}else if(Pt(g)){let P=g;ie(P.container)||(b=P.container),ie(P.target)||(y=P.target)}else zt(g)&&(b=g);let E=Dl(t,p,u),A=Dl(t,y,u),R=E+h-d,I=A+h-m,v=Dl(t,S,d,R,I),M=Dl(t,b,d,R,I),C=E+h-v,D=A+h-M,N=D-C;this.offset=h,this.offsetStart=C,this.offsetEnd=D,this.distance=N<=0?0:N,this.thresholds=[p,y,S,b],this.coords=[E,A,v,M],e&&e.forEach(P=>P.revert()),r&&r.seek(o,!0),this._debug&&this.debug()}handleScroll(){if(!this.ready)return;let e=this.linked,t=this.sync,n=this.syncEase,s=this.syncSmooth,r=e&&(n||s),o=this.horizontal,a=this.container,l=this.scroll,c=l<=this.offsetStart,h=l>=this.offsetEnd,u=!c&&!h,d=l===this.offsetStart||l===this.offsetEnd,f=!this.hasEntered&&d,m=this._debug&&this.$debug,_=!1,g=!1,p=this.progress;if(c&&this.began&&(this.began=!1),p>0&&!this.began&&(this.began=!0),r){let y=e.progress;if(s&&zt(s)){if(s<1){let b=y<p&&p===1?1e-4:y>p&&!p?-1e-4:0;p=ue(Nn(y,p,Nn(.01,.2,s))+b,6)}}else n&&(p=n(p));_=p!==this.prevProgress,g=y===1,_&&!g&&s&&y&&a.wakeTicker.restart()}if(m){let y=o?a.scrollY:a.scrollX;m.style[o?"top":"left"]=y+10+"px"}(u&&!this.isInView||f&&!this.forceEnter&&!this.hasEntered)&&(u&&(this.isInView=!0),!this.forceEnter||!this.hasEntered?(m&&u&&(m.style.zIndex=`${this.container.zIndex++}`),this.onSyncEnter(this),this.onEnter(this),this.backward?(this.onSyncEnterBackward(this),this.onEnterBackward(this)):(this.onSyncEnterForward(this),this.onEnterForward(this)),this.hasEntered=!0,f&&(this.forceEnter=!0)):u&&(this.forceEnter=!1)),(u||!u&&this.isInView)&&(_=!0),_&&(r&&e.seek(e.duration*p),this.onUpdate(this)),!u&&this.isInView&&(this.isInView=!1,this.onSyncLeave(this),this.onLeave(this),this.backward?(this.onSyncLeaveBackward(this),this.onLeaveBackward(this)):(this.onSyncLeaveForward(this),this.onLeaveForward(this)),t&&!s&&(g=!0)),p>=1&&this.began&&!this.completed&&(t&&g||!t)&&(t&&this.onSyncComplete(this),this.completed=!0,(!this.repeat&&!e||!this.repeat&&e&&e.completed)&&this.revert()),p<1&&this.completed&&(this.completed=!1),this.prevProgress=p}revert(){if(this.reverted)return;let e=this.container;return Yn(e,this),e._head||e.revert(),this._debug&&this.removeDebug(),this.reverted=!0,this.ready=!1,this}},li=(i={})=>new Ul(i)});var sm,Sx,Zo,rm=Ae(()=>{vt();qo();sm=(i,e,t)=>(((1-3*t+3*e)*i+(3*t-6*e))*i+3*e)*i,Sx=(i,e,t)=>{let n=0,s=1,r,o,a=0;do o=n+(s-n)/2,r=sm(o,e,t)-i,r>0?s=o:n=o;while(Dn(r)>1e-7&&++a<100);return o},Zo=(i=.5,e=0,t=.5,n=1)=>i===e&&t===n?gn:s=>s===0||s===1?s:sm(Sx(s,i,t),e,n)});var Fl,om,am,cm,bx,Mx,Nu,Ko,lm,Ol,qr,hm=Ae(()=>{vt();cn();Bi();oi();xt();qo();Ss();Cu();Fl=(i,e=100)=>{let t=[];for(let n=0;n<=e;n++)t.push(ue(i(n/e),4));return`linear(${t.join(", ")})`},om={},am=i=>{let e=om[i];if(e)return e;if(e="linear",wt(i)){if(Et(i,"linear")||Et(i,"cubic-")||Et(i,"steps")||Et(i,"ease"))e=i;else if(Et(i,"cubicB"))e=Dr(i);else{let t=yu(i);yt(t)&&(e=t===gn?"linear":Fl(t))}om[i]=e}else if(yt(i)){let t=Fl(i);t&&(e=t)}else i.ease&&(e=Fl(i.ease));return e},cm=["x","y","z"],bx=["perspective","width","height","margin","padding","top","right","bottom","left","borderWidth","fontSize","borderRadius",...cm],Mx=[...cm,...qs.filter(i=>["X","Y","Z"].some(e=>i.endsWith(e)))],Nu=null,Ko=(i,e,t,n,s)=>{let r=wt(e)?e:hn(e,t,n,s);return zt(r)?bx.includes(i)||Et(i,"translate")?`${r}px`:Et(i,"rotate")||Et(i,"skew")?`${r}deg`:`${r}`:r},lm=(i,e,t,n,s,r)=>{let o="0",a=ie(n)?getComputedStyle(i)[e]:Ko(e,n,i,s,r);return ie(t)?o=Ft(n)?n.map(l=>Ko(e,l,i,s,r)):a:o=[Ko(e,t,i,s,r),a],o},Ol=class{constructor(e,t){Wt.current&&Wt.current.register(this),si(Nu)&&(an&&(ie(CSS)||!Object.hasOwnProperty.call(CSS,"registerProperty"))?Nu=!1:(qs.forEach(m=>{let _=Et(m,"skew"),g=Et(m,"scale"),p=Et(m,"rotate"),y=Et(m,"translate"),S=p||_,b=S?"<angle>":g?"<number>":y?"<length-percentage>":"*";try{CSS.registerProperty({name:"--"+m,syntax:b,inherits:!1,initialValue:y?"0px":S?"0deg":g?"1":"0"})}catch{}}),Nu=!0));let n=Oi(e),s=n.length;s||console.warn("No target found. Make sure the element you're trying to animate is accessible before creating your animation.");let r=fe(t.autoplay,Ce.defaults.autoplay),o=r&&r.link?r:!1,a=t.alternate&&t.alternate===!0,l=t.reversed&&t.reversed===!0,c=fe(t.loop,Ce.defaults.loop),h=c===!0||c===1/0?1/0:zt(c)?c+1:1,u=a?l?"alternate-reverse":"alternate":l?"reverse":"normal",d="both",f=Ce.timeScale===1?1:Vt;this.targets=n,this.animations=[],this.controlAnimation=null,this.onComplete=t.onComplete||Ce.defaults.onComplete,this.duration=0,this.muteCallbacks=!1,this.completed=!1,this.paused=!r||o!==!1,this.reversed=l,this.persist=fe(t.persist,Ce.defaults.persist),this.autoplay=r,this._speed=fe(t.playbackRate,Ce.defaults.playbackRate),this._resolve=Ne,this._completed=0,this._inlineStyles=[],n.forEach((m,_)=>{let g=m[Di],p=Mx.some(D=>t.hasOwnProperty(D)),y=m.style,S=this._inlineStyles[_]={},b=fe(t.ease,Ce.defaults.ease),E=hn(b,m,_,s),A=yt(E)||wt(E)?E:b,R=b.ease&&b,I=am(A),v=(R?R.settlingDuration:hn(fe(t.duration,Ce.defaults.duration),m,_,s))*f,M=hn(fe(t.delay,Ce.defaults.delay),m,_,s)*f,C=fe(t.composition,"replace");for(let D in t){if(!es(D))continue;let N={},P={iterations:h,direction:u,fill:d,easing:I,duration:v,delay:M,composite:C},z=t[D],F=p?qs.includes(D)?D:Ir.get(D):!1,V=F?"transform":D;S[V]||(S[V]=y[V]);let W;if(Pt(z)){let H=z,Z=fe(H.ease,I),te=Z.ease&&Z,ge=H.to,_e=H.from;if(P.duration=(te?te.settlingDuration:hn(fe(H.duration,v),m,_,s))*f,P.delay=hn(fe(H.delay,M),m,_,s)*f,P.composite=fe(H.composition,C),P.easing=am(Z),W=lm(m,D,_e,ge,_,s),F?(N[`--${F}`]=W,g[F]=W):N[D]=lm(m,D,_e,ge,_,s),Ru(this,m,D,N,P),!ie(_e))if(!F)y[D]=N[D][0];else{let He=`--${F}`;y.setProperty(He,N[He][0])}}else W=Ft(z)?z.map(H=>Ko(D,H,m,_,s)):Ko(D,z,m,_,s),F?(N[`--${F}`]=W,g[F]=W):N[D]=W,Ru(this,m,D,N,P)}if(p){let D=ln;for(let N in g)D+=`${Pr[N]}var(--${N})) `;y.transform=D}}),o&&this.autoplay.link(this)}forEach(e){try{let t=wt(e)?n=>n[e]():e;this.animations.forEach(t)}catch{}return this}get speed(){return this._speed}set speed(e){this._speed=+e,this.forEach(t=>t.playbackRate=e)}get currentTime(){let e=this.controlAnimation,t=Ce.timeScale;return this.completed?this.duration:e?+e.currentTime*(t===1?1:t):0}set currentTime(e){let t=e*(Ce.timeScale===1?1:Vt);this.forEach(n=>{!this.persist&&t>=this.duration&&n.play(),n.currentTime=t})}get progress(){return this.currentTime/this.duration}set progress(e){this.forEach(t=>t.currentTime=e*this.duration||0)}resume(){return this.paused?(this.paused=!1,this.forEach("play")):this}pause(){return this.paused?this:(this.paused=!0,this.forEach("pause"))}alternate(){return this.reversed=!this.reversed,this.forEach("reverse"),this.paused&&this.forEach("pause"),this}play(){return this.reversed&&this.alternate(),this.resume()}reverse(){return this.reversed||this.alternate(),this.resume()}seek(e,t=!1){return t&&(this.muteCallbacks=!0),e<this.duration&&(this.completed=!1),this.currentTime=e,this.muteCallbacks=!1,this.paused&&this.pause(),this}restart(){return this.completed=!1,this.seek(0,!0).resume()}commitStyles(){return this.forEach("commitStyles")}complete(){return this.seek(this.duration)}cancel(){return this.muteCallbacks=!0,this.commitStyles().forEach("cancel"),this.animations.length=0,requestAnimationFrame(()=>{this.targets.forEach(e=>{e.style.transform==="none"&&e.style.removeProperty("transform")})}),this}revert(){return this.cancel().targets.forEach((e,t)=>{let n=e.style,s=this._inlineStyles[t];for(let r in s){let o=s[r];ie(o)||o===ln?n.removeProperty(Dr(r)):e.style[r]=o}e.getAttribute("style")===ln&&e.removeAttribute("style")}),this}then(e=Ne){let t=this.then,n=()=>{this.then=null,e(this),this.then=t,this._resolve=Ne};return new Promise(s=>(this._resolve=()=>s(n()),this.completed&&this._resolve(),this))}},qr={animate:(i,e)=>new Ol(i,e),convertEase:Fl}});var ci,Uu,Tx,um,hi,dm,fm,pm,mm,gm,_m,xm,ym,vm,Sm,bm,Mm,Tm=Ae(()=>{xt();Tu();ci=Mu,Uu={},Tx=(i,e=0)=>(...t)=>e?n=>i(...t,n):n=>i(n,...t),um=i=>(...e)=>{let t=i(...e);return new Proxy(Ne,{apply:(n,s,[r])=>t(r),get:(n,s)=>um((...r)=>{let o=Uu[s](...r);return a=>o(t(a))})})},hi=(i,e,t=0)=>{let n=(...s)=>(s.length<e.length?um(Tx(e,t)):e)(...s);return Uu[i]||(Uu[i]=n),n},dm=hi("roundPad",ci.roundPad),fm=hi("padStart",ci.padStart),pm=hi("padEnd",ci.padEnd),mm=hi("wrap",ci.wrap),gm=hi("mapRange",ci.mapRange),_m=hi("degToRad",ci.degToRad),xm=hi("radToDeg",ci.radToDeg),ym=hi("snap",ci.snap),vm=hi("clamp",ci.clamp),Sm=hi("round",ci.round),bm=hi("lerp",ci.lerp,1),Mm=hi("damp",ci.damp,1)});var Bl,Ex,Em,wm,kl,Fu=Ae(()=>{Bl=(i=0,e=1,t=0)=>{let n=10**t;return Math.floor((Math.random()*(e-i+1/n)+i)*n)/n},Ex=0,Em=(i,e=0,t=1,n=0)=>{let s=i===void 0?Ex++:i;return(r=e,o=t,a=n)=>{s+=1831565813,s=Math.imul(s^s>>>15,s|1),s^=s+Math.imul(s^s>>>7,s|61);let l=10**a;return Math.floor((((s^s>>>14)>>>0)/4294967296*(o-r+1/l)+r)*l)/l}},wm=i=>i[Bl(0,i.length-1)],kl=i=>{let e=i.length,t,n;for(;e;)n=Bl(0,--e),t=i[e],i[e]=i[n],i[n]=t;return i}});var St,Ou=Ae(()=>{xt();vt();Ss();Su();oi();Bi();Fu();St=(i,e={})=>{let t=[],n=0,s=e.from,r=e.reversed,o=e.ease,a=!ie(o),c=a&&!ie(o.ease)?o.ease:a?$n(o):null,h=e.grid,u=e.axis,d=e.total,f=ie(s)||s===0||s==="first",m=s==="center",_=s==="last",g=s==="random",p=Ft(i),y=e.use,S=p?dl(i[0]):dl(i),b=p?dl(i[1]):0,E=cl.exec((p?i[1]:i)+ln),A=e.start||0+(p?S:0),R=f?0:zt(s)?s:0;return(I,v,M,C)=>{let[D]=Oi(I),N=ie(d)?M:d,P=ie(y)?!1:yt(y)?y(D,v,N):Ni(D,y),z=zt(P)||wt(P)&&zt(+P)?+P:v;if(m&&(R=(N-1)/2),_&&(R=N-1),!t.length){for(let H=0;H<N;H++){if(!h)t.push(Dn(R-H));else{let Z=m?(h[0]-1)/2:R%h[0],te=m?(h[1]-1)/2:ko(R/h[0]),ge=H%h[0],_e=ko(H/h[0]),He=Z-ge,qe=te-_e,q=qn(He*He+qe*qe);u==="x"&&(q=-He),u==="y"&&(q=-qe),t.push(q)}n=zo(...t)}c&&(t=t.map(H=>c(H/n)*n)),r&&(t=t.map(H=>u?H<0?H*-1:-H:Dn(n-H))),g&&(t=kl(t))}let F=p?(b-S)/n:S,W=(C?Js(C,ie(e.start)?C.iterationDuration:A):A)+(F*ue(t[z],2)||0);return e.modifier&&(W=e.modifier(W)),E&&(W=`${W}${E[2]}`),W}}});var Jo={};al(Jo,{$:()=>Oi,clamp:()=>vm,cleanInlineStyles:()=>Zs,createSeededRandom:()=>Em,damp:()=>Mm,degToRad:()=>_m,get:()=>zi,keepTime:()=>Il,lerp:()=>bm,mapRange:()=>gm,padEnd:()=>pm,padStart:()=>fm,radToDeg:()=>xm,random:()=>Bl,randomPick:()=>wm,remove:()=>Qp,round:()=>Sm,roundPad:()=>dm,set:()=>gi,shuffle:()=>kl,snap:()=>ym,stagger:()=>St,sync:()=>Cl,wrap:()=>mm});var Am=Ae(()=>{Tm();Fu();Pl();Al();Ou();Or();Bi();});var zl,wx,Ax,Bu,Wu,Xu,jo,Qo,ea,ku,zu,Hl,Rm,Vu,Vl,Rx,Cm,Im,Hu,Gu,Gl,Vi,Pm=Ae(()=>{xt();cn();vt();Bi();oi();Pl();zl=typeof Intl<"u"&&Intl.Segmenter,wx=/\{value\}/g,Ax=/\{i\}/g,Bu=/(\s+)/,Wu=/^\s+$/,Xu="line",jo="word",Qo="char",ea="data-line",ku=null,zu=null,Hl=null,Rm=i=>i.isWordLike||i.segment===" "||zt(+i.segment),Vu=i=>i.setAttribute("aria-hidden","true"),Vl=(i,e)=>[...i.querySelectorAll(`[data-${e}]:not([data-${e}] [data-${e}])`)],Rx={line:"#00D672",word:"#FF4B4B",char:"#5A87FF"},Cm=i=>{if(!i.childElementCount&&!i.textContent.trim()){let e=i.parentElement;i.remove(),e&&Cm(e)}},Im=(i,e,t)=>{let n=i.getAttribute(ea);if(n!==null&&+n!==e||i.tagName==="BR"){t.add(i);let r=i.previousSibling,o=i.nextSibling;r&&r.nodeType===3&&Wu.test(r.textContent)&&t.add(r),o&&o.nodeType===3&&Wu.test(o.textContent)&&t.add(o)}let s=i.childElementCount;for(;s--;)Im(i.children[s],e,t);return t},Hu=(i,e={})=>{let t="",n=wt(e.class)?` class="${e.class}"`:"",s=fe(e.clone,!1),r=fe(e.wrap,!1),o=r?r===!0?"clip":r:s?"clip":!1;if(r&&(t+=`<span${o?` style="overflow:${o};"`:""}>`),t+=`<span${n}${s?' style="position:relative;"':""} data-${i}="{i}">`,s){let a=s==="left"?"-100%":s==="right"?"100%":"0",l=s==="top"?"-100%":s==="bottom"?"100%":"0";t+="<span>{value}</span>",t+=`<span inert style="position:absolute;top:${l};left:${a};white-space:nowrap;">{value}</span>`}else t+="{value}";return t+="</span>",r&&(t+="</span>"),t},Gu=(i,e,t,n,s,r,o,a,l)=>{let c=s===Xu,h=s===Qo,u=`_${s}_`,d=yt(i)?i(t):i,f=c?"block":"inline-block";Hl.innerHTML=d.replace(wx,`<i class="${u}"></i>`).replace(Ax,`${h?l:c?o:a}`);let m=Hl.content,_=m.firstElementChild,g=m.querySelector(`[data-${s}]`)||_,p=m.querySelectorAll(`i.${u}`),y=p.length;if(y){_.style.display=f,g.style.display=f,g.setAttribute(ea,`${o}`),c||(g.setAttribute("data-word",`${a}`),h&&g.setAttribute("data-char",`${l}`));let S=y;for(;S--;){let b=p[S],E=b.parentElement;E.style.display=f,c?E.innerHTML=t.innerHTML:E.replaceChild(t.cloneNode(!0),b)}e.push(g),n.appendChild(m)}else console.warn('The expression "{value}" is missing from the provided template.');return r&&(_.style.outline=`1px dotted ${Rx[s]}`),_},Gl=class{constructor(e,t={}){ku||(ku=zl?new zl([],{granularity:jo}):{segment:m=>{let _=[],g=m.split(Bu);for(let p=0,y=g.length;p<y;p++){let S=g[p];_.push({segment:S,isWordLike:!Wu.test(S)})}return _}}),zu||(zu=zl?new zl([],{granularity:"grapheme"}):{segment:m=>[...m].map(_=>({segment:_}))}),!Hl&&an&&(Hl=Re.createElement("template")),Wt.current&&Wt.current.register(this);let{words:n,chars:s,lines:r,accessible:o,includeSpaces:a,debug:l}=t,c=(e=Ft(e)?e[0]:e)&&e.nodeType?e:(xl(e)||[])[0],h=r===!0?{}:r,u=n===!0||ie(n)?{}:n,d=s===!0?{}:s;this.debug=fe(l,!1),this.includeSpaces=fe(a,!1),this.accessible=fe(o,!0),this.linesOnly=h&&!u&&!d,this.lineTemplate=Pt(h)?Hu(Xu,h):h,this.wordTemplate=Pt(u)||this.linesOnly?Hu(jo,u):u,this.charTemplate=Pt(d)?Hu(Qo,d):d,this.$target=c,this.html=c&&c.innerHTML,this.lines=[],this.words=[],this.chars=[],this.effects=[],this.effectsCleanups=[],this.cache=null,this.ready=!1,this.width=0,this.resizeTimeout=null;let f=()=>this.html&&(h||u||d)&&this.split();this.resizeObserver=new ResizeObserver(()=>{clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(()=>{let m=c.offsetWidth;m!==this.width&&(this.width=m,f())},150)}),this.lineTemplate&&!this.ready?Re.fonts.ready.then(f):f(),c?this.resizeObserver.observe(c):console.warn("No Text Splitter target found.")}addEffect(e){if(!yt(e))return console.warn("Effect must return a function.");let t=Il(e);return this.effects.push(t),this.ready&&(this.effectsCleanups[this.effects.length-1]=t(this)),this}revert(){return clearTimeout(this.resizeTimeout),this.lines.length=this.words.length=this.chars.length=0,this.resizeObserver.disconnect(),this.effectsCleanups.forEach(e=>yt(e)?e(this):e.revert&&e.revert()),this.$target.innerHTML=this.html,this}splitNode(e){let t=this.wordTemplate,n=this.charTemplate,s=this.includeSpaces,r=this.debug,o=e.nodeType;if(o===3){let a=e.nodeValue;if(a.trim()){let l=[],c=this.words,h=this.chars,u=ku.segment(a),d=Re.createDocumentFragment(),f=null;for(let m of u){let _=m.segment,g=Rm(m);if(!f||g&&f&&Rm(f))l.push(_);else{let p=l.length-1,y=l[p];!Bu.test(y)&&!Bu.test(_)?l[p]+=_:l.push(_)}f=m}for(let m=0,_=l.length;m<_;m++){let g=l[m];if(g.trim()){let p=l[m+1],y=s&&p&&!p.trim(),S=g,b=n?zu.segment(S):null,E=n?Re.createDocumentFragment():Re.createTextNode(y?g+"\xA0":g);if(n){let A=[...b];for(let R=0,I=A.length;R<I;R++){let v=A[R],C=R===I-1&&y?v.segment+"\xA0":v.segment,D=Re.createTextNode(C);Gu(n,h,D,E,Qo,r,-1,c.length,h.length)}}t?Gu(t,c,E,d,jo,r,-1,c.length,h.length):n?d.appendChild(E):d.appendChild(Re.createTextNode(g)),y&&m++}else{if(m&&s)continue;d.appendChild(Re.createTextNode(g))}}e.parentNode.replaceChild(d,e)}}else if(o===1){let a=[...e.childNodes];for(let l=0,c=a.length;l<c;l++)this.splitNode(a[l])}}split(e=!1){let t=this.$target,n=!!this.cache&&!e,s=this.lineTemplate,r=this.wordTemplate,o=this.charTemplate,a=Re.fonts.status!=="loading",l=s&&a;this.ready=!s||a,(l||e)&&this.effectsCleanups.forEach(d=>yt(d)&&d(this)),n||(e&&(t.innerHTML=this.html,this.words.length=this.chars.length=0),this.splitNode(t),this.cache=t.innerHTML),l&&(n&&(t.innerHTML=this.cache),this.lines.length=0,r&&(this.words=Vl(t,jo))),o&&(l||r)&&(this.chars=Vl(t,Qo));let c=this.words.length?this.words:this.chars,h,u=0;for(let d=0,f=c.length;d<f;d++){let m=c[d],{top:_,height:g}=m.getBoundingClientRect();!ie(h)&&_-h>g*.5&&u++,m.setAttribute(ea,`${u}`);let p=m.querySelectorAll(`[${ea}]`),y=p.length;for(;y--;)p[y].setAttribute(ea,`${u}`);h=_}if(l){let d=Re.createDocumentFragment(),f=new Set,m=[];for(let _=0;_<u+1;_++){let g=t.cloneNode(!0);Im(g,_,new Set).forEach(p=>{let y=p.parentNode;y&&(p.nodeType===1&&f.add(y),y.removeChild(p))}),m.push(g)}f.forEach(Cm);for(let _=0,g=m.length;_<g;_++)Gu(s,this.lines,m[_],d,Xu,this.debug,_);t.innerHTML="",t.appendChild(d),r&&(this.words=Vl(t,jo)),o&&(this.chars=Vl(t,Qo))}if(this.linesOnly){let d=this.words,f=d.length;for(;f--;){let m=d[f];m.replaceWith(m.textContent)}d.length=0}if(this.accessible&&(l||!n)){let d=Re.createElement("span");d.style.cssText="position:absolute;overflow:hidden;clip:rect(0 0 0 0);clip-path:inset(50%);width:1px;height:1px;white-space:nowrap;",d.innerHTML=this.html,t.insertBefore(d,t.firstChild),this.lines.forEach(Vu),this.words.forEach(Vu),this.chars.forEach(Vu)}return this.width=t.offsetWidth,(l||e)&&this.effects.forEach((d,f)=>this.effectsCleanups[f]=d(this)),this}refresh(){this.split(!0)}},Vi=(i,e)=>new Gl(i,e)});var _i=Ae(()=>{Gr();Kp();em();im();Am();hm();rm();Ou();Pm();});var Cx={};var Lm=Ae(()=>{"use strict";_i();Mn({autoplay:!0,loop:!0}).label("start").add(".loading-shadow",{opacity:[0,.1,0],scale:[{from:1,to:.7,duration:750},{from:.7,to:1,duration:750}],duration:1500,delay:1500},"start").add(".loading-inner",{scaleY:[{from:1,to:.9,duration:100,ease:"outCirc"},{from:.9,to:1,duration:100,ease:"inCirc"},{from:1,to:.9,duration:100,ease:"outCirc",delay:1500},{from:.9,to:1,duration:100,ease:"inCirc"}],delay:1300},"start").add(".loading-wrapper",{y:[{from:0,ease:"outSine",to:-40,delay:1500},{from:-40,ease:"inSine",to:0}],rotate:[{from:0,to:-360,delay:1500,easy:"inOutSine",duration:1500}],easing:"inOutExpo",duration:1500,delay:1500},"start").add(".anime22 path",{opacity:[0,1,{to:0,delay:1500}],delay:St(100,{start:500}),duration:1e3},"start")});function Yd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ix(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function co(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function $g(){let i=co("canvas");return i.style.display="block",i}function fa(...i){let e="THREE."+i.shift();ho?ho("log",e,...i):console.log(e,...i)}function Pe(...i){let e="THREE."+i.shift();ho?ho("warn",e,...i):console.warn(e,...i)}function Ve(...i){let e="THREE."+i.shift();ho?ho("error",e,...i):console.error(e,...i)}function uo(...i){let e=i.join(" ");e in Dm||(Dm[e]=!0,Pe(...i))}function Zg(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Ti(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_n[i&255]+_n[i>>8&255]+_n[i>>16&255]+_n[i>>24&255]+"-"+_n[e&255]+_n[e>>8&255]+"-"+_n[e>>16&15|64]+_n[e>>24&255]+"-"+_n[t&63|128]+_n[t>>8&255]+"-"+_n[t>>16&255]+_n[t>>24&255]+_n[n&255]+_n[n>>8&255]+_n[n>>16&255]+_n[n>>24&255]).toLowerCase()}function it(i,e,t){return Math.max(e,Math.min(t,i))}function $d(i,e){return(i%e+e)%e}function Px(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Lx(i,e,t){return i!==e?(t-i)/(e-i):0}function ca(i,e,t){return(1-t)*i+t*e}function Dx(i,e,t,n){return ca(i,e,1-Math.exp(-t*n))}function Nx(i,e=1){return e-Math.abs($d(i,e*2)-e)}function Ux(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fx(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ox(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Bx(i,e){return i+Math.random()*(e-i)}function kx(i){return i*(.5-Math.random())}function zx(i){i!==void 0&&(Nm=i);let e=Nm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Vx(i){return i*la}function Hx(i){return i*cr}function Gx(i){return(i&i-1)===0&&i!==0}function Wx(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Xx(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qx(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:Pe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Si(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function bt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}function Yx(){let i={enabled:!0,workingColorSpace:Kt,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===pt&&(s.r=ds(s.r),s.g=ds(s.g),s.b=ds(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===pt&&(s.r=ao(s.r),s.g=ao(s.g),s.b=ao(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===xs?ua:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return uo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return uo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Kt]:{primaries:e,whitePoint:n,transfer:ua,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ht},outputColorSpaceConfig:{drawingBufferColorSpace:Ht}},[Ht]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:Fm,fromXYZ:Om,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ht}}}),i}function ds(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ao(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function $u(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?xc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}function Ku(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Qs.fromArray(i,r);let a=s.x*Math.abs(Qs.x)+s.y*Math.abs(Qs.y)+s.z*Math.abs(Qs.z),l=e.dot(Qs),c=t.dot(Qs),h=n.dot(Qs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}function cd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function sy(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function ry(i){Math.abs(i)>65504&&Pe("DataUtils.toHalfFloat(): Value out of range."),i=it(i,-65504,65504),us.floatView[0]=i;let e=us.uint32View[0],t=e>>23&511;return us.baseTable[t]+((e&8388607)>>us.shiftTable[t])}function oy(i){let e=i>>10;return us.uint32View[0]=us.mantissaTable[us.offsetTable[e]+(i&1023)]+us.exponentTable[e],us.floatView[0]}function cy(i,e,t,n,s,r,o,a){let l;if(e.side===Rn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Jn,a),l===null)return null;sc.copy(a),sc.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sc);return c<t.near||c>t.far?null:{distance:c,point:sc.clone(),object:i}}function rc(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ec),i.getVertexPosition(l,tc),i.getVertexPosition(c,nc);let h=cy(i,e,t,n,ec,tc,nc,$m);if(h){let u=new B;Is.getBarycoord($m,ec,tc,nc,u),s&&(h.uv=Is.getInterpolatedAttribute(s,a,l,c,u,new Xe)),r&&(h.uv1=Is.getInterpolatedAttribute(r,a,l,c,u,new Xe)),o&&(h.normal=Is.getInterpolatedAttribute(o,a,l,c,u,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new B,materialIndex:0};Is.getNormal(ec,tc,nc,d.normal),h.face=d,h.barycoord=u}return h}function Sr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yn(i){let e={};for(let t=0;t<i.length;t++){let n=Sr(i[t]);for(let s in n)e[s]=n[s]}return e}function hy(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Zd(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}function hc(i,e,t,n,s,r,o){let a=i.geometry.attributes.position;if(bc.fromBufferAttribute(a,s),Mc.fromBufferAttribute(a,r),t.distanceSqToSegment(bc,Mc,md,og)>n)return;md.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(md);if(!(c<e.near||c>e.far))return{distance:c,point:og.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}function hg(i,e,t,n,s,r,o){let a=vd.distanceSqToPoint(i);if(a<t){let l=new B;vd.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}function fc(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function vy(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ug(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function jg(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push(...o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}function Sy(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Wi;case"vector":case"vector2":case"vector3":case"vector4":return qi;case"color":return Pa;case"quaternion":return Xi;case"bool":case"boolean":return ms;case"string":return gs}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function by(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Sy(i.type);if(i.times===void 0){let t=[],n=[];jg(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}function jd(i,e,t,n){let s=Ly(n);switch(t){case Hd:return i*e;case Zc:return i*e/s.components*s.byteLength;case Kc:return i*e/s.components*s.byteLength;case vr:return i*e*2/s.components*s.byteLength;case Jc:return i*e*2/s.components*s.byteLength;case Gd:return i*e*3/s.components*s.byteLength;case ti:return i*e*4/s.components*s.byteLength;case jc:return i*e*4/s.components*s.byteLength;case Xa:case qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ya:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case eh:case nh:return Math.max(i,16)*Math.max(e,8)/4;case Qc:case th:return Math.max(i,8)*Math.max(e,8)/2;case ih:case sh:case oh:case ah:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case rh:case lh:case ch:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case hh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case uh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case dh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case fh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case ph:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case mh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case gh:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case _h:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case xh:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case yh:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case vh:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Th:case Eh:case wh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ah:case Rh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ch:case Ih:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ly(i){switch(i){case Hn:case Bd:return{byteLength:1,components:1};case Eo:case kd:case Cn:return{byteLength:2,components:1};case Yc:case $c:return{byteLength:2,components:4};case Ii:case qc:case pn:return{byteLength:4,components:1};case zd:case Vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}var Fs,Os,pg,wd,mg,Ha,Fc,Mo,Jn,Rn,fi,$i,rr,Ad,Rd,Cd,gg,Ps,_g,xg,yg,vg,Sg,bg,Mg,Tg,mc,gc,Eg,wg,Ag,Rg,Cg,Ig,Pg,Lg,Dg,Oc,Bc,kc,or,zc,Vc,Hc,Gc,Id,Ng,Ug,Ci,Pd,Ld,Dd,Ga,Nd,Ud,Fd,xd,Fg,Od,Bs,_r,xr,Wc,Wa,Ls,On,lo,Gt,Xc,yr,Lt,To,pi,Hn,Bd,kd,Eo,qc,Ii,pn,Cn,Yc,$c,wo,zd,Vd,Hd,Gd,ti,Gi,ks,Zc,Kc,vr,Jc,jc,Xa,qa,Ya,$a,Qc,eh,th,nh,ih,sh,rh,oh,ah,lh,ch,hh,uh,dh,fh,ph,mh,gh,_h,xh,yh,vh,Sh,bh,Mh,Th,Eh,wh,Ah,Rh,Ch,Ih,Ph,Og,Bg,ar,lr,pc,ir,sr,ha,Lh,kg,Wd,Za,Ao,zg,Xd,Vg,xs,Ht,Kt,ua,pt,nr,yd,Hg,Gg,Wg,Dh,Xg,qg,Nh,Yg,_c,qd,bi,da,Dm,ho,Ei,_n,Nm,la,cr,Ka,Xe,rn,B,qu,Um,Qe,Yu,Fm,Om,lt,Yr,xc,$x,fo,Zx,Zu,on,Ut,yc,jn,pa,vc,Qn,rs,xi,Wl,$r,Zr,Kr,Ts,Es,js,ta,Xl,ql,Qs,Kx,na,Ju,Bn,os,ju,Yl,ws,Qu,$l,ed,fs,tt,Jr,yi,Jx,jx,As,Zl,Zn,Bm,km,wi,ma,Qx,zm,jr,as,Kl,ia,ey,ty,Vm,Hm,Gm,Wm,ny,Qr,td,Ot,vi,ls,nd,cs,eo,to,Xm,id,sd,rd,od,ad,ld,Is,Kg,Rs,Jl,$e,xn,iy,kn,Ai,us,Ds,qt,jl,ay,Yt,ga,_a,wn,ly,ui,hd,no,Kn,sa,nn,An,qm,er,Ql,Ym,ec,tc,nc,ud,ic,$m,sc,fn,po,Jg,uy,dy,ei,xa,Cs,Zm,Km,sn,io,so,Sc,ya,va,Mi,fy,mo,Sa,go,En,_o,Jm,jm,Qm,py,eg,oc,dd,tg,fd,ba,xo,hr,ng,my,Ma,Ns,ro,ig,ac,sg,gy,ra,oa,Ta,pd,_y,xy,di,tr,yy,lc,yo,vo,bc,Mc,rg,aa,cc,md,og,ur,ag,lg,Ea,wa,So,cg,vd,uc,dc,Aa,Us,Tc,Ra,Ca,Ec,dr,zn,wc,Ac,ps,Rc,Ia,Cc,Vn,ms,Pa,Wi,Ic,Xi,gs,qi,fr,Hi,Pc,Qg,Ri,hs,Sd,pr,oo,Lc,La,Da,mr,gd,dg,fg,Na,bd,gr,Md,Ua,Yi,Td,Fa,Oa,_s,_d,Ba,Dc,ka,Nc,Kd,My,Jd,Ty,Ey,wy,Ay,Ry,Cy,Iy,Ed,At,Uc,Py,za,bo,Va,Qd=Ae(()=>{Fs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},pg=0,wd=1,mg=2,Ha=1,Fc=2,Mo=3,Jn=0,Rn=1,fi=2,$i=0,rr=1,Ad=2,Rd=3,Cd=4,gg=5,Ps=100,_g=101,xg=102,yg=103,vg=104,Sg=200,bg=201,Mg=202,Tg=203,mc=204,gc=205,Eg=206,wg=207,Ag=208,Rg=209,Cg=210,Ig=211,Pg=212,Lg=213,Dg=214,Oc=0,Bc=1,kc=2,or=3,zc=4,Vc=5,Hc=6,Gc=7,Id=0,Ng=1,Ug=2,Ci=0,Pd=1,Ld=2,Dd=3,Ga=4,Nd=5,Ud=6,Fd=7,xd="attached",Fg="detached",Od=300,Bs=301,_r=302,xr=303,Wc=304,Wa=306,Ls=1e3,On=1001,lo=1002,Gt=1003,Xc=1004,yr=1005,Lt=1006,To=1007,pi=1008,Hn=1009,Bd=1010,kd=1011,Eo=1012,qc=1013,Ii=1014,pn=1015,Cn=1016,Yc=1017,$c=1018,wo=1020,zd=35902,Vd=35899,Hd=1021,Gd=1022,ti=1023,Gi=1026,ks=1027,Zc=1028,Kc=1029,vr=1030,Jc=1031,jc=1033,Xa=33776,qa=33777,Ya=33778,$a=33779,Qc=35840,eh=35841,th=35842,nh=35843,ih=36196,sh=37492,rh=37496,oh=37488,ah=37489,lh=37490,ch=37491,hh=37808,uh=37809,dh=37810,fh=37811,ph=37812,mh=37813,gh=37814,_h=37815,xh=37816,yh=37817,vh=37818,Sh=37819,bh=37820,Mh=37821,Th=36492,Eh=36494,wh=36495,Ah=36283,Rh=36284,Ch=36285,Ih=36286,Ph=2200,Og=2201,Bg=2202,ar=2300,lr=2301,pc=2302,ir=2400,sr=2401,ha=2402,Lh=2500,kg=2501,Wd=0,Za=1,Ao=2,zg=3200,Xd=0,Vg=1,xs="",Ht="srgb",Kt="srgb-linear",ua="linear",pt="srgb",nr=7680,yd=519,Hg=512,Gg=513,Wg=514,Dh=515,Xg=516,qg=517,Nh=518,Yg=519,_c=35044,qd="300 es",bi=2e3,da=2001;Dm={},ho=null;Ei=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},_n=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nm=1234567,la=Math.PI/180,cr=180/Math.PI;Ka={DEG2RAD:la,RAD2DEG:cr,generateUUID:Ti,clamp:it,euclideanModulo:$d,mapLinear:Px,inverseLerp:Lx,lerp:ca,damp:Dx,pingpong:Nx,smoothstep:Ux,smootherstep:Fx,randInt:Ox,randFloat:Bx,randFloatSpread:kx,seededRandom:zx,degToRad:Vx,radToDeg:Hx,isPowerOfTwo:Gx,ceilPowerOfTwo:Wx,floorPowerOfTwo:Xx,setQuaternionFromProperEuler:qx,normalize:bt,denormalize:Si},Xe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},rn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=_;return}if(u!==_||l!==d||c!==f||h!==m){let g=l*d+c*f+h*m+u*_;g<0&&(d=-d,f=-f,m=-m,_=-_,g=-g);let p=1-a;if(g<.9995){let y=Math.acos(g),S=Math.sin(y);p=Math.sin(p*y)/S,a=Math.sin(a*y)/S,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+_*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+_*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Um.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Um.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(it(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},qu=new B,Um=new rn,Qe=class i{constructor(e,t,n,s,r,o,a,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],y=s[1],S=s[4],b=s[7],E=s[2],A=s[5],R=s[8];return r[0]=o*_+a*y+l*E,r[3]=o*g+a*S+l*A,r[6]=o*p+a*b+l*R,r[1]=c*_+h*y+u*E,r[4]=c*g+h*S+u*A,r[7]=c*p+h*b+u*R,r[2]=d*_+f*y+m*E,r[5]=d*g+f*S+m*A,r[8]=d*p+f*b+m*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Yu.makeScale(e,t)),this}rotate(e){return this.premultiply(Yu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Yu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Yu=new Qe,Fm=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Om=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);lt=Yx();xc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yr===void 0&&(Yr=co("canvas")),Yr.width=e.width,Yr.height=e.height;let s=Yr.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yr}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=co("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ds(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ds(t[n]/255)*255):t[n]=ds(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},$x=0,fo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$x++}),this.uuid=Ti(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($u(s[o].image)):r.push($u(s[o]))}else r=$u(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Zx=0,Zu=new B,on=class i extends Ei{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=On,s=On,r=Lt,o=pi,a=ti,l=Hn,c=i.DEFAULT_ANISOTROPY,h=xs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zx++}),this.uuid=Ti(),this.name="",this.source=new fo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xe(0,0),this.repeat=new Xe(1,1),this.center=new Xe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Od)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ls:e.x=e.x-Math.floor(e.x);break;case On:e.x=e.x<0?0:1;break;case lo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ls:e.y=e.y-Math.floor(e.y);break;case On:e.y=e.y<0?0:1;break;case lo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=Od;on.DEFAULT_ANISOTROPY=1;Ut=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,b=(f+1)/2,E=(p+1)/2,A=(h+d)/4,R=(u+_)/4,I=(m+g)/4;return S>b&&S>E?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=A/n,r=R/n):b>E?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=A/s,r=I/s):E<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),n=R/r,s=I/r),this.set(n,s,r,t),this}let y=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(g-m)/y,this.y=(u-_)/y,this.z=(d-h)/y,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=it(this.x,e.x,t.x),this.y=it(this.y,e.y,t.y),this.z=it(this.z,e.z,t.z),this.w=it(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=it(this.x,e,t),this.y=it(this.y,e,t),this.z=it(this.z,e,t),this.w=it(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(it(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},yc=class extends Ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);let s={width:e,height:t,depth:n.depth},r=new on(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new fo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},jn=class extends yc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},vc=class extends on{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=On,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Qn=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=xi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,xi):xi.fromBufferAttribute(r,o),xi.applyMatrix4(e.matrixWorld),this.expandByPoint(xi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wl.copy(n.boundingBox)),Wl.applyMatrix4(e.matrixWorld),this.union(Wl)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,xi),xi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ta),Xl.subVectors(this.max,ta),$r.subVectors(e.a,ta),Zr.subVectors(e.b,ta),Kr.subVectors(e.c,ta),Ts.subVectors(Zr,$r),Es.subVectors(Kr,Zr),js.subVectors($r,Kr);let t=[0,-Ts.z,Ts.y,0,-Es.z,Es.y,0,-js.z,js.y,Ts.z,0,-Ts.x,Es.z,0,-Es.x,js.z,0,-js.x,-Ts.y,Ts.x,0,-Es.y,Es.x,0,-js.y,js.x,0];return!Ku(t,$r,Zr,Kr,Xl)||(t=[1,0,0,0,1,0,0,0,1],!Ku(t,$r,Zr,Kr,Xl))?!1:(ql.crossVectors(Ts,Es),t=[ql.x,ql.y,ql.z],Ku(t,$r,Zr,Kr,Xl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},rs=[new B,new B,new B,new B,new B,new B,new B,new B],xi=new B,Wl=new Qn,$r=new B,Zr=new B,Kr=new B,Ts=new B,Es=new B,js=new B,ta=new B,Xl=new B,ql=new B,Qs=new B;Kx=new Qn,na=new B,Ju=new B,Bn=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Kx.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(na,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ju.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(Ju)),this.expandByPoint(na.copy(e.center).sub(Ju))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},os=new B,ju=new B,Yl=new B,ws=new B,Qu=new B,$l=new B,ed=new B,fs=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,os)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=os.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(os.copy(this.origin).addScaledVector(this.direction,t),os.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ju.copy(e).add(t).multiplyScalar(.5),Yl.copy(t).sub(e).normalize(),ws.copy(this.origin).sub(ju);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Yl),a=ws.dot(this.direction),l=-ws.dot(Yl),c=ws.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){let _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ju).addScaledVector(Yl,d),f}intersectSphere(e,t){os.subVectors(e.center,this.origin);let n=os.dot(this.direction),s=os.dot(os)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,os)!==null}intersectTriangle(e,t,n,s,r){Qu.subVectors(t,e),$l.subVectors(n,e),ed.crossVectors(Qu,$l);let o=this.direction.dot(ed),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ws.subVectors(this.origin,e);let l=a*this.direction.dot($l.crossVectors(ws,$l));if(l<0)return null;let c=a*this.direction.dot(Qu.cross(ws));if(c<0||l+c>o)return null;let h=-a*ws.dot(ed);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},tt=class i{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,_,g){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,_,g)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Jr.setFromMatrixColumn(e,0).length(),r=1/Jr.setFromMatrixColumn(e,1).length(),o=1/Jr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=o*h,f=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d+_*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,m=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,m=a*h,_=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-_*u}else if(e.order==="XZY"){let d=o*l,f=o*c,m=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jx,e,jx)}lookAt(e,t,n){let s=this.elements;return Zn.subVectors(e,t),Zn.lengthSq()===0&&(Zn.z=1),Zn.normalize(),As.crossVectors(n,Zn),As.lengthSq()===0&&(Math.abs(n.z)===1?Zn.x+=1e-4:Zn.z+=1e-4,Zn.normalize(),As.crossVectors(n,Zn)),As.normalize(),Zl.crossVectors(Zn,As),s[0]=As.x,s[4]=Zl.x,s[8]=Zn.x,s[1]=As.y,s[5]=Zl.y,s[9]=Zn.y,s[2]=As.z,s[6]=Zl.z,s[10]=Zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],y=n[3],S=n[7],b=n[11],E=n[15],A=s[0],R=s[4],I=s[8],v=s[12],M=s[1],C=s[5],D=s[9],N=s[13],P=s[2],z=s[6],F=s[10],V=s[14],W=s[3],H=s[7],Z=s[11],te=s[15];return r[0]=o*A+a*M+l*P+c*W,r[4]=o*R+a*C+l*z+c*H,r[8]=o*I+a*D+l*F+c*Z,r[12]=o*v+a*N+l*V+c*te,r[1]=h*A+u*M+d*P+f*W,r[5]=h*R+u*C+d*z+f*H,r[9]=h*I+u*D+d*F+f*Z,r[13]=h*v+u*N+d*V+f*te,r[2]=m*A+_*M+g*P+p*W,r[6]=m*R+_*C+g*z+p*H,r[10]=m*I+_*D+g*F+p*Z,r[14]=m*v+_*N+g*V+p*te,r[3]=y*A+S*M+b*P+E*W,r[7]=y*R+S*C+b*z+E*H,r[11]=y*I+S*D+b*F+E*Z,r[15]=y*v+S*N+b*V+E*te,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],_=e[7],g=e[11],p=e[15],y=l*f-c*d,S=a*f-c*u,b=a*d-l*u,E=o*f-c*h,A=o*d-l*h,R=o*u-a*h;return t*(_*y-g*S+p*b)-n*(m*y-g*E+p*A)+s*(m*S-_*E+p*R)-r*(m*b-_*A+g*R)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],_=e[13],g=e[14],p=e[15],y=u*g*c-_*d*c+_*l*f-a*g*f-u*l*p+a*d*p,S=m*d*c-h*g*c-m*l*f+o*g*f+h*l*p-o*d*p,b=h*_*c-m*u*c+m*a*f-o*_*f-h*a*p+o*u*p,E=m*u*l-h*_*l-m*a*d+o*_*d+h*a*g-o*u*g,A=t*y+n*S+s*b+r*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/A;return e[0]=y*R,e[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*R,e[2]=(a*g*r-_*l*r+_*s*c-n*g*c-a*s*p+n*l*p)*R,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*R,e[4]=S*R,e[5]=(h*g*r-m*d*r+m*s*f-t*g*f-h*s*p+t*d*p)*R,e[6]=(m*l*r-o*g*r-m*s*c+t*g*c+o*s*p-t*l*p)*R,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*R,e[8]=b*R,e[9]=(m*u*r-h*_*r-m*n*f+t*_*f+h*n*p-t*u*p)*R,e[10]=(o*_*r-m*a*r+m*n*c-t*_*c-o*n*p+t*a*p)*R,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*R,e[12]=E*R,e[13]=(h*_*s-m*u*s+m*n*d-t*_*d-h*n*g+t*u*g)*R,e[14]=(m*a*s-o*_*s-m*n*l+t*_*l+o*n*g-t*a*g)*R,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*R,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,y=l*c,S=l*h,b=l*u,E=n.x,A=n.y,R=n.z;return s[0]=(1-(_+p))*E,s[1]=(f+b)*E,s[2]=(m-S)*E,s[3]=0,s[4]=(f-b)*A,s[5]=(1-(d+p))*A,s[6]=(g+y)*A,s[7]=0,s[8]=(m+S)*R,s[9]=(g-y)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;if(e.x=s[12],e.y=s[13],e.z=s[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let r=Jr.set(s[0],s[1],s[2]).length(),o=Jr.set(s[4],s[5],s[6]).length(),a=Jr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),yi.copy(this);let c=1/r,h=1/o,u=1/a;return yi.elements[0]*=c,yi.elements[1]*=c,yi.elements[2]*=c,yi.elements[4]*=h,yi.elements[5]*=h,yi.elements[6]*=h,yi.elements[8]*=u,yi.elements[9]*=u,yi.elements[10]*=u,t.setFromRotationMatrix(yi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=bi,l=!1){let c=this.elements,h=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),m,_;if(l)m=r/(o-r),_=o*r/(o-r);else if(a===bi)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===da)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=bi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-s),d=-(t+e)/(t-e),f=-(n+s)/(n-s),m,_;if(l)m=1/(o-r),_=o/(o-r);else if(a===bi)m=-2/(o-r),_=-(o+r)/(o-r);else if(a===da)m=-1/(o-r),_=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Jr=new B,yi=new tt,Jx=new B(0,0,0),jx=new B(1,1,1),As=new B,Zl=new B,Zn=new B,Bm=new tt,km=new rn,wi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(it(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Bm,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return km.setFromEuler(this),this.setFromQuaternion(km,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};wi.DEFAULT_ORDER="XYZ";ma=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Qx=0,zm=new B,jr=new rn,as=new tt,Kl=new B,ia=new B,ey=new B,ty=new rn,Vm=new B(1,0,0),Hm=new B(0,1,0),Gm=new B(0,0,1),Wm={type:"added"},ny={type:"removed"},Qr={type:"childadded",child:null},td={type:"childremoved",child:null},Ot=class i extends Ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new B,t=new wi,n=new rn,s=new B(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Qe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ma,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,t){return jr.setFromAxisAngle(e,t),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Vm,e)}rotateY(e){return this.rotateOnAxis(Hm,e)}rotateZ(e){return this.rotateOnAxis(Gm,e)}translateOnAxis(e,t){return zm.copy(e).applyQuaternion(this.quaternion),this.position.add(zm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Vm,e)}translateY(e){return this.translateOnAxis(Hm,e)}translateZ(e){return this.translateOnAxis(Gm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(as.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Kl.copy(e):Kl.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ia.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?as.lookAt(ia,Kl,this.up):as.lookAt(Kl,ia,this.up),this.quaternion.setFromRotationMatrix(as),s&&(as.extractRotation(s.matrixWorld),jr.setFromRotationMatrix(as),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ny),td.child=e,this.dispatchEvent(td),td.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),as.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),as.multiply(e.parent.matrixWorld)),e.applyMatrix4(as),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wm),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,e,ey),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ia,ty,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ot.DEFAULT_UP=new B(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;vi=new B,ls=new B,nd=new B,cs=new B,eo=new B,to=new B,Xm=new B,id=new B,sd=new B,rd=new B,od=new Ut,ad=new Ut,ld=new Ut,Is=class i{constructor(e=new B,t=new B,n=new B){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vi.subVectors(e,t),s.cross(vi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vi.subVectors(s,t),ls.subVectors(n,t),nd.subVectors(e,t);let o=vi.dot(vi),a=vi.dot(ls),l=vi.dot(nd),c=ls.dot(ls),h=ls.dot(nd),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,cs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,cs.x),l.addScaledVector(o,cs.y),l.addScaledVector(a,cs.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return od.setScalar(0),ad.setScalar(0),ld.setScalar(0),od.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,n),ld.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(od,r.x),o.addScaledVector(ad,r.y),o.addScaledVector(ld,r.z),o}static isFrontFacing(e,t,n,s){return vi.subVectors(n,t),ls.subVectors(e,t),vi.cross(ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),vi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;eo.subVectors(s,n),to.subVectors(r,n),id.subVectors(e,n);let l=eo.dot(id),c=to.dot(id);if(l<=0&&c<=0)return t.copy(n);sd.subVectors(e,s);let h=eo.dot(sd),u=to.dot(sd);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(eo,o);rd.subVectors(e,r);let f=eo.dot(rd),m=to.dot(rd);if(m>=0&&f<=m)return t.copy(r);let _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(to,a);let g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return Xm.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Xm,a);let p=1/(g+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(eo,o).addScaledVector(to,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rs={h:0,s:0,l:0},Jl={h:0,s:0,l:0};$e=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ht){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,lt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=lt.workingColorSpace){if(e=$d(e,1),t=it(t,0,1),n=it(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=cd(o,r,e+1/3),this.g=cd(o,r,e),this.b=cd(o,r,e-1/3)}return lt.colorSpaceToWorking(this,s),this}setStyle(e,t=Ht){function n(r){r!==void 0&&parseFloat(r)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ht){let n=Kg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ds(e.r),this.g=ds(e.g),this.b=ds(e.b),this}copyLinearToSRGB(e){return this.r=ao(e.r),this.g=ao(e.g),this.b=ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ht){return lt.workingToColorSpace(xn.copy(this),e),Math.round(it(xn.r*255,0,255))*65536+Math.round(it(xn.g*255,0,255))*256+Math.round(it(xn.b*255,0,255))}getHexString(e=Ht){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.workingToColorSpace(xn.copy(this),t);let n=xn.r,s=xn.g,r=xn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ht){lt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,s=xn.b;return e!==Ht?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Rs),this.setHSL(Rs.h+e,Rs.s+t,Rs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rs),e.getHSL(Jl);let n=ca(Rs.h,Jl.h,t),s=ca(Rs.s,Jl.s,t),r=ca(Rs.l,Jl.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new $e;$e.NAMES=Kg;iy=0,kn=class extends Ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:iy++}),this.uuid=Ti(),this.name="",this.type="Material",this.blending=rr,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mc,this.blendDst=gc,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=nr,this.stencilZFail=nr,this.stencilZPass=nr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rr&&(n.blending=this.blending),this.side!==Jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==mc&&(n.blendSrc=this.blendSrc),this.blendDst!==gc&&(n.blendDst=this.blendDst),this.blendEquation!==Ps&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==or&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==nr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==nr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==nr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ai=class extends kn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},us=sy();Ds=class{static toHalfFloat(e){return ry(e)}static fromHalfFloat(e){return oy(e)}},qt=new B,jl=new Xe,ay=0,Yt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ay++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=pn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Si(t,this.array)),t}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Si(t,this.array)),t}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Si(t,this.array)),t}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),e}},ga=class extends Yt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},_a=class extends Yt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},wn=class extends Yt{constructor(e,t,n){super(new Float32Array(e),t,n)}},ly=0,ui=new tt,hd=new Ot,no=new B,Kn=new Qn,sa=new Qn,nn=new B,An=class i extends Ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yd(e)?_a:ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,t,n){return ui.makeTranslation(e,t,n),this.applyMatrix4(ui),this}scale(e,t,n){return ui.makeScale(e,t,n),this.applyMatrix4(ui),this}lookAt(e){return hd.lookAt(e),hd.updateMatrix(),this.applyMatrix4(hd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new wn(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];sa.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Kn.min,sa.min),Kn.expandByPoint(nn),nn.addVectors(Kn.max,sa.max),Kn.expandByPoint(nn)):(Kn.expandByPoint(sa.min),Kn.expandByPoint(sa.max))}Kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)nn.fromBufferAttribute(a,c),l&&(no.fromBufferAttribute(e,c),nn.add(no)),s=Math.max(s,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Yt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let I=0;I<n.count;I++)a[I]=new B,l[I]=new B;let c=new B,h=new B,u=new B,d=new Xe,f=new Xe,m=new Xe,_=new B,g=new B;function p(I,v,M){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,v),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,v),m.fromBufferAttribute(r,M),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[I].add(_),a[v].add(_),a[M].add(_),l[I].add(g),l[v].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,v=y.length;I<v;++I){let M=y[I],C=M.start,D=M.count;for(let N=C,P=C+D;N<P;N+=3)p(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let S=new B,b=new B,E=new B,A=new B;function R(I){E.fromBufferAttribute(s,I),A.copy(E);let v=a[I];S.copy(v),S.sub(E.multiplyScalar(E.dot(v))).normalize(),b.crossVectors(A,v);let C=b.dot(l[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,v=y.length;I<v;++I){let M=y[I],C=M.start,D=M.count;for(let N=C,P=C+D;N<P;N+=3)R(e.getX(N+0)),R(e.getX(N+1)),R(e.getX(N+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Yt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,u=new B;if(e)for(let d=0,f=e.count;d<f;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let _=0,g=l.length;_<g;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Yt(d,h,u)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let l=s[a],c=e(l,n);t.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qm=new tt,er=new fs,Ql=new Bn,Ym=new B,ec=new B,tc=new B,nc=new B,ud=new B,ic=new B,$m=new B,sc=new B,fn=class extends Ot{constructor(e=new An,t=new Ai){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ic.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],u=r[l];h!==0&&(ud.fromBufferAttribute(u,e),o?ic.addScaledVector(ud,h):ic.addScaledVector(ud.sub(t),h))}t.add(ic)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ql.copy(n.boundingSphere),Ql.applyMatrix4(r),er.copy(e.ray).recast(e.near),!(Ql.containsPoint(er.origin)===!1&&(er.intersectSphere(Ql,Ym)===null||er.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&(qm.copy(r).invert(),er.copy(e.ray).applyMatrix4(qm),!(n.boundingBox!==null&&er.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,er)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,E=S;b<E;b+=3){let A=a.getX(b),R=a.getX(b+1),I=a.getX(b+2);s=rc(this,p,e,n,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=a.getX(g),S=a.getX(g+1),b=a.getX(g+2);s=rc(this,o,e,n,c,h,u,y,S,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=o[g.materialIndex],y=Math.max(g.start,f.start),S=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let b=y,E=S;b<E;b+=3){let A=b,R=b+1,I=b+2;s=rc(this,p,e,n,c,h,u,A,R,I),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){let y=g,S=g+1,b=g+2;s=rc(this,o,e,n,c,h,u,y,S,b),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};po=class i extends An{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new wn(c,3)),this.setAttribute("normal",new wn(h,3)),this.setAttribute("uv",new wn(u,2));function m(_,g,p,y,S,b,E,A,R,I,v){let M=b/R,C=E/I,D=b/2,N=E/2,P=A/2,z=R+1,F=I+1,V=0,W=0,H=new B;for(let Z=0;Z<F;Z++){let te=Z*C-N;for(let ge=0;ge<z;ge++){let _e=ge*M-D;H[_]=_e*y,H[g]=te*S,H[p]=P,c.push(H.x,H.y,H.z),H[_]=0,H[g]=0,H[p]=A>0?1:-1,h.push(H.x,H.y,H.z),u.push(ge/R),u.push(1-Z/I),V+=1}}for(let Z=0;Z<I;Z++)for(let te=0;te<R;te++){let ge=d+te+z*Z,_e=d+te+z*(Z+1),He=d+(te+1)+z*(Z+1),qe=d+(te+1)+z*Z;l.push(ge,_e,qe),l.push(_e,He,qe),W+=6}a.addGroup(f,W,v),f+=W,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};Jg={clone:Sr,merge:yn},uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ei=class extends kn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uy,this.fragmentShader=dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xa=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=bi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cs=new B,Zm=new Xe,Km=new Xe,sn=class extends xa{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=cr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return cr*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Km),t.subVectors(Km,Zm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(la*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},io=-90,so=1,Sc=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(io,so,e,t);s.layers=this.layers,this.add(s);let r=new sn(io,so,e,t);r.layers=this.layers,this.add(r);let o=new sn(io,so,e,t);o.layers=this.layers,this.add(o);let a=new sn(io,so,e,t);a.layers=this.layers,this.add(a);let l=new sn(io,so,e,t);l.layers=this.layers,this.add(l);let c=new sn(io,so,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(let c of t)this.remove(c);if(e===bi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===da)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ya=class extends on{constructor(e=[],t=Bs,n,s,r,o,a,l,c,h){super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},va=class extends jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ya(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new po(5,5,5),r=new ei({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Rn,blending:$i});r.uniforms.tEquirect.value=t;let o=new fn(s,r),a=t.minFilter;return t.minFilter===pi&&(t.minFilter=Lt),new Sc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Mi=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},fy={type:"move"},mo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Mi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Mi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Mi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(c,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(fy)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Mi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Sa=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},go=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_c,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},En=new B,_o=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=bt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=bt(t,this.array),n=bt(n,this.array),s=bt(s,this.array),r=bt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Yt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Jm=new B,jm=new Ut,Qm=new Ut,py=new B,eg=new tt,oc=new B,dd=new Bn,tg=new tt,fd=new fs,ba=class extends fn{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=xd,this.bindMatrix=new tt,this.bindMatrixInverse=new tt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oc),this.boundingBox.expandByPoint(oc)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bn),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,oc),this.boundingSphere.expandByPoint(oc)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),dd.copy(this.boundingSphere),dd.applyMatrix4(s),e.ray.intersectsSphere(dd)!==!1&&(tg.copy(s).invert(),fd.copy(e.ray).applyMatrix4(tg),!(this.boundingBox!==null&&fd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,fd)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===xd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Fg?this.bindMatrixInverse.copy(this.bindMatrix).invert():Pe("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;jm.fromBufferAttribute(s.attributes.skinIndex,e),Qm.fromBufferAttribute(s.attributes.skinWeight,e),Jm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=Qm.getComponent(r);if(o!==0){let a=jm.getComponent(r);eg.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(py.copy(Jm).applyMatrix4(eg),o)}}return t.applyMatrix4(this.bindMatrixInverse)}},xo=class extends Ot{constructor(){super(),this.isBone=!0,this.type="Bone"}},hr=class extends on{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Gt,h=Gt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ng=new tt,my=new tt,Ma=class i{constructor(e=[],t=[]){this.uuid=Ti(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Pe("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new tt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new tt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:my;ng.multiplyMatrices(a,t[r]),ng.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new hr(t,e,e,ti,pn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],o=t[r];o===void 0&&(Pe("Skeleton: No bone found with UUID:",r),o=new xo),this.bones.push(o),this.boneInverses.push(new tt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let o=t[s];e.bones.push(o.uuid);let a=n[s];e.boneInverses.push(a.toArray())}return e}},Ns=class extends Yt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ro=new tt,ig=new tt,ac=[],sg=new Qn,gy=new tt,ra=new fn,oa=new Bn,Ta=class extends fn{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ns(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,gy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ro),sg.copy(e.boundingBox).applyMatrix4(ro),this.boundingBox.union(sg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ro),oa.copy(e.boundingSphere).applyMatrix4(ro),this.boundingSphere.union(oa)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ra.geometry=this.geometry,ra.material=this.material,ra.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),oa.copy(this.boundingSphere),oa.applyMatrix4(n),e.ray.intersectsSphere(oa)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ro),ig.multiplyMatrices(n,ro),ra.matrixWorld=ig,ra.raycast(e,ac);for(let o=0,a=ac.length;o<a;o++){let l=ac[o];l.instanceId=r,l.object=this,t.push(l)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ns(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,Zc,pn));let r=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pd=new B,_y=new B,xy=new Qe,di=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=pd.subVectors(n,t).cross(_y.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(pd),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||xy.getNormalMatrix(e),s=this.coplanarPoint(pd).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},tr=new Bn,yy=new Xe(.5,.5),lc=new B,yo=class{constructor(e=new di,t=new di,n=new di,s=new di,r=new di,o=new di){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bi,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],g=r[10],p=r[11],y=r[12],S=r[13],b=r[14],E=r[15];if(s[0].setComponents(c-o,f-h,p-m,E-y).normalize(),s[1].setComponents(c+o,f+h,p+m,E+y).normalize(),s[2].setComponents(c+a,f+u,p+_,E+S).normalize(),s[3].setComponents(c-a,f-u,p-_,E-S).normalize(),n)s[4].setComponents(l,d,g,b).normalize(),s[5].setComponents(c-l,f-d,p-g,E-b).normalize();else if(s[4].setComponents(c-l,f-d,p-g,E-b).normalize(),t===bi)s[5].setComponents(c+l,f+d,p+g,E+b).normalize();else if(t===da)s[5].setComponents(l,d,g,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),tr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),tr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(tr)}intersectsSprite(e){tr.center.set(0,0,0);let t=yy.distanceTo(e.center);return tr.radius=.7071067811865476+t,tr.applyMatrix4(e.matrixWorld),this.intersectsSphere(tr)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(lc.x=s.normal.x>0?e.max.x:e.min.x,lc.y=s.normal.y>0?e.max.y:e.min.y,lc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vo=class extends kn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $e(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bc=new B,Mc=new B,rg=new tt,aa=new fs,cc=new Bn,md=new B,og=new B,ur=class extends Ot{constructor(e=new An,t=new vo){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)bc.fromBufferAttribute(t,s-1),Mc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bc.distanceTo(Mc);e.setAttribute("lineDistance",new wn(n,1))}else Pe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;rg.copy(s).invert(),aa.copy(e.ray).applyMatrix4(rg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=h.getX(_),y=h.getX(_+1),S=hc(this,e,aa,l,p,y,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(f),p=hc(this,e,aa,l,_,g,m-1);p&&t.push(p)}}else{let f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=c){let p=hc(this,e,aa,l,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=hc(this,e,aa,l,m-1,f,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};ag=new B,lg=new B,Ea=class extends ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)ag.fromBufferAttribute(t,s),lg.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+ag.distanceTo(lg);e.setAttribute("lineDistance",new wn(n,1))}else Pe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},wa=class extends ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},So=class extends kn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cg=new tt,vd=new fs,uc=new Bn,dc=new B,Aa=class extends Ot{constructor(e=new An,t=new So){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uc.copy(n.boundingSphere),uc.applyMatrix4(s),uc.radius+=r,e.ray.intersectsSphere(uc)===!1)return;cg.copy(s).invert(),vd.copy(e.ray).applyMatrix4(cg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,_=f;m<_;m++){let g=c.getX(m);dc.fromBufferAttribute(u,g),hg(dc,g,l,s,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,_=f;m<_;m++)dc.fromBufferAttribute(u,m),hg(dc,m,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};Us=class extends on{constructor(e,t,n=Ii,s,r,o,a=Gt,l=Gt,c,h=Gi,u=1){if(h!==Gi&&h!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new fo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Tc=class extends Us{constructor(e,t=Ii,n=Bs,s,r,o=Gt,a=Gt,l,c=Gi){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ca=class i extends An{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let y=p*d-o;for(let S=0;S<c;S++){let b=S*u-r;m.push(b,-y,0),_.push(0,0,1),g.push(S/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let S=y+c*p,b=y+c*(p+1),E=y+1+c*(p+1),A=y+1+c*p;f.push(S,b,A),f.push(b,E,A)}this.setIndex(f),this.setAttribute("position",new wn(m,3)),this.setAttribute("normal",new wn(_,3)),this.setAttribute("uv",new wn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ec=class extends ei{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},dr=class extends kn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xd,this.normalScale=new Xe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zn=class extends dr{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Xe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},wc=class extends kn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ac=class extends kn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};ps=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Rc=class extends ps{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ir,endingEnd:ir}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case sr:r=e,a=2*t-n;break;case ha:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sr:o=e,l=2*n-t;break;case ha:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,y=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,S=(-1-f)*g+(1.5+f)*_+.5*m,b=f*g-f*_;for(let E=0;E!==a;++E)r[E]=p*o[h+E]+y*o[c+E]+S*o[l+E]+b*o[u+E];return r}},Ia=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}},Cc=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Cc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ia(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Rc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ar:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case pc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Pe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ar;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return pc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Ve("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){Ve("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Ix(s))for(let a=0,l=s.length;a!==l;++a){let c=s[a];if(isNaN(c)){Ve("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===pc,r=e.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let _=t[u+m];if(_!==t[d+m]||_!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=lr;ms=class extends Vn{constructor(e,t,n){super(e,t,n)}};ms.prototype.ValueTypeName="bool";ms.prototype.ValueBufferType=Array;ms.prototype.DefaultInterpolation=ar;ms.prototype.InterpolantFactoryMethodLinear=void 0;ms.prototype.InterpolantFactoryMethodSmooth=void 0;Pa=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Pa.prototype.ValueTypeName="color";Wi=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Wi.prototype.ValueTypeName="number";Ic=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t),c=e*a;for(let h=c+a;c!==h;c+=4)rn.slerpFlat(r,0,o,c-a,o,c,l);return r}},Xi=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Ic(this.times,this.values,this.getValueSize(),e)}};Xi.prototype.ValueTypeName="quaternion";Xi.prototype.InterpolantFactoryMethodSmooth=void 0;gs=class extends Vn{constructor(e,t,n){super(e,t,n)}};gs.prototype.ValueTypeName="string";gs.prototype.ValueBufferType=Array;gs.prototype.DefaultInterpolation=ar;gs.prototype.InterpolantFactoryMethodLinear=void 0;gs.prototype.InterpolantFactoryMethodSmooth=void 0;qi=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};qi.prototype.ValueTypeName="vector";fr=class{constructor(e="",t=-1,n=[],s=Lh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Ti(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(by(n[o]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,o=n.length;r!==o;++r)t.push(Vn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);let h=vy(l);l=ug(l,1,h),c=ug(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Wi(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){let c=e[a],h=c.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(c)}}let o=[];for(let a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(Pe("AnimationClip: parseAnimation() is deprecated and will be removed with r185"),!e)return Ve("AnimationClip: No animation in JSONLoader data."),null;let n=function(u,d,f,m,_){if(f.length!==0){let g=[],p=[];jg(f,g,p,m),g.length!==0&&_.push(new u(d,g,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,l=e.length||-1,c=e.hierarchy||[];for(let u=0;u<c.length;u++){let d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){let f={},m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let _=0;_<d[m].morphTargets.length;_++)f[d[m].morphTargets[_]]=-1;for(let _ in f){let g=[],p=[];for(let y=0;y!==d[m].morphTargets.length;++y){let S=d[m];g.push(S.time),p.push(S.morphTarget===_?1:0)}s.push(new Wi(".morphTargetInfluence["+_+"]",g,p))}l=f.length*o}else{let f=".bones["+t[u].name+"]";n(qi,f+".position",d,"pos",s),n(Xi,f+".quaternion",d,"rot",s),n(qi,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};Hi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Pc=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Qg=new Pc,Ri=class{constructor(e){this.manager=e!==void 0?e:Qg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ri.DEFAULT_MATERIAL_NAME="__DEFAULT";hs={},Sd=class extends Error{constructor(e,t){super(e),this.response=t}},pr=class extends Ri{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Hi.get(`file:${e}`);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(hs[e]!==void 0){hs[e].push({onLoad:t,onProgress:n,onError:s});return}hs[e]=[],hs[e].push({onLoad:t,onProgress:n,onError:s});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Pe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let h=hs[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,g=new ReadableStream({start(p){y();function y(){u.read().then(({done:S,value:b})=>{if(S)p.close();else{_+=b.byteLength;let E=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let A=0,R=h.length;A<R;A++){let I=h[A];I.onProgress&&I.onProgress(E)}p.enqueue(b),y()}},S=>{p.error(S)})}}});return new Response(g)}else throw new Sd(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a==="")return c.text();{let u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{Hi.add(`file:${e}`,c);let h=hs[e];delete hs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{let h=hs[e];if(h===void 0)throw this.manager.itemError(e),c;delete hs[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},oo=new WeakMap,Lc=class extends Ri{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(`image:${e}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0);else{let u=oo.get(o);u===void 0&&(u=[],oo.set(o,u)),u.push({onLoad:t,onError:s})}return o}let a=co("img");function l(){h(),t&&t(this);let u=oo.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}oo.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Hi.remove(`image:${e}`);let d=oo.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(u)}oo.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),Hi.add(`image:${e}`,a),r.manager.itemStart(e),a.src=e,a}},La=class extends Ri{constructor(e){super(e)}load(e,t,n,s){let r=this,o=new hr,a=new pr(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{h(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:On,o.wrapT=c.wrapT!==void 0?c.wrapT:On,o.magFilter=c.magFilter!==void 0?c.magFilter:Lt,o.minFilter=c.minFilter!==void 0?c.minFilter:Lt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=pi),c.mipmapCount===1&&(o.minFilter=Lt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}},Da=class extends Ri{constructor(e){super(e)}load(e,t,n,s){let r=new on,o=new Lc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},mr=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},gd=new tt,dg=new B,fg=new B,Na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Xe(512,512),this.mapType=Hn,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yo,this._frameExtents=new Xe(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;dg.setFromMatrixPosition(e.matrixWorld),t.position.copy(dg),fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(fg),t.updateMatrixWorld(),gd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},bd=class extends Na{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=cr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},gr=class extends mr{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},Md=class extends Na{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Ua=class extends mr{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Md}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Yi=class extends xa{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Td=class extends Na{constructor(){super(new Yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fa=class extends mr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new Td}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Oa=class extends mr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}},_s=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}},_d=new WeakMap,Ba=class extends Ri{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Pe("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Pe("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hi.get(`image-bitmap:${e}`);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{if(_d.has(o)===!0)s&&s(_d.get(o)),r.manager.itemError(e),r.manager.itemEnd(e);else return t&&t(c),r.manager.itemEnd(e),c});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,a.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return Hi.add(`image-bitmap:${e}`,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),_d.set(l,c),Hi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Hi.add(`image-bitmap:${e}`,l),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Dc=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ka=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}},Nc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,s=this.valueSize,r=e*s+s,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){rn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){let o=this._workIndex*r;rn.multiplyQuaternionsFlat(e,o,e,t,e,n),rn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){let o=1-s;for(let a=0;a!==r;++a){let l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*s}}},Kd="\\[\\]\\.:\\/",My=new RegExp("["+Kd+"]","g"),Jd="[^"+Kd+"]",Ty="[^"+Kd.replace("\\.","")+"]",Ey=/((?:WC+[\/:])*)/.source.replace("WC",Jd),wy=/(WCOD+)?/.source.replace("WCOD",Ty),Ay=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jd),Ry=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jd),Cy=new RegExp("^"+Ey+wy+Ay+Ry+"$"),Iy=["material","materials","bones","map"],Ed=class{constructor(e,t,n){let s=n||At.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},At=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(My,"")}static parseTrackName(e){let t=Cy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Iy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Pe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[s];if(o===void 0){let c=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};At.Composite=Ed;At.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};At.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};At.prototype.GetterByBindingType=[At.prototype._getValue_direct,At.prototype._getValue_array,At.prototype._getValue_arrayElement,At.prototype._getValue_toArray];At.prototype.SetterByBindingTypeAndVersioning=[[At.prototype._setValue_direct,At.prototype._setValue_direct_setNeedsUpdate,At.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[At.prototype._setValue_array,At.prototype._setValue_array_setNeedsUpdate,At.prototype._setValue_array_setMatrixWorldNeedsUpdate],[At.prototype._setValue_arrayElement,At.prototype._setValue_arrayElement_setNeedsUpdate,At.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[At.prototype._setValue_fromArray,At.prototype._setValue_fromArray_setNeedsUpdate,At.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Uc=class{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;let r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ir,endingEnd:ir};for(let c=0;c!==o;++c){let h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Og,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n=!1){if(e.fadeOut(t),this.fadeIn(t),n===!0){let s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n=!1){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let s=this._mixer,r=s.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);let l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case kg:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case Lh:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,s=this.time+e,r=this._loopCount,o=n===Bg;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===Ph){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){let a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);let l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){let c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){let s=this._interpolantSettings;n?(s.endingStart=sr,s.endingEnd=sr):(e?s.endingStart=this.zeroSlopeAtStart?sr:ir:s.endingStart=ha,t?s.endingEnd=this.zeroSlopeAtEnd?sr:ir:s.endingEnd=ha)}_scheduleFading(e,t,n){let s=this._mixer,r=s.time,o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}},Py=new Float32Array(1),za=class extends Ei{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName,h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){let d=s[u],f=d.name,m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}let _=t&&t._propertyBindings[u].binding.parsedPath;m=new Nc(At.create(n,f,_),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let s=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;let u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let s=this._bindingsByRootAndName,r=this._bindings,o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ia(new Float32Array(2),new Float32Array(2),1,Py),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let s=t||this._root,r=s.uuid,o=typeof e=="string"?fr.findByName(s,e):e,a=o!==null?o.uuid:e,l=this._actionsByClip[a],c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Lh),l!==void 0){let u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;let h=new Uc(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){let n=t||this._root,s=n.uuid,r=typeof e=="string"?fr.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);let a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){let o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){let c=o[a];this._deactivateAction(c);let h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}let s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}},bo=class{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=it(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(it(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}},Va=class extends Ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Pe("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182")});function b0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Ny(i){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}function mb(i,e,t,n,s,r,o){let a=new $e(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(S){let b=S.isScene===!0?S.background:null;return b&&b.isTexture&&(b=(S.backgroundBlurriness>0?t:e).get(b)),b}function _(S){let b=!1,E=m(S);E===null?p(a,l):E&&E.isColor&&(p(E,1),b=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,b){let E=m(b);E&&(E.isCubeTexture||E.mapping===Wa)?(h===void 0&&(h=new fn(new po(1,1,1),new ei({name:"BackgroundCubeMaterial",uniforms:Sr(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,R,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),br.copy(b.backgroundRotation),br.x*=-1,br.y*=-1,br.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(pb.makeRotationFromEuler(br)),h.material.toneMapped=lt.getTransfer(E.colorSpace)!==pt,(u!==E||d!==E.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new fn(new Ca(2,2),new ei({name:"BackgroundMaterial",uniforms:Sr(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=lt.getTransfer(E.colorSpace)!==pt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||d!==E.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=E,d=E.version,f=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function p(S,b){S.getRGB(Uh,Zd(i)),n.buffers.color.setClear(Uh.r,Uh.g,Uh.b,b,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,b=1){a.set(S),l=b,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,p(a,l)},render:_,addToRenderList:g,dispose:y}}function gb(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,o=!1;function a(M,C,D,N,P){let z=!1,F=u(N,D,C);r!==F&&(r=F,c(r.object)),z=f(M,N,D,P),z&&m(M,N,D,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(z||o)&&(o=!1,b(M,C,D,N),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,D){let N=D.wireframe===!0,P=n[M.id];P===void 0&&(P={},n[M.id]=P);let z=P[C.id];z===void 0&&(z={},P[C.id]=z);let F=z[N];return F===void 0&&(F=d(l()),z[N]=F),F}function d(M){let C=[],D=[],N=[];for(let P=0;P<t;P++)C[P]=0,D[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:D,attributeDivisors:N,object:M,attributes:{},index:null}}function f(M,C,D,N){let P=r.attributes,z=C.attributes,F=0,V=D.getAttributes();for(let W in V)if(V[W].location>=0){let Z=P[W],te=z[W];if(te===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(te=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(te=M.instanceColor)),Z===void 0||Z.attribute!==te||te&&Z.data!==te.data)return!0;F++}return r.attributesNum!==F||r.index!==N}function m(M,C,D,N){let P={},z=C.attributes,F=0,V=D.getAttributes();for(let W in V)if(V[W].location>=0){let Z=z[W];Z===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(Z=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(Z=M.instanceColor));let te={};te.attribute=Z,Z&&Z.data&&(te.data=Z.data),P[W]=te,F++}r.attributes=P,r.attributesNum=F,r.index=N}function _(){let M=r.newAttributes;for(let C=0,D=M.length;C<D;C++)M[C]=0}function g(M){p(M,0)}function p(M,C){let D=r.newAttributes,N=r.enabledAttributes,P=r.attributeDivisors;D[M]=1,N[M]===0&&(i.enableVertexAttribArray(M),N[M]=1),P[M]!==C&&(i.vertexAttribDivisor(M,C),P[M]=C)}function y(){let M=r.newAttributes,C=r.enabledAttributes;for(let D=0,N=C.length;D<N;D++)C[D]!==M[D]&&(i.disableVertexAttribArray(D),C[D]=0)}function S(M,C,D,N,P,z,F){F===!0?i.vertexAttribIPointer(M,C,D,P,z):i.vertexAttribPointer(M,C,D,N,P,z)}function b(M,C,D,N){_();let P=N.attributes,z=D.getAttributes(),F=C.defaultAttributeValues;for(let V in z){let W=z[V];if(W.location>=0){let H=P[V];if(H===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(H=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(H=M.instanceColor)),H!==void 0){let Z=H.normalized,te=H.itemSize,ge=e.get(H);if(ge===void 0)continue;let _e=ge.buffer,He=ge.type,qe=ge.bytesPerElement,q=He===i.INT||He===i.UNSIGNED_INT||H.gpuType===qc;if(H.isInterleavedBufferAttribute){let J=H.data,he=J.stride,Ue=H.offset;if(J.isInstancedInterleavedBuffer){for(let ye=0;ye<W.locationSize;ye++)p(W.location+ye,J.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ye=0;ye<W.locationSize;ye++)g(W.location+ye);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let ye=0;ye<W.locationSize;ye++)S(W.location+ye,te/W.locationSize,He,Z,he*qe,(Ue+te/W.locationSize*ye)*qe,q)}else{if(H.isInstancedBufferAttribute){for(let J=0;J<W.locationSize;J++)p(W.location+J,H.meshPerAttribute);M.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let J=0;J<W.locationSize;J++)g(W.location+J);i.bindBuffer(i.ARRAY_BUFFER,_e);for(let J=0;J<W.locationSize;J++)S(W.location+J,te/W.locationSize,He,Z,te*qe,te/W.locationSize*J*qe,q)}}else if(F!==void 0){let Z=F[V];if(Z!==void 0)switch(Z.length){case 2:i.vertexAttrib2fv(W.location,Z);break;case 3:i.vertexAttrib3fv(W.location,Z);break;case 4:i.vertexAttrib4fv(W.location,Z);break;default:i.vertexAttrib1fv(W.location,Z)}}}}y()}function E(){I();for(let M in n){let C=n[M];for(let D in C){let N=C[D];for(let P in N)h(N[P].object),delete N[P];delete C[D]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;let C=n[M.id];for(let D in C){let N=C[D];for(let P in N)h(N[P].object),delete N[P];delete C[D]}delete n[M.id]}function R(M){for(let C in n){let D=n[C];if(D[M.id]===void 0)continue;let N=D[M.id];for(let P in N)h(N[P].object),delete N[P];delete D[M.id]}}function I(){v(),o=!0,r!==s&&(r=s,c(r.object))}function v(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:v,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:y}}function _b(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];t.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xb(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ti&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let I=R===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Hn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==pn&&!I)}function l(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Pe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),E=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:b,maxSamples:E,samples:A}}function yb(i){let e=this,t=null,n=0,s=!1,r=!1,o=new di,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{let y=r?0:n,S=y*4,b=p.clippingState||null;l.value=b,b=h(m,d,S,f);for(let E=0;E!==S;++E)b[E]=t[E];p.clippingState=b,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){let _=u!==null?u.length:0,g=null;if(_!==0){if(g=l.value,m!==!0||g===null){let p=f+_*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,b=f;S!==_;++S,b+=4)o.copy(u[S]).applyMatrix4(y,a),o.normal.toArray(g,b),g[b+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}function vb(i){let e=new WeakMap;function t(o,a){return a===xr?o.mapping=Bs:a===Wc&&(o.mapping=_r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===xr||a===Wc)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new va(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}function Mb(i){let e=[],t=[],n=[],s=i,r=i-zs+1+e0.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let l=1/a;o>i-zs?l=e0[o-i+zs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,y=new Float32Array(_*m*f),S=new Float32Array(g*m*f),b=new Float32Array(p*m*f);for(let A=0;A<f;A++){let R=A%3*2/3-1,I=A>2?0:-1,v=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];y.set(v,_*m*A),S.set(d,g*m*A);let M=[A,A,A,A,A,A];b.set(M,p*m*A)}let E=new An;E.setAttribute("position",new Yt(y,_)),E.setAttribute("uv",new Yt(S,g)),E.setAttribute("faceIndex",new Yt(b,p)),n.push(new fn(E,null)),s>zs&&s--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function n0(i,e,t){let n=new jn(i,e,t);return n.texture.mapping=Wa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Tb(i,e,t){return new ei({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Sb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Eb(i,e,t){let n=new Float32Array(Tr),s=new B(0,1,0);return new ei({name:"SphericalGaussianBlur",defines:{n:Tr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function i0(){return new ei({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bh(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function s0(){return new ei({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Bh(){return`

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
	`}function wb(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===xr||l===Wc,h=l===Bs||l===_r;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Io(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new Io(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){let l=a.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Ab(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&uo("WebGLRenderer: "+n+" extension not supported."),s}}}function Rb(i,e,t,n){let s={},r=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],i.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,_=0;if(f!==null){let y=f.array;_=f.version;for(let S=0,b=y.length;S<b;S+=3){let E=y[S+0],A=y[S+1],R=y[S+2];d.push(E,A,A,R,R,E)}}else if(m!==void 0){let y=m.array;_=m.version;for(let S=0,b=y.length/3-1;S<b;S+=3){let E=S+0,A=S+1,R=S+2;d.push(E,A,A,R,R,E)}}else return;let g=new(Yd(d)?_a:ga)(d,1);g.version=_;let p=r.get(u);p&&e.remove(p),r.set(u,g)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Cb(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){i.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),t.update(f,n,m))}function h(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];t.update(g,n,1)}function u(d,f,m,_){if(m===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let y=0;y<m;y++)p+=f[y]*_[y];t.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Ib(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:Ve("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pb(i,e,t){let n=new WeakMap,s=new Ut;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],S=0;f===!0&&(S=1),m===!0&&(S=2),_===!0&&(S=3);let b=a.attributes.position.count*S,E=1;b>e.maxTextureSize&&(E=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let A=new Float32Array(b*E*4*u),R=new pa(A,b,E,u);R.type=pn,R.needsUpdate=!0;let I=S*4;for(let M=0;M<u;M++){let C=g[M],D=p[M],N=y[M],P=b*E*4*M;for(let z=0;z<C.count;z++){let F=z*I;f===!0&&(s.fromBufferAttribute(C,z),A[P+F+0]=s.x,A[P+F+1]=s.y,A[P+F+2]=s.z,A[P+F+3]=0),m===!0&&(s.fromBufferAttribute(D,z),A[P+F+4]=s.x,A[P+F+5]=s.y,A[P+F+6]=s.z,A[P+F+7]=0),_===!0&&(s.fromBufferAttribute(N,z),A[P+F+8]=s.x,A[P+F+9]=s.y,A[P+F+10]=s.z,A[P+F+11]=N.itemSize===4?s.w:1)}}d={count:u,texture:R,size:new Xe(b,E)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Lb(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}function Nb(i,e,t,n,s){let r=new jn(e,t,{type:i,depthBuffer:n,stencilBuffer:s}),o=new jn(e,t,{type:Cn,depthBuffer:!1,stencilBuffer:!1}),a=new An;a.setAttribute("position",new wn([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new wn([0,2,0,0,2,0],2));let l=new Ec({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new fn(a,l),h=new Yi(-1,1,1,-1,0,1),u=null,d=null,f=!1,m,_=null,g=[],p=!1;this.setSize=function(y,S){r.setSize(y,S),o.setSize(y,S);for(let b=0;b<g.length;b++){let E=g[b];E.setSize&&E.setSize(y,S)}},this.setEffects=function(y){g=y,p=g.length>0&&g[0].isRenderPass===!0;let S=r.width,b=r.height;for(let E=0;E<g.length;E++){let A=g[E];A.setSize&&A.setSize(S,b)}},this.begin=function(y,S){if(f||y.toneMapping===Ci&&g.length===0)return!1;if(_=S,S!==null){let b=S.width,E=S.height;(r.width!==b||r.height!==E)&&this.setSize(b,E)}return p===!1&&y.setRenderTarget(r),m=y.toneMapping,y.toneMapping=Ci,!0},this.hasRenderPass=function(){return p},this.end=function(y,S){y.toneMapping=m,f=!0;let b=r,E=o;for(let A=0;A<g.length;A++){let R=g[A];if(R.enabled!==!1&&(R.render(y,E,b,S),R.needsSwap!==!1)){let I=b;b=E,E=I}}if(u!==y.outputColorSpace||d!==y.toneMapping){u=y.outputColorSpace,d=y.toneMapping,l.defines={},lt.getTransfer(u)===pt&&(l.defines.SRGB_TRANSFER="");let A=Db[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=b.texture,y.setRenderTarget(_),y.render(c,h),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){r.dispose(),o.dispose(),a.dispose(),l.dispose()}}function Po(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=r0[s];if(r===void 0&&(r=new Float32Array(s),r0[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Jt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function jt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function kh(i,e){let t=o0[e];t===void 0&&(t=new Int32Array(e),o0[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Ub(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Fb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2fv(this.addr,e),jt(t,e)}}function Ob(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Jt(t,e))return;i.uniform3fv(this.addr,e),jt(t,e)}}function Bb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4fv(this.addr,e),jt(t,e)}}function kb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,n))return;c0.set(n),i.uniformMatrix2fv(this.addr,!1,c0),jt(t,n)}}function zb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,n))return;l0.set(n),i.uniformMatrix3fv(this.addr,!1,l0),jt(t,n)}}function Vb(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Jt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Jt(t,n))return;a0.set(n),i.uniformMatrix4fv(this.addr,!1,a0),jt(t,n)}}function Hb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2iv(this.addr,e),jt(t,e)}}function Wb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3iv(this.addr,e),jt(t,e)}}function Xb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4iv(this.addr,e),jt(t,e)}}function qb(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Yb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Jt(t,e))return;i.uniform2uiv(this.addr,e),jt(t,e)}}function $b(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Jt(t,e))return;i.uniform3uiv(this.addr,e),jt(t,e)}}function Zb(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Jt(t,e))return;i.uniform4uiv(this.addr,e),jt(t,e)}}function Kb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(af.compareFunction=t.isReversedDepthBuffer()?Nh:Dh,r=af):r=M0,t.setTexture2D(e||r,s)}function Jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||E0,s)}function jb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||w0,s)}function Qb(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||T0,s)}function eM(i){switch(i){case 5126:return Ub;case 35664:return Fb;case 35665:return Ob;case 35666:return Bb;case 35674:return kb;case 35675:return zb;case 35676:return Vb;case 5124:case 35670:return Hb;case 35667:case 35671:return Gb;case 35668:case 35672:return Wb;case 35669:case 35673:return Xb;case 5125:return qb;case 36294:return Yb;case 36295:return $b;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Kb;case 35679:case 36299:case 36307:return Jb;case 35680:case 36300:case 36308:case 36293:return jb;case 36289:case 36303:case 36311:case 36292:return Qb}}function tM(i,e){i.uniform1fv(this.addr,e)}function nM(i,e){let t=Po(e,this.size,2);i.uniform2fv(this.addr,t)}function iM(i,e){let t=Po(e,this.size,3);i.uniform3fv(this.addr,t)}function sM(i,e){let t=Po(e,this.size,4);i.uniform4fv(this.addr,t)}function rM(i,e){let t=Po(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function oM(i,e){let t=Po(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function aM(i,e){let t=Po(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lM(i,e){i.uniform1iv(this.addr,e)}function cM(i,e){i.uniform2iv(this.addr,e)}function hM(i,e){i.uniform3iv(this.addr,e)}function uM(i,e){i.uniform4iv(this.addr,e)}function dM(i,e){i.uniform1uiv(this.addr,e)}function fM(i,e){i.uniform2uiv(this.addr,e)}function pM(i,e){i.uniform3uiv(this.addr,e)}function mM(i,e){i.uniform4uiv(this.addr,e)}function gM(i,e,t){let n=this.cache,s=e.length,r=kh(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=af:o=M0;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function _M(i,e,t){let n=this.cache,s=e.length,r=kh(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||E0,r[o])}function xM(i,e,t){let n=this.cache,s=e.length,r=kh(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||w0,r[o])}function yM(i,e,t){let n=this.cache,s=e.length,r=kh(t,s);Jt(n,r)||(i.uniform1iv(this.addr,r),jt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||T0,r[o])}function vM(i){switch(i){case 5126:return tM;case 35664:return nM;case 35665:return iM;case 35666:return sM;case 35674:return rM;case 35675:return oM;case 35676:return aM;case 5124:case 35670:return lM;case 35667:case 35671:return cM;case 35668:case 35672:return hM;case 35669:case 35673:return uM;case 5125:return dM;case 36294:return fM;case 36295:return pM;case 36296:return mM;case 35678:case 36198:case 36298:case 36306:case 35682:return gM;case 35679:case 36299:case 36307:return _M;case 35680:case 36300:case 36308:case 36293:return xM;case 36289:case 36303:case 36311:case 36292:return yM}}function h0(i,e){i.seq.push(e),i.map[e.id]=e}function SM(i,e,t){let n=i.name,s=n.length;for(rf.lastIndex=0;;){let r=rf.exec(n),o=rf.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){h0(t,c===void 0?new lf(a,i,e):new cf(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new hf(a),h0(t,u)),t=u}}}function u0(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function TM(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function EM(i){lt._getMatrix(d0,lt.workingColorSpace,i);let e=`mat3( ${d0.elements.map(t=>t.toFixed(4))} )`;switch(lt.getTransfer(i)){case ua:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function f0(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+TM(i.getShaderSource(e),a)}else return r}function wM(i,e){let t=EM(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function RM(i,e){let t=AM[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function CM(){lt.getLuminanceCoefficients(Fh);let i=Fh.x.toFixed(4),e=Fh.y.toFixed(4),t=Fh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function IM(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qa).join(`
`)}function PM(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function LM(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Qa(i){return i!==""}function p0(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function m0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function uf(i){return i.replace(DM,UM)}function UM(i,e){let t=st[e];if(t===void 0){let n=NM.get(e);if(n!==void 0)t=st[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return uf(t)}function g0(i){return i.replace(FM,OM)}function OM(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function kM(i){return BM[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function VM(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":zM[i.envMapMode]||"ENVMAP_TYPE_CUBE"}function GM(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":HM[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function XM(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":WM[i.combine]||"ENVMAP_BLENDING_NONE"}function qM(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function YM(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,l=kM(t),c=VM(t),h=GM(t),u=XM(t),d=qM(t),f=IM(t),m=PM(r),_=s.createProgram(),g,p,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qa).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Qa).join(`
`),p.length>0&&(p+=`
`)):(g=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qa).join(`
`),p=[_0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ci?"#define TONE_MAPPING":"",t.toneMapping!==Ci?st.tonemapping_pars_fragment:"",t.toneMapping!==Ci?RM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.colorspace_pars_fragment,wM("linearToOutputTexel",t.outputColorSpace),CM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qa).join(`
`)),o=uf(o),o=p0(o,t),o=m0(o,t),a=uf(a),a=p0(a,t),a=m0(a,t),o=g0(o),a=g0(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=y+g+o,b=y+p+a,E=u0(s,s.VERTEX_SHADER,S),A=u0(s,s.FRAGMENT_SHADER,b);s.attachShader(_,E),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(_)||"",N=s.getShaderInfoLog(E)||"",P=s.getShaderInfoLog(A)||"",z=D.trim(),F=N.trim(),V=P.trim(),W=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,E,A);else{let Z=f0(s,E,"vertex"),te=f0(s,A,"fragment");Ve("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+Z+`
`+te)}else z!==""?Pe("WebGLProgram: Program Info Log:",z):(F===""||V==="")&&(H=!1);H&&(C.diagnostics={runnable:W,programLog:z,vertexShader:{log:F,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(E),s.deleteShader(A),I=new Co(s,_),v=LM(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let v;this.getAttributes=function(){return v===void 0&&R(this),v};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,bM)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=MM++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=E,this.fragmentShader=A,this}function ZM(i,e,t,n,s,r,o){let a=new ma,l=new df,c=new Set,h=[],u=new Map,d=s.logarithmicDepthBuffer,f=s.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function g(v,M,C,D,N){let P=D.fog,z=N.geometry,F=v.isMeshStandardMaterial?D.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||F),W=V&&V.mapping===Wa?V.image.height:null,H=m[v.type];v.precision!==null&&(f=s.getMaxPrecision(v.precision),f!==v.precision&&Pe("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));let Z=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,te=Z!==void 0?Z.length:0,ge=0;z.morphAttributes.position!==void 0&&(ge=1),z.morphAttributes.normal!==void 0&&(ge=2),z.morphAttributes.color!==void 0&&(ge=3);let _e,He,qe,q;if(H){let gt=Ki[H];_e=gt.vertexShader,He=gt.fragmentShader}else _e=v.vertexShader,He=v.fragmentShader,l.update(v),qe=l.getVertexShaderID(v),q=l.getFragmentShaderID(v);let J=i.getRenderTarget(),he=i.state.buffers.depth.getReversed(),Ue=N.isInstancedMesh===!0,ye=N.isBatchedMesh===!0,Ye=!!v.map,ut=!!v.matcap,De=!!V,Je=!!v.aoMap,rt=!!v.lightMap,Fe=!!v.bumpMap,dt=!!v.normalMap,L=!!v.displacementMap,mt=!!v.emissiveMap,Ze=!!v.metalnessMap,ht=!!v.roughnessMap,oe=v.anisotropy>0,w=v.clearcoat>0,x=v.dispersion>0,O=v.iridescence>0,K=v.sheen>0,j=v.transmission>0,$=oe&&!!v.anisotropyMap,Ie=w&&!!v.clearcoatMap,ae=w&&!!v.clearcoatNormalMap,Ee=w&&!!v.clearcoatRoughnessMap,Oe=O&&!!v.iridescenceMap,re=O&&!!v.iridescenceThicknessMap,ce=K&&!!v.sheenColorMap,Me=K&&!!v.sheenRoughnessMap,ve=!!v.specularMap,le=!!v.specularColorMap,je=!!v.specularIntensityMap,U=j&&!!v.transmissionMap,ne=j&&!!v.thicknessMap,ee=!!v.gradientMap,be=!!v.alphaMap,se=v.alphaTest>0,Q=!!v.alphaHash,de=!!v.extensions,Ke=Ci;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ke=i.toneMapping);let Dt={shaderID:H,shaderType:v.type,shaderName:v.name,vertexShader:_e,fragmentShader:He,defines:v.defines,customVertexShaderID:qe,customFragmentShaderID:q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:ye,batchingColor:ye&&N._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&N.instanceColor!==null,instancingMorph:Ue&&N.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Kt,alphaToCoverage:!!v.alphaToCoverage,map:Ye,matcap:ut,envMap:De,envMapMode:De&&V.mapping,envMapCubeUVHeight:W,aoMap:Je,lightMap:rt,bumpMap:Fe,normalMap:dt,displacementMap:L,emissiveMap:mt,normalMapObjectSpace:dt&&v.normalMapType===Vg,normalMapTangentSpace:dt&&v.normalMapType===Xd,metalnessMap:Ze,roughnessMap:ht,anisotropy:oe,anisotropyMap:$,clearcoat:w,clearcoatMap:Ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:x,iridescence:O,iridescenceMap:Oe,iridescenceThicknessMap:re,sheen:K,sheenColorMap:ce,sheenRoughnessMap:Me,specularMap:ve,specularColorMap:le,specularIntensityMap:je,transmission:j,transmissionMap:U,thicknessMap:ne,gradientMap:ee,opaque:v.transparent===!1&&v.blending===rr&&v.alphaToCoverage===!1,alphaMap:be,alphaTest:se,alphaHash:Q,combine:v.combine,mapUv:Ye&&_(v.map.channel),aoMapUv:Je&&_(v.aoMap.channel),lightMapUv:rt&&_(v.lightMap.channel),bumpMapUv:Fe&&_(v.bumpMap.channel),normalMapUv:dt&&_(v.normalMap.channel),displacementMapUv:L&&_(v.displacementMap.channel),emissiveMapUv:mt&&_(v.emissiveMap.channel),metalnessMapUv:Ze&&_(v.metalnessMap.channel),roughnessMapUv:ht&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:Ie&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:ae&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:Me&&_(v.sheenRoughnessMap.channel),specularMapUv:ve&&_(v.specularMap.channel),specularColorMapUv:le&&_(v.specularColorMap.channel),specularIntensityMapUv:je&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:ne&&_(v.thicknessMap.channel),alphaMapUv:be&&_(v.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(dt||oe),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!z.attributes.uv&&(Ye||be),fog:!!P,useFog:v.fog===!0,fogExp2:!!P&&P.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:N.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ge,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ke,decodeVideoTexture:Ye&&v.map.isVideoTexture===!0&&lt.getTransfer(v.map.colorSpace)===pt,decodeVideoTextureEmissive:mt&&v.emissiveMap.isVideoTexture===!0&&lt.getTransfer(v.emissiveMap.colorSpace)===pt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===fi,flipSided:v.side===Rn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:de&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(de&&v.extensions.multiDraw===!0||ye)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(v){let M=[];if(v.shaderID?M.push(v.shaderID):(M.push(v.customVertexShaderID),M.push(v.customFragmentShaderID)),v.defines!==void 0)for(let C in v.defines)M.push(C),M.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(y(M,v),S(M,v),M.push(i.outputColorSpace)),M.push(v.customProgramCacheKey),M.join()}function y(v,M){v.push(M.precision),v.push(M.outputColorSpace),v.push(M.envMapMode),v.push(M.envMapCubeUVHeight),v.push(M.mapUv),v.push(M.alphaMapUv),v.push(M.lightMapUv),v.push(M.aoMapUv),v.push(M.bumpMapUv),v.push(M.normalMapUv),v.push(M.displacementMapUv),v.push(M.emissiveMapUv),v.push(M.metalnessMapUv),v.push(M.roughnessMapUv),v.push(M.anisotropyMapUv),v.push(M.clearcoatMapUv),v.push(M.clearcoatNormalMapUv),v.push(M.clearcoatRoughnessMapUv),v.push(M.iridescenceMapUv),v.push(M.iridescenceThicknessMapUv),v.push(M.sheenColorMapUv),v.push(M.sheenRoughnessMapUv),v.push(M.specularMapUv),v.push(M.specularColorMapUv),v.push(M.specularIntensityMapUv),v.push(M.transmissionMapUv),v.push(M.thicknessMapUv),v.push(M.combine),v.push(M.fogExp2),v.push(M.sizeAttenuation),v.push(M.morphTargetsCount),v.push(M.morphAttributeCount),v.push(M.numDirLights),v.push(M.numPointLights),v.push(M.numSpotLights),v.push(M.numSpotLightMaps),v.push(M.numHemiLights),v.push(M.numRectAreaLights),v.push(M.numDirLightShadows),v.push(M.numPointLightShadows),v.push(M.numSpotLightShadows),v.push(M.numSpotLightShadowsWithMaps),v.push(M.numLightProbes),v.push(M.shadowMapType),v.push(M.toneMapping),v.push(M.numClippingPlanes),v.push(M.numClipIntersection),v.push(M.depthPacking)}function S(v,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),v.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),v.push(a.mask)}function b(v){let M=m[v.type],C;if(M){let D=Ki[M];C=Jg.clone(D.uniforms)}else C=v.uniforms;return C}function E(v,M){let C=u.get(M);return C!==void 0?++C.usedTimes:(C=new YM(i,M,v,r),h.push(C),u.set(M,C)),C}function A(v){if(--v.usedTimes===0){let M=h.indexOf(v);h[M]=h[h.length-1],h.pop(),u.delete(v.cacheKey),v.destroy()}}function R(v){l.remove(v)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:b,acquireProgram:E,releaseProgram:A,releaseShaderCache:R,programs:h,dispose:I}}function KM(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function JM(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function x0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function y0(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,g){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),e++,p}function a(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,_,g){let p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||JM),n.length>1&&n.sort(d||x0),s.length>1&&s.sort(d||x0)}function h(){for(let u=e,d=i.length;u<d;u++){let f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function jM(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new y0,i.set(n,[o])):s>=r.length?(o=new y0,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function QM(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new $e};break;case"SpotLight":t={position:new B,direction:new B,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new B,halfWidth:new B,halfHeight:new B};break}return i[e.id]=t,t}}}function eT(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function nT(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function iT(i){let e=new QM,t=eT(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let s=new B,r=new tt,o=new tt;function a(c){let h=0,u=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,y=0,S=0,b=0,E=0,A=0,R=0;c.sort(nT);for(let v=0,M=c.length;v<M;v++){let C=c[v],D=C.color,N=C.intensity,P=C.distance,z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===vr?z=C.shadow.map.texture:z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)h+=D.r*N,u+=D.g*N,d+=D.b*N;else if(C.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(C.sh.coefficients[F],N);R++}else if(C.isDirectionalLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let V=C.shadow,W=t.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.directionalShadow[f]=W,n.directionalShadowMap[f]=z,n.directionalShadowMatrix[f]=C.shadow.matrix,y++}n.directional[f]=F,f++}else if(C.isSpotLight){let F=e.get(C);F.position.setFromMatrixPosition(C.matrixWorld),F.color.copy(D).multiplyScalar(N),F.distance=P,F.coneCos=Math.cos(C.angle),F.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),F.decay=C.decay,n.spot[_]=F;let V=C.shadow;if(C.map&&(n.spotLightMap[E]=C.map,E++,V.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=V.matrix,C.castShadow){let W=t.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=z,b++}_++}else if(C.isRectAreaLight){let F=e.get(C);F.color.copy(D).multiplyScalar(N),F.halfWidth.set(C.width*.5,0,0),F.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=F,g++}else if(C.isPointLight){let F=e.get(C);if(F.color.copy(C.color).multiplyScalar(C.intensity),F.distance=C.distance,F.decay=C.decay,C.castShadow){let V=C.shadow,W=t.get(C);W.shadowIntensity=V.intensity,W.shadowBias=V.bias,W.shadowNormalBias=V.normalBias,W.shadowRadius=V.radius,W.shadowMapSize=V.mapSize,W.shadowCameraNear=V.camera.near,W.shadowCameraFar=V.camera.far,n.pointShadow[m]=W,n.pointShadowMap[m]=z,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=F,m++}else if(C.isHemisphereLight){let F=e.get(C);F.skyColor.copy(C.color).multiplyScalar(N),F.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=F,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==y||I.numPointShadows!==S||I.numSpotShadows!==b||I.numSpotMaps!==E||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=b+E-A,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=y,I.numPointShadows=S,I.numSpotShadows=b,I.numSpotMaps=E,I.numLightProbes=R,n.version=tT++)}function l(c,h){let u=0,d=0,f=0,m=0,_=0,g=h.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let S=c[p];if(S.isDirectionalLight){let b=n.directional[u];b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),u++}else if(S.isSpotLight){let b=n.spot[f];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),b.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(g),f++}else if(S.isRectAreaLight){let b=n.rectArea[m];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),b.halfWidth.set(S.width*.5,0,0),b.halfHeight.set(0,S.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){let b=n.point[d];b.position.setFromMatrixPosition(S.matrixWorld),b.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){let b=n.hemi[_];b.direction.setFromMatrixPosition(S.matrixWorld),b.direction.transformDirection(g),_++}}}return{setup:a,setupView:l,state:n}}function v0(i){let e=new iT(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function sT(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new v0(i),e.set(s,[a])):r>=o.length?(a=new v0(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}function cT(i,e,t){let n=new yo,s=new Xe,r=new Xe,o=new Ut,a=new wc,l=new Ac,c={},h=t.maxTextureSize,u={[Jn]:Rn,[Rn]:Jn,[fi]:fi},d=new ei({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xe},radius:{value:4}},vertexShader:rT,fragmentShader:oT}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new An;m.setAttribute("position",new Yt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fn(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ha;let p=this.type;this.render=function(A,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||A.length===0)return;A.type===Fc&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Ha);let v=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),D=i.state;D.setBlending($i),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let N=p!==this.type;N&&R.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(z=>z.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,z=A.length;P<z;P++){let F=A[P],V=F.shadow;if(V===void 0){Pe("WebGLShadowMap:",F,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let W=V.getFrameExtents();if(s.multiply(W),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,V.mapSize.y=r.y)),V.map===null||N===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Mo){if(F.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new jn(s.x,s.y,{format:vr,type:Cn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),V.map.texture.name=F.name+".shadowMap",V.map.depthTexture=new Us(s.x,s.y,pn),V.map.depthTexture.name=F.name+".shadowMapDepth",V.map.depthTexture.format=Gi,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt}else{F.isPointLight?(V.map=new va(s.x),V.map.depthTexture=new Tc(s.x,Ii)):(V.map=new jn(s.x,s.y),V.map.depthTexture=new Us(s.x,s.y,Ii)),V.map.depthTexture.name=F.name+".shadowMap",V.map.depthTexture.format=Gi;let Z=i.state.buffers.depth.getReversed();this.type===Ha?(V.map.depthTexture.compareFunction=Z?Nh:Dh,V.map.depthTexture.minFilter=Lt,V.map.depthTexture.magFilter=Lt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=Gt,V.map.depthTexture.magFilter=Gt)}V.camera.updateProjectionMatrix()}let H=V.map.isWebGLCubeRenderTarget?6:1;for(let Z=0;Z<H;Z++){if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Z),i.clear();else{Z===0&&(i.setRenderTarget(V.map),i.clear());let te=V.getViewport(Z);o.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),D.viewport(o)}if(F.isPointLight){let te=V.camera,ge=V.matrix,_e=F.distance||te.far;_e!==te.far&&(te.far=_e,te.updateProjectionMatrix()),ja.setFromMatrixPosition(F.matrixWorld),te.position.copy(ja),of.copy(te.position),of.add(aT[Z]),te.up.copy(lT[Z]),te.lookAt(of),te.updateMatrixWorld(),ge.makeTranslation(-ja.x,-ja.y,-ja.z),S0.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),V._frustum.setFromProjectionMatrix(S0,te.coordinateSystem,te.reversedDepth)}else V.updateMatrices(F);n=V.getFrustum(),b(R,I,V.camera,F,this.type)}V.isPointLightShadow!==!0&&this.type===Mo&&y(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(v,M,C)};function y(A,R){let I=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,f.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new jn(s.x,s.y,{format:vr,type:Cn})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=A.mapPass.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function S(A,R,I,v){let M=null,C=I.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?l:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){let D=M.uuid,N=R.uuid,P=c[D];P===void 0&&(P={},c[D]=P);let z=P[N];z===void 0&&(z=M.clone(),P[N]=z,R.addEventListener("dispose",E)),M=z}if(M.visible=R.visible,M.wireframe=R.wireframe,v===Mo?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){let D=i.properties.get(M);D.light=I}return M}function b(A,R,I,v,M){if(A.visible===!1)return;if(A.layers.test(R.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Mo)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,A.matrixWorld);let N=e.update(A),P=A.material;if(Array.isArray(P)){let z=N.groups;for(let F=0,V=z.length;F<V;F++){let W=z[F],H=P[W.materialIndex];if(H&&H.visible){let Z=S(A,H,v,M);A.onBeforeShadow(i,A,R,I,N,Z,W),i.renderBufferDirect(I,null,N,Z,A,W),A.onAfterShadow(i,A,R,I,N,Z,W)}}}else if(P.visible){let z=S(A,P,v,M);A.onBeforeShadow(i,A,R,I,N,z,null),i.renderBufferDirect(I,null,N,z,A,null),A.onAfterShadow(i,A,R,I,N,z,null)}}let D=A.children;for(let N=0,P=D.length;N<P;N++)b(D[N],R,I,v,M)}function E(A){A.target.removeEventListener("dispose",E);for(let I in c){let v=c[I],M=A.target.uuid;M in v&&(v[M].dispose(),delete v[M])}}}function uT(i,e){function t(){let U=!1,ne=new Ut,ee=null,be=new Ut(0,0,0,0);return{setMask:function(se){ee!==se&&!U&&(i.colorMask(se,se,se,se),ee=se)},setLocked:function(se){U=se},setClear:function(se,Q,de,Ke,Dt){Dt===!0&&(se*=Ke,Q*=Ke,de*=Ke),ne.set(se,Q,de,Ke),be.equals(ne)===!1&&(i.clearColor(se,Q,de,Ke),be.copy(ne))},reset:function(){U=!1,ee=null,be.set(-1,0,0,0)}}}function n(){let U=!1,ne=!1,ee=null,be=null,se=null;return{setReversed:function(Q){if(ne!==Q){let de=e.get("EXT_clip_control");Q?de.clipControlEXT(de.LOWER_LEFT_EXT,de.ZERO_TO_ONE_EXT):de.clipControlEXT(de.LOWER_LEFT_EXT,de.NEGATIVE_ONE_TO_ONE_EXT),ne=Q;let Ke=se;se=null,this.setClear(Ke)}},getReversed:function(){return ne},setTest:function(Q){Q?J(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(Q){ee!==Q&&!U&&(i.depthMask(Q),ee=Q)},setFunc:function(Q){if(ne&&(Q=hT[Q]),be!==Q){switch(Q){case Oc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case kc:i.depthFunc(i.LESS);break;case or:i.depthFunc(i.LEQUAL);break;case zc:i.depthFunc(i.EQUAL);break;case Vc:i.depthFunc(i.GEQUAL);break;case Hc:i.depthFunc(i.GREATER);break;case Gc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}be=Q}},setLocked:function(Q){U=Q},setClear:function(Q){se!==Q&&(ne&&(Q=1-Q),i.clearDepth(Q),se=Q)},reset:function(){U=!1,ee=null,be=null,se=null,ne=!1}}}function s(){let U=!1,ne=null,ee=null,be=null,se=null,Q=null,de=null,Ke=null,Dt=null;return{setTest:function(gt){U||(gt?J(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(gt){ne!==gt&&!U&&(i.stencilMask(gt),ne=gt)},setFunc:function(gt,Pi,ji){(ee!==gt||be!==Pi||se!==ji)&&(i.stencilFunc(gt,Pi,ji),ee=gt,be=Pi,se=ji)},setOp:function(gt,Pi,ji){(Q!==gt||de!==Pi||Ke!==ji)&&(i.stencilOp(gt,Pi,ji),Q=gt,de=Pi,Ke=ji)},setLocked:function(gt){U=gt},setClear:function(gt){Dt!==gt&&(i.clearStencil(gt),Dt=gt)},reset:function(){U=!1,ne=null,ee=null,be=null,se=null,Q=null,de=null,Ke=null,Dt=null}}}let r=new t,o=new n,a=new s,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,S=null,b=null,E=null,A=null,R=new $e(0,0,0),I=0,v=!1,M=null,C=null,D=null,N=null,P=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),F=!1,V=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=V>=1):W.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=V>=2);let H=null,Z={},te=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),_e=new Ut().fromArray(te),He=new Ut().fromArray(ge);function qe(U,ne,ee,be){let se=new Uint8Array(4),Q=i.createTexture();i.bindTexture(U,Q),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let de=0;de<ee;de++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(ne,0,i.RGBA,1,1,be,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D(ne+de,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return Q}let q={};q[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(or),Fe(!1),dt(wd),J(i.CULL_FACE),Je($i);function J(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function he(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function Ue(U,ne){return u[U]!==ne?(i.bindFramebuffer(U,ne),u[U]=ne,U===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ne),U===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ne),!0):!1}function ye(U,ne){let ee=f,be=!1;if(U){ee=d.get(ne),ee===void 0&&(ee=[],d.set(ne,ee));let se=U.textures;if(ee.length!==se.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,de=se.length;Q<de;Q++)ee[Q]=i.COLOR_ATTACHMENT0+Q;ee.length=se.length,be=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,be=!0);be&&i.drawBuffers(ee)}function Ye(U){return m!==U?(i.useProgram(U),m=U,!0):!1}let ut={[Ps]:i.FUNC_ADD,[_g]:i.FUNC_SUBTRACT,[xg]:i.FUNC_REVERSE_SUBTRACT};ut[yg]=i.MIN,ut[vg]=i.MAX;let De={[Sg]:i.ZERO,[bg]:i.ONE,[Mg]:i.SRC_COLOR,[mc]:i.SRC_ALPHA,[Cg]:i.SRC_ALPHA_SATURATE,[Ag]:i.DST_COLOR,[Eg]:i.DST_ALPHA,[Tg]:i.ONE_MINUS_SRC_COLOR,[gc]:i.ONE_MINUS_SRC_ALPHA,[Rg]:i.ONE_MINUS_DST_COLOR,[wg]:i.ONE_MINUS_DST_ALPHA,[Ig]:i.CONSTANT_COLOR,[Pg]:i.ONE_MINUS_CONSTANT_COLOR,[Lg]:i.CONSTANT_ALPHA,[Dg]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(U,ne,ee,be,se,Q,de,Ke,Dt,gt){if(U===$i){_===!0&&(he(i.BLEND),_=!1);return}if(_===!1&&(J(i.BLEND),_=!0),U!==gg){if(U!==g||gt!==v){if((p!==Ps||b!==Ps)&&(i.blendEquation(i.FUNC_ADD),p=Ps,b=Ps),gt)switch(U){case rr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ad:i.blendFunc(i.ONE,i.ONE);break;case Rd:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cd:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ve("WebGLState: Invalid blending: ",U);break}else switch(U){case rr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ad:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Rd:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cd:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",U);break}y=null,S=null,E=null,A=null,R.set(0,0,0),I=0,g=U,v=gt}return}se=se||ne,Q=Q||ee,de=de||be,(ne!==p||se!==b)&&(i.blendEquationSeparate(ut[ne],ut[se]),p=ne,b=se),(ee!==y||be!==S||Q!==E||de!==A)&&(i.blendFuncSeparate(De[ee],De[be],De[Q],De[de]),y=ee,S=be,E=Q,A=de),(Ke.equals(R)===!1||Dt!==I)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Dt),R.copy(Ke),I=Dt),g=U,v=!1}function rt(U,ne){U.side===fi?he(i.CULL_FACE):J(i.CULL_FACE);let ee=U.side===Rn;ne&&(ee=!ee),Fe(ee),U.blending===rr&&U.transparent===!1?Je($i):Je(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),r.setMask(U.colorWrite);let be=U.stencilWrite;a.setTest(be),be&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),mt(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function Fe(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function dt(U){U!==pg?(J(i.CULL_FACE),U!==C&&(U===wd?i.cullFace(i.BACK):U===mg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),C=U}function L(U){U!==D&&(F&&i.lineWidth(U),D=U)}function mt(U,ne,ee){U?(J(i.POLYGON_OFFSET_FILL),(N!==ne||P!==ee)&&(i.polygonOffset(ne,ee),N=ne,P=ee)):he(i.POLYGON_OFFSET_FILL)}function Ze(U){U?J(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function ht(U){U===void 0&&(U=i.TEXTURE0+z-1),H!==U&&(i.activeTexture(U),H=U)}function oe(U,ne,ee){ee===void 0&&(H===null?ee=i.TEXTURE0+z-1:ee=H);let be=Z[ee];be===void 0&&(be={type:void 0,texture:void 0},Z[ee]=be),(be.type!==U||be.texture!==ne)&&(H!==ee&&(i.activeTexture(ee),H=ee),i.bindTexture(U,ne||q[U]),be.type=U,be.texture=ne)}function w(){let U=Z[H];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function x(){try{i.compressedTexImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function K(){try{i.texSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function j(){try{i.texSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function Ie(){try{i.compressedTexSubImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ae(){try{i.texStorage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function Ee(){try{i.texStorage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function Oe(){try{i.texImage2D(...arguments)}catch(U){Ve("WebGLState:",U)}}function re(){try{i.texImage3D(...arguments)}catch(U){Ve("WebGLState:",U)}}function ce(U){_e.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),_e.copy(U))}function Me(U){He.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),He.copy(U))}function ve(U,ne){let ee=c.get(ne);ee===void 0&&(ee=new WeakMap,c.set(ne,ee));let be=ee.get(U);be===void 0&&(be=i.getUniformBlockIndex(ne,U.name),ee.set(U,be))}function le(U,ne){let be=c.get(ne).get(U);l.get(ne)!==be&&(i.uniformBlockBinding(ne,be,U.__bindingPointIndex),l.set(ne,be))}function je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},H=null,Z={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,y=null,S=null,b=null,E=null,A=null,R=new $e(0,0,0),I=0,v=!1,M=null,C=null,D=null,N=null,P=null,_e.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:J,disable:he,bindFramebuffer:Ue,drawBuffers:ye,useProgram:Ye,setBlending:Je,setMaterial:rt,setFlipSided:Fe,setCullFace:dt,setLineWidth:L,setPolygonOffset:mt,setScissorTest:Ze,activeTexture:ht,bindTexture:oe,unbindTexture:w,compressedTexImage2D:x,compressedTexImage3D:O,texImage2D:Oe,texImage3D:re,updateUBOMapping:ve,uniformBlockBinding:le,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:K,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:Ie,scissor:ce,viewport:Me,reset:je}}function dT(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Xe,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,x){return f?new OffscreenCanvas(w,x):co("canvas")}function _(w,x,O){let K=1,j=oe(w);if((j.width>O||j.height>O)&&(K=O/Math.max(j.width,j.height)),K<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let $=Math.floor(K*j.width),Ie=Math.floor(K*j.height);u===void 0&&(u=m($,Ie));let ae=x?m($,Ie):u;return ae.width=$,ae.height=Ie,ae.getContext("2d").drawImage(w,0,0,$,Ie),Pe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+Ie+")."),ae}else return"data"in w&&Pe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function g(w){return w.generateMipmaps}function p(w){i.generateMipmap(w)}function y(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(w,x,O,K,j=!1){if(w!==null){if(i[w]!==void 0)return i[w];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let $=x;if(x===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),x===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),x===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),x===i.RG_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RG8UI),O===i.UNSIGNED_SHORT&&($=i.RG16UI),O===i.UNSIGNED_INT&&($=i.RG32UI),O===i.BYTE&&($=i.RG8I),O===i.SHORT&&($=i.RG16I),O===i.INT&&($=i.RG32I)),x===i.RGB_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGB8UI),O===i.UNSIGNED_SHORT&&($=i.RGB16UI),O===i.UNSIGNED_INT&&($=i.RGB32UI),O===i.BYTE&&($=i.RGB8I),O===i.SHORT&&($=i.RGB16I),O===i.INT&&($=i.RGB32I)),x===i.RGBA_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.RGBA8UI),O===i.UNSIGNED_SHORT&&($=i.RGBA16UI),O===i.UNSIGNED_INT&&($=i.RGBA32UI),O===i.BYTE&&($=i.RGBA8I),O===i.SHORT&&($=i.RGBA16I),O===i.INT&&($=i.RGBA32I)),x===i.RGB&&(O===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),O===i.UNSIGNED_INT_10F_11F_11F_REV&&($=i.R11F_G11F_B10F)),x===i.RGBA){let Ie=j?ua:lt.getTransfer(K);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=Ie===pt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(w,x){let O;return w?x===null||x===Ii||x===wo?O=i.DEPTH24_STENCIL8:x===pn?O=i.DEPTH32F_STENCIL8:x===Eo&&(O=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ii||x===wo?O=i.DEPTH_COMPONENT24:x===pn?O=i.DEPTH_COMPONENT32F:x===Eo&&(O=i.DEPTH_COMPONENT16),O}function E(w,x){return g(w)===!0||w.isFramebufferTexture&&w.minFilter!==Gt&&w.minFilter!==Lt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){let x=w.target;x.removeEventListener("dispose",A),I(x),x.isVideoTexture&&h.delete(x)}function R(w){let x=w.target;x.removeEventListener("dispose",R),M(x)}function I(w){let x=n.get(w);if(x.__webglInit===void 0)return;let O=w.source,K=d.get(O);if(K){let j=K[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(w),Object.keys(K).length===0&&d.delete(O)}n.remove(w)}function v(w){let x=n.get(w);i.deleteTexture(x.__webglTexture);let O=w.source,K=d.get(O);delete K[x.__cacheKey],o.memory.textures--}function M(w){let x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(x.__webglFramebuffer[K]))for(let j=0;j<x.__webglFramebuffer[K].length;j++)i.deleteFramebuffer(x.__webglFramebuffer[K][j]);else i.deleteFramebuffer(x.__webglFramebuffer[K]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[K])}else{if(Array.isArray(x.__webglFramebuffer))for(let K=0;K<x.__webglFramebuffer.length;K++)i.deleteFramebuffer(x.__webglFramebuffer[K]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let K=0;K<x.__webglColorRenderbuffer.length;K++)x.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[K]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let O=w.textures;for(let K=0,j=O.length;K<j;K++){let $=n.get(O[K]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(O[K])}n.remove(w)}let C=0;function D(){C=0}function N(){let w=C;return w>=s.maxTextures&&Pe("WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function P(w){let x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function z(w,x){let O=n.get(w);if(w.isVideoTexture&&Ze(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&O.__version!==w.version){let K=w.image;if(K===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{q(O,w,x);return}}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+x)}function F(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){q(O,w,x);return}else w.isExternalTexture&&(O.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+x)}function V(w,x){let O=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){q(O,w,x);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+x)}function W(w,x){let O=n.get(w);if(w.isCubeDepthTexture!==!0&&w.version>0&&O.__version!==w.version){J(O,w,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+x)}let H={[Ls]:i.REPEAT,[On]:i.CLAMP_TO_EDGE,[lo]:i.MIRRORED_REPEAT},Z={[Gt]:i.NEAREST,[Xc]:i.NEAREST_MIPMAP_NEAREST,[yr]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[To]:i.LINEAR_MIPMAP_NEAREST,[pi]:i.LINEAR_MIPMAP_LINEAR},te={[Hg]:i.NEVER,[Yg]:i.ALWAYS,[Gg]:i.LESS,[Dh]:i.LEQUAL,[Wg]:i.EQUAL,[Nh]:i.GEQUAL,[Xg]:i.GREATER,[qg]:i.NOTEQUAL};function ge(w,x){if(x.type===pn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Lt||x.magFilter===To||x.magFilter===yr||x.magFilter===pi||x.minFilter===Lt||x.minFilter===To||x.minFilter===yr||x.minFilter===pi)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,H[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,H[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,H[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,Z[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,Z[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,te[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Gt||x.minFilter!==yr&&x.minFilter!==pi||x.type===pn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let O=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function _e(w,x){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));let K=x.source,j=d.get(K);j===void 0&&(j={},d.set(K,j));let $=P(x);if($!==w.__cacheKey){j[$]===void 0&&(j[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),j[$].usedTimes++;let Ie=j[w.__cacheKey];Ie!==void 0&&(j[w.__cacheKey].usedTimes--,Ie.usedTimes===0&&v(x)),w.__cacheKey=$,w.__webglTexture=j[$].texture}return O}function He(w,x,O){return Math.floor(Math.floor(w/O)/x)}function qe(w,x,O,K){let $=w.updateRanges;if($.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,O,K,x.data);else{$.sort((re,ce)=>re.start-ce.start);let Ie=0;for(let re=1;re<$.length;re++){let ce=$[Ie],Me=$[re],ve=ce.start+ce.count,le=He(Me.start,x.width,4),je=He(ce.start,x.width,4);Me.start<=ve+1&&le===je&&He(Me.start+Me.count-1,x.width,4)===le?ce.count=Math.max(ce.count,Me.start+Me.count-ce.start):(++Ie,$[Ie]=Me)}$.length=Ie+1;let ae=i.getParameter(i.UNPACK_ROW_LENGTH),Ee=i.getParameter(i.UNPACK_SKIP_PIXELS),Oe=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let re=0,ce=$.length;re<ce;re++){let Me=$[re],ve=Math.floor(Me.start/4),le=Math.ceil(Me.count/4),je=ve%x.width,U=Math.floor(ve/x.width),ne=le,ee=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,je),i.pixelStorei(i.UNPACK_SKIP_ROWS,U),t.texSubImage2D(i.TEXTURE_2D,0,je,U,ne,ee,O,K,x.data)}w.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ae),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Ee),i.pixelStorei(i.UNPACK_SKIP_ROWS,Oe)}}function q(w,x,O){let K=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(K=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(K=i.TEXTURE_3D);let j=_e(w,x),$=x.source;t.bindTexture(K,w.__webglTexture,i.TEXTURE0+O);let Ie=n.get($);if($.version!==Ie.__version||j===!0){t.activeTexture(i.TEXTURE0+O);let ae=lt.getPrimaries(lt.workingColorSpace),Ee=x.colorSpace===xs?null:lt.getPrimaries(x.colorSpace),Oe=x.colorSpace===xs||ae===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Oe);let re=_(x.image,!1,s.maxTextureSize);re=ht(x,re);let ce=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),ve=S(x.internalFormat,ce,Me,x.colorSpace,x.isVideoTexture);ge(K,x);let le,je=x.mipmaps,U=x.isVideoTexture!==!0,ne=Ie.__version===void 0||j===!0,ee=$.dataReady,be=E(x,re);if(x.isDepthTexture)ve=b(x.format===ks,x.type),ne&&(U?t.texStorage2D(i.TEXTURE_2D,1,ve,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ve,re.width,re.height,0,ce,Me,null));else if(x.isDataTexture)if(je.length>0){U&&ne&&t.texStorage2D(i.TEXTURE_2D,be,ve,je[0].width,je[0].height);for(let se=0,Q=je.length;se<Q;se++)le=je[se],U?ee&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,le.width,le.height,ce,Me,le.data):t.texImage2D(i.TEXTURE_2D,se,ve,le.width,le.height,0,ce,Me,le.data);x.generateMipmaps=!1}else U?(ne&&t.texStorage2D(i.TEXTURE_2D,be,ve,re.width,re.height),ee&&qe(x,re,ce,Me)):t.texImage2D(i.TEXTURE_2D,0,ve,re.width,re.height,0,ce,Me,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){U&&ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ve,je[0].width,je[0].height,re.depth);for(let se=0,Q=je.length;se<Q;se++)if(le=je[se],x.format!==ti)if(ce!==null)if(U){if(ee)if(x.layerUpdates.size>0){let de=jd(le.width,le.height,x.format,x.type);for(let Ke of x.layerUpdates){let Dt=le.data.subarray(Ke*de/le.data.BYTES_PER_ELEMENT,(Ke+1)*de/le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,Ke,le.width,le.height,1,ce,Dt)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,le.width,le.height,re.depth,ce,le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ve,le.width,le.height,re.depth,0,le.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else U?ee&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,le.width,le.height,re.depth,ce,Me,le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ve,le.width,le.height,re.depth,0,ce,Me,le.data)}else{U&&ne&&t.texStorage2D(i.TEXTURE_2D,be,ve,je[0].width,je[0].height);for(let se=0,Q=je.length;se<Q;se++)le=je[se],x.format!==ti?ce!==null?U?ee&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,le.width,le.height,ce,le.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ve,le.width,le.height,0,le.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?ee&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,le.width,le.height,ce,Me,le.data):t.texImage2D(i.TEXTURE_2D,se,ve,le.width,le.height,0,ce,Me,le.data)}else if(x.isDataArrayTexture)if(U){if(ne&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,ve,re.width,re.height,re.depth),ee)if(x.layerUpdates.size>0){let se=jd(re.width,re.height,x.format,x.type);for(let Q of x.layerUpdates){let de=re.data.subarray(Q*se/re.data.BYTES_PER_ELEMENT,(Q+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ce,Me,de)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ce,Me,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,re.width,re.height,re.depth,0,ce,Me,re.data);else if(x.isData3DTexture)U?(ne&&t.texStorage3D(i.TEXTURE_3D,be,ve,re.width,re.height,re.depth),ee&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ce,Me,re.data)):t.texImage3D(i.TEXTURE_3D,0,ve,re.width,re.height,re.depth,0,ce,Me,re.data);else if(x.isFramebufferTexture){if(ne)if(U)t.texStorage2D(i.TEXTURE_2D,be,ve,re.width,re.height);else{let se=re.width,Q=re.height;for(let de=0;de<be;de++)t.texImage2D(i.TEXTURE_2D,de,ve,se,Q,0,ce,Me,null),se>>=1,Q>>=1}}else if(je.length>0){if(U&&ne){let se=oe(je[0]);t.texStorage2D(i.TEXTURE_2D,be,ve,se.width,se.height)}for(let se=0,Q=je.length;se<Q;se++)le=je[se],U?ee&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ce,Me,le):t.texImage2D(i.TEXTURE_2D,se,ve,ce,Me,le);x.generateMipmaps=!1}else if(U){if(ne){let se=oe(re);t.texStorage2D(i.TEXTURE_2D,be,ve,se.width,se.height)}ee&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,Me,re)}else t.texImage2D(i.TEXTURE_2D,0,ve,ce,Me,re);g(x)&&p(K),Ie.__version=$.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function J(w,x,O){if(x.image.length!==6)return;let K=_e(w,x),j=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+O);let $=n.get(j);if(j.version!==$.__version||K===!0){t.activeTexture(i.TEXTURE0+O);let Ie=lt.getPrimaries(lt.workingColorSpace),ae=x.colorSpace===xs?null:lt.getPrimaries(x.colorSpace),Ee=x.colorSpace===xs||Ie===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let Oe=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ce=[];for(let Q=0;Q<6;Q++)!Oe&&!re?ce[Q]=_(x.image[Q],!0,s.maxCubemapSize):ce[Q]=re?x.image[Q].image:x.image[Q],ce[Q]=ht(x,ce[Q]);let Me=ce[0],ve=r.convert(x.format,x.colorSpace),le=r.convert(x.type),je=S(x.internalFormat,ve,le,x.colorSpace),U=x.isVideoTexture!==!0,ne=$.__version===void 0||K===!0,ee=j.dataReady,be=E(x,Me);ge(i.TEXTURE_CUBE_MAP,x);let se;if(Oe){U&&ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,be,je,Me.width,Me.height);for(let Q=0;Q<6;Q++){se=ce[Q].mipmaps;for(let de=0;de<se.length;de++){let Ke=se[de];x.format!==ti?ve!==null?U?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,Ke.width,Ke.height,ve,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,je,Ke.width,Ke.height,0,Ke.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,0,0,Ke.width,Ke.height,ve,le,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de,je,Ke.width,Ke.height,0,ve,le,Ke.data)}}}else{if(se=x.mipmaps,U&&ne){se.length>0&&be++;let Q=oe(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,be,je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ce[Q].width,ce[Q].height,ve,le,ce[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ce[Q].width,ce[Q].height,0,ve,le,ce[Q].data);for(let de=0;de<se.length;de++){let Dt=se[de].image[Q].image;U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,Dt.width,Dt.height,ve,le,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,je,Dt.width,Dt.height,0,ve,le,Dt.data)}}else{U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ve,le,ce[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,je,ve,le,ce[Q]);for(let de=0;de<se.length;de++){let Ke=se[de];U?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,0,0,ve,le,Ke.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,de+1,je,ve,le,Ke.image[Q])}}}g(x)&&p(i.TEXTURE_CUBE_MAP),$.__version=j.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function he(w,x,O,K,j,$){let Ie=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),Ee=S(O.internalFormat,Ie,ae,O.colorSpace),Oe=n.get(x),re=n.get(O);if(re.__renderTarget=x,!Oe.__hasExternalTextures){let ce=Math.max(1,x.width>>$),Me=Math.max(1,x.height>>$);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,$,Ee,ce,Me,x.depth,0,Ie,ae,null):t.texImage2D(j,$,Ee,ce,Me,0,Ie,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),mt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,K,j,re.__webglTexture,0,L(x)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,K,j,re.__webglTexture,$),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(w,x,O){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){let K=x.depthTexture,j=K&&K.isDepthTexture?K.type:null,$=b(x.stencilBuffer,j),Ie=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;mt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(x),$,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(x),$,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,$,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ie,i.RENDERBUFFER,w)}else{let K=x.textures;for(let j=0;j<K.length;j++){let $=K[j],Ie=r.convert($.format,$.colorSpace),ae=r.convert($.type),Ee=S($.internalFormat,Ie,ae,$.colorSpace);mt(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,L(x),Ee,x.width,x.height):O?i.renderbufferStorageMultisample(i.RENDERBUFFER,L(x),Ee,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ye(w,x,O){let K=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),K){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x.depthTexture);let Oe=r.convert(x.depthTexture.format),re=r.convert(x.depthTexture.type),ce;x.depthTexture.format===Gi?ce=i.DEPTH_COMPONENT24:x.depthTexture.format===ks&&(ce=i.DEPTH24_STENCIL8);for(let Me=0;Me<6;Me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0,ce,x.width,x.height,0,Oe,re,null)}}else z(x.depthTexture,0);let $=j.__webglTexture,Ie=L(x),ae=K?i.TEXTURE_CUBE_MAP_POSITIVE_X+O:i.TEXTURE_2D,Ee=x.depthTexture.format===ks?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Gi)mt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ae,$,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ae,$,0);else if(x.depthTexture.format===ks)mt(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Ee,ae,$,0,Ie):i.framebufferTexture2D(i.FRAMEBUFFER,Ee,ae,$,0);else throw new Error("Unknown depthTexture format")}function Ye(w){let x=n.get(w),O=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){let K=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),K){let j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,K.removeEventListener("dispose",j)};K.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=K}if(w.depthTexture&&!x.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)ye(x.__webglFramebuffer[K],w,K);else{let K=w.texture.mipmaps;K&&K.length>0?ye(x.__webglFramebuffer[0],w,0):ye(x.__webglFramebuffer,w,0)}else if(O){x.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[K]),x.__webglDepthbuffer[K]===void 0)x.__webglDepthbuffer[K]=i.createRenderbuffer(),Ue(x.__webglDepthbuffer[K],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[K];i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}else{let K=w.texture.mipmaps;if(K&&K.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Ue(x.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,$),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,$)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(w,x,O){let K=n.get(w);x!==void 0&&he(K.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Ye(w)}function De(w){let x=w.texture,O=n.get(w),K=n.get(x);w.addEventListener("dispose",R);let j=w.textures,$=w.isWebGLCubeRenderTarget===!0,Ie=j.length>1;if(Ie||(K.__webglTexture===void 0&&(K.__webglTexture=i.createTexture()),K.__version=x.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<x.mipmaps.length;Ee++)O.__webglFramebuffer[ae][Ee]=i.createFramebuffer()}else O.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<x.mipmaps.length;ae++)O.__webglFramebuffer[ae]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(Ie)for(let ae=0,Ee=j.length;ae<Ee;ae++){let Oe=n.get(j[ae]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&mt(w)===!1){O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){let Ee=j[ae];O.__webglColorRenderbuffer[ae]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[ae]);let Oe=r.convert(Ee.format,Ee.colorSpace),re=r.convert(Ee.type),ce=S(Ee.internalFormat,Oe,re,Ee.colorSpace,w.isXRRenderTarget===!0),Me=L(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Me,ce,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,O.__webglColorRenderbuffer[ae])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(O.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),ge(i.TEXTURE_CUBE_MAP,x);for(let ae=0;ae<6;ae++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)he(O.__webglFramebuffer[ae][Ee],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else he(O.__webglFramebuffer[ae],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);g(x)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ae=0,Ee=j.length;ae<Ee;ae++){let Oe=j[ae],re=n.get(Oe),ce=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ce=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ce,re.__webglTexture),ge(ce,Oe),he(O.__webglFramebuffer,w,Oe,i.COLOR_ATTACHMENT0+ae,ce,0),g(Oe)&&p(ce)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ae=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ae,K.__webglTexture),ge(ae,x),x.mipmaps&&x.mipmaps.length>0)for(let Ee=0;Ee<x.mipmaps.length;Ee++)he(O.__webglFramebuffer[Ee],w,x,i.COLOR_ATTACHMENT0,ae,Ee);else he(O.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ae,0);g(x)&&p(ae),t.unbindTexture()}w.depthBuffer&&Ye(w)}function Je(w){let x=w.textures;for(let O=0,K=x.length;O<K;O++){let j=x[O];if(g(j)){let $=y(w),Ie=n.get(j).__webglTexture;t.bindTexture($,Ie),p($),t.unbindTexture()}}}let rt=[],Fe=[];function dt(w){if(w.samples>0){if(mt(w)===!1){let x=w.textures,O=w.width,K=w.height,j=i.COLOR_BUFFER_BIT,$=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ie=n.get(w),ae=x.length>1;if(ae)for(let Oe=0;Oe<x.length;Oe++)t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);let Ee=w.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let Oe=0;Oe<x.length;Oe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),ae){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);let re=n.get(x[Oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,re,0)}i.blitFramebuffer(0,0,O,K,0,0,O,K,j,i.NEAREST),l===!0&&(rt.length=0,Fe.length=0,rt.push(i.COLOR_ATTACHMENT0+Oe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(rt.push($),Fe.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ae)for(let Oe=0;Oe<x.length;Oe++){t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,Ie.__webglColorRenderbuffer[Oe]);let re=n.get(x[Oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ie.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,re,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){let x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function L(w){return Math.min(s.maxSamples,w.samples)}function mt(w){let x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ze(w){let x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ht(w,x){let O=w.colorSpace,K=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||O!==Kt&&O!==xs&&(lt.getTransfer(O)===pt?(K!==ti||j!==Hn)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",O)),x}function oe(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=D,this.setTexture2D=z,this.setTexture2DArray=F,this.setTexture3D=V,this.setTextureCube=W,this.rebindTextures=ut,this.setupRenderTarget=De,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Ye,this.setupFrameBufferTexture=he,this.useMultisampledRTT=mt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function fT(i,e){function t(n,s=xs){let r,o=lt.getTransfer(s);if(n===Hn)return i.UNSIGNED_BYTE;if(n===Yc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$c)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vd)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Bd)return i.BYTE;if(n===kd)return i.SHORT;if(n===Eo)return i.UNSIGNED_SHORT;if(n===qc)return i.INT;if(n===Ii)return i.UNSIGNED_INT;if(n===pn)return i.FLOAT;if(n===Cn)return i.HALF_FLOAT;if(n===Hd)return i.ALPHA;if(n===Gd)return i.RGB;if(n===ti)return i.RGBA;if(n===Gi)return i.DEPTH_COMPONENT;if(n===ks)return i.DEPTH_STENCIL;if(n===Zc)return i.RED;if(n===Kc)return i.RED_INTEGER;if(n===vr)return i.RG;if(n===Jc)return i.RG_INTEGER;if(n===jc)return i.RGBA_INTEGER;if(n===Xa||n===qa||n===Ya||n===$a)if(o===pt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ya)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Qc||n===eh||n===th||n===nh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Qc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ih||n===sh||n===rh||n===oh||n===ah||n===lh||n===ch)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ih||n===sh)return o===pt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===rh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===oh)return r.COMPRESSED_R11_EAC;if(n===ah)return r.COMPRESSED_SIGNED_R11_EAC;if(n===lh)return r.COMPRESSED_RG11_EAC;if(n===ch)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===hh||n===uh||n===dh||n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===yh||n===vh||n===Sh||n===bh||n===Mh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===hh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ph)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_h)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===yh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===vh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Sh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return o===pt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Th||n===Eh||n===wh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Th)return o===pt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ah||n===Rh||n===Ch||n===Ih)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ah)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Rh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ch)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ih)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===wo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function _T(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Zd(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,y,S,b){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,b)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,y,S):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Rn&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Rn&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let y=e.get(p),S=y.envMap,b=y.envMapRotation;S&&(g.envMap.value=S,Mr.copy(b),Mr.x*=-1,Mr.y*=-1,Mr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Mr.y*=-1,Mr.z*=-1),g.envMapRotation.value.setFromMatrix4(gT.makeRotationFromEuler(Mr)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,y,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*y,g.scale.value=S*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,y){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Rn&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let y=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function xT(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,S){let b=S.program;n.uniformBlockBinding(y,b)}function c(y,S){let b=s[y.id];b===void 0&&(m(y),b=h(y),s[y.id]=b,y.addEventListener("dispose",g));let E=S.program;n.updateUBOMapping(y,E);let A=e.render.frame;r[y.id]!==A&&(d(y),r[y.id]=A)}function h(y){let S=u();y.__bindingPointIndex=S;let b=i.createBuffer(),E=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,b),b}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let S=s[y.id],b=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let A=0,R=b.length;A<R;A++){let I=Array.isArray(b[A])?b[A]:[b[A]];for(let v=0,M=I.length;v<M;v++){let C=I[v];if(f(C,A,v,E)===!0){let D=C.__offset,N=Array.isArray(C.value)?C.value:[C.value],P=0;for(let z=0;z<N.length;z++){let F=N[z],V=_(F);typeof F=="number"||typeof F=="boolean"?(C.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,D+P,C.__data)):F.isMatrix3?(C.__data[0]=F.elements[0],C.__data[1]=F.elements[1],C.__data[2]=F.elements[2],C.__data[3]=0,C.__data[4]=F.elements[3],C.__data[5]=F.elements[4],C.__data[6]=F.elements[5],C.__data[7]=0,C.__data[8]=F.elements[6],C.__data[9]=F.elements[7],C.__data[10]=F.elements[8],C.__data[11]=0):(F.toArray(C.__data,P),P+=V.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,S,b,E){let A=y.value,R=S+"_"+b;if(E[R]===void 0)return typeof A=="number"||typeof A=="boolean"?E[R]=A:E[R]=A.clone(),!0;{let I=E[R];if(typeof A=="number"||typeof A=="boolean"){if(I!==A)return E[R]=A,!0}else if(I.equals(A)===!1)return I.copy(A),!0}return!1}function m(y){let S=y.uniforms,b=0,E=16;for(let R=0,I=S.length;R<I;R++){let v=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,C=v.length;M<C;M++){let D=v[M],N=Array.isArray(D.value)?D.value:[D.value];for(let P=0,z=N.length;P<z;P++){let F=N[P],V=_(F),W=b%E,H=W%V.boundary,Z=W+H;b+=H,Z!==0&&E-Z<V.storage&&(b+=E-Z),D.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=b,b+=V.storage}}}let A=b%E;return A>0&&(b+=E-A),y.__size=b,y.__cache={},this}function _(y){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Pe("WebGLRenderer: Unsupported uniform value type.",y),S}function g(y){let S=y.target;S.removeEventListener("dispose",g);let b=o.indexOf(S.__bindingPointIndex);o.splice(b,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(let y in s)i.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}function vT(){return Zi===null&&(Zi=new hr(yT,16,16,vr,Cn),Zi.name="DFG_LUT",Zi.minFilter=Lt,Zi.magFilter=Lt,Zi.wrapS=On,Zi.wrapT=On,Zi.generateMipmaps=!1,Zi.needsUpdate=!0),Zi}var Uy,Fy,Oy,By,ky,zy,Vy,Hy,Gy,Wy,Xy,qy,Yy,$y,Zy,Ky,Jy,jy,Qy,ev,tv,nv,iv,sv,rv,ov,av,lv,cv,hv,uv,dv,fv,pv,mv,gv,_v,xv,yv,vv,Sv,bv,Mv,Tv,Ev,wv,Av,Rv,Cv,Iv,Pv,Lv,Dv,Nv,Uv,Fv,Ov,Bv,kv,zv,Vv,Hv,Gv,Wv,Xv,qv,Yv,$v,Zv,Kv,Jv,jv,Qv,eS,tS,nS,iS,sS,rS,oS,aS,lS,cS,hS,uS,dS,fS,pS,mS,gS,_S,xS,yS,vS,SS,bS,MS,TS,ES,wS,AS,RS,CS,IS,PS,LS,DS,NS,US,FS,OS,BS,kS,zS,VS,HS,GS,WS,XS,qS,YS,$S,ZS,KS,JS,jS,QS,eb,tb,nb,ib,sb,rb,ob,ab,lb,cb,hb,ub,db,fb,st,me,Ki,Uh,br,pb,zs,e0,Tr,Sb,Ja,t0,ef,tf,nf,sf,bb,Io,Db,M0,af,T0,E0,w0,r0,o0,a0,l0,c0,lf,cf,hf,rf,Co,bM,MM,d0,AM,Fh,DM,NM,FM,BM,zM,HM,WM,$M,df,ff,tT,rT,oT,aT,lT,S0,ja,of,hT,pT,mT,pf,mf,Mr,gT,yT,Zi,Oh,Er=Ae(()=>{Qd();Qd();Uy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Fy=`#ifdef USE_ALPHAHASH
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
#endif`,Oy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gy=`#ifdef USE_BATCHING
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
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$y=`#ifdef USE_IRIDESCENCE
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
#endif`,Zy=`#ifdef USE_BUMPMAP
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
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ev=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sv=`#define PI 3.141592653589793
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
} // validated`,rv=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ov=`vec3 transformedNormal = objectNormal;
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
#endif`,av=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uv="gl_FragColor = linearToOutputTexel( gl_FragColor );",dv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fv=`#ifdef USE_ENVMAP
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
#endif`,pv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
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
#endif`,gv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_v=`#ifdef USE_ENVMAP
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
#endif`,xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bv=`#ifdef USE_GRADIENTMAP
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
}`,Mv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wv=`uniform bool receiveShadow;
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
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Cv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lv=`PhysicalMaterial material;
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
#endif`,Dv=`uniform sampler2D dfgLUT;
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
}`,Nv=`
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
#endif`,Uv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ov=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Wv=`#if defined( USE_POINTS_UV )
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
#endif`,Xv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$v=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kv=`#ifdef USE_MORPHTARGETS
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
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Qv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iS=`#ifdef USE_NORMALMAP
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
#endif`,sS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,aS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cS=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,hS=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mS=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gS=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_S=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yS=`float getShadowMask() {
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
}`,vS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,SS=`#ifdef USE_SKINNING
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
#endif`,bS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MS=`#ifdef USE_SKINNING
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
#endif`,TS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ES=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AS=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RS=`#ifdef USE_TRANSMISSION
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
#endif`,CS=`#ifdef USE_TRANSMISSION
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
#endif`,IS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,NS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,US=`uniform sampler2D t2D;
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
}`,FS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OS=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zS=`#include <common>
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
}`,VS=`#if DEPTH_PACKING == 3200
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
}`,HS=`#define DISTANCE
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
}`,GS=`#define DISTANCE
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
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qS=`uniform float scale;
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
}`,YS=`uniform vec3 diffuse;
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
}`,$S=`#include <common>
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
}`,ZS=`uniform vec3 diffuse;
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
}`,KS=`#define LAMBERT
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
}`,JS=`#define LAMBERT
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
}`,jS=`#define MATCAP
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
}`,QS=`#define MATCAP
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
}`,eb=`#define NORMAL
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
}`,tb=`#define NORMAL
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
}`,nb=`#define PHONG
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
}`,ib=`#define PHONG
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
}`,sb=`#define STANDARD
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
}`,rb=`#define STANDARD
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
}`,ob=`#define TOON
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
}`,ab=`#define TOON
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
}`,lb=`uniform float size;
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
}`,cb=`uniform vec3 diffuse;
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
}`,hb=`#include <common>
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
}`,ub=`uniform vec3 color;
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
}`,db=`uniform float rotation;
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
}`,fb=`uniform vec3 diffuse;
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
}`,st={alphahash_fragment:Uy,alphahash_pars_fragment:Fy,alphamap_fragment:Oy,alphamap_pars_fragment:By,alphatest_fragment:ky,alphatest_pars_fragment:zy,aomap_fragment:Vy,aomap_pars_fragment:Hy,batching_pars_vertex:Gy,batching_vertex:Wy,begin_vertex:Xy,beginnormal_vertex:qy,bsdfs:Yy,iridescence_fragment:$y,bumpmap_pars_fragment:Zy,clipping_planes_fragment:Ky,clipping_planes_pars_fragment:Jy,clipping_planes_pars_vertex:jy,clipping_planes_vertex:Qy,color_fragment:ev,color_pars_fragment:tv,color_pars_vertex:nv,color_vertex:iv,common:sv,cube_uv_reflection_fragment:rv,defaultnormal_vertex:ov,displacementmap_pars_vertex:av,displacementmap_vertex:lv,emissivemap_fragment:cv,emissivemap_pars_fragment:hv,colorspace_fragment:uv,colorspace_pars_fragment:dv,envmap_fragment:fv,envmap_common_pars_fragment:pv,envmap_pars_fragment:mv,envmap_pars_vertex:gv,envmap_physical_pars_fragment:Av,envmap_vertex:_v,fog_vertex:xv,fog_pars_vertex:yv,fog_fragment:vv,fog_pars_fragment:Sv,gradientmap_pars_fragment:bv,lightmap_pars_fragment:Mv,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:Ev,lights_pars_begin:wv,lights_toon_fragment:Rv,lights_toon_pars_fragment:Cv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Pv,lights_physical_fragment:Lv,lights_physical_pars_fragment:Dv,lights_fragment_begin:Nv,lights_fragment_maps:Uv,lights_fragment_end:Fv,logdepthbuf_fragment:Ov,logdepthbuf_pars_fragment:Bv,logdepthbuf_pars_vertex:kv,logdepthbuf_vertex:zv,map_fragment:Vv,map_pars_fragment:Hv,map_particle_fragment:Gv,map_particle_pars_fragment:Wv,metalnessmap_fragment:Xv,metalnessmap_pars_fragment:qv,morphinstance_vertex:Yv,morphcolor_vertex:$v,morphnormal_vertex:Zv,morphtarget_pars_vertex:Kv,morphtarget_vertex:Jv,normal_fragment_begin:jv,normal_fragment_maps:Qv,normal_pars_fragment:eS,normal_pars_vertex:tS,normal_vertex:nS,normalmap_pars_fragment:iS,clearcoat_normal_fragment_begin:sS,clearcoat_normal_fragment_maps:rS,clearcoat_pars_fragment:oS,iridescence_pars_fragment:aS,opaque_fragment:lS,packing:cS,premultiplied_alpha_fragment:hS,project_vertex:uS,dithering_fragment:dS,dithering_pars_fragment:fS,roughnessmap_fragment:pS,roughnessmap_pars_fragment:mS,shadowmap_pars_fragment:gS,shadowmap_pars_vertex:_S,shadowmap_vertex:xS,shadowmask_pars_fragment:yS,skinbase_vertex:vS,skinning_pars_vertex:SS,skinning_vertex:bS,skinnormal_vertex:MS,specularmap_fragment:TS,specularmap_pars_fragment:ES,tonemapping_fragment:wS,tonemapping_pars_fragment:AS,transmission_fragment:RS,transmission_pars_fragment:CS,uv_pars_fragment:IS,uv_pars_vertex:PS,uv_vertex:LS,worldpos_vertex:DS,background_vert:NS,background_frag:US,backgroundCube_vert:FS,backgroundCube_frag:OS,cube_vert:BS,cube_frag:kS,depth_vert:zS,depth_frag:VS,distance_vert:HS,distance_frag:GS,equirect_vert:WS,equirect_frag:XS,linedashed_vert:qS,linedashed_frag:YS,meshbasic_vert:$S,meshbasic_frag:ZS,meshlambert_vert:KS,meshlambert_frag:JS,meshmatcap_vert:jS,meshmatcap_frag:QS,meshnormal_vert:eb,meshnormal_frag:tb,meshphong_vert:nb,meshphong_frag:ib,meshphysical_vert:sb,meshphysical_frag:rb,meshtoon_vert:ob,meshtoon_frag:ab,points_vert:lb,points_frag:cb,shadow_vert:hb,shadow_frag:ub,sprite_vert:db,sprite_frag:fb},me={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Xe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new Xe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Ki={basic:{uniforms:yn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:yn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:yn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:yn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:yn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new $e(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:yn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:yn([me.points,me.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:yn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:yn([me.common,me.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:yn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:yn([me.sprite,me.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distance:{uniforms:yn([me.common,me.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distance_vert,fragmentShader:st.distance_frag},shadow:{uniforms:yn([me.lights,me.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};Ki.physical={uniforms:yn([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Xe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Xe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Xe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};Uh={r:0,b:0,g:0},br=new wi,pb=new tt;zs=4,e0=[.125,.215,.35,.446,.526,.582],Tr=20,Sb=256,Ja=new Yi,t0=new $e,ef=null,tf=0,nf=0,sf=!1,bb=new B,Io=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=bb}=r;ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=s0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=i0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ef,tf,nf),this._renderer.xr.enabled=sf,e.scissorTest=!1,Ro(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Bs||e.mapping===_r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ef=this._renderer.getRenderTarget(),tf=this._renderer.getActiveCubeFace(),nf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Cn,format:ti,colorSpace:Kt,depthBuffer:!1},s=n0(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=n0(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Mb(r)),this._blurMaterial=Eb(r,e,t),this._ggxMaterial=Tb(r,e,t)}return s}_compileMaterial(e){let t=new fn(new An,e);this._renderer.compile(t,Ja)}_sceneToCubeUV(e,t,n,s,r){let l=new sn(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(t0),u.toneMapping=Ci,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fn(new po,new Ai({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,p=!0):(g.color.copy(t0),p=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[S],r.y,r.z)):b===1?(l.up.set(0,0,c[S]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[S],r.z)):(l.up.set(0,c[S],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[S]));let E=this._cubeSize;Ro(s,b*E,S>2?E:0,E,E),u.setRenderTarget(s),p&&u.render(_,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Bs||e.mapping===_r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=s0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=i0());let r=s?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=r;let a=r.uniforms;a.envMap.value=e;let l=this._cubeSize;Ro(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Ja)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-zs?n-m+zs:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,Ro(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(a,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,Ro(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(a,Ja)}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Ve("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[s];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Tr-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):Tr;g>Tr&&Pe(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Tr}`);let p=[],y=0;for(let R=0;R<Tr;++R){let I=R/_,v=Math.exp(-I*I/2);p.push(v),R===0?y+=v:R<g&&(y+=2*v)}for(let R=0;R<p.length;R++)p[R]=p[R]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;let b=this._sizeLods[s],E=3*b*(s>S-zs?s-S+zs:0),A=4*(this._cubeSize-b);Ro(t,E,A,3*b,2*b),l.setRenderTarget(t),l.render(u,Ja)}};Db={[Pd]:"LINEAR_TONE_MAPPING",[Ld]:"REINHARD_TONE_MAPPING",[Dd]:"CINEON_TONE_MAPPING",[Ga]:"ACES_FILMIC_TONE_MAPPING",[Ud]:"AGX_TONE_MAPPING",[Fd]:"NEUTRAL_TONE_MAPPING",[Nd]:"CUSTOM_TONE_MAPPING"};M0=new on,af=new Us(1,1),T0=new pa,E0=new vc,w0=new ya,r0=[],o0=[],a0=new Float32Array(16),l0=new Float32Array(9),c0=new Float32Array(4);lf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eM(t.type)}},cf=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vM(t.type)}},hf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},rf=/(\w+)(\])?(\[|\.)?/g;Co=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);SM(a,l,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};bM=37297,MM=0;d0=new Qe;AM={[Pd]:"Linear",[Ld]:"Reinhard",[Dd]:"Cineon",[Ga]:"ACESFilmic",[Ud]:"AgX",[Fd]:"Neutral",[Nd]:"Custom"};Fh=new B;DM=/^[ \t]*#include +<([\w\d./]+)>/gm;NM=new Map;FM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;BM={[Ha]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};zM={[Bs]:"ENVMAP_TYPE_CUBE",[_r]:"ENVMAP_TYPE_CUBE",[Wa]:"ENVMAP_TYPE_CUBE_UV"};HM={[_r]:"ENVMAP_MODE_REFRACTION"};WM={[Id]:"ENVMAP_BLENDING_MULTIPLY",[Ng]:"ENVMAP_BLENDING_MIX",[Ug]:"ENVMAP_BLENDING_ADD"};$M=0,df=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new ff(e),t.set(e,n)),n}},ff=class{constructor(e){this.id=$M++,this.code=e,this.usedTimes=0}};tT=0;rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,oT=`uniform sampler2D shadow_pass;
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
}`,aT=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],lT=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],S0=new tt,ja=new B,of=new B;hT={[Oc]:Bc,[kc]:Hc,[zc]:Gc,[or]:Vc,[Bc]:Oc,[Hc]:kc,[Gc]:zc,[Vc]:or};pT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mT=`
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

}`,pf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ei({vertexShader:pT,fragmentShader:mT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new fn(new Ca(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mf=class extends Ei{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",g=new pf,p={},y=t.getContextAttributes(),S=null,b=null,E=[],A=[],R=new Xe,I=null,v=new sn;v.viewport=new Ut;let M=new sn;M.viewport=new Ut;let C=[v,M],D=new Dc,N=null,P=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=E[q];return J===void 0&&(J=new mo,E[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=E[q];return J===void 0&&(J=new mo,E[q]=J),J.getGripSpace()},this.getHand=function(q){let J=E[q];return J===void 0&&(J=new mo,E[q]=J),J.getHandSpace()};function z(q){let J=A.indexOf(q.inputSource);if(J===-1)return;let he=E[J];he!==void 0&&(he.update(q.inputSource,q.frame,c||o),he.dispatchEvent({type:q.type,data:q.inputSource}))}function F(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",V);for(let q=0;q<E.length;q++){let J=A[q];J!==null&&(A[q]=null,E[q].disconnect(J))}N=null,P=null,g.reset();for(let q in p)delete p[q];e.setRenderTarget(S),f=null,d=null,u=null,s=null,b=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",F),s.addEventListener("inputsourceschange",V),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(R),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,Ue=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=y.stencil?ks:Gi,Ue=y.stencil?wo:Ii);let Ye={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new jn(d.textureWidth,d.textureHeight,{format:ti,type:Hn,depthTexture:new Us(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let he={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new jn(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Hn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),qe.setContext(s),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function V(q){for(let J=0;J<q.removed.length;J++){let he=q.removed[J],Ue=A.indexOf(he);Ue>=0&&(A[Ue]=null,E[Ue].disconnect(he))}for(let J=0;J<q.added.length;J++){let he=q.added[J],Ue=A.indexOf(he);if(Ue===-1){for(let Ye=0;Ye<E.length;Ye++)if(Ye>=A.length){A.push(he),Ue=Ye;break}else if(A[Ye]===null){A[Ye]=he,Ue=Ye;break}if(Ue===-1)break}let ye=E[Ue];ye&&ye.connect(he)}}let W=new B,H=new B;function Z(q,J,he){W.setFromMatrixPosition(J.matrixWorld),H.setFromMatrixPosition(he.matrixWorld);let Ue=W.distanceTo(H),ye=J.projectionMatrix.elements,Ye=he.projectionMatrix.elements,ut=ye[14]/(ye[10]-1),De=ye[14]/(ye[10]+1),Je=(ye[9]+1)/ye[5],rt=(ye[9]-1)/ye[5],Fe=(ye[8]-1)/ye[0],dt=(Ye[8]+1)/Ye[0],L=ut*Fe,mt=ut*dt,Ze=Ue/(-Fe+dt),ht=Ze*-Fe;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ht),q.translateZ(Ze),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ye[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let oe=ut+Ze,w=De+Ze,x=L-ht,O=mt+(Ue-ht),K=Je*De/w*oe,j=rt*De/w*oe;q.projectionMatrix.makePerspective(x,O,K,j,oe,w),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let J=q.near,he=q.far;g.texture!==null&&(g.depthNear>0&&(J=g.depthNear),g.depthFar>0&&(he=g.depthFar)),D.near=M.near=v.near=J,D.far=M.far=v.far=he,(N!==D.near||P!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),N=D.near,P=D.far),D.layers.mask=q.layers.mask|6,v.layers.mask=D.layers.mask&3,M.layers.mask=D.layers.mask&5;let Ue=q.parent,ye=D.cameras;te(D,Ue);for(let Ye=0;Ye<ye.length;Ye++)te(ye[Ye],Ue);ye.length===2?Z(D,v,M):D.projectionMatrix.copy(v.projectionMatrix),ge(q,D,Ue)};function ge(q,J,he){he===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(he.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=cr*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)},this.getCameraTexture=function(q){return p[q]};let _e=null;function He(q,J){if(h=J.getViewerPose(c||o),m=J,h!==null){let he=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ue=!1;he.length!==D.cameras.length&&(D.cameras.length=0,Ue=!0);for(let De=0;De<he.length;De++){let Je=he[De],rt=null;if(f!==null)rt=f.getViewport(Je);else{let dt=u.getViewSubImage(d,Je);rt=dt.viewport,De===0&&(e.setRenderTargetTextures(b,dt.colorTexture,dt.depthStencilTexture),e.setRenderTarget(b))}let Fe=C[De];Fe===void 0&&(Fe=new sn,Fe.layers.enable(De),Fe.viewport=new Ut,C[De]=Fe),Fe.matrix.fromArray(Je.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Je.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(rt.x,rt.y,rt.width,rt.height),De===0&&(D.matrix.copy(Fe.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Ue===!0&&D.cameras.push(Fe)}let ye=s.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){u=n.getBinding();let De=u.getDepthInformation(he[0]);De&&De.isValid&&De.texture&&g.init(De,s.renderState)}if(ye&&ye.includes("camera-access")&&_){e.state.unbindTexture(),u=n.getBinding();for(let De=0;De<he.length;De++){let Je=he[De].camera;if(Je){let rt=p[Je];rt||(rt=new Ra,p[Je]=rt);let Fe=u.getCameraImage(Je);rt.sourceTexture=Fe}}}}for(let he=0;he<E.length;he++){let Ue=A[he],ye=E[he];Ue!==null&&ye!==void 0&&ye.update(Ue,J,c||o)}_e&&_e(q,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let qe=new b0;qe.setAnimationLoop(He),this.setAnimationLoop=function(q){_e=q},this.dispose=function(){}}},Mr=new wi,gT=new tt;yT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Zi=null;Oh=class{constructor(e={}){let{canvas:t=$g(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Hn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let _=f,g=new Set([jc,Jc,Kc]),p=new Set([Hn,Ii,Eo,wo,Yc,$c]),y=new Uint32Array(4),S=new Int32Array(4),b=null,E=null,A=[],R=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ci,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let v=this,M=!1;this._outputColorSpace=Ht;let C=0,D=0,N=null,P=-1,z=null,F=new Ut,V=new Ut,W=null,H=new $e(0),Z=0,te=t.width,ge=t.height,_e=1,He=null,qe=null,q=new Ut(0,0,te,ge),J=new Ut(0,0,te,ge),he=!1,Ue=new yo,ye=!1,Ye=!1,ut=new tt,De=new B,Je=new Ut,rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function dt(){return N===null?_e:1}let L=n;function mt(T,k){return t.getContext(T,k)}try{let T={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Ke,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",gt,!1),L===null){let k="webgl2";if(L=mt(k,T),L===null)throw mt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw Ve("WebGLRenderer: "+T.message),T}let Ze,ht,oe,w,x,O,K,j,$,Ie,ae,Ee,Oe,re,ce,Me,ve,le,je,U,ne,ee,be,se;function Q(){Ze=new Ab(L),Ze.init(),ee=new fT(L,Ze),ht=new xb(L,Ze,e,ee),oe=new uT(L,Ze),ht.reversedDepthBuffer&&d&&oe.buffers.depth.setReversed(!0),w=new Ib(L),x=new KM,O=new dT(L,Ze,oe,x,ht,ee,w),K=new vb(v),j=new wb(v),$=new Ny(L),be=new gb(L,$),Ie=new Rb(L,$,w,be),ae=new Lb(L,Ie,$,w),je=new Pb(L,ht,O),Me=new yb(x),Ee=new ZM(v,K,j,Ze,ht,be,Me),Oe=new _T(v,x),re=new jM,ce=new sT(Ze),le=new mb(v,K,j,oe,ae,m,l),ve=new cT(v,ae,ht),se=new xT(L,w,ht,oe),U=new _b(L,Ze,w),ne=new Cb(L,Ze,w),w.programs=Ee.programs,v.capabilities=ht,v.extensions=Ze,v.properties=x,v.renderLists=re,v.shadowMap=ve,v.state=oe,v.info=w}Q(),_!==Hn&&(I=new Nb(_,t.width,t.height,s,r));let de=new mf(v,L);this.xr=de,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let T=Ze.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){let T=Ze.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(te,ge,!1))},this.getSize=function(T){return T.set(te,ge)},this.setSize=function(T,k,Y=!0){if(de.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ge=k,t.width=Math.floor(T*_e),t.height=Math.floor(k*_e),Y===!0&&(t.style.width=T+"px",t.style.height=k+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(te*_e,ge*_e).floor()},this.setDrawingBufferSize=function(T,k,Y){te=T,ge=k,_e=Y,t.width=Math.floor(T*Y),t.height=Math.floor(k*Y),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(_===Hn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(F)},this.getViewport=function(T){return T.copy(q)},this.setViewport=function(T,k,Y,X){T.isVector4?q.set(T.x,T.y,T.z,T.w):q.set(T,k,Y,X),oe.viewport(F.copy(q).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(J)},this.setScissor=function(T,k,Y,X){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,k,Y,X),oe.scissor(V.copy(J).multiplyScalar(_e).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(T){oe.setScissorTest(he=T)},this.setOpaqueSort=function(T){He=T},this.setTransparentSort=function(T){qe=T},this.getClearColor=function(T){return T.copy(le.getClearColor())},this.setClearColor=function(){le.setClearColor(...arguments)},this.getClearAlpha=function(){return le.getClearAlpha()},this.setClearAlpha=function(){le.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,Y=!0){let X=0;if(T){let G=!1;if(N!==null){let pe=N.texture.format;G=g.has(pe)}if(G){let pe=N.texture.type,Te=p.has(pe),xe=le.getClearColor(),we=le.getClearAlpha(),Le=xe.r,Ge=xe.g,Be=xe.b;Te?(y[0]=Le,y[1]=Ge,y[2]=Be,y[3]=we,L.clearBufferuiv(L.COLOR,0,y)):(S[0]=Le,S[1]=Ge,S[2]=Be,S[3]=we,L.clearBufferiv(L.COLOR,0,S))}else X|=L.COLOR_BUFFER_BIT}k&&(X|=L.DEPTH_BUFFER_BIT),Y&&(X|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ke,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",gt,!1),le.dispose(),re.dispose(),ce.dispose(),x.dispose(),K.dispose(),j.dispose(),ae.dispose(),be.dispose(),se.dispose(),Ee.dispose(),de.dispose(),de.removeEventListener("sessionstart",cp),de.removeEventListener("sessionend",hp),Gs.stop()};function Ke(T){T.preventDefault(),fa("WebGLRenderer: Context Lost."),M=!0}function Dt(){fa("WebGLRenderer: Context Restored."),M=!1;let T=w.autoReset,k=ve.enabled,Y=ve.autoUpdate,X=ve.needsUpdate,G=ve.type;Q(),w.autoReset=T,ve.enabled=k,ve.autoUpdate=Y,ve.needsUpdate=X,ve.type=G}function gt(T){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Pi(T){let k=T.target;k.removeEventListener("dispose",Pi),ji(k)}function ji(T){W_(T),x.remove(T)}function W_(T){let k=x.get(T).programs;k!==void 0&&(k.forEach(function(Y){Ee.releaseProgram(Y)}),T.isShaderMaterial&&Ee.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,Y,X,G,pe){k===null&&(k=rt);let Te=G.isMesh&&G.matrixWorld.determinant()<0,xe=q_(T,k,Y,X,G);oe.setMaterial(X,Te);let we=Y.index,Le=1;if(X.wireframe===!0){if(we=Ie.getWireframeAttribute(Y),we===void 0)return;Le=2}let Ge=Y.drawRange,Be=Y.attributes.position,at=Ge.start*Le,Mt=(Ge.start+Ge.count)*Le;pe!==null&&(at=Math.max(at,pe.start*Le),Mt=Math.min(Mt,(pe.start+pe.count)*Le)),we!==null?(at=Math.max(at,0),Mt=Math.min(Mt,we.count)):Be!=null&&(at=Math.max(at,0),Mt=Math.min(Mt,Be.count));let Bt=Mt-at;if(Bt<0||Bt===1/0)return;be.setup(G,X,xe,Y,we);let kt,Ct=U;if(we!==null&&(kt=$.get(we),Ct=ne,Ct.setIndex(kt)),G.isMesh)X.wireframe===!0?(oe.setLineWidth(X.wireframeLinewidth*dt()),Ct.setMode(L.LINES)):Ct.setMode(L.TRIANGLES);else if(G.isLine){let ke=X.linewidth;ke===void 0&&(ke=1),oe.setLineWidth(ke*dt()),G.isLineSegments?Ct.setMode(L.LINES):G.isLineLoop?Ct.setMode(L.LINE_LOOP):Ct.setMode(L.LINE_STRIP)}else G.isPoints?Ct.setMode(L.POINTS):G.isSprite&&Ct.setMode(L.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)uo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))Ct.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{let ke=G._multiDrawStarts,_t=G._multiDrawCounts,ft=G._multiDrawCount,Wn=we?$.get(we).bytesPerElement:1,Rr=x.get(X).currentProgram.getUniforms();for(let Xn=0;Xn<ft;Xn++)Rr.setValue(L,"_gl_DrawID",Xn),Ct.render(ke[Xn]/Wn,_t[Xn])}else if(G.isInstancedMesh)Ct.renderInstances(at,Bt,G.count);else if(Y.isInstancedBufferGeometry){let ke=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,_t=Math.min(Y.instanceCount,ke);Ct.renderInstances(at,Bt,_t)}else Ct.render(at,Bt)};function lp(T,k,Y){T.transparent===!0&&T.side===fi&&T.forceSinglePass===!1?(T.side=Rn,T.needsUpdate=!0,ol(T,k,Y),T.side=Jn,T.needsUpdate=!0,ol(T,k,Y),T.side=fi):ol(T,k,Y)}this.compile=function(T,k,Y=null){Y===null&&(Y=T),E=ce.get(Y),E.init(k),R.push(E),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),T!==Y&&T.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(E.pushLight(G),G.castShadow&&E.pushShadow(G))}),E.setupLights();let X=new Set;return T.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;let pe=G.material;if(pe)if(Array.isArray(pe))for(let Te=0;Te<pe.length;Te++){let xe=pe[Te];lp(xe,Y,G),X.add(xe)}else lp(pe,Y,G),X.add(pe)}),E=R.pop(),X},this.compileAsync=function(T,k,Y=null){let X=this.compile(T,k,Y);return new Promise(G=>{function pe(){if(X.forEach(function(Te){x.get(Te).currentProgram.isReady()&&X.delete(Te)}),X.size===0){G(T);return}setTimeout(pe,10)}Ze.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let eu=null;function X_(T){eu&&eu(T)}function cp(){Gs.stop()}function hp(){Gs.start()}let Gs=new b0;Gs.setAnimationLoop(X_),typeof self<"u"&&Gs.setContext(self),this.setAnimationLoop=function(T){eu=T,de.setAnimationLoop(T),T===null?Gs.stop():Gs.start()},de.addEventListener("sessionstart",cp),de.addEventListener("sessionend",hp),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;let Y=de.enabled===!0&&de.isPresenting===!0,X=I!==null&&(N===null||Y)&&I.begin(v,N);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),de.enabled===!0&&de.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(de.cameraAutoUpdate===!0&&de.updateCamera(k),k=de.getCamera()),T.isScene===!0&&T.onBeforeRender(v,T,k,N),E=ce.get(T,R.length),E.init(k),R.push(E),ut.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ue.setFromProjectionMatrix(ut,bi,k.reversedDepth),Ye=this.localClippingEnabled,ye=Me.init(this.clippingPlanes,Ye),b=re.get(T,A.length),b.init(),A.push(b),de.enabled===!0&&de.isPresenting===!0){let Te=v.xr.getDepthSensingMesh();Te!==null&&tu(Te,k,-1/0,v.sortObjects)}tu(T,k,0,v.sortObjects),b.finish(),v.sortObjects===!0&&b.sort(He,qe),Fe=de.enabled===!1||de.isPresenting===!1||de.hasDepthSensing()===!1,Fe&&le.addToRenderList(b,T),this.info.render.frame++,ye===!0&&Me.beginShadows();let G=E.state.shadowsArray;if(ve.render(G,T,k),ye===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&I.hasRenderPass())===!1){let Te=b.opaque,xe=b.transmissive;if(E.setupLights(),k.isArrayCamera){let we=k.cameras;if(xe.length>0)for(let Le=0,Ge=we.length;Le<Ge;Le++){let Be=we[Le];dp(Te,xe,T,Be)}Fe&&le.render(T);for(let Le=0,Ge=we.length;Le<Ge;Le++){let Be=we[Le];up(b,T,Be,Be.viewport)}}else xe.length>0&&dp(Te,xe,T,k),Fe&&le.render(T),up(b,T,k)}N!==null&&D===0&&(O.updateMultisampleRenderTarget(N),O.updateRenderTargetMipmap(N)),X&&I.end(v),T.isScene===!0&&T.onAfterRender(v,T,k),be.resetDefaultState(),P=-1,z=null,R.pop(),R.length>0?(E=R[R.length-1],ye===!0&&Me.setGlobalState(v.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?b=A[A.length-1]:b=null};function tu(T,k,Y,X){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)Y=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLight)E.pushLight(T),T.castShadow&&E.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ue.intersectsSprite(T)){X&&Je.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ut);let Te=ae.update(T),xe=T.material;xe.visible&&b.push(T,Te,xe,Y,Je.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ue.intersectsObject(T))){let Te=ae.update(T),xe=T.material;if(X&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Je.copy(T.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Je.copy(Te.boundingSphere.center)),Je.applyMatrix4(T.matrixWorld).applyMatrix4(ut)),Array.isArray(xe)){let we=Te.groups;for(let Le=0,Ge=we.length;Le<Ge;Le++){let Be=we[Le],at=xe[Be.materialIndex];at&&at.visible&&b.push(T,Te,at,Y,Je.z,Be)}}else xe.visible&&b.push(T,Te,xe,Y,Je.z,null)}}let pe=T.children;for(let Te=0,xe=pe.length;Te<xe;Te++)tu(pe[Te],k,Y,X)}function up(T,k,Y,X){let{opaque:G,transmissive:pe,transparent:Te}=T;E.setupLightsView(Y),ye===!0&&Me.setGlobalState(v.clippingPlanes,Y),X&&oe.viewport(F.copy(X)),G.length>0&&rl(G,k,Y),pe.length>0&&rl(pe,k,Y),Te.length>0&&rl(Te,k,Y),oe.buffers.depth.setTest(!0),oe.buffers.depth.setMask(!0),oe.buffers.color.setMask(!0),oe.setPolygonOffset(!1)}function dp(T,k,Y,X){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[X.id]===void 0){let at=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[X.id]=new jn(1,1,{generateMipmaps:!0,type:at?Cn:Hn,minFilter:pi,samples:ht.samples,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace})}let pe=E.state.transmissionRenderTarget[X.id],Te=X.viewport||F;pe.setSize(Te.z*v.transmissionResolutionScale,Te.w*v.transmissionResolutionScale);let xe=v.getRenderTarget(),we=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(pe),v.getClearColor(H),Z=v.getClearAlpha(),Z<1&&v.setClearColor(16777215,.5),v.clear(),Fe&&le.render(Y);let Ge=v.toneMapping;v.toneMapping=Ci;let Be=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),E.setupLightsView(X),ye===!0&&Me.setGlobalState(v.clippingPlanes,X),rl(T,Y,X),O.updateMultisampleRenderTarget(pe),O.updateRenderTargetMipmap(pe),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Mt=0,Bt=k.length;Mt<Bt;Mt++){let kt=k[Mt],{object:Ct,geometry:ke,material:_t,group:ft}=kt;if(_t.side===fi&&Ct.layers.test(X.layers)){let Wn=_t.side;_t.side=Rn,_t.needsUpdate=!0,fp(Ct,Y,X,ke,_t,ft),_t.side=Wn,_t.needsUpdate=!0,at=!0}}at===!0&&(O.updateMultisampleRenderTarget(pe),O.updateRenderTargetMipmap(pe))}v.setRenderTarget(xe,we,Le),v.setClearColor(H,Z),Be!==void 0&&(X.viewport=Be),v.toneMapping=Ge}function rl(T,k,Y){let X=k.isScene===!0?k.overrideMaterial:null;for(let G=0,pe=T.length;G<pe;G++){let Te=T[G],{object:xe,geometry:we,group:Le}=Te,Ge=Te.material;Ge.allowOverride===!0&&X!==null&&(Ge=X),xe.layers.test(Y.layers)&&fp(xe,k,Y,we,Ge,Le)}}function fp(T,k,Y,X,G,pe){T.onBeforeRender(v,k,Y,X,G,pe),T.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),G.onBeforeRender(v,k,Y,X,T,pe),G.transparent===!0&&G.side===fi&&G.forceSinglePass===!1?(G.side=Rn,G.needsUpdate=!0,v.renderBufferDirect(Y,k,X,G,T,pe),G.side=Jn,G.needsUpdate=!0,v.renderBufferDirect(Y,k,X,G,T,pe),G.side=fi):v.renderBufferDirect(Y,k,X,G,T,pe),T.onAfterRender(v,k,Y,X,G,pe)}function ol(T,k,Y){k.isScene!==!0&&(k=rt);let X=x.get(T),G=E.state.lights,pe=E.state.shadowsArray,Te=G.state.version,xe=Ee.getParameters(T,G.state,pe,k,Y),we=Ee.getProgramCacheKey(xe),Le=X.programs;X.environment=T.isMeshStandardMaterial?k.environment:null,X.fog=k.fog,X.envMap=(T.isMeshStandardMaterial?j:K).get(T.envMap||X.environment),X.envMapRotation=X.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Le===void 0&&(T.addEventListener("dispose",Pi),Le=new Map,X.programs=Le);let Ge=Le.get(we);if(Ge!==void 0){if(X.currentProgram===Ge&&X.lightsStateVersion===Te)return mp(T,xe),Ge}else xe.uniforms=Ee.getUniforms(T),T.onBeforeCompile(xe,v),Ge=Ee.acquireProgram(xe,we),Le.set(we,Ge),X.uniforms=xe.uniforms;let Be=X.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Be.clippingPlanes=Me.uniform),mp(T,xe),X.needsLights=$_(T),X.lightsStateVersion=Te,X.needsLights&&(Be.ambientLightColor.value=G.state.ambient,Be.lightProbe.value=G.state.probe,Be.directionalLights.value=G.state.directional,Be.directionalLightShadows.value=G.state.directionalShadow,Be.spotLights.value=G.state.spot,Be.spotLightShadows.value=G.state.spotShadow,Be.rectAreaLights.value=G.state.rectArea,Be.ltc_1.value=G.state.rectAreaLTC1,Be.ltc_2.value=G.state.rectAreaLTC2,Be.pointLights.value=G.state.point,Be.pointLightShadows.value=G.state.pointShadow,Be.hemisphereLights.value=G.state.hemi,Be.directionalShadowMap.value=G.state.directionalShadowMap,Be.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Be.spotShadowMap.value=G.state.spotShadowMap,Be.spotLightMatrix.value=G.state.spotLightMatrix,Be.spotLightMap.value=G.state.spotLightMap,Be.pointShadowMap.value=G.state.pointShadowMap,Be.pointShadowMatrix.value=G.state.pointShadowMatrix),X.currentProgram=Ge,X.uniformsList=null,Ge}function pp(T){if(T.uniformsList===null){let k=T.currentProgram.getUniforms();T.uniformsList=Co.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function mp(T,k){let Y=x.get(T);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function q_(T,k,Y,X,G){k.isScene!==!0&&(k=rt),O.resetTextureUnits();let pe=k.fog,Te=X.isMeshStandardMaterial?k.environment:null,xe=N===null?v.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Kt,we=(X.isMeshStandardMaterial?j:K).get(X.envMap||Te),Le=X.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Be=!!Y.morphAttributes.position,at=!!Y.morphAttributes.normal,Mt=!!Y.morphAttributes.color,Bt=Ci;X.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Bt=v.toneMapping);let kt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Ct=kt!==void 0?kt.length:0,ke=x.get(X),_t=E.state.lights;if(ye===!0&&(Ye===!0||T!==z)){let vn=T===z&&X.id===P;Me.setState(X,T,vn)}let ft=!1;X.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==_t.state.version||ke.outputColorSpace!==xe||G.isBatchedMesh&&ke.batching===!1||!G.isBatchedMesh&&ke.batching===!0||G.isBatchedMesh&&ke.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&ke.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&ke.instancing===!1||!G.isInstancedMesh&&ke.instancing===!0||G.isSkinnedMesh&&ke.skinning===!1||!G.isSkinnedMesh&&ke.skinning===!0||G.isInstancedMesh&&ke.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&ke.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&ke.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&ke.instancingMorph===!1&&G.morphTexture!==null||ke.envMap!==we||X.fog===!0&&ke.fog!==pe||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Me.numPlanes||ke.numIntersection!==Me.numIntersection)||ke.vertexAlphas!==Le||ke.vertexTangents!==Ge||ke.morphTargets!==Be||ke.morphNormals!==at||ke.morphColors!==Mt||ke.toneMapping!==Bt||ke.morphTargetsCount!==Ct)&&(ft=!0):(ft=!0,ke.__version=X.version);let Wn=ke.currentProgram;ft===!0&&(Wn=ol(X,k,G));let Rr=!1,Xn=!1,Uo=!1,Nt=Wn.getUniforms(),In=ke.uniforms;if(oe.useProgram(Wn.program)&&(Rr=!0,Xn=!0,Uo=!0),X.id!==P&&(P=X.id,Xn=!0),Rr||z!==T){oe.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Nt.setValue(L,"projectionMatrix",T.projectionMatrix),Nt.setValue(L,"viewMatrix",T.matrixWorldInverse);let Pn=Nt.map.cameraPosition;Pn!==void 0&&Pn.setValue(L,De.setFromMatrixPosition(T.matrixWorld)),ht.logarithmicDepthBuffer&&Nt.setValue(L,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Nt.setValue(L,"isOrthographic",T.isOrthographicCamera===!0),z!==T&&(z=T,Xn=!0,Uo=!0)}if(ke.needsLights&&(_t.state.directionalShadowMap.length>0&&Nt.setValue(L,"directionalShadowMap",_t.state.directionalShadowMap,O),_t.state.spotShadowMap.length>0&&Nt.setValue(L,"spotShadowMap",_t.state.spotShadowMap,O),_t.state.pointShadowMap.length>0&&Nt.setValue(L,"pointShadowMap",_t.state.pointShadowMap,O)),G.isSkinnedMesh){Nt.setOptional(L,G,"bindMatrix"),Nt.setOptional(L,G,"bindMatrixInverse");let vn=G.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Nt.setValue(L,"boneTexture",vn.boneTexture,O))}G.isBatchedMesh&&(Nt.setOptional(L,G,"batchingTexture"),Nt.setValue(L,"batchingTexture",G._matricesTexture,O),Nt.setOptional(L,G,"batchingIdTexture"),Nt.setValue(L,"batchingIdTexture",G._indirectTexture,O),Nt.setOptional(L,G,"batchingColorTexture"),G._colorsTexture!==null&&Nt.setValue(L,"batchingColorTexture",G._colorsTexture,O));let ni=Y.morphAttributes;if((ni.position!==void 0||ni.normal!==void 0||ni.color!==void 0)&&je.update(G,Y,Wn),(Xn||ke.receiveShadow!==G.receiveShadow)&&(ke.receiveShadow=G.receiveShadow,Nt.setValue(L,"receiveShadow",G.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=we,In.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&k.environment!==null&&(In.envMapIntensity.value=k.environmentIntensity),In.dfgLUT!==void 0&&(In.dfgLUT.value=vT()),Xn&&(Nt.setValue(L,"toneMappingExposure",v.toneMappingExposure),ke.needsLights&&Y_(In,Uo),pe&&X.fog===!0&&Oe.refreshFogUniforms(In,pe),Oe.refreshMaterialUniforms(In,X,_e,ge,E.state.transmissionRenderTarget[T.id]),Co.upload(L,pp(ke),In,O)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Co.upload(L,pp(ke),In,O),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Nt.setValue(L,"center",G.center),Nt.setValue(L,"modelViewMatrix",G.modelViewMatrix),Nt.setValue(L,"normalMatrix",G.normalMatrix),Nt.setValue(L,"modelMatrix",G.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let vn=X.uniformsGroups;for(let Pn=0,nu=vn.length;Pn<nu;Pn++){let Ws=vn[Pn];se.update(Ws,Wn),se.bind(Ws,Wn)}}return Wn}function Y_(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function $_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(T,k,Y){let X=x.get(T);X.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),x.get(T.texture).__webglTexture=k,x.get(T.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:Y,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){let Y=x.get(T);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};let Z_=L.createFramebuffer();this.setRenderTarget=function(T,k=0,Y=0){N=T,C=k,D=Y;let X=null,G=!1,pe=!1;if(T){let xe=x.get(T);if(xe.__useDefaultFramebuffer!==void 0){oe.bindFramebuffer(L.FRAMEBUFFER,xe.__webglFramebuffer),F.copy(T.viewport),V.copy(T.scissor),W=T.scissorTest,oe.viewport(F),oe.scissor(V),oe.setScissorTest(W),P=-1;return}else if(xe.__webglFramebuffer===void 0)O.setupRenderTarget(T);else if(xe.__hasExternalTextures)O.rebindTextures(T,x.get(T.texture).__webglTexture,x.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){let Ge=T.depthTexture;if(xe.__boundDepthTexture!==Ge){if(Ge!==null&&x.has(Ge)&&(T.width!==Ge.image.width||T.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");O.setupDepthRenderbuffer(T)}}let we=T.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(pe=!0);let Le=x.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Le[k])?X=Le[k][Y]:X=Le[k],G=!0):T.samples>0&&O.useMultisampledRTT(T)===!1?X=x.get(T).__webglMultisampledFramebuffer:Array.isArray(Le)?X=Le[Y]:X=Le,F.copy(T.viewport),V.copy(T.scissor),W=T.scissorTest}else F.copy(q).multiplyScalar(_e).floor(),V.copy(J).multiplyScalar(_e).floor(),W=he;if(Y!==0&&(X=Z_),oe.bindFramebuffer(L.FRAMEBUFFER,X)&&oe.drawBuffers(T,X),oe.viewport(F),oe.scissor(V),oe.setScissorTest(W),G){let xe=x.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+k,xe.__webglTexture,Y)}else if(pe){let xe=k;for(let we=0;we<T.textures.length;we++){let Le=x.get(T.textures[we]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+we,Le.__webglTexture,Y,xe)}}else if(T!==null&&Y!==0){let xe=x.get(T.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,xe.__webglTexture,Y)}P=-1},this.readRenderTargetPixels=function(T,k,Y,X,G,pe,Te,xe=0){if(!(T&&T.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let we=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we){oe.bindFramebuffer(L.FRAMEBUFFER,we);try{let Le=T.textures[xe],Ge=Le.format,Be=Le.type;if(!ht.textureFormatReadable(Ge)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(Be)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-X&&Y>=0&&Y<=T.height-G&&(T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),L.readPixels(k,Y,X,G,ee.convert(Ge),ee.convert(Be),pe))}finally{let Le=N!==null?x.get(N).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(T,k,Y,X,G,pe,Te,xe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let we=x.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Te!==void 0&&(we=we[Te]),we)if(k>=0&&k<=T.width-X&&Y>=0&&Y<=T.height-G){oe.bindFramebuffer(L.FRAMEBUFFER,we);let Le=T.textures[xe],Ge=Le.format,Be=Le.type;if(!ht.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,at),L.bufferData(L.PIXEL_PACK_BUFFER,pe.byteLength,L.STREAM_READ),T.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+xe),L.readPixels(k,Y,X,G,ee.convert(Ge),ee.convert(Be),0);let Mt=N!==null?x.get(N).__webglFramebuffer:null;oe.bindFramebuffer(L.FRAMEBUFFER,Mt);let Bt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Zg(L,Bt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,at),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,pe),L.deleteBuffer(at),L.deleteSync(Bt),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,Y=0){let X=Math.pow(2,-Y),G=Math.floor(T.image.width*X),pe=Math.floor(T.image.height*X),Te=k!==null?k.x:0,xe=k!==null?k.y:0;O.setTexture2D(T,0),L.copyTexSubImage2D(L.TEXTURE_2D,Y,0,0,Te,xe,G,pe),oe.unbindTexture()};let K_=L.createFramebuffer(),J_=L.createFramebuffer();this.copyTextureToTexture=function(T,k,Y=null,X=null,G=0,pe=null){pe===null&&(G!==0?(uo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=G,G=0):pe=0);let Te,xe,we,Le,Ge,Be,at,Mt,Bt,kt=T.isCompressedTexture?T.mipmaps[pe]:T.image;if(Y!==null)Te=Y.max.x-Y.min.x,xe=Y.max.y-Y.min.y,we=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Ge=Y.min.y,Be=Y.isBox3?Y.min.z:0;else{let ni=Math.pow(2,-G);Te=Math.floor(kt.width*ni),xe=Math.floor(kt.height*ni),T.isDataArrayTexture?we=kt.depth:T.isData3DTexture?we=Math.floor(kt.depth*ni):we=1,Le=0,Ge=0,Be=0}X!==null?(at=X.x,Mt=X.y,Bt=X.z):(at=0,Mt=0,Bt=0);let Ct=ee.convert(k.format),ke=ee.convert(k.type),_t;k.isData3DTexture?(O.setTexture3D(k,0),_t=L.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(O.setTexture2DArray(k,0),_t=L.TEXTURE_2D_ARRAY):(O.setTexture2D(k,0),_t=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,k.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,k.unpackAlignment);let ft=L.getParameter(L.UNPACK_ROW_LENGTH),Wn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Rr=L.getParameter(L.UNPACK_SKIP_PIXELS),Xn=L.getParameter(L.UNPACK_SKIP_ROWS),Uo=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,kt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,kt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Le),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ge),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Be);let Nt=T.isDataArrayTexture||T.isData3DTexture,In=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){let ni=x.get(T),vn=x.get(k),Pn=x.get(ni.__renderTarget),nu=x.get(vn.__renderTarget);oe.bindFramebuffer(L.READ_FRAMEBUFFER,Pn.__webglFramebuffer),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,nu.__webglFramebuffer);for(let Ws=0;Ws<we;Ws++)Nt&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(T).__webglTexture,G,Be+Ws),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,x.get(k).__webglTexture,pe,Bt+Ws)),L.blitFramebuffer(Le,Ge,Te,xe,at,Mt,Te,xe,L.DEPTH_BUFFER_BIT,L.NEAREST);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(G!==0||T.isRenderTargetTexture||x.has(T)){let ni=x.get(T),vn=x.get(k);oe.bindFramebuffer(L.READ_FRAMEBUFFER,K_),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,J_);for(let Pn=0;Pn<we;Pn++)Nt?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ni.__webglTexture,G,Be+Pn):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ni.__webglTexture,G),In?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,vn.__webglTexture,pe,Bt+Pn):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,vn.__webglTexture,pe),G!==0?L.blitFramebuffer(Le,Ge,Te,xe,at,Mt,Te,xe,L.COLOR_BUFFER_BIT,L.NEAREST):In?L.copyTexSubImage3D(_t,pe,at,Mt,Bt+Pn,Le,Ge,Te,xe):L.copyTexSubImage2D(_t,pe,at,Mt,Le,Ge,Te,xe);oe.bindFramebuffer(L.READ_FRAMEBUFFER,null),oe.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else In?T.isDataTexture||T.isData3DTexture?L.texSubImage3D(_t,pe,at,Mt,Bt,Te,xe,we,Ct,ke,kt.data):k.isCompressedArrayTexture?L.compressedTexSubImage3D(_t,pe,at,Mt,Bt,Te,xe,we,Ct,kt.data):L.texSubImage3D(_t,pe,at,Mt,Bt,Te,xe,we,Ct,ke,kt):T.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,pe,at,Mt,Te,xe,Ct,ke,kt.data):T.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,pe,at,Mt,kt.width,kt.height,Ct,kt.data):L.texSubImage2D(L.TEXTURE_2D,pe,at,Mt,Te,xe,Ct,ke,kt);L.pixelStorei(L.UNPACK_ROW_LENGTH,ft),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Wn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Rr),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Uo),pe===0&&k.generateMipmaps&&L.generateMipmap(_t),oe.unbindTexture()},this.initRenderTarget=function(T){x.get(T).__webglFramebuffer===void 0&&O.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?O.setTextureCube(T,0):T.isData3DTexture?O.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?O.setTexture2DArray(T,0):O.setTexture2D(T,0),oe.unbindTexture()},this.resetState=function(){C=0,D=0,N=null,oe.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=lt._getUnpackColorSpace()}}});function bT(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function MT(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function TT(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(I0),this.state=Rt.NONE;break;case 1:let e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function ET(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Fs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Rt.DOLLY;break;case Fs.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}break;case Fs.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Rt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Rt.PAN}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(_f)}function wT(i){switch(this.state){case Rt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Rt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Rt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function AT(i){this.enabled===!1||this.enableZoom===!1||this.state!==Rt.NONE||(i.preventDefault(),this.dispatchEvent(_f),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(I0))}function RT(i){this.enabled!==!1&&this._handleKeyDown(i)}function CT(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Rt.TOUCH_ROTATE;break;case Os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Rt.TOUCH_PAN;break;default:this.state=Rt.NONE}break;case 2:switch(this.touches.TWO){case Os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Rt.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Rt.TOUCH_DOLLY_ROTATE;break;default:this.state=Rt.NONE}break;default:this.state=Rt.NONE}this.state!==Rt.NONE&&this.dispatchEvent(_f)}function IT(i){switch(this._trackPointer(i),this.state){case Rt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Rt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Rt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Rt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Rt.NONE}}function PT(i){this.enabled!==!1&&i.preventDefault()}function LT(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function DT(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var R0,_f,I0,zh,C0,ST,Qt,Gn,Rt,gf,Vh,P0=Ae(()=>{Er();R0={type:"change"},_f={type:"start"},I0={type:"end"},zh=new fs,C0=new di,ST=Math.cos(70*Ka.DEG2RAD),Qt=new B,Gn=2*Math.PI,Rt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},gf=1e-6,Vh=class extends Va{constructor(e,t=null){super(e,t),this.state=Rt.NONE,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Fs.ROTATE,MIDDLE:Fs.DOLLY,RIGHT:Fs.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new rn,this._lastTargetPosition=new B,this._quat=new rn().setFromUnitVectors(e.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new bo,this._sphericalDelta=new bo,this._scale=1,this._panOffset=new B,this._rotateStart=new Xe,this._rotateEnd=new Xe,this._rotateDelta=new Xe,this._panStart=new Xe,this._panEnd=new Xe,this._panDelta=new Xe,this._dollyStart=new Xe,this._dollyEnd=new Xe,this._dollyDelta=new Xe,this._dollyDirection=new B,this._mouse=new Xe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=MT.bind(this),this._onPointerDown=bT.bind(this),this._onPointerUp=TT.bind(this),this._onContextMenu=PT.bind(this),this._onMouseWheel=AT.bind(this),this._onKeyDown=RT.bind(this),this._onTouchStart=CT.bind(this),this._onTouchMove=IT.bind(this),this._onMouseDown=ET.bind(this),this._onMouseMove=wT.bind(this),this._interceptControlDown=LT.bind(this),this._interceptControlUp=DT.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(R0),this.update(),this.state=Rt.NONE}update(e=null){let t=this.object.position;Qt.copy(t).sub(this.target),Qt.applyQuaternion(this._quat),this._spherical.setFromVector3(Qt),this.autoRotate&&this.state===Rt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Gn:n>Math.PI&&(n-=Gn),s<-Math.PI?s+=Gn:s>Math.PI&&(s-=Gn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(Qt.setFromSpherical(this._spherical),Qt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Qt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=Qt.length();o=this._clampDistance(a*this._scale);let l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){let a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;let c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Qt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(zh.origin.copy(this.object.position),zh.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(zh.direction))<ST?this.object.lookAt(this.target):(C0.setFromNormalAndCoplanarPoint(this.object.up,this.target),zh.intersectPlane(C0,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>gf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>gf||this._lastTargetPosition.distanceToSquared(this.target)>gf?(this.dispatchEvent(R0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Gn/60*this.autoRotateSpeed*e:Gn/60/60*this.autoRotateSpeed}_getZoomScale(e){let t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Qt.setFromMatrixColumn(t,0),Qt.multiplyScalar(-e),this._panOffset.add(Qt)}_panUp(e,t){this.screenSpacePanning===!0?Qt.setFromMatrixColumn(t,1):(Qt.setFromMatrixColumn(t,0),Qt.crossVectors(this.object.up,Qt)),Qt.multiplyScalar(e),this._panOffset.add(Qt)}_pan(e,t){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Qt.copy(s).sub(this.target);let r=Qt.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*r/n.clientHeight,this.object.matrix),this._panUp(2*t*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=e-n.left,r=t-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Gn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(n,s)}}_handleTouchStartDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{let n=this._getSecondPointerPosition(e),s=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let t=this.domElement;this._rotateLeft(Gn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Gn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{let t=this._getSecondPointerPosition(e),n=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){let t=this._getSecondPointerPosition(e),n=e.pageX-t.x,s=e.pageY-t.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(e.pageX+t.x)*.5,a=(e.pageY+t.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Xe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){let t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}});function xf(i,e){if(e===Wd)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Ao||e===Za){let t=i.getIndex();if(t===null){let o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Ao)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}var L0=Ae(()=>{Er()});function NT(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function OT(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new dr({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Jn})),i.DefaultMaterial}function wr(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Ji(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function BT(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){let u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){let u=e[c];if(n){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){let h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function kT(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function zT(i){let e,t=i.extensions&&i.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Sf(t.attributes):e=i.indices+":"+Sf(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Sf(i.targets[n]);return e}function Sf(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function qf(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function VT(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function GT(i,e,t){let n=e.attributes,s=new Qn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new B(l[0],l[1],l[2]),new B(c[0],c[1],c[2])),a.normalized){let h=qf(Lo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new B,l=new B;for(let c=0,h=r.length;c<h;c++){let u=r[c];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=qf(Lo[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;let o=new Bn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function F0(i,e,t){let n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(let o in n){let a=Xf[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){let o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return lt.workingColorSpace!==Kt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${lt.workingColorSpace}" not supported.`),Ji(i,e),GT(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?BT(i,e.targets,t):i})}var Hh,ct,bf,Mf,Tf,Ef,wf,Af,Rf,Cf,If,Pf,Lf,Df,Nf,Uf,Ff,Of,Bf,kf,O0,el,D0,zf,Vf,Hf,Gf,Gh,UT,Wf,mi,Lo,N0,U0,yf,Xf,Vs,FT,vf,HT,Yf,B0=Ae(()=>{Er();L0();Hh=class extends Ri{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Ef(t)}),this.register(function(t){return new wf(t)}),this.register(function(t){return new Uf(t)}),this.register(function(t){return new Ff(t)}),this.register(function(t){return new Of(t)}),this.register(function(t){return new Rf(t)}),this.register(function(t){return new Cf(t)}),this.register(function(t){return new If(t)}),this.register(function(t){return new Pf(t)}),this.register(function(t){return new Tf(t)}),this.register(function(t){return new Lf(t)}),this.register(function(t){return new Af(t)}),this.register(function(t){return new Nf(t)}),this.register(function(t){return new Df(t)}),this.register(function(t){return new bf(t)}),this.register(function(t){return new Bf(t)}),this.register(function(t){return new kf(t)})}load(e,t,n,s){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let c=_s.extractUrlBase(e);o=_s.resolveURL(c,this.path)}else o=_s.extractUrlBase(e);this.manager.itemStart(e);let a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new pr(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===O0){try{o[ct.KHR_BINARY_GLTF]=new zf(e)}catch(u){s&&s(u);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let c=new Yf(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ct.KHR_MATERIALS_UNLIT:o[u]=new Mf;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[u]=new Vf(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[u]=new Hf;break;case ct.KHR_MESH_QUANTIZATION:o[u]=new Gf;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bf=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],c,h=new $e(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],Kt);let u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fa(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Ua(h),c.distance=u;break;case"spot":c=new gr(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),Ji(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}},Mf=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Ai}extendParams(e,t,n){let s=[];e.color=new $e(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Kt),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Ht))}return Promise.all(s)}},Tf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},Ef=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Xe(a,a)}return Promise.all(r)}},wf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_DISPERSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}},Af=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Rf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new $e(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Kt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ht)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},Cf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},If=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new $e().setRGB(a[0],a[1],a[2],Kt),Promise.all(r)}},Pf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},Lf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new $e().setRGB(a[0],a[1],a[2],Kt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ht)),Promise.all(r)}},Df=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},Nf=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:zn}extendMaterialParams(e,t){let n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();let r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},Uf=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},Ff=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Of=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=s.images[o.source],l=n.textureLoader;if(a.uri){let c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return n.loadTextureImage(e,o.source,l)}},Bf=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){let f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},kf=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let c of s.primitives)if(c.mode!==mi.TRIANGLES&&c.mode!==mi.TRIANGLE_STRIP&&c.mode!==mi.TRIANGLE_FAN&&c.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],l={};for(let c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{let h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(let m of u){let _=new tt,g=new B,p=new rn,y=new B(1,1,1),S=new Ta(m.geometry,m.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&g.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,b),l.SCALE&&y.fromBufferAttribute(l.SCALE,b),S.setMatrixAt(b,_.compose(g,p,y));for(let b in l)if(b==="_COLOR_0"){let E=l[b];S.instanceColor=new Ns(E.array,E.itemSize,E.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&m.geometry.setAttribute(b,l[b]);Ot.prototype.copy.call(S,m),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},O0="glTF",el=12,D0={JSON:1313821514,BIN:5130562},zf=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,el),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==O0)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-el,r=new DataView(e,el),o=0;for(;o<s;){let a=r.getUint32(o,!0);o+=4;let l=r.getUint32(o,!0);if(o+=4,l===D0.JSON){let c=new Uint8Array(e,el+o,a);this.content=n.decode(c)}else if(l===D0.BIN){let c=el+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Vf=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(let h in o){let u=Xf[h]||h.toLowerCase();a[u]=o[h]}for(let h in e.attributes){let u=Xf[h]||h.toLowerCase();if(o[h]!==void 0){let d=n.accessors[e.attributes[h]],f=Lo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let m in f.attributes){let _=f.attributes[m],g=l[m];g!==void 0&&(_.normalized=g)}u(f)},a,c,Kt,d)})})}},Hf=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Gf=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},Gh=class extends ps{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,_=m-c,g=-2*f+3*d,p=f-d,y=1-g,S=p-d+u;for(let b=0;b!==a;b++){let E=o[_+b+a],A=o[_+b+l]*h,R=o[m+b+a],I=o[m+b]*h;r[b]=y*E+S*A+g*R+p*I}return r}},UT=new rn,Wf=class extends Gh{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return UT.fromArray(r).normalize().toArray(r),r}},mi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Lo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},N0={9728:Gt,9729:Lt,9984:Xc,9985:To,9986:yr,9987:pi},U0={33071:On,33648:lo,10497:Ls},yf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Xf={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Vs={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},FT={CUBICSPLINE:void 0,LINEAR:lr,STEP:ar},vf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};HT=new tt,Yf=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new NT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){let a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;let l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Da(this.options.manager):this.textureLoader=new Ba(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new pr(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return wr(r,a,s),Ji(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(let l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(o,a)=>{let l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(let[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,o){n.load(_s.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let o=yf[s.type],a=Lo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Yt(c,o,l))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],l=yf[s.type],c=Lo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,g;if(f&&f!==u){let p=Math.floor(d/f),y="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,S=t.cache.get(y);S||(_=new c(a,p*f,s.count*f/h),S=new go(_,f/h),t.cache.add(y,S)),g=new _o(S,l,d%f/h,m)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),g=new Yt(_,l,m);if(s.sparse!==void 0){let p=yf.SCALAR,y=Lo[s.sparse.indices.componentType],S=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,E=new y(o[1],S,s.sparse.count*p),A=new c(o[2],b,s.sparse.count*l);a!==null&&(g=new Yt(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let R=0,I=E.length;R<I;R++){let v=E[R];if(g.setX(v,A[R*l]),l>=2&&g.setY(v,A[R*l+1]),l>=3&&g.setZ(v,A[R*l+2]),l>=4&&g.setW(v,A[R*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];let c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);let d=(r.samplers||{})[o.sampler]||{};return h.magFilter=N0[d.magFilter]||Lt,h.minFilter=N0[d.minFilter]||pi,h.wrapS=U0[d.wrapS]||Ls,h.wrapT=U0[d.wrapT]||Ls,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Gt&&h.minFilter!==Lt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let o=s.images[e],a=self.URL||self.webkitURL,l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;let d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let g=new on(_);g.needsUpdate=!0,d(g)}),t.load(_s.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Ji(u,o),u.userData.mimeType=o.mimeType||VT(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let l=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new So,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,l=this.cache.get(a);l||(l=new vo,kn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return dr}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],o,a={},l=r.extensions||{},c=[];if(l[ct.KHR_MATERIALS_UNLIT]){let u=s[ct.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{let u=r.pbrMetallicRoughness||{};if(a.color=new $e(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Kt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Ht)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=fi);let h=r.alphaMode||vf.OPAQUE;if(h===vf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===vf.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Ai&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Xe(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==Ai&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Ai){let u=r.emissiveFactor;a.emissive=new $e().setRGB(u[0],u[1],u[2],Kt)}return r.emissiveTexture!==void 0&&o!==Ai&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ht)),Promise.all(c).then(function(){let u=new o(a);return r.name&&(u.name=r.name),Ji(u,r),t.associations.set(u,{materials:e}),r.extensions&&wr(s,u,r),u})}createUniqueName(e){let t=At.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return F0(l,a,t)})}let o=[];for(let a=0,l=e.length;a<l;a++){let c=e[a],h=zT(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=F0(new An,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){let h=o[l].material===void 0?OT(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){let c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){let _=h[f],g=o[f],p,y=c[f];if(g.mode===mi.TRIANGLES||g.mode===mi.TRIANGLE_STRIP||g.mode===mi.TRIANGLE_FAN||g.mode===void 0)p=r.isSkinnedMesh===!0?new ba(_,y):new fn(_,y),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),g.mode===mi.TRIANGLE_STRIP?p.geometry=xf(p.geometry,Za):g.mode===mi.TRIANGLE_FAN&&(p.geometry=xf(p.geometry,Ao));else if(g.mode===mi.LINES)p=new Ea(_,y);else if(g.mode===mi.LINE_STRIP)p=new ur(_,y);else if(g.mode===mi.LINE_LOOP)p=new wa(_,y);else if(g.mode===mi.POINTS)p=new Aa(_,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&kT(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Ji(p,r),g.extensions&&wr(s,p,g),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&wr(s,u[0],r),u[0];let d=new Mi;r.extensions&&wr(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new sn(Ka.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Yi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Ji(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){let u=o[c];if(u){a.push(u);let d=new tt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ma(a,l)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],m=s.samplers[f.sampler],_=f.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,y=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(o.push(this.getDependency("node",g)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",y)),c.push(m),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],m=u[2],_=u[3],g=u[4],p=[];for(let S=0,b=d.length;S<b;S++){let E=d[S],A=f[S],R=m[S],I=_[S],v=g[S];if(E===void 0)continue;E.updateMatrix&&E.updateMatrix();let M=n._createAnimationTracks(E,A,R,I,v);if(M)for(let C=0;C<M.length;C++)p.push(M[C])}let y=new fr(r,void 0,p);return Ji(y,s),y})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));let l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){let h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,HT)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new xo:c.length>1?h=new Mi:c.length===1?h=c[0]:h=new Ot,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Ji(h,r),r.extensions&&wr(n,h,r),r.matrix!==void 0){let u=new tt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Mi;n.name&&(r.name=s.createUniqueName(n.name)),Ji(r,n),n.extensions&&wr(t,r,n);let o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);let c=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof kn||d instanceof on)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){let o=[],a=e.name?e.name:e.uuid,l=[];Vs[r.path]===Vs.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Vs[r.path]){case Vs.weights:c=Wi;break;case Vs.rotation:c=Xi;break;case Vs.translation:case Vs.scale:c=qi;break;default:n.itemSize===1?c=Wi:c=qi;break}let h=s.interpolation!==void 0?FT[s.interpolation]:lr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){let m=new c(l[d]+"."+Vs[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=qf(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof Xi?Wf:Gh;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});var Wh,k0=Ae(()=>{Er();Wh=class extends La{constructor(e){super(e),this.type=Cn}parse(e){let o=function(I,v){switch(I){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(v||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(v||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(v||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(v||""))}},u=function(I,v,M){v=v||1024;let D=I.pos,N=-1,P=0,z="",F=String.fromCharCode.apply(null,new Uint16Array(I.subarray(D,D+128)));for(;0>(N=F.indexOf(`
`))&&P<v&&D<I.byteLength;)z+=F,P+=F.length,D+=128,F+=String.fromCharCode.apply(null,new Uint16Array(I.subarray(D,D+128)));return-1<N?(M!==!1&&(I.pos+=P+N+1),z+F.slice(0,N)):!1},d=function(I){let v=/^#\?(\S+)/,M=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,C=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,N=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,P={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},z,F;for((I.pos>=I.byteLength||!(z=u(I)))&&o(1,"no header found"),(F=z.match(v))||o(3,"bad initial token"),P.valid|=1,P.programtype=F[1],P.string+=z+`
`;z=u(I),z!==!1;){if(P.string+=z+`
`,z.charAt(0)==="#"){P.comments+=z+`
`;continue}if((F=z.match(M))&&(P.gamma=parseFloat(F[1])),(F=z.match(C))&&(P.exposure=parseFloat(F[1])),(F=z.match(D))&&(P.valid|=2,P.format=F[1]),(F=z.match(N))&&(P.valid|=4,P.height=parseInt(F[1],10),P.width=parseInt(F[2],10)),P.valid&2&&P.valid&4)break}return P.valid&2||o(3,"missing format specifier"),P.valid&4||o(3,"missing image size specifier"),P},f=function(I,v,M){let C=v;if(C<8||C>32767||I[0]!==2||I[1]!==2||I[2]&128)return new Uint8Array(I);C!==(I[2]<<8|I[3])&&o(3,"wrong scanline width");let D=new Uint8Array(4*v*M);D.length||o(4,"unable to allocate buffer space");let N=0,P=0,z=4*C,F=new Uint8Array(4),V=new Uint8Array(z),W=M;for(;W>0&&P<I.byteLength;){P+4>I.byteLength&&o(1),F[0]=I[P++],F[1]=I[P++],F[2]=I[P++],F[3]=I[P++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=C)&&o(3,"bad rgbe scanline format");let H=0,Z;for(;H<z&&P<I.byteLength;){Z=I[P++];let ge=Z>128;if(ge&&(Z-=128),(Z===0||H+Z>z)&&o(3,"bad scanline data"),ge){let _e=I[P++];for(let He=0;He<Z;He++)V[H++]=_e}else V.set(I.subarray(P,P+Z),H),H+=Z,P+=Z}let te=C;for(let ge=0;ge<te;ge++){let _e=0;D[N]=V[ge+_e],_e+=C,D[N+1]=V[ge+_e],_e+=C,D[N+2]=V[ge+_e],_e+=C,D[N+3]=V[ge+_e],N+=4}W--}return D},m=function(I,v,M,C){let D=I[v+3],N=Math.pow(2,D-128)/255;M[C+0]=I[v+0]*N,M[C+1]=I[v+1]*N,M[C+2]=I[v+2]*N,M[C+3]=1},_=function(I,v,M,C){let D=I[v+3],N=Math.pow(2,D-128)/255;M[C+0]=Ds.toHalfFloat(Math.min(I[v+0]*N,65504)),M[C+1]=Ds.toHalfFloat(Math.min(I[v+1]*N,65504)),M[C+2]=Ds.toHalfFloat(Math.min(I[v+2]*N,65504)),M[C+3]=Ds.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let p=d(g),y=p.width,S=p.height,b=f(g.subarray(g.pos),y,S),E,A,R;switch(this.type){case pn:R=b.length/4;let I=new Float32Array(R*4);for(let M=0;M<R;M++)m(b,M*4,I,M*4);E=I,A=pn;break;case Cn:R=b.length/4;let v=new Uint16Array(R*4);for(let M=0;M<R;M++)_(b,M*4,v,M*4);E=v,A=Cn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:y,height:S,data:E,header:p.string,gamma:p.gamma,exposure:p.exposure,type:A}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case pn:case Cn:o.colorSpace=Kt,o.minFilter=Lt,o.magFilter=Lt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}});function z0(i){let{scene:e,color:t,strength:n,position:s,delayIntensity:r,noShadow:o}=i,a=new gr(t,r?0:n);return a.position.copy(s),a.lookAt(0,0,-1),e.add(a.target),a.angle=Math.PI/4,a.penumbra=.7,a.distance=30,o||(a.castShadow=!0,a.shadow.mapSize.set(5200,5200),a.shadow.camera.near=.5,a.shadow.camera.far=50,a.shadow.normalBias=.02,a.shadow.camera.fov=60),r&&setTimeout(()=>{a.intensity=n},5e3),a}var V0=Ae(()=>{"use strict";Er()});var G0={};al(G0,{animateModel:()=>Kf,playAnimationModel:()=>$h,stopAnimationModel:()=>Yh});function Yh(){Zf.stop(),cancelAnimationFrame(H0),qh=!1}function $h(){qh||(Zf.start(),$f?.(),qh=!0)}function Kf(){tl?.classList.add("show"),WT.observe(tl)}var H0,Xh,qh,$f,tl,Zf,XT,WT,Zh=Ae(()=>{"use strict";Er();P0();B0();k0();Cr();V0();H0=null,Xh=null,qh=!1,$f=null,tl=document.querySelector(".canvas-wrapper"),Zf=new ka;if(Xs){let l=function(){for(let m of Object.keys(e)){let{x:_,y:g,z:p,strength:y,target:S,noShadow:b}=e[m],E=z0({scene:n,color:16777215,strength:y,position:new B(_,g,p),delayIntensity:!!S,noShadow:b});n.add(E),S&&E.target.position.copy(S)}};XT=l;let i=Qi?new B(-1.5,0,1.5):new B(0,0,-0),e={1:{x:-.8,y:20,z:15,strength:2400},2:{x:20,y:20,z:-6,strength:2400},3:{x:-20,y:8,z:-6,strength:2500}},t=[],n=new Sa,s=tl.clientWidth,r=tl.clientHeight,o=new Yi(-s/2,s/2,r/2,-r/2,-1e3,1e3),a=new Oh({antialias:!0,alpha:!0});a.setClearColor(0,0),a.setClearAlpha(0),a.setSize(s,r),a.shadowMap.enabled=!0,a.shadowMap.type=Fc,a.toneMapping=Ga,a.outputColorSpace=Ht,a.toneMappingExposure=1,tl.appendChild(a.domElement);let c=new Hh,h;c.load("/den/home2.glb",m=>{h=m.scene,n.background=null,n.add(h),Xh=new za(m.scene),m.animations.forEach(_=>{let g=Xh.clipAction(_);g.setLoop(Ph),g.clampWhenFinished=!0,g.play(),t.push(g)}),m.scene.traverse(_=>{_.isMesh&&(_.material.mapping=xr,_.castShadow=!0,_.receiveShadow=!0,_.material.side=Jn)}),l()},void 0,m=>console.error("\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438:",m));let u=new Vh(o,a.domElement);u.enableDamping=!0,u.minDistance=5,u.maxDistance=5,u.minPolarAngle=Math.PI/8,u.maxPolarAngle=Math.PI/2.4,u.target.copy(i),u.enablePan=!1,u.enableZoom=!1,u.minAzimuthAngle=Math.PI/4,u.maxAzimuthAngle=Math.PI/1.6,window.addEventListener("resize",()=>{o.aspect=window.innerWidth/window.innerHeight,o.updateProjectionMatrix(),a.setSize(s,r)}),new Wh().load("/den/sky.hdr",m=>{m.mapping=xr;let _=new Io(a),g=_.fromEquirectangular(m).texture;n.environment=g,_.dispose(),n.background=null});let f=new Oa(16777215,.7);n.add(f),o.position.set(5,5,5),o.zoom=55,o.updateProjectionMatrix(),o.lookAt(i),$f=()=>{H0=requestAnimationFrame($f),u.update(),qh&&Xh&&Xh.update(Zf.getDelta()),a.render(n,o)}}WT=new IntersectionObserver(i=>{i.forEach(e=>{e.isIntersecting?$h():Yh()})},{threshold:.1})});var q0={};al(q0,{isMobile:()=>Kh,startIntro:()=>$T});function $T(i){let e=Mn({defaults:{ease:Zo(.1,.7,.5,1)},autoplay:!1,onComplete(){document.body.classList.add("intro-complete"),i&&Kf()}});e.label("start").add("[data-ai='0']",{translateY:[YT,0],opacity:[0,1],duration:400,delay:St(40)}).add(qT,{y:[-Jf,0],opacity:[0,1],duration:600,delay:St(10)},"start").add("h1Box p",{y:[X0,0],opacity:[0,1],duration:300},"start").add(Kh?[]:["header [data-ai='1']","header [data-ai='1.1']"],{translateY:[-nl,0],opacity:[0,1],duration:1e3,delay:St(40)},"start").add("[data-ai='3']",{y:[nl,0],opacity:[0,1],duration:1e3,delay:St(100)},"start").add("[data-ai='2']",{y:[-nl,0],opacity:[0,1],delay:St(100)},"start").add("[data-ai='4']",{y:[-nl,0],opacity:[0,1],delay:St(100)},"start").add("#header-button",{y:[Jf,0],opacity:[0,1]},"start"),W0?(W0?.classList.add("closed"),dn(".loader",{opacity:[1,0],onComplete(){e.play()}})):e.play()}var Kh,W0,qT,X0,Jf,nl,YT,jf=Ae(()=>{"use strict";_i();Zh();Kh=window.matchMedia("(max-width: 768px)").matches,W0=document.querySelector(".loader"),{chars:qT}=Vi(".h1Box h1",{chars:!0}),X0=5,Jf=X0*2,nl=Jf*2,YT=nl*2});var aE={};var Jh,ZT,KT,JT,jT,QT,eE,Do,Y0,tE,$0,Z0,nE,K0,iE,sE,rE,Qf,oE,J0=Ae(()=>{"use strict";_i();Jh=[...document.querySelectorAll(".adv-img")],ZT=document.querySelector(".adv-text-box [data-our] .adv-text-inner"),KT=[...document.querySelectorAll(".adv-decor p")],JT=[...document.querySelectorAll(".adv-decor")],jT=document.querySelector(".adv-right-progress"),QT=document.querySelector(".adv-right-line"),eE=[...document.querySelectorAll(".adv-decor p")],Do=[...ZT.querySelectorAll("p")],Y0=[...document.querySelectorAll(".adv-right-progress p")],tE=document.querySelector(".adv-text-left .adv-text-inner");jT.style.height=Jh[0].clientHeight+"px";$0=-1,Z0=3e3,nE={p:0},K0=Mn({duration:Z0,autoplay:li({target:".adv-wrapper",sync:!0,enter:"top",leave:"bottom"})}),iE=KT.reduce((i,e)=>[...i,i[i.length-1]-e.clientWidth],[0]).slice(0,-1).map((i,e)=>({to:`${i}px`,ease:"outExpo"})),sE=i=>{let e=Math.floor(i*Do.length);e>Do.length-1||Do.forEach((t,n)=>{n<=e?(Y0[n].classList.add("active"),Jh[n].classList.add("active")):(Y0[n].classList.remove("active"),Jh[n].classList.remove("active")),dn(JT,{translateX:iE[e],ease:"linear"}),eE[n].classList.toggle("active",n===e),tE.classList.toggle(`active-${n}`,n===e),Do[n].classList.toggle("active",n===e),t.classList.toggle("active",n===e)})},rE=i=>{let e=Math.floor(i*Do.length);e!==$0&&($0=e,sE(e/Do.length))},Qf=dn(QT,{height:[0,Jh[0].clientHeight-76],ease:"linear",duration:2300,autoplay:!1}),oE=dn(nE,{p:1});K0.onRender=i=>{Qf.seek(i.progress/(Qf.duration/Z0)*Qf.duration),rE(i.progress)};K0.sync(oE,0)});var uE={};var lE,ep,cE,tp,j0,np,hE,Q0=Ae(()=>{"use strict";_i();Cr();lE=document.querySelector(".navs-wrapper"),ep=[...document.querySelectorAll('nav [data-ai="1"]')],cE=document.querySelector("nav")||"",tp=document.querySelector(".header-contacts"),j0=document.querySelector(".hamb"),np=!1;if(Qi){let r=function(o){o.target.id!=="catalog-btn"&&(lE?.classList.toggle("opened"),document.body.classList.toggle("menu-opened"),np?(t.reverse(),n.reverse(),s.reverse()):(t.play(),n.play(),s.play()),np=!np)};hE=r;let{chars:i}=Vi(".hamb-open",{chars:!0}),{chars:e}=Vi(".hamb-close",{chars:!0});[...ep,...tp.querySelectorAll("a")].forEach(o=>o.removeAttribute("data-ai"));let t=Mn({autoplay:!1,defaults:{duration:300}}).label("close",0).label("open",100).add(i,{translateY:[0,-12],easing:"inOutCirc",delay:St(60)},"open").add(e,{translateY:[0,-12],easing:"inOutCirc",delay:St(60)},"close"),n=Mn({autoplay:!1,defaults:{duration:500}}).add(cE,{translateX:[40,0],opacity:[0,1],easing:"easeOutQuad"}).add(ep,{translateY:[St("-10",{from:"first"}),0],opacity:[0,1],scale:[.8,1],easing:"easeOutQuad",duration:300,delay:St([0,150],{from:"first",ease:"inInOut(3)"})},"-=200"),s=Mn({autoplay:!1,defaults:{duration:500}}).add(tp,{translateX:[-40,0],opacity:[0,1],easing:"easeOutQuad"}).add(tp.querySelectorAll("a"),{translateY:[St("-10"),0],opacity:[0,1],scale:[.8,1],duration:300,easing:"easeOutQuad",delay:St(40)});ep.forEach(o=>o.addEventListener("click",r)),j0&&j0.addEventListener("click",r)}});var _E={};function i_(i,e){i.preventDefault(),e==="close"?rp.reverse():(Yh(),t_.classList.add("opened"),rp.play())}function e_(i,e){let t=document.createElement("div");t.className=e.className,i.append(t);let n=new IntersectionObserver(([s])=>{i.classList.toggle(e.className.replace("-trigger",""),s.isIntersecting===e.isIntersectingAction)},{root:i,threshold:0,rootMargin:e.rootMargin});return n.observe(t),n}var dE,fE,t_,pE,ip,sp,n_,rp,mE,gE,s_=Ae(()=>{"use strict";_i();Zh();Cr();dE=document.querySelector("#catalog-close-btn"),fE=document.querySelector("#catalog-btn"),t_=document.querySelector("#catalog-wrapper"),pE=document.querySelector("#catalog-inner"),ip=document.querySelectorAll("[data-catalog-bottom]"),sp=500,n_=Qi?"translateX":"translateY",rp=Mn({autoplay:!1,defaults:{ease:"outExpo"},onComplete(i){i.reversed&&(t_.classList.remove("opened"),$h())}}),mE=qr.animate(pE,{[n_]:[50,0],opacity:[0,1],duration:sp}),gE=qr.animate(ip,{[n_]:[Qi?30:60,0],opacity:[0,1],duration:sp,delay:St((sp-300)/ip.length)});rp.sync(mE,0).sync(gE,"-=300");dE?.addEventListener("click",i=>i_(i,"close"));fE?.addEventListener("click",i=>i_(i,"open"));ip.forEach(i=>{let e=i.querySelector(".catalog-sub-wrapper");e.scrollHeight>e.clientHeight&&(e.classList.add("has-scroll"),e_(e,{className:"scroll-end-trigger",isIntersectingAction:!1,rootMargin:"0px 0px -100% 0px"}),e_(e,{className:"scroll-top-trigger",isIntersectingAction:!0,rootMargin:"-100% 0px 0px 0px"}))})});function l_(i,e,t){return Math.max(i,Math.min(e,t))}function xE(i,e,t){return(1-t)*i+t*e}function yE(i,e,t,n){return xE(i,e,1-Math.exp(-t*n))}function vE(i,e){return(i%e+e)%e}function bE(i,e){let t;return function(...n){clearTimeout(t),t=setTimeout(()=>{t=void 0,i.apply(this,n)},e)}}function o_(i,e){return i===1?TE:i===2?e:1}var r_,SE,ME,c_,TE,Hs,EE,a_,h_,u_=Ae(()=>{r_="1.3.18";SE=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(i){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=i;let t=l_(0,this.currentTime/this.duration,1);e=t>=1;let n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=yE(this.value,this.to,this.lerp*60,i),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(i,e,{lerp:t,duration:n,easing:s,onStart:r,onUpdate:o}){this.from=this.value=i,this.to=e,this.lerp=t,this.duration=n,this.easing=s,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};ME=class{constructor(i,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=i,this.content=e,t&&(this.debouncedResize=bE(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},c_=class{events={};emit(i,...e){let t=this.events[i]||[];for(let n=0,s=t.length;n<s;n++)t[n]?.(...e)}on(i,e){return this.events[i]?this.events[i].push(e):this.events[i]=[e],()=>{this.events[i]=this.events[i]?.filter(t=>e!==t)}}off(i,e){this.events[i]=this.events[i]?.filter(t=>e!==t)}destroy(){this.events={}}},TE=100/6,Hs={passive:!1};EE=class{constructor(i,e={wheelMultiplier:1,touchMultiplier:1}){this.element=i,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Hs),this.element.addEventListener("touchstart",this.onTouchStart,Hs),this.element.addEventListener("touchmove",this.onTouchMove,Hs),this.element.addEventListener("touchend",this.onTouchEnd,Hs)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new c_;on(i,e){return this.emitter.on(i,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Hs),this.element.removeEventListener("touchstart",this.onTouchStart,Hs),this.element.removeEventListener("touchmove",this.onTouchMove,Hs),this.element.removeEventListener("touchend",this.onTouchEnd,Hs)}onTouchStart=i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:i})};onTouchMove=i=>{let{clientX:e,clientY:t}=i.targetTouches?i.targetTouches[0]:i,n=-(e-this.touchStart.x)*this.options.touchMultiplier,s=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:s},this.emitter.emit("scroll",{deltaX:n,deltaY:s,event:i})};onTouchEnd=i=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:i})};onWheel=i=>{let{deltaX:e,deltaY:t,deltaMode:n}=i,s=o_(n,this.window.width),r=o_(n,this.window.height);e*=s,t*=r,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:i})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},a_=i=>Math.min(1,1.001-2**(-10*i)),h_=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;_rafId=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new SE;emitter=new c_;dimensions;virtualScroll;constructor({wrapper:i=window,content:e=document.documentElement,eventsTarget:t=i,smoothWheel:n=!0,syncTouch:s=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:u="vertical",gestureOrientation:d=u==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:m=1,autoResize:_=!0,prevent:g,virtualScroll:p,overscroll:y=!0,autoRaf:S=!1,anchors:b=!1,autoToggle:E=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:R=!1,naiveDimensions:I=R,stopInertiaOnNavigate:v=!1}={}){window.lenisVersion=r_,window.lenis||(window.lenis={}),window.lenis.version=r_,u==="horizontal"&&(window.lenis.horizontal=!0),(!i||i===document.documentElement)&&(i=window),typeof a=="number"&&typeof l!="function"?l=a_:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:i,content:e,eventsTarget:t,smoothWheel:n,syncTouch:s,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:d,orientation:u,touchMultiplier:f,wheelMultiplier:m,autoResize:_,prevent:g,virtualScroll:p,overscroll:y,autoRaf:S,anchors:b,autoToggle:E,allowNestedScroll:A,naiveDimensions:I,stopInertiaOnNavigate:v},this.dimensions=new ME(i,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new EE(t,{touchMultiplier:f,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(i,e){return this.emitter.on(i,e)}off(i,e){return this.emitter.off(i,e)}onScrollEnd=i=>{i instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&i.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};get overflow(){let i=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[i]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}onTransitionEnd=i=>{i.propertyName.includes("overflow")&&this.checkOverflow()};setScroll(i){this.isHorizontal?this.options.wrapper.scrollTo({left:i,behavior:"instant"}):this.options.wrapper.scrollTo({top:i,behavior:"instant"})}onClick=i=>{let t=i.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href"));if(this.options.anchors){let n=t.find(s=>s.getAttribute("href")?.includes("#"));if(n){let s=n.getAttribute("href");if(s){let r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,o=`#${s.split("#")[1]}`;this.scrollTo(o,r)}}}this.options.stopInertiaOnNavigate&&t.find(s=>s.host===window.location.host)&&this.reset()};onPointerDown=i=>{i.button===1&&this.reset()};onVirtualScroll=i=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(i)===!1)return;let{deltaX:e,deltaY:t,event:n}=i;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let s=n.type.includes("touch"),r=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=e===0&&t===0;if(this.options.syncTouch&&s&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent,u=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(c.find(p=>p instanceof HTMLElement&&(typeof h=="function"&&h?.(p)||p.hasAttribute?.("data-lenis-prevent")||u==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||u==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||s&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&s||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let f=t;this.options.gestureOrientation==="both"?f=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(f=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let m=s&&this.options.syncTouch,g=s&&n.type==="touchend";g&&(f=Math.sign(this.velocity)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+f,{programmatic:!1,...m?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let i=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-i,this.direction=Math.sign(this.animatedScroll-i),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=i=>{let e=i-(this.time||i);this.time=i,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))};scrollTo(i,{offset:e=0,immediate:t=!1,lock:n=!1,programmatic:s=!0,lerp:r=s?this.options.lerp:void 0,duration:o=s?this.options.duration:void 0,easing:a=s?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:u}={}){if((this.isStopped||this.isLocked)&&!h)return;let d=i,f=e;if(typeof d=="string"&&["top","left","start","#"].includes(d))d=0;else if(typeof d=="string"&&["bottom","right","end"].includes(d))d=this.limit;else{let m=null;if(typeof d=="string"?(m=document.querySelector(d),m||(d==="#top"?d=0:console.warn("Lenis: Target not found",d))):d instanceof HTMLElement&&d?.nodeType&&(m=d),m){if(this.options.wrapper!==window){let g=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?g.left:g.top}let _=m.getBoundingClientRect();d=(this.isHorizontal?_.left:_.top)+this.animatedScroll}}if(typeof d=="number"){if(d+=f,d=Math.round(d),this.options.infinite){if(s){this.targetScroll=this.animatedScroll=this.scroll;let m=d-this.animatedScroll;m>this.limit/2?d-=this.limit:m<-this.limit/2&&(d+=this.limit)}}else d=l_(0,d,this.limit);if(d===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=u??{},t){this.animatedScroll=this.targetScroll=d,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}s||(this.targetScroll=d),typeof o=="number"&&typeof a!="function"?a=a_:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,d,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(m,_)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=m-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=m,this.setScroll(this.scroll),s&&(this.targetScroll=m),_||this.emit(),_&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(i,{deltaX:e,deltaY:t}){let n=Date.now();i._lenis||(i._lenis={});let s=i._lenis,r,o,a,l,c,h,u,d,f,m;if(n-(s.time??0)>2e3){s.time=Date.now();let R=window.getComputedStyle(i);if(s.computedStyle=R,r=["auto","overlay","scroll"].includes(R.overflowX),o=["auto","overlay","scroll"].includes(R.overflowY),c=["auto"].includes(R.overscrollBehaviorX),h=["auto"].includes(R.overscrollBehaviorY),s.hasOverflowX=r,s.hasOverflowY=o,!(r||o))return!1;u=i.scrollWidth,d=i.scrollHeight,f=i.clientWidth,m=i.clientHeight,a=u>f,l=d>m,s.isScrollableX=a,s.isScrollableY=l,s.scrollWidth=u,s.scrollHeight=d,s.clientWidth=f,s.clientHeight=m,s.hasOverscrollBehaviorX=c,s.hasOverscrollBehaviorY=h}else a=s.isScrollableX,l=s.isScrollableY,r=s.hasOverflowX,o=s.hasOverflowY,u=s.scrollWidth,d=s.scrollHeight,f=s.clientWidth,m=s.clientHeight,c=s.hasOverscrollBehaviorX,h=s.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let _=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical",g,p,y,S,b,E;if(_==="horizontal")g=Math.round(i.scrollLeft),p=u-f,y=e,S=r,b=a,E=c;else if(_==="vertical")g=Math.round(i.scrollTop),p=d-m,y=t,S=o,b=l,E=h;else return!1;return!E&&(g>=p||g<=0)?!0:(y>0?g<p:g>0)&&S&&b}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let i=this.options.wrapper;return this.isHorizontal?i.scrollX??i.scrollLeft:i.scrollY??i.scrollTop}get scroll(){return this.options.infinite?vE(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(i){this._isScrolling!==i&&(this._isScrolling=i,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(i){this._isStopped!==i&&(this._isStopped=i,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(i){this._isLocked!==i&&(this._isLocked=i,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let i="lenis";return this.options.autoToggle&&(i+=" lenis-autoToggle"),this.isStopped&&(i+=" lenis-stopped"),this.isLocked&&(i+=" lenis-locked"),this.isScrolling&&(i+=" lenis-scrolling"),this.isScrolling==="smooth"&&(i+=" lenis-smooth"),i}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}}});var d_=Ae(()=>{});var PE={};function f_(i){let{chars:e}=Vi(i,{chars:!0});return{el:i,chars:e}}var op,wE,AE,RE,CE,IE,p_=Ae(()=>{"use strict";_i();u_();d_();Cr();window.len=new h_({autoRaf:!0,autoResize:!0});op=Qi?{enter:"end",leave:"start"}:{enter:"80% 20%",leave:"20% 80%"};wE=document.querySelector("footer .wrapper"),AE=[...document.querySelectorAll("[data-typing]")].map(f_),RE=[...document.querySelectorAll("[data-animate-container]")],CE=[...document.querySelectorAll("[data-from-top]")].map(f_),IE=[...document.querySelectorAll("[data-zoom]")];AE.forEach(({el:i,chars:e})=>{let t=i.closest("[data-animate-container]"),s=(t?t.dataset.isSticky!==void 0:!1)?{enter:"end",leave:"start"}:op;dn(e,{y:[14,0],opacity:[0,1],duration:600,delay:St(10,{start:200}),easing:"inSine",autoplay:li({target:i.closest("[data-animate-container]"),...s})})});RE.forEach(i=>{let e=i.dataset.isSticky!==void 0,t=i.dataset.animateInvert!==void 0,n=[...i.querySelectorAll("[data-from-bottom]")],s=50;dn(n,{y:[14,0],opacity:[0,1],duration:600,delay:St(-s,{start:s*n.length,from:t?"firts":"last"}),easing:"inSine",autoplay:li({target:e?i:void 0})})});CE.forEach(i=>dn(i,{y:[-14,0],opacity:[0,1],duration:600,easing:"inSine",autoplay:li(op)}));IE.forEach(i=>dn(i,{scale:[1.2,1],duration:1400,ease:Zo(.163,.11,.304,.992),autoplay:li(op)}));dn("#header",{alternate:!0,"--alpha":[0,1],autoplay:li({container:".scroll-container",enter:"top+=100 top+=100",leave:"top bottom+=100",sync:.5}),easing:"linear"});dn(wE,{y:[-100,0],ease:"linear",autoplay:li({enter:"bottom top",leave:"bottom bottom+=100",sync:.8})})});var FE={};function UE(i){let e=i.querySelector(".modal-wrapper"),{chars:t}=Vi(i.querySelector("[data-modal-title]"),{chars:!0});return Mn({autoplay:!1,defaults:{ease:"outSine"},onComplete:n=>{n.reversed&&i&&i.classList.remove("opened")}}).add(i,{"--alpha":[0,.2],duration:600}).add(e,{opacity:[0,1],y:[40,0],duration:400},0).label("modal p").add(t,{opacity:[0,1],y:[-10,0],duration:St("-20",{start:600}),delay:St(10),autoplay:!1},"modal p").add([...i.querySelectorAll("[data-modal-anim='1']")],{opacity:[0,1],y:[14,0],duration:500,delay:St("+100")},"-=400").add([...i.querySelectorAll("[data-modal-anim='2']")],{opacity:[0,1],y:[-14,0],duration:500,delay:St("+100")},"modal p")}function v_(i){isNaN(i)||(g_?.classList.toggle("disabled",i===0),__?.classList.toggle("disabled",i===y_-1))}function ap(){if(!ys||!No)return;let i=new Image;i.src=ys.src;let{width:e,height:t}=i,n=e/t,s=window.innerWidth/window.innerHeight;if(n>s){let r=window.innerWidth-m_;No.style.width=r+"px",No.style.height=r/n+"px",ys.style.width=r+"px",ys.style.height=r/n+"px"}else{let r=window.innerHeight-m_;No.style.height=r+"px",No.style.width=r*n+"px",ys.style.height=r+"px",ys.style.width=r*n+"px"}}function S_(i){Ar===0&&i<0||Ar===y_-1&&i>0||(Ar+=i,ys.src=x_+Ar+".png",ap(),v_(Ar))}var LE,DE,NE,il,m_,g_,__,Ar,x_,ys,No,y_,b_=Ae(()=>{"use strict";_i();jf();LE=[...document.querySelectorAll("[data-modal]")],DE=[...document.querySelectorAll("[data-modal-close]")],NE=[...document.querySelectorAll("[data-modal-name]")],il={};NE.forEach(i=>{let e=i.dataset.modalName,t=document.querySelector(`[data-modal-name=${e}]`);il[e]={timeline:UE(t),modal:t}});m_=Kh?46:120,g_=document.querySelector("[data-photo-prev]"),__=document.querySelector("[data-photo-next]"),Ar=0,x_="",ys=null,No=null,y_=[...document.querySelectorAll('[data-modal="photos"]')].length;g_?.addEventListener("click",()=>S_(-1));__?.addEventListener("click",()=>S_(1));window.addEventListener("resize",ap);LE.forEach(i=>{i.addEventListener("click",e=>{e.preventDefault();let t=i.dataset.modal,{timeline:n,modal:s}=il[t];if(t==="photos"){ys=s.querySelector("img"),No=s.querySelector(".modal-wrapper");let{src:r=""}=i.dataset;ys.src=r;let o=parseInt(r.match(/\d+/)[0]);x_=r.match(/^.*?(?=\d+)/)?.[0]||"",Ar=o,v_(Ar),ap()}s.classList.add("opened"),n.speed=1,n.play()})});DE.forEach(i=>{i.addEventListener("click",e=>{e.preventDefault();let t=i.dataset.modalClose,{timeline:n}=il[t];n.speed=2,n.reverse()})});Object.keys(il).forEach(i=>{let{timeline:e,modal:t}=il[i];t.addEventListener("click",async n=>{n.target===t&&(e.speed=2,e.reverse())})})});var OE,BE,M_,T_=Ae(()=>{"use strict";_i();OE={easeInOut:"cubic-bezier(0.422,0,0.552,1)",easeIn:"cubic-bezier(0, 0.515,0.552,1)",easeOut:"cubic-bezier(0.585, 0.002,1,0.467)",linear:"linear"},BE={gap:0,items:1,duration:.3,widthAuto:!1,ease:OE.easeInOut,perPage:1,media:{}},M_=(i,e={},t=[])=>{let n,s={currentIdx:0,disabledPrev:!1,disabledNext:!1,changeCount:1,draggable:Xr};if(typeof i=="string"?n=document.querySelector(i):i instanceof HTMLElement&&(n=i),!n)throw new Error("Target element not found");let r=n.querySelector(".slider-track");if(!r)throw new Error("Track element not found");let o=[...r.querySelectorAll(":scope >  .slide")],a=Object.fromEntries(Object.entries(e).filter(([y,S])=>S!==void 0)),l={...BE,...a};l.duration=l.duration*1e3;function c(){Object.keys(l.media).forEach(y=>{window.matchMedia(`(width<=${y}px)`).matches&&(l.items=l.media[y].items||l.items||l.items,s.changeCount=Number(l.media[y].changeCount)||s.changeCount)}),!l.widthAuto&&n&&(n.style.setProperty("--items",l.items.toString()),n.style.minWidth="0px"),n?.style.setProperty("--gap",`${l.gap}px`)}if(c(),!o.length)throw new Error("No slides found");let h={changed:[]},u=(y,...S)=>{h[y]?.forEach(b=>b(...S))};function d(y,S){p.dom.next?.classList.toggle("disabled",y>=S),p.dom.prev?.classList.toggle("disabled",y===0)}let f=o.map(y=>y.clientWidth),m=f.reduce((y,S)=>y+S,0);function _(){let y=[0];for(let S=0;S<f.length-l.items;S++){let b=y[S]-f[S];y.push(b)}r.style.transitionTimingFunction=l.ease,r.style.transitionDuration=`${l.duration}ms`,s.draggable=Lu(r,{x:{snap:y},dragThreshold:{touch:20,mouse:40},y:!1,onSnap(S){let b=y.findIndex(E=>E===S.snapped[0]);s.currentIdx=b},onGrab(){r.style.transitionTimingFunction="auto",r.style.transitionDuration="0ms"},onRelease(){d(s.currentIdx,p.info.totalLength),u("changed",s.currentIdx),p.dependSlider&&p.dependSlider.checkChangeDependSlider(s.currentIdx)},onSettle(){r.style.transitionTimingFunction=l.ease,r.style.transitionDuration=`${l.duration}ms`}})}function g(){f=o.map(y=>y.clientWidth),m=f.reduce((y,S)=>y+S,0),_(),c()}_(),window.addEventListener("resize",g);let p={id:crypto.randomUUID(),dom:{container:n,slides:o,track:r,prev:void 0,next:void 0},info:{disableNext:s.disabledNext,disablePrev:s.disabledPrev,currentIdx:s.currentIdx,slidesLength:o.length,totalWidth:m,totalLength:o.length-l.items},options:l,on:(y,S)=>{h[y]&&h[y].push(S)},engine:y=>{r.style.transitionTimingFunction=l.ease,r.style.transitionDuration=`${l.duration}ms`,s.draggable.setX(s.draggable.snapX[y]),u("changed",y)},goPrev:()=>{p.goTo(Math.max(0,s.currentIdx-s.changeCount))},goNext:()=>{p.goTo(Math.min(p.info.totalLength,s.currentIdx+s.changeCount))},goTo:y=>{let S=p.info.totalLength;if(!(y>=S+s.changeCount||y===-s.changeCount))return p.engine(y),s.currentIdx=y,y},checkChangeDependSlider:y=>{y>=p.options.items?p.goNext():p.goPrev()}};return t.length>0&&t.forEach(y=>{y(p)}),p}});var E_,w_=Ae(()=>{"use strict";E_=(i,e)=>{let{arrowsWrapper:t,selector:n}=e,s=i.dom.container.querySelector(t)||document.querySelector(t);if(!s)return;let[r,o]=[...s.querySelectorAll(n)];i.options.items>i.info.slidesLength&&(r.classList.add("hidden"),o.classList.add("hidden")),r.addEventListener("click",()=>i.goPrev()),o.addEventListener("click",()=>i.goNext()),r.classList.add("disabled"),i.dom.prev=r,i.dom.next=o}});var A_,R_=Ae(()=>{"use strict";A_=(i,e)=>{let{dotsWrapper:t,parentIdentifier:n,selector:s}=e,r;if(n?r=i.dom.container.closest(n):r=i.dom.container.querySelector(t),!r)throw new Error("Parent element for dots not found");let o=[...r.querySelectorAll(s||"button")].filter(a=>a.offsetParent!==null);o.forEach((a,l)=>{a.addEventListener("click",c=>{c.preventDefault(),i.goTo(l)})}),i.on("changed",a=>{o.forEach(l=>l.classList.remove("active")),o[a]?.classList.add("active")})}});var C_,I_,P_=Ae(()=>{"use strict";_i();C_=i=>{let{dom:e,options:{duration:t,ease:n}}=i,{track:s,slides:r}=e,o=r[0].clientHeight;s.style.height=`${o}px`,s.style.transform="none",r.forEach((a,l)=>{a.style.transition=`opacity ${t}ms ${n}`,a.style.position="absolute",a.style.inset="0",a.style.opacity=l===0?"1":"0"}),i.engine=a=>{r.forEach((l,c)=>{l.style.opacity=c===a?"1":"0",l.style.zIndex=c===a?"1":"0"})}},I_=i=>{let{slides:e,track:t}=i.dom;t.style.transition="none",qr.animate(t,{x:-i.info.totalWidth,duration:i.options.duration,autoplay:!0,ease:"linear",loop:!0}),e.forEach(n=>t.appendChild(n.cloneNode(!0))),i.engine=()=>{}}});var L_,D_=Ae(()=>{"use strict";T_();w_();R_();P_();L_={generateArrows:E_,generateDots:A_,slider:M_,fadePlugin:C_,infinityScroll:I_}});var GE={};function N_(i){let{duration:e,dots:t,dotSelector:n,arrows:s,widthAuto:r,gap:o=0,perPage:a=1,mobilePerPage:l,changeCount:c=1}=i.dataset,h=O_(i,{items:Number(a),gap:Number(o),widthAuto:r,duration:e?Number(e):void 0,media:{480:{items:Number(l),changeCount:c}}});return s&&U_(h,{arrowsWrapper:s,selector:"button"}),t!==void 0&&F_(h,{dotsWrapper:t,parentIdentifier:".card",selector:n||"button"}),h}var kE,U_,F_,zE,O_,VE,HE,B_=Ae(()=>{"use strict";D_();({fadePlugin:kE,generateArrows:U_,generateDots:F_,infinityScroll:zE,slider:O_}=L_),VE=[...document.querySelectorAll("[data-slider]")],HE=[...document.querySelectorAll("[data-combined-slider]")];for(let i of HE){let e=i.querySelector("[data-combined-slider-outer]"),t=N_(e),n=i.querySelector("[data-combined-slider-inner]");console.log({innerSlider:n}),n&&(t.dependSlider=N_(n))}for(let i of VE){let{duration:e,infinity:t,fade:n,dots:s,dotSelector:r,arrows:o,widthAuto:a,gap:l=0,perPage:c=1,mobilePerPage:h,changeCount:u=1}=i.dataset,d=[];t!==void 0&&d.push(zE),n!==void 0&&d.push(kE);let f=O_(i,{items:Number(c),gap:Number(l),widthAuto:a,duration:e?Number(e):void 0,media:{480:{items:Number(h),changeCount:u}}},d);o&&U_(f,{arrowsWrapper:o,selector:"button"}),s!==void 0&&F_(f,{dotsWrapper:s,parentIdentifier:".card",selector:r||"button"})}});var WE={};var sl,jh,k_=Ae(()=>{"use strict";sl=[...document.querySelectorAll(".main-variants .btn")],jh=[...document.querySelectorAll(".main-variants .main-variants-img")];sl.forEach((i,e)=>{i.addEventListener("click",t=>{if(t.preventDefault(),e){sl[1].classList.add("active"),sl[0].classList.remove("active"),jh[1].classList.add("active"),jh[0].classList.remove("active");return}jh[1].classList.remove("active"),jh[0].classList.add("active"),sl[1].classList.remove("active"),sl[0].classList.add("active")})})});var qE={};var XE,z_=Ae(()=>{"use strict";XE=[...document.querySelectorAll("[data-phone]")];XE.forEach(i=>{i&&(i.value="+7"),i?.addEventListener("keydown",e=>{let t=e.target,n=e.ctrlKey||e.metaKey||["Backspace","Delete","Tab","Enter","Escape","ArrowLeft","ArrowRight","Home","End"].includes(e.key),s=/^[0-9]$/.test(e.key);if(!n&&!s){e.preventDefault();return}e.key==="Backspace"&&t.value.replace(/\D/g,"").length<=2&&(t.value="+7",e.preventDefault())}),i?.addEventListener("input",e=>{let t=e.target;if(!t?.value)return;let n=t.value.replace(/\D/g,"");n.startsWith("7")&&(n=n.substring(1)),n.length>10&&(n=n.substring(0,10));let s=n.match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);s&&(t.value=s[1]?`+7 (${s[1]}`+(s[2]?`) ${s[2]}`:"")+(s[3]?`-${s[3]}`:"")+(s[4]?`-${s[4]}`:""):"")})})});var QE={};var YE,Qh,$E,ZE,KE,JE,jE,V_=Ae(()=>{"use strict";_i();YE=[...document.querySelectorAll(".accordion-btn")],Qh=[...document.querySelectorAll(".accordion")],$E=document.querySelector(".fake-div"),[ZE]=Jo.$(".question-total"),[KE]=Jo.$(".question-count");ZE.textContent=Qh.length;JE={p:0},jE=dn(JE,{p:[0,1],duration:1e3,autoplay:!1,ease:"linear",onRender(){window.len.resize()}});YE.forEach(i=>{i.addEventListener("click",e=>{e.preventDefault(),jE.restart()})});Qh.forEach((i,e)=>{let t=document.createElement("div");t.style.height=i.clientHeight+"px",$E?.appendChild(t),dn(t,{"--alpha":[0,1],alternate:!0,duration:1,autoplay:li({repeat:!0,enter:"top+=41vh top",leave:"top+=41vh bottom",onEnter(){Qh.forEach((n,s)=>{n.classList.toggle("upper",s<e),n.classList.toggle("current",s<=e)}),KE.textContent=e+1},onLeave(){}})})});Qh.forEach((i,e)=>e!==0&&i.classList.remove("current"))});Cr();var[CL,H_,IL]=await Promise.all([Promise.resolve().then(()=>(Lm(),Cx)),Promise.resolve().then(()=>(jf(),q0))]),ew=[...document.querySelectorAll("navs a")];ew.forEach(i=>i.addEventListener("click",e=>{i.href===window.location.href&&e.preventDefault()}));Xs&&await Promise.all([Promise.resolve().then(()=>(Zh(),G0)),Promise.resolve().then(()=>(J0(),aE))]);Xs?setTimeout(()=>H_.startIntro(Xs),1e3):H_.startIntro(Xs);var G_=[Promise.resolve().then(()=>(Q0(),uE)),Promise.resolve().then(()=>(s_(),_E)),Promise.resolve().then(()=>(p_(),PE)),Promise.resolve().then(()=>(b_(),FE)),Promise.resolve().then(()=>(B_(),GE)),Promise.resolve().then(()=>(k_(),WE)),Promise.resolve().then(()=>(z_(),qE))];gp&&G_.push(Promise.resolve().then(()=>(V_(),QE)));await Promise.all(G_);
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
animejs/dist/modules/easings/spring/index.js:
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

animejs/dist/modules/animatable/animatable.js:
  (**
   * Anime.js - animatable - ESM
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

animejs/dist/modules/draggable/draggable.js:
  (**
   * Anime.js - draggable - ESM
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
