"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[8376],{8368:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>x});var r=t(7624),s=t(2172);const o={},i="React Context",c={id:"rules/react/context",title:"React Context",description:"Context \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",source:"@site/docs/rules/react/context.md",sourceDirName:"rules/react",slug:"/rules/react/context",permalink:"/style-guide/docs/rules/react/context",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/rules/react/context.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/style-guide/docs/category/react"},next:{title:"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",permalink:"/style-guide/docs/rules/react/created"}},d={},x=[{value:"Context \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",id:"context-\u0434\u043e\u043b\u0436\u0435\u043d-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f-\u0432-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",level:2},{value:"Type \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 <code>ContextProps</code>",id:"type-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u0434\u043e\u043b\u0436\u0435\u043d-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-contextprops",level:2},{value:"Context.Provider \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",id:"contextprovider-\u0434\u043e\u043b\u0436\u0435\u043d-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f-\u0432\u043d\u0443\u0442\u0440\u0438-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u0432-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",level:2},{value:"\u0418\u043c\u044f Context.Provider \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441 - \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",id:"\u0438\u043c\u044f-contextprovider-\u0434\u043e\u043b\u0436\u043d\u043e-\u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c-\u043f\u0440\u0435\u0444\u0438\u043a\u0441---\u0438\u043c\u044f-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",level:2},{value:"Context \u0438 Provider \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438\u0437 \u0435\u0434\u0438\u043d\u043e\u0433\u043e <code>index</code>",id:"context-\u0438-provider-\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f-\u0438\u0437-\u0435\u0434\u0438\u043d\u043e\u0433\u043e-index",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react-context",children:"React Context"}),"\n",(0,r.jsx)(n.h2,{id:"context-\u0434\u043e\u043b\u0436\u0435\u043d-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f-\u0432-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",children:"Context \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u0413\u0440\u0443\u043f\u043f\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u0435\u0439, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0445 \u0441 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u043e\u043c"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u251c\u2500\u2500 UserContext/\n|    \u251c\u2500\u2500 UserContext.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"type-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u0434\u043e\u043b\u0436\u0435\u043d-\u0438\u043c\u0435\u0442\u044c-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441-contextprops",children:["Type \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0438\u043c\u0435\u0442\u044c \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441 ",(0,r.jsx)(n.code,{children:"ContextProps"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u0420\u0435\u0448\u0435\u043d\u0438\u0435 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b \u043a\u043e\u043b\u043b\u0438\u0437\u0438\u0439 \u0438\u043c\u0435\u043d \u0442\u0438\u043f\u0430 \u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createContext } from 'react';\n\nexport type UserContextProps = {\n  isAuth: boolean;\n};\n\nexport const UserContext = createContext<UserContextProps>({\n  isAuth: false,\n});\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"import { createContext } from 'react';\n\nexport type UserContextType = {\n  isAuth: boolean;\n};\n\nexport const UserContext = createContext<UserContextType>({\n  isAuth: false,\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"contextprovider-\u0434\u043e\u043b\u0436\u0435\u043d-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f-\u0432\u043d\u0443\u0442\u0440\u0438-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430-\u0432-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439-\u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438",children:"Context.Provider \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u044c\u0441\u044f \u0432\u043d\u0443\u0442\u0440\u0438 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u041f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0443\u0441\u0442\u0430\u043d\u0430\u0432\u043b\u0438\u0432\u0430\u0442\u044c \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u0443\u044e \u0441\u0432\u044f\u0437\u044c \u043c\u0435\u0436\u0434\u0443 Context \u0438 Provider"}),"\n",(0,r.jsx)(n.li,{children:"\u041e\u0442\u0434\u0435\u043b\u044c\u043d\u0430\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u044f \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0440\u0430\u0441\u0448\u0438\u0440\u044f\u0442\u044c Provider (\u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u0442\u0435\u0441\u0442\u043e\u0432, \u043b\u043e\u0433\u0438\u043a\u0438...)"}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u251c\u2500\u2500 UserContext/\n|    \u251c\u2500\u2500 UserContextProvider/ \n|    |    \u2514\u2500\u2500 UserContextProvider.tsx\n|    |    \u2514\u2500\u2500 UserContextProvider.test.tsx\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 UserContext.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u0438\u043c\u044f-contextprovider-\u0434\u043e\u043b\u0436\u043d\u043e-\u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c-\u043f\u0440\u0435\u0444\u0438\u043a\u0441---\u0438\u043c\u044f-\u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430",children:"\u0418\u043c\u044f Context.Provider \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441 - \u0438\u043c\u044f \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u043e\u0434\u043d\u043e\u0437\u043d\u0430\u0447\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u0438 \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430 \u0438 \u043f\u0440\u043e\u0432\u0430\u0439\u0434\u0435\u0440\u0430."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u251c\u2500\u2500 UserContext/\n|    \u251c\u2500\u2500 UserContextProvider/ \n|    \u251c\u2500\u2500 UserContext.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u251c\u2500\u2500 UserContext/\n|    \u251c\u2500\u2500 UserProvider/\n|    \u251c\u2500\u2500 UserContext.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsxs)(n.h2,{id:"context-\u0438-provider-\u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f-\u0438\u0437-\u0435\u0434\u0438\u043d\u043e\u0433\u043e-index",children:["Context \u0438 Provider \u044d\u043a\u0441\u043f\u043e\u0440\u0442\u0438\u0440\u0443\u044e\u0442\u0441\u044f \u0438\u0437 \u0435\u0434\u0438\u043d\u043e\u0433\u043e ",(0,r.jsx)(n.code,{children:"index"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u0415\u0434\u0438\u043d\u0430\u044f \u0442\u043e\u0447\u043a\u0430 \u0434\u043e\u0441\u0442\u0443\u043f\u0430 \u043a \u0441\u0443\u0449\u043d\u043e\u0441\u0442\u044f\u043c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442\u0430."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"\u251c\u2500\u2500 UserContext/\n|    \u251c\u2500\u2500 UserContextProvider/ \n|    \u251c\u2500\u2500 UserContext.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"UserContext/index.ts"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"export * from './UserContext';\nexport * from './UserContextProvider';\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>c,M:()=>i});var r=t(1504);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);