import React, { forwardRef } from 'react';
import { StyleSheet, RefreshControl } from 'react-native';
import { WebView } from 'react-native-webview';
import { ScrollView } from 'react-native-gesture-handler';
import ErrorView from './ErrorView';

interface WebViewContainerProps {
  url: string;
  webViewRef: React.RefObject<WebView>;
  onNavigationStateChange: (event: any) => void;
  onLoadStart: () => void;
  onLoadEnd: () => void;
  onError: (error: any) => void;
  onOpenExternalLink?: (url: string) => Promise<boolean>;
  refreshControl?: React.ReactElement;
}

const WebViewContainer = ({
  url,
  webViewRef,
  onNavigationStateChange,
  onLoadStart,
  onLoadEnd,
  onError,
  onOpenExternalLink,
  refreshControl,
}: WebViewContainerProps) => {
  const handleShouldStartLoadWithRequest = (request: any) => {
    // If we have an external link handler and the URL is different from our main URL
    if (onOpenExternalLink && (request.url.startsWith('http') && !request.url.includes(url))) {
      // Try to handle it externally
      onOpenExternalLink(request.url).then(handled => {
        // If the URL wasn't handled externally, let WebView handle it
        return !handled;
      });
      return false;
    }
    // Allow WebView to handle the URL
    return true;
  };

  const renderError = (errorDomain: string, errorCode: number, errorDesc: string) => {
    return <ErrorView onRetry={() => webViewRef.current?.reload()} />;
  };

  return (
    <WebView
      ref={webViewRef}
      source={{ uri: url }}
      style={styles.webView}
      originWhitelist={['*']}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      startInLoadingState={true}
      onNavigationStateChange={onNavigationStateChange}
      onLoadStart={onLoadStart}
      onLoadEnd={onLoadEnd}
      onError={onError}
      onShouldStartLoadWithRequest={handleShouldStartLoadWithRequest}
      renderError={renderError}
      pullToRefreshEnabled={true}
      decelerationRate="normal"
      // For Android and iOS
      nestedScrollEnabled={true}
      // For web
      containerStyle={styles.webViewContainer}
    />
  );
};

const styles = StyleSheet.create({
  webView: {
    flex: 1,
  },
  webViewContainer: {
    flex: 1,
  },
});

export default WebViewContainer;