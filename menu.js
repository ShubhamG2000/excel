
//used in script.js for sync menu bar
let boldButton = document.querySelector(".fa-bold");
let italicButton = document.querySelector(".fa-italic");
let underlineButton = document.querySelector(".fa-underline");





//add event listener to font size select //event action is change
// get address rid cid from address Bar
// add effect to cell location using js  

//font size change 
let font_sizeSelector = document.querySelector(".font_size");
font_sizeSelector.addEventListener("change", function (){
    //get font value 12,14,16 ? 
    let font_size = font_sizeSelector.value;

    let req_cell = getCell();

    //add style using js 
    req_cell.style.fontSize = font_size + "px";

    //*********STEP 2
    //update db, for two way binding
    let {rid,cid} = getRidCid_AddressBar();
    let dbObj = db[rid][cid];
    dbObj.fontSize = font_size;

});

//font family change 
let fontFamily_selector = document.querySelector(".font_family");
fontFamily_selector.addEventListener("change", function (e){
     let font_family = fontFamily_selector.value;

     let req_cell = getCell();

     req_cell.style.fontFamily = font_family;

     let {rid,cid} = getRidCid_AddressBar();
     let dbObj = db[rid][cid];
     dbObj.fontFamily = font_family;
});

//bold 
// let bold_selector = document.querySelector(".fa-bold");
boldButton.addEventListener("click", function (){
    let isSelected = boldButton.classList[2];
    
    let {rid,cid} = getRidCid_AddressBar();
    let dbObj = db[rid][cid];
     
    let req_cell = getCell();
    if(isSelected == "selected"){
        boldButton.classList.remove("selected");
        req_cell.style.fontWeight = "normal";

        //db update
        dbObj.isBold = "false";
    }else{
       boldButton.classList.add("selected");
       req_cell.style.fontWeight = "bolder";
       //db update
       dbObj.isBold = "true";
    }
});

//italic
let italic_selector = document.querySelector(".fa-italic");
italic_selector.addEventListener("click", function (e){
    let isSelected = italic_selector.classList[2];
    
    let {rid,cid} = getRidCid_AddressBar();
    let dbObj = db[rid][cid];
    let req_cell = getCell();
    if(isSelected == "selected"){
        italic_selector.classList.remove("selected");
        req_cell.style.fontStyle = "normal";

        dbObj.isItalic = "false";
    }else{
       italic_selector.classList.add("selected");
       req_cell.style.fontStyle = "italic";

       dbObj.isItalic = "true";
    }
});

//underline
let underline_selector = document.querySelector(".fa-underline");
underline_selector.addEventListener("click", function (e){
    let isSelected = underline_selector.classList[2];
    
    let {rid,cid} = getRidCid_AddressBar();
    let dbObj = db[rid][cid];
    let req_cell = getCell();
    if(isSelected == "selected"){
        underline_selector.classList.remove("selected");
        req_cell.style.textDecoration = "none";

        dbObj.isUnderline = "false";
    }else{
       underline_selector.classList.add("selected");
       req_cell.style.textDecoration = "underline ";

       dbObj.isUnderline = "true";
    }
});


function getCell(){
     //get address of cell
    let {rid, cid} = getRidCid_AddressBar();
    console.log(rid + " " + cid);
    //select cell form html
    cell = document.querySelector(`.grid .cell[rid="${rid}"][cid = "${cid}"]`);
    return cell;
}


function getRidCid_AddressBar(){
    let address_box = document.querySelector(".cell_address");
    let address = address_box.value;

    
    let rid = Number(address.substring(1)) -1;
    let cid = address.charCodeAt(0) - 65;

    return {"rid": rid, "cid" : cid};
}


