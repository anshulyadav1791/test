import React from 'react';
import { useIsFocused } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import Animated, {
  cancelAnimation,
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

export default function Bicycle() {
  const isFocused = useIsFocused();
  const wheelRotation = useSharedValue(0);
  const bikeFloat = useSharedValue(0);
  const laneOffset = useSharedValue(0);
  const pulse = useSharedValue(0.9);

  React.useEffect(() => {
    if (!isFocused) {
      cancelAnimation(wheelRotation);
      cancelAnimation(bikeFloat);
      cancelAnimation(laneOffset);
      cancelAnimation(pulse);
      return;
    }

    wheelRotation.value = withRepeat(withTiming(360, { duration: 1400, easing: Easing.linear }), -1);
    bikeFloat.value = withRepeat(
      withSequence(
        withTiming(-6, { duration: 900, easing: Easing.inOut(Easing.quad) }),
        withTiming(0, { duration: 900, easing: Easing.inOut(Easing.quad) })
      ),
      -1
    );
    laneOffset.value = withRepeat(withTiming(-72, { duration: 700, easing: Easing.linear }), -1);
    pulse.value = withRepeat(
      withSequence(
        withTiming(1.1, { duration: 1200, easing: Easing.inOut(Easing.quad) }),
        withTiming(0.9, { duration: 1200, easing: Easing.inOut(Easing.quad) })
      ),
      -1
    );

    return () => {
      cancelAnimation(wheelRotation);
      cancelAnimation(bikeFloat);
      cancelAnimation(laneOffset);
      cancelAnimation(pulse);
    };
  }, [bikeFloat, isFocused, laneOffset, pulse, wheelRotation]);

  const wheelStyle = useAnimatedStyle(() => ({ transform: [{ rotate: `${wheelRotation.value}deg` }] }));
  const frameStyle = useAnimatedStyle(() => ({ transform: [{ translateY: bikeFloat.value }] }));
  const laneStyle = useAnimatedStyle(() => ({ transform: [{ translateX: laneOffset.value }] }));
  const glowStyle = useAnimatedStyle(() => ({ transform: [{ scale: pulse.value }] }));

  return (
    <View style={styles.container}>
      <View style={styles.canvas}>
        <Animated.View style={[styles.glow, glowStyle]} />
        <View style={styles.road}>
          <Animated.View style={[styles.roadLines, laneStyle]}>
            <View style={styles.roadDash} />
            <View style={styles.roadDash} />
            <View style={styles.roadDash} />
          </Animated.View>
        </View>

        <Animated.View style={[styles.bicycle, frameStyle]}>
          <Animated.View style={[styles.wheel, styles.leftWheel, wheelStyle]}>
            <View style={styles.spoke} />
            <View style={[styles.spoke, styles.spoke45]} />
            <View style={[styles.spoke, styles.spoke90]} />
            <View style={[styles.spoke, styles.spoke135]} />
          </Animated.View>
          <Animated.View style={[styles.wheel, styles.rightWheel, wheelStyle]}>
            <View style={styles.spoke} />
            <View style={[styles.spoke, styles.spoke45]} />
            <View style={[styles.spoke, styles.spoke90]} />
            <View style={[styles.spoke, styles.spoke135]} />
          </Animated.View>

          <View style={styles.frameMain} />
          <View style={styles.frameTop} />
          <View style={styles.frameBack} />
          <View style={styles.frameFront} />
          <View style={styles.seatPost} />
          <View style={styles.seat} />
          <View style={styles.handleStem} />
          <View style={styles.handlebar} />
          <View style={styles.chainRing} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  canvas: {
    width: 320,
    height: 190,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  glow: {
    position: 'absolute',
    width: 240,
    height: 80,
    borderRadius: 48,
    backgroundColor: 'rgba(25, 191, 180, 0.22)',
    bottom: 36,
  },
  road: {
    position: 'absolute',
    width: '100%',
    height: 22,
    bottom: 22,
    overflow: 'hidden',
    borderRadius: 12,
    backgroundColor: '#11373b',
  },
  roadLines: {
    flexDirection: 'row',
    gap: 24,
    position: 'absolute',
    left: 0,
    top: 8,
  },
  roadDash: {
    width: 48,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#6ab9b2',
  },
  bicycle: {
    width: 276,
    height: 150,
    position: 'relative',
  },
  wheel: {
    position: 'absolute',
    width: 86,
    height: 86,
    borderRadius: 43,
    borderWidth: 5,
    borderColor: '#c2f5f0',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(4, 44, 47, 0.5)',
    top: 50,
  },
  leftWheel: {
    left: 0,
  },
  rightWheel: {
    right: 0,
  },
  spoke: {
    position: 'absolute',
    width: 2,
    height: 38,
    backgroundColor: '#7de9df',
  },
  spoke45: {
    transform: [{ rotate: '45deg' }],
  },
  spoke90: {
    transform: [{ rotate: '90deg' }],
  },
  spoke135: {
    transform: [{ rotate: '135deg' }],
  },
  frameMain: {
    position: 'absolute',
    width: 112,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#4dd4c9',
    top: 90,
    left: 80,
    transform: [{ rotate: '-24deg' }],
  },
  frameTop: {
    position: 'absolute',
    width: 88,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#4dd4c9',
    top: 70,
    left: 90,
    transform: [{ rotate: '14deg' }],
  },
  frameBack: {
    position: 'absolute',
    width: 64,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#4dd4c9',
    top: 86,
    left: 40,
    transform: [{ rotate: '-53deg' }],
  },
  frameFront: {
    position: 'absolute',
    width: 72,
    height: 6,
    borderRadius: 4,
    backgroundColor: '#4dd4c9',
    top: 74,
    right: 64,
    transform: [{ rotate: '52deg' }],
  },
  seatPost: {
    position: 'absolute',
    width: 5,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#9af3eb',
    top: 54,
    left: 101,
  },
  seat: {
    position: 'absolute',
    width: 38,
    height: 10,
    borderRadius: 8,
    backgroundColor: '#d9fffb',
    top: 48,
    left: 86,
  },
  handleStem: {
    position: 'absolute',
    width: 5,
    height: 28,
    borderRadius: 4,
    backgroundColor: '#9af3eb',
    top: 48,
    right: 66,
    transform: [{ rotate: '-26deg' }],
  },
  handlebar: {
    position: 'absolute',
    width: 34,
    height: 8,
    borderRadius: 8,
    backgroundColor: '#d9fffb',
    top: 40,
    right: 53,
  },
  chainRing: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 3,
    borderColor: '#d7fffc',
    top: 94,
    left: 112,
  },
});
