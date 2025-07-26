function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-CFrgmr5S.js","assets/index-9fdXC_cZ.js","assets/index-CMQNOGeS.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-9fdXC_cZ.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-CFrgmr5S.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
