

class InputValidator{

  static isValidEmail (email){
   
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

}

export default InputValidator;