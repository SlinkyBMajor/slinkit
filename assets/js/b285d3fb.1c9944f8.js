"use strict";(self.webpackChunkslinky_kit=self.webpackChunkslinky_kit||[]).push([[489],{7244:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=r(4848),o=r(8453);const s={},a="Reusable react hook forms input",c={id:"code/react-hook-forms/input",title:"Reusable react hook forms input",description:"",source:"@site/docs/code/react-hook-forms/input.md",sourceDirName:"code/react-hook-forms",slug:"/code/react-hook-forms/input",permalink:"/slinkit/docs/code/react-hook-forms/input",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code/react-hook-forms/input.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/slinkit/docs/intro"}},i={},u=[];function m(e){const t={code:"code",h1:"h1",pre:"pre",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"reusable-react-hook-forms-input",children:"Reusable react hook forms input"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-jsx",children:'import React from "react";\nimport { UseFormRegisterReturn, useFormContext } from "react-hook-form";\nimport { get } from "lodash";\nimport { InputErrorStyle } from "./types";\nimport { classNames } from "@/lib/styling";\n\ninterface RHFInputProps\n  extends UseFormRegisterReturn<string>,\n    Omit<\n      React.InputHTMLAttributes<HTMLInputElement>,\n      "name" | "onBlur" | "onChange"\n    > {\n  errorStyle?: InputErrorStyle;\n  className?: string;\n}\n\nfunction RHFInput(\n  { className, errorStyle = "border", name, ...rest }: RHFInputProps,\n  ref: React.Ref<HTMLInputElement>\n) {\n  const {\n    formState: { errors },\n  } = useFormContext();\n\n  return (\n    <input\n      className={classNames(\n        "border border-transparent",\n        className,\n        "type" in get(errors, name, {}) &&\n          (errorStyle === "border"\n            ? "border border-red-500 dark:border-red-400"\n            : "placeholder:text-red-500 dark:placeholder:text-red-400")\n      )}\n      name={name}\n      {...rest}\n      ref={ref}\n    />\n  );\n}\n\nexport default React.forwardRef<HTMLInputElement, RHFInputProps>(RHFInput);\n\n'})})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var n=r(6540);const o={},s=n.createContext(o);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);