// Calculator module
const Calculator = (() => {
    const add = (x, y) => x + y;
    const sub = (x, y) => x - y;
    const mul = (x, y) => x * y;
    const div = (x, y) => x / y;

    return Object.assign(
        {},
        {add},
        {sub},
        {mul},
        {div},
    )
})();

module.exports = Calculator;