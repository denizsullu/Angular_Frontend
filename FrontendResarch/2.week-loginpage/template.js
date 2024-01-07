let localStorageDate = () => {
    //Set
    localStorage.setItem("username","Deniz")
     localStorage.setItem("surname","SÜllü")
    //Get
    localStorage.getItem("username")
    localStorage.removeItem("username")
}
localStorageDate();

let objectData = () => {
    let person = {
        name: "deniz",
        surname: "süllü",
        isLogin: true,
        isCreated: 201,
        array: [1,2,3,4,5,6,7],
        language:{
            skill: "java SE",
            age: 20,
        },
        result: function(){
            console.log("function çalıştı")
            //return this.surname + " " +this.isLogin;
        }
    }
    console.log(person)
    console.log(person.language.age)
    person.result();
}

objectData();