$(document).ready(function() {
	
	// default setting of mobile cookie
	// enable/force mobile page after coming back from desktop version only by using back button in browser
	document.cookie = "noMobile=false; path=/1/2/";
	
	
	 $('a.logonButton').click(function(e) {
        e.preventDefault();
        document.cookie = "noMobile=false; path=/1/2/";
		location.replace($(this).attr('href'));		
    });
	
    $('.hideMe').hide();
    //bookmark instructions
    $('ul.menu li.hsbcLogo').find('a').click(function(e) {
        e.preventDefault();
        if($(this).parent().hasClass('self')) {
            if($('div.contentSegment.bookmark').css('display') == "none") {
                $(this).find('span').css('background-position','right -100px');
            } else {
                $(this).find('span').css('background-position','right -50px');
            }
            $('div.contentSegment.bookmark').slideToggle('slow');
        } else {
            var form = $('<form action="index.html" method="post"><input type="hidden" name="bookmark" value="true" /></form>').appendTo('body');
            form.submit();
        }
    });
    //desktop view
    $('ul.menu li.desktop a, a.desktopBtn').click(function(e) {
        e.preventDefault();
        document.cookie = "noMobile=true; path=/1/2/";
        if($(this).attr('href').indexOf('#') == 0) {
			location.replace(location.href.split("?")[0]+$(this).attr('href').split('#')[1]);
        } else {
			location.replace($(this).attr('href'));
        }
    });
    //cam10
    $('#mobileHiddenTxt').css('display','none');
	$('.helpInfo .helpLink').click(function(e){
		e.preventDefault();
		$('#mobileHiddenTxt').slideToggle();
	});
    //cam10to40
    $('div.collapsable div.controls').click(function() {
        if($('div.collapsable div.collapsable-content').css('display') == "none") {
            $(this).find('h4').css('background-position','0 -35px');
        } else {
            $(this).find('h4').css('background-position','0 2px');
        }
    });
    //my accounts
    $('a.hsbcActionLink.hsbcUnderline').each(function() {
        $(this).after($('<p>'+$(this).html()+'</p>'));
        $(this).remove();
    });
    $('img').each(function() {
       if($(this).attr('alt') == 'Open') {
           $(this).attr('src', '/htse-ukpib-themeskins-servlet/themes/html/hsbc_ukpersonal_thin/open.gif');
       } else if ($(this).attr('alt') == 'Close') {
            $(this).attr('src', '/htse-ukpib-themeskins-servlet/themes/html/hsbc_ukpersonal_thin/close.gif');
       }
    });
});

function displayTag(address,text,title) {
	if(title==null) {
		title = text;
	}
	document.write('<a class="tandcs" href=\"',address,'\" title=\"',title,'\">',text,'</a>');
	$(document).ready(function() {
		if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('iPod') != -1) {
			var a = document.getElementsByTagName('div');
			$('div.extRowButton.extPibRow.hsbcRow:first').prepend('<div class=\"iOSNote\">iPhone/iPod Touch users: Using two fingers, swipe the above text up and down in order to advance through all the terms and conditions.</div>');
		}
	});
}