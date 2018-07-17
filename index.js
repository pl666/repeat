define(["lbt","nb","cdd"],function(lbt,nb,cdd){
    document.onclick=function(){
        lbt();
    }

    document.onmouseenter=function(){
        nb();
        
    }

    cdd();
})