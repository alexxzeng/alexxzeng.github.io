function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DAUO320w.js","assets/index-DSF5Aa89.js","assets/index-CNXcGwvp.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DSF5Aa89.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DAUO320w.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
