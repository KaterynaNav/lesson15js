console.log("Sample JavaScript #3 HW #15");

/*
 * #1
 *
 * Создайте функцию counter(), которая должна реализовать счетчик с помощью замыкания:
 * функция может принимать число в качестве аргумента counter(n)
 * если число передано в функцию – счет начинается с указанного числа
 * если нет – то счет продолжается
 */

let counter = (function () {
  let count = 0;
  return function (n) {
    count = n === undefined ? count : n;
    return count++;
  };
})();

console.log(counter());

console.log(counter());

console.log(counter(100));

console.log(counter());

console.log(counter(500));

console.log(counter());

console.log(counter(0));

console.log(counter());

/*
 * #2
 *
 * Создайте функцию counting, которая должна реализовать три метода с помощью замыкания:
 * первоначальное значение счетчика – 0
 * counting.value() – возвращает значение счетчика
 * counting.value(n) – устанавливает значение счетчика, возвращает новое значение
 * counting.increment() – увеличивает значение счетчика на 1
 * counting.decrement() – уменьшает значение счетчика на 1
 */

let counting = (function () {
  let count = 0;

  return {
    value(num) {
      if (num !== undefined) count = num;
      return count;
    },
    increment() {
      count++;
    },
    decrement() {
      count--;
    },
  };
})();

console.log(counting.value());

counting.increment();

counting.increment();

counting.increment();

console.log(counting.value());

counting.decrement();

counting.decrement();

console.log(counting.value());

console.log(counting.value(100));

counting.decrement();

console.log(counting.value());

console.log(counting.value(200));

counting.increment();

console.log(counting.value());

/*
 * #3
 *
 * Создайте функцию myPow(a, b, myPrint). Внутри реализуйте рекурсию для подсчета результата возведения числа a в степень b.
 * функция myPrint(a, b, res) – глобальная функция, которая должна генерировать из параметров a, b, res строку вида 'a^b=res' и возвращать ее
 * myPrint() должна быть передана в myPow() как параметр и вызвана внутри как callback-функция
 * функция myPow() в качестве возвращаемого значения принимает результат myPrint()
 * Например:
 * console.log(myPow(3, 4, myPrint)); // 3^4=81
 * console.log(myPow(2, 3, myPrint)); // 2^3=8
 */

let myPrint = (a, b, res) => `${a}^${b}=${res}`;
let myPow = (a, b, callback) => {
  let pow = (a, b) => {
    if (b !== 1) {
      return (a *= pow(a, b - 1));
    } else {
      return a;
    }
  };

  return callback(a, b, pow(a, b));
};

console.log(myPow(3, 4, myPrint));

console.log(myPow(2, 3, myPrint));

// #4-6
let yearNow = new Date().getFullYear();

let car = {
  engine: 2000,
  model: "Lacetti",
  name: "Chevrolet",
  year: 2010,
  used: "used",
  info: info,
  get used() {
    return this.year !== yearNow ? "used" : "new";
  },
  set used(value) {
    if (value === "new" && this.year < yearNow) this.year = yearNow;
  },
};

let car2 = {
  engine: 5000,
  model: "FX50 AWD",
  name: "Infinite",
  year: 2019,
  used: "new",
  info: info,
  get used() {
    return this.year !== yearNow ? "used" : "new";
  },
  set used(value) {
    if (value === "new" && this.year < yearNow) this.year = yearNow;
  },
};

function info() {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
}

console.log(car.info());
console.log(car2.info());

console.log(car.info());
car.used = "new";
console.log(car.info());
car.used = "used";
console.log(car.info());
console.log(car2.info());
car.used = "used";
console.log(car2.info());

//  * #7

let list = [12, 23, 100, 34, 56, 9, 233];

let myMax = (arg) => Math.max.apply(Math, arg);

console.log(myMax(list));

//  * #8

function myMul(a, b) {
  return a * b;
}

/*
 * создайте функции myDouble(n), которая принимает один параметр и  удваивает его.
 * Использовать умножение или другие математические операции внутри функции – запрещено, только bind() и myMul().
 * Функция возвращает результат вычисления.
 */
let myDouble = myMul.bind(null, 2);

console.log(myDouble(3));
console.log(myDouble(4));
console.log(myDouble(5));

// аналогичным образом создайте функцию myTriple(n), которая утраивает принимающий параметр, возвращая результат.

let myTriple = myMul.bind(null, 3);

console.log(myTriple(3));

console.log(myTriple(4));

console.log(myTriple(5));

/*
 * #9
 *
 * Постройте функцию myUniq(arr), которая будет принимать произвольный массив
 * повторяющихся примитивных значений (например, имена пользователей или числа ).
 * Функция должна вернуть коллекцию уникальных значений.
 * В реализации разрешено использование set.
 * Любые условные операторы – запрещены и объекты.
 */

let notUniqNums = [1, 1, 2, 3, 4, 5, 6, 7];

let notUniqStrings = [
  "Bob",
  "Kate",
  "Jhon",
  "Tom",
  "Jhon",
  "Kate",
  "Tom",
  "Bob",
  "Jhon",
  "Tom",
];

let myUniq = (arr) => {
  let set = new Set();

  arr.forEach((value) => {
    set.add(value);
  });

  return set;
};

console.log(myUniq(notUniqNums));

console.log(myUniq(notUniqStrings));
