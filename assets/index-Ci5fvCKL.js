function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-Bs3GvqNw.js","assets/index-tj6PSR23.js","assets/index-CYatg8HU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-tj6PSR23.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-Bs3GvqNw.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
