function solution(A, K) {
    if(!A.length) {
        return A;
    } else {
        var i = 0;
        while(i < K){
            var e = A.pop();
            A.unshift(e);
            i++;
        }
        return A;
    }
}
