$(function(){var e=$("[data-username-field]"),t=$("[data-memorized-account-hidden]"),c=$("select[name='Memorized']"),a=$("input[type='password']"),n=$("input.remember-me-checkbox"),i=$("[data-remember-shown]"),o=$("#remove-account"),h="True"===$("#FirstLogin").val();i.hide(),c.length?(t.hide(),c.focus()):e.focus(),h||c.val("other").selectmenu("refresh"),c.change(function(){var c=$(this).val();if("other"===c)return o.hide(),t.show(),h?e.val("").focus():a.focus(),void i.toggle(n.is(":checked"));t.hide(),o.show(),i.hide(),n.prop("checked",!1),e.val(c),a.focus()}).change(),n.change(function(){var e=$(this).is(":checked");i.toggle(e)}),o.click(function(){$.ajax({url:"Security_ForgetMemorizedAccount",method:"POST",data:{identifier:c.val()},success:function(){location.reload()}})}),$("select[name='AccountType']").change(function(){var e=$(this).val();window.location.replace(e)}),$("#sign-in-button").on("click",function(e){$(this).data("was-clicked",!0),$(this).data("has-captcha")||e.preventDefault()}),$("#sign-in-button").on("captcha-populated",function(){$(this).data("has-captcha",!0),$(this).data("was-clicked")&&$(this).click()})}),$(document).on("recaptcha-token",function(e,t){$("#sign-in-button").trigger("captcha-populated")});