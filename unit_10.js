// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

// let ar1 = // переменную обьявляем здесь!!!!

function f1() {
    const ar1 = [3, "df", 98,]
    const out = document.querySelector(".out-1")
    out.innerHTML = ar1
    //ваш_элемент.innerHTML = ar1; // да так можно выводить!!!!
}

document.querySelector(".b-1").onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

// let ar2 = // переменную обьявляем здесь!!!!
let ar2 = [44, "ggg", true]

function f2() {
    let out = "";
    for (let i = 0; i < ar2.length; i++) {
        out += ar2[i] + " ";
    }
    document.querySelector(".out-2").innerHTML = out;
}

document.querySelector(".b-2").onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

// let ar3 =  // переменную обьявляем здесь!!!!
let ar3 = [1, 2, 3, 4, 5]

function f3() {
    document.querySelector(".out-3").innerHTML = ar3.length
}

document.querySelector(".b-3").onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

// let ar4 =  // переменную обьявляем эту здесь!!!!
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function f4() {
    document.querySelector(".out-4").innerHTML = `${ar4[0]} ${ar4[3]} ${ar4[8]}`
}

document.querySelector(".b-4").onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function f5() {
    document.querySelector(".out-5").innerHTML = ar5[2] + ar5[3] + ar5[0]
}

document.querySelector(".b-5").onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

let ar6 = ["Alex", "Телец", 20, "мая"]
let str = ""

function f6() {
    for (let i = 0; i < ar6.length; i++) {
        str += ar6[i] + " "
    }
    console.log(str)
    document.querySelector(".out-6").innerHTML = str
}

document.querySelector(".b-6").onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7 = ["china", "india", "brazil", "japan", "egypt"];

function f7() {
    ar7[5] = "italy"
    ar7[6] = "turkey"
    ar7[7] = "vietnam"
    document.querySelector(".out-7").innerHTML = ar7
}

document.querySelector(".b-7").onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8 = [];
let str1 = ""

function f8() {
    ar8[3] = 3.14
    ar8[4] = 17
    ar8[6] = 5
    for (let i = 0; i < ar8.length; i++) {
        str1 += ar8[i] + "-"
    }
    document.querySelector(".out-8").innerHTML = str1
    document.querySelector(".out-8-1").innerHTML = ar8.length
}

document.querySelector(".b-8").onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    document.querySelector(".out-9").innerHTML = ar9[ar9.length - 1]
}

document.querySelector(".b-9").onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
    document.querySelector(".out-10").innerHTML = ar10[ar10.length - 1] + ar10[0]
}

document.querySelector(".b-10").onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2, 3, 4, 5, 6, 7];
let str11 = ""

function f11() {
    let a = ar11[2]
    ar11[2] = ar11[4]
    ar11[4] = a
    for (let i = 0; i < ar11.length; i++) {
        str11 += ar11[i] + " "
    }
    console.log(str11)
    document.querySelector(".out-11").innerHTML = str11

}

document.querySelector(".b-11").onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ["test", "west", "list", "class", "best"];
let str12 = ""

function f12() {
    let a = ar12[0]
    ar12[0] = ar12[ar12.length - 1]
    ar12[ar12.length - 1] = a
    for (let i = 0; i < ar12.length; i++) {
        str12 += ar12[i] + " "
    }
    document.querySelector(".out-12").innerHTML = str12
}

document.querySelector(".b-12").onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


let ar13 = ["test", "west", "list", "class", "best"];
let str13 = ""

function f13() {
    for (let i = 0; i < ar13.length; i++) {
        str13 += `${i} ${ar13[i]} `
    }
    document.querySelector(".out-13").innerHTML = str13
}

document.querySelector(".b-13").onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, "hello", 66];
let str14 = ""

function f14() {
    for (let i = ar14.length - 1; i >= 0; i--) {
        str14 += ar14[i] + " "
    }
    document.querySelector(".out-14").innerHTML = str14
}

document.querySelector(".b-14").onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let str15 = ""

function f15() {
    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] >= 0)
            str15 += ar15[i] + " "
    }
    document.querySelector(".out-15").innerHTML = str15
}

document.querySelector(".b-15").onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
let ar16_odd = [];
let ar16_even = [];

let str_odd = ""
let str_even = ""

function f16() {
    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 === 0) {
            str_odd += ar16[i] + " "
            ar16_odd = str_odd
        } else {
            str_even += ar16[i] + " "
            ar16_even = str_even
        }
    }
    document.querySelector(".out-16-odd").innerHTML = str_odd
    document.querySelector(".out-16-even").innerHTML = str_even
}

document.querySelector(".b-16").onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];
let counter = ""

function f17() {
    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] >= 3) {
            counter += ar17[i] + " "
        }
        document.querySelector(".out-17").innerHTML = counter
    }
}

document.querySelector(".b-17").onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];
let number = ar18[0]


function f18() {
    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > number) {
            number = ar18[i]
        }
        document.querySelector(".out-18").innerHTML = number
    }
}

document.querySelector(".b-18").onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 313, 78, 241, 4, 45, 67];
let numbMin = ar19[0]

function f19() {
    for (let i = 0; i < ar19.length; i++) {
        if (ar19[i] < numbMin) {
            numbMin = ar19[i]
        }
    }
    document.querySelector(".out-19").innerHTML = numbMin
}

document.querySelector(".b-19").onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

let ar20 = [4, 5, 6, 7, 8, 9, 10];
let sum = 0

function f20() {
    for (let i = 0; i < ar20.length; i++) {
        sum += ar20[i]
    }
    document.querySelector(".out-20").innerHTML = sum
}

document.querySelector(".b-20").onclick = f20;
