function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-uhT_PUO2.js","assets/index-eFtwu-0o.js","assets/index-CpJ9TNM3.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-eFtwu-0o.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-uhT_PUO2.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
