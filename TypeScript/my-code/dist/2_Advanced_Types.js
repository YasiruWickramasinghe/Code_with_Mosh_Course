"use strict";
function kgToLbs(weight) {
    if (typeof weight === 'number')
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(100);
kgToLbs('10kg');
//# sourceMappingURL=2_Advanced_Types.js.map