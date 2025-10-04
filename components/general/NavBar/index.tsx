import CustomView from "../CustomView";
import { SPACING } from "@/constants/SPACING";
import NavBarIcon from "./NavBarIcon";
import { StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS } from "@/constants/COLORS";
import { usePathname } from 'expo-router';
import { Search } from "lucide-react-native";
import { useState } from 'react';
import SearchModal from '@/components/Search/SearchModal';


const routeMap = {
  'heart': '/like',
  'house': '/',
  'list': '/list',
} as const;

export default function NavBar() {
  const pathname = usePathname();
  const [isModalVisible, setModalVisible] = useState(false);
  return (
    <>
    <CustomView
        width="100%"
        paddingVertical={SPACING.lg}
        paddingHorizontal={48}
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'space-between'}
        style={styles.container}
    >
      <NavBarIcon 
        icon="heart" 
        label="Heart" 
        isActive={pathname === routeMap.heart} 
        routeName={routeMap.heart} 
      />
      {pathname === routeMap.house ? (
        <TouchableOpacity onPress={() => {setModalVisible(true)}}>
            <CustomView style={styles.searchContainer}>
                <Search size={28} color={COLORS.text.primary} />
            </CustomView>
        </TouchableOpacity>
      ) : (
        <NavBarIcon 
            icon="house" 
            label="House" 
            isActive={pathname === routeMap.house} 
            routeName={routeMap.house}
        />
        )} 
        <NavBarIcon 
            icon="list" 
            label="List" 
            isActive={pathname === routeMap.list} 
            routeName={routeMap.list}
        />
    </CustomView>
    <SearchModal onClose={() => setModalVisible(false)} isVisible={isModalVisible} />
    </>
  );
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: COLORS.background.primary,
        borderWidth: 1,
        borderColor: COLORS.border.secondary,
        borderRadius : SPACING.xxl, 
    },
    searchContainer:{
        width:52,
        height:52,
        borderRadius : 9999,
        backgroundColor: COLORS.brand.primary,
        alignItems:'center',
        justifyContent:'center',
    }
});
