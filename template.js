const { create, globals } = require('/home/matthew/final_project/dawn/out/Debug/dawn.node');
const shaderDir = '/home/matthew/final_project/WebGlitchFiles/shaders/';
Object.assign(globalThis, globals);
let navigator = { gpu: create([]), };
const fs = require('node:fs');

function loadShader(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data;
    } catch (err) {
        console.error('Failed to load shader:', err);
    }
}

const shaderName = process.env.SHADER_FILE;


const shader = loadShader(`${shaderDir}${shaderName}`);

async function main() {
    const adapter = await navigator.gpu.requestAdapter();
    const device = await adapter.requestDevice();
    const shaderModule = device.createShaderModule({
        code: shader
    });
    const computePipeline = device.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: shaderModule
        },
        layout: "auto"
    });


}
main().then(() => {
    console.log("All operations completed.");
    process.exit(0);
}).catch(error => {
    console.error("An error occurred:", error);
    process.exit(1);
});
