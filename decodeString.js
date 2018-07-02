function decodeString(s) {
    
    for (let i = s.length -1; i > 0; i--) {
        if (s[i] === "[") {
            let searchInd = i + 1, numberInd = i - 1;
            while (isAlphaNumeric(s[searchInd])) searchInd++;
            while (isNumber(s[numberInd])) numberInd--;
            let number = parseInt(s.slice(numberInd + 1, i)),
                string = s.slice(i + 1, searchInd).repeat(number);
            s = replace(s, numberInd + 1, searchInd + 1, string);
        }
    }

    function replace(s, i, x, val) {
        let firstHalf = s.slice(0, i),
            secondHalf = s.slice(x, s.length);

        return firstHalf + val + secondHalf;
    }

    function isNumber(number) {
        return !isNaN(parseInt(number))
    }

    function isAlphaNumeric(char) {
        const pattern = /\w/;
        return char && !!char.match(pattern);
    }

    return s

}
