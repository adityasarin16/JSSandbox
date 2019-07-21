// var, let, const
if(flag){
    var name = 'Jane Doe';
    console.log(name);

    //let is same as var but doesnt have glbal scope
    let newName = "Jon Doe";

    //const vars the value of const cannot change
    const constName = 'joe joe'
    console.log(constName);

    // Not allowed
    //constName = 'abc abc';    

    //Have to assign value 
    //const greeting;

    //Object literals
    const person = {
        name: "sara",
        age : 23
    }
    console.log(person);

    person.name = "tara";
    console.log(person);

    const numArray = [11,22,33,44];
    console.log(numArray);
    numArray.push(55);
    console.log(numArray);
}