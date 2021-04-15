//Gets user input and prints the numbers to the page
function printNumbers() {
    let start = parseInt(document.getElementById("numOne").value);
    let end = parseInt(document.getElementById("numTwo").value);
    let numbers = getRange(start, end);
    displayData(numbers)
}

//Gets the range of numbers
function getRange(start, end) {
    let numberArray = [];
    for (let index = start; index <= end; index++) {
        //mortgage payments go here
        numberArray.push(index);
    }
    return numberArray;
}

//Display the numbers
function displayData(numbers) {
    const rowTemplate = document.getElementById("Data-Template");
    const resultBody = document.getElementById("resultBody");
    const mulOne = document.getElementById("indexOne").value;
    const mulTwo = document.getElementById("indexTwo").value;
    let colCount = rowTemplate.content.cloneNode(true).querySelectorAll("td").length;
    //ImportNode
    //clear the table
    resultBody.innerHTML = "";

    //loop over every element in the numbers array
    //get the value and write it to the page
    for (let i = 0; i < numbers.length; i += colCount) {
        let dataRow = rowTemplate.content.cloneNode(true);
        //return an array of columns
        let cols = dataRow.querySelectorAll("td");

        //loop over columns
        for (let colIndex = 0; colIndex < cols.length; colIndex++) {
            let value = numbers[i + colIndex];
            if (typeof value === "undefined") {
                value = "";
            } else if (value % mulOne == 0 && value % mulTwo == 0) {
                value = "FizzBuzz";
            } else if (value % mulOne == 0) {
                value = "Fizz";
            } else if (value % mulTwo == 0) {
                // cols[colIndex].classList.add("boldIt");
                value = "Buzz";
            }
            //td's use textContent to set the content
            cols[colIndex].textContent = value;
        }
        //writes the dataRow to the page.
        resultBody.appendChild(dataRow);
    }
}