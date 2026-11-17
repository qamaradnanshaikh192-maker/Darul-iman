import React from 'react';
import { ScrollView, View, Text, Pressable, StyleSheet } from 'react-native';
import { FeatureCard } from '../components/FeatureCard';
import { colors } from '../theme/colors';

type Props = { imam: string; onOpenPrayer: () => void; onChangeImam: () => void; onNavigate: (tab: 'Quran' | 'Prayer' | 'Hadith' | 'Tools') => void };
export function HomeScreen({ imam, onOpenPrayer, onChangeImam, onNavigate }: Props) {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.brand}>DARUL IMAN</Text>
        <Text style={styles.arabic}>دار الإيمان</Text>
        <Text style={styles.tagline}>Your complete Islamic companion</Text>
        <View style={styles.location}><Text style={styles.locationText}>⌖  Set your location for accurate prayer times</Text></View>
      </View>

      <View style={styles.greeting}><Text style={styles.eyebrow}>ASSALAMU ALAIKUM</Text><Text style={styles.greetingTitle}>Make today meaningful.</Text><Text style={styles.greetingSub}>A little Quran, a little remembrance, every day.</Text></View>

      <Pressable onPress={onOpenPrayer} style={styles.prayerCard}>
        <View style={styles.prayerTop}><Text style={styles.prayerLabel}>YOUR PRAYER SCHEDULE</Text><Text style={styles.change}>OPEN ›</Text></View>
        <Text style={styles.imamName}>{imam} Madhhab</Text>
        <Text style={styles.prayerHint}>Prayer times will appear after location and calculation settings are configured.</Text>
        <View style={styles.prayerRow}>{['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'].map(p => <View key={p} style={styles.prayerPill}><Text style={styles.prayerPillText}>{p}</Text><Text style={styles.pending}>—:—</Text></View>)}</View>
        <Pressable onPress={onChangeImam} style={styles.changeImam}><Text style={styles.changeImamText}>Change your Imam / Madhhab</Text></Pressable>
      </Pressable>

      <Text style={styles.section}>Explore Darul Iman</Text>
      <View style={styles.grid}>
        <FeatureCard icon="📖" title="Al-Quran & Hifz" subtitle="Read, listen, memorise and revise" onPress={() => onNavigate('Quran')} />
        <FeatureCard icon="🕌" title="Namaz & Prayer" subtitle="Four madhhabs and prayer guidance" onPress={onOpenPrayer} />
        <FeatureCard icon="📚" title="Hadith & Sunnah" subtitle="Collections with references" onPress={() => onNavigate('Hadith')} />
        <FeatureCard icon="📿" title="Daily Islamic Tools" subtitle="Duas, adhkar, tasbeeh and more" onPress={() => onNavigate('Tools')} />
      </View>
      <View style={styles.quote}><Text style={styles.quoteLabel}>DAILY REMINDER</Text><Text style={styles.quoteText}>“Indeed, in the remembrance of Allah do hearts find rest.”</Text><Text style={styles.quoteRef}>Qur’an 13:28 · English meaning</Text></View>
      <Text style={styles.footer}>Built with care • Verified Islamic content will be added before launch</Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.background }, content: { paddingBottom: 20 },
  header: { backgroundColor: colors.green, paddingHorizontal: 22, paddingTop: 18, paddingBottom: 24, borderBottomLeftRadius: 28, borderBottomRightRadius: 28 },
  brand: { color: colors.gold, fontSize: 21, fontWeight: '900', letterSpacing: 3 }, arabic: { color: '#F3E4BD', fontSize: 24, marginTop: 5 }, tagline: { color: '#D9E8DF', fontSize: 12, marginTop: 3 },
  location: { marginTop: 18, backgroundColor: '#FFFFFF1A', padding: 11, borderRadius: 12 }, locationText: { color: '#FFFFFF', fontSize: 11 },
  greeting: { paddingHorizontal: 20, paddingTop: 22, paddingBottom: 15 }, eyebrow: { color: colors.green2, fontSize: 10, fontWeight: '900', letterSpacing: 1.5 }, greetingTitle: { color: colors.text, fontSize: 22, fontWeight: '800', marginTop: 6 }, greetingSub: { color: colors.muted, fontSize: 12, marginTop: 5 },
  prayerCard: { marginHorizontal: 18, backgroundColor: colors.green2, borderRadius: 20, padding: 17 }, prayerTop: { flexDirection: 'row', justifyContent: 'space-between' }, prayerLabel: { color: '#D8E8DE', fontSize: 9, fontWeight: '800', letterSpacing: 1 }, change: { color: colors.gold, fontSize: 10, fontWeight: '800' },
  imamName: { color: '#FFFFFF', fontSize: 20, fontWeight: '800', marginTop: 10 }, prayerHint: { color: '#D8E8DE', fontSize: 10, lineHeight: 15, marginTop: 4 },
  prayerRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 16 }, prayerPill: { backgroundColor: '#FFFFFF16', borderRadius: 10, paddingVertical: 9, paddingHorizontal: 7, alignItems: 'center' }, prayerPillText: { color: '#FFFFFF', fontSize: 9, fontWeight: '700' }, pending: { color: colors.gold, fontSize: 12, fontWeight: '800', marginTop: 5 },
  changeImam: { alignSelf: 'flex-start', marginTop: 13, paddingVertical: 7 }, changeImamText: { color: '#F2D99D', fontSize: 11, fontWeight: '700' },
  section: { color: colors.text, fontSize: 17, fontWeight: '800', marginHorizontal: 20, marginTop: 24, marginBottom: 13 }, grid: { paddingHorizontal: 18, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  quote: { marginHorizontal: 18, marginTop: 5, backgroundColor: '#F0E9D8', borderRadius: 18, padding: 17 }, quoteLabel: { color: '#806A3D', fontSize: 9, fontWeight: '900', letterSpacing: 1.2 }, quoteText: { color: '#3E392D', fontSize: 15, lineHeight: 23, fontWeight: '600', marginTop: 9 }, quoteRef: { color: '#806A3D', fontSize: 10, marginTop: 8 },
  footer: { color: colors.muted, fontSize: 9, textAlign: 'center', marginTop: 18, marginHorizontal: 25 }
});
