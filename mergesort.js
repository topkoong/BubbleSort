function split(wholeArray) {

    /* your code here to define the firstHalf and secondHalf arrays */
    const center = Math.floor(wholeArray.length / 2);
    const firstHalf = wholeArray.slice(0, center);
    const secondHalf = wholeArray.slice(center);
    return [firstHalf, secondHalf];
}

function merge(left, right) {
    // create‘ results’ array
    const results = [];
    // while there are still elements in both arrays
    while(left.length && right.length) {
        // If the first element the left half is less than first in right half
        if(left[0] < right[0]) {
            // shift the element from left into a‘ result’ array
            results.push(left.shift())
        } else {
            // else‘ shift’ the element from right into a‘ result’ array
            results.push(right.shift())
        }
    }
    // Take everything from the array that still has stuff in it and put it in results
    return [...results, ...left, ...right];
}

function mergeSort(array) {

    /* your code here */
    //base case: check if arr.length is less than two, if so, then return the array
    if (array.length === 1) return array;
    //create the center index
    const left = split(array)[0];
    const right= split(array)[1];
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
}
