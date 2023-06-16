function selectionSort(L){
    steps = []
    for (var i = 0; i < L.length - 1; i++) {
        var mini = i;
        for (var j = i + 1; j < L.length; j++) {
            steps.push([[...L],i,j,mini])
            if (L[mini] > L[j]) {
                mini = j;
            }
        }
        var tmp = L[i];
        L[i] = L[mini];
        L[mini] = tmp;
    }
    steps.push([[...L],0,0,0])
    return steps;
}
