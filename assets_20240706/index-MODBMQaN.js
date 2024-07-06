import{s as e,g as a,l as t,a as l,e as d}from"./dept-QqdgSadq.js";import{y as s,n,O as u,P as r,r as i,o,d as c,w as v,c as p,i as m,e as f,f as y,g as b,F as h,h as k,v as g,t as x,A as I,p as _,j as N,q as w,Q as U,S as O,D as S}from"./index-om00KmGp.js";import{u as j}from"./useFormState-BETjqvZH.js";import{l as M}from"./extProp-Bnn8Zgpt.js";import{g as P}from"./dict-By4nYFNH.js";import{l as T}from"./employee-CsHTYcqr.js";import{_ as A}from"./_plugin-vue_export-helper-BCo6x5W8.js";const C=e=>(_("data-v-522c33e9"),e=e(),N(),e),D=C((()=>m("div",{class:"title"},"人员信息",-1))),F={class:"grid grid-cols-2 gap-0"},H=C((()=>m("div",{class:"title"},"扩展信息",-1))),W={class:"grid grid-cols-2 gap-0"},Y=A({__name:"addDepartmentModal",props:{id:{type:String,default:void 0},visible:{type:Boolean,default:!1}},emits:["update:visible","afterSave"],setup(l,{emit:d}){const _=l,N=d,w=s({get:()=>_.visible,set(e){N("update:visible",e)}}),U=n(null),O=n({deptName:[{required:!0,message:"请填写部门名称",trigger:"blur"}]});let S=n([]);const A=()=>{S.value&&S.value.length&&(S.value=S.value.map((e=>({...e,value:""}))))},C=n([]),Y=n([]),R=e=>{const a=JSON.parse(JSON.stringify(e));return function e(a){for(let t=0;t<a.length;t++){const l=a[t];l.hasOwnProperty("type")&&1==l.type&&(l.disabled=!0),l.children&&Array.isArray(l.children)&&e(l.children)}}(a),a},K=n([]),q=()=>{U.value.validate().then((async(a,t)=>{if(!a)return U.value.focusFirstField(),!1;{let a=Object.assign(V,{inHospital:V.inHospital?1:0});a.extPropInfos=S.value.map((e=>({extPropId:e.id,name:e.name,value:e.value})));const t=await e(a),{code:l}=t;l||(g.success("保存成功"),N("afterSave"),J())}})).catch((e=>{}))},J=()=>{B(),A(),w.value=!1},{formState:V,patchFormState:z,resetFormState:B}=j({deptName:void 0,deptManageId:void 0,parentId:void 0,inHospital:!1,bedNum:void 0,natureOfWorks:[],remark:void 0});return u((()=>{(async()=>{const{data:e}=await t();K.value=e||[]})(),(async()=>{S.value=[];const{data:e}=await M({type:1,status:1});S.value=e||[],A()})(),(async()=>{const{data:e,code:a}=await P({id:1});a||(C.value=e.dataMapList||[])})(),(async()=>{const{data:e,code:a}=await T();Y.value=R(e)})()})),r((()=>_.id),(async e=>{if(e){const t=await a({id:e}),{code:l,data:d}=t;l||(z(d),d.extPropInfos&&d.extPropInfos.length&&(S.value=((e,a)=>{let t=new Map;for(let l of e)t.set(l.id,{...l});for(let l of a)t.has(l.extPropId)&&t.set(l.extPropId,Object.assign(t.get(l.extPropId),{value:l.value}));return Array.from(t.values())})(S.value,d.extPropInfos)))}}),{immediate:!0}),(e,a)=>{const t=i("a-input"),d=i("a-form-item"),s=i("a-tree-select"),n=i("a-select-option"),u=i("a-select"),r=i("a-checkbox"),g=i("a-textarea"),_=i("a-date-picker"),N=i("a-form"),j=i("a-modal");return o(),c(j,{visible:w.value,"onUpdate:visible":a[7]||(a[7]=e=>w.value=e),title:""+(l.id?"修改部门":"新增部门"),onOk:q,onCancel:J,okText:"保存",width:"60%",destroyOnClose:!0,maskClosable:!1,bodyStyle:{height:"70vh"}},{default:v((()=>[p(N,{ref_key:"departmentForm",ref:U,model:f(V),name:"department","label-col":{style:{width:"120px"}},"wrapper-col":{span:16},autocomplete:"off",rules:O.value},{default:v((()=>[D,m("div",F,[p(d,{label:"部门名称",name:"deptName"},{default:v((()=>[p(t,{value:f(V).deptName,"onUpdate:value":a[0]||(a[0]=e=>f(V).deptName=e)},null,8,["value"])])),_:1}),p(d,{label:"归属部门",name:"parentId"},{default:v((()=>[p(s,{label:"部门名称",value:f(V).parentId,"onUpdate:value":a[1]||(a[1]=e=>f(V).parentId=e),style:{width:"100%"},"tree-data":K.value,fieldNames:{label:"deptName",value:"id",children:"children"},"allow-clear":"","search-placeholder":"请选择"},null,8,["value","tree-data"])])),_:1}),p(d,{label:"部门负责人",name:"deptManageId"},{default:v((()=>[p(s,{label:"部门名称",value:f(V).deptManageId,"onUpdate:value":a[2]||(a[2]=e=>f(V).deptManageId=e),style:{width:"100%"},"tree-data":Y.value,fieldNames:{label:"name",value:"uuid",children:"children"},"allow-clear":"","search-placeholder":"请选择"},null,8,["value","tree-data"])])),_:1}),p(d,{label:"工作性质",name:"natureOfWorks"},{default:v((()=>[p(u,{value:f(V).natureOfWorks,"onUpdate:value":a[3]||(a[3]=e=>f(V).natureOfWorks=e),mode:"multiple",placeholder:"请选择",showArrow:""},{default:v((()=>[(o(!0),y(h,null,b(C.value,(e=>(o(),c(n,{key:e.id,value:e.id},{default:v((()=>[k(x(e.name),1)])),_:2},1032,["value"])))),128))])),_:1},8,["value"])])),_:1}),p(d,{label:"住院标志",name:"name"},{default:v((()=>[p(r,{checked:f(V).inHospital,"onUpdate:checked":a[4]||(a[4]=e=>f(V).inHospital=e)},{default:v((()=>[k("是否住院")])),_:1},8,["checked"])])),_:1}),p(d,{label:"床位数",name:"bedNum"},{default:v((()=>[p(t,{disabled:!f(V).inHospital,value:f(V).bedNum,"onUpdate:value":a[5]||(a[5]=e=>f(V).bedNum=e)},null,8,["disabled","value"])])),_:1}),p(d,{label:"部门说明",name:"remark"},{default:v((()=>[p(g,{value:f(V).remark,"onUpdate:value":a[6]||(a[6]=e=>f(V).remark=e)},null,8,["value"])])),_:1})]),H,m("div",W,[(o(!0),y(h,null,b(f(S),(e=>(o(),c(d,{key:e.id,label:e.name},{default:v((()=>[1==e.propType?(o(),c(t,{key:0,type:"number",value:e.value,"onUpdate:value":a=>e.value=a},null,8,["value","onUpdate:value"])):2==e.propType?(o(),c(t,{key:1,value:e.value,"onUpdate:value":a=>e.value=a},null,8,["value","onUpdate:value"])):3==e.propType?(o(),c(_,{key:2,value:e.value,"onUpdate:value":a=>e.value=a,valueFormat:"YYYY-MM-DD",style:{width:"100%"}},null,8,["value","onUpdate:value"])):I("",!0)])),_:2},1032,["label"])))),128))])])),_:1},8,["model","rules"])])),_:1},8,["visible","title"])}}},[["__scopeId","data-v-522c33e9"]]),R={__name:"index",setup(e){const a=n([]),s=n(!1),u=n(1),m=e=>{u.value=e,b()},f=e=>(e&&Array.isArray(e.children)&&(0===e.children.length?delete e.children:(e.children.forEach((e=>{f(e)})),0===e.children.length&&delete e.children)),e?e.children:[]),b=async()=>{if(s.value=!0,1===u.value){const e=await t({status:u.value}),{code:l,data:d}=e;l||(a.value=f({children:d}),s.value=!1)}else{const e=await l({status:u.value}),{code:t,data:d}=e;t||(a.value=d,s.value=!1)}},x=(e={})=>{b()},I=n(null),_=n(!1),N=()=>{_.value=!0},j=n(!1);r([_,j],((e,a)=>{e.includes(!0)||(I.value=null)}));const M=[{title:"部门名称",dataIndex:"deptName",key:"deptName"},{title:"工作性质",dataIndex:"natureOfWorkNames",key:"natureOfWorkNames",customRender:({text:e})=>e&&e.join(",")},{title:"部门负责人",dataIndex:"deptManageName",key:"deptManageName"},{title:"住院标识",dataIndex:"inHospital",key:"inHospital",customRender:({text:e})=>0===e?"否":"是"},{title:"床位数",dataIndex:"bedNum",key:"bedNum"},{title:"状态",dataIndex:"status",key:"status",customRender:e=>p(O,{checked:e.value,onChange:async a=>{S.confirm({title:"提示",content:"确定要"+(a?"启用":"禁用")+"该部门吗？",onOk:async()=>{(await d({ids:[e.record.id],status:a?1:0})).code||(g.success("操作成功"),e.record.status=a?1:0,S.destroyAll(),b())}})},checkedValue:1,unCheckedValue:0,disabled:0===e.record.id||1===e.record.sysDefaultTag},null)},{title:"创建人",dataIndex:"createUserName",key:"createUserName"},{title:"创建时间",dataIndex:"createTime",key:"createTime"},{title:"修改人",dataIndex:"updateUserName",key:"updateUserName"},{title:"修改时间",dataIndex:"updateTime",key:"updateTime"},{title:"操作",dataIndex:"action",key:"action",customRender:e=>p("div",{class:"flex flex-row gap-2"},[p(i("a-button"),{type:"link",size:"small",onClick:()=>(({record:e})=>{I.value=e.id,_.value=!0})(e),disabled:0===e.record.id||1===e.record.sysDefaultTag},{default:()=>[k("编辑")]})])}];return w((()=>{b()})),(e,t)=>{const l=i("a-tab-pane"),d=i("a-tabs"),n=i("a-button");return o(),y(h,null,[p(U,{columns:M,tableData:a.value,loading:s.value},{tableTitle:v((()=>[p(d,{activeKey:u.value,"onUpdate:activeKey":t[0]||(t[0]=e=>u.value=e),onChange:m},{default:v((()=>[(o(),c(l,{key:1,tab:"启用中"})),(o(),c(l,{key:0,tab:"已停用"}))])),_:1},8,["activeKey"])])),actions:v((()=>[p(n,{type:"primary",onClick:N},{default:v((()=>[k("新增部门")])),_:1})])),_:1},8,["tableData","loading"]),p(Y,{visible:_.value,"onUpdate:visible":t[1]||(t[1]=e=>_.value=e),onAfterSave:x,id:I.value},null,8,["visible","id"])],64)}}};export{R as default};
