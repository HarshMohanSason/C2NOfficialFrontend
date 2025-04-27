import React, {useState}from 'react';
import '../../../styles/adminpanel/categories/Categories.css'; 
import { CustomAlert } from "../../../utilities/CustomAlert.js";
import { AddCategory } from "./AddCategory";
import { Link } from "react-router-dom";

function Categories(){

	const [showAddCategoryPopup, setAddCategoryPopup] = useState(false)
	const [categoryData, setCategoryData] = useState({
		name: "", 
		size_chart: "",
	})

	const updateCategoryData = (name, value) => {
		setCategoryData((prev) => ({
      		...prev,
      		[name]: value,
    	}));
		console.log(categoryData)
	}

	const createCategoryData = () => {
		const formData = new FormData();
		formData.append("name", categoryData.name);
		// Size 
    	if (categoryData.size_chart) {
    	  formData.append("size_chart", categoryData.size_chart); 
    	}
    	return formData
	}

	const uploadCategory = async(event) => {
		event.preventDefault()
		try{
      		const formData = createCategoryData();
      		const response = await fetch("http://localhost:8080/addcategory", {
       		 	method: "POST",
             	credentials: "include",
        	 	body: formData,
      		});
      		const result = await response.text();
      		if (!response.ok) {
      		  throw new Error(result);
      		}
      		console.log("submitted")
		}catch(error){
			CustomAlert({
        		title: "Oops!",
        		text: error.message,
      		});
		}
	}

	return(
		<section>
		    <Link to="/addCategory">
                {" "}
                <button id="upload-product-button">ADD A CATEGORY</button>
            </Link>
        </section>
    );

}
export default Categories; 