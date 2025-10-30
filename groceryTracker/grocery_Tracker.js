let groc1;
let groc2;
let groc3;

function calculateGroceries() {
    groc1 = parseFloat(document.getElementById('groc1').value);
    groc2 = parseFloat(document.getElementById('groc2').value);
    groc3 = parseFloat(document.getElementById('groc3').value);

    let grocTotal = groc1 * groc2 *groc3;

    document.getElementById('result').innerText = `The total cost of your groceries is: ${grocTotal}`;
}