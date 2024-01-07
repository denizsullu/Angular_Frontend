var Product2 = /** @class */ (function () {
    function Product2() {
    }
    return Product2;
}());
function save(product) {
    console.log(product.name + " kaydedildi");
}
function save2(product) {
    console.log(product.name + " kaydedildi");
}
save({ id: 1, name: "deniz", unitPrice: 20 });
var mouse = new Product2();
mouse.name = "lg";
save2(mouse);
