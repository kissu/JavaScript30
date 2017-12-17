# Challenge 14, reference VS copy
Not an exercise but a little reminder on some tips, read below. :D

### What I learned
In [this][1] video, we have a reminder about:
1. how to reference an array
1. how to copy an array
1. how to reference an Object
1. how to copy an Object with a level 1 deep
1. a little trick on how to make a whole deep Object copy (with nested data)

And the actual impact on both methods.

The examples here are using only 1 available method to achieve it's goals, check
  the `index.html` if you want some less sexy/easier ones.

Examples below for each cases:

## Array part

We have this array for the next 2 examples ↷
```js
let table = [...'yolo']
console.log(table)

// ["y", "o", "l", "o"]
```

1. Reference an array
```js
let referenceTable = table
referenceTable[0] = 't'

console.log(referenceTable)
// ["t", "o", "l", "o"]
console.log(table)
// ["t", "o", "l", "o"]
```
> the original `table` and `referenceTable` are both modified

2. Copy an array
```js
let copyTable = [...table]
copyTable[0] = 'r'

console.log(copyTable)
// ["r", "o", "l", "o"]
console.log(table)
// ["y", "o", "l", "o"]
```
> only `referenceTable` is modified, `table` is intact

## Object part
We have this Object for the next 3 examples ↷
```js
let object = {
  name: 'Konstantin',
  type: 'dev',
  links: {
    website: 'kissu.io',
    twitter: 'kissu_io'
  }
}

console.log(object)
/*
{name: "Konstantin", type: "dev", links: {…}}
  links
    twitter: "kissu_io"
    website: "kissu.io"
  name: "Konstantin"
  type:"dev"
*/
```

3. Reference an Object
```js
let referenceObject = object
referenceObject.name = 'Poutine'

console.log(referenceObject)
/*
{name: "Poutine", type: "dev", links: {…}}
  links
    twitter: "kissu_io"
    website: "kissu.io"
  name: "Konstantin"
  type:"dev"
*/
console.log(object)
/*
{name: "Poutine", type: "dev", links: {…}}
  links
    twitter: "kissu_io"
    website: "kissu.io"
  name: "Konstantin"
  type:"dev"
*/
```

> the original `object` and `referenceObject` are both modified

4. Copy an Object (1 level deep)
```js
let copyObject = {...object}
copyObject.name = 'Poutine'

console.log(copyObject)
/*
{name: "Poutine", type: "dev", links: {…}}
  links
    twitter: "kissu_io"
    website: "kissu.io"
  name: "Konstantin"
  type:"dev"
*/
console.log(object)
/*
{name: "Konstantin", type: "dev", links: {…}}
  links
    twitter: "kissu_io"
    website: "kissu.io"
  name: "Konstantin"
  type:"dev"
*/
```

> only `copyObject` is modified, `object` is intact but **wait**...if we do

```js
copyObject.links.twitter = 'PutinRF_Eng'

console.log(copyObject.links.twitter)
// PutinRF_Eng
console.log(object.links.twitter)
// PutinRF_Eng
```

> it's also changed the initial `object` links ! why ? Because `object` has nested data.

5. Copy an Object (full level deep)
```js
let fullDeepCopyObject = JSON.parse(JSON.stringify(object))
fullDeepCopyObject.links.twitter = 'PutinRF_Eng'

console.log(fullDeepCopyObject)
// PutinRF_Eng
console.log(object)
// kissu_io
```
Here, the `fullDeepCopyObject` is an entire copy of the initial `object` and
  therefore, it's doesn't impact anything even if nested data is changed.

```js
(JSON.stringify(object)) // gives a full string
/*
"{"name":"Konstantin","type":"dev","links":{"website":"kissu.io",
"twitter":"kissu_io"}}"
*/
JSON.parse(JSON.stringify(object)) // return an object with the string
/*
{name: "Konstantin", type: "dev", links: {…}}
  links
    twitter: "kissu_io"
    website: "kissu.io"
  name: "Konstantin"
  type:"dev"
*/
```

Even if it seems to be a pretty ugly hack, it's currently the only proper way to
  do it. Another solution is to use Lodash's [cloneDeep][2] method.

[1]: https://youtu.be/YnfwDQ5XYF4?list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH
[2]: https://lodash.com/docs/4.17.4#cloneDeep