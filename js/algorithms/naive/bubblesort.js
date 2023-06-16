function bubbleSort(L){
    steps = []
    for (var i = L.length - 1; i > 2; i--) {
        for (var j = 0; j < i; j++) {
            steps.push([[...L],i,j,j + 1])
            if (L[j] > L[j + 1]) {
                var tmp = L[j];
                L[j] = L[j + 1];
                L[j + 1] = tmp;
            }
        }
    }
    steps.push([[...L],0,0,0])
    return steps;
}
