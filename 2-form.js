import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const t=document.querySelector("form"),l=document.querySelector("input"),r=document.querySelector("textarea");l.placeholder="";r.placeholder="";const a={email:"",message:""};t.addEventListener("focus",e=>{e.target.tagName==="INPUT"&&(e.target.placeholder=e.target.type),e.target.tagName==="TEXTAREA"&&(e.target.placeholder=e.target.type)},!0);t.addEventListener("blur",e=>{e.target.tagName==="INPUT"&&(e.target.placeholder=""),e.target.tagName==="TEXTAREA"&&(e.target.placeholder="")},!0);t.addEventListener("input",()=>{a.email=l.value,a.message=r.value;try{localStorage.setItem("feedback-form-state",JSON.stringify(a))}catch(e){console.log(e)}});t.addEventListener("submit",e=>{e.preventDefault(),(!a.email||!a.message)&&alert("Fill please all fields"),console.log(a),l.value="",r.value="",a.email="",a.message="",localStorage.clear()});const o=()=>{try{const e=JSON.parse(localStorage.getItem("feedback-form-state"));(e.email!==null||e.message!==null)&&(l.value=e.email,r.value=e.message,a.email=e.email,a.message=e.message)}catch(e){console.log(e)}};o();
//# sourceMappingURL=2-form.js.map