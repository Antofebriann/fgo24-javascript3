// tampilkan list email yang sudah diubah dalam bentuk array
//mengubah uppercase email menjadi lowercase semua
// dengan menggunakan built-in method
// tanpa menggunakan built-in method
//array of string
//handling fetch data dengan then-catch dan async-await

//dengan built-in method
const url = "https:jsonplaceholder.typicode.com/users"

  fetch (url)
  .then(response => response.json())
  .then(data => console.log(data.map(item => item.email.toLowerCase())))

  const retrieveData = async()=>{
   try{
    const fetchData = await fetch(url)
    const data = await fetchData.json()
    const emailOfUsers = data.map(item=>item.email.toLowerCase())
    console.log(emailOfUsers)
   }catch(err){
    console.log(err)
    }
  }
retrieveData()

//tanpa built-in method
function ToLowerCase(str) {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const lower = "abcdefghijklmnopqrstuvwxyz"
  let result = ""

  for (let i = 0; i < str.length; i++) {
    let found = false
    for (let j = 0; j < upper.length; j++) {
      if (str[i] === upper[j]) {
        result += lower[j]
        found = true
        break
      }
    }
    if (!found) {
      result += str[i]
    }
  }

  return result
}

async function retrieveData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await response.json()

    const emailList = []

    for (let i = 0; i < data.length; i++) {
      const email = data[i].email;
      const lowerEmail = ToLowerCase(email)
      emailList[emailList.length] = lowerEmail
    }

    console.log(emailList)
  } catch (error) {
    console.error("Error:", error)
  }
}

retrieveData()
