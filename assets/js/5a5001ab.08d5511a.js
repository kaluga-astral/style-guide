"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[182],{7236:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>r});var s=i(7624),d=i(2172);const o={},l="Validations",t={id:"rules/arch/modules/validations",title:"Validations",description:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 validation",source:"@site/docs/rules/arch/modules/validations.md",sourceDirName:"rules/arch/modules",slug:"/rules/arch/modules/validations",permalink:"/style-guide/docs/rules/arch/modules/validations",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/docs/rules/arch/modules/validations.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shared",permalink:"/style-guide/docs/rules/arch/modules/shared"},next:{title:"React",permalink:"/style-guide/docs/category/react"}},c={},r=[{value:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 <code>validation</code>",id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f-\u0434\u043e\u043b\u0436\u043d\u0430-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f-\u0432-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c-\u0444\u0430\u0439\u043b\u0435-validation",level:2},{value:"\u0414\u043b\u044f <code>useLogic</code> \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b <code>types</code> \u0434\u043b\u044f \u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445",id:"\u0434\u043b\u044f-uselogic-\u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439-\u0444\u0430\u0439\u043b-types-\u0434\u043b\u044f-\u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u043c\u044b\u0445-\u0434\u0430\u043d\u043d\u044b\u0445",level:3},{value:"\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0432 <code>domain/validations</code> \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u044b \u0438\u043b\u0438 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u044b <code>validation</code>",id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438-\u0432-domainvalidations-\u043d\u0435-\u0434\u043e\u043b\u0436\u043d\u044b-\u0438\u043c\u0435\u0442\u044c-\u043f\u0440\u0435\u0444\u0438\u043a\u0441\u044b-\u0438\u043b\u0438-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u044b-validation",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"validations",children:"Validations"}),"\n",(0,s.jsxs)(n.h2,{id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f-\u0434\u043e\u043b\u0436\u043d\u0430-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f-\u0432-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c-\u0444\u0430\u0439\u043b\u0435-validation",children:["\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u043c \u0444\u0430\u0439\u043b\u0435 ",(0,s.jsx)(n.code,{children:"validation"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,s.jsx)(n.code,{children:"useLogic"}),", \u0442\u043e ",(0,s.jsx)(n.code,{children:"validation"})," \u0444\u0430\u0439\u043b \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,s.jsx)(n.code,{children:"useLogic"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u0432 ",(0,s.jsx)(n.code,{children:"UIStore"}),", \u0442\u043e ",(0,s.jsx)(n.code,{children:"validation"})," \u0444\u0430\u0439\u043b \u0434\u043e\u043b\u0436\u0435\u043d \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,s.jsx)(n.code,{children:"UIStore"})]}),"\n",(0,s.jsxs)(n.li,{children:["\u0415\u0441\u043b\u0438 \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u044f \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f, \u0442\u043e \u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u043d\u0430 \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 ",(0,s.jsx)(n.code,{children:"domain/validations/"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0412\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u0435 \u0437\u043e\u043d \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u0438"}),"\n",(0,s.jsx)(n.li,{children:"\u0412\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u044c \u0431\u044b\u0441\u0442\u0440\u043e\u0433\u043e \u043f\u0435\u0440\u0435\u043d\u043e\u0441\u0430 \u0441\u0445\u0435\u043c\u044b \u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f ",(0,s.jsx)(n.code,{children:"UIStore"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 Cart/\n|    \u251c\u2500\u2500 UIStore/ \n|    |    |\u2500\u2500 UIStore.ts\n|    |    |\u2500\u2500 validation.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 Cart.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0414\u043b\u044f ",(0,s.jsx)(n.code,{children:"useLogic"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 BookForm/\n|    \u251c\u2500\u2500 useLogic/ \n|    |    |\u2500\u2500 useLogic.ts\n|    |    |\u2500\u2500 types.ts\n|    |    |\u2500\u2500 validation.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 BookForm.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"\u0434\u043b\u044f-uselogic-\u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f-\u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439-\u0444\u0430\u0439\u043b-types-\u0434\u043b\u044f-\u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u043c\u044b\u0445-\u0434\u0430\u043d\u043d\u044b\u0445",children:["\u0414\u043b\u044f ",(0,s.jsx)(n.code,{children:"useLogic"})," \u0441\u043e\u0437\u0434\u0430\u0435\u0442\u0441\u044f \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b ",(0,s.jsx)(n.code,{children:"types"})," \u0434\u043b\u044f \u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0434\u0430\u043d\u043d\u044b\u0445"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0415\u0441\u043b\u0438 \u043d\u0435 \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0432\u0430\u043b\u0438\u0434\u0438\u0440\u0443\u0435\u043c\u044b\u0435 \u0442\u0438\u043f\u044b \u0434\u0430\u043d\u043d\u044b\u0445 \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b ",(0,s.jsx)(n.code,{children:"types"}),", \u0442\u043e \u0432\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442 \u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043c\u0435\u0436\u0434\u0443\n",(0,s.jsx)(n.code,{children:"useLogic"})," \u0438 ",(0,s.jsx)(n.code,{children:"validation"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 BookForm/\n|    \u251c\u2500\u2500 useLogic/ \n|    |    |\u2500\u2500 useLogic.ts\n|    |    |\u2500\u2500 types.ts\n|    |    |\u2500\u2500 validation.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 BookForm.tsx\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"BookForm/useLogic/types.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type BookFormValues = {\n  name: string;\n}\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u0432\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438-\u0432-domainvalidations-\u043d\u0435-\u0434\u043e\u043b\u0436\u043d\u044b-\u0438\u043c\u0435\u0442\u044c-\u043f\u0440\u0435\u0444\u0438\u043a\u0441\u044b-\u0438\u043b\u0438-\u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u044b-validation",children:["\u0412\u0430\u043b\u0438\u0434\u0430\u0446\u0438\u0438 \u0432 ",(0,s.jsx)(n.code,{children:"domain/validations"})," \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u044b \u0438\u043b\u0438 \u043f\u043e\u0441\u0442\u0444\u0438\u043a\u0441\u044b ",(0,s.jsx)(n.code,{children:"validation"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u043e \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440\u0438\u0438 ",(0,s.jsx)(n.code,{children:"validations"})," \u043c\u043e\u0436\u043d\u043e \u043f\u043e\u043d\u044f\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043a\u0441\u0442."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 domain/\n|    \u251c\u2500\u2500 validations/ \n|    |    |\u2500\u2500 userSchema/\n|    |    |\u2500\u2500 validateTextField/\n|    |    \u2514\u2500\u2500 index.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 domain/\n|    \u251c\u2500\u2500 validations/ \n|    |    |\u2500\u2500 userValidationSchema/\n|    |    |\u2500\u2500 textFieldValidationRule/\n|    |    \u2514\u2500\u2500 index.ts\n|    \u2514\u2500\u2500 index.ts\n"})})]})}function h(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},2172:(e,n,i)=>{i.d(n,{I:()=>t,M:()=>l});var s=i(1504);const d={},o=s.createContext(d);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);