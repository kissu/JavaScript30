# [Super cool] Challenge 15, Event Delegation & Local Storage
Super coooooool exercise on how to practice a lot of stuff. It's not hard but
  I've discovered event delegation and localStorage. In pair with some HTML
  `contenteditable="true"`, we maybe can make some cool stuff ! :hand:

### What I learned
If we have a form like that
```js
<form class="add-items">
  <input type="text" name="item" id="user-input" placeholder="Item Name"
    required autofocus>
  <input type="submit" value="+ Add Item">
</form>
```

We can get the value entered in the field with this kind of selector
```js
(document.querySelector('[id=user-input]')).value
```
but it's usually better to use `this.querySelector` and not the    `document` one. That way, you don't need an id on it, you can just use
```js
(this.querySelector('[name=item]')).value
```
because it will be scoped thanks to the `eventListener`.

`populateList` is used to fetch the submitted value in the form, add it to the
  array of plates and display the plates in the HTML above the form.

Btw, the innerHTML returned is
```js
<li>
  <input type="checkbox" data-index=${i} id="item${i}" ${plate.done? 'checked' : ''} />
  <label for="item${i}">${plate.text}</label>
</li>
```
the ternary is used to see if checkbox need to be displayed as checked or not &
  the `label for` is here to be able to click on the name of the plate instead
  of **just** the checkbox.

### Local storage [[MDN][1]]
Store the key `items` with the value of the object (array) `items`
```js
localStorage.setItem('items', JSON.stringify(items))
```

Load the key items from `localStorage` or return a void array ↷
```js
JSON.parse(localStorage.getItem('items')) || []
```

### Event delegation [[MDN][2]]
As an analogy of what it consists, we can take parents and children.

The parents are supposed to be responsible of their children, so let's say that
  each children need to know how to _Kamehameha_ properly. Each time we need the
  children to perform it, the parents should say them to do so. In other words,
  thanks to the parents, the children need to know that ability.

Oh and of course, as parents may want more kids, they are in charge of learning
  them how to _Kamehameha_, for each new one. This is delegation ! :smirk:

It's done as simply as ↷
```js
function toggleDone (e) {
  if (!e.target.matches('input')) return // skip this unless it's an input
  // do some stuff with the children elements
}
// that all ??! wow
itemsList.addEventListener('click', toggleDone)
```

### Small things
- We do use the classic `e.preventDefault()` to not reload the page when we
  submit the form.

- Check the CSS to see how make these kind of custom checkboxes.

- `items.length = 0` is a good way to clear a `const` array object.

- Reminder, if you want a picture that is hosted at this url:
  https://unsplash.com/photos/XsK9Qm7TWqs, just prepend `source` and remove
  `photos`, that way you will be able to use just the image. The url should be
  https://source.unsplash.com/XsK9Qm7TWqs in our case.

- To insert this kind of unicode symbol `✓`, you can just pasta it in your CSS
  like that or you need to write it's HEX code like `\2713`.

- JSON parse/stringify ↷
```js
let objectVar = {name: 'yolo', age: 21 }

let stringVar = JSON.stringify(objectVar) // takes an object, returns a string
// "{"name":"yolo","age":21}"

let objectVar2 = JSON.parse(stringVar) // takes a string, returns an object (JSON)
// {name: "yolo", age: 21}
```

If you need to pass it manually (not with a variable), use the single quotes `'`
like `JSON.parse('{"name":"yolo","age":21}')`.

### Easy stuff to add

- [x] check all button
- [x] uncheck all button
- [x] delete all button

In function `stateAllItems`, I've used a closure. [[MDN][3]]

Definition: `A closure is the combination of a function and the lexical
 environment within which that function was declared.`

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Event/target
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures