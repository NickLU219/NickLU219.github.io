import{n as e,y as a,q as l,r as t,o as s,f as i,i as d,F as n,g as c,c as u,w as o,h as r,d as v,A as h,N as m,D as p,G as f,H as g,J as k,v as y,L as b,t as w,e as x}from"./index-om00KmGp.js";import{d as C,R as _}from"./RightOutlined-DApv0Suk.js";const z={class:"h-full flex flex-row p-4"},D={class:"w-1/3 border-r p-2 pt-0 overflow-auto bg-white"},I=d("div",{class:"common-title-small mb-4 pt-2 sticky top-0 bg-white"}," 在用角色列表 ",-1),K=["onClick"],N={class:"p-2 pt-0 overflow-auto w-2/3 bg-white"},j={class:"common-title-small mb-4 pt-2 flex sticky top-0 bg-white z-10"},A=d("div",null,"资源授权",-1),E=d("div",{class:"border-t w-full my-2",style:{height:"1px"}},null,-1),O={__name:"permissionManage",setup(O){const R=e([]),T=e(void 0),U=(e,a=!1)=>{!a&&H.value?p.confirm({title:"提示",content:"此操作会丢失当前内容，是否继续？",okText:"继续",cancelText:"取消",onOk:()=>{T.value=e.id,W(e.id)}}):(T.value=e.id,W(e.id))};let q=[],F=[];const G=e([]),H=a((()=>C(F,J.value).length>0||C(J.value,F).length>0)),J=e([]),L=a((()=>J.value.length===q.length&&q.length>0)),M=a((()=>!L.value&&J.value.length>0)),W=async e=>{if(void 0===e)return;J.value=[],q=[],F=[];const a=await f({roleId:e}),{code:l,data:t}=a;l||(G.value=t,B(t),F=g(J.value))},B=e=>{e.forEach((e=>{q.push(e.id),e.selected&&J.value.push(e.id),e.children&&e.children.length&&B(e.children)}))},P=e=>{J.value=e.target.checked?q:[],M.value=!1},Q=async()=>{const e=await k({roleId:T.value,menuIds:J.value}),{code:a,data:l}=e;a||(W(T.value),y.success("保存成功"))},S=()=>{J.value=g(F)};return l((()=>{(async e=>{const a=await m({status:1}),{code:l,data:t}=a;l||(R.value=t,U(null==t?void 0:t[0],!0))})()})),(e,a)=>{const l=t("a-button"),m=t("a-checkbox"),p=t("a-tree");return s(),i("div",z,[d("div",D,[I,d("div",null,[(s(!0),i(n,null,c(R.value,(e=>(s(),i("div",{key:e.id,onClick:a=>U(e),class:b(["mb-2 h-8 cursor-pointer hover:bg-gray-100 flex flex-row items-center px-2 py-1 transition-all duration-300",T.value===e.id?"bg-gray-100":""])},[d("span",null,w(e.name),1),T.value===e.id?(s(),v(x(_),{key:0,class:"ml-auto",style:{"font-size":"smaller"}})):h("",!0)],10,K)))),128))])]),d("div",N,[d("div",j,[A,u(l,{size:"small",class:"ml-auto",disabled:!H.value,onClick:S},{default:o((()=>[r("重置")])),_:1},8,["disabled"]),u(l,{size:"small",type:"primary",class:"ml-2 mr-6",disabled:!H.value,onClick:Q},{default:o((()=>[r("保存")])),_:1},8,["disabled"])]),d("div",null,[u(m,{checked:L.value,"onUpdate:checked":a[0]||(a[0]=e=>L.value=e),indeterminate:M.value,onChange:P},{default:o((()=>[r(" 全部权限 ")])),_:1},8,["checked","indeterminate"])]),E,G.value.length?(s(),v(p,{key:0,checkedKeys:J.value,"onUpdate:checkedKeys":a[1]||(a[1]=e=>J.value=e),treeData:G.value,checkable:"",defaultExpandAll:"",selectable:!1,fieldNames:{title:"menuName",key:"id"}},null,8,["checkedKeys","treeData"])):h("",!0)])])}}};export{O as default};
