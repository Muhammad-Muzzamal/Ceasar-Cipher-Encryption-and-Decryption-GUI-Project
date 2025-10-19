let cipherText = document.querySelector("#cipher-text");
let shiftKey = document.querySelector("#shift-key");
let PlainText = document.querySelector("#plain-text");
let decryptBtn = document.querySelector("#decrypt-btn");
let decBtn = document.querySelector("#dec-btn");
let incBtn = document.querySelector("#inc-btn");

incBtn.addEventListener("click", () => {
    shiftKey.value++;
});
decBtn.addEventListener("click", () => {
    if (shiftKey.value > 0) {
        shiftKey.value--;
    }
});

function caesarCipher(string, siftKey) {
    let PlainText = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let asciCode = char.charCodeAt(0);
        if (char >= "A" && char <= "Z") {
            let shifted = ((asciCode - 65 - siftKey + 26) % 26) + 65;
            PlainText += String.fromCharCode(shifted);
        } else if (char >= "a" && char <= "z") {
            let shifted = ((asciCode - 97 - siftKey + 26) % 26) + 97;
            PlainText += String.fromCharCode(shifted);
        } else {
            PlainText += char;
        }
    }
    return PlainText;
}


decryptBtn.addEventListener("click", () => {
    console.log("Button was Clicked");
    let key = Number(shiftKey.value);
    let text = cipherText.value;
    PlainText.value = caesarCipher(text, key);

});
