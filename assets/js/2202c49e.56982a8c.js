"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[29009],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),h=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=h(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=h(n),c=i,m=u["".concat(l,".").concat(c)]||u[c]||d[c]||r;return n?o.createElement(m,a(a({ref:t},p),{},{components:n})):o.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var h=2;h<r;h++)a[h]=n[h];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},87923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>h});var o=n(87462),i=(n(67294),n(3905));const r={slug:"fitbit-vs-whoop",title:"FitBit vs Whoop",authors:"pdeng",tags:["health","life"]},a=void 0,s={permalink:"/blog/fitbit-vs-whoop",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-24-fitbit-vs-whoop/index.md",source:"@site/blog/2023-02-24-fitbit-vs-whoop/index.md",title:"FitBit vs Whoop",description:"Using FitBit and Whoop to monitor my sleep quality over two weeks from 2021-12-12 to 2021-12-23 and this is what I found",date:"2023-02-24T00:00:00.000Z",formattedDate:"February 24, 2023",tags:[{label:"health",permalink:"/blog/tags/health"},{label:"life",permalink:"/blog/tags/life"}],readingTime:2.92,hasTruncateMarker:!0,authors:[{name:"Paul Deng",title:"Magpie",url:"https://github.com/paulliwali",imageURL:"https://github.com/paulliwali.png",key:"pdeng"}],frontMatter:{slug:"fitbit-vs-whoop",title:"FitBit vs Whoop",authors:"pdeng",tags:["health","life"]},nextItem:{title:"Brew Logs 2023",permalink:"/blog/brew-logs-2023"}},l={authorsImageUrls:[void 0]},h=[{value:"Context",id:"context",level:2},{value:"Components",id:"components",level:2},{value:"Issues",id:"issues",level:2},{value:"Outcome",id:"outcome",level:2}],p={toc:h};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Using FitBit and Whoop to monitor my sleep quality over two weeks from 2021-12-12 to 2021-12-23 and this is what I found"),(0,i.kt)("h2",{id:"context"},"Context"),(0,i.kt)("p",null,'When I mention that I am looking into how to sleep better, my friends and family first instinct is always "oh are you having trouble sleeping?"\nIt is not that I have trouble sleeping, it is just that I want to optimize sleep to the absolute maximum.\nThe importance of good quality sleep is increasingly being understood as the ',(0,i.kt)("strong",{parentName:"p"},"single most important factor to health"),".\nWouldn't I want this to be optimized better than my monster-hunter charge blade build?"),(0,i.kt)("p",null,"The focus of this monitoring is to see which device correlate with my personal experience better so I can start to trust its outputs."),(0,i.kt)("p",null,"I will wear both devices on each of my wrists and flip halfway through after a week. And note how each night's sleep correlated with how I felt."),(0,i.kt)("h2",{id:"components"},"Components"),(0,i.kt)("p",null,"In terms of sleep length:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FitBit tracked an average of 6.8 hours for both weeks"),(0,i.kt)("li",{parentName:"ul"},"Whoop tracked that I slept for an average of 6.5 hours (with 8 hours in bed) in the first week and an average of 5.1 hours (6 hours in bed) for second week")),(0,i.kt)("p",null,"And for sleep quality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FitBit tracked a score of 70 for both weeks"),(0,i.kt)("li",{parentName:"ul"},"Whoop tracked 71% and 52% performance")),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"Why was there a huge discrepancy in the second week?\nThis leads to the issue I had with Whoop, the sensors are less forgiving if its not worn properly. Some examples of this are:"),(0,i.kt)("p",null,"<","table",">","\n","<","tr",">","\n","<","td",">","<",'img src="fitbit_20221223-095343.webp"  alt="1" width ="360" height ="640"',">","<","/td",">","\n","<","td",">","<",'img src="whoop_20221223-095331.webp" alt="2" width ="360" height ="640"',">","<","/td",">","\n","<","td",">","<","p",">","where we see huge differences!","<","/p",">","<","/td",">","\n","<","/tr",">","\n","<","tr",">","\n","<","td",">","<",'img src="fitbit_20221220-174041.webp"  alt="1" width ="360" height ="640"',">","<","/td",">","\n","<","td",">","<",'img src="whoop_20221220-174026.webp" alt="2" width ="360" height ="640"',">","<","/td",">","\n","<","td",">","<","p",">","And cases where we see that even if the total hours is close.\n","<","br",">"," The allocation of the sleep stages is mismatched.\n","<","/p",">","<","/td",">","\n","<","/tr",">","\n","<","/table",">"),(0,i.kt)("p",null,"<","table",">","\n","<","tr",">","\n","<","td",">","<",'img src="fitbit_20221214-061811.webp"  alt="1" width ="360" height ="640"',">","<","/td",">","\n","<","td",">","<",'img src="whoop_20221214-062857.webp" alt="2" width ="360" height ="640"',">","<","/td",">","\n","<","td",">","<","p",">","There are times where it matched up well.","<","/p",">","<","/td",">","\n","<","/tr",">","\n","<","/table",">"),(0,i.kt)("p",null,"But the problem is that it is very inconsistent.\nAnd beyond this, I don't fully feel correlated with the results tracked by either devices.\nMore often than not, I feel well rested and did not wake up in the middle of the night as opposed to what the results show me - that I slept very lightly and woke several times.\nAlthough FitBit is more consistent in measuring my sleep, it seems to under-estimate the hours and quality."),(0,i.kt)("p",null,"From what I have read and learned by speaking to friends in the wearable tech.\nThe basic hardware technology is identical across the different wearables, and what makes the differences is the algorithm used to determine sleep based on the signals the hardware is sending.\nDepending on how the algorithm is tuned, the resulting analysis can vary from device to device.\nMaybe Google trained their algorithm on someone who has a lower heart rate or less movement...but it doesn't test well on me."),(0,i.kt)("h2",{id:"outcome"},"Outcome"),(0,i.kt)("p",null,"I will definitely not be switching to Whoop, since it is more expensive and less consistent in tracking sleep for me.\nA side note, the strain calculation is pretty spot on, but I never recover enough for it.\nEven though, FitBit underestimates my total sleep, I think it does a good job on being consistent in its analysis and I can just do manual adjustments from the baseline."))}u.isMDXComponent=!0}}]);