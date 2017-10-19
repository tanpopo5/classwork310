function setupTask(){
    var username = document.getElementById("user");
    var container = document.getElementById("container");
    var submit = document.getElementById("submit-task");
    var input = document.getElementById("new-task");
    
    submit.addEventListener("click", addTaskList);
    
    
    input.addEventListener("keydown", function(event) {
       if(event.key == "Enter") {
           addTaskList();
           
       } 
    });
    
    
    function addTaskList(){
      var tsk = document.createElement("p");
        var text= document.createElement("span");
        //var user = document.createElement("span");
        
        
        tsk.className="task";
       
        tsk.innerText = input.value;
        text.innerHTML = "User: " + username.value;
        text.className = "usr";
    
    
        tsk.appendChild(text);
        
        
        var del = document.createElement("span");
        del.className = "delete";
        del.innerText = "delete";
        del.addEventListener("click", function(){
           container.removeChild(this.parentNode); 
        });
        
        
        tsk.appendChild(del);
         
         tsk.addEventListener("click", function() {
             tsk.style.textDecoration ="line-through";
             tsk.style.borderRight ="10px solid #f08080";
             
         });
        
        
         container.appendChild(tsk); 
        
        
     }
    
    
}
window.addEventListener("load", setupTask);