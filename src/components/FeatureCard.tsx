import React from 'react';
import { Pressable, Text, View, StyleSheet } from 'react-native';
import { colors } from '../theme/colors';

type Props = { icon: string; title: string; subtitle: string; onPress?: () => void };
export function FeatureCard({ icon, title, subtitle, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.icon}><Text style={styles.iconText}>{icon}</Text></View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { width: '48%', minHeight: 132, backgroundColor: '#FFFFFF', borderRadius: 18, padding: 15, borderWidth: 1, borderColor: colors.border, marginBottom: 12 },
  icon: { width: 40, height: 40, borderRadius: 13, backgroundColor: '#EAF2ED', alignItems: 'center', justifyContent: 'center', marginBottom: 12 },
  iconText: { fontSize: 20 }, title: { color: colors.text, fontWeight: '800', fontSize: 15 }, subtitle: { color: colors.muted, fontSize: 11, marginTop: 5, lineHeight: 16 }
});
