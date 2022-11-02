export function checkRole(user: any, role: string) {
  try {
    let obj = user.roles.find((x: any) => x.name === role);
    let index = user.roles.indexOf(obj);
    if (index !== -1) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

export function checkAccountVerified(user: any) {
  try {
    //tài khoản người trả giá
    if (checkRole(user, 'bidder')) {
      if (user.is_ekyc === 1) {
        return true;
      } else {
        return false;
      }
    }

    //tài khoản người công ty
    if (checkRole(user, 'seller')) {
      if (user.company_id !== null) {
        return true;
      } else {
        return false;
      }
    }
  } catch (error) {
    return false;
  }
}
