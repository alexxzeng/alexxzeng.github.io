function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-C1DdRM0o.js","assets/index-CQSfBxXr.js","assets/index-CMQNOGeS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CQSfBxXr.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-C1DdRM0o.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
