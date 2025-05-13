const validateName = (value, field) => {
  if (!value) {
    return "Required";
  } else if (!/^[A-Za-z]+$/i.test(value)) {
    return `Invalid ${field}`;
  }
};
const validatePassword = (value, field, passwordValue) => {
  if (!value) {
    return "Required";
  } else if (value.length < 6) {
    return "6 characters minimum";
  } else if (field === "cpassword" && value !== passwordValue) {
    return "Passwords do not match.";
  }
};

const validateEmail = (value, field) => {
  if(!value){
    return "Required";
  } else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(value)){
    return `Invalid ${field}`;
  }
}

const validateProviderName = (value, field) => {
  if(!value){
    return "Required"
  }
}

const validateAddress = (value, _) => {
  if(!value){
    return "Required";
  }
}

const validateState = (value, _) => {
  if(!value){
    return "Required"
  }
}

const validateZipCode = (value, _) => {
  if(!value){
    return "Required"
  }
}
export default validateName;

export { validateName, validatePassword, validateEmail, validateProviderName, validateAddress, validateState, validateZipCode };
