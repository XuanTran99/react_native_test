import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAllData = async () => {
  try {
    await AsyncStorage.getAllKeys().then(keys =>
      AsyncStorage.multiRemove(keys),
    );
  } catch (error) {
    throw error;
  }
};
