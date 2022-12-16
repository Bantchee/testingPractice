const analyzeArray = require('./analyzeArray');

test("[1,8,3,4,2,6] -> {average: 4; min: 1, max: 8, length: 6", () => {
    const obj = analyzeArray([1,8,3,4,2,6]);
    expect(obj.average).toBe(4);
    expect(obj.min).toBe(1);
    expect(obj.max).toBe(8);
    expect(obj.length).toBe(6);
})