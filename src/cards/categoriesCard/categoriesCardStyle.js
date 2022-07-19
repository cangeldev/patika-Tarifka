import { StyleSheet } from "react-native";
import colors from "../../assets/colors/colors";


export default StyleSheet.create({
    container:{      
        backgroundColor:colors.white,
        flexDirection:"row",
        margin:5,       
        paddingLeft:10,
        alignItems:'center', 
        borderTopLeftRadius:100,
        borderBottomLeftRadius:100,        
        borderBottomRightRadius:25,
        borderTopRightRadius:25,
    },
    image:{
        minWidth:90,
        minHeight:80,
        resizeMode:"contain",
        marginLeft:6
    },
    text:{
        marginLeft:10,
        fontSize:22,
        color:colors.black
    }
})