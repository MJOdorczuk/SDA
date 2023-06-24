function merge(A, B){
    result = []
    while (A.length > 0 && B.length > 0) {
        if (A[0] < B[0]) result.push(A.shift());
        else result.push(B.shift());
    }
    return [...result,...A,...B];
}

function quickSort(L) {
    if (L.length < 2) return L;
    const half = Math.ceil(L.length / 2);
    return merge(quickSort(L.slice(0,half)), quickSort(L.slice(half)));
}
