<h1>What it do?</h1>
<p>This util is for functions that are repeated many times, for example a input that every keyUp it does a requisition for the server, using this util the requisition will gonna done only when the user stop typing, 
that way not filling the server with requests, because it only lets the function start when debounce was not called in X miliseconds (delay)</p>
<h1>How i use?</h1>
<p>It recieve three args, the first is the function that you need the delay to start, the second is the args of your function (in case you have), third is the time that you want wait after the last execution for your function start, for exemple, after user stop typing.</p>

<h1>Exemple</h1>

```javascript
const input = document.querySelector('.search')

let timer

const debounce = (fn, args, delay) => {
    if (!!timer) {
        clearTimeout(timer)
    }

    timer = setTimeout(() => {
        fn(args)
    }, delay)

    return timer
}

input.addEventListener('keyup', e => {
    const textToSearch = e.target.value
    const delay = 1000 //milliseconds

    //searchFunction is fictional ;)
    //remember don't execute the function, wrong: debounce(searchFunction(), textoToSearch, delay)

    debounce(searchFunction, textToSearch, delay)
})
```