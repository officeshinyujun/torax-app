import React from "react";
import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from "react-native";

type ButtonProps = {
    width?: any; 
    height?: number; 
    backgroundColor?: string; 
    borderColor?: string; 
    hasBorder?: boolean; 
    font?: string; 
    fontColor?: string; 
    fontSize?: number; 
    onPress?: () => void; 
    style? : any;
    justifyText?: any;
    fontWeight?: any;
};

export default function CustomButton({
                                        width, height,
                                        backgroundColor,
                                        borderColor,
                                        hasBorder = false, 
                                        font = "", 
                                        fontColor = "#111", 
                                        fontSize = 16, 
                                        onPress = () => {}, 
    style, fontWeight, justifyText
                                     }: ButtonProps) {
    
    const buttonStyle: StyleProp<ViewStyle> = {
        backgroundColor,
        borderColor: hasBorder ? borderColor : "transparent",
        borderWidth: hasBorder ? 1 : 0,
        borderRadius: 8, 
        alignItems: "center" ,
        justifyContent: justifyText ? justifyText : "center",
        flexDirection: "row",
    };

    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.buttonContainer, buttonStyle, {width, height},style ]}>
            <Text style={[ { color: fontColor, fontSize, fontWeight: fontWeight,  }]}>{font}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
    },
});