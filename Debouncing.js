
function debounce(func, delay) {
    let timer;
    return function () {
        let args = arguments;
        let context = this;
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(context, args); //  It will delay func each time whenever the function is called again
        }, delay)
    }
}

function callApi() {
    console.log('Api Called');
}

const betterFunction = debounce(callApi, 3000);


betterFunction();
