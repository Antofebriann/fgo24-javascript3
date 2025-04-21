// mencari built in method atau function
// membuat proses manual sesuai dengan built in method atau function yang ditemukan

function concatManual(array1, array2) {
    let result = [];
    for (let i = 0; i < array1.length; i++) {
      result.push(array1[i]);
    }
    for (let i = 0; i < array2.length; i++) {
      result.push(array2[i]);
    }
    return result;
  }

  const array1 = [1, 2, 3];
  const array2 = [4, 5, 6];

  const resultConcat = array1.concat(array2);
  console.log(resultConcat); 

  
  const resultManual = concatManual(array1, array2);
  console.log(resultManual);

 