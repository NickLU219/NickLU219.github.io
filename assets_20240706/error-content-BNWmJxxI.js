import{_ as e}from"./_plugin-vue_export-helper-BCo6x5W8.js";import{r as t,o as r,f as n,c as o,w as s,h as c,t as a,i}from"./index-om00KmGp.js";const l={class:"error-page"},d={class:"content-con"},u=["src","alt"],m={class:"text-con"};const p=e({name:"error_content",components:{backBtnGroup:e({name:"backBtnGroup",data:()=>({second:5,timer:null}),methods:{backHome(){this.$router.replace({name:"home"})},backPrev(){this.$router.go(-1)}},mounted(){this.timer=setInterval((()=>{0===this.second?this.backPrev():this.second--}),1e3)},beforeUnmount(){clearInterval(this.timer)}},[["render",function(e,i,l,d,u,m){const p=t("Button");return r(),n("div",null,[o(p,{size:"large",type:"text",onClick:m.backHome},{default:s((()=>[c("返回首页")])),_:1},8,["onClick"]),o(p,{size:"large",type:"text",onClick:m.backPrev},{default:s((()=>[c("返回上一页("+a(u.second)+"s)",1)])),_:1},8,["onClick"])])}]])},props:{code:String,desc:String,src:String}},[["render",function(e,t,o,s,c,p){return r(),n("div",l,[i("div",d,[i("img",{src:o.src,alt:o.code},null,8,u),i("div",m,[i("h4",null,a(o.code),1),i("h5",null,a(o.desc),1)])])])}]]);export{p as e};
