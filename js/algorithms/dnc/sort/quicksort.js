var steps = [];

function quickSort(arr, low, high) {
    if (low < high) {
        let pivotIndex = partition(arr, low, high);
        quickSort(arr, low, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, high);
    }
}

function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
        steps.push([[...arr], i, high, j]);
        if (arr[j] <= pivot) {
        i++;
        swap(arr, i, j);
        }
    }
    swap(arr, i + 1, high);
    return i + 1;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function stepQuickSort(L) {
    steps = [];
    quickSort(L, 0, L.length - 1);
    steps.push([[...L], -1, -1, -1]);
    return steps;
}
