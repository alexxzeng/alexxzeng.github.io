function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-B-_MJ57M.js","assets/index-DnVkSpKk.js","assets/index-iIXIH7nl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-DnVkSpKk.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-B-_MJ57M.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
