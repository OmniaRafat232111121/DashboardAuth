import * as Yup from "yup";

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const LoginSchema = Yup.object({

  mobile: Yup.string().matches(phoneRegExp, 'Phone number is not valid').min(11, "Mobile number must be 11 number")
    .max(11, "Mobile number Max length is 11 numbers"),
  password: Yup.string().min(6).required("Please enter your password !"),

});