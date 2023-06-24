var steps = [];

function stepMergeSort(L) {
    const N = L.length;
    var L1 = [...L];
    var L2 = new Array(N).fill(0);
    var ns = Array.from(Array(N + 1),(x,i)=>i);
    var ns2 = [];
    steps = [];
    while(ns.length > 2) {
        var j = 0;
        for (var i = 0; i < ns.length - 1; i+=2) {
            ns2.push(ns[i]);
            var i1 = ns[i];
            var i2 = ns[i + 1];
            while (i1 < ns[i + 1] && i2 < ns[i + 2]) {
                steps.push([L1.concat(L2), i1, i2, N + j]);
                if (L1[i1] < L1[i2]) {
                    L2[j] = L1[i1++];
                } else {
                    L2[j] = L1[i2++];
                }
                j++;
            }
            for (; i1 < ns[i + 1]; i1++){
                steps.push([L1.concat(L2), i1, i1, N + j]);
                L2[j++] = L1[i1];
            }
            for (; i2 < ns[i + 2]; i2++){
                steps.push([L1.concat(L2), i2, i2, N + j]);
                L2[j++] = L1[i2];
            }
        }
        for (var i = 0; i < N; i++) {
            steps.push([L1.concat(L2), i, N + i, -1]);
            L1[i] = L2[i];
        }
        L1 = L2;
        L2 = new Array(N).fill(0);
        steps.push([L1.concat(L2), -1, -1, -1]);
        ns = [...ns2,N];
        ns2 = [];
    }
    for (var i = 0; i < N; i++){
        L[i] = L1[i]
    }
    return steps
}
