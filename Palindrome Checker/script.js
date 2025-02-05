document.getElementById("btn").addEventListener("click",function() {
    let txt = document.getElementById("input-text").value;
    PalindromeCheck(txt);
});

function PalindromeCheck(txt) {
    let txt_new = txt.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let len = txt_new.length;
    let halfLen = Math.floor(len/2);
    let result = document.getElementById("result");
    let i;

    for(i = 0; i < halfLen; i++) {
        if( txt_new[i] !== txt_new[len-1-i]) {
            result.textContent = "No! It's Not a Palindrome Word.";
            return;
        }
        result.textContent = "Yes! It's a Palindrome Word.";
    }
}