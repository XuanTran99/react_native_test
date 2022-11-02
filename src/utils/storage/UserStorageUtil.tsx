import AsyncStorage from '@react-native-async-storage/async-storage';

const USER_INFO_KEY = '@UserInfo';

export var userMemory = '';

// =======================================================

const cacheUserStorage = async (strJson: any) => {
  if (typeof strJson !== 'string') {
    throw new Error('Vui lòng truyền vào kiểu string');
  }

  try {
    await AsyncStorage.setItem(USER_INFO_KEY, strJson);
    cacheUserMemory(strJson);
  } catch (error) {
    throw error;
  }
};

const cacheUserMemory = (strJson: any) => {
  if (typeof strJson !== 'string') {
    throw new Error('Vui lòng truyền vào kiểu string');
  }

  userMemory = strJson;
};

export const cacheUserAsync = async (strJson: any) => {
  try {
    await cacheUserStorage(strJson);
    cacheUserMemory(strJson);
  } catch (error) {
    throw error;
  }
};

// =======================================================

const getUserStorage = async () => {
  try {
    return await AsyncStorage.getItem(USER_INFO_KEY);
  } catch (error) {
    throw error;
  }
};

const getUserMemory = () => {
  return userMemory;
};

export const getUserAsync = async () => {
  let user = getUserMemory();

  if (user) {
    return user;
  } else {
    try {
      return await getUserStorage();
    } catch (error) {
      throw error;
    }
  }
};

// =======================================================

const clearUserStorage = async () => {
  try {
    await AsyncStorage.removeItem(USER_INFO_KEY);
  } catch (error) {
    throw error;
  }
};

const clearUserMemory = () => {
  userMemory = '';
};

export const clearUserAsync = async () => {
  try {
    await clearUserStorage();
    clearUserMemory();
  } catch (error) {
    throw error;
  }
};
