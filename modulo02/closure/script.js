let initialSize = 15;

function makeSizer(size) {
    return function () {
        initialSize = initialSize + size;
        document.body.style.fontSize = (initialSize) + 'px';
    };
}

let increase = makeSizer(10);
let decrease = makeSizer(-10);

document.getElementById('max').onclick = increase;
document.getElementById('min').onclick = decrease;