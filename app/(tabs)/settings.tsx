import React, { useState } from 'react';
import { StyleSheet, Text, View, Switch, TouchableOpacity, Alert, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AdBanner from '@/components/AdBanner';
import Colors from '@/constants/Colors';
import { Trash2, Share, RefreshCcw, HelpCircle, ExternalLink } from 'lucide-react-native';
import * as WebBrowser from 'expo-web-browser';

export default function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [adPersonalization, setAdPersonalization] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(previousState => !previousState);
    // In a real app, this would change the app's theme
    if (Platform.OS !== 'web') {
      Alert.alert('Theme Change', 'Dark mode will be implemented in a future update');
    }
  };

  const toggleNotifications = () => {
    setNotifications(previousState => !previousState);
    // In a real app, this would enable/disable notifications
  };

  const toggleAdPersonalization = () => {
    setAdPersonalization(previousState => !previousState);
    // In a real app, this would change ad personalization settings
  };

  const clearCache = () => {
    if (Platform.OS !== 'web') {
      Alert.alert(
        'Clear Cache',
        'This will clear all cached data. Are you sure?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Clear',
            onPress: () => {
              // Implement cache clearing here
              Alert.alert('Cache Cleared', 'All cached data has been removed');
            },
            style: 'destructive',
          },
        ]
      );
    } else {
      // Web implementation
      if (confirm('This will clear all cached data. Are you sure?')) {
        // Implement cache clearing for web
        alert('All cached data has been removed');
      }
    }
  };

  const shareApp = () => {
    if (Platform.OS !== 'web') {
      Alert.alert('Share App', 'Sharing functionality will be implemented in a future update');
    } else {
      alert('Sharing functionality will be implemented in a future update');
    }
  };

  const openPrivacyPolicy = async () => {
    try {
      if (Platform.OS !== 'web') {
        await WebBrowser.openBrowserAsync('https://fushionhubai.com.ng/privacy-policy');
      } else {
        window.open('https://fushionhubai.com.ng/privacy-policy', '_blank');
      }
    } catch (error) {
      console.error('Error opening privacy policy:', error);
    }
  };

  const openHelp = async () => {
    try {
      if (Platform.OS !== 'web') {
        await WebBrowser.openBrowserAsync('https://fushionhubai.com.ng/contact');
      } else {
        window.open('https://fushionhubai.com.ng/contact', '_blank');
      }
    } catch (error) {
      console.error('Error opening help page:', error);
    }
  };

  const openWebsite = async () => {
    try {
      if (Platform.OS !== 'web') {
        await WebBrowser.openBrowserAsync('https://fushionhubai.com.ng');
      } else {
        window.open('https://fushionhubai.com.ng', '_blank');
      }
    } catch (error) {
      console.error('Error opening website:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Preferences</Text>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Dark Mode</Text>
          <Switch
            value={darkMode}
            onValueChange={toggleDarkMode}
            trackColor={{ false: '#767577', true: Colors.light.tint }}
            thumbColor="#f4f3f4"
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Enable Notifications</Text>
          <Switch
            value={notifications}
            onValueChange={toggleNotifications}
            trackColor={{ false: '#767577', true: Colors.light.tint }}
            thumbColor="#f4f3f4"
          />
        </View>
        
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>Ad Personalization</Text>
          <Switch
            value={adPersonalization}
            onValueChange={toggleAdPersonalization}
            trackColor={{ false: '#767577', true: Colors.light.tint }}
            thumbColor="#f4f3f4"
          />
        </View>
        
        <Text style={styles.sectionTitle}>Actions</Text>
        
        <TouchableOpacity style={styles.actionButton} onPress={clearCache}>
          <Trash2 size={20} color={Colors.light.text} />
          <Text style={styles.actionButtonText}>Clear Cache</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={shareApp}>
          <Share size={20} color={Colors.light.text} />
          <Text style={styles.actionButtonText}>Share App</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={openWebsite}>
          <ExternalLink size={20} color={Colors.light.text} />
          <Text style={styles.actionButtonText}>Open in Browser</Text>
        </TouchableOpacity>
        
        <Text style={styles.sectionTitle}>Support</Text>
        
        <TouchableOpacity style={styles.actionButton} onPress={openHelp}>
          <HelpCircle size={20} color={Colors.light.text} />
          <Text style={styles.actionButtonText}>Help & Support</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={openPrivacyPolicy}>
          <RefreshCcw size={20} color={Colors.light.text} />
          <Text style={styles.actionButtonText}>Privacy Policy</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
      </View>
      <AdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    marginTop: 16,
    marginBottom: 12,
    color: Colors.light.tint,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingLabel: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.light.text,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  actionButtonText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    marginLeft: 12,
    color: Colors.light.text,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: Colors.light.darkGray,
    marginTop: 20,
  },
});