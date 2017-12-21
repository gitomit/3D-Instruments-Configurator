/**
 * calculates the elements price 
 * @param {type} price: the passed price
 * @param {type} indexOne: priceArray index one
 * @param {type} indexTwo:  priceArray index two
 * @return {Number|priceSum}: the sum of all prices of elements to be displayed
 */
function calculationElement(price, indexOne, indexTwo) {
    priceSet[indexOne][indexTwo] = price;
    priceSum = calculatePriceSum(priceSet);

    return priceSum;
}

/**
 * calculates the sum of all prices for the calculationElement function
 * @param {type} priceSet
 * @return {Number}
 */
function calculatePriceSum(priceSet) {
    var priceSum = 0;
    for(var i = 0, len=priceSet.length; i<len;i++) {
        priceSum += priceSet[i][1];
    }

    return priceSum;
}