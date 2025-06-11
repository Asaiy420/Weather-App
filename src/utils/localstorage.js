const STORAGE_KEYS = {
    USER_PREFERENCES: 'weather_app_preferences',
  };

  // function to save user preferences to local storage
  
  export const saveUserPreferences = (preferences) => {
    try {
      localStorage.setItem(STORAGE_KEYS.USER_PREFERENCES, JSON.stringify(preferences));
    } catch (error) {
      console.error('Failed to save preferences:', error);
    }
  };
  // Load the user preferneces from local storage
  export const getUserPreferences = () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.USER_PREFERENCES);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('Failed to load preferences:', error);
      return null;
    }
  };
  // get the default perferences if no preferences are found
  export const getDefaultPreferences = () => ({
    currentCityId: 1,
    temperatureUnit: 'celsius',
    favoriteLocations: [],
    lastUpdated: new Date().toISOString(),
  });