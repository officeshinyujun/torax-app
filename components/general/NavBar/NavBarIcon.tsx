import { View, Text, TouchableOpacity } from 'react-native';
import { SPACING } from "@/constants/SPACING";
import { COLORS } from "@/constants/COLORS";
import { Heart, Home, List } from 'lucide-react-native';
import { router } from 'expo-router';

interface INavBarIcon {
  icon: 'heart' | 'house' | 'list';
  label: string;
  isActive: boolean;
  routeName: string;
}

export default function NavBarIcon({ icon, label, isActive, routeName }: INavBarIcon) {
  const iconColor = isActive ? COLORS.brand.primary : COLORS.text.primary;
  const textColor = isActive ? COLORS.brand.primary : COLORS.text.primary;
  const fontWeight = isActive ? '600' : '500';

  const renderIcon = () => {
    switch (icon) {
      case 'heart':
        return <Heart size={32} color={iconColor} />;
      case 'house':
        return <Home size={32} color={iconColor} />;
      case 'list':
        return <List size={32} color={iconColor} />;
      default:
        return null;
    }
  };

  const handlePress = () => {
    //@ts-ignore
    router.push(routeName);
  };

  return (
    <TouchableOpacity 
      onPress={handlePress}
      style={{
        width: 48,
        alignItems: 'center',
        justifyContent: 'center',
        gap: SPACING.xs,
      }}
      activeOpacity={0.7}
    >
      {renderIcon()}
      <Text style={{
        fontSize: 12,
        fontWeight: fontWeight as any,
        color: textColor,
      }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}