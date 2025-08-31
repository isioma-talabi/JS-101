# Javascript Notes

## Deconstruction in Javascript looks like this:

```js
const  object1 {
    message: "Hello World",
    price: 799
}

const {message, price} = object1;
console.log(message);
console.log(price)
```

## To set Local Storage

To begin setting a value in local storage, you will want to save the updated value using

````js
localStorage.setItem("setANameForSavedValue", JSON.stringify(nameOfValue))```

Then set the initial value to the set value like this:
```js
 let calculation = JSON.parse(localStorage.getItem("calc"));
````

## Checking if something is an array

```js
console.log(Array.isArray([1, 2]));
```

## Common Array Methods

```js
const myArray = [1, 2, { name: "Adebare" }, true];
myArray.push(100);
myArray.length;
myArray.splice(0, 1); // Will return the array without the value 1
```

````js
.push() ```  will add the value to the end of the array
```js
.length() ``` will give you the length of the array
```js
.splice() ``` will remove a value from an array.
The splice method takes 2 numbers: 1. Is the index you want to remove 2. Number of values you want to remove.
````

## On Global Variables : from arrays-loops-exercise-1

From 11l

````js
const minMaxObj = {
   min: 0,
   max: 0,
    }; ```

     Learnt something about using global variables and how it does not work in this case
     because the call order can affect results.
     With a global object, the result of the second call depends on what happened in the first call.
     With a global variable, I would need to reset everything time the function is called.

````
