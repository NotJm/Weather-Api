import { TextInput } from "react-native";
import { styles } from "./Styles";

export const CityInput = ({ value, onChangeText }) => {
    return (
        <TextInput
        style={styles.input}
        placeholder="Ingresa la ciudad"
        value={value}
        onChangeText={onChangeText}
      />
    )
}
