function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bkq6Z-DM.js","assets/index-B2xH9vLU.js","assets/index-iIXIH7nl.css","assets/index-TIAAuOyS.js","assets/index-BKGUWvkO.js","assets/index-BXL61hYa.js","assets/index-CaSzpv7W.js","assets/index-DnK4pI2i.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B2xH9vLU.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bkq6Z-DM.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-TIAAuOyS.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BKGUWvkO.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-BXL61hYa.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CaSzpv7W.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DnK4pI2i.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
