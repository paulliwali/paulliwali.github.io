"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[57716],{89493:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(85893),a=s(11151);const i={source:"https://hakibenita.com/sql-for-data-analysis",author:"Haki Benita",tags:["sql","data-science"]},r="\ud83d\udcf0 Summary (use your own words)",o={id:"slip-box/reference-notes/Practical SQL for Data Analysis",title:"\ud83d\udcf0 Summary (use your own words)",description:"SQL code for fast data analysis so one can skip using Pandas if not needed. This article is showcasing PostgreSQL.",source:"@site/docs/slip-box/reference-notes/Practical SQL for Data Analysis.md",sourceDirName:"slip-box/reference-notes",slug:"/slip-box/reference-notes/Practical SQL for Data Analysis",permalink:"/docs/slip-box/reference-notes/Practical SQL for Data Analysis",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/slip-box/reference-notes/Practical SQL for Data Analysis.md",tags:[{label:"sql",permalink:"/docs/tags/sql"},{label:"data-science",permalink:"/docs/tags/data-science"}],version:"current",frontMatter:{source:"https://hakibenita.com/sql-for-data-analysis",author:"Haki Benita",tags:["sql","data-science"]},sidebar:"tutorialSidebar",previous:{title:"Polynomial regression model",permalink:"/docs/slip-box/reference-notes/Polynomial regression model"},next:{title:"Primer on casual inference",permalink:"/docs/slip-box/reference-notes/Primer on casual inference"}},l={},c=[{value:"Common Table Expressions (CTE)",id:"common-table-expressions-cte",level:2},{value:"Generating Data",id:"generating-data",level:2},{value:"Sampling",id:"sampling",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"-summary-use-your-own-words",children:"\ud83d\udcf0 Summary (use your own words)"}),"\n",(0,t.jsx)(n.p,{children:"SQL code for fast data analysis so one can skip using Pandas if not needed. This article is showcasing PostgreSQL."}),"\n",(0,t.jsx)(n.h1,{id:"\ufe0f-notes",children:"\u270d\ufe0f Notes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["There is a high cost in loading data into Pandas, so it is often not worth it for ad-hoc analysis","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Or it is worth pre-analysis in SQL itself before fetching it into Pandas"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"common-table-expressions-cte",children:"Common Table Expressions (CTE)"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Good for recursive queries"}),"\n",(0,t.jsx)(n.li,{children:"Good for readibility and modularity"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"WITH emails AS (\n\tSELECT 'PAUL.DENG@test.com' AS email\n), \nnormalized_emails AS ( \n\tSELECT lower(email) as email FROM emails\n)\nSELECT * FROM normalized_emails;\n"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"email"})})}),(0,t.jsx)(n.tbody,{children:(0,t.jsx)(n.tr,{children:(0,t.jsx)(n.td,{style:{textAlign:"left"},children:(0,t.jsx)(n.a,{href:"mailto:paul.deng@test.com",children:"paul.deng@test.com"})})})})]}),"\n",(0,t.jsx)(n.h2,{id:"generating-data",children:"Generating Data"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Useful for joining data to"}),"\n",(0,t.jsxs)(n.li,{children:["Can use ",(0,t.jsx)(n.code,{children:"UNION ALL"})," to concat data, ",(0,t.jsx)(n.code,{children:"VALUE LIST"})," to create constant data, ",(0,t.jsx)(n.code,{children:"UNNEST"})," to generate small 1 dimensional data from a list"]}),"\n",(0,t.jsxs)(n.li,{children:["A really useful command is to use ",(0,t.jsx)(n.code,{children:"GENERATE_SERIES"})," for large amounts of data with a fixed step and can be used for time series"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"WITH daterange AS (\n\tSELECT *\n\tFROM generate_series(\n\t\t'2023-01-01 UTC'::timestamptz, --start\n\t\t'2023-01-02 UTC'::timestamptz, --end\n\t\tINTERVAL '1 hour' --step\n\t) WITH ORDINALITY AS t(hh, n)\n)\nSELECT * FROM daterange\n"})}),"\n",(0,t.jsx)(n.h2,{id:"sampling",children:"Sampling"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To produce random numbers, one can use ",(0,t.jsx)(n.code,{children:"ceil(random())"})," or ",(0,t.jsx)(n.code,{children:"floor(random())"})]}),"\n",(0,t.jsxs)(n.li,{children:["Don't use ",(0,t.jsx)(n.code,{children:"round(random())"})," because it doesn't retain the distribution"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT \n\tceil(random() * 3) AS n,\n\tcount(*)\nFROM generate_series(0, 1000)\nGROUP BY 1\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"One can extend this to produce random choice"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT \n\t(array['RED', 'BLUE', 'GREEN'])[ceil(random() * 3)] AS color \nFROM generate_series(1, 5)\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["To sample you can use ",(0,t.jsx)(n.code,{children:"random()"})," but it is pretty inefficient"]}),"\n",(0,t.jsxs)(n.li,{children:["So PostgreSQL has two methods: ",(0,t.jsx)(n.code,{children:"system"})," and ",(0,t.jsx)(n.code,{children:"bernoulli"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"system"})," is done with blocks so it is faster"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- using random\nWITH random_sample AS ( \n\tSELECT * \n\tFROM users \n\tORDER BY random() LIMIT 1000\n)\nSELECT count(*) FROM random_sample\n\n-- using system\nWITH system_sample AS (\n\tSELECT *\n\tFROM users TABLESAMPLE() SYSTEM(10) -- argument is percentage\n)\nSELECT count(*) FROM system_sample\n\n-- using bernoulli \nWITH bernoulli_sample AS (\n\tSELECT *\n\tFROM users TABLESAMPLE() BERNOULLI(10) -- argument is percentage\n)\nSELECT count(*) FROM bernoulli_sample\n"})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>r});var t=s(67294);const a={},i=t.createContext(a);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);