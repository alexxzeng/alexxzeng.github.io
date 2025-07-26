function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BkWVbAav.js","assets/index-9fdXC_cZ.js","assets/index-CMQNOGeS.css","assets/index-BUFuAZv-.js","assets/index-B2utSJdk.js","assets/index-hPwagzf5.js","assets/index-oPKITAej.js","assets/index-CQFgcM46.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-9fdXC_cZ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BkWVbAav.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-BUFuAZv-.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B2utSJdk.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-hPwagzf5.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-oPKITAej.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CQFgcM46.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
