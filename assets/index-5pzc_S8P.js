function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-jvfrpfwr.js","assets/index-eFtwu-0o.js","assets/index-CpJ9TNM3.css","assets/index-bO8fs56f.js","assets/index-CCktcwb4.js","assets/index-DHuLIksr.js","assets/index-DNshLWg1.js","assets/index-bSAPu_Vk.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-eFtwu-0o.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-jvfrpfwr.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-bO8fs56f.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CCktcwb4.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DHuLIksr.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DNshLWg1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-bSAPu_Vk.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
