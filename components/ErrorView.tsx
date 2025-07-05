import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { WifiOff, RefreshCw } from 'lucide-react-native';
import Colors from '@/constants/Colors';

interface ErrorViewProps {
  onRetry: () => void;
}

const ErrorView = ({ onRetry }: ErrorViewProps) => {
  return (
    <View style={styles.container}>
      <WifiOff size={60} color={Colors.light.tint} style={styles.icon} />
      <Text style={styles.title}>Connection Error</Text>
      <Text style={styles.message}>
        Unable to connect to the website. Please check your internet connection and try again.
      </Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <RefreshCw size={20} color="#fff" />
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: 'Inter-Bold',
    color: Colors.light.text,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: Colors.light.darkGray,
    marginBottom: 30,
    lineHeight: 24,
  },
  retryButton: {
    flexDirection: 'row',
    backgroundColor: Colors.light.tint,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  retryText: {
    color: '#fff',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    marginLeft: 8,
  },
});

export default ErrorView;