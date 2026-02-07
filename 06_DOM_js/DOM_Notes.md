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
-Onchange `When u Loose Focus or Defocus,  Event Triggered`,  ❗ If the value does **not change**, the event will **not trigger**.

-Oninput `On Every Input Inside the inputBox Event Trigered`

### onchange vs onblurr
-onchange `If input item NotChanged , Defocus ->  Event Not Triggered`
          `If input item Changed , Defocus ->  means mouse pointer still on inputBox Event Triggered`
-onblurr `When u  Defocus -> Event Triggered,regardless of whether the value changed or not.
`

-UseCase-: when u design a form that validate Number lively otherwise it disabled for wrong Entry

### onkeyup vs onkeydown
-onkeyup, onkeydown -> For Triggering this Event u need to press the Key
-onkeyup `After key released , Event Triggered; Fires Once per Keypress`
-onkeydown `For Every Input by key Pressing , EVent Triggered; Fires **repeatedly** if the key is held down.
 Neither detects mouse paste or drag-drop input
`
### onkeyup vs onchange
-onkeyup `U need for KeyBoard Action ; Does **not** fire for copy–paste or drag–drop.
`
-onchange `depends on **value change + blur(Defocus pointer)**, not key presses`
