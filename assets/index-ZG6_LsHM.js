function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Ci5fvCKL.js","assets/index-tj6PSR23.js","assets/index-CYatg8HU.css","assets/index-DjhTbaVA.js","assets/index-CZ9vPk-Y.js","assets/index-D8zSS7NE.js","assets/index-DLomv4cr.js","assets/index-f1MmmcND.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-tj6PSR23.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Ci5fvCKL.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DjhTbaVA.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CZ9vPk-Y.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-D8zSS7NE.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DLomv4cr.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-f1MmmcND.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
