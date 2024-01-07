class Ev{
    private odaSayisi:number;
    private pencereSayisi:number;
    private kat:number;
    constructor(odasayisi:number,pencereSayisi:number,kat:number){
        this.odaSayisi = odasayisi;
        this.pencereSayisi = pencereSayisi;
        this.kat= kat;
    }
    
    yemekYe(){
        console.log(this.odaSayisi,this.pencereSayisi,this.kat);
    }
}




class Kisi{
    private _isim:string;

    get isim():string{
        return this._isim;
    }
    set isim(isim:string){
        this._isim =isim;
    }

    kaydet(){
        console.log("veritabanına kaydedildi");
    }
}
class Musteri extends Kisi{
    satisYap(){
        console.log("Satiş yapıldı")
    }
}
class Personel extends Kisi{
    maasOde(){
        console.log("maaş ödendi")
    }
}



let musteri = new Musteri();
console.log(musteri.isim)
musteri.isim ="Engin";