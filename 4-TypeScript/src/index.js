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
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var tsObject = function () {
    // let computer = {
    //     computerName: "Msi Titan",
    //     trade: "msi",
    //     year: "2024"
    // }
    var computer = {
        computerName: "Msi Titan",
        trade: "msi",
        year: 2024
    };
    console.log(computer.computerName);
};
tsObject();
var computerTrade;
(function (computerTrade) {
    computerTrade["msi"] = "MSI12";
    computerTrade["dell"] = "DELL";
    computerTrade["hp"] = "HP";
})(computerTrade || (computerTrade = {}));
console.log(computerTrade.msi);
var Computer = /** @class */ (function () {
    function Computer(computerName, ram, newVersion) {
        this.computerName = computerName;
        this.ram = ram;
        this.newVersion = newVersion;
    }
    Computer.prototype.computerInformatin = function () {
        console.log("".concat(this.computerName, " ").concat(this.ram, " ").concat(this.newVersion));
    };
    return Computer;
}());
var computer1 = new Computer("deniz", 2, true);
console.log(computer1.computerName);
computer1.computerInformatin();
var BaseKrediKarti = /** @class */ (function () {
    function BaseKrediKarti(cardNumber, firstName, lastName) {
        this.cardNumber = cardNumber;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    BaseKrediKarti.prototype.pay = function () {
        console.log("".concat(this.firstName, " \u00F6deme yap\u0131yor \u015Fu kart numaras\u0131 ile ").concat(this.cardNumber));
    };
    return BaseKrediKarti;
}());
var PlatinCard = /** @class */ (function (_super) {
    __extends(PlatinCard, _super);
    function PlatinCard(cardNumber, firstName, lastName, cardType) {
        var _this = _super.call(this, cardNumber, firstName, lastName) || this;
        _this.cardType = cardType;
        return _this;
    }
    PlatinCard.prototype.pay = function () {
        _super.prototype.pay.call(this);
    };
    return PlatinCard;
}(BaseKrediKarti));
var denizCreditCard = new PlatinCard(123, "deniz", "süllü", "gold");
denizCreditCard.pay();
var halitCreditCard = new BaseKrediKarti(1234, "halit", "deniz");
var deniz = new PlatinCard(1, "denizce", "deenei", "platin");
