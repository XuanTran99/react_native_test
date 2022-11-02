export function emailValidation(email: string) {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  if (reg.test(email) === false) {
    // Email is Not Correct
    return false;
  } else {
    // Email is Correct
    return true;
  }
}

export function phoneValidation(phone: string) {
  const reg =
    /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
  if (reg.test(phone) === false) {
    return false;
  } else {
    return true;
  }
}
