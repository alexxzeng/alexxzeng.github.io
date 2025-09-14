function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-uCwU71Y3.js","assets/index-CQdDXN3l.js","assets/index-DuS_7-kf.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-CQdDXN3l.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-uCwU71Y3.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
