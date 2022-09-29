function throttle(func, limit) {
    let flag = true;

    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            func.apply(context, args); // It should be called on the first call 
            flag = false;
            setInterval(() => {
                flag = true;
            }, limit)                   // then on successive intervals of set limit 
        }
    }
}

function resize() {
    console.log('Resize');
}

const betterFunction = throttle(resize, 3000);

betterFunction();
