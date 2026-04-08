import { Colors, Fonts } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function LoginScreen() {
  const router = useRouter();
  const palette = Colors.dark;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (email && password) {
      router.replace('/(tabs)');
    }
  };

  return (
    <View style={[styles.screen, { backgroundColor: palette.background }]}>
      <View style={[styles.bgBlobLarge, { backgroundColor: 'rgba(255, 143, 57, 0.12)' }]} />
      <View style={[styles.bgBlobSmall, { backgroundColor: 'rgba(255, 201, 110, 0.1)' }]} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(400)} style={styles.headerSection}>
          <View style={[styles.logoCircle, { backgroundColor: palette.tint }]}>
            <Text style={styles.logoText}>SC</Text>
          </View>
          <Text style={[styles.appName, { color: palette.text }]}>SeeCar</Text>
          <Text style={[styles.tagline, { color: palette.icon }]}>Smart bike, faster rides</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.formSection}>
          <Text style={[styles.formTitle, { color: palette.text }]}>Welcome Back</Text>
          <Text style={[styles.formSubtitle, { color: palette.icon }]}>Sign in to your account</Text>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: palette.text }]}>Email Address</Text>
            <View style={[styles.inputWrapper, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <MaterialIcons name="mail" size={20} color={palette.tint} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: palette.text }]}
                placeholder="you@example.com"
                placeholderTextColor={palette.icon}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
            </View>
          </View>

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: palette.text }]}>Password</Text>
            <View style={[styles.inputWrapper, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <MaterialIcons name="lock" size={20} color={palette.tint} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: palette.text }]}
                placeholder="••••••••"
                placeholderTextColor={palette.icon}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <MaterialIcons
                  name={showPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color={palette.icon}
                />
              </Pressable>
            </View>
          </View>

          <Pressable style={[styles.forgotBtn, { marginBottom: 24 }]}>
            <Text style={[styles.forgotText, { color: palette.tint }]}>Forgot password?</Text>
          </Pressable>

          <Pressable
            style={[styles.loginBtn, { backgroundColor: email && password ? palette.tint : '#666666' }]}
            onPress={handleLogin}
            disabled={!email || !password}>
            <Text style={[styles.loginBtnText, { color: palette.background }]}>Sign In</Text>
          </Pressable>

          <View style={[styles.dividerSection, { marginVertical: 24 }]}>
            <View style={[styles.dividerLine, { backgroundColor: palette.border }]} />
            <Text style={[styles.dividerText, { color: palette.icon }]}>or continue with</Text>
            <View style={[styles.dividerLine, { backgroundColor: palette.border }]} />
          </View>

          <View style={styles.socialButtonsRow}>
            <Pressable style={[styles.socialBtn, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <Text style={styles.socialIcon}>G</Text>
            </Pressable>
            <Pressable style={[styles.socialBtn, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <Text style={styles.socialIcon}>f</Text>
            </Pressable>
            <Pressable style={[styles.socialBtn, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <Text style={styles.socialIcon}>🍎</Text>
            </Pressable>
          </View>

          <View style={styles.footerSection}>
            <Text style={[styles.footerText, { color: palette.icon }]}>Don&apos;t have an account? </Text>
            <Pressable onPress={() => router.push('register')}>
              <Text style={[styles.signupLink, { color: palette.tint }]}>Sign up</Text>
            </Pressable>
          </View>
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
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  bgBlobLarge: {
    position: 'absolute',
    width: 280,
    height: 280,
    borderRadius: 140,
    top: -60,
    right: -100,
    opacity: 0.5,
  },
  bgBlobSmall: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    bottom: 100,
    left: -80,
    opacity: 0.4,
  },
  headerSection: {
    alignItems: 'center',
    marginBottom: 48,
    gap: 12,
  },
  logoCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  logoText: {
    fontSize: 32,
    fontWeight: '900',
    color: '#050505',
    fontFamily: Fonts.sans,
  },
  appName: {
    fontSize: 36,
    fontWeight: '900',
    fontFamily: Fonts.sans,
  },
  tagline: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    letterSpacing: 0.3,
  },
  formSection: {
    gap: 20,
  },
  formTitle: {
    fontSize: 28,
    fontWeight: '800',
    fontFamily: Fonts.sans,
  },
  formSubtitle: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    marginBottom: 8,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: Fonts.rounded,
    letterSpacing: 0.2,
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
    gap: 10,
  },
  inputIcon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 15,
    fontFamily: Fonts.sans,
  },
  forgotBtn: {
    alignSelf: 'flex-end',
  },
  forgotText: {
    fontSize: 13,
    fontWeight: '600',
    fontFamily: Fonts.rounded,
  },
  loginBtn: {
    height: 52,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 6,
  },
  loginBtnText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Fonts.sans,
  },
  dividerSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  dividerLine: {
    flex: 1,
    height: 1,
  },
  dividerText: {
    fontSize: 12,
    fontFamily: Fonts.rounded,
  },
  socialButtonsRow: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
  },
  socialBtn: {
    width: 52,
    height: 52,
    borderRadius: 14,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialIcon: {
    fontSize: 20,
    fontWeight: '700',
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  footerText: {
    fontSize: 14,
    fontFamily: Fonts.sans,
  },
  signupLink: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Fonts.sans,
  },
});
