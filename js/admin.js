/********************* CONTROL PANEL EVENTS *********************/

insertProductDataInAdminTemplate();

$(document).on("click", ".fa-trash-o", function(){
    deleteProductDataFromFile(this);
});



/********************* CONTROL PANEL FUNCTIONALITY *********************/

//Get data from global - getProductDataFromFile()
//Get HTML admin template
//Insert data into template
//Add each modified template to a string
//Pass string to updateAllAdminProductDisplay()
function insertProductDataInAdminTemplate(){
    $.ajax({
        "url":"server/populateadmintemplate.php",
        "method":"post",
        "cache":false
    }).done( function(sData){
        updateAllAdminProductDisplay(sData);
    })
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
function deleteProductDataFromFile(oElement){
    var sId = $(oElement).attr("data-deleteid");
    $.ajax({
        "url":"server/deleteproduct.php",
        "method":"post",
        "cache":false,
        "data": {"deleteId": sId}
    }).success( function(sData){
        removeSingleAdminProductDisplay(sId);
    })

}

//Empty display div, insert passed string instead
function updateAllAdminProductDisplay(sData){
    $("#wdw-admin-display").empty().html(sData);
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
function removeSingleAdminProductDisplay(sId){
    $("#wdw-admin-display").children('div[data-stockId="'+sId+'"]').remove();
}

