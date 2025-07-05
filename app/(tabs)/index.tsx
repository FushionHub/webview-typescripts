import React, { useState, useRef } from 'react';
import { StyleSheet, View, ActivityIndicator, RefreshControl, Platform, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WebViewContainer from '@/components/WebViewContainer';
import AdBanner from '@/components/AdBanner';
import WebViewControls from '@/components/WebViewControls';
import Colors from '@/constants/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';
import * as WebBrowser from 'expo-web-browser';

const WEBSITE_URL = 'https://fushionhubai.com.ng/';

export default function WebViewScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(false);
  const [currentUrl, setCurrentUrl] = useState(WEBSITE_URL);
  const [refreshing, setRefreshing] = useState(false);
  const webViewRef = useRef<WebView>(null);

  const handleNavigationStateChange = (navState: any) => {
    setCanGoBack(navState.canGoBack);
    setCanGoForward(navState.canGoForward);
    setCurrentUrl(navState.url);
    setIsLoading(navState.loading);
  };

  const handleLoadStart = () => {
    setIsLoading(true);
  };

  const handleLoadEnd = () => {
    setIsLoading(false);
    setRefreshing(false);
  };

  const handleLoadError = (error: any) => {
    setIsLoading(false);
    setRefreshing(false);
    if (Platform.OS !== 'web') {
      Alert.alert(
        'Connection Error',
        'Failed to load the website. Please check your internet connection and try again.',
        [{ text: 'OK' }]
      );
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);
    webViewRef.current?.reload();
  };

  const goBack = () => {
    webViewRef.current?.goBack();
  };

  const goForward = () => {
    webViewRef.current?.goForward();
  };

  // Function to handle external links if needed
  const handleOpenLink = async (url: string) => {
    if (Platform.OS !== 'web') {
      try {
        await WebBrowser.openBrowserAsync(url);
        return true; // Return true to prevent default handling
      } catch (error) {
        console.error('Error opening browser:', error);
      }
    }
    return false; // Let WebView handle the URL
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <View style={styles.webViewContainer}>
        <WebViewContainer
          url={WEBSITE_URL}
          webViewRef={webViewRef}
          onNavigationStateChange={handleNavigationStateChange}
          onLoadStart={handleLoadStart}
          onLoadEnd={handleLoadEnd}
          onError={handleLoadError}
          onOpenExternalLink={handleOpenLink}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[Colors.light.tint]}
              tintColor={Colors.light.tint}
            />
          }
        />
        
        {isLoading && (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={Colors.light.tint} />
          </View>
        )}
      </View>
      
      <WebViewControls
        canGoBack={canGoBack}
        canGoForward={canGoForward}
        onGoBack={goBack}
        onGoForward={goForward}
        onRefresh={handleRefresh}
        currentUrl={currentUrl}
      />
      
      <AdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webViewContainer: {
    flex: 1,
    position: 'relative',
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});