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
            onNavigate={(nextTab) => navigate(nextTab)}
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
        {(['Home', 'Quran', 'Prayer', 'Hadith', 'Tools'] as const).map(
          (item) => (
            <Pressable
              key={item}
              onPress={() => navigate(item)}
              style={styles.navItem}
            >
              <Text
                style={[
                  styles.navLabel,
                  tab === item && styles.navActive,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          )
        )}
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
    paddingVertical: 14,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },

  navItem: {
    paddingHorizontal: 7,
  },

  navLabel: {
    color: '#78857E',
    fontSize: 11,
    fontWeight: '600',
  },

  navActive: {
    color: colors.green,
    fontWeight: '900',
  },
});
