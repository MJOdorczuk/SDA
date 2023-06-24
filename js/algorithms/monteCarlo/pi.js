function monteCarloPi(N){
    var hit = 0;
    var xs = Array.from({length: N}, () => Math.random());
    var ys = Array.from({length: N}, () => Math.random());
    for (var i = 0; i < N; i++) {
        if (xs[i] * xs[i] + ys[i] * ys[i] <= 1) hit++;
    }
    return [hit * 4 / N, xs, ys];
}
