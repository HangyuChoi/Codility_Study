function solution(N) {
    var binary = N.toString(2);
    var gap = 0;
    var maxGap = 0;
    for(var e of binary){
        if(e === "1"){
            if(gap >= maxGap){
                maxGap = gap;
            }
            gap = 0;
        } else {
            gap++;
        }
    }
    return maxGap;
}
