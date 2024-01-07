

function deger3<T>(x:T):T{
    return x;
}

let sayi3 =  deger3<number>(2);
let sehir3 = deger3<string>("deniz");
console.log(sayi3,sehir3);