import{p as e,a as t,r as o,o as s,c as n,b as a,w as r,d,e as l,T as c,f as i,F as m,g as p,h as u,i as _}from"./vendor.84e871d1.js";const f={},h=r();e("data-v-2b8dc816");const E={class:"flex space-x-9"},x=d("Home"),b=d("About"),v=d("Resume"),I=d("Repositories"),g=d("Contact");t();const R=h(((e,t,r,d,l,c)=>{const i=o("router-link");return s(),n("div",E,[a(i,{class:"text-lg font-bold",to:"/"},{default:h((()=>[x])),_:1}),a(i,{class:"text-lg font-bold",to:"/about"},{default:h((()=>[b])),_:1}),a(i,{class:"text-lg font-bold",to:"/resume"},{default:h((()=>[v])),_:1}),a(i,{class:"text-lg font-bold",to:"/repositories"},{default:h((()=>[I])),_:1}),a(i,{class:"text-lg font-bold",to:"/contact"},{default:h((()=>[g])),_:1})])}));f.render=R,f.__scopeId="data-v-2b8dc816";const L={setup(){}},A=r(),P=A(((e,t,r,d,p,u)=>{const _=f,h=o("router-view");return s(),n(m,null,["Home"!==e.$route.name?(s(),n(_,{key:0})):l("",!0),a(h,{class:"p-6",style:{"min-height":"100vh !important",height:"100vh !important"}},{default:A((({Component:e})=>[a(c,{name:"route",mode:"out-in"},{default:A((()=>[(s(),n(i(e)))])),_:2},1024)])),_:1})],64)}));L.render=P,L.__scopeId="data-v-7844345a";let j;const y={},O=function(e,t){if(!t)return e();if(void 0===j){const e=document.createElement("link").relList;j=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in y)return;y[e]=!0;const t=e.endsWith(".css"),o=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${o}`))return;const s=document.createElement("link");return s.rel=t?"stylesheet":j,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t?new Promise(((e,t)=>{s.addEventListener("load",e),s.addEventListener("error",t)})):void 0}))).then((()=>e()))},T=[{path:"/",name:"Home",component:()=>O((()=>import("./Index.88e6044a.js")),["/assets/Index.88e6044a.js","/assets/Index.b070881a.css","/assets/vendor.84e871d1.js"])},{path:"/about",name:"About",component:()=>O((()=>import("./Index.940213c8.js")),["/assets/Index.940213c8.js","/assets/Index.aab72517.css","/assets/vendor.84e871d1.js"])},{path:"/resume",name:"Resume",component:()=>O((()=>import("./Index.1f3a514e.js")),["/assets/Index.1f3a514e.js","/assets/Index.aab72517.css","/assets/vendor.84e871d1.js"])},{path:"/repositories",name:"Repositories",component:()=>O((()=>import("./Index.d535682c.js")),["/assets/Index.d535682c.js","/assets/Index.aab72517.css","/assets/vendor.84e871d1.js"])},{path:"/contact",name:"Contact",component:()=>O((()=>import("./Index.6af35d1d.js")),["/assets/Index.6af35d1d.js","/assets/Index.aab72517.css","/assets/vendor.84e871d1.js"])}],k=p({history:u(),routes:T});_(L).use(k).mount("#app");export{f as _};