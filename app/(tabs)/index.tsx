import { SafeAreaView, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/COLORS';
import NavBar from '@/components/general/NavBar';
import Header from '@/components/general/Header';
import  LatestSongSection  from '@/components/Home/LatestSongSection';

export default function HomeScreen() {
  return (
    <SafeAreaView 
    style={styles.container}>
      <Header/>
      <LatestSongSection />
      <NavBar />
    </SafeAreaView>
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
