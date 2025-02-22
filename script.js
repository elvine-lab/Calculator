function performOperation (operation) {
    let num1 = parseFloat(document.getElementById("num1").value)
    let num2 = parseFloat(document.getElementById("num2").value)
    let factNum = parseInt(document.getElementById("factNum").value)

    let result = ""

    switch (operation){
        case `add`:
            result = num1 + num2
            break
        
        case `subtract`:
            result = num1 - num2
            break

        case `multiply`:
            result = num1 * num2
            break

        case `division`:
            result = num1 / num2
            break

        case `power`:
            result = Math.pow(num1, num2)
            break

        case `factorial`:
            result = factorial(factNum)
            break
        default:
            result = "Invalid Operation"
    }
    document.getElementById("result").textContent = result
}

function factorial (n) {
    if (n === 0 || n === 1) return 1
    let fact = 1
    for (let i = 2; i <= n; i++){
        fact *= i
    }
    return fact
}