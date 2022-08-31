function createExcel(){
    //**********//add a-z in index   */
     let top_container = document.querySelector(".top_container");
     for(let i = 1; i<= 26;i++){
         let div = document.createElement("div");
         div.textContent = (String.fromCharCode(64 + i));
         div.setAttribute('class', 'cell');
         top_container.appendChild(div);
     }
 
 
     //add numbers for index
     let left_container = document.querySelector(".left_container");
     for(let i = 1; i<= 100;i++){
         let div = document.createElement("div");
         div.textContent = i;
         div.setAttribute('class', 'left_idx');
         left_container.appendChild(div);
     }
 
 
     //add grid
     let grid = document.querySelector(".grid");
     for(let i = 0; i < 100; i++){
         let row = document.createElement("div");
         row.setAttribute("class", "row");
         for(let j = 0; j < 26; j++){
             let cell = document.createElement("div");
             cell.setAttribute("class", "cell");
             cell.setAttribute("contenteditable", "true");
             cell.setAttribute("rid",i);
             cell.setAttribute("cid",j);
             // cell.textContent = `${String.fromCharCode(64 + j)} - ${i}`
             
             row.appendChild(cell);
         }
         grid.appendChild(row);
     }
}

//*********STEP 1  */
//create 2d array to store info about each cell , bold/italic/underline
//this is for two way binding 
let db = [];
function createDb(){
    
    for(let i = 0; i < 100; i++){
       let rowArr = [];
        for(let j = 0; j < 26; j++){
            let cellObj = {
               fontFamily: "Courier New",
               fontSize:"16",
               isBold: false,
               isItalic: false,
               isUnderline: false
           }

           rowArr.push(cellObj);
        }
        db.push(rowArr);
    }

    // console.log(db);
}

createExcel();
createDb();