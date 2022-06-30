(async () =>{
const importObject = {
    env: {
        abort(_msg, _file, line, column){
            console.error("abort called")
        }
    }
}
const module = await WebAssembly.instantiateStreaming(
    fetch("build/release.wasm"),
    importObject
)
const isPrime = module.instance.exports.isPrime
const result = document.querySelector("#result")
document.querySelector("#prime-checker").addEventListener("submit", e =>{
    e.preventDefault();
    result.innerText = "";
    const number = e.target.elements.number.value
    result.innerText = `${number} is ${isPrime(number) ? '' : 'not' } prime`
})
})();