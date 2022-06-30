const fs = require("fs");
const compiled = new WebAssembly.Module(fs.readFileSync(__dirname + "/build/release.wasm"));
const imports = {
  env: {
    abort(_msg, _file, line, column) {
       console.error("abort called at index.ts:" + line + ":" + column);
    }
  }
};
Object.defineProperty(module, "exports", {
  get: () => new WebAssembly.Instance(compiled, imports).exports
});

// export function isPrime(n){
//     if (n<2){
//       return false
//     }
//     for (let i = 2; i < n; i++ ){
//       if (n%i === 0){
//         return false
//       }
//     }
//     return true
//   }
  