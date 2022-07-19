import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";


export default StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        margin: 6,
        borderRadius: 20,
        overflow: "hidden",
        height: 170
    },
    image: {
        minHeight: 170,
        width: "100%",
        resizeMode: "cover",
        justifyContent: "flex-end"
    },
    text: {
        fontSize: 22,
        color: colors.white,
        backgroundColor: 'rgba(52, 52, 52, 0.6)',
        textAlign: "center",
        paddingHorizontal: 10,
        fontWeight: "bold"

    }
})