const number = document.getElementById("number")
const ergebnis = document.getElementById("ergebnis")


let getWord = () => {

    let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung']

    for (let i = 0; i < words.length; i++) {

        if (number.value == words[i].length) {
            console.log(words[i])
            ergebnis.innerHTML += words[i] + "<br>"
        }

    }
}

// let letNumber = 1

// do {

//     document.write("The number is " + letNumber + "<br>");
//     letNumber++


// } while (letNumber <= 5);

