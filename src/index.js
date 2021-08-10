module.exports = function toReadable (number) {
    let numberArr = number.toString().split('').map(Number);
    let firstExponent = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let secondExponent = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let thirdExponent = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

        /*      1-9      */
    if (numberArr.length === 1) {
        return firstExponent[number];

        /*     10-19     */
    } else if (numberArr.length === 2 && number < 20) {
        return secondExponent[number - 10];

        /*       X0      */
    } else if (numberArr.length === 2 && number >= 20 && number % 10 === 0) {
        return thirdExponent[number / 10];

        /*       XX      */
    } else if (numberArr.length === 2 && number >= 20 && number % 10 != 0) {
        return thirdExponent[numberArr[0]] + ' ' + firstExponent[numberArr[1]];

        /*      X00      */
    } else if (numberArr.length === 3 && numberArr[1] === 0 && numberArr[2] === 0) {
        return firstExponent[numberArr[0]] + ' ' + 'hundred';

        /*    X01-X09    */
    } else if (numberArr.length === 3 && numberArr[1] === 0 && numberArr[2] != 0) {
        return firstExponent[numberArr[0]] + ' ' + 'hundred' + ' ' + firstExponent[numberArr[2]];

        /*    X11-X19    */
    } else if (numberArr.length === 3 && numberArr[1] === 1 && numberArr[2] != 0) {
        return firstExponent[numberArr[0]] + ' ' + 'hundred' + ' ' + secondExponent[numberArr[2]];

        /*      XXX      */
    } else if (numberArr.length === 3 && numberArr[1] != 1 && numberArr[2] != 0 && numberArr % 10 != 0) {
        return firstExponent[numberArr[0]] + ' ' + 'hundred' + ' ' + thirdExponent[numberArr[1]] + ' ' + firstExponent[numberArr[2]];

        /*    X10-X90    */
    } else {
        return firstExponent[numberArr[0]] + ' ' + 'hundred' + ' ' + thirdExponent[numberArr[1]];
    }  
}
