(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5179)}])},7021:function(e,t,a){"use strict";a.d(t,{z:function(){return c}});var i=a(5893),s=a(1664),l=a.n(s),n=a(512);let r={solid:"group inline-flex items-center justify-center rounded-full py-2 px-2 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2",outline:"group inline-flex ring-1 items-center justify-center rounded-full py-2 px-2 text-sm focus:outline-none"},o={solid:{slate:"bg-slate-900 text-white hover:bg-slate-700 hover:text-slate-100 active:bg-slate-800 active:text-slate-300 focus-visible:outline-slate-900",primary:"bg-primary-600 text-white hover:text-slate-100 hover:bg-primary-500 active:bg-primary-800 active:text-primary-100 focus-visible:outline-primary-600",white:"bg-white text-slate-900 hover:bg-primary-50 active:bg-primary-200 active:text-slate-600 focus-visible:outline-white",disabled:"bg-slate-400 text-slate-400 cursor-not-allowed hover:bg-slate-200 hover:text-slate-400 active:bg-slate-200 active:text-slate-400 focus-visible:outline-slate-200"},outline:{slate:"ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-primary-600 focus-visible:ring-slate-300",white:"ring-slate-700 text-white hover:ring-slate-500 active:ring-slate-700 active:text-slate-400 focus-visible:outline-white"}};function c(e){let{className:t,...a}=e;return a.variant??="solid",a.color??="slate",t=(0,n.Z)(r[a.variant],"outline"===a.variant?o.outline[a.color]:"solid"===a.variant?o.solid[a.color]:void 0,t),void 0===a.href?(0,i.jsx)("button",{className:t,...a}):(0,i.jsx)(l(),{className:t,...a})}},931:function(e,t,a){"use strict";a.d(t,{W:function(){return l}});var i=a(5893),s=a(512);function l(e){let{className:t,...a}=e;return(0,i.jsx)("div",{className:(0,s.Z)("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",t),...a})}},9208:function(e,t,a){"use strict";a.d(t,{$:function(){return A}});var i=a(5893),s=a(1664),l=a.n(s),n=a(931),r=a(8215);function o(e){let{href:t,children:a}=e;return(0,i.jsx)(l(),{href:t,target:t.startsWith("http")?"_blank":void 0,className:"inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-primary-600 transition-colors ease-in-out",children:a})}var c=a(9603),d=a(3024);function A(){return(0,i.jsx)("footer",{className:"bg-slate-50 py-10",children:(0,i.jsx)(n.W,{children:(0,i.jsxs)("div",{className:"mx-auto max-w-[800px] relative ",children:[(0,i.jsx)(l(),{href:"/",children:(0,i.jsx)(r.T,{className:"h-10 w-auto"})}),(0,i.jsxs)("p",{className:"mt-6 text-sm text-slate-500 sm:mt-0 inline-block",children:["\xa9 ",new Date().getFullYear()," LexPipe, Inc."]}),(0,i.jsx)("nav",{className:"inline-block text-sm right-0 top-4 absolute","aria-label":"quick links",children:(0,i.jsxs)("div",{className:"flex justify-center gap-x-4",children:[(0,i.jsx)(o,{href:"/privacy",children:"Privacy"}),(0,i.jsx)(o,{href:"https://lexpipe.trustshare.com/home",children:"TrustShare"}),(0,i.jsx)(o,{href:"https://www.linkedin.com/company/lexpipe-legal-data-pipeline/",children:(0,i.jsx)(c.G,{icon:d.D9H,className:"h-6 w-6"})})]})})]})})})}},5093:function(e,t,a){"use strict";a.d(t,{h:function(){return o}});var i=a(5893);a(7294);var s=a(1664),l=a.n(s);a(7021);var n=a(931),r=a(8215);function o(){return(0,i.jsx)("header",{className:"py-10",children:(0,i.jsx)(n.W,{children:(0,i.jsx)("nav",{className:"relative z-50 flex justify-between",children:(0,i.jsx)("div",{className:"flex items-center md:gap-x-12",children:(0,i.jsx)(l(),{href:"/","aria-label":"Home",children:(0,i.jsx)(r.T,{className:"h-10 w-auto"})})})})})})}},8215:function(e,t,a){"use strict";a.d(t,{T:function(){return s}});var i=a(5893);function s(e){return(0,i.jsx)("img",{src:"/_next/static/media/LexPipe-Trans-Rect-300.04c6f17a.png",alt:"LexPipe",...e})}},5179:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Q},metadata:function(){return k}});var i=a(5893),s=a(7294),l=a(7021),n=a(9603),r=a(9417);function o(){let[e,t]=(0,s.useState)(""),[a,o]=(0,s.useState)(!1),[c,d]=(0,s.useState)(!1),A=async a=>{a.preventDefault(),o(!0);try{let a=await fetch("https://script.google.com/macros/s/AKfycbzcwnZLKLZVq6RzVrjrgewqPMPgsNgSTL9dvzKcu5YrLPAvdjx1uvwVNu4cBOrBWGvY/exec",{method:"POST",mode:"no-cors",body:JSON.stringify({email:e,message:"New Subscriber - Website"}),headers:new Headers({"Content-Type":"application/json"})});(a.ok||"opaque"==a.type)&&(d(!0),t(""))}catch(e){console.error("Error:",e)}finally{o(!1)}};return(0,i.jsx)("form",{onSubmit:A,children:(0,i.jsxs)("div",{className:"flex w-full",children:[(0,i.jsx)("input",{type:"email",id:"email",value:e,onChange:e=>t(e.target.value),required:!0,className:"p-2 border border-gray-300 focus:ring-primary-500 focus:border-primary-500 block w-full rounded-full shadow-sm",placeholder:"email@company.com",disabled:a}),(0,i.jsx)(l.z,{className:"ml-2 sm:ml-0 xs:ml-0 w-40 text-white",variant:"solid",color:c?"disabled":"primary",type:"submit",disabled:a||c,style:{pointerEvents:c?"none":"auto"},children:a?(0,i.jsx)(n.G,{icon:r.LM3,spin:!0}):c?"Submitted!":"Join Waitlist"})]})})}var c=a(931);function d(){return(0,i.jsx)("div",{className:"relative overflow-hidden bg-slate-100 py-32",children:(0,i.jsx)(c.W,{className:"relative",children:(0,i.jsxs)("div",{className:"mx-auto max-w-lg text-center",children:[(0,i.jsx)("h2",{className:"text-3xl tracking-tight text-gray-800 sm:text-4xl",children:"Ready to Learn More?"}),(0,i.jsx)("p",{className:"mt-4 text-lg tracking-tight text-gray-800 pb-10 pt-4",children:"Unlock new opportunities with high quality legal data."}),(0,i.jsx)(o,{}),(0,i.jsxs)("p",{className:"mt-4 text-lg tracking-tight text-gray-800 pb-10 pt-4",children:[(0,i.jsx)("span",{className:"",children:"Want to talk? Email us:"}),(0,i.jsx)("br",{}),(0,i.jsx)("a",{href:"mailto:info@lexpipe.com",className:"text-primary-700",children:"info@lexpipe.com"})]})]})})})}var A=a(9208),m=a(5093),x=a(5675),u=a.n(x),p={src:"/_next/static/media/lexpipe-hero.0488cca3.png",height:1730,width:3840,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAMAAACEE47CAAAAGFBMVEX////k1u7Fp9/bwenPtOP36vf47fjw4PQdFcMuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACRJREFUeJxjYGBgYGNmZmNnYGBgYGRiYmaGMFiYWMEMFhZGVgAEtwBCqQLq1AAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:4};function g(){return(0,i.jsx)("div",{className:"bg-white",children:(0,i.jsxs)("div",{className:"relative",children:[(0,i.jsx)("div",{className:"mx-auto max-w-7xl",children:(0,i.jsx)("div",{className:"relative z-10 lg:w-full lg:max-w-2xl",children:(0,i.jsx)("div",{className:"relative px-6 py-16 sm:py-40 lg:px-8 lg:py-36 lg:pr-0",children:(0,i.jsxs)("div",{className:"mx-auto max-w-2xl lg:mx-0 lg:max-w-xl",children:[(0,i.jsxs)("h1",{className:"text-4xl font-bold lg:whitespace-nowrap tracking-tight text-gray-900 sm:text-6xl",children:[(0,i.jsx)("div",{className:"relative lg:inline-block",children:"AI\xa0enabled"})," ",(0,i.jsxs)("span",{className:"relative lg:whitespace-nowrap text-primary-600",children:[(0,i.jsx)("svg",{"aria-hidden":"true",viewBox:"0 0 418 42",className:"absolute left-0 top-2/3 h-[0.58em] w-full fill-primary-300/70",preserveAspectRatio:"none",children:(0,i.jsx)("path",{d:"M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z"})}),(0,i.jsx)("span",{className:"relative",children:"legal data"})]})," ",(0,i.jsx)("span",{className:"relative block pt-8 text-[1.6rem] text-gray-700 sm:text-gray-900 leading-8 drop-shadow-white drop-shadow-lg",children:"for business development and matter management"})]}),(0,i.jsx)("p",{className:"mt-6 text-lg leading-8 text-gray-600 drop-shadow-white drop-shadow-lg sm:text-gray-900",children:"LexPipe transforms the way law firms and corporates use legal data to develop new business and manage matters."}),(0,i.jsxs)("div",{className:"pt-4",children:[(0,i.jsx)("p",{className:"mt-4 text-sm tracking-tight text-gray-800 pb-2",children:"Signup for our waitlist for exclusive updates."}),(0,i.jsx)(o,{})]})]})})})}),(0,i.jsxs)("div",{className:"bg-gray-50 absolute inset-y-0 right-0",children:[(0,i.jsx)("div",{className:"lg:hidden absolute inset-0 bg-white opacity-70 md:opacity-50"}),(0,i.jsx)("div",{className:"lg:hidden absolute inset-0 bg-gradient-to-r from-gray-50"}),(0,i.jsx)(u(),{className:"aspect-auto h-full w-full object-cover",src:p,alt:""})]})]})})}let h=[{name:"Push to deploy.",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",icon:r.r6c},{name:"SSL certificates.",description:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.",icon:r.byT},{name:"Database backups.",description:"Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.",icon:r.t5N}],f={title:"Legal Data in Firms Today",title_tag:"Many-to-Many",description:"",right:!1,image:"/_next/static/media/diagram-many_to_many.fa084c5a.png",features:[{name:"Numerous legal data sources and firm databases.",description:"Today law firms are inundated with data. Complex internal systems and numerous external public data sources are managed by dedicated knowledge management teams.",icon:r.r6c},{name:"Time-consuming data entry, complex setup.",description:"Few firms have the resources to manually copy/paste data or setup complex APIs from multiple vendors.",icon:r.byT},{name:"Empty databases; knowledge gaps; unused tech.",description:"Firms have invested in underlying tech, but without data, it is not being used to its full potential.",icon:r.t5N}]},v={title:"The LexPipe Solution",title_tag:"A Platform to Connect Legal Data",image:"/_next/static/media/diagram-hub_spoke.6344a1e7.png",description:"",right:!0,features:[{name:"Unified Sync Platform",description:"Direct connections to data sources to keep firm records up-to-date.",icon:r.d8e},{name:"Discover and Enrich",description:"Dozens of fields kept up-to-date including case status, case type, judge, parties, motions, and more.",icon:r.wn1},{name:"Observability Dashboard",description:"Generative AI audit trail, data source coverage confirmations, and feed latency validation.",icon:r.Stf}]};function b(){return(0,i.jsx)(w,{...f})}function j(){return(0,i.jsx)(w,{...v})}function w(e){let{features:t=h,title:a,title_tag:s,description:l,image:r,right:o}=e;return(0,i.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8 overflow-hidden bg-white py-16 sm:py-10 mb-10",children:(0,i.jsxs)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2",children:[(0,i.jsx)("div",{className:"lg:mr-auto lg:pt-4",children:(0,i.jsxs)("div",{className:"lg:max-w-lg",children:[(0,i.jsx)("p",{className:"mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:a}),(0,i.jsx)("h2",{className:"text-base font-semibold leading-7 text-indigo-600",children:s}),(0,i.jsx)("p",{className:"mt-6 text-lg leading-8 text-gray-600",children:l}),(0,i.jsx)("dl",{className:"mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none",children:t.map(e=>(0,i.jsxs)("div",{className:"relative pl-14",children:[(0,i.jsxs)("dt",{className:"inline font-semibold text-gray-900",children:[(0,i.jsx)(n.G,{icon:e.icon,className:"absolute left-1 top-1 h-10 w-10 text-primary-600","aria-hidden":"true"}),e.name]})," ",(0,i.jsx)("dd",{className:"inline",children:e.description})]},e.name))})]})}),(0,i.jsx)("div",{className:"flex items-start justify-end "+(o?"lg:order-first":"lg:order-last"),children:(0,i.jsxs)("div",{className:"relative w-full lg:h-[400px] lg:pt-[100px] md:h-[250px] md:pt-0 sm:pt-0 h-[200px]",children:[" ",(0,i.jsxs)("div",{className:"relative h-full",children:[" ",(0,i.jsx)(u(),{src:r,alt:"Diagram of "+a,layout:"fill",objectFit:"contain",className:"object-center"})]})]})})]})})}var y={src:"/_next/static/media/background-call-to-action.9ef5b80b.jpg",height:2488,width:4694,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAEAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAVAQEBAAAAAAAAAAAAAAAAAAAEBf/aAAwDAQACEAMQAAABkF5X/8QAFBABAAAAAAAAAAAAAAAAAAAAQf/aAAgBAQABBQI//8QAFREBAQAAAAAAAAAAAAAAAAAAAAH/2gAIAQMBAT8Br//EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQIBAT8Bf//EABQQAQAAAAAAAAAAAAAAAAAAAAD/2gAIAQEABj8Cf//EABYQAAMAAAAAAAAAAAAAAAAAAAARUf/aAAgBAQABPyFwf//aAAwDAQACAAMAAAAQ+//EABURAQEAAAAAAAAAAAAAAAAAAABB/9oACAEDAQE/EJf/xAAVEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAgBAgEBPxCP/8QAGRAAAgMBAAAAAAAAAAAAAAAAAREAIUFR/9oACAEBAAE/EDQEC3s//9k=",blurWidth:8,blurHeight:4};let N=[{name:"Unlock Insights",description:"Break silos and tap rich metadata buried in the public record.",icon:(0,i.jsx)(n.G,{icon:r.nN3})},{name:"Increased Collaboration",description:"Richer internal database quality, find more in-firm connections.",icon:(0,i.jsx)(n.G,{icon:r.g4A})},{name:"Data Governance",description:"No data entry or coding, just high quality data where you want it.",icon:(0,i.jsx)(n.G,{icon:r.JHj})},{name:"Built on Open Standards",description:"We're a strong supporter of open APIs and legal standards, e.g., SALI.",icon:(0,i.jsx)(n.G,{icon:r.cnt})}];function E(){return(0,i.jsxs)("section",{id:"value-proposition",className:"relative bg-primary-600 overflow-hidden",children:[(0,i.jsx)(u(),{className:"absolute max-w-none inset-0 ",src:y,alt:"",width:2245,height:1636,unoptimized:!0}),(0,i.jsx)("div",{className:"mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8 relative",children:(0,i.jsx)("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:(0,i.jsxs)("div",{className:"mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3",children:[(0,i.jsxs)("h2",{className:"text-3xl font-bold tracking-tight text-white sm:text-4xl",children:[(0,i.jsx)("span",{className:"text-primary-300",children:"Value prop for the "})," legal sector"]}),(0,i.jsx)("dl",{className:"col-span-2 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 ",children:N.map(e=>(0,i.jsxs)("div",{className:"bg-white px-8 py-5 rounded-lg text-lg",children:[(0,i.jsxs)("dt",{className:"text-base font-semibold leading-7 text-gray-900",children:[(0,i.jsx)("div",{className:"mr-6 align-middle inline-block h-7 w-7 rounded-lg text-primary-700",children:e.icon}),e.name]}),(0,i.jsx)("dd",{className:"mt-5 text-base leading-7 text-gray-600",children:e.description})]},e.name))})]})})})]})}var B={src:"/_next/static/media/LexPipe-White-Sq-630-Pipes.08c30314.png",height:630,width:1203};let k={title:{template:"%s | LexPipe",default:"LexPipe: Workflow automation for law firms."},openGraph:{images:[{url:function(e){let t=e.startsWith("/")?e.slice(1):e;return`https://lexpipe.com/${t}`}(B.src.replace(/^[a-zA-Z]+:\/\/[^\/]+/,"")),width:B.width,height:B.height}]},description:"LexPipe transforms the way law firms and corporates use legal information to develop new business and manage matters."};function Q(){return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(m.h,{}),(0,i.jsxs)("main",{children:[(0,i.jsx)(g,{}),(0,i.jsx)(j,{}),(0,i.jsx)(b,{}),(0,i.jsx)(E,{}),(0,i.jsx)(d,{})]}),(0,i.jsx)(A.$,{})]})}}},function(e){e.O(0,[948,976,926,603,675,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);