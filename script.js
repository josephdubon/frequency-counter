// Count button click handler
document.getElementById("countButton").onclick = function name() {
    // code here
}

// Text field input reference
let typedText = document.getElementById("textInput").value

// Ignore capitalization and punctuation

// Change all the letter to lower case
typedText = typedText.toLowerCase()

// Get rid of all the characters except letters, spaces, and apostrophes
typedText = typedText.replace(/[^a-z'\s]+/g, "")

// Loop over all characters in typedText 
for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    // do something for each letter
}

// Keep counts of the number of times each different letter is used in the text
let letterCounts = {}

// Initialize new letter count to 1; otherwise add one to the count
if (letterCounts[currentLetter] === undefined) {
    letterCounts[currentLetter] = 1
} else {
    letterCounts[currentLetter]++
}

// Output how many times each letter occurred
for (let letter in letterCounts) {
    const span = document.createElement("span")
    const textContent = document.createTextNode("''" + letter + "\":  " + letterCounts[letter] + ", ")
    span.appendChild(textContent)
    document.getElementById("lettersDiv").appendChild(span)
}

// Break the input string into words by splitting it on the spaces
words = typedText.split(/\s/)