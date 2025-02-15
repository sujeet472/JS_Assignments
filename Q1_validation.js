// Create a validation class similar to ‘yup’ and add validations for required, min and max
// for strings. Expose an isValid method that returns true or false based on the argument
// passed

function validateForm(){
    let x= document.forms["myForm"]["fname"].value;
    let siz = x.length
    if(x==""){
        alert("Name must be filled out");
        return false;
    }
    if(siz < 2 ){
        alert("Name must atleast be 2 charcter");
        return false;
    }
    if(siz > 20){
        alert("Name must be less than 20 character");
        return false;
    }
}

// isValid method is used to check if the provided date or time is in right format...