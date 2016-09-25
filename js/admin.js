/********************* CONTROL PANEL EVENTS *********************/



/********************* CONTROL PANEL FUNCTIONALITY *********************/

//Get data from global - getProductDataFromFile()
//Get HTML admin template
//Insert data into template
//Add each modified template to a string
//Pass string to updateAllAdminProductDisplay()
function insertProductDataInAdminTemplate(){

}

//Take parameters from input elements
//Create object with parameter data
//Stringify object
//AJAX stringified object to PHP file (server/addproduct.php?) to add it
//On ajax done, use object to add the new product to display with addSingleAdminProductDisplay()
function addProductDataToFile(){

}

//On edit event, fire function
//display modal/swal popup with data from object passed by event
function displayEditableProductData(){

}

//On save event, fire function
//Create object with data from input fields
//stringify object
//AJAX stringified object to PHP file (server/editproduct.php?) to edit
//On ajax done, use object to update display - updateSingleAdminProductDisplay()
function saveEditedProductData(){
    
}

//On event, fire function
//Take id, AJAX to PHP file (server/deleteproduct.php?) to delete
//On ajax done, remove from display with id - removeSingleAdminProductDisplay()
function deleteProductDataFromFile(){

}

//Empty display div, insert passed string instead
function updateAllAdminProductDisplay(){

}

//Take id & variables to be changed as parameters
//If a parameter is not specified, use current (from display)
//Find single display by id
//modify values to received parameters
function updateSingleAdminProductDisplay(){

}

//Get template
//Replace received parameters in template
//Append modified template to the end of the display div
function addSingleAdminProductDisplay(){
    
}

//Find product in display via passed parameter id
//Remove product from display
function removeSingleAdminProductDisplay(){

}

