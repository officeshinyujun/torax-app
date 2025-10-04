import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/COLORS';
import NavBar from '@/components/general/NavBar';

export default function SearchScreen() {
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
