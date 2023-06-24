function stepInsertionSort(L){
    steps = []
    var value = 0;
    for (var i = 1; i < L.length; i++) {
        value = L[i];
        for (var j = i - 1; j >= 0 && L[j] > value; j--) {
            steps.push([[...L],i,j,j])
            L[j + 1] = L[j];
            L[j] = value;
        }
    }
    steps.push([[...L],0,0,0])
    return steps;
}
