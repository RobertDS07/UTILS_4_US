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