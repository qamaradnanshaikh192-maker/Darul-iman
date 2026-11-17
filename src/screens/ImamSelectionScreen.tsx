import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { imams } from '../data/imams';
import { colors } from '../theme/colors';

type Props = { selected: string; onSelect: (name: string) => void };
export function ImamSelectionScreen({ selected, onSelect }: Props) {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <Text style={styles.kicker}>DARUL IMAN • PRAYER SETTINGS</Text>
      <Text style={styles.title}>Choose your Madhhab</Text>
      <Text style={styles.intro}>Select the school of jurisprudence you follow. Your prayer schedule and relevant guidance will use this preference.</Text>
      {imams.map(item => {
        const active = selected === item.name;
        return <Pressable key={item.id} onPress={() => onSelect(item.name)} style={[styles.option, active && styles.active]}>
          <View style={styles.row}><View style={{ flex: 1 }}><Text style={styles.name}>{item.name}</Text><Text style={styles.founder}>{item.imam} (رحمه الله)</Text></View><Text style={styles.arabic}>{item.arabic}</Text><Text style={styles.check}>{active ? '✓' : '›'}</Text></View>
          <Text style={styles.note}>{item.note}</Text>
          {active && <Text style={styles.selected}>SELECTED</Text>}
        </Pressable>;
      })}
      <View style={styles.info}><Text style={styles.infoTitle}>A note on prayer calculations</Text><Text style={styles.infoText}>Asr calculation differs between Hanafi and the other three schools in the commonly used method. Accurate daily times also require location, date, calculation method and local adjustments. The app will not show guessed prayer times.</Text></View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background }, content: { padding: 20, paddingBottom: 30 },
  kicker: { color: colors.green2, fontSize: 10, fontWeight: '900', letterSpacing: 1.3, marginTop: 12 }, title: { color: colors.text, fontSize: 26, fontWeight: '900', marginTop: 10 }, intro: { color: colors.muted, fontSize: 13, lineHeight: 20, marginTop: 8, marginBottom: 18 },
  option: { backgroundColor: '#FFFFFF', borderRadius: 17, padding: 16, borderWidth: 1, borderColor: colors.border, marginBottom: 12 }, active: { borderColor: '#25815F', borderWidth: 2, backgroundColor: '#F1F8F3' },
  row: { flexDirection: 'row', alignItems: 'center' }, name: { color: colors.text, fontSize: 17, fontWeight: '800' }, founder: { color: colors.muted, fontSize: 11, marginTop: 4 }, arabic: { color: colors.green, fontSize: 22, marginRight: 15 }, check: { color: colors.green2, fontSize: 22, fontWeight: '900' },
  note: { color: colors.muted, fontSize: 10, marginTop: 12 }, selected: { color: '#25815F', fontSize: 9, fontWeight: '900', marginTop: 9, letterSpacing: 1 },
  info: { backgroundColor: '#F0E9D8', borderRadius: 15, padding: 15, marginTop: 8 }, infoTitle: { color: '#5D4B2B', fontWeight: '800', fontSize: 12 }, infoText: { color: '#6D6049', fontSize: 11, lineHeight: 17, marginTop: 6 }
});
