"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9519],{26987:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=i(85893),s=i(11151);const r={},o=void 0,l={id:"daily-notes/2020/2020-11-06",title:"2020-11-06",description:"- \u2600\ufe0fDaily Log:",source:"@site/docs/daily-notes/2020/2020-11-06.md",sourceDirName:"daily-notes/2020",slug:"/daily-notes/2020/2020-11-06",permalink:"/docs/daily-notes/2020/2020-11-06",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/daily-notes/2020/2020-11-06.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"2020-11-05",permalink:"/docs/daily-notes/2020/2020-11-05"},next:{title:"2020-11-07",permalink:"/docs/daily-notes/2020/2020-11-07"}},a={},c=[];function d(e){const n={a:"a",li:"li",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u2600\ufe0fDaily Log:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Lit review paper on inferring trip mode and purpose from GPS data","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Source: ",(0,t.jsx)(n.a,{href:"https://www.sciencedirect.com/science/article/pii/S1877042814041597",children:"https://www.sciencedirect.com/science/article/pii/S1877042814041597"})]}),"\n",(0,t.jsx)(n.li,{children:"GPS gives richer path data, but needs to be augmented with OD information to be useful"}),"\n",(0,t.jsx)(n.li,{children:"Machine learning is often utilized to determine the mode, while rule based methods are popular for inferring purpose"}),"\n",(0,t.jsxs)(n.li,{children:["Error detection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Outliers are identified with unlikely attributes like speed over 250 km/hr"}),"\n",(0,t.jsx)(n.li,{children:"Successive filters to remove outliers: number of NSAT used to record (<3), HDOP (>5), heading and speed of 0 when GPS data trace is plotted, remove multipath error in urban canyons"}),"\n",(0,t.jsx)(n.li,{children:"Track points whose distance is less than 10m of the previous one, track points with greater than 200 km/hr speed, track points with less than 5 km/hr and time gap with previous track point of at least 1 minute, delete trips with less than 4 track points"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Trip identification","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The combination of dwell time, speed, and visual checks on map to determine when a set of paths is a trip"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Mode detection","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Input features (from GPS, GIS, Accelerometer, and Respondent's information)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"duration, speed, acceleration, distance, HDOP/NSAT, heading, street network, rail station, bus routes, bus stops, ownership of vehicle"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Machine learning (NN, Bayesian Network, Decision Tree, SVM)"}),"\n",(0,t.jsx)(n.li,{children:"Probability Method (Fuzzy logic rules, probability matrix)"}),"\n",(0,t.jsx)(n.li,{children:"Criteria based Method"}),"\n",(0,t.jsx)(n.li,{children:"Accuracies of high 70-90% seems to be achievable"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Purpose inference","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Input features (From GIS, GPS, Respondents' information, other information)","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Land use, POI information, duration of stay, trip ending time, frequent activity, key address, demographic data, transport mode"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Rule based Method (Land-use-and-purpose-matching table, heuristic rules, closest POI matching rules, single deterministic matching method, historical data matching method)"}),"\n",(0,t.jsx)(n.li,{children:"Probabilistic method (multinomial logit model, probability calculation based on distance)"}),"\n",(0,t.jsx)(n.li,{children:"Machine learning (classification/regression tree, discriminant analysis)"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Retrospective::","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"One week ago: [[October 30th, 2020]]"}),"\n",(0,t.jsx)(n.li,{children:"One month ago: [[October 6th, 2020]]"}),"\n",(0,t.jsx)(n.li,{children:"One quarter ago: [[August 6th, 2020]]"}),"\n",(0,t.jsx)(n.li,{children:"One year ago: [[November 6th, 2019]]"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Daily Stoic::","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Resign over fate is a consistent attitude for stoics"}),"\n",(0,t.jsx)(n.li,{children:"Trails and triumph from one day doesn\u2019t carry into the next, you can only do your best today"}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>l,a:()=>o});var t=i(67294);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);