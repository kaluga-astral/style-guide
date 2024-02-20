"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[836],{8620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var s=n(7624),r=n(2172);const a={},c="React namespace",o={id:"rules/react/react-namespace",title:"React namespace",description:"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 react namespace",source:"@site/docs/rules/react/react-namespace.md",sourceDirName:"rules/react",slug:"/rules/react/react-namespace",permalink:"/style-guide/docs/rules/react/react-namespace",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/docs/rules/react/react-namespace.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Props",permalink:"/style-guide/docs/rules/react/props"},next:{title:"\u0421\u0442\u0438\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u0447\u0435\u0440\u0435\u0437 styled",permalink:"/style-guide/docs/rules/react/styled"}},l={},i=[{value:"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 react namespace",id:"\u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-react-namespace",level:2}];function p(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"react-namespace",children:"React namespace"}),"\n",(0,s.jsx)(t.h2,{id:"\u0437\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e-\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435-react-namespace",children:"\u0417\u0430\u043f\u0440\u0435\u0449\u0435\u043d\u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 react namespace"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(t.p,{children:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435 react namespace \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043d\u0435 \u0432\u043b\u0438\u044f\u0435\u0442 \u043d\u0430 \u0447\u0438\u0442\u0430\u0435\u043c\u043e\u0441\u0442\u044c \u043a\u043e\u0434\u0430.\n\u0418\u043c\u0435\u043d\u0430 \u0445\u0443\u043a\u043e\u0432 \u0438 \u0442\u0438\u043f\u043e\u0432 react \u0438\u043c\u0435\u044e\u0442 \u0443\u043d\u0438\u043a\u0430\u043b\u044c\u043d\u044b\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043d\u0435 \u0434\u043e\u043b\u0436\u043d\u044b \u043a\u043e\u043d\u0444\u043b\u0438\u043a\u0442\u043e\u0432\u0430\u0442\u044c \u0441 \u043a\u0430\u0441\u0442\u043e\u043c\u043d\u044b\u043c\u0438 \u0445\u0443\u043a\u0430\u043c\u0438, \u0442\u0438\u043f\u0430\u043c\u0438."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(t.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import { type ReactNode, useEffect, useState } from 'react';\n\ntype Props = {\n    title: ReactNode;\n};\n\nconst User = (props: Props) => {\n    const [isShow, setShowFlag] = useState(false);\n\n    useEffect(() => {\n    ...\n    }, []);\n\n...\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"\u274c Invalid"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"import React from 'react';\n\ntype Props = {\n    title: React.ReactNode;\n};\n\nconst User = (props: Props) => {\n    const [isShow, setShowFlag] = React.useState(false);\n\n    React.useEffect(() => {\n    ...\n    }, []);\n\n...\n};\n"})})]})}function d(e={}){const{wrapper:t}={...(0,r.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2172:(e,t,n)=>{n.d(t,{I:()=>o,M:()=>c});var s=n(1504);const r={},a=s.createContext(r);function c(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);