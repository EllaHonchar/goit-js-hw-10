console.log((function(t){return fetch(`https://restcountries.com/v3.1//name/${t}fields=name,capital,population,flags,languages`).then((t=>{if(!t.ok)throw new Error(t.status);return t.json()}))}));
//# sourceMappingURL=index.6bf7d55c.js.map
