function sliderChange(val) {
    document.getElementId('output').innerHTML = val;
    if (val < 40) {
        document.getElementId('output').style.color = 'blue';
    }
    if (val < 70 && val >= 40) {
        document.getElementId('output').style.color = 'red';
    }
    if (val < 100 && val >= 70) {
        document.getElementId('output').style.color = 'yellow';
    }
    console.log(val);
}
