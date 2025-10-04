import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/COLORS';
import NavBar from '@/components/general/NavBar';
import Header from '@/components/general/Header';
import  LatestSongSection  from '@/components/Home/LatestSongSection';
import { useState } from 'react';
import RegistePage from '@/components/general/RegistePage';

export default function HomeScreen() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      {isLogin ? <SafeAreaView 
      style={styles.container}>
        <Header/>
        <LatestSongSection />
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
});
