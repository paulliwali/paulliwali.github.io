"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3845],{20963:(s,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>m});var t=n(85893),a=n(11151);const i={source:["https://www.evanmiller.org/how-not-to-run-an-ab-test.html"],author:["Evan Miller"],tags:["statistics"]},l="\ud83d\udcf0 Summary (use your own words)",r={id:"slip-box/reference-notes/How not to run an AB test",title:"\ud83d\udcf0 Summary (use your own words)",description:"- Frequentist approach to statistical tests significance can be prone to large sample size",source:"@site/docs/slip-box/reference-notes/How not to run an AB test.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/How not to run an AB test",permalink:"/docs/slip-box/reference-notes/How not to run an AB test",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/How not to run an AB test.md",tags:[{label:"statistics",permalink:"/docs/tags/statistics"}],version:"current",frontMatter:{source:["https://www.evanmiller.org/how-not-to-run-an-ab-test.html"],author:["Evan Miller"],tags:["statistics"]},sidebar:"tutorialSidebar",previous:{title:"How does GPT work",permalink:"/docs/slip-box/reference-notes/How does GPT work"},next:{title:"How to Become a Data Engineer",permalink:"/docs/slip-box/reference-notes/How to Become a Data Engineer"}},c={},m=[];function o(s){const e={annotation:"annotation",em:"em",h1:"h1",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",msup:"msup",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...s.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"-summary-use-your-own-words",children:"\ud83d\udcf0 Summary (use your own words)"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Frequentist approach to statistical tests significance can be prone to large sample size"}),"\n"]}),"\n",(0,t.jsx)(e.h1,{id:"\ufe0f-notes",children:"\u270d\ufe0f Notes"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:'Don\'t fall prey to "repeated significance testing errors"'}),"\n",(0,t.jsxs)(e.li,{children:['When a A/B test says there is a "95% of chance of beating the original" or "90% probability of statistical significance"',"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:'It is asking the question "what is the chance that we observe a difference like what we see in data randomly?"'}),"\n",(0,t.jsx)(e.li,{children:"And that is the significance threshold (0.05 or 0.01)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["However, this is precedent on a key decision -> ",(0,t.jsx)(e.strong,{children:"the sample size was fixed in advance"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Because might be tempted to take action ",(0,t.jsx)(e.em,{children:"once we see significant results"})," and if that becomes insignificant later we wouldn't have known"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["So the key is to determine a sample size ",(0,t.jsx)(e.em,{children:"before the experiement"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["One rule of thumb is ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsxs)(e.mrow,{children:[(0,t.jsx)(e.mi,{children:"N"}),(0,t.jsx)(e.mo,{children:"="}),(0,t.jsx)(e.mn,{children:"16"}),(0,t.jsx)(e.mo,{children:"\u2217"}),(0,t.jsxs)(e.mfrac,{children:[(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mi,{children:"\u03c3"}),(0,t.jsx)(e.mn,{children:"2"})]}),(0,t.jsxs)(e.msup,{children:[(0,t.jsx)(e.mi,{children:"\u03b4"}),(0,t.jsx)(e.mn,{children:"2"})]})]})]}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"N=16*\\frac{\\sigma^2}{\\delta^2}"})]})})}),(0,t.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6833em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(e.span,{className:"mrel",children:"="}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(e.span,{className:"mord",children:"16"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(e.span,{className:"mbin",children:"\u2217"}),(0,t.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"1.3629em",verticalAlign:"-0.345em"}}),(0,t.jsxs)(e.span,{className:"mord",children:[(0,t.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,t.jsx)(e.span,{className:"mfrac",children:(0,t.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,t.jsxs)(e.span,{className:"vlist-r",children:[(0,t.jsxs)(e.span,{className:"vlist",style:{height:"1.0179em"},children:[(0,t.jsxs)(e.span,{style:{top:"-2.655em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:(0,t.jsxs)(e.span,{className:"mord mtight",children:[(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03785em"},children:"\u03b4"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.7463em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.786em",marginRight:"0.0714em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})})})]}),(0,t.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,t.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:(0,t.jsxs)(e.span,{className:"mord mtight",children:[(0,t.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"\u03c3"}),(0,t.jsx)(e.span,{className:"msupsub",children:(0,t.jsx)(e.span,{className:"vlist-t",children:(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.8913em"},children:(0,t.jsxs)(e.span,{style:{top:"-2.931em",marginRight:"0.0714em"},children:[(0,t.jsx)(e.span,{className:"pstrut",style:{height:"2.5em"}}),(0,t.jsx)(e.span,{className:"sizing reset-size3 size1 mtight",children:(0,t.jsx)(e.span,{className:"mord mtight",children:"2"})})]})})})})})]})})})]})]}),(0,t.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,t.jsx)(e.span,{className:"vlist-r",children:(0,t.jsx)(e.span,{className:"vlist",style:{height:"0.345em"},children:(0,t.jsx)(e.span,{})})})]})}),(0,t.jsx)(e.span,{className:"mclose nulldelimiter"})]})]})]})]})," where ",(0,t.jsxs)(e.span,{className:"katex",children:[(0,t.jsx)(e.span,{className:"katex-mathml",children:(0,t.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(e.semantics,{children:[(0,t.jsx)(e.mrow,{children:(0,t.jsx)(e.mi,{children:"\u03b4"})}),(0,t.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\delta"})]})})}),(0,t.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,t.jsxs)(e.span,{className:"base",children:[(0,t.jsx)(e.span,{className:"strut",style:{height:"0.6944em"}}),(0,t.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.03785em"},children:"\u03b4"})]})})]})," is the minimum effect you want to observe"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.li,{children:"For Bayesian A/B testing, this is less of a problem compared to the frequentist approach. But not completely fool-proof -> [[Is Bayesian AB testing immune to peeking]]"}),"\n"]})]})}function h(s={}){const{wrapper:e}={...(0,a.a)(),...s.components};return e?(0,t.jsx)(e,{...s,children:(0,t.jsx)(o,{...s})}):o(s)}},11151:(s,e,n)=>{n.d(e,{Z:()=>r,a:()=>l});var t=n(67294);const a={},i=t.createContext(a);function l(s){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(a):s.components||a:l(s.components),t.createElement(i.Provider,{value:e},s.children)}}}]);