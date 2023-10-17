const convertButton = document.getElementById('convertButton');
const input = document.getElementById('inputValue');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const output = document.getElementById('outputValue');

// convert button
convertButton.addEventListener('click', function () {
    const value = parseFloat(input.value);
    const from = fromUnit.value;
    const to = toUnit.value;
    let convertedValue;

    // formulas for converting
    if (from === 'meter' && to === 'foot') {
        convertedValue = value * 3.28084;
    }
    else if (from === 'meter' && to === 'inch') {
        convertedValue = value * 39.3701;
    } 
    else if (from === 'meter' && to === 'centimeter') {
        convertedValue = value * 100;
    } 
    else if (from === 'foot' && to === 'meter') {
        convertedValue = value * 0.3048;
    } 
    else if (from === 'foot' && to === 'inch') {
        convertedValue = value * 12;
    } 
    else if (from === 'foot' && to === 'centimeter') {
        convertedValue = value * 30.48;
    } 
    else if (from === 'inch' && to === 'meter') {
        convertedValue = value * 0.0254;
    } 
    else if (from === 'inch' && to === 'foot') {
        convertedValue = value * 0.0833333;
    } 
    else if (from === 'inch' && to === 'centimeter') {
        convertedValue = value * 2.54;
    } 
    else if (from === 'centimeter' && to === 'meter') {
        convertedValue = value * 0.01;
    } 
    else if (from === 'centimeter' && to === 'foot') {
        convertedValue = value * 0.0328084;
    } 
    else if (from === 'centimeter' && to === 'inch') {
        convertedValue = value * 0.393701;
    } 
    else {
        convertedValue = value;
    }

    output.value =  `${convertedValue} ${to}`;
});