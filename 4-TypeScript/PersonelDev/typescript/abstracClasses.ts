abstract class KrediBase {
    constructor() {
        
    }
    kaydet():void{
        console.log("Veritabanına kaydedidi")
    }
    abstract hesapla():void;
}

class TuketiciKredisi extends KrediBase{
    constructor(){
        super();
    }
    //Overwriting
    hesapla(): void {
        console.log("tüketici kredisi hesaplandı")
    }
}


class MortgageKredisi extends KrediBase {
  constructor() {
    super();
  }
  //Overwriting
  hesapla(): void {
    console.log("ev kredisi hesaplandı");
  }

}

let tuketici = new TuketiciKredisi();
tuketici.hesapla()
tuketici.kaydet()

let kredi:KrediBase
kredi = new TuketiciKredisi();
kredi = new MortgageKredisi();