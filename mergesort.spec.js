describe ('Split an array function', function(){

    it ('Is able to split an array into two halves', function(){
        let array = [1,9,5,3,4];
        expect(split(array)).toEqual([[1,9,5],[3,4]]);
        let secondArray = [1];
        expect(split(secondArray)).toEqual([1]);
        
    })

})

describe ('Merge sort two arrays into one array', function(){

    it ('Merges two Arrays', function(){
        let array1 = [1,2];
        let array2 = [3,4];
        expect(merge(array1,array2)).toEqual([1,2,3,4]);
    })
    
    it ('Sorts two arrays into one sorted array',function(){
        let firstArray = [1,5,7];
        let secondArray = [2,4,8];
        expect(merge(firstArray,secondArray)).toEqual([1,2,4,5,7,8]);
    })

})