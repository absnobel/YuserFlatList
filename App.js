/*------------------------------------------------- App -----
         |  Class App
         |
         |  Purpose:  This class will be used for Yuser's flat list react-native application test. 
         |            The code used was the standard snack(expo) plus additions as needed. 
         |            TODO: Lazy loading(Yuser api not really used here..flat json file.)
         |  Developer: Aaron B Snobel
         | 
         |  
         |  TERMS OF USE -
         |   Open source under the MIT License.
         |    Copyright 2018 Aaron B Snobel. All rights reserved.
         |
         *-------------------------------------------------------------------*/
import React from 'react';
import { FlatList, View, Text, Image } from 'react-native';
import FlatListItem from './FlatListItem'
import styles from './GlobalStyles'

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
     error: null,
      refreshing: false,
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    
    const url = 'https://yuser.co/nodes.json';
    this.setState({ loading: true });
    fetch(url)
    .then(res=>res.json())
      .then(res => {
       this.setState({
          data:res,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };
  
  render() {
    
    if(this.state.loading) return (<View><Text>Nothing to render</Text></View>);
    else if(!this.state.loading && this.state.data.length){
     return (
      <View style={styles.appContainer}>
          <Text>Coded By: Aaron B Snobel - aaronsnobel@aaronsnobel.ca</Text>
          <View style={styles.imgContainer}>
          <Image style={styles.img} source={require('./assets/img/logo.png')}/> 
          </View>
          <FlatList
          keyExtractor={(item,index)=>index.toString()}
            data={this.state.data}
            renderItem={({item}) => 
            <FlatListItem data={item}></FlatListItem>}
          />
        </View>
    );
  }
  else{
    return(<View><Text>No results</Text></View>)
  }
  
}
}


