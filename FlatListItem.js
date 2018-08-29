/*------------------------------------------------- FlatListItem -----
         |  Class FlatListItem
         |
         |  Purpose:  This class will be used for Yuser's flat list react-native application test. 
         |      Through the use of styled components (unnecessary but added to show robust knowledge) and inline react-native comp styles
         |      this class will produce the necessary view for each item in the json (yuser.co/nodes.json)
         |  Developer: Aaron B Snobel
         | 
         |  
         |  TERMS OF USE -
         |   Open source under the MIT License.
         |    Copyright 2018 Aaron B Snobel. All rights reserved.
         |
         *-------------------------------------------------------------------*/
import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {ActionItem,StyledImg,BoldAuthor,ActionImage,BookmarkImage,ActionBar,ActionContainer,BookmarkBar} from './StyledComponents'
import styles from './GlobalStyles'
export default class FlatListItem extends Component {
    constructor(props) {
      super(props);
    }
  
    render(){
      var tileInfo = this.props.data;
      
      return(
         <View style={styles.listItemContainer}>
          <StyledImg source={{uri:tileInfo.image.src}} />
            <ActionContainer>
             <ActionBar>
               <ActionItem><ActionImage source={require('./assets/img/gem.png')}/><Text style={styles.actionText}>{tileInfo.gems?tileInfo.gems : 0}</Text></ActionItem>
               <ActionItem><ActionImage source={require('./assets/img/comments.png')}/><Text style={styles.actionText}>{tileInfo.comments ? tileInfo.comments : 0}</Text></ActionItem>
               <ActionItem><ActionImage source={require('./assets/img/send.png')}/></ActionItem>
               </ActionBar> 
               <BookmarkBar><BookmarkImage source={require('./assets/img/bookmark.png')}/></BookmarkBar>
               </ActionContainer>
               <View style={styles.textView}>
                 <Text style={styles.actionText}>
                   <BoldAuthor>{tileInfo.author}</BoldAuthor>
                   {tileInfo.body ?
                    <Text>&nbsp;&nbsp;{ tileInfo.body}</Text>
                    : null}
                </Text>
                 
                 
               </View>      
         </View>
         );
         
    }
}