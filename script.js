$(document).ready(function() {  
    var seconds;  
    $("#btnShowSimple").click(function(e) {  
        $("#output").html("00");  

        function countdown() {  
            seconds = 60;  

            function tick() {  
                var counter = document.getElementById('countdown');  
                seconds--;  
                counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds); 
                if (seconds > 0) {  
                    setTimeout(tick, 1000);  
                } else {  
                    alert("Game over");  
                    HideDialog();  
                }  
            }  
            tick();  
        }  
        countdown();  
        ShowDialog(true);  
        e.preventDefault();  
    });  
    $("#btnShowModal").click(function(e) {  
        function countdown() {  
            seconds = 60;  

            function tick() {  
                var counter = document.getElementById('countdown');  
                seconds--;  
                counter.innerHTML = "0:" + (seconds < 10 ? "0" : "") + String(seconds);  
                if (second < 6) {
                    $("#countdown").css("color","red");
                } else {
                    $("#countdown").css("color","black");
                }
                if (seconds > 0) {  
                    setTimeout(tick, 1000);  
                } else {  
                    alert("Game over");  
                    HideDialog();  
                }  
            }  
            tick();  
        }  
        countdown();  
        ShowDialog(true);  
        e.preventDefault();  
    });  
    $("#btnClose").click(function(e) {  
        HideDialog();  
        location.reload();  
        e.preventDefault();  
    });  
    $("#btnSubmit").click(function(e) {  
        ShowDialog(false);  
        location.reload();  
        e.preventDefault();  
    });  
    $("#shuffle div").hover(function() {  
        $(this).css('cursor', 'pointer');  

    }, function() {  
        $(this).css('cursor', 'auto');  
    });  
    $("#shuffle div").click(function(e) {  
        var select = $('#dropDownId :selected').val();  
        var Original = ($(this).attr("id"));  
        var parent = $("#shuffle");  
        var divs = parent.children();  
        var Count = 0;  
        if (Original == select) {  
            $('#output').html(function(i, val) {  
                return val * 1 + 1  
            });  
        }  
        while (divs.length) {  
            parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);  

        }  
    });  
});  

function ShowDialog(modal) {  
    $("#overlay").show();  
    $("#dialog").fadeIn(300);  
    if (modal) {  
        $("#overlay").unbind("click");  
    } else {  
        $("#overlay").click(function(e) {  
            HideDialog();  
        });  
    }  
}  

function HideDialog() {  
    $("#overlay").hide();  
    $("#dialog").fadeOut(300);  
}  