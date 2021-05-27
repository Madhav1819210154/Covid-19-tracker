function updateMap()
{
	fetch("https://www.trackcorona.live/api/cities")
	.then(response=>response.json())
	.then(rsp=>{
		console.log(rsp.data)
		rsp.data.forEach(element =>{
			latitude = element.latitude;
			longitude = element.longitude;
			cases=element.confirmed;
			if(case>255)
				color="rgb(255,0,0)";
			else
				color='rgb(${case},0,0)';
			// Mark on the map
			new mapboxgl.Marker({
				draggable: false,
				color:color
					})
				.setLngLat([longitude, latitude])
				.addTo(map);
		})
	})

}
updateMap();