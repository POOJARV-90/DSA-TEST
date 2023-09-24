const x = "hello";
function removeDuplicates() {
    let result = "";
    for (let i = 0; i < x.length; i++) {
      let char = x[i];
      if (result.indexOf(char) === -1) {
        result += char;
        for (let j = i + 1; j < x.length; j++) {
          if (x[j] === char) {
            i = j; 
          }
        }
      }
    }
    return result;
  }
  
  
  
  const stringWithoutDuplicates = removeDuplicates(x);
  console.log(stringWithoutDuplicates); 
  