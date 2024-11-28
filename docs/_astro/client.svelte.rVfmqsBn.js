const Vt="[",Kt="]",X={},w=Symbol(),Ut=!1;function Et(t){console.warn("hydration_mismatch")}var mt=Array.isArray,Wt=Array.from,Zt=Object.defineProperty,M=Object.getOwnPropertyDescriptor,zt=Object.prototype,Gt=Array.prototype,Jt=Object.getPrototypeOf;const R=2,xt=4,_t=8,bt=16,C=32,nt=64,B=128,tt=256,y=512,S=1024,V=2048,Tt=4096,K=8192,Qt=16384,Xt=1<<18,te=1<<19,it=Symbol("$state");function ee(t){return t===this.v}function ne(){throw new Error("effect_update_depth_exceeded")}function re(){throw new Error("hydration_failed")}function le(){throw new Error("state_descriptors_fixed")}function ue(){throw new Error("state_prototype_fixed")}function ie(){throw new Error("state_unsafe_local_read")}function se(){throw new Error("state_unsafe_mutation")}let oe=!1;function O(t){return{f:0,v:t,reactions:null,equals:ee,version:0}}function N(t,e){return p!==null&&we()&&p.f&(R|bt)&&(A===null||!A.includes(t))&&se(),fe(t,e)}function fe(t,e){return t.equals(e)||(t.v=e,t.version=It(),Ot(t,S),d!==null&&d.f&y&&!(d.f&C)&&(h!==null&&h.includes(t)?(x(d,S),ut(d)):D===null?ye([t]):D.push(t))),e}function Ot(t,e){var n=t.reactions;if(n!==null)for(var l=n.length,r=0;r<l;r++){var u=n[r],o=u.f;o&S||(x(u,e),o&(y|B)&&(o&R?Ot(u,V):ut(u)))}}function Nt(t){var e=t.children;if(e!==null){t.children=null;for(var n=0;n<e.length;n+=1){var l=e[n];l.f&R?vt(l):U(l)}}}function ae(t){for(var e=t.parent;e!==null;){if(!(e.f&R))return e;e=e.parent}return null}function kt(t){var e,n=d;L(ae(t));try{Nt(t),e=Pt(t)}finally{L(n)}return e}function Dt(t){var e=kt(t),n=(P||t.f&B)&&t.deps!==null?V:y;x(t,n),t.equals(e)||(t.v=e,t.version=It())}function vt(t){Nt(t),Y(t,0),x(t,K),t.v=t.children=t.deps=t.ctx=t.reactions=null}function ce(t,e){var n=e.last;n===null?e.last=e.first=t:(n.next=t,t.prev=n,e.last=t)}function rt(t,e,n,l=!0){var r=(t&nt)!==0,u=d,o={ctx:b,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:e,last:null,next:null,parent:r?null:u,prev:null,teardown:null,transitions:null,version:0};if(n){var c=$;try{pt(!0),dt(o),o.f|=Qt}catch(s){throw U(o),s}finally{pt(c)}}else e!==null&&ut(o);var a=n&&o.deps===null&&o.first===null&&o.nodes_start===null&&o.teardown===null&&(o.f&te)===0;if(!a&&!r&&l&&(u!==null&&ce(o,u),p!==null&&p.f&R)){var i=p;(i.children??=[]).push(o)}return o}function _e(t){const e=rt(_t,null,!1);return x(e,y),e.teardown=t,e}function ve(t){const e=rt(nt,t,!0);return()=>{U(e)}}function de(t){return rt(xt,t,!1)}function he(t,e=!0){return rt(_t|C,t,!0,e)}function Rt(t){var e=t.teardown;if(e!==null){const n=p;q(null);try{e.call(null)}finally{q(n)}}}function At(t){var e=t.deriveds;if(e!==null){t.deriveds=null;for(var n=0;n<e.length;n+=1)vt(e[n])}}function St(t,e=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var l=n.next;U(n,e),n=l}}function pe(t){for(var e=t.first;e!==null;){var n=e.next;e.f&C||U(e),e=n}}function U(t,e=!0){var n=!1;if((e||t.f&Xt)&&t.nodes_start!==null){for(var l=t.nodes_start,r=t.nodes_end;l!==null;){var u=l===r?null:ht(l);l.remove(),l=u}n=!0}St(t,e&&!n),At(t),Y(t,0),x(t,K);var o=t.transitions;if(o!==null)for(const a of o)a.stop();Rt(t);var c=t.parent;c!==null&&c.first!==null&&Ct(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.parent=t.fn=t.nodes_start=t.nodes_end=null}function Ct(t){var e=t.parent,n=t.prev,l=t.next;n!==null&&(n.next=l),l!==null&&(l.prev=n),e!==null&&(e.first===t&&(e.first=l),e.last===t&&(e.last=n))}let et=!1,$=!1;function pt(t){$=t}let ot=[],j=0;let p=null;function q(t){p=t}let d=null;function L(t){d=t}let A=null,h=null,g=0,D=null;function ye(t){D=t}let Ft=0,P=!1,b=null;function It(){return++Ft}function we(){return!oe}function lt(t){var e=t.f;if(e&S)return!0;if(e&V){var n=t.deps,l=(e&B)!==0;if(n!==null){var r;if(e&tt){for(r=0;r<n.length;r++)(n[r].reactions??=[]).push(t);t.f^=tt}for(r=0;r<n.length;r++){var u=n[r];if(lt(u)&&Dt(u),l&&d!==null&&!P&&!u?.reactions?.includes(t)&&(u.reactions??=[]).push(t),u.version>t.version)return!0}}l||x(t,y)}return!1}function ge(t,e,n){throw t}function Pt(t){var e=h,n=g,l=D,r=p,u=P,o=A,c=b,a=t.f;h=null,g=0,D=null,p=a&(C|nt)?null:t,P=!$&&(a&B)!==0,A=null,b=t.ctx;try{var i=(0,t.fn)(),s=t.deps;if(h!==null){var f;if(Y(t,g),s!==null&&g>0)for(s.length=g+h.length,f=0;f<h.length;f++)s[g+f]=h[f];else t.deps=s=h;if(!P)for(f=g;f<s.length;f++)(s[f].reactions??=[]).push(t)}else s!==null&&g<s.length&&(Y(t,g),s.length=g);return i}finally{h=e,g=n,D=l,p=r,P=u,A=o,b=c}}function Ee(t,e){let n=e.reactions;if(n!==null){var l=n.indexOf(t);if(l!==-1){var r=n.length-1;r===0?n=e.reactions=null:(n[l]=n[r],n.pop())}}n===null&&e.f&R&&(h===null||!h.includes(e))&&(x(e,V),e.f&(B|tt)||(e.f^=tt),Y(e,0))}function Y(t,e){var n=t.deps;if(n!==null)for(var l=e;l<n.length;l++)Ee(t,n[l])}function dt(t){var e=t.f;if(!(e&K)){x(t,y);var n=d;d=t;try{e&bt?pe(t):St(t),At(t),Rt(t);var l=Pt(t);t.teardown=typeof l=="function"?l:null,t.version=Ft}catch(r){ge(r)}finally{d=n}}}function me(){j>1e3&&(j=0,ne()),j++}function xe(t){var e=t.length;if(e!==0){me();var n=$;$=!0;try{for(var l=0;l<e;l++){var r=t[l];r.f&y||(r.f^=y);var u=[];$t(r,u),be(u)}}finally{$=n}}}function be(t){var e=t.length;if(e!==0)for(var n=0;n<e;n++){var l=t[n];!(l.f&(K|Tt))&&lt(l)&&(dt(l),l.deps===null&&l.first===null&&l.nodes_start===null&&(l.teardown===null?Ct(l):l.fn=null))}}function Te(){if(et=!1,j>1001)return;const t=ot;ot=[],xe(t),et||(j=0)}function ut(t){et||(et=!0,queueMicrotask(Te));for(var e=t;e.parent!==null;){e=e.parent;var n=e.f;if(n&(nt|C)){if(!(n&y))return;e.f^=y}}ot.push(e)}function $t(t,e){var n=t.first,l=[];t:for(;n!==null;){var r=n.f,u=(r&C)!==0,o=u&&(r&y)!==0;if(!o&&!(r&Tt))if(r&_t){u?n.f^=y:lt(n)&&dt(n);var c=n.first;if(c!==null){n=c;continue}}else r&xt&&l.push(n);var a=n.next;if(a===null){let f=n.parent;for(;f!==null;){if(t===f)break t;var i=f.next;if(i!==null){n=i;continue t}f=f.parent}}n=a}for(var s=0;s<l.length;s++)c=l[s],e.push(c),$t(c,e)}function z(t){var e=t.f,n=(e&R)!==0;if(n&&e&K){var l=kt(t);return vt(t),l}if(p!==null){A!==null&&A.includes(t)&&ie();var r=p.deps;h===null&&r!==null&&r[g]===t?g++:h===null?h=[t]:h.push(t),D!==null&&d!==null&&d.f&y&&!(d.f&C)&&D.includes(t)&&(x(d,S),ut(d))}else if(n&&t.deps===null)for(var u=t,o=u.parent,c=u;o!==null;)if(o.f&R){var a=o;c=a,o=a.parent}else{var i=o;i.deriveds?.includes(c)||(i.deriveds??=[]).push(c);break}return n&&(u=t,lt(u)&&Dt(u)),t.v}const Oe=~(S|V|y);function x(t,e){t.f=t.f&Oe|e}function Ne(t,e=!1,n){b={p:b,c:null,e:null,m:!1,s:t,x:null,l:null}}function ke(t){const e=b;if(e!==null){const o=e.e;if(o!==null){var n=d,l=p;e.e=null;try{for(var r=0;r<o.length;r++){var u=o[r];L(u.effect),q(u.reaction),de(u.fn)}}finally{L(n),q(l)}}b=e.p,e.m=!0}return{}}function I(t,e=null,n){if(typeof t!="object"||t===null||it in t)return t;const l=Jt(t);if(l!==zt&&l!==Gt)return t;var r=new Map,u=mt(t),o=O(0);u&&r.set("length",O(t.length));var c;return new Proxy(t,{defineProperty(a,i,s){(!("value"in s)||s.configurable===!1||s.enumerable===!1||s.writable===!1)&&le();var f=r.get(i);return f===void 0?(f=O(s.value),r.set(i,f)):N(f,I(s.value,c)),!0},deleteProperty(a,i){var s=r.get(i);if(s===void 0)i in a&&r.set(i,O(w));else{if(u&&typeof i=="string"){var f=r.get("length"),_=Number(i);Number.isInteger(_)&&_<f.v&&N(f,_)}N(s,w),yt(o)}return!0},get(a,i,s){if(i===it)return t;var f=r.get(i),_=i in a;if(f===void 0&&(!_||M(a,i)?.writable)&&(f=O(I(_?a[i]:w,c)),r.set(i,f)),f!==void 0){var v=z(f);return v===w?void 0:v}return Reflect.get(a,i,s)},getOwnPropertyDescriptor(a,i){var s=Reflect.getOwnPropertyDescriptor(a,i);if(s&&"value"in s){var f=r.get(i);f&&(s.value=z(f))}else if(s===void 0){var _=r.get(i),v=_?.v;if(_!==void 0&&v!==w)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return s},has(a,i){if(i===it)return!0;var s=r.get(i),f=s!==void 0&&s.v!==w||Reflect.has(a,i);if(s!==void 0||d!==null&&(!f||M(a,i)?.writable)){s===void 0&&(s=O(f?I(a[i],c):w),r.set(i,s));var _=z(s);if(_===w)return!1}return f},set(a,i,s,f){var _=r.get(i),v=i in a;if(u&&i==="length")for(var E=s;E<_.v;E+=1){var m=r.get(E+"");m!==void 0?N(m,w):E in a&&(m=O(w),r.set(E+"",m))}_===void 0?(!v||M(a,i)?.writable)&&(_=O(void 0),N(_,I(s,c)),r.set(i,_)):(v=_.v!==w,N(_,I(s,c)));var W=Reflect.getOwnPropertyDescriptor(a,i);if(W?.set&&W.set.call(f,s),!v){if(u&&typeof i=="string"){var Z=r.get("length"),T=Number(i);Number.isInteger(T)&&T>=Z.v&&N(Z,T+1)}yt(o)}return!0},ownKeys(a){z(o);var i=Reflect.ownKeys(a).filter(_=>{var v=r.get(_);return v===void 0||v.v!==w});for(var[s,f]of r)f.v!==w&&!(s in a)&&i.push(s);return i},setPrototypeOf(){ue()}})}function yt(t,e=1){N(t,t.v+e)}var wt,qt,Lt;function ft(){if(wt===void 0){wt=window;var t=Element.prototype,e=Node.prototype;qt=M(e,"firstChild").get,Lt=M(e,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function De(t=""){return document.createTextNode(t)}function Mt(t){return qt.call(t)}function ht(t){return Lt.call(t)}function Re(t){t.textContent=""}let H=!1;function G(t){H=t}let k;function at(t){if(t===null)throw Et(),X;return k=t}function jt(){return at(ht(k))}const Ae=new Set,gt=new Set;function J(t){var e=this,n=e.ownerDocument,l=t.type,r=t.composedPath?.()||[],u=r[0]||t.target,o=0,c=t.__root;if(c){var a=r.indexOf(c);if(a!==-1&&(e===document||e===window)){t.__root=e;return}var i=r.indexOf(e);if(i===-1)return;a<=i&&(o=a)}if(u=r[o]||t.target,u!==e){Zt(t,"currentTarget",{configurable:!0,get(){return u||n}});var s=p,f=d;q(null),L(null);try{for(var _,v=[];u!==null;){var E=u.assignedSlot||u.parentNode||u.host||null;try{var m=u["__"+l];if(m!==void 0&&!u.disabled)if(mt(m)){var[W,...Z]=m;W.apply(u,[t,...Z])}else m.call(u,t)}catch(T){_?v.push(T):_=T}if(t.cancelBubble||E===e||E===null)break;u=E}if(_){for(let T of v)queueMicrotask(()=>{throw T});throw _}}finally{t.__root=e,delete t.currentTarget,q(s),L(f)}}}function Se(t){var e=document.createElement("template");return e.innerHTML=t,e.content}function Yt(t,e){var n=d;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=e)}const Ce=["touchstart","touchmove"];function Fe(t){return Ce.includes(t)}function Ht(t,e){return Bt(t,e)}function Ie(t,e){ft(),e.intro=e.intro??!1;const n=e.target,l=H,r=k;try{for(var u=Mt(n);u&&(u.nodeType!==8||u.data!==Vt);)u=ht(u);if(!u)throw X;G(!0),at(u),jt();const o=Bt(t,{...e,anchor:u});if(k===null||k.nodeType!==8||k.data!==Kt)throw Et(),X;return G(!1),o}catch(o){if(o===X)return e.recover===!1&&re(),ft(),Re(n),G(!1),Ht(t,e);throw o}finally{G(l),at(r)}}const F=new Map;function Bt(t,{target:e,anchor:n,props:l={},events:r,context:u,intro:o=!0}){ft();var c=new Set,a=f=>{for(var _=0;_<f.length;_++){var v=f[_];if(!c.has(v)){c.add(v);var E=Fe(v);e.addEventListener(v,J,{passive:E});var m=F.get(v);m===void 0?(document.addEventListener(v,J,{passive:E}),F.set(v,1)):F.set(v,m+1)}}};a(Wt(Ae)),gt.add(a);var i=void 0,s=ve(()=>{var f=n??e.appendChild(De());return he(()=>{if(u){Ne({});var _=b;_.c=u}r&&(l.$$events=r),H&&Yt(f,null),i=t(f,l)||{},H&&(d.nodes_end=k),u&&ke()}),()=>{for(var _ of c){e.removeEventListener(_,J);var v=F.get(_);--v===0?(document.removeEventListener(_,J),F.delete(_)):F.set(_,v)}gt.delete(a),ct.delete(i),f!==n&&f.parentNode?.removeChild(f)}});return ct.set(i,s),i}let ct=new WeakMap;function Pe(t){const e=ct.get(t);e&&e()}function Q(t){return(e,...n)=>{var l=t(...n),r;if(H)r=k,jt();else{var u=l.render().trim(),o=Se(u);r=Mt(o),e.before(r)}const c=l.setup?.(r);Yt(r,r),typeof c=="function"&&_e(c)}}const st=new WeakMap,qe=t=>async(e,n,l,{client:r})=>{if(!t.hasAttribute("ssr"))return;let u,o,c={};for(const[i,s]of Object.entries(l))o??={},i==="default"?(o.default=!0,u=Q(()=>({render:()=>`<astro-slot>${s}</astro-slot>`}))):o[i]=Q(()=>({render:()=>`<astro-slot name="${i}">${s}</astro-slot>`})),i==="default"?c.children=Q(()=>({render:()=>`<astro-slot>${s}</astro-slot>`})):c[i]=Q(()=>({render:()=>`<astro-slot name="${i}">${s}</astro-slot>`}));const a={...n,children:u,$$slots:o,...c};if(st.has(t))st.get(t).setProps(a);else{const i=$e(e,t,a,r!=="only");st.set(t,i),t.addEventListener("astro:unmount",()=>i.destroy(),{once:!0})}};function $e(t,e,n,l){let r=I(n);const o=(l?Ie:Ht)(t,{target:e,props:r});return{setProps(c){Object.assign(r,c);for(const a in r)a in c||delete r[a]},destroy(){Pe(o)}}}export{qe as default};