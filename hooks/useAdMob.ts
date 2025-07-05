import { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import * as AdMob from 'expo-ads-admob';

export const useAdMob = () => {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const initializeAdMob = async () => {
      if (Platform.OS !== 'web') {
        try {
          await AdMob.setRequestConfiguration({
            // Warning: For demonstration purposes
            // In production, set to true for ads to be served through ad networks 
            // that have been certified by the Children's Online Privacy Protection Act
            maxAdContentRating: 'MA',
            tagForChildDirectedTreatment: false,
            tagForUnderAgeOfConsent: false,
            testDeviceIdentifiers: ['EMULATOR'],
          });
          setIsInitialized(true);
        } catch (error) {
          console.error('Error initializing AdMob:', error);
        }
      }
    };

    initializeAdMob();
  }, []);

  return { isInitialized };
};

export default useAdMob;