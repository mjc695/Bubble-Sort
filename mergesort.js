function split (wholeArray){
    if (wholeArray.length === 1) return wholeArray;
    const halfWayMark = Math.round(wholeArray.length/2);
    const firstHalf = wholeArray.slice(0,halfWayMark);
    const secondHalf = wholeArray.slice(halfWayMark);
    return [firstHalf, secondHalf];
}

function merge (array1,array2){
    const combinedArray = [];
    
    while(array1[0] && array2[0]){
        let shifted;
        
        if (array1[0] < array2[0]){
            shifted = array1.shift();
        } else {
            shifted = array2.shift();
        }
        combinedArray.push(shifted);
    }

    if (array1[0]){
        return[...combinedArray,... array1]
    } else {
        //console.log(array2, 'before');
        return[...combinedArray,... array2]
        //console.log(combinedArray, 'after')
    }

}

function mergeSort(array) {
    if (array.length === 1) return array;
    else {
        const left = split(array)[0];
        const right = split(array)[1];
        return merge(mergeSort(left),mergeSort(right));
    }
}

console.log(mergeSort([1,6,3,4,6,1,2,3,9,7,]))