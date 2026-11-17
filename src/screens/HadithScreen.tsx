import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';

import { colors } from '../theme/colors';

const hadiths = [
  {
    id: 1,
    title: 'Actions Are Judged by Intentions',
    arabic: 'إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ',
    meaning:
      'Actions are judged by intentions, and every person will receive according to what they intended.',
    reference: 'Sahih al-Bukhari 1',
    category: 'Faith',
  },
  {
    id: 2,
    title: 'Love for Your Brother',
    arabic: 'لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ',
    meaning:
      'None of you truly believes until he loves for his brother what he loves for himself.',
    reference: 'Sahih al-Bukhari 13',
    category: 'Character',
  },
  {
    id: 3,
    title: 'Speak Good or Remain Silent',
    arabic: 'فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ',
    meaning:
      'Whoever believes in Allah and the Last Day should speak good or remain silent.',
    reference: 'Sahih al-Bukhari 6018',
    category: 'Character',
  },
  {
    id: 4,
    title: 'The Best Among You',
    arabic: 'خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ',
    meaning:
      'The best among you are those who learn the Quran and teach it.',
    reference: 'Sahih al-Bukhari 5027',
    category: 'Quran',
  },
];

const categories = ['All', 'Faith', 'Character', 'Quran'];

export default function HadithScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [search, setSearch] = useState('');

  const filteredHadiths = hadiths.filter((item) => {
    const matchesCategory =
      selectedCategory === 'All' ||
      item.category === selectedCategory;

    const matchesSearch =
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.meaning.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <ScrollView
      style={styles.page}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.eyebrow}>DARUL IMAN</Text>
      <Text style={styles.heading}>Hadith & Sunnah</Text>
      <Text style={styles.subtitle}>
        Learn from the teachings of Prophet Muhammad ﷺ
      </Text>

      <View style={styles.banner}>
        <Text style={styles.bannerArabic}>الحديث النبوي الشريف</Text>
        <Text style={styles.bannerTitle}>Daily Hadith</Text>
        <Text style={styles.bannerText}>
          Discover authentic teachings and improve your daily life.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Browse Categories</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoryList}
      >
        {categories.map((category) => {
          const active = selectedCategory === category;

          return (
            <Pressable
              key={category}
              onPress={() => setSelectedCategory(category)}
              style={[
                styles.category,
                active && styles.categoryActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  active && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search Hadith..."
        placeholderTextColor="#8A9991"
        style={styles.search}
      />

      <Text style={styles.sectionTitle}>Hadith Collection</Text>

      {filteredHadiths.map((item) => (
        <View key={item.id} style={styles.card}>
          <View style={styles.cardTop}>
            <Text style={styles.tag}>{item.category}</Text>
            <Text style={styles.number}>#{item.id}</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>

          <Text style={styles.arabic}>{item.arabic}</Text>

          <Text style={styles.meaning}>{item.meaning}</Text>

          <View style={styles.divider} />

          <Text style={styles.reference}>
            Reference: {item.reference}
          </Text>
        </View>
      ))}

      {filteredHadiths.length === 0 && (
        <Text style={styles.empty}>
          No Hadith found. Try another search.
        </Text>
      )}

      <View style={styles.note}>
        <Text style={styles.noteTitle}>Authenticity & Sources</Text>
        <Text style={styles.noteText}>
          Hadith references are provided for identification.
          Verify the Arabic text, grading and translation against
          a reliable scholarly edition before publishing.
        </Text>
      </View>
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
  eyebrow: {
    color: colors.green,
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 2,
    marginTop: 12,
  },
  heading: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: '900',
    marginTop: 8,
  },
  subtitle: {
    color: '#A8B8AF',
    fontSize: 14,
    marginTop: 7,
  },
  banner: {
    backgroundColor: colors.green,
    borderRadius: 20,
    padding: 22,
    marginTop: 24,
    marginBottom: 25,
  },
  bannerArabic: {
    color: '#F5D98B',
    fontSize: 24,
    textAlign: 'right',
    marginBottom: 15,
  },
  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '800',
  },
  bannerText: {
    color: '#E4EFE8',
    fontSize: 14,
    marginTop: 8,
    lineHeight: 21,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '800',
    marginBottom: 14,
  },
  categoryList: {
    gap: 9,
    paddingBottom: 18,
  },
  category: {
    borderWidth: 1,
    borderColor: '#53665C',
    borderRadius: 20,
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
  categoryActive: {
    backgroundColor: colors.green,
    borderColor: colors.green,
  },
  categoryText: {
    color: '#D4DED8',
    fontWeight: '600',
  },
  categoryTextActive: {
    color: '#FFFFFF',
  },
  search: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    paddingHorizontal: 15,
    paddingVertical: 13,
    fontSize: 14,
    color: '#17231C',
    marginBottom: 25,
  },
  card: {
    backgroundColor: '#17251E',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#34483B',
    padding: 17,
    marginBottom: 14,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tag: {
    color: '#F1D58A',
    fontSize: 11,
    fontWeight: '800',
  },
  number: {
    color: '#8FA398',
    fontSize: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '800',
    marginTop: 13,
  },
  arabic: {
    color: '#F3D88D',
    fontSize: 23,
    lineHeight: 42,
    textAlign: 'right',
    marginTop: 17,
  },
  meaning: {
    color: '#E0E9E3',
    fontSize: 14,
    lineHeight: 23,
    marginTop: 15,
  },
  divider: {
    height: 1,
    backgroundColor: '#34483B',
    marginVertical: 14,
  },
  reference: {
    color: '#A9C0B2',
    fontSize: 12,
    fontWeight: '700',
  },
  empty: {
    color: '#FFFFFF',
    textAlign: 'center',
    padding: 25,
  },
  note: {
    backgroundColor: '#26352C',
    borderRadius: 14,
    padding: 16,
    marginTop: 15,
  },
  noteTitle: {
    color: '#F1D58A',
    fontWeight: '800',
    fontSize: 15,
  },
  noteText: {
    color: '#D1DDD5',
    fontSize: 12,
    lineHeight: 20,
    marginTop: 8,
  },
});
