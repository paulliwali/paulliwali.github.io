"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[91524],{77342:(s,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>h});var n=a(85893),t=a(11151);const i={},l="Hypothesis Testing",r={id:"slip-box/reference-notes/Frequentist Inference Testing",title:"Frequentist Inference Testing",description:"Making an inference about a population based on a sample of data drawn from that population",source:"@site/docs/slip-box/reference-notes/Frequentist Inference Testing.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/Frequentist Inference Testing",permalink:"/docs/slip-box/reference-notes/Frequentist Inference Testing",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/Frequentist Inference Testing.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Franklin 299",permalink:"/docs/slip-box/reference-notes/Franklin 299"},next:{title:"Functional Data Engineering",permalink:"/docs/slip-box/reference-notes/Functional Data Engineering"}},c={},h=[];function m(s){const e={annotation:"annotation",blockquote:"blockquote",em:"em",h1:"h1",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mn:"mn",mo:"mo",mover:"mover",mrow:"mrow",msqrt:"msqrt",msub:"msub",ol:"ol",p:"p",path:"path",semantics:"semantics",span:"span",strong:"strong",svg:"svg",ul:"ul",...(0,t.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.p,{children:"Making an inference about a population based on a sample of data drawn from that population"}),"\n",(0,n.jsx)(e.h1,{id:"hypothesis-testing",children:"Hypothesis Testing"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["Using sample data to evaluate a hypothesis about a ",(0,n.jsx)(e.strong,{children:"population parameter"})]}),"\n",(0,n.jsxs)(e.li,{children:["Steps","\n",(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Formulate a null (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"H"}),(0,n.jsx)(e.mn,{children:"0"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"H_0"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0813em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"0"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),") and alternative (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"H"}),(0,n.jsx)(e.mn,{children:"1"})]})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"H_1"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3011em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.55em",marginLeft:"-0.0813em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:"1"})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(e.span,{})})})]})})]})]})})]}),") hypothesis where the null hypothesis says there is no difference or no effect"]}),"\n",(0,n.jsxs)(e.li,{children:["Select a significance level (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsx)(e.mrow,{children:(0,n.jsx)(e.mi,{children:"\u03b1"})}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\alpha"})]})})}),(0,n.jsx)(e.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.4306em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.0037em"},children:"\u03b1"})]})})]}),") which is the risk we are willing to reject null hypothesis when it might be true. In other words if we selected 5% we are saying that we accept a 5% chance that we are saying there ",(0,n.jsx)(e.em,{children:"is an effect when there isn't"})," -> ",(0,n.jsx)(e.strong,{children:"type I error or false positive"})]}),"\n",(0,n.jsxs)(e.li,{children:["Calculate the test statistic from the appropriate test which gives the standardized value","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:["t-test for mean difference of smaller samples (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:"<"}),(0,n.jsx)(e.mn,{children:"30"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n<30"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:"<"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"30"})]})]})]}),")","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"one-sample t-test, independent two-sample t-test, paired sample t-test"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["z-test for larger samples (",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"n"}),(0,n.jsx)(e.mo,{children:">"}),(0,n.jsx)(e.mo,{children:"="}),(0,n.jsx)(e.mn,{children:"30"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"n>=30"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.5782em",verticalAlign:"-0.0391em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",children:"n"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,n.jsx)(e.span,{className:"mrel",children:">="}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.6444em"}}),(0,n.jsx)(e.span,{className:"mord",children:"30"})]})]})]}),")"]}),"\n",(0,n.jsx)(e.li,{children:"ANOVA for difference in mean of multiple groups"}),"\n",(0,n.jsx)(e.li,{children:"Chi-squared test of independence for association between two categorical variables"}),"\n",(0,n.jsx)(e.li,{children:"Chi-squared goodness of fit test for checking if observed frequency match expected frequency for a categorical variable"}),"\n",(0,n.jsx)(e.li,{children:"many more..."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(e.li,{children:["Determine the p-value from the test result which is the ",(0,n.jsx)(e.em,{children:"probability of obtaining the same test result at least as extreme as the observed result, assuming null hypothesis is true"})]}),"\n",(0,n.jsxs)(e.li,{children:["Reject or accept the null hypothesis","\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsx)(e.li,{children:"If p-value is less than our accepted significance level, then it means we have strong evidence to reject the null hypothesis"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(e.h1,{id:"confidence-interval",children:"Confidence Interval"}),"\n",(0,n.jsx)(e.p,{children:"In this frequentist approach, we can derive a range of values from the sample data that we believe to contain the true population statistic with some level of confidence."}),"\n",(0,n.jsxs)(e.p,{children:["Calculated by ",(0,n.jsxs)(e.span,{className:"katex",children:[(0,n.jsx)(e.span,{className:"katex-mathml",children:(0,n.jsx)(e.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(e.semantics,{children:[(0,n.jsxs)(e.mrow,{children:[(0,n.jsxs)(e.mover,{accent:"true",children:[(0,n.jsx)(e.mi,{children:"X"}),(0,n.jsx)(e.mo,{children:"\u02c9"})]}),(0,n.jsx)(e.mo,{children:"\xb1"}),(0,n.jsxs)(e.msub,{children:[(0,n.jsx)(e.mi,{children:"Z"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.mi,{children:"\u03b1"}),(0,n.jsx)(e.mi,{mathvariant:"normal",children:"/"}),(0,n.jsx)(e.mn,{children:"2"})]})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:"("}),(0,n.jsxs)(e.mfrac,{children:[(0,n.jsx)(e.mi,{children:"\u03c3"}),(0,n.jsxs)(e.mrow,{children:[(0,n.jsx)(e.msqrt,{children:(0,n.jsx)(e.mo,{stretchy:"false",children:"("})}),(0,n.jsx)(e.mi,{children:"N"}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]})]}),(0,n.jsx)(e.mo,{stretchy:"false",children:")"})]}),(0,n.jsx)(e.annotation,{encoding:"application/x-tex",children:"\\bar{X}\\pm Z_{\\alpha/2}(\\frac{\\sigma}{\\sqrt(N)})"})]})})}),(0,n.jsxs)(e.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"0.9034em",verticalAlign:"-0.0833em"}}),(0,n.jsx)(e.span,{className:"mord accent",children:(0,n.jsx)(e.span,{className:"vlist-t",children:(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.8201em"},children:[(0,n.jsxs)(e.span,{style:{top:"-3em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"X"})]}),(0,n.jsxs)(e.span,{style:{top:"-3.2523em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"accent-body",style:{left:"-0.1667em"},children:(0,n.jsx)(e.span,{className:"mord",children:"\u02c9"})})]})]})})})}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(e.span,{className:"mbin",children:"\xb1"}),(0,n.jsx)(e.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(e.span,{className:"base",children:[(0,n.jsx)(e.span,{className:"strut",style:{height:"1.5796em",verticalAlign:"-0.8296em"}}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"Z"}),(0,n.jsx)(e.span,{className:"msupsub",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3448em"},children:(0,n.jsxs)(e.span,{style:{top:"-2.5198em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.0037em"},children:"\u03b1"}),(0,n.jsx)(e.span,{className:"mord mtight",children:"/2"})]})})]})}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.3552em"},children:(0,n.jsx)(e.span,{})})})]})})]}),(0,n.jsx)(e.span,{className:"mopen",children:"("}),(0,n.jsxs)(e.span,{className:"mord",children:[(0,n.jsx)(e.span,{className:"mopen nulldelimiter"}),(0,n.jsx)(e.span,{className:"mfrac",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"0.6954em"},children:[(0,n.jsxs)(e.span,{style:{top:"-2.4642em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsxs)(e.span,{className:"mord mtight",children:[(0,n.jsx)(e.span,{className:"mord sqrt mtight",children:(0,n.jsxs)(e.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(e.span,{className:"vlist-r",children:[(0,n.jsxs)(e.span,{className:"vlist",style:{height:"1.0369em"},children:[(0,n.jsxs)(e.span,{className:"svg-align",style:{top:"-3.4286em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.4286em"}}),(0,n.jsx)(e.span,{className:"mopen mtight",style:{paddingLeft:"1.19em"},children:"("})]}),(0,n.jsxs)(e.span,{style:{top:"-3.0089em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3.4286em"}}),(0,n.jsx)(e.span,{className:"hide-tail mtight",style:{minWidth:"0.853em",height:"1.5429em"},children:(0,n.jsx)(e.svg,{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.5429em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice",children:(0,n.jsx)(e.path,{d:"M95,702\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl0 -0\nc5.3,-9.3,12,-14,20,-14\nH400000v40H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM834 80h400000v40h-400000z"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.4197em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(e.span,{className:"mclose mtight",children:")"})]})})]}),(0,n.jsxs)(e.span,{style:{top:"-3.23em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,n.jsxs)(e.span,{style:{top:"-3.394em"},children:[(0,n.jsx)(e.span,{className:"pstrut",style:{height:"3em"}}),(0,n.jsx)(e.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(e.span,{className:"mord mtight",children:(0,n.jsx)(e.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"\u03c3"})})})]})]}),(0,n.jsx)(e.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(e.span,{className:"vlist-r",children:(0,n.jsx)(e.span,{className:"vlist",style:{height:"0.8296em"},children:(0,n.jsx)(e.span,{})})})]})}),(0,n.jsx)(e.span,{className:"mclose nulldelimiter"})]}),(0,n.jsx)(e.span,{className:"mclose",children:")"})]})]})]})," taking the sample mean and adding/subtracting the normalized standard deviation multiplied by the critical value from standard normal distribution at the corresponding level of confidence"]}),"\n",(0,n.jsxs)(e.blockquote,{children:["\n",(0,n.jsx)(e.p,{children:"There is a single value for the parameter and we are getting observed data about the parameter which gives us variance. We can provide the mean estimate of the parameter and a range in which if we repeat this experiment many times we are confident that 95% of the time the value falls within this interval"}),"\n"]}),"\n",(0,n.jsx)(e.h1,{id:"prediction-interval",children:"Prediction Interval"}),"\n",(0,n.jsx)(e.p,{children:"Associated with the variance of future values and gives the range which the forecasted value can fall"}),"\n",(0,n.jsx)(e.h1,{id:"criticism-and-drawbacks",children:"Criticism and drawbacks"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"p-Hacking"}),": Researchers may engage in p-hacking or data dredging, manipulating data or conducting multiple tests until they obtain a statistically significant p-value, which can lead to false positives"]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Fixed Thresholds"}),': The use of fixed significance levels (e.g., 0.05) is arbitrary and can lead to the binary decision-making of "reject" or "fail to reject" the null hypothesis without considering the context or the practical significance of the results.']}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"No Direct Probability"}),": Frequentist methods do not provide the probability that a hypothesis is true or false. Instead, they provide a long-run frequency of observing data given a hypothesis, which can be less intuitive for decision-making."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Sample Size Sensitivity"}),": The results of frequentist tests can be highly sensitive to sample size. Large sample sizes can lead to statistically significant results even for trivial effects, while small sample sizes may fail to detect meaningful effects."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Focus on Null Hypothesis"}),": Frequentist testing often focuses on rejecting a null hypothesis rather than estimating the effect size or the practical importance of the findings."]}),"\n",(0,n.jsxs)(e.li,{children:[(0,n.jsx)(e.strong,{children:"Inflated Type I Error Rate"}),": Conducting multiple hypothesis tests increases the chance of obtaining false positive results (Type I errors) unless adjustments (like Bonferroni correction) are made."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"See [[Bayesian Inference Testing]]"})]})}function d(s={}){const{wrapper:e}={...(0,t.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(m,{...s})}):m(s)}},11151:(s,e,a)=>{a.d(e,{Z:()=>r,a:()=>l});var n=a(67294);const t={},i=n.createContext(t);function l(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function r(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(t):s.components||t:l(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);