function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D0c77NDG.js","assets/index-DSF5Aa89.js","assets/index-CNXcGwvp.css","assets/index-C8t9Fnn9.js","assets/index-DMgrMcG7.js","assets/index-BbodXUZV.js","assets/index-DCw9bJ7b.js","assets/index-DBafttkF.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DSF5Aa89.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D0c77NDG.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C8t9Fnn9.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DMgrMcG7.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BbodXUZV.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DCw9bJ7b.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DBafttkF.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
