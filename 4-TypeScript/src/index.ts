// //  let tsArray=()=>{
// //   let array:number[] = [1,2,3,4,5,6,7,8];
// //   console.log(array)
// // }
// // tsArray();
//
// function tsFunction2(x: number, y: number) {
//     console.log(x + y);
// }
//
// tsFunction2(2, 3)
//
// function tsFunction3(x: any, y: number): number {
//     return x + y;
// }
//
// console.log(tsFunction3(4, 6));

let tsObject = () => {

    // let computer = {
    //     computerName: "Msi Titan",
    //     trade: "msi",
    //     year: "2024"
    // }
    let computer: {
        computerName: string,
        trade: string,
        year: number
    } =
        {
            computerName: "Msi Titan",
            trade: "msi",
            year: 2024
        }
    console.log(computer.computerName)

}
tsObject()

enum computerTrade{
    msi = "MSI12",
    dell = "DELL",
    hp = "HP"
}
console.log(computerTrade.msi)

class Computer{
    computerName:string;
    ram:number;
    newVersion:boolean;
    constructor(computerName:string,ram:number,newVersion:boolean) {
        this.computerName = computerName;
        this.ram =ram;
        this.newVersion = newVersion;
    }
    computerInformatin(){
        console.log(`${this.computerName} ${this.ram} ${this.newVersion}`);
    }
}
let computer1 = new Computer("deniz",2,true);
console.log(computer1.computerName)
computer1.computerInformatin()

class BaseKrediKarti{
    private cardNumber:number;
    private firstName:string;
    private lastName:string;
    constructor(cardNumber:number,firstName:string,lastName:string) {
        this.cardNumber = cardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    pay(){
        console.log(`${this.firstName} ödeme yapıyor şu kart numarası ile ${this.cardNumber}`)
    }
}
class PlatinCard extends BaseKrediKarti{
    private cardType:string;
    constructor(cardNumber:number,firstName:string,lastName:string,cardType:string) {
        super(cardNumber,firstName,lastName);
        this.cardType = cardType;
    }
    pay() {
        super.pay();

    }
}

let denizCreditCard = new PlatinCard(123,"deniz","süllü","gold")
denizCreditCard.pay();

let halitCreditCard = new BaseKrediKarti(1234,"halit","deniz")
let deniz:BaseKrediKarti = new PlatinCard(1,"denizce","deenei","platin")



