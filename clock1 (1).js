//Javascript Document

        hrs=document.getElementById("hrs");
        min=document.getElementById("min");
        sec=document.getElementById("sec");
        

         function time()
         {
            var dt=new Date()
            hrs.innerHTML=dt.getHours();
            min.innerHTML=dt.getMinutes();
            sec.innerHTML=dt.getSeconds();
         }

         
         function display()
         {
        window.setInterval("time()",1000);
         }
         display();
        // JavaScript Document