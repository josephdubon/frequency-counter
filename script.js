        let letterCounts = {}

        document.getElementById("countButton").onclick = function () {
            let typedText = document.getElementById("textInput").value
            typedText = typedText.toLowerCase()
            // This changes all the letter to lower case.  
            typedText = typedText.replace(/[^a-z'\s]+/g, "")
            // This gets rid of all the characters except letters, spaces, and apostrophes.  
            for (let i = 0; i < typedText.length; i++) {
                currentLetter = typedText[i]

                if (letterCounts[currentLetter] === undefined) {
                    letterCounts[currentLetter] = 1
                } else {
                    letterCounts[currentLetter]++
                }
            }
            for (let letter in letterCounts) {
                const span = document.createElement("span")
                const textContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ")
                span.appendChild(textContent)
                document.getElementById("lettersDiv").appendChild(span)
            }

            const words = typedText.split(" ")
            let wordCounts = {}

            for (let k = 0; k < typedText.length; k++) {
                currentWord = typedText[k]
                if (wordCounts[currentWord] === undefined) {
                    wordCounts[currentWord] = 1
                } else {
                    wordCounts[currentWord]++
                }
            }
            for (let word in wordCounts) {
                const span = document.createElement("span")
                const textContent = document.createTextNode('"' + word + "\": " + wordCounts[word] + ", ")
                span.appendChild(textContent)
                document.getElementById("wordsDiv").appendChild(span)
            }
        }