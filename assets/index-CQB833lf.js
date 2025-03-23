function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BftoxMup.js","assets/index-Tjr5_4_C.js","assets/index-CMQNOGeS.css","assets/index-Cux4sd5O.js","assets/index-BVD4dKOy.js","assets/index-CYK1jmXe.js","assets/index-BwnplEsa.js","assets/index-BgVCqGxM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Tjr5_4_C.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BftoxMup.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Cux4sd5O.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BVD4dKOy.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CYK1jmXe.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BwnplEsa.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BgVCqGxM.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
