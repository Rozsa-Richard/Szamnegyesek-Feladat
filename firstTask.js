function firstTask(table){
    const corners = [table[0][0], table[0][2], table[2][0], table[2][2]];
    if (corners.reduce((a,b) => a+b) == table[1][1])
        if (table[0][1] == table[0][0] + table[0][2])
            if (table[1][0] == table[0][0] + table[2][0])
                if (table[1][2] == table[0][2] + table[2][2])
                    if (table[2][1] == table[2][0] + table[2][2])
                        return corners;
    return [-1];
}

console.log(firstTask([
[1,2,1],
[2,4,2],
[1,2,1]
]));

console.log(firstTask([
[3,7,4],
[5,16,11],
[2,9,7]
]));