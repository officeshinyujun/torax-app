import { useEffect, useRef } from 'react';
import { Animated, TouchableOpacity, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';
import CustomView from "@/components/general/CustomView";
import CustomText from "@/components/general/CustomText";
import { COLORS } from "@/constants/COLORS";
import { SPACING } from "@/constants/SPACING";
import { MODAL } from "@/constants/LAYOUT";
    
interface ISearchModal {
    onClose: () => void;
    isVisible: boolean;
}

export default function SearchModal({ onClose, isVisible }: ISearchModal) {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(MODAL.HIDDEN_POSITION)).current;

    const handleClose = () => {
        // Start fade out and slide down animations
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: MODAL.ANIMATION_DURATION,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: MODAL.HIDDEN_POSITION,
                duration: MODAL.ANIMATION_DURATION,
                useNativeDriver: true,
            })
        ]).start(() => {
            // Call onClose after animation completes
            onClose();
        });
    };
    useEffect(() => {
        if (isVisible) {
            // Reset animation values
            fadeAnim.setValue(0);
            slideAnim.setValue(MODAL.HIDDEN_POSITION);
            
            // Start fade in and slide up animations
            Animated.parallel([
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: MODAL.ANIMATION_DURATION,
                    useNativeDriver: true,
                }),
                Animated.timing(slideAnim, {
                    toValue: MODAL.VISIBLE_POSITION,
                    duration: MODAL.ANIMATION_DURATION,
                    useNativeDriver: true,
                })
        ]).start();
    }
}, [isVisible]);

if (!isVisible) return null;
    return (
        <View style={styles.overlay}>
            <Animated.View 
                style={[
                    styles.modalContainer,
                    { opacity: fadeAnim }
                ]}
            >
                <TouchableWithoutFeedback onPress={handleClose}>
                    <BlurView
                        style={styles.blurView}
                        intensity={40}
                        tint="dark"
                    >
                        <View style={styles.blurBackground} />
                    </BlurView>
                </TouchableWithoutFeedback>
                <Animated.View 
                    style={[
                        styles.modalContent,
                        { transform: [{ translateY: slideAnim }] }
                    ]}
                >
                    <CustomText>SearchModal</CustomText>
                    <TouchableOpacity onPress={handleClose}>
                        <CustomText>Close</CustomText>
                    </TouchableOpacity>
                </Animated.View>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: MODAL.BOTTOM_OFFSET - MODAL.ANIMATION_OFFSET,
        zIndex: 9998,
    },
    modalContainer: {
        flex: 1,
        position: 'relative',
    },
    blurView: {
        ...StyleSheet.absoluteFillObject,
    },
    blurBackground: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalContent: {
        width: 350,
        height: MODAL.HEIGHT,
        backgroundColor: COLORS.background.primary,
        borderRadius: SPACING.xxl,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 106, // NavBar height (86) + 20px
        left: '50%',
        marginLeft: -175, // Half of width (350/2)
        shadowColor: 'rgba(81, 81, 81, 0.25)',
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 1,
        shadowRadius: 24,
        elevation: 5,
    },
});