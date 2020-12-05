import {getDay1Challenge} from "./sum2020";

const puzzleInput: Array<number> = [1956, 1994, 457, 1654, 2003, 1902, 1741, 1494, 1597, 1129, 1146, 1589, 1989, 1093, 1881, 1288, 1848, 1371, 1508, 1035,
    1813, 1335, 1634, 1102, 1262, 1637, 1048, 1807, 1270, 1528, 1670, 1803, 1202, 1294, 1570, 1640, 1484, 1872, 1140, 1207, 1485, 1781, 1778,
    1772, 1334, 1267, 1045, 1194, 1873, 1441, 1557, 1414, 1123, 1980, 1527, 1591, 1665, 1916, 1662, 1139, 1973, 1258, 1041, 1134, 1609, 1554,
    1455, 1124, 1478, 1938, 1759, 1281, 1410, 1511, 930, 1319, 1302, 1827, 1216, 1404, 1460, 2002, 1590, 1817, 1341, 1631, 1608, 1382, 1158,
    1594, 1049, 1804, 1555, 1753, 447, 1021, 1079, 609, 1766, 1327, 1851, 1052, 1737, 1175, 1043, 1945, 1573, 1113, 1724, 1203, 1856, 1682,
    1623, 1135, 1015, 1423, 1412, 1315, 1375, 1895, 1351, 1530, 1758, 1445, 1518, 1819, 1567, 1305, 1919, 1952, 1432, 1099, 1476, 1883, 1871,
    1900, 1442, 1393, 1214, 1283, 1538, 1391, 1008, 1109, 1621, 1876, 1998, 1032, 1324, 1927, 481, 1732, 1370, 1683, 1199, 1465, 1882, 1293,
    1671, 1456, 1197, 1506, 1381, 1469, 1830, 1957, 1850, 1184, 1564, 1170, 1943, 1131, 1867, 1208, 1788, 1337, 1722, 1760, 1651, 1069, 1574,
    1959, 1770, 66, 1190, 1606, 1899, 1054, 980, 1693, 1173, 1479, 1333, 1579, 1720, 1782, 1971, 1438, 1178, 1306]

describe('firstDayChallenge - proof of concept', () => {

    it("should return the multiplication of the two entries that sum to 2020", () => {

        const inputList: Array<number> = [1721, 979, 366, 299, 675, 1456];
        const expectedOutput = 514579;
        expect(getDay1Challenge(inputList,2, 2020)).toEqual(expectedOutput)

    });

    it("should return null if the elements do not satisfies the sum", () => {

        const inputList: Array<number> = [1721, 979, 366, 300, 675, 1456];
        expect(getDay1Challenge(inputList,2, 2020)).toEqual(undefined)

    });

    it("should return the multiplication of the three entries that sum to 10", () => {

        const inputList: Array<number> = [2, 3, 5, 6];
        const expectedOutput = 30;
        expect(getDay1Challenge(inputList,3,10)).toEqual(expectedOutput)

    });
})

describe("firsDayChallenge - Challenge 1 - RESULT", () => {
    it('should return the result of the challenge with the given inputs (2 entries)', () => {
        const expectedOutput = 703131;
        expect(getDay1Challenge(puzzleInput,2,2020)).toEqual(expectedOutput)
    });
})

describe("firsDayChallenge - Challenge 2 - RESULT", () => {
    it('should return the result of the challenge with the given inputs (3 entries)', () => {
        const expectedOutput = 272423970;
        expect(getDay1Challenge(puzzleInput,3,2020)).toEqual(expectedOutput)
    });
})