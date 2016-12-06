
            var computerNumber = parseInt(Math.random()*100+1);
            
            $("#submit").click(function(e){
                var name = $("#name").val();
                console.log(name);
                var html = $("#list").html();
                console.log(html);
                if(name == "Nick"){
                    $("body").html("You Win!");
                }else if(name == "Veronica"){
                    
                }else{
                    $("#list").html(html+"<h1>"+name+"</h1>");
                }
            });
