## JavaScript

- it is a scripting language
- it object oriented language 
- it functional language 

## variable
 - it is a placeholder to store a value in memory
 - it is mutable 
 - let  and var are used to declare varibale
 - const is also used to declare  varibale
   e.g : 
   ```javascript
   let number=11;
         var firstName="rayn"
         const cars= ['i20','i10','creta']
   ````
## pre-defined objects
    - console
        - object that represents browser console
        - menthod:
            - log(): used to print the message on the browser console
            - info()
            - warn()
            - error()
    - window
         - it represents the browser's window (UI)
         - menthods:
            - alert()
            - prompt()
            - confirm()

## pop ups
  - alert
    e.g: alert("this is an alert")
  - confirm 
    e.g: 
    ```javascript
     const result = confirm("do you want to submit") 
          if(result){
            console.log("hello world")
            }
             else{
            console.log("bye bye")
            }
    ```

## pre-defined value
  - undefined 
  - NaN

    e.g

    ```javascript
      const price = 100;

      const fistName = "rayn";

    const result= price * fistName

    console.log(price + fistName)

    console.log("🚀 ~ file: day14.js ~ line 8 ~ result", result)
    ```

  - infinity
    e.g: 
    ```javascript
      let a=10;
      let b=0;

      console.log(10/0)
    ````

## data types
   - number 
    e.g:
    ```javascript
        let a=10;
        console.log("🚀 ~ file: day14.js ~ line 15 ~ a", typeof(a))
    ```

   - string 
   - boolean 

## operators

  - addition (+)
  - division (/)
  - multiplication (*)

## comparison oprators
  - double equal to (==)
  - triple equal to (===)
  - not equal to (!=)
  - not equal to (!==)

## function
  - block of code which can be reused
  - types:
    - empty function:
    - parameterless function
    - parameterized function 
    