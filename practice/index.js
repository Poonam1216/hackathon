var romanToInt = function (s) {
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let result = 0;

    for (let i = 0; i < s.length; i++) {
        const currentVal = symbol[s[i]];
        const nextVal = symbol[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            result += nextVal - currentVal;
            i++;
        } else {
            result += currentVal;
        }
    }

    return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const symbol = {
        "I": 1, // 2 
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }


    const result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentVal = symbol[s[i]];
        const nextVal = symbol[s[i + 1]];

        if (nextVal && currentVal < nextVal) {
            result += nextVal - currentVal
            i++;
        } else {
            result += currentVal;
        }
    }

    return result;

};




// i want to check if there is any change on git?