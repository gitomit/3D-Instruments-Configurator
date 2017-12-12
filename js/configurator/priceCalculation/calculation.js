/**
 * calculates body price
 * @param price
 * @returns {*}
 */
function calculationBody(price) {
    priceSet[0][1] = price;
    priceSum = calculatePriceSum(priceSet);

    return priceSum;
}

/**
 * dto for the frontwood body price
 * @param price
 */
function calculationFrontWood(price) {
    priceSet[2][1] = price;
    priceSum = calculatePriceSum(priceSet);

    return priceSum;
}

/**
 * dto for the sidewood body price
 * @param price
 */
function calculationSideWood(price) {
    priceSet[3][1] = price;
    priceSum = calculatePriceSum(priceSet);

    return priceSum;
}

/**
 * dto for the neckwood price
 * @param price
 */
function calculationNeckWood(price) {
    priceSet[4][1] = price;
    priceSum = calculatePriceSum(priceSet);

    return priceSum;
}

/**
 * dto for the mechanics price
 * @param price
 */
function calculationMechanics(price) {
    priceSet[5][1] = price;
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