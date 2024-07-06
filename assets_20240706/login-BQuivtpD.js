import{_ as e}from"./logo-CxXS7KxG.js";import{n as t,q as a,o,f as n,i as l,a as i,s as r,r as s,c as d,w as u,v as c,e as f,h as m,p,j as g,t as h}from"./index-DlcaZKbg.js";import{m as v}from"./crypto-dkjlSuvS.js";import{_ as y}from"./_plugin-vue_export-helper-BCo6x5W8.js";const b=[2,3,4,5,6,8,9,"A","B","C","D","E","F","G","H","J","K","L","M","N","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],M=["width","height"],C={__name:"identify-code",props:{valid:{type:Function,default:()=>{}},length:{type:Number,default:4},fontSizeMin:{type:Number,default:25},fontSizeMax:{type:Number,default:35},fontColorMin:{type:Number,default:22},fontColorMax:{type:Number,default:254},backgroundColorMin:{type:Number,default:255},backgroundColorMax:{type:Number,default:255},showLine:{type:Boolean,default:!1},dotColorMin:{type:Number,default:60},dotColorMax:{type:Number,default:100},contentWidth:{type:Number,default:116},contentHeight:{type:Number,default:38}},setup(e,{expose:i}){const r=t(!1),s=t(""),d=e;i({validate:async()=>await d.valid(s.value,r.value)});const u=()=>{r.value=!1,setTimeout((()=>{r.value=!0}),12e4);let e="";for(let t=0;t<d.length;t++){const t=Math.floor(36*Math.random());e+=b[t]}s.value=e,m()},c=(e,t)=>Math.floor(Math.random()*(t-e)+e),f=(e,t)=>"rgb("+c(e,t)+","+c(e,t)+","+c(e,t)+")",m=()=>{let e=document.getElementById("s-canvas").getContext("2d");e.textBaseline="bottom",e.fillStyle=f(d.backgroundColorMin,d.backgroundColorMax),e.fillRect(0,0,d.contentWidth,d.contentHeight);for(let t=0;t<s.value.length;t++)p(e,s.value[t],t);d.showLine&&g(e),h(e)},p=(e,t,a)=>{e.fillStyle=f(d.fontColorMin,d.fontColorMax),e.font=c(d.fontSizeMin,d.fontSizeMax)+"px SimHei";let o=(a+1)*(d.contentWidth/(s.value.length+1)),n=c(d.fontSizeMax,d.contentHeight-5);var l=c(-30,30);e.translate(o,n),e.rotate(l*Math.PI/180),e.fillText(t,0,0),e.rotate(-l*Math.PI/180),e.translate(-o,-n)},g=e=>{for(let t=0;t<4;t++)e.strokeStyle=f(100,200),e.beginPath(),e.moveTo(c(0,d.contentWidth),c(0,d.contentHeight)),e.lineTo(c(0,d.contentWidth),c(0,d.contentHeight)),e.stroke()},h=e=>{for(let t=0;t<30;t++)e.fillStyle=f(0,255),e.beginPath(),e.arc(c(0,d.contentWidth),c(0,d.contentHeight),1,0,2*Math.PI),e.fill()};return a((()=>{u()})),(t,a)=>(o(),n("div",{class:"s-canvas",onClick:u},[l("canvas",{id:"s-canvas",width:e.contentWidth,height:e.contentHeight},null,8,M)]))}},w={class:"login-containter"},x={class:"login-content"},_={class:"content"},S=(e=>(p("data-v-6e118b2d"),e=e(),g(),e))((()=>l("div",{class:"login-title"},[l("img",{class:"logo",src:e,alt:""}),m(" "+h("绩效考核系统"))],-1))),N={class:"identify-code"},k=y({__name:"login",setup(e){const p=i(),g=t(null),h=r({account:"admin",password:"1qaz@WSX",identifyCode:"1"}),y={account:[{required:!0,message:"请输入账户",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],identifyCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]},b=async(e,t)=>Promise.resolve({}),M=async()=>{await g.value.validate().catch((e=>{c.warning(e.message)}))&&k()},k=async()=>{const e={account:h.account,password:v(h.password).toString()};p.doLogin(e)};return a((()=>{})),(e,t)=>{const a=s("a-input"),i=s("a-form-item"),r=s("a-button"),c=s("a-form");return o(),n("div",w,[l("div",x,[l("div",_,[S,d(c,{ref:"ruleForm",model:h,rules:y,onFinish:M,class:"login-form"},{default:u((()=>[d(i,{name:"account"},{default:u((()=>[d(a,{value:h.account,"onUpdate:value":t[0]||(t[0]=e=>h.account=e),placeholder:"账号"},null,8,["value"])])),_:1}),d(i,{name:"password"},{default:u((()=>[d(a,{type:"password",value:h.password,"onUpdate:value":t[1]||(t[1]=e=>h.password=e),placeholder:"密码"},null,8,["value"])])),_:1}),d(i,{name:"identifyCode"},{default:u((()=>[d(a,{value:h.identifyCode,"onUpdate:value":t[2]||(t[2]=e=>h.identifyCode=e),placeholder:"验证码",autocomplete:"off"},null,8,["value"]),l("div",N,[d(f(C),{ref_key:"identifyCodeRef",ref:g,valid:b},null,512)])])),_:1}),d(i,null,{default:u((()=>[d(r,{type:"primary",class:"login-form-button","html-type":"submit",loading:f(p).loginLoading},{default:u((()=>[m("登录")])),_:1},8,["loading"])])),_:1})])),_:1},8,["model"])])])])}}},[["__scopeId","data-v-6e118b2d"]]);export{k as default};