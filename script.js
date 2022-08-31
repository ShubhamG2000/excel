
//to get address of cell
let allCells = document.querySelectorAll(".grid .cell");

for(let i = 0; i < allCells.length; i++){
    allCells[i].addEventListener("click", function(e){
        let ccell = allCells[i];
        //   console.log(ccell);

        //Number() changer string to number
        let rid = Number(ccell.getAttribute("rid"));
        let cid = Number(ccell.getAttribute("cid"));

        console.log(String.fromCharCode(cid + 65) + (rid+1));
        
        let address_box = document.querySelector(".cell_address");
        address_box.value = (String.fromCharCode(cid + 65) + (rid+1));
        // address_box.textContent = (String.fromCharCode(cid + 65) + (rid+1));

        // step 3 | sync menu bar with db 2d arr
        setMenuBar(rid ,cid);
    });

}

function setMenuBar(rid, cid) {
   let cellObj = db[rid][cid];
   
   // boldButton
   if (cellObj.isBold) {
       boldButton.classList.add("selected");
   } else {
       boldButton.classList.remove("selected");
   }

   // italicButton
   if (cellObj.isItalic) {
       italicButton.classList.add("selected");
   } else {
       italicButton.classList.remove("selected");
   }

   // underlineButton
   if (cellObj.isUnderline) {
       underlineButton.classList.add("selected");
   } else {
       underlineButton.classList.remove("selected");
   }
   // font size
   font_sizeSelector.value = cellObj.fontSize;
   // font family
   fontFamily_selector.value = cellObj.fontFamily;
   // console.log(cellObj);
}