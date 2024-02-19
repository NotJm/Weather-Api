import { Text, TouchableOpacity } from "react-native";
import { styles } from "./Styles";

export const WeatherButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Obtener Clima</Text>
        </TouchableOpacity>
    )
};