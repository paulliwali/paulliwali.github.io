"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5556],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},53046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="General Coding Principles",l={unversionedId:"code/general",id:"code/general",title:"General Coding Principles",description:"Keys to writing clean functions",source:"@site/docs/code/general.md",sourceDirName:"code",slug:"/code/general",permalink:"/docs/code/general",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code/general.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"bash-snippets",permalink:"/docs/code/bash-snippets"},next:{title:"Git Basics",permalink:"/docs/code/git-basics"}},c={},s=[{value:"Keys to writing clean functions",id:"keys-to-writing-clean-functions",level:2},{value:"Clean Code Practice",id:"clean-code-practice",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general-coding-principles"},"General Coding Principles"),(0,a.kt)("h2",{id:"keys-to-writing-clean-functions"},"Keys to writing clean functions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"How easy would it be to unit test the function"),(0,a.kt)("li",{parentName:"ul"},"How many lines are in a function, if it greater than 20 lines then it might be doing too many things"),(0,a.kt)("li",{parentName:"ul"},'What are the logical steps each function is performing, if the description is "do A then B then C", then it can probably be split into 3 functions'),(0,a.kt)("li",{parentName:"ul"},"Data fetching -> Data processing/transformation -> Data visualization")),(0,a.kt)("h2",{id:"clean-code-practice"},"Clean Code Practice"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"DRY Principle"),(0,a.kt)("li",{parentName:"ol"},"Minimize entities, classes, functions"),(0,a.kt)("li",{parentName:"ol"},"It should be readable and simple"),(0,a.kt)("li",{parentName:"ol"},"Be testable"),(0,a.kt)("li",{parentName:"ol"},"SOLID Principle"),(0,a.kt)("li",{parentName:"ol"},"Careful with dependencies, should be one directional"),(0,a.kt)("li",{parentName:"ol"},"Don't hardcode")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'redis-cli -a "my-pass" --bigkeys -n <DATABASE_NUMBER>\n')))}u.isMDXComponent=!0}}]);