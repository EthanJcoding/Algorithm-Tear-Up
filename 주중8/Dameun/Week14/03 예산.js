function solution(d, budget) {
  let sortD = d.sort((a, b) => a - b);
  let dTotal = sortD.reduce((a, b) => a + b, 0);
  while (dTotal > budget) {
    dTotal -= sortD[sortD.length - 1];
    sortD.pop();
  }
  return sortD.length;
}

//가장 효율적으로 공간을 쓰는것이 아니라 최대한 많은 부서에 줄 수 있는 개수이기 때문에,
//가장 큰 것부터 차례대로 제거해가면서 비교하면 됨!

//5분내
//6점

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.6MB)
// 테스트 7 〉	통과 (0.16ms, 33.5MB)
// 테스트 8 〉	통과 (0.16ms, 33.6MB)
// 테스트 9 〉	통과 (0.18ms, 33.5MB)
// 테스트 10 〉	통과 (0.15ms, 33.6MB)
// 테스트 11 〉	통과 (0.18ms, 33.5MB)
// 테스트 12 〉	통과 (0.18ms, 33.5MB)
// 테스트 13 〉	통과 (0.16ms, 33.5MB)
// 테스트 14 〉	통과 (0.15ms, 33.5MB)
// 테스트 15 〉	통과 (0.16ms, 33.5MB)
// 테스트 16 〉	통과 (0.09ms, 33.6MB)
// 테스트 17 〉	통과 (0.08ms, 33.6MB)
// 테스트 18 〉	통과 (0.08ms, 33.4MB)
// 테스트 19 〉	통과 (0.08ms, 33.7MB)
// 테스트 20 〉	통과 (0.11ms, 33.5MB)
// 테스트 21 〉	통과 (0.06ms, 33.6MB)
// 테스트 22 〉	통과 (0.06ms, 33.5MB)
// 테스트 23 〉	통과 (0.06ms, 33.6MB)
