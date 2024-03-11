// while and do while loop

let val = 1
while (val < 5) {
    console.log("while loop ran");
    val = val + 1;
};


let arr = ['ironman', 'batman', 'superman', 'spiderman'];
let i = 0;
while (i < arr.length) {
    console.log(`array element ${arr[i]}`);
    i = i + 1;
}


// do while loop

let j = 0;
do {
    console.log(`loop: ${j}`);
    j = j + 1;
} while (j < 5);


// special case, even if the condtion is wrong --- first iteration will always work for do-while loop
// as it checks the condition after the first iteration
let k = 10;
do {
    console.log(`wrong loop: ${k}`);
    k = k + 1;
} while (k < 5);
