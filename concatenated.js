const { create, globals } = require('D:/final_proj/dawn/out/Debug/Debug/dawn.node');
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
// Seed: 1602426446143798325
const shader12 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const shader11 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl');
const typedArray27 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader10 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const typedArray26 = new Uint8Array([6334, -5128, 5785, 619, 7626, 1575, -899, 3517, 2714, 6193, 6475, 5589, -8494, 7516, -364, -1142, -3619, 1016, -9736, -5248, -997, 7052, 2201, 9241, -1650, 3832, 7020, -965, 8726, -9423, -8839, 641, 1834, 9459, -4077, 2300, -9712, -908, 4923, -5021, -2559, -1442, -9758, 5763, -5855, 3395, 7474, -5387, -3535, -2308, 5695, -3970, -4052, -2698, -7460, 8543, 1412, -9199, -8440, 2758, -2820, 6297, -5675, -1328, 2026, 4209, -5599, -7053, -288, 7498, -6367, 6421, 5691, 9766, 5349, -5175, 5479, 3108, -6391, -9797, -7399, -5447, -9365, -9193, 7965, 6047, 3270, -6848, -8285, 7340, 5080, -3411, -909, -4534, 2992, -2323, 5789, 2488, -4622, 1083, 5090, 358, 3913, 2938, 3644, -5271, -5133, 9208, 1955, 5863, 7146, -5187, -3669, -7861, 9563, 1607, -7489, 1307, 2164, 631, -6998, -7286, -4029, 5181, -8304, 3285, 332, -4663, 6759, -584, -1938, 5942, -6929, 9393, -9461, -6894, 6965, -4365, -5014, -9639, -4873, -6345, -597, 3908, 8106, -283, -7668, -3797, -6114, -5621, -5042, 2799, 5554, 3038, 3082, 7961, -4685, -3844, -9090, -860, -2407, -2784, 4031, 8255, 5357, 8099, 4327, -251, -8848, -1135, -3040, 384, 9957, -5627, -7877, -1038, 4710, 3882, 6992, -2390, 1351, 7633, -5228, -7905, -3226, 1177, -1880, 6029, 8072, 7771, 544, -5310, 7703, 9812, 7550, -6656, -8989, 5054, -4618, 8330, -3290, 4372, 9224, 4778, -3385, 101, 9636, -7798, 3763, 6295, -8962, -7225, -6974, -9993, 2635, -4330, -9576, -8898, 9505, -9975, -8298, 3064, 3271, -6663, -3908, 6662, -4129, -6732, 7237, 9000, -1938, -3070, 757, -4848, 6396, 8632, 8599, -3324, -6188, -4336, -9807, -858, 6508, -7691, 222, -9780, -2503, -8584, 5441, 1056, 6002, -9395, -8554, -3438, -6686, 9112, -8356, -2999, 207, -1051, 6032, 4523, -8208, 4783, -30, 8019, -9009, -78, 7825, -4119, 5315, -7067, 1192, 3216, 6076, 2399, 8697, 6498, -3576, 4303, 843, -1418, 2266, 107, 4674, 9539, -7013, 5221, 6634, 7280, -6121, 1127, -6973, -4207, -7567, 5186, -8868, -2051, 5754, -3984, 1157, -9481, -1205, -2467, 5687, 2, -6792, -8520, 8261, -3185, 3802, -2804, -924, -5597, 5116, 5204, 7328, -8222, -4167, -6433, -7891, -4716, 2555, -9872, 1045, 8349, 1835, 8128, 7661, 4205, -1308, 5195, -3525, -9728, -5385, -9726, 4628, 2658, -2012, -668, 8611, -2245, -6481, 6639, 552, -5586, -5748, -7858, -7170, 9608, 6636, 1034, -3, 3501, 3046, 9579, -5566, 4053, 7926, 2179, 6764, -9041, 2455, -9093, 8773, -2825, -8029, 8364, -252, 8449, 2334, -9313, 5368, -9619, -3559, 1018, -6173, -8304, 3720, 4368, 1357, 2251, 5499, -3292, -3166, 5441, -3488, -8748, 2096, -790, 4403, 7497, 2344, 8290, -8467, -2423, -5362, 5593, 8295, -4199, 5456, 306, 5546, -7331, 7232, 9620, 1784, 3702, 7226, 9444, -2189, 3888, -3554, 5836, 2750, -4373, 7018, 1450, 6530, -9619, -117, -6936, -7891, -4472, 7143, 8155, -7598, 508, -1837, -2359, 2850, -5623, -560, -9233, 9476, -4651, -9454, 645, -3189, -1910, 3527, -294, 1670, -91, 8277, -8210, 2568, -9082, 238, 8394, 6424, 1636, 1678, 8303, 7, 3555, 7135, -5781, 326, -3106, -6399, -7596, 1499, 4790, -2669, 7601, 4028, -4808, -7342, 183, 3689, -5623, 3553, -422, 2147, 6339, -1775, 9157, 9059, -3597])
const typedArray25 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray24 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader9 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl');
const shader8 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const shader7 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const typedArray23 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray22 = new Int8Array([894, 8321, -7663, 9228, 3471, -3536, 3565, 8970, 7181, -8781, 5066, 7599, 6366, -6113, -9100, 8139, 6000, 1975, 9472, 710, 7548, -4967, 2110, -3648, -1779, -4626, 8948, -9063, 2695, 8264, -7992, 7923, 9207, -8625, -6233, 3576, -5928, -7138, -8280, -9400, 6564, -5032, -7608, 4925, 6122, 7097, 2909, -7043, 3471, 873, -8200, 7640, -1864, -4353, 5228, 9086, -1301, 721, -3605, -7107, -8484, 3328, -6949, -9568, -9898, -2937, 3684, -208, 6205, -5285, -8433, -4876, -2531, 7108, -6674, -7494])
const typedArray21 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray20 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray19 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray18 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader6 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const shader5 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const typedArray17 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray16 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray15 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray14 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray13 = new Int8Array([-8809, 6369, -6526, 3925])
const typedArray12 = new Int8Array([-2890, -8195, 2019, -502, -1966, -8127, -9372, -9601, 5874, 8701, 363, 4117, -1054, -1254, -5229, 108, 2657, 8843, -4105, 4625, 2908, -7338, -4811, -7608, -9433, 9355, 1625, 1791, -6251, 653, -4233, 8641, -5547, -333, 663, -6550, 6306, 5731, -7507, -2936, 8226, -7336, 5953, -34, 7948, -7003, -3126, -6343, -2168, -5185, -7239, -5812, 3984, 6061, -5490, 4839, -4849, -8074, -2098, 2898, 1498, 1654, -9770, 4858, -8909, -6905, 3632, -925, 533, -1794, 1769, -2917, 7495, 6440, 2210, -5916, 3138, -3964, 4124, -9199, -2626, 4610, 5714, -9607, 7153, -327, 8437, 3159, 5728, -856, 6475, -1681, 1833, -1689, 729, -5267, 9110, 7026, 706, 7682, 8733, 4246, 5679, 5800, -6829, 3018, -7648, -1993, 2613, 2879, -3974, 1608, -2236, -5437, -6071, 7703, 640, 867, 571, -8665, -8011, -3193, -2374, 3355, 4835, -1826, -2758, -8166, 2468, -7442, -2881, -5374, 5239, 9601, 9609, -5119, 7335, -4342, -8106, 1533, -8572, -7974, -7840, 2733, -3007, 1459, -8850, -5465, 2733, -2053, 5748, -8115, 3755, 2107, -9651, 8405, -7032, 4494, 9635, -3277, -1812, 7537, 9866, -8491, 2880, 8590, -8744, -8941, 4771, -7932, 9540, -3504, -9267, 7785, 7248, -9035, 2099, -1628, -9775, 5652, 5871, 3926, -9109, 766, 2300, -803, 2378, -6732, -5571, 5326, 8481, 8618, -4712, -2643, 4603, -8047, 5214, 1024, 711, 404, 9397, 4569, -9985, -7541, -5659, 977, 927, -9137, 9684, 7140, -6295, 3374, 9520, 8639, 1682, -9035, -7486, 1809, -6341, 9976, -6887, 456, -4, 8708, 3576, -1653, 8726, 7969, 2770, -1241, -7292, 707, 4898, -6304, 920, -5221, -1448, -7512, -7324, -5150, -6849, -1138, 4696, -5160, -7249, 9209, -8944, -1965, -1992, 6390, -7196, 4631, -367, 4994, 8810, -7446, -2126, 9055, -9840, -7543, -421, 8615, -8674, 9635, -8095, 2685, -9655, 2482, -5695, -1987, 7716, -2607, -785, -125, 2360, 1806, 4435, -3702, -6488, -3374, 4489, -6320, 8617, 1737, 8729, 7067, -514, -6790, 8380, 2704, -236, -7694, -6516, -1118, 6863, -1803, -1081, 4455, 7130, -1713])
const typedArray11 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader4 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const typedArray10 = new Int8Array([1028, 6947, -2724, 9055, 5144, 2255, 7417, 3291, 603, 6041, 4799, 6073, -4507, 7306, 6315, -6710, -9348, 8021, -2071, 3681, 4514, -6851, -7219, -3168, -4485, 6990, 3067, -140, -8235, 1261, -5624, -3281, -9312, 1586, -2880, 8282, 5363, 2881, 5574, -8277, -2363, 3631, 3968, -5056, -1235, -1900, -7207, 8115, 7179, -1700, 6969, 3458, -532, 7267, -9613, -9865, 291, -1605, 2596, -7883, -2207, -8835, -8181, 7772, 2156, -8519, 3386, 18, 4297, -6764, 5647, 7226, -6284, -142, 9549, 4522, 7030, -5839, -7009, -1090, 6956, -3315, 5483, 9693, 8678, 2004, 6541, 3410, -2250, 7656, -2221, -1738, 3575, 6215, -5191, -9670, -2749, 6976, 6644, 4886, 734, 1566, -3743, 5015, 8186, -9891, -5975, -1913, -6536, -8008, 3990, 5556, 6609, 4417, 6462, 4406, -1335, -4703, 8043, -5603, -3896, 5719, 9802, 1572, 7167, -8058, -9657, -930, 6836, -9514, -9233, 6208, -6792, -8131, 8911, 6808, -4877, 5130, -7638, -1462, 4926, -3797, -7905, 6586, 6100, 3143, -9417, 6160, 8204, -685, -5720, -940, 2159, -2016, 3398, 7749, -547, -630, 3891, -4690, -5278, 7195, -7410, -5658, 6914, 2659, 6456, -7865, -4747, -6889, 9383, -6565, -8266, -5920, 5208, 2786, 3353, -7538, -7839, -5358, 5645, 710, 8778, -3250, 3106, -959, -3342, 4612, 7222, -6632, 6799, 242, -1463, -843, 8752, -8540, 8604, 2611, -9076, -8756, -8014, -5081, 7524, -7929])
const typedArray9 = new Float32Array([-7788, -6867, 3901, 124, -5090, -6618, -8457, -4406, -8833, 6784, 7888, -5743, -6970, -3397, -9074, -4774, 1738, -5798, 3929, -1338, -9768, 858, 6281, 1972, 3558, -1376, 1180, -8699, 1990, 3640, -6093, -2104, -578, 7945, 1034, -1237, -2069, 5065, 9418, 3296, -8271, -3010, 6940, -2384, -2254, 8937, -5240, 3451, 8397, -8119, 6773, -6196, -7025, -8719, 5366, 8731, 244, 3246, 2068, -2786, -1500, 929, -5830, 3823, 27, -5963, 1110, 2138, -2082, -2094, -6352, 8295, -3649, 1561, -3432, 3438, -286, 381, 3497, -7115, 8769, -1787, 1772, 2140, 806, -5751, -1181, 8977, -797, -4332, -3639, -9934, 5110, 4743, 7544, -2962, -5388, 8024, 4513, 9944, 1351, 1979, -3773, 5019, -9550, -7228, -2349, 3377, -5264, -6242, 2876, -1051, 3956, -6469, -3778, -1901, 9440, -9605, 2517, -5839, -5313, 6976, 8185, 7048, -3121, -2139, 9314, -992, 9830, -1861, -7551, 248, 5949, -649, 3318, 7381, 3166, -9702, 6910, 2850, 2576, -4573, -7395, 1691, 6275, 7474, -5045, -5301, -1458, 9526, -5795, -4236, 5748, -3071, -8425, 3436, 471, -4475, -5251, -2791, -7549, -8812, -3525, -5447, -4804, -4963, -1216, -6571, -2679, 6673, -7482, 4592, -4839, -96, 6489, 7729, 4291, 7554, -9144, 7263, 9, 5323, 4874, -67, 2016, -3739, -852, 1404, -2756, -3999, -6453, 3653, 2536, -6383, 4357, 8720, 2170, -7602, 9380, -5682, 2605, 9387, -4235, 9878, 88, 5145, 3001, 1345, -606, 5001, -1875, -4089, -9225, 1390, 7016, -2050, -3206, -7062, 3209, -6871, 3379, -6208, -9108, 3839, -3393, -8404, 4392, -4894, -2680, 5326, -5831, 8312, -8710, 8696, -5636, -7015, 7084, 3856, 7938, 779, -3072, 9738, 1996, -388, -2636, 7888, 5152, 1601, -3034, -186, -6245, -4832, 4481, 1316, -914, -2235, -8666, -795, 6995, -9434, 7874, -8380, -190, -1377, 9730, -3069, 1580, 4965, 5110, 9206, 6585, -2852, 2820, 1232, 8427, 1095, 1254, -5386, 9754, 891, -1194, 7649, 1474, -4267, -7667, -4446, -1894, 7643, 7466, -6008, 1481, -9454, -3458, -7085, 4703, 5138, 6327, -6471, -5551, -8430, -5019, -4384, -2265, 428, 818, 4767, -6972, 9839, -6344, -186, -516, 2948, 8069, 4171, -2378, 673, 2633, -2639, -4428, -7455, 4029, -299, -2897, -7236, -8611, 4172, -5879, 6479, 5073, 5287, 8050, 7933, 8444, -1388, -6504, -4949, 4051, -140, 7170, 4757, -7959, -4584, 5434, -5808, 3643, -6153, -4803, -2524, 1856])
const typedArray8 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray7 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray6 = new Uint8Array([7823, -3422, -5560, 5320, -4601, 1576, -4940, 2605, 4921, -1613, -1586, 5507, 2010, 5913, -4441, 4191, 7226, 6548, -4270, -3028, 3251, 279, 7755, -1454, -1927, -9894, -6432, 1650, -4783, -4684, -8446, -6755, 3382, 1687, -9646, 3442, -8809, 7733, -4680, 5441, 5612, -5840, 2783, -2299, -2060, 6264, 6612, -989, 8720, -7400, -8759, -8487, 2173, 8636, -1101, -7201, 8962, 8969, 9449, -1360, 8259, -5412, -8977, -5235, 6400, -697, 8547, 6160, -3739, 2112, 6942, -3499, -9917, 1433, -1859, 1401, 789, 7309, -336, -5781, -9688, -1028, 6305, -9440, 4641, 724, 8675, 4588, -759, -149, 5103, -6344, 8460, 7705, 897, -1906, 1039, -2397, -7883, 8713, -5200, 3113, 4333, -6188, -7755, -4986, 2256, 3268, 1500, 7399, 1221, -5466, -6161, -9742, -1964, -589, 1984, -9868, 4039, 417, 9433, 5981, -6221, 1730, -3156, -7274, -5316, 9581, 8988, 7955, -906, 1816, -3702, 4979, -5024, 6178, 7133, 1760, -8339, -4488, 4448, 2766, 9225, 63, -4833, 7294, 5568, -7228, 9636, 6941, -7765, 1572, 3431, -3881, 3899, -1344, -694, -4147, 8500, -7179, -5352, -9601, -173, 1934, 8764, -8880, 2517, 8259, -1495, -4183, 1509, -8556, 6376, 8707, -3047, -8327, 2087, 1731, -7778, -525, -2876, -636, 4674, -2145, -1911, -2173, 3872, -1724, -5154, 4270, 853, 8367, -2919, 7730, 9914, 5028, 4489, 6579, 9993, -9178, -1744, -2017, 5057, 6999, -6132, -7819, 2593, -6415, -4873, -2302, 2143, 1229, -4864, -6961, 3640, 6624, 1232, 2628, 410, -3915, 6868, -3190, 3097, -6217, 99, 8400, 9570, 3524, -7919, 5700, -2140, 5954, -735, -3836, -8801, 7049, 6556, 3969, -4135, -1011, -7541, 6826, 23, -6428, -3831, 268, 420, -5431, 3476, 997, -4810, -8069, 97, 1960, -6191, 1985, -9489, 351, 7824, -8132, 3822, 331, -1557, 2316, -7376, -288, 3953, 5143, -7656, -2885, -7354, -610, -3685, 6637, -7727, -5655, 6219, -1013, 8801, 7574, -2918, -7953, 143, 3685, -4543, -7253, -3609, 9671, -5469, -6330, 6657, 7880, -2342, -8394, -3659, -913, -9138, 5098, -6072, -9182, -7433, -6221, -5435, -5806, 3491, -9104, 9413, 4595, -6233, 3566, -6280, 5642, 6288, -6735, -8907, -2308, -5722, 2460, -3129, 9157, 4645, -8163, 4842, -3846, 1049, -2398, -5911, 194, -2124, -9650, -2182, 97, -7356, 5821, -2487, 6807, 6216, 4730, 145, -1604, -7862, -3971, -3317, -6649, -7880, -2962, 7454, -6097, -5582, 8412, 7255, 2877, 2320, 2974, 6848, 1231, 5713, -4262, 3789, -8141, -8638, 826, -1299, 9856, 2666, -3669, -6035, -9265, 3147, 539, -3112, -7926, 5659, -663, -1350, 493, -160, 3511, -870, -8490, -7074, 725, -9521, -5248, 3746, -1717, 5397, -8345, -886, 1066, 7704, -480, -9436, -3698, 8320, 4198, -7675, 2356, 5620, 7337, -3925, -4111, -8881, -892, -1043, 5035, -4030, 7064, 2275, -8136, -7985, 9262, 7133, 9854, -246, -7848, 4, 8156, 6294, 2158, 1735, -5836, -288, -5892, -8592, 5684, -2857, -409, -9347, -1437, 7051, -2729, 8854, -1289, 2044, 3017, -1086, 9954, -1092, -4337, -3064, 8852, -5802, -1155, -7948, -400, 9255, -1801, -8561, 5484, 1797, -9070, 158, -6226, 4566, -9742, 900, 1637, 3153, 3406, 1500, -9075, -6367, -5226])
const typedArray5 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader3 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl');
const typedArray4 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray3 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray2 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const typedArray1 = new Uint8Array([1035, -473, -3193, 775])
const shader2 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/vertex.wgsl');
const shader1 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/graphics/helloTriangle/fragment.wgsl');
const typedArray0 = new Uint8Array([17, 251, 246, 66, 58, 181, 113, 125, 23, 109, 64, 232, 100, 188, 134, 185, 214, 6, 230, 20, 63, 112, 44, 51, 131, 9, 213, 42, 184, 165, 30, 158])
const shader0 = loadShader('D:/final_proj/WebGlitch/rsrcs/shaders/compute/1/compute.wgsl');

async function main() {
    const GPUAdapter0 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUDevice0 = await GPUAdapter0.requestDevice();
    const GPUCommandEncoder0 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder0"
    });
    const GPUCommandBuffer0 = GPUCommandEncoder0.finish();
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
    const GPUBindGroupLayout0 = GPUComputePipeline0.getBindGroupLayout(0);
    const GPUCommandEncoder1 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder1"
    });
    const GPUCommandBuffer1 = GPUCommandEncoder1.finish();
    const GPUQuerySet0 = GPUDevice0.createQuerySet({
        count: 183,
        label: "GPUQuerySet0",
        type: "occlusion"
    });
    const GPUBuffer0 = GPUDevice0.createBuffer({
        label: "GPUBuffer0",
        mappedAtCreation: true,
        size: 8710208,
        usage: GPUBufferUsage.INDIRECT | GPUBufferUsage.INDEX | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.STORAGE
    });
    const GPUQueue0 = GPUDevice0.queue
    GPUQueue0.submit([GPUCommandBuffer0]);
    const GPUCommandEncoder2 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder2"
    });
    const GPUTexture0 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "r16float",
        label: "GPUTexture0",
        size: {
            width: 1475,
            height: 3568,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["r16float"]
    });
    const GPUTextureView0 = GPUTexture0.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "r16float",
        label: "GPUTextureView0"
    });
    const GPURenderPassEncoder0 = GPUCommandEncoder2.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.6734353623275102,
                g: 1.930509960820248,
                b: 0.7749236279553782,
                a: 0.39045364819356476
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView0
        }],
        label: "GPURenderPassEncoder0",
        maxDrawCount: 1220930022,
        occlusionQuerySet: GPUQuerySet0
    });
    const string0 = GPURenderPassEncoder0.label
    const string1 = GPUQueue0.label
    const GPUCommandEncoder3 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder3"
    });
    const GPUComputePassEncoder0 = GPUCommandEncoder3.beginComputePass({
        label: "GPUComputePassEncoder0"
    });
    GPUComputePassEncoder0.setPipeline(GPUComputePipeline0);
    const GPUBuffer1 = GPUDevice0.createBuffer({
        label: "GPUBuffer1",
        mappedAtCreation: false,
        size: 32,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST | GPUBufferUsage.QUERY_RESOLVE
    });
    const GPUBuffer2 = GPUDevice0.createBuffer({
        label: "GPUBuffer2",
        mappedAtCreation: false,
        size: 32,
        usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDEX
    });
    GPUQueue0.writeBuffer(GPUBuffer1, 0, typedArray0);
    const GPUBindGroup0 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder0.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder0.dispatchWorkgroups(190, 100, 41);
    const GPUBuffer3 = GPUDevice0.createBuffer({
        label: "GPUBuffer3",
        mappedAtCreation: false,
        size: 183496864,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST | GPUBufferUsage.INDEX | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.UNIFORM | GPUBufferUsage.INDIRECT
    });
    GPURenderPassEncoder0.setVertexBuffer(0, GPUBuffer3);
    GPUQueue0.submit([GPUCommandBuffer1]);
    const GPUAdapter1 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUBuffer4 = GPUDevice0.createBuffer({
        label: "GPUBuffer4",
        mappedAtCreation: false,
        size: 49214208,
        usage: GPUBufferUsage.MAP_READ
    });
    GPURenderPassEncoder0.setVertexBuffer(0, GPUBuffer3);
    GPURenderPassEncoder0.end();
    const GPUTexture1 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgba8unorm-srgb",
        label: "GPUTexture1",
        size: {
            width: 1557,
            height: 3372,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
        viewFormats: ["rgba8unorm"]
    });
    const GPUTextureView1 = GPUTexture1.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm",
        label: "GPUTextureView1"
    });
    const GPURenderPassEncoder1 = GPUCommandEncoder2.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.651420816374603,
                g: 0.18317067387062935,
                b: 0.8817518771451238,
                a: 0.3461316484860042
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView1
        }],
        label: "GPURenderPassEncoder1",
        maxDrawCount: 4178263044,
        occlusionQuerySet: GPUQuerySet0
    });
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
                        operation: "subtract",
                        dstFactor: "one-minus-dst-alpha",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "min",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rgba8unorm",
                writeMask: GPUColorWrite.BLUE | GPUColorWrite.RED
            }]
        },
        label: "GPURenderPipeline0",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "front",
            frontFace: "cw",
            topology: "line-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPURenderPassEncoder1.setPipeline(GPURenderPipeline0);
    GPURenderPassEncoder1.draw(7);
    GPURenderPassEncoder1.setVertexBuffer(0, GPUBuffer3);
    const GPUTexture2 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba32sint",
        label: "GPUTexture2",
        size: {
            width: 374,
            height: 307,
            depthOrArrayLayers: 23
        },
        mipLevelCount: 6,
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
        viewFormats: ["rgba32sint"]
    });
    const WGSLLanguageFeatures0 = navigator.gpu.wgslLanguageFeatures
    GPUQueue0.writeBuffer(GPUBuffer1, 24, typedArray1);
    GPUComputePassEncoder0.end();
    const GPUSupportedFeatures0 = GPUAdapter0.features
    const string2 = GPURenderPassEncoder1.label
    GPURenderPassEncoder1.draw(6);
    const GPUCommandBuffer2 = GPUCommandEncoder3.finish();
    const GPURenderPipeline1 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "one-minus-dst",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "one-minus-src-alpha",
                        srcFactor: "one-minus-dst-alpha"
                    }
                },
                format: "bgra8unorm",
                writeMask: GPUColorWrite.RED
            }]
        },
        label: "GPURenderPipeline1",
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
            module: GPUShaderModule2
        }
    });
    const GPUTextureView2 = GPUTexture2.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 4,
        baseMipLevel: 2,
        format: "rgba32sint",
        label: "GPUTextureView2"
    });
    GPUQueue0.writeBuffer(GPUBuffer1, 0, typedArray2);
    const GPUBindGroup1 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUCommandEncoder4 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder4"
    });
    const GPUComputePassEncoder1 = GPUCommandEncoder4.beginComputePass({
        label: "GPUComputePassEncoder1"
    });
    const string3 = GPUComputePassEncoder1.label
    const string4 = GPUCommandEncoder4.label
    const string5 = GPURenderPassEncoder1.label
    const GPUQueue1 = GPUDevice0.queue
    const string6 = GPURenderPassEncoder1.label
    GPUComputePassEncoder1.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder1.setBindGroup(0, GPUBindGroup0);
    GPUComputePassEncoder1.dispatchWorkgroups(101, 239, 43);
    const GPURenderPipeline2 = GPUDevice0.createRenderPipeline({
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
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "bgra8unorm-srgb",
                writeMask: GPUColorWrite.RED | GPUColorWrite.BLUE | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline2",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "none",
            frontFace: "cw",
            topology: "line-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPUQueue1.writeBuffer(GPUBuffer1, 0, typedArray3);
    const GPUBindGroup2 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUSupportedFeatures1 = GPUAdapter0.features
    const GPUQueue2 = GPUDevice0.queue
    GPUQueue2.writeBuffer(GPUBuffer1, 0, typedArray4);
    const GPUBindGroup3 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUCommandEncoder5 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder5"
    });
    const GPUTexture3 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba8unorm",
        label: "GPUTexture3",
        size: {
            width: 1019,
            height: 413,
            depthOrArrayLayers: 54
        },
        mipLevelCount: 7,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING,
        viewFormats: ["rgba8unorm"]
    });
    const GPUTextureView3 = GPUTexture3.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 4,
        format: "rgba8unorm",
        label: "GPUTextureView3"
    });
    const GPURenderPassEncoder2 = GPUCommandEncoder5.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.6546180142054878,
                g: 0.004447906679322378,
                b: 0.8125237726509222,
                a: 0.16346986300910715
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView3,
            depthSlice: 1
        }],
        label: "GPURenderPassEncoder2",
        maxDrawCount: 3411754180,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPUAdapter2 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const GPUTexture4 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "rgba16float",
        label: "GPUTexture4",
        size: {
            width: 3189,
            height: 2304,
            depthOrArrayLayers: 9
        },
        mipLevelCount: 11,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.STORAGE_BINDING,
        viewFormats: ["rgba16float"]
    });
    const string7 = GPUQuerySet0.count
    GPURenderPassEncoder2.setVertexBuffer(0, GPUBuffer3);
    const GPUShaderModule3 = GPUDevice0.createShaderModule({
        label: "fragment",
        code: shader3
    });
    const GPURenderPipeline3 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "subtract",
                        dstFactor: "one",
                        srcFactor: "one-minus-constant"
                    },
                    color: {
                        operation: "reverse-subtract",
                        dstFactor: "one-minus-src",
                        srcFactor: "one-minus-dst-alpha"
                    }
                },
                format: "rgba8unorm",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.BLUE | GPUColorWrite.RED | GPUColorWrite.ALL
            }]
        },
        label: "GPURenderPipeline3",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "triangle-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPURenderPassEncoder2.setPipeline(GPURenderPipeline3);
    const GPUSupportedLimits0 = GPUAdapter2.limits
    const GPUSupportedFeatures2 = GPUDevice0.features
    const string8 = GPUComputePipeline0.label
    const GPUQuerySet1 = GPUDevice0.createQuerySet({
        count: 1160,
        label: "GPUQuerySet1",
        type: "occlusion"
    });
    const GPUCommandEncoder6 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder6"
    });
    const GPUComputePassEncoder2 = GPUCommandEncoder6.beginComputePass({
        label: "GPUComputePassEncoder2"
    });
    const GPUCommandEncoder7 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder7"
    });
    const GPUQueue3 = GPUDevice0.queue
    const GPUAdapterInfo0 = GPUAdapter2.info
    GPUComputePassEncoder1.end();
    const boolean0 = GPUAdapter2.isFallbackAdapter
    const GPUQueue4 = GPUDevice0.queue
    const string9 = await navigator.gpu.getPreferredCanvasFormat();
    const GPURenderPipeline4 = GPUDevice0.createRenderPipeline({
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
                        dstFactor: "one-minus-dst",
                        srcFactor: "zero"
                    }
                },
                format: "rgba8unorm-srgb",
                writeMask: GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline4",
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
            module: GPUShaderModule2
        }
    });
    const string10 = GPURenderPassEncoder2.label
    const string11 = GPUComputePipeline0.label
    GPURenderPassEncoder1.setVertexBuffer(0, GPUBuffer3);
    const GPUAdapterInfo1 = GPUAdapter0.info
    GPUComputePassEncoder2.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder2.setBindGroup(0, GPUBindGroup3);
    GPUComputePassEncoder2.dispatchWorkgroups(227, 6, 49);
    const GPUAdapter3 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const string12 = GPURenderPassEncoder1.label
    GPUQueue1.writeBuffer(GPUBuffer1, 0, typedArray5);
    const GPUBindGroup4 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const string13 = GPUQueue2.label
    GPUQueue1.writeBuffer(GPUBuffer3, 71115864, typedArray6);
    const WGSLLanguageFeatures1 = navigator.gpu.wgslLanguageFeatures
    const GPUSupportedLimits1 = GPUDevice0.limits
    const WGSLLanguageFeatures2 = navigator.gpu.wgslLanguageFeatures
    GPURenderPassEncoder1.draw(2);
    const GPUCommandEncoder8 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder8"
    });
    const GPUSupportedFeatures3 = GPUAdapter2.features
    const GPUSupportedFeatures4 = GPUAdapter3.features
    const string14 = GPUCommandEncoder6.label
    GPUComputePassEncoder2.setBindGroup(0, GPUBindGroup2);
    const GPUSupportedFeatures5 = GPUAdapter1.features
    const string15 = GPUQuerySet1.count
    GPUQueue0.submit([GPUCommandBuffer2]);
    GPUComputePassEncoder2.setBindGroup(0, GPUBindGroup0);
    const GPUTexture5 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba8unorm",
        label: "GPUTexture5",
        size: {
            width: 925,
            height: 26,
            depthOrArrayLayers: 42
        },
        mipLevelCount: 8,
        usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rgba8unorm-srgb"]
    });
    GPUComputePassEncoder2.setBindGroup(0, GPUBindGroup2);
    GPUComputePassEncoder2.setBindGroup(0, GPUBindGroup3);
    const string16 = GPUTextureView1.label
    const GPUCommandEncoder9 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder9"
    });
    const GPUComputePassEncoder3 = GPUCommandEncoder8.beginComputePass({
        label: "GPUComputePassEncoder3"
    });
    const GPUSupportedFeatures6 = GPUDevice0.features
    const string17 = GPUDevice0.label
    const GPUCommandBuffer3 = GPUCommandEncoder9.finish();
    GPUQueue4.submit([GPUCommandBuffer3]);
    GPUQueue1.writeBuffer(GPUBuffer1, 0, typedArray7);
    const GPUBindGroup5 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline0.bindGroup",
        layout: GPUComputePipeline0.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const boolean1 = GPUAdapter0.isFallbackAdapter
    const WGSLLanguageFeatures3 = navigator.gpu.wgslLanguageFeatures
    const GPUComputePipeline1 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline1",
        layout: "auto"
    });
    const GPUTexture6 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "bgra8unorm",
        label: "GPUTexture6",
        size: {
            width: 692,
            height: 483,
            depthOrArrayLayers: 24
        },
        mipLevelCount: 6,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["bgra8unorm"]
    });
    const GPUTextureView4 = GPUTexture6.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "bgra8unorm",
        label: "GPUTextureView4"
    });
    const GPURenderPassEncoder3 = GPUCommandEncoder7.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.8167920551170942,
                g: 1.1607159220303513,
                b: 1.1035696848219991,
                a: 0.10185985165848122
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView4,
            depthSlice: 3
        }],
        label: "GPURenderPassEncoder3",
        maxDrawCount: 2601775175,
        occlusionQuerySet: GPUQuerySet0
    });
    const GPURenderPipeline5 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule3,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "one-minus-src",
                        srcFactor: "one-minus-src-alpha"
                    },
                    color: {
                        operation: "subtract",
                        dstFactor: "dst",
                        srcFactor: "one-minus-dst-alpha"
                    }
                },
                format: "bgra8unorm",
                writeMask: GPUColorWrite.RED
            }]
        },
        label: "GPURenderPipeline5",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "line-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    const GPUSupportedLimits2 = GPUAdapter2.limits
    const GPUTexture7 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rg16float",
        label: "GPUTexture7",
        size: {
            width: 549,
            height: 823,
            depthOrArrayLayers: 30
        },
        mipLevelCount: 6,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["rg16float"]
    });
    const GPUTextureView5 = GPUTexture7.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 1,
        format: "rg16float",
        label: "GPUTextureView5"
    });
    const GPURenderPassEncoder4 = GPUCommandEncoder4.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.5447006263332927,
                g: 1.6174049652040863,
                b: 0.6805846341462478,
                a: 0.058253621121613586
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView5,
            depthSlice: 0
        }],
        label: "GPURenderPassEncoder4",
        maxDrawCount: 603804516,
        occlusionQuerySet: GPUQuerySet0
    });
    const string18 = GPUQuerySet1.type
    const boolean2 = GPUAdapter2.isFallbackAdapter
    const GPUCommandEncoder10 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder10"
    });
    GPURenderPassEncoder4.end();
    const GPUCommandBuffer4 = GPUCommandEncoder4.finish();
    GPUQueue1.submit([GPUCommandBuffer4]);
    const GPUComputePipeline2 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline2",
        layout: "auto"
    });
    const string19 = GPUCommandEncoder6.label
    const string20 = await navigator.gpu.getPreferredCanvasFormat();
    GPUComputePassEncoder3.setBindGroup(0, GPUBindGroup4);
    const GPUTexture8 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture8",
        size: {
            width: 1015,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_SRC,
        viewFormats: ["r16float"]
    });
    const string21 = GPUQuerySet1.type
    const WGSLLanguageFeatures4 = navigator.gpu.wgslLanguageFeatures
    const GPUComputePipeline3 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline3",
        layout: "auto"
    });
    const string22 = GPUQuerySet0.label
    const string23 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUTextureView6 = GPUTexture6.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 4,
        baseMipLevel: 2,
        format: "bgra8unorm",
        label: "GPUTextureView6"
    });
    const string24 = await navigator.gpu.getPreferredCanvasFormat();
    GPURenderPassEncoder1.setVertexBuffer(0, GPUBuffer3);
    GPUComputePassEncoder2.end();
    GPURenderPassEncoder3.setPipeline(GPURenderPipeline1);
    GPURenderPassEncoder3.draw(6);
    const string25 = GPUComputePassEncoder3.label
    const GPUComputePassEncoder4 = GPUCommandEncoder6.beginComputePass({
        label: "GPUComputePassEncoder4"
    });
    const string26 = GPURenderPipeline3.label
    GPURenderPassEncoder3.setPipeline(GPURenderPipeline5);
    const string27 = GPUQueue3.label
    const GPUQueue5 = GPUDevice0.queue
    GPURenderPassEncoder2.end();
    const GPUCommandBuffer5 = GPUCommandEncoder5.finish();
    GPUComputePassEncoder4.setPipeline(GPUComputePipeline3);
    const GPUTexture9 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "bgra8unorm",
        label: "GPUTexture9",
        size: {
            width: 647,
            height: 946,
            depthOrArrayLayers: 60
        },
        mipLevelCount: 2,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["bgra8unorm"]
    });
    const GPUTextureView7 = GPUTexture9.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 1,
        format: "bgra8unorm",
        label: "GPUTextureView7"
    });
    const GPURenderPassEncoder5 = GPUCommandEncoder10.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.3621939221162789,
                g: 1.267219932801101,
                b: 1.9531569627986864,
                a: 1.111945970058967
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView7,
            depthSlice: 6
        }],
        label: "GPURenderPassEncoder5",
        maxDrawCount: 3987489169,
        occlusionQuerySet: GPUQuerySet0
    });
    GPUComputePassEncoder3.end();
    GPUQueue1.writeBuffer(GPUBuffer1, 0, typedArray8);
    const GPUBindGroup6 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline3.bindGroup",
        layout: GPUComputePipeline3.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup6);
    const string28 = GPUComputePassEncoder4.label
    const WGSLLanguageFeatures5 = navigator.gpu.wgslLanguageFeatures
    const string29 = GPUQuerySet1.count
    const GPUComputePipeline4 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline4",
        layout: "auto"
    });
    const GPUQueue6 = GPUDevice0.queue
    GPUQueue6.writeBuffer(GPUBuffer3, 156153832, typedArray9);
    GPURenderPassEncoder3.end();
    const string30 = GPUDevice0.label
    const GPUTexture10 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "r16sint",
        label: "GPUTexture10",
        size: {
            width: 4089,
            height: 331,
            depthOrArrayLayers: 37
        },
        mipLevelCount: 4,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
        viewFormats: ["r16sint"]
    });
    const string31 = GPUQueue4.label
    const GPUSupportedFeatures7 = GPUAdapter1.features
    const WGSLLanguageFeatures6 = navigator.gpu.wgslLanguageFeatures
    const WGSLLanguageFeatures7 = navigator.gpu.wgslLanguageFeatures
    GPUQueue3.writeBuffer(GPUBuffer3, 168435424, typedArray10);
    const WGSLLanguageFeatures8 = navigator.gpu.wgslLanguageFeatures
    const GPUSupportedLimits3 = GPUDevice0.limits
    GPURenderPassEncoder1.setPipeline(GPURenderPipeline0);
    const string32 = GPUComputePassEncoder4.label
    const string33 = GPUQuerySet1.label
    const GPUTexture11 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "rgba8unorm",
        label: "GPUTexture11",
        size: {
            width: 937,
            height: 686,
            depthOrArrayLayers: 28
        },
        mipLevelCount: 9,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgba8unorm"]
    });
    const GPUTextureView8 = GPUTexture11.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm",
        label: "GPUTextureView8"
    });
    const GPURenderPassEncoder6 = GPUCommandEncoder7.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.04201297204638754,
                g: 1.2005631476462308,
                b: 1.2454760420055835,
                a: 1.0358259469146855
            },
            loadOp: "clear",
            storeOp: "discard",
            view: GPUTextureView8,
            depthSlice: 21
        }],
        label: "GPURenderPassEncoder6",
        maxDrawCount: 1509965086,
        occlusionQuerySet: GPUQuerySet0
    });
    const string34 = await navigator.gpu.getPreferredCanvasFormat();
    const string35 = GPUComputePassEncoder4.label
    GPURenderPassEncoder1.setVertexBuffer(0, GPUBuffer3);
    const string36 = GPUComputePipeline1.label
    const GPUQuerySet2 = GPUDevice0.createQuerySet({
        count: 2175,
        label: "GPUQuerySet2",
        type: "occlusion"
    });
    const GPUSupportedFeatures8 = GPUDevice0.features
    const boolean3 = GPUAdapter3.isFallbackAdapter
    const GPUBindGroupLayout1 = GPUComputePipeline1.getBindGroupLayout(0);
    const GPUQuerySet3 = GPUDevice0.createQuerySet({
        count: 689,
        label: "GPUQuerySet3",
        type: "occlusion"
    });
    GPURenderPassEncoder6.end();
    const GPUShaderModule4 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader4
    });
    GPURenderPassEncoder1.setVertexBuffer(0, GPUBuffer3);
    const WGSLLanguageFeatures9 = navigator.gpu.wgslLanguageFeatures
    const string37 = GPUTextureView3.label
    GPUQueue5.submit([GPUCommandBuffer5]);
    const GPUComputePassEncoder5 = GPUCommandEncoder8.beginComputePass({
        label: "GPUComputePassEncoder5"
    });
    const string38 = await navigator.gpu.getPreferredCanvasFormat();
    const GPUQuerySet4 = GPUDevice0.createQuerySet({
        count: 2952,
        label: "GPUQuerySet4",
        type: "occlusion"
    });
    const string39 = GPUQuerySet4.label
    const string40 = GPUCommandEncoder8.label
    const string41 = GPUQuerySet3.type
    const string42 = GPURenderPipeline1.label
    GPURenderPassEncoder5.setPipeline(GPURenderPipeline5);
    GPURenderPassEncoder5.draw(7);
    GPURenderPassEncoder1.setPipeline(GPURenderPipeline0);
    const string43 = GPUCommandEncoder8.label
    const boolean4 = GPUAdapter0.isFallbackAdapter
    const GPUSupportedFeatures9 = GPUAdapter1.features
    const string44 = GPUQueue3.label
    GPURenderPassEncoder1.setPipeline(GPURenderPipeline0);
    GPUComputePassEncoder5.setBindGroup(0, GPUBindGroup5);
    const string45 = GPUComputePipeline1.label
    const GPUTextureView9 = GPUTexture6.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 4,
        format: "bgra8unorm",
        label: "GPUTextureView9"
    });
    const GPUQueue7 = GPUDevice0.queue
    const GPUBindGroupLayout2 = GPUComputePipeline3.getBindGroupLayout(0);
    const string46 = GPUComputePipeline3.label
    GPUQueue3.writeBuffer(GPUBuffer1, 0, typedArray11);
    const GPUBindGroup7 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline2.bindGroup",
        layout: GPUComputePipeline2.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUQueue4.writeBuffer(GPUBuffer3, 161124628, typedArray12);
    const string47 = GPURenderPipeline1.label
    const GPUSupportedFeatures10 = GPUDevice0.features
    const string48 = GPUQuerySet4.count
    GPUComputePassEncoder5.setBindGroup(0, GPUBindGroup1);
    GPURenderPassEncoder1.setPipeline(GPURenderPipeline0);
    const string49 = GPUComputePipeline4.label
    const GPUAdapterInfo2 = GPUAdapter3.info
    const GPUComputePipeline5 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline5",
        layout: "auto"
    });
    const string50 = GPURenderPipeline5.label
    const GPUTextureView10 = GPUTexture2.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 5,
        baseMipLevel: 0,
        format: "rgba32sint",
        label: "GPUTextureView10"
    });
    const string51 = GPURenderPassEncoder1.label
    const GPUBindGroupLayout3 = GPUComputePipeline0.getBindGroupLayout(0);
    const string52 = GPURenderPassEncoder5.label
    const WGSLLanguageFeatures10 = navigator.gpu.wgslLanguageFeatures
    const string53 = GPUTextureView10.label
    const string54 = GPURenderPassEncoder5.label
    GPUQueue5.writeBuffer(GPUBuffer1, 16, typedArray13);
    const string55 = GPUDevice0.label
    const GPUBindGroupLayout4 = GPUComputePipeline2.getBindGroupLayout(0);
    GPUComputePassEncoder5.end();
    const GPUCommandBuffer6 = GPUCommandEncoder8.finish();
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup6);
    GPUComputePassEncoder4.setPipeline(GPUComputePipeline5);
    GPUQueue2.writeBuffer(GPUBuffer1, 0, typedArray14);
    const GPUBindGroup8 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline5.bindGroup",
        layout: GPUComputePipeline5.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder4.setBindGroup(0, GPUBindGroup8);
    GPUComputePassEncoder4.dispatchWorkgroups(44, 84, 52);
    const string56 = GPURenderPassEncoder1.label
    const string57 = GPUDevice0.label
    const string58 = GPUComputePassEncoder4.label
    const string59 = GPURenderPipeline5.label
    const string60 = GPUTextureView9.label
    GPUQueue3.writeBuffer(GPUBuffer1, 0, typedArray15);
    const GPUBindGroup9 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline5.bindGroup",
        layout: GPUComputePipeline5.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUTexture12 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r32sint",
        label: "GPUTexture12",
        size: {
            width: 2530,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_SRC,
        viewFormats: ["r32sint"]
    });
    const boolean5 = GPUAdapter1.isFallbackAdapter
    const string61 = GPURenderPassEncoder1.label
    const boolean6 = GPUAdapter1.isFallbackAdapter
    const GPUTexture13 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r8unorm",
        label: "GPUTexture13",
        size: {
            width: 872,
            height: 409,
            depthOrArrayLayers: 47
        },
        mipLevelCount: 9,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        viewFormats: ["r8unorm"]
    });
    const GPUTextureView11 = GPUTexture13.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 2,
        format: "r8unorm",
        label: "GPUTextureView11"
    });
    const GPURenderPassEncoder7 = GPUCommandEncoder7.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.144093703355835,
                g: 1.884457871903093,
                b: 1.4828299740558675,
                a: 0.9551342231780007
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView11,
            depthSlice: 8
        }],
        label: "GPURenderPassEncoder7",
        maxDrawCount: 488727397,
        occlusionQuerySet: GPUQuerySet2
    });
    const GPUCommandEncoder11 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder11"
    });
    GPUComputePassEncoder4.end();
    const GPUCommandEncoder12 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder12"
    });
    const GPUComputePassEncoder6 = GPUCommandEncoder11.beginComputePass({
        label: "GPUComputePassEncoder6"
    });
    const string62 = GPUComputePassEncoder6.label
    const GPUSupportedFeatures11 = GPUAdapter0.features
    const string63 = GPURenderPassEncoder7.label
    GPUQueue3.submit([GPUCommandBuffer6]);
    const GPURenderPipeline6 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule3,
            targets: [{
                blend: {
                    alpha: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    },
                    color: {
                        operation: "reverse-subtract",
                        dstFactor: "src",
                        srcFactor: "zero"
                    }
                },
                format: "rg16float",
                writeMask: GPUColorWrite.BLUE | GPUColorWrite.ALPHA
            }]
        },
        label: "GPURenderPipeline6",
        layout: "auto",
        multisample: {
            count: 4
        },
        primitive: {
            cullMode: "back",
            frontFace: "ccw",
            topology: "point-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule4
        }
    });
    const GPUSupportedLimits4 = GPUAdapter2.limits
    const GPUTextureView12 = GPUTexture3.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 3,
        baseMipLevel: 2,
        format: "rgba8unorm",
        label: "GPUTextureView12"
    });
    GPUQueue6.writeBuffer(GPUBuffer1, 0, typedArray16);
    const GPUBindGroup10 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline1.bindGroup",
        layout: GPUComputePipeline1.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUAdapterInfo3 = GPUAdapter0.info
    const string64 = GPUCommandEncoder10.label
    const GPUQuerySet5 = GPUDevice0.createQuerySet({
        count: 1188,
        label: "GPUQuerySet5",
        type: "occlusion"
    });
    const string65 = GPUComputePipeline1.label
    GPUComputePassEncoder6.end();
    const GPUComputePassEncoder7 = GPUCommandEncoder6.beginComputePass({
        label: "GPUComputePassEncoder7"
    });
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline5);
    const GPUQueue8 = GPUDevice0.queue
    const GPUAdapter4 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const string66 = GPUDevice0.label
    const GPURenderPipeline7 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "subtract",
                        dstFactor: "constant",
                        srcFactor: "dst"
                    },
                    color: {
                        operation: "subtract",
                        dstFactor: "one-minus-src-alpha",
                        srcFactor: "one"
                    }
                },
                format: "bgra8unorm-srgb",
                writeMask: GPUColorWrite.GREEN | GPUColorWrite.ALPHA
            }]
        },
        label: "GPURenderPipeline7",
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
            module: GPUShaderModule4
        }
    });
    const GPUTexture14 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "rg32uint",
        label: "GPUTexture14",
        size: {
            width: 3452,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_DST,
        viewFormats: ["rg32uint"]
    });
    const GPUSupportedFeatures12 = GPUDevice0.features
    const GPUTexture15 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "rgb10a2uint",
        label: "GPUTexture15",
        size: {
            width: 2037,
            height: 1965,
            depthOrArrayLayers: 24
        },
        mipLevelCount: 11,
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgb10a2uint"]
    });
    const string67 = GPUDevice0.label
    const GPUSupportedFeatures13 = GPUDevice0.features
    GPURenderPassEncoder7.setVertexBuffer(0, GPUBuffer3);
    const string68 = GPUCommandEncoder6.label
    GPURenderPassEncoder5.draw(4);
    const GPUComputePassEncoder8 = GPUCommandEncoder12.beginComputePass({
        label: "GPUComputePassEncoder8"
    });
    const GPUSupportedLimits5 = GPUAdapter0.limits
    const GPUComputePipeline6 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline6",
        layout: "auto"
    });
    GPURenderPassEncoder1.setPipeline(GPURenderPipeline0);
    const boolean7 = GPUAdapter1.isFallbackAdapter
    GPURenderPassEncoder5.setPipeline(GPURenderPipeline5);
    const GPUSupportedLimits6 = GPUAdapter2.limits
    GPURenderPassEncoder1.draw(4);
    const GPUTexture16 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgba8unorm",
        label: "GPUTexture16",
        size: {
            width: 2599,
            height: 1276,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        viewFormats: ["rgba8unorm-srgb"]
    });
    const GPUTextureView13 = GPUTexture16.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm-srgb",
        label: "GPUTextureView13"
    });
    const GPURenderPassEncoder8 = GPUCommandEncoder11.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.659265386706372,
                g: 0.6555948665312052,
                b: 0.18057034851422205,
                a: 0.6496360187431465
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView13
        }],
        label: "GPURenderPassEncoder8",
        maxDrawCount: 2684246796,
        occlusionQuerySet: GPUQuerySet2
    });
    GPURenderPassEncoder7.end();
    const GPUCommandBuffer7 = GPUCommandEncoder7.finish();
    GPUQueue8.submit([GPUCommandBuffer7]);
    const GPUComputePipeline7 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline7",
        layout: "auto"
    });
    GPUQueue4.writeBuffer(GPUBuffer1, 0, typedArray17);
    const GPUBindGroup11 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline6.bindGroup",
        layout: GPUComputePipeline6.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder8.end();
    const GPUAdapter5 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const string69 = GPUQuerySet4.count
    const GPUSupportedLimits7 = GPUAdapter1.limits
    const string70 = GPUQuerySet0.type
    const string71 = GPUQuerySet1.label
    const string72 = GPUQuerySet4.count
    const GPUBuffer5 = GPUDevice0.createBuffer({
        label: "GPUBuffer5",
        mappedAtCreation: true,
        size: 195556132,
        usage: GPUBufferUsage.COPY_SRC
    });
    const string73 = GPUQuerySet2.type
    const GPUSupportedFeatures14 = GPUAdapter4.features
    const GPUShaderModule5 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader5
    });
    const string74 = GPUCommandEncoder2.label
    const string75 = GPUQuerySet1.count
    const GPUBuffer6 = GPUDevice0.createBuffer({
        label: "GPUBuffer6",
        mappedAtCreation: true,
        size: 213459408,
        usage: GPUBufferUsage.INDEX | GPUBufferUsage.UNIFORM | GPUBufferUsage.QUERY_RESOLVE
    });
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline2);
    const string76 = await navigator.gpu.getPreferredCanvasFormat();
    GPURenderPassEncoder1.end();
    const GPUCommandBuffer8 = GPUCommandEncoder2.finish();
    GPUQueue1.submit([GPUCommandBuffer8]);
    const string77 = GPURenderPipeline5.label
    const GPUTexture17 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r8unorm",
        label: "GPUTexture17",
        size: {
            width: 844,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_SRC,
        viewFormats: ["r8unorm"]
    });
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup4);
    GPUComputePassEncoder7.dispatchWorkgroups(131, 26, 1);
    const string78 = GPUTextureView7.label
    const string79 = await navigator.gpu.getPreferredCanvasFormat();
    const string80 = GPURenderPipeline6.label
    const GPUSupportedFeatures15 = GPUDevice0.features
    GPURenderPassEncoder8.setPipeline(GPURenderPipeline4);
    const GPUAdapter6 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    GPURenderPassEncoder8.end();
    const GPUCommandBuffer9 = GPUCommandEncoder11.finish();
    GPUQueue3.submit([GPUCommandBuffer9]);
    const GPUBuffer7 = GPUDevice0.createBuffer({
        label: "GPUBuffer7",
        mappedAtCreation: true,
        size: 172233864,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.UNIFORM | GPUBufferUsage.INDEX | GPUBufferUsage.INDIRECT
    });
    const GPUTexture18 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rg8unorm",
        label: "GPUTexture18",
        size: {
            width: 3855,
            height: 615,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST,
        viewFormats: ["rg8unorm"]
    });
    const GPUTextureView14 = GPUTexture18.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rg8unorm",
        label: "GPUTextureView14"
    });
    const GPURenderPassEncoder9 = GPUCommandEncoder12.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.0857639360097464,
                g: 0.772178827201135,
                b: 0.7179393465703077,
                a: 0.7483397152772082
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView14
        }],
        label: "GPURenderPassEncoder9",
        maxDrawCount: 87107909,
        occlusionQuerySet: GPUQuerySet2
    });
    const GPUSupportedFeatures16 = GPUDevice0.features
    const GPUSupportedLimits8 = GPUDevice0.limits
    GPURenderPassEncoder5.setVertexBuffer(0, GPUBuffer3);
    GPURenderPassEncoder9.end();
    const GPUCommandBuffer10 = GPUCommandEncoder12.finish();
    const GPUBindGroupLayout5 = GPUComputePipeline1.getBindGroupLayout(0);
    const GPUSupportedLimits9 = GPUDevice0.limits
    const string81 = GPUQuerySet1.label
    const GPUComputePipeline8 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline8",
        layout: "auto"
    });
    GPURenderPassEncoder5.setPipeline(GPURenderPipeline5);
    const GPUCommandEncoder13 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder13"
    });
    const GPUTexture19 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rgb10a2unorm",
        label: "GPUTexture19",
        size: {
            width: 524,
            height: 683,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgb10a2unorm"]
    });
    const GPUTextureView15 = GPUTexture19.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgb10a2unorm",
        label: "GPUTextureView15"
    });
    const GPURenderPassEncoder10 = GPUCommandEncoder13.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.22827984024962178,
                g: 1.7685194211496105,
                b: 0.776219296422848,
                a: 0.574691285377724
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView15
        }],
        label: "GPURenderPassEncoder10",
        maxDrawCount: 3165756266,
        occlusionQuerySet: GPUQuerySet1
    });
    const string82 = GPUComputePipeline4.label
    const GPUQueue9 = GPUDevice0.queue
    const GPUSupportedLimits10 = GPUDevice0.limits
    const GPUTexture20 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "r8uint",
        label: "GPUTexture20",
        size: {
            width: 3201,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_SRC | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["r8uint"]
    });
    const GPUComputePipeline9 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline9",
        layout: "auto"
    });
    const GPUShaderModule6 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader6
    });
    const GPUAdapter7 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const GPUQueue10 = GPUDevice0.queue
    const GPUSupportedLimits11 = GPUDevice0.limits
    const GPUBindGroupLayout6 = GPUComputePipeline2.getBindGroupLayout(0);
    const GPUCommandEncoder14 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder14"
    });
    const GPUComputePassEncoder9 = GPUCommandEncoder14.beginComputePass({
        label: "GPUComputePassEncoder9"
    });
    const GPUSupportedFeatures17 = GPUDevice0.features
    GPURenderPassEncoder10.setVertexBuffer(0, GPUBuffer3);
    const GPUTextureView16 = GPUTexture1.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rgba8unorm",
        label: "GPUTextureView16"
    });
    GPURenderPassEncoder5.end();
    const GPURenderPipeline8 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule3,
            targets: [{
                blend: {
                    alpha: {
                        operation: "subtract",
                        dstFactor: "one-minus-constant",
                        srcFactor: "constant"
                    },
                    color: {
                        operation: "max",
                        dstFactor: "one",
                        srcFactor: "one"
                    }
                },
                format: "rgb10a2unorm",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.BLUE | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline8",
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
            module: GPUShaderModule4
        }
    });
    GPURenderPassEncoder10.setPipeline(GPURenderPipeline8);
    GPUComputePassEncoder9.end();
    const GPUCommandBuffer11 = GPUCommandEncoder14.finish();
    GPURenderPassEncoder10.end();
    GPUQueue5.writeBuffer(GPUBuffer1, 0, typedArray18);
    const GPUBindGroup12 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline6.bindGroup",
        layout: GPUComputePipeline6.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUTexture21 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture21",
        size: {
            width: 81,
            height: 598,
            depthOrArrayLayers: 40
        },
        mipLevelCount: 8,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
        viewFormats: ["r16float"]
    });
    const GPUTextureView17 = GPUTexture21.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 5,
        format: "r16float",
        label: "GPUTextureView17"
    });
    const GPURenderPassEncoder11 = GPUCommandEncoder10.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.2507002759210437,
                g: 1.2167141606307024,
                b: 0.516413398538343,
                a: 1.048489269065084
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView17,
            depthSlice: 0
        }],
        label: "GPURenderPassEncoder11",
        maxDrawCount: 563517666,
        occlusionQuerySet: GPUQuerySet4
    });
    const GPURenderPipeline9 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "one",
                        srcFactor: "constant"
                    },
                    color: {
                        operation: "reverse-subtract",
                        dstFactor: "src-alpha-saturated",
                        srcFactor: "constant"
                    }
                },
                format: "r16float",
                writeMask: GPUColorWrite.ALPHA | GPUColorWrite.ALL | GPUColorWrite.GREEN
            }]
        },
        label: "GPURenderPipeline9",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "back",
            frontFace: "cw",
            topology: "point-list"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule2
        }
    });
    GPURenderPassEncoder11.setPipeline(GPURenderPipeline9);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup1);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline2);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup7);
    GPUComputePassEncoder7.dispatchWorkgroups(148, 235, 54);
    GPUQueue10.writeBuffer(GPUBuffer1, 0, typedArray19);
    const GPUBindGroup13 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline6.bindGroup",
        layout: GPUComputePipeline6.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUComputePassEncoder10 = GPUCommandEncoder13.beginComputePass({
        label: "GPUComputePassEncoder10"
    });
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup7);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline9);
    const string83 = GPUQuerySet4.label
    const GPUSupportedLimits12 = GPUDevice0.limits
    const string84 = GPURenderPipeline5.label
    GPURenderPassEncoder11.end();
    const GPUCommandBuffer12 = GPUCommandEncoder10.finish();
    const string85 = GPUComputePassEncoder10.label
    GPUQueue5.writeBuffer(GPUBuffer1, 0, typedArray20);
    const GPUBindGroup14 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline9.bindGroup",
        layout: GPUComputePipeline9.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup14);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline4);
    GPUQueue3.writeBuffer(GPUBuffer1, 0, typedArray21);
    const GPUBindGroup15 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline4.bindGroup",
        layout: GPUComputePipeline4.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup15);
    GPUComputePassEncoder7.dispatchWorkgroups(240, 24, 36);
    const GPUQuerySet6 = GPUDevice0.createQuerySet({
        count: 3158,
        label: "GPUQuerySet6",
        type: "occlusion"
    });
    const string86 = GPUQueue2.label
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup15);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline9);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup14);
    GPUComputePassEncoder7.dispatchWorkgroups(81, 152, 14);
    const GPUTextureView18 = GPUTexture14.createView({
        aspect: "all",
        dimension: "1d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 0,
        format: "rg32uint",
        label: "GPUTextureView18"
    });
    const GPUQueue11 = GPUDevice0.queue
    const string87 = GPUDevice0.label
    const string88 = GPUQuerySet1.type
    const GPUSupportedFeatures18 = GPUAdapter3.features
    const GPUCommandEncoder15 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder15"
    });
    const GPUTexture22 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "bgra8unorm",
        label: "GPUTexture22",
        size: {
            width: 728,
            height: 1006,
            depthOrArrayLayers: 21
        },
        mipLevelCount: 8,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.TEXTURE_BINDING,
        viewFormats: ["bgra8unorm-srgb"]
    });
    const GPUTextureView19 = GPUTexture22.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 2,
        format: "bgra8unorm",
        label: "GPUTextureView19"
    });
    const GPURenderPassEncoder12 = GPUCommandEncoder15.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.5322254936494326,
                g: 0.711797789210846,
                b: 0.496755466413797,
                a: 1.0729055552085385
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView19,
            depthSlice: 2
        }],
        label: "GPURenderPassEncoder12",
        maxDrawCount: 2513711158,
        occlusionQuerySet: GPUQuerySet0
    });
    GPURenderPassEncoder12.setVertexBuffer(0, GPUBuffer3);
    GPURenderPassEncoder12.setPipeline(GPURenderPipeline5);
    GPURenderPassEncoder12.draw(7);
    GPUQueue0.submit([GPUCommandBuffer12]);
    const string89 = await navigator.gpu.getPreferredCanvasFormat();
    const string90 = GPUTextureView11.label
    const GPUSupportedFeatures19 = GPUDevice0.features
    const GPUCommandEncoder16 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder16"
    });
    const GPUAdapterInfo4 = GPUAdapter0.info
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup14);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline5);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup9);
    GPUComputePassEncoder7.dispatchWorkgroups(202, 24, 22);
    const GPURenderPipeline10 = GPUDevice0.createRenderPipeline({
        fragment: {
            entryPoint: "main",
            module: GPUShaderModule1,
            targets: [{
                blend: {
                    alpha: {
                        operation: "add",
                        dstFactor: "dst",
                        srcFactor: "one-minus-dst"
                    },
                    color: {
                        operation: "add",
                        dstFactor: "one-minus-dst",
                        srcFactor: "zero"
                    }
                },
                format: "r16float",
                writeMask: GPUColorWrite.ALL | GPUColorWrite.ALPHA | GPUColorWrite.BLUE
            }]
        },
        label: "GPURenderPipeline10",
        layout: "auto",
        multisample: {
            count: 1
        },
        primitive: {
            cullMode: "none",
            frontFace: "ccw",
            topology: "triangle-strip"
        },
        vertex: {
            entryPoint: "main",
            module: GPUShaderModule5
        }
    });
    GPUQueue5.writeBuffer(GPUBuffer3, 178396960, typedArray22);
    const GPUQuerySet7 = GPUDevice0.createQuerySet({
        count: 2916,
        label: "GPUQuerySet7",
        type: "occlusion"
    });
    const string91 = GPURenderPipeline1.label
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline0);
    const string92 = GPUCommandEncoder6.label
    const GPUComputePassEncoder11 = GPUCommandEncoder16.beginComputePass({
        label: "GPUComputePassEncoder11"
    });
    const GPUQuerySet8 = GPUDevice0.createQuerySet({
        count: 2318,
        label: "GPUQuerySet8",
        type: "occlusion"
    });
    const boolean8 = GPUAdapter1.isFallbackAdapter
    GPURenderPassEncoder12.setPipeline(GPURenderPipeline5);
    const GPUComputePipeline10 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline10",
        layout: "auto"
    });
    GPURenderPassEncoder12.setPipeline(GPURenderPipeline5);
    const string93 = GPUQuerySet4.type
    const string94 = GPUQuerySet3.label
    const GPUSupportedFeatures20 = GPUAdapter0.features
    const GPUSupportedLimits13 = GPUAdapter4.limits
    GPUQueue7.writeBuffer(GPUBuffer1, 0, typedArray23);
    const GPUBindGroup16 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline7.bindGroup",
        layout: GPUComputePipeline7.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const string95 = GPURenderPassEncoder12.label
    const string96 = GPUCommandEncoder16.label
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup9);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline5);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup8);
    GPUComputePassEncoder7.dispatchWorkgroups(20, 249, 49);
    GPUComputePassEncoder11.setBindGroup(0, GPUBindGroup12);
    const boolean9 = GPUAdapter6.isFallbackAdapter
    const GPUBuffer8 = GPUDevice0.createBuffer({
        label: "GPUBuffer8",
        mappedAtCreation: true,
        size: 243676932,
        usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_SRC | GPUBufferUsage.INDEX | GPUBufferUsage.VERTEX
    });
    const GPUShaderModule7 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader7
    });
    const GPUQueue12 = GPUDevice0.queue
    const string97 = GPURenderPassEncoder12.label
    const GPUCommandEncoder17 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder17"
    });
    GPUQueue8.submit([GPUCommandBuffer11]);
    const WGSLLanguageFeatures11 = navigator.gpu.wgslLanguageFeatures
    GPURenderPassEncoder12.setPipeline(GPURenderPipeline5);
    const string98 = GPUComputePipeline2.label
    const WGSLLanguageFeatures12 = navigator.gpu.wgslLanguageFeatures
    const GPUShaderModule8 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader8
    });
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline9);
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup14);
    GPUComputePassEncoder10.dispatchWorkgroups(255, 108, 36);
    const GPUCommandEncoder18 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder18"
    });
    const string99 = GPUTextureView4.label
    const GPUBindGroupLayout7 = GPUComputePipeline4.getBindGroupLayout(0);
    const string100 = GPUQuerySet8.type
    const GPUSupportedFeatures21 = GPUAdapter2.features
    const GPUCommandBuffer13 = GPUCommandEncoder17.finish();
    const string101 = GPUTextureView2.label
    const WGSLLanguageFeatures13 = navigator.gpu.wgslLanguageFeatures
    const GPUBuffer9 = GPUDevice0.createBuffer({
        label: "GPUBuffer9",
        mappedAtCreation: true,
        size: 185684112,
        usage: GPUBufferUsage.STORAGE
    });
    const GPUCommandBuffer14 = GPUCommandEncoder18.finish();
    GPURenderPassEncoder12.draw(4);
    GPURenderPassEncoder12.end();
    const WGSLLanguageFeatures14 = navigator.gpu.wgslLanguageFeatures
    const WGSLLanguageFeatures15 = navigator.gpu.wgslLanguageFeatures
    const string102 = await navigator.gpu.getPreferredCanvasFormat();
    const string103 = GPUQuerySet5.label
    const GPUSupportedFeatures22 = GPUAdapter0.features
    const GPUSupportedLimits14 = GPUDevice0.limits
    const string104 = GPUDevice0.label
    const GPUQuerySet9 = GPUDevice0.createQuerySet({
        count: 2232,
        label: "GPUQuerySet9",
        type: "occlusion"
    });
    const string105 = GPUQueue3.label
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup14);
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline5);
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup9);
    GPUComputePassEncoder10.dispatchWorkgroups(158, 184, 64);
    const boolean10 = GPUAdapter2.isFallbackAdapter
    const string106 = GPUQuerySet1.label
    GPUComputePassEncoder11.setBindGroup(0, GPUBindGroup12);
    const GPUShaderModule9 = GPUDevice0.createShaderModule({
        label: "fragment",
        code: shader9
    });
    const GPUTexture23 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture23",
        size: {
            width: 116,
            height: 652,
            depthOrArrayLayers: 32
        },
        mipLevelCount: 5,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST,
        viewFormats: ["r16float"]
    });
    const GPUTextureView20 = GPUTexture23.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 2,
        format: "r16float",
        label: "GPUTextureView20"
    });
    const GPURenderPassEncoder13 = GPUCommandEncoder15.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.0047495568425462,
                g: 1.6926300505885312,
                b: 1.6030438796503552,
                a: 0.5925874879210287
            },
            loadOp: "clear",
            storeOp: "store",
            view: GPUTextureView20,
            depthSlice: 5
        }],
        label: "GPURenderPassEncoder13",
        maxDrawCount: 2427704551,
        occlusionQuerySet: GPUQuerySet2
    });
    GPURenderPassEncoder13.setPipeline(GPURenderPipeline10);
    GPURenderPassEncoder13.draw(3);
    const GPUBuffer10 = GPUDevice0.createBuffer({
        label: "GPUBuffer10",
        mappedAtCreation: true,
        size: 132553272,
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.COPY_DST | GPUBufferUsage.VERTEX | GPUBufferUsage.STORAGE | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.INDIRECT | GPUBufferUsage.INDEX
    });
    const GPUBuffer11 = GPUDevice0.createBuffer({
        label: "GPUBuffer11",
        mappedAtCreation: true,
        size: 96448352,
        usage: GPUBufferUsage.INDEX | GPUBufferUsage.INDIRECT | GPUBufferUsage.QUERY_RESOLVE
    });
    const GPUQueue13 = GPUDevice0.queue
    const GPUCommandEncoder19 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder19"
    });
    const GPUComputePassEncoder12 = GPUCommandEncoder19.beginComputePass({
        label: "GPUComputePassEncoder12"
    });
    const GPUComputePipeline11 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline11",
        layout: "auto"
    });
    const boolean11 = GPUAdapter6.isFallbackAdapter
    const GPUAdapterInfo5 = GPUAdapter5.info
    GPUQueue2.submit([GPUCommandBuffer13]);
    const GPUAdapterInfo6 = GPUAdapter6.info
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup8);
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline5);
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup8);
    GPUComputePassEncoder10.dispatchWorkgroups(227, 16, 11);
    const string107 = GPUComputePassEncoder10.label
    GPUQueue12.writeBuffer(GPUBuffer1, 0, typedArray24);
    const GPUBindGroup17 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline1.bindGroup",
        layout: GPUComputePipeline1.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUComputePipeline12 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule0
        },
        label: "GPUComputePipeline12",
        layout: "auto"
    });
    const string108 = GPURenderPassEncoder13.label
    const string109 = GPUQuerySet7.count
    const GPUBindGroupLayout8 = GPUComputePipeline12.getBindGroupLayout(0);
    GPURenderPassEncoder13.end();
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup8);
    GPUComputePassEncoder7.setPipeline(GPUComputePipeline0);
    GPUComputePassEncoder7.setBindGroup(0, GPUBindGroup5);
    GPUComputePassEncoder7.dispatchWorkgroups(39, 187, 8);
    const GPUAdapter8 = await navigator.gpu.requestAdapter({
        powerPreference: "low-power"
    });
    const string110 = GPUQuerySet6.label
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup8);
    const GPUQueue14 = GPUDevice0.queue
    const GPUQueue15 = GPUDevice0.queue
    const GPUSupportedLimits15 = GPUDevice0.limits
    const GPUAdapterInfo7 = GPUAdapter6.info
    GPUComputePassEncoder11.setBindGroup(0, GPUBindGroup15);
    GPUComputePassEncoder11.setPipeline(GPUComputePipeline11);
    GPUQueue13.writeBuffer(GPUBuffer1, 0, typedArray25);
    const GPUBindGroup18 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline11.bindGroup",
        layout: GPUComputePipeline11.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    GPUComputePassEncoder11.setBindGroup(0, GPUBindGroup18);
    GPUComputePassEncoder11.dispatchWorkgroups(32, 83, 35);
    const GPUTexture24 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture24",
        size: {
            width: 235,
            height: 537,
            depthOrArrayLayers: 10
        },
        mipLevelCount: 2,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_SRC,
        viewFormats: ["r16float"]
    });
    const GPUTextureView21 = GPUTexture24.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 1,
        format: "r16float",
        label: "GPUTextureView21"
    });
    const GPURenderPassEncoder14 = GPUCommandEncoder15.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.19944993531642785,
                g: 0.22616149463559387,
                b: 0.9209539243534048,
                a: 1.2659129805628544
            },
            loadOp: "load",
            storeOp: "discard",
            view: GPUTextureView21,
            depthSlice: 1
        }],
        label: "GPURenderPassEncoder14",
        maxDrawCount: 398774991,
        occlusionQuerySet: GPUQuerySet3
    });
    GPURenderPassEncoder14.end();
    GPUQueue9.writeBuffer(GPUBuffer3, 62991160, typedArray26);
    const GPUTexture25 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 1,
        format: "r16float",
        label: "GPUTexture25",
        size: {
            width: 1478,
            height: 3337,
            depthOrArrayLayers: 62
        },
        mipLevelCount: 5,
        usage: GPUTextureUsage.RENDER_ATTACHMENT | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        viewFormats: ["r16float"]
    });
    const GPUTextureView22 = GPUTexture25.createView({
        aspect: "all",
        dimension: "2d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 3,
        format: "r16float",
        label: "GPUTextureView22"
    });
    const GPURenderPassEncoder15 = GPUCommandEncoder15.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 0.4047514426383989,
                g: 1.6317748597346011,
                b: 0.9491224887183469,
                a: 0.8778958146145397
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView22
        }],
        label: "GPURenderPassEncoder15",
        maxDrawCount: 2015066726,
        occlusionQuerySet: GPUQuerySet8
    });
    const string111 = GPURenderPassEncoder15.label
    const string112 = GPUQuerySet0.label
    const GPUBuffer12 = GPUDevice0.createBuffer({
        label: "GPUBuffer12",
        mappedAtCreation: true,
        size: 43718328,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.QUERY_RESOLVE | GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC | GPUBufferUsage.UNIFORM | GPUBufferUsage.INDEX
    });
    GPUQueue15.submit([GPUCommandBuffer14]);
    const GPUSupportedLimits16 = GPUAdapter5.limits
    const string113 = GPURenderPipeline6.label
    const GPUAdapterInfo8 = GPUAdapter4.info
    const string114 = GPUQuerySet2.count
    GPURenderPassEncoder15.setVertexBuffer(0, GPUBuffer3);
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup9);
    GPUComputePassEncoder10.setPipeline(GPUComputePipeline7);
    GPUComputePassEncoder10.setBindGroup(0, GPUBindGroup16);
    GPUComputePassEncoder10.dispatchWorkgroups(21, 140, 3);
    const GPUSupportedLimits17 = GPUDevice0.limits
    GPUComputePassEncoder11.end();
    const GPUCommandBuffer15 = GPUCommandEncoder16.finish();
    GPURenderPassEncoder15.setPipeline(GPURenderPipeline9);
    GPURenderPassEncoder15.draw(3);
    const GPUSupportedFeatures23 = GPUDevice0.features
    const GPUShaderModule10 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader10
    });
    const string115 = GPUCommandEncoder13.label
    const string116 = GPUComputePipeline10.label
    const string117 = await navigator.gpu.getPreferredCanvasFormat();
    GPUComputePassEncoder12.setPipeline(GPUComputePipeline9);
    const string118 = GPURenderPipeline4.label
    const GPUAdapter9 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    GPURenderPassEncoder15.setPipeline(GPURenderPipeline10);
    GPUQueue14.writeBuffer(GPUBuffer1, 0, typedArray27);
    const GPUBindGroup19 = GPUDevice0.createBindGroup({
        label: "GPUComputePipeline7.bindGroup",
        layout: GPUComputePipeline7.getBindGroupLayout(0),
        entries: [{
            binding: 0,
            resource: {
                buffer: GPUBuffer1
            }
        }, {
            binding: 1,
            resource: {
                buffer: GPUBuffer2
            }
        }]
    });
    const GPUCommandEncoder20 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder20"
    });
    const GPUComputePassEncoder13 = GPUCommandEncoder20.beginComputePass({
        label: "GPUComputePassEncoder13"
    });
    const GPUCommandEncoder21 = GPUDevice0.createCommandEncoder({
        label: "GPUCommandEncoder21"
    });
    const GPUTexture26 = GPUDevice0.createTexture({
        dimension: "3d",
        sampleCount: 1,
        format: "bgra8unorm-srgb",
        label: "GPUTexture26",
        size: {
            width: 708,
            height: 133,
            depthOrArrayLayers: 17
        },
        mipLevelCount: 3,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
        viewFormats: ["bgra8unorm"]
    });
    const GPUTextureView23 = GPUTexture26.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 1,
        baseMipLevel: 2,
        format: "bgra8unorm",
        label: "GPUTextureView23"
    });
    const GPURenderPassEncoder16 = GPUCommandEncoder21.beginRenderPass({
        colorAttachments: [{
            clearValue: {
                r: 1.2805395663827306,
                g: 1.2140837778545663,
                b: 0.43160272857138793,
                a: 1.6980350237138504
            },
            loadOp: "load",
            storeOp: "store",
            view: GPUTextureView23,
            depthSlice: 3
        }],
        label: "GPURenderPassEncoder16",
        maxDrawCount: 3467311019,
        occlusionQuerySet: GPUQuerySet6
    });
    const WGSLLanguageFeatures16 = navigator.gpu.wgslLanguageFeatures
    GPURenderPassEncoder15.setPipeline(GPURenderPipeline9);
    GPUComputePassEncoder13.end();
    const string119 = GPUQueue0.label
    GPURenderPassEncoder15.draw(3);
    const string120 = GPUTextureView16.label
    GPURenderPassEncoder15.setVertexBuffer(0, GPUBuffer3);
    const GPUAdapter10 = await navigator.gpu.requestAdapter({
        powerPreference: "high-performance"
    });
    const GPUTexture27 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "bgra8unorm",
        label: "GPUTexture27",
        size: {
            width: 1309,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        viewFormats: ["bgra8unorm-srgb"]
    });
    const boolean12 = GPUAdapter10.isFallbackAdapter
    const WGSLLanguageFeatures17 = navigator.gpu.wgslLanguageFeatures
    const string121 = GPUComputePipeline4.label
    const string122 = GPUQuerySet3.type
    GPURenderPassEncoder15.end();
    const GPUTexture28 = GPUDevice0.createTexture({
        dimension: "2d",
        sampleCount: 4,
        format: "rg8sint",
        label: "GPUTexture28",
        size: {
            width: 3490,
            height: 2470,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.RENDER_ATTACHMENT,
        viewFormats: ["rg8sint"]
    });
    const GPUSupportedLimits18 = GPUDevice0.limits
    const GPUBindGroupLayout9 = GPUComputePipeline4.getBindGroupLayout(0);
    const GPUTexture29 = GPUDevice0.createTexture({
        dimension: "1d",
        sampleCount: 1,
        format: "rgba16sint",
        label: "GPUTexture29",
        size: {
            width: 2771,
            height: 1,
            depthOrArrayLayers: 1
        },
        mipLevelCount: 1,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.COPY_SRC,
        viewFormats: ["rgba16sint"]
    });
    const string123 = GPURenderPassEncoder16.label
    GPURenderPassEncoder16.setPipeline(GPURenderPipeline5);
    const WGSLLanguageFeatures18 = navigator.gpu.wgslLanguageFeatures
    const string124 = GPUQuerySet0.type
    GPURenderPassEncoder16.draw(6);
    const boolean13 = GPUAdapter1.isFallbackAdapter
    const string125 = GPUDevice0.label
    const GPUShaderModule11 = GPUDevice0.createShaderModule({
        label: "compute",
        code: shader11
    });
    const GPUComputePipeline13 = GPUDevice0.createComputePipeline({
        compute: {
            entryPoint: "main",
            module: GPUShaderModule11
        },
        label: "GPUComputePipeline13",
        layout: "auto"
    });
    GPURenderPassEncoder16.setVertexBuffer(0, GPUBuffer3);
    GPURenderPassEncoder16.draw(2);
    const string126 = GPUQueue10.label
    GPUComputePassEncoder10.end();
    const string127 = GPUQueue7.label
    const GPUShaderModule12 = GPUDevice0.createShaderModule({
        label: "vertex",
        code: shader12
    });
    const GPUSupportedFeatures24 = GPUAdapter1.features
    const string128 = GPURenderPassEncoder16.label
    GPURenderPassEncoder16.draw(5);
    const GPUTextureView24 = GPUTexture26.createView({
        aspect: "all",
        dimension: "3d",
        arrayLayerCount: 1,
        baseArrayLayer: 0,
        mipLevelCount: 3,
        baseMipLevel: 0,
        format: "bgra8unorm",
        label: "GPUTextureView24"
    });
    const string129 = GPURenderPipeline8.label
    const GPUQueue16 = GPUDevice0.queue

}
main().catch(console.error);