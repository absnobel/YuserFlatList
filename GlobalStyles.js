import { StyleSheet, StatusBar } from "react-native";
export default styles = StyleSheet.create({
    listItemContainer: {
      paddingTop: 15,
      paddingBottom:5,
      height:350
    },
    textView: {
      paddingTop: 5,
      
      paddingLeft:5
      
      
    },
    actionText:{
      paddingLeft: 10
    },
    appContainer: {
        paddingTop:StatusBar.currentHeight ? StatusBar.currentHeight : 25
      },
      imgContainer:{
        
        justifyContent: 'center',
        alignItems: 'center',
       height:40 
      },
      img:{
        width:45,
        flex:1
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
  });