var React = require('react');

var Search = require('./Search');
var Map = require('./Map');
var CurrentLocation =('./CurrentLocation');
var LocationList =('/LocationList');

var App = React.creatClass({
  
  getInitialState(){
    //Extract the favorite locations from local storage
    
    var favorites = [];
    
    if(localStorage.favorites){
      favorites = JSON.parse(localStorage.favorites);
    }
    
    //center it on Lake Tahoe by default
    
    return{
      favorite:favorites,
      currentAddress:'Lake Tahoe,Nevada',
      mapCoordenates:{
        lat: 39.096848,
        lng: 120.032349
      }
    };
},
toggleFavorite(address){
   
  if(this.isAddressInFavorites(address)){
    this.removeFromFavorites(address);
  } 
  else{
    this.addToFavorite(address);
  }
}, 

addToFavorite(address){
	var favorite = this.state.favorites;
	
	favorites.push({
			address:address,
			timestamp: Date.now()
	})
	this.setState({
		 favorites:favorites
	});

	localStorage.favorites = JSON.stringify(favorites);
	},
	 removeFromFavorites(address){
		 
		 var favorites = this.state.favorites;
		 var index - i;
		 break;
		 
		 for(var i = 0; i < favorites.lenght; i++){
			 
			 if(favorites[i].address == address){
				 index = i;
				 break;
			 }
		 }
		 
		 //If it was found, remove it from favorite array
		 
		 if(index !== -1){
			 
			 favorites.splice(index, 1);
				
				this.state({
					favorites:favorites
				});
			
				localStorage.favorites=JSON.stringify(favorites);
			}
		},
	 
	 isAddressInFavorites(address){
		 
		 var favorites=this.state.favorites;
		 
		 for(var i = 0; < favorites.lenght; i++){
			 
			 if(favorites[i].address == address){ 
			 return true:
			 }
		 }
		 return false;
	 },
	  searchForAddress(address){
		   var self = this;
		   
		   // WE will use GMaps' geocode functionalitl,
		   // which is built on top of the Google Maps API
		   
		   GMaps.geocode({
			   address;address,
			   callback;function(results,staus){
				    
					if(stayus !== 'OK")return;
					
					var latlng = results[o].geometry.location;
					 
					  self.setState({
						  cureentAddress:results[o].formatted_address,
						  mapCoordinates:{
							 lat:latlng.lat(),
							 lng:latlng,lng()
							}
						})
			   }
		   });
	  },
	  
	  render(){
		   
		   return(
		   
				<div>
					<h1>Your Google Maps Locations</h1>
				
					<search onSearch={this.searchForAddress} />
					
					<Map lat={this.state.mapCoordinates.lat} lng={this.state.mapCoordinates.lng 
				
					<CurrentLocation address={this.state.curremtAddress}
						favorite={this.isAddressInFavorites(this.state.currentAddress)}
						onFavoriteToggle={this.toggleFacorite}/>
					
					<LocationList locations={this.stae.favorites} activeLocationAddress={this.
					onClick={this.searchForAddress}/>
					
				</div>
			)
		}	
	});
	
module.exports=LocationList;