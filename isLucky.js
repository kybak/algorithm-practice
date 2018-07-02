function isLucky(n) {
    let parsedString = [], firstHalf = 0, secondHalf = 0;
    const numberAsString = n.toString();
    for (let i = 0, l = numberAsString.length; i < l; i++ ) {
        parsedString.push(+numberAsString.charAt(i));
        if (i < numberAsString.length / 2) {
            firstHalf += parseInt(numberAsString.charAt(i));
        } else {
            secondHalf += parseInt(numberAsString.charAt(i));
        }
    }
    
    return firstHalf === secondHalf
}

