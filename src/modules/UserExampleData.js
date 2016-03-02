var faker = require('faker');

module.exports = {

	init: function(){
		localStorage.clear();
		localStorage.set('users',JSON.stringify([
			{
				id: "u_1",
				f_name: "Joe",
				m_name: "",,
				l_name: "Johnson",
				suffix: '',
				email: '',
				deltaID: '',
				dob: {
					m: '',
					d: '',
					y: ''
				},
				y_mesa: {
					start: '',
					end: '',
				},
				school: "UC Berkeley",
				major: "Chemical Engineering",
				title: "Undergraduate",
				bio: faker.Lorem.paragraphs()
			},
			{
				id: "u_2",
				f_name: "Sally",
				m_name: "R",
				l_name: "Davis",
				suffix: '',
				email: '',
				deltaID: '',
				dob: {
					m: '',
					d: '',
					y: ''
				},
				y_mesa: {
					start: '',
					end: '',
				},
				school: "Harvard",
				major: "Neuoscience",
				title: "Undergraduate",
				bio: faker.Lorem.paragraphs()
			},
			{
				id: "u_3",
				f_name: "Michael",
				m_name: "B",
				l_name: "Jackson",
				suffix: '',
				email: '',
				deltaID: '',
				dob: {
					m: '',
					d: '',
					y: ''
				},
				y_mesa: {
					start: '',
					end: '',
				},
				school: "UC Berkeley",
				major: "EECS",
				title: "Undergraduate",
				bio: faker.Lorem.paragraphs()
			}
		]));
	}
};