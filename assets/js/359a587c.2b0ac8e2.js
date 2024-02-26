"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[148],{1035:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=n(7624),r=n(2172);const i={},l="Utils",c={id:"rules/react/utils",title:"Utils",description:"\u0412\u0441\u0435 utils \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e utils",source:"@site/docs/rules/react/utils.md",sourceDirName:"rules/react",slug:"/rules/react/utils",permalink:"/style-guide/docs/rules/react/utils",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/docs/rules/react/utils.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 styled",permalink:"/style-guide/docs/rules/react/styled"},next:{title:"Constants",permalink:"/style-guide/docs/rules/constants"}},o={},d=[{value:"\u0412\u0441\u0435 utils \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e <code>utils</code>",id:"\u0432\u0441\u0435-utils-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430-\u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e-utils",level:2}];function u(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"utils",children:"Utils"}),"\n",(0,t.jsxs)(s.h2,{id:"\u0432\u0441\u0435-utils-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430-\u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e-utils",children:["\u0412\u0441\u0435 utils \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,t.jsx)(s.code,{children:"utils"})]}),"\n",(0,t.jsxs)(s.p,{children:["\u041f\u043e\u043b\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0434\u043b\u044f utils \u0441\u043c\u043e\u0442\u0440\u0438\u0442\u0435 ",(0,t.jsx)(s.a,{href:"../utils",children:"\u0437\u0434\u0435\u0441\u044c"}),"."]}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,t.jsx)(s.p,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0437\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u043d\u044b\u0435 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,t.jsx)(s.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u2705 Valid"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 utils/\n|    |    |\u2500\u2500 formatPriceToView/\n|    |    |    |\u2500\u2500 formatPriceToView.ts\n|    |    |    \u2514\u2500\u2500 index.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"\u274c Invalid"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 formatPriceToView.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 utils.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 utils/\n|    |    |\u2500\u2500 utils.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})})]})}function a(e={}){const{wrapper:s}={...(0,r.M)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},2172:(e,s,n)=>{n.d(s,{I:()=>c,M:()=>l});var t=n(1504);const r={},i=t.createContext(r);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);