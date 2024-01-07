function greeter(name:string){
  return "Merhaba " + name
}

let mesaj = greeter("deniz süllü");
console.log(mesaj)


let sayi:number =20;



let sehir: string
sehir = "Ankara";
sehir = "10";

let dogruMu: boolean
dogruMu = false
dogruMu = true;

let sayilar:number[]  = [1,2,3]
let sayılar2: Array<number> = [1,2,3];

let dizi:[number,string] = [2,"ankara"]


enum Renk { Kirmizi=1,Siyah=2,Mavi=3}
let renk: Renk = Renk.Kirmizi

let deger : any = "ANKARA"
deger = 2;
deger = [1,"deniz",2,3,4,5]

function selamVer2():number{
  console.log("Merhaba")
  return 5;
}

// undefined null

let yas:number

class Musteri{
  
}