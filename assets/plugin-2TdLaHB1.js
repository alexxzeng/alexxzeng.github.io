function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-COCa-G59.js","assets/index-tj6PSR23.js","assets/index-CYatg8HU.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-tj6PSR23.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-COCa-G59.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
