import { StyleSheet, StatusBar } from "react-native";
<<<<<<< HEAD
=======
import { black, yellow } from "ansi-colors";
>>>>>>> 1168380dd26f45486390960b60a4ce8f55c2e98b
const styles = StyleSheet.create({
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
      paddingLeft: 10,
      color:'yellow'
    },
    appContainer: {
        paddingTop:StatusBar.currentHeight ? StatusBar.currentHeight : 5, 
        backgroundColor:'black'
        
      },
      imgContainer:{
        
        justifyContent: 'center',
        alignItems: 'center',
       height:90 
      },
      img:{
        width:200,
        flex:1
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
<<<<<<< HEAD
=======
      pickerTitle: {
        
        textAlign: 'left',
        color:'yellow'
      },
      loaderContainer: {
        flex: 1,
        justifyContent: 'center'
      },
      loaderHorizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
      },
      marqueeContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        
      },
      themeContainer:{
        backgroundColor:'black',
        flex:1
      }
>>>>>>> 1168380dd26f45486390960b60a4ce8f55c2e98b
  });
  export default styles;