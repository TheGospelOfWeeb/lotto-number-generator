

// document.getElementById("new-number").onclick = function ranNumber() {
    
//     let number = "";

//     let random = Math.floor(Math.random() * 71);

//     number = random;
 
//     document.getElementById("ball-1").innerHTML = number;

// }

document.getElementById("new-number").onclick = function ranNumber() {

    let arr = [];
    let arr2 = [];

    for (let i = 0; i < 5; i++) {
        arr.push(Math.floor(Math.random() * 70) + 1);
        arr2.push(Math.floor(Math.random() * 25) + 1);
    }




    document.getElementById("ball-1").innerHTML = arr[0];
    document.getElementById("ball-2").innerHTML = arr[1];
    document.getElementById("ball-3").innerHTML = arr[2];
    document.getElementById("ball-4").innerHTML = arr[3];
    document.getElementById("ball-5").innerHTML = arr[4];
    document.getElementById("ball-6").innerHTML = arr2[0];
}