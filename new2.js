function isArray(arr){
    let unique = []
    for (i=0; i<arr.length; i++){
        let isDuplicate = false
        for(j=0; j<unique.length; j++){
            if(arr[i] == unique[j]){
                isDuplicate = true;
                break;
            }
        }if(!isDuplicate){
            unique[unique.length] = arr[i];
        }
    }
    return unique;
}
let a = [1,2,2,4,8,8,7,88,88,94]
let u = isArray(a);
console.log(u);
