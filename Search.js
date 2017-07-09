// The Search component consists of a Bootstrap form with an input group. When the form is submitted the App's searchForAddress method is called.

var React = require('react');

var Search = React.creatClass({
	
	getInitailState(){
		return{value:''};
	},
	
	handleChange(event){
		this.setState({value: event.target.value});
	},
	
	handleSubmit(event){
		
		event.preventDefault();
		
		// When the form is submitted, call the onSearch callback that is passed
		
		this.props.onSearch(this.state.value);
		
		// Unfocus the text input field
		
		this.getDomnode().quearySelector('input').blur();
	},
	
	render(){
		
		return{
			<form id="geocoding_form" className="form-horizontal" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="col-xs-12 col-md-offset=3">
						<div className="input-group"
							<input type="text" className="form-control" id="address" placeholder="Find a location..."
							value={this.state.value} onChange{this.handleChange} />
							<span className="input-group-btn">
								<span className="glyphicon glyphicon-search" aria-hidden="true"></span>
							</span>
						</div>
					</div>
				</div>
			</div>
		}:
	}
module.exports = Search;
