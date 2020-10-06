<h1 align="center">What it do?</h1>
<p>This util depends on a form and it gonna catch all inputs that have name (don't forget the name) and yours respectives values to put in object "data"</p>
<h1 align="center">How i use?</h1>
<p>Is very simple, before all you must do a preventDefault in your form Event, after this create a const and assign it with the function passing the form Event</p>

##Exemple
```javascript
function login(e) {
    e.preventDefault()
    //e = formEvent
    const data = CatchInputsData(e)
    
    //to improve, use destructuring, remember the const name must be the same of inputs name
    const {email, password} = CatchInputsData(e)
}
```