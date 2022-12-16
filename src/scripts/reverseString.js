function reverseString(string) {
    let reStr = "";
    for(let i = string.length - 1; i >= 0; --i) {
        reStr += string[i];
    }
    console.log(reStr);
    return reStr;
}

module.exports = reverseString;