//   ---------------------------------Q3------------------------------------------

let array = [1,2,3,4,5]

function sumup (array){
    var sum = 0
    for(let i = 0 ; i < array.length;i++){
        sum += array[i]
    }

 return sum
}

console.log(sumup(array)); //15