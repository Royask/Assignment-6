function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
    if (val < 30) {
        document.getElementById('output').style.color = 'green';
    }
    if (val < 70 && val >= 30) {
        document.getElementById('output').style.color = 'yellow';
    }
    if (val < 100 && val >= 70) {
        document.getElementById('output').style.color = 'red';
    }
    console.log(val);
}
