
function checkPalindrome(){
    const inputText = document.getElementById('inputText').value.toLowerCase().replace(/\s/g, '');

    if(inputText === ''){
        document.getElementById('result').textContent = "Please enter a word or a phrase";
        return;
    }

    const reversedText = inputText.split('').reverse().join('');

    if(inputText === reversedText){
        document.getElementById('result').textContent = `"${inputText}" is a palindrome!`;
    }else{
        document.getElementById('result').textContent = `"${inputText}" is not a palindrome!`;
    }
}