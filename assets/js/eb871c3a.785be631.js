"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[50177],{60125:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(85893),c=s(11151);const o={},r="Kubernetes Snippets",i={id:"code/kube",title:"Kubernetes Snippets",description:"K9s",source:"@site/docs/code/kube.md",sourceDirName:"code",slug:"/code/kube",permalink:"/docs/code/kube",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/code/kube.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Github",permalink:"/docs/code/github"},next:{title:"notes",permalink:"/docs/code/notes"}},d={},l=[{value:"K9s",id:"k9s",level:2},{value:"Docker Snippets",id:"docker-snippets",level:2}];function a(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"kubernetes-snippets",children:"Kubernetes Snippets"}),"\n",(0,t.jsx)(n.h2,{id:"k9s",children:"K9s"}),"\n",(0,t.jsx)(n.p,{children:"Fuze connect and launch K9s"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"fuze k8s clusters connect <cluster_name>\nk9s -c dp\n"})}),"\n",(0,t.jsx)(n.p,{children:"Log a pod"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"kubectl -n <deployment_namespace> logs <pod_name>\n"})}),"\n",(0,t.jsx)(n.h2,{id:"docker-snippets",children:"Docker Snippets"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docker ps"})," to list the docker container"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docker exec -it <DOCKER-CONTAINER-NAME> bash"})," to launch the container"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"docker logs <DOCKER-CONTAINER-NAME>"})," to look at the logs"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(67294);const c={},o=t.createContext(c);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);