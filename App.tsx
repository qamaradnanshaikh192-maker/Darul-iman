import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import { HomeScreen } from './src/screens/HomeScreen';
import { ImamSelectionScreen } from './src/screens/ImamSelectionScreen';
import { QuranScreen } from './src/screens/QuranScreen';
import PrayerScreen from './src/screens/PrayerScreen';
import HadithScreen from './src/screens/HadithScreen';
import ToolsScreen from './src/screens/ToolsScreen';
import { colors } from './src/theme/colors';

type Tab = 'Home' | 'Quran' | 'Prayer' | 'Imams' | 'Hadith' | 'Tools';

const tabs: Tab[] = [
  'Home',
  'Quran',
  'Prayer',
  'Imams',
  'Hadith',
  'Tools',
];

const tabIcons: Record<Tab, string> = {
  Home: '⌂',
  Quran: '📖',
  Prayer: '🕌',
  Imams: '☪',
  Hadith: '📜',
  Tools: '📿',
};

export default function App() {
  const [tab, setTab] = useState<Tab>('Home');
  const [imam, setImam] = useState('Hanafi');

  const navigate = (nextTab: Tab) => {
    setTab(nextTab);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.green}
      />

      <View style={styles.content}>
        {tab === 'Home' && (
          <HomeScreen
            imam={imam}
            onOpenPrayer={() => navigate('Prayer')}
            onChangeImam={() => navigate('Imams')}
            onNavigate={(nextTab) => navigate(nextTab as Tab)}
          />
        )}

        {tab === 'Quran' && <QuranScreen />}

        {tab === 'Prayer' && (
          <PrayerScreen
            imam={imam}
            onChangeMadhhab={() => navigate('Imams')}
          />
        )}

        {tab === 'Imams' && (
          <ImamSelectionScreen
            selected={imam}
            onSelect={(name) => {
              setImam(name);
              navigate('Prayer');
            }}
          />
        )}

        {tab === 'Hadith' && <HadithScreen />}

        {tab === 'Tools' && <ToolsScreen />}
      </View>

      <View style={styles.nav}>
        {tabs.map((item) => {
          const active = tab === item;

          return (
            <Pressable
              key={item}
              onPress={() => navigate(item)}
              style={styles.navItem}
            >
              <Text
                style={[
                  styles.navIcon,
                  active && styles.activeText,
                ]}
              >
                {tabIcons[item]}
              </Text>

              <Text
                style={[
                  styles.navLabel,
                  active && styles.activeText,
                ]}
              >
                {item}
              </Text>

              {active && <View style={styles.activeLine} />}
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    flex: 1,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: colors.green,
    paddingTop: 10,
    paddingBottom: 8,
    borderTopWidth: 1,
    borderTopColor: '#C5A45A',
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
  },
  navIcon: {
    fontSize: 19,
    color: '#FFFFFF',
    marginBottom: 3,
  },
  navLabel: {
    fontSize: 10,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  activeText: {
    color: '#E7C56D',
  },
  activeLine: {
    width: 20,
    height: 2,
    backgroundColor: '#E7C56D',
    borderRadius: 2,
    marginTop: 4,
  },
});
