import{c as g,i as c,e as n,l as d,b as f,a as i,h,g as _,_ as x,v as y,x as m,y as v,A as C}from"./index-CUs_S19o.js";import{h as P}from"./render-dChl5Uk-.js";const $=g({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(s,{slots:a}){const{proxy:{$q:t}}=_(),e=c(d,n);if(e===n)return console.error("QPage needs to be a deep child of QLayout"),n;if(c(f,n)===n)return console.error("QPage needs to be child of QPageContainer"),n;const o=i(()=>{const r=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof s.styleFn=="function"){const p=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return s.styleFn(r,p)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-r+"px":t.screen.height===0?r!==0?`calc(100vh - ${r}px)`:"100vh":t.screen.height-r+"px"}}),u=i(()=>`q-page${s.padding===!0?" q-layout-padding":""}`);return()=>h("main",{class:u.value,style:o.value},P(a.default))}}),Q="/assets/quasar-logo-vertical-CIcAg5zr.svg",b=Object.assign({name:"IndexPage"},{__name:"IndexPage",setup(s,{expose:a}){a();const t={};return Object.defineProperty(t,"__isScriptSetup",{enumerable:!1,value:!0}),t}});function I(s,a,t,e,l,o){return y(),m($,{class:"flex flex-center"},{default:v(()=>a[0]||(a[0]=[C("img",{alt:"Quasar logo",src:Q,style:{width:"200px",height:"200px"}},null,-1)])),_:1})}const B=x(b,[["render",I],["__file","IndexPage.vue"]]);export{B as default};