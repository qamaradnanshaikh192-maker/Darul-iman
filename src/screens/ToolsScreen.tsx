
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { colors } from '../theme/colors';

const tools = [
  { id: 'tasbeeh', icon: '📿', title: 'Digital Tasbeeh', desc: 'Count your daily Dhikr' },
  { id: 'names', icon: '☪️', title: '99 Names of Allah', desc: 'Asma ul Husna with meanings' },
  { id: 'duas', icon: '🤲', title: 'Daily Duas', desc: 'Duas for everyday life' },
  { id: 'adhkar', icon: '🌅', title: 'Morning & Evening Adhkar', desc: 'Daily remembrance' },
  { id: 'calendar', icon: '🗓️', title: 'Hijri Calendar', desc: 'Islamic dates and months' },
  { id: 'ramadan', icon: '🌙', title: 'Ramadan Calendar', desc: 'Sehri and Iftar schedule' },
  { id: 'zakat', icon: '💰', title: 'Zakat Calculator', desc: 'Calculate your Zakat' },
];

export default function ToolsScreen() {
  const [count, setCount] = useState(0);
  const [selected, setSelected] = useState('tasbeeh');

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.eyebrow}>DARUL IMAN</Text>
      <Text style={styles.heading}>Daily Islamic Tools</Text>
      <Text style={styles.subtitle}>
        Useful tools to make your daily Islamic routine easier.
      </Text>

      <View style={styles.tasbeeh}>
        <Text style={styles.tasbeehTitle}>DIGITAL TASBEEH</Text>
        <Text style={styles.dhikr}>سُبْحَانَ اللَّهِ</Text>
        <Text style={styles.count}>{count}</Text>

        <Pressable
          style={styles.countButton}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>TAP TO COUNT</Text>
        </Pressable>

        <Pressable onPress={() => setCount(0)}>
          <Text style={styles.reset}>Reset Counter</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Explore Islamic Tools</Text>

      {tools.map((item) => (
        <Pressable
          key={item.id}
          style={[
            styles.card,
            selected === item.id && styles.activeCard,
          ]}
          onPress={() => setSelected(item.id)}
        >
          <Text style={styles.icon}>{item.icon}</Text>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDesc}>{item.desc}</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </Pressable>
      ))}

      <Text style={styles.footer}>Darul Iman • Islamic Lifestyle</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background },
  content: { padding: 20, paddingBottom: 40 },
  eyebrow: {
    color: colors.green, fontSize: 12, fontWeight: '900',
    letterSpacing: 1.5, marginTop: 12,
  },
  heading: {
    color: '#FFFFFF', fontSize: 27, fontWeight: '800', marginTop: 8,
  },
  subtitle: {
    color: '#A8B5AE', fontSize: 14, lineHeight: 22,
    marginTop: 8, marginBottom: 22,
  },
  tasbeeh: {
    backgroundColor: '#123D32', borderRadius: 20, padding: 22,
    alignItems: 'center', borderWidth: 1, borderColor: '#B99A55',
    marginBottom: 28,
  },
  tasbeehTitle: {
    color: '#E5C77B', fontSize: 12, fontWeight: '900',
    letterSpacing: 1.3,
  },
  dhikr: { color: '#FFFFFF', fontSize: 30, marginTop: 20 },
  count: {
    color: '#FFFFFF', fontSize: 48, fontWeight: '800', marginVertical: 12,
  },
  countButton: {
    backgroundColor: '#C5A45B', paddingVertical: 15,
    paddingHorizontal: 35, borderRadius: 30,
  },
  buttonText: { color: '#172A25', fontWeight: '900' },
  reset: { color: '#E5C77B', marginTop: 16, fontSize: 13 },
  sectionTitle: {
    color: '#FFFFFF', fontSize: 19, fontWeight: '800', marginBottom: 14,
  },
  card: {
    flexDirection: 'row', alignItems: 'center',
    backgroundColor: '#172A25', borderRadius: 14,
    padding: 15, marginBottom: 12, borderWidth: 1,
    borderColor: '#29443A',
  },
  activeCard: { borderColor: '#C5A45B' },
  icon: { fontSize: 25, marginRight: 14 },
  cardInfo: { flex: 1 },
  cardTitle: { color: '#FFFFFF', fontSize: 14, fontWeight: '800' },
  cardDesc: { color: '#A8B5AE', fontSize: 11, marginTop: 5 },
  arrow: { color: '#D6B765', fontSize: 25 },
  footer: {
    color: '#84958D', textAlign: 'center', fontSize: 11, marginTop: 22,
  },
});
