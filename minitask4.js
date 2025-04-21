//buat program deteksi palindorm dan reverse word dengan menggunakan built-in method
function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  }
function reverseWord(word) {
    return word.split("").reverse().join("");
}


  const input = "motor";

  console.log(`Kata: ${input}`);
  console.log(`Palindrome? ${isPalindrome(input) ? "Ya" : "Tidak"}`);
  console.log(`Reverse: ${reverseWord(input)}`)
