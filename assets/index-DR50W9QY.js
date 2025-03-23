function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/SizeUpdater-B3Zd0rW5.js","assets/index-CQSfBxXr.js","assets/index-CMQNOGeS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-CQSfBxXr.js";async function o(t,a=!0){await t.addParticleUpdater("size",async()=>{const{SizeUpdater:e}=await r(()=>import("./SizeUpdater-B3Zd0rW5.js"),__vite__mapDeps([0,1,2]));return new e},a)}export{o as loadSizeUpdater};
