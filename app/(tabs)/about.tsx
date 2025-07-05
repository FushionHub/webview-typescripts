import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AdBanner from '@/components/AdBanner';
import Colors from '@/constants/Colors';

export default function AboutScreen() {
  return (
    <SafeAreaView style={styles.container} edges={['right', 'left']}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Image 
            source={{ uri: 'https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg' }} 
            style={styles.headerImage} 
          />
          <Text style={styles.title}>FushionHub AI</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About FushionHub AI</Text>
          <Text style={styles.sectionText}>
            FushionHub AI is a cutting-edge platform providing AI-powered solutions
            for businesses and individuals. Our website offers a wide range of AI tools,
            resources, and services to help you leverage the power of artificial intelligence.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Features</Text>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>AI Tools</Text>
            <Text style={styles.featureText}>
              Access a variety of AI-powered tools to enhance your productivity.
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>Learning Resources</Text>
            <Text style={styles.featureText}>
              Expand your knowledge with our comprehensive AI learning materials.
            </Text>
          </View>
          <View style={styles.featureItem}>
            <Text style={styles.featureTitle}>AI Services</Text>
            <Text style={styles.featureText}>
              Discover professional AI services tailored to your business needs.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>App Information</Text>
          <Text style={styles.sectionText}>
            This app provides a convenient way to access the FushionHub AI website
            on your mobile device. Enjoy a seamless browsing experience with quick access
            to all the features available on the website.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
          <Text style={styles.copyrightText}>© 2025 FushionHub AI. All rights reserved.</Text>
        </View>
      </ScrollView>
      <AdBanner />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  headerImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Inter-Bold',
    color: Colors.light.text,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 12,
    color: Colors.light.text,
  },
  sectionText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    lineHeight: 24,
    color: Colors.light.text,
  },
  featureItem: {
    marginBottom: 16,
  },
  featureTitle: {
    fontSize: 17,
    fontFamily: 'Inter-SemiBold',
    marginBottom: 4,
    color: Colors.light.text,
  },
  featureText: {
    fontSize: 15,
    fontFamily: 'Inter-Regular',
    lineHeight: 22,
    color: Colors.light.darkGray,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    textAlign: 'center',
    color: Colors.light.darkGray,
    marginBottom: 4,
  },
  copyrightText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    color: Colors.light.darkGray,
  },
});