const { create, globals } = require('D:/final_proj/dawn/out/Debug/Debug/dawn.node');
Object.assign(globalThis, globals);
let navigator = { gpu: create([]), };
const fs = require('node:fs');if (!navigator.gpu) {
	throw new Error("WebGPU not supported on this browser");
}

function loadShader(file) {
	try {
		const data = fs.readFileSync(file, "utf8");
		return data;
	} catch (err) {
		console.error("Failed to load shader:", err);
	}
}
// Seed: -7703694600707683688
const shader19 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const shader18 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const shader17 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const typedArray31 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray30 = new Int8Array([-8804, 9201, -17, 8734]);
const shader16 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const shader15 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const shader14 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const typedArray29 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray28 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader13 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const typedArray27 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray26 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray25 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray24 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray23 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray22 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader12 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const typedArray21 = new Uint8Array([7790, 6979, -7139, 5088]);
const shader11 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const typedArray20 = new Uint8Array([3340, -4419, -1840, -368]);
const shader10 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const typedArray19 = new Int8Array([
	9651, 9136, -1432, -7181, -8982, -6239, 8919, 734, -9183, 5549, 2947, 8257,
	-9363, 5884, 8686, -8410,
]);
const typedArray18 = new Int8Array([
	-7909, -605, -8134, -4581, -5152, 7903, -5381, 6955, -3725, -4567, 8800, 116,
]);
const typedArray17 = new Float32Array([-9906]);
const typedArray16 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader9 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const typedArray15 = new Float32Array([7769]);
const typedArray14 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray13 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray12 = new Uint8Array([
	5025, 9631, -8939, -2009, -296, 9737, 5582, 3120, 4253, -1325, -6588, 1030,
]);
const typedArray11 = new Uint8Array([-2966, 1630, 81, -7112]);
const typedArray10 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray9 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader8 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl"
);
const typedArray8 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray7 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray6 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader7 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const typedArray5 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray4 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader6 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const shader5 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const shader4 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);
const typedArray3 = new Float32Array([9174, -1690, 5817]);
const typedArray2 = new Int8Array([7468, 737, 4061, -162]);
const shader3 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl"
);
const shader2 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl"
);
const shader1 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl"
);
const typedArray1 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const typedArray0 = new Uint8Array([
	17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185,
	214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158,
]);
const shader0 = loadShader(
	"D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl"
);

async function main() {
	const string0 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUAdapter0 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	const GPUDevice0 = await GPUAdapter0.requestDevice();
	const GPUCommandEncoder0 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder0",
	});
	const GPUComputePassEncoder0 = GPUCommandEncoder0.beginComputePass({
		label: "GPUComputePassEncoder0",
	});
	const string1 = GPUComputePassEncoder0.label;
	const GPUShaderModule0 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader0,
	});
	const GPUComputePipeline0 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule0,
		},
		label: "GPUComputePipeline0",
		layout: "auto",
	});
	const GPUBuffer0 = GPUDevice0.createBuffer({
		label: "GPUBuffer0",
		mappedAtCreation: false,
		size: 32,
		usage:
			GPUBufferUsage.UNIFORM |
			GPUBufferUsage.COPY_DST |
			GPUBufferUsage.INDIRECT |
			GPUBufferUsage.QUERY_RESOLVE,
	});
	const GPUBuffer1 = GPUDevice0.createBuffer({
		label: "GPUBuffer1",
		mappedAtCreation: false,
		size: 32,
		usage:
			GPUBufferUsage.STORAGE |
			GPUBufferUsage.COPY_SRC |
			GPUBufferUsage.INDEX |
			GPUBufferUsage.COPY_DST |
			GPUBufferUsage.INDIRECT |
			GPUBufferUsage.QUERY_RESOLVE,
	});
	const GPUQueue0 = GPUDevice0.queue;
	GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray0);
	const GPUBindGroup0 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
	const WGSLLanguageFeatures0 = navigator.gpu.wgslLanguageFeatures;
	const GPUQuerySet0 = GPUDevice0.createQuerySet({
		count: 1814,
		label: "GPUQuerySet0",
		type: "occlusion",
	});
	const string2 = GPUQuerySet0.type;
	const string3 = GPUQuerySet0.count;
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
	GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
	GPUComputePassEncoder0.dispatchWorkgroups(132, 167, 29);
	const string4 = GPUQuerySet0.count;
	const GPUAdapter1 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const string5 = GPUDevice0.label;
	const WGSLLanguageFeatures1 = navigator.gpu.wgslLanguageFeatures;
	const GPUCommandEncoder1 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder1",
	});
	const GPUComputePassEncoder1 = GPUCommandEncoder1.beginComputePass({
		label: "GPUComputePassEncoder1",
	});
	const GPUSupportedFeatures0 = GPUAdapter0.features;
	GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray1);
	const GPUBindGroup1 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUCommandEncoder2 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder2",
	});
	const GPUTexture0 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 4,
		format: "rgba16float",
		label: "GPUTexture0",
		size: {
			width: 3399,
			height: 379,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
		viewFormats: ["rgba16float"],
	});
	const GPUTextureView0 = GPUTexture0.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "rgba16float",
		label: "GPUTextureView0",
	});
	const GPURenderPassEncoder0 = GPUCommandEncoder2.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.5598139771060318,
					g: 0.15683603633237997,
					b: 0.4587460206194902,
					a: 1.206627242582615,
				},
				loadOp: "clear",
				storeOp: "store",
				view: GPUTextureView0,
			},
		],
		label: "GPURenderPassEncoder0",
		maxDrawCount: 2141166701,
		occlusionQuerySet: GPUQuerySet0,
	});
	const GPUBuffer2 = GPUDevice0.createBuffer({
		label: "GPUBuffer2",
		mappedAtCreation: false,
		size: 175869596,
		usage:
			GPUBufferUsage.VERTEX |
			GPUBufferUsage.QUERY_RESOLVE |
			GPUBufferUsage.STORAGE |
			GPUBufferUsage.INDIRECT |
			GPUBufferUsage.UNIFORM |
			GPUBufferUsage.COPY_SRC,
	});
	GPURenderPassEncoder0.setVertexBuffer(0, GPUBuffer2);
	const GPUQueue1 = GPUDevice0.queue;
	const string6 = GPUQuerySet0.count;
	const GPUShaderModule1 = GPUDevice0.createShaderModule({
		label: "fragment",
		code: shader1,
	});
	const GPUShaderModule2 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader2,
	});
	const GPURenderPipeline0 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "max",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "reverse-subtract",
							dstFactor: "zero",
							srcFactor: "src-alpha",
						},
					},
					format: "bgra8unorm-srgb",
					writeMask: GPUColorWrite.BLUE | GPUColorWrite.GREEN,
				},
			],
		},
		label: "GPURenderPipeline0",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "back",
			frontFace: "cw",
			topology: "line-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	const GPUSupportedFeatures1 = GPUDevice0.features;
	const string7 = GPUQuerySet0.label;
	const string8 = GPURenderPipeline0.label;
	const string9 = GPUDevice0.label;
	const GPURenderPipeline1 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "subtract",
							dstFactor: "one-minus-dst-alpha",
							srcFactor: "dst",
						},
						color: {
							operation: "add",
							dstFactor: "constant",
							srcFactor: "dst",
						},
					},
					format: "rgba16float",
					writeMask:
						GPUColorWrite.ALPHA | GPUColorWrite.GREEN | GPUColorWrite.BLUE,
				},
			],
		},
		label: "GPURenderPipeline1",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "back",
			frontFace: "cw",
			topology: "point-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	const GPUCommandEncoder3 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder3",
	});
	const GPUComputePassEncoder2 = GPUCommandEncoder3.beginComputePass({
		label: "GPUComputePassEncoder2",
	});
	const string10 = GPUDevice0.label;
	const GPUSupportedFeatures2 = GPUDevice0.features;
	const GPUSupportedFeatures3 = GPUDevice0.features;
	const string11 = GPUCommandEncoder3.label;
	const GPUBuffer3 = GPUDevice0.createBuffer({
		label: "GPUBuffer3",
		mappedAtCreation: false,
		size: 55911640,
		usage: GPUBufferUsage.MAP_WRITE | GPUBufferUsage.COPY_SRC,
	});
	const string12 = GPUQuerySet0.type;
	const GPUSupportedFeatures4 = GPUDevice0.features;
	const GPUQueue2 = GPUDevice0.queue;
	const string13 = GPUDevice0.label;
	const GPUShaderModule3 = GPUDevice0.createShaderModule({
		label: "fragment",
		code: shader3,
	});
	const string14 = GPUComputePassEncoder1.label;
	GPUComputePassEncoder2.end();
	const GPUAdapterInfo0 = GPUAdapter1.info;
	const GPUSupportedLimits0 = GPUDevice0.limits;
	GPUQueue0.writeBuffer(GPUBuffer1, 20, typedArray2);
	const string15 = GPUCommandEncoder3.label;
	const GPUAdapterInfo1 = GPUAdapter0.info;
	const GPUBindGroupLayout0 = GPUComputePipeline0.getBindGroupLayout(0);
	const GPUSupportedLimits1 = GPUDevice0.limits;
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
	const string16 = GPUComputePassEncoder0.label;
	const GPUComputePassEncoder3 = GPUCommandEncoder3.beginComputePass({
		label: "GPUComputePassEncoder3",
	});
	const string17 = GPUQuerySet0.type;
	const string18 = GPUQueue1.label;
	const boolean0 = GPUAdapter0.isFallbackAdapter;
	GPURenderPassEncoder0.end();
	const GPUCommandBuffer0 = GPUCommandEncoder2.finish();
	const GPUCommandEncoder4 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder4",
	});
	const GPUTexture1 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "rgba8unorm",
		label: "GPUTexture1",
		size: {
			width: 925,
			height: 817,
			depthOrArrayLayers: 33,
		},
		mipLevelCount: 8,
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
		viewFormats: ["rgba8unorm-srgb"],
	});
	const GPUTextureView1 = GPUTexture1.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 7,
		format: "rgba8unorm-srgb",
		label: "GPUTextureView1",
	});
	const GPURenderPassEncoder1 = GPUCommandEncoder4.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 0.29975985233761593,
					g: 0.3726124324900779,
					b: 0.0707099610741877,
					a: 0.3700381343624175,
				},
				loadOp: "clear",
				storeOp: "store",
				view: GPUTextureView1,
				depthSlice: 0,
			},
		],
		label: "GPURenderPassEncoder1",
		maxDrawCount: 3660835757,
		occlusionQuerySet: GPUQuerySet0,
	});
	const WGSLLanguageFeatures2 = navigator.gpu.wgslLanguageFeatures;
	const GPUCommandEncoder5 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder5",
	});
	const GPUComputePassEncoder4 = GPUCommandEncoder5.beginComputePass({
		label: "GPUComputePassEncoder4",
	});
	const GPUTexture2 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 1,
		format: "stencil8",
		label: "GPUTexture2",
		size: {
			width: 77,
			height: 509,
			depthOrArrayLayers: 49,
		},
		mipLevelCount: 4,
		usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
		viewFormats: ["stencil8"],
	});
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
	GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup1);
	GPUComputePassEncoder0.dispatchWorkgroups(126, 208, 43);
	const GPURenderPipeline2 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "max",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "reverse-subtract",
							dstFactor: "one-minus-src",
							srcFactor: "src-alpha",
						},
					},
					format: "bgra8unorm",
					writeMask: GPUColorWrite.BLUE | GPUColorWrite.ALPHA,
				},
			],
		},
		label: "GPURenderPipeline2",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "none",
			frontFace: "ccw",
			topology: "triangle-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	const string19 = GPUQueue1.label;
	GPUComputePassEncoder4.setPipeline(GPUComputePipeline0);
	const string20 = GPUComputePassEncoder0.label;
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup1);
	GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
	const GPURenderPipeline3 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "add",
							dstFactor: "src-alpha-saturated",
							srcFactor: "one-minus-src",
						},
						color: {
							operation: "add",
							dstFactor: "zero",
							srcFactor: "zero",
						},
					},
					format: "rgba8unorm-srgb",
					writeMask:
						GPUColorWrite.ALPHA | GPUColorWrite.RED | GPUColorWrite.BLUE,
				},
			],
		},
		label: "GPURenderPipeline3",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "none",
			frontFace: "ccw",
			topology: "line-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	GPURenderPassEncoder1.setPipeline(GPURenderPipeline3);
	GPURenderPassEncoder1.draw(8);
	const string21 = GPUDevice0.label;
	const GPUCommandEncoder6 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder6",
	});
	const GPUTexture3 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "rgba16float",
		label: "GPUTexture3",
		size: {
			width: 309,
			height: 398,
			depthOrArrayLayers: 3,
		},
		mipLevelCount: 2,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.COPY_DST |
			GPUTextureUsage.COPY_SRC |
			GPUTextureUsage.TEXTURE_BINDING,
		viewFormats: ["rgba16float"],
	});
	const GPUTextureView2 = GPUTexture3.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 1,
		format: "rgba16float",
		label: "GPUTextureView2",
	});
	const GPURenderPassEncoder2 = GPUCommandEncoder6.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.701269042571877,
					g: 0.5316466564777307,
					b: 0.1975013224779103,
					a: 0.4733036896671161,
				},
				loadOp: "load",
				storeOp: "store",
				view: GPUTextureView2,
				depthSlice: 0,
			},
		],
		label: "GPURenderPassEncoder2",
		maxDrawCount: 2323382052,
		occlusionQuerySet: GPUQuerySet0,
	});
	GPURenderPassEncoder2.setPipeline(GPURenderPipeline1);
	const GPUSupportedFeatures5 = GPUAdapter1.features;
	const string22 = GPUDevice0.label;
	const GPUAdapter2 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup1);
	const GPUSupportedLimits2 = GPUAdapter1.limits;
	GPUQueue0.submit([GPUCommandBuffer0]);
	const WGSLLanguageFeatures3 = navigator.gpu.wgslLanguageFeatures;
	const GPUTextureView3 = GPUTexture3.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 1,
		format: "rgba16float",
		label: "GPUTextureView3",
	});
	const GPUAdapterInfo2 = GPUAdapter1.info;
	const string23 = GPUQuerySet0.type;
	GPURenderPassEncoder1.setPipeline(GPURenderPipeline3);
	GPUComputePassEncoder3.setPipeline(GPUComputePipeline0);
	GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup0);
	GPUComputePassEncoder3.dispatchWorkgroups(158, 147, 26);
	GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup0);
	const string24 = GPUQuerySet0.label;
	const WGSLLanguageFeatures4 = navigator.gpu.wgslLanguageFeatures;
	const GPUQuerySet1 = GPUDevice0.createQuerySet({
		count: 386,
		label: "GPUQuerySet1",
		type: "occlusion",
	});
	GPUQueue0.writeBuffer(GPUBuffer1, 12, typedArray3);
	const string25 = GPUQuerySet1.count;
	const string26 = GPUQuerySet1.type;
	GPURenderPassEncoder1.end();
	const GPUCommandBuffer1 = GPUCommandEncoder4.finish();
	GPUQueue1.submit([GPUCommandBuffer1]);
	const GPUShaderModule4 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader4,
	});
	GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup1);
	const GPUBindGroupLayout1 = GPUComputePipeline0.getBindGroupLayout(0);
	const string27 = GPUCommandEncoder3.label;
	const GPUSupportedLimits3 = GPUAdapter2.limits;
	const string28 = GPUQueue2.label;
	const GPUSupportedLimits4 = GPUAdapter1.limits;
	const string29 = GPUComputePassEncoder3.label;
	const GPUSupportedLimits5 = GPUAdapter1.limits;
	const GPUComputePipeline1 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule4,
		},
		label: "GPUComputePipeline1",
		layout: "auto",
	});
	const GPUTexture4 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 1,
		format: "depth32float",
		label: "GPUTexture4",
		size: {
			width: 2946,
			height: 2434,
			depthOrArrayLayers: 18,
		},
		mipLevelCount: 9,
		usage:
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.COPY_SRC,
		viewFormats: ["depth32float"],
	});
	const GPUSupportedFeatures6 = GPUDevice0.features;
	const GPUCommandEncoder7 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder7",
	});
	const GPURenderPipeline4 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "reverse-subtract",
							dstFactor: "one-minus-constant",
							srcFactor: "one-minus-constant",
						},
						color: {
							operation: "add",
							dstFactor: "src-alpha-saturated",
							srcFactor: "dst",
						},
					},
					format: "rgba8unorm-srgb",
					writeMask: GPUColorWrite.BLUE,
				},
			],
		},
		label: "GPURenderPipeline4",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "none",
			frontFace: "ccw",
			topology: "line-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	const string30 = GPUQuerySet1.count;
	const GPUShaderModule5 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader5,
	});
	const GPUShaderModule6 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader6,
	});
	const string31 = GPURenderPassEncoder2.label;
	const string32 = GPUDevice0.label;
	const GPUSupportedLimits6 = GPUAdapter1.limits;
	GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup1);
	GPUComputePassEncoder4.setPipeline(GPUComputePipeline0);
	const string33 = GPUDevice0.label;
	const GPUTexture5 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 4,
		format: "r8unorm",
		label: "GPUTexture5",
		size: {
			width: 1808,
			height: 1076,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage: GPUTextureUsage.RENDER_ATTACHMENT,
		viewFormats: ["r8unorm"],
	});
	const GPUTextureView4 = GPUTexture5.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "r8unorm",
		label: "GPUTextureView4",
	});
	const GPURenderPassEncoder3 = GPUCommandEncoder7.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.5019733602698158,
					g: 0.5346038659179155,
					b: 1.5055788692955843,
					a: 0.2740181085271416,
				},
				loadOp: "clear",
				storeOp: "store",
				view: GPUTextureView4,
			},
		],
		label: "GPURenderPassEncoder3",
		maxDrawCount: 2240078143,
		occlusionQuerySet: GPUQuerySet1,
	});
	const GPUCommandEncoder8 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder8",
	});
	const GPUComputePassEncoder5 = GPUCommandEncoder8.beginComputePass({
		label: "GPUComputePassEncoder5",
	});
	const GPUAdapter3 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	const GPURenderPipeline5 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "max",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "subtract",
							dstFactor: "one-minus-dst",
							srcFactor: "src-alpha-saturated",
						},
					},
					format: "r8unorm",
					writeMask:
						GPUColorWrite.ALL | GPUColorWrite.ALPHA | GPUColorWrite.RED,
				},
			],
		},
		label: "GPURenderPipeline5",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "front",
			frontFace: "ccw",
			topology: "line-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	GPURenderPassEncoder3.setPipeline(GPURenderPipeline5);
	GPURenderPassEncoder2.setPipeline(GPURenderPipeline1);
	const string34 = GPURenderPassEncoder3.label;
	GPUQueue2.writeBuffer(GPUBuffer0, 0, typedArray4);
	const GPUBindGroup2 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray5);
	const GPUBindGroup3 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const string35 = GPUQueue1.label;
	const GPUQuerySet2 = GPUDevice0.createQuerySet({
		count: 3028,
		label: "GPUQuerySet2",
		type: "occlusion",
	});
	GPURenderPassEncoder3.setPipeline(GPURenderPipeline5);
	GPURenderPassEncoder3.draw(6);
	const string36 = GPURenderPassEncoder2.label;
	const GPUAdapterInfo3 = GPUAdapter2.info;
	const GPUSupportedFeatures7 = GPUDevice0.features;
	GPUComputePassEncoder1.setPipeline(GPUComputePipeline1);
	const GPUCommandEncoder9 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder9",
	});
	const GPUTexture6 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 4,
		format: "rg8unorm",
		label: "GPUTexture6",
		size: {
			width: 455,
			height: 3484,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.COPY_DST |
			GPUTextureUsage.COPY_SRC |
			GPUTextureUsage.TEXTURE_BINDING,
		viewFormats: ["rg8unorm"],
	});
	const GPUTextureView5 = GPUTexture6.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "rg8unorm",
		label: "GPUTextureView5",
	});
	const GPURenderPassEncoder4 = GPUCommandEncoder9.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.0319153206091538,
					g: 1.2253846331462035,
					b: 1.386987822166057,
					a: 1.181190240127972,
				},
				loadOp: "clear",
				storeOp: "discard",
				view: GPUTextureView5,
			},
		],
		label: "GPURenderPassEncoder4",
		maxDrawCount: 2952324164,
		occlusionQuerySet: GPUQuerySet2,
	});
	const string37 = GPUQuerySet1.count;
	GPURenderPassEncoder3.end();
	const GPUCommandBuffer2 = GPUCommandEncoder7.finish();
	const GPUSupportedLimits7 = GPUDevice0.limits;
	const GPURenderPipeline6 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "subtract",
							dstFactor: "zero",
							srcFactor: "src-alpha",
						},
						color: {
							operation: "max",
							dstFactor: "one",
							srcFactor: "one",
						},
					},
					format: "rgb10a2unorm",
					writeMask: GPUColorWrite.GREEN,
				},
			],
		},
		label: "GPURenderPipeline6",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "none",
			frontFace: "cw",
			topology: "line-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	const GPUSupportedLimits8 = GPUAdapter2.limits;
	const string38 = GPUQuerySet0.type;
	const string39 = GPUQuerySet1.count;
	const string40 = GPUComputePassEncoder3.label;
	const GPUAdapter4 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const GPUCommandEncoder10 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder10",
	});
	const GPUSupportedLimits9 = GPUDevice0.limits;
	const GPUAdapterInfo4 = GPUAdapter2.info;
	const string41 = GPUComputePassEncoder5.label;
	GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup2);
	GPUComputePassEncoder4.setPipeline(GPUComputePipeline0);
	GPURenderPassEncoder2.draw(2);
	const string42 = GPUQuerySet0.count;
	GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup3);
	GPUComputePassEncoder0.setPipeline(GPUComputePipeline1);
	const GPUShaderModule7 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader7,
	});
	const string43 = GPUQueue1.label;
	const string44 = GPUComputePassEncoder3.label;
	const GPUComputePipeline2 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule4,
		},
		label: "GPUComputePipeline2",
		layout: "auto",
	});
	const string45 = await navigator.gpu.getPreferredCanvasFormat();
	const string46 = GPUDevice0.label;
	GPUQueue2.submit([GPUCommandBuffer2]);
	GPUComputePassEncoder3.end();
	const GPUCommandBuffer3 = GPUCommandEncoder3.finish();
	const GPURenderPipeline7 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "reverse-subtract",
							dstFactor: "zero",
							srcFactor: "zero",
						},
						color: {
							operation: "add",
							dstFactor: "one-minus-src",
							srcFactor: "one-minus-dst",
						},
					},
					format: "rgba8unorm",
					writeMask:
						GPUColorWrite.BLUE |
						GPUColorWrite.ALL |
						GPUColorWrite.ALPHA |
						GPUColorWrite.RED,
				},
			],
		},
		label: "GPURenderPipeline7",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "none",
			frontFace: "cw",
			topology: "triangle-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule6,
		},
	});
	GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup1);
	GPUComputePassEncoder4.setPipeline(GPUComputePipeline1);
	GPURenderPassEncoder4.end();
	const GPUQuerySet3 = GPUDevice0.createQuerySet({
		count: 820,
		label: "GPUQuerySet3",
		type: "occlusion",
	});
	GPUComputePassEncoder1.setPipeline(GPUComputePipeline1);
	GPUQueue2.writeBuffer(GPUBuffer0, 0, typedArray6);
	const GPUBindGroup4 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline1.bindGroup",
		layout: GPUComputePipeline1.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder1.setBindGroup(0, GPUBindGroup4);
	GPUComputePassEncoder1.dispatchWorkgroups(253, 82, 37);
	const GPUSupportedLimits10 = GPUAdapter4.limits;
	const GPUTexture7 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "r32float",
		label: "GPUTexture7",
		size: {
			width: 734,
			height: 269,
			depthOrArrayLayers: 20,
		},
		mipLevelCount: 4,
		usage:
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST |
			GPUTextureUsage.RENDER_ATTACHMENT,
		viewFormats: ["r32float"],
	});
	const GPUSupportedLimits11 = GPUDevice0.limits;
	GPUComputePassEncoder1.setBindGroup(0, GPUBindGroup4);
	const boolean1 = GPUAdapter1.isFallbackAdapter;
	const GPUComputePassEncoder6 = GPUCommandEncoder10.beginComputePass({
		label: "GPUComputePassEncoder6",
	});
	const string47 = GPUQuerySet3.type;
	const GPUComputePipeline3 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule4,
		},
		label: "GPUComputePipeline3",
		layout: "auto",
	});
	const GPUQuerySet4 = GPUDevice0.createQuerySet({
		count: 3969,
		label: "GPUQuerySet4",
		type: "occlusion",
	});
	const string48 = GPUCommandEncoder8.label;
	const string49 = GPUTextureView1.label;
	GPURenderPassEncoder2.draw(9);
	const GPUQuerySet5 = GPUDevice0.createQuerySet({
		count: 1074,
		label: "GPUQuerySet5",
		type: "occlusion",
	});
	const GPUSupportedLimits12 = GPUDevice0.limits;
	const string50 = GPUQuerySet2.count;
	const GPUComputePassEncoder7 = GPUCommandEncoder9.beginComputePass({
		label: "GPUComputePassEncoder7",
	});
	const WGSLLanguageFeatures5 = navigator.gpu.wgslLanguageFeatures;
	const GPUSupportedLimits13 = GPUDevice0.limits;
	const string51 = GPUCommandEncoder5.label;
	const GPUBindGroupLayout2 = GPUComputePipeline2.getBindGroupLayout(0);
	GPURenderPassEncoder2.setVertexBuffer(0, GPUBuffer2);
	GPUComputePassEncoder0.end();
	GPUQueue2.writeBuffer(GPUBuffer0, 0, typedArray7);
	const GPUBindGroup5 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline3.bindGroup",
		layout: GPUComputePipeline3.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUSupportedFeatures8 = GPUDevice0.features;
	GPURenderPassEncoder2.end();
	const GPUTexture8 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "rg8unorm",
		label: "GPUTexture8",
		size: {
			width: 402,
			height: 556,
			depthOrArrayLayers: 5,
		},
		mipLevelCount: 10,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_SRC,
		viewFormats: ["rg8unorm"],
	});
	const GPUTextureView6 = GPUTexture8.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 9,
		format: "rg8unorm",
		label: "GPUTextureView6",
	});
	const GPURenderPassEncoder5 = GPUCommandEncoder6.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 0.8856275233894928,
					g: 0.48398142484301476,
					b: 1.492281265535722,
					a: 1.2163063053929157,
				},
				loadOp: "load",
				storeOp: "store",
				view: GPUTextureView6,
				depthSlice: 0,
			},
		],
		label: "GPURenderPassEncoder5",
		maxDrawCount: 272978701,
		occlusionQuerySet: GPUQuerySet4,
	});
	GPURenderPassEncoder5.setVertexBuffer(0, GPUBuffer2);
	const GPUTexture9 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 1,
		format: "r32sint",
		label: "GPUTexture9",
		size: {
			width: 208,
			height: 1907,
			depthOrArrayLayers: 46,
		},
		mipLevelCount: 8,
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
		viewFormats: ["r32sint"],
	});
	const GPUTexture10 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 1,
		format: "rgb10a2unorm",
		label: "GPUTexture10",
		size: {
			width: 4086,
			height: 725,
			depthOrArrayLayers: 50,
		},
		mipLevelCount: 12,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.COPY_SRC |
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST,
		viewFormats: ["rgb10a2unorm"],
	});
	const GPUTextureView7 = GPUTexture10.createView({
		aspect: "all",
		dimension: "2d-array",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 9,
		format: "rgb10a2unorm",
		label: "GPUTextureView7",
	});
	const GPURenderPassEncoder6 = GPUCommandEncoder0.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 0.13806699263804978,
					g: 1.2523227283600602,
					b: 1.8655588134978152,
					a: 1.798051918828749,
				},
				loadOp: "load",
				storeOp: "store",
				view: GPUTextureView7,
			},
		],
		label: "GPURenderPassEncoder6",
		maxDrawCount: 666599557,
		occlusionQuerySet: GPUQuerySet4,
	});
	GPUComputePassEncoder5.end();
	const GPUCommandBuffer4 = GPUCommandEncoder8.finish();
	const string52 = GPUTextureView4.label;
	const string53 = GPUQuerySet5.label;
	const string54 = GPUTextureView2.label;
	const string55 = GPUComputePipeline3.label;
	const GPUSupportedLimits14 = GPUDevice0.limits;
	const GPUSupportedFeatures9 = GPUDevice0.features;
	GPUComputePassEncoder7.setPipeline(GPUComputePipeline3);
	GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup5);
	GPUComputePassEncoder7.dispatchWorkgroups(98, 92, 54);
	const GPUSupportedLimits15 = GPUDevice0.limits;
	const GPURenderPipeline8 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "reverse-subtract",
							dstFactor: "src",
							srcFactor: "one-minus-src",
						},
					},
					format: "rg8unorm",
					writeMask:
						GPUColorWrite.RED | GPUColorWrite.ALPHA | GPUColorWrite.GREEN,
				},
			],
		},
		label: "GPURenderPipeline8",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "back",
			frontFace: "cw",
			topology: "triangle-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	GPURenderPassEncoder5.setPipeline(GPURenderPipeline8);
	GPURenderPassEncoder5.draw(1);
	const string56 = GPUQuerySet2.label;
	const GPURenderPipeline9 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "add",
							dstFactor: "one-minus-src-alpha",
							srcFactor: "one-minus-dst",
						},
					},
					format: "rgb10a2unorm",
					writeMask: GPUColorWrite.ALPHA,
				},
			],
		},
		label: "GPURenderPipeline9",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "back",
			frontFace: "ccw",
			topology: "line-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule5,
		},
	});
	GPURenderPassEncoder6.setPipeline(GPURenderPipeline9);
	GPURenderPassEncoder6.draw(5);
	const GPUQueue3 = GPUDevice0.queue;
	GPURenderPassEncoder5.setVertexBuffer(0, GPUBuffer2);
	GPUQueue3.writeBuffer(GPUBuffer0, 0, typedArray8);
	const GPUBindGroup6 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline2.bindGroup",
		layout: GPUComputePipeline2.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup5);
	GPUComputePassEncoder7.setPipeline(GPUComputePipeline2);
	const string57 = GPUQuerySet1.count;
	const string58 = GPURenderPipeline2.label;
	const string59 = GPUQuerySet5.type;
	GPUComputePassEncoder6.setPipeline(GPUComputePipeline2);
	GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup6);
	GPUComputePassEncoder7.setPipeline(GPUComputePipeline1);
	const string60 = GPUComputePassEncoder1.label;
	const GPUShaderModule8 = GPUDevice0.createShaderModule({
		label: "fragment",
		code: shader8,
	});
	const GPUSupportedFeatures10 = GPUAdapter0.features;
	const GPUSupportedFeatures11 = GPUDevice0.features;
	GPUComputePassEncoder7.end();
	const GPUCommandBuffer5 = GPUCommandEncoder9.finish();
	const string61 = GPUQuerySet1.label;
	const GPUSupportedLimits16 = GPUDevice0.limits;
	const GPUQuerySet6 = GPUDevice0.createQuerySet({
		count: 3076,
		label: "GPUQuerySet6",
		type: "occlusion",
	});
	const GPUAdapter5 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	GPUQueue1.submit([GPUCommandBuffer5]);
	const GPUBuffer4 = GPUDevice0.createBuffer({
		label: "GPUBuffer4",
		mappedAtCreation: true,
		size: 6919484,
		usage: GPUBufferUsage.MAP_READ,
	});
	GPUQueue1.writeBuffer(GPUBuffer0, 0, typedArray9);
	const GPUBindGroup7 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup4);
	GPUQueue2.submit([GPUCommandBuffer3]);
	const GPUAdapterInfo5 = GPUAdapter0.info;
	const GPUCommandEncoder11 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder11",
	});
	const GPUComputePassEncoder8 = GPUCommandEncoder11.beginComputePass({
		label: "GPUComputePassEncoder8",
	});
	GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray10);
	const GPUBindGroup8 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUSupportedLimits17 = GPUDevice0.limits;
	const GPUTextureView8 = GPUTexture1.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 6,
		baseMipLevel: 0,
		format: "rgba8unorm",
		label: "GPUTextureView8",
	});
	const string62 = GPUComputePipeline3.label;
	GPUComputePassEncoder1.setBindGroup(0, GPUBindGroup4);
	GPUComputePassEncoder1.setPipeline(GPUComputePipeline0);
	GPUComputePassEncoder1.setBindGroup(0, GPUBindGroup8);
	GPUComputePassEncoder1.dispatchWorkgroups(204, 138, 16);
	GPUQueue1.writeBuffer(GPUBuffer0, 28, typedArray11);
	const GPUQuerySet7 = GPUDevice0.createQuerySet({
		count: 966,
		label: "GPUQuerySet7",
		type: "occlusion",
	});
	const string63 = GPUComputePassEncoder6.label;
	const string64 = GPURenderPassEncoder6.label;
	const string65 = await navigator.gpu.getPreferredCanvasFormat();
	GPUQueue0.writeBuffer(GPUBuffer1, 8, typedArray12);
	const GPUSupportedFeatures12 = GPUDevice0.features;
	const GPUSupportedLimits18 = GPUDevice0.limits;
	const string66 = GPUDevice0.label;
	const string67 = GPURenderPassEncoder6.label;
	const string68 = GPUQuerySet7.count;
	const string69 = GPUDevice0.label;
	GPURenderPassEncoder5.setVertexBuffer(0, GPUBuffer2);
	GPUComputePassEncoder4.end();
	const GPUAdapter6 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	GPUQueue2.submit([GPUCommandBuffer4]);
	GPUQueue1.writeBuffer(GPUBuffer0, 0, typedArray13);
	const GPUBindGroup9 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline3.bindGroup",
		layout: GPUComputePipeline3.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPURenderPassEncoder5.setPipeline(GPURenderPipeline8);
	const GPUAdapter7 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const GPUQuerySet8 = GPUDevice0.createQuerySet({
		count: 3712,
		label: "GPUQuerySet8",
		type: "occlusion",
	});
	const string70 = GPUTextureView8.label;
	const GPURenderPipeline10 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "subtract",
							dstFactor: "src",
							srcFactor: "dst",
						},
						color: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
					},
					format: "rgba16float",
					writeMask: GPUColorWrite.ALPHA,
				},
			],
		},
		label: "GPURenderPipeline10",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "back",
			frontFace: "cw",
			topology: "triangle-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	const GPUTexture11 = GPUDevice0.createTexture({
		dimension: "1d",
		sampleCount: 1,
		format: "rg32float",
		label: "GPUTexture11",
		size: {
			width: 2039,
			height: 1,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage:
			GPUTextureUsage.COPY_SRC |
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_DST,
		viewFormats: ["rg32float"],
	});
	const string71 = GPUQuerySet2.type;
	const string72 = GPUQuerySet5.label;
	const GPUComputePassEncoder9 = GPUCommandEncoder5.beginComputePass({
		label: "GPUComputePassEncoder9",
	});
	const string73 = GPURenderPipeline4.label;
	GPURenderPassEncoder5.end();
	const GPUQueue4 = GPUDevice0.queue;
	const string74 = await navigator.gpu.getPreferredCanvasFormat();
	const string75 = GPURenderPassEncoder6.label;
	GPUComputePassEncoder6.end();
	const GPUSupportedFeatures13 = GPUAdapter6.features;
	GPUComputePassEncoder9.setPipeline(GPUComputePipeline2);
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup6);
	GPUComputePassEncoder9.dispatchWorkgroups(229, 235, 60);
	const GPUAdapterInfo6 = GPUAdapter7.info;
	const string76 = GPUQuerySet0.count;
	const GPUCommandBuffer6 = GPUCommandEncoder6.finish();
	const GPUSupportedFeatures14 = GPUDevice0.features;
	const GPUQueue5 = GPUDevice0.queue;
	const string77 = GPUQuerySet4.count;
	const GPUAdapter8 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const GPURenderPipeline11 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "add",
							dstFactor: "dst",
							srcFactor: "one",
						},
					},
					format: "r16float",
					writeMask:
						GPUColorWrite.GREEN | GPUColorWrite.BLUE | GPUColorWrite.ALL,
				},
			],
		},
		label: "GPURenderPipeline11",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "back",
			frontFace: "cw",
			topology: "point-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule7,
		},
	});
	const string78 = GPUComputePipeline1.label;
	const GPUComputePassEncoder10 = GPUCommandEncoder10.beginComputePass({
		label: "GPUComputePassEncoder10",
	});
	const GPUSupportedLimits19 = GPUAdapter5.limits;
	const GPUTextureView9 = GPUTexture11.createView({
		aspect: "all",
		dimension: "1d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "rg32float",
		label: "GPUTextureView9",
	});
	const GPUSupportedFeatures15 = GPUAdapter2.features;
	GPURenderPassEncoder6.draw(6);
	GPUQueue5.writeBuffer(GPUBuffer0, 0, typedArray14);
	const GPUBindGroup10 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUSupportedFeatures16 = GPUAdapter7.features;
	GPUComputePassEncoder8.setBindGroup(0, GPUBindGroup5);
	GPURenderPassEncoder6.setPipeline(GPURenderPipeline9);
	const string79 = GPUComputePipeline0.label;
	const GPUQuerySet9 = GPUDevice0.createQuerySet({
		count: 84,
		label: "GPUQuerySet9",
		type: "occlusion",
	});
	GPUComputePassEncoder10.end();
	const GPUCommandBuffer7 = GPUCommandEncoder10.finish();
	const GPUTextureView10 = GPUTexture3.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "rgba16float",
		label: "GPUTextureView10",
	});
	GPUQueue2.submit([GPUCommandBuffer6]);
	GPURenderPassEncoder6.end();
	const string80 = GPUQuerySet9.label;
	const GPUTexture12 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 1,
		format: "bgra8unorm-srgb",
		label: "GPUTexture12",
		size: {
			width: 553,
			height: 3140,
			depthOrArrayLayers: 63,
		},
		mipLevelCount: 7,
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
		viewFormats: ["bgra8unorm"],
	});
	const GPUTextureView11 = GPUTexture12.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 5,
		format: "bgra8unorm",
		label: "GPUTextureView11",
	});
	const GPURenderPassEncoder7 = GPUCommandEncoder0.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.5836404224910519,
					g: 0.39916313116441016,
					b: 0.33973554292071273,
					a: 0.5148362289852766,
				},
				loadOp: "clear",
				storeOp: "discard",
				view: GPUTextureView11,
			},
		],
		label: "GPURenderPassEncoder7",
		maxDrawCount: 26707579,
		occlusionQuerySet: GPUQuerySet8,
	});
	GPURenderPassEncoder7.end();
	const GPUTexture13 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 4,
		format: "bgra8unorm-srgb",
		label: "GPUTexture13",
		size: {
			width: 1739,
			height: 503,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
		viewFormats: ["bgra8unorm-srgb"],
	});
	const GPUTextureView12 = GPUTexture13.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "bgra8unorm-srgb",
		label: "GPUTextureView12",
	});
	const GPURenderPassEncoder8 = GPUCommandEncoder0.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 0.9446332107468327,
					g: 0.46637683333764235,
					b: 0.6694335385922645,
					a: 0.37646732576657493,
				},
				loadOp: "load",
				storeOp: "store",
				view: GPUTextureView12,
			},
		],
		label: "GPURenderPassEncoder8",
		maxDrawCount: 2207415208,
		occlusionQuerySet: GPUQuerySet4,
	});
	const GPUBuffer5 = GPUDevice0.createBuffer({
		label: "GPUBuffer5",
		mappedAtCreation: true,
		size: 228532892,
		usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
	});
	const GPUBindGroupLayout3 = GPUComputePipeline0.getBindGroupLayout(0);
	const GPUSupportedLimits20 = GPUAdapter8.limits;
	const GPUSupportedFeatures17 = GPUDevice0.features;
	GPUQueue1.writeBuffer(GPUBuffer1, 12, typedArray15);
	GPURenderPassEncoder8.end();
	const GPUCommandBuffer8 = GPUCommandEncoder0.finish();
	const GPUSupportedFeatures18 = GPUAdapter0.features;
	const string81 = GPUTextureView5.label;
	GPUQueue3.submit([GPUCommandBuffer8]);
	const string82 = GPUQuerySet7.count;
	GPUComputePassEncoder8.setBindGroup(0, GPUBindGroup0);
	GPUComputePassEncoder8.setPipeline(GPUComputePipeline0);
	const string83 = GPURenderPipeline3.label;
	const string84 = GPUDevice0.label;
	const GPUBuffer6 = GPUDevice0.createBuffer({
		label: "GPUBuffer6",
		mappedAtCreation: true,
		size: 158560220,
		usage:
			GPUBufferUsage.STORAGE |
			GPUBufferUsage.UNIFORM |
			GPUBufferUsage.QUERY_RESOLVE |
			GPUBufferUsage.COPY_DST |
			GPUBufferUsage.VERTEX |
			GPUBufferUsage.COPY_SRC,
	});
	const string85 = GPURenderPipeline4.label;
	const GPUComputePipeline4 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule4,
		},
		label: "GPUComputePipeline4",
		layout: "auto",
	});
	const string86 = GPUTextureView1.label;
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup6);
	GPUComputePassEncoder9.setPipeline(GPUComputePipeline2);
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup6);
	GPUComputePassEncoder9.dispatchWorkgroups(91, 155, 44);
	const string87 = GPURenderPipeline3.label;
	const GPUTextureView13 = GPUTexture9.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 7,
		baseMipLevel: 1,
		format: "r32sint",
		label: "GPUTextureView13",
	});
	const string88 = GPUQuerySet9.label;
	const string89 = GPUCommandEncoder11.label;
	const GPUComputePipeline5 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule0,
		},
		label: "GPUComputePipeline5",
		layout: "auto",
	});
	const GPUCommandEncoder12 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder12",
	});
	const GPUTexture14 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 1,
		format: "r8unorm",
		label: "GPUTexture14",
		size: {
			width: 3192,
			height: 1307,
			depthOrArrayLayers: 6,
		},
		mipLevelCount: 3,
		usage: GPUTextureUsage.RENDER_ATTACHMENT,
		viewFormats: ["r8unorm"],
	});
	const GPUTextureView14 = GPUTexture14.createView({
		aspect: "all",
		dimension: "2d-array",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 2,
		format: "r8unorm",
		label: "GPUTextureView14",
	});
	const GPURenderPassEncoder9 = GPUCommandEncoder12.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 0.6752277444236521,
					g: 0.7780459694498023,
					b: 1.3775747245771208,
					a: 1.9945943897273453,
				},
				loadOp: "clear",
				storeOp: "store",
				view: GPUTextureView14,
			},
		],
		label: "GPURenderPassEncoder9",
		maxDrawCount: 3698662758,
		occlusionQuerySet: GPUQuerySet8,
	});
	GPURenderPassEncoder9.setVertexBuffer(0, GPUBuffer2);
	GPUQueue3.submit([GPUCommandBuffer7]);
	GPUComputePassEncoder8.setBindGroup(0, GPUBindGroup0);
	GPUComputePassEncoder8.setPipeline(GPUComputePipeline3);
	GPUComputePassEncoder8.setBindGroup(0, GPUBindGroup5);
	GPUComputePassEncoder8.dispatchWorkgroups(235, 181, 38);
	const GPUShaderModule9 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader9,
	});
	const GPUQueue6 = GPUDevice0.queue;
	const GPUCommandEncoder13 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder13",
	});
	const GPUTexture15 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "bgra8unorm",
		label: "GPUTexture15",
		size: {
			width: 236,
			height: 1014,
			depthOrArrayLayers: 26,
		},
		mipLevelCount: 3,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_SRC,
		viewFormats: ["bgra8unorm-srgb"],
	});
	const GPUTextureView15 = GPUTexture15.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 1,
		format: "bgra8unorm",
		label: "GPUTextureView15",
	});
	const GPURenderPassEncoder10 = GPUCommandEncoder13.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.5270848795548113,
					g: 0.1880985562708657,
					b: 0.023617960408395478,
					a: 1.6127455529698413,
				},
				loadOp: "clear",
				storeOp: "discard",
				view: GPUTextureView15,
				depthSlice: 12,
			},
		],
		label: "GPURenderPassEncoder10",
		maxDrawCount: 1286705078,
		occlusionQuerySet: GPUQuerySet5,
	});
	GPUQueue4.writeBuffer(GPUBuffer0, 0, typedArray16);
	const GPUBindGroup11 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline3.bindGroup",
		layout: GPUComputePipeline3.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUSupportedFeatures19 = GPUAdapter2.features;
	const GPUComputePipeline6 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule4,
		},
		label: "GPUComputePipeline6",
		layout: "auto",
	});
	const GPUSupportedFeatures20 = GPUAdapter3.features;
	GPUQueue5.writeBuffer(GPUBuffer1, 28, typedArray17);
	const WGSLLanguageFeatures6 = navigator.gpu.wgslLanguageFeatures;
	const GPUQueue7 = GPUDevice0.queue;
	const GPUSupportedLimits21 = GPUAdapter5.limits;
	const GPURenderPipeline12 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "subtract",
							dstFactor: "one-minus-src-alpha",
							srcFactor: "dst",
						},
						color: {
							operation: "reverse-subtract",
							dstFactor: "dst-alpha",
							srcFactor: "one-minus-dst-alpha",
						},
					},
					format: "r8unorm",
					writeMask: GPUColorWrite.ALL | GPUColorWrite.BLUE | GPUColorWrite.RED,
				},
			],
		},
		label: "GPURenderPipeline12",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "none",
			frontFace: "ccw",
			topology: "triangle-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule6,
		},
	});
	GPURenderPassEncoder9.setPipeline(GPURenderPipeline12);
	GPURenderPassEncoder9.draw(1);
	const WGSLLanguageFeatures7 = navigator.gpu.wgslLanguageFeatures;
	GPUQueue6.writeBuffer(GPUBuffer0, 12, typedArray18);
	const GPUSupportedLimits22 = GPUAdapter1.limits;
	const GPUComputePipeline7 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule9,
		},
		label: "GPUComputePipeline7",
		layout: "auto",
	});
	GPUComputePassEncoder1.end();
	GPUQueue3.writeBuffer(GPUBuffer1, 0, typedArray19);
	GPURenderPassEncoder10.setVertexBuffer(0, GPUBuffer2);
	const string90 = GPUComputePassEncoder9.label;
	const GPUCommandEncoder14 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder14",
	});
	const string91 = GPURenderPassEncoder9.label;
	const string92 = GPURenderPipeline7.label;
	const string93 = GPUTextureView8.label;
	const GPUQuerySet10 = GPUDevice0.createQuerySet({
		count: 2334,
		label: "GPUQuerySet10",
		type: "occlusion",
	});
	const GPUShaderModule10 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader10,
	});
	const GPUAdapter9 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	GPURenderPassEncoder9.end();
	const GPUCommandBuffer9 = GPUCommandEncoder12.finish();
	const GPUQuerySet11 = GPUDevice0.createQuerySet({
		count: 1138,
		label: "GPUQuerySet11",
		type: "occlusion",
	});
	const string94 = GPUComputePipeline4.label;
	const GPUSupportedFeatures21 = GPUDevice0.features;
	const string95 = GPURenderPassEncoder10.label;
	GPUQueue6.submit([GPUCommandBuffer9]);
	GPUComputePassEncoder8.end();
	const GPUCommandBuffer10 = GPUCommandEncoder11.finish();
	GPUQueue2.writeBuffer(GPUBuffer0, 28, typedArray20);
	const GPUTexture16 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "bgra8unorm",
		label: "GPUTexture16",
		size: {
			width: 762,
			height: 757,
			depthOrArrayLayers: 2,
		},
		mipLevelCount: 4,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_SRC,
		viewFormats: ["bgra8unorm-srgb"],
	});
	const GPUTextureView16 = GPUTexture16.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "bgra8unorm",
		label: "GPUTextureView16",
	});
	const GPURenderPassEncoder11 = GPUCommandEncoder1.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.585882779900245,
					g: 0.3328352841301674,
					b: 1.2094789998986437,
					a: 1.1164989182356309,
				},
				loadOp: "clear",
				storeOp: "discard",
				view: GPUTextureView16,
				depthSlice: 0,
			},
		],
		label: "GPURenderPassEncoder11",
		maxDrawCount: 3367889141,
		occlusionQuerySet: GPUQuerySet9,
	});
	const string96 = GPUQuerySet9.type;
	const string97 = GPUQueue1.label;
	const string98 = GPUQueue5.label;
	const GPUTexture17 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "rg16float",
		label: "GPUTexture17",
		size: {
			width: 404,
			height: 192,
			depthOrArrayLayers: 51,
		},
		mipLevelCount: 6,
		usage:
			GPUTextureUsage.RENDER_ATTACHMENT |
			GPUTextureUsage.TEXTURE_BINDING |
			GPUTextureUsage.COPY_SRC,
		viewFormats: ["rg16float"],
	});
	const GPUTextureView17 = GPUTexture17.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 5,
		format: "rg16float",
		label: "GPUTextureView17",
	});
	const GPURenderPassEncoder12 = GPUCommandEncoder14.beginRenderPass({
		colorAttachments: [
			{
				clearValue: {
					r: 1.637622951908498,
					g: 0.8198747828491841,
					b: 1.5738674467032125,
					a: 0.5896772264905854,
				},
				loadOp: "load",
				storeOp: "store",
				view: GPUTextureView17,
				depthSlice: 0,
			},
		],
		label: "GPURenderPassEncoder12",
		maxDrawCount: 2228397126,
		occlusionQuerySet: GPUQuerySet3,
	});
	const GPUAdapterInfo7 = GPUAdapter1.info;
	GPURenderPassEncoder10.setPipeline(GPURenderPipeline2);
	const GPUShaderModule11 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader11,
	});
	const string99 = GPUComputePipeline1.label;
	const GPUAdapter10 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	const GPUSupportedFeatures22 = GPUDevice0.features;
	GPUQueue3.writeBuffer(GPUBuffer1, 24, typedArray21);
	const string100 = GPUQuerySet10.count;
	const string101 = GPUDevice0.label;
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup6);
	GPUComputePassEncoder9.setPipeline(GPUComputePipeline0);
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup1);
	GPUComputePassEncoder9.dispatchWorkgroups(73, 111, 42);
	GPUQueue4.submit([GPUCommandBuffer10]);
	const GPURenderPipeline13 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "add",
							dstFactor: "one-minus-dst",
							srcFactor: "one-minus-src",
						},
					},
					format: "rg16float",
					writeMask: GPUColorWrite.ALL,
				},
			],
		},
		label: "GPURenderPipeline13",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "front",
			frontFace: "cw",
			topology: "line-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule5,
		},
	});
	GPURenderPassEncoder12.setPipeline(GPURenderPipeline13);
	const GPUBuffer7 = GPUDevice0.createBuffer({
		label: "GPUBuffer7",
		mappedAtCreation: false,
		size: 152208672,
		usage: GPUBufferUsage.MAP_WRITE,
	});
	const GPUAdapterInfo8 = GPUAdapter0.info;
	GPURenderPassEncoder11.end();
	const GPUCommandBuffer11 = GPUCommandEncoder1.finish();
	GPUQueue3.submit([GPUCommandBuffer11]);
	const GPUSupportedLimits23 = GPUAdapter2.limits;
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup7);
	GPUComputePassEncoder9.setPipeline(GPUComputePipeline2);
	const GPUAdapterInfo9 = GPUAdapter3.info;
	const string102 = GPUQuerySet8.count;
	const GPUShaderModule12 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader12,
	});
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup6);
	GPUComputePassEncoder9.setPipeline(GPUComputePipeline3);
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup9);
	GPUComputePassEncoder9.dispatchWorkgroups(9, 31, 15);
	GPUQueue6.writeBuffer(GPUBuffer0, 0, typedArray22);
	const GPUBindGroup12 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline7.bindGroup",
		layout: GPUComputePipeline7.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUTexture18 = GPUDevice0.createTexture({
		dimension: "3d",
		sampleCount: 1,
		format: "rg8uint",
		label: "GPUTexture18",
		size: {
			width: 731,
			height: 712,
			depthOrArrayLayers: 25,
		},
		mipLevelCount: 4,
		usage: GPUTextureUsage.COPY_DST,
		viewFormats: ["rg8uint"],
	});
	const string103 = GPUQuerySet9.count;
	GPUComputePassEncoder9.setBindGroup(0, GPUBindGroup9);
	const GPUSupportedFeatures23 = GPUAdapter9.features;
	const string104 = GPUTextureView16.label;
	const string105 = GPUQuerySet1.type;
	GPURenderPassEncoder10.end();
	const GPUSupportedFeatures24 = GPUDevice0.features;
	const GPUCommandBuffer12 = GPUCommandEncoder13.finish();
	const string106 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUSupportedLimits24 = GPUAdapter2.limits;
	const boolean2 = GPUAdapter4.isFallbackAdapter;
	const GPUSupportedLimits25 = GPUDevice0.limits;
	GPURenderPassEncoder12.draw(1);
	const GPUSupportedLimits26 = GPUDevice0.limits;
	const string107 = GPUDevice0.label;
	const GPURenderPipeline14 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
					},
					format: "bgra8unorm-srgb",
					writeMask:
						GPUColorWrite.ALL | GPUColorWrite.ALPHA | GPUColorWrite.RED,
				},
			],
		},
		label: "GPURenderPipeline14",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "back",
			frontFace: "ccw",
			topology: "triangle-list",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	GPUComputePassEncoder9.end();
	const GPUAdapter11 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const string108 = await navigator.gpu.getPreferredCanvasFormat();
	const string109 = GPURenderPassEncoder12.label;
	const GPUCommandEncoder15 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder15",
	});
	GPUQueue4.writeBuffer(GPUBuffer0, 0, typedArray23);
	const GPUBindGroup13 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline4.bindGroup",
		layout: GPUComputePipeline4.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUTexture19 = GPUDevice0.createTexture({
		dimension: "1d",
		sampleCount: 1,
		format: "r8sint",
		label: "GPUTexture19",
		size: {
			width: 726,
			height: 1,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
		viewFormats: ["r8sint"],
	});
	const string110 = GPUCommandEncoder14.label;
	const boolean3 = GPUAdapter0.isFallbackAdapter;
	const string111 = GPUQuerySet9.count;
	const string112 = GPUDevice0.label;
	const GPUComputePassEncoder11 = GPUCommandEncoder5.beginComputePass({
		label: "GPUComputePassEncoder11",
	});
	GPUComputePassEncoder11.end();
	const string113 = GPURenderPipeline5.label;
	GPUQueue3.writeBuffer(GPUBuffer0, 0, typedArray24);
	const GPUBindGroup14 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline4.bindGroup",
		layout: GPUComputePipeline4.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUSupportedLimits27 = GPUAdapter8.limits;
	const string114 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUBuffer8 = GPUDevice0.createBuffer({
		label: "GPUBuffer8",
		mappedAtCreation: true,
		size: 99569768,
		usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.STORAGE,
	});
	GPURenderPassEncoder12.setVertexBuffer(0, GPUBuffer2);
	const GPUComputePassEncoder12 = GPUCommandEncoder15.beginComputePass({
		label: "GPUComputePassEncoder12",
	});
	const string115 = GPUCommandEncoder5.label;
	const GPUComputePassEncoder13 = GPUCommandEncoder5.beginComputePass({
		label: "GPUComputePassEncoder13",
	});
	const GPUSupportedFeatures25 = GPUAdapter8.features;
	const WGSLLanguageFeatures8 = navigator.gpu.wgslLanguageFeatures;
	const WGSLLanguageFeatures9 = navigator.gpu.wgslLanguageFeatures;
	GPURenderPassEncoder12.setPipeline(GPURenderPipeline13);
	const GPUSupportedLimits28 = GPUAdapter8.limits;
	const GPUSupportedFeatures26 = GPUDevice0.features;
	const GPUSupportedFeatures27 = GPUDevice0.features;
	const string116 = GPURenderPipeline6.label;
	GPUQueue7.writeBuffer(GPUBuffer0, 0, typedArray25);
	const GPUBindGroup15 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline7.bindGroup",
		layout: GPUComputePipeline7.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const GPUAdapter12 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const GPUSupportedFeatures28 = GPUDevice0.features;
	const GPUSupportedLimits29 = GPUAdapter12.limits;
	const WGSLLanguageFeatures10 = navigator.gpu.wgslLanguageFeatures;
	GPUComputePassEncoder12.setPipeline(GPUComputePipeline6);
	const string117 = GPUComputePipeline5.label;
	GPUQueue7.writeBuffer(GPUBuffer0, 0, typedArray26);
	const GPUBindGroup16 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline0.bindGroup",
		layout: GPUComputePipeline0.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const string118 = GPUQuerySet9.count;
	GPURenderPassEncoder12.setVertexBuffer(0, GPUBuffer2);
	const GPURenderPipeline15 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule1,
			targets: [
				{
					blend: {
						alpha: {
							operation: "subtract",
							dstFactor: "zero",
							srcFactor: "dst",
						},
						color: {
							operation: "max",
							dstFactor: "one",
							srcFactor: "one",
						},
					},
					format: "bgra8unorm",
					writeMask: GPUColorWrite.ALL | GPUColorWrite.ALPHA,
				},
			],
		},
		label: "GPURenderPipeline15",
		layout: "auto",
		multisample: {
			count: 1,
		},
		primitive: {
			cullMode: "none",
			frontFace: "ccw",
			topology: "line-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule7,
		},
	});
	GPUQueue2.writeBuffer(GPUBuffer0, 0, typedArray27);
	const GPUBindGroup17 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline7.bindGroup",
		layout: GPUComputePipeline7.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	const string119 = GPUQuerySet10.label;
	const GPUComputePipeline8 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule11,
		},
		label: "GPUComputePipeline8",
		layout: "auto",
	});
	GPUQueue5.submit([GPUCommandBuffer12]);
	const string120 = GPUQueue7.label;
	const GPUCommandEncoder16 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder16",
	});
	const GPUComputePassEncoder14 = GPUCommandEncoder16.beginComputePass({
		label: "GPUComputePassEncoder14",
	});
	GPUComputePassEncoder14.setBindGroup(0, GPUBindGroup11);
	const string121 = GPUDevice0.label;
	const string122 = GPUQuerySet9.count;
	const string123 = GPUTextureView3.label;
	const GPUShaderModule13 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader13,
	});
	const GPUSupportedLimits30 = GPUDevice0.limits;
	const GPUAdapter13 = await navigator.gpu.requestAdapter({
		powerPreference: "low-power",
	});
	const string124 = GPUCommandEncoder16.label;
	const GPUTextureView18 = GPUTexture18.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 3,
		baseMipLevel: 0,
		format: "rg8uint",
		label: "GPUTextureView18",
	});
	GPUQueue5.writeBuffer(GPUBuffer0, 0, typedArray28);
	const GPUBindGroup18 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline8.bindGroup",
		layout: GPUComputePipeline8.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder13.setPipeline(GPUComputePipeline6);
	GPUQueue2.writeBuffer(GPUBuffer0, 0, typedArray29);
	const GPUBindGroup19 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline6.bindGroup",
		layout: GPUComputePipeline6.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder13.setBindGroup(0, GPUBindGroup19);
	GPUComputePassEncoder13.dispatchWorkgroups(39, 161, 16);
	GPUComputePassEncoder13.setBindGroup(0, GPUBindGroup19);
	GPUComputePassEncoder13.setPipeline(GPUComputePipeline1);
	GPUComputePassEncoder13.setBindGroup(0, GPUBindGroup4);
	GPUComputePassEncoder13.dispatchWorkgroups(16, 195, 53);
	const GPUShaderModule14 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader14,
	});
	const GPUSupportedFeatures29 = GPUDevice0.features;
	const GPUQuerySet12 = GPUDevice0.createQuerySet({
		count: 1702,
		label: "GPUQuerySet12",
		type: "occlusion",
	});
	const string125 = GPUQuerySet3.count;
	const GPUShaderModule15 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader15,
	});
	const string126 = GPUTextureView2.label;
	GPUComputePassEncoder12.setPipeline(GPUComputePipeline8);
	const string127 = GPUComputePassEncoder14.label;
	const GPUQueue8 = GPUDevice0.queue;
	const GPUQuerySet13 = GPUDevice0.createQuerySet({
		count: 3326,
		label: "GPUQuerySet13",
		type: "occlusion",
	});
	GPURenderPassEncoder12.draw(8);
	const GPUSupportedLimits31 = GPUAdapter9.limits;
	const string128 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUSupportedFeatures30 = GPUDevice0.features;
	const string129 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUTextureView19 = GPUTexture18.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 2,
		baseMipLevel: 0,
		format: "rg8uint",
		label: "GPUTextureView19",
	});
	const string130 = GPUQuerySet7.type;
	GPUComputePassEncoder13.setBindGroup(0, GPUBindGroup4);
	GPUComputePassEncoder13.setPipeline(GPUComputePipeline6);
	GPUComputePassEncoder13.setBindGroup(0, GPUBindGroup19);
	GPUComputePassEncoder13.dispatchWorkgroups(171, 29, 61);
	GPURenderPassEncoder12.setVertexBuffer(0, GPUBuffer2);
	const string131 = GPUQuerySet11.type;
	const GPUSupportedFeatures31 = GPUDevice0.features;
	const GPUShaderModule16 = GPUDevice0.createShaderModule({
		label: "vertex",
		code: shader16,
	});
	const GPURenderPipeline16 = GPUDevice0.createRenderPipeline({
		fragment: {
			entryPoint: "main",
			module: GPUShaderModule3,
			targets: [
				{
					blend: {
						alpha: {
							operation: "min",
							dstFactor: "one",
							srcFactor: "one",
						},
						color: {
							operation: "max",
							dstFactor: "one",
							srcFactor: "one",
						},
					},
					format: "rg16float",
					writeMask:
						GPUColorWrite.ALPHA | GPUColorWrite.BLUE | GPUColorWrite.ALL,
				},
			],
		},
		label: "GPURenderPipeline16",
		layout: "auto",
		multisample: {
			count: 4,
		},
		primitive: {
			cullMode: "none",
			frontFace: "cw",
			topology: "triangle-strip",
		},
		vertex: {
			entryPoint: "main",
			module: GPUShaderModule2,
		},
	});
	GPUQueue5.writeBuffer(GPUBuffer0, 28, typedArray30);
	const GPUBuffer9 = GPUDevice0.createBuffer({
		label: "GPUBuffer9",
		mappedAtCreation: false,
		size: 164371196,
		usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDEX,
	});
	const string132 = GPUQueue5.label;
	GPUComputePassEncoder14.setBindGroup(0, GPUBindGroup17);
	const string133 = GPUTextureView13.label;
	const string134 = GPURenderPipeline10.label;
	const GPUSupportedFeatures32 = GPUDevice0.features;
	const WGSLLanguageFeatures11 = navigator.gpu.wgslLanguageFeatures;
	GPUComputePassEncoder12.setPipeline(GPUComputePipeline5);
	GPUQueue0.writeBuffer(GPUBuffer0, 0, typedArray31);
	const GPUBindGroup20 = GPUDevice0.createBindGroup({
		label: "GPUComputePipeline5.bindGroup",
		layout: GPUComputePipeline5.getBindGroupLayout(0),
		entries: [
			{
				binding: 0,
				resource: {
					buffer: GPUBuffer0,
				},
			},
			{
				binding: 1,
				resource: {
					buffer: GPUBuffer1,
				},
			},
		],
	});
	GPUComputePassEncoder12.setBindGroup(0, GPUBindGroup20);
	GPUComputePassEncoder12.dispatchWorkgroups(245, 8, 45);
	const GPUTextureView20 = GPUTexture17.createView({
		aspect: "all",
		dimension: "3d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 4,
		baseMipLevel: 2,
		format: "rg16float",
		label: "GPUTextureView20",
	});
	const GPUAdapter14 = await navigator.gpu.requestAdapter({
		powerPreference: "high-performance",
	});
	const GPUShaderModule17 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader17,
	});
	const string135 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUTexture20 = GPUDevice0.createTexture({
		dimension: "2d",
		sampleCount: 4,
		format: "rgb10a2unorm",
		label: "GPUTexture20",
		size: {
			width: 3169,
			height: 2889,
			depthOrArrayLayers: 1,
		},
		mipLevelCount: 1,
		usage: GPUTextureUsage.RENDER_ATTACHMENT,
		viewFormats: ["rgb10a2unorm"],
	});
	const GPUSupportedFeatures33 = GPUAdapter3.features;
	const GPUTextureView21 = GPUTexture5.createView({
		aspect: "all",
		dimension: "2d",
		arrayLayerCount: 1,
		baseArrayLayer: 0,
		mipLevelCount: 1,
		baseMipLevel: 0,
		format: "r8unorm",
		label: "GPUTextureView21",
	});
	const string136 = GPURenderPipeline1.label;
	const string137 = await navigator.gpu.getPreferredCanvasFormat();
	const GPUCommandEncoder17 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder17",
	});
	const GPUComputePassEncoder15 = GPUCommandEncoder17.beginComputePass({
		label: "GPUComputePassEncoder15",
	});
	const string138 = GPUComputePassEncoder13.label;
	const string139 = GPUQuerySet2.label;
	const GPUCommandEncoder18 = GPUDevice0.createCommandEncoder({
		label: "GPUCommandEncoder18",
	});
	const GPUQuerySet14 = GPUDevice0.createQuerySet({
		count: 3607,
		label: "GPUQuerySet14",
		type: "occlusion",
	});
	const string140 = GPUTextureView12.label;
	const GPUComputePipeline9 = GPUDevice0.createComputePipeline({
		compute: {
			entryPoint: "main",
			module: GPUShaderModule0,
		},
		label: "GPUComputePipeline9",
		layout: "auto",
	});
	const string141 = GPUDevice0.label;
	const GPUShaderModule18 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader18,
	});
	const GPUShaderModule19 = GPUDevice0.createShaderModule({
		label: "compute",
		code: shader19,
	});
	const string142 = GPUQueue3.label;
	GPUComputePassEncoder12.end();
	const GPUCommandBuffer13 = GPUCommandEncoder15.finish();
	GPUQueue4.submit([GPUCommandBuffer13]);
}
main().catch(console.error);
