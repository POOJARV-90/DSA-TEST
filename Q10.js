let nums = [1,3,4,6,2,8]
//

function sortNumber(nums){
    for(let i = 0 ; i < nums.length-1 ; i++){
        
        nums.sort((a,b)=> a-b)
    }

}
sortNumber(nums)
console.log(nums); //[1,2,3,4,6,8]