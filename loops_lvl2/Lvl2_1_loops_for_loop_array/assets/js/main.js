
const imageArray = () => {

    let returnArray = []

    for (let i = 1; i <= 100; i++) {


        if (returnArray.length <= 100) {
            returnArray.push("image_" + i + ".jpg")

        }

    }

    console.log(returnArray)
}

imageArray()