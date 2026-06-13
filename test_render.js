const fs=require('fs');
const vm=require('vm');
const code=fs.readFileSync('/mnt/data/debug_v196/script_v197.js','utf8');
const sip=fs.readFileSync('/mnt/data/Sip.json','utf8');
class El{
  constructor(id){this.id=id;this._html='';this.style={};this.classList={toggle(){}, add(){}, remove(){}};}
  set innerHTML(v){this._html=String(v);}
  get innerHTML(){return this._html;}
  querySelectorAll(){return[];}
  addEventListener(){}
  setPointerCapture(){}
  getBoundingClientRect(){return {left:0,top:0,width:100,height:100};}
}
const elements={};
['home','parts','docs','history','settings','modalRoot','toast','nav'].forEach(id=>elements[id]=new El(id));
const screens=[elements.home,elements.parts,elements.docs,elements.history,elements.settings];
const navButtons=[0,1,2,3,4].map(i=>new El('nav'+i));
const ctx={
 console,
 setTimeout:(fn)=>0,
 clearTimeout:()=>{},
 prompt:()=>null,
 alert:(m)=>{throw new Error('alert:'+m)},
 localStorage:{getItem:k=> k==='mi_auto_data_v1'?sip:null,setItem:(k,v)=>{}},
 window:{},
 document:{
  getElementById:(id)=>elements[id]||(elements[id]=new El(id)),
  querySelectorAll:(sel)=> sel==='.screen'?screens: sel==='#nav button'?navButtons:[],
  createElement:(tag)=>new El(tag)
 },
 URL:{createObjectURL:()=>'',revokeObjectURL:()=>{}},
 Blob:function(){},
 FileReader:function(){},
 Date,
 Math,
 Number,
 String,
 Array,
 Object,
 Set,
 JSON,
 crypto:{randomUUID:()=>Math.random().toString(36).slice(2)}
};
ctx.window=ctx;
vm.createContext(ctx);
try{vm.runInContext(code,ctx,{timeout:5000});}catch(e){console.error('initial error',e);process.exit(1)}
for (const v of ['home','parts','docs','settings','history']){
  try{ctx.go(v); const len=(elements[v]&&elements[v].innerHTML||'').length; console.log(v,'ok len',len, (elements[v].innerHTML||'').slice(0,30));}
  catch(e){console.error(v,'FAIL',e.stack);process.exitCode=1;}
}
