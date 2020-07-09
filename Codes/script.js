
$(document).ready(function(){
    $(".fa").click(function(){
        
       $(".Rnav").toggleClass("Rnav1");
       $(".header").toggleClass("header1");
        $(this).toggleClass("fa-bars");
        $(this).toggleClass("fa-close");
        
    });
    $("fa-close").click(function () { 
        
        $(this).toggleClass("fa-bars");
        $(this).toggleClass("fa-close");
        $(".Rnav").toggleClass("Rnav1");
       $(".header").toggleClass("header1");
      
    });

   
})