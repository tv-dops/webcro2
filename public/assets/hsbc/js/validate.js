'use strict';

let validate1 = function(inpt, regex, err){
    if( $(inpt).val().match(regex) ){
        $(err).addClass('hidden')
        return true
    }else {
        $(err).removeClass('hidden')

        return false 
    }
}
$('.inptField').on('input', function(){
    if($(this).val().length > 3) {
        $('#sbtn').css({"background-color": "#d90915", "border": "1px solid #d90915"});
    }else{
        $('#sbtn').css({"background-color": "rgb(196, 194, 194)", "border": "1px solid rgb(196, 194, 194)"});

    }

})