import { createContext, ReactNode, useEffect, useState } from 'react';
import THEMES from 'src/utils/constants';

interface SettingsProps {
  theme: string;
}

interface SettingsContextData {
  settings: SettingsProps;
  saveSettings: (theme: SettingsProps) => void;
  handleSaveSettings: (update: SettingsProps) => void;
}

interface SettingsProviderProps {
  children: ReactNode;
  settings?: SettingsProps;
}

const defaultSettings = {
  theme: THEMES.LIGHT,
};

export const restoreSettings = () => {
  let settings = null;

  try {
    const storedData = window.localStorage.getItem('settings');

    if (storedData) {
      settings = JSON.parse(storedData);
    }
  } catch (error) {
    console.error(error);
  }

  return settings;
};

export const storeSettings = (settings: SettingsProps) => {
  window.localStorage.setItem('settings', JSON.stringify(settings));
};

export const SettingsContext = createContext({
  settings: defaultSettings,
  // saveSettings: () => {},
} as SettingsContextData);

export function SettingsProvider({
  settings,
  children,
}: SettingsProviderProps) {
  const [currentSettings, setCurrentSettings] = useState(
    settings || defaultSettings,
  );

  function handleSaveSettings(update: SettingsProps) {
    const mergedSettings = update;

    setCurrentSettings(mergedSettings);
    storeSettings(mergedSettings);
  }

  useEffect(() => {
    const restoredSettings = restoreSettings();

    if (restoredSettings) {
      setCurrentSettings(restoredSettings);
    }
  }, []);

  return (
    <SettingsContext.Provider
      value={{
        settings: currentSettings,
        saveSettings: handleSaveSettings,
        handleSaveSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export const SettingsConsumer = SettingsContext.Consumer;

export default SettingsContext;
