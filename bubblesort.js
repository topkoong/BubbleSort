function swap(arr, current, next) {
    const lesser = arr[next]
    arr[next] = arr[current]
    arr[current] = lesser;
}

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < (array.length - i - 1); j++) {
            let currentIndex = j;
            let nextIndex = j + 1;
            if (array[currentIndex] > array[nextIndex]) {
                swap(array, currentIndex, nextIndex)
            }
        }
    }
    return array
}

