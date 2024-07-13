async function b(p){let h="";if(p.headers.get("content-type")?.includes("application/json")){const c=await p.json();h=`${c.message}${"id"in c?`\nID: ${c.id}`:""}`}throw Error(`HTTP Error: ${p.status} ${p.statusText}\n`,{cause:h})}async function l(p,h={}){const c=new URL(p,"https://nekos.moe/api/v1/");console.log(`URL: ${c.toString()}\nTimestamp: ${Date.now()}`);try{const o=await fetch(c,h);if(!o.ok)await b(o);return await o.json()}catch(o){throw Error("Error: ",{cause:o})}}function k(p,h,c){try{const o=new File([p],`${h}.${c}`,{type:`image/${c}`});return console.log("File created successfully:\n%o",{name:o.name,type:o.type,size:o.size,lastModified:o.lastModified}),o}catch(o){throw Error("Error: ",{cause:o})}}async function x(p){return(await l(`images/${p}`)).image}async function N(p={}){return(await l("images/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).images}async function v(p=1,h){const c=new URLSearchParams({count:p.toString()});if(h!==void 0)c.append("nsfw",h.toString());return(await l(`random/image?count=${p}${h!==void 0?`&nsfw=${h}`:""}`)).images}async function M(p){const h=new FormData;if(h.append("image",p.image),h.append("nsfw",p.nsfw.toString()),h.append("tags",p.tags.toString()),p.artist!==void 0)h.append("artist",p.artist);return await l("images",{method:"POST",headers:{Authorization:p.token,"Content-Type":"multipart/form-data"},body:h})}async function O(p,h){const c=new Headers;if(h!==void 0)c.append("Authorization",h);return(await l(`user/${p}`,{headers:c})).user}async function _(p={}){return(await l("users/search",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(p)})).users}async function j(p,h){return(await l("auth",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:p,password:h})})).token}async function z(p){await l("auth",{method:"POST",headers:{Authorization:p}})}var B={website:{url:"https://nekos.moe",repo:"https://github.com/Nekos-moe/website"},api:{url:"https://nekos.moe/api/v1",repo:"https://github.com/Nekos-moe/api",docs:{url:"https://docs.nekos.moe",repo:"https://github.com/Nekos-moe/docs"}},wrapper:{url:"https://jsr.io/@om/nekos-moe",repo:"https://github.com/OlaMushroom/nekos-moe-wrapper",docs:{url:"https://nekos-moe-wrapper.vercel.app",repo:"https://github.com/OlaMushroom/nekos-moe-wrapper/tree/docs"}}};export{M as upload,_ as searchUser,N as searchPost,z as regen,v as random,O as getUser,x as getPost,k as create,j as auth,B as _links};