function caesarCipher(str) {
    const chars = str.split("");

    for(let i = 0; i < chars.length; i++) {
        if(/[a-zA-Z]/.test(chars[i])) {
            if(chars[i] == "z") {
                chars[i] = "a";
            }
            else if(chars[i] == "Z") {
                chars[i] = "A";
            }
            else {
                chars[i] = String.fromCharCode(chars[i].charCodeAt(0) + 1);
            }
        }
        
    }
    return chars.join("");
}

module.exports = caesarCipher;