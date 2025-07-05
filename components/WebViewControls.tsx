import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Platform } from 'react-native';
import { ArrowLeft, ArrowRight, RefreshCw } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface WebViewControlsProps {
  canGoBack: boolean;
  canGoForward: boolean;
  onGoBack: () => void;
  onGoForward: () => void;
  onRefresh: () => void;
  currentUrl: string;
}

const WebViewControls = ({
  canGoBack,
  canGoForward,
  onGoBack,
  onGoForward,
  onRefresh,
  currentUrl,
}: WebViewControlsProps) => {
  // Show controls only on mobile platforms, not on web
  if (Platform.OS === 'web') {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.controlsRow}>
        <TouchableOpacity 
          style={[styles.controlButton, !canGoBack && styles.controlButtonDisabled]} 
          onPress={onGoBack}
          disabled={!canGoBack}
        >
          <ArrowLeft 
            size={22} 
            color={canGoBack ? Colors.light.text : Colors.light.lightGray} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.controlButton} onPress={onRefresh}>
          <RefreshCw size={22} color={Colors.light.text} />
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.controlButton, !canGoForward && styles.controlButtonDisabled]} 
          onPress={onGoForward}
          disabled={!canGoForward}
        >
          <ArrowRight 
            size={22} 
            color={canGoForward ? Colors.light.text : Colors.light.lightGray} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  controlsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  controlButton: {
    padding: 10,
    borderRadius: 8,
  },
  controlButtonDisabled: {
    opacity: 0.5,
  },
  urlText: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
    textAlign: 'center',
  },
});

export default WebViewControls;