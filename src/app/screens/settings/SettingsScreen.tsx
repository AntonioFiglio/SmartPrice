import React from "react";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {RouteProp} from "@react-navigation/native";
import {useTheme} from "../../contexts/ThemeContext";
import {ProfileHeader} from "../../components/organisms/ProfileHeader";
import SectionTitle from "@/app/components/atoms/SectionTitle";

type SettingsScreenRouteProp = RouteProp<
    {
        params: {
            bottomMenuEnabled?: boolean;
            onBottomMenuToggle?: (value: boolean) => void;
        };
    },
    "params"
>;

export function SettingsScreen() {
    const {isDarkMode, accentColor} = useTheme();

    const getSectionClassName = (isDark: boolean) => `
    rounded-xl shadow-sm border overflow-visible 
    ${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} 
    mt-4 max-w-md w-full mx-auto
  `;

    const example = () => {
    };

    return (
        <ScrollView
            className={`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
            keyboardShouldPersistTaps="handled"
        >
            <View className="flex-1 min-h-screen justify-center p-4 space-y-6">
                <ProfileHeader
                    name="Guilherme Doe"
                    title="Atacadista"
                    onEdit={example}
                    onShare={example}
                    testID="profile-header"
                />

                <View className={`${getSectionClassName(isDarkMode)} mt-8`}>
                    <View className="px-4 py-3">
                        <SectionTitle>Geral</SectionTitle>
                    </View>
                    <View className="px-4 pb-8">
                        <TouchableOpacity
                            onPress={example}
                            className={`flex-row items-center py-3 px-4 rounded-xl`}
                            style={{backgroundColor: accentColor}}
                        >
                            <Text className="text-white font-medium ml-2">Desconectar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

export default SettingsScreen;
