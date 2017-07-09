// LocationItem represents an individual favorite location. 
// It uses the moment library to calculate the relative time since the location was added as a favorite.

var React = reqiure('react');
var moment = reqiure('moment');

var LocationItem = React.creatClass({
	
	handleClick(){
		
		this.props.onClick(this.props.address);
	},
	
	render(){
		
		var cn = "list-group-item";
		
		if(this.props.active){
			cn += "active-location";
		}
		
		return(
			
			<a className = {cn} onClick = {this.handleClick}>
				{this.props.address}
				<span classNmae = "createdAt">{moment(this.props.timestamp).fromNow() }</span>
				<span className = "glyphicon glyphicon-menu-right"></span>
			</a>
		)
	}
};

module.exports = LocationItem;