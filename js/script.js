const generatePasswordButton = document.querySelector("#generate-password")
const generatePasswordElement = document.querySelector("#generated-password")

const getLetterLowerCase = () => {
    return string.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

const getLetterUpperCase = () => {
    return string.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
}

const getSymbol = () => {
    const symbols = "(){}[]=<>/.,!@#$%¨¨&*-+|?";
    return symbols[Math.floor(Math.random() * symbols.length)];
}

generatePasswordButton.addEventListener("click", () => {
    console.log("Teste")
})
