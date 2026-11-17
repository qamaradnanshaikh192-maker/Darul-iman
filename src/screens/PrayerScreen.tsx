
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';

import { colors } from '../theme/colors';

type Props = {
  imam: string;
  onChangeMadhhab?: () => void;
};

const prayers = [
  { name: 'Fajr', arabic: 'الفجر', time: '—:—', rakats: '2 Sunnah + 2 Fard' },
  { name: 'Dhuhr', arabic: 'الظهر', time: '—:—', rakats: '4 Sunnah + 4 Fard + 2 Sunnah' },
  { name: 'Asr', arabic: 'العصر', time: '—:—', rakats: '4 Sunnah + 4 Fard' },
  { name: 'Maghrib', arabic: 'المغرب', time: '—:—', rakats: '3 Fard + 2 Sunnah' },
  { name: 'Isha', arabic: 'العشاء', time: '—:—', rakats: '4 Fard + 2 Sunnah + 3 Witr' },
];

const madhhabInfo: Record<string, {
  founder: string;
  asr: string;
  description: string;
}> = {
  Hanafi: {
    founder: 'Imam Abu Hanifa (رحمه الله)',
    asr: 'Hanafi fiqh: Asr begins when an object’s shadow reaches twice its length, excluding the original shadow.',
    description: 'Namaz guidance according to the Hanafi school of Islamic jurisprudence.',
  },
  Shafii: {
    founder: 'Imam al-Shafi’i (رحمه الله)',
    asr: 'Shafi’i fiqh: Asr generally begins when an object’s shadow reaches its length, excluding the original shadow.',
    description: 'Namaz guidance according to the Shafi’i school of Islamic jurisprudence.',
  },
  Maliki: {
    founder: 'Imam Malik (رحمه الله)',
    asr: 'Maliki fiqh: Asr timing follows the school’s established rules and recognized prayer-time calculations.',
    description: 'Namaz guidance according to the Maliki school of Islamic jurisprudence.',
  },
  Hanbali: {
    founder: 'Imam Ahmad ibn Hanbal (رحمه الله)',
    asr: 'Hanbali fiqh: Asr generally begins when an object’s shadow reaches its length, excluding the original shadow.',
    description: 'Namaz guidance according to the Hanbali school of Islamic jurisprudence.',
  },
};

export default function PrayerScreen({
  imam,
  onChangeMadhhab,
}: Props) {
  const info = madhhabInfo[imam] || madhhabInfo.Hanafi;

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
    >
      <Text style={styles.heading}>NAMAZ & PRAYER</Text>
      <Text style={styles.title}>Daily Prayer Schedule</Text>

      <View style={styles.imamCard}>
        <Text style={styles.smallLabel}>YOUR SELECTED MADHHAB</Text>
        <Text style={styles.imamName}>{imam}</Text>
        <Text style={styles.founder}>{info.founder}</Text>
        <Text style={styles.description}>{info.description}</Text>

        <Pressable
          style={styles.changeButton}
          onPress={onChangeMadhhab}
        >
          <Text style={styles.changeText}>Change Imam / Madhhab</Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Five Daily Prayers</Text>
      <Text style={styles.note}>
        Prayer times will appear after location and calculation settings
        are connected.
      </Text>

      {prayers.map((prayer) => (
        <View key={prayer.name} style={styles.prayerCard}>
          <View style={styles.prayerInfo}>
            <Text style={styles.prayerName}>{prayer.name}</Text>
            <Text style={styles.arabic}>{prayer.arabic}</Text>
            <Text style={styles.rakats}>{prayer.rakats}</Text>
          </View>
          <Text style={styles.time}>{prayer.time}</Text>
        </View>
      ))}

      <Text style={styles.sectionTitle}>Asr Prayer Calculation</Text>
      <View style={styles.infoCard}>
        <Text style={styles.infoText}>{info.asr}</Text>
        <Text style={styles.disclaimer}>
          These are general educational descriptions. Confirm detailed
          fiqh rulings with a qualified scholar.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Learn Namaz</Text>

      {[
        'How to Perform Wudu',
        'How to Perform Salah',
        'Prayer Rakats Guide',
        'Sunnah Prayers',
        'Common Mistakes in Salah',
      ].map((item) => (
        <View key={item} style={styles.learnCard}>
          <Text style={styles.learnText}>{item}</Text>
          <Text style={styles.arrow}>›</Text>
        </View>
      ))}

      <Text style={styles.footer}>
        Darul Iman • Learn, Pray & Remember Allah
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    color: colors.green,
    fontSize: 12,
    fontWeight: '900',
    letterSpacing: 2,
    marginTop: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 8,
    marginBottom: 20,
  },
  imamCard: {
    backgroundColor: '#123C32',
    borderRadius: 18,
    padding: 20,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: '#B99A52',
  },
  smallLabel: {
    color: '#D6BD7A',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  imamName: {
    color: '#FFFFFF',
    fontSize: 25,
    fontWeight: '800',
    marginTop: 10,
  },
  founder: {
    color: '#E2C77F',
    fontSize: 15,
    marginTop: 5,
  },
  description: {
    color: '#E5E5E5',
    fontSize: 13,
    lineHeight: 20,
    marginTop: 12,
  },
  changeButton: {
    backgroundColor: '#D4B56A',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 18,
  },
  changeText: {
    color: '#172B25',
    fontWeight: '800',
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
    marginTop: 12,
    marginBottom: 12,
  },
  note: {
    color: '#B8B8B8',
    fontSize: 12,
    lineHeight: 18,
    marginBottom: 12,
  },
  prayerCard: {
    backgroundColor: '#18251F',
    borderRadius: 13,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#34483C',
  },
  prayerInfo: {
    flex: 1,
  },
  prayerName: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
  },
  arabic: {
    color: '#D6BD7A',
    fontSize: 18,
    marginTop: 3,
  },
  rakats: {
    color: '#B8B8B8',
    fontSize: 11,
    marginTop: 5,
  },
  time: {
    color: '#D6BD7A',
    fontSize: 20,
    fontWeight: '800',
  },
  infoCard: {
    backgroundColor: '#18251F',
    padding: 16,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#34483C',
  },
  infoText: {
    color: '#FFFFFF',
    fontSize: 14,
    lineHeight: 22,
  },
  disclaimer: {
    color: '#D6BD7A',
    fontSize: 11,
    lineHeight: 17,
    marginTop: 12,
  },
  learnCard: {
    backgroundColor: '#18251F',
    padding: 16,
    borderRadius: 12,
    marginBottom: 9,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  learnText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  arrow: {
    color: '#D6BD7A',
    fontSize: 22,
  },
  footer: {
    color: '#999999',
    textAlign: 'center',
    fontSize: 11,
    marginTop: 25,
  },
});
