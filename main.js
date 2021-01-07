const println = (input) => {
    console.log(input);
}

const createCanvas = (canvasWidth, canvasHeight, canvasBackgroundColor = "#000") => {
    let newCanvas = document.createElement('canvas');
    let canWidth = document.createAttribute("width");
    canWidth.value = canvasWidth.toString();
    let canHeight = document.createAttribute("height");
    canHeight.value = canvasHeight.toString();
    let canvasBg = document.createAttribute("style");
    canvasBg.value = `background-color: ${canvasBackgroundColor}`;
    newCanvas.setAttributeNode(canWidth);
    newCanvas.setAttributeNode(canHeight);
    newCanvas.setAttributeNode(canvasBg);
    document.body.appendChild(newCanvas);
}

//createCanvas(1000, 750, "#f00");

const empty = (input) => {
    if (input == '' || input == undefined || input == null) return true;
    return false;
}

const isString = (input) => {
    return typeof input === 'string' ? true : false;
}

const isNumber = (input) => {
    return typeof input === 'number' ? true : false;
}

const isBoolean = (input) => {
    return typeof input === 'boolean' ? true : false;
}

const isFunction = (input) => {
    return typeof input === 'function' ? true : false;
}

const isUndefined = (input) => {
    return typeof input === 'undefined' ? true : false;
}

const isObject = (input) => {
    return typeof input === 'object' ? true : false;
}

const randomNum = (beginNum, endNum, decimal = true) => {
    if(beginNum != NaN && typeof beginNum === 'number' && typeof endNum === 'number' && endNum != NaN) {
        return decimal ? (Math.random() * endNum) + beginNum : (Math.floor(Math.random() * endNum) + beginNum);
    }
    return "Enter two numbers";
}

const randomColor = (hash = true) => {
    let colors = Math.floor(Math.random() * 16777215).toString(16).toUpperCase();
    if(hash) return `#${colors}`;
    return `${colors}`;
}

println(randomColor(false))
