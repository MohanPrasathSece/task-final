function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    return vowels.includes(char);
}

const charInput = prompt("Enter a character to check if it's a vowel:");
if (isVowel(charInput)) {
    console.log(`${charInput} is a vowel.`);
} else {
    console.log(`${charInput} is not a vowel.`);
}