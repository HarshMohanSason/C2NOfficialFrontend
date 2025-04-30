import React, {useState, useRef} from 'react'; 
import '../../../styles/adminpanel/categories/AddCategory.css';
import { CustomAlert } from "../../../utilities/CustomAlert.js";
import LoadingScreen from "../../../utilities/LoadingScreen.js";

function AddCategory(){
	const [isUploading, setIsUploading] = useState(null)
	const [categoryData, setCategoryData] = useState({
		name: "", 
		size_chart: "",
		how_to_measure_image: "",
		customization_pdf: "",
	})
	const tableRef = useRef(null);
	const [tableData, setTableData] = useState([
    	["", "", ""], ["", "", ""], ["", "", ""],["", "", ""],["", "", ""],
  	]);

  	const addRow = () =>{
  		setTableData(prev => [...prev, Array(prev[0].length).fill("")]);
  	}
  	const removeRow = () =>{
  		if (tableData.length === 1){
  			CustomAlert({
        		title: "Oops!",
        		text: "Need to have at least one row",
      		});
      		return;
  		}
  		setTableData(prev => prev.slice(0, prev.length - 1));
  	}

  	const addColumn = () => {
    	setTableData(prev => prev.map(row => [...row, ""]));
  	};
  	const removeColumn = () => {
  		if (tableData[0].length === 1){
  			CustomAlert({
        		title: "Oops!",
        		text: "Need to have at least one column",
      		});
      		return;
  		}
  		setTableData(prev => prev.map(row => row.slice(0,row.length - 1)));
  	}
  	const handleTableInputChange = (event, rowIndex, colIndex) => {
   		 const updatedTableData = [...tableData];
    	 updatedTableData[rowIndex][colIndex] = event.target.value;
    	 setTableData(updatedTableData); 
  	};
  	const getTableHTML = () => {
  		if (tableRef.current) {
     		 const tableHTML = tableRef.current.outerHTML;
      		 return tableHTML;
    	}
  	}
  	
	const updateCategoryData = (name, value) => {
		setCategoryData((prev) => ({
      		...prev,
      		[name]: value,
    	}));
	}

	const createCategoryFormData = () => {
		const formData = new FormData(); 
		formData.append("name", categoryData.name)
		const tableData = getTableHTML()
		formData.append("size_chart", tableData)
		formData.append("how_to_measure_image", categoryData.how_to_measure_image)
		formData.append("customization_pdf", categoryData.customization_pdf)

		return formData;
	}
	const uploadCategory = async (event) => {
	  event.preventDefault();
	  setIsUploading(true);
	
	  try {
	    const categoryData = createCategoryFormData();
	    const response = await fetch(process.env.REACT_APP_SUBMIT_CATEGORY_DATA, {
	      method: "POST",
	      credentials: "include",
	      body: categoryData,
	    });
	    const result = await response.text();
	
	    if (!response.ok) {
	      throw new Error(result);
	    }
	
	    CustomAlert({
	      title: "Success",
	      icon: "success",
	      text: "Successfully added the category",
	      confirmButtonColor: "#81c784",
	    });
	    
	  } catch (error) {
	    CustomAlert({
	      title: "Oops!",
	      text: error.message,
	    });
	    return;
	  } finally {
	    setIsUploading(false);
	  }
	};

	return (
		<section className="add-category-page">
			{isUploading && <LoadingScreen text="Uploading Category..." />}
			<form method="post" onSubmit={uploadCategory}>
				<section className="add-category-section">
					<h1>ADD CATEGORY</h1>
					<section className="add-category-name-section">
						<label>Category Name</label>
            		  	<input type="text" name="name" value={categoryData.name} onChange={(e)=>updateCategoryData(e.target.name, e.target.value)} placeholder="Enter a category name"required></input>
					</section>
					<section className="chart-category-input-table">
						<label>Size Chart</label>
						<div className="column-buttons">
						  <input type="button" value="Add Column" className="size-chart-plus-button" onClick={addColumn} />
						  <input type="button" value="Remove Column" className="size-chart-minus-button" onClick={removeColumn} />
						</div>
						<table ref={tableRef}>	
						  <thead>
						    <tr>
						      {tableData[0]?.map((_, colIndex) => (
						        <th key={colIndex}>
						        </th>
						      ))}
						    </tr>
						  </thead>
						  <tbody>
						    {tableData.map((row, rowIndex) => (
						      <tr key={rowIndex}>
						        {row.map((cellValue, colIndex) => (
						          <td key={colIndex}>
						            <input
						              type="text"
						              value={tableData[rowIndex][colIndex]}
						              onChange={(e) => handleTableInputChange(e,rowIndex, colIndex)}
						            />
						          </td>
						        ))}
						      </tr>
						    ))}
						  </tbody>
						</table>
						<div className="row-buttons">
							<input type="button" value="Add Row" className="size-chart-plus-button" onClick={addRow} />
							<input type="button" value="Remove Row" className="size-chart-minus-button" onClick={removeRow} />
						</div>
					</section>
					<section className="upload-size-reference-image">
						<label>Add a how to measure image</label>
						<input type="file" accept="image/*" name="how_to_measure_image" onChange={(e)=> updateCategoryData(e.target.name, e.target.files[0])} />
					</section>
					<section className="customization-reference-pdf">
						<label>Add a customization reference (pdf only)</label>
						<input type="file" accept="application/pdf" name="customization_pdf" onChange={(e)=> updateCategoryData(e.target.name, e.target.files[0])}/>
					</section>
					<button type="submit" class="upload-category-button">Upload</button>
				</section>
			</form>
		</section>
		);
}

export default AddCategory;