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
import { Picker, View, Text, Image,  ActivityIndicator } from 'react-native';
import FlatListItem from './FlatListItem';
import styles from './GlobalStyles';
import Images from './assets/images';
import MarqueeText from 'react-native-marquee';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      characters:[],
      selected: -1,
     error: null
      
    };
  }

  componentDidMount() {
    this.retrieveFilms();
  }
SetTitle = (itemValue) =>{
  console.log("title set:"+itemValue);
  this.setState({loading:true});
  Promise.all(this.state.data[itemValue].characters.map(url =>
    fetch(url).then(resp => resp.json())
)).then(chars => {
    this.setState({characters:chars,selected: itemValue, loading:false});
})

}
retrieveFilms = () => {
    fetch('http://swapi.co/api/films/').then(result=>result.json()).then(data=>{
    let results = data.results;  
    results.sort((a, b) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime());
    
    this.setState({data:results,loading:false});
  }).catch(error => {
        this.setState({ error, loading: false });
      });
  };
  
  render() {
    
    if(this.state.loading) return (<View style={[styles.loaderContainer, styles.loaderHorizontal]}><ActivityIndicator size="small" color="#FFFF00" /></View>);
    else if(!this.state.loading && this.state.data.length){
     return (<View style={styles.themeContainer}>
      <View style={styles.appContainer}>
          <Text style={styles.actionText}>Coded By: Aaron B Snobel - aaronsnobel@aaronsnobel.ca</Text>
          <View style={styles.imgContainer}>
          <Image style={styles.img} source={Images.HeaderPhoto}/> 
          </View>
            </View>
            
           <Text style={styles.pickerTitle}>
           Star Wars Films
            </Text>
          <Picker
            selectedValue={this.state.selected}
            style={{ height: 50, color:'yellow'}}
            
            onValueChange={(itemValue, itemIndex) => this.SetTitle(itemValue)}>
             <Picker.Item  key={-1} label={"Please Select A Title..."} value={-1} />
            { this.state.data.map((value, index)=>
              <Picker.Item key={index} label={value.title} value={index} />
            )}
            </Picker>
           {this.state.selected > -1 && <View>
            <View style={styles.marqueeContainer}>
              <MarqueeText
                style={{ fontSize: 24, width:200, color:'yellow' }}
                duration={3000}
                marqueeOnStart={true}
                loop={true}
                marqueeDelay={1000}
                marqueeResetDelay={1000}
              >
              {this.state.data[this.state.selected].title}
            </MarqueeText>
          </View>
          <Text style={styles.pickerTitle}>num chars: {this.state.characters.length}</Text>
            
          <EnhancedTable data={this.state.characters}/>
          </View>
           }
         </View>
       
    );
  }
  else{
    return(<View><Text>No results</Text></View>)
  }
  
}
}


