"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[77373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"slip-box/reference-notes/golang",id:"slip-box/reference-notes/golang",title:"golang",description:"- Setup",source:"@site/docs/slip-box/reference-notes/golang.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/golang",permalink:"/docs/slip-box/reference-notes/golang",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/golang.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"flow state",permalink:"/docs/slip-box/reference-notes/flow state"},next:{title:"gradient descent",permalink:"/docs/slip-box/reference-notes/gradient descent"}},s={},p=[],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Setup",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"golang")," is opinionated with where the code base should reside, by default ",(0,a.kt)("inlineCode",{parentName:"li"},"$GOPATH")," is set to ",(0,a.kt)("inlineCode",{parentName:"li"},"~HOME/go/")))),(0,a.kt)("li",{parentName:"ul"},"Syntax",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Go programs are written in a ",(0,a.kt)("inlineCode",{parentName:"li"},"main")," package with a ",(0,a.kt)("inlineCode",{parentName:"li"},"main()")," function defined"),(0,a.kt)("li",{parentName:"ul"},"Packages are ways to group similar functions together"),(0,a.kt)("li",{parentName:"ul"},"Functions are be declared within other functions as variables"),(0,a.kt)("li",{parentName:"ul"},"Test file is name ",(0,a.kt)("inlineCode",{parentName:"li"},"xxx_test.go"),", test code must start with ",(0,a.kt)("inlineCode",{parentName:"li"},"Test"),", should only take one argument ",(0,a.kt)("inlineCode",{parentName:"li"},"t *testing.T"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The variable ",(0,a.kt)("inlineCode",{parentName:"li"},"t")," of type ",(0,a.kt)("inlineCode",{parentName:"li"},"testing.T")," give access to methods of the testing framework"))))),(0,a.kt)("li",{parentName:"ul"},"Good practice",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Separate \u201cdomain\u201d code from the outside world (side-effects)"),(0,a.kt)("li",{parentName:"ul"},"Go docs is well written and maintained, launch with ",(0,a.kt)("inlineCode",{parentName:"li"},"godoc -http :8000")," and visit ",(0,a.kt)("inlineCode",{parentName:"li"},"http://locahost:8000/pkg/")),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"t.Helper()")," for the test suite to return the appropriate line number when the test fails"),(0,a.kt)("li",{parentName:"ul"},"The typical TOD cycle is:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Write a test"),(0,a.kt)("li",{parentName:"ul"},"Make the compiler pass"),(0,a.kt)("li",{parentName:"ul"},"Run the test, see if the test fails"),(0,a.kt)("li",{parentName:"ul"},"Write enough code for the test to pass"),(0,a.kt)("li",{parentName:"ul"},"Refactor")))))))}u.isMDXComponent=!0}}]);