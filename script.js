document.getElementById("countButton").onclick = function () {
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase();
    // This changes all the letter to lower case.  
    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    // This gets rid of all the characters except letters, spaces, and apostrophes.  
    function letters(typedText) {
        let letterCounts = {};
        for (let i = 0; i < typedText.length; i++) {
            currentLetter = typedText[i];
            if (letterCounts[currentLetter] === undefined) {
                letterCounts[currentLetter] = 1;
            } else {
                letterCounts[currentLetter]++;
            }
            for (let letter in letterCounts) {
                const span = document.createElement("span");
                const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ");
                span.appendChild(textContent);
                document.getElementById("lettersDiv").appendChild(span);
            }
        }
    }

    function words(typedText) {
        words = typedText.split(/\s/);
        let wordCounts = {};
        for (let i = 0; i < typedText.length; i++) {
            currentWord = typedText[i];
            if (wordCounts[currentWord] === undefined) {
                wordCounts[currentWord] = 1;
            } else {
                wordCounts[currentWord]++;
            }
            for (let word in wordCounts) {
                const span = document.createElement("span");
                const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ");
                span.appendChild(textContent);
                document.getElementById("wordsDiv").appendChild(span);
            }
        }
    }
}