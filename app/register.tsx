import { Colors, Fonts } from '@/constants/theme';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeInDown, FadeInUp } from 'react-native-reanimated';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function RegisterScreen() {
  const router = useRouter();
  const palette = Colors.dark;
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleRegister = () => {
    if (fullName && email && password && confirmPassword && password === confirmPassword && agreedToTerms) {
      router.replace('/(tabs)');
    }
  };

  const isFormValid = fullName && email && password && confirmPassword && password === confirmPassword && agreedToTerms;

  return (
    <View style={[styles.screen, { backgroundColor: palette.background }]}>
      <View style={[styles.bgBlobLarge, { backgroundColor: 'rgba(255, 143, 57, 0.12)' }]} />
      <View style={[styles.bgBlobSmall, { backgroundColor: 'rgba(255, 201, 110, 0.1)' }]} />

      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <Animated.View entering={FadeInUp.duration(400)} style={styles.headerSection}>
          <Pressable onPress={() => router.back()} style={styles.backBtn}>
            <MaterialIcons name="arrow-back" size={24} color={palette.text} />
          </Pressable>
          <Text style={[styles.appName, { color: palette.text }]}>Create Account</Text>
          <Text style={[styles.tagline, { color: palette.icon }]}>Join the SeeCar community</Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(100).duration(500)} style={styles.formSection}>
          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: palette.text }]}>Full Name</Text>
            <View style={[styles.inputWrapper, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <MaterialIcons name="person" size={20} color={palette.tint} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: palette.text }]}
                placeholder="John Doe"
                placeholderTextColor={palette.icon}
                value={fullName}
                onChangeText={setFullName}
              />
            </View>
          </View>

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

          <View style={styles.inputGroup}>
            <Text style={[styles.label, { color: palette.text }]}>Confirm Password</Text>
            <View style={[styles.inputWrapper, { backgroundColor: palette.card, borderColor: palette.border }]}>
              <MaterialIcons name="lock" size={20} color={palette.tint} style={styles.inputIcon} />
              <TextInput
                style={[styles.input, { color: palette.text }]}
                placeholder="••••••••"
                placeholderTextColor={palette.icon}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry={!showConfirmPassword}
              />
              <Pressable onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                <MaterialIcons
                  name={showConfirmPassword ? 'visibility' : 'visibility-off'}
                  size={20}
                  color={palette.icon}
                />
              </Pressable>
            </View>
          </View>

          {password && confirmPassword && password !== confirmPassword && (
            <View style={[styles.errorBox, { backgroundColor: 'rgba(239, 68, 68, 0.12)' }]}>
              <MaterialIcons name="error-outline" size={16} color="#ef4444" />
              <Text style={[styles.errorText, { color: '#fca5a5' }]}>Passwords do not match</Text>
            </View>
          )}

          <Pressable
            style={[styles.termsBox, { backgroundColor: palette.card, borderColor: palette.border }]}
            onPress={() => setAgreedToTerms(!agreedToTerms)}>
            <View style={[styles.checkbox, { backgroundColor: agreedToTerms ? palette.tint : 'transparent', borderColor: agreedToTerms ? palette.tint : palette.border }]}>
              {agreedToTerms && <MaterialIcons name="check" size={14} color={palette.background} />}
            </View>
            <Text style={[styles.termsText, { color: palette.icon }]}>
              I agree to the Terms of Service and Privacy Policy
            </Text>
          </Pressable>

          <Pressable
            style={[styles.registerBtn, { backgroundColor: isFormValid ? palette.tint : '#666666' }]}
            onPress={handleRegister}
            disabled={!isFormValid}>
            <Text style={[styles.registerBtnText, { color: isFormValid ? palette.background : '#999999' }]}>Create Account</Text>
          </Pressable>

          <View style={styles.footerSection}>
            <Text style={[styles.footerText, { color: palette.icon }]}>Already have an account? </Text>
            <Pressable onPress={() => router.back()}>
              <Text style={[styles.signinLink, { color: palette.tint }]}>Sign in</Text>
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
    paddingTop: 20,
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
    marginBottom: 32,
    gap: 8,
  },
  backBtn: {
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    fontFamily: Fonts.sans,
  },
  tagline: {
    fontSize: 14,
    fontFamily: Fonts.rounded,
    letterSpacing: 0.3,
  },
  formSection: {
    gap: 14,
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
  errorBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
  },
  errorText: {
    fontSize: 13,
    fontFamily: Fonts.rounded,
  },
  termsBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 14,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  termsText: {
    flex: 1,
    fontSize: 13,
    fontFamily: Fonts.rounded,
    lineHeight: 18,
  },
  registerBtn: {
    height: 52,
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 16,
    elevation: 6,
  },
  registerBtnText: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: Fonts.sans,
  },
  footerSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    fontFamily: Fonts.sans,
  },
  signinLink: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: Fonts.sans,
  },
});
