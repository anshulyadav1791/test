import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { router } from 'expo-router';
import Bicycle from '@/components/bicycle';
import { Colors, Fonts } from '@/constants/theme';
import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';

export default function HomeScreen() {
  const palette = Colors.dark;

  const rideStats = [
    { label: 'Today', value: '22.4 km', icon: 'directions-bike' as const },
    { label: 'Avg Speed', value: '26 km/h', icon: 'speed' as const },
    { label: 'Battery', value: '84%', icon: 'battery-charging-full' as const },
  ];

  const quickActions = [
    {
      title: 'Start Smart Ride',
      description: 'AI route + traffic aware assist',
      icon: 'bolt' as const,
    },
    {
      title: 'Nearby Tracks',
      description: 'Find smooth and safe cycling paths',
      icon: 'place' as const,
    },
    {
      title: 'Service Check',
      description: 'Brake, tire and chain diagnostics',
      icon: 'tune' as const,
    },
  ];

  const navItems = [
    { key: 'home', label: 'Home', icon: 'home' as const, route: '/' },
    { key: 'explore', label: 'Explore', icon: 'explore' as const, route: 'explore' },
    { key: 'login', label: 'Login', icon: 'login' as const, route: 'login' },
    { key: 'register', label: 'Register', icon: 'person_add' as const, route: 'register' },
    { key: 'modal', label: 'Modal', icon: 'info' as const, route: 'modal' },
  ];

  return (
    <View style={[styles.screen, { backgroundColor: palette.background }]}> 
      <View style={[styles.bgBlobLarge, { backgroundColor: 'rgba(255, 143, 57, 0.16)' }]} />
      <View style={[styles.bgBlobSmall, { backgroundColor: 'rgba(255, 201, 110, 0.14)' }]} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(500)} style={styles.headerBlock}>
          <Text style={[styles.greeting, { color: palette.icon }]}>Welcome back, Rider</Text>
          <Text style={[styles.title, { color: palette.text }]}>SeeCar</Text>
          <Text style={[styles.subtitle, { color: palette.icon }]}>Black mode with bold orange highlights for fast ride control.</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).springify()} style={[styles.heroCard, { backgroundColor: palette.card, borderColor: palette.border }]}> 
          <View style={styles.heroTopRow}>
            <View>
              <Text style={[styles.heroLabel, { color: palette.icon }]}>Live Mode</Text>
              <Text style={[styles.heroMain, { color: palette.text }]}>Metro Sprint 7.2</Text>
            </View>
            <Pressable style={[styles.liveBadge, { backgroundColor: palette.tint }]}> 
              <Text style={styles.liveBadgeText}>ACTIVE</Text>
            </Pressable>
          </View>
          <Bicycle />
          <Pressable style={[styles.primaryButton, { backgroundColor: palette.tint }]}> 
            <Text style={[styles.primaryButtonText, { color: palette.background }]}>Start Ride</Text>
          </Pressable>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(150).duration(550)} style={styles.statsRow}>
          {rideStats.map((stat) => (
            <View key={stat.label} style={[styles.statCard, { backgroundColor: '#101010', borderColor: palette.border }]}> 
              <MaterialIcons name={stat.icon} size={22} color={palette.tint} />
              <Text style={[styles.statValue, { color: palette.text }]}>{stat.value}</Text>
              <Text style={[styles.statLabel, { color: palette.icon }]}>{stat.label}</Text>
            </View>
          ))}
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).duration(650)} style={styles.section}>
          <Text style={[styles.sectionTitle, { color: palette.text }]}>Quick Controls</Text>
          {quickActions.map((action) => (
            <Pressable key={action.title} style={[styles.actionCard, { backgroundColor: palette.card, borderColor: palette.border }]}> 
              <View style={[styles.actionIconWrap, { backgroundColor: '#1d1110' }]}> 
                <MaterialIcons name={action.icon} size={21} color={palette.tint} />
              </View>
              <View style={styles.actionTextWrap}>
                <Text style={[styles.actionTitle, { color: palette.text }]}>{action.title}</Text>
                <Text style={[styles.actionDesc, { color: palette.icon }]}>{action.description}</Text>
              </View>
              <MaterialIcons name="north-east" size={20} color={palette.icon} />
            </Pressable>
          ))}
        </Animated.View>
      </ScrollView>

      <View style={[styles.navBar, { backgroundColor: palette.card, borderTopColor: palette.border }]}>
        {navItems.map((item) => (
          <Pressable
            key={item.key}
            style={styles.navItem}
            onPress={() => {
              if (item.key === 'home') {
                // Scroll to top or do nothing
                return;
              }
              router.push(item.route);
            }}
          >
            <MaterialIcons name={item.icon} size={24} color={palette.tint} />
            <Text style={[styles.navText, { color: palette.text }]}>{item.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 18,
    paddingTop: 24,
    paddingBottom: 120,
    gap: 18,
  },
  bgBlobLarge: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: 140,
    top: -40,
    right: -80,
    opacity: 0.6,
  },
  bgBlobSmall: {
    position: 'absolute',
    width: 170,
    height: 170,
    borderRadius: 90,
    top: 250,
    left: -70,
    opacity: 0.5,
  },
  headerBlock: {
    paddingTop: 24,
    gap: 6,
  },
  greeting: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 38,
    fontFamily: Fonts.sans,
    fontWeight: '900',
  },
  subtitle: {
    fontSize: 15,
    fontFamily: Fonts.sans,
    lineHeight: 22,
    maxWidth: 320,
  },
  heroCard: {
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 18,
    paddingVertical: 18,
    gap: 16,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 14 },
    shadowRadius: 24,
    elevation: 8,
  },
  heroTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heroLabel: {
    fontSize: 12,
    fontFamily: Fonts.rounded,
    letterSpacing: 0.5,
  },
  heroMain: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: Fonts.sans,
    marginTop: 4,
  },
  liveBadge: {
    borderRadius: 999,
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
  liveBadgeText: {
    color: '#050505',
    fontWeight: '800',
    fontSize: 11,
    letterSpacing: 0.5,
  },
  primaryButton: {
    marginTop: 8,
    borderRadius: 999,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButtonText: {
    fontSize: 15,
    fontWeight: '700',
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
  },
  statCard: {
    flex: 1,
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 16,
    alignItems: 'center',
    gap: 6,
  },
  statValue: {
    fontSize: 18,
    fontWeight: '700',
  },
  statLabel: {
    fontSize: 12,
    letterSpacing: 0.4,
  },
  section: {
    gap: 12,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    fontFamily: Fonts.rounded,
  },
  actionCard: {
    borderRadius: 18,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  actionIconWrap: {
    width: 42,
    height: 42,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTextWrap: {
    flex: 1,
    gap: 3,
  },
  actionTitle: {
    fontSize: 15,
    fontWeight: '700',
  },
  actionDesc: {
    fontSize: 13,
    lineHeight: 18,
  },
  navBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    paddingBottom: 30, // safe area
  },
  navItem: {
    alignItems: 'center',
    gap: 4,
  },
  navText: {
    fontSize: 12,
    fontWeight: '600',
  },
});
