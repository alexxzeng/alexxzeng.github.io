function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-FyDQJmFD.js","assets/index-DrSZKj2A.js","assets/index-XSO6d1_F.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DrSZKj2A.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-FyDQJmFD.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
