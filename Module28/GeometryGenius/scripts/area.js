function getInputValue(fieldId){
    const inputField = document.getElementById(fieldId);
    const inputValuetext = inputField.value;
    const value = parseFloat(inputValuetext);

    return value;
}

function setElementInnerText(elementId,area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}

function calculateTriangleArea() {
    const baseValue = getInputValue('triangle-base');
    //    console.log(baseValue);

    const heightValue =getInputValue('triangle-height');
    //    console.log(heightValue);

    const area = 0.5 * baseValue * heightValue;

    setElementInnerText('triangle-area',area)
}

function calculateRectangleArea() {
    const widthValue = getInputValue('rectangle-width');
    // console.log(widthValue);

    const lengthValue = getInputValue('rectangle-length');
    // console.log(lengthValue);

    const area = widthValue * lengthValue;

    setElementInnerText('rectangle-area',area)
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    const area = base * height ;

    setElementInnerText('parallelogram-area',area)
}

function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');

    const d2 = getInputValue('rhombus-d2');

    const area = 0.5 * d1 * d2 ;

    setElementInnerText('rhombus-area',area)
}

function calculateEllipseArea(){
    const a = getInputValue('ellipse-first-radius');

    const b = getInputValue('ellipse-second-radius');

    const area = 3.14 * a * b;

    setElementInnerText('ellipse-area',area);
}