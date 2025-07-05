import { Tabs } from 'expo-router';
import { useColorScheme, Platform } from 'react-native';
import Colors from '@/constants/Colors';
import { Globe, Settings, Info } from 'lucide-react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const tabBarActiveTintColor = Colors[colorScheme ?? 'light'].tint;

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        // Header is shown only on web platform
        headerShown: Platform.OS === 'web',
        tabBarStyle: { 
          height: 60,
          paddingBottom: Platform.OS === 'ios' ? 20 : 10,
          paddingTop: 10
        },
        tabBarLabelStyle: {
          fontFamily: 'Inter-Medium',
          fontSize: 12
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Browse',
          tabBarIcon: ({ color, size }) => <Globe size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: ({ color, size }) => <Info size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}