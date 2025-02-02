// function getShippingCost(country) {
//     switch (country) {
//         case "Australia":
//             return "Shipping to Australia will cost 170 credits";
//             break;
//         case "China":
//             return "Shipping to China will cost 100 credits";
//             break;
//         case "Chile":
//             return "Shipping to Chile will cost 250 credits";
//             break;
//         case "Jamaica":
//             return "Shipping to Jamaica will cost 120 credits";
//             break;
//         default:
//             return "Sorry, there is no delivery to your country";
//     }
// }

// console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
// console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
// console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
// console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
// console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
// console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"
// const planets = ["Earth", "Mars", "Venus"];
// const lastElementIndex = planets.length - 1;
// console.log(planets[lastElementIndex]); // "Venus"



// const array = ["apple", "peach", "pear", "banana"];
// const lastElementIndex1 = array.length - 1;
// console.log(array[1]);
// const longElements = console.log(array.length);


// function getLastElementMeta(array) {
//     const lastElementIndex1 = array.length - 1;
//     const lastArray = array[lastElementIndex1];
//     const firstArray = array[0];

//     console.log(`[${firstArray} ${lastArray}]`);

// }

// getLastElementMeta(["apple", "peach", "pear", "banana"]); // повертає [3, "banana"]
// getLastElementMeta(["apple", "peach", "pear"]); // повертає [2, "pear"]
// getLastElementMeta(["apple", "peach"]); // повертає [1, "peach"]
// getLastElementMeta(["apple"]); // повертає [0, "apple"]

// function getLength(array) {
//   console.log(array.join("").length);
// }

// getLength(["Mango", "hurries", "to", "the", "train"]);

// function calculateEngravingPrice(message, pricePerWord) {
//     const textLong = message.trim().split(" ").length;
//     console.log(textLong * pricePerWord);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10); //повертає 50
// calculateEngravingPrice("JavaScript is in my blood", 20); //повертає 100

// function getSlice(array, value) {
//   const lastIndex = array.indexOf(value)+1;
//   if (array.indexOf(value)) {
//     console.log(array.slice(0, lastIndex));
//   }
//   else if (array.indexOf(value) === 0) {
//       console.log(array.slice(0, lastIndex));
//     }
//   else {
//     console.log([]);
//   }
// }
// getSlice(["Mango", "Poly", "Ajax"], "Jacob"); // повертає `[]`
// getSlice(["Mango", "Poly", "Ajax"], "Poly"); //повертає `["Mango", "Poly"]
// getSlice(["Mango", "Poly", "Ajax"], "Ajax"); // повертає `["Mango", "Poly", "Ajax"
// getSlice(["Mango", "Poly", "Ajax"], "Mango"); // повертає `["Mango"]

// function createArrayOfNumbers(min, max) {
//     const arrayResult = [];
//   for (let i = min; i <= max; i++) {
//       arrayResult.push(`${i}`);
//     }
//     console.log(arrayResult);
// }
// createArrayOfNumbers(29, 34); // повертає [29, 30, 31, 32, 33, 34]
// createArrayOfNumbers(14, 17); // повертає `[14, 15, 16, 17]

// const planets = ["Earth", "Mars", "Venus"];

// for (let i = 0; i < planets.length; i += 1) {
//   console.log(planets[i]);
// }

// function calculateTotalPrice(order) {
//   let result = 0;
//   for (let i = 0; i < order.length; i += 1) {
//    result += order[i];
//   }
//   console.log(result);
// }

// calculateTotalPrice([12, 85, 37, 4]);  // повертає `138`

// function getEvenNumbers(start, end) {
//   const result = [];
//   for (let i = start; i <= end; i += 1) {
//     if (i % 2 === 0) {
//      result.push(`${i}`);
//     }
//     else {
//         [];
//    }
// }
// console.log(result);
// }
// getEvenNumbers(3, 11); // повертає [4, 6, 8, 10]
// getEvenNumbers(7, 7); // повертає []
// getEvenNumbers(8, 8); // повертає `[8]`

// function checkStorage(storage, item) {
//   if (storage.includes(item.toLowerCase())) {
//     console.log(`${item.toLowerCase()} is available to order!`);
//   }
//   else {
//     console.log("Sorry! We are out of stock!");
//   }
// }

// checkStorage(["apple", "plum", "pear"], "plum"); // повертає "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "pLuM"); // повертає "plum is available to order!"
// checkStorage(["apple", "plum", "pear"], "carrot"); // повертає "Sorry! We are out of stock!"


// function getCommonElements(array1, array2) {
//   const newArray = [];
//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//       newArray.push(`${array1[i]}`);
//     }
//   }
//   console.log(newArray);
// }

// getCommonElements([1, 2, 3], [2, 1, 17, 19]); // повертає `[1, 2]`
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]); // повертає `[10, 30, 40]

// function calculateTotalPrice(order) {
//   let result = 0;
//   for (const resultArray of order) {
//    result += resultArray;
// }
// console.log(result);
// }

// calculateTotalPrice([12, 85, 37, 4]);
// calculateTotalPrice([164, 48, 291]);
// calculateTotalPrice([]);

// function slugify(title) {
//     const slug = title.toLowerCase().split(" ").join("-");
//     return slug;
// }

// console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"



// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//        return newArray.slice(0, maxLength);
//     }
//     return newArray;
// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


// function filterArray(numbers, value) {
//     const newArray = [];

//     for (const result of numbers) {
//         if (result > value) {
//             newArray.push(result);
//         }
//     }
//     return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const result of colors) {
//     hexColors.push(result.hex);
//     rgbColors.push(result.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];
//   for (const result of products) {
//     if (result.name === productName) {
//       console.log(result.price);
//     }
//   }
// }
// getProductPrice("Radar"); // повертає 1300.
// getProductPrice("Grip"); // повертає 1200.
// getProductPrice("Scanner"); // повертає 2700.
// getProductPrice("Droid"); // повертає 400.
// getProductPrice("Engine"); // повертає null.

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const name = [];
//   const price = [];
//   const quantity = [];

//     for (const item of products) {
//            name.push(item.name);
//            price.push(item.price);
//            quantity.push(item.quantity);
//     }
//     if (propName === "name") {
//         console.log(name);
//     }
//     else if (propName === "price") {
//         console.log(price);
//     }
//     else if (propName === "quantity") {
//         console.log(quantity);
//     }
//     else {console.log([]);}
    
// }
// getAllPropValues("name"); // повертає ["Radar", "Scanner", "Droid", "Grip"]
// getAllPropValues("quantity"); // повертає [4, 3, 7, 9]
// getAllPropValues("price"); // повертає [1300, 2700, 400, 1200]
// getAllPropValues("category"); // повертає []


// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//     for (const item of products) {
//          if (item.name === productName) {
//       return item.price * item.quantity;
//     }
//   }
//     return `"Product ${productName} not found!"`; 
    
//     // console.log(key);
    
// }

// console.log(calculateTotalPrice("Blaster"));  // повертає "Product Blaster not found!"
// console.log(calculateTotalPrice("Droid"));  // повертає 2800
// console.log(calculateTotalPrice("Radar"));  // повертає 5200
// console.log(calculateTotalPrice("Grip"));  // повертає 10800
// console.log(calculateTotalPrice("Scanner"));  // повертає 8100

// function getExtremeScores(scores) {
   
//  return `{ best: ${Math.max(...scores)}, worst: ${Math.min(...scores)} }`;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26])); // повертає об'єкт { best: 93, worst: 17 }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// function getExtremeScores(scores) {
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
//  return `{ best: ${Math.max(...bestScore)}, worst: ${Math.min(...worstScore)} }`;
//  console.log(bestScore);
// }
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

// function isEnoughCapacity(products, containerSize) {
//     let count = 0;

//     for (const key in products) {
//         count += products[key];
//     }
//     if (count <= containerSize) {
//         return true;
//     }
//     else { return false; }
// }

// console.log(
//   isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
// ); // false

// console.log(
//   isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
// ); // true

// console.log(
//   isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
// ); // false


// function calcAverageCalories(days) {
//     let total = 0;

//     for (const day of days) {
//         total += day.calories;
//     }
//     if (total > 0) {
//         return total / days.length;
//     }
//     else { return 0 };
// }

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 3010 },
//     { day: "tuesday", calories: 3200 },
//     { day: "wednesday", calories: 3120 },
//     { day: "thursday", calories: 2900 },
//     { day: "friday", calories: 3450 },
//     { day: "saturday", calories: 3280 },
//     { day: "sunday", calories: 3300 }
//   ])
// ); // 3180

// console.log(
//   calcAverageCalories([
//     { day: "monday", calories: 2040 },
//     { day: "tuesday", calories: 2270 },
//     { day: "wednesday", calories: 2420 },
//     { day: "thursday", calories: 1900 },
//     { day: "friday", calories: 2370 },
//     { day: "saturday", calories: 2280 },
//     { day: "sunday", calories: 2610 }
//   ])
// ); // 2270

// console.log(
//   calcAverageCalories([])
// ); // 0


// const profile = {
//     username: "Jacob",
//     playTime: 300,
//     changeUsername(newName) {
//         this.username = newName;
//     },
//     updatePlayTime(hours) {
//         this.playTime += hours;

//     },
//     getInfo() {
//         return `${this.username} has ${this.playTime} active hours!`
//     },
// };

// console.log(profile.getInfo()); // "Jacob has 300 active hours!"

// profile.changeUsername("Marco");
// console.log(profile.getInfo()); // "Marco has 300 active hours!"

// profile.updatePlayTime(20);
// console.log(profile.getInfo()); // "Marco has 320 active hours!"

// function changeEven(numbers, value) {
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   return numbers;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає [12, 18, 3, 7, 14, 16]
// console.log(changeEven([1, 2, 3, 4, 5], 10)); // повертає [1, 12, 3, 14, 5]
// console.log(changeEven([17, 24, 68, 31, 42], 100)); // повертає [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)); // повертає [144, 13, 81, 192, 136, 154]

// const changeEven = (numbers, value) => {
//   const newArray = [];

//   numbers.forEach(element => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     }
//     else {newArray.push(element)}
//   });
// return newArray;
// }
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)); // повертає [12, 18, 3, 7, 14, 16]


// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, gamer) => {return acc + gamer.playtime / gamer.gamesPlayed}, 0);
// console.log(totalAveragePlaytimePerGame) // Відповідь 1023




const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male"
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female"
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male"
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female"
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male"
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male"
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female"
  }
];

const newArray = users.reduce((acc, user) => {return acc + user.balance }, 0);
// console.log("newArray:", newArray)

const calculateTotalBalance = (users) => {
  return users.reduce((value, count) => {
    return value + count.balance
  }, 0);
};




// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter(rank => rank.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .toSorted((a, b) => a.localeCompare(b));

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];
// const uniqueSortedCourses = students
//   const newArray = students.flatMap(student => student.courses)
// console.log("newArray:", newArray)
//   const new2Array = newArray.filter((course, index, array) => array.indexOf(course) === index);
//   console.log("new2Array:", new2Array)

//_______________________________________________________________________
//Task-1_hw-05
const getUserNames = (users) => {return users.map(user => user.name)};


  console.log(
  getUserNames([
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    balance: 3793
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    balance: 2278
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    balance: 2764
  },
])
); // ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]

//_______________________________________________________________________
//Task-2_hw-05
const getUsersWithFriend = (users, friendName) => {
  return users.filter(user => user.friends.includes(friendName));
 };

const allUsers = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"]
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"]
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"]
  },
  {
    name: "Elma Head",
    friends: ["Goldie Gentry", "Aisha Tran"]
  },
  {
    name: "Carey Barr",
    friends: ["Jordan Sampson", "Eddie Strong"]
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Linda Chapman"]
  },
  {
    name: "Sheree Anthony",
    friends: ["Goldie Gentry", "Briana Decker"]
  }
];

console.log(getUsersWithFriend(allUsers, "Briana Decker")); 
// [
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Goldie Gentry"));
// [
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"]
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"]
//   }
// ]

console.log(getUsersWithFriend(allUsers, "Adrian Cross" )); // []

//_______________________________________________________________________
//Task-3_hw-05
const sortByDescendingFriendCount = (users) => {
  return users.toSorted((a, b) => b.friends.length - a.friends.length);
 };

console.log(
  sortByDescendingFriendCount([
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
      gender: "male"
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Sharron Pace"],
      gender: "female"
    },
    {
      name: "Ross Vazquez",
      friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
      gender: "male"
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
      gender: "female"
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong"],
      gender: "male"
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman"],
      gender: "male"
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker"],
      gender: "female"
    }
  ])
);
// [
//   {
//     name: "Ross Vazquez",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     friends: ["Briana Decker", "Sharron Pace"],
//     gender: "female"
//   },
//   {
//     name: "Elma Head",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     gender: "female"
//   },
//   {
//     name: "Moore Hensley",
//     friends: ["Sharron Pace"],
//     gender: "male"
//   }
// ]

//_______________________________________________________________________
//Task-4_hw-05
const getTotalBalanceByGender = (users, gender) => {
  return users
    .filter(el => el.gender === gender)
    .reduce((acc, el) => {return acc + el.balance }, 0);
 };

const clients = [
	{
    name: "Moore Hensley",
    gender: "male",
    balance: 2811
  },
  {
    name: "Sharlene Bush",
    gender: "female",
    balance: 3821
  },
  {
    name: "Ross Vazquez",
    gender: "male",
    balance: 3793
  },
  {
    name: "Elma Head",
    gender: "female",
    balance: 2278
  },
  {
    name: "Carey Barr",
    gender: "male",
    balance: 3951
  },
  {
    name: "Blackburn Dotson",
    gender: "male",
    balance: 1498
  },
  {
    name: "Sheree Anthony",
    gender: "female",
    balance: 2764
  }
];

console.log(getTotalBalanceByGender(clients, "male")); // 12053

console.log(getTotalBalanceByGender(clients, "female")); // 8863


