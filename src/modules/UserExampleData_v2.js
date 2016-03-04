var faker = require('faker');

module.exports = {

	init: function(){
		return ( JSON.stringify([
			{
				id: "u_1",
				f_name: "Rodrigo",
				l_name: "Tellez",
				school: "UC Berkeley",
				major: "Chemical Engineering",
				title: "Undergraduate",
				bio: faker.Lorem.paragraphs()
			},
			{
				id: "u_2",
				f_name: "Gabriella",
				l_name: "Herrera",
				school: "Harvard",
				major: "Neuoscience",
				title: "Undergraduate",
				bio: faker.Lorem.paragraphs()
			},
			{
				id: "u_3",
				f_name: "Chris",
				l_name: "Augmon",
				school: "UC Berkeley",
				major: "EECS",
				title: "Undergraduate",
				bio: faker.Lorem.paragraphs()
			}
		]));
	}
};