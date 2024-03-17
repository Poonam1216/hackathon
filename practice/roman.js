function romanToInt(s) {
    const symbol = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        const currentValue = symbol[s[i]];
        const nextValue = symbol[s[i + 1]];

        if (currentValue < nextValue) {
            result += nextValue - currentValue;
            i++;
        } else {
            result += currentValue;
        }
    }

    return result;
}

let num = romanToInt(44);

console.log(num)



// console.log(romanToInt(54));



// if you want to add the commit

// yu should do the  following:

// 1. git status
// 2. git add .
// 3. git commit -m "commit"
// 4. git push origin <your-branch-name>