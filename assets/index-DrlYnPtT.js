function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-BePr2eVr.js","assets/index-DnVkSpKk.js","assets/index-iIXIH7nl.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-DnVkSpKk.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-BePr2eVr.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
