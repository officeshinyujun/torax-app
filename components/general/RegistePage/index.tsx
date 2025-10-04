import { useState } from 'react';
import { Image, Pressable } from 'react-native';
import { StyleSheet } from 'react-native';
import { COLORS } from '@/constants/COLORS';
import { SPACING } from '@/constants/SPACING';
import CustomView from '@/components/general/CustomView';
import CustomText from '../CustomText';
import { FONTS } from '@/constants/FONTS';

export default function RegisterPage() {
    return (
        <CustomView
            style={styles.container}
            alignItems="center"
            justifyContent="center"
            gap={SPACING.lg}
        >
            <Image
                source={require('@/assets/images/torax-logo.png')}
                style={{ width: 72, height: 38 }}
            />
            <Pressable
                onPress={() => {}}
                style={({ pressed }) => [
                    styles.button,
                    {
                        transform: [{ scale: pressed ? 1.05 : 1 }],
                    },
                ]}
            >
                <Image
                    source={require('@/assets/images/google-icon.png')}
                    style={{ width: 24, height: 24 }}
                />
                <CustomText
                    fontSize={FONTS.text.sm}
                    fontWeight={FONTS.weight.semibold}
                    fontColor={COLORS.text.primary}
                >
                    Google로 시작하기
                </CustomText>
            </Pressable>
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background.primary,
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: SPACING.xl,
        paddingVertical: SPACING.xs,
        gap: SPACING.sm,
        backgroundColor: COLORS.brand.primary,
        borderRadius: SPACING.lg,
    },
});
