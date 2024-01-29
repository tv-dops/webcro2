




/*
*
* Copyright (c) 2007 Andrew Tetlaw
* 
* Permission is hereby granted, free of charge, to any person
* obtaining a copy of this software and associated documentation
* files (the "Software"), to deal in the Software without
* restriction, including without limitation the rights to use, copy,
* modify, merge, publish, distribute, sublicense, and/or sell copies
* of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be
* included in all copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
* EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
* MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
* NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS
* BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN
* ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
* CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
* * 
*
*
* FastInit
* http://tetlaw.id.au/view/javascript/fastinit
* Andrew Tetlaw
* Version 1.4.1 (2007-03-15)
* Based on:
* http://dean.edwards.name/weblog/2006/03/faster
* http://dean.edwards.name/weblog/2006/06/again/
* Help from:
* http://www.cherny.com/webdev/26/domloaded-object-literal-updated
* 
*/
var FastInit = {
	onload : function() {
		if (FastInit.done) { return; }
		FastInit.done = true;
		for(var x = 0, al = FastInit.f.length; x < al; x++) {
			FastInit.f[x]();
		}
	},
	addOnLoad : function() {
		var a = arguments;
		for(var x = 0, al = a.length; x < al; x++) {
			if(typeof a[x] === 'function') {
				if (FastInit.done ) {
					a[x]();
				} else {
					FastInit.f.push(a[x]);
				}
			}
		}
	},
	listen : function() {
		if (/WebKit|khtml/i.test(navigator.userAgent)) {
			FastInit.timer = setInterval(function() {
				if (/loaded|complete/.test(document.readyState)) {
					clearInterval(FastInit.timer);
					delete FastInit.timer;
					FastInit.onload();
				}}, 10);
		} else if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', FastInit.onload, false);
		} else if(!FastInit.iew32) {
			if(window.addEventListener) {
				window.addEventListener('load', FastInit.onload, false);
			} else if (window.attachEvent) {
				return window.attachEvent('onload', FastInit.onload);
			}
		}
	},
	f:[],done:false,timer:null,iew32:false
};
/*@cc_on @*/
/*@if (@_win32)
FastInit.iew32 = true;
document.write('<script id="__ie_onload" defer src="/DynamicContent/Resources/Script/ie.js"><\/script>');
document.getElementById('__ie_onload').onreadystatechange = function(){if (this.readyState == 'complete') { FastInit.onload(); }};
/*@end @*/
FastInit.listen();



if (typeof jQuery !== "undefined") {

/* Formlet JS */
function toggleCollapsible(){
	jQuery( function($) {
		$('div.formlet .content').toggle();
		$('div.formlet .toggleForm').toggle();
	});
	return false;
}

	
}




window.LBCPword = window.LBCPword || {};

LBCPword.passwordStrength = {
	'defaults' : {
		'colors': ["#b92c23","#fdbf0c","#4a911b"],
		'scores': [0, 1, 2],
		'verdicts':	['unacceptable ', 'good', 'excellent'],
		'width':	['96','176','256'],
		'height': 4,
		'target': 'default'
	},
	'attachWidget': function (element) {
		var output = ['<div id="password-strength">'];
		output.push('<span class="password-strength-text"></span><span class="password-strength-bar"></span>');
		output.push('</div>');
		output = output.join('');
		if( LBCPword.passwordStrength.options.target == 'default' )
			jQuery(element).after(output);
		else
			LBCPword.passwordStrength.options['target'].after(output);
	},
	'init': function (element, options) {
		LBCPword.passwordStrength.options = jQuery.extend({}, LBCPword.passwordStrength.defaults, options);
		LBCPword.passwordStrength.attachWidget(element);
		jQuery(element).keyup(function () {
			LBCPword.passwordStrength.calculateScore(jQuery(this).val());
		});
	},
	'calculateScore': function (word) {
		var score = 0;
		var worldLen = word.length;
		if (!word.match(/^[a-z0-9]{8,20}$/) || !word.match(/[a-z]/) || !word.match(/\d/)) {
			LBCPword.passwordStrength.updateMeter(0);
			return;
		}else{
			var wordNoLetters = word.replace(/[a-z]/g, "");
			var wordNoNumber = word.replace(/[0-9]/g, "");
			if( ( worldLen - wordNoLetters.length >= 2 && worldLen - wordNoNumber.length >= 2 ) && worldLen >= 12){
				LBCPword.passwordStrength.updateMeter(2);
				return;
			}else{
				LBCPword.passwordStrength.updateMeter(1);
			}
		}
	},
	'updateMeter': function ( score ){
		jQuery('.password-strength-bar').animate({ opacity: 1, width: LBCPword.passwordStrength.options.width[score] }, 'fast', 'linear', function(){
			jQuery(this).css('background-color',  LBCPword.passwordStrength.options.colors[score]).css('height', LBCPword.passwordStrength.options.height);
			jQuery(this).siblings('.password-strength-text').text(LBCPword.passwordStrength.options.verdicts[score])													
		});
	}
};
jQuery.extend(jQuery.fn, {
	'LBCPstrength': function (options) {
		return this.each(function () {
			LBCPword.passwordStrength.init(this, options);
		});
	}
});

LBCPword.passwordMatch = {
	'defaults' : {
		'matchTo': {},
		'target': 'default',
		'successimage' : '/DynamicContent/Resources/Images/Icons/success2.png',
		'failedimage' : '/DynamicContent/Resources/Images/Icons/failure.png',
		'failedtext' : 'Les mots de passe ne sont pas identiques.'
	},
	'attachWidget': function (element) {
		var output = ['<div id="password-match">'];
		output.push('</div>');
		output = output.join('');
		if( LBCPword.passwordMatch.options['target'] == 'default' )
			jQuery(element).after(output);
		else
			LBCPword.passwordMatch.options['target'].after(output);
	},
	'init': function (element, options) {
		LBCPword.passwordMatch.options = jQuery.extend({}, LBCPword.passwordMatch.defaults, options);
		LBCPword.passwordMatch.attachWidget(element);
		jQuery(element).keyup(function () {
			LBCPword.passwordMatch.evaluate(jQuery(this).val());
		});
	},
	'evaluate': function (value) {
		if( LBCPword.passwordMatch.options['matchTo'].val() != value){
			jQuery('#password-match').css('background-image',  'url(' + LBCPword.passwordMatch.options['failedimage'] + ')').text(LBCPword.passwordMatch.options['failedtext']);
		}else{
			jQuery('#password-match').css('background-image',  'url(' + LBCPword.passwordMatch.options['successimage'] + ')').text('');	
		};
	}
};

jQuery.extend(jQuery.fn, {
	'LBCPmatch': function (options) {
		return this.each(function () {
			LBCPword.passwordMatch.init(this, options);
		});
	}
});

window.LBCCharactersLeft = window.LBCCharactersLeft || {};
LBCCharactersLeft = {
	'defaults' : {
		'responseText' : '{0} sur {1} caract&egrave;res restants',
		'responseTarget' : 'default',
		'responseMaxChars' : 60
	},
	'init': function (element, options) {
		LBCCharactersLeft.options = jQuery.extend({}, LBCCharactersLeft.defaults, options);
		jQuery(element).keyup(function () {
			LBCCharactersLeft.charLeft(this);
		});
	},
	'charLeft': function(elem){
		var jElem = jQuery(elem);
		var numOfChars = jElem.val().length;
		var numOfCharsLeft = LBCCharactersLeft.options['responseMaxChars'] - numOfChars;
		var hintText = LBCCharactersLeft.options['responseText'].replace('{0}',numOfCharsLeft);
		hintText = hintText.replace('{1}', LBCCharactersLeft.options['responseMaxChars']);
		if( LBCCharactersLeft.options['responseTarget'] == 'default' )
			jElem.parents('.entry').find('.hint').html(hintText)
		else
			LBCCharactersLeft.options['responseTarget'].html(hintText);
	}
};
jQuery.extend(jQuery.fn, {
	'LBCCharLeft': function (options) {
		return this.each(function () {
			LBCCharactersLeft.init(this, options);
		});
	}
});

var hideHint = (function(hintTriggerId, hintId) {
		var helpHint = jQuery('#' + hintId);	
		var hintTrigger = jQuery('#' + hintTriggerId);
		var timeoutHideHint = setTimeout(function(){
        	helpHint.css('visibility','hidden');
    	}, 500);
		hintTrigger.data('timeoutHideHint', timeoutHideHint); 
		helpHint.mouseover(
			function(e){ 
				clearTimeout(hintTrigger.data('timeoutHideHint'));
				jQuery(this).css('visibility','visible'); 
			});		
		helpHint.mouseout(
			function(e){ 
				jQuery(this).css('visibility','hidden'); 
			});
});
var showHint = (function(hintTriggerId, hintId) {
		var hintIcon = jQuery('#' + hintTriggerId);
		var helpHint = jQuery('#' + hintId);
		var helpHintHeight = helpHint.height();
		var hintArrow = helpHint.find('.hintArrow');
		if (hintArrow.length == 0){
			helpHint.append('<img class="hintArrow" src="/DynamicContent/Resources/Images/Furniture/hintArrow.gif" />');
			hintArrow = helpHint.find('.hintArrow');
			hintArrow.css('position', 'absolute').css('top', ( helpHintHeight/2 ) + 4 ).css('left', '-6px');
		}
		clearTimeout(hintIcon.data('timeoutHideHint'));
		hintIconX = hintIcon.position().left;
		hintIconY = hintIcon.position().top; 
		helpHint.css('left', hintIconX + hintIcon.outerWidth() + 6).css('top', (hintIconY) - ((helpHint.height())/2)).css('visibility','visible').css('display', 'block');
});



jQuery(function($){
	
	if( jQuery('.imageSelection li').length > 0 ){
		
		
		window.LBCAttachImageEvents = function(){
			jQuery('.imageSelection li').mouseover(function(){
				jQuery(this).addClass('focused');
			}).mouseout(function(){
				jQuery(this).removeClass('focused');
			});
			jQuery('.imageSelection li label input').focus(function(){
				jQuery(this).parents('li:first').trigger('mouseover');
			}).blur(function(){
				jQuery(this).parents('li:first').trigger('mouseout');
			});
		};
		
		
		
		if ( jQuery('.Login .imageSelectionLogin').length > 0 ) {
			jQuery('.imageSelection li label').mousedown(function(){
				jQuery(this).find('input').prop('checked', true);
			 	jQuery(this).parents('ul:first').find('li.selected').removeClass('selected');
				jQuery(this).parents('li:first').addClass('selected');
				jQuery(this).parents('form:first').submit();
				return false;
			}).keypress(function(event){
				if ( event.which == 32 ) {
					event.preventDefault();
					jQuery(this).trigger('mousedown');
				}
			});
			// to prevent double click on image selection page
			jQuery(document).ready(function() {
				jQuery("form:first").submit(function() {
					jQuery('.imageSelection li label').unbind('mousedown');
					return true;
				});
			});
			LBCAttachImageEvents();
		
		}else if( jQuery('.lBCChangeSecurityImageStep1 .imageSelectionSetup').length > 0 ){
			jQuery('.imageSelection li label').mousedown(function(){
				jQuery(this).find('input').prop('checked', true);
			 	jQuery(this).parents('ul:first').find('li.selected').removeClass('selected');
				jQuery(this).parents('li:first').addClass('selected');
				jQuery('#LBCImageId').val(jQuery(this).find('img').attr('alt'));
				return false;
			}).keypress(function(event){
				if ( event.which == 32 ) {
					event.preventDefault();
					jQuery(this).trigger('mousedown');
				}
			});
			LBCAttachImageEvents();
		}else{
			
			jQuery('.lBCFirstTimeLogonStep3, .lBCResetCredentialsStep3, .lBCChangeSecurityImageStep2').on('mousedown','ul.imageSelection li label',function(){
				jQuery(this).find('input').prop('checked', true);
			 	jQuery(this).parents('ul:first').find('li.selected').removeClass('selected');
				jQuery(this).parents('li:first').addClass('selected');
				jQuery('#LBCImageId').val(jQuery(this).find('img').attr('alt'));
				var imagePlaceholder = jQuery('.selectedImagePlaceholder');
				imagePlaceholder.find('img').remove();
				jQuery(this).find('img:first').clone().prependTo(imagePlaceholder);
				imagePlaceholder.addClass('imageSelected');
				return false;
			}).on('keypress', 'ul.imageSelection li label', function(event){
				if ( event.which == 32 ) {
					event.preventDefault();
					jQuery(this).trigger('mousedown');
				}
			}).on('mouseover','.imageSelection li',function(){
				jQuery(this).addClass('focused');
			}).on('mouseout','.imageSelection li',function(){
				jQuery(this).removeClass('focused');
			}).on('focus','.imageSelection li label input',function(){
				jQuery(this).parents('li:first').trigger('mouseover');
			}).on('blur','.imageSelection li label input',function(){
				jQuery(this).parents('li:first').trigger('mouseout');
			});
		}
	}

	
	jQuery('.orderChequesStep2').on('mousedown','ul.thumbnails li label',function(){
		jQuery(this).find('input').prop('checked', true);
 		jQuery(this).parents('ul:first').find('li.selected').removeClass('selected');
		jQuery(this).parents('li:first').addClass('selected');
		return false;
	});
	
	var selectedImageOnload = jQuery('.orderChequesStep2 ul.thumbnails input:checked');
	if( selectedImageOnload.length > 0 ){
		selectedImageOnload.parents('li:first').addClass('selected');
	}
	
	
	jQuery('.selectPassword input[type=password]:first').LBCPstrength({
		verdicts: ['unacceptable ', 'good', 'excellent'],
		target: jQuery('.selectPassword input[type=password]:first').parents('.entry .input')
	});
	
	jQuery('.changePassword input[type=password]:eq(1)').LBCPstrength({
		verdicts: ['unacceptable ', 'good', 'excellent'],
		target: jQuery('.changePassword input[type=password]:eq(1)').parents('.entry .input')
	});
	
	jQuery('.selectPassword input[type=password]:eq(1)').LBCPmatch({
		matchTo: jQuery('.selectPassword input[type=password]:first'),
		target: jQuery('.selectPassword input[type=password]:eq(1)').parents('.entry .input'),
		failedtext: 'Passwords are not the same'
	});
	
	jQuery('.changePassword input[type=password]:eq(2)').LBCPmatch({
		matchTo: jQuery('.changePassword input[type=password]:eq(1)'),
		target: jQuery('.changePassword input[type=password]:eq(2)').parents('.entry .input'),
		failedtext: 'Passwords are not the same'
	});
	
	jQuery('.selectQuestions input[type=text]').LBCCharLeft({
		responseText: '{0} of {1} characters remaining'
	});
	
	jQuery('.formProgress:first').each(function(){
		jQuery(this).find('span').each(function(){
			jQuery(this).html(jQuery(this).html().split('.').join(""));
		});
		jQuery(this).prependTo('.colContainer:first');
	});
	
	var LoginForm = jQuery('form.logonStep1, form.logonStepQuestion, form.selectPassword, table.selectQuestions, div.lBCFirstTimeLogonStep4');
	if( LoginForm.length > 0 ){
		var LoginFormError = LoginForm.find( '.requirederror:first input:first, .entryError:first input:first' );
		if( LoginFormError.length > 0 ){
			LoginFormError[0].focus();
		}else{
			LoginForm.find( '.required:first input:first, .entry:first input:first' ).focus();
		}
	}
	
	jQuery('.LBCtableShowHide span').bind('click', function(){
		var thisRow = $(this).parents('tr:first');
		var selected = $(this).hasClass('selected')?true:false;
		if(selected){
			thisRow.addClass('LBCtableShowHideShowing');
		}else{
			thisRow.removeClass('LBCtableShowHideShowing');
		}
	});
	
	jQuery('td.LBCtableShowHide').next().find('span.value').each(function(){
		jQuery(this).bind('hover', function(){
			jQuery(this).css('cursor', 'pointer');
		});
		jQuery(this).bind('click', function(){
			jQuery(this).parents('td:first').prev().find('span').trigger('click');
		});
	
	});
	
	jQuery('[class*=showHideSwitch]').bind('click', function(){
		return false;
	});
	
    
	if(jQuery('.lbcBankStatementsPreferences').length > 0){
	    jQuery('#unlinkEpost').on('click', function () {
	        return confirm('Are you certain you wish to make this change?');
	    });
	    jQuery('#linkEpost').on('click', function () {
	        var ePostRegisterUrl = jQuery(this).attr('href');
	        return LbcCheckLink('Are you certain you wish to make this change?', ePostRegisterUrl );
	    });
	    jQuery('#getElectronicStatements').on('click', function () {
	    	var ePostRegisterUrl = jQuery(this).attr('href');
	        return LbcCheckLink('Are you certain you wish to make this change?', ePostRegisterUrl );
	    });
	    jQuery('#createEpostAccount').on('click', function () {
	    	var ePostRegisterUrl = jQuery(this).attr('href');
	        return LbcCheckLink('Are you certain you wish to make this change?', ePostRegisterUrl );
	    });
	}
	
    
        jQuery('#investorAccessLink').on('click', function () {
            var investorAccessUrl = jQuery(this).attr('href');
            return LbcCheckLink('You are leaving your secure online banking session. Do you want to continue?', investorAccessUrl );
        });
    
        jQuery('#Assur-Paiement-link').on('click', function () {
            var assurPaiementUrl = jQuery(this).attr('href');
            return LbcCheckLink('You are leaving your secure online banking session. Do you want to continue?', assurPaiementUrl );
        });

		
		jQuery('.protectVisaCardBalanceLink').on('click', function () {
				var protectVisa = jQuery(this).attr('href');
				return LbcCheckLink('You are leaving your secure online banking session. Do you want to continue?', protectVisa );
		});
		
		jQuery('.protegezLeCarteVisaLink').on('click', function () {
				var protegezVisa = jQuery(this).attr('href');
				return LbcCheckLink('You are leaving your secure online banking session. Do you want to continue?', protegezVisa );
		});

	function LbcCheckLink( msg , ePostRegisterUrl ){
    	var answer = confirm( msg );
		if ( answer ){
  			var epostWindow = window.open( ePostRegisterUrl, "express_epostw", "menubar=1, toolbar=1, location=1, status=1, resizable=1, scrollbars=1" );
		}
		return false;
	}

	
	if( jQuery('#PayeeAlphaList').length > 0){
		jQuery('dl#A').css('display','block');
		var currentAlphaList = 'A';
		jQuery('#PayeeAlphaList li a').click(function(){
			jQuery('dl#' + currentAlphaList).css('display', 'none');
			var href = $(this).attr('href');
			currentAlphaList = href.substring(href.indexOf('#'), href.length);
			jQuery('dl#' + currentAlphaList).css('display', 'block');
			return false;
		});
	}
      

    if( jQuery("meta[content='LBCCommunicationsPreferences']").length > 0 ){
       
       
       jQuery('.lBCCommunicationPreferences .formActions ul').after(jQuery('.address'));

       
	   var chkElement = jQuery('.lBCCommunicationPreferences.step1 .input .inputOption:nth-child(2) input[type="checkbox"][value=1]');
       if ( chkElement.parent() != null && chkElement.parent().length > 0 ) {
      		chkElement.prop("checked", false);
      		chkElement.parent().hide();
       }
	
    }
      
      
   
});

