/* This is the upload function logic */

function upload(){
    var name = prompt('Enter Your Name:');
    var caption = prompt('Enter Caption:');
    var image = prompt('Add Image:');
    var avatar = prompt('Add User Image:');

    if(name == "" || caption == "" || image == "" || avatar == ""){
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
}