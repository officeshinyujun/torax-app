import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, TouchableOpacity, Keyboard, ScrollView, Platform } from 'react-native';
import { COLORS } from '@/constants/COLORS';
import NavBar from '@/components/general/NavBar';
import CustomView from '@/components/general/CustomView';
import { SPACING } from '@/constants/SPACING';
import CustomInput from '@/components/general/CustomInput';
import { Search } from 'lucide-react-native';
import { useSearchStore } from '@/stores/useSearchStore';
import { router } from 'expo-router';
import CustomText from '@/components/general/CustomText';
import MusicCard from '@/components/Search/MusicCard';
import { useEffect, useState } from 'react';

export default function SearchScreen() {
    const { currentQuery, setCurrentQuery, addToSearchHistory } = useSearchStore();
    const [isKeyboardVisible, setKeyboardVisible] = useState(false);

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
            () => setKeyboardVisible(true)
        );
        const keyboardDidHideListener = Keyboard.addListener(
            Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
            () => setKeyboardVisible(false)
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

  const handleSearch = () => {
    if (!currentQuery.trim()) return;
    addToSearchHistory(currentQuery);
    Keyboard.dismiss();
  };

  const testData = [
    {
      "title": "신고합니다. 여기 예선전인데 박인수 유창현 Karl이 있어요;;【DMH 카트리그 64강 예선 개인화면】",
      "uploader": "유영혁",
      "view_count": 15856,
      "thumbnail": "https://i.ytimg.com/vi/_yPaY3vvRVo/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=_yPaY3vvRVo",
      "duration": 1286.0,
      "video_id": "_yPaY3vvRVo"
  },
  {
      "title": "흑기사 Xun 이 출시해버렸습니다 ㄷㄷ",
      "uploader": "문호준",
      "view_count": 36672,
      "thumbnail": "https://i.ytimg.com/vi/tG2WZT_AOQM/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=tG2WZT_AOQM",
      "duration": 659.0,
      "video_id": "tG2WZT_AOQM"
  },
  {
      "title": "런민기하면 고가?? 진짜 오랜만에 빡겜가볼게요",
      "uploader": "런민기",
      "view_count": 209181,
      "thumbnail": "https://i.ytimg.com/vi/cp0yf6vBC6Y/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=cp0yf6vBC6Y",
      "duration": 781.0,
      "video_id": "cp0yf6vBC6Y"
  },
  {
      "title": "넥슨이 미쳤다 ㄷㄷ 드디어 무과금카트 개좋은거 나옴",
      "uploader": "런민기",
      "view_count": 54525,
      "thumbnail": "https://i.ytimg.com/vi/kaOtBmAJApI/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=kaOtBmAJApI",
      "duration": 818.0,
      "video_id": "kaOtBmAJApI"
  },
  {
      "title": "Let's beat Ren Min-gi in his prime. | Ren Min-gi in Season 2 vs. Ren Min-gi in Season 27",
      "uploader": "런민기",
      "view_count": 408088,
      "thumbnail": "https://i.ytimg.com/vi/Ik-rgyadP9Q/maxresdefault.jpg",
      "url": "https://www.youtube.com/watch?v=Ik-rgyadP9Q",
      "duration": 739.0,
      "video_id": "Ik-rgyadP9Q"
  },
  {
    "title": "넥슨이 미쳤다 ㄷㄷ 드디어 무과금카트 개좋은거 나옴",
    "uploader": "런민기",
    "view_count": 54525,
    "thumbnail": "https://i.ytimg.com/vi/kaOtBmAJApI/maxresdefault.jpg",
    "url": "https://www.youtube.com/watch?v=kaOtBmAJApI",
    "duration": 818.0,
    "video_id": "kaOtBmAJApI"
},
{
    "title": "Let's beat Ren Min-gi in his prime. | Ren Min-gi in Season 2 vs. Ren Min-gi in Season 27",
    "uploader": "런민기",
    "view_count": 408088,
    "thumbnail": "https://i.ytimg.com/vi/Ik-rgyadP9Q/maxresdefault.jpg",
    "url": "https://www.youtube.com/watch?v=Ik-rgyadP9Q",
    "duration": 739.0,
    "video_id": "Ik-rgyadP9Q"
},
{
  "title": "넥슨이 미쳤다 ㄷㄷ 드디어 무과금카트 개좋은거 나옴",
  "uploader": "런민기",
  "view_count": 54525,
  "thumbnail": "https://i.ytimg.com/vi/kaOtBmAJApI/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=kaOtBmAJApI",
  "duration": 818.0,
  "video_id": "kaOtBmAJApI"
},
{
  "title": "Let's beat Ren Min-gi in his prime. | Ren Min-gi in Season 2 vs. Ren Min-gi in Season 27",
  "uploader": "런민기",
  "view_count": 408088,
  "thumbnail": "https://i.ytimg.com/vi/Ik-rgyadP9Q/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=Ik-rgyadP9Q",
  "duration": 739.0,
  "video_id": "Ik-rgyadP9Q"
},
{
  "title": "넥슨이 미쳤다 ㄷㄷ 드디어 무과금카트 개좋은거 나옴",
  "uploader": "런민기",
  "view_count": 54525,
  "thumbnail": "https://i.ytimg.com/vi/kaOtBmAJApI/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=kaOtBmAJApI",
  "duration": 818.0,
  "video_id": "kaOtBmAJApI"
},
{
  "title": "Let's beat Ren Min-gi in his prime. | Ren Min-gi in Season 2 vs. Ren Min-gi in Season 27",
  "uploader": "런민기",
  "view_count": 408088,
  "thumbnail": "https://i.ytimg.com/vi/Ik-rgyadP9Q/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=Ik-rgyadP9Q",
  "duration": 739.0,
  "video_id": "Ik-rgyadP9Q"
},
{
  "title": "넥슨이 미쳤다 ㄷㄷ 드디어 무과금카트 개좋은거 나옴",
  "uploader": "런민기",
  "view_count": 54525,
  "thumbnail": "https://i.ytimg.com/vi/kaOtBmAJApI/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=kaOtBmAJApI",
  "duration": 818.0,
  "video_id": "kaOtBmAJApI"
},
{
  "title": "Let's beat Ren Min-gi in his prime. | Ren Min-gi in Season 2 vs. Ren Min-gi in Season 27",
  "uploader": "런민기",
  "view_count": 408088,
  "thumbnail": "https://i.ytimg.com/vi/Ik-rgyadP9Q/maxresdefault.jpg",
  "url": "https://www.youtube.com/watch?v=Ik-rgyadP9Q",
  "duration": 739.0,
  "video_id": "Ik-rgyadP9Q"
}
]

  return (
    <SafeAreaView 
    style={styles.container}>
      <CustomView
      width="100%"
      paddingVertical={SPACING.lg}
      paddingHorizontal={SPACING.xs}
      >
      <CustomView
        width="100%"
        flexDirection={'row'}
        alignItems={'center'}
        paddingVertical={SPACING.sm}
        paddingHorizontal={SPACING.xs}
        gap={SPACING.sm}
        style={styles.inputContainer}
        >
          <Search size={24} color={COLORS.border.secondary} />
          <CustomInput
            width="100%"
            placeholder="Search"
            placeholderFontSize={16}
            value={currentQuery}
            onValueChange={setCurrentQuery}
            style={{
              padding: 0,
              margin: 0,
              includeFontPadding: false,
              textAlignVertical: 'center'
            }}
          />
        </CustomView>
        {isKeyboardVisible ? (
          <TouchableOpacity 
            onPress={handleSearch} 
            style={styles.searchButton}
            activeOpacity={0.8}
          >
            <CustomText fontColor={COLORS.text.primary} fontSize={16} fontWeight={500}>
              Search
            </CustomText>
          </TouchableOpacity>
        ) : null}
      </CustomView>
      <CustomView width="100%" height="100%" style={styles.scrollContainer}>
        {isKeyboardVisible && (
          <CustomView 
            style={styles.overlay}
          />
        )}
        <ScrollView
        style={{
          width:'100%',
          height:'100%',
          paddingVertical: SPACING.sm,
          paddingHorizontal: SPACING.lg,
        }}
        contentContainerStyle={{
          gap : SPACING.lg,
        }}
      >
        {testData.map((item, index) => (
          <MusicCard
            key={index}
            title={item.title}
            artist={item.uploader}
            imgUrl={item.thumbnail}
          />
        ))}
      </ScrollView>
      </CustomView>
      
      <NavBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.primary,
        position : 'relative',
    },
    inputContainer: {
      borderBottomWidth : 1,
      borderColor : COLORS.border.secondary,
      position : 'relative',
    },
    searchButton: {
      width: '100%',
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: COLORS.brand.primary,
      paddingHorizontal: SPACING.md,
      paddingVertical: SPACING.sm,
      borderRadius: SPACING.xs,
      position: 'absolute',
      top: 90,
      zIndex: 9999,
    },
    scrollContainer: {
      position: 'relative',
      flex: 1,
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: 9998,
    }
});
