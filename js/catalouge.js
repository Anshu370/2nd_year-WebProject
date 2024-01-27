var arr = [];

function addTocart(name, quantity, amount) {
    let desc = {'name':name, 'quantity':quantity, 'amount':amount}
    for(let i = 0;i<arr.length;i++){
        if(arr[i]['name'] == desc['name']){
            arr[i]['quantity'] += 1
            return;
        }
    }
    arr.push(desc)
    console.log(arr)
}

console.log(arr)

function clearCart(){
    console.log(arr)
}

// function cart() {
//     var st = ""; var pp = document.getElementById('desc');
//     var ptot = document.getElementById('tot');
//     for (let i = 0; i < arr.length; i++)

//         st = st + arr[i].price.toString() + "------------" + arr[i].qty.toString() + "------------" + arr[i].amt.toString() + "\n"


//     pp.innerText = st;
//     var t = 0;

//     for (let i = 0; i < arr.length; i++)
//         t = t + parseInt(arr[i].amt)//.toString();

//     ptot.innerText = "Total " + t;
// }