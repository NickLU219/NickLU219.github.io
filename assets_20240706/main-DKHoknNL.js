import{c as e,I as t,u as a,a as n,b as r,r as l,o as s,d as o,w as c,e as u,f as i,F as d,g as f,h as p,t as m,i as h,p as v,j as g,T as y,k as b,K as _}from"./index-DlcaZKbg.js";import{_ as w}from"./_plugin-vue_export-helper-BCo6x5W8.js";var x={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M858.5 763.6a374 374 0 00-80.6-119.5 375.63 375.63 0 00-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 00-80.6 119.5A371.7 371.7 0 00136 901.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 008-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"}}]},name:"user",theme:"outlined"};function k(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){j(e,t,a[t])}))}return e}function j(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var O=function(a,n){var r=k({},a,n.attrs);return e(t,k({},r,{icon:x}),null)};O.displayName="UserOutlined",O.inheritAttrs=!1;const C=(e=>(v("data-v-e7dd9052"),e=e(),g(),e))((()=>h("div",{class:"logo flex justify-center items-center text-white text-base tracking-widest"},"绩效管理系统",-1))),S={class:"text-white mr-4"},M={class:"flex items-center py-4 cursor-pointer hover:text-blue-500"},P={class:"bg-white overlay border"},K=w({__name:"header",setup(t){const v=a(),g=n(),y=r("name"),b=()=>{g.doLogout()};return(t,a)=>{const n=l("a-menu-item"),r=l("a-menu"),g=l("a-avatar"),_=l("a-dropdown"),w=l("a-layout-header");return s(),o(w,{class:"flex flex-row h-12",style:{"line-height":"48px","padding-left":"16px"}},{default:c((()=>[C,e(r,{selectedKeys:u(v).activeHeaderMenu,"onUpdate:selectedKeys":a[0]||(a[0]=e=>u(v).activeHeaderMenu=e),theme:"dark",mode:"horizontal",class:"flex-1",onClick:u(v).headerMenuClick},{default:c((()=>[(s(!0),i(d,null,f(u(v).allMenuList,(e=>(s(),o(n,{key:e.name},{default:c((()=>[p(m(e.meta.title),1)])),_:2},1024)))),128))])),_:1},8,["selectedKeys","onClick"]),h("div",S,"欢迎登录，"+m(u(y)),1),e(_,{class:"user-dropdown",placement:"bottomRight",getPopupContainer:e=>e.parentNode},{overlay:c((()=>[h("div",P,[e(r,null,{default:c((()=>[e(n,{key:"doLogout"},{default:c((()=>[h("a",{onClick:b},"退出登录")])),_:1})])),_:1})])])),default:c((()=>[h("div",M,[e(g,{style:{"background-color":"#1890ff"}},{icon:c((()=>[e(u(O))])),_:1})])])),_:1},8,["getPopupContainer"])])),_:1})}}},[["__scopeId","data-v-e7dd9052"]]),z={class:"h-full w-full overflow-hidden"},L={__name:"main",setup:t=>(t,a)=>{const n=l("router-view");return s(),i("div",z,[e(K),e(n,null,{default:c((({Component:t})=>[e(y,null,{default:c((()=>[(s(),o(_,null,[(s(),o(b(t)))],1024))])),_:2},1024)])),_:1})])}};export{L as default};