"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[5348],{5736:(n,s,e)=>{e.r(s),e.d(s,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>d});var r=e(7624),o=e(2172);const t={},l="Hooks",c={id:"rules/react/hooks",title:"Hooks",description:"\u0412\u0441\u0435 hooks \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e hooks",source:"@site/docs/rules/react/hooks.md",sourceDirName:"rules/react",slug:"/rules/react/hooks",permalink:"/style-guide/docs/rules/react/hooks",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/docs/rules/react/hooks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",permalink:"/style-guide/docs/rules/react/created"},next:{title:"\u041b\u043e\u0433\u0438\u043a\u0430 \u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430\u0445",permalink:"/style-guide/docs/rules/react/logic"}},i={},d=[{value:"\u0412\u0441\u0435 hooks \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e <code>hooks</code>",id:"\u0432\u0441\u0435-hooks-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430-\u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e-hooks",level:2},{value:"\u0422\u0438\u043f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0445\u0443\u043a\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 <code>Params</code>",id:"\u0442\u0438\u043f-\u0432\u0445\u043e\u0434\u043d\u044b\u0445-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-\u0445\u0443\u043a\u0430-\u0434\u043e\u043b\u0436\u0435\u043d-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-params",level:2},{value:"\u0422\u0438\u043f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0445\u0443\u043a\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 <code>Result</code>",id:"\u0442\u0438\u043f-\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u0445\u0443\u043a\u0430-\u0434\u043e\u043b\u0436\u0435\u043d-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-result",level:2}];function a(n){const s={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"hooks",children:"Hooks"}),"\n",(0,r.jsxs)(s.h2,{id:"\u0432\u0441\u0435-hooks-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430-\u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f-\u0432-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e-hooks",children:["\u0412\u0441\u0435 hooks \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,r.jsx)(s.code,{children:"hooks"})]}),"\n",(0,r.jsxs)(s.p,{children:["\u0412\u0441\u0435 hooks \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0432\u044b\u043d\u043e\u0441\u044f\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044e ",(0,r.jsx)(s.code,{children:"hooks"}),", \u043f\u0440\u0438 \u044d\u0442\u043e\u043c ",(0,r.jsx)(s.strong,{children:"\u043a\u0430\u0436\u0434\u044b\u0439 hook \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0441\u0432\u043e\u0435\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438"}),"."]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(s.p,{children:"\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u0434\u043b\u044f \u043a\u0430\u0436\u0434\u043e\u0433\u043e hook \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\u0412\u0438\u0434\u0435\u0442\u044c \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c hook \u0441\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Utils"}),"\n",(0,r.jsx)(s.li,{children:"Constants"}),"\n",(0,r.jsx)(s.li,{children:"Types"}),"\n",(0,r.jsx)(s.li,{children:"..."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.li,{children:"\u0412\u0438\u0434\u0435\u0442\u044c \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c hook \u0441 \u0435\u0433\u043e \u0442\u0435\u0441\u0442\u0430\u043c\u0438"}),"\n",(0,r.jsx)(s.li,{children:"\u0414\u0435\u043a\u043e\u043c\u043f\u043e\u0437\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0438 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0438, \u0432\u0445\u043e\u0434\u044f\u0449\u0438\u0435 \u0432 \u0441\u043e\u0441\u0442\u0430\u0432 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430, \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430 (\u0441\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u0434\u043b\u044f hook)"}),"\n",(0,r.jsx)(s.li,{children:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u0438\u0442\u044c hook \u0441\u043e \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u043c\u0438 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u0432 \u0434\u0440\u0443\u0433\u0438\u0435 \u0441\u043b\u043e\u0438 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u0431\u0435\u0437 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438 \u0440\u0435\u0444\u0430\u043a\u0442\u043e\u0440\u0438\u043d\u0433\u0430"}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(s.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 hooks/\n|    |    |\u2500\u2500 useUserData/\n|    |    |    |\u2500\u2500 utils/\n|    |    |    |\u2500\u2500 useUserData.ts\n|    |    |    |\u2500\u2500 useUserData.test.ts\n|    |    |    |\u2500\u2500 constants.ts\n|    |    |    |\u2500\u2500 types.ts\n|    |    |    \u2514\u2500\u2500 index.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u274c Invalid"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 useUserData.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 hooks.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{children:"\u251c\u2500\u2500 UserInfo/\n|    \u251c\u2500\u2500 hooks/\n|    |    |\u2500\u2500 hooks.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 UserInfo.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsxs)(s.h2,{id:"\u0442\u0438\u043f-\u0432\u0445\u043e\u0434\u043d\u044b\u0445-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432-\u0445\u0443\u043a\u0430-\u0434\u043e\u043b\u0436\u0435\u043d-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-params",children:["\u0422\u0438\u043f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0445\u0443\u043a\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 ",(0,r.jsx)(s.code,{children:"Params"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(s.p,{children:"\u041e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0430\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432\u0445\u043e\u0434\u043d\u044b\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u0445\u0443\u043a\u0430."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(s.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"type UseLogicParams = {\n  data: unknown[];\n};\n\nconst useLogic = (params: UseLogicParams) => {};\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'// \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e \u043f\u0440\u043e\u0441\u0442\u043e "Params", \u0435\u0441\u043b\u0438 \u0442\u0438\u043f \u043d\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u043b\u0438 \u043d\u0435\u0442 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439 \u0438\u043c\u0435\u043d \u0432\u043d\u0443\u0442\u0440\u0438 es \u043c\u043e\u0434\u0443\u043b\u044f\ntype Params = {\n  data: unknown[];\n};\n\nconst useLogic = (params: Params) => {};\n'})}),"\n",(0,r.jsxs)(s.h2,{id:"\u0442\u0438\u043f-\u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e-\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f-\u0445\u0443\u043a\u0430-\u0434\u043e\u043b\u0436\u0435\u043d-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-result",children:["\u0422\u0438\u043f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0445\u0443\u043a\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 ",(0,r.jsx)(s.code,{children:"Result"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(s.p,{children:"\u041e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0430\u044f \u0438\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u043c\u043e\u0433\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f \u0445\u0443\u043a\u0430."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(s.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"type UseLogicResult = {\n  isShow: boolean;\n};\n\nconst useLogic = (params: UseLogicParams): UseLogicResult => { ... };\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:'// \u0414\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u043e \u043f\u0440\u043e\u0441\u0442\u043e "Result", \u0435\u0441\u043b\u0438 \u0442\u0438\u043f \u043d\u0435 \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u0438\u043b\u0438 \u043d\u0435\u0442 \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439 \u0438\u043c\u0435\u043d \u0432\u043d\u0443\u0442\u0440\u0438 es \u043c\u043e\u0434\u0443\u043b\u044f\ntype Result = {\n    isShow: boolean;\n};\n\nconst useLogic = (params: Params): Result => { ... };\n'})})]})}function h(n={}){const{wrapper:s}={...(0,o.M)(),...n.components};return s?(0,r.jsx)(s,{...n,children:(0,r.jsx)(a,{...n})}):a(n)}},2172:(n,s,e)=>{e.d(s,{I:()=>c,M:()=>l});var r=e(1504);const o={},t=r.createContext(o);function l(n){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof n?n(s):{...s,...n}}),[s,n])}function c(n){let s;return s=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:l(n.components),r.createElement(t.Provider,{value:s},n.children)}}}]);