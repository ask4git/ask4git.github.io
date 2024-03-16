(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{3051:function(e,t,l){Promise.resolve().then(l.bind(l,2120))},2120:function(e,t,l){"use strict";l.r(t),l.d(t,{ContactForm:function(){return a}});var m=l(3827),r=l(4090);let n={"team-name":"조직명은 필수 항목입니다.","manager-name":"담당자명은 필수 항목입니다.","phone-number":"휴대폰번호는 필수 항목입니다.",email:"이메일은 필수 항목입니다.","company-contact":null,"existing-services":null,"reference-services":null},a=()=>{let[e,t]=(0,r.useState)(!1);return(0,m.jsx)("div",{className:"mt-28 w-full flex justify-center",children:(0,m.jsxs)("div",{className:"bg-white rounded-2xl p-4 md:p-8 w-full max-w-[1320px]",children:[(0,m.jsx)("h2",{className:"text-3xl md:text-5xl text-center uppercase font-bold",children:"contact"}),(0,m.jsxs)("form",{className:"py-8 max-w-[1120px] m-auto",onSubmit:l=>{if(l.preventDefault(),e)return;let m=l.currentTarget,r=new FormData(m),a={};for(let e of r.keys()){let t=r.get(e);if(n[e]&&!t)return alert(n[e]);a[e]=t}try{t(!0)}catch(e){}let s=Object.keys(a).map(e=>encodeURIComponent(e)+"="+encodeURIComponent(a[e])).join("&");t(!0),fetch("https://script.google.com/macros/s/AKfycbwBy8tu71VY6YII5zeAcftUn0gIoIfy9JQs0J_Yva24RZ9KVuSw62qUXTinihpe3C3s/exec",{redirect:"follow",mode:"no-cors",method:"POST",body:s,headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then(e=>{if(e.status>=400)throw Error();alert("정상적으로 요청이 전송되었습니다.")}).catch(()=>{alert("오류가 발생했습니다. 잠시 후 다시 시도해 주세요.")}).finally(()=>{t(!1)})},children:[(0,m.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between",children:[(0,m.jsx)("label",{htmlFor:"team-name",className:"after:content-['*'] after:md:text-[#ff0000] after:text-[#7e02ff] md:text-xl font-bold",children:"조직명"}),(0,m.jsx)("input",{id:"team-name",type:"text",placeholder:"e.g. ) team codekit",name:"team-name",className:"border border-[#e2e2e2] rounded-lg w-full md:w-[410px] h-12 px-6 py-4 mt-2 md:mt-0"})]}),(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between",children:[(0,m.jsx)("label",{className:"after:content-['*'] after:md:text-[#ff0000] after:text-[#7e02ff] md:text-xl font-bold",htmlFor:"manager-name",children:"담당자명"}),(0,m.jsx)("input",{id:"manager-name",type:"text",placeholder:"e.g. ) 김코드",name:"manager-name",className:"border border-[#e2e2e2] rounded-lg w-full md:w-[410px] h-12 px-6 py-4 mt-2 md:mt-0"})]}),(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between",children:[(0,m.jsx)("label",{htmlFor:"phone-number",className:"after:content-['*'] after:md:text-[#ff0000] after:text-[#7e02ff] md:text-xl font-bold",children:"휴대폰번호"}),(0,m.jsx)("input",{id:"phone-number",type:"tel",placeholder:"e.g. ) 010-1234-1234",name:"phone-number",className:"border border-[#e2e2e2] rounded-lg w-full md:w-[410px] h-12 px-6 py-4 mt-2 md:mt-0"})]}),(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between",children:[(0,m.jsx)("label",{htmlFor:"email",className:"after:content-['*'] after:md:text-[#ff0000] after:text-[#7e02ff] md:text-xl font-bold",children:"이메일"}),(0,m.jsx)("input",{type:"email",placeholder:"e.g. ) ask@codekit.im",name:"email",id:"email",className:"border border-[#e2e2e2] rounded-lg w-full md:w-[410px] h-12 px-6 py-4 mt-2 md:mt-0"})]}),(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between",children:[(0,m.jsx)("label",{className:"md:text-xl font-bold",htmlFor:"company-contact",children:"회사연락처"}),(0,m.jsx)("input",{type:"tel",placeholder:"e.g. ) 02-5678-5678",name:"company-contact",id:"company-contact",className:"border border-[#e2e2e2] rounded-lg w-full md:w-[410px] h-12 px-6 py-4 mt-2 md:mt-0"})]})]}),(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between mt-5",children:[(0,m.jsx)("label",{className:"md:text-xl font-bold",htmlFor:"existing-services",children:"기존 서비스"}),(0,m.jsx)("input",{className:"border border-[#e2e2e2] rounded-lg w-full md:w-[980px] h-12 px-6 py-4 mt-2 md:mt-0",type:"text",placeholder:"e.g. ) about.codekit.im",id:"existing-services",name:"existing-services"})]}),(0,m.jsxs)("div",{className:"md:flex md:items-center md:justify-between mt-5",children:[(0,m.jsx)("label",{className:"md:text-xl font-bold",htmlFor:"reference-services",children:"참고 서비스"}),(0,m.jsx)("input",{className:"border border-[#e2e2e2] rounded-lg w-full md:w-[980px] h-12 px-6 py-4 mt-2 md:mt-0",type:"text",placeholder:"e.g. ) make.codekit.im",name:"reference-services",id:"reference-services"})]}),(0,m.jsx)("div",{className:"flex items-center justify-center p-3 mt-8",children:(0,m.jsx)("button",{className:"relative w-28 h-10 md:w-36 md:h-14 bg-[#7e02ff] rounded-[2rem] text-white md:text-2xl font-bold",disabled:e,type:"submit",children:e?(0,m.jsx)("span",{className:" absolute top-[16px] left-[60px]  border-4 border-white w-6 h-6 rounded-full border-b-transparent animate-spin "}):"Contact"})})]})]})})}}},function(e){e.O(0,[971,69,744],function(){return e(e.s=3051)}),_N_E=e.O()}]);