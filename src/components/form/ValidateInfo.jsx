export default function validateInfo(values) {
    let errors = {};
    console.log("1/");
    console.log(values);
    console.log("/1");
    if (!values.name.trim()) {
      errors.name = "Username required";
    }
    var phoneno = /^\d{10}$/;
    if(!values.number.match(phoneno)){
        errors.number = "number is required";
    }
    if(!values.gender.trim()){
        errors.gender = "Select Gender";
    }
    if(!values.agree.trim()){
        errors.agree = "Agree for T&C";
    }
    console.log(errors);
    return errors;
  }


  