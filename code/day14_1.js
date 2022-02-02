

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



function myfunc1(){
    console.log("myfunc")
}

const myfunc2=myfunc1
console.log("🚀 ~ file: day14_1.js ~ line 42 ~ myfunc2", typeof(myfunc2))
console.log("🚀 ~ file: day14_1.js ~ line 42 ~ myfunc1", typeof(myfunc1))

myfunc1()
myfunc2()

const cars=["a", "b"]
console.log("🚀 ~ file: day14_1.js ~ line 48 ~ cars", typeof(cars))