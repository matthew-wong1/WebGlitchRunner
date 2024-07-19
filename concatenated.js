const { create, globals } = require('/Users/matthew/Documents/msc/final_proj/dawn/out/Debug/dawn.node');
Object.assign(globalThis, globals);
let navigator = { gpu: create([]), };
const fs = require('node:fs');if (!navigator.gpu) {
    throw new Error("WebGPU not supported on this browser");
}

function loadShader(file) {
    try {
        const data = fs.readFileSync(file, 'utf8');
        return data;
    } catch (err) {
        console.error('Failed to load shader:', err);
    }
}
// Seed: -498854573230175186
const typedArray23 = new Int8Array([7864, -5180, -176, -4820, 4187, -8874, -7772, 4326, -603, 230, -6929, -4811, 3851, 3534, 2169, 3742, -9050, 6919, 2674, 5670, 8896, 5754, 562, -464, -7665, -3603, -7295, 2529, -5721, -721, -1563, -8607, 6585, 456, -6348, -8220, 7716, -5075, 4650, -2948, 2871, -6187, 4417, -1619, 7327, 803, 1185, -6488, 7581, 1207, -7650, -8632, 6984, -1431, -9566, 4336, 6613, -5806, 3248, -262, 3386, 9949, 5622, 903, 9184, -6290, -1575, -4496, 5713, 414, 2034, -4338, -2630, -7394, 5125, 5665, 1191, -3141, -4412, -6855, 238, -1831, 4237, 5697, -4949, -8000, -8987, 7330, 7433, 3330, -443, 2390, -7221, 3616, 8922, -2431, -163, 1857, 8655, 586, -3936, -1915, -3241, 6591, 3659, -8645, -9919, -4713, -11, -6871, -3949, 1250, 9852, 5527, -3025, -2971, 3166, -5974, -3618, 6266, -7975, 3670, 2673, 4422, -1142, 7041, -8399, -1591, -9656, 2384, -1662, -2704, -2803, -7902, -326, -4984, -5178, 7383, 7410, -6245, 1395, -1838, -429, 9861, -8246, -6857, 9551, -5043, 7780, 1978, -3397, -5474, -8959, 1631, -8457, 1138, -9840, -2279, 8837, -9407, 6456, -9211, 5292, -648, 6848, -4851, 101, 1247, -1210, -613, 639, 9626, -4172, 5500, 262, 7045, -4806, 3440, 7573, -2994, 3459, -4569, -9081, 4660, -8081, 4951, -7313, -6433, -6145, 8018, 2378, 4076, -4121, -9450, -5808, -3359, 8070, -5082, -5022, -64, -5890, 8591, 8598, 5795, -1410, -3672, 5521, -5847, -1148, -760, 2085, 5679, -8981, -4554, 3945, -2583, 4692, 6675, 9321, -7863, 8827, -1875, -5574, 8052, 66, 9702, 415, 1393, -5196, 9526, 8304, -4137, 7125, -7283, -1402, -7590, -2202, -321, 4283, -7644, -8601, 4606, -1623, -6770, 7915, -2644, -8439, -2064, -8144, 9300, 6457, 8273, 937, 6947, 460, 6823, -4875, 535, 3741, -4062, 2366, -309, 9954, 2551, -7844, 5129, 136, 9429, 1107, -9094, 652, 7084, -788, -6665, -7334, -5548, 1547, 8974, -8798, 8597, -2101, 2322, 6626, 2527, -7204, 5311, -4775, 6475, 3952, -3874, -3185, -3754, 9572, -1258, 155, -4875, 4262, 8631, 9087, -5086, -9215, 3066, -7812, -1961, -3179, 3936, 7153, 672, 630, 4668, 5572, -9576, -4556, 9700, 637, -7727])
const shader10 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const shader9 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl');
const typedArray22 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray21 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray20 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray19 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray18 = new Uint8Array([-4339, -7866, 7221, 250, -6537, -8445, -7292, 2852, -7397, 2723, -6947, 5708, -4743, -3200, -9471, 763, -6189, 7018, -3362, 5299])
const typedArray17 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray16 = new Float32Array([9085, -2640, 9192, -397, 9252, 8118, -5084, -9483, -6392, 8314, -3856, -2782, 2873, 2830, -4165, 7380, -375, -651, 1526, -2958, 3198, 8191, -5764, -2244, -4148, 6037, 8689, -4831, -1899, -8591, 3490, 9541, 9541, -9594, 8995, -3208, -5462, 6883, -835, 3411, 736, -5990, 3283, 3596, -9106, -8815, -6277, 1240, 1851, -7548, -1948, 884, -8769, -2750, -6239, 2957, 9781, -9289, -7244, -2427, -6876, 3542, -63, 608, -5627, 7339, -8874, 2039, -1970, -1053, -7567, -8065, 4471, -4927, 1105, -6022, 9144, 8187, 9966, -2662, -3900, -1682, 1339, -3577, -8582, 7434, 3893, 2996, -430, 9657, 7176, 7104, -1291, 9483, -4897, 9562, -7593, 1900, 3952, 1384, -730, 3115, 591, 3074, 3139, 4062, 2108, -9931, 9405, -3256, -2717, 178, 3299, -8607, -6681, 7209, -1870, 9622, -9107, -4651])
const typedArray15 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader8 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl');
const typedArray14 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader7 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl');
const shader6 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl');
const shader5 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl');
const typedArray13 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray12 = new Int8Array([-5082, 32, -8069, -3098, -1627, 1010, 1751, 394, -5219, -3791, 621, -2866, -8521, 1090, -6672, -2930, -4382, 6060, -1658, -2556, 2719, 3405, -1417, -1277, -5075, -9849, 2540, 3942, 6353, 4180, -6414, 3883, 3027, -232, 7261, 1335, 5849, 7273, -1044, -6090, -8492, 5457, 9437, 1241, -760, -7096, 9574, 1024])
const typedArray11 = new Uint8Array([1882, 8287, -9009, 8552, -4852, -2853, -9374, 1348, 2663, 7348, -3295, 7643, 1911, -4912, 8946, -666, -491, -9837, 7104, -2366, 3242, -7121, -6494, 8276, -6568, 3222, 4485, -9296, 5758, -9365, 1281, 5584, -400, -4585, 283, 1003, -8723, -7045, 2172, -8420, 2775, -8194, -8761, 6237, 2137, 9250, -1443, -533, 7415, 530, 4810, 1050, 6181, -2902, 1821, -8731, 4662, -8678, -4157, 322, 2758, -2719, 8769, 2172, -5450, -6619, -3924, -9527, 6865, -2027, -5682, -7719, 2724, 4528, -6134, -928, -3133, 5204, 4255, -3317, -474, -1593, -3915, 1572, 1792, 2745, 1726, 1437, -8533, -5340, 6068, -3583, 4876, 6912, 6727, -6861, -4365, 2418, 4726, 7101, -7225, -5671, -3079, -805, 4486, 74, -4836, 963, -959, -8129, -4136, 4499, 4197, 4323, -4406, -3028, -7238, -5345, 5286, 7881, -5089, -851, 9803, -8766, -4627, 4013, -6900, -7751, -1396, -4335, -7277, 7010, 90, -7842, -5616, -4394, -7223, -8136, -8656, 6167, -9871, -730, -4672, 7391, -9439, -4061, 240, -1315])
const typedArray10 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray9 = new Int8Array([-9056, 2495, 9074, -3521, -2548, 2437, -4536, 6722, 7812, 613, 7168, -1800, 1735, -5639, 164, -8721])
const typedArray8 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader4 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const typedArray7 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray6 = new Uint8Array([-8019, 7940, 6985, -2433, -8432, -6350, -6796, 9345, -7993, 2018, -1168, 1253, 693, 2729, 1972, -4838, 3650, -2892, 6473, 2536, -677, 9305, -8481, -8140, 4648, 5920, -984, 8425, 2365, -1272, 1310, 911, -8009, -8575, 4389, 3161, 9125, -3806, 184, 6730, 4135, -1775, 3130, 289, 9189, 7988, -6869, 6493, -7317, -9816, -5906, 2760, 8416, -8985, -695, 326, -1740, -8670, -1386, -5968, -9210, 6034, -9366, 9495, -6526, -5318, -9365, 3431, 7362, -3417, -4022, 677, 6348, -8058, 3457, -8637, 1371, -7226, 9519, -8071, -7378, 2322, -3163, 6072, 3303, -9746, -840, -3164, -155, -6540, -3927, 2459, -7060, -8203, 9186, -5449, 573, 6729, -3273, 4399, 2961, 9692, 7200, -6837, 341, 5920, -8051, -5675, -6521, -9841, 1630, -6911, -3866, 8568, 6625, 6317, -8309, -4940, -5770, -8870, -7955, -2552, -3387, -7330, 7342, -8777, -454, -4496, 5995, -7635, 9910, -6449, -7619, 1988, -4496, -5561, 7026, 2447, -7718, -6257, -2054, 2222, -1244, 5727, 8373, -8993, 3245, 2440, -5778, 5075, 1376, -9715, -2788, -8825, -4545, -8722, -2712, -8801, -4900, 4839, 1029, -6086, 8410, -9488, -9054, 7460, -5350, 6988, -1788, 8736, -707, 1748, -4900, 7810, 8803, 3760, -2995, 9633, 9841, 818, -5924, -4004, 3566, 8027, 6154, 3005, -4038, 7244, 1743, 9819, 3183, 6075, -7741, 7448, -1683, 2366, -2217, -5498, -3001, 8976, 6785, 4645, -9766, 1282, -3063, -8565, -5763, 1814, 7874, -2174, -6784, -9512, 2990, -4639, -4227, -3774, 8518, -2900, -9091, -111, 5179, -4006, -7866, 4542, -392, 3042, -2043, -3584, 1249, 1687, 4572, 247, -8112, -1911, -4226, -8619, -2849, 7509, -8629, -7210, -1371, 8723, -1968, 1756, -3021, 9873, 3691, 4394, 1786, 7940, -4974, -8373, 4716, -6402, -1672, 2383, 7597, -5595, 3005, 5042, 452, -4335, -3016, 368, 2597, -6051, -6683, -6208, 9042, 5717, -756, 3022, -6635, 7111, 4879, -4625, -6875, -1066, 1527, 6456, -4148, 8681, 1597, -8798, 837, -8258, 3149, -1543, -7178, -7474, -899, 5195, 9586, 4464, -2111, 3153, 7763, 4625, -5957, -698, 9687, -2222, 5813, 3388, -7580, 6174, -4263, 8590, 7221, 3930, -7151, -9586, -68, 5236, -9668, -3007, -5281, 8420, 6223, 6415, 3251, -9904, -8517, -5820, -1644, 6405, 9464, 7912, -1692, 128, -8682, 4232, -1502, -696, 3739, -8040, 4582, -1403, -7848, -9175, 7841, -6533, -4364, 5536, -8890, -2318, -1626, 8046, -2496, 6798, -6284, -2318, -7206, 8558, -3002, -2704, -3381, 6969, -3431, 6240, 1726, -169, -2747, 8969, 5766, 5590, -5368, 8900, -4145, -7940, -1539, -6550])
const shader3 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const typedArray5 = new Float32Array([-9821, -9705, -3910, 8577, -62, -6021])
const typedArray4 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray3 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray2 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader2 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const shader1 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl');
const typedArray1 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray0 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader0 = loadShader('/Users/matthew/Documents/msc/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl');

async function main() {
    const GPUAdapter0 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUDevice0 = await GPUAdapter0.requestDevice();
    const GPUCommandEncoder0 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder0"
    });
    const GPUComputePassEncoder0 = GPUCommandEncoder0.beginComputePass({
        label: "GPUComputePassEncoder0"
    });
    const GPUShaderModule0 = GPUDevice0.createShaderModule({
        label: "compute",
        code: shader0
    });
    const GPUComputePipeline0 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline0",
        layout: "auto"
    });
    const GPUBuffer0 = GPUDevice0.createBuffer({
        label: "GPUBuffer0",
        mappedAtCreation: false,
        size: 32,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDEX | GPUBufferUsage.QUERY_RESOLVE
    });
    const GPUBuffer1 = GPUDevice0.createBuffer({
        label: "GPUBuffer1",
        mappedAtCreation: false,
        size: 32,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.VERTEX
    });
    const GPUQueue0 = GPUDevice0.queue
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray0);
    const GPUBindGroup0 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    const GPUTexture0 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r16uint",
        label: "GPUTexture0",
        size: {
            width: 359,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["r16uint"]
    });
    const GPUBuffer2 = GPUDevice0.createBuffer({
        label: "GPUBuffer2",
        mappedAtCreation: true,
        size: 176436488,
        usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST
    });
    const GPUQuerySet0 = GPUDevice0.createQuerySet({
        count: 2073,
        label: "GPUQuerySet0",
        type: "occlusion"
    });
    const string0 = GPUQuerySet0.label
    const GPUSupportedFeatures0 = GPUAdapter0.features
    const GPUCommandEncoder1 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder1"
    });
    const GPUTexture1 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgba16float",
        label: "GPUTexture1",
        size: {
            width: 2712,
            height: 1632,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgba16float"]
    });
    const GPUTextureView0 = GPUTexture1.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba16float",
        label: "GPUTextureView0"
    });
    const GPURenderPassEncoder0 = GPUCommandEncoder1.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.2250041176907358,
                g: 1.8593319853961057,
                b: 1.6529246022794561,
                a: 0.2181023228404091
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView0
        }],
        label: "GPURenderPassEncoder0",
        maxDrawCount: 877733309,
        occlusionQuerySet: GPUQuerySet0
    });
    GPURenderPassEncoder0.setVertexBuffer(0, GPUBuffer1);
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder0.dispatchWorkgroups(126, 19, 10);
    const string1 = GPUQueue0.label
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray1);
    const GPUBindGroup1 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const string2 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUCommandEncoder2 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder2"
    });
    const GPUTexture2 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "bgra8unorm",
        label: "GPUTexture2",
        size: {
            width: 3120,
            height: 416,
            depthOrArrayLayers: 45
        },
        mipLevelCount: 8,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["bgra8unorm-srgb"]
    });
    const GPUTextureView1 = GPUTexture2.createView({
        aspect: "all",
        dimension: "2d-array",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "bgra8unorm",
        label: "GPUTextureView1"
    });
    const GPURenderPassEncoder1 = GPUCommandEncoder2.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.216156075962579,
                g: 1.6685030942035899,
                b: 0.9817822488542602,
                a: 0.5085797708483508
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView1
        }],
        label: "GPURenderPassEncoder1",
        maxDrawCount: 1379288482,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPUAdapter1 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const GPUCommandEncoder3 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder3"
    });
    GPURenderPassEncoder1.end();
    const GPUAdapter2 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const GPUSupportedLimits0 = GPUDevice0.limits
    const string3 = GPUQuerySet0.type
    const GPUCommandBuffer0 = GPUCommandEncoder2.finish();
    const GPUSupportedFeatures1 = GPUDevice0.features
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    const GPUSupportedFeatures2 = GPUAdapter1.features
    const WGSLLanguageFeatures0 = navigator.gpu.wgslLanguageFeatures
    const GPUTextureView2 = GPUTexture0.createView({
        aspect: "all",
        dimension: "1d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "r16uint",
        label: "GPUTextureView2"
    });
    const GPUAdapterInfo0 = GPUAdapter1.info
    const WGSLLanguageFeatures1 = navigator.gpu.wgslLanguageFeatures
    const GPUShaderModule1 = GPUDevice0.createShaderModule({
        label: "fragment",
        code: shader1
    });
    const GPUShaderModule2 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader2
    });
    const GPURenderPipeline0 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "min",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "src-alpha",
                        srcFactor: "dst-alpha"
                    }
                },
                format: "rgba16float",
                writeMask: GPUColorWrite.GREEN | GPUColorWrite.ALL | GPUColorWrite.RED | GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline0",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "line-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPURenderPassEncoder0.setPipeline(GPURenderPipeline0);
    const string4 = GPURenderPipeline0.label
    const string5 = GPUQuerySet0.label
    const string6 = GPUCommandEncoder1.label
    const GPUTextureView3 = GPUTexture1.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba16float",
        label: "GPUTextureView3"
    });
    const string7 = GPUTextureView1.label
    const GPUBuffer3 = GPUDevice0.createBuffer({
        label: "GPUBuffer3",
        mappedAtCreation: true,
        size: 13844376,
        usage: GPUBufferUsage.MAP_WRITE
    });
    const GPUAdapter3 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUComputePipeline1 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline1",
        layout: "auto"
    });
    GPUQueue0.submit([GPUCommandBuffer0]);
    const GPUSupportedLimits1 = GPUAdapter3.limits
    const boolean0 = GPUAdapter0.isFallbackAdapter
    const boolean1 = GPUAdapter1.isFallbackAdapter
    GPURenderPassEncoder0.end();
    const GPUCommandBuffer1 = GPUCommandEncoder1.finish();
    const string8 = GPUComputePipeline0.label
    const string9 = GPUComputePassEncoder0.label
    const GPUBuffer4 = GPUDevice0.createBuffer({
        label: "GPUBuffer4",
        mappedAtCreation: false,
        size: 250517112,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_SRC | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.VERTEX
    });
    const GPUSupportedFeatures3 = GPUAdapter0.features
    const GPUBuffer5 = GPUDevice0.createBuffer({
        label: "GPUBuffer5",
        mappedAtCreation: false,
        size: 125806168,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.INDEX | GPUBufferUsage.COPY_SRC | GPUBufferUsage.UNIFORM
    });
    const GPUAdapterInfo1 = GPUAdapter2.info
    const GPUSupportedFeatures4 = GPUDevice0.features
    const GPURenderPipeline1 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "min",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "subtract",
                        dstFactor: "dst",
                        srcFactor: "one-minus-src-alpha"
                    }
                },
                format: "rgb10a2unorm",
                writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA
            }]
        },
        label: "GPURenderPipeline1",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "ccw",
            topology: "triangle-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    const GPUTexture3 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgba8unorm-srgb",
        label: "GPUTexture3",
        size: {
            width: 1698,
            height: 4041,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.COPY_DST,
        viewFormats: ["rgba8unorm"]
    });
    const GPUTextureView4 = GPUTexture3.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm",
        label: "GPUTextureView4"
    });
    const GPURenderPassEncoder2 = GPUCommandEncoder3.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.30216277496719024,
                g: 1.6548179975777837,
                b: 1.6330352581717733,
                a: 0.7183811713110926
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView4
        }],
        label: "GPURenderPassEncoder2",
        maxDrawCount: 1524524529,
        occlusionQuerySet: GPUQuerySet0
    });
    GPURenderPassEncoder2.end();
    const boolean2 = GPUAdapter0.isFallbackAdapter
    const GPUBindGroupLayout0 = GPUComputePipeline1.getBindGroupLayout(0);
    const GPUCommandEncoder4 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder4"
    });
    const string10 = GPUDevice0.label
    const GPUComputePassEncoder1 = GPUCommandEncoder3.beginComputePass({
        label: "GPUComputePassEncoder1"
    });
    const string11 = GPUTextureView0.label
    const GPUTexture4 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture4",
        size: {
            width: 1766,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["r16float"]
    });
    const GPUTexture5 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rg8unorm",
        label: "GPUTexture5",
        size: {
            width: 503,
            height: 577,
            depthOrArrayLayers: 63
        },
        mipLevelCount: 2,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rg8unorm"]
    });
    const GPUTextureView5 = GPUTexture5.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rg8unorm",
        label: "GPUTextureView5"
    });
    const GPURenderPassEncoder3 = GPUCommandEncoder4.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.0889369860605402,
                g: 0.9221770413379629,
                b: 1.6686348828280435,
                a: 1.6353460972746177
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView5,
            depthSlice: 19
        }],
        label: "GPURenderPassEncoder3",
        maxDrawCount: 295642992,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPURenderPipeline2 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "zero",
                        srcFactor: "src"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rg8unorm",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline2",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "line-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPURenderPassEncoder3.setPipeline(GPURenderPipeline2);
    const GPUBuffer6 = GPUDevice0.createBuffer({
        label: "GPUBuffer6",
        mappedAtCreation: true,
        size: 264623084,
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDIRECT | GPUBufferUsage.STORAGE | GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.QUERY_RESOLVE
    });
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray2);
    const GPUBindGroup2 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline1.bindGroup",
        layout: GPUComputePipeline1.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUCommandEncoder5 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder5"
    });
    const GPUSupportedLimits2 = GPUDevice0.limits
    const GPUSupportedFeatures5 = GPUAdapter1.features
    const GPUAdapterInfo2 = GPUAdapter3.info
    const WGSLLanguageFeatures2 = navigator.gpu.wgslLanguageFeatures
    GPUComputePassEncoder1.end();
    const GPUCommandBuffer2 = GPUCommandEncoder3.finish();
    const GPURenderPipeline3 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "zero",
                        srcFactor: "one"
                    }
                },
                format: "bgra8unorm-srgb",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline3",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "ccw",
            topology: "triangle-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray3);
    const GPUBindGroup3 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
    const boolean3 = GPUAdapter1.isFallbackAdapter
    const string12 = GPUComputePassEncoder0.label
    const GPUTexture6 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba8unorm-srgb",
        label: "GPUTexture6",
        size: {
            width: 935,
            height: 211,
            depthOrArrayLayers: 10
        },
        mipLevelCount: 9,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.COPY_DST,
        viewFormats: ["rgba8unorm"]
    });
    const string13 = GPUCommandEncoder0.label
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup3);
    GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder0.dispatchWorkgroups(80, 37, 14);
    const string14 = GPUComputePipeline1.label
    const string15 = GPUTextureView3.label
    const string16 = GPUTextureView2.label
    const GPUQueue1 = GPUDevice0.queue
    const string17 = GPUQuerySet0.count
    const string18 = GPUQuerySet0.type
    GPURenderPassEncoder3.end();
    const WGSLLanguageFeatures3 = navigator.gpu.wgslLanguageFeatures
    const boolean4 = GPUAdapter1.isFallbackAdapter
    const GPUSupportedLimits3 = GPUAdapter0.limits
    const GPUSupportedLimits4 = GPUDevice0.limits
    const string19 = GPUCommandEncoder4.label
    const string20 = GPUQuerySet0.type
    const GPURenderPipeline4 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "subtract",
                        dstFactor: "dst-alpha",
                        srcFactor: "one-minus-dst-alpha"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "src-alpha",
                        srcFactor: "one-minus-src-alpha"
                    }
                },
                format: "r8unorm",
                writeMask: GPUColorWrite.RED | GPUColorWrite.BLUE | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline4",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "line-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPUComputePassEncoder0.end();
    const GPUQueue2 = GPUDevice0.queue
    const GPUComputePassEncoder2 = GPUCommandEncoder0.beginComputePass({
        label: "GPUComputePassEncoder2"
    });
    const GPUAdapter4 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const GPUSupportedFeatures6 = GPUAdapter0.features
    GPUComputePassEncoder2.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder2.end();
    const GPUCommandBuffer3 = GPUCommandEncoder0.finish();
    const GPUCommandEncoder6 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder6"
    });
    GPUQueue1.writeBuffer(GPUBuffer0, 0, typedArray4);
    const GPUBindGroup4 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUBuffer7 = GPUDevice0.createBuffer({
        label: "GPUBuffer7",
        mappedAtCreation: false,
        size: 147885408,
        usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.UNIFORM
    });
    const GPUTexture7 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "bgra8unorm",
        label: "GPUTexture7",
        size: {
            width: 332,
            height: 3,
            depthOrArrayLayers: 37
        },
        mipLevelCount: 5,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["bgra8unorm-srgb"]
    });
    const GPUTextureView6 = GPUTexture7.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 4,
        format: "bgra8unorm-srgb",
        label: "GPUTextureView6"
    });
    const GPURenderPassEncoder4 = GPUCommandEncoder6.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.469099389358728,
                g: 0.5373382243453302,
                b: 0.2607246045001652,
                a: 0.308379693021559
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView6,
            depthSlice: 1
        }],
        label: "GPURenderPassEncoder4",
        maxDrawCount: 2520992698,
        occlusionQuerySet: GPUQuerySet0
    });
    GPURenderPassEncoder4.setPipeline(GPURenderPipeline3);
    GPURenderPassEncoder4.draw(1);
    const GPUBuffer8 = GPUDevice0.createBuffer({
        label: "GPUBuffer8",
        mappedAtCreation: true,
        size: 38637424,
        usage: GPUBufferUsage.MAP_WRITE
    });
    const GPUComputePassEncoder3 = GPUCommandEncoder4.beginComputePass({
        label: "GPUComputePassEncoder3"
    });
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup0);
    const GPUComputePipeline2 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline2",
        layout: "auto"
    });
    GPURenderPassEncoder4.setVertexBuffer(0, GPUBuffer4);
    const string21 = GPUCommandEncoder4.label
    GPURenderPassEncoder4.setPipeline(GPURenderPipeline3);
    const GPUTexture8 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "rgba8unorm",
        label: "GPUTexture8",
        size: {
            width: 3735,
            height: 1099,
            depthOrArrayLayers: 30
        },
        mipLevelCount: 9,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgba8unorm-srgb"]
    });
    const GPUTextureView7 = GPUTexture8.createView({
        aspect: "all",
        dimension: "2d-array",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 3,
        format: "rgba8unorm-srgb",
        label: "GPUTextureView7"
    });
    const GPURenderPassEncoder5 = GPUCommandEncoder5.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.2275912279224677,
                g: 0.02832939408659496,
                b: 1.9258520440245064,
                a: 0.912933851264196
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView7
        }],
        label: "GPURenderPassEncoder5",
        maxDrawCount: 558518072,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPUBuffer9 = GPUDevice0.createBuffer({
        label: "GPUBuffer9",
        mappedAtCreation: true,
        size: 50983760,
        usage: GPUBufferUsage.MAP_WRITE
    });
    const string22 = GPUCommandEncoder6.label
    const string23 = GPUQueue2.label
    GPURenderPassEncoder5.end();
    const GPUCommandBuffer4 = GPUCommandEncoder5.finish();
    GPUQueue0.writeBuffer(GPUBuffer4, 29665860, typedArray5);
    const WGSLLanguageFeatures4 = navigator.gpu.wgslLanguageFeatures
    const GPUShaderModule3 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader3
    });
    GPUQueue1.writeBuffer(GPUBuffer4, 249107084, typedArray6);
    const GPUSupportedFeatures7 = GPUDevice0.features
    GPURenderPassEncoder4.setVertexBuffer(0, GPUBuffer1);
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup3);
    GPUComputePassEncoder3.setPipeline(GPUComputePipeline0);
    const string24 = GPUComputePassEncoder3.label
    const GPUTextureView8 = GPUTexture2.createView({
        aspect: "all",
        dimension: "2d-array",
        arrayLayerCount: 18,
        baseArrayLayer: 7,
        mipLevelCount: 4,
        baseMipLevel: 0,
        format: "bgra8unorm-srgb",
        label: "GPUTextureView8"
    });
    const boolean5 = GPUAdapter2.isFallbackAdapter
    const GPURenderPipeline5 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "src-alpha",
                        srcFactor: "constant"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rg8unorm",
                writeMask: GPUColorWrite.GREEN | GPUColorWrite.RED
            }]
        },
        label: "GPURenderPipeline5",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "cw",
            topology: "line-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray7);
    const GPUBindGroup5 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline2.bindGroup",
        layout: GPUComputePipeline2.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const string25 = GPUQuerySet0.type
    const WGSLLanguageFeatures5 = navigator.gpu.wgslLanguageFeatures
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder3.setPipeline(GPUComputePipeline0);
    const GPUCommandEncoder7 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder7"
    });
    const GPUComputePassEncoder4 = GPUCommandEncoder7.beginComputePass({
        label: "GPUComputePassEncoder4"
    });
    const GPUQueue3 = GPUDevice0.queue
    const string26 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUBuffer10 = GPUDevice0.createBuffer({
        label: "GPUBuffer10",
        mappedAtCreation: true,
        size: 97843788,
        usage: GPUBufferUsage.COPY_DST
    });
    const GPUBindGroupLayout1 = GPUComputePipeline0.getBindGroupLayout(0);
    const string27 = GPUQueue2.label
    const GPUBuffer11 = GPUDevice0.createBuffer({
        label: "GPUBuffer11",
        mappedAtCreation: false,
        size: 67204292,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.INDIRECT
    });
    const GPUCommandEncoder8 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder8"
    });
    const GPUSupportedLimits5 = GPUDevice0.limits
    GPURenderPassEncoder4.end();
    GPUComputePassEncoder4.setPipeline(GPUComputePipeline1);
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder4.dispatchWorkgroups(241, 148, 39);
    const GPUSupportedFeatures8 = GPUDevice0.features
    const GPUAdapterInfo3 = GPUAdapter1.info
    const boolean6 = GPUAdapter1.isFallbackAdapter
    const string28 = GPUQuerySet0.type
    const string29 = GPUComputePipeline2.label
    const string30 = GPUCommandEncoder6.label
    const GPUTexture9 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rg16float",
        label: "GPUTexture9",
        size: {
            width: 180,
            height: 388,
            depthOrArrayLayers: 58
        },
        mipLevelCount: 9,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rg16float"]
    });
    const GPUTextureView9 = GPUTexture9.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 1,
        format: "rg16float",
        label: "GPUTextureView9"
    });
    const GPURenderPassEncoder6 = GPUCommandEncoder8.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.7165989821332115,
                g: 0.7296860705435182,
                b: 1.1955394074869947,
                a: 0.8298564823358687
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView9,
            depthSlice: 28
        }],
        label: "GPURenderPassEncoder6",
        maxDrawCount: 1295181032,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPURenderPipeline6 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "reverse-subtract",
                        dstFactor: "one",
                        srcFactor: "dst-alpha"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rg16float",
                writeMask: GPUColorWrite.ALL | GPUColorWrite.ALPHA | GPUColorWrite.RED | GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline6",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "cw",
            topology: "triangle-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPURenderPassEncoder6.setPipeline(GPURenderPipeline6);
    GPURenderPassEncoder6.draw(8);
    GPURenderPassEncoder6.setVertexBuffer(0, GPUBuffer0);
    const string31 = GPUComputePipeline1.label
    GPURenderPassEncoder6.end();
    const string32 = GPUCommandEncoder6.label
    const GPUTexture10 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgba8unorm-srgb",
        label: "GPUTexture10",
        size: {
            width: 1822,
            height: 1191,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgba8unorm-srgb"]
    });
    const GPUTextureView10 = GPUTexture10.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm-srgb",
        label: "GPUTextureView10"
    });
    const GPURenderPassEncoder7 = GPUCommandEncoder6.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.4193021894764368,
                g: 1.4566925750784523,
                b: 1.4970446378326554,
                a: 1.0297009551199956
            },
            loadOp: "clear",
            storeOp: "discard",
            view: GPUTextureView10
        }],
        label: "GPURenderPassEncoder7",
        maxDrawCount: 771915163,
        occlusionQuerySet: GPUQuerySet0
    });
    const string33 = GPURenderPassEncoder7.label
    const GPURenderPipeline7 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "one-minus-constant",
                        srcFactor: "one-minus-src"
                    },
                    color: {
                        operation: "subtract",
                        dstFactor: "one-minus-constant",
                        srcFactor: "one-minus-constant"
                    }
                },
                format: "rgba8unorm-srgb",
                writeMask: GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline7",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "back",
            frontFace: "ccw",
            topology: "line-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPURenderPassEncoder7.setPipeline(GPURenderPipeline7);
    GPURenderPassEncoder7.draw(5);
    GPURenderPassEncoder7.setVertexBuffer(0, GPUBuffer0);
    GPURenderPassEncoder7.setVertexBuffer(0, GPUBuffer4);
    const GPUBuffer12 = GPUDevice0.createBuffer({
        label: "GPUBuffer12",
        mappedAtCreation: false,
        size: 127419980,
        usage: GPUBufferUsage.COPY_DST
    });
    const GPUTexture11 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r8unorm",
        label: "GPUTexture11",
        size: {
            width: 265,
            height: 476,
            depthOrArrayLayers: 17
        },
        mipLevelCount: 5,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["r8unorm"]
    });
    const GPUTextureView11 = GPUTexture11.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "r8unorm",
        label: "GPUTextureView11"
    });
    const GPURenderPassEncoder8 = GPUCommandEncoder8.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.8073003888562289,
                g: 0.30545530100088003,
                b: 0.5153706982528317,
                a: 1.8238417021899422
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView11,
            depthSlice: 12
        }],
        label: "GPURenderPassEncoder8",
        maxDrawCount: 2373743125,
        occlusionQuerySet: GPUQuerySet0
    });
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup3);
    const string34 = GPUQueue3.label
    const string35 = GPURenderPassEncoder7.label
    const GPUSupportedFeatures9 = GPUAdapter0.features
    const GPUCommandEncoder9 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder9"
    });
    const GPUComputePassEncoder5 = GPUCommandEncoder9.beginComputePass({
        label: "GPUComputePassEncoder5"
    });
    const string36 = GPUCommandEncoder9.label
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup3);
    GPUComputePassEncoder3.setPipeline(GPUComputePipeline2);
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup5);
    GPUComputePassEncoder3.dispatchWorkgroups(125, 117, 25);
    GPUComputePassEncoder3.end();
    const GPUSupportedLimits6 = GPUDevice0.limits
    const string37 = GPUTextureView11.label
    const GPUAdapterInfo4 = GPUAdapter1.info
    const string38 = GPUQuerySet0.type
    const WGSLLanguageFeatures6 = navigator.gpu.wgslLanguageFeatures
    const string39 = GPUQuerySet0.type
    GPUComputePassEncoder5.setBindGroup(0, GPUBindGroup5);
    const GPUSupportedFeatures10 = GPUDevice0.features
    const string40 = GPUComputePassEncoder4.label
    const WGSLLanguageFeatures7 = navigator.gpu.wgslLanguageFeatures
    const string41 = GPUDevice0.label
    const GPUAdapter5 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUTexture12 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rg16float",
        label: "GPUTexture12",
        size: {
            width: 291,
            height: 36,
            depthOrArrayLayers: 22
        },
        mipLevelCount: 3,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
        viewFormats: ["rg16float"]
    });
    const GPUTextureView12 = GPUTexture12.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 2,
        format: "rg16float",
        label: "GPUTextureView12"
    });
    const GPURenderPassEncoder9 = GPUCommandEncoder4.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.4079631346839927,
                g: 1.3720477607163306,
                b: 1.055202858627411,
                a: 1.6687084972340256
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView12,
            depthSlice: 3
        }],
        label: "GPURenderPassEncoder9",
        maxDrawCount: 1648523104,
        occlusionQuerySet: GPUQuerySet0
    });
    const string42 = GPUQuerySet0.type
    const GPUSupportedLimits7 = GPUAdapter5.limits
    GPUComputePassEncoder5.setBindGroup(0, GPUBindGroup3);
    GPUComputePassEncoder5.setPipeline(GPUComputePipeline1);
    const GPURenderPipeline8 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "reverse-subtract",
                        dstFactor: "dst",
                        srcFactor: "one-minus-src"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "dst-alpha",
                        srcFactor: "one-minus-dst-alpha"
                    }
                },
                format: "rgba8unorm-srgb",
                writeMask: GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline8",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "back",
            frontFace: "ccw",
            topology: "triangle-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    const GPUShaderModule4 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader4
    });
    const GPUSupportedFeatures11 = GPUAdapter3.features
    GPUQueue3.submit([GPUCommandBuffer4]);
    const GPUSupportedFeatures12 = GPUAdapter5.features
    GPUComputePassEncoder5.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder5.setPipeline(GPUComputePipeline1);
    GPUComputePassEncoder5.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder5.dispatchWorkgroups(116, 253, 8);
    const GPURenderPipeline9 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "src",
                        srcFactor: "zero"
                    },
                    color: {
                        operation: "reverse-subtract",
                        dstFactor: "one-minus-src",
                        srcFactor: "one-minus-dst-alpha"
                    }
                },
                format: "rg8unorm",
                writeMask: GPUColorWrite.BLUE | GPUColorWrite.RED | GPUColorWrite.ALL | GPUColorWrite.ALPHA
            }]
        },
        label: "GPURenderPipeline9",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "point-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup2);
    const GPUQueue4 = GPUDevice0.queue
    const GPUComputePipeline3 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline3",
        layout: "auto"
    });
    GPUComputePassEncoder5.end();
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup2);
    const GPURenderPipeline10 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "one-minus-dst-alpha",
                        srcFactor: "one"
                    }
                },
                format: "rgba16float",
                writeMask: GPUColorWrite.GREEN | GPUColorWrite.ALPHA | GPUColorWrite.RED | GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline10",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "none",
            frontFace: "ccw",
            topology: "triangle-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPURenderPassEncoder7.setPipeline(GPURenderPipeline7);
    const GPUComputePipeline4 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline4",
        layout: "auto"
    });
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray8);
    const GPUBindGroup6 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline3.bindGroup",
        layout: GPUComputePipeline3.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUAdapterInfo5 = GPUAdapter4.info
    GPUQueue1.writeBuffer(GPUBuffer0, 12, typedArray9);
    const GPUSupportedFeatures13 = GPUDevice0.features
    const GPUTexture13 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r32sint",
        label: "GPUTexture13",
        size: {
            width: 2643,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["r32sint"]
    });
    const string43 = GPUDevice0.label
    const string44 = GPUQuerySet0.count
    const GPUCommandEncoder10 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder10"
    });
    const boolean7 = GPUAdapter3.isFallbackAdapter
    const GPUSupportedFeatures14 = GPUAdapter2.features
    const GPUTexture14 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "rgba8unorm",
        label: "GPUTexture14",
        size: {
            width: 1789,
            height: 2162,
            depthOrArrayLayers: 4
        },
        mipLevelCount: 5,
        usage: GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgba8unorm"]
    });
    const GPUBuffer13 = GPUDevice0.createBuffer({
        label: "GPUBuffer13",
        mappedAtCreation: false,
        size: 107185404,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.INDEX | GPUBufferUsage.STORAGE | GPUBufferUsage.UNIFORM | GPUBufferUsage.INDIRECT | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.COPY_DST
    });
    const GPUBuffer14 = GPUDevice0.createBuffer({
        label: "GPUBuffer14",
        mappedAtCreation: true,
        size: 228365544,
        usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_SRC
    });
    GPURenderPassEncoder9.setVertexBuffer(0, GPUBuffer4);
    const GPUSupportedFeatures15 = GPUDevice0.features
    const GPUTextureView13 = GPUTexture1.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba16float",
        label: "GPUTextureView13"
    });
    const GPUQuerySet1 = GPUDevice0.createQuerySet({
        count: 490,
        label: "GPUQuerySet1",
        type: "occlusion"
    });
    GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray10);
    const GPUBindGroup7 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline2.bindGroup",
        layout: GPUComputePipeline2.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUQuerySet2 = GPUDevice0.createQuerySet({
        count: 1774,
        label: "GPUQuerySet2",
        type: "occlusion"
    });
    const GPUQuerySet3 = GPUDevice0.createQuerySet({
        count: 389,
        label: "GPUQuerySet3",
        type: "occlusion"
    });
    const GPUComputePassEncoder6 = GPUCommandEncoder9.beginComputePass({
        label: "GPUComputePassEncoder6"
    });
    const string45 = await navigator.gpu.getPreferredCanvasFormat();
    const string46 = GPUComputePipeline0.label
    const GPUQuerySet4 = GPUDevice0.createQuerySet({
        count: 3166,
        label: "GPUQuerySet4",
        type: "occlusion"
    });
    const GPUSupportedLimits8 = GPUDevice0.limits
    const GPUTextureView14 = GPUTexture13.createView({
        aspect: "all",
        dimension: "1d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "r32sint",
        label: "GPUTextureView14"
    });
    const GPUComputePipeline5 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline5",
        layout: "auto"
    });
    const string47 = GPURenderPassEncoder9.label
    const string48 = GPUCommandEncoder4.label
    GPURenderPassEncoder9.setVertexBuffer(0, GPUBuffer4);
    const GPUSupportedFeatures16 = GPUAdapter0.features
    const string49 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUComputePassEncoder7 = GPUCommandEncoder10.beginComputePass({
        label: "GPUComputePassEncoder7"
    });
    GPUQueue2.submit([GPUCommandBuffer3]);
    const string50 = await navigator.gpu.getPreferredCanvasFormat();
    const string51 = GPUComputePipeline3.label
    const GPUQuerySet5 = GPUDevice0.createQuerySet({
        count: 2414,
        label: "GPUQuerySet5",
        type: "occlusion"
    });
    const string52 = GPUCommandEncoder4.label
    GPURenderPassEncoder8.setVertexBuffer(0, GPUBuffer1);
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder4.setPipeline(GPUComputePipeline4);
    GPUComputePassEncoder6.end();
    const GPUBuffer15 = GPUDevice0.createBuffer({
        label: "GPUBuffer15",
        mappedAtCreation: false,
        size: 114367436,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.UNIFORM | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.INDIRECT | GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX
    });
    GPUQueue3.writeBuffer(GPUBuffer15, 38290832, typedArray11);
    const string53 = GPUTextureView10.label
    const GPUTexture15 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r16uint",
        label: "GPUTexture15",
        size: {
            width: 944,
            height: 774,
            depthOrArrayLayers: 59
        },
        mipLevelCount: 4,
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
        viewFormats: ["r16uint"]
    });
    const GPURenderPipeline11 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "reverse-subtract",
                        dstFactor: "src-alpha",
                        srcFactor: "one-minus-dst-alpha"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "r8unorm",
                writeMask: GPUColorWrite.RED | GPUColorWrite.ALL | GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline11",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "point-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    const string54 = GPUDevice0.label
    const string55 = await navigator.gpu.getPreferredCanvasFormat();
    GPUComputePassEncoder7.end();
    const string56 = GPURenderPassEncoder7.label
    const string57 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUAdapter6 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPURenderPipeline12 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "reverse-subtract",
                        dstFactor: "src-alpha",
                        srcFactor: "one-minus-src"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "r8unorm",
                writeMask: GPUColorWrite.GREEN | GPUColorWrite.ALPHA | GPUColorWrite.ALL | GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline12",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "back",
            frontFace: "ccw",
            topology: "triangle-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPURenderPassEncoder8.setPipeline(GPURenderPipeline12);
    GPUComputePassEncoder4.end();
    const GPUComputePassEncoder8 = GPUCommandEncoder10.beginComputePass({
        label: "GPUComputePassEncoder8"
    });
    GPUComputePassEncoder8.setPipeline(GPUComputePipeline5);
    const string58 = GPUQuerySet5.count
    const GPUAdapterInfo6 = GPUAdapter1.info
    const string59 = GPUComputePassEncoder8.label
    const string60 = GPUCommandEncoder4.label
    const GPUTexture16 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgb10a2unorm",
        label: "GPUTexture16",
        size: {
            width: 2461,
            height: 2895,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
        viewFormats: ["rgb10a2unorm"]
    });
    const GPUTextureView15 = GPUTexture16.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgb10a2unorm",
        label: "GPUTextureView15"
    });
    const GPURenderPassEncoder10 = GPUCommandEncoder7.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.3445376645113258,
                g: 0.6066939735431232,
                b: 1.0052210402573305,
                a: 0.20570609154799535
            },
            loadOp: "clear",
            storeOp: "discard",
            view: GPUTextureView15
        }],
        label: "GPURenderPassEncoder10",
        maxDrawCount: 1095653753,
        occlusionQuerySet: GPUQuerySet0
    });
    GPURenderPassEncoder7.setVertexBuffer(0, GPUBuffer1);
    const GPUTextureView16 = GPUTexture3.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm",
        label: "GPUTextureView16"
    });
    GPURenderPassEncoder7.draw(2);
    const GPUTexture17 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba8unorm",
        label: "GPUTexture17",
        size: {
            width: 720,
            height: 114,
            depthOrArrayLayers: 59
        },
        mipLevelCount: 6,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
        viewFormats: ["rgba8unorm-srgb"]
    });
    const GPUTextureView17 = GPUTexture17.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 1,
        format: "rgba8unorm-srgb",
        label: "GPUTextureView17"
    });
    const GPURenderPassEncoder11 = GPUCommandEncoder9.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.3622664879097053,
                g: 0.8001831446809273,
                b: 1.417720252784105,
                a: 0.21893701933984921
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView17,
            depthSlice: 13
        }],
        label: "GPURenderPassEncoder11",
        maxDrawCount: 1833382839,
        occlusionQuerySet: GPUQuerySet1
    });
    const string61 = GPURenderPipeline12.label
    const string62 = GPURenderPassEncoder8.label
    const GPUQueue5 = GPUDevice0.queue
    const string63 = GPUComputePipeline3.label
    GPUComputePassEncoder8.end();
    const boolean8 = GPUAdapter0.isFallbackAdapter
    const GPUSupportedFeatures17 = GPUDevice0.features
    const GPUComputePassEncoder9 = GPUCommandEncoder10.beginComputePass({
        label: "GPUComputePassEncoder9"
    });
    const string64 = GPUComputePassEncoder9.label
    const string65 = GPUDevice0.label
    const string66 = GPUQuerySet0.type
    GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup1);
    const GPUQuerySet6 = GPUDevice0.createQuerySet({
        count: 2109,
        label: "GPUQuerySet6",
        type: "occlusion"
    });
    const GPUBuffer16 = GPUDevice0.createBuffer({
        label: "GPUBuffer16",
        mappedAtCreation: true,
        size: 200101016,
        usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST
    });
    GPUComputePassEncoder9.end();
    const boolean9 = GPUAdapter2.isFallbackAdapter
    const GPURenderPipeline13 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "reverse-subtract",
                        dstFactor: "zero",
                        srcFactor: "one-minus-src-alpha"
                    },
                    color: {
                        operation: "min",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "r16float",
                writeMask: GPUColorWrite.BLUE | GPUColorWrite.RED | GPUColorWrite.ALPHA | GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline13",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "ccw",
            topology: "point-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule4
        }
    });
    GPUQueue3.writeBuffer(GPUBuffer13, 16382656, typedArray12);
    const GPUSupportedFeatures18 = GPUAdapter5.features
    const GPUQueue6 = GPUDevice0.queue
    const GPUSupportedLimits9 = GPUDevice0.limits
    const boolean10 = GPUAdapter6.isFallbackAdapter
    const GPUComputePassEncoder10 = GPUCommandEncoder10.beginComputePass({
        label: "GPUComputePassEncoder10"
    });
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline0);
    const GPUQuerySet7 = GPUDevice0.createQuerySet({
        count: 2689,
        label: "GPUQuerySet7",
        type: "occlusion"
    });
    const GPUComputePipeline6 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline6",
        layout: "auto"
    });
    const GPUBindGroupLayout2 = GPUComputePipeline1.getBindGroupLayout(0);
    const string67 = GPURenderPipeline13.label
    const GPUBuffer17 = GPUDevice0.createBuffer({
        label: "GPUBuffer17",
        mappedAtCreation: true,
        size: 150511044,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT | GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDEX | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.UNIFORM
    });
    const string68 = GPURenderPassEncoder10.label
    const GPUComputePipeline7 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline7",
        layout: "auto"
    });
    const GPUQueue7 = GPUDevice0.queue
    const string69 = GPUQuerySet1.count
    const GPUSupportedLimits10 = GPUAdapter4.limits
    const GPUBuffer18 = GPUDevice0.createBuffer({
        label: "GPUBuffer18",
        mappedAtCreation: true,
        size: 94164756,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_SRC | GPUBufferUsage.STORAGE
    });
    GPURenderPassEncoder7.end();
    const GPUComputePassEncoder11 = GPUCommandEncoder6.beginComputePass({
        label: "GPUComputePassEncoder11"
    });
    GPUQueue1.writeBuffer(GPUBuffer0, 0, typedArray13);
    const GPUBindGroup8 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline7.bindGroup",
        layout: GPUComputePipeline7.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUCommandEncoder11 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder11"
    });
    GPURenderPassEncoder10.setVertexBuffer(0, GPUBuffer13);
    const string70 = GPUCommandEncoder10.label
    GPUQueue2.submit([GPUCommandBuffer1]);
    GPUQueue5.submit([GPUCommandBuffer2]);
    const string71 = GPUQuerySet5.label
    const string72 = GPUQuerySet7.count
    GPUComputePassEncoder11.end();
    const string73 = GPURenderPipeline12.label
    const GPUShaderModule5 = GPUDevice0.createShaderModule({
        label: "fragment",
        code: shader5
    });
    GPURenderPassEncoder8.end();
    const GPUCommandBuffer5 = GPUCommandEncoder8.finish();
    GPUQueue3.submit([GPUCommandBuffer5]);
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder10.end();
    const GPUSupportedLimits11 = GPUAdapter5.limits
    const GPUSupportedLimits12 = GPUDevice0.limits
    const GPUShaderModule6 = GPUDevice0.createShaderModule({
        label: "fragment",
        code: shader6
    });
    GPURenderPassEncoder9.setPipeline(GPURenderPipeline6);
    const GPUComputePassEncoder12 = GPUCommandEncoder6.beginComputePass({
        label: "GPUComputePassEncoder12"
    });
    const string74 = GPUComputePassEncoder12.label
    const string75 = GPUQuerySet5.count
    const GPUSupportedLimits13 = GPUAdapter2.limits
    const string76 = GPUTextureView9.label
    const GPUQuerySet8 = GPUDevice0.createQuerySet({
        count: 1362,
        label: "GPUQuerySet8",
        type: "occlusion"
    });
    const string77 = GPUQuerySet1.label
    const GPUShaderModule7 = GPUDevice0.createShaderModule({
        label: "compute",
        code: shader7
    });
    const GPURenderPipeline14 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "subtract",
                        dstFactor: "src-alpha-saturated",
                        srcFactor: "one-minus-dst"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rgb10a2unorm",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.ALL | GPUColorWrite.RED | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline14",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "none",
            frontFace: "cw",
            topology: "triangle-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPURenderPassEncoder10.setPipeline(GPURenderPipeline14);
    const string78 = GPURenderPipeline7.label
    const GPUTexture18 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "bgra8unorm",
        label: "GPUTexture18",
        size: {
            width: 3956,
            height: 2750,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC | GPUTextureUsage.COPY_DST,
        viewFormats: ["bgra8unorm"]
    });
    const string79 = GPUComputePassEncoder12.label
    GPURenderPassEncoder9.draw(5);
    const GPUQuerySet9 = GPUDevice0.createQuerySet({
        count: 3553,
        label: "GPUQuerySet9",
        type: "occlusion"
    });
    const GPUSupportedFeatures19 = GPUDevice0.features
    const GPURenderPipeline15 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "min",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "reverse-subtract",
                        dstFactor: "src-alpha-saturated",
                        srcFactor: "one-minus-src"
                    }
                },
                format: "rg16float",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.BLUE | GPUColorWrite.GREEN | GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline15",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "cw",
            topology: "point-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule4
        }
    });
    const GPUTexture19 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba32sint",
        label: "GPUTexture19",
        size: {
            width: 825,
            height: 614,
            depthOrArrayLayers: 18
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.STORAGE_BINDING,
        viewFormats: ["rgba32sint"]
    });
    const string80 = GPUQuerySet9.label
    const GPUCommandEncoder12 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder12"
    });
    const GPUTextureView18 = GPUTexture16.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgb10a2unorm",
        label: "GPUTextureView18"
    });
    const GPUBuffer19 = GPUDevice0.createBuffer({
        label: "GPUBuffer19",
        mappedAtCreation: false,
        size: 42682772,
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.STORAGE | GPUBufferUsage.VERTEX | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT
    });
    const GPUQuerySet10 = GPUDevice0.createQuerySet({
        count: 1144,
        label: "GPUQuerySet10",
        type: "occlusion"
    });
    const string81 = GPURenderPipeline3.label
    const GPUTexture20 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba16float",
        label: "GPUTexture20",
        size: {
            width: 944,
            height: 819,
            depthOrArrayLayers: 36
        },
        mipLevelCount: 6,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.STORAGE_BINDING | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rgba16float"]
    });
    const GPUTextureView19 = GPUTexture20.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 2,
        format: "rgba16float",
        label: "GPUTextureView19"
    });
    const GPURenderPassEncoder12 = GPUCommandEncoder11.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.678941438648179,
                g: 1.9191493449204422,
                b: 1.8853677202617467,
                a: 0.6968380054374521
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView19,
            depthSlice: 2
        }],
        label: "GPURenderPassEncoder12",
        maxDrawCount: 3111259445,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPUTexture21 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "rgb10a2uint",
        label: "GPUTexture21",
        size: {
            width: 872,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgb10a2uint"]
    });
    GPURenderPassEncoder11.end();
    const GPUCommandBuffer6 = GPUCommandEncoder9.finish();
    GPUQueue5.submit([GPUCommandBuffer6]);
    const GPUSupportedFeatures20 = GPUDevice0.features
    const GPUAdapter7 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    GPUComputePassEncoder12.setPipeline(GPUComputePipeline3);
    const GPUSupportedLimits14 = GPUDevice0.limits
    const string82 = GPURenderPassEncoder12.label
    GPUQueue1.writeBuffer(GPUBuffer0, 0, typedArray14);
    const GPUBindGroup9 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline6.bindGroup",
        layout: GPUComputePipeline6.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUSupportedFeatures21 = GPUAdapter7.features
    const string83 = GPUQuerySet9.type
    const string84 = GPURenderPassEncoder12.label
    GPURenderPassEncoder9.end();
    const GPUCommandBuffer7 = GPUCommandEncoder4.finish();
    GPUQueue5.submit([GPUCommandBuffer7]);
    const GPUQueue8 = GPUDevice0.queue
    const GPUCommandEncoder13 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder13"
    });
    GPUComputePassEncoder12.setBindGroup(0, GPUBindGroup6);
    const string85 = GPUTextureView11.label
    const GPUSupportedLimits15 = GPUDevice0.limits
    const GPUTextureView20 = GPUTexture18.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "bgra8unorm",
        label: "GPUTextureView20"
    });
    const GPUQueue9 = GPUDevice0.queue
    const GPUBindGroupLayout3 = GPUComputePipeline6.getBindGroupLayout(0);
    const GPUQuerySet11 = GPUDevice0.createQuerySet({
        count: 128,
        label: "GPUQuerySet11",
        type: "occlusion"
    });
    const string86 = GPUQuerySet1.count
    const string87 = GPUTextureView9.label
    const GPUQuerySet12 = GPUDevice0.createQuerySet({
        count: 3678,
        label: "GPUQuerySet12",
        type: "occlusion"
    });
    const GPUSupportedFeatures22 = GPUDevice0.features
    const string88 = GPURenderPassEncoder10.label
    GPUComputePassEncoder12.end();
    const GPUShaderModule8 = GPUDevice0.createShaderModule({
        label: "compute",
        code: shader8
    });
    const string89 = GPUComputePipeline0.label
    const GPUSupportedLimits16 = GPUAdapter0.limits
    const GPUQueue10 = GPUDevice0.queue
    const GPUAdapterInfo7 = GPUAdapter3.info
    GPUQueue9.writeBuffer(GPUBuffer0, 0, typedArray15);
    const GPUBindGroup10 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const string90 = GPUComputePipeline7.label
    const GPUTextureView21 = GPUTexture20.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 4,
        baseMipLevel: 2,
        format: "rgba16float",
        label: "GPUTextureView21"
    });
    const GPUSupportedFeatures23 = GPUDevice0.features
    const boolean11 = GPUAdapter5.isFallbackAdapter
    const string91 = GPUComputePipeline4.label
    const GPUComputePipeline8 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule7
        },
        label: "GPUComputePipeline8",
        layout: "auto"
    });
    const string92 = GPUDevice0.label
    const GPUSupportedLimits17 = GPUAdapter4.limits
    const GPUComputePassEncoder13 = GPUCommandEncoder13.beginComputePass({
        label: "GPUComputePassEncoder13"
    });
    GPUComputePassEncoder13.end();
    const GPUComputePassEncoder14 = GPUCommandEncoder13.beginComputePass({
        label: "GPUComputePassEncoder14"
    });
    GPUComputePassEncoder14.setBindGroup(0, GPUBindGroup0);
    const GPUComputePipeline9 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule7
        },
        label: "GPUComputePipeline9",
        layout: "auto"
    });
    GPUComputePassEncoder14.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder14.setPipeline(GPUComputePipeline1);
    const GPUSupportedFeatures24 = GPUAdapter5.features
    const string93 = GPUCommandEncoder7.label
    GPURenderPassEncoder10.setVertexBuffer(0, GPUBuffer1);
    GPURenderPassEncoder12.end();
    GPUQueue1.writeBuffer(GPUBuffer13, 70538308, typedArray16);
    const GPUQuerySet13 = GPUDevice0.createQuerySet({
        count: 2139,
        label: "GPUQuerySet13",
        type: "occlusion"
    });
    const GPUCommandBuffer8 = GPUCommandEncoder11.finish();
    GPUComputePassEncoder14.end();
    const GPUQueue11 = GPUDevice0.queue
    const string94 = GPUComputePipeline3.label
    const boolean12 = GPUAdapter0.isFallbackAdapter
    const GPUComputePassEncoder15 = GPUCommandEncoder13.beginComputePass({
        label: "GPUComputePassEncoder15"
    });
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup10);
    const string95 = GPUDevice0.label
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup5);
    GPUComputePassEncoder15.setPipeline(GPUComputePipeline1);
    GPUQueue7.writeBuffer(GPUBuffer0, 0, typedArray17);
    const GPUBindGroup11 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline9.bindGroup",
        layout: GPUComputePipeline9.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUCommandBuffer9 = GPUCommandEncoder6.finish();
    const GPUSupportedFeatures25 = GPUAdapter7.features
    const string96 = GPUComputePassEncoder15.label
    const GPUAdapter8 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUQuerySet14 = GPUDevice0.createQuerySet({
        count: 3733,
        label: "GPUQuerySet14",
        type: "occlusion"
    });
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup2);
    const string97 = GPUQuerySet12.count
    const string98 = GPUDevice0.label
    const string99 = GPUComputePassEncoder15.label
    const GPURenderPipeline16 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "min",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rg16float",
                writeMask: GPUColorWrite.RED | GPUColorWrite.BLUE | GPUColorWrite.GREEN | GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline16",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "cw",
            topology: "line-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPUQueue0.writeBuffer(GPUBuffer0, 8, typedArray18);
    const string100 = GPUQueue4.label
    const GPUSupportedFeatures26 = GPUDevice0.features
    const GPUSupportedFeatures27 = GPUAdapter1.features
    GPURenderPassEncoder10.end();
    const boolean13 = GPUAdapter6.isFallbackAdapter
    const boolean14 = GPUAdapter5.isFallbackAdapter
    const GPUTexture22 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture22",
        size: {
            width: 560,
            height: 156,
            depthOrArrayLayers: 42
        },
        mipLevelCount: 7,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        viewFormats: ["r16float"]
    });
    const GPUTextureView22 = GPUTexture22.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 6,
        format: "r16float",
        label: "GPUTextureView22"
    });
    const GPURenderPassEncoder13 = GPUCommandEncoder12.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.016102870988425666,
                g: 1.3023397127673093,
                b: 0.0356945428339126,
                a: 0.03693406414628986
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView22,
            depthSlice: 0
        }],
        label: "GPURenderPassEncoder13",
        maxDrawCount: 894381962,
        occlusionQuerySet: GPUQuerySet11
    });
    const string101 = GPURenderPassEncoder13.label
    const GPUCommandBuffer10 = GPUCommandEncoder10.finish();
    const GPUQueue12 = GPUDevice0.queue
    const GPUAdapter9 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const string102 = GPUQuerySet0.label
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup2);
    const GPUComputePipeline10 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline10",
        layout: "auto"
    });
    GPUQueue2.writeBuffer(GPUBuffer0, 0, typedArray19);
    const GPUBindGroup12 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline2.bindGroup",
        layout: GPUComputePipeline2.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    GPUQueue4.submit([GPUCommandBuffer10]);
    GPURenderPassEncoder13.setVertexBuffer(0, GPUBuffer19);
    const string103 = GPUQuerySet2.count
    const GPUSupportedLimits18 = GPUAdapter8.limits
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup2);
    const GPUSupportedFeatures28 = GPUDevice0.features
    const GPUAdapter10 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUBindGroupLayout4 = GPUComputePipeline6.getBindGroupLayout(0);
    const string104 = GPURenderPassEncoder13.label
    const GPUTexture23 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgb10a2unorm",
        label: "GPUTexture23",
        size: {
            width: 447,
            height: 768,
            depthOrArrayLayers: 38
        },
        mipLevelCount: 10,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        viewFormats: ["rgb10a2unorm"]
    });
    const GPUTextureView23 = GPUTexture23.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 1,
        format: "rgb10a2unorm",
        label: "GPUTextureView23"
    });
    const GPURenderPassEncoder14 = GPUCommandEncoder7.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.4198931592315291,
                g: 0.3115810313439602,
                b: 0.4387289579348761,
                a: 0.9594463977090306
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView23,
            depthSlice: 7
        }],
        label: "GPURenderPassEncoder14",
        maxDrawCount: 569857768,
        occlusionQuerySet: GPUQuerySet9
    });
    const GPUAdapter11 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUSupportedLimits19 = GPUDevice0.limits
    const string105 = GPUQuerySet11.label
    GPURenderPassEncoder14.setPipeline(GPURenderPipeline1);
    const string106 = GPUQueue7.label
    const GPUQuerySet15 = GPUDevice0.createQuerySet({
        count: 3562,
        label: "GPUQuerySet15",
        type: "occlusion"
    });
    const GPUCommandEncoder14 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder14"
    });
    const string107 = GPUQuerySet9.label
    const GPUAdapter12 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUTexture24 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "bgra8unorm-srgb",
        label: "GPUTexture24",
        size: {
            width: 667,
            height: 942,
            depthOrArrayLayers: 15
        },
        mipLevelCount: 4,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
        viewFormats: ["bgra8unorm-srgb"]
    });
    const GPUTextureView24 = GPUTexture24.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 3,
        format: "bgra8unorm-srgb",
        label: "GPUTextureView24"
    });
    const GPURenderPassEncoder15 = GPUCommandEncoder14.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.1228256151084623,
                g: 1.7399810839563727,
                b: 1.0910383213571397,
                a: 1.5089223851126035
            },
            loadOp: "clear",
            storeOp: "discard",
            view: GPUTextureView24,
            depthSlice: 0
        }],
        label: "GPURenderPassEncoder15",
        maxDrawCount: 4163790453,
        occlusionQuerySet: GPUQuerySet5
    });
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup2);
    GPURenderPassEncoder15.end();
    const string108 = GPUDevice0.label
    const GPURenderPipeline17 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule5,
            targets: [{
                blend: {
                    alpha: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "src-alpha-saturated",
                        srcFactor: "src-alpha-saturated"
                    }
                },
                format: "r16float",
                writeMask: GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline17",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "none",
            frontFace: "ccw",
            topology: "triangle-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    GPUQueue12.writeBuffer(GPUBuffer0, 0, typedArray20);
    const GPUBindGroup13 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline3.bindGroup",
        layout: GPUComputePipeline3.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const string109 = GPUQuerySet11.count
    const GPURenderPipeline18 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule5,
            targets: [{
                blend: {
                    alpha: {
                        operation: "subtract",
                        dstFactor: "src",
                        srcFactor: "src-alpha"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rgba8unorm",
                writeMask: GPUColorWrite.RED | GPUColorWrite.BLUE | GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline18",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "front",
            frontFace: "cw",
            topology: "triangle-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule4
        }
    });
    GPUQueue7.writeBuffer(GPUBuffer0, 0, typedArray21);
    const GPUBindGroup14 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline6.bindGroup",
        layout: GPUComputePipeline6.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    const GPUAdapter13 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const boolean15 = GPUAdapter5.isFallbackAdapter
    const GPUBuffer20 = GPUDevice0.createBuffer({
        label: "GPUBuffer20",
        mappedAtCreation: true,
        size: 111548780,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM | GPUBufferUsage.VERTEX | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.INDEX | GPUBufferUsage.STORAGE
    });
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder15.setPipeline(GPUComputePipeline4);
    const string110 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUAdapter14 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const string111 = GPUComputePassEncoder15.label
    const GPUTexture25 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rg16float",
        label: "GPUTexture25",
        size: {
            width: 232,
            height: 709,
            depthOrArrayLayers: 48
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rg16float"]
    });
    const GPUTextureView25 = GPUTexture25.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rg16float",
        label: "GPUTextureView25"
    });
    const GPURenderPassEncoder16 = GPUCommandEncoder14.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.1899217945145772,
                g: 0.6801392624722047,
                b: 0.6054956090049384,
                a: 1.0931412442801598
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView25,
            depthSlice: 25
        }],
        label: "GPURenderPassEncoder16",
        maxDrawCount: 1151964492,
        occlusionQuerySet: GPUQuerySet6
    });
    const GPURenderPipeline19 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule6,
            targets: [{
                blend: {
                    alpha: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "src-alpha",
                        srcFactor: "dst-alpha"
                    }
                },
                format: "rg8unorm",
                writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA | GPUColorWrite.BLUE | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline19",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "front",
            frontFace: "ccw",
            topology: "triangle-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule3
        }
    });
    const GPUQueue13 = GPUDevice0.queue
    GPUQueue9.writeBuffer(GPUBuffer0, 0, typedArray22);
    const GPUBindGroup15 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline4.bindGroup",
        layout: GPUComputePipeline4.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer0
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer1
            }
        }]
    });
    GPUComputePassEncoder15.setBindGroup(0, GPUBindGroup15);
    const string112 = GPUTextureView6.label
    GPUComputePassEncoder15.end();
    const string113 = GPUQuerySet10.count
    const string114 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUSupportedFeatures29 = GPUAdapter9.features
    const string115 = GPUCommandEncoder14.label
    const GPUQuerySet16 = GPUDevice0.createQuerySet({
        count: 550,
        label: "GPUQuerySet16",
        type: "occlusion"
    });
    const string116 = GPURenderPipeline18.label
    const GPUShaderModule9 = GPUDevice0.createShaderModule({
        label: "compute",
        code: shader9
    });
    const GPUTexture26 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r32sint",
        label: "GPUTexture26",
        size: {
            width: 874,
            height: 457,
            depthOrArrayLayers: 20
        },
        mipLevelCount: 8,
        usage: GPUTextureUsage.COPY_DST,
        viewFormats: ["r32sint"]
    });
    const GPUSupportedFeatures30 = GPUDevice0.features
    const GPUQuerySet17 = GPUDevice0.createQuerySet({
        count: 1022,
        label: "GPUQuerySet17",
        type: "occlusion"
    });
    const string117 = GPUDevice0.label
    const GPUComputePassEncoder16 = GPUCommandEncoder13.beginComputePass({
        label: "GPUComputePassEncoder16"
    });
    GPUComputePassEncoder16.end();
    const GPUSupportedLimits20 = GPUDevice0.limits
    const GPUSupportedLimits21 = GPUDevice0.limits
    const GPUTexture27 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "rg16sint",
        label: "GPUTexture27",
        size: {
            width: 3362,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_DST,
        viewFormats: ["rg16sint"]
    });
    const GPUQuerySet18 = GPUDevice0.createQuerySet({
        count: 1216,
        label: "GPUQuerySet18",
        type: "occlusion"
    });
    const string118 = GPUCommandEncoder14.label
    const GPUComputePassEncoder17 = GPUCommandEncoder13.beginComputePass({
        label: "GPUComputePassEncoder17"
    });
    GPUComputePassEncoder17.setPipeline(GPUComputePipeline8);
    const GPUAdapter15 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const GPUQueue14 = GPUDevice0.queue
    const string119 = GPURenderPassEncoder14.label
    GPURenderPassEncoder14.end();
    const GPUSupportedLimits22 = GPUAdapter6.limits
    const string120 = GPUComputePipeline8.label
    const boolean16 = GPUAdapter0.isFallbackAdapter
    const GPUTexture28 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rg16uint",
        label: "GPUTexture28",
        size: {
            width: 339,
            height: 44,
            depthOrArrayLayers: 31
        },
        mipLevelCount: 2,
        usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rg16uint"]
    });
    const GPUSupportedLimits23 = GPUAdapter0.limits
    const GPUQuerySet19 = GPUDevice0.createQuerySet({
        count: 3076,
        label: "GPUQuerySet19",
        type: "occlusion"
    });
    const GPUTexture29 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture29",
        size: {
            width: 818,
            height: 909,
            depthOrArrayLayers: 20
        },
        mipLevelCount: 9,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.COPY_DST,
        viewFormats: ["r16float"]
    });
    const GPUTextureView26 = GPUTexture29.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 6,
        format: "r16float",
        label: "GPUTextureView26"
    });
    const GPURenderPassEncoder17 = GPUCommandEncoder7.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.5918111103394414,
                g: 0.7645908630040181,
                b: 1.8529655191689829,
                a: 1.4607805939676914
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView26,
            depthSlice: 0
        }],
        label: "GPURenderPassEncoder17",
        maxDrawCount: 492448533,
        occlusionQuerySet: GPUQuerySet3
    });
    const GPUShaderModule10 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader10
    });
    GPUQueue14.submit([GPUCommandBuffer8]);
    GPUComputePassEncoder17.setPipeline(GPUComputePipeline1);
    GPUComputePassEncoder17.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder17.dispatchWorkgroups(237, 222, 33);
    const GPUBuffer21 = GPUDevice0.createBuffer({
        label: "GPUBuffer21",
        mappedAtCreation: true,
        size: 68272020,
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE | GPUBufferUsage.UNIFORM
    });
    const string121 = GPUDevice0.label
    GPUQueue0.writeBuffer(GPUBuffer13, 87918992, typedArray23);
    const GPUCommandEncoder15 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder15"
    });
    const GPUComputePassEncoder18 = GPUCommandEncoder15.beginComputePass({
        label: "GPUComputePassEncoder18"
    });
    GPUComputePassEncoder18.setPipeline(GPUComputePipeline2);
    const GPUQueue15 = GPUDevice0.queue
    GPURenderPassEncoder13.setVertexBuffer(0, GPUBuffer13);
    const string122 = GPUQueue15.label
    const string123 = GPUCommandEncoder12.label
    const string124 = GPUCommandEncoder15.label

}
main().catch(console.error);