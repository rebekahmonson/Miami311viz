
//Bulky trash by ZIP

var bulktrashdata = [
//format=[lat,lng, "#"],
[25.606583,	-80.34859, "33157: 1709 bulk trash requests"],
[25.734828,	-80.3583, "33165: 1439 bulk trash requests"],
[25.739011,	-80.30685, "33155: 1379 bulk trash requests"],
[25.595983,	-80.40234, "33177: 1209  bulk trash requests"],
[25.653431,	-80.35999, "33176: 1208 bulk trash requests"],
[25.850124,	-80.23773, "33147: 1162 bulk trash requests"],
[25.94422,-80.2773, "33055: 1057 bulk trash requests"],
[25.946754,	-80.24962, "33056: 1028 bulk trash requests"],
[25.733204,	-80.41197, "33175: 893 bulk trash requests"],
[25.662292,	-80.40947, "33186: 881 bulk trash requests"],
[25.94267,-80.21276, "33169: 859 bulk trash requests"],
[25.66558,	-80.30688, "33156: 853 bulk trash requests"],
[25.487988,	-80.42692, "33033: 790 bulk trash requests"],
[25.524528,	-80.40521, "33032: 653 bulk trash requests"],
[25.909039,	-80.24945, "33054: 639 bulk trash requests"],
[25.650232,	-80.45925, "33196: 630 bulk trash requests"],
[25.702429,	-80.36184, "33173: 589 bulk trash requests"],
[25.892185,	-80.21032, "33168: 557 bulk trash requests"],
[25.893372,	-80.18164, "33161: 553 bulk trash requests"],
[25.574834,	-80.3467, "33189: 524 bulk trash requests"],
[25.596234,	-80.4765, "33187: 508 bulk trash requests"],
[25.929571,	-80.17839, "33162: 498 bulk trash requests"],
[25.812625, -80.2369, "33142: 496 bulk trash requests"],
[25.885739,	-80.23264, "33167: 493 bulk trash requests"],
[25.95872,	-80.17941, "33179: 491 bulk trash requests"],
[25.699968,	-80.40811, "33183: 461 bulk trash requests"],
[25.851974,	-80.20566, "33150: 432 bulk trash requests"],
[25.70028,	-80.44721, "33193: 401 bulk trash requests"],
[25.702929,	-80.29642, "33143: 364 bulk trash requests"],
[25.559785,	-80.41664, "33170: 362 bulk trash requests"],
[25.938687,	-80.3182, "33015: 351 bulk trash requests"],
[25.723173,	-80.43995, "33185: 340 bulk trash requests"],
[25.479438,	-80.48687, "33030: 329 bulk trash requests"],
[25.76226, -80.30839, "33144: 322 bulk trash requests"],
[25.526214,	-80.49632, "33031: 312 bulk trash requests"],
[25.759184,	-80.40773, "33184: 233 bulk trash requests"],
[25.763044,	-80.35919, "33174: 216 bulk trash requests"],
[25.637132,	-80.31641, "33158: 196 bulk trash requests"],
[25.781127,	-80.40467, "33182: 185 bulk trash requests"],
[25.962069,	-80.14465, "33180: 154 bulk trash requests"],
[25.902172,	-80.30732, "33014: 125 bulk trash requests"],
[25.753927,	-80.27034, "33134: 101 bulk trash requests"],
[25.895557,	-80.35509, "33018: 94 bulk trash requests"],
[25.56071, -80.3494, "33190: 85 bulk trash requests"],
[25.837696,	-80.36947, "33178: 80 bulk trash requests"],
[25.941535,	-80.13861, "33160: 78 bulk trash requests"],
[25.777977,	-80.29718, "33126: 66 bulk trash requests"],
[25.864773,	-80.30069, "33012: 49 bulk trash requests"],
[25.431506,	-80.51382, "33034: 46 bulk trash requests"],
[25.786634,	-80.36151, "33172: 41 bulk trash requests"],
[25.853184,	-80.18622, "33138: 40 bulk trash requests"],
[25.745549,	-80.4651, "33194: 39 bulk trash requests"],
[25.897372,	-80.16048, "33181: 35 bulk trash requests"],
[25.887983,	-80.33284, "33016: 31 bulk trash requests"]
];

var greenwastedata = [
//format=[lat,lng, "#"],
[25.606583,	-80.34859, "33157: 1709 green waste requests"],
[25.734828,	-80.3583, "33165: 1439 green waste requests"],
[25.739011,	-80.30685, "33155: 1379 green waste requests"],
[25.595983,	-80.40234, "33177: 1209  green waste requests"],
[25.653431,	-80.35999, "33176: 1208 green waste requests"],
[25.850124,	-80.23773, "33147: 1162 green waste requests"],
[25.94422,-80.2773, "33055: 1057 green waste requests"]
];

var recyclingdata = [
//format=[lat,lng, "#"],
[25.431506,	-80.51382, "33034: 46 recycling requests"],
[25.786634,	-80.36151, "33172: 41 recycling requests"],
[25.853184,	-80.18622, "33138: 40 recycling requests"],
[25.745549,	-80.4651, "33194: 39 recycling requests"],
[25.897372,	-80.16048, "33181: 35 recycling requests"],
[25.887983,	-80.33284, "33016: 31 recycling requests"]
];

var dogdata = [
//format=[lat,lng, "#"],
[25.559785,	-80.41664, "33170: 362 dog requests"],
[25.938687,	-80.3182, "33015: 351 dog requests"],
[25.723173,	-80.43995, "33185: 340 dog requests"],
[25.479438,	-80.48687, "33030: 329 dog requests"],
[25.76226, -80.30839, "33144: 322 dog requests"]
];

var animaldata = [
[25.662292,	-80.40947, "33186: 881 requests"],
[25.94267,-80.21276, "33169: 859 requests"],
[25.66558,	-80.30688, "33156: 853 requests"],
[25.487988,	-80.42692, "33033: 790 requests"],
[25.524528,	-80.40521, "33032: 653 requests"],
[25.909039,	-80.24945, "33054: 639 requests"],
[25.650232,	-80.45925, "33196: 630 requests"],
[25.702429,	-80.36184, "33173: 589 requests"]
];