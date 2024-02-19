import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 10,
        fontSize: 16,
        borderRadius: 5,
        backgroundColor: '#fff',
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 8,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
    },
    weatherContainer: {
        marginTop: 20,
        alignItems: 'center',
    },
    weatherCity: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#333',
    },
    weatherTemp: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#3498db',
    },
    weatherCondition: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    weatherInfo: {
        fontSize: 16,
        color: '#555',
    },
});
