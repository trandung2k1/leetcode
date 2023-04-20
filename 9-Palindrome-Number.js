/**
 * @param {number} x
 * @return {boolean}
 */

//! O(n)
var isPalindrome = function (x) {
    const copy = x;
    let sdn = 0;
    while (x > 0) {
        const du = Math.floor(x % 10);
        sdn = sdn * 10 + du;
        x = Math.floor(x / 10);
    }
    if (sdn === copy) {
        return true;
    }
    return false;
};
console.log(isPalindrome(-121));
