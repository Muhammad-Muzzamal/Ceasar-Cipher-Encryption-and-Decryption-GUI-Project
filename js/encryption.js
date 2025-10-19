let plainText = document.querySelector("#plain-text");
let shiftKey = document.querySelector("#shift-key");
let result = document.querySelector("#result");
let ecryptBtn = document.querySelector("#encrypt-btn");
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
    let result = "";
    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let asciCode = char.charCodeAt(0);
        if (char >= "A" && char <= "Z") {
            let shifted = ((asciCode - 65 + siftKey) % 26) + 65;
            result += String.fromCharCode(shifted);
        } else if (char >= "a" && char <= "z") {
            let shifted = ((asciCode - 97 + siftKey) % 26) + 97;
            result += String.fromCharCode(shifted);
        } else {
            result += char;
        }
    }
    return result;
}


ecryptBtn.addEventListener("click", () => {
    console.log("Button was Clicked");
    let key = Number(shiftKey.value);
    let text = plainText.value;
    result.value = caesarCipher(text, key);

});
