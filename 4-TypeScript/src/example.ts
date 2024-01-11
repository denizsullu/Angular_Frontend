function typeAssertionsFunction(){
    console.log("Type Assertions: Tür Değiştirme")
    let data= "deniz";

    let value:number=data.length;
    console.log(value)

    let value2= (<string>data).length;
    console.log(value2)

    let value3= (data as string).length;
    console.log(value2)
}
typeAssertionsFunction()