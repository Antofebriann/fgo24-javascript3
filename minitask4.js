//buat program deteksi palindorm dan reverse word dengan menggunakan built-in method
function isPalindrome(word) {
    const reversed = word.split("").reverse().join("");
    return word === reversed;
  }
  const input = "motor";

  console.log(`Kata: ${input}`);
  console.log(`Palindrome? ${isPalindrome(input) ? "Ya" : "Tidak"}`);
  