var Ev = /** @class */ (function () {
    function Ev(odasayisi, pencereSayisi, kat) {
        this.odaSayisi = odasayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat = kat;
    }
    Ev.prototype.yemekYe = function () {
        console.log("yemek ye");
    };
    return Ev;
}());
var ev = new Ev(3, 4, 5);



let obje = { ad: "deniz" };
//prototyping es6 ile birlikte geldi 
obje.soyadı = "deniz süllü";
console.log(obje.soyadı)