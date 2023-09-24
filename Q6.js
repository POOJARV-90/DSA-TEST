// -------------------------------------Q6------------------------------------------------

let nums1 = [1,2,2,3]

function removeDuplicates(nums1){
    for(var i=0;i<nums1.length -1;i++){
        if(nums1[i+1]==nums1[i]){
           nums1.splice(i+1,1)
           i--   
        }
    }
}

removeDuplicates(nums1)
console.log("after removing duplicates",nums1)//[1,2,3]
