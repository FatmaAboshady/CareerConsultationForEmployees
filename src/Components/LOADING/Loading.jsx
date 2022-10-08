import React, { Component } from "react";
import ReactLoading from "react-loading";

class Loading extends Component {
    render(){
return (
	<div>
	
	{/* <ReactLoading type="balls" color="#0000FF"
		height={100} width={50} />
	<ReactLoading type="bars" color="#0000FF"
		height={100} width={50} />
	<ReactLoading type="bubbles" color="#0000FF"
		height={100} width={50} />
	<ReactLoading type="cubes" color="#0000FF"
		height={100} width={50} />
	<ReactLoading type="cylon" color="#0000FF"
		height={100} width={50} />
	<ReactLoading type="spin" color="#0000FF"
		height={100} width={50} />
	<ReactLoading type="spokes" color="#0000FF"
		height={100} width={50} /> */}
	<ReactLoading
		type="spinningBubbles"
		color="#0000FF"
		height={100}
		width={50}
	/>
	</div>
);
}
}
export default Loading;