import styled from 'styled-components'; // 3.4.2
import { View, Text,Image } from "react-native";



export const BoldAuthor = styled.Text`
font-weight:bold;
`;
export const StyledImg = styled.Image`
height:250px;

`;
export const HeaderImage = styled.Image`
height:24px;

`
export const ActionBar = styled.View`
flex: 1;
flexDirection: row;
width:50%;
paddingLeft:2;
`
export const BookmarkBar = styled.View`
flex: 1;
flexDirection: row;
width:50%;
height:30;
`
export const ActionContainer = styled.View`
flex: 1;
flexDirection: row;
paddingTop:10;
`
export const ActionItem = styled.View`
width:25%;
height:50px;
flex:1;
flexDirection:row;
marginLeft:auto;
`
export const ActionImage = styled.Image`
height:25px;
width:25px;

`
export const BookmarkImage = ActionImage.extend`
marginLeft:auto;

`