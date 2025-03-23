function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CFsi7HU-.js","assets/index-CQSfBxXr.js","assets/index-CMQNOGeS.css","assets/index-Bi_LBOGZ.js","assets/index-bzlwIEfa.js","assets/index-CIJrV45w.js","assets/index-MzpsNmjw.js","assets/index-DR50W9QY.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CQSfBxXr.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CFsi7HU-.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Bi_LBOGZ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-bzlwIEfa.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CIJrV45w.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-MzpsNmjw.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DR50W9QY.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
