function curriedSum(numArgs){

    let numbers = [];

    return function _curriedSum(num1){
        //closes over numbers
        let sum = 0;

        numbers.push(num1)
        if (numbers.length === numArgs){

            numbers.forEach(function(el){
                sum += el;
            })
            return sum;
        }
        return _curriedSum;
    }

}

const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1)); // => 56