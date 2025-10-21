let myText = document.getElementById("my-text");
myText.addEventListener("input", function() {
    let charCount = myText.value.length;
    document.getElementById("count-result").textContent = "Character Count: " + charCount;
});

