// / 1. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს
// თუ ციფრი დადებითია ფუნქციამ უნდა დააბრუნოს "დადებითია", თუ
// არა "უარყოფითია"

const getNumber = (number) => {
  if (number >= 1) {
    console.log("დადებითია");
  } else {
    console.log("უარყოფითია");
  }
};
// 2. დაწერეთ ფუნქცია რომელიც დააბრუნებს ყველა ციფრის ჯამს
// 1 დან 100 მდე
const getNumbersSum = () => {
  sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += i;
    console.log(sum);
  }
};

// getNumbersSum();
// 3. დაწერეთ ფუნქცია რომელსაც გადასცემთ ციფრს, ფუნქციამ უნდა
// დააბრუნოს ეს ციფრი კენტია თუ ლუწი

const evenOrOdd = (number) => {
  if (number % 2 === 0) {
    console.log("even");
  }
  if (number % 2 !== 0) {
    console.log("odd");
  }
};
// 4. შექმენით ობიექტი car რომელსაც ექნება year და model.
// დაწერეთ ფუნქცია რომელსაც გადასცემთ ამ მანქანის ობიექტს
// და ფუნქციამ უნდა დააბრუნოს მანქანის ასაკი

const cars = {
  year: 2020,
  model: "toyota camry",
};
const getCarYear = (car) => {
  console.log(car.year);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const carYear = currentYear - car.year;
  console.log(`this model is created ${carYear} year ago`);
  return car.year;
};

// getCarYear(cars);

// 5. დაწერეთ ფუნქცია რომელსაც გადავცემთ ციფრების მასივს,
// მაგალითად [1,4,88,99, 123]. ფუნქციამ უნდა იპოვოს და დააბრუნოს
// მასივის უდიდესი ციფრი
numbers = [1, 4, 88, 99, 123];
const getBiggestNumber = (arr) => {
  const maxNum = Math.max(...arr);
  console.log(maxNum);
};
// getBiggestNumber(numbers);

// 6. გააკეთეთ იგივე ოღონდ დააბრუნეთ უმცირესი ციფრი

const getSmallestNumber = (arr) => {
  const smallNum = Math.min(...arr);
  console.log(smallNum);
};
// getSmallestNumber(numbers);

// 7. დაწერეთ ფუნქცია რომელსაც გადასცემთ სიტყვას,
// ფუნქციამ უნდა დააბრუნოს ამ სიტყვის შებრუნებული ვერსია,
// მაგალითად თუ გადავცემთ someFn("ერთი"), უნდა დააბრუნოს "ითრე

function getReversedWord(word) {
  return word.split("").reverse().join("");
}
const word = "Hello, World!";
const reversedWord = getReversedWord(word);
console.log(reversedWord);
