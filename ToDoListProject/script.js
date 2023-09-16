const inputBox= document.getElementById("input");
const AllList= document.getElementById("All-list");

function addTask(){
    if(inputBox.value===''){                      //if value of input box is empty
        alert("Please Enter some text!")          //show alert
    }
    else{                                         // if input box is not empty then
        let li=document.createElement("li");      // creating an html element with tag name li and storing element in li variable
        li.innerHTML=inputBox.value;              //in li variable we add text which available in input field
        AllList.appendChild(li);                  //now display li under the All-list(container)

        let span =document.createElement("span")  //adding cross icon within span tag
        span.innerHTML="\u00d7";                  //cross icon
        li.appendChild(span);                     // to dispaly cross icon
    
    }
    inputBox.value="";                           //to clear input field after adding text
    saveData();       //calling save data        //when we perform any action it will update new data
}



AllList.addEventListener("click",function(e){    //if any click happend  (check where it is clicked)
    if(e.target.tagName=="LI"){                  //if clickm is on li (list of works)
        e.target.classList.toggle("completed");  //then add completed class(checked icon)(from css) and if already checked them remove it
        saveData();                              //when we click on li (list data) it will call save function and upadte new data
                                                 //it means check or incheck the task will be update
    }
    else if(e.target.tagName==="SPAN"){          //if clicked target element is span(red colored cross icon)
        e.target.parentElement.remove();         //then it will delete parent element(li element)/ means task will be deleted
                                                 //when we clicked on cross icon
        alert("Are you sure want to remove this task...?")

        saveData();                              ////when we click on span (cross icon) it will call save function and upadte new data                           
    }                                           

},false)


//whatever data that contained by allList that will be stored( in browser ) in local storege with the name data
function saveData(){    //we can display that data by using local storage getitem data
    localStorage.setItem("data",AllList.innerHTML);
}
function showTask(){     //display data when we open the website/browser again
    AllList.innerHTML= localStorage.getItem("data")
}
showTask();             



