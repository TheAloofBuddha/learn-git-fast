// chr = "gip";
// chr_split = chr.split("");
// chr_rev = chr_split.reverse();
// output = chr_rev.join("");
// console.log(output);

// let chrono = prompt("Enter a word");
// chrono_split = chrono.split("");
// chrono_reverse = chrono_split.reverse();
// chrono_output = chrono_reverse.join("");
// alert(chrono_output);

//Number 2
// let c = [1, 2, 3];
// c_rev = c.reverse();
// console.log(c);

// let numArray1 = [];
// let num = numArray1.concat(prompt("Enter numbers seperated by comma"));
// num_split = num.split("");
// alert(num_split);

// num_split = num.split(",");
// console.log(num_split);
// num_split2 = num_split.split("");
// console.log(num_split2);
// // num.remove = num_reverse = num_split.reverse(num_concat);
// output2 = num_reverse;
// console.log(output2);

// Number 3

// lh = [1, 3, 5, 9, 0, 4, 5, 6];
// lh_highest_lowest = lh.sort();
// l0 = lh_highest_lowest.slice(0, 1); //lowest number
// lhigh = lh_highest_lowest.reverse();
// l1 = lh_highest_lowest.slice(0, 1);
// alert(l0);
// alert(l1);

// lgg = [];
// low_high = parseInt(prompt("Enter numbers separated by comma"));
// itis = lgg.concat(low_high);
// console.log(itis);
// lh_split = low_high.split(" ");
// lh_chrono = lh_split.sort();
// alert(lh_chrono);
// let a = [1, 2, 3, 4];
// a_rev = a.reverse();
// console.log(a_rev);

// a = [1,2,3,4]
// a_map = a.map((i) => )

//Correction
//_____________________________________________________________________
//Number 1

// let word = prompt("enter a word");
// if (word) {
//   let new_word = word.split("").reverse().join("");
//   alert(`the reversed word is ${new_word}`);
// } else {
//   alert("No word entered");
// }

//Number2

// let userNumber1 = prompt("Enter first number");
// let userNumber2 = prompt("Enter second number");
// let userNumber3 = prompt("Enter third number");

// let myArray = [];
// myArray.push(userNumber1, userNumber2, userNumber3);
// console.log(myArray); //log the value of the array
// myArray.reverse();
// console.log(myArray);

//Number 3

// let numberMinMax = [27, 98, 12, 2, 4, 5, 7, 91, 389, 19, 199];
// let min = Math.min(...numberMinMax); //... is a spread operator, it takes everything in the array and then checks for the function that called it. e.g. Math.min or Math.max
// let max = Math.max(...numberMinMax);
// console.log(min);
// console.log(max);

// let fruits = [
//   "Pineapple",
//   "PawPaw",
//   "Orange",
//   "Mango",
//   "Grape",
//   "Apple",
//   "Banana",
// ];

// let userFruit = prompt("Enter your desired fruit");
// let n = userFruit.toLowerCase();
// let a = fruits.map((i) => i.toLowerCase());

// if (a.includes(n)) {
//   console.log("We have " + n);
// } else {
//   console.log("We don't have " + n);
// }

// let a = range(1, 100);
// console.log(a);

//Assigment One

function range(start, end) {
  let values = [];
  for (let n = start; n <= end; n++) {
    while (n % 2 == 1) {
      values.push(n); //first push
      values.push(n); //second push to make it read as 1,1,2,2,3,3 in the final result
      break;
    }
  }
  return values;
}

odd = range(1, 100);
console.log(odd);

//Fizz-Buzz
function fizzbuzz(start, end) {
  let values = [];
  for (let i = start; i <= end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      values.push("FizzBuzz");
    } else if (i % 3 == 0) {
      values.push("Fizz");
    } else if (i % 5 == 0) {
      values.push("Buzz");
    } else {
      values.push(i);
    }
  }
  return values;
}

let fb = fizzbuzz(1, 100);
console.log(fb);
