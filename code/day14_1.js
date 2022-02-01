

//declaration of func
//empty function
function myfunction1() {
}


//parameterless function
function myfunction1() {
    console.log("hello world")
}


//parameteriezed function
function myfunction3(value) {
    console.log("🚀 ~ file: day14_1.js ~ line 17 ~ myfunction3 ~ value", value)

}

myfunction3("rayn")  //func call
myfunction3(1000)  //func call

// console.log('result :' + result)



function addition(first, second) {
    console.log("addition : " + first + second)
}

addition(10, 20)
addition(100, 200)

function myfunc1() {
    console.log("myfunc1")
}

function myfunc2(myfunc1) {
    console.log(myfunc1)
}

const myfunc1=myfunc2()

myfunc2()