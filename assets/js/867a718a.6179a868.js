"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[65758],{8839:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(85893),s=t(11151);const o={},a=void 0,l={id:"slip-box/literature-notes/Anomoly Detection",title:"Anomoly Detection",description:"- Anomaly detection is important to any data analytics application",source:"@site/docs/slip-box/literature-notes/Anomoly Detection.md",sourceDirName:"slip-box/literature-notes",slug:"/slip-box/literature-notes/Anomoly Detection",permalink:"/docs/slip-box/literature-notes/Anomoly Detection",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/literature-notes/Anomoly Detection.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcec Slip Box Index",permalink:"/docs/slip-box/\ud83d\udcec Slip Box Index"},next:{title:"\ud83d\udcf0 Summary (use your own words)",permalink:"/docs/slip-box/literature-notes/Causal Inference"}},r={},c=[];function d(e){const n={em:"em",li:"li",ol:"ol",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Anomaly detection is important to any data analytics application","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Able to keep track of anomalies is crucial to ensure unintended positive or negative effects are removed"}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"anomalies"})," are outliers in data point that does not follow the ",(0,i.jsx)(n.strong,{children:"collective common pattern"})," of the majority of the data points and hence can be easily identified"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"time series anomaly"})," is a data point that doesn't follow the collective tread or seasonal or cyclic pattern of the entire data and is ",(0,i.jsx)(n.strong,{children:"significantly"})," distinct"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Ways to detect anomaly in time series","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Predictive confidence level approach"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Statistical profiling approach"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:"Clustering based unsupervised approach"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Predictive confidence level approach","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Build a model using historical data to estimate the overall trend, seasonal or cyclic pattern of the time series data"}),"\n",(0,i.jsxs)(n.li,{children:["Forecast future values and based on error rates, we can come up with confidence interval or confidence band for the predicted values and ",(0,i.jsx)(n.em,{children:"any observed data points which is falling beyond this confidence band is an anomaly"})]}),"\n",(0,i.jsx)(n.li,{children:"Advantages of this approach is finding local outlier"}),"\n",(0,i.jsx)(n.li,{children:"Disadvantages of this approach is it relies on the efficiency of the predictive model"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Statistical profiling approach","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Fast and useful while producing a controlled and explainable outcome"}),"\n",(0,i.jsx)(n.li,{children:"Calculating statistical values like mean or median moving average of the historical data and using a standard deviation to come up with a band of statistical values which can define the upper and lower bound"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Good baseline model"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Disadvantage is detecting local outliers"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Clustering based unsupervised approach","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Does not require you to label the data, useful for when there are unknown outliers"}),"\n",(0,i.jsxs)(n.li,{children:["Disadvantage is that it requires lots of tinkering with the cluster sizes and hard to dynamically estimate the cluster number for each series","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Density based spatial clustering of applications with noise (DBSCAN)"}),"\n",(0,i.jsx)(n.li,{children:"Easy to tune, and does not group all data points to a cluster"}),"\n",(0,i.jsx)(n.li,{children:"Helps to map the new normal which most other approaches may fail"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var i=t(67294);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);