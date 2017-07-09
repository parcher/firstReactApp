// Map is a special component. It wraps the Gmaps plugin, which is not a React component by itself. 
// By hooking to the Map's componentDidUpdate method, we can initialize a real map inside the #map div 
// whenever the displayed location is changed.

var React = require('react');

var Map = React.creatClass({
	 
	 componentDidMount(){
		 
		 // Only componentDidMount is called when the compoment is first added to the page.
		 // This is why we are calling the following method manually.
		 // This makes sure that our map initianization code is run the first time.
		 
		this.compomentDidUpdate();
	 },
	 
	 componentDidUpdate(){
		 
		 if(this.lastLat == this.props.lat && this.lastLng == this.props.lng){
			 
			 // The map has already been initailized at this address.
			 // Return from this method so that we don't reinitialize ir 
			 // and cause it to flicker
			 
			 return:
		 }
		 
		 this.lastLat = this.props.lat;
		 this.lastLng = this.props.lng
		 
		 var map = new GMaps({
			 el: '#map',
			 lat: this.props.lat,
			 lng: this.props.lng
		 });
		 
		 // Adding a marker to the location we are showing
		 
		 map.addMarker({
			 lat: this.props.lat,
			 lng: this.props.lng
		 });
	 },
	 
	 render(){
		 
		 return( 
			<div className="map-holder">
				<p>Loading...</p>
				<div id="map"></div>
			</div>
	     );
     }
})

module.exports = Map;
