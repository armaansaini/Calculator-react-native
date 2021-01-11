import React from 'react';

//---------------------
//	Theme preferences
//---------------------
export const themes = {
	light: {
		background:'#eee',
		foreground:'#222',
	},
	dark: {
		backgroundColor:'#312c51',
		textColor:'#eee',
	},
};

const ThemeContext = React.createContext(themes.dark);

export default ThemeContext;