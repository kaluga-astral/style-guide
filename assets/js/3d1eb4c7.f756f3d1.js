"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[1844],{6564:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=t(7624),r=t(2172);const o={},i="Stores",l={id:"rules/stores",title:"Stores",description:"\u041a\u0430\u0436\u0434\u044b\u0439 store \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0438 \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 Store",source:"@site/docs/rules/stores.md",sourceDirName:"rules",slug:"/rules/stores",permalink:"/style-guide/docs/rules/stores",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/rules/stores.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Static files",permalink:"/style-guide/docs/rules/static-files"},next:{title:"\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 TODO \u0432 \u043a\u043e\u0434\u0435",permalink:"/style-guide/docs/rules/todo"}},c={},d=[{value:"\u041a\u0430\u0436\u0434\u044b\u0439 store \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0438 \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 <code>Store</code>",id:"\u043a\u0430\u0436\u0434\u044b\u0439-store-\u0434\u043e\u043b\u0436\u0435\u043d-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u0438-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-store",level:2},{value:"Mobx Stores",id:"mobx-stores",level:2}];function a(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"stores",children:"Stores"}),"\n",(0,n.jsxs)(s.h2,{id:"\u043a\u0430\u0436\u0434\u044b\u0439-store-\u0434\u043e\u043b\u0436\u0435\u043d-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u0438-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-store",children:["\u041a\u0430\u0436\u0434\u044b\u0439 store \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0438 \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 ",(0,n.jsx)(s.code,{children:"Store"})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,n.jsx)(s.p,{children:"\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e store \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0431\u0435\u0441\u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c store \u0438 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u044b\u0435 \u0441\u0432\u044f\u0437\u0438 \u0441 \u0435\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u043c\u0438 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u044f\u043c\u0438."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,n.jsx)(s.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u2705 Valid"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"\u251c\u2500\u2500 domain/\n|    \u251c\u2500\u2500 stores/\n|    |    |\u2500\u2500 PaymentStore/\n|    |    |    |\u2500\u2500 utils/\n|    |    |    |\u2500\u2500 PaymentStore.ts\n|    |    |    |\u2500\u2500 useUserData.test.ts\n|    |    |    |\u2500\u2500 constants.ts\n|    |    |    |\u2500\u2500 types.ts\n|    |    |    \u2514\u2500\u2500 index.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"domain/stores/PaymentStore/PaymentStore.ts"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-ts",children:"export class PaymentStore {}\n"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"\u274c Invalid"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:"\u251c\u2500\u2500 domain/\n|    \u251c\u2500\u2500 stores/\n|    |    |\u2500\u2500 PaymentStore.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,n.jsx)(s.h2,{id:"mobx-stores",children:"Mobx Stores"}),"\n",(0,n.jsxs)(s.p,{children:["Mobx Stores \u043f\u043e\u0434\u0447\u0438\u043d\u044f\u044e\u0442\u0441\u044f ",(0,n.jsx)(s.a,{href:"./classes",children:"\u0435\u0434\u0438\u043d\u044b\u043c \u043f\u0440\u0430\u0432\u0438\u043b\u0430\u043c js classes"}),"."]})]})}function u(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},2172:(e,s,t)=>{t.d(s,{I:()=>l,M:()=>i});var n=t(1504);const r={},o=n.createContext(r);function i(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);