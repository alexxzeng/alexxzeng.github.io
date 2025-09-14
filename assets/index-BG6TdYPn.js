function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Dwldlm0n.js","assets/index-CQdDXN3l.js","assets/index-DuS_7-kf.css","assets/index-C5PGVno_.js","assets/index-DyO6Ak_i.js","assets/index-DiSQU50H.js","assets/index-BGCvel67.js","assets/index-BLhyWv4Q.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CQdDXN3l.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Dwldlm0n.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C5PGVno_.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DyO6Ak_i.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DiSQU50H.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BGCvel67.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BLhyWv4Q.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
