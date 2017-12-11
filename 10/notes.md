# Challenge 10, shift input checklist
The challenge here is just to make a several click on each input inbetween
  checked box and where the cursor lands while pressing `shift` click.

### What I learned

### Small stuff

```html
<div class="item">
  <input type="checkbox" id="checkbox1">
  <label for="checkbox1">This is an inbox layout.</label>
</div>
```
is the way to go for a clicky label and an input checkbox.

Use `childNodes` to go into the children in a nodeList & `getAttribute` to
  get attribute (like `type`).