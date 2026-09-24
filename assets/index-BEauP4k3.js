function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BR2gGhkh.js","assets/index-CucJRh-4.js","assets/index-DDx3RBJq.css","assets/index-Dq1eZc90.js","assets/index-dYQY7cz3.js","assets/index-DZoDE_2b.js","assets/index-Du_NhtiT.js","assets/index-BrJyzwXE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CucJRh-4.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BR2gGhkh.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dq1eZc90.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-dYQY7cz3.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DZoDE_2b.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Du_NhtiT.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BrJyzwXE.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
