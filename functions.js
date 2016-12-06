function change(){
    console.log("change function fired");
    var data = $("#data").val();
    $("container").html(data);
    while(true){
        console.log("Inside Loop");
    }
}

$("#change").click(change);
    
$("#data").keypress(function(e){  
    if(e.which == 13){
    change();    
    }
});
    

