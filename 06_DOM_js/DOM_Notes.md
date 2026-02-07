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
-Before Submiting , the Data ENtered via form Input Filled use ***onchange , oninput ***  By which while u input data in Input Field then Evenet Triggered -> Live Validation Started for Every Field Input Before Submitting Data
---
### onchange vs oninput
-Onchange `Whwn u Loose Focus or Defocus,  Event Triggered`
-Oninput `On Every Input Inside the inputBox Event Trigered`

### onchange vs onblurr
-onchange `If input item NotChanged , Defocus ->  Event Not Triggered`
          `If input item Changed , Defocus ->  means mouse pointer still on inputBox Event Triggered`
-onblurr `If input item NotChanged , But U Defocus -> Event Triggered`

-UseCase-: when u design a form that validate Number lively otherwise it disabled for wrong Entry

### onkeyup vs onkeydown
-onkeyup, onkeydown -> For Triggering this Event u need to press the Key
-onkeyup `After removing the key , Event Triggered`
-onkeydown `For Every Input by key Pressing , EVent Triggered For Ecah input q, qq. qqq`
### onkeyup vs onchange
-onkeyup `U need To press the KEy, But U can't Cop And Paste`
-onchange `U can Copy And Paste`
