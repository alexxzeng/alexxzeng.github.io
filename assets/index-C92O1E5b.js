function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-CMqQr1aD.js","assets/index-DSF5Aa89.js","assets/index-CNXcGwvp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DSF5Aa89.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-CMqQr1aD.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
