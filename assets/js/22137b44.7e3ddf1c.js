"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[40549],{91402:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(85893),t=i(11151);const r={},l=void 0,o={id:"slip-box/reference-notes/Software 2.0",title:"Software 2.0",description:"\u2317 Metadata",source:"@site/docs/slip-box/reference-notes/Software 2.0.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/Software 2.0",permalink:"/docs/slip-box/reference-notes/Software 2.0",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/Software 2.0.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Slow Living",permalink:"/docs/slip-box/reference-notes/Slow Living"},next:{title:"Some thoughts on machine learning with small data",permalink:"/docs/slip-box/reference-notes/Some thoughts on machine learning with small data"}},a={},c=[];function h(e){const n={a:"a",em:"em",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"\u2317 Metadata"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Source: ",(0,s.jsx)(n.a,{href:"https://karpathy.medium.com/software-2-0-a64152b37c35",children:"https://karpathy.medium.com/software-2-0-a64152b37c35"})]}),"\n",(0,s.jsx)(n.li,{children:"Author: Andrej Karpathy"}),"\n",(0,s.jsx)(n.li,{children:"Tags: #programming #machine-learning"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\ud83d\udcf0 Summary (use your own words)"}),"\n",(0,s.jsx)(n.p,{children:'There is a shift in programs that execute exact instructions line by line to programs that knows the rules and rewards and finds the "best" way to achieve this end result.'}),"\n",(0,s.jsx)(n.p,{children:"\u270d\ufe0f Notes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Classical Software 1.0 stack is written in Python, C, etc","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Explicit instructions to tell the program what to do"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Many still think that machine learning is ",(0,s.jsx)(n.em,{children:"just"})," a toolbox to find creative solutions to online challenges","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Have to fully accepted that it is not the future but ",(0,s.jsx)(n.em,{children:"here already"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Software 2.0 is written in an abstract, human-unreadible language","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Also known as "black-box" program'}),"\n",(0,s.jsxs)(n.li,{children:["Consists of:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"datasets that defines the desired outcomes"}),"\n",(0,s.jsx)(n.li,{children:"architecture that defines the structure but with the details waiting for be filled in"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["This is crucial to tackle future problems because there are lots of real-world problems where it is easier to collect data but very hard to define the explicit instructions to solve it","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Examples of transitioning from 1.0 to 2.0:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Visual recognition - from engineered features with bits of SVM to using convolutional neural network architectures"}),"\n",(0,s.jsx)(n.li,{children:"Speech recognition - from preprocessing, gaussian mixture models, hidden markov models to entirely neural neets"}),"\n",(0,s.jsx)(n.li,{children:"Speech synthesis - from stiching to large ConvNets"}),"\n",(0,s.jsx)(n.li,{children:"Machine translation - from phrase based statistical techniques to weakly or unsupervised neural networks"}),"\n",(0,s.jsx)(n.li,{children:"Games - from hand coded rule based to ConvNet"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Benefits of 2.0","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Computationally homogeneous","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Entirely consistent of matrix multiplications and activation equation"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Simple to bake into silicon","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"instruction set being much smaller it is easier to make smaller chips"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Constant running time","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Each iteration of the forward pass is the same"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Highly portable","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Once trained, the sequence of matrix multiplication is easy to run"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Agile","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Easy to retrain and increase or decrease the speed"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Limitations of 2.0","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If debugging and explaining code was already the hardest part of 1.0, ",(0,s.jsx)(n.strong,{children:"then this is infinitely harder with 2.0"})]}),"\n",(0,s.jsx)(n.li,{children:"Silent failures or gives very wrong results"}),"\n",(0,s.jsx)(n.li,{children:"How do we share, manage and deploy software 2.0?"}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>o,a:()=>l});var s=i(67294);const t={},r=s.createContext(t);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);