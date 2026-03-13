// Elements data
const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal', electronConfig: '1s¹', melt: -259.1, boil: -252.9, discovery: 1766 },
    { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'noble-gas', electronConfig: '1s²', melt: -272.2, boil: -268.9, discovery: 1868 },
    { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'alkali-metal', electronConfig: '[He] 2s¹', melt: 180.5, boil: 1342, discovery: 1817 },
    { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'alkaline-earth', electronConfig: '[He] 2s²', melt: 1287, boil: 2470, discovery: 1798 },
    { number: 5, symbol: 'B', name: 'Boron', mass: 10.811, category: 'metalloid', electronConfig: '[He] 2s² 2p¹', melt: 2075, boil: 4000, discovery: 1808 },
    { number: 6, symbol: 'C', name: 'Carbon', mass: 12.011, category: 'nonmetal', electronConfig: '[He] 2s² 2p²', melt: 3550, boil: 4027, discovery: 'Ancient' },
    { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, category: 'nonmetal', electronConfig: '[He] 2s² 2p³', melt: -210, boil: -195.8, discovery: 1772 },
    { number: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, category: 'nonmetal', electronConfig: '[He] 2s² 2p⁴', melt: -218.3, boil: -182.9, discovery: 1774 },
    { number: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, category: 'halogen', electronConfig: '[He] 2s² 2p⁵', melt: -219.6, boil: -188.1, discovery: 1886 },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, category: 'noble-gas', electronConfig: '[He] 2s² 2p⁶', melt: -248.6, boil: -246.1, discovery: 1898 },
    { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, category: 'alkali-metal', electronConfig: '[Ne] 3s¹', melt: 97.7, boil: 883, discovery: 1807 },
    { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, category: 'alkaline-earth', electronConfig: '[Ne] 3s²', melt: 650, boil: 1090, discovery: 1755 },
    { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.982, category: 'post-transition', electronConfig: '[Ne] 3s² 3p¹', melt: 660.3, boil: 2519, discovery: 1825 },
    { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.086, category: 'metalloid', electronConfig: '[Ne] 3s² 3p²', melt: 1414, boil: 3265, discovery: 1824 },
    { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, category: 'nonmetal', electronConfig: '[Ne] 3s² 3p³', melt: 44.2, boil: 280.5, discovery: 1669 },
    { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.065, category: 'nonmetal', electronConfig: '[Ne] 3s² 3p⁴', melt: 115.2, boil: 444.6, discovery: 'Ancient' },
    { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.453, category: 'halogen', electronConfig: '[Ne] 3s² 3p⁵', melt: -101.5, boil: -34.0, discovery: 1774 },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, category: 'noble-gas', electronConfig: '[Ne] 3s² 3p⁶', melt: -189.3, boil: -185.8, discovery: 1894 },
    { number: 19, symbol: 'K', name: 'Potassium', mass: 39.098, category: 'alkali-metal', electronConfig: '[Ar] 4s¹', melt: 63.5, boil: 759, discovery: 1807 },
    { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, category: 'alkaline-earth', electronConfig: '[Ar] 4s²', melt: 842, boil: 1484, discovery: 1808 },
    { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.956, category: 'transition-metal', electronConfig: '[Ar] 3d¹ 4s²', melt: 1541, boil: 2836, discovery: 1879 },
    { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.867, category: 'transition-metal', electronConfig: '[Ar] 3d² 4s²', melt: 1668, boil: 3287, discovery: 1791 },
    { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.942, category: 'transition-metal', electronConfig: '[Ar] 3d³ 4s²', melt: 1910, boil: 3407, discovery: 1801 },
    { number: 24, symbol: 'Cr', name: 'Chromium', mass: 51.996, category: 'transition-metal', electronConfig: '[Ar] 3d⁵ 4s¹', melt: 1907, boil: 2671, discovery: 1797 },
    { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.938, category: 'transition-metal', electronConfig: '[Ar] 3d⁵ 4s²', melt: 1246, boil: 2061, discovery: 1774 },
    { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, category: 'transition-metal', electronConfig: '[Ar] 3d⁶ 4s²', melt: 1538, boil: 2862, discovery: 'Ancient' },
    { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.933, category: 'transition-metal', electronConfig: '[Ar] 3d⁷ 4s²', melt: 1495, boil: 2927, discovery: 1735 },
    { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.693, category: 'transition-metal', electronConfig: '[Ar] 3d⁸ 4s²', melt: 1455, boil: 2913, discovery: 1751 },
    { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, category: 'transition-metal', electronConfig: '[Ar] 3d¹⁰ 4s¹', melt: 1084.6, boil: 2562, discovery: 'Ancient' },
    { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.380, category: 'transition-metal', electronConfig: '[Ar] 3d¹⁰ 4s²', melt: 419.5, boil: 907, discovery: 1746 },
    { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.723, category: 'post-transition', electronConfig: '[Ar] 3d¹⁰ 4s² 4p¹', melt: 29.8, boil: 2204, discovery: 1875 },
    { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.640, category: 'metalloid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p²', melt: 938.3, boil: 2833, discovery: 1886 },
    { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.922, category: 'metalloid', electronConfig: '[Ar] 3d¹⁰ 4s² 4p³', melt: 817, boil: 614, discovery: 1250 },
    { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.960, category: 'nonmetal', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁴', melt: 221, boil: 685, discovery: 1817 },
    { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.904, category: 'halogen', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁵', melt: -7.2, boil: 58.8, discovery: 1826 },
    { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.798, category: 'noble-gas', electronConfig: '[Ar] 3d¹⁰ 4s² 4p⁶', melt: -157.4, boil: -153.2, discovery: 1898 },
    { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.468, category: 'alkali-metal', electronConfig: '[Kr] 5s¹', melt: 39.3, boil: 688, discovery: 1861 },
    { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.620, category: 'alkaline-earth', electronConfig: '[Kr] 5s²', melt: 777, boil: 1382, discovery: 1790 },
    { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.906, category: 'transition-metal', electronConfig: '[Kr] 4d¹ 5s²', melt: 1526, boil: 3345, discovery: 1794 },
    { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.224, category: 'transition-metal', electronConfig: '[Kr] 4d² 5s²', melt: 1855, boil: 4409, discovery: 1789 },
    { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.906, category: 'transition-metal', electronConfig: '[Kr] 4d⁴ 5s¹', melt: 2477, boil: 4744, discovery: 1801 },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.960, category: 'transition-metal', electronConfig: '[Kr] 4d⁵ 5s¹', melt: 2623, boil: 4639, discovery: 1778 },
    { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'transition-metal', electronConfig: '[Kr] 4d⁵ 5s²', melt: 2157, boil: 4265, discovery: 1937 },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.070, category: 'transition-metal', electronConfig: '[Kr] 4d⁷ 5s¹', melt: 2334, boil: 4150, discovery: 1844 },
    { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.906, category: 'transition-metal', electronConfig: '[Kr] 4d⁸ 5s¹', melt: 1964, boil: 3695, discovery: 1803 },
    { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.420, category: 'transition-metal', electronConfig: '[Kr] 4d¹⁰', melt: 1554.9, boil: 2963, discovery: 1803 },
    { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.868, category: 'transition-metal', electronConfig: '[Kr] 4d¹⁰ 5s¹', melt: 961.8, boil: 2162, discovery: 'Ancient' },
    { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.411, category: 'transition-metal', electronConfig: '[Kr] 4d¹⁰ 5s²', melt: 321.1, boil: 767, discovery: 1817 },
    { number: 49, symbol: 'In', name: 'Indium', mass: 114.818, category: 'post-transition', electronConfig: '[Kr] 4d¹⁰ 5s² 5p¹', melt: 156.6, boil: 2072, discovery: 1863 },
    { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.710, category: 'post-transition', electronConfig: '[Kr] 4d¹⁰ 5s² 5p²', melt: 231.9, boil: 2602, discovery: 'Ancient' },
    { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.760, category: 'metalloid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p³', melt: 630.6, boil: 1587, discovery: 'Ancient' },
    { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.600, category: 'metalloid', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁴', melt: 449.5, boil: 988, discovery: 1783 },
    { number: 53, symbol: 'I', name: 'Iodine', mass: 126.904, category: 'halogen', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁵', melt: 113.7, boil: 184.3, discovery: 1811 },
    { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.293, category: 'noble-gas', electronConfig: '[Kr] 4d¹⁰ 5s² 5p⁶', melt: -111.8, boil: -108.0, discovery: 1898 },
    { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.905, category: 'alkali-metal', electronConfig: '[Xe] 6s¹', melt: 28.4, boil: 671, discovery: 1860 },
    { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.327, category: 'alkaline-earth', electronConfig: '[Xe] 6s²', melt: 727, boil: 1845, discovery: 1808 },
    { number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.905, category: 'lanthanide', electronConfig: '[Xe] 5d¹ 6s²', melt: 920, boil: 3464, discovery: 1839 },
    { number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.116, category: 'lanthanide', electronConfig: '[Xe] 4f¹ 5d¹ 6s²', melt: 798, boil: 3443, discovery: 1803 },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.908, category: 'lanthanide', electronConfig: '[Xe] 4f³ 6s²', melt: 931, boil: 3520, discovery: 1885 },
    { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.242, category: 'lanthanide', electronConfig: '[Xe] 4f⁴ 6s²', melt: 1021, boil: 3074, discovery: 1885 },
    { number: 61, symbol: 'Pm', name: 'Promethium', mass: 145, category: 'lanthanide', electronConfig: '[Xe] 4f⁵ 6s²', melt: 1042, boil: 3000, discovery: 1945 },
    { number: 62, symbol: 'Sm', name: 'Samarium', mass: 150.360, category: 'lanthanide', electronConfig: '[Xe] 4f⁶ 6s²', melt: 1074, boil: 1794, discovery: 1879 },
    { number: 63, symbol: 'Eu', name: 'Europium', mass: 151.964, category: 'lanthanide', electronConfig: '[Xe] 4f⁷ 6s²', melt: 822, boil: 1529, discovery: 1901 },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.250, category: 'lanthanide', electronConfig: '[Xe] 4f⁷ 5d¹ 6s²', melt: 1313, boil: 3273, discovery: 1880 },
    { number: 65, symbol: 'Tb', name: 'Terbium', mass: 158.925, category: 'lanthanide', electronConfig: '[Xe] 4f⁹ 6s²', melt: 1356, boil: 3230, discovery: 1843 },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.500, category: 'lanthanide', electronConfig: '[Xe] 4f¹⁰ 6s²', melt: 1412, boil: 2567, discovery: 1886 },
    { number: 67, symbol: 'Ho', name: 'Holmium', mass: 164.930, category: 'lanthanide', electronConfig: '[Xe] 4f¹¹ 6s²', melt: 1474, boil: 2700, discovery: 1878 },
    { number: 68, symbol: 'Er', name: 'Erbium', mass: 167.259, category: 'lanthanide', electronConfig: '[Xe] 4f¹² 6s²', melt: 1529, boil: 2868, discovery: 1843 },
    { number: 69, symbol: 'Tm', name: 'Thulium', mass: 168.934, category: 'lanthanide', electronConfig: '[Xe] 4f¹³ 6s²', melt: 1545, boil: 1950, discovery: 1879 },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.054, category: 'lanthanide', electronConfig: '[Xe] 4f¹⁴ 6s²', melt: 824, boil: 1196, discovery: 1878 },
    { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 174.967, category: 'lanthanide', electronConfig: '[Xe] 4f¹⁴ 5d¹ 6s²', melt: 1663, boil: 3402, discovery: 1907 },
    { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.490, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d² 6s²', melt: 2233, boil: 4603, discovery: 1923 },
    { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.948, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d³ 6s²', melt: 3017, boil: 5458, discovery: 1802 },
    { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.840, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d⁴ 6s²', melt: 3422, boil: 5555, discovery: 1783 },
    { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.207, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d⁵ 6s²', melt: 3186, boil: 5596, discovery: 1925 },
    { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.230, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d⁶ 6s²', melt: 3033, boil: 5012, discovery: 1803 },
    { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.217, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d⁷ 6s²', melt: 2446, boil: 4428, discovery: 1803 },
    { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.084, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d⁹ 6s¹', melt: 1768.3, boil: 3825, discovery: 1735 },
    { number: 79, symbol: 'Au', name: 'Gold', mass: 196.967, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹', melt: 1064.2, boil: 2856, discovery: 'Ancient' },
    { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.590, category: 'transition-metal', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s²', melt: -38.8, boil: 356.7, discovery: 'Ancient' },
    { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.383, category: 'post-transition', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹', melt: 304, boil: 1473, discovery: 1861 },
    { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.200, category: 'post-transition', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²', melt: 327.5, boil: 1749, discovery: 'Ancient' },
    { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 208.980, category: 'post-transition', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³', melt: 271.5, boil: 1564, discovery: 1753 },
    { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'metalloid', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴', melt: 254, boil: 962, discovery: 1898 },
    { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'halogen', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵', melt: 302, boil: 337, discovery: 1940 },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'noble-gas', electronConfig: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶', melt: -71, boil: -61.7, discovery: 1900 },
    { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'alkali-metal', electronConfig: '[Rn] 7s¹', melt: 27, boil: 677, discovery: 1939 },
    { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'alkaline-earth', electronConfig: '[Rn] 7s²', melt: 696, boil: 1737, discovery: 1898 },
    { number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, category: 'actinide', electronConfig: '[Rn] 6d¹ 7s²', melt: 1051, boil: 3198, discovery: 1899 },
    { number: 90, symbol: 'Th', name: 'Thorium', mass: 232.038, category: 'actinide', electronConfig: '[Rn] 6d² 7s²', melt: 1750, boil: 4820, discovery: 1829 },
    { number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.036, category: 'actinide', electronConfig: '[Rn] 5f² 6d¹ 7s²', melt: 1572, boil: 4000, discovery: 1913 },
    { number: 92, symbol: 'U', name: 'Uranium', mass: 238.029, category: 'actinide', electronConfig: '[Rn] 5f³ 6d¹ 7s²', melt: 1135, boil: 4131, discovery: 1789 },
    { number: 93, symbol: 'Np', name: 'Neptunium', mass: 237, category: 'actinide', electronConfig: '[Rn] 5f⁴ 6d¹ 7s²', melt: 644, boil: 3902, discovery: 1940 },
    { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, category: 'actinide', electronConfig: '[Rn] 5f⁶ 7s²', melt: 640, boil: 3228, discovery: 1940 },
    { number: 95, symbol: 'Am', name: 'Americium', mass: 243, category: 'actinide', electronConfig: '[Rn] 5f⁷ 7s²', melt: 1176, boil: 2011, discovery: 1944 },
    { number: 96, symbol: 'Cm', name: 'Curium', mass: 247, category: 'actinide', electronConfig: '[Rn] 5f⁷ 6d¹ 7s²', melt: 1345, boil: 3110, discovery: 1944 },
    { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, category: 'actinide', electronConfig: '[Rn] 5f⁹ 7s²', melt: 1050, boil: 2627, discovery: 1949 },
    { number: 98, symbol: 'Cf', name: 'Californium', mass: 251, category: 'actinide', electronConfig: '[Rn] 5f¹⁰ 7s²', melt: 900, boil: 1470, discovery: 1950 },
    { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, category: 'actinide', electronConfig: '[Rn] 5f¹¹ 7s²', melt: 860, boil: 1130, discovery: 1952 },
    { number: 100, symbol: 'Fm', name: 'Fermium', mass: 257, category: 'actinide', electronConfig: '[Rn] 5f¹² 7s²', melt: 1527, boil: null, discovery: 1952 },
    { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, category: 'actinide', electronConfig: '[Rn] 5f¹³ 7s²', melt: 827, boil: null, discovery: 1955 },
    { number: 102, symbol: 'No', name: 'Nobelium', mass: 259, category: 'actinide', electronConfig: '[Rn] 5f¹⁴ 7s²', melt: 827, boil: null, discovery: 1958 },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: 262, category: 'actinide', electronConfig: '[Rn] 5f¹⁴ 7s² 7p¹', melt: 1627, boil: null, discovery: 1961 },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d² 7s²', melt: null, boil: null, discovery: 1964 },
    { number: 105, symbol: 'Db', name: 'Dubnium', mass: 268, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d³ 7s²', melt: null, boil: null, discovery: 1967 },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 271, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d⁴ 7s²', melt: null, boil: null, discovery: 1974 },
    { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 272, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d⁵ 7s²', melt: null, boil: null, discovery: 1981 },
    { number: 108, symbol: 'Hs', name: 'Hassium', mass: 270, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d⁶ 7s²', melt: null, boil: null, discovery: 1984 },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 276, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d⁷ 7s²', melt: null, boil: null, discovery: 1982 },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d⁹ 7s¹', melt: null, boil: null, discovery: 1994 },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 280, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s¹', melt: null, boil: null, discovery: 1994 },
    { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'transition-metal', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s²', melt: null, boil: null, discovery: 1996 },
    { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 284, category: 'post-transition', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹', melt: null, boil: null, discovery: 2004 },
    { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'post-transition', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²', melt: null, boil: null, discovery: 1999 },
    { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 288, category: 'post-transition', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³', melt: null, boil: null, discovery: 2003 },
    { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'post-transition', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴', melt: null, boil: null, discovery: 2000 },
    { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'halogen', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵', melt: null, boil: null, discovery: 2010 },
    { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'noble-gas', electronConfig: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶', melt: null, boil: null, discovery: 2002 }
];

const grid = [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
    [3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 6, 7, 8, 9, 10],
    [11, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    [37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54],
    [55, 56, 0, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86],
    [87, 88, 0, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 0],
    [0, 0, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 0]
];

// DOM Elements
const periodicTable = document.getElementById('periodic-table');
const infoPanel = document.getElementById('info-panel');
const elementName = document.getElementById('element-name');
const infoGrid = document.getElementById('info-grid');
const shareButton = document.getElementById('shareButton');
const connectionStatus = document.getElementById('connectionStatus');

// Create the periodic table
function createPeriodicTable() {
    grid.forEach(row => {
        row.forEach(num => {
            const cell = document.createElement('div');
            
            if (num === 0) {
                cell.className = 'element empty';
            } else {
                const element = elements.find(el => el.number === num);
                cell.className = `element ${element.category}`;
                cell.innerHTML = `
                    <div class="atomic-number">${element.number}</div>
                    <div class="symbol">${element.symbol}</div>
                    <div class="name">${element.name}</div>
                    <div class="mass">${element.mass}</div>
                `;
                
                cell.addEventListener('click', () => showElementInfo(element));
            }
            
            periodicTable.appendChild(cell);
        });
    });
}

function showElementInfo(element) {
    elementName.textContent = `${element.name} (${element.symbol})`;
    
    infoGrid.innerHTML = `
        <div class="info-item">
            <h3>Atomic Number</h3>
            <p>${element.number}</p>
        </div>
        <div class="info-item">
            <h3>Atomic Mass</h3>
            <p>${element.mass}</p>
        </div>
        <div class="info-item">
            <h3>Category</h3>
            <p>${element.category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}</p>
        </div>
        <div class="info-item">
            <h3>Electron Configuration</h3>
            <p>${element.electronConfig}</p>
        </div>
        <div class="info-item">
            <h3>Melting Point</h3>
            <p>${element.melt !== null ? element.melt + '°C' : 'Unknown'}</p>
        </div>
        <div class="info-item">
            <h3>Boiling Point</h3>
            <p>${element.boil !== null ? element.boil + '°C' : 'Unknown'}</p>
        </div>
        <div class="info-item">
            <h3>Year Discovered</h3>
            <p>${element.discovery}</p>
        </div>
    `;
    
    infoPanel.classList.add('active');
    infoPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Share functionality
shareButton.addEventListener('click', async () => {
    if (navigator.share) {
        try {
            await navigator.share({
                title: 'Interactive Periodic Table',
                text: 'Check out this interactive periodic table!',
                url: window.location.href
            });
        } catch (err) {
            console.log('Share cancelled or failed:', err);
        }
    } else {
        // Fallback to copying URL
        try {
            await navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        } catch (err) {
            console.log('Could not copy link:', err);
        }
    }
});

// PWA Installation
let deferredPrompt;
const installPrompt = document.getElementById('installPrompt');
const installButton = document.getElementById('installButton');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    installPrompt.classList.add('show');
});

installButton.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        console.log(`User response: ${outcome}`);
        deferredPrompt = null;
        installPrompt.classList.remove('show');
    }
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js')
            .then(registration => {
                console.log('SW registered:', registration);
            })
            .catch(err => {
                console.log('SW registration failed:', err);
            });
    });
}

// Online/Offline Status
function updateOnlineStatus() {
    if (navigator.onLine) {
        connectionStatus.textContent = 'Online';
        connectionStatus.className = 'online-indicator';
    } else {
        connectionStatus.textContent = 'Offline';
        connectionStatus.className = 'offline-indicator show';
    }
}

window.addEventListener('online', updateOnlineStatus);
window.addEventListener('offline', updateOnlineStatus);

// Initialize
createPeriodicTable();
updateOnlineStatus();
