
// const loopi = () => {

//     const inputNumber = document.getElementById("numberinput").value
//     const output = document.getElementById("output")

//     let myLoop = ["L", "p"]
//     for (let i = 0; i < inputNumber; i++) {
//         myLoop.splice(1, 0, "o")
//     }
//     output.innerHTML = myLoop.join("")
// }



const loopi = () => {


    const inputNumber = document.getElementById("numberinput").value
    const output = document.getElementById("output")

    let loop = ["L", "p"]

    for (let i = 0; i < inputNumber; i++) {
        loop.splice(1, 0, "o")
    }

    output.innerHTML = loop.join("")
}























