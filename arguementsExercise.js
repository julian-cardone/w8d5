// function sum() {
//     let sum = 0;

//     for(let i = 0; i < arguments.length; i++) {
//         sum += arguments[i]
//     }

//     return sum
// }


function sum(...args) {
    let sum = 0;

    for(let i = 0; i < args.length; i++) {
        sum += args[i]
    }

    return sum
}




// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);

//.call and .apply

// Function.prototype.myBind = function(context) {
//     debugger
//     let arr = Array.from(arguments);
//     let realArray = arr.slice(1);
//     let that = this;
//     // debugger

//     return function() {
//         let obj = Array.from(arguments);
//         let finalArray = realArray.concat(obj);
//             // debugger

//         return that.apply(context, finalArray);
//     }
// }

Function.prototype.myBind = function(context, ...args) {
    // debugger
    let that = this;

    return function(...arr) {
      // debugger
        let finalArray = args.concat(arr);

        return that.apply(context, finalArray);
    }
}


class Cat {
    constructor(name) {
      this.name = name;
    }

    says(sound, person) {
      console.log(`${this.name} says ${sound} to ${person}!`);
      return true;
    }
  }

  class Dog {
    constructor(name) {
      this.name = name;
    }
  }

  const markov = new Cat("Markov");
  const pavlov = new Dog("Pavlov");

  markov.says("meow", "Ned");
  // Markov says meow to Ned!
  // true

  // bind time args are "meow" and "Kush", no call time args
  markov.says.myBind(pavlov, "meow", "Kush")();
  // Pavlov says meow to Kush!
  // true

  // no bind time args (other than context), call time args are "meow" and "a tree"
  markov.says.myBind(pavlov)("meow", "a tree");
  // Pavlov says meow to a tree!
  // true

  // bind time arg is "meow", call time arg is "Markov"
  markov.says.myBind(pavlov, "meow")("Markov");
  // Pavlov says meow to Markov!
  // true

  // no bind time args (other than context), call time args are "meow" and "me"
  const notMarkovSays = markov.says.myBind(pavlov);
  notMarkovSays("meow", "me");
  // Pavlov says meow to me!
  // true
