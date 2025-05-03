import React from 'react'; 
import '../../styles/utilities/DropDownMenu.css'; 

function DropDownMenu(){
	return(
		<div className="drop-down-menu">
			<h6> Explore collection</h6>
			<ul>
				<li><a href = "">NEW ARRIVALS</a></li>
				<li><a href = "">BEST SELLERS</a></li>
				<li><a href = "">SHOP ALL</a></li>
				<li><a href = "">UNISEX</a></li>
			</ul>	
		</div>
	);
}

export default DropDownMenu; 