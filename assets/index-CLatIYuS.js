function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BICo3ZbW.js","assets/index-r7gJXU1o.js","assets/index-CMQNOGeS.css","assets/index-CFxXQDuJ.js","assets/index-DH6zRa7Q.js","assets/index-DCUw5UBT.js","assets/index-DVFAXAsE.js","assets/index-DjuTdXYw.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-r7gJXU1o.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BICo3ZbW.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CFxXQDuJ.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DH6zRa7Q.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DCUw5UBT.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DVFAXAsE.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DjuTdXYw.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
