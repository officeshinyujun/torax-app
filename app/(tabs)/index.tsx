import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { COLORS } from '@/constants/COLORS';
import NavBar from '@/components/general/NavBar';
import Header from '@/components/general/Header';
import  LatestSongSection  from '@/components/Home/LatestSongSection';
import { useState } from 'react';
import RegistePage from '@/components/general/RegistePage';
import YoutubePlayer from 'react-native-youtube-iframe';

export default function HomeScreen() {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? <SafeAreaView 
      style={styles.container}>
        <Header/>
        <LatestSongSection />
        <View style={styles.videoContainer}>
          <YoutubePlayer
            width={'100%'}
            height={300}
            play={true}
            videoId={"aX6MTKYgJmY"}
            webViewStyle={styles.videoPlayer}
          />
        </View>
        <NavBar />
      </SafeAreaView> : <RegistePage />}
    </>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.primary,
        alignItems : 'center',
        justifyContent : 'flex-start',
    },
    videoContainer: {
        width: '100%',
        backgroundColor: COLORS.background.primary,
    },
    videoPlayer: {
        alignSelf: 'stretch',
        backgroundColor: 'black',
    },
});
