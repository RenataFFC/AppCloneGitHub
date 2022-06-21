import React from 'react';
import { 
View, 
Image, 
StyleSheet, 
Text,
SafeAreaView, 
StatusBar, 
Pressable, 
} from 'react-native';


const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorDarkFontGitHub = '#4F565E';
const imageProfileGithub = 
'https://avatars.githubusercontent.com/u/97262523?v=4';


const App = () => {
    return ( 
	 < SafeAreaView style={style.container}>
        <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
		<View style={style.content}>
		 <Image 
		 accessibilityLabel="foto Renata" 
		 style={style.avatar}  
		 source={{uri: imageProfileGithub}}/>
		 <Text accessibilityLabel=" Nome: Renata Fernandes" style={[style.defaultText,style.name]}> Renata Fernandes </Text> 
		 <Text accessibilityLabel=" NickName: Renata Fernandes" style={[style.defaultText,style.nickname]}>renatactba </Text>
		  <Text accessibilityLabel="Descrição: Desenvolvedora Fron-End e Tech-Recruiter" style={[style.defaultText, style.description]}> Desenvolvedora Fron-End e Tech-Recruiter
		  </Text>
		  <Pressable onPress={() => console.log('github')}>
		   <View style ={style.button}>
		      <Text style={[style.defaultText, style.textButton]}>Open in Github </Text>
		   </View>
		    </Pressable>
		  
        </View>
		</SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
	   container:{
		backgroundColor: colorGitHub,
        flex: 1,
		justifyContent: 'center',
		alignItems:'center',
    },
	content:{
		alignItems: 'center',
		padding:20,
		
	},
	avatar:{
		height:200,
		width:200,
		borderRadius:100,
		borderColor: 'white',
		borderWidth:2,
		},
		defaultText:{
			color:colorFontGitHub,
			
		},
		name:{
			marginTop:20,
			fontWeight:'bold',
			fontSize:24,
			
		},
		nickname:{
			fontSize:18,
			color:colorDarkFontGitHub,
		},
		description:{
			fontWeight:'bold',
			fontSize:15,
		},
		button:{
			fontSize:12,
			marginTop:35,
			backgroundColor: colorDarkFontGitHub,
			borderRadius:10,
			padding:20,
		},
		textButton:{
			fontWeight:'bold',
			fontSize:16,
		},
		
		
});
