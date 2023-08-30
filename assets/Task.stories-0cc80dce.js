import{a as l,j as a}from"./jsx-runtime-670450c2.js";import"./index-f1f749bf.js";import{p as t}from"./index-4d501b15.js";function o({task:{id:e,title:c,state:i},onArchiveTask:_,onPinTask:A}){return l("div",{className:`list-item ${i}`,children:[l("label",{htmlFor:"checked","aria-label":`archiveTask-${e}`,className:"checkbox",children:[a("input",{type:"checkbox",disabled:!0,name:"checked",id:`archiveTask-${e}`,checked:i==="TASK_ARCHIVED"}),a("span",{className:"checkbox-custom",onClick:()=>_(e)})]}),a("label",{htmlFor:"title","aria-label":c,className:"title",children:a("input",{type:"text",value:c,readOnly:!0,name:"title",placeholder:"Input title"})}),i!=="TASK_ARCHIVED"&&a("button",{className:"pin-button",onClick:()=>A(e),id:`pinTask-${e}`,"aria-label":`pinTask-${e}`,children:a("span",{className:"icon-star"})},`pinTask-${e}`)]})}o.propTypes={task:t.shape({id:t.string.isRequired,title:t.string.isRequired,state:t.string.isRequired}),onArchiveTask:t.func,onPinTask:t.func};o.__docgenInfo={description:"",methods:[],displayName:"Task",props:{task:{type:{name:"shape",value:{id:{name:"string",description:"Id of the task",required:!0},title:{name:"string",description:"Title of the task",required:!0},state:{name:"string",description:"Current state of the task",required:!0}}},required:!1,description:"Composition of the task"},onArchiveTask:{type:{name:"func"},required:!1,description:"Event to change the task to archived"},onPinTask:{type:{name:"func"},required:!1,description:"Event to change the task to pinned"}}};const b={component:o,title:"Task",tags:["autodocs"]},s={args:{task:{id:"1",title:"Test Task",state:"TASK_INBOX"}}},r={args:{task:{...s.args.task,state:"TASK_PINNED"}}},n={args:{task:{...s.args.task,state:"TASK_ARCHIVED"}}};var p,d,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    task: {
      id: '1',
      title: 'Test Task',
      state: 'TASK_INBOX'
    }
  }
}`,...(u=(d=s.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var k,m,h;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_PINNED'
    }
  }
}`,...(h=(m=r.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var T,g,f;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    task: {
      ...Default.args.task,
      state: 'TASK_ARCHIVED'
    }
  }
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const v=["Default","Pinned","Archived"],D=Object.freeze(Object.defineProperty({__proto__:null,Archived:n,Default:s,Pinned:r,__namedExportsOrder:v,default:b},Symbol.toStringTag,{value:"Module"}));export{s as D,o as T,D as a};
//# sourceMappingURL=Task.stories-0cc80dce.js.map
