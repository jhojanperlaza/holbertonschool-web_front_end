function welcome(firstName, lastName){
    fullName = firstName + ' ' + lastName;
    function displayFullName (){
        alert("Welcome" + fullName + "!");
    }
    displayFullName();
}