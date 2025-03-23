function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-sRl9CUlb.js","assets/index-Tjr5_4_C.js","assets/index-CMQNOGeS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Tjr5_4_C.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-sRl9CUlb.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
