import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = '@Token';

export var tokenMemory = '';

// =======================================================

const cacheTokenStorage = async (strToken: string) => {
  try {
    await AsyncStorage.setItem(TOKEN_KEY, strToken);
  } catch (error) {
    throw error;
  }
};

const cacheTokenMemory = (strToken: string) => {
  tokenMemory = strToken;
};

export const cacheTokenAsync = async (strToken: string) => {
  try {
    await cacheTokenStorage(strToken);
    cacheTokenMemory(strToken);
  } catch (error) {
    throw error;
  }
};

// =======================================================

const getTokenStorage = async () => {
  try {
    const value = await AsyncStorage.getItem(TOKEN_KEY);
    if (value !== null) {
      return value;
    }
  } catch (e) {
    // error reading value
  }
};

const getTokenMemory = () => {
  return tokenMemory;
};

export const getTokenAsync = async () => {
  let token = getTokenMemory();
  if (token) {
    return token;
  } else {
    try {
      return await getTokenStorage();
    } catch (error) {
      throw error;
    }
  }
};

// =======================================================

const clearTokenStorage = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY);
  } catch (error) {
    throw error;
  }
};

const clearTokenMemory = () => {
  tokenMemory = '';
};

export const clearTokenAsync = async () => {
  try {
    await clearTokenStorage();
    clearTokenMemory();
  } catch (error) {
    throw error;
  }
};
