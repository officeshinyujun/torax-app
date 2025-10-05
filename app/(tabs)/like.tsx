import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/COLORS';
import NavBar from '@/components/general/NavBar';

export default function LikeScreen() {
  return (
    <SafeAreaView 
    style={styles.container}>
      <NavBar />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.primary,
    },
});
