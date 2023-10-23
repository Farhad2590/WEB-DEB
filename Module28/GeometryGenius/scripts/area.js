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

    
    //add to calculation
    addToCalculationEntry('Triangle',area)
}

function calculateRectangleArea() {
    const widthValue = getInputValue('rectangle-width');
    // console.log(widthValue);

    const lengthValue = getInputValue('rectangle-length');
    // console.log(lengthValue);

    const area = widthValue * lengthValue;

    setElementInnerText('rectangle-area',area)

    
    //add to calculation
    addToCalculationEntry('Rectangle',area)
}

function calculateParallelogramArea(){
    const base = getInputValue('parallelogram-base');
    // console.log(base);

    const height = getInputValue('parallelogram-height');
    // console.log(height);

    const area = base * height ;

    setElementInnerText('parallelogram-area',area)

    //add to calculation
    addToCalculationEntry('Parallelogram',area)
}

function calculateRhombusArea(){
    const d1 = getInputValue('rhombus-d1');

    const d2 = getInputValue('rhombus-d2');

    if(isNaN(d1) || isNaN(d2)){
       alert("Pleaser inset a number");
       return;
    }

    const area = 0.5 * d1 * d2 ;

    setElementInnerText('rhombus-area',area)

    
    //add to calculation
    addToCalculationEntry('Rhombus',area)
}

function calculateEllipseArea(){
    const a = getInputValue('ellipse-first-radius');

    const b = getInputValue('ellipse-second-radius');

    const area = 3.14 * a * b;

    setElementInnerText('ellipse-area',area);

    
    //add to calculation
    addToCalculationEntry('Ellipse',area)
}

//add to calculation entry
 function addToCalculationEntry(areaType, area){
    console.log(areaType+ ' ' +area);
    const calculationEntry = document.getElementById('calculation-entry');

    const count = calculationEntry.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-4');
    p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class="btn btn-sm btn-success">Convert</button>`
    calculationEntry.appendChild(p);

 }