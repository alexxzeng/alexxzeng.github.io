function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-9V-xZPjF.js","assets/index-DnVkSpKk.js","assets/index-iIXIH7nl.css","assets/index-DrlYnPtT.js","assets/index-DGe0-ORD.js","assets/index-DGcV-jP0.js","assets/index-DfF3IUDa.js","assets/index-0XdkHCdp.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DnVkSpKk.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-9V-xZPjF.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DrlYnPtT.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DGe0-ORD.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DGcV-jP0.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DfF3IUDa.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-0XdkHCdp.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
