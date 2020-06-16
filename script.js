        let letterCounts = {}

        document.getElementById("countButton").onclick = function () {
            let typedText = document.getElementById("textInput").value
            typedText = typedText.toLowerCase()
            typedText = typedText.replace(/[^a-z'\s]+/g, "")

            // Letter Counts
            for (let i = 0; i < typedText.length; i++) {
                let currentLetter = typedText[i]

                if (letterCounts[currentLetter] === undefined) {
                    letterCounts[currentLetter] = 1
                } else {
                    letterCounts[currentLetter]++
                }
            }

            for (let letter in letterCounts) {
                const span = document.createElement("span")
                const lettersContent = document.createTextNode('"' + letter + "\": " + letterCounts[letter] + ", ")
                span.appendChild(lettersContent)
                document.getElementById("lettersDiv").appendChild(span)
            }

            // Word Counts

            const words = typedText.split(" ")
            const wordCounts = {}
            for (let k = 0; k < words.length; k++) {
                let currentWord = words[k]
                if (wordCounts[currentWord] === undefined) {
                    wordCounts[currentWord] = 1
                } else {
                    wordCounts[currentWord]++
                }
            }
            for(let text in wordCounts) {
                const span = document.createElement("span")
                const textContent = document.createTextNode('"' + text + "\": " + wordCounts[text] + ",")
                span.appendChild(textContent)
                document.getElementById("wordsDiv").appendChild(span)
            }
        }