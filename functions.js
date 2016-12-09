function change(){
    console.log("change function fired");
    var data = $("#data").val();
    if (data == ""){
        $("#data").assClass("error");
    }else{
        $("#data").removeClass("error");
    }
    $("container").html(data);
  
}

$("#change").click(change);
    
$("#data").keypress(function(e){  
    if(e.which == 13){
    change();    
    }
});
    
$("#container").click(function(e){
    $("#container").toggleClass("active");
});
