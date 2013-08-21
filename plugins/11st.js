// Copyright (c) 2010 Romain Vallet
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: '11st',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
		
		hoverZoom.urlReplace(res, 
			'img[src*="i.011st.com/t/"]',
			/\/t\/\w+/,
			'/t/300'
		);		

		hoverZoom.urlReplace(res, 
			'img[src*="i.011st.com/ex_t/"]',
			/\/ex_t\/R\/\w+/,
			'/ex_t/R/300x300'
		);		
		
		//http://i.011st.com/ex_t/R/120x120/1/85/0/src/k/2/0/4/2/1/6/189204216_B_V3.gif
		
		
		callback($(res));
	}
});
