/**
 * calculates element price
 * @param price
 * @returns {*}
 */
function calculationElement(price, indexOne, indexTwo) {
    priceSet[indexOne][indexTwo] = price;
    priceSum = calculatePriceSum(priceSet);

    return priceSum;
}

/**
 * calculates price sum
 * @param priceSet
 * @returns {*}
 */
function calculatePriceSum(priceSet) {
    var priceSum = 0;
    for(var i = 0, len=priceSet.length; i<len;i++) {
        priceSum += priceSet[i][1];
    }

    return priceSum;
}