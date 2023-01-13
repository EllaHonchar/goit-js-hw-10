console.log((function(n){return fetch("".concat("https://restcountries.com/v3.1/","/name/").concat(n,"fields=").concat("name,capital,population,flags,languages")).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))}));
//# sourceMappingURL=index.2d2b98f3.js.map
