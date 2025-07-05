import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import { AdMobBanner } from 'expo-ads-admob';
import Colors from '@/constants/Colors';

// Test ad units - replace with real ones in production
const TEST_BANNER_ID = Platform.select({
  ios: 'ca-app-pub-3940256099942544/2934735716',
  android: 'ca-app-pub-3940256099942544/6300978111',
  default: 'ca-app-pub-3940256099942544/6300978111',
});

const AdBanner = () => {
  const [adError, setAdError] = useState(false);

  const handleAdError = () => {
    console.log('Ad failed to load');
    setAdError(true);
  };

  const handleAdLoaded = () => {
    console.log('Ad loaded successfully');
    setAdError(false);
  };

  // Skip rendering on web platform for now
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <View style={styles.container}>
      {!adError && (
        <AdMobBanner
          bannerSize="smartBannerPortrait"
          adUnitID={TEST_BANNER_ID}
          servePersonalizedAds={true}
          onDidFailToReceiveAdWithError={handleAdError}
          onAdLoaded={handleAdLoaded}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
});

export default AdBanner;