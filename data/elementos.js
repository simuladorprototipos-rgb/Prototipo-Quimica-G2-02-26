const elementos = [
    /*
    {
        numero: 1,
        simbolo: "H",
        nombre: "Hidrógeno",
        grupo: 1,
        periodo: 1,
        masa: 1.008,
        tipo: "no-metal"
    },
    {
        numero: 2,
        simbolo: "He",
        nombre: "Helio",
        grupo: 18,
        periodo: 1,
        tipo: "gas-noble"
    },
    {
        numero: 3,
        simbolo: "Li",
        nombre: "Litio",
        grupo: 1,
        periodo: 2,
        tipo: "metal-alcalino"
    },
    {
        numero: 4,
        simbolo: "Be",
        nombre: "Berilio",
        grupo: 2,
        periodo: 2,
        tipo: "metal-alcalinoterreo",

    },








    {
        numero: 11,
        simbolo: "Na",
        nombre: "Sodio",
        grupo: 1,
        periodo: 3,
        tipo: "metal-alcalino"
    },
    {
        numero: 19,
        simbolo: "K",
        nombre: "Potasio",
        grupo: 1,
        periodo: 4,
        tipo: "metal-alcalino"
    },
    {
        numero: 37,
        simbolo: "Rb",
        nombre: "Rubidio",
        grupo: 1,
        periodo: 5,
        tipo: "metal-alcalino"
    },
    {
        numero: 55,
        simbolo: "Cs",
        nombre: "Cesio",
        grupo: 1,
        periodo: 6,
        tipo: "metal-alcalino"
    },
    {
        numero: 87,
        simbolo: "Fr",
        nombre: "Francio",
        grupo: 1,
        periodo: 7,
        tipo: "metal-alcalino"
    },
/**/ 

{
        numero: 1,
        simbolo: "H",
        nombre: "Hidrógeno",
        grupo: 1,
        periodo: 1,
        masa: 1.008,
        tipo: "no-metal"
    },
    {
        numero: 3,
        simbolo: "Li",
        nombre: "Litio",
        grupo: 1,
        periodo: 2,
        masa: 6.94,
        tipo: "metal-alcalino"
    },
    {
        numero: 4,
        simbolo: "Be",
        nombre: "Berilio",
        grupo: 2,
        periodo: 2,
        masa: 9.01,
        tipo: "metal-alcalinoterreo"
    },
    {
        numero: 11,
        simbolo: "Na",
        nombre: "Sodio",
        grupo: 1,
        periodo: 3,
        masa: 22.99,
        tipo: "metal-alcalino",

    },
    {
        numero: 12,
        simbolo: "Mg",
        nombre: "Magnesio",
        grupo: 2,
        periodo: 3,
        masa: 24.31,
        tipo: "metal-alcalinoterreo"
    },
    {
        numero: 19,
        simbolo: "K",
        nombre: "Potasio",
        grupo: 1,
        periodo: 4,
        masa: 39.10,
        tipo: "metal-alcalino"
    },
    {
        numero: 20,
        simbolo: "Ca",
        nombre: "Calcio",
        grupo: 2,
        periodo: 4,
        masa: 40.08,
        tipo: "metal-alcalinoterreo"
    },
    {
        numero: 21,
        simbolo: "Sc",
        nombre: "Escandio",
        grupo: 3,
        periodo: 4,
        masa: 44.96,
        tipo: "metal-transicion",

    },
{
  numero: 22,
  simbolo: "Ti",
  nombre: "Titanio",
  grupo: 4,
  periodo: 4,
  masa: 47.87,
  tipo: "metal-transicion"
},
{
  numero: 23,
  simbolo: "V",
  nombre: "Vanadio",
  grupo: 5,
  periodo: 4,
  masa: 50.94,
  tipo: "metal-transicion"
},
{
  numero: 24,
  simbolo: "Cr",
  nombre: "Cromo",
  grupo: 6,
  periodo: 4,
  masa: 52.00,
  tipo: "metal-transicion"
},
{
  numero: 25,
  simbolo: "Mn",
  nombre: "Manganeso",
  grupo: 7,
  periodo: 4,
  masa: 54.94,
  tipo: "metal-transicion"
},
{
  numero: 37,
  simbolo: "Rb",
  nombre: "Rubidio",
  grupo: 1,
  periodo: 5,
  masa: 85.47,
  tipo: "metal-alcalino"
},
{
  numero: 38,
  simbolo: "Sr",
  nombre: "Estroncio",
  grupo: 2,
  periodo: 5,
  masa: 87.62,
  tipo: "metal-alcalinoterreo"
},
{
  numero: 39,
  simbolo: "Y",
  nombre: "Itrio",
  grupo: 3,
  periodo: 5,
  masa: 88.91,
  tipo: "metal-transicion"
},
{
  numero: 40,
  simbolo: "Zr",
  nombre: "Circonio",
  grupo: 4,
  periodo: 5,
  masa: 91.22,
  tipo: "metal-transicion"
},
{
  numero: 41,
  simbolo: "Nb",
  nombre: "Niobio",
  grupo: 5,
  periodo: 5,
  masa: 92.91,
  tipo: "metal-transicion"
},
{
  numero: 42,
  simbolo: "Mo",
  nombre: "Molibdeno",
  grupo: 6,
  periodo: 5,
  masa: 95.95,
  tipo: "metal-transicion"
},
{
  numero: 43,
  simbolo: "Tc",
  nombre: "Tecnecio",
  grupo: 7,
  periodo: 5,
  masa: 98,
  tipo: "metal-transicion"
},
{
  numero: 55,
  simbolo: "Cs",
  nombre: "Cesio",
  grupo: 1,
  periodo: 6,
  masa: 132.91,
  tipo: "metal-alcalino"
},
{
  numero: 56,
  simbolo: "Ba",
  nombre: "Bario",
  grupo: 2,
  periodo: 6,
  masa: 137.33,
  tipo: "metal-alcalinoterreo"
},
{
  numero: 72,
  simbolo: "Hf",
  nombre: "Hafnio",
  grupo: 4,
  periodo: 6,
  masa: 178.49,
  tipo: "metal-transicion"
},
{
  numero: 73,
  simbolo: "Ta",
  nombre: "Tantalio",
  grupo: 5,
  periodo: 6,
  masa: 180.95,
  tipo: "metal-transicion"
},
{
  numero: 74,
  simbolo: "W",
  nombre: "Wolframio",
  grupo: 6,
  periodo: 6,
  masa: 183.84,
  tipo: "metal-transicion"
},
{
  numero: 75,
  simbolo: "Re",
  nombre: "Renio",
  grupo: 7,
  periodo: 6,
  masa: 186.21,
  tipo: "metal-transicion"
},
{
  numero: 87,
  simbolo: "Fr",
  nombre: "Francio",
  grupo: 1,
  periodo: 7,
  masa: 223,
  tipo: "metal-alcalino"
},
{
  numero: 88,
  simbolo: "Ra",
  nombre: "Radio",
  grupo: 2,
  periodo: 7,
  masa: 226,
  tipo: "metal-alcalinoterreo"
},
{
  numero: 104,
  simbolo: "Rf",
  nombre: "Rutherfordio",
  grupo: 4,
  periodo: 7,
  masa: 267,
  tipo: "metal-transicion"
},
{
  numero: 105,
  simbolo: "Db",
  nombre: "Dubnio",
  grupo: 5,
  periodo: 7,
  masa: 268,
  tipo: "metal-transicion"
},
{
  numero: 106,
  simbolo: "Sg",
  nombre: "Seaborgio",
  grupo: 6,
  periodo: 7,
  masa: 271,
  tipo: "metal-transicion"
},
{
  numero: 107,
  simbolo: "Bh",
  nombre: "Bohrio",
  grupo: 7,
  periodo: 7,
  masa: 272,
  tipo: "metal-transicion"
},












































{
    numero: 26,
    simbolo: "Fe",
    nombre: "Hierro",
    grupo: 8,
    periodo: 4,
    masa: 55.845,
    tipo: "metal-transicion"
},
{
    numero: 27,
    simbolo: "Co",
    nombre: "Cobalto",
    grupo: 9,
    periodo: 4,
    masa: 58.933,
    tipo: "metal-transicion"
},
{
    numero: 28,
    simbolo: "Ni",
    nombre: "Níquel",
    grupo: 10,
    periodo: 4,
    masa: 58.693,
    tipo: "metal-transicion"
},
{
    numero: 29,
    simbolo: "Cu",
    nombre: "Cobre",
    grupo: 11,
    periodo: 4,
    masa: 63.546,
    tipo: "metal-transicion"
},
{
    numero: 30,
    simbolo: "Zn",
    nombre: "Zinc",
    grupo: 12,
    periodo: 4,
    masa: 65.38,
    tipo: "metal-transicion"
},
{
    numero: 31,
    simbolo: "Ga",
    nombre: "Galio",
    grupo: 13,
    periodo: 4,
    masa: 69.723,
    tipo: "metal"
},
{
    numero: 32,
    simbolo: "Ge",
    nombre: "Germanio",
    grupo: 14,
    periodo: 4,
    masa: 72.630,
    tipo: "metaloide"
},
{
    numero: 33,
    simbolo: "As",
    nombre: "Arsénico",
    grupo: 15,
    periodo: 4,
    masa: 74.922,
    tipo: "metaloide"
},
{
    numero: 44,
    simbolo: "Ru",
    nombre: "Rutenio",
    grupo: 8,
    periodo: 5,
    masa: 101.07,
    tipo: "metal-transicion"
},
{
    numero: 45,
    simbolo: "Rh",
    nombre: "Rodio",
    grupo: 9,
    periodo: 5,
    masa: 102.91,
    tipo: "metal-transicion"
},
{
    numero: 46,
    simbolo: "Pd",
    nombre: "Paladio",
    grupo: 10,
    periodo: 5,
    masa: 106.42,
    tipo: "metal-transicion"
},
{
    numero: 47,
    simbolo: "Ag",
    nombre: "Plata",
    grupo: 11,
    periodo: 5,
    masa: 107.87,
    tipo: "metal-transicion"
},
{
    numero: 48,
    simbolo: "Cd",
    nombre: "Cadmio",
    grupo: 12,
    periodo: 5,
    masa: 112.41,
    tipo: "metal-transicion"
},
{
    numero: 49,
    simbolo: "In",
    nombre: "Indio",
    grupo: 13,
    periodo: 5,
    masa: 114.82,
    tipo: "metal"
},
{
    numero: 50,
    simbolo: "Sn",
    nombre: "Estaño",
    grupo: 14,
    periodo: 5,
    masa: 118.71,
    tipo: "metal"
},
{
    numero: 51,
    simbolo: "Sb",
    nombre: "Antimonio",
    grupo: 15,
    periodo: 5,
    masa: 121.76,
    tipo: "metaloide"
},
{
    numero: 76,
    simbolo: "Os",
    nombre: "Osmio",
    grupo: 8,
    periodo: 6,
    masa: 190.23,
    tipo: "metal-transicion"
},
{
    numero: 77,
    simbolo: "Ir",
    nombre: "Iridio",
    grupo: 9,
    periodo: 6,
    masa: 192.22,
    tipo: "metal-transicion"
},
{
    numero: 78,
    simbolo: "Pt",
    nombre: "Platino",
    grupo: 10,
    periodo: 6,
    masa: 195.08,
    tipo: "metal-transicion"
},
{
    numero: 79,
    simbolo: "Au",
    nombre: "Oro",
    grupo: 11,
    periodo: 6,
    masa: 196.97,
    tipo: "metal-transicion"
},
{
    numero: 80,
    simbolo: "Hg",
    nombre: "Mercurio",
    grupo: 12,
    periodo: 6,
    masa: 200.59,
    tipo: "metal"
},
{
    numero: 81,
    simbolo: "Tl",
    nombre: "Talio",
    grupo: 13,
    periodo: 6,
    masa: 204.38,
    tipo: "metal"
},
{
    numero: 82,
    simbolo: "Pb",
    nombre: "Plomo",
    grupo: 14,
    periodo: 6,
    masa: 207.2,
    tipo: "metal"
},
{
    numero: 83,
    simbolo: "Bi",
    nombre: "Bismuto",
    grupo: 15,
    periodo: 6,
    masa: 208.98,
    tipo: "metal"
},
{
    numero: 104,
    simbolo: "Rf",
    nombre: "Rutherfordio",
    grupo: 4,
    periodo: 7,
    masa: 267,
    tipo: "metal-transicion"
},
{
    numero: 105,
    simbolo: "Db",
    nombre: "Dubnio",
    grupo: 5,
    periodo: 7,
    masa: 268,
    tipo: "metal-transicion"
},
{
    numero: 106,
    simbolo: "Sg",
    nombre: "Seaborgio",
    grupo: 6,
    periodo: 7,
    masa: 269,
    tipo: "metal-transicion"
},
{
    numero: 107,
    simbolo: "Bh",
    nombre: "Bohrio",
    grupo: 7,
    periodo: 7,
    masa: 270,
    tipo: "metal-transicion"
},
{
    numero: 108,
    simbolo: "Hs",
    nombre: "Hassio",
    grupo: 8,
    periodo: 7,
    masa: 269,
    tipo: "metal-transicion"
},
{
    numero: 109,
    simbolo: "Mt",
    nombre: "Meitnerio",
    grupo: 9,
    periodo: 7,
    masa: 278,
    tipo: "metal-transicion"
},
{
    numero: 110,
    simbolo: "Ds",
    nombre: "Darmstadtio",
    grupo: 10,
    periodo: 7,
    masa: 281,
    tipo: "metal-transicion"
},
{
    numero: 111,
    simbolo: "Rg",
    nombre: "Roentgenio",
    grupo: 11,
    periodo: 7,
    masa: 282,
    tipo: "metal-transicion"
},
{
    numero: 112,
    simbolo: "Cn",
    nombre: "Copernicio",
    grupo: 12,
    periodo: 7,
    masa: 285,
    tipo: "metal"
},
{
    numero: 113,
    simbolo: "Nh",
    nombre: "Nihonio",
    grupo: 13,
    periodo: 7,
    masa: 286,
    tipo: "metal"
},
{
    numero: 114,
    simbolo: "Fl",
    nombre: "Flerovio",
    grupo: 14,
    periodo: 7,
    masa: 289,
    tipo: "metal"
},
{
    numero: 115,
    simbolo: "Mc",
    nombre: "Moscovio",
    grupo: 15,
    periodo: 7,
    masa: 290,
    tipo: "metal"
},





















































    {
        numero: 57,
        simbolo: "La",
        nombre: "Lantano",
        grupo: 4,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 58,
        simbolo: "Ce",
        nombre: "Cerio",
        grupo: 5,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 59,
        simbolo: "Pr",
        nombre: "Praseodimio",
        grupo: 6,
        periodo: 6,
        tipo: "lactanidos"
    },
        {
        numero: 60,
        simbolo: "Nd",
        nombre: "Neodimio",
        grupo: 7,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 61,
        simbolo: "Pm",
        nombre: "Prometio",
        grupo: 8,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 62,
        simbolo: "Sm",
        nombre: "Samario",
        grupo: 9,
        periodo: 6,
        tipo: "lactanidos"
    },
        {
        numero: 63,
        simbolo: "Eu",
        nombre: "Europio",
        grupo: 10,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 64,
        simbolo: "Gd",
        nombre: "Gadolinio",
        grupo: 11,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 65,
        simbolo: "Tb",
        nombre: "Terbio",
        grupo: 12,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 66,
        simbolo: "Dy",
        nombre: "Disprosio",
        grupo: 13,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 67,
        simbolo: "Ho",
        nombre: "Holmio",
        grupo: 14,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 68,
        simbolo: "Er",
        nombre: "Ersio",
        grupo: 15,
        periodo: 6,
        tipo: "lactanidos"
    },
        {
        numero: 69,
        simbolo: "Tm",
        nombre: "Tulio",
        grupo: 16,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 70,
        simbolo: "Yb",
        nombre: "Iterbio",
        grupo: 17,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 71,
        simbolo: "Lu",
        nombre: "Lutecio",
        grupo: 18,
        periodo: 6,
        tipo: "lactanidos"
    },
    {
        numero: 89,
        simbolo: "Ac",
        nombre: "Actinio",
        grupo: 4,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 90,
        simbolo: "Th",
        nombre: "Torio",
        grupo: 5,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 91,
        simbolo: "Pa",
        nombre: "Protactinio",
        grupo: 6,
        periodo: 7,
        tipo: "actinidos"
    },
        {
        numero: 92,
        simbolo: "U",
        nombre: "Uranio",
        grupo: 7,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 93,
        simbolo: "Np",
        nombre: "Neptunio",
        grupo: 8,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 94,
        simbolo: "Pu",
        nombre: "Plutonio",
        grupo: 9,
        periodo: 7,
        tipo: "actinidos"
    },
        {
        numero: 95,
        simbolo: "Am",
        nombre: "Americio",
        grupo: 10,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 96,
        simbolo: "Cm",
        nombre: "Curio",
        grupo: 11,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 97,
        simbolo: "Bk",
        nombre: "Berquelio",
        grupo: 12,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 98,
        simbolo: "Cf",
        nombre: "Californio",
        grupo: 13,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 99,
        simbolo: "Es",
        nombre: "Einstenio",
        grupo: 14,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 100,
        simbolo: "Fm",
        nombre: "Fermio",
        grupo: 15,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 101,
        simbolo: "Md",
        nombre: "Mendelevio",
        grupo: 16,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 102,
        simbolo: "No",
        nombre: "Nobelio",
        grupo: 17,
        periodo: 7,
        tipo: "actinidos"
    },
    {
        numero: 103,
        simbolo: "Lr",
        nombre: "Laurencio",
        grupo: 18,
        periodo: 7,
        tipo: "actinidos"
    }

  
 

];
