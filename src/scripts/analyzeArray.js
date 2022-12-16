function analyzeArray(arr) {
    const obj = {
        average: arr.reduce((prev, curr) => prev + curr, 0) / arr.length,
        min: min(arr),
        max: max(arr),
        length: arr.length,
    };

    return obj;
}

function max(arr) {
    let m = arr[0];
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] > m) {
            m = arr[i];
        }
    }
    return m;
}

function min(arr) {
    let m = arr[0];
    for(let i = 0; i < arr.length; ++i) {
        if(arr[i] < m) {
            m = arr[i];
        }
    }
    return m;
}

module.exports = analyzeArray;