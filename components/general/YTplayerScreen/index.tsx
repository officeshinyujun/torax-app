import React, { useState, useEffect } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { StyleSheet, View, Button, Alert } from 'react-native';
import { Audio } from 'expo-av';

export default function YTPlayerScreen() {
  const [playing, setPlaying] = useState(false);
  const [sound, setSound] = useState<Audio.Sound | null>(null);

  // Clean up audio on unmount
  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const togglePlaying = async () => {
    try {
      if (playing) {
        if (sound) {
          await sound.pauseAsync();
        }
      } else {
        // This is a placeholder - you'll need to use the actual audio stream URL
        const { sound: newSound } = await Audio.Sound.createAsync(
          { uri: 'YOUR_AUDIO_STREAM_URL' },
          { shouldPlay: true}
        );
        setSound(newSound);
        await newSound.playAsync();
      }
      setPlaying(!playing);
    } catch (error) {
      console.error('Error toggling playback:', error);
      Alert.alert('재생 오류', '음악 재생 중 오류가 발생했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId="aX6MTKYgJmY"
        onChangeState={(event: string) => {
          if (event === 'ended') {
            setPlaying(false);
            if (sound) {
              sound.pauseAsync();
            }
          }
        }}
      />
      <Button
        title={playing ? '정지' : '재생'}
        onPress={togglePlaying}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});