var faker = require('faker');

module.exports = {

	init: function(){
		localStorage.clear();
		localStorage.setItem('users',JSON.stringify([
			{
				id: "u_1",
				f_name: "Rodrigo"
			},
			{
				id: "u_2",
				f_name: "Gabriella"			
			},
			{
				id: "u_3",
				f_name: "Chris"
			}
		]));
	}
};