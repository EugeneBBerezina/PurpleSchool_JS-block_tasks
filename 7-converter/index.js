const rateUSD = 95;
const rateEUR = 102;

function calculateTargetCurrency(summMoney, startingCurrency, targetCurrency) {

    if (startingCurrency == "RUB") {
        if (targetCurrency == "USD") {
            return summMoney / rateUSD;
        } else if (targetCurrency == "EUR") {
            return summMoney / rateEUR;
        } else {
            return null;
        }
    } else {
        return null;
    }
}

console.log(calculateTargetCurrency(1000, "RUB", "USD"));
console.log(calculateTargetCurrency(1000, "RUB", "EUR"));
console.log(calculateTargetCurrency(1000, "RUB", "JPY"));




