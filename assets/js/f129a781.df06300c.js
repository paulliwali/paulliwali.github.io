"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[95732],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},29592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"slip-box/reference-notes/practical-statistics",id:"slip-box/reference-notes/practical-statistics",title:"practical-statistics",description:"- Metadata",source:"@site/docs/slip-box/reference-notes/practical-statistics.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/practical-statistics",permalink:"/docs/slip-box/reference-notes/practical-statistics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/practical-statistics.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"normal equation",permalink:"/docs/slip-box/reference-notes/normal equation"},next:{title:"python-logging",permalink:"/docs/slip-box/reference-notes/python-logging"}},s={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Metadata"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Source: ",(0,n.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/practical-statistics-for/9781491952955/ch04.html"},"https://www.oreilly.com/library/view/practical-statistics-for/9781491952955/ch04.html")),(0,n.kt)("li",{parentName:"ul"},"Author: Peter Bruce"),(0,n.kt)("li",{parentName:"ul"},"Tags: #books #statistics"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h2",{parentName:"li",id:"chapter-4---regression-and-prediction"},"Chapter 4 - Regression and Prediction"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("h3",{parentName:"li",id:"confidence-and-prediction-intervals"},"Confidence and Prediction Intervals"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Confidence intervals are uncertainty intervals placed around regression coefficients and predictions"),(0,n.kt)("li",{parentName:"ul"},"Bootstrap algorithm to understand this",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},'Consider each row as a single "ticket" and place n tickets in a box'))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:2},(0,n.kt)("li",{parentName:"ol"},"Draw a ticket at random, record the values, and replace it in the box"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:3},(0,n.kt)("li",{parentName:"ol"},"Repeat step 2 n times; which is one bootstrap resample"))),(0,n.kt)("li",{parentName:"ul"},"4.Fit a regression to the bootstrap sample, and record the estimated coefficients"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:5},(0,n.kt)("li",{parentName:"ol"},"Repeat step 2 to 4, say, 1000 times"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:6},(0,n.kt)("li",{parentName:"ol"},"Which is 1000 bootstrap values for each coefficient; find the appropriate percentiles for each one to get the confidence interval"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:7},(0,n.kt)("li",{parentName:"ol"},"This can be re-formulated to show the prediction interval"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("ol",{parentName:"li",start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Prediction interval"),"\xa0gives uncertainty around a single value,\xa0",(0,n.kt)("strong",{parentName:"li"},"confidence interval\xa0"),"pertains to a mean or other statistic calculated from multiple values")))))))))))}u.isMDXComponent=!0}}]);