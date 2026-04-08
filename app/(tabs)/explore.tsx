import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Colors, Fonts } from '@/constants/theme';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function TabTwoScreen() {
  const palette = Colors.dark;

  const routes = [
    { name: 'Lake View Loop', distance: '18 km', level: 'Easy', icon: 'park' as const },
    { name: 'Urban Sprint Ring', distance: '12 km', level: 'Moderate', icon: 'location-city' as const },
    { name: 'Hill Climb Pro', distance: '25 km', level: 'Hard', icon: 'terrain' as const },
  ];

  const maintenance = [
    { task: 'Chain lubrication', due: 'Due in 2 days', icon: 'build' as const },
    { task: 'Front brake tuning', due: 'Due in 5 days', icon: 'handyman' as const },
    { task: 'Tire pressure check', due: 'Due today', icon: 'settings' as const },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: palette.background }]}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(500)} style={styles.titleWrap}>
          <Text style={[styles.heading, { color: palette.text }]}>Explore Routes</Text>
          <Text style={[styles.subheading, { color: palette.icon }]}>
            Discover premium tracks, find smooth paths, and track your progress with style.
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(120).duration(550)} style={styles.section}>
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Suggested Routes</Text>
          {routes.map((route) => (
            <Pressable
              key={route.name}
              style={[styles.card, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <View style={[styles.routeIcon, { backgroundColor: '#1d1110' }]}>
                <MaterialIcons name={route.icon} size={20} color={palette.tint} />
              </View>
              <View style={styles.cardTextWrap}>
                <Text style={[styles.cardTitle, { color: palette.text }]}>{route.name}</Text>
                <Text style={[styles.cardSub, { color: palette.icon }]}>{route.distance}</Text>
              </View>
              <View style={[styles.levelTag, { backgroundColor: 'rgba(255, 140, 20, 0.15)' }]}>
                <Text style={[styles.levelText, { color: palette.tint }]}>{route.level}</Text>
              </View>
            </Pressable>
          ))}
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(650)} style={styles.section}>
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Maintenance Timeline</Text>
          {maintenance.map((item) => (
            <View
              key={item.task}
              style={[styles.card, styles.maintenanceCard, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <MaterialIcons name={item.icon} size={19} color={palette.warning} />
              <View style={styles.cardTextWrap}>
                <Text style={[styles.cardTitle, { color: palette.text }]}>{item.task}</Text>
                <Text style={[styles.cardSub, { color: palette.icon }]}>{item.due}</Text>
              </View>
              <MaterialIcons name="chevron-right" size={20} color={palette.icon} />
            </View>
          ))}
        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingTop: 34,
    paddingBottom: 120,
    paddingHorizontal: 18,
    gap: 18,
  },
  titleWrap: {
    gap: 8,
  },
  heading: {
    fontSize: 34,
    fontWeight: '800',
    fontFamily: Fonts.rounded,
  },
  subheading: {
    fontSize: 14,
    lineHeight: 21,
    maxWidth: 310,
    fontFamily: Fonts.sans,
  },
  section: {
    gap: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    fontFamily: Fonts.rounded,
    marginBottom: 2,
  },
  card: {
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  routeIcon: {
    width: 36,
    height: 36,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTextWrap: {
    flex: 1,
    gap: 2,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    fontFamily: Fonts.sans,
  },
  cardSub: {
    fontSize: 12,
    fontFamily: Fonts.sans,
  },
  levelTag: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
  },
  levelText: {
    fontSize: 11,
    fontFamily: Fonts.rounded,
    fontWeight: '700',
    letterSpacing: 0.2,
  },
  maintenanceCard: {
    paddingVertical: 14,
  },
});
