function operation(x, y, op) {
    let result = 0;

    if (op == "+") {
        result = x + y;
    } else if (op == "-") {
        result = x - y;
    } else if (op == "*") {
        result = x * y;
    } else if(op == "/") {
        result = x / y;
    }

    return result;
}

console.log(operation(10, 20, "*"));



// return eval(x+op+y)
