
function myfunc1() {
    console.log("this is from myfucn1")
}

const myVar = myfunc1  //function alias

myVar()
myfunc1()

// console.log(myVar)


//after ES6

// const myfunc2 = function myfunc3() {
//     console.log("this is form my function 3")
// }

// myfunc2()


const myFunc4 = () => {
    console.log(" this is from  my function 4")
}

myFunc4()


// to write a function to print numbers from 1 to 100 

const toPrint = () => {
    for (let i = 1; i <= 100; i++) {
        console.log(i)
    }


}

toPrint()



// const result = (elment => {
//     element * 2;

// });

// console.log("🚀 ~ file: day15.js ~ line 49 ~ result", result)


// function f1(numbers) {

//     for (let i = 0; i < numbers.length; i++) {
//         console.log(numbers[i] * 2);
//     }
// }


// f1(numbers)



//map 

const numbers = [1, 2, 4, 5]

// 12 

// result=[20,26, 30, 40, 100]

// [20,50]  greater than 15 
const result = numbers.map((element) => {
    return element / 2
})

console.log("🚀 ~ file: day15.js ~ line 71 ~ result ~ result", result)


const gt = numbers.filter( n => n > 15 )
console.log("🚀 ~ file: day15.js ~ line 79 ~ gt", gt)

let initialvalue=0
const sum= numbers.reduce( (acc, val  ) => val + acc , initialvalue )

console.log("🚀 ~ file: day15.js ~ line 85 ~ sum", sum)


function toPrint( first, second ){

}

// let i
// function gt() {

//     for (i = 0; i < numbers.length; i++) {
//         if (numbers[i] > 15) {
//             const arr = numbers[i];
//             console.log(arr);
//         }
//     }
// }
// gt()