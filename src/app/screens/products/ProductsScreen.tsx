import React from "react";
import {FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {useTheme} from "../../contexts/ThemeContext";

/**
 * ProductsScreen Component
 *
 * @description Products screen that displays user information and actions
 * @returns {React.ReactElement} Products screen component
 */
export function ProductsScreen(): React.ReactElement {
    const {isDarkMode} = useTheme();

    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
        >
            <View className="flex-1 min-h-screen justify-center p-4 space-y-6">
                <FlatList
                    keyExtractor={(_, index) => index.toString()}
                    data={new Array(10).fill({})}
                    renderItem={() => {
                        return (
                            <View className="mb-2 bg-white flex-1 p-4 rounded-2xl shadow-sm flex-row gap-2">
                                <View>
                                    <Image
                                        height={80}
                                        width={80}
                                        source={{uri: "https://images.tcdn.com.br/img/img_prod/808609/bala_lua_cheia_frutas_dori_600g_57681440_1_c74ea6ca006b5c14563eac73f9f3e6ee.jpg"}}
                                    />
                                </View>
                                <View className="flex-1 gap-2">
                                    <Text>Nome Do Produto</Text>
                                    <View className="flex-1 flex-col flex-wrap gap-2">
                                        <Text>R$3.000,00</Text>
                                        <Text>R$3.000,00</Text>
                                    </View>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Text>
                                            Editar
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity>
                                        <Text>
                                            Deletar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        );
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

export default ProductsScreen;
