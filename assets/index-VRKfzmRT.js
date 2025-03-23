function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-4gyyjzNW.js","assets/index-LslSZ9Kj.js","assets/index-CYatg8HU.css","assets/index-C_LIva86.js","assets/index-B0I-tCip.js","assets/index-BzUTuhub.js","assets/index-DE9cKcwv.js","assets/index-CLebUZqq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-LslSZ9Kj.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-4gyyjzNW.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C_LIva86.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B0I-tCip.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BzUTuhub.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DE9cKcwv.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CLebUZqq.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
