"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[32831],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return a?n.createElement(f,o(o({ref:t},u),{},{components:a})):n.createElement(f,o({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},12370:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const i={},o=void 0,l={unversionedId:"slip-box/reference-notes/Zillow Machine Learning Team",id:"slip-box/reference-notes/Zillow Machine Learning Team",title:"Zillow Machine Learning Team",description:"- Metadata",source:"@site/docs/slip-box/reference-notes/Zillow Machine Learning Team.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/Zillow Machine Learning Team",permalink:"/docs/slip-box/reference-notes/Zillow Machine Learning Team",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/Zillow Machine Learning Team.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Zettelkasten Method",permalink:"/docs/slip-box/reference-notes/Zettelkasten Method"},next:{title:"aaronson-oracle-baseball",permalink:"/docs/slip-box/reference-notes/aaronson-oracle-baseball"}},s={},c=[],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Metadata",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"URL: ",(0,r.kt)("a",{parentName:"li",href:"https://vinvashishta.substack.com/p/zillow-just-gave-us-a-look-at-machine"},"https://vinvashishta.substack.com/p/zillow-just-gave-us-a-look-at-machine")),(0,r.kt)("li",{parentName:"ul"},"#data-science #industry"))),(0,r.kt)("li",{parentName:"ul"},"Summary:"),(0,r.kt)("li",{parentName:"ul"},"Notes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stock is down 30% and laid off 25% of their staff"),(0,r.kt)("li",{parentName:"ul"},"Their home value estimation models were not producing the results as expected",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They started using it for buying and flipping homes"),(0,r.kt)("li",{parentName:"ul"},"Zillow was going to buy homes and flip them for profit, but this relied on a very robust model that can accurately predict house prices in 6 months"))),(0,r.kt)("li",{parentName:"ul"},"It also relied on a linear increase in house values which doesn't happen in short term"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Stability")," is a key assumption for statistical models, and that's not a given in complex systems like the housing market",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The training data's distributions have distributions"),(0,r.kt)("li",{parentName:"ul"},"Topology and Differential Geometry is important"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Distribution of distributions can be modeled as deformations in the inference space")),(0,r.kt)("li",{parentName:"ul"},"Why overfitting creates miraculous accuracy"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Models needs to learn about deformations by having training data from disconnected sources to the outcome")))),(0,r.kt)("li",{parentName:"ul"},"To figure out the relationships between these features and the outcome requires experimentation and a chain of models",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"[","[Causal Inference]","]"),(0,r.kt)("li",{parentName:"ul"},"Deep learning models",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Throw all the features at it and let it figure it out"))))),(0,r.kt)("li",{parentName:"ul"},"Large production model architectures are expensive and time consuming to set up",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Feature stores need to recommend features which could improve model accuracy"),(0,r.kt)("li",{parentName:"ul"},"Experiment management system need to be able to track different experiments"),(0,r.kt)("li",{parentName:"ul"},"Review is difficult"))),(0,r.kt)("li",{parentName:"ul"},"Tips for Data Scientists",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When revenue starts getting booked against ML projects - ",(0,r.kt)("strong",{parentName:"li"},"model reliability is critical")),(0,r.kt)("li",{parentName:"ul"})))))))}p.isMDXComponent=!0}}]);