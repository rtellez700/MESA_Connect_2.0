import React from 'react';
import FormItem from './FormItem';

class FormList extends React.Component {
	render() {
		var formItemNodes = this.props.data.map( (formItem) => {
			return (
				<div className="form-group">
					<FormItem itemId={formItem.id} title={formItem.title} placeholder={formItem.placeholder} key={formItem.id}/>
				</div>
			);
		});
		return (
			<div className="FormList">
				{ formItemNodes }
			</div>
		);
	}
}
module.exports = FormList
