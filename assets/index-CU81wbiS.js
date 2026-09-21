function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DHv-pv2Q.js","assets/index-DrSZKj2A.js","assets/index-XSO6d1_F.css","assets/index-DhEqZ3NP.js","assets/index-Br1kHyhQ.js","assets/index-h5vIBify.js","assets/index-B3ISNb5j.js","assets/index-Bqzidj_Z.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-DrSZKj2A.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DHv-pv2Q.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DhEqZ3NP.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Br1kHyhQ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-h5vIBify.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-B3ISNb5j.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-Bqzidj_Z.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
