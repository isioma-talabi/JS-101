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

To begin setting a value in local storage, you will want to save the updated value using ```js localStorage.setItem("setANameForSavedValue", JSON.stringify(nameOfValue))```

Then set the initial value to the set value like this:``` let calculation = JSON.parse(localStorage.getItem("calc")); ```

