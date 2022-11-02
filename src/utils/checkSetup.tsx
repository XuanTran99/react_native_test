// index lấy theo constant/setup.tsx
export function checkSetupItem(setup: any, index: number) {
  try {
    if (setup[index].value === true) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}
