## Notes

### Button behavior inside a form

- By default, a `<button>` **inside a `<form>` behaves as a submit button**.
- This can cause **unintended form submission** if you only wanted a normal button.
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
