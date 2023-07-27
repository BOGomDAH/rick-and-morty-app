export const debounce = (func, delay) => {
    let timerId;
    return function (...args) {
        clearTimeout(timerId); // Очистить предыдущий таймер
        timerId = setTimeout(() => {
            func.apply(this, args); // Вызвать функцию с заданными аргументами
        }, delay);
    };
}