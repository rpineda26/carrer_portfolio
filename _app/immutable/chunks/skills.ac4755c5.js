import{A as n}from"./UIcon.4ca9d515.js";function d(t,...a){const s=Object.assign({},t);return Object.keys(s).forEach(o=>{a.includes(o)&&delete s[o]}),s}const e=t=>t,m=[e({name:"Software Development",slug:"soft-dev"}),e({name:"Frameworks",slug:"framework"}),e({name:"Libraries",slug:"library"}),e({name:"Langauges",slug:"lang"}),e({name:"Algorithms",slug:"algo"}),e({name:"Databases",slug:"db"}),e({name:"ORMs",slug:"orm"}),e({name:"DevOps",slug:"devops"}),e({name:"Testing",slug:"test"}),e({name:"Dev Tools",slug:"devtools"}),e({name:"Markup & Style",slug:"markup-style"}),e({name:"Design",slug:"design"}),e({name:"Soft Skills",slug:"soft"})],i=t=>{const a=d(t,"category");return t.category&&(a.category=m.find(s=>s.slug===t.category)),a},c=[i({slug:"sql",color:"yellow",description:"I have a good foundation in designing normalized relational database schemas and writing optimized queries based on given requirements. I have projects where I have integrating SQL databases with web applications and android applications. I also have experience with deploying distributed database with horizontal fragmentation.",logo:n.PostgreSQL,name:"SQL",category:"db"}),i({slug:"nosql",color:"yellow",description:"I have developed web applications and android applications that connect with a nosql database. I have a solid grasp on designing schemas based on on application requirements.",logo:n.MongoDB,name:"NOSQL",category:"db"}),i({slug:"web-app",color:"blue",description:"I have strong foundations on creating a full stack web application with CRUD capabilities. My skills are more refined in backend development. I can recreate predesigned frontend pages but I have still a lot of room for progress in terms of creating my own designs.",logo:n.JavaScript,name:"web application",category:"soft-dev"}),i({slug:"android-app",color:"blue",description:"I can develop full-stack android applications usign Java or Kotlin. I have strong fundamentals in object-oriented paradigm, android lifecycle activies, and the model-view-cotnroller structure. I can create applications with concurrent threads and services.",logo:n.Android,name:"android application",category:"soft-dev"}),i({slug:"test",color:"blue",description:"I have taken the role of quality assurance tester in group projects that observe the AGILE methodology. ;I can create unit tests and implement a test-driven development practice in a project. I have used JUnit, Mockito, and Jest in my projects. I am used to creating test cases based on the requirements even for small individual projects to make sure the program I am making is correct.",logo:n.Jest,name:"Quality Test",category:"soft-dev"}),i({slug:"git",color:"blue",description:"I use git for version control in my projects. I follow the best practices in creating branches, merging, and writing commit messages. I utilize the git issues feature in tracking the bugs for our sprints as a tester in a project.",logo:n.JavaScript,name:"Git",category:"soft-dev"}),i({slug:"communication",color:"green",description:"I communicate with my team members and am not afraid to ask questions or clarify things. I can express my ideas with clarity . I take the initiative to ask for feedback and I am open to constructive criticism. I can also give feedback to my team members in a respectful manner.",name:"Communication",category:"soft",logo:n.Svelte}),i({slug:"learner",color:"green",description:"I am an eager learner and am always curious about new technologies and methodologies. I love taking on new challenges and putting myself on the edge of my comfort zone.",name:"Learner",category:"soft",logo:n.Svelte})],p="Skills",f=(...t)=>c.filter(a=>t.includes(a.slug)),h=t=>{const a=[],s=[];return c.forEach(o=>{if(t.trim()&&!o.name.toLowerCase().includes(t.trim().toLowerCase()))return;if(!o.category){console.log(o.category),s.push(o);return}let r=a.find(g=>{var l;return g.category.slug===((l=o.category)==null?void 0:l.slug)});r||(r={items:[],category:o.category},a.push(r)),r.items.push(o)}),s.length!==0&&a.push({category:{name:"Others",slug:"others"},items:s}),a};export{h as a,f as g,c as i,p as t};
