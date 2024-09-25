"use strict";(self.webpackChunkastral_style_guide=self.webpackChunkastral_style_guide||[]).push([[6096],{9348:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=r(7624),l=r(2172);const o={},i="Props",t={id:"rules/react/props",title:"Props",description:"\u0422\u0438\u043f\u044b Props \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",source:"@site/docs/rules/react/props.md",sourceDirName:"rules/react",slug:"/rules/react/props",permalink:"/style-guide/docs/rules/react/props",draft:!1,unlisted:!1,editUrl:"https://github.com/kaluga-astral/style-guide/tree/main/docs/rules/react/props.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u0412\u043b\u043e\u0436\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",permalink:"/style-guide/docs/rules/react/nested"},next:{title:"React namespace",permalink:"/style-guide/docs/rules/react/react-namespace"}},d={},c=[{value:"\u0422\u0438\u043f\u044b Props \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",id:"\u0442\u0438\u043f\u044b-props-\u0434\u043e\u043b\u0436\u043d\u044b-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f-\u0432-\u0444\u0430\u0439\u043b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",level:2},{value:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430-\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e-\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",level:3},{value:"\u0412\u0441\u0435 Props \u0441 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0431\u0443\u043a\u0432\u044b",id:"\u0432\u0441\u0435-props-\u0441-\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439-\u0431\u0443\u043a\u0432\u044b",level:2},{value:"\u0412\u0441\u0435 props \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c <code>on</code>",id:"\u0432\u0441\u0435-props-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u0441-\u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c-on",level:2},{value:"Boolean props \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043d\u0430 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u043a Boolean",id:"boolean-props-\u0434\u043e\u043b\u0436\u043d\u044b-\u0438\u043c\u0435\u0442\u044c-\u043f\u0440\u0435\u0444\u0438\u043a\u0441-\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439-\u043d\u0430-\u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c-\u043a-boolean",level:2},{value:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 props \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438",id:"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435-props-\u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f-\u0447\u0435\u0440\u0435\u0437-\u0434\u0432\u043e\u0439\u043d\u044b\u0435-\u043a\u0430\u0432\u044b\u0447\u043a\u0438",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"props",children:"Props"}),"\n",(0,s.jsx)(n.h2,{id:"\u0442\u0438\u043f\u044b-props-\u0434\u043e\u043b\u0436\u043d\u044b-\u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f-\u0432-\u0444\u0430\u0439\u043b\u0435-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430",children:"\u0422\u0438\u043f\u044b Props \u0434\u043e\u043b\u0436\u043d\u044b \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0432 \u0444\u0430\u0439\u043b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0430\u0445\u043e\u0436\u0434\u0435\u043d\u0438\u0435 Props \u0442\u0438\u043f\u043e\u0432 \u0432 \u0444\u0430\u0439\u043b\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0418\u0437\u0431\u0435\u0436\u0430\u0442\u044c \u043e\u0432\u0435\u0440\u0445\u0435\u0434\u0430 \u043f\u043e \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e\u0433\u043e \u0444\u0430\u0439\u043b\u0430 \u0434\u043b\u044f \u0442\u0438\u043f\u043e\u0432 Props"}),"\n",(0,s.jsxs)(n.li,{children:["\u0418\u0437\u0431\u0435\u0436\u0430\u0442\u044c ",(0,s.jsx)(n.a,{href:"#%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BD%D0%B5%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE%D0%B3%D0%BE-%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B7%D0%B0%D0%B2%D0%B8%D1%81%D0%B8%D0%BC%D0%BE%D1%81%D1%82%D0%B5%D0%B9",children:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c \u043e\u0448\u0438\u0431\u043e\u0447\u043d\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"UserInfo.tsx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"type Props = {\n  title: string;\n  userName: string;\n  onClick: () => void;\n};\n\nexport const UserInfo = ({ title, userName, onClick }: Props) => {\n  return (\n    <Grid>\n      <Typography>{title}</Typography>\n      <Typography>{userName}</Typography>\n      <Button onClick={onClick}>\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c</Button>\n    </Grid>\n  );\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"UserInfo/UserInfo.tsx"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"import { type UserInfoProps } from './types';\n\nexport const UserInfo = ({ title, userName, onClick }: ButtonProps) => {\n  return (\n    <Grid>\n      <Typography>{title}</Typography>\n      <Typography>{userName}</Typography>\n      <Button onClick={onClick}>\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c</Button>\n    </Grid>\n  );\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"UserInfo/types.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type UserInfoProps = {\n  title: string;\n  userName: string;\n  onClick: () => void;\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430-\u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e-\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f-\u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439-\u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432",children:"\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0430 \u043d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e\u0433\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0435\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432"}),"\n",(0,s.jsxs)(n.p,{children:["\u0412\u044b\u043d\u0435\u0441\u0435\u043d\u0438\u0435 Props \u0432 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b ",(0,s.jsx)(n.code,{children:"types.ts"})," \u043c\u043e\u0436\u0435\u0442 \u043f\u0440\u0438\u0432\u043e\u0434\u0438\u0442\u044c \u043a \u0442\u043e\u043c\u0443, \u0447\u0442\u043e Props \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0431\u0443\u0434\u0443\u0442 \u0437\u0430\u0432\u0438\u0441\u0435\u0442\u044c \u043e\u0442 Props \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044f:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"\u251c\u2500\u2500 UserCard/\n|    \u251c\u2500\u2500 Header/ \n|    |    \u2514\u2500\u2500 Header.tsx\n|    |    \u2514\u2500\u2500 types.ts\n|    |    \u2514\u2500\u2500 index.ts\n|    \u251c\u2500\u2500 UserCard.tsx\n|    \u251c\u2500\u2500 types.ts\n|    \u2514\u2500\u2500 index.ts\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"UserCard/types.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"export type UserCardProps = {\n  headerTitle: ReactNode;\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"HeaderProps"})," \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 Props \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,s.jsx)(n.code,{children:"UserCardProps"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"UserCard/Header/types.ts"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"import { type UserCardProps } from '../types';\n\nexport type HeaderProps = {\n    title: UserCardProps['headerTitle'];\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u041f\u0440\u0438 \u044d\u0442\u043e\u043c \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 ",(0,s.jsx)(n.code,{children:"UserCard"})," \u0437\u0430\u0432\u0438\u0441\u0438\u0442 \u043e\u0442 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 ",(0,s.jsx)(n.code,{children:"Header"})," (\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442 \u0435\u0433\u043e \u0432\u043d\u0443\u0442\u0440\u0438):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"export const UserCard = ({ title }: UserCardProps) => {\n    return (\n        <Header title={title} />\n    );\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u0422\u0430\u043a\u0438\u0435 \u0441\u0432\u044f\u0437\u0438 \u043f\u043e\u0440\u043e\u0436\u0434\u0430\u044e\u0442 ",(0,s.jsx)(n.strong,{children:"\u0446\u0438\u043a\u043b\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438"})," \u043d\u0435 \u0442\u043e\u043b\u044c\u043a\u043e \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u0438\u043c\u043f\u043e\u0440\u0442\u0430 es \u043c\u043e\u0434\u0443\u043b\u0435\u0439, \u043d\u043e \u0438 \u043d\u0430 \u0443\u0440\u043e\u0432\u043d\u0435 \u043f\u0440\u043e\u0435\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043d\u0443\u0442 \u0441\u043b\u043e\u0436\u043d\u044b\u0435 \u0441\u0432\u044f\u0437\u0438"}),"\n",(0,s.jsx)(n.li,{children:"\u0412\u043e\u0437\u043d\u0438\u043a\u043d\u0435\u0442 \u0432\u044b\u0441\u043e\u043a\u043e\u0435 \u0437\u0430\u0446\u0435\u043f\u043b\u0435\u043d\u0438\u0435"}),"\n",(0,s.jsx)(n.li,{children:"\u0421\u043b\u043e\u0436\u043d\u043e \u0432\u044b\u043d\u0435\u0441\u0442\u0438 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0439 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442 \u0434\u043b\u044f \u043f\u0435\u0440\u0435\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u041f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435 API \u0440\u043e\u0434\u0438\u0442\u0435\u043b\u044c\u0441\u043a\u043e\u0433\u043e \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0434\u043e\u043b\u0436\u043d\u043e \u0441\u043e\u0431\u0438\u0440\u0430\u0442\u044c\u0441\u044f \u0438\u0437 \u0442\u0438\u043f\u043e\u0432 \u0434\u043e\u0447\u0435\u0440\u043d\u0438\u0445 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u043e\u0432 \u0441 \u043e\u0434\u043d\u043e\u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043d\u043e\u0439 \u0441\u0432\u044f\u0437\u044c\u044e."}),"\n",(0,s.jsx)(n.h2,{id:"\u0432\u0441\u0435-props-\u0441-\u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439-\u0431\u0443\u043a\u0432\u044b",children:"\u0412\u0441\u0435 Props \u0441 \u043c\u0430\u043b\u0435\u043d\u044c\u043a\u043e\u0439 \u0431\u0443\u043a\u0432\u044b"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u0423\u043f\u0440\u043e\u0449\u0435\u043d\u0438\u0435 \u0444\u043e\u0440\u043c\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u0435\u043d \u0434\u043b\u044f props."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Props = {\n  title: string;\n  userName: string;\n  onClick: () => void;\n  footer: ReactNode;\n  header: FunctionComponent;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Props = {\n  title: string;\n  userName: string;\n  onClick: () => void;\n  Footer: ReactNode;\n  Header: FunctionComponent;\n};\n"})}),"\n",(0,s.jsxs)(n.h2,{id:"\u0432\u0441\u0435-props-\u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438-\u0441-\u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c-on",children:["\u0412\u0441\u0435 props \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u0438 \u0441 \u043f\u0440\u0435\u0444\u0438\u043a\u0441\u043e\u043c ",(0,s.jsx)(n.code,{children:"on"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u0418\u0434\u0435\u043d\u0442\u0438\u0444\u0438\u043a\u0430\u0446\u0438\u044f \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a\u043e\u0432 \u043f\u043e \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044e."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Props = {\n  onClick: () => void;\n  onChange: () => void;\n  onDelete: () => void;\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:"type Props = {\n  handleClick: () => void;\n  remove: () => void;\n  clickHandler: () => void;\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"boolean-props-\u0434\u043e\u043b\u0436\u043d\u044b-\u0438\u043c\u0435\u0442\u044c-\u043f\u0440\u0435\u0444\u0438\u043a\u0441-\u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439-\u043d\u0430-\u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c-\u043a-boolean",children:"Boolean props \u0434\u043e\u043b\u0436\u043d\u044b \u0438\u043c\u0435\u0442\u044c \u043f\u0440\u0435\u0444\u0438\u043a\u0441, \u0443\u043a\u0430\u0437\u044b\u0432\u0430\u044e\u0449\u0438\u0439 \u043d\u0430 \u043f\u0440\u0438\u043d\u0430\u0434\u043b\u0435\u0436\u043d\u043e\u0441\u0442\u044c \u043a Boolean"}),"\n",(0,s.jsxs)(n.p,{children:["\u0421\u043e\u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 ",(0,s.jsx)(n.a,{href:"../naming/vars#boolean-%D0%BF%D0%B5%D1%80%D0%B5%D0%BC%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5-%D0%B4%D0%BE%D0%BB%D0%B6%D0%BD%D1%8B-%D0%B8%D0%BC%D0%B5%D1%82%D1%8C-%D0%BF%D1%80%D0%B5%D1%84%D0%B8%D0%BA%D1%81-%D1%83%D0%BA%D0%B0%D0%B7%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D0%B9-%D0%BD%D0%B0-%D0%BF%D1%80%D0%B8%D0%BD%D0%B0%D0%B4%D0%BB%D0%B5%D0%B6%D0%BD%D0%BE%D1%81%D1%82%D1%8C-%D0%BA-boolean",children:"\u0435\u0434\u0438\u043d\u043e\u043c\u0443 \u043f\u0440\u0430\u0432\u0438\u043b\u0443 \u043d\u0435\u0439\u043c\u0438\u043d\u0433\u0430 Boolean \u043f\u0435\u0440\u0435\u043c\u0435\u043d\u043d\u044b\u0445"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"\u0441\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435-props-\u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f-\u0447\u0435\u0440\u0435\u0437-\u0434\u0432\u043e\u0439\u043d\u044b\u0435-\u043a\u0430\u0432\u044b\u0447\u043a\u0438",children:"\u0421\u0442\u0440\u043e\u043a\u043e\u0432\u044b\u0435 props \u043f\u0435\u0440\u0435\u0434\u0430\u044e\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437 \u0434\u0432\u043e\u0439\u043d\u044b\u0435 \u043a\u0430\u0432\u044b\u0447\u043a\u0438"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2728 \u041c\u043e\u0442\u0438\u0432\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u0421\u0442\u0430\u043d\u0434\u0430\u0440\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u0441\u043f\u043e\u0441\u043e\u0431\u0430 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0438 props."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\ud83e\udd16 \u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f"})}),"\n",(0,s.jsx)(n.p,{children:"\u041d\u0435 \u0438\u043c\u043f\u043b\u0435\u043c\u0435\u043d\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0432 eslint-config."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u2705 Valid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Dialog title=\"\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f\" />\n<Dialog title={isOrg ? '\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u042e\u041b' : '\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u0435 \u0418\u041f'} />\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u274c Invalid"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-tsx",children:"<Dialog title={'\u0421\u043e\u0437\u0434\u0430\u043d\u0438\u0435 \u0437\u0430\u044f\u0432\u043b\u0435\u043d\u0438\u044f'} />\n"})})]})}function a(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},2172:(e,n,r)=>{r.d(n,{I:()=>t,M:()=>i});var s=r(1504);const l={},o=s.createContext(l);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);