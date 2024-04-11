"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[7660],{8016:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=t(7624),s=t(2172);const a={},i="\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",o={id:"rules/conditional-statements",title:"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",description:"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",source:"@site/docs/rules/conditional-statements.md",sourceDirName:"rules",slug:"/rules/conditional-statements",permalink:"/style-guide/docs/rules/conditional-statements",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/docs/rules/conditional-statements.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u041f\u0440\u0438\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0442\u0438\u043f\u043e\u0432",permalink:"/style-guide/docs/rules/coercion"},next:{title:"Constants",permalink:"/style-guide/docs/rules/constants"}},l={},c=[{value:"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",id:"\u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435-\u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",level:2}];function d(n){const e={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"\u0443\u0441\u043b\u043e\u0432\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",children:"\u0423\u0441\u043b\u043e\u0432\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"}),"\n",(0,r.jsx)(e.h2,{id:"\u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c-\u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435-\u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0435-\u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b",children:"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0432\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(e.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,r.jsx)(e.p,{children:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u044b\u0435 \u0442\u0435\u0440\u043d\u0430\u0440\u043d\u044b\u0435 \u043e\u043f\u0435\u0440\u0430\u0442\u043e\u0440\u044b \u0437\u043d\u0430\u0447\u0438\u0442\u0435\u043b\u044c\u043d\u043e \u0443\u0441\u043b\u043e\u0436\u043d\u044f\u044e\u0442 \u0432\u043e\u0441\u043f\u0440\u0438\u044f\u0442\u0438\u0435 \u043a\u043e\u0434\u0430."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u274c Invalid"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const getColor = (variant: Variant, darkMode: boolean) =>\n  darkMode\n    ? variant === 'primary'\n      ? darkTheme.primary\n      : darkTheme.secondary\n    : variant === 'primary'\n    ? lightTheme.primary\n    : lightTheme.secondary;\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"const Info = ({ list, type }: Props) => {\n  return (\n    <div>\n      {list.length ? (\n        type === 'auth' ? (\n          <AuthInfo />\n        ) : (\n          <NoAuthInfo />\n        )\n      ) : (\n        <NoData />\n      )}\n    </div>\n  );\n};\n"})}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.strong,{children:"\u2705 Valid"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-ts",children:"const getColor = (variant: Variant, darkMode: boolean) => {\n  if (darkMode) {\n    return variant === 'primary' ? darkTheme.primary : darkTheme.secondary;\n  }\n\n  return variant === 'primary' ? lightTheme.primary : lightTheme.secondary;\n};\n"})}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-tsx",children:"const Info = ({ list, type }: Props) => {\n  return (\n    <div>\n      {list.length && <NoData />}\n      {!list.length && type === 'auth' ? <AuthInfo /> : <NoAuthInfo />}\n    </div>\n  );\n};\n"})})]})}function u(n={}){const{wrapper:e}={...(0,s.M)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(d,{...n})}):d(n)}},2172:(n,e,t)=>{t.d(e,{I:()=>o,M:()=>i});var r=t(1504);const s={},a=r.createContext(s);function i(n){const e=r.useContext(a);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),r.createElement(a.Provider,{value:e},n.children)}}}]);