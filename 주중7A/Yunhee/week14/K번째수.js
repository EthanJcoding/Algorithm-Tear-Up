function solution(array, commands) {
    const answer = [];
    
    commands.forEach(command => {
        const arr = array.slice(command[0]-1, command[1]).sort((a,b) => a - b);
        answer.push(arr[command[2]-1]);
    });
    
    return answer;
}