function topla(x, y) {
  return x + y;
}

function topla2(x: number, y: number) {
  return x + y;
}

let topla3 = function (x: number, y: number): number {
  return x + y;
};

function topla4(x: number, y: number = 4): number {
  return x + y;
}

console.log(topla4(3));

function topla5(x: number, y?: number): number {
  if (y) {
    return x + y;
  }
  return x;
}
console.log(topla5(4));

function davetEt(ilkDavetli: string, ...digerleri: string[]): string {
  return ilkDavetli + " " + digerleri.join(" ");
}

console.log(davetEt("Engin","Deniz","Derin","Salih"))