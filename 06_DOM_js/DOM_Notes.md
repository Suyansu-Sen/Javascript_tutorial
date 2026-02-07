## Notes

### Button behavior inside a form

- By default, a `<button>` **inside a `<form>` behaves as a submit button**.
- Therefore, **avoid using `<button>` without a type attribute inside forms**.

---
### ❌ Wrong Way

```html
<form action="01.html">
    <label>Name:</label>
    <input type="text"><br>
    <button>SUBMIT</button>
</form>
```
### Correct Way

```html
<form action="01.html">
    <label>Name:</label>
    <input type="text"><br>
    <input type="submit" value="SUBMIT">
</form>
```
## Events
### oninput, onchnage, onblurr -> these  Evenets are used while u do Live Validation Of Form
`Before Submiting , the Data ENtered via form Input Filled use ***onchange , oninput ***  By which while u input data in Input Field then Evenet Triggered -> Live Validation Started for Every Field Input Before Submitting Data`
