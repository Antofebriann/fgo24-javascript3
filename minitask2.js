 // mencari 20 built in method
  // mencari 5 built in function
  // jelaskan tiap tiap fungsi dari tiap tiap method dan function yang ditemukan
  // berikan juga contoh penggunaannya

  // String Methods
  toUpperCase()
 // Mengubah semua huruf jadi kapital.
  console.log("halo".toUpperCase()); // "HALO"
  
  toLowerCase()
 // Mengubah semua huruf jadi huruf kecil.
  console.log("HALO".toLowerCase()); // "halo"
  
  includes()
 // Mengecek apakah string mengandung substring tertentu.
  console.log("Hello world".includes("world")); // true
  
  slice()
 // Mengambil bagian tertentu dari string.
  console.log("Hello".slice(1, 4)); // "ell"
  
  replace()
 // Mengganti bagian dari string.
  console.log("saya suka apel".replace("apel", "jeruk")); // "saya suka jeruk"
  
  // Array Methods
  push()
  //Menambahkan item ke akhir array.
  let arr = [1, 2]; arr.push(3); console.log(arr); // [1,2,3]
  
  pop()
 // Menghapus item terakhir dari array.
  let arr = [1, 2, 3]; arr.pop(); console.log(arr); // [1,2]
  
  shift()
 // Menghapus item pertama dari array.
  let arr = [1, 2, 3]; arr.shift(); console.log(arr); // [2,3]
  
  unshift()
 // Menambahkan item ke awal array.
  let arr = [2, 3]; arr.unshift(1); console.log(arr); // [1,2,3]
  
  map()
 // Membuat array baru dari hasil fungsi pada tiap elemen.
  let nums = [1, 2, 3]; let doubled = nums.map(x => x * 2); console.log(doubled); // [2,4,6]
  
  filter()
 // Memfilter array berdasarkan kondisi.
  let nums = [1,2,3,4]; let even = nums.filter(x => x % 2 === 0); console.log(even); // [2,4]
  
  reduce()
 // Menggabungkan semua elemen array jadi satu nilai.
  let sum = [1,2,3].reduce((a,b) => a+b); console.log(sum); // 6
  
  forEach()
 // Menjalankan fungsi untuk setiap elemen.
  ["a", "b"].forEach(x => console.log(x));
  
  find()
 // Mengembalikan elemen pertama yang cocok dengan kondisi.
  let found = [1,2,3].find(x => x > 1); console.log(found); // 2
  
  sort()
 // Mengurutkan elemen dalam array.
  let arr = [3,1,2]; arr.sort(); console.log(arr); // [1,2,3]
  
  // Math Methods
  toFixed()
 // Membulatkan angka desimal ke jumlah digit tertentu.
  let n = 3.1415; console.log(n.toFixed(2)); // "3.14"
  
  parseInt()
 // Mengubah string ke bilangan bulat.
  console.log(parseInt("123abc")); // 123
  
  parseFloat()
 // Mengubah string ke bilangan desimal.
  console.log(parseFloat("123.45abc")); // 123.45
  
  // Date Methods
  getFullYear()
 // Mengambil tahun dari objek Date.
  let d = new Date(); console.log(d.getFullYear()); // contoh: 2025
  
  getDay()
 // Mengambil hari dalam minggu (0-6).
  let d = new Date(); console.log(d.getDay()); // contoh: 0 (Minggu)
  
  // 5 Built-in Function di JavaScript
  Function global yang bisa dipanggil langsung tanpa object apapun
  
  alert()
 // Menampilkan popup peringatan (di browser).
  alert("Halo dunia!");
  
  console.log()
 // Menampilkan output ke konsol (debugging).
  console.log("tes log");
  
  setTimeout()
 // Menunda eksekusi fungsi.
  setTimeout(() => { console.log("3 detik lewat") }, 3000);
  
  setInterval()
 // Menjalankan fungsi berulang setiap interval waktu.
  setInterval(() => { console.log("tiap detik") }, 1000);
  
  isNaN()
 // Mengecek apakah nilai adalah NaN.
  console.log(isNaN("abc")); // true
  
  