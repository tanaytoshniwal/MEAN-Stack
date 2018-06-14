/* This is the upload function logic */

function upload(){
    var name = $("#inputuname").val();
    var caption = $("#inputcaption").val();
    var image = $("#inputimage").val();
    var avatar = $("#inputuimage").val();

    if(name == "" || caption == "" || image == "" || avatar == "" || name == null || caption == null || image == null || avatar == null){
        alert("Input correct data!");
    }
    else{
        var card_layout = $("#layout").clone();
        
        /* changing the content */
        $("a img", card_layout).attr("src", image);
        $("div div.d-flex.align-items-center.px-2 div.avatar", card_layout).attr("style", "background-image: url(\'"+avatar+"\')")
        $("div div.d-flex.align-items-center.px-2 div div", card_layout).text(name);
        $("div div.d-flex.align-items-center.px-2 div small", card_layout).text("few seconds ago");
        $("div div.d-flex.align-items-center.px-2 div div.photogram-caption", card_layout).text(caption);
        
        $("#uploads").prepend(card_layout);
    }
    var name = $("#inputuname").val("");
    var caption = $("#inputcaption").val("");
    var image = $("#inputimage").val("");
    var avatar = $("#inputuimage").val("");
}