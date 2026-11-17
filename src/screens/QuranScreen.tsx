import React, { useState } from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Language = 'Urdu' | 'English';
export function QuranScreen() {
  const [language, setLanguage] = useState<Language>('Urdu');
  const urdu = language === 'Urdu';
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.arabic}>القرآن الكريم</Text>
        <Text style={styles.heroTitle}>Al-Quran & Tafseer</Text>
        <Text style={styles.heroSub}>Read • Understand • Memorise</Text>
      </View>
      <Text style={styles.heading}>Choose your Tafseer language</Text>
      <View style={styles.switch}>
        {(['Urdu', 'English'] as Language[]).map(item => (
          <Pressable key={item} onPress={() => setLanguage(item)} style={[styles.switchItem, language === item && styles.switchActive]}>
            <Text style={[styles.switchText, language === item && styles.switchTextActive]}>{item === 'Urdu' ? 'اردو' : 'English'}</Text>
          </Pressable>
        ))}
      </View>
      <View style={styles.book}>
        <Text style={styles.bookLabel}>SELECTED EDITION</Text>
        <Text style={styles.bookTitle}>{urdu ? 'Aasan Tarjuma-e-Quran' : 'The Meanings of the Noble Quran with Explanatory Notes'}</Text>
        <Text style={styles.author}>Mufti Muhammad Taqi Usmani</Text>
        <Text style={styles.bookDesc}>{urdu
          ? 'Urdu tarjuma aur mukhtasar wazahati notes (Tauzeeh-ul-Quran).'
          : 'English translation of the Quran with explanatory notes.'}</Text>
        <View style={styles.pending}><Text style={styles.pendingText}>Content integration pending rights permission and text verification</Text></View>
      </View>
      <Text style={styles.heading}>Quran reading tools</Text>
      {[
        ['📖', 'Read Quran', 'Arabic Mushaf with surah and juz navigation'],
        ['🎧', 'Listen to Quran', 'Ayah-by-ayah recitation and repeat'],
        ['🧠', 'Hifz & Revision', 'Sabaq, Sabqi, Manzil and memorisation tracker'],
        ['🔖', 'Bookmarks', 'Save your place and favourite ayat'],
      ].map(([icon, title, sub]) => <View key={title} style={styles.tool}><Text style={styles.toolIcon}>{icon}</Text><View style={{ flex: 1 }}><Text style={styles.toolTitle}>{title}</Text><Text style={styles.toolSub}>{sub}</Text></View><Text style={styles.arrow}>›</Text></View>)}
      <Text style={styles.disclaimer}>The language switch is a working UI preview. The published translation and explanatory notes will be included only after the relevant rights holder grants permission. Quran text and references will be checked before release.</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background }, content: { padding: 18, paddingBottom: 30 },
  hero: { backgroundColor: colors.green, borderRadius: 20, padding: 22, alignItems: 'center' }, arabic: { color: colors.gold, fontSize: 28 }, heroTitle: { color: '#FFFFFF', fontSize: 21, fontWeight: '900', marginTop: 8 }, heroSub: { color: '#DCE9E0', fontSize: 11, marginTop: 5 },
  heading: { color: colors.text, fontSize: 16, fontWeight: '800', marginTop: 23, marginBottom: 12 },
  switch: { flexDirection: 'row', backgroundColor: '#E8EEE9', padding: 4, borderRadius: 14 }, switchItem: { flex: 1, padding: 12, alignItems: 'center', borderRadius: 11 }, switchActive: { backgroundColor: colors.green }, switchText: { color: colors.muted, fontWeight: '800' }, switchTextActive: { color: '#FFFFFF' },
  book: { backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: colors.border, borderRadius: 18, padding: 17, marginTop: 14 }, bookLabel: { color: colors.green2, fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, bookTitle: { color: colors.text, fontSize: 17, fontWeight: '900', marginTop: 9, lineHeight: 23 }, author: { color: colors.green2, fontWeight: '700', fontSize: 12, marginTop: 7 }, bookDesc: { color: colors.muted, fontSize: 11, lineHeight: 17, marginTop: 8 }, pending: { backgroundColor: '#F5F0E3', padding: 9, borderRadius: 9, marginTop: 13 }, pendingText: { color: '#79643B', fontSize: 9, lineHeight: 14 },
  tool: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFFFFF', padding: 14, borderRadius: 14, marginBottom: 9, borderWidth: 1, borderColor: colors.border }, toolIcon: { fontSize: 21, marginRight: 12 }, toolTitle: { color: colors.text, fontSize: 13, fontWeight: '800' }, toolSub: { color: colors.muted, fontSize: 10, marginTop: 3 }, arrow: { color: colors.green, fontSize: 24, marginLeft: 8 },
  disclaimer: { color: colors.muted, fontSize: 10, lineHeight: 16, marginTop: 13 }
});
