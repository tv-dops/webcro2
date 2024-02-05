
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"167",
  
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=new Date,c=-a.getTimezoneOffset(),d=0\u003C=c?\"+\":\"-\",b=function(a){a=Math.abs(Math.floor(a));return(10\u003Ea?\"0\":\"\")+a};return a.getFullYear()+\"-\"+b(a.getMonth()+1)+\"-\"+b(a.getDate())+\"T\"+b(a.getHours())+\":\"+b(a.getMinutes())+\":\"+b(a.getSeconds())+\".\"+b(a.getMilliseconds())+d+b(c\/60)+\":\"+b(c%60)})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=(new Date).getTime();\"undefined\"!==typeof performance\u0026\u0026\"function\"===typeof performance.now\u0026\u0026(a+=performance.now());return\"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx\".replace(\/[xy]\/g,function(c){var b=(a+16*Math.random())%16|0;a=Math.floor(a\/16);return(\"x\"===c?b:b\u00263|8).toString(16)})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=3,c=5;return function(a){\"number\"===typeof b\u0026\u0026a.set(\"dimension\"+b,a.get(\"clientId\"));\"number\"===typeof c\u0026\u0026a.set(\"dimension\"+c,a.get(\"hitType\"))}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.pending"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){n=",["escape",["macro",3],8,16],";if(0==n.indexOf(\"txn\"))return ",["escape",["macro",4],8,16],"?\"pending\":\"posted\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"apb\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"authorizeduser\",\"authorizeduserexists\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"changecreditlimit\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"accountnickname\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"changepin\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"damagedentercvc\",\"confirmloststolen\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"freezecard\",\"unfreezecard\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"changepassword\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"travelnoticeedit\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.accounts"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],",c=",["escape",["macro",16],8,16],";if(\"undefined\"!==typeof a)for(var b=0;b\u003Ca.length;b++)if(-1\u003Cc.indexOf(a[b].guid))return a[b].type.toLowerCase()})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",15],8,16],",c=",["escape",["macro",16],8,16],";if(\"undefined\"!==typeof a)for(var b=0;b\u003Ca.length;){if(-1\u003Cc.indexOf(a[b].guid))var d=b+1;return d.toString()}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",19],8,16],";\"OFFER-BANNER\"!=a.nodeName\u0026\"BODY\"!=a.nodeName;)a=a.parentNode;if(\"OFFER-BANNER\"==a.nodeName)return a.getElementsByClassName(\"banner\")[0].getAttribute(\"class\").replace(\" ng-star-inserted\",\"\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",19],8,16],";\"OFFER-BANNER\"!=a.nodeName\u0026\"BODY\"!=a.nodeName;)a=a.parentNode;if(\"OFFER-BANNER\"==a.nodeName)return a.getAttribute(\"presentationpoint\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",19],8,16],";\"OFFER-BANNER\"!=a.nodeName\u0026\"BODY\"!=a.nodeName;)a=a.parentNode;if(\"OFFER-BANNER\"==a.nodeName)return a.getElementsByTagName(\"H3\")[0].childNodes[0].nodeValue})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",19],8,16],";\"OFFER-BANNER\"!=a.nodeName\u0026\"BODY\"!=a.nodeName;)a=a.parentNode;if(\"OFFER-BANNER\"==a.nodeName)return a.getElementsByTagName(\"P\")[0].childNodes[0].nodeValue})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"hasUrl"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var vcp=",["escape",["macro",24],8,16],";var vcp=vcp.replace(\"https:\/\/",["escape",["macro",25],7],"\",\"\");var n=",["escape",["macro",3],8,16],";var gp=\/\\\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\/;vcp=vcp.replace(gp,\"\");if(",["escape",["macro",26],8,16],"==false)vcp=vcp+\"\/",["escape",["macro",3],7],"\";return vcp})();"]
    },{
      "function":"__e"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"dashboard\"==",["escape",["macro",3],8,16],"\u0026\u0026\"gtm.linkClick\"==",["escape",["macro",28],8,16],"){for(var a=",["escape",["macro",19],8,16],";!a.classList.contains(\"card-container\")\u0026\u0026\"BODY\"!=a.nodeName;)a=a.parentNode;if(\"DIV\"==a.nodeName)return a.getAttribute(\"ng-reflect-ng-switch\").toLowerCase()}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"dashboard\"==",["escape",["macro",3],8,16],"\u0026\u0026\"gtm.linkClick\"==",["escape",["macro",28],8,16],"){for(var a=",["escape",["macro",19],8,16],",b=1;!a.classList.contains(\"card-container\")\u0026\u0026\"BODY\"!=a.nodeName;)a=a.parentNode;for(;a.previousSibling;)a=a.previousSibling,\"DIV\"==a.nodeName\u0026\u0026a.classList.contains(\"card-container\")\u0026\u0026b++;return b}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"convcheques\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"balancetransfertcs\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"creditbalancerefund\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"activatecard\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(-1\u003Ca.indexOf(\"unfreeze\"))return\"unfreeze card\";if(-1\u003Ca.indexOf(\"freeze\"))return\"freeze card\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(-1\u003Ca.indexOf(\"unfreeze\"))return\"unfreezecardsuccess\";if(-1\u003Ca.indexOf(\"freeze\"))return\"freezecardsuccess\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(-1\u003Ca.indexOf(\"unfreeze\"))return\"unfreezecardfailed\";if(-1\u003Ca.indexOf(\"freeze\"))return\"freezecardfailed\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";switch(a){case \"damagedentercvc\":return\"report damaged card\";case \"confirmloststolen\":return\"report lost or stolen card\";case \"damagedsuccess\":return\"report damaged card\";case \"loststolensuccess\":return\"report lost card\";case \"calltoreissue\":return\"report stolen card\"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";if(\"damagedsuccess\"==a)return\"damagedsuccess\";if(\"loststolensuccess\"==a)return\"loststolensuccess\";if(\"calltoreissue\"==a)return\"calltoreissue\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],";return-1\u003Ca.indexOf(\"forgot:username\")?\"forgot username\":\"verify account\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",15],8,16],",a=0;a\u003Cb.length;a++)if(\"CREDIT-CARD\"==b[a].type)return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",15],8,16],",a=0;a\u003Cb.length;a++)if(\"INDIVIDUAL\"==b[a].type)return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",15],8,16],",a=0;a\u003Cb.length;a++)if(\"JOINT\"==b[a].type)return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",15],8,16],",a=0;a\u003Cb.length;a++)if(\"ADDITIONAL\"==b[a].type)return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"billpayment\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"interacsend\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"interacrequest\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"interacfulfill\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"interacautodeposit\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"interacaccept\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"movemoneydetails\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],",b=[\"interacreclaim\"];if(-1\u003Cb.indexOf(a))return 1})();"]
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_map":["list",["map","key","txnspcoptimum","value","pcoptimum"],["map","key","txndetailspurchase","value","purchase"],["map","key","txndetailsrefund","value","refund"],["map","key","txndetailspayment","value","payment"],["map","key","txndetailsfee","value","fee"],["map","key","txndetailstransfer","value","transfer"],["map","key","txndetailswithdrawal","value","withdrawal"],["map","key","txndetailsuncategorized","value","uncategorized"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",16],8,16],",c=",["escape",["macro",3],8,16],",b=\/\\\/([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})\/;a=a.replace(b,\"\");b=\/\\\/(s1d-[0-9a-f]{32})\/;a=a.replace(b,\"\");b=\/\\\/\\(transaction:[0-9]{10}-[0-9]{13}\\\/details\\)\/;a=a.replace(b,\"\");0==",["escape",["macro",26],8,16],"\u0026\u0026(a+=\"\/",["escape",["macro",3],7],"\");0==c.indexOf(\"txn\")\u0026\u0026\"txnspcoptimum\"!=c\u0026\u0026(a+=\"\/",["escape",["macro",55],7],"details\");return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","enrollment","value","enrollment"],["map","key","\/login","value","login"],["map","key","bill:payment","value","bill payment"],["map","key","\/transactions","value","transactions"],["map","key","\/accounts-and-cards\/account","value","account management"],["map","key","\/accounts-and-cards\/card","value","card management"],["map","key","\/insights","value","insights"],["map","key","\/estatements","value","estatements"],["map","key","\/profile","value","profile management"],["map","key","\/notifications","value","notification center"],["map","key","\/support","value","support"],["map","key","\/applications","value","applications"],["map","key","transfer:email","value","interac"],["map","key","transfer:move","value","move money"],["map","key","dashboard","value","dashboard"],["map","key","verify\/email","value","verify email"],["map","key","\/beta","value","pilot"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","forgot:password","value","reset password"],["map","key","forgot:username","value","forgot username"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","login","value","login"],["map","key","inactiveaccountenroll","value","inactive account"],["map","key","maxnumberofattempts","value","max attempts"],["map","key","forgotpassword","value","reset password"],["map","key","verifyaccount","value",["macro",40]],["map","key","2faverifyaccount","value","2fa verify account"],["map","key","2fasendcode","value","2fa send code"],["map","key","2faentercode","value","2fa enter code"],["map","key","blockedfrozenaccount","value","locked account"],["map","key","setpassword","value","set password"],["map","key","resetpasswordsuccess","value","success"],["map","key","usernamenotfound","value","username not found"],["map","key","displayusername","value","success"],["map","key","trustthisdevice","value","trust this device"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",56],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","verifyaccount","value","verify account"],["map","key","captureemail","value","email"],["map","key","setusername","value","choose username"],["map","key","alreadyenrolled","value","already have an account"],["map","key","setpassword","value","set password"],["map","key","enrollmenttcs","value","terms and conditions"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","first-login","value","first time login"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","dashboard","value","dashboard"],["map","key","setprofilephoto","value","set profile photo"],["map","key","activatecard","value","activate card"],["map","key","alldone","value","all done"],["map","key","2faverifyaccount","value","2fa verify account"],["map","key","2fasendcode","value","2fa send code"],["map","key","2faentercode","value","2fa enter code"],["map","key","sessionexpired","value","session expired"],["map","key","sessiontimeoutcountdown","value","session timeout countdown"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_map":["list",["map","key","txnspcoptimum","value","pc optimum points"],["map","key","disputetransaction","value","dispute transaction"],["map","key","adddisuptedtransactionsview","value","dispute transaction"],["map","key","disputedropdown","value","dispute transaction"],["map","key","disputetransactionsuccess","value","dispute transaction"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","txndetailsrefund","value","refund details"],["map","key","txndetailspurchase","value","purchase details"],["map","key","txndetailspayment","value","payment details"],["map","key","txndetailsfee","value","fee details"],["map","key","txndetailstransfer","value","transfer details"],["map","key","txndetailswithdrawal","value","withdrawal details"],["map","key","txndetailsuncategorized","value","uncategorized details"],["map","key","txnspcoptimum","value","pc optimum points"],["map","key","disputetransaction","value","dispute transaction"],["map","key","adddisuptedtransactionsview","value","add another"],["map","key","disputedropdown","value","dispute reason"],["map","key","disputetransactionsuccess","value","success"],["map","key","sessionexpired","value","session expired"],["map","key","sessiontimeoutcountdown","value","session timeout countdown"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","enrollpapertcs","value","terms and conditions"],["map","key","unenrollpapertcs","value","terms and conditions"],["map","key","unenrollpapersuccess","value","success"],["map","key","enrollpapersuccess","value","success"],["map","key","estatements","value","estatements"],["map","key","sessionexpired","value","session expired"],["map","key","sessiontimeoutcountdown","value","session timeout countdown"],["map","key","2faentercode","value","2fa enter code"],["map","key","2fasendcode","value","2fa send code"],["map","key","2faverifyaccount","value","2fa verify account"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","enrollpapertcs","value","enroll paper"],["map","key","unenrollpapertcs","value","unenroll paper"],["map","key","unenrollpapersuccess","value","unenroll paper"],["map","key","enrollpapersuccess","value","enroll paper"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","enrollpapertcs","value","terms and conditions"],["map","key","unenrollpapertcs","value","terms and conditions"],["map","key","unenrollpapersuccess","value","success"],["map","key","enrollpapersuccess","value","success"],["map","key","estatements","value","estatements"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\(edit:nickname\\)$","value","nickname"],["map","key","\\(change:credit-limit\\)$","value","credit limit"],["map","key","\\(authorize:account-balance-protection\\)$","value","account balance protection"],["map","key","\\(authorize:user\\)$","value","authorized user"],["map","key","\\(authorize:autopay\\)$","value","automatic payments"],["map","key","\\(order:convenience-cheques\\)$","value","convenience cheques"],["map","key","\\(authorize:balance-transfer\\)$","value","balance transfer"],["map","key","\\(request:credit-balance-refund\\)$","value","credit balance refund"],["map","key","\\(card:lost-damaged\\)$","value","lost or damaged"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","accountsoverview","value","account management"],["map","key","changecreditlimit","value","credit limit"],["map","key","newamountrequest","value","new credit limit entry"],["map","key","confirmamount","value","amount confirm"],["map","key","creditlimittcs","value","terms and conditions"],["map","key","accountnickname","value","nickname"],["map","key","authorizeduser","value","authorized user"],["map","key","authorizeduserexists","value","authorized user"],["map","key","authusertcs","value","pre conditions"],["map","key","addauthorizeduser","value","more info"],["map","key","addauthorizedusertcs","value","terms and conditions"],["map","key","addauthorizedusersuccess","value","success"],["map","key","addauthorizeduserfail","value","user already exists"],["map","key","automaticpayments","value","automatic payments"],["map","key","personalinfo","value","additional info request"],["map","key","creditlimitsuccess","value","success changed"],["map","key","creditlimitrequest","value","success requested"],["map","key","abp","value","standard protection"],["map","key","apbenrolled","value","enrolled"],["map","key","apbpending","value","pending claim"],["map","key","apbplantcs","value","terms and conditions"],["map","key","apbplansuccess","value","success"],["map","key","apbplanfail","value","failed"],["map","key","convcheques","value","convenience cheques"],["map","key","convchequesoutstanding","value","outstandingchequeorder"],["map","key","convchequesconfirm","value","verify address"],["map","key","convchequestcs","value","terms and conditions"],["map","key","convchequessuccess","value","succes"],["map","key","convchequesfail","value","failed"],["map","key","balancetransfertcs","value","terms and conditions"],["map","key","balancetransferselectfi","value","select financial institution"],["map","key","balancetransferaddfi","value","add financial institution"],["map","key","balancetransferfidetails","value","financial institution details"],["map","key","balancetransfer","value","amount"],["map","key","balancetransferverify","value","confirmation"],["map","key","balancetransfersuccess","value","success"],["map","key","creditbalancerefund","value","select account"],["map","key","creditbalancerefundtcs","value","terms and conditions"],["map","key","creditbalancerefundinfo","value","confirm info"],["map","key","creditbalancerefundsuccess","value","success"],["map","key","creditbalancerefundrequested","value","success cbr requested"],["map","key","2faverifyaccount","value","2fa verify account"],["map","key","2fasendcode","value","2fa send code"],["map","key","2faentercode","value","2fa enter code"],["map","key","sessionexpired","value","session expired"],["map","key","sessiontimeoutcountdown","value","session timeout countdown"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_map":["list",["map","key","activatecard","value","activate card"],["map","key","cardcode","value","activate card"],["map","key","activatecardsuccess","value","activate card"],["map","key","changepin","value","pin management"],["map","key","setpin","value","pin management"],["map","key","changepinsuccess","value","pin management"],["map","key","freezecard","value","freeze card"],["map","key","freezecardsuccess","value","freeze card"],["map","key","freezecardfailed","value","freeze card"],["map","key","unfreezecard","value","unfreeze card"],["map","key","unfreezecardsuccess","value","unfreeze card"],["map","key","unfreezecardfailed","value","unfreeze card"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","activatecard","value","activate card"],["map","key","cardcode","value","enter code"],["map","key","activatecardsuccess","value","success"],["map","key","changepin","value","pin management"],["map","key","setpin","value","change your pin"],["map","key","changepinsuccess","value","change pin instructions"],["map","key","freezecard","value","freeze card"],["map","key","freezecardsuccess","value","success"],["map","key","freezecardfailed","value","unsuccessful"],["map","key","unfreezecard","value","unfreeze card"],["map","key","unfreezecardsuccess","value","success"],["map","key","unfreezecardfailed","value","unsuccessful"],["map","key","lostdamaged","value","lost or damaged"],["map","key","damagedentercvc","value","replace card"],["map","key","confirmaddress","value","confirm address"],["map","key","damagedsuccess","value","success replace"],["map","key","confirmloststolen","value","report card"],["map","key","calltoreissue","value","card blocked"],["map","key","loststolensuccess","value","success lost"],["map","key","cardsoverview","value","card management"],["map","key","2faverifyaccount","value","2fa verify account"],["map","key","2fasendcode","value","2fa send code"],["map","key","2faentercode","value","2fa enter code"],["map","key","sessionexpired","value","session expired"],["map","key","sessiontimeoutcountdown","value","session timeout countdown"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/photo","value","edit profile image"],["map","key","\/personal-info","value","personal information"],["map","key","\/change-password","value","change password"],["map","key","\/manage-devices","value","manage trusted devices"],["map","key","\/travel","value","travel notification"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","profilephoto","value","edit profile image"],["map","key","moveandscale","value","move and scale"],["map","key","phototcs","value","terms and conditions"],["map","key","changepassword","value","change password"],["map","key","managetrusteddevices","value","manage trusted devices"],["map","key","customeroverview","value","personal information"],["map","key","confirmsimilaraddress","value","confirm address"],["map","key","confirmnoaddressfound","value","address not registered"],["map","key","confirmemailaddress","value","confirm email"],["map","key","confirmphonenumber","value","confirm phone"],["map","key","travelnotice","value","travel notification"],["map","key","travelnoticeedit","value","edit"],["map","key","travelnoticesaved","value","success"],["map","key","2faverifyaccount","value","2fa verify account"],["map","key","2fasendcode","value","2fa send code"],["map","key","2faentercode","value","2fa enter code"],["map","key","sessionexpired","value","session expired"],["map","key","sessiontimeoutcountdown","value","session timeout countdown"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/preferences","value","notification settings"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","notificationprefs","value","notification settings"],["map","key","setnotificationamount","value","set amount details"],["map","key","notificationtcs","value","terms and conditions"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\/requests","value","message center"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","usersupport","value","support"],["map","key","messagecenter","value","message center"],["map","key","newmessage","value","new message"],["map","key","viewmessage","value","view message"],["map","key","topicdropdown","value","topic dropdown"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","applications\/pcmc","value","pcmc"],["map","key","applications\/individual","value","phx"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","applypcmc","value","pcmc"],["map","key","applypcmccontact","value","contact"],["map","key","applypcmcemployment","value","employment"],["map","key","applypcmcauthuser","value","authorized user"],["map","key","applypcmcauthusertcs","value","authorized user terms and conditions"],["map","key","applypcmcauthuseradd","value","authorized user add"],["map","key","applypcmcauthuserlegal","value","authorized user legal"],["map","key","applypcmcaddauthuserextras","value","authorized user extra details"],["map","key","applypcmcbalancetcs","value","balance transfer terms and conditions"],["map","key","applypcmcfinaltcs","value","application terms and conditions"],["map","key","applypcmcaddapproved","value","approved"],["map","key","applypcmcaddprocessing","value","processing"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",3],
      "vtp_map":["list",["map","key","addpayeesearch","value","add payee"],["map","key","addpayeecategory","value","add payee"],["map","key","addpayeeconfirm","value","add payee"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","selectpayee","value","select payee"],["map","key","billpayment","value","pay a bill"],["map","key","billpaymentconfirm","value","confirm"],["map","key","billpaymentsuccess","value","success"],["map","key","addpayeesearch","value","search"],["map","key","addpayeecategory","value","category"],["map","key","addpayeeconfirm","value","confirm"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","transfer:email\/send","value","send"],["map","key","transfer:email\/request","value","request"],["map","key","transfer:email\/autodeposit","value","auto deposit"],["map","key","transfer:email\/fulfill","value","fulfill"],["map","key","transfer:email\/accept","value","accept"],["map","key","transfer:email\/reclaim","value","reclaim"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","interac","value","interac"],["map","key","interactcs","value","terms and conditions"],["map","key","interacautodepositregister","value","register"],["map","key","interacautoregisterconfirm","value","confirm"],["map","key","interacautodepositedit","value","edit"],["map","key","interacautodeposit","value","auto deposit"],["map","key","interacselectcontact","value","select contact"],["map","key","interacaddcontact","value","add contact"],["map","key","interacsend","value","send"],["map","key","interacsendconfirm","value","confirm"],["map","key","interacsendsuccess","value","success"],["map","key","interacrequest","value","request"],["map","key","interacrequestconfirm","value","confirm"],["map","key","interacrequestsuccess","value","success"],["map","key","interacfulfill","value","fulfill"],["map","key","interacfulfillconfirm","value","confirm"],["map","key","interacfulfillsuccess","value","success"],["map","key","interaceditcontact","value","edit contact"],["map","key","interacaccept","value","accept"],["map","key","interacacceptconfirm","value","confirm"],["map","key","interacacceptsuccess","value","success"],["map","key","interacacceptfail","value","fail"],["map","key","interacreclaim","value","reclaim"],["map","key","interacreclaimsuccess","value","success"],["map","key","interacreclaimfail","value","fail"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","movemoneyselectaccount","value","select account"],["map","key","movemoneydetails","value","details"],["map","key","movemoneyconfirm","value","confirm"],["map","key","movemoneysuccess","value","success"],["map","key","movemoneysuccessrequested","value","success requested"],["map","key","editeftnickname","value","edit eft nickname"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","emailverified","value","verified"],["map","key","emaillinkexpired","value","expired"],["map","key","emailalreadyverified","value","already verified"],["map","key","emaillinkinvalid","value","invalid"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",16],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",3],
      "vtp_defaultValue":["macro",3],
      "vtp_map":["list",["map","key","pilotlandingpage","value","pilot"],["map","key","pilottcs","value","terms and conditions"],["map","key","pilotentercode","value","enter code"],["map","key","pilotclosed","value","closed"],["map","key","pilotaddedtowaitlist","value","wait list"],["map","key","pilotfaq","value","faq"],["map","key","pilotcontactus","value","contact us"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function a(b,a,c){return\"undefined\"!==typeof a\u0026\u0026a==c||\"undefined\"===typeof a\u0026\u0026b==c?\"index\":c}var b=",["escape",["macro",57],8,16],";if(\"undefined\"!==typeof b)switch(b){case \"login\":return a(b,",["escape",["macro",58],8,16],",",["escape",["macro",59],8,16],");case \"enrollment\":return a(b,",["escape",["macro",60],8,16],",",["escape",["macro",61],8,16],");case \"dashboard\":return a(b,",["escape",["macro",62],8,16],",",["escape",["macro",63],8,16],");case \"transactions\":return a(b,",["escape",["macro",64],8,16],",",["escape",["macro",65],8,16],");case \"insights\":return a(b,",["escape",["macro",66],8,16],",\n",["escape",["macro",67],8,16],");case \"estatements\":return a(b,",["escape",["macro",68],8,16],",",["escape",["macro",69],8,16],");case \"account management\":return a(b,",["escape",["macro",70],8,16],",",["escape",["macro",71],8,16],");case \"card management\":return a(b,",["escape",["macro",72],8,16],",",["escape",["macro",73],8,16],");case \"profile management\":return a(b,",["escape",["macro",74],8,16],",",["escape",["macro",75],8,16],");case \"notification center\":return a(b,",["escape",["macro",76],8,16],",",["escape",["macro",77],8,16],");case \"support\":return a(b,",["escape",["macro",78],8,16],",",["escape",["macro",79],8,16],");\ncase \"applications\":return a(b,",["escape",["macro",80],8,16],",",["escape",["macro",81],8,16],");case \"bill payment\":return a(b,",["escape",["macro",82],8,16],",",["escape",["macro",83],8,16],");case \"interac\":return a(b,",["escape",["macro",84],8,16],",",["escape",["macro",85],8,16],");case \"move money\":return a(b,",["escape",["macro",86],8,16],",",["escape",["macro",87],8,16],");case \"verify email\":return a(b,",["escape",["macro",88],8,16],",",["escape",["macro",89],8,16],");case \"pilot\":return a(b,",["escape",["macro",90],8,16],",",["escape",["macro",91],8,16],")}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"url"
    },{
      "function":"__v",
      "convert_null_to":["macro",41],
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.mcid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"language"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",57],8,16],";if(\"undefined\"!==typeof a)switch(a){case \"login\":return ",["escape",["macro",58],8,16],";case \"enrollment\":return ",["escape",["macro",60],8,16],";case \"dashboard\":return ",["escape",["macro",62],8,16],";case \"transactions\":return ",["escape",["macro",64],8,16],";case \"insights\":return ",["escape",["macro",66],8,16],";case \"estatements\":return ",["escape",["macro",68],8,16],";case \"account management\":return ",["escape",["macro",70],8,16],";case \"card management\":return ",["escape",["macro",72],8,16],";case \"profile management\":return ",["escape",["macro",74],8,16],";\ncase \"notification center\":return ",["escape",["macro",76],8,16],";case \"support\":return ",["escape",["macro",78],8,16],";case \"applications\":return ",["escape",["macro",80],8,16],";case \"bill payment\":return ",["escape",["macro",82],8,16],";case \"interac\":return ",["escape",["macro",84],8,16],";case \"move money\":return ",["escape",["macro",86],8,16],";case \"verify email\":return ",["escape",["macro",88],8,16],";case \"pilot\":return ",["escape",["macro",90],8,16],"}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=\"",["escape",["macro",16],7],"\",a=\"\/",["escape",["macro",95],7],"\";-1\u003Cb.indexOf(\"\/my\")\u0026\u0026(a+=\"\/my\");a+=\"\/",["escape",["macro",57],7],"\";\"undefined\"!=typeof ",["escape",["macro",96],8,16],"\u0026\u0026(a+=\"\/",["escape",["macro",96],7],"\");\"undefined\"!=typeof ",["escape",["macro",92],8,16],"\u0026\u0026\"index\"!=",["escape",["macro",92],8,16],"\u0026\u0026(a+=\"\/",["escape",["macro",92],7],"\");return a.replace(\/ \/g,\"\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",93],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\(edit:nickname\\)$","value",["macro",9]],["map","key","\\(change:credit-limit\\)$","value",["macro",8]],["map","key","\\(authorize:user\\)$","value",["macro",7]],["map","key","\\(authorize:account-balance-protection\\)$","value",["macro",6]],["map","key","\\(card:change-pin\\)$","value",["macro",10]],["map","key","\\(card:lost-damaged\\)$","value",["macro",11]],["map","key","\\(card:freeze-unfreeze\\)$","value",["macro",12]],["map","key","\\(edit:travel-details\\)$","value",["macro",14]],["map","key","\\(request:credit-balance-refund\\)$","value",["macro",33]],["map","key","\\(card:activate\\)$","value",["macro",34]],["map","key","\\(order:convenience-cheques\\)$","value",["macro",31]],["map","key","\\(bill:payment","value",["macro",46]],["map","key","\\(transfer:move\\)$","value",["macro",52]],["map","key","\\(transfer:email\/send\\)$","value",["macro",47]],["map","key","\\(transfer:email\/request\\)$","value",["macro",48]],["map","key","\\(transfer:email\/autodeposit\\)$","value",["macro",50]],["map","key","\\(transfer:email\/fulfill\\)$","value",["macro",49]],["map","key","\\(transfer:email\/accept\\)$","value",["macro",51]],["map","key","\\(transfer:email\/reclaim\\)$","value",["macro",53]]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",93],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\(edit:nickname\\)$","value","accountnicknamesuccess"],["map","key","\\(authorize:user\\)$","value","addauthorizedusersuccess"],["map","key","\\(change:credit-limit\\)$","value","creditlimitsuccess"],["map","key","\\(order:convenience-cheques\\)$","value","convchequessuccess"],["map","key","\\(authorize:account-balance-protection\\)$","value","abpplansuccess"],["map","key","\\(authorize:balance-transfer\\)$","value","balancetransfersuccess"],["map","key","\\(request:credit-balance-refund\\)$","value","creditbalancerefundsuccess"],["map","key","\\(card:activate\\)$","value","activatecardsuccess"],["map","key","\\(card:change-pin\\)$","value","changepinsuccess"],["map","key","\\(card:freeze-unfreeze\\)$","value",["macro",36]],["map","key","\\(card:lost-damaged\\)$","value",["macro",39]],["map","key","\\(edit:travel-details\\)$","value","travelnoticesaved"],["map","key","\\(bill:payment","value","billpaymentsuccess"],["map","key","\\(transfer:move\\)$","value","movemoneysuccess"],["map","key","\\(transfer:emai\/send\\)$","value","interacsendsuccess"],["map","key","\\(transfer:emai\/request\\)$","value","interacrequestsuccess"],["map","key","\\(transfer:emai\/fulfill\\)$","value","interacfulfillsuccess"],["map","key","\\(transfer:emai\/accept\\)$","value","interacacceptsuccess"],["map","key","\\(transfer:emai\/reclaim\\)$","value","interacreclaimsuccess"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",93],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\(change:credit-limit\\)$","value","creditlimitrequest"],["map","key","\\(request:credit-balance-refund\\)$","value","creditbalancerefundrequested"],["map","key","\\(transfer:move\\)$","value","movemoneysuccessrequested"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",93],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\(authorize:user\\)$","value","addauthorizeduserfail"],["map","key","\\(authorize:account-balance-protection\\)$","value","abpplanfail"],["map","key","\\(order:convenience-cheques\\)$","value","convchequesfail"],["map","key","\\(card:freeze-unfreeze\\)$","value",["macro",37]],["map","key","\\(transfer:email\/accept\\)$","value","interacacceptfail"],["map","key","\\(transfer:email\/reclaim\\)$","value","interacreclaimfail"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",3],8,16],"==",["escape",["macro",99],8,16],"||",["escape",["macro",3],8,16],"==",["escape",["macro",100],8,16],"||",["escape",["macro",3],8,16],"==",["escape",["macro",101],8,16],")return 1})();"]
    },{
      "function":"__cid"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",93],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","\\(edit:nickname\\)$","value","nickname"],["map","key","\\(change:credit-limit\\)$","value","credit limit"],["map","key","\\(authorize:user\\)$","value","authorized user"],["map","key","\\(authorize:account-balance-protection\\)$","value","account balance protection"],["map","key","\\(card:change-pin\\)$","value","pin management"],["map","key","\\(card:lost-damaged\\)$","value",["macro",38]],["map","key","\\(card:freeze-unfreeze\\)$","value",["macro",35]],["map","key","\\(edit:travel-details\\)$","value","travel notifications"],["map","key","\\(order:convenience-cheques\\)$","value","convenience cheques"],["map","key","\\(authorize:balance-transfer\\)$","value","balance transfer"],["map","key","\\(request:credit-balance-refund\\)$","value","credit balance refund"],["map","key","\\(card:activate\\)$","value","activate card"],["map","key","\\(bill:payment","value","pay a bill"],["map","key","\\(transfer:move\\)$","value","move money"],["map","key","\\(transfer:email\/send\\)$","value","interac send money"],["map","key","\\(transfer:email\/request\\)$","value","interac request money"],["map","key","\\(transfer:email\/autodeposit\\)$","value","register autodeposit"],["map","key","\\(transfer:email\/accept\\)$","value","interac accept transfer"],["map","key","\\(transfer:email\/fulfill\\)$","value","interac fulfill request"],["map","key","\\(transfer:email\/reclaim\\)$","value","interac reclaim transfer"]]
    },{
      "function":"__c",
      "vtp_value":"UA-54275635-2"
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","\u0026uid","value",["macro",94]],["map","fieldName","customTask","value",["macro",2]],["map","fieldName","page","value",["macro",97]]],
      "vtp_useHashAutoLink":false,
      "vtp_metric":["list",["map","index","4","metric",["macro",98]],["map","index","5","metric",["macro",102]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",0]],["map","index","2","dimension",["macro",1]],["map","index","4","dimension",["macro",94]],["map","index","6","dimension",["macro",103]],["map","index","7","dimension",["macro",95]],["map","index","8","dimension",["macro",3]],["map","index","15","dimension",["macro",104]],["map","index","13","dimension",["macro",17]],["map","index","14","dimension",["macro",18]],["map","index","16","dimension",["macro",42]],["map","index","17","dimension",["macro",43]],["map","index","18","dimension",["macro",44]],["map","index","19","dimension",["macro",45]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",105],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"2facodetype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.lastchange"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"dashboard\"==",["escape",["macro",3],8,16],"\u0026\u0026!sessionStorage.getItem(\"ja\"))return!0;\"dashboard\"!=",["escape",["macro",3],8,16],"\u0026\u0026\"undefined\"!=typeof ",["escape",["macro",94],8,16],"\u0026\u0026sessionStorage.setItem(\"ja\",\"true\");return!1})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__d",
      "vtp_elementSelector":"ngb-modal-window div.modal-header h2",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "vtp_elementSelector":"ngb-modal-window div.modal-info p",
      "vtp_selectorType":"CSS"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.lastchange"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.detail"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.date.startdate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.date.enddate"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.unit"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.numaccounts"
    },{
      "function":"__d",
      "convert_null_to":["macro",41],
      "vtp_elementSelector":"div.blade h2",
      "vtp_selectorType":"CSS"
    },{
      "function":"__d",
      "convert_null_to":["macro",41],
      "vtp_elementSelector":"div.blade h3",
      "vtp_selectorType":"CSS"
    },{
      "function":"__c",
      "vtp_value":"secure site"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){function b(a,b,c){a=\"",["escape",["macro",125],7],":\"+a;\"undefined\"!==typeof b\u0026\u0026(a=a+\":\"+b);-1==a.indexOf(c)\u0026\u0026\"undefined\"!==typeof c\u0026\u0026\"\"!=c\u0026\u0026(a=a+\":\"+c);return a}var a=",["escape",["macro",57],8,16],";if(\"undefined\"!==typeof a)switch(a){case \"login\":return b(a,",["escape",["macro",58],8,16],",",["escape",["macro",59],8,16],");case \"enrollment\":return b(a,",["escape",["macro",60],8,16],",",["escape",["macro",61],8,16],");case \"dashboard\":return b(a,",["escape",["macro",62],8,16],",",["escape",["macro",63],8,16],");case \"transactions\":return b(a,",["escape",["macro",64],8,16],",",["escape",["macro",65],8,16],");\ncase \"insights\":return b(a,",["escape",["macro",66],8,16],",",["escape",["macro",67],8,16],");case \"estatements\":return b(a,",["escape",["macro",68],8,16],",",["escape",["macro",69],8,16],");case \"account management\":return b(a,",["escape",["macro",70],8,16],",",["escape",["macro",71],8,16],");case \"card management\":return b(a,",["escape",["macro",72],8,16],",",["escape",["macro",73],8,16],");case \"profile management\":return b(a,",["escape",["macro",74],8,16],",",["escape",["macro",75],8,16],");case \"notification center\":return b(a,",["escape",["macro",76],8,16],",",["escape",["macro",77],8,16],");case \"support\":return b(a,\n",["escape",["macro",78],8,16],",",["escape",["macro",79],8,16],");case \"applications\":return b(a,",["escape",["macro",80],8,16],",",["escape",["macro",81],8,16],");case \"bill payment\":return b(a,",["escape",["macro",82],8,16],",",["escape",["macro",83],8,16],");case \"interac\":return b(a,",["escape",["macro",84],8,16],",",["escape",["macro",85],8,16],");case \"move money\":return b(a,",["escape",["macro",86],8,16],",",["escape",["macro",87],8,16],");case \"verify email\":return b(a,",["escape",["macro",88],8,16],",",["escape",["macro",89],8,16],");case \"pilot\":return b(a,",["escape",["macro",90],8,16],",",["escape",["macro",91],8,16],")}})();"]
    },{
      "function":"__c",
      "vtp_value":"2.11.0"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.billpayment.sameday"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.billpayment.recurring"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.movemoney.recurring"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.billpayment.recurringfrequency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.movemoney.recurringfrequency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.msgtopic"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.msgtype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.toast"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.justLoggedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.trustedDevices.currentDeviceTrusted"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.trustedDevices.totalDevicesTrusted"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.trustedDevices.hasResetDevices"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.page"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"all",
      "convert_undefined_to":"all",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.type"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"all",
      "convert_undefined_to":"all",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.cat"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"all",
      "convert_undefined_to":"all",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.search"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"all",
      "convert_undefined_to":"all",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.sort"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"all",
      "convert_undefined_to":"all",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.dates.start"
    },{
      "function":"__v",
      "convert_case_to":1,
      "convert_null_to":"all",
      "convert_undefined_to":"all",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.txns.dates.end"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",3],8,16],"==",["escape",["macro",99],8,16],")return\"success\";if(",["escape",["macro",3],8,16],"==",["escape",["macro",100],8,16],")return\"pending\";if(",["escape",["macro",3],8,16],"==",["escape",["macro",101],8,16],")return\"fail\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"undefined\"!=typeof ",["escape",["macro",104],8,16],")return 1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"credit.newamount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"credit.current"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"credit.preapprove"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.msgnumattachments"
    },{
      "function":"__v",
      "convert_case_to":1,
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"insights.accounts"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.movemoney.fromaccounttype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.movemoney.toaccounttype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.movemoney.onetimesameday"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.interac.contacttype"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.interac.contactlang"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"user.interac.messagepopulated"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",106],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":1
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"2FA",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Send Code",
      "vtp_eventLabel":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":12
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":13
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":14
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",106],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",17]],["map","index","14","dimension",["macro",18]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":16
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":17
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":18
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":19
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Offers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Impression",
      "vtp_eventLabel":["macro",22],
      "vtp_dimension":["list",["map","index","9","dimension",["macro",22]],["map","index","10","dimension",["macro",23]],["map","index","11","dimension",["macro",21]],["map","index","12","dimension",["macro",20]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Offers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","3","metric","1"]],
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Decline",
      "vtp_eventLabel":["macro",22],
      "vtp_dimension":["list",["map","index","9","dimension",["macro",22]],["map","index","10","dimension",["macro",23]],["map","index","11","dimension",["macro",21]],["map","index","12","dimension",["macro",20]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":23
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Offers",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","2","metric","1"]],
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Accept",
      "vtp_eventLabel":["macro",22],
      "vtp_dimension":["list",["map","index","9","dimension",["macro",22]],["map","index","10","dimension",["macro",23]],["map","index","11","dimension",["macro",21]],["map","index","12","dimension",["macro",20]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":24
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"2FA",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Resend Code",
      "vtp_eventLabel":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":29
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Dashboard",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Quicklinks",
      "vtp_eventLabel":["template",["macro",110]," - ",["macro",27]],
      "vtp_dimension":["list",["map","index","13","dimension",["macro",29]],["map","index","14","dimension",["macro",30]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Account Management",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Nickname Changed",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":31
    },{
      "function":"__twitter_website_tag",
      "once_per_event":true,
      "vtp_event_type":"PageView",
      "vtp_twitter_pixel_id":"nuum6",
      "tag_id":47
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"805914",
      "tag_id":49
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCrossDomain":false,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "tag_id":50
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":67
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfin0",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":68
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma00",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":69
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma000",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":70
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma001",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":71
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma002",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":72
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma005",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":73
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcfma00c",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":74
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"956757259",
      "vtp_conversionLabel":"956757259",
      "vtp_url":["macro",112],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":75
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"956757259",
      "vtp_conversionLabel":"O-HVCNj_zHoQi-qbyAM",
      "vtp_url":["macro",112],
      "vtp_enableProductReportingCheckbox":true,
      "vtp_enableNewCustomerReportingCheckbox":false,
      "vtp_enableEnhancedConversionsCheckbox":false,
      "tag_id":76
    },{
      "function":"__flc",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"pcmas0",
      "vtp_useImageTag":false,
      "vtp_activityTag":"pcflo0",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"2847454",
      "vtp_ordinalStandard":["macro",111],
      "vtp_url":["macro",112],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":78
    },{
      "function":"__opt",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_optimizeContainerId":"GTM-5DD2BLM",
      "vtp_gaSettings":["macro",106],
      "tag_id":79
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Approved Application",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Application Submitted",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":81
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"App Start",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Step 1 - Contact Details",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Step 2 - Employment Income",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Step 3 - Authorized Users",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":85
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Step 4 - Optional Extras",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Application",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Step 5 - Terms and Conditions",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":87
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"App Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Error Box Click",
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":88
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"App Error",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Error - OK",
      "vtp_eventLabel":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":89
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Just Signed In",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":91
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":94
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Modal Dialog",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":["macro",115],
      "vtp_eventLabel":["macro",116],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",106],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":97
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Insights",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"detail",
      "vtp_eventLabel":["macro",118],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":99
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Insights",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"date",
      "vtp_eventLabel":["template",["macro",119]," to ",["macro",120]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":100
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Insights",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"granularity",
      "vtp_eventLabel":["macro",121],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":101
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Insights",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"accounts",
      "vtp_eventLabel":["macro",122],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"PHX Beta",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Get Started",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"PHX Beta",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Let's Go CTA",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":108
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Pilot FAQ",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":["macro",123],
      "vtp_eventLabel":["macro",124],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"Transactions",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",106],
      "vtp_eventAction":"Quicklinks",
      "vtp_eventLabel":["template",["macro",110]," - ",["macro",27]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.dashboard-container offer-banner button.primary",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"500",
      "vtp_uniqueTriggerId":"9139982_56",
      "tag_id":113
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.transactions-container offer-banner button.primary",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"500",
      "vtp_uniqueTriggerId":"9139982_57",
      "tag_id":114
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.route-insights offer-banner button.primary",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"500",
      "vtp_uniqueTriggerId":"9139982_58",
      "tag_id":115
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.route-account offer-banner button.primary",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"1000",
      "vtp_uniqueTriggerId":"9139982_59",
      "tag_id":116
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":true,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.route-card offer-banner button.primary",
      "vtp_firingFrequency":"ONCE_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_onScreenDuration":"500",
      "vtp_uniqueTriggerId":"9139982_60",
      "tag_id":117
    },{
      "function":"__cl",
      "tag_id":118
    },{
      "function":"__cl",
      "tag_id":119
    },{
      "function":"__cl",
      "tag_id":120
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_71",
      "tag_id":121
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_83",
      "tag_id":122
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_84",
      "tag_id":123
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_88",
      "tag_id":124
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_89",
      "tag_id":125
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_90",
      "tag_id":126
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_91",
      "tag_id":127
    },{
      "function":"__cl",
      "tag_id":128
    },{
      "function":"__cl",
      "tag_id":129
    },{
      "function":"__cl",
      "tag_id":130
    },{
      "function":"__cl",
      "tag_id":131
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_100",
      "tag_id":132
    },{
      "function":"__cl",
      "tag_id":133
    },{
      "function":"__cl",
      "tag_id":134
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"ngb-modal-window.generic-error-modal",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"9139982_151",
      "tag_id":135
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_211",
      "tag_id":136
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_212",
      "tag_id":137
    },{
      "function":"__evl",
      "vtp_useOnScreenDuration":false,
      "vtp_useDomChangeListener":true,
      "vtp_elementSelector":"div.blade",
      "vtp_firingFrequency":"MANY_PER_ELEMENT",
      "vtp_selectorType":"CSS",
      "vtp_onScreenRatio":"50",
      "vtp_uniqueTriggerId":"9139982_219",
      "tag_id":138
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"9139982_234",
      "tag_id":139
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",130,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar domain=window.location.hostname.replace(\"www\",\"\"),rsid=\"\";\n\"sit1.cardinaldev.io\"==domain?rsid=\"pcfinancialpublic-stage\":\"pcfsit1.cardinaldev.io\"==domain?rsid=\"pcfinancialpublic-stage\":\"oneapp-sit1.cardinaldev.io\"==domain?rsid=\"pcfinancialpublic-stage\":\"sit0.cardinaldev.io\"==domain?rsid=\"pcfinancialpublic-stage\":\"secure.sit1.pcf.local\"==domain?rsid=\"pcfinancialpublic-stage\":\"sit1.pcf.local\"==domain?rsid=\"pcfinancialpublic-stage\":\"insurance.sit1.pcf.local\"==domain?rsid=\"pcfinancialpublic-stage\":\"apply.sit1.pcf.local\"==domain?rsid=\"pcfinancialpublic-stage\":\n\"ua18c2001.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"ua18c2002.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"ua18c2003.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"ua18c2004.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"ua18c2005.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"app.sit1.pcf.local\"==domain?rsid=\"pcfinancialpublic-stage\":\"mock.cardinaldev.io\"==domain?rsid=\"pcfinancialpublic-stage\":\"uat.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\n\"uat.pcinsurance.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"secure.uat.pcinsurance.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"pilot.pcinsurance.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"pilot.pcfinancial.ca\"==domain?rsid=\"pcfinancialpublic-stage\":\"pcfinancial.ca\"==domain?rsid=\"pcfinancial-live\":\"secure.pcfinancial.ca\"==domain?rsid=\"pcfinancial-live\":\"pcinsurance.ca\"==domain?rsid=\"pcfinancial-live\":\"www.pcfinancial.ca\"==domain?rsid=\"pcfinancial-live\":\".pcfinancial.ca\"==domain?rsid=\"pcfinancial-live\":\n\"app.pcfinancial.ca\"==domain?rsid=\"pcfinancial-live\":\"apply.pcfinancial.ca\"==domain?rsid=\"pcfinancial-live\":\"pcf-web-staging.bnotions.com\"==domain?rsid=\"pcfinancialpublic-stage\":\"pcf-web-develop.bnotions.com\"==domain\u0026\u0026(rsid=\"pcfinancialpublic-stage\");var s=s_gi(rsid);s.account=rsid;s.trackingServer=\"pcfinancial.sc.omtrdc.net\";s.visitorNamespace=\"pcfinancial\";s.visitor=Visitor.getInstance(\"4C4A56F358B6286D0A495DE5@AdobeOrg\");s.trackDownloadLinks=!0;s.trackExternalLinks=!0;s.trackInlineStats=!0;\ns.linkDownloadFileTypes=\"exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx\";s.linkInternalFilters=\"sit1.cardinaldev.io,pcfsit1.cardinaldev.io,sit0.cardinaldev.io,mock.cardinaldev.io,uat.pcfinancial.ca,uat.pcinsurance.ca,secure.uat.pcinsurance.ca,secure.uat.pcfinancial.ca,pcoptimum.ca,secure.pcfinancial.ca,pcfinancial.ca,pcinsurance.ca,pcf-web-staging.bnotions.com,pcf-web-develop.bnotions.com,javascript:\";s.linkLeaveQueryString=!1;s.linkTrackVars=!0;s.linkTrackEvents=!0;s.usePlugins=!0;\nfunction s_doPlugins(a){a.list1=a.gatherIntPromo(\"intcid\",0);a.eVar8=a.getPreviousValue(a.pageName,\"s_ppn\");a.prop8=\"D\\x3dv8\";a.eVar31=a.getTimeParting(\"d\",\"-5\");a.eVar32=a.getTimeParting(\"h\",\"-5\");a.eVar33=a.getTimeParting(\"w\",\"-5\");a.eVar34=a.getVisitNum();a.eVar37=a.getNewRepeat(30,\"s_getNewRepeat\");a.prop31=\"D\\x3dv31\";a.prop32=\"D\\x3dv32\";a.prop33=\"D\\x3dv33\";a.prop34=\"D\\x3dv34\";a.prop37=\"D\\x3dv37\";a.trackExternalLinks=!0;a.campaign=a.getValOnce(a.campaign,\"s_cmp\",30);\"d\"==a.linkType\u0026\u0026(a.linkTrackVars=\n\"eVar17,events\",a.linkTrackEvents=\"event11\",a.eVar17=a.linkURL,a.events=\"event11\");\"e\"==a.linkType\u0026\u0026(a.linkTrackVars=\"eVar18,events\",a.linkTrackEvents=\"event12\",a.eVar18=a.linkURL,a.events=\"event12\");a.campaign||(a._utm_source=a.getQueryParam(\"utm_source\"),a._utm_medium=a.getQueryParam(\"utm_medium\"),a._utm_campaign=a.getQueryParam(\"utm_campaign\"),a._utm_content=a.getQueryParam(\"utm_content\"),a.campaign=a._utm_source+\"|\"+a._utm_medium+\"|\"+a._utm_campaign+\"|\"+a._utm_content,\"|||\"===a.campaign\u0026\u0026(a.campaign=\n\"\"))}s.doPlugins=s_doPlugins;s._tpDST={2012:\"4\/1,10\/7\",2013:\"4\/7,10\/6\",2014:\"4\/6,10\/5\",2015:\"4\/5,10\/4\",2016:\"4\/3,10\/2\",2017:\"4\/2,10\/1\",2018:\"4\/1,10\/7\",2019:\"4\/7,10\/6\"};s._tpDST={2012:\"3\/11,11\/4\",2013:\"3\/10,11\/3\",2014:\"3\/9,11\/2\",2015:\"3\/8,11\/1\",2016:\"3\/13,11\/6\",2017:\"3\/12,11\/5\",2018:\"3\/11,11\/4\",2019:\"3\/10,11\/3\"};s._tpDST={2012:\"3\/25,10\/28\",2013:\"3\/31,10\/27\",2014:\"3\/30,10\/26\",2015:\"3\/29,10\/25\",2016:\"3\/27,10\/30\",2017:\"3\/26,10\/29\",2018:\"3\/25,10\/28\",2019:\"3\/31,10\/27\"};\ns.getPreviousValue=new Function(\"v\",\"c\",\"el\",\"var s\\x3dthis,t\\x3dnew Date,i,j,r\\x3d'';t.setTime(t.getTime()+1800000);if(el){if(s.events){i\\x3ds.split(el,',');j\\x3ds.split(s.events,',');for(x in i){for(y in j){if(i[x]\\x3d\\x3dj[y]){if(s.c_r(c)) r\\x3ds.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r\\x3ds.c_r(c);v?s.c_w(c,v,t):s.c_w(c,'no value',t);return r}\");s.split=new Function(\"l\",\"d\",\"var i,x\\x3d0,a\\x3dnew Array;while(l){i\\x3dl.indexOf(d);i\\x3di\\x3e-1?i:l.length;a[x++]\\x3dl.substring(0,i);l\\x3dl.substring(i+d.length);}return a\");\ns.getTimeParting=new Function(\"t\",\"z\",\"var s\\x3dthis,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d\\x3dnew Date();A\\x3dd.getFullYear();if(A\\x3d\\x3d'2009'){B\\x3d'08';C\\x3d'01'}if(A\\x3d\\x3d'2010'){B\\x3d'14';C\\x3d'07'}if(A\\x3d\\x3d'2011'){B\\x3d'13';C\\x3d'06'}if(A\\x3d\\x3d'2012'){B\\x3d'11';C\\x3d'04'}if(A\\x3d\\x3d'2013'){B\\x3d'10';C\\x3d'03'}if(A\\x3d\\x3d'2014'){B\\x3d'09';C\\x3d'02'}if(!B||!C){B\\x3d'08';C\\x3d'01'}B\\x3d'03\/'+B+'\/'+A;C\\x3d'11\/'+C+'\/'+A;D\\x3dnew Date('1\/1\/2000');if(D.getDay()!\\x3d6||D.getMonth()!\\x3d0){return'Data Not Available'}else{z\\x3dparseFloat(z);E\\x3dnew Date(B);F\\x3dnew Date(C);G\\x3dF;H\\x3dnew Date();if(H\\x3eE\\x26\\x26H\\x3cG){z\\x3dz+1}else{z\\x3dz};I\\x3dH.getTime()+(H.getTimezoneOffset()*60000);J\\x3dnew Date(I+(3600000*z));K\\x3d['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];L\\x3dJ.getHours();M\\x3dJ.getMinutes();N\\x3dJ.getDay();O\\x3dK[N];P\\x3d'AM';Q\\x3d'Weekday';R\\x3d'00';if(M\\x3e30){R\\x3d'30'}if(L\\x3e\\x3d12){P\\x3d'PM';L\\x3dL-12};if(L\\x3d\\x3d0){L\\x3d12};if(N\\x3d\\x3d6||N\\x3d\\x3d0){Q\\x3d'Weekend'}T\\x3dL+':'+R+P;if(t\\x3d\\x3d'h'){return T}if(t\\x3d\\x3d'd'){return O}if(t\\x3d\\x3d'w'){return Q}}\");\ns.getNewRepeat=new Function(\"d\",\"cn\",\"var s\\x3dthis,e\\x3dnew Date(),cval,sval,ct\\x3de.getTime();d\\x3dd?d:30;cn\\x3dcn?cn:'s_nr';e.setTime(ct+d*24*60*60*1000);cval\\x3ds.c_r(cn);if(cval.length\\x3d\\x3d0){s.c_w(cn,ct+'-New',e);return'New';}sval\\x3ds.split(cval,'-');if(ct-sval[0]\\x3c30*60*1000\\x26\\x26sval[1]\\x3d\\x3d'New'){s.c_w(cn,ct+'-New',e);return'New';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}\");s.split=new Function(\"l\",\"d\",\"var i,x\\x3d0,a\\x3dnew Array;while(l){i\\x3dl.indexOf(d);i\\x3di\\x3e-1?i:l.length;a[x++]\\x3dl.substring(0,i);l\\x3dl.substring(i+d.length);}return a\");\ns.getVisitNum=new Function(\"tp\",\"c\",\"c2\",\"var s\\x3dthis,e\\x3dnew Date,cval,cvisit,ct\\x3de.getTime(),d;if(!tp){tp\\x3d'm';}if(tp\\x3d\\x3d'm'||tp\\x3d\\x3d'w'||tp\\x3d\\x3d'd'){eo\\x3ds.endof(tp),y\\x3deo.getTime();e.setTime(y);}else {d\\x3dtp*86400000;e.setTime(ct+d);}if(!c){c\\x3d's_vnum';}if(!c2){c2\\x3d's_invisit';}cval\\x3ds.c_r(c);if(cval){var i\\x3dcval.indexOf('\\x26vn\\x3d'),str\\x3dcval.substring(i+4,cval.length),k;}cvisit\\x3ds.c_r(c2);if(cvisit){if(str){e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {return 'unknown visit number';}}else {if(str){str++;k\\x3dcval.substring(0,i);e.setTime(k);s.c_w(c,k+'\\x26vn\\x3d'+str,e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return str;}else {s.c_w(c,e.getTime()+'\\x26vn\\x3d1',e);e.setTime(ct+1800000);s.c_w(c2,'true',e);return 1;}}\");\ns.dimo=new Function(\"m\",\"y\",\"var d\\x3dnew Date(y,m+1,0);return d.getDate();\");s.endof=new Function(\"x\",\"var t\\x3dnew Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x\\x3d\\x3d'm'){d\\x3ds.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(x\\x3d\\x3d'w'){d\\x3d7-t.getDay();}else {d\\x3d1;}t.setDate(t.getDate()+d);return t;\");s.apl=new Function(\"l\",\"v\",\"d\",\"u\",\"var s\\x3dthis,m\\x3d0;if(!l)l\\x3d'';if(u){var i,n,a\\x3dl.split(d),al\\x3da.length;for(i\\x3d0;i\\x3cal;i++){n\\x3da[i];m\\x3dm||(u\\x3d\\x3d1?(n\\x3d\\x3dv):(n.toLowerCase()\\x3d\\x3dv.toLowerCase()));}}if(!m)l\\x3dl?l+d+v:v;return l;\");\ns.gatherIntPromo=new Function(\"p\",\"m\",\"r\",\"var s\\x3dthis,a,d,e,i,l\\x3d'',r\\x3dr?r:'';if(m\\x3d\\x3d'0'){a\\x3ddocument.getElementsByTagName('a');for(i\\x3d0;i\\x3c\\x3da.length-1;i++){if(a[i].href.indexOf(p)!\\x3d-1){if(l\\x3d\\x3d''){l\\x3ds.getURLVars(a[i].href)[p];}else{l\\x3dl+','+s.getURLVars(a[i].href)[p];}}}}else if(m\\x3d\\x3d'1'){a\\x3ddocument.getElementsByTagName('body')[0].innerHTML;e\\x3da.match(r);if(e\\x3d\\x3dnull){return null;}else{d\\x3ds.eliminateDuplicates(e);for(i\\x3d0;i\\x3c\\x3dd.length-1;i++){if(d[i].indexOf(p)!\\x3d-1){if(l\\x3d\\x3d''){l\\x3ds.getURLVars(d[i])[p];}else{l\\x3dl+','+s.getURLVars(d[i])[p];}}}}}return l;\");\ns.eliminateDuplicates=new Function(\"ar\",\"var s\\x3dthis,j,le\\x3dar.length,ou\\x3d[],ob\\x3d{};for(j\\x3d0;j\\x3cle;j++){ob[ar[j]]\\x3d0;}for(j in ob){ou.push(j);}return ou;\");s.getURLVars=new Function(\"u\",\"var s\\x3dthis,k,uv\\x3d[],uh,h\\x3du.slice(u.indexOf('?')+1).split('\\x26');for(k\\x3d0;k\\x3ch.length;k++){uh\\x3dh[k].split('\\x3d');uv.push(uh[0]);uv[uh[0]]\\x3duh[1];}return uv;\");s.getValOnce=new Function(\"v\",\"c\",\"e\",\"t\",\"var s\\x3dthis,a\\x3dnew Date,v\\x3dv?v:'',c\\x3dc?c:'s_gvo',e\\x3de?e:0,i\\x3dt\\x3d\\x3d'm'?60000:86400000,k\\x3ds.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e\\x3d\\x3d0?0:a);}return v\\x3d\\x3dk?'':v\");\ns.getQueryParam=function(a,c,g,e){var h=this,b=\"\",f;c=c?c:\"\";for(g=g?g:h.pageURL?h.pageURL:h.wd?h.wd.location:window.location;a;){var d=a.indexOf(\",\");d=0\u003Ed?a.length:d;(f=h.p_gpv(a.substring(0,d),g+\"\",e))\u0026\u0026(f=-1\u003Cf.indexOf(\"#\")?f.substring(0,f.indexOf(\"#\")):f);f\u0026\u0026(b+=b?c+f:f);a=a.substring(d==a.length?d:d+1)}return b};s.p_gpv=function(a,c,g){var e=this,h=\"\";j=1==g?\"#\":\"?\";i=c.indexOf(j);a\u0026\u0026-1\u003Ci\u0026\u0026(c=c.substring(i+1),h=e.pt(c,\"\\x26\",\"p_gvf\",a));return h};\ns.p_gvf=function(a,c){if(a){var g=this,e=a.indexOf(\"\\x3d\"),h=0\u003Ee?a:a.substring(0,e);e=0\u003Ee?!0:a.substring(e+1);if(h.toLowerCase()==c.toLowerCase())return g.epa?g.epa(e):g.unescape(e)}return\"\"};s.pt=function(a,c,g,e){for(var h=this,b=a,f=0,d;b;){d=b.indexOf(c);d=0\u003Ed?b.length:d;b=b.substring(0,d);if(b=h[g](b,e))return b;f+=d+c.length;b=a.substring(f,a.length);b=f\u003Ca.length?b:\"\"}return\"\"};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Es.clearVars();s.pageName=\"",["escape",["macro",126],7],"\";s.server=\"",["escape",["macro",25],7],"\";s.channel=\"",["escape",["macro",125],7],"\";s.pageType=\"__page type__\";s.prop1=\"",["escape",["macro",126],7],"\";s.prop2=\"",["escape",["macro",57],7],"\";\"undefined\"!==typeof ",["escape",["macro",96],8,16],"\u0026\u0026(s.prop3=",["escape",["macro",96],8,16],");s.prop4=\"",["escape",["macro",92],7],"\";s.prop6=\"",["escape",["macro",95],7],"\";s.prop7=\"",["escape",["macro",25],7],["escape",["macro",97],7],"\";\"undefined\"!=typeof ",["escape",["macro",94],8,16],"\u0026\u0026(s.prop14=\"",["escape",["macro",94],7],"\");s.prop19=\"",["escape",["macro",127],7],"\";\n\"undefined\"!==typeof ",["escape",["macro",17],8,16],"\u0026\u0026(s.prop26=\"",["escape",["macro",17],7],"\");s.prop46=\"",["escape",["macro",128],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.eVar1=\"",["escape",["macro",126],7],"\";s.eVar2=\"",["escape",["macro",57],7],"\";\"undefined\"!==typeof ",["escape",["macro",96],8,16],"\u0026\u0026(s.eVar3=\"",["escape",["macro",96],7],"\");s.eVar4=\"",["escape",["macro",92],7],"\";s.eVar6=\"",["escape",["macro",95],7],"\";s.eVar7=\"",["escape",["macro",25],7],["escape",["macro",97],7],"\";\"undefined\"!=typeof ",["escape",["macro",94],8,16],"\u0026\u0026(s.eVar14=\"",["escape",["macro",94],7],"\");\ns.eVar19=\"",["escape",["macro",127],7],"\";\"undefined\"!=typeof ",["escape",["macro",42],8,16],"\u0026\u0026(s.eVar24=\"",["escape",["macro",42],7],"\");\"undefined\"!=typeof ",["escape",["macro",43],8,16],"\u0026\u0026(s.eVar25=\"",["escape",["macro",43],7],"\");\"undefined\"!=typeof ",["escape",["macro",44],8,16],"\u0026\u0026(s.eVar29=\"",["escape",["macro",44],7],"\");\"undefined\"!=typeof ",["escape",["macro",45],8,16],"\u0026\u0026(s.eVar33=\"",["escape",["macro",45],7],"\");\"undefined\"!=typeof ",["escape",["macro",129],8,16],"\u0026\u0026(s.eVar40=1==",["escape",["macro",129],8,16],"?\"true\":\"false\");\n\"undefined\"!=typeof ",["escape",["macro",130],8,16],"\u0026\u0026(s.eVar41=1==",["escape",["macro",130],8,16],"?\"true\":\"false\");\"undefined\"!=typeof ",["escape",["macro",131],8,16],"\u0026\u0026(s.eVar41=1==",["escape",["macro",131],8,16],"?\"true\":\"false\");\"undefined\"!=typeof ",["escape",["macro",132],8,16],"\u0026\u0026(s.eVar42=\"",["escape",["macro",132],7],"\");\"undefined\"!=typeof ",["escape",["macro",133],8,16],"\u0026\u0026(s.eVar42=\"",["escape",["macro",133],7],"\");s.eVar46=\"",["escape",["macro",128],7],"\";s.eVar58=\"",["escape",["macro",125],7],"\";\n\"undefined\"!==typeof ",["escape",["macro",98],8,16],"\u0026\u0026(s.events=\"event9\",s.eVar16=\"",["escape",["macro",104],7],"\",s.prop16=\"D\\x3dv16\");\"undefined\"!==typeof ",["escape",["macro",102],8,16],"\u0026\u0026(s.events=\"event10\",s.eVar16=\"",["escape",["macro",104],7],"\",s.prop16=\"D\\x3dv16\");var s_code=s.t();s_code\u0026\u0026document.write(s_code);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":5
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Es.clearVars();s.pageName=\"",["escape",["macro",126],7],"\";s.server=\"",["escape",["macro",25],7],"\";s.channel=\"",["escape",["macro",125],7],"\";s.pageType=\"__page type__\";s.prop1=\"",["escape",["macro",126],7],"\";s.prop2=\"",["escape",["macro",57],7],"\";\"undefined\"!==typeof ",["escape",["macro",96],8,16],"\u0026\u0026(s.prop3=",["escape",["macro",96],8,16],");s.prop4=\"",["escape",["macro",92],7],"\";s.prop6=\"",["escape",["macro",95],7],"\";s.prop7=\"",["escape",["macro",25],7],["escape",["macro",97],7],"\";s.prop19=\"",["escape",["macro",127],7],"\";\"undefined\"!==typeof ",["escape",["macro",17],8,16],"\u0026\u0026(s.prop21=\"",["escape",["macro",17],7],"\");\ns.prop46=\"",["escape",["macro",128],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.eVar1=\"",["escape",["macro",126],7],"\";s.eVar2=\"",["escape",["macro",57],7],"\";\"undefined\"!==typeof ",["escape",["macro",96],8,16],"\u0026\u0026(s.eVar3=\"",["escape",["macro",96],7],"\");s.eVar4=\"",["escape",["macro",92],7],"\";s.eVar6=\"",["escape",["macro",95],7],"\";s.eVar7=\"",["escape",["macro",25],7],["escape",["macro",97],7],"\";s.eVar19=\"",["escape",["macro",127],7],"\";\"undefined\"!==typeof ",["escape",["macro",17],8,16],"\u0026\u0026(s.eVar21=\"",["escape",["macro",17],7],"\");s.eVar46=\"",["escape",["macro",128],7],"\";s.eVar58=\"",["escape",["macro",125],7],"\";\nvar s_code=s.t();s_code\u0026\u0026document.write(s_code);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":21
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event23\";s.eVar61=\"",["escape",["macro",22],7],"\";s.eVar62=\"",["escape",["macro",23],7],"\";s.eVar63=\"",["escape",["macro",21],7],"\";s.eVar64=\"",["escape",["macro",20],7],"\";s.linkTrackVars=\"events,eVar61,eVar62,eVar63,eVar64\";s.linkTrackEvents=\"event23\";s.tl(!0,\"o\",\"Offer Impression\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event24\";s.eVar61=\"",["escape",["macro",22],7],"\";s.eVar62=\"",["escape",["macro",23],7],"\";s.eVar63=\"",["escape",["macro",21],7],"\";s.eVar64=\"",["escape",["macro",20],7],"\";s.linkTrackVars=\"events,eVar61,eVar62,eVar63,eVar64\";s.linkTrackEvents=\"event24\";s.tl(!0,\"o\",\"Offer Accept\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":26
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event37\";s.eVar61=\"",["escape",["macro",22],7],"\";s.eVar62=\"",["escape",["macro",23],7],"\";s.eVar63=\"",["escape",["macro",21],7],"\";s.eVar64=\"",["escape",["macro",20],7],"\";s.linkTrackVars=\"events,eVar61,eVar62,eVar63,eVar64\";s.linkTrackEvents=\"event37\";s.tl(!0,\"o\",\"Offer Decline\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":27
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(function(){for(var c=[{active:!1,message:{en:\"We\\u2019re currently experiencing a service disruption for those trying to access estatements. We\\u2019re sorry for the inconvenience and are working hard to fix this.\",fr:\"Nous \\u00e9prouvons des probl\\u00e8mes d\\u2019interruption de service pour ceux qui essayent d'acc\\u00e9der aux d\\u00e9clarations. Nous sommes d\\u00e9sol\\u00e9s des inconv\\u00e9nients occasionn\\u00e9s par cette situation et travaillons \\u00e0 r\\u00e9soudre le probl\\u00e8me.\"},conditions:[{field:\"phx_page\",\nvalue:[\"login\"]}]},{active:!1,message:{en:\"Please note: The payment you made to your PC Financial Mastercard\\u00ae has been received. You may notice issues with how this is displayed. This will be resolved shortly. \",fr:\"Remarque : nous avons bien re\\u00e7u le paiement que vous avez effectu\\u00e9 sur votre carte MastercardMD Services financiers le Choix du Pr\\u00e9sident. Vous remarquerez peut-\\u00eatre un probl\\u00e8me d\\u2019affichage du paiement. Nous r\\u00e9soudrons ce probl\\u00e8me sous peu.\"},\nconditions:[{field:\"phx_page\",value:[\"dashboard\"]}]},{active:!1,message:{en:\"We\\u2019re currently experiencing a service disruption for those trying to activate or update their balance and spending alerts. We\\u2019re sorry for the inconvenience and are working hard to fix this.\",fr:\"Nous \\u00e9prouvons des probl\\u00e8mes d\\u2019interruption de service pour ceux qui essayent d'activ\\u00e9 our changer les notifications de solde et d\\u00e9penses. Nous sommes d\\u00e9sol\\u00e9s des inconv\\u00e9nients occasionn\\u00e9s par cette situation et travaillons \\u00e0 r\\u00e9soudre le probl\\u00e8me.\"},\nconditions:[{field:\"phx_page\",value:[\"applications\"]}]},{active:!1,message:{en:\"The set a travel notice feature is unavailable at the moment. We apologize for the inconvenience and are working to it them up and running shortly. Please give us a call to manage travel notices in the meantime at 1 (866) 246-7262.\",fr:\"FR - The set a travel notice feature is unavailable at the moment. We apologize for the inconvenience and are working to it them up and running shortly. Please give us a call to manage travel notices in the meantime at 1 (866) 246-7262.\"},\nconditions:[{field:\"account_type\",value:[\"credit-card\"]},{field:\"phx_page\",value:[\"accountsoverview\"]}]},{active:!1,message:{en:\"All interac e-transfer features are unavailable at the moment. We apologize for the inconvenience and are working to have them up and running shortly.\",fr:\"FR - All interac e-transfer features are unavailable at the moment. We apologize for the inconvenience and are working to have them up and running shortly.\"},conditions:[{field:\"account_type\",value:[\"individual\",\"joint\",\n\"additional\"]},{field:\"phx_page\",value:[\"dashboard\"]}]}],h=\"\",k=!1,b=0;b\u003Cc.length;b++)if(c[b].active){for(var g=!0,e=0;e\u003Cc[b].conditions.length;e++)if(\"phx_page\"==c[b].conditions[e].field){for(var a=!1,f=0;f\u003Cc[b].conditions[e].value.length;f++)a=a||",["escape",["macro",3],8,16],"==c[b].conditions[e].value[f];g=g\u0026\u0026a}else if(\"phx_path\"==c[b].conditions[e].field){a=!1;for(f=0;f\u003Cc[b].conditions[e].value.length;f++)a=a||",["escape",["macro",56],8,16],"==\"\/\"+",["escape",["macro",95],8,16],"+c[b].conditions[e].value[f];g=g\u0026\u0026a}else if(\"account_type\"==\nc[b].conditions[e].field){a=!1;for(f=0;f\u003Cc[b].conditions[e].value.length;f++)switch(c[b].conditions[e].value[f]){case \"credit-card\":a=a||",["escape",["macro",42],8,16],";break;case \"individual\":a=a||",["escape",["macro",43],8,16],";break;case \"joint\":a=a||",["escape",["macro",44],8,16],";break;case \"additional\":a=a||",["escape",["macro",45],8,16],"}g=g\u0026\u0026a}g\u0026\u0026(k=!0,h=c[b].message[",["escape",["macro",95],8,16],"])}var d=document.getElementById(\"gtm_important-message\");d\u0026\u0026d.classList.remove(\"js-show\");k\u0026\u0026(d?d.innerHTML=\"\\x3cp\\x3e\\x3cspan class\\x3d'title'\\x3e\\x3c\/span\\x3e \"+\nh+\"\\x3c\/p\\x3e\\x3ca class\\x3d'close'\\x3e\\x26times;\\x3c\/a\\x3e\":(d=document.createElement(\"div\"),d.id=\"gtm_important-message\",d.className=\"important-message\",d.innerHTML=\"\\x3cp\\x3e\\x3cspan class\\x3d'title'\\x3e\\x3c\/span\\x3e \"+h+\"\\x3c\/p\\x3e\\x3ca class\\x3d'close'\\x3e\\x26times;\\x3c\/a\\x3e\",d.onclick=function(a){a.target.classList.contains(\"close\")\u0026\u0026d.classList.remove(\"js-show\")},document.body.insertBefore(d,document.body.firstChild)),setTimeout(function(){d.classList.add(\"js-show\")},1E3))})();\u003C\/script\u003E\n\u003Cstyle\u003E\n.important-message {\n  position: fixed;\n  z-index: 999999;\n  width: 100%;\n  top: 0;\n  left: 0;\n  padding: 0 1em;\n  display: flex;\n  align-items: center;\n  color: white;\n  background-color: #00a0ad;\n  font-family: \"Averta-Regular\", sans-serif;\n  transition: transform 300ms ease-out;\n  transform: translateY(-100%);\n  verticle-align: middle;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n}\n.important-message a {\n  color: #fff;\n}  \n.important-message.js-show {\n  transform: translateY(0);\n}\n.important-message p {\n  margin: 3px 3px 3px 3px;\n  color: inherit;\n  text-align: center;\n  flex: 1 0 auto;\n  width: 100%;\n}\n.important-message .title::before {\n  width: 1em;\n  height: 1em;\n  margin-right: .5em;\n  display: inline-block;\n  content: \"\";\n  background-image: url('data:image\/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDcgMTA3Ij48cGF0aCBkPSJNNTMuNyA3MS42Yy00LjIgMC03LjcgMy40LTcuNyA3LjdzMy40IDcuNyA3LjcgNy43IDcuNy0zLjQgNy43LTcuNy0zLjUtNy43LTcuNy03LjdtMC01MS4xYy00LjIgMC03LjcgMy40LTcuNyA3Ljd2MzAuN2MwIDQuMiAzLjQgNy43IDcuNyA3LjdzNy43LTMuNCA3LjctNy43VjI4LjFjMC00LjItMy41LTcuNi03LjctNy42bTAgODYuOUMyNCAxMDcuNCAwIDgzLjQgMCA1My43UzI0IDAgNTMuNyAwczUzLjcgMjQgNTMuNyA1My43LTI0IDUzLjctNTMuNyA1My43IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg==');\n  background-size: contain;\n}\n.important-message .close {\n  padding: 0 1em;\n  margin-right:5em;\n  flex: 0 1 auto;\n  color: inherit;\n}\n\u003C\/style\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":28
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event10\";s.eVar16=\"",["escape",["macro",104],7],"\";s.prop16=\"",["escape",["macro",104],7],"\";s.eVar58=\"",["escape",["macro",125],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.linkTrackVars=\"events,eVar16,prop16,eVar58,prop58\";s.linkTrackEvents=\"event10\";s.tl(!0,\"o\",\"Nickname Success\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":32
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event11\";s.eVar17=\"auto pay enroll\";s.prop17=\"auto pay enroll\";s.linkTrackVars=\"events,eVar17,prop17\";s.linkTrackEvents=\"event11\";s.tl(!0,\"o\",\"auto pay enroll\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":33
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event11\";s.eVar17=\"auto pay cancel\";s.prop17=\"auto pay cancel\";s.linkTrackVars=\"events,eVar17,prop17\";s.linkTrackEvents=\"event11\";s.tl(!0,\"o\",\"auto pay cancel\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"support faq\";s.prop20=\"support faq\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"support faq\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":35
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"support contact us\";s.prop20=\"support contact us\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"support contact us\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"support about us\";s.prop20=\"support about us\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"support about us\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"support maximize rewards\";s.prop20=\"support maximize rewards\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"support maximize rewards\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":38
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"support tutorial\";s.prop20=\"support tutorial\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"support tutorial\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event11\";s.eVar17=\"export to csv\";s.prop17=\"export to csv\";s.linkTrackVars=\"events,eVar17,prop17\";s.linkTrackEvents=\"event11\";s.tl(!0,\"o\",\"export to csv\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event11\";s.eVar17=\"export to quicken\";s.prop17=\"export to quicken\";s.linkTrackVars=\"events,eVar17,prop17\";s.linkTrackEvents=\"event11\";s.tl(!0,\"o\",\"export to quicken\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"sign out\";s.prop20=\"sign out\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"sign out\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ct=\"",["escape",["macro",110],7],"\";s.events=\"event13\";s.eVar20=ct.replace(\/\\s\/g,\"-\");s.prop20=ct.replace(\/\\s\/g,\"-\");s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",ct.replace(\/\\s\/g,\"-\"));\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar ltv=\"events\",evt=\"event21\";s.events=\"event21,event13\";\"undefined\"!=typeof ",["escape",["macro",134],8,16],"\u0026\u0026(s.eVar20=\"",["escape",["macro",134],7]," topic selection\",s.prop20=\"",["escape",["macro",134],7]," topic selection\",ltv+=\",eVar20,prop20\",evt+=\",event13\");\"undefined\"!=typeof ",["escape",["macro",135],8,16],"\u0026\u0026(s.eVar45=\"",["escape",["macro",135],7],"\",s.prop45=\"",["escape",["macro",135],7],"\",ltv+=\",eVar45,prop45\");s.linkTrackVars=ltv;s.linkTrackEvents=evt;s.tl(!0,\"o\",\"support message sent\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";var tst;switch(",["escape",["macro",136],8,16],"){case \"resaddresssaved\":tst=\"personal info residential address updated\";break;case \"phonesaved\":tst=\"personal info phone updated\";break;case \"emailsaved\":tst=\"personal info email updated\";break;case \"employmentsaved\":tst=\"personal info employment updated\"}s.eVar20=tst;s.prop20=tst;s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",tst);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/nebula-cdn.kampyle.com\/wc\/6354\/onsite\/embed.js\" async\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" id=\"gtm-youtube-tracking\"\u003E(function(h,f,k){function m(){var b=[].slice.call(h.getElementsByTagName(\"iframe\")).concat([].slice.call(h.getElementsByTagName(\"embed\"))),a;for(a=0;a\u003Cb.length;a++){var d=n(b[a]);if(d){d=b[a];var e=f.location,c=h.createElement(\"a\");c.href=d.src;c.hostname=\"www.youtube.com\";c.protocol=e.protocol;var g=\"\/\"===c.pathname.charAt(0)?c.pathname:\"\/\"+c.pathname;-1\u003Cc.search.indexOf(\"enablejsapi\")||(c.search=(0\u003Cc.search.length?c.search+\"\\x26\":\"\")+\"enablejsapi\\x3d1\");if(!(-1\u003Cc.search.indexOf(\"origin\"))\u0026\u0026-1===\ne.hostname.indexOf(\"localhost\")){var w=e.port?\":\"+e.port:\"\";e=e.protocol+\"%2F%2F\"+e.hostname+w;c.search=c.search+\"\\x26origin\\x3d\"+e}\"application\/x-shockwave-flash\"===d.type\u0026\u0026(e=h.createElement(\"iframe\"),e.height=d.height,e.width=d.width,g=g.replace(\"\/v\/\",\"\/embed\/\"),d.parentNode.parentNode.replaceChild(e,d.parentNode),d=e);c.pathname=g;d.src!==c.href+c.hash\u0026\u0026(d.src=c.href+c.hash);p(d)}}\"addEventListener\"in h\u0026\u0026h.addEventListener(\"load\",x,!0)}function n(b){b=b.src||\"\";return-1\u003Cb.indexOf(\"youtube.com\/embed\/\")||\n-1\u003Cb.indexOf(\"youtube.com\/v\/\")?!0:!1}function p(b){var a=YT.get(b.id);a||(a=new YT.Player(b,{}));\"undefined\"===typeof b.pauseFlag\u0026\u0026(b.pauseFlag=!1,a.addEventListener(\"onStateChange\",function(a){y(a,b)}))}function z(b){var a={};g.events[\"Watch to End\"]\u0026\u0026(a[\"Watch to End\"]=Math.min(b-3,Math.floor(.99*b)));if(g.percentageTracking){var d=[],e;g.percentageTracking.each\u0026\u0026(d=d.concat(g.percentageTracking.each));if(g.percentageTracking.every){var c=parseInt(g.percentageTracking.every,10),f=100\/c;for(e=1;e\u003C\nf;e++)d.push(e*c)}for(e=0;e\u003Cd.length;e++)f=d[e],c=f+\"%\",f=b*f\/100,a[c]=Math.floor(f)}return a}function y(b,a){var d=b.data,e=b.target,c=e.getVideoUrl();c=c.match(\/[?\u0026]v=([^\u0026#]*)\/)[1];var f=e.getPlayerState(),g=Math.floor(e.getDuration()),h=z(g);g={1:\"Play\",2:\"Pause\"};g=g[d];a.playTracker=a.playTracker||{};1!==f||a.timer?(clearInterval(a.timer),a.timer=!1):(clearInterval(a.timer),a.timer=setInterval(function(){var b=e,d=h,c=a.videoId,g=b.getCurrentTime(),f;b[c]=b[c]||{};for(f in d)d[f]\u003C=g\u0026\u0026!b[c][f]\u0026\u0026\n(b[c][f]=!0,q(c,f))},1E3));1===d\u0026\u0026(a.playTracker[c]=!0,a.videoId=c,a.pauseFlag=!1);if(!a.playTracker[a.videoId])return!1;if(2===d){if(a.pauseFlag)return!1;a.pauseFlag=!0}r[g]\u0026\u0026q(a.videoId,g)}function q(b,a){var d=\"https:\/\/www.youtube.com\/watch?v\\x3d\"+b,e=f.GoogleAnalyticsObject;if(\"undefined\"===typeof f[t]||g.forceSyntax)if(\"function\"===typeof f[e]\u0026\u0026\"function\"===typeof f[e].getAll\u0026\u00262!==g.forceSyntax)f[e](\"send\",\"event\",\"Videos\",a,d);else\"undefined\"!==typeof f._gaq\u0026\u00261!==A\u0026\u0026f._gaq.push([\"_trackEvent\",\n\"Videos\",a,d]);else f[t].push({event:\"youTubeTrack\",attributes:{videoUrl:d,videoAction:a}})}function u(b,a,d){if(b.addEventListener)b.addEventListener(a,d);else if(b.attachEvent)b.attachEvent(\"on\"+a,function(a){a.target=a.target||a.srcElement;d.call(b,a)});else if(\"undefined\"===typeof b[\"on\"+a]||null===b[\"on\"+a])b[\"on\"+a]=function(a){a.target=a.target||a.srcElement;d.call(b,a)}}function x(b){b=b.target||b.srcElement;var a=n(b);\"IFRAME\"===b.tagName\u0026\u0026a\u0026\u0026-1\u003Cb.src.indexOf(\"enablejsapi\")\u0026\u0026-1\u003Cb.src.indexOf(\"origin\")\u0026\u0026\np(b)}var g=k||{},A=g.forceSyntax||0,t=g.dataLayerName||\"dataLayer\",r={Play:!0,Pause:!0,\"Watch to End\":!0},l;k=h.createElement(\"script\");k.src=\"\/\/www.youtube.com\/iframe_api\";var v=h.getElementsByTagName(\"script\")[0];v.parentNode.insertBefore(k,v);for(l in g.events)g.events.hasOwnProperty(l)\u0026\u0026(r[l]=g.events[l]);f.onYouTubeIframeAPIReady=function(){var b=f.onYouTubeIframeAPIReady;return function(){b\u0026\u0026b.apply(this,arguments);navigator.userAgent.match(\/MSIE [67]\\.\/gi)||(\"loading\"!==h.readyState?m():h.addEventListener?\nu(h,\"DOMContentLoaded\",m):u(f,\"load\",m))}}()})(document,window,{events:{Play:!0,Pause:!0,\"Watch to End\":!0},percentageTracking:{every:25,each:[10,90]}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=15635486\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=15635494\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"  \n  \u003Cscript type=\"text\/gtmscript\" id=\"lightning_bolt\" data-gtmsrc=\"\/\/cdn-akamai.mookie1.com\/LB\/LightningBolt.js\"\u003E\u003C\/script\u003E\n          ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":54
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=15635497\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":55
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=15635526\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":56
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/seg?add=12398268\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":57
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"https:\/\/secure.adnxs.com\/seg?add=15635527\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=1054141\u0026amp;t=1\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/acuityplatform.com\/Adserver\/pxli\/7421818423844343808\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/acuityplatform.com\/Adserver\/pxli\/4831474229821853696\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/acuityplatform.com\/Adserver\/pxli\/3088575841574023168\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":62
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/acuityplatform.com\/Adserver\/pxli\/8601551816754083840\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/iframe\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":63
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cimg src=\"\/\/magnetic.t.domdex.com\/55273\/pix.gif?t=c\u0026amp;for=Mastercard\" width=\"1\" height=\"1\" style=\"display:none;\"\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":64
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/acuityplatform.com\/Adserver\/pxli\/4832040653786101760\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":65
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Ciframe src=\"https:\/\/acuityplatform.com\/Adserver\/pxli\/7786611998147979264\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\u003C\/iframe\u003E\n\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":66
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(b,c,e,f,d){b[d]=b[d]||[];var g=function(){var a={ti:\"5105009\"};a.q=b[d];b[d]=new UET(a);b[d].push(\"pageLoad\")};var a=c.createElement(e);a.src=f;a.async=1;a.onload=a.onreadystatechange=function(){var b=this.readyState;b\u0026\u0026\"loaded\"!==b\u0026\u0026\"complete\"!==b||(g(),a.onload=a.onreadystatechange=null)};c=c.getElementsByTagName(e)[0];c.parentNode.insertBefore(a,c)})(window,document,\"script\",\"\/\/bat.bing.com\/bat.js\",\"uetq\");\u003C\/script\u003E\u003Cnoscript\u003E\u003Cimg src=\"\/\/bat.bing.com\/action\/0?ti=5105009\u0026amp;Ver=2\" height=\"0\" width=\"0\" style=\"display:none; visibility: hidden;\"\u003E\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":77
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1743939829173129\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=1692906587442603\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":90
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":" \n\u003Cscript data-gtmsrc=\"https:\/\/secure.adnxs.com\/seg?add=18621255\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E \n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":92
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"https:\/\/secure.adnxs.com\/px?id=1138022\u0026amp;t=1\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event25\";s.eVar72=\"",["escape",["macro",115],7],"\";s.prop72=\"",["escape",["macro",115],7],"\";s.eVar58=\"",["escape",["macro",125],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.linkTrackVars=\"events,eVar72,prop72,eVar58,prop58\";s.linkTrackEvents=\"event25\";s.tl(!0,\"o\",\"",["escape",["macro",115],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":96
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Es.clearVars();s.pageName=\"",["escape",["macro",126],7],"\";s.server=\"",["escape",["macro",25],7],"\";s.channel=\"",["escape",["macro",125],7],"\";s.pageType=\"__page type__\";s.prop1=\"",["escape",["macro",126],7],"\";s.prop2=\"",["escape",["macro",57],7],"\";\"undefined\"!==typeof ",["escape",["macro",96],8,16],"\u0026\u0026(s.prop3=",["escape",["macro",96],8,16],");s.prop4=\"",["escape",["macro",92],7],"\";s.prop6=\"",["escape",["macro",95],7],"\";s.prop7=\"",["escape",["macro",25],7],["escape",["macro",97],7],"\";s.prop19=\"",["escape",["macro",127],7],"\";\"undefined\"!==typeof ",["escape",["macro",17],8,16],"\u0026\u0026(s.prop21=\"",["escape",["macro",17],7],"\");\ns.prop46=\"",["escape",["macro",128],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.eVar1=\"",["escape",["macro",126],7],"\";s.eVar2=\"",["escape",["macro",57],7],"\";\"undefined\"!==typeof ",["escape",["macro",96],8,16],"\u0026\u0026(s.eVar3=\"",["escape",["macro",96],7],"\");s.eVar4=\"",["escape",["macro",92],7],"\";s.eVar6=\"",["escape",["macro",95],7],"\";s.eVar7=\"",["escape",["macro",25],7],["escape",["macro",97],7],"\";s.eVar19=\"",["escape",["macro",127],7],"\";\"undefined\"!==typeof ",["escape",["macro",17],8,16],"\u0026\u0026(s.eVar21=\"",["escape",["macro",17],7],"\");s.eVar46=\"",["escape",["macro",128],7],"\";s.eVar58=\"",["escape",["macro",125],7],"\";\nvar s_code=s.t();s_code\u0026\u0026document.write(s_code);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":98
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event2\";s.eVar15=\"insights:date selection\";s.prop15=\"insights:date selection\";s.eVar58=\"",["escape",["macro",125],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.linkTrackVars=\"events,eVar15,prop15,eVar58,prop58\";s.linkTrackEvents=\"event2\";s.tl(!0,\"o\",\"insights:date selection\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":103
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event2\";s.eVar15=\"insights:detail selection\";s.prop15=\"insights:detail selection\";s.eVar58=\"",["escape",["macro",125],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.linkTrackVars=\"events,eVar15,prop15,eVar58,prop58\";s.linkTrackEvents=\"event2\";s.tl(!0,\"o\",\"insights:detail selection\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":104
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event2\";s.eVar15=\"insights:reporting unit selection:",["escape",["macro",121],7],"\";s.prop15=\"insights:reporting unit selection:",["escape",["macro",121],7],"\";s.eVar58=\"",["escape",["macro",125],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.linkTrackVars=\"events,eVar15,prop15,eVar58,prop58\";s.linkTrackEvents=\"event2\";s.tl(!0,\"o\",\"insights:reporting unit selection:",["escape",["macro",121],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event2\";s.eVar15=\"insights:accounts selection\";s.prop15=\"insights:accounts selection\";s.eVar58=\"",["escape",["macro",125],7],"\";s.prop58=\"",["escape",["macro",125],7],"\";s.linkTrackVars=\"events,eVar15,prop15,eVar58,prop58\";s.linkTrackEvents=\"event2\";s.tl(!0,\"o\",\"insights:accounts selection\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":106
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"Dashboard - Quicklinks - ",["escape",["macro",110],7]," - ",["escape",["macro",27],7],"\";s.prop20=\"Dashboard - Quicklinks - ",["escape",["macro",110],7]," - ",["escape",["macro",27],7],"\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"Dashboard - Quicklinks - ",["escape",["macro",110],7]," - ",["escape",["macro",27],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":111
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Es.events=\"event13\";s.eVar20=\"Transactions - Quicklinks - ",["escape",["macro",110],7]," - ",["escape",["macro",27],7],"\";s.prop20=\"Transactions - Quicklinks - ",["escape",["macro",110],7]," - ",["escape",["macro",27],7],"\";s.linkTrackVars=\"events,eVar20,prop20\";s.linkTrackEvents=\"event13\";s.tl(!0,\"o\",\"Transactions - Quicklinks - ",["escape",["macro",110],7]," - ",["escape",["macro",27],7],"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":112
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n\n Adobe Visitor API for JavaScript version: 3.4.0\n Copyright 2019 Adobe, Inc. All Rights Reserved\n More info available at https:\/\/marketing.adobe.com\/resources\/help\/en_US\/mcvid\/\n*\/\nvar e=function(){function r(){return{callbacks:{},add:function(a,b){this.callbacks[a]=this.callbacks[a]||[];var c=this.callbacks[a].push(b)-1;return function(){this.callbacks[a].splice(c,1)}},execute:function(a,b){if(this.callbacks[a]){b=void 0===b?[]:b;b=b instanceof Array?b:[b];try{for(;this.callbacks[a].length;){var c=this.callbacks[a].shift();\"function\"==typeof c?c.apply(null,b):c instanceof Array\u0026\u0026c[1].apply(c[0],b)}delete this.callbacks[a]}catch(K){}}},executeAll:function(a,b){(b||a\u0026\u0026!E.isObjectEmpty(a))\u0026\u0026\nObject.keys(this.callbacks).forEach(function(b){var c=void 0!==a[b]?a[b]:\"\";this.execute(b,c)},this)},hasCallbacks:function(){return!!Object.keys(this.callbacks).length}}}function a(a,b){if(a===b)return 0;var c=a.toString().split(\".\"),f=b.toString().split(\".\");a:{var g=c.concat(f);for(var h=\/^\\d+$\/,d=0,C=g.length;d\u003CC;d++)if(!h.test(g[d])){g=!1;break a}g=!0}if(g){g=c;for(h=f;g.length\u003Ch.length;)g.push(\"0\");for(;h.length\u003Cg.length;)h.push(\"0\");a:{for(g=0;g\u003Cc.length;g++){h=parseInt(c[g],10);d=parseInt(f[g],\n10);if(h\u003Ed){f=1;break a}if(d\u003Eh){f=-1;break a}}f=0}}else f=NaN;return f}var l=\"undefined\"!=typeof window?window:\"undefined\"!=typeof global?global:\"undefined\"!=typeof self?self:{};Object.assign=Object.assign||function(a){for(var b,c,f=1;f\u003Carguments.length;++f)for(b in c=arguments[f],c)Object.prototype.hasOwnProperty.call(c,b)\u0026\u0026(a[b]=c[b]);return a};var v={HANDSHAKE:\"HANDSHAKE\",GETSTATE:\"GETSTATE\",PARENTSTATE:\"PARENTSTATE\"},q={MCMID:\"MCMID\",MCAID:\"MCAID\",MCAAMB:\"MCAAMB\",MCAAMLH:\"MCAAMLH\",MCOPTOUT:\"MCOPTOUT\",\nCUSTOMERIDS:\"CUSTOMERIDS\"},w={MCMID:\"getMarketingCloudVisitorID\",MCAID:\"getAnalyticsVisitorID\",MCAAMB:\"getAudienceManagerBlob\",MCAAMLH:\"getAudienceManagerLocationHint\",MCOPTOUT:\"getOptOut\",ALLFIELDS:\"getVisitorValues\"},n={CUSTOMERIDS:\"getCustomerIDs\"},p={MCMID:\"getMarketingCloudVisitorID\",MCAAMB:\"getAudienceManagerBlob\",MCAAMLH:\"getAudienceManagerLocationHint\",MCOPTOUT:\"getOptOut\",MCAID:\"getAnalyticsVisitorID\",CUSTOMERIDS:\"getCustomerIDs\",ALLFIELDS:\"getVisitorValues\"},y={MC:\"MCMID\",A:\"MCAID\",AAM:\"MCAAMB\"},\nb={MCMID:\"MCMID\",MCOPTOUT:\"MCOPTOUT\",MCAID:\"MCAID\",MCAAMLH:\"MCAAMLH\",MCAAMB:\"MCAAMB\"},c={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},f={GLOBAL:\"global\"},g=b,h=c,m=f,k=q,z=function(a){function b(){}function c(b,c){var d=this;return function(){var f=a(0,b),g={};return g[b]=f,d.setStateAndPublish(g),c(f),f}}var f=this;this.getMarketingCloudVisitorID=function(a){a=a||b;var f=this.findField(k.MCMID,a);a=c.call(this,k.MCMID,a);return void 0!==f?f:a()};this.getVisitorValues=function(a){f.getMarketingCloudVisitorID(function(b){a({MCMID:b})})}},\nt=v,G=w,u=n,ba=function(){function a(){}function b(a,b){var d=this;return function(){return d.callbackRegistry.add(a,b),d.messageParent(t.GETSTATE),\"\"}}function c(c){this[G[c]]=function(f){f=f||a;var d=this.findField(c,f);f=b.call(this,c,f);return void 0!==d?d:f()}}function f(b){this[u[b]]=function(){return this.findField(b,a)||{}}}Object.keys(G).forEach(c,this);Object.keys(u).forEach(f,this)},O=w,ca=function(){Object.keys(O).forEach(function(a){this[O[a]]=function(b){this.callbackRegistry.add(a,\nb)}},this)},E=function(a,b){return b={exports:{}},a(b,b.exports),b.exports}(function(a,b){b.isObjectEmpty=function(a){return a===Object(a)\u0026\u00260===Object.keys(a).length};b.isValueEmpty=function(a){return\"\"===a||b.isObjectEmpty(a)};b.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var a=7;4\u003Ca;a--){var b=document.createElement(\"div\");if(b.innerHTML=\"\\x3c!--[if IE \"+a+\"]\\x3e\\x3cspan\\x3e\\x3c\/span\\x3e\\x3c![endif]--\\x3e\",b.getElementsByTagName(\"span\").length)return a}return null};\nb.encodeAndBuildRequest=function(a,b){return a.map(encodeURIComponent).join(b)};b.isObject=function(a){return null!==a\u0026\u0026\"object\"==typeof a\u0026\u0026!1===Array.isArray(a)}}),da=(E.isObjectEmpty,E.isValueEmpty,E.getIeVersion,E.encodeAndBuildRequest,E.isObject,r),ea=v,fa={0:\"prefix\",1:\"orgID\",2:\"state\"},P=function(a,b){this.parse=function(a){try{var b={};return a.data.split(\"|\").forEach(function(a,c){void 0!==a\u0026\u0026(b[fa[c]]=2!==c?a:JSON.parse(a))}),b}catch(sa){}};this.isInvalid=function(c){var f=this.parse(c);\nif(!f||2\u003EObject.keys(f).length)return!0;var g=a!==f.orgID;c=!b||c.origin!==b;f=-1===Object.keys(ea).indexOf(f.prefix);return g||c||f};this.send=function(c,f,g){f=f+\"|\"+a;g\u0026\u0026g===Object(g)\u0026\u0026(f+=\"|\"+JSON.stringify(g));try{c.postMessage(f,b)}catch(ta){}}},Q=v,ha=function(a,b,c,f){function g(a){Object.assign(k.state,a);Object.assign(k.state.ALLFIELDS,a);k.callbackRegistry.executeAll(k.state)}function h(a){t.isInvalid(a)||(A=!1,a=t.parse(a),k.setStateAndPublish(a.state))}function d(a){!A\u0026\u0026D\u0026\u0026(A=!0,t.send(f,\na))}function K(){Object.assign(k,new z(c._generateID));k.getMarketingCloudVisitorID();k.callbackRegistry.executeAll(k.state,!0);l.removeEventListener(\"message\",m)}function m(a){t.isInvalid(a)||(a=t.parse(a),A=!1,l.clearTimeout(k._handshakeTimeout),l.removeEventListener(\"message\",m),Object.assign(k,new ba(k)),l.addEventListener(\"message\",h),k.setStateAndPublish(a.state),k.callbackRegistry.hasCallbacks()\u0026\u0026d(Q.GETSTATE))}function C(){function a(a){0!==a.indexOf(\"_\")\u0026\u0026\"function\"==typeof c[a]\u0026\u0026(k[a]=function(){})}\nObject.keys(c).forEach(a);k.getSupplementalDataID=c.getSupplementalDataID;k.isAllowed=function(){return!0}}var k=this,D=b.whitelistParentDomain;k.state={ALLFIELDS:{}};k.version=c.version;k.marketingCloudOrgID=a;k.cookieDomain=c.cookieDomain||\"\";k._instanceType=\"child\";var A=!1,t=new P(a,D);k.callbackRegistry=da();k.init=function(){l.s_c_in||(l.s_c_il=[],l.s_c_in=0);k._c=\"Visitor\";k._il=l.s_c_il;k._in=l.s_c_in;k._il[k._in]=k;l.s_c_in++;C();Object.assign(k,new ca(k));D\u0026\u0026postMessage?(l.addEventListener(\"message\",\nm),d(Q.HANDSHAKE),k._handshakeTimeout=setTimeout(K,250)):K()};k.findField=function(a,d){if(k.state[a])return d(k.state[a]),k.state[a]};k.messageParent=d;k.setStateAndPublish=g},L=v,R=p,ia=w,ja=y,ka=function(a,b){function c(){var d={};return Object.keys(R).forEach(function(b){var c=R[b];c=a[c]();E.isValueEmpty(c)||(d[b]=c)}),d}function f(){var d=[];return a._loading\u0026\u0026Object.keys(a._loading).forEach(function(b){a._loading[b]\u0026\u0026(b=ja[b],d.push(b))}),d.length?d:null}function g(d){return function J(b){(b=\nf())?(b=ia[b[0]],a[b](J,!0)):d()}}function h(a){k(a);var d=L.HANDSHAKE,f=c();b.send(a,d,f)}function d(a){g(function(){var d=a,f=L.PARENTSTATE,g=c();b.send(d,f,g)})()}function k(d){function c(c){f.call(a,c);b.send(d,L.PARENTSTATE,{CUSTOMERIDS:a.getCustomerIDs()})}var f=a.setCustomerIDs;a.setCustomerIDs=c}return function(a){b.isInvalid(a)||(b.parse(a).prefix===L.HANDSHAKE?h:d)(a.source)}},la=function(a,b){function c(a){return function(d){f[a]=d;g++;g===h\u0026\u0026b(f)}}var f={},g=0,h=Object.keys(a).length;\nObject.keys(a).forEach(function(d){var b=a[d];if(b.fn){var f=b.args||[];f.unshift(c(d));b.fn.apply(b.context||null,f)}})},ma=function(a){var b;if(!a\u0026\u0026l.location\u0026\u0026(a=l.location.hostname),b=a)if(\/^[0-9.]+$\/.test(b))b=\"\";else{a=\",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,\";\nvar c=b.split(\".\"),f=c.length-1,g=f-1;if(1\u003Cf\u0026\u00262\u003E=c[f].length\u0026\u0026(2===c[f-1].length||0\u003Ea.indexOf(\",\"+c[f]+\",\"))\u0026\u0026g--,0\u003Cg)for(b=\"\";f\u003E=g;)b=c[f]+(b?\".\":\"\")+b,f--}return b},S={compare:a,isLessThan:function(b,c){return 0\u003Ea(b,c)},areVersionsDifferent:function(b,c){return 0!==a(b,c)},isGreaterThan:function(b,c){return 0\u003Ca(b,c)},isEqual:function(b,c){return 0===a(b,c)}},T=!!l.postMessage,N={postMessage:function(a,b,c){var f=1;b\u0026\u0026(T?c.postMessage(a,b.replace(\/([^:]+:\\\/\\\/[^\\\/]+).*\/,\"$1\")):b\u0026\u0026(c.location=b.replace(\/#.*$\/,\n\"\")+\"#\"+ +new Date+f++ +\"\\x26\"+a))},receiveMessage:function(a,b){var c;try{T\u0026\u0026(a\u0026\u0026(c=function(c){if(\"string\"==typeof b\u0026\u0026c.origin!==b||\"[object Function]\"===Object.prototype.toString.call(b)\u0026\u0026!1===b(c.origin))return!1;a(c)}),l.addEventListener?l[a?\"addEventListener\":\"removeEventListener\"](\"message\",c):l[a?\"attachEvent\":\"detachEvent\"](\"onmessage\",c))}catch(K){}}},na=function(a){var b=\"0123456789\",c=\"\",f=\"\",g=8,h=10,d=10;if(1==a){b+=\"ABCDEF\";for(a=0;16\u003Ea;a++){var k=Math.floor(Math.random()*g);c+=b.substring(k,\nk+1);k=Math.floor(Math.random()*g);f+=b.substring(k,k+1);g=16}return c+\"-\"+f}for(a=0;19\u003Ea;a++)k=Math.floor(Math.random()*h),c+=b.substring(k,k+1),0===a\u0026\u00269==k?h=3:(1==a||2==a)\u0026\u002610!=h\u0026\u00262\u003Ek?h=10:2\u003Ca\u0026\u0026(h=10),k=Math.floor(Math.random()*d),f+=b.substring(k,k+1),0===a\u0026\u00269==k?d=3:(1==a||2==a)\u0026\u002610!=d\u0026\u00262\u003Ek?d=10:2\u003Ca\u0026\u0026(d=10);return c+f},oa=function(a,b){return{corsMetadata:function(){var a=\"none\",b=!0;return\"undefined\"!=typeof XMLHttpRequest\u0026\u0026XMLHttpRequest===Object(XMLHttpRequest)\u0026\u0026(\"withCredentials\"in new XMLHttpRequest?\na=\"XMLHttpRequest\":\"undefined\"!=typeof XDomainRequest\u0026\u0026XDomainRequest===Object(XDomainRequest)\u0026\u0026(b=!1),0\u003CObject.prototype.toString.call(l.HTMLElement).indexOf(\"Constructor\")\u0026\u0026(b=!1)),{corsType:a,corsCookiesEnabled:b}}(),getCORSInstance:function(){return\"none\"===this.corsMetadata.corsType?null:new l[this.corsMetadata.corsType]},fireCORS:function(b,c,f){var g=this;c\u0026\u0026(b.loadErrorHandler=c);try{var d=this.getCORSInstance();d.open(\"get\",b.corsUrl+\"\\x26ts\\x3d\"+(new Date).getTime(),!0);\"XMLHttpRequest\"===\nthis.corsMetadata.corsType\u0026\u0026(d.withCredentials=!0,d.timeout=a.loadTimeout,d.setRequestHeader(\"Content-Type\",\"application\/x-www-form-urlencoded\"),d.onreadystatechange=function(){if(4===this.readyState\u0026\u0026200===this.status)a:{var a;try{if((a=JSON.parse(this.responseText))!==Object(a)){g.handleCORSError(b,null,\"Response is not JSON\");break a}}catch(J){g.handleCORSError(b,J,\"Error parsing response as JSON\");break a}try{for(var d=b.callback,c=l,f=0;f\u003Cd.length;f++)c=c[d[f]];c(a)}catch(J){g.handleCORSError(b,\nJ,\"Error forming callback function\")}}});d.onerror=function(a){g.handleCORSError(b,a,\"onerror\")};d.ontimeout=function(a){g.handleCORSError(b,a,\"ontimeout\")};d.send();a._log.requests.push(b.corsUrl)}catch(aa){this.handleCORSError(b,aa,\"try-catch\")}},handleCORSError:function(b,c,f){a.CORSErrors.push({corsData:b,error:c,description:f});b.loadErrorHandler\u0026\u0026(\"ontimeout\"===f?b.loadErrorHandler(!0):b.loadErrorHandler(!1))}}},I=!!l.postMessage,pa=1,U=864E5,V=\"adobe_mc\",W=\"adobe_mc_sdid\",M=\/^[0-9a-fA-F\\-]+$\/,\nqa=5,X=\/vVersion\\|((\\d+\\.)?(\\d+\\.)?(\\*|\\d+))(?=$|\\|)\/,ra=function(a,b){var c=l.document;return{THROTTLE_START:3E4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(a){if(\"string\"==typeof a)return a=a.split(\"\/\"),a[0]+\"\/\/\"+a[2]},subdomain:null,url:null,getUrl:function(){var b,f=\"http:\/\/fast.\",g=\"?d_nsid\\x3d\"+a.idSyncContainerID+\"#\"+encodeURIComponent(c.location.origin);return this.subdomain||(this.subdomain=\"nosubdomainreturned\"),a.loadSSL\u0026\u0026(f=a.idSyncSSLUseAkamai?\n\"https:\/\/fast.\":\"https:\/\/\"),b=f+this.subdomain+\".demdex.net\/dest5.html\"+g,this.iframeHost=this.getIframeHost(b),this.id=\"destination_publishing_iframe_\"+this.subdomain+\"_\"+a.idSyncContainerID,b},checkDPIframeSrc:function(){var b=\"?d_nsid\\x3d\"+a.idSyncContainerID+\"#\"+encodeURIComponent(c.location.href);\"string\"==typeof a.dpIframeSrc\u0026\u0026a.dpIframeSrc.length\u0026\u0026(this.id=\"destination_publishing_iframe_\"+(a._subdomain||this.subdomain||(new Date).getTime())+\"_\"+a.idSyncContainerID,this.iframeHost=this.getIframeHost(a.dpIframeSrc),\nthis.url=a.dpIframeSrc+b)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,iframeLoadedCallbacks:[],regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:I?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,\nreadyToAttachIframePreliminary:function(){return!(a.idSyncDisableSyncs||a.disableIdSyncs||a.idSyncDisable3rdPartySyncing||a.disableThirdPartyCookies||a.disableThirdPartyCalls)},readyToAttachIframe:function(){return this.readyToAttachIframePreliminary()\u0026\u0026(this.doAttachIframe||a._doAttachIframe)\u0026\u0026(this.subdomain\u0026\u0026\"nosubdomainreturned\"!==this.subdomain||a._subdomain)\u0026\u0026this.url\u0026\u0026!this.startedAttachingIframe},attachIframe:function(){function a(){d=c.createElement(\"iframe\");d.sandbox=\"allow-scripts allow-same-origin\";\nd.title=\"Adobe ID Syncing iFrame\";d.id=f.id;d.name=f.id+\"_name\";d.style.cssText=\"display: none; width: 0; height: 0;\";d.src=f.url;f.newIframeCreated=!0;b();c.body.appendChild(d)}function b(a){d.addEventListener(\"load\",function(){d.className=\"aamIframeLoaded\";f.iframeHasLoaded=!0;f.fireIframeLoadedCallbacks(a);f.requestToProcess()})}this.startedAttachingIframe=!0;var f=this,d=c.getElementById(this.id);d?\"IFRAME\"!==d.nodeName?(this.id+=\"_2\",this.iframeIdChanged=!0,a()):(this.newIframeCreated=!1,\"aamIframeLoaded\"!==\nd.className?(this.originalIframeHasLoadedAlready=!1,b(\"The destination publishing iframe already exists from a different library, but hadn't loaded yet.\")):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=d,this.fireIframeLoadedCallbacks(\"The destination publishing iframe already exists from a different library, and had loaded alresady.\"),this.requestToProcess())):a();this.iframe=d},fireIframeLoadedCallbacks:function(a){this.iframeLoadedCallbacks.forEach(function(b){\"function\"==\ntypeof b\u0026\u0026b({message:a||\"The destination publishing iframe was attached and loaded successfully.\"})});this.iframeLoadedCallbacks=[]},requestToProcess:function(b){function c(){d.jsonForComparison.push(b);d.jsonWaiting.push(b);d.processSyncOnPage(b)}var f,d=this;if(b===Object(b)\u0026\u0026b.ibs)if(f=JSON.stringify(b.ibs||[]),this.jsonForComparison.length){var g,h,k=!1;var m=0;for(g=this.jsonForComparison.length;m\u003Cg;m++)if(h=this.jsonForComparison[m],f===JSON.stringify(h.ibs||[])){k=!0;break}k?this.jsonDuplicates.push(b):\nc()}else c();(this.receivedThirdPartyCookiesNotification||!I||this.iframeHasLoaded)\u0026\u0026this.jsonWaiting.length\u0026\u0026(f=this.jsonWaiting.shift(),this.process(f),this.requestToProcess());a.idSyncDisableSyncs||a.disableIdSyncs||!this.iframeHasLoaded||!this.messages.length||this.sendingMessages||(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){d.messageSendingInterval=I?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(b,\nc){var f=a._getField(\"MCAAMLH\"),d=b.d_region||b.dcs_region;return f?d\u0026\u0026(a._setFieldExpire(\"MCAAMLH\",c),a._setField(\"MCAAMLH\",d),parseInt(f,10)!==d\u0026\u0026(this.regionChanged=!0,this.timesRegionChanged++,a._setField(\"MCSYNCSOP\",\"\"),a._setField(\"MCSYNCS\",\"\"),f=d)):(f=d)\u0026\u0026(a._setFieldExpire(\"MCAAMLH\",c),a._setField(\"MCAAMLH\",f)),f||(f=\"\"),f},processSyncOnPage:function(a){var b,c;if((b=a.ibs)\u0026\u0026b instanceof Array\u0026\u0026(c=b.length))for(a=0;a\u003Cc;a++){var d=b[a];d.syncOnPage\u0026\u0026this.checkFirstPartyCookie(d,\"\",\"syncOnPage\")}},\nprocess:function(a){var b,c,d,f=encodeURIComponent,g=!1;if((b=a.ibs)\u0026\u0026b instanceof Array\u0026\u0026(c=b.length))for(g=!0,d=0;d\u003Cc;d++){var h=b[d];var k=[f(\"ibs\"),f(h.id||\"\"),f(h.tag||\"\"),E.encodeAndBuildRequest(h.url||[],\",\"),f(h.ttl||\"\"),\"\",\"\",h.fireURLSync?\"true\":\"false\"];h.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(k.join(\"|\")):h.fireURLSync\u0026\u0026this.checkFirstPartyCookie(h,k.join(\"|\")))}g\u0026\u0026this.jsonProcessed.push(a)},checkFirstPartyCookie:function(b,c,f){var d=(f=\"syncOnPage\"===f)?\"MCSYNCSOP\":\n\"MCSYNCS\";a._readVisitor();var g,h,k=a._getField(d),m=!1,l=!1,z=Math.ceil((new Date).getTime()\/U);k?(g=k.split(\"*\"),h=this.pruneSyncData(g,b.id,z),m=h.dataPresent,l=h.dataValid,m\u0026\u0026l||this.fireSync(f,b,c,g,d,z)):(g=[],this.fireSync(f,b,c,g,d,z))},pruneSyncData:function(a,b,c){var d,f=!1,g=!1;for(d=0;d\u003Ca.length;d++){var h=a[d];var k=parseInt(h.split(\"-\")[1],10);h.match(\"^\"+b+\"-\")?(f=!0,c\u003Ck?g=!0:(a.splice(d,1),d--)):c\u003E=k\u0026\u0026(a.splice(d,1),d--)}return{dataPresent:f,dataValid:g}},manageSyncsSize:function(a){if(a.join(\"*\").length\u003E\nthis.MAX_SYNCS_LENGTH)for(a.sort(function(a,b){return parseInt(a.split(\"-\")[1],10)-parseInt(b.split(\"-\")[1],10)});a.join(\"*\").length\u003Ethis.MAX_SYNCS_LENGTH;)a.shift()},fireSync:function(b,c,f,d,g,h){var k=this;if(b){if(\"img\"===c.tag){var m=c.url,l=a.loadSSL?\"https:\":\"http:\";b=0;for(f=m.length;b\u003Cf;b++){d=m[b];var z=\/^\\\/\\\/\/.test(d);var t=new Image;t.addEventListener(\"load\",function(b,d,c,f){return function(){k.onPagePixels[b]=null;a._readVisitor();var h=a._getField(g);var m=[];if(h){h=h.split(\"*\");var l;\nvar z=0;for(l=h.length;z\u003Cl;z++){var B=h[z];B.match(\"^\"+d.id+\"-\")||m.push(B)}}k.setSyncTrackingData(m,d,c,f)}}(this.onPagePixels.length,c,g,h));t.src=(z?l:\"\")+d;this.onPagePixels.push(t)}}}else this.addMessage(f),this.setSyncTrackingData(d,c,g,h)},addMessage:function(b){var c=encodeURIComponent;c=c(a._enableErrorReporting?\"---destpub-debug---\":\"---destpub---\");this.messages.push((I?\"\":c)+b)},setSyncTrackingData:function(b,c,f,d){b.push(c.id+\"-\"+(d+Math.ceil(c.ttl\/60\/24)));this.manageSyncsSize(b);a._setField(f,\nb.join(\"*\"))},sendMessages:function(){var a,b=this,c=\"\",d=encodeURIComponent;this.regionChanged\u0026\u0026(c=d(\"---destpub-clear-dextp---\"),this.regionChanged=!1);this.messages.length?I?(a=c+d(\"---destpub-combined---\")+this.messages.join(\"%01\"),this.postMessage(a),this.messages=[],this.sendingMessages=!1):(a=this.messages.shift(),this.postMessage(c+a),setTimeout(function(){b.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(a){N.postMessage(a,this.url,this.iframe.contentWindow);\nthis.messagesPosted.push(a)},receiveMessage:function(a){var b,c=\/^---destpub-to-parent---\/;\"string\"==typeof a\u0026\u0026c.test(a)\u0026\u0026(b=a.replace(c,\"\").split(\"|\"),\"canSetThirdPartyCookies\"===b[0]\u0026\u0026(this.canSetThirdPartyCookies=\"true\"===b[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(a))},processIDCallData:function(f){(null==this.url||f.subdomain\u0026\u0026\"nosubdomainreturned\"===this.subdomain)\u0026\u0026(\"string\"==typeof a._subdomain\u0026\u0026a._subdomain.length?this.subdomain=\na._subdomain:this.subdomain=f.subdomain||\"\",this.url=this.getUrl());f.ibs instanceof Array\u0026\u0026f.ibs.length\u0026\u0026(this.doAttachIframe=!0);this.readyToAttachIframe()\u0026\u0026(a.idSyncAttachIframeOnWindowLoad?(b.windowLoaded||\"complete\"===c.readyState||\"loaded\"===c.readyState)\u0026\u0026this.attachIframe():this.attachIframeASAP());\"function\"==typeof a.idSyncIDCallResult?a.idSyncIDCallResult(f):this.requestToProcess(f);\"function\"==typeof a.idSyncAfterIDCallResult\u0026\u0026a.idSyncAfterIDCallResult(f)},canMakeSyncIDCall:function(b,\nc){return a._forceSyncIDCall||!b||c-b\u003Epa},attachIframeASAP:function(){function a(){b.startedAttachingIframe||(c.body?b.attachIframe():setTimeout(a,30))}var b=this;a()}}},Y={audienceManagerServer:{},audienceManagerServerSecure:{},cookieDomain:{},cookieLifetime:{},cookieName:{},disableThirdPartyCalls:{},idSyncAfterIDCallResult:{},idSyncAttachIframeOnWindowLoad:{},idSyncContainerID:{},idSyncDisable3rdPartySyncing:{},disableThirdPartyCookies:{},idSyncDisableSyncs:{},disableIdSyncs:{},idSyncIDCallResult:{},\nidSyncSSLUseAkamai:{},isCoopSafe:{},loadSSL:{},loadTimeout:{},marketingCloudServer:{},marketingCloudServerSecure:{},overwriteCrossDomainMCIDAndAID:{},resetBeforeVersion:{},sdidParamExpiry:{},serverState:{},sessionCookieName:{},secureCookie:{},takeTimeoutMetrics:{},trackingServer:{},trackingServerSecure:{},whitelistIframeDomains:{},whitelistParentDomain:{}};b={getConfigNames:function(){return Object.keys(Y)},getConfigs:function(){return Y}};var H=function(a,b,c){function f(a){var b=a;return function(a){a=\na||t.location.href;try{var c=d._extractParamFromUri(a,b);if(c)return x.parsePipeDelimetedKeyValues(c)}catch(va){}}}function k(a){a=a||{};d._supplementalDataIDCurrent=a.supplementalDataIDCurrent||\"\";d._supplementalDataIDCurrentConsumed=a.supplementalDataIDCurrentConsumed||{};d._supplementalDataIDLast=a.supplementalDataIDLast||\"\";d._supplementalDataIDLastConsumed=a.supplementalDataIDLastConsumed||{}}function z(a){function b(a,b){var d=b[0],c=b[1];if(null!=c\u0026\u0026c!==D){var f=a;a=d=(f=f?f+=\"|\":f,f+(d+\"\\x3d\"+\nencodeURIComponent(c)))}return a}a=a.reduce(b,\"\");return function(a){var b=x.getTimestampInSeconds();return a=a?a+=\"|\":a,a+(\"TS\\x3d\"+b)}(a)}if(!c||c.split(\"\").reverse().join(\"\")!==a)throw Error(\"Please use `Visitor.getInstance` to instantiate Visitor.\");var d=this;d.version=\"3.4.0\";var t=l,n=t.Visitor;n.version=d.version;n.AuthState=h;n.OptOut=m;t.s_c_in||(t.s_c_il=[],t.s_c_in=0);d._c=\"Visitor\";d._il=t.s_c_il;d._in=t.s_c_in;d._il[d._in]=d;t.s_c_in++;d._instanceType=\"regular\";d._log={requests:[]};\nd.marketingCloudOrgID=a;d.cookieName=\"AMCV_\"+a;d.sessionCookieName=\"AMCVS_\"+a;d.cookieDomain=ma();d.cookieDomain===t.location.hostname\u0026\u0026(d.cookieDomain=\"\");d.loadSSL=0\u003C=t.location.protocol.toLowerCase().indexOf(\"https\");d.loadTimeout=3E4;d.CORSErrors=[];d.marketingCloudServer=d.audienceManagerServer=\"dpm.demdex.net\";d.sdidParamExpiry=30;var u=t.document,G=null,p=\"MCMID\",v=\"MCIDTS\",r=\"A\",q=\"MCAID\",w=\"AAM\",C=\"MCAAMB\",D=\"NONE\",y=oa(d);d.FIELDS=g;d.cookieRead=function(a){a=encodeURIComponent(a);var b=\n(\";\"+u.cookie).split(\" \").join(\";\"),d=b.indexOf(\";\"+a+\"\\x3d\"),c=0\u003Ed?d:b.indexOf(\";\",d+1);return 0\u003Ed?\"\":decodeURIComponent(b.substring(d+2+a.length,0\u003Ec?b.length:c))};d.cookieWrite=function(a,b,c){var f,g=d.cookieLifetime,B=\"\";(b=\"\"+b,g=g?(\"\"+g).toUpperCase():\"\",c\u0026\u0026\"SESSION\"!==g\u0026\u0026\"NONE\"!==g)?(f=\"\"!==b?parseInt(g||0,10):-60)?(c=new Date,c.setTime(c.getTime()+1E3*f)):1===c\u0026\u0026(c=new Date,f=c.getYear(),c.setYear(f+2+(1900\u003Ef?1900:0))):c=0;return a\u0026\u0026\"NONE\"!==g?(d.configs\u0026\u0026d.configs.secureCookie\u0026\u0026\"https:\"===\nlocation.protocol\u0026\u0026(B=\"Secure\"),u.cookie=encodeURIComponent(a)+\"\\x3d\"+encodeURIComponent(b)+\"; path\\x3d\/;\"+(c?\" expires\\x3d\"+c.toGMTString()+\";\":\"\")+(d.cookieDomain?\" domain\\x3d\"+d.cookieDomain+\";\":\"\")+B,d.cookieRead(a)===b):0};d.resetState=function(a){a?d._mergeServerState(a):k()};d._isAllowedDone=!1;d._isAllowedFlag=!1;d.isAllowed=function(){return d._isAllowedDone||(d._isAllowedDone=!0,(d.cookieRead(d.cookieName)||d.cookieWrite(d.cookieName,\"T\",1))\u0026\u0026(d._isAllowedFlag=!0)),d._isAllowedFlag};d.setMarketingCloudVisitorID=\nfunction(a){d._setMarketingCloudFields(a)};d._use1stPartyMarketingCloudServer=!1;d.getMarketingCloudVisitorID=function(a,b){if(d.isAllowed()){d.marketingCloudServer\u0026\u00260\u003Ed.marketingCloudServer.indexOf(\".demdex.net\")\u0026\u0026(d._use1stPartyMarketingCloudServer=!0);var c=d._getAudienceManagerURLData(\"_setMarketingCloudFields\"),f=c.url;return d._getRemoteField(p,f,a,b,c)}return\"\"};d.getVisitorValues=function(a,b){var c={MCMID:{fn:d.getMarketingCloudVisitorID,args:[!0],context:d},MCOPTOUT:{fn:d.isOptedOut,args:[void 0,\n!0],context:d},MCAID:{fn:d.getAnalyticsVisitorID,args:[!0],context:d},MCAAMLH:{fn:d.getAudienceManagerLocationHint,args:[!0],context:d},MCAAMB:{fn:d.getAudienceManagerBlob,args:[!0],context:d}};c=b\u0026\u0026b.length?x.pluck(c,b):c;la(c,a)};d._currentCustomerIDs={};d._customerIDsHashChanged=!1;d._newCustomerIDsHash=\"\";d.setCustomerIDs=function(a){function b(){d._customerIDsHashChanged=!1}if(d.isAllowed()\u0026\u0026a){if(!E.isObject(a)||E.isObjectEmpty(a))return!1;d._readVisitor();var c,f;for(c in a)if(!Object.prototype[c]\u0026\u0026\n(f=a[c]))if(\"object\"==typeof f){var g={};f.id\u0026\u0026(g.id=f.id);void 0!=f.authState\u0026\u0026(g.authState=f.authState);d._currentCustomerIDs[c]=g}else d._currentCustomerIDs[c]={id:f};a=d.getCustomerIDs();g=d._getField(\"MCCIDH\");var B=\"\";g||(g=0);for(c in a)!Object.prototype[c]\u0026\u0026(f=a[c],B+=(B?\"|\":\"\")+c+\"|\"+(f.id?f.id:\"\")+(f.authState?f.authState:\"\"));d._newCustomerIDsHash=String(d._hash(B));d._newCustomerIDsHash!==g\u0026\u0026(d._customerIDsHashChanged=!0,d._mapCustomerIDs(b))}};d.getCustomerIDs=function(){d._readVisitor();\nvar a,b,c={};for(a in d._currentCustomerIDs)!Object.prototype[a]\u0026\u0026(b=d._currentCustomerIDs[a],c[a]||(c[a]={}),b.id\u0026\u0026(c[a].id=b.id),void 0!=b.authState?c[a].authState=b.authState:c[a].authState=n.AuthState.UNKNOWN);return c};d.setAnalyticsVisitorID=function(a){d._setAnalyticsFields(a)};d.getAnalyticsVisitorID=function(a,b,c){if(!x.isTrackingServerPopulated()\u0026\u0026!c)return d._callCallback(a,[\"\"]),\"\";if(d.isAllowed()){var f=\"\";if(c||(f=d.getMarketingCloudVisitorID(function(b){d.getAnalyticsVisitorID(a,\n!0)})),f||c){var g=c?d.marketingCloudServer:d.trackingServer,B=\"\";d.loadSSL\u0026\u0026(c?d.marketingCloudServerSecure\u0026\u0026(g=d.marketingCloudServerSecure):d.trackingServerSecure\u0026\u0026(g=d.trackingServerSecure));var h={};if(g){g=\"http\"+(d.loadSSL?\"s\":\"\")+\":\/\/\"+g+\"\/id\";f=\"d_visid_ver\\x3d\"+d.version+\"\\x26mcorgid\\x3d\"+encodeURIComponent(d.marketingCloudOrgID)+(f?\"\\x26mid\\x3d\"+encodeURIComponent(f):\"\")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?\"\\x26d_coppa\\x3dtrue\":\"\");var k=[\"s_c_il\",d._in,\"_set\"+(c?\n\"MarketingCloud\":\"Analytics\")+\"Fields\"];B=g+\"?\"+f+\"\\x26callback\\x3ds_c_il%5B\"+d._in+\"%5D._set\"+(c?\"MarketingCloud\":\"Analytics\")+\"Fields\";h.corsUrl=g+\"?\"+f;h.callback=k}return h.url=B,d._getRemoteField(c?p:q,B,a,b,h)}}return\"\"};d.getAudienceManagerLocationHint=function(a,b){if(d.isAllowed()\u0026\u0026d.getMarketingCloudVisitorID(function(b){d.getAudienceManagerLocationHint(a,!0)})){var c=d._getField(q);if(!c\u0026\u0026x.isTrackingServerPopulated()\u0026\u0026(c=d.getAnalyticsVisitorID(function(b){d.getAudienceManagerLocationHint(a,\n!0)})),c||!x.isTrackingServerPopulated()){c=d._getAudienceManagerURLData();var f=c.url;return d._getRemoteField(\"MCAAMLH\",f,a,b,c)}}return\"\"};d.getLocationHint=d.getAudienceManagerLocationHint;d.getAudienceManagerBlob=function(a,b){if(d.isAllowed()\u0026\u0026d.getMarketingCloudVisitorID(function(b){d.getAudienceManagerBlob(a,!0)})){var c=d._getField(q);if(!c\u0026\u0026x.isTrackingServerPopulated()\u0026\u0026(c=d.getAnalyticsVisitorID(function(b){d.getAudienceManagerBlob(a,!0)})),c||!x.isTrackingServerPopulated()){c=d._getAudienceManagerURLData();\nvar f=c.url;return d._customerIDsHashChanged\u0026\u0026d._setFieldExpire(C,-1),d._getRemoteField(C,f,a,b,c)}}return\"\"};d._supplementalDataIDCurrent=\"\";d._supplementalDataIDCurrentConsumed={};d._supplementalDataIDLast=\"\";d._supplementalDataIDLastConsumed={};d.getSupplementalDataID=function(a,b){d._supplementalDataIDCurrent||b||(d._supplementalDataIDCurrent=d._generateID(1));var c=d._supplementalDataIDCurrent;return d._supplementalDataIDLast\u0026\u0026!d._supplementalDataIDLastConsumed[a]?(c=d._supplementalDataIDLast,\nd._supplementalDataIDLastConsumed[a]=!0):c\u0026\u0026(d._supplementalDataIDCurrentConsumed[a]\u0026\u0026(d._supplementalDataIDLast=d._supplementalDataIDCurrent,d._supplementalDataIDLastConsumed=d._supplementalDataIDCurrentConsumed,d._supplementalDataIDCurrent=c=b?\"\":d._generateID(1),d._supplementalDataIDCurrentConsumed={}),c\u0026\u0026(d._supplementalDataIDCurrentConsumed[a]=!0)),c};d.getOptOut=function(a,b){if(d.isAllowed()){var c=d._getAudienceManagerURLData(\"_setMarketingCloudFields\"),f=c.url;return d._getRemoteField(\"MCOPTOUT\",\nf,a,b,c)}return\"\"};d.isOptedOut=function(a,b,c){return d.isAllowed()?(b||(b=n.OptOut.GLOBAL),(c=d.getOptOut(function(c){c=c===n.OptOut.GLOBAL||0\u003C=c.indexOf(b);d._callCallback(a,[c])},c))?c===n.OptOut.GLOBAL||0\u003C=c.indexOf(b):null):!1};d._fields=null;d._fieldsExpired=null;d._hash=function(a){var b,c=0;if(a)for(b=0;b\u003Ca.length;b++){var d=a.charCodeAt(b);c=(c\u003C\u003C5)-c+d;c\u0026=c}return c};d._generateID=na;d._generateLocalMID=function(){var a=d._generateID(0);return A.isClientSideMarketingCloudVisitorID=!0,a};\nd._callbackList=null;d._callCallback=function(a,b){try{\"function\"==typeof a?a.apply(t,b):a[1].apply(a[0],b)}catch(Z){}};d._registerCallback=function(a,b){b\u0026\u0026(null==d._callbackList\u0026\u0026(d._callbackList={}),void 0==d._callbackList[a]\u0026\u0026(d._callbackList[a]=[]),d._callbackList[a].push(b))};d._callAllCallbacks=function(a,b){if(null!=d._callbackList){var c=d._callbackList[a];if(c)for(;0\u003Cc.length;)d._callCallback(c.shift(),b)}};d._addQuerystringParam=function(a,b,c,d){b=encodeURIComponent(b)+\"\\x3d\"+encodeURIComponent(c);\nc=x.parseHash(a);a=x.hashlessUrl(a);if(-1===a.indexOf(\"?\"))return a+\"?\"+b+c;var f=a.split(\"?\");a=f[0]+\"?\";f=f[1];return a+x.addQueryParamAtLocation(f,b,d)+c};d._extractParamFromUri=function(a,b){var c=new RegExp(\"[\\\\?\\x26#]\"+b+\"\\x3d([^\\x26#]*)\");if((c=c.exec(a))\u0026\u0026c.length)return decodeURIComponent(c[1])};d._parseAdobeMcFromUrl=f(V);d._parseAdobeMcSdidFromUrl=f(W);d._attemptToPopulateSdidFromUrl=function(b){b=d._parseAdobeMcSdidFromUrl(b);var c=1E9;b\u0026\u0026b.TS\u0026\u0026(c=x.getTimestampInSeconds()-b.TS);b\u0026\u0026b.SDID\u0026\u0026\nb.MCORGID===a\u0026\u0026c\u003Cd.sdidParamExpiry\u0026\u0026(d._supplementalDataIDCurrent=b.SDID,d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)};d._attemptToPopulateIdsFromUrl=function(){var b=d._parseAdobeMcFromUrl();if(b\u0026\u0026b.TS){var c=x.getTimestampInSeconds();c-=b.TS;if(!(Math.floor(c\/60)\u003Eqa||b.MCORGID!==a)){c=b[p];var f=d.setMarketingCloudVisitorID;c\u0026\u0026c.match(M)\u0026\u0026f(c);d._setFieldExpire(C,-1);b=b[q];c=d.setAnalyticsVisitorID;b\u0026\u0026b.match(M)\u0026\u0026c(b)}}};d._mergeServerState=function(a){if(a)try{if(a=function(a){return x.isObject(a)?\na:JSON.parse(a)}(a),a[d.marketingCloudOrgID]){var b=a[d.marketingCloudOrgID];!function(a){x.isObject(a)\u0026\u0026d.setCustomerIDs(a)}(b.customerIDs);k(b.sdid)}}catch(Z){throw Error(\"`serverState` has an invalid format.\");}};d._timeout=null;d._loadData=function(a,b,c,f){d._addQuerystringParam(b,\"d_fieldgroup\",a,1);f.url=d._addQuerystringParam(f.url,\"d_fieldgroup\",a,1);f.corsUrl=d._addQuerystringParam(f.corsUrl,\"d_fieldgroup\",a,1);A.fieldGroupObj[a]=!0;f===Object(f)\u0026\u0026f.corsUrl\u0026\u0026\"XMLHttpRequest\"===y.corsMetadata.corsType\u0026\u0026\ny.fireCORS(f,c,a)};d._clearTimeout=function(a){null!=d._timeout\u0026\u0026d._timeout[a]\u0026\u0026(clearTimeout(d._timeout[a]),d._timeout[a]=0)};d._settingsDigest=0;d._getSettingsDigest=function(){if(!d._settingsDigest){var a=d.version;d.audienceManagerServer\u0026\u0026(a+=\"|\"+d.audienceManagerServer);d.audienceManagerServerSecure\u0026\u0026(a+=\"|\"+d.audienceManagerServerSecure);d._settingsDigest=d._hash(a)}return d._settingsDigest};d._readVisitorDone=!1;d._readVisitor=function(){if(!d._readVisitorDone){d._readVisitorDone=!0;var a,\nb,c;var f=d._getSettingsDigest();var g=!1,h=d.cookieRead(d.cookieName),k=new Date;if(null==d._fields\u0026\u0026(d._fields={}),h\u0026\u0026\"T\"!==h)for(h=h.split(\"|\"),h[0].match(\/^[\\-0-9]+$\/)\u0026\u0026(parseInt(h[0],10)!==f\u0026\u0026(g=!0),h.shift()),1==h.length%2\u0026\u0026h.pop(),a=0;a\u003Ch.length;a+=2){f=h[a].split(\"-\");var m=f[0];var l=h[a+1];1\u003Cf.length?(b=parseInt(f[1],10),c=0\u003Cf[1].indexOf(\"s\")):(b=0,c=!1);g\u0026\u0026(\"MCCIDH\"===m\u0026\u0026(l=\"\"),0\u003Cb\u0026\u0026(b=k.getTime()\/1E3-60));m\u0026\u0026l\u0026\u0026(d._setField(m,l,1),0\u003Cb\u0026\u0026(d._fields[\"expire\"+m]=b+(c?\"s\":\"\"),(k.getTime()\u003E=\n1E3*b||c\u0026\u0026!d.cookieRead(d.sessionCookieName))\u0026\u0026(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[m]=!0)))}!d._getField(q)\u0026\u0026x.isTrackingServerPopulated()\u0026\u0026(h=d.cookieRead(\"s_vi\"))\u0026\u0026(h=h.split(\"|\"),1\u003Ch.length\u0026\u00260\u003C=h[0].indexOf(\"v1\")\u0026\u0026(l=h[1],a=l.indexOf(\"[\"),0\u003C=a\u0026\u0026(l=l.substring(0,a)),l\u0026\u0026l.match(M)\u0026\u0026d._setField(q,l)))}};d._appendVersionTo=function(a){var b=\"vVersion|\"+d.version,c=a?d._getCookieVersion(a):null;return c?S.areVersionsDifferent(c,d.version)\u0026\u0026(a=a.replace(X,b)):a+=(a?\"|\":\"\")+b,a};\nd._writeVisitor=function(){var a,b,c=d._getSettingsDigest();for(a in d._fields)!Object.prototype[a]\u0026\u0026d._fields[a]\u0026\u0026\"expire\"!==a.substring(0,6)\u0026\u0026(b=d._fields[a],c+=(c?\"|\":\"\")+a+(d._fields[\"expire\"+a]?\"-\"+d._fields[\"expire\"+a]:\"\")+\"|\"+b);c=d._appendVersionTo(c);d.cookieWrite(d.cookieName,c,1)};d._getField=function(a,b){return null==d._fields||!b\u0026\u0026d._fieldsExpired\u0026\u0026d._fieldsExpired[a]?null:d._fields[a]};d._setField=function(a,b,c){null==d._fields\u0026\u0026(d._fields={});d._fields[a]=b;c||d._writeVisitor()};\nd._getFieldList=function(a,b){var c=d._getField(a,b);return c?c.split(\"*\"):null};d._setFieldList=function(a,b,c){d._setField(a,b?b.join(\"*\"):\"\",c)};d._getFieldMap=function(a,b){var c=d._getFieldList(a,b);if(c){var f,g={};for(f=0;f\u003Cc.length;f+=2)g[c[f]]=c[f+1];return g}return null};d._setFieldMap=function(a,b,c){var f,g=null;if(b)for(f in g=[],b)!Object.prototype[f]\u0026\u0026(g.push(f),g.push(b[f]));d._setFieldList(a,g,c)};d._setFieldExpire=function(a,b,c){var f=new Date;f.setTime(f.getTime()+1E3*b);null==\nd._fields\u0026\u0026(d._fields={});d._fields[\"expire\"+a]=Math.floor(f.getTime()\/1E3)+(c?\"s\":\"\");0\u003Eb?(d._fieldsExpired||(d._fieldsExpired={}),d._fieldsExpired[a]=!0):d._fieldsExpired\u0026\u0026(d._fieldsExpired[a]=!1);c\u0026\u0026(d.cookieRead(d.sessionCookieName)||d.cookieWrite(d.sessionCookieName,\"1\"))};d._findVisitorID=function(a){return a\u0026\u0026(\"object\"==typeof a\u0026\u0026(a=a.d_mid?a.d_mid:a.visitorID?a.visitorID:a.id?a.id:a.uuid?a.uuid:\"\"+a),a\u0026\u0026\"NOTARGET\"===(a=a.toUpperCase())\u0026\u0026(a=D),a\u0026\u0026(a===D||a.match(M))||(a=\"\")),a};d._setFields=\nfunction(a,b){if(d._clearTimeout(a),null!=d._loading\u0026\u0026(d._loading[a]=!1),A.fieldGroupObj[a]\u0026\u0026A.setState(a,!1),\"MC\"===a){!0!==A.isClientSideMarketingCloudVisitorID\u0026\u0026(A.isClientSideMarketingCloudVisitorID=!1);var c=d._getField(p);if(!c||d.overwriteCrossDomainMCIDAndAID){if(!(c=\"object\"==typeof b\u0026\u0026b.mid?b.mid:d._findVisitorID(b))){if(d._use1stPartyMarketingCloudServer\u0026\u0026!d.tried1stPartyMarketingCloudServer)return d.tried1stPartyMarketingCloudServer=!0,void d.getAnalyticsVisitorID(null,!1,!0);c=d._generateLocalMID()}d._setField(p,\nc)}c\u0026\u0026c!==D||(c=\"\");\"object\"==typeof b\u0026\u0026((b.d_region||b.dcs_region||b.d_blob||b.blob)\u0026\u0026d._setFields(w,b),d._use1stPartyMarketingCloudServer\u0026\u0026b.mid\u0026\u0026d._setFields(r,{id:b.id}));d._callAllCallbacks(p,[c])}if(a===w\u0026\u0026\"object\"==typeof b){c=604800;void 0!=b.id_sync_ttl\u0026\u0026b.id_sync_ttl\u0026\u0026(c=parseInt(b.id_sync_ttl,10));var f=F.getRegionAndCheckIfChanged(b,c);d._callAllCallbacks(\"MCAAMLH\",[f]);f=d._getField(C);(b.d_blob||b.blob)\u0026\u0026(f=b.d_blob,f||(f=b.blob),d._setFieldExpire(C,c),d._setField(C,f));f||(f=\"\");d._callAllCallbacks(C,\n[f]);!b.error_msg\u0026\u0026d._newCustomerIDsHash\u0026\u0026d._setField(\"MCCIDH\",d._newCustomerIDsHash)}a===r\u0026\u0026((c=d._getField(q))\u0026\u0026!d.overwriteCrossDomainMCIDAndAID||(c=d._findVisitorID(b),c?c!==D\u0026\u0026d._setFieldExpire(C,-1):c=D,d._setField(q,c)),c\u0026\u0026c!==D||(c=\"\"),d._callAllCallbacks(q,[c]));d.idSyncDisableSyncs||d.disableIdSyncs?F.idCallNotProcesssed=!0:(F.idCallNotProcesssed=!1,c={},c.ibs=b.ibs,c.subdomain=b.subdomain,F.processIDCallData(c));if(b===Object(b)){var g,h;d.isAllowed()\u0026\u0026(g=d._getField(\"MCOPTOUT\"));g||(g=\nD,b.d_optout\u0026\u0026b.d_optout instanceof Array\u0026\u0026(g=b.d_optout.join(\",\")),h=parseInt(b.d_ottl,10),isNaN(h)\u0026\u0026(h=7200),d._setFieldExpire(\"MCOPTOUT\",h,!0),d._setField(\"MCOPTOUT\",g));d._callAllCallbacks(\"MCOPTOUT\",[g])}};d._loading=null;d._getRemoteField=function(a,b,c,f,g){var h,k=\"\",m=x.isFirstPartyAnalyticsVisitorIDCall(a),B={MCAAMLH:!0,MCAAMB:!0};if(d.isAllowed())if(d._readVisitor(),k=d._getField(a,!0===B[a]),!(!k||d._fieldsExpired\u0026\u0026d._fieldsExpired[a])||d.disableThirdPartyCalls\u0026\u0026!m)k||(a===p?(d._registerCallback(a,\nc),k=d._generateLocalMID(),d.setMarketingCloudVisitorID(k)):a===q?(d._registerCallback(a,c),k=\"\",d.setAnalyticsVisitorID(k)):(k=\"\",f=!0));else if(a===p||\"MCOPTOUT\"===a?h=\"MC\":\"MCAAMLH\"===a||a===C?h=w:a===q\u0026\u0026(h=r),h)return!b||null!=d._loading\u0026\u0026d._loading[h]||(null==d._loading\u0026\u0026(d._loading={}),d._loading[h]=!0,d._loadData(h,b,function(b){d._getField(a)||(b\u0026\u0026A.setState(h,!0),b=\"\",a===p?b=d._generateLocalMID():h===w\u0026\u0026(b={error_msg:\"timeout\"}),d._setFields(h,b))},g)),d._registerCallback(a,c),k||(b||d._setFields(h,\n{id:D}),\"\");return a!==p\u0026\u0026a!==q||k!==D||(k=\"\",f=!0),c\u0026\u0026f\u0026\u0026d._callCallback(c,[k]),k};d._setMarketingCloudFields=function(a){d._readVisitor();d._setFields(\"MC\",a)};d._mapCustomerIDs=function(a){d.getAudienceManagerBlob(a,!0)};d._setAnalyticsFields=function(a){d._readVisitor();d._setFields(r,a)};d._setAudienceManagerFields=function(a){d._readVisitor();d._setFields(w,a)};d._getAudienceManagerURLData=function(a){var b=d.audienceManagerServer,c=\"\",f=d._getField(p),g=d._getField(C,!0),h=d._getField(q);h=\nh\u0026\u0026h!==D?\"\\x26d_cid_ic\\x3dAVID%01\"+encodeURIComponent(h):\"\";if(d.loadSSL\u0026\u0026d.audienceManagerServerSecure\u0026\u0026(b=d.audienceManagerServerSecure),b){var k,m,l=d.getCustomerIDs();if(l)for(k in l)!Object.prototype[k]\u0026\u0026(m=l[k],h+=\"\\x26d_cid_ic\\x3d\"+encodeURIComponent(k)+\"%01\"+encodeURIComponent(m.id?m.id:\"\")+(m.authState?\"%01\"+m.authState:\"\"));a||(a=\"_setAudienceManagerFields\");b=\"http\"+(d.loadSSL?\"s\":\"\")+\":\/\/\"+b+\"\/id\";f=\"d_visid_ver\\x3d\"+d.version+\"\\x26d_rtbd\\x3djson\\x26d_ver\\x3d2\"+(!f\u0026\u0026d._use1stPartyMarketingCloudServer?\n\"\\x26d_verify\\x3d1\":\"\")+\"\\x26d_orgid\\x3d\"+encodeURIComponent(d.marketingCloudOrgID)+\"\\x26d_nsid\\x3d\"+(d.idSyncContainerID||0)+(f?\"\\x26d_mid\\x3d\"+encodeURIComponent(f):\"\")+(d.idSyncDisable3rdPartySyncing||d.disableThirdPartyCookies?\"\\x26d_coppa\\x3dtrue\":\"\")+(!0===G?\"\\x26d_coop_safe\\x3d1\":!1===G?\"\\x26d_coop_unsafe\\x3d1\":\"\")+(g?\"\\x26d_blob\\x3d\"+encodeURIComponent(g):\"\")+h;g=[\"s_c_il\",d._in,a];return c=b+\"?\"+f+\"\\x26d_cb\\x3ds_c_il%5B\"+d._in+\"%5D.\"+a,{url:c,corsUrl:b+\"?\"+f,callback:g}}return{url:c}};d.appendVisitorIDsTo=\nfunction(a){try{var b=[[p,d._getField(p)],[q,d._getField(q)],[\"MCORGID\",d.marketingCloudOrgID]];return d._addQuerystringParam(a,V,z(b))}catch(Z){return a}};d.appendSupplementalDataIDTo=function(a,b){if(!(b=b||d.getSupplementalDataID(x.generateRandomString(),!0)))return a;try{var c=z([[\"SDID\",b],[\"MCORGID\",d.marketingCloudOrgID]]);return d._addQuerystringParam(a,W,c)}catch(ua){return a}};var x={parseHash:function(a){var b=a.indexOf(\"#\");return 0\u003Cb?a.substr(b):\"\"},hashlessUrl:function(a){var b=a.indexOf(\"#\");\nreturn 0\u003Cb?a.substr(0,b):a},addQueryParamAtLocation:function(a,b,c){a=a.split(\"\\x26\");return c=null!=c?c:a.length,a.splice(c,0,b),a.join(\"\\x26\")},isFirstPartyAnalyticsVisitorIDCall:function(a,b,c){if(a!==q)return!1;var f;return b||(b=d.trackingServer),c||(c=d.trackingServerSecure),!(\"string\"!=typeof(f=d.loadSSL?c:b)||!f.length)\u0026\u00260\u003Ef.indexOf(\"2o7.net\")\u0026\u00260\u003Ef.indexOf(\"omtrdc.net\")},isObject:function(a){return!(!a||a!==Object(a))},removeCookie:function(a){document.cookie=encodeURIComponent(a)+\"\\x3d; Path\\x3d\/; Expires\\x3dThu, 01 Jan 1970 00:00:01 GMT;\"+\n(d.cookieDomain?\" domain\\x3d\"+d.cookieDomain+\";\":\"\")},isTrackingServerPopulated:function(){return!!d.trackingServer||!!d.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()\/1E3)},parsePipeDelimetedKeyValues:function(a){return a.split(\"|\").reduce(function(a,b){var c=b.split(\"\\x3d\");return a[c[0]]=decodeURIComponent(c[1]),a},{})},generateRandomString:function(a){a=a||5;for(var b=\"\",c=\"abcdefghijklmnopqrstuvwxyz0123456789\";a--;)b+=c[Math.floor(Math.random()*\nc.length)];return b},normalizeBoolean:function(a){return\"true\"===a||\"false\"!==a\u0026\u0026a},parseBoolean:function(a){return\"true\"===a||\"false\"!==a\u0026\u0026null},replaceMethodsWithFunction:function(a,b){for(var c in a)a.hasOwnProperty(c)\u0026\u0026\"function\"==typeof a[c]\u0026\u0026(a[c]=b);return a},pluck:function(a,b){return b.reduce(function(b,c){return a[c]\u0026\u0026(b[c]=a[c]),b},Object.create(null))}};d._helpers=x;var F=ra(d,n);d._destinationPublishing=F;d.timeoutMetricsLog=[];var A={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,\nAnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(a,b){switch(a){case \"MC\":!1===b?!0!==this.MCIDCallTimedOut\u0026\u0026(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=b;break;case r:!1===b?!0!==this.AnalyticsIDCallTimedOut\u0026\u0026(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=b;break;case w:!1===b?!0!==this.AAMIDCallTimedOut\u0026\u0026(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=b}}};d.isClientSideMarketingCloudVisitorID=function(){return A.isClientSideMarketingCloudVisitorID};\nd.MCIDCallTimedOut=function(){return A.MCIDCallTimedOut};d.AnalyticsIDCallTimedOut=function(){return A.AnalyticsIDCallTimedOut};d.AAMIDCallTimedOut=function(){return A.AAMIDCallTimedOut};d.idSyncGetOnPageSyncInfo=function(){return d._readVisitor(),d._getField(\"MCSYNCSOP\")};d.idSyncByURL=function(a){var b=a||{};var c=b.minutesToLive,f=\"\";b=((d.idSyncDisableSyncs||d.disableIdSyncs)\u0026\u0026(f=f||\"Error: id syncs have been disabled\"),\"string\"==typeof b.dpid\u0026\u0026b.dpid.length||(f=f||\"Error: config.dpid is empty\"),\n\"string\"==typeof b.url\u0026\u0026b.url.length||(f=f||\"Error: config.url is empty\"),void 0===c?c=20160:(c=parseInt(c,10),(isNaN(c)||0\u003E=c)\u0026\u0026(f=f||\"Error: config.minutesToLive needs to be a positive number\")),{error:f,ttl:c});if(b.error)return b.error;var g,h;c=a.url;f=encodeURIComponent;var k=F;return c=c.replace(\/^https:\/,\"\").replace(\/^http:\/,\"\"),g=E.encodeAndBuildRequest([\"\",a.dpid,a.dpuuid||\"\"],\",\"),h=[\"ibs\",f(a.dpid),\"img\",f(c),b.ttl,\"\",g],k.addMessage(h.join(\"|\")),k.requestToProcess(),\"Successfully queued\"};\nd.idSyncByDataSource=function(a){return a===Object(a)\u0026\u0026\"string\"==typeof a.dpuuid\u0026\u0026a.dpuuid.length?(a.url=\"\/\/dpm.demdex.net\/ibs:dpid\\x3d\"+a.dpid+\"\\x26dpuuid\\x3d\"+a.dpuuid,d.idSyncByURL(a)):\"Error: config or config.dpuuid is empty\"};d.publishDestinations=function(a,b,c){if(c=\"function\"==typeof c?c:function(){},\"string\"!=typeof a||!a.length)return void c({error:\"subdomain is not a populated string.\"});if(!(b instanceof Array\u0026\u0026b.length))return void c({error:\"messages is not a populated array.\"});var f=\nF;if(!f.readyToAttachIframePreliminary())return void c({error:\"The destination publishing iframe is disabled in the Visitor library.\"});var g=!1;if(b.forEach(function(a){\"string\"==typeof a\u0026\u0026a.length\u0026\u0026(f.addMessage(a),g=!0)}),!g)return void c({error:\"None of the messages are populated strings.\"});f.iframe?(c({message:\"The destination publishing iframe is already attached and loaded.\"}),f.requestToProcess()):!d.subdomain\u0026\u0026d._getField(p)?(f.subdomain=a,f.doAttachIframe=!0,f.url=f.getUrl(),f.readyToAttachIframe()?\n(f.iframeLoadedCallbacks.push(function(a){c({message:\"Attempted to attach and load the destination publishing iframe through this API call. Result: \"+(a.message||\"no result\")})}),f.attachIframe()):c({error:\"Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.\"})):f.iframeLoadedCallbacks.push(function(a){c({message:\"Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: \"+(a.message||\"no result\")})})};\nd._getCookieVersion=function(a){a=a||d.cookieRead(d.cookieName);return(a=X.exec(a))\u0026\u00261\u003Ca.length?a[1]:null};d._resetAmcvCookie=function(a){var b=d._getCookieVersion();b\u0026\u0026!S.isLessThan(b,a)||x.removeCookie(d.cookieName)};d.setAsCoopSafe=function(){G=!0};d.setAsCoopUnsafe=function(){G=!1};d.init=function(){!function(){var a=null;if(b\u0026\u0026\"object\"==typeof b){d.configs=Object.create(null);for(var c in b)!Object.prototype[c]\u0026\u0026(a=x.normalizeBoolean(b[c]),d[c]=a,d.configs[c]=a);d.idSyncContainerID=d.idSyncContainerID||\n0;G=\"boolean\"==typeof d.isCoopSafe?d.isCoopSafe:x.parseBoolean(d.isCoopSafe);d.resetBeforeVersion\u0026\u0026d._resetAmcvCookie(d.resetBeforeVersion);d._attemptToPopulateIdsFromUrl();d._attemptToPopulateSdidFromUrl();d._readVisitor();a=d._getField(v);c=Math.ceil((new Date).getTime()\/U);d.idSyncDisableSyncs||d.disableIdSyncs||!F.canMakeSyncIDCall(a,c)||(d._setFieldExpire(C,-1),d._setField(v,c));d.getMarketingCloudVisitorID();d.getAudienceManagerLocationHint();d.getAudienceManagerBlob();d._mergeServerState(d.serverState)}else d._attemptToPopulateIdsFromUrl(),\nd._attemptToPopulateSdidFromUrl()}();(function(){if(!d.idSyncDisableSyncs\u0026\u0026!d.disableIdSyncs){F.checkDPIframeSrc();t.addEventListener(\"load\",function(){n.windowLoaded=!0;var a=F;a.readyToAttachIframe()\u0026\u0026a.attachIframe()});try{N.receiveMessage(function(a){F.receiveMessage(a.data)},F.iframeHost)}catch(B){}}})();(function(){d.whitelistIframeDomains\u0026\u0026I\u0026\u0026(d.whitelistIframeDomains=d.whitelistIframeDomains instanceof Array?d.whitelistIframeDomains:[d.whitelistIframeDomains],d.whitelistIframeDomains.forEach(function(b){var c=\nnew P(a,b);c=ka(d,c);N.receiveMessage(c,b)}))})()}};return H.getInstance=function(a,b){if(!a)throw Error(\"Visitor requires Adobe Marketing Cloud Org ID.\");0\u003Ea.indexOf(\"@\")\u0026\u0026(a+=\"@AdobeOrg\");var c=function(){var b=l.s_c_il;if(b)for(var c=0;c\u003Cb.length;c++){var f=b[c];if(f\u0026\u0026\"Visitor\"===f._c\u0026\u0026f.marketingCloudOrgID===a)return f}}();if(c)return c;c=a;var f=c.split(\"\").reverse().join(\"\");c=new H(a,null,f);b===Object(b)\u0026\u0026b.cookieDomain\u0026\u0026(c.cookieDomain=b.cookieDomain);l.s_c_il.splice(--l.s_c_in,1);var g=\nE.getIeVersion();if(\"number\"==typeof g\u0026\u002610\u003Eg)return c._helpers.replaceMethodsWithFunction(c,function(){});try{var h=l.self!==l.parent}catch(d){h=!0}h=h\u0026\u0026!function(a){return a.cookieWrite(\"TEST_AMCV_COOKIE\",\"T\",1),\"T\"===a.cookieRead(\"TEST_AMCV_COOKIE\")\u0026\u0026(a._helpers.removeCookie(\"TEST_AMCV_COOKIE\"),!0)}(c)\u0026\u0026l.parent?new ha(a,b,c,l.parent):new H(a,b,f);return c=null,h.init(),h},function(){function a(){H.windowLoaded=!0}l.addEventListener?l.addEventListener(\"load\",a):l.attachEvent\u0026\u0026l.attachEvent(\"onload\",\na);H.codeLoadEnd=(new Date).getTime()}(),H.config=b,l.Visitor=H,H}();\nfunction AppMeasurement_Module_ActivityMap(r){function a(a,b){var c,f,m;if(a\u0026\u0026b\u0026\u0026(c=n.c[b]||(n.c[b]=b.split(\",\"))))for(m=0;m\u003Cc.length\u0026\u0026(f=c[m++]);)if(-1\u003Ca.indexOf(f))return null;y=1;return a}function l(a,b,g,h,m){var c;if(a.dataset\u0026\u0026(c=a.dataset[b]))var f=c;else if(a.getAttribute)if(c=a.getAttribute(\"data-\"+g))f=c;else if(c=a.getAttribute(g))f=c;if(!f\u0026\u0026r.useForcedLinkTracking\u0026\u0026m\u0026\u0026(f=\"\",b=a.onclick?\"\"+a.onclick:\"\")){g=b.indexOf(h);var l,n;if(0\u003C=g){for(g+=10;g\u003Cb.length\u0026\u00260\u003C=\"\\x3d \\t\\r\\n\".indexOf(b.charAt(g));)g++;\nif(g\u003Cb.length){c=g;for(l=n=0;c\u003Cb.length\u0026\u0026(\";\"!=b.charAt(c)||l);)l?b.charAt(c)!=l||n?n=\"\\\\\"==b.charAt(c)?!n:0:l=0:(l=b.charAt(c),'\"'!=l\u0026\u0026\"'\"!=l\u0026\u0026(l=0)),c++;if(b=b.substring(g,c))a.e=new Function(\"s\",\"var e;try{s.w.\"+h+\"\\x3d\"+b+\"}catch(e){}\"),a.e(r)}}}return f||m\u0026\u0026r.w[h]}function v(b,f,g){var c;return(c=n[f](b,g))\u0026\u0026(y?(y=0,c):a(w(c),n[f+\"Exclusions\"]))}function q(a,f,g){var c;if(a\u0026\u0026!(1===(c=a.nodeType)\u0026\u0026(c=a.nodeName)\u0026\u0026(c=c.toUpperCase())\u0026\u0026b[c])\u0026\u0026(1===a.nodeType\u0026\u0026(c=a.nodeValue)\u0026\u0026(f[f.length]=c),g.a||\ng.t||g.s||!a.getAttribute||((c=a.getAttribute(\"alt\"))?g.a=c:(c=a.getAttribute(\"title\"))?g.t=c:\"IMG\"==(\"\"+a.nodeName).toUpperCase()\u0026\u0026(c=a.getAttribute(\"src\")||a.src)\u0026\u0026(g.s=c)),(c=a.childNodes)\u0026\u0026c.length))for(a=0;a\u003Cc.length;a++)q(c[a],f,g)}function w(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp(\"^[\\\\s\\\\n\\\\f\\\\r\\\\t\\t-\\r \\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u205f\\u3000\\ufeff]+\",\"mg\"),\"\").replace(RegExp(\"[\\\\s\\\\n\\\\f\\\\r\\\\t\\t-\\r \\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u205f\\u3000\\ufeff]+$\",\n\"mg\"),\"\").replace(RegExp(\"[\\\\s\\\\n\\\\f\\\\r\\\\t\\t-\\r \\u00a0\\u1680\\u180e\\u2000-\\u200a\\u2028\\u2029\\u205f\\u3000\\ufeff]{1,}\",\"mg\"),\" \").substring(0,254)}catch(f){}}var n=this;n.s=r;var p=window;p.s_c_in||(p.s_c_il=[],p.s_c_in=0);n._il=p.s_c_il;n._in=p.s_c_in;n._il[n._in]=n;p.s_c_in++;n._c=\"s_m\";n.c={};var y=0,b={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};n._g=function(){var a,b,g,h=r.contextData,m=r.linkObject;(a=r.pageName||r.pageURL)\u0026\u0026(b=v(m,\"link\",r.linkName))\u0026\u0026(g=v(m,\"region\"))\u0026\u0026(h[\"a.activitymap.page\"]=a.substring(0,\n255),h[\"a.activitymap.link\"]=128\u003Cb.length?b.substring(0,128):b,h[\"a.activitymap.region\"]=127\u003Cg.length?g.substring(0,127):g,h[\"a.activitymap.pageIDType\"]=r.pageName?1:0)};n.link=function(b,f){if(f)var c=a(w(f),n.linkExclusions);else if((c=b)\u0026\u0026!(c=l(b,\"sObjectId\",\"s-object-id\",\"s_objectID\",1))){var h,m;(m=a(w(b.innerText||b.textContent),n.linkExclusions))||(q(b,h=[],c={a:void 0,t:void 0,s:void 0}),(m=a(w(h.join(\"\"))))||(m=a(w(c.a?c.a:c.t?c.t:c.s?c.s:void 0)))||!(h=(h=b.tagName)\u0026\u0026h.toUpperCase?h.toUpperCase():\n\"\")||(\"INPUT\"==h||\"SUBMIT\"==h\u0026\u0026b.value?m=a(w(b.value)):\"IMAGE\"==h\u0026\u0026b.src\u0026\u0026(m=a(w(b.src)))));c=m}return c};n.region=function(a){for(var b,c=n.regionIDAttribute||\"id\";a\u0026\u0026(a=a.parentNode);){if(b=l(a,c,c,c))return b;if(\"BODY\"==a.nodeName)return\"BODY\"}}}\nfunction AppMeasurement(r){var a=this;a.version=\"2.11.0\";var l=window;l.s_c_in||(l.s_c_il=[],l.s_c_in=0);a._il=l.s_c_il;a._in=l.s_c_in;a._il[a._in]=a;l.s_c_in++;a._c=\"s_c\";var v=l.AppMeasurement.ac;v||(v=null);var q=l,w;try{var n=q.parent;for(w=q.location;n\u0026\u0026n.location\u0026\u0026w\u0026\u0026\"\"+n.location!=\"\"+w\u0026\u0026q.location\u0026\u0026\"\"+n.location!=\"\"+q.location\u0026\u0026n.location.host==w.host;)q=n,n=q.parent}catch(b){}a.D=function(a){try{console.log(a)}catch(c){}};a.Pa=function(a){return\"\"+parseInt(a)==\"\"+a};a.replace=function(a,c,\nf){return!a||0\u003Ea.indexOf(c)?a:a.split(c).join(f)};a.escape=function(b){var c;if(!b)return b;b=encodeURIComponent(b);for(c=0;7\u003Ec;c++){var f=\"+~!*()'\".substring(c,c+1);0\u003C=b.indexOf(f)\u0026\u0026(b=a.replace(b,f,\"%\"+f.charCodeAt(0).toString(16).toUpperCase()))}return b};a.unescape=function(b){if(!b)return b;b=0\u003C=b.indexOf(\"+\")?a.replace(b,\"+\",\" \"):b;try{return decodeURIComponent(b)}catch(c){}return unescape(b)};a.Ib=function(){var b=l.location.hostname,c=a.fpCookieDomainPeriods,f;c||(c=a.cookieDomainPeriods);\nif(b\u0026\u0026!a.Ha\u0026\u0026!\/^[0-9.]+$\/.test(b)\u0026\u0026(c=c?parseInt(c):2,c=2\u003Cc?c:2,f=b.lastIndexOf(\".\"),0\u003C=f)){for(;0\u003C=f\u0026\u00261\u003Cc;)f=b.lastIndexOf(\".\",f-1),c--;a.Ha=0\u003Cf?b.substring(f):b}return a.Ha};a.c_r=a.cookieRead=function(b){b=a.escape(b);var c=\" \"+a.d.cookie,f=c.indexOf(\" \"+b+\"\\x3d\"),g=0\u003Ef?f:c.indexOf(\";\",f);b=0\u003Ef?\"\":a.unescape(c.substring(f+2+b.length,0\u003Eg?c.length:g));return\"[[B]]\"!=b?b:\"\"};a.c_w=a.cookieWrite=function(b,c,f){var g=a.Ib(),h=a.cookieLifetime,m;c=\"\"+c;h=h?(\"\"+h).toUpperCase():\"\";f\u0026\u0026\"SESSION\"!=h\u0026\u0026\"NONE\"!=\nh\u0026\u0026((m=\"\"!=c?parseInt(h?h:0):-60)?(f=new Date,f.setTime(f.getTime()+1E3*m)):1===f\u0026\u0026(f=new Date,m=f.getYear(),f.setYear(m+2+(1900\u003Em?1900:0))));return b\u0026\u0026\"NONE\"!=h?(a.d.cookie=a.escape(b)+\"\\x3d\"+a.escape(\"\"!=c?c:\"[[B]]\")+\"; path\\x3d\/;\"+(f\u0026\u0026\"SESSION\"!=h?\" expires\\x3d\"+f.toUTCString()+\";\":\"\")+(g?\" domain\\x3d\"+g+\";\":\"\"),a.cookieRead(b)==c):0};a.Fb=function(){var b=a.Util.getIeVersion();\"number\"===typeof b\u0026\u002610\u003Eb\u0026\u0026(a.unsupportedBrowser=!0,a.tb(a,function(){}))};a.tb=function(a,c){for(var b in a)a.hasOwnProperty(b)\u0026\u0026\n\"function\"===typeof a[b]\u0026\u0026(a[b]=c)};a.M=[];a.fa=function(b,c,f){if(a.Ia)return 0;a.maxDelay||(a.maxDelay=250);var g=0,h=(new Date).getTime()+a.maxDelay,m=a.d.visibilityState,k=[\"webkitvisibilitychange\",\"visibilitychange\"];m||(m=a.d.webkitVisibilityState);if(m\u0026\u0026\"prerender\"==m){if(!a.ga)for(a.ga=1,f=0;f\u003Ck.length;f++)a.d.addEventListener(k[f],function(){var b=a.d.visibilityState;b||(b=a.d.webkitVisibilityState);\"visible\"==b\u0026\u0026(a.ga=0,a.delayReady())});g=1;h=0}else f||a.o(\"_d\")\u0026\u0026(g=1);g\u0026\u0026(a.M.push({m:b,\na:c,t:h}),a.ga||setTimeout(a.delayReady,a.maxDelay));return g};a.delayReady=function(){var b=(new Date).getTime(),c=0;for(a.o(\"_d\")?c=1:a.za();0\u003Ca.M.length;){var f=a.M.shift();if(c\u0026\u0026!f.t\u0026\u0026f.t\u003Eb){a.M.unshift(f);setTimeout(a.delayReady,parseInt(a.maxDelay\/2));break}a.Ia=1;a[f.m].apply(a,f.a);a.Ia=0}};a.setAccount=a.sa=function(b){var c;if(!a.fa(\"setAccount\",arguments))if(a.account=b,a.allAccounts){var f=a.allAccounts.concat(b.split(\",\"));a.allAccounts=[];f.sort();for(c=0;c\u003Cf.length;c++)0!=c\u0026\u0026f[c-1]==\nf[c]||a.allAccounts.push(f[c])}else a.allAccounts=b.split(\",\")};a.foreachVar=function(b,c){var f,g,h=\"\";var m=f=\"\";if(a.lightProfileID){var k=a.Q;(h=a.lightTrackVars)\u0026\u0026(h=\",\"+h+\",\"+a.ka.join(\",\")+\",\")}else{k=a.g;if(a.pe||a.linkType)h=a.linkTrackVars,f=a.linkTrackEvents,a.pe\u0026\u0026(m=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[m]\u0026\u0026(h=a[m].Zb,f=a[m].Yb));h\u0026\u0026(h=\",\"+h+\",\"+a.G.join(\",\")+\",\");f\u0026\u0026h\u0026\u0026(h+=\",events,\")}c\u0026\u0026(c=\",\"+c+\",\");for(f=0;f\u003Ck.length;f++)m=k[f],(g=a[m])\u0026\u0026(!h||0\u003C=h.indexOf(\",\"+m+\",\"))\u0026\u0026\n(!c||0\u003C=c.indexOf(\",\"+m+\",\"))\u0026\u0026b(m,g)};a.q=function(b,c,f,g,h){var m=\"\",k,l,t,n=0;\"contextData\"==b\u0026\u0026(b=\"c\");if(c){for(k in c)if(!(Object.prototype[k]||h\u0026\u0026k.substring(0,h.length)!=h)\u0026\u0026c[k]\u0026\u0026(!f||0\u003C=f.indexOf(\",\"+(g?g+\".\":\"\")+k+\",\"))){var u=!1;if(n)for(l=0;l\u003Cn.length;l++)k.substring(0,n[l].length)==n[l]\u0026\u0026(u=!0);if(!u\u0026\u0026(\"\"==m\u0026\u0026(m+=\"\\x26\"+b+\".\"),l=c[k],h\u0026\u0026(k=k.substring(h.length)),0\u003Ck.length))if(u=k.indexOf(\".\"),0\u003Cu)l=k.substring(0,u),u=(h?h:\"\")+l+\".\",n||(n=[]),n.push(u),m+=a.q(l,c,f,g,u);else if(\"boolean\"==\ntypeof l\u0026\u0026(l=l?\"true\":\"false\"),l){if(\"retrieveLightData\"==g\u0026\u00260\u003Eh.indexOf(\".contextData.\"))switch(u=k.substring(0,4),t=k.substring(4),k){case \"transactionID\":k=\"xact\";break;case \"channel\":k=\"ch\";break;case \"campaign\":k=\"v0\";break;default:a.Pa(t)\u0026\u0026(\"prop\"==u?k=\"c\"+t:\"eVar\"==u?k=\"v\"+t:\"list\"==u?k=\"l\"+t:\"hier\"==u\u0026\u0026(k=\"h\"+t,l=l.substring(0,255)))}m+=\"\\x26\"+a.escape(k)+\"\\x3d\"+a.escape(l)}}\"\"!=m\u0026\u0026(m+=\"\\x26.\"+b)}return m};a.usePostbacks=0;a.Lb=function(){var b=\"\",c,f,g,h,m=\"\",k=\"\",l=g=\"\",n=a.V();if(a.lightProfileID){var p=\na.Q;(m=a.lightTrackVars)\u0026\u0026(m=\",\"+m+\",\"+a.ka.join(\",\")+\",\")}else{p=a.g;if(a.pe||a.linkType)m=a.linkTrackVars,k=a.linkTrackEvents,a.pe\u0026\u0026(g=a.pe.substring(0,1).toUpperCase()+a.pe.substring(1),a[g]\u0026\u0026(m=a[g].Zb,k=a[g].Yb));m\u0026\u0026(m=\",\"+m+\",\"+a.G.join(\",\")+\",\");k\u0026\u0026(k=\",\"+k+\",\",m\u0026\u0026(m+=\",events,\"));a.events2\u0026\u0026(l+=(\"\"!=l?\",\":\"\")+a.events2)}if(n\u0026\u0026a.xa()\u0026\u0026n.getCustomerIDs){g=v;if(h=n.getCustomerIDs())for(c in h)Object.prototype[c]||(f=h[c],\"object\"==typeof f\u0026\u0026(g||(g={}),f.id\u0026\u0026(g[c+\".id\"]=f.id),f.authState\u0026\u0026(g[c+\n\".as\"]=f.authState)));g\u0026\u0026(b+=a.q(\"cid\",g))}a.AudienceManagement\u0026\u0026a.AudienceManagement.isReady()\u0026\u0026(b+=a.q(\"d\",a.AudienceManagement.getEventCallConfigParams()));for(c=0;c\u003Cp.length;c++){g=p[c];h=a[g];f=g.substring(0,4);var u=g.substring(4);h||(\"events\"==g\u0026\u0026l?(h=l,l=\"\"):\"marketingCloudOrgID\"==g\u0026\u0026n\u0026\u0026a.K(\"ECID\")\u0026\u0026(h=n.marketingCloudOrgID));if(h\u0026\u0026(!m||0\u003C=m.indexOf(\",\"+g+\",\"))){switch(g){case \"customerPerspective\":g=\"cp\";break;case \"marketingCloudOrgID\":g=\"mcorgid\";break;case \"supplementalDataID\":g=\"sdid\";\nbreak;case \"timestamp\":g=\"ts\";break;case \"dynamicVariablePrefix\":g=\"D\";break;case \"visitorID\":g=\"vid\";break;case \"marketingCloudVisitorID\":g=\"mid\";break;case \"analyticsVisitorID\":g=\"aid\";break;case \"audienceManagerLocationHint\":g=\"aamlh\";break;case \"audienceManagerBlob\":g=\"aamb\";break;case \"authState\":g=\"as\";break;case \"pageURL\":g=\"g\";255\u003Ch.length\u0026\u0026(a.pageURLRest=h.substring(255),h=h.substring(0,255));break;case \"pageURLRest\":g=\"-g\";break;case \"referrer\":g=\"r\";break;case \"vmk\":case \"visitorMigrationKey\":g=\n\"vmt\";break;case \"visitorMigrationServer\":g=\"vmf\";a.ssl\u0026\u0026a.visitorMigrationServerSecure\u0026\u0026(h=\"\");break;case \"visitorMigrationServerSecure\":g=\"vmf\";!a.ssl\u0026\u0026a.visitorMigrationServer\u0026\u0026(h=\"\");break;case \"charSet\":g=\"ce\";break;case \"visitorNamespace\":g=\"ns\";break;case \"cookieDomainPeriods\":g=\"cdp\";break;case \"cookieLifetime\":g=\"cl\";break;case \"variableProvider\":g=\"vvp\";break;case \"currencyCode\":g=\"cc\";break;case \"channel\":g=\"ch\";break;case \"transactionID\":g=\"xact\";break;case \"campaign\":g=\"v0\";break;case \"latitude\":g=\n\"lat\";break;case \"longitude\":g=\"lon\";break;case \"resolution\":g=\"s\";break;case \"colorDepth\":g=\"c\";break;case \"javascriptVersion\":g=\"j\";break;case \"javaEnabled\":g=\"v\";break;case \"cookiesEnabled\":g=\"k\";break;case \"browserWidth\":g=\"bw\";break;case \"browserHeight\":g=\"bh\";break;case \"connectionType\":g=\"ct\";break;case \"homepage\":g=\"hp\";break;case \"events\":l\u0026\u0026(h+=(\"\"!=h?\",\":\"\")+l);if(k)for(u=h.split(\",\"),h=\"\",f=0;f\u003Cu.length;f++){var q=u[f];var r=q.indexOf(\"\\x3d\");0\u003C=r\u0026\u0026(q=q.substring(0,r));r=q.indexOf(\":\");\n0\u003C=r\u0026\u0026(q=q.substring(0,r));0\u003C=k.indexOf(\",\"+q+\",\")\u0026\u0026(h+=(h?\",\":\"\")+u[f])}break;case \"events2\":h=\"\";break;case \"contextData\":b+=a.q(\"c\",a[g],m,g);h=\"\";break;case \"lightProfileID\":g=\"mtp\";break;case \"lightStoreForSeconds\":g=\"mtss\";a.lightProfileID||(h=\"\");break;case \"lightIncrementBy\":g=\"mti\";a.lightProfileID||(h=\"\");break;case \"retrieveLightProfiles\":g=\"mtsr\";break;case \"deleteLightProfiles\":g=\"mtsd\";break;case \"retrieveLightData\":a.retrieveLightProfiles\u0026\u0026(b+=a.q(\"mts\",a[g],m,g));h=\"\";break;default:a.Pa(u)\u0026\u0026\n(\"prop\"==f?g=\"c\"+u:\"eVar\"==f?g=\"v\"+u:\"list\"==f?g=\"l\"+u:\"hier\"==f\u0026\u0026(g=\"h\"+u,h=h.substring(0,255)))}h\u0026\u0026(b+=\"\\x26\"+g+\"\\x3d\"+(\"pev\"!=g.substring(0,3)?a.escape(h):h))}\"pev3\"==g\u0026\u0026a.e\u0026\u0026(b+=a.e)}a.ja\u0026\u0026(b+=\"\\x26lrt\\x3d\"+a.ja,a.ja=null);return b};a.C=function(a){var b=a.tagName;if(\"undefined\"!=\"\"+a.ec||\"undefined\"!=\"\"+a.Ub\u0026\u0026\"HTML\"!=(\"\"+a.Ub).toUpperCase())return\"\";b=b\u0026\u0026b.toUpperCase?b.toUpperCase():\"\";\"SHAPE\"==b\u0026\u0026(b=\"\");b\u0026\u0026((\"INPUT\"==b||\"BUTTON\"==b)\u0026\u0026a.type\u0026\u0026a.type.toUpperCase?b=a.type.toUpperCase():!b\u0026\u0026a.href\u0026\u0026\n(b=\"A\"));return b};a.La=function(a){var b=l.location,f=a.href?a.href:\"\";var g=f.indexOf(\":\");var h=f.indexOf(\"?\");var m=f.indexOf(\"\/\");f\u0026\u0026(0\u003Eg||0\u003C=h\u0026\u0026g\u003Eh||0\u003C=m\u0026\u0026g\u003Em)\u0026\u0026(h=a.protocol\u0026\u00261\u003Ca.protocol.length?a.protocol:b.protocol?b.protocol:\"\",g=b.pathname.lastIndexOf(\"\/\"),f=(h?h+\"\/\/\":\"\")+(a.host?a.host:b.host?b.host:\"\")+(\"\/\"!=f.substring(0,1)?b.pathname.substring(0,0\u003Eg?0:g)+\"\/\":\"\")+f);return f};a.N=function(b){var c=a.C(b),f,g,h=\"\",m=0;return c\u0026\u0026(f=b.protocol,g=b.onclick,!b.href||\"A\"!=c\u0026\u0026\"AREA\"!=c||g\u0026\u0026\nf\u0026\u0026!(0\u003Ef.toLowerCase().indexOf(\"javascript\"))?g?(h=a.replace(a.replace(a.replace(a.replace(\"\"+g,\"\\r\",\"\"),\"\\n\",\"\"),\"\\t\",\"\"),\" \",\"\"),m=2):\"INPUT\"==c||\"SUBMIT\"==c?(b.value?h=b.value:b.innerText?h=b.innerText:b.textContent\u0026\u0026(h=b.textContent),m=3):\"IMAGE\"==c\u0026\u0026b.src\u0026\u0026(h=b.src):h=a.La(b),h)?{id:h.substring(0,100),type:m}:0};a.bc=function(b){for(var c=a.C(b),f=a.N(b);b\u0026\u0026!f\u0026\u0026\"BODY\"!=c;)if(b=b.parentElement?b.parentElement:b.parentNode)c=a.C(b),f=a.N(b);f\u0026\u0026\"BODY\"!=c||(b=0);b\u0026\u0026(c=b.onclick?\"\"+b.onclick:\"\",0\u003C=\nc.indexOf(\".tl(\")||0\u003C=c.indexOf(\".trackLink(\"))\u0026\u0026(b=0);return b};a.Tb=function(){var b,c=a.linkObject,f=a.linkType,g=a.linkURL,h;a.la=1;c||(a.la=0,c=a.clickObject);if(c){var m=a.C(c);for(b=a.N(c);c\u0026\u0026!b\u0026\u0026\"BODY\"!=m;)if(c=c.parentElement?c.parentElement:c.parentNode)m=a.C(c),b=a.N(c);b\u0026\u0026\"BODY\"!=m||(c=0);if(c\u0026\u0026!a.linkObject){var k=c.onclick?\"\"+c.onclick:\"\";if(0\u003C=k.indexOf(\".tl(\")||0\u003C=k.indexOf(\".trackLink(\"))c=0}}else a.la=1;!g\u0026\u0026c\u0026\u0026(g=a.La(c));g\u0026\u0026!a.linkLeaveQueryString\u0026\u0026(h=g.indexOf(\"?\"),0\u003C=h\u0026\u0026(g=g.substring(0,\nh)));if(!f\u0026\u0026g){var n=0,t=0,q;if(a.trackDownloadLinks\u0026\u0026a.linkDownloadFileTypes){k=g.toLowerCase();h=k.indexOf(\"?\");var p=k.indexOf(\"#\");0\u003C=h?0\u003C=p\u0026\u0026p\u003Ch\u0026\u0026(h=p):h=p;0\u003C=h\u0026\u0026(k=k.substring(0,h));h=a.linkDownloadFileTypes.toLowerCase().split(\",\");for(p=0;p\u003Ch.length;p++)(q=h[p])\u0026\u0026k.substring(k.length-(q.length+1))==\".\"+q\u0026\u0026(f=\"d\")}if(a.trackExternalLinks\u0026\u0026!f\u0026\u0026(k=g.toLowerCase(),a.Oa(k)\u0026\u0026(a.linkInternalFilters||(a.linkInternalFilters=l.location.hostname),h=0,a.linkExternalFilters?(h=a.linkExternalFilters.toLowerCase().split(\",\"),\nn=1):a.linkInternalFilters\u0026\u0026(h=a.linkInternalFilters.toLowerCase().split(\",\")),h))){for(p=0;p\u003Ch.length;p++)q=h[p],0\u003C=k.indexOf(q)\u0026\u0026(t=1);t?n\u0026\u0026(f=\"e\"):n||(f=\"e\")}}a.linkObject=c;a.linkURL=g;a.linkType=f;if(a.trackClickMap||a.trackInlineStats)a.e=\"\",c\u0026\u0026(f=a.pageName,g=1,c=c.sourceIndex,f||(f=a.pageURL,g=0),l.s_objectID\u0026\u0026(b.id=l.s_objectID,c=b.type=1),f\u0026\u0026b\u0026\u0026b.id\u0026\u0026m\u0026\u0026(a.e=\"\\x26pid\\x3d\"+a.escape(f.substring(0,255))+(g?\"\\x26pidt\\x3d\"+g:\"\")+\"\\x26oid\\x3d\"+a.escape(b.id.substring(0,100))+(b.type?\"\\x26oidt\\x3d\"+\nb.type:\"\")+\"\\x26ot\\x3d\"+m+(c?\"\\x26oi\\x3d\"+c:\"\")))};a.Mb=function(){var b=a.la,c=a.linkType,f=a.linkURL,g=a.linkName;c\u0026\u0026(f||g)\u0026\u0026(c=c.toLowerCase(),\"d\"!=c\u0026\u0026\"e\"!=c\u0026\u0026(c=\"o\"),a.pe=\"lnk_\"+c,a.pev1=f?a.escape(f):\"\",a.pev2=g?a.escape(g):\"\",b=1);a.abort\u0026\u0026(b=0);if(a.trackClickMap||a.trackInlineStats||a.Pb()){c={};f=0;var h=a.ob(),m=h?h.split(\"\\x26\"):0,k,l;h=0;if(m)for(k=0;k\u003Cm.length;k++){var n=m[k].split(\"\\x3d\");g=a.unescape(n[0]).split(\",\");n=a.unescape(n[1]);c[n]=g}g=a.account.split(\",\");k={};for(l in a.contextData)l\u0026\u0026\n!Object.prototype[l]\u0026\u0026\"a.activitymap.\"==l.substring(0,14)\u0026\u0026(k[l]=a.contextData[l],a.contextData[l]=\"\");a.e=a.q(\"c\",k)+(a.e?a.e:\"\");if(b||a.e){b\u0026\u0026!a.e\u0026\u0026(h=1);for(n in c)if(!Object.prototype[n])for(l=0;l\u003Cg.length;l++)for(h\u0026\u0026(m=c[n].join(\",\"),m==a.account\u0026\u0026(a.e+=(\"\\x26\"!=n.charAt(0)?\"\\x26\":\"\")+n,c[n]=[],f=1)),k=0;k\u003Cc[n].length;k++)m=c[n][k],m==g[l]\u0026\u0026(h\u0026\u0026(a.e+=\"\\x26u\\x3d\"+a.escape(m)+(\"\\x26\"!=n.charAt(0)?\"\\x26\":\"\")+n+\"\\x26u\\x3d0\"),c[n].splice(k,1),f=1);b||(f=1);if(f){h=\"\";k=2;!b\u0026\u0026a.e\u0026\u0026(h=a.escape(g.join(\",\"))+\n\"\\x3d\"+a.escape(a.e),k=1);for(n in c)!Object.prototype[n]\u0026\u00260\u003Ck\u0026\u00260\u003Cc[n].length\u0026\u0026(h+=(h?\"\\x26\":\"\")+a.escape(c[n].join(\",\"))+\"\\x3d\"+a.escape(n),k--);a.ub(h)}}}return b};a.ob=function(){if(a.useLinkTrackSessionStorage){if(a.Ca())return l.sessionStorage.getItem(a.R)}else return a.cookieRead(a.R)};a.Ca=function(){return l.sessionStorage?!0:!1};a.ub=function(b){a.useLinkTrackSessionStorage?a.Ca()\u0026\u0026l.sessionStorage.setItem(a.R,b):a.cookieWrite(a.R,b)};a.Nb=function(){if(!a.Xb){var b=new Date,c=q.location,\nf=\"1.2\",g=a.cookieWrite(\"s_cc\",\"true\",0)?\"Y\":\"N\",h=\"\",l=\"\";if(b.setUTCDate\u0026\u0026(f=\"1.3\",(0).toPrecision\u0026\u0026(f=\"1.5\",b=[],b.forEach))){f=\"1.6\";var k=0;var n={};try{k=new Iterator(n),k.next\u0026\u0026(f=\"1.7\",b.reduce\u0026\u0026(f=\"1.8\",f.trim\u0026\u0026(f=\"1.8.1\",Date.parse\u0026\u0026(f=\"1.8.2\",Object.create\u0026\u0026(f=\"1.8.5\")))))}catch(u){}}n=screen.width+\"x\"+screen.height;b=navigator.javaEnabled()?\"Y\":\"N\";k=screen.pixelDepth?screen.pixelDepth:screen.colorDepth;var p=a.w.innerWidth?a.w.innerWidth:a.d.documentElement.offsetWidth;var r=a.w.innerHeight?\na.w.innerHeight:a.d.documentElement.offsetHeight;try{a.b.addBehavior(\"#default#homePage\"),h=a.b.cc(c)?\"Y\":\"N\"}catch(u){}try{a.b.addBehavior(\"#default#clientCaps\"),l=a.b.connectionType}catch(u){}a.resolution=n;a.colorDepth=k;a.javascriptVersion=f;a.javaEnabled=b;a.cookiesEnabled=g;a.browserWidth=p;a.browserHeight=r;a.connectionType=l;a.homepage=h;a.Xb=1}};a.S={};a.loadModule=function(b,c){var f=a.S[b];if(!f){f=l[\"AppMeasurement_Module_\"+b]?new l[\"AppMeasurement_Module_\"+b](a):{};a.S[b]=a[b]=f;f.jb=\nfunction(){return f.rb};f.vb=function(c){if(f.rb=c)a[b+\"_onLoad\"]=c,a.fa(b+\"_onLoad\",[a,f],1)||c(a,f)};try{Object.defineProperty?Object.defineProperty(f,\"onLoad\",{get:f.jb,set:f.vb}):f._olc=1}catch(g){f._olc=1}}c\u0026\u0026(a[b+\"_onLoad\"]=c,a.fa(b+\"_onLoad\",[a,f],1)||c(a,f))};a.o=function(b){var c,f;for(c in a.S)if(!Object.prototype[c]\u0026\u0026(f=a.S[c])\u0026\u0026(f._olc\u0026\u0026f.onLoad\u0026\u0026(f._olc=0,f.onLoad(a,f)),f[b]\u0026\u0026f[b]()))return 1;return 0};a.Pb=function(){return a.ActivityMap\u0026\u0026a.ActivityMap._c?!0:!1};a.Qb=function(){var b=\nMath.floor(1E13*Math.random()),c=a.visitorSampling,f=a.visitorSamplingGroup;f=\"s_vsn_\"+(a.visitorNamespace?a.visitorNamespace:a.account)+(f?\"_\"+f:\"\");var g=a.cookieRead(f);if(c){c*=100;g\u0026\u0026(g=parseInt(g));if(!g){if(!a.cookieWrite(f,b))return 0;g=b}if(g%1E4\u003Ec)return 0}return 1};a.T=function(b,c){var f,g,h,l,k;for(f=0;2\u003Ef;f++){var n=0\u003Cf?a.Da:a.g;for(g=0;g\u003Cn.length;g++)if(h=n[g],(l=b[h])||b[\"!\"+h]){if(!c\u0026\u0026(\"contextData\"==h||\"retrieveLightData\"==h)\u0026\u0026a[h])for(k in a[h])l[k]||(l[k]=a[h][k]);a[h]=l}}};a.Za=\nfunction(b,c){var f,g;for(f=0;2\u003Ef;f++){var h=0\u003Cf?a.Da:a.g;for(g=0;g\u003Ch.length;g++){var l=h[g];b[l]=a[l];c||b[l]||(b[\"!\"+l]=1)}}};a.Hb=function(a){var b,f,g,h,l,k=0,n,p=\"\",q=\"\";if(a\u0026\u0026255\u003Ca.length\u0026\u0026(b=\"\"+a,f=b.indexOf(\"?\"),0\u003Cf\u0026\u0026(n=b.substring(f+1),b=b.substring(0,f),h=b.toLowerCase(),g=0,\"http:\/\/\"==h.substring(0,7)?g+=7:\"https:\/\/\"==h.substring(0,8)\u0026\u0026(g+=8),f=h.indexOf(\"\/\",g),0\u003Cf\u0026\u0026(h=h.substring(g,f),l=b.substring(f),b=b.substring(0,f),0\u003C=h.indexOf(\"google\")?k=\",q,ie,start,search_key,word,kw,cd,\":0\u003C=\nh.indexOf(\"yahoo.co\")\u0026\u0026(k=\",p,ei,\"),k\u0026\u0026n)))){if((a=n.split(\"\\x26\"))\u0026\u00261\u003Ca.length){for(g=0;g\u003Ca.length;g++)h=a[g],f=h.indexOf(\"\\x3d\"),0\u003Cf\u0026\u00260\u003C=k.indexOf(\",\"+h.substring(0,f)+\",\")?p+=(p?\"\\x26\":\"\")+h:q+=(q?\"\\x26\":\"\")+h;p\u0026\u0026q?n=p+\"\\x26\"+q:q=\"\"}f=253-(n.length-q.length)-b.length;a=b+(0\u003Cf?l.substring(0,f):\"\")+\"?\"+n}return a};a.cb=function(b){var c=a.d.visibilityState,f=[\"webkitvisibilitychange\",\"visibilitychange\"];c||(c=a.d.webkitVisibilityState);if(c\u0026\u0026\"prerender\"==c){if(b)for(c=0;c\u003Cf.length;c++)a.d.addEventListener(f[c],\nfunction(){var c=a.d.visibilityState;c||(c=a.d.webkitVisibilityState);\"visible\"==c\u0026\u0026b()});return!1}return!0};a.ba=!1;a.J=!1;a.xb=function(){a.J=!0;a.H()};a.ca=!1;a.U=!1;a.yb=function(b){a.marketingCloudVisitorID=b.MCMID;a.visitorOptedOut=b.MCOPTOUT;a.analyticsVisitorID=b.MCAID;a.audienceManagerLocationHint=b.MCAAMLH;a.audienceManagerBlob=b.MCAAMB;a.U=!0;a.H()};a.bb=function(b){a.maxDelay||(a.maxDelay=250);return a.o(\"_d\")?(b\u0026\u0026setTimeout(function(){b()},a.maxDelay),!1):!0};a.Z=!1;a.I=!1;a.za=function(){a.I=\n!0;a.H()};a.isReadyToTrack=function(){var b=!0;if(!a.nb()||!a.mb())return!1;a.xa()||(b=!1);a.qb()||(b=!1);return b};a.nb=function(){a.ba||a.J||(a.cb(a.xb)?a.J=!0:a.ba=!0);return a.ba\u0026\u0026!a.J?!1:!0};a.mb=function(){var b=a.va();if(b)if(a.ta||a.aa)if(a.ta){if(!b.isApproved(b.Categories.ANALYTICS))return!1}else return!1;else return b.fetchPermissions(a.sb,!0),a.aa=!0,!1;return!0};a.K=function(b){var c=a.va();return c\u0026\u0026!c.isApproved(c.Categories[b])?!1:!0};a.va=function(){return l.adobe\u0026\u0026l.adobe.optIn?\nl.adobe.optIn:null};a.xa=function(){var b=a.V();return b\u0026\u0026a.K(\"ECID\")\u0026\u0026(a.ca||a.marketingCloudVisitorID||!b.getVisitorValues||(a.ca=!0,a.marketingCloudVisitorID?a.U=!0:b.getVisitorValues(a.yb)),a.ca\u0026\u0026!a.U\u0026\u0026!a.marketingCloudVisitorID)?!1:!0};a.V=function(){var b=a.visitor;b\u0026\u0026!b.isAllowed()\u0026\u0026(b=null);return b};a.qb=function(){a.Z||a.I||(a.bb(a.za)?a.I=!0:a.Z=!0);return a.Z\u0026\u0026!a.I?!1:!0};a.aa=!1;a.sb=function(){a.aa=!1;a.ta=!0};a.l=v;a.r=0;a.callbackWhenReadyToTrack=function(b,c,f){var g={};g.Cb=b;g.Bb=\nc;g.zb=f;a.l==v\u0026\u0026(a.l=[]);a.l.push(g);0==a.r\u0026\u0026(a.r=setInterval(a.H,100))};a.H=function(){if(a.isReadyToTrack()\u0026\u0026(a.wb(),a.l!=v))for(;0\u003Ca.l.length;){var b=a.l.shift();b.Bb.apply(b.Cb,b.zb)}};a.wb=function(){a.r\u0026\u0026(clearInterval(a.r),a.r=0)};a.lb=function(b){var c,f=v;if(!a.isReadyToTrack()){var g=[];if(b!=v)for(c in f={},b)f[c]=b[c];b={};a.Za(b,!0);g.push(f);g.push(b);a.callbackWhenReadyToTrack(a,a.track,g);return!0}return!1};a.Jb=function(){var b=a.cookieRead(\"s_fid\"),c=\"\",f=\"\";var g=8;var h=4;if(!b||\n0\u003Eb.indexOf(\"-\")){for(b=0;16\u003Eb;b++)g=Math.floor(Math.random()*g),c+=\"0123456789ABCDEF\".substring(g,g+1),g=Math.floor(Math.random()*h),f+=\"0123456789ABCDEF\".substring(g,g+1),g=h=16;b=c+\"-\"+f}a.cookieWrite(\"s_fid\",b,1)||(b=0);return b};a.t=a.track=function(b,c){var f,g=new Date,h=\"s\"+Math.floor(g.getTime()\/108E5)%10+Math.floor(1E13*Math.random()),m=g.getYear();m=\"t\\x3d\"+a.escape(g.getDate()+\"\/\"+g.getMonth()+\"\/\"+(1900\u003Em?m+1900:m)+\" \"+g.getHours()+\":\"+g.getMinutes()+\":\"+g.getSeconds()+\" \"+g.getDay()+\n\" \"+g.getTimezoneOffset());var k=a.V();a.o(\"_s\");a.lb(b)||(c\u0026\u0026a.T(c),b\u0026\u0026(f={},a.Za(f,0),a.T(b)),a.Qb()\u0026\u0026!a.visitorOptedOut\u0026\u0026(a.wa()||(a.fid=a.Jb()),a.Tb(),a.usePlugins\u0026\u0026a.doPlugins\u0026\u0026a.doPlugins(a),a.account\u0026\u0026(a.abort||(a.trackOffline\u0026\u0026!a.timestamp\u0026\u0026(a.timestamp=Math.floor(g.getTime()\/1E3)),g=l.location,a.pageURL||(a.pageURL=g.href?g.href:g),a.referrer||a.$a||(g=a.Util.getQueryParam(\"adobe_mc_ref\",null,null,!0),a.referrer=g||void 0===g?void 0===g?\"\":g:q.document.referrer),a.$a=1,a.referrer=a.Hb(a.referrer),\na.o(\"_g\")),a.Mb()\u0026\u0026!a.abort\u0026\u0026(k\u0026\u0026a.K(\"TARGET\")\u0026\u0026!a.supplementalDataID\u0026\u0026k.getSupplementalDataID\u0026\u0026(a.supplementalDataID=k.getSupplementalDataID(\"AppMeasurement:\"+a._in,a.expectSupplementalData?!1:!0)),a.K(\"AAM\")||(a.contextData[\"cm.ssf\"]=1),a.Nb(),m+=a.Lb(),a.pb(h,m),a.o(\"_t\"),a.referrer=\"\"))),b\u0026\u0026a.T(f,1));a.abort=a.supplementalDataID=a.timestamp=a.pageURLRest=a.linkObject=a.clickObject=a.linkURL=a.linkName=a.linkType=l.s_objectID=a.pe=a.pev1=a.pev2=a.pev3=a.e=a.lightProfileID=0};a.Ba=[];a.registerPreTrackCallback=\nfunction(b){for(var c=[],f=1;f\u003Carguments.length;f++)c.push(arguments[f]);\"function\"==typeof b?a.Ba.push([b,c]):a.debugTracking\u0026\u0026a.D(\"DEBUG: Non function type passed to registerPreTrackCallback\")};a.gb=function(b){a.ua(a.Ba,b)};a.Aa=[];a.registerPostTrackCallback=function(b){for(var c=[],f=1;f\u003Carguments.length;f++)c.push(arguments[f]);\"function\"==typeof b?a.Aa.push([b,c]):a.debugTracking\u0026\u0026a.D(\"DEBUG: Non function type passed to registerPostTrackCallback\")};a.fb=function(b){a.ua(a.Aa,b)};a.ua=function(b,\nc){if(\"object\"==typeof b)for(var f=0;f\u003Cb.length;f++){var g=b[f][0],h=b[f][1].slice();h.unshift(c);if(\"function\"==typeof g)try{g.apply(null,h)}catch(m){a.debugTracking\u0026\u0026a.D(m.message)}}};a.tl=a.trackLink=function(b,c,f,g,h){a.linkObject=b;a.linkType=c;a.linkName=f;h\u0026\u0026(a.k=b,a.v=h);return a.track(g)};a.trackLight=function(b,c,f,g){a.lightProfileID=b;a.lightStoreForSeconds=c;a.lightIncrementBy=f;return a.track(g)};a.clearVars=function(){var b,c;for(b=0;b\u003Ca.g.length;b++)if(c=a.g[b],\"prop\"==c.substring(0,\n4)||\"eVar\"==c.substring(0,4)||\"hier\"==c.substring(0,4)||\"list\"==c.substring(0,4)||\"channel\"==c||\"events\"==c||\"eventList\"==c||\"products\"==c||\"productList\"==c||\"purchaseID\"==c||\"transactionID\"==c||\"state\"==c||\"zip\"==c||\"campaign\"==c)a[c]=void 0};a.tagContainerMarker=\"\";a.pb=function(b,c){var f=a.hb()+\"\/\"+b+\"?AQB\\x3d1\\x26ndh\\x3d1\\x26pf\\x3d1\\x26\"+(a.ya()?\"callback\\x3ds_c_il[\"+a._in+\"].doPostbacks\\x26et\\x3d1\\x26\":\"\")+c+\"\\x26AQE\\x3d1\";a.gb(f);a.eb(f);a.W()};a.hb=function(){var b=a.ib();return\"http\"+(a.ssl?\n\"s\":\"\")+\":\/\/\"+b+\"\/b\/ss\/\"+a.account+\"\/\"+(a.mobile?\"5.\":\"\")+(a.ya()?\"10\":\"1\")+\"\/JS-\"+a.version+(a.Wb?\"T\":\"\")+(a.tagContainerMarker?\"-\"+a.tagContainerMarker:\"\")};a.ya=function(){return a.AudienceManagement\u0026\u0026a.AudienceManagement.isReady()||0!=a.usePostbacks};a.ib=function(){var b=a.dc,c=a.trackingServer;c?a.trackingServerSecure\u0026\u0026a.ssl\u0026\u0026(c=a.trackingServerSecure):(b=b?(\"\"+b).toLowerCase():\"d1\",\"d1\"==b?b=\"112\":\"d2\"==b\u0026\u0026(b=\"122\"),c=a.kb()+\".\"+b+\".2o7.net\");return c};a.kb=function(){var b=a.visitorNamespace;\nb||(b=a.account.split(\",\")[0],b=b.replace(\/[^0-9a-z]\/gi,\"\"));return b};a.Ya=\/{(%?)(.*?)(%?)}\/;a.$b=RegExp(a.Ya.source,\"g\");a.Gb=function(b){if(\"object\"==typeof b.dests)for(var c=0;c\u003Cb.dests.length;++c){var f=b.dests[c];if(\"string\"==typeof f.c\u0026\u0026\"aa.\"==f.id.substr(0,3))for(var g=f.c.match(a.$b),h=0;h\u003Cg.length;++h){var l=g[h],k=l.match(a.Ya),n=\"\";\"%\"==k[1]\u0026\u0026\"timezone_offset\"==k[2]?n=(new Date).getTimezoneOffset():\"%\"==k[1]\u0026\u0026\"timestampz\"==k[2]\u0026\u0026(n=a.Kb());f.c=f.c.replace(l,a.escape(n))}}};a.Kb=function(){var b=\nnew Date,c=new Date(6E4*Math.abs(b.getTimezoneOffset()));return a.j(4,b.getFullYear())+\"-\"+a.j(2,b.getMonth()+1)+\"-\"+a.j(2,b.getDate())+\"T\"+a.j(2,b.getHours())+\":\"+a.j(2,b.getMinutes())+\":\"+a.j(2,b.getSeconds())+(0\u003Cb.getTimezoneOffset()?\"-\":\"+\")+a.j(2,c.getUTCHours())+\":\"+a.j(2,c.getUTCMinutes())};a.j=function(a,c){return(Array(a+1).join(0)+c).slice(-a)};a.pa={};a.doPostbacks=function(b){if(\"object\"==typeof b)if(a.Gb(b),\"object\"==typeof a.AudienceManagement\u0026\u0026\"function\"==typeof a.AudienceManagement.isReady\u0026\u0026\na.AudienceManagement.isReady()\u0026\u0026\"function\"==typeof a.AudienceManagement.passData)a.AudienceManagement.passData(b);else if(\"object\"==typeof b\u0026\u0026\"object\"==typeof b.dests)for(var c=0;c\u003Cb.dests.length;++c){var f=b.dests[c];\"object\"==typeof f\u0026\u0026\"string\"==typeof f.c\u0026\u0026\"string\"==typeof f.id\u0026\u0026\"aa.\"==f.id.substr(0,3)\u0026\u0026(a.pa[f.id]=new Image,a.pa[f.id].alt=\"\",a.pa[f.id].src=f.c)}};a.eb=function(b){a.i||a.Ob();a.i.push(b);a.ia=a.B();a.Wa()};a.Ob=function(){a.i=a.Rb();a.i||(a.i=[])};a.Rb=function(){var b,c;if(a.oa()){try{(c=\nl.localStorage.getItem(a.ma()))\u0026\u0026(b=l.JSON.parse(c))}catch(f){}return b}};a.oa=function(){var b=!0;a.trackOffline\u0026\u0026a.offlineFilename\u0026\u0026l.localStorage\u0026\u0026l.JSON||(b=!1);return b};a.Ma=function(){var b=0;a.i\u0026\u0026(b=a.i.length);a.p\u0026\u0026b++;return b};a.W=function(){if(!a.p||(a.A\u0026\u0026a.A.complete\u0026\u0026a.A.F\u0026\u0026a.A.ra(),!a.p))if(a.Na=v,a.na)a.ia\u003Ea.P\u0026\u0026a.Ua(a.i),a.qa(500);else{var b=a.Ab();if(0\u003Cb)a.qa(b);else if(b=a.Ja())a.p=1,a.Sb(b),a.Vb(b)}};a.qa=function(b){a.Na||(b||(b=0),a.Na=setTimeout(a.W,b))};a.Ab=function(){if(!a.trackOffline||\n0\u003E=a.offlineThrottleDelay)return 0;var b=a.B()-a.Sa;return a.offlineThrottleDelay\u003Cb?0:a.offlineThrottleDelay-b};a.Ja=function(){if(0\u003Ca.i.length)return a.i.shift()};a.Sb=function(b){if(a.debugTracking){var c=\"AppMeasurement Debug: \"+b;b=b.split(\"\\x26\");var f;for(f=0;f\u003Cb.length;f++)c+=\"\\n\\t\"+a.unescape(b[f]);a.D(c)}};a.wa=function(){return a.marketingCloudVisitorID||a.analyticsVisitorID};a.Y=!1;try{var p=JSON.parse('{\"x\":\"y\"}')}catch(b){p=null}p\u0026\u0026\"y\"==p.x?(a.Y=!0,a.X=function(a){return JSON.parse(a)}):\nl.$\u0026\u0026l.$.parseJSON?(a.X=function(a){return l.$.parseJSON(a)},a.Y=!0):a.X=function(){return null};a.Vb=function(b){var c,f,g;a.wa()\u0026\u00262047\u003Cb.length\u0026\u0026(a.ab()\u0026\u0026(f=1,c=new XMLHttpRequest),c\u0026\u0026(a.AudienceManagement\u0026\u0026a.AudienceManagement.isReady()||0!=a.usePostbacks)\u0026\u0026(a.Y?c.Ea=!0:c=0));!c\u0026\u0026a.Xa\u0026\u0026(b=b.substring(0,2047));!c\u0026\u0026a.d.createElement\u0026\u0026(0!=a.usePostbacks||a.AudienceManagement\u0026\u0026a.AudienceManagement.isReady())\u0026\u0026(c=a.d.createElement(\"SCRIPT\"))\u0026\u0026\"async\"in c\u0026\u0026((g=(g=a.d.getElementsByTagName(\"HEAD\"))\u0026\u0026g[0]?\ng[0]:a.d.body)?(c.type=\"text\/javascript\",c.setAttribute(\"async\",\"async\"),f=2):c=0);c||(c=new Image,c.alt=\"\",c.abort||\"undefined\"===typeof l.InstallTrigger||(c.abort=function(){c.src=v}));c.Ta=Date.now();c.Ga=function(){try{c.F\u0026\u0026(clearTimeout(c.F),c.F=0)}catch(h){}};c.onload=c.ra=function(){c.Ta\u0026\u0026(a.ja=Date.now()-c.Ta);a.fb(b);c.Ga();a.Eb();a.da();a.p=0;a.W();if(c.Ea){c.Ea=!1;try{a.doPostbacks(a.X(c.responseText))}catch(h){}}};c.onabort=c.onerror=c.Ka=function(){c.Ga();(a.trackOffline||a.na)\u0026\u0026a.p\u0026\u0026\na.i.unshift(a.Db);a.p=0;a.ia\u003Ea.P\u0026\u0026a.Ua(a.i);a.da();a.qa(500)};c.onreadystatechange=function(){4==c.readyState\u0026\u0026(200==c.status?c.ra():c.Ka())};a.Sa=a.B();if(1==f)g=b.indexOf(\"?\"),f=b.substring(0,g),g=b.substring(g+1),g=g.replace(\/\u0026callback=[a-zA-Z0-9_.\\[\\]]+\/,\"\"),c.open(\"POST\",f,!0),c.withCredentials=!0,c.send(g);else if(c.src=b,2==f){if(a.Qa)try{g.removeChild(a.Qa)}catch(h){}g.firstChild?g.insertBefore(c,g.firstChild):g.appendChild(c);a.Qa=a.A}c.F=setTimeout(function(){c.F\u0026\u0026(c.complete?c.ra():(a.trackOffline\u0026\u0026\nc.abort\u0026\u0026c.abort(),c.Ka()))},5E3);a.Db=b;a.A=l[\"s_i_\"+a.replace(a.account,\",\",\"_\")]=c;if(a.useForcedLinkTracking\u0026\u0026a.L||a.v)a.forcedLinkTrackingTimeout||(a.forcedLinkTrackingTimeout=250),a.ea=setTimeout(a.da,a.forcedLinkTrackingTimeout)};a.ab=function(){return\"undefined\"!==typeof XMLHttpRequest\u0026\u0026\"withCredentials\"in new XMLHttpRequest?!0:!1};a.Eb=function(){if(a.oa()\u0026\u0026!(a.Ra\u003Ea.P))try{l.localStorage.removeItem(a.ma()),a.Ra=a.B()}catch(b){}};a.Ua=function(b){if(a.oa()){a.Wa();try{l.localStorage.setItem(a.ma(),\nl.JSON.stringify(b)),a.P=a.B()}catch(c){}}};a.Wa=function(){if(a.trackOffline){if(!a.offlineLimit||0\u003E=a.offlineLimit)a.offlineLimit=10;for(;a.i.length\u003Ea.offlineLimit;)a.Ja()}};a.forceOffline=function(){a.na=!0};a.forceOnline=function(){a.na=!1};a.ma=function(){return a.offlineFilename+\"-\"+a.visitorNamespace+a.account};a.B=function(){return(new Date).getTime()};a.Oa=function(a){a=a.toLowerCase();return 0!=a.indexOf(\"#\")\u0026\u00260!=a.indexOf(\"about:\")\u0026\u00260!=a.indexOf(\"opera:\")\u0026\u00260!=a.indexOf(\"javascript:\")?!0:\n!1};a.setTagContainer=function(b){var c,f;a.Wb=b;for(c=0;c\u003Ca._il.length;c++)if((f=a._il[c])\u0026\u0026\"s_l\"==f._c\u0026\u0026f.tagContainerName==b){a.T(f);if(f.lmq)for(c=0;c\u003Cf.lmq.length;c++){var g=f.lmq[c];a.loadModule(g.n)}if(f.ml)for(g in f.ml)if(a[g])for(c in b=a[g],g=f.ml[g],g)!Object.prototype[c]\u0026\u0026(\"function\"!=typeof g[c]||0\u003E(\"\"+g[c]).indexOf(\"s_c_il\"))\u0026\u0026(b[c]=g[c]);if(f.mmq)for(c=0;c\u003Cf.mmq.length;c++)g=f.mmq[c],a[g.m]\u0026\u0026(b=a[g.m],b[g.f]\u0026\u0026\"function\"==typeof b[g.f]\u0026\u0026(g.a?b[g.f].apply(b,g.a):b[g.f].apply(b)));if(f.tq)for(c=\n0;c\u003Cf.tq.length;c++)a.track(f.tq[c]);f.s=a;break}};a.Util={urlEncode:a.escape,urlDecode:a.unescape,cookieRead:a.cookieRead,cookieWrite:a.cookieWrite,getQueryParam:function(b,c,f,g){var h=\"\";c||(c=a.pageURL?a.pageURL:l.location);f=f?f:\"\\x26\";if(!b||!c)return h;c=\"\"+c;var m=c.indexOf(\"?\");if(0\u003Em)return h;c=f+c.substring(m+1)+f;if(!g||!(0\u003C=c.indexOf(f+b+f)||0\u003C=c.indexOf(f+b+\"\\x3d\"+f))){m=c.indexOf(\"#\");0\u003C=m\u0026\u0026(c=c.substr(0,m)+f);m=c.indexOf(f+b+\"\\x3d\");if(0\u003Em)return h;c=c.substring(m+f.length+b.length+\n1);m=c.indexOf(f);0\u003C=m\u0026\u0026(c=c.substring(0,m));0\u003Cc.length\u0026\u0026(h=a.unescape(c));return h}},getIeVersion:function(){if(document.documentMode)return document.documentMode;for(var a=7;4\u003Ca;a--){var c=document.createElement(\"div\");c.innerHTML=\"\\x3c!--[if IE \"+a+\"]\\x3e\\x3cspan\\x3e\\x3c\/span\\x3e\\x3c![endif]--\\x3e\";if(c.getElementsByTagName(\"span\").length)return a}return null}};a.G=\"supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData\".split(\" \");\na.g=a.G.concat(\"purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt\".split(\" \"));a.ka=\"timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy\".split(\" \");a.Q=a.ka.slice(0);a.Da=\"account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout useLinkTrackSessionStorage trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement\".split(\" \");\nfor(n=0;250\u003E=n;n++)76\u003En\u0026\u0026(a.g.push(\"prop\"+n),a.Q.push(\"prop\"+n)),a.g.push(\"eVar\"+n),a.Q.push(\"eVar\"+n),6\u003En\u0026\u0026a.g.push(\"hier\"+n),4\u003En\u0026\u0026a.g.push(\"list\"+n);n=\"pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID ms_a\".split(\" \");a.g=a.g.concat(n);a.G=a.G.concat(n);a.ssl=0\u003C=l.location.protocol.toLowerCase().indexOf(\"https\");a.charSet=\"UTF-8\";a.contextData={};a.offlineThrottleDelay=\n0;a.offlineFilename=\"AppMeasurement.offline\";a.R=\"s_sq\";a.Sa=0;a.ia=0;a.P=0;a.Ra=0;a.linkDownloadFileTypes=\"exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx\";a.w=l;a.d=l.document;try{if(a.Xa=!1,navigator){var y=navigator.userAgent;if(\"Microsoft Internet Explorer\"==navigator.appName||0\u003C=y.indexOf(\"MSIE \")||0\u003C=y.indexOf(\"Trident\/\")\u0026\u00260\u003C=y.indexOf(\"Windows NT 6\"))a.Xa=!0}}catch(b){}a.da=function(){a.ea\u0026\u0026(l.clearTimeout(a.ea),a.ea=v);a.k\u0026\u0026a.L\u0026\u0026a.k.dispatchEvent(a.L);a.v\u0026\u0026(\"function\"==typeof a.v?\na.v():a.k\u0026\u0026a.k.href\u0026\u0026(a.d.location=a.k.href));a.k=a.L=a.v=0};a.Va=function(){a.b=a.d.body;a.b?(a.u=function(b){var c,f,g;if(!(a.d\u0026\u0026a.d.getElementById(\"cppXYctnr\")||b\u0026\u0026b[\"s_fe_\"+a._in])){if(a.Fa)if(a.useForcedLinkTracking)a.b.removeEventListener(\"click\",a.u,!1);else{a.b.removeEventListener(\"click\",a.u,!0);a.Fa=a.useForcedLinkTracking=0;return}else a.useForcedLinkTracking=0;a.clickObject=b.srcElement?b.srcElement:b.target;try{if(!a.clickObject||a.O\u0026\u0026a.O==a.clickObject||!(a.clickObject.tagName||a.clickObject.parentElement||\na.clickObject.parentNode))a.clickObject=0;else{var h=a.O=a.clickObject;a.ha\u0026\u0026(clearTimeout(a.ha),a.ha=0);a.ha=setTimeout(function(){a.O==h\u0026\u0026(a.O=0)},1E4);var m=a.Ma();a.track();if(m\u003Ca.Ma()\u0026\u0026a.useForcedLinkTracking\u0026\u0026b.target){for(f=b.target;f\u0026\u0026f!=a.b\u0026\u0026\"A\"!=f.tagName.toUpperCase()\u0026\u0026\"AREA\"!=f.tagName.toUpperCase();)f=f.parentNode;if(f\u0026\u0026(g=f.href,a.Oa(g)||(g=0),c=f.target,b.target.dispatchEvent\u0026\u0026g\u0026\u0026(!c||\"_self\"==c||\"_top\"==c||\"_parent\"==c||l.name\u0026\u0026c==l.name))){try{var k=a.d.createEvent(\"MouseEvents\")}catch(z){k=\nnew l.MouseEvent}if(k){try{k.initMouseEvent(\"click\",b.bubbles,b.cancelable,b.view,b.detail,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,b.relatedTarget)}catch(z){k=0}k\u0026\u0026(k[\"s_fe_\"+a._in]=k.s_fe=1,b.stopPropagation(),b.stopImmediatePropagation\u0026\u0026b.stopImmediatePropagation(),b.preventDefault(),a.k=b.target,a.L=k)}}}}}catch(z){a.clickObject=0}}},a.b\u0026\u0026a.b.attachEvent?a.b.attachEvent(\"onclick\",a.u):a.b\u0026\u0026a.b.addEventListener\u0026\u0026(navigator\u0026\u0026(0\u003C=navigator.userAgent.indexOf(\"WebKit\")\u0026\u0026\na.d.createEvent||0\u003C=navigator.userAgent.indexOf(\"Firefox\/2\")\u0026\u0026l.MouseEvent)\u0026\u0026(a.Fa=1,a.useForcedLinkTracking=1,a.b.addEventListener(\"click\",a.u,!0)),a.b.addEventListener(\"click\",a.u,!1))):setTimeout(a.Va,30)};a.Fb();a.fc||(r?a.setAccount(r):a.D(\"Error, missing Report Suite ID in AppMeasurement initialization\"),a.Va(),a.loadModule(\"ActivityMap\"))}\nfunction s_gi(r){var a=window.s_c_il,l,v=r.split(\",\"),q,w,n=0;if(a)for(l=0;!n\u0026\u0026l\u003Ca.length;){var p=a[l];if(\"s_c\"==p._c\u0026\u0026(p.account||p.oun))if(p.account\u0026\u0026p.account==r)n=1;else{var y=p.account?p.account:p.oun;y=p.allAccounts?p.allAccounts:y.split(\",\");for(q=0;q\u003Cv.length;q++)for(w=0;w\u003Cy.length;w++)v[q]==y[w]\u0026\u0026(n=1)}l++}n?p.setAccount\u0026\u0026p.setAccount(r):p=new AppMeasurement(r);return p}AppMeasurement.getInstance=s_gi;window.s_objectID||(window.s_objectID=0);\nfunction s_pgicq(){var r=window,a=r.s_giq,l;if(a)for(l=0;l\u003Ca.length;l++){var v=a[l];var q=s_gi(v.oun);q.setAccount(v.un);q.setTagContainer(v.tagContainerName)}r.s_giq=0}s_pgicq();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":4
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"pcf.statechange"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"dialog:"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^(transactions|txn.*)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",92],
      "arg1":"login"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"transactions"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"(transaction:"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"(accountnicknamesuccess|changepasswordsuccess|messagesent|insights)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"2faentercode"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"^(transactions)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"page"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"type"
    },{
      "function":"_re",
      "arg0":["macro",108],
      "arg1":"^(page|search|sort|date|cat|type)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"cat"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"search"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"sort"
    },{
      "function":"_eq",
      "arg0":["macro",108],
      "arg1":"date"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"gtm.elementVisibility"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_56($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_57($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_58($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_59($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_60($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"offer-banner button:nth-child(2)"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"gtm.click"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"offer-banner button:nth-child(1)"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"sequence-two-factor-authentication button.btn-secondary, sequence-two-factor-authentication button.btn-secondary *"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"div.card-container a"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"dashboard"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_71($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"accountnicknamesuccess"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmccontact"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmc"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmcemployment"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmcauthuser"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmcaddauthuserextras"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmcfinaltcs"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmcaddapproved"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"applypcmcaddprocessing"
    },{
      "function":"_eq",
      "arg0":["macro",113],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",110],
      "arg1":"Something went wrong on our end"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"applications"
    },{
      "function":"_eq",
      "arg0":["macro",110],
      "arg1":"OK"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"application"
    },{
      "function":"_cn",
      "arg0":["macro",114],
      "arg1":"btn btn-primary-sml"
    },{
      "function":"_sw",
      "arg0":["macro",3],
      "arg1":"apply"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_151($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"insights"
    },{
      "function":"_re",
      "arg0":["macro",117],
      "arg1":"^(unit|date|detail|accounts)$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"detail"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"date"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"unit"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"accounts"
    },{
      "function":"_cn",
      "arg0":["macro",93],
      "arg1":"beta"
    },{
      "function":"_cn",
      "arg0":["macro",110],
      "arg1":"Get started"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_211($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",110],
      "arg1":"Let"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_212($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"pilotfaq"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_219($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"div.ctas a"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_234($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"automaticpayments"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"preauth_payment_registrationform.pdf"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_83($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"preauth_payment_cancellation.pdf"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_84($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"pcfinancial.ca\/faqs"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"usersupport"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_88($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"pcfinancial.ca\/contact-us"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_91($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"pcfinancial.ca\/about-us"
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"usersupport"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_89($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",24],
      "arg1":"pcoptimum.ca"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_90($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"#tutorial-toggle"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"credit-card"
    },{
      "function":"_re",
      "arg0":["macro",110],
      "arg1":"csv",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",110],
      "arg1":"quicken",
      "ignore_case":true
    },{
      "function":"_css",
      "arg0":["macro",19],
      "arg1":"button.btn-logout"
    },{
      "function":"_sw",
      "arg0":["macro",24],
      "arg1":"tel:"
    },{
      "function":"_re",
      "arg0":["macro",109],
      "arg1":"(^$|((^|,)9139982_100($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"messagesent"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"customeroverview"
    },{
      "function":"_re",
      "arg0":["macro",136],
      "arg1":"(resaddresssaved|phonesaved|emailsaved|employmentsaved)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",3],
      "arg1":"applypcmc"
    }],
  "rules":[
    [["if",0],["add",0,16,81,86,101,105]],
    [["if",0,7],["add",1]],
    [["if",0,8,9],["add",2]],
    [["if",0,8,10],["add",3]],
    [["if",0,2],["add",4,82],["block",0,16,81,101,105]],
    [["if",0,8,12],["add",5]],
    [["if",0,8,13],["add",6]],
    [["if",0,8,14],["add",7,9]],
    [["if",0,8,15],["add",8]],
    [["if",16,17],["add",10,83]],
    [["if",16,18],["add",10,83]],
    [["if",16,19],["add",10,83]],
    [["if",16,20],["add",10,83]],
    [["if",16,21],["add",10,83]],
    [["if",22,23],["add",11,85]],
    [["if",23,24],["add",12,84]],
    [["if",23,25],["add",13]],
    [["if",26,27,28,29],["add",14,128]],
    [["if",0,30],["add",15,87]],
    [["if",31],["add",17,18,30,80,102,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79]],
    [["if",0,32],["add",19,34,103,111]],
    [["if",0,33],["add",20,27,33]],
    [["if",0,34],["add",21,35,104,112]],
    [["if",0,35],["add",22,36,106,113]],
    [["if",0,36],["add",23,37,107,114]],
    [["if",0,37],["add",24,38,108,115]],
    [["if",0,38],["add",25,28,31,117,120,121]],
    [["if",0,39],["add",26,28,32,109,110,116]],
    [["if",0,27,40],["add",29,41]],
    [["if",23,41,42],["add",39]],
    [["if",23,43,44,45],["add",40]],
    [["if",0,46],["add",42,119]],
    [["if",16,47],["add",43,122]],
    [["if",0,48],["add",44,123]],
    [["if",0,48,50],["add",45,125]],
    [["if",0,48,51],["add",46,124]],
    [["if",0,48,52],["add",47,126]],
    [["if",0,48,53],["add",48,127]],
    [["if",28,54,55,56],["add",49]],
    [["if",28,54,57,58],["add",50]],
    [["if",16,59,60],["add",51]],
    [["if",4,28,61,62],["add",52,129]],
    [["if",28,63,64,65],["add",88]],
    [["if",28,63,66,67],["add",89]],
    [["if",28,68,69,70],["add",90]],
    [["if",28,69,71,72],["add",91]],
    [["if",28,73,74,75],["add",92]],
    [["if",28,69,76,77],["add",93]],
    [["if",23,69,78],["add",94]],
    [["if",4,23,79,80],["add",95]],
    [["if",4,23,79,81],["add",96]],
    [["if",23,82],["add",97]],
    [["if",28,83,84],["add",98]],
    [["if",0,85],["add",99]],
    [["if",0,86,87],["add",100]],
    [["if",0,88],["add",118]],
    [["if",0,1],["block",0,4,16,81,82,101,105]],
    [["if",0,3],["block",0,16,81,101,105]],
    [["if",0,4,5],["block",0,4,16,81,82,101,105]],
    [["if",0,6],["block",0,16,81,101,105]],
    [["if",0,8,11],["block",4,82]],
    [["if",0,48,49],["block",44,123]]]
},
"runtime":[
[],[]
]



};
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},da;if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={sf:!0},ia={};try{ia.__proto__=ha;fa=ia.sf;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ka=da,la=this||self,ma=/^[\w+/_-]+[=]{0,2}$/,oa=null;var pa=function(){},qa=function(a){return"function"==typeof a},f=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},t=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ca=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};xa.prototype.contains=function(a){return void 0!==this.get(a)};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),g=0;g<e.length-1;g++)d=d[e[g]]={};d[e[e.length-1]]=b;return c};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ma=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Na=function(a){if(null==a)return String(a);var b=Ma.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Oa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Pa=function(a){if(!a||"object"!=Na(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Oa(a,"constructor")&&!Oa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Oa(a,b)},C=function(a,b){var c=b||("array"==Na(a)?[]:{}),d;for(d in a)if(Oa(a,d)){var e=a[d];"array"==Na(e)?("array"!=Na(c[d])&&(c[d]=[]),c[d]=C(e,c[d])):Pa(e)?(Pa(c[d])||(c[d]={}),c[d]=C(e,c[d])):c[d]=e}return c};
var Qa=[],Ra={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Sa=function(a){return Ra[a]},Ta=/[\x00\x22\x26\x27\x3c\x3e]/g;var Xa=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,Ya={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},bb=function(a){return Ya[a]};Qa[7]=function(a){return String(a).replace(Xa,bb)};
Qa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Xa,bb)+"'"}};var kb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,lb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},mb=function(a){return lb[a]};Qa[16]=function(a){return a};var ob;
var pb=[],qb=[],rb=[],sb=[],ub=[],vb={},wb,xb,yb,zb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Ab=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=vb[c],e={},g;for(g in a)a.hasOwnProperty(g)&&0===g.indexOf("vtp_")&&(e[void 0!==d?g:g.substr(4)]=a[g]);return void 0!==d?d(e):ob(c,e,b)},Cb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Bb(a[e],b,c));
return d},Db=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=vb[b];return c?c.priorityOverride||0:0},Bb=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Bb(a[e],b,c));return d;case "macro":var g=a[1];if(c[g])return;var h=pb[g];if(!h||b.Jc(h))return;c[g]=!0;try{var k=Cb(h,b,c);k.vtp_gtmEventId=b.id;d=Ab(k,b);yb&&(d=yb.Uf(d,k))}catch(y){b.he&&b.he(y,Number(g)),d=!1}c[g]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Bb(a[l],b,c)]=Bb(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Bb(a[n],b,c);xb&&(m=m||q===xb.zb);d.push(q)}return xb&&m?xb.Xf(d):d.join("");case "escape":d=Bb(a[1],b,c);if(xb&&ua(a[1])&&"macro"===a[1][0]&&xb.Dg(a))return xb.Og(d);d=String(d);for(var u=2;u<a.length;u++)Qa[a[u]]&&(d=Qa[a[u]](d));return d;case "tag":var p=a[1];if(!sb[p])throw Error("Unable to resolve tag reference "+p+".");return d={Wd:a[2],
index:p};case "zb":var r={arg0:a[2],arg1:a[3],ignore_case:a[5]};r["function"]=a[1];var v=Fb(r,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fb=function(a,b,c){try{return wb(Cb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Gb=function(){var a=function(b){return{toString:function(){return b}}};return{ld:a("convert_case_to"),md:a("convert_false_to"),nd:a("convert_null_to"),od:a("convert_true_to"),pd:a("convert_undefined_to"),uh:a("debug_mode_metadata"),ma:a("function"),ff:a("instance_name"),hf:a("live_only"),jf:a("malware_disabled"),kf:a("metadata"),wh:a("original_vendor_template_id"),lf:a("once_per_event"),Jd:a("once_per_load"),Kd:a("setup_tags"),Ld:a("tag_id"),Md:a("teardown_tags")}}();var Hb=null,Kb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Hb=Ib(a);for(var e=0;e<qb.length;e++){var g=qb[e],h=Jb(g);if(h){for(var k=g.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(g.block||[])}else null===h&&b(g.block||[])}for(var m=[],n=0;n<sb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Jb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Hb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],g=0;g<e.length;g++){var h=Hb(e[g]);if(2===h)return null;
if(1===h)return!1}return!0},Ib=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Fb(rb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Xb,Yb=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.Gf&&(l["fix_"+m]=!0),l.Xd=l.Xd||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},q={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=q.startTag();
if(p){var r=k.slice(p.length);if(r.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=r.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,M:p.M,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var r={};p[2].replace(e,function(v,w,y,x,z){var B=y||x||z||g.test(w)&&w||null,A=document.createElement("div");A.innerHTML=B;r[w]=A.textContent||A.innerText||B});return{tagName:p[1],M:r,ob:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var r=q[p]();return r?(r.type=r.type||p,r.text=k.substr(0,r.length),k=k.slice(r.length),r):null}};l.Xd&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,r=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.fe=function(){return this[this.length-1]};v.Mc=function(A){var E=this.fe();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Tf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.ob=p.test(A.tagName)||A.ob);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Mc("TABLE")?(k="<TBODY>"+k,B()):l.Hh&&r.test(E)&&v.Tf(E)?v.Mc(E)?x():(k="</"+A.tagName+">"+k,B()):A.ob||v.push(A)},endTag:function(A){v.fe()?l.gg&&!v.Mc(A.tagName)?x():v.pop():l.gg&&(y(),B())}},B=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){B();return w(y())}}();return{append:function(p){k+=p},Xg:u,Oh:function(p){for(var r;(r=u())&&(!p[r.type]||!1!==p[r.type](r)););},clear:function(){var p=k;k="";return p},Ph:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Vh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Qh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,g=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.Wh=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,q;for(q in m.M){var u=m.M[q];
n+=" "+q+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.ob?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.Gh=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.Kf=a.Kf||!b[h]&&h;Xb=a})();(function(){function a(){}function b(q){return void 0!==q&&null!==q}function c(q,u,p){var r,v=q&&q.length||0;for(r=0;r<v;r++)u.call(p,q[r],r)}function d(q,u,p){for(var r in q)q.hasOwnProperty(r)&&u.call(p,r,q[r])}function e(q,
u){d(u,function(p,r){q[p]=r});return q}function g(q,u){q=q||{};d(u,function(p,r){b(q[p])||(q[p]=r)});return q}function h(q){try{return m.call(q)}catch(p){var u=[];c(q,function(r){u.push(r)});return u}}var k={wf:a,xf:a,yf:a,zf:a,Hf:a,If:function(q){return q},done:a,error:function(q){throw q;},ah:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function q(p,r,v){var w="data-ps-"+r;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,r){var v=p.ownerDocument;e(this,{root:p,options:r,qb:v.defaultView||v.parentWindow,Ga:v,Ub:Xb("",{Gf:!0}),yc:[p],Vc:"",Wc:v.createElement(p.nodeName),nb:[],sa:[]});q(this.Wc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.sa,arguments);for(var p;!this.Lb&&this.sa.length;)p=this.sa.shift(),"function"===typeof p?this.Of(p):this.fd(p)};u.prototype.Of=function(p){var r={type:"function",value:p.name||p.toString()};this.Sc(r);p.call(this.qb,this.Ga);this.je(r)};
u.prototype.fd=function(p){this.Ub.append(p);for(var r,v=[],w,y;(r=this.Ub.Xg())&&!(w=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("script"):!1)&&!(y=r&&"tagName"in r?!!~r.tagName.toLowerCase().indexOf("style"):!1);)v.push(r);this.sh(v);w&&this.mg(r);y&&this.ng(r)};u.prototype.sh=function(p){var r=this.Lf(p);r.Pd&&(r.Hc=this.Vc+r.Pd,this.Vc+=r.Tg,this.Wc.innerHTML=r.Hc,this.qh())};u.prototype.Lf=function(p){var r=this.yc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.M){if(!/^noscript$/i.test(x.tagName)){var z=
r++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.M.id&&"ps-style"!==x.M.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.ob?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Xh:p,raw:v.join(""),Pd:w.join(""),Tg:y.join("")}};u.prototype.qh=function(){for(var p,r=[this.Wc];b(p=r.shift());){var v=1===p.nodeType;if(!v||!q(p,"proxyof")){v&&(this.yc[q(p,"id")]=p,q(p,"id",null));var w=p.parentNode&&q(p.parentNode,"proxyof");
w&&this.yc[w].appendChild(p)}r.unshift.apply(r,h(p.childNodes))}};u.prototype.mg=function(p){var r=this.Ub.clear();r&&this.sa.unshift(r);p.src=p.M.src||p.M.xh;p.src&&this.nb.length?this.Lb=p:this.Sc(p);var v=this;this.rh(p,function(){v.je(p)})};u.prototype.ng=function(p){var r=this.Ub.clear();r&&this.sa.unshift(r);p.type=p.M.type||p.M.yh||"text/css";this.th(p);r&&this.write()};u.prototype.th=function(p){var r=this.Nf(p);this.Ag(r);p.content&&(r.styleSheet&&!r.sheet?r.styleSheet.cssText=p.content:
r.appendChild(this.Ga.createTextNode(p.content)))};u.prototype.Nf=function(p){var r=this.Ga.createElement(p.tagName);r.setAttribute("type",p.type);d(p.M,function(v,w){r.setAttribute(v,w)});return r};u.prototype.Ag=function(p){this.fd('<span id="ps-style"/>');var r=this.Ga.getElementById("ps-style");r.parentNode.replaceChild(p,r)};u.prototype.Sc=function(p){p.Kg=this.sa;this.sa=[];this.nb.unshift(p)};u.prototype.je=function(p){p!==this.nb[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.nb.shift(),this.write.apply(this,p.Kg),!this.nb.length&&this.Lb&&(this.Sc(this.Lb),this.Lb=null))};u.prototype.rh=function(p,r){var v=this.Mf(p),w=this.gh(v),y=this.options.wf;p.src&&(v.src=p.src,this.eh(v,w?y:function(){r();y()}));try{this.zg(v),p.src&&!w||r()}catch(x){this.options.error(x),r()}};u.prototype.Mf=function(p){var r=this.Ga.createElement(p.tagName);d(p.M,function(v,w){r.setAttribute(v,w)});p.content&&(r.text=p.content);return r};u.prototype.zg=function(p){this.fd('<span id="ps-script"/>');
var r=this.Ga.getElementById("ps-script");r.parentNode.replaceChild(p,r)};u.prototype.eh=function(p,r){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();r()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),r())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);r()}})};u.prototype.gh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.ah&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function q(){var w=r.shift(),y;w&&(y=w[w.length-1],y.xf(),w.stream=u.apply(null,w),y.yf())}function u(w,y,x){function z(J){J=x.If(J);v.write(J);x.zf(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var B=w.ownerDocument,A={close:B.close,open:B.open,write:B.write,writeln:B.writeln};e(B,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.qb.onerror||a;v.qb.onerror=function(J,M,R){x.error({Lh:J+
" - "+M+":"+R});E.apply(v.qb,arguments)};v.write(y,function(){e(B,A);v.qb.onerror=E;x.done();v=null;q()});return v}var p=0,r=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=g(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Kh?w[0]:w;var z=[w,y,x];w.Ng={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.Hf(z);r.push(z);v||q();return w.Ng},{streams:{},Nh:r,zh:n})}();Yb=l.postscribe}})();var D=window,F=document,Zb=navigator,$b=F.currentScript&&F.currentScript.src,ac=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},bc=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},cc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;bc(d,b);c&&(d.onerror=c);var e;if(null===oa)b:{var g=la.document,h=g.querySelector&&g.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&ma.test(k)){oa=k;break b}}oa=""}e=oa;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},dc=function(){if($b){var a=$b.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ec=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);bc(c,b);void 0!==a&&(c.src=a);return c},fc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},gc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},hc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},ic=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},jc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},kc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},lc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var g=a,h=0;g&&h<=c;h++){if(d[String(g.tagName).toLowerCase()])return g;
g=g.parentElement}return null},mc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var oc=function(a){return nc?F.querySelectorAll(a):null},pc=function(a,b){if(!nc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},qc=!1;if(F.querySelectorAll)try{var sc=F.querySelectorAll(":root");sc&&1==sc.length&&sc[0]==F.documentElement&&(qc=!0)}catch(a){}var nc=qc;var H={la:"_ee",gc:"event_callback",Ra:"event_timeout",w:"gtag.config",O:"allow_ad_personalization_signals",oc:"restricted_data_processing",U:"cookie_expires",Qa:"cookie_update",Ba:"session_duration",V:"user_properties"};var Ic=/[A-Z]+/,Jc=/\s/,Kc=function(a){if(f(a)&&(a=Ea(a),!Jc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Ic.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],h:d}}}}},Mc=function(a){for(var b={},c=0;c<a.length;++c){var d=Kc(a[c]);d&&(b[d.id]=d)}Lc(b);var e=[];za(b,function(g,h){e.push(h)});return e};
function Lc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.h[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Nc={},Oc=null,Pc=Math.random();Nc.m="GTM-PFXFL37";Nc.Db="c61";var Qc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Rc="www.googletagmanager.com/gtm.js";var Sc=Rc,Tc=null,Uc=null,Vc=null,Wc="//www.googletagmanager.com/a?id="+Nc.m+"&cv=167",Xc={},Yc={},Zc=function(){var a=Oc.sequence||0;Oc.sequence=a+1;return a};var $c={},I=function(a,b){$c[a]=$c[a]||[];$c[a][b]=!0},ad=function(a){for(var b=[],c=$c[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var cd=function(){return"&tc="+sb.filter(function(a){return a}).length},fd=function(){dd||(dd=D.setTimeout(ed,500))},ed=function(){dd&&(D.clearTimeout(dd),dd=void 0);void 0===gd||hd[gd]&&!id&&!jd||(kd[gd]||ld.Fg()||0>=md--?(I("GTM",1),kd[gd]=!0):(ld.Zg(),fc(nd()),hd[gd]=!0,od=jd=id=""))},nd=function(){var a=gd;if(void 0===a)return"";var b=ad("GTM"),c=ad("TAGGING");return[pd,hd[a]?"":"&es=1",qd[a],b?"&u="+b:"",c?"&ut="+c:"",cd(),id,jd,od,"&z=0"].join("")},rd=function(){return[Wc,"&v=3&t=t","&pid="+
wa(),"&rv="+Nc.Db].join("")},sd="0.005000">Math.random(),pd=rd(),td=function(){pd=rd()},hd={},id="",jd="",od="",gd=void 0,qd={},kd={},dd=void 0,ld=function(a,b){var c=0,d=0;return{Fg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Zg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),md=1E3,ud=function(a,b){if(sd&&!kd[a]&&gd!==a){ed();gd=a;id="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";qd[a]="&e="+c+"&eid="+a;fd()}},vd=function(a,b,c){if(sd&&!kd[a]&&b){a!==gd&&
(ed(),gd=a);var d=String(b[Gb.ma]||"").replace(/_/g,"");0===d.indexOf("cvt")&&(d="cvt");var e=c+d;id=id?id+"."+e:"&tr="+e;fd();2022<=nd().length&&ed()}},wd=function(a,b,c){if(sd&&!kd[a]){a!==gd&&(ed(),gd=a);var d=c+b;jd=jd?jd+"."+d:"&epr="+d;fd();2022<=nd().length&&ed()}};var xd={},yd=new xa,zd={},Ad={},Dd={name:"dataLayer",set:function(a,b){C(La(a,b),zd);Bd()},get:function(a){return Cd(a,2)},reset:function(){yd=new xa;zd={};Bd()}},Cd=function(a,b){if(2!=b){var c=yd.get(a);if(sd){var d=Ed(a);c!==d&&I("GTM",5)}return c}return Ed(a)},Ed=function(a,b,c){var d=a.split("."),e=!1,g=void 0;return e?g:Gd(d)},Gd=function(a){for(var b=zd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Id=function(a,b){Ad.hasOwnProperty(a)||(yd.set(a,b),C(La(a,b),zd),Bd())},Bd=function(a){za(Ad,function(b,c){yd.set(b,c);C(La(b,void 0),zd);C(La(b,c),zd);a&&delete Ad[b]})},Jd=function(a,b,c){xd[a]=xd[a]||{};var d=1!==c?Ed(b):yd.get(b);"array"===Na(d)||"object"===Na(d)?xd[a][b]=C(d):xd[a][b]=d},Kd=function(a,b){if(xd[a])return xd[a][b]};var Ld=function(){var a=!1;return a};var P=function(a,b,c,d){return(2===Md()||d||"http:"!=D.location.protocol?a:b)+c},Md=function(){var a=dc(),b;if(1===a)a:{var c=Sc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,g=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===g&&0===l.indexOf(d)&&(g=2)}}b=g}else b=a;return b};var ae=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),be={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},ce={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},de="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var fe=function(a){Yc.pntr=Yc.pntr||["nonGoogleScripts"];Yc.snppx=Yc.snppx||["nonGoogleScripts"];Yc.qpx=Yc.qpx||["nonGooglePixels"];var b=Cd("gtm.whitelist");b&&I("GTM",9);
var c=b&&Ka(Da(b),be),d=Cd("gtm.blacklist");d||(d=Cd("tagTypeBlacklist"))&&I("GTM",3);d?I("GTM",8):d=[];ee()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=t(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),ce),g={};return function(h){var k=h&&h[Gb.ma];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==g[k])return g[k];
var l=Yc[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>t(c,k))if(l&&0<l.length)for(var q=0;q<l.length;q++){if(0>t(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=t(e,k);if(p)u=p;else{var r=ya(e,l||[]);r&&I("GTM",10);u=r}}var v=!m||u;v||!(0<=t(l,"sandboxedScripts"))||c&&-1!==t(c,"sandboxedScripts")||(v=ya(e,de));return g[k]=v}},ee=function(){return ae.test(D.location&&D.location.hostname)};var ge={Uf:function(a,b){b[Gb.ld]&&"string"===typeof a&&(a=1==b[Gb.ld]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Gb.nd)&&null===a&&(a=b[Gb.nd]);b.hasOwnProperty(Gb.pd)&&void 0===a&&(a=b[Gb.pd]);b.hasOwnProperty(Gb.od)&&!0===a&&(a=b[Gb.od]);b.hasOwnProperty(Gb.md)&&!1===a&&(a=b[Gb.md]);return a}};var he={active:!0,isWhitelisted:function(){return!0}},ie=function(a){var b=Oc.zones;!b&&a&&(b=Oc.zones=a());return b};var je=function(){};var ke=!1,le=0,me=[];function ne(a){if(!ke){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){ke=!0;for(var e=0;e<me.length;e++)G(me[e])}me.push=function(){for(var g=0;g<arguments.length;g++)G(arguments[g]);return 0}}}function oe(){if(!ke&&140>le){le++;try{F.documentElement.doScroll("left"),ne()}catch(a){D.setTimeout(oe,50)}}}var pe=function(a){ke?a():me.push(a)};var qe={},re={},se=function(a,b,c,d){if(!re[a]||Qc[b]||"__zone"===b)return-1;var e={};Pa(d)&&(e=C(d,e));e.id=c;e.status="timeout";return re[a].tags.push(e)-1},te=function(a,b,c,d){if(re[a]){var e=re[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function ue(a){for(var b=qe[a]||[],c=0;c<b.length;c++)b[c]();qe[a]={push:function(d){d(Nc.m,re[a])}}}
var xe=function(a,b,c){re[a]={tags:[]};qa(b)&&ve(a,b);c&&D.setTimeout(function(){return ue(a)},Number(c));return we(a)},ve=function(a,b){qe[a]=qe[a]||[];qe[a].push(Ha(function(){return G(function(){b(Nc.m,re[a])})}))};function we(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&ue(a)})},Ef:function(){d=!0;b>=c&&ue(a)}}};var ye=function(){function a(d){return!ra(d)||0>d?0:d}if(!Oc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Dd.get("gtm.start"))?Dd.get("gtm.start"):0;Oc._li={cst:a(c-b),cbt:a(Uc-b)}}};var Ce=!1,De=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ee=!1;
var Fe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}ye();return D[b]},Ge=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=De();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Ie=function(){},He=function(){return D.GoogleAnalyticsObject||"ga"};/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Ke=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Le=/:[0-9]+$/,Me=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var g=d[e].split("=");if(decodeURIComponent(g[0]).replace(/\+/g," ")===b){var h=g.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Pe=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=Ne(a.protocol)||Ne(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Le,"").toLowerCase());var g=b,h,k=Ne(a.protocol);g&&(g=String(g).toLowerCase());switch(g){case "url_no_fragment":h=Oe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Le,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=t(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Me(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},Ne=function(a){return a?a.replace(":","").toLowerCase():""},Oe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Qe=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Le,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function Ve(a,b,c,d){var e=sb[a],g=We(a,b,c,d);if(!g)return null;var h=Bb(e[Gb.Kd],c,[]);if(h&&h.length){var k=h[0];g=Ve(k.index,{s:g,o:1===k.Wd?b.terminate:g,terminate:b.terminate},c,d)}return g}
function We(a,b,c,d){function e(){if(g[Gb.jf])k();else{var w=Cb(g,c,[]),y=se(c.id,String(g[Gb.ma]),Number(g[Gb.Ld]),w[Gb.kf]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-B;vd(c.id,sb[a],"5");te(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-B;vd(c.id,sb[a],"6");te(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=g.tag_id;
w.vtp_gtmEventId=c.id;vd(c.id,g,"1");var z=function(){var A=Fa()-B;vd(c.id,g,"7");te(c.id,y,"exception",A);x||(x=!0,k())};var B=Fa();try{Ab(w,c)}catch(A){z(A)}}}var g=sb[a],h=b.s,k=b.o,l=b.terminate;if(c.Jc(g))return null;var m=Bb(g[Gb.Md],c,[]);if(m&&m.length){var n=m[0],q=Ve(n.index,{s:h,o:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.Wd?l:q}if(g[Gb.Jd]||g[Gb.lf]){var u=g[Gb.Jd]?ub:c.ih,p=h,r=k;if(!u[a]){e=Ha(e);var v=Xe(a,u,e);h=v.s;k=v.o}return function(){u[a](p,r)}}return e}
function Xe(a,b,c){var d=[],e=[];b[a]=Ye(d,e,c);return{s:function(){b[a]=Ze;for(var g=0;g<d.length;g++)d[g]()},o:function(){b[a]=$e;for(var g=0;g<e.length;g++)e[g]()}}}function Ye(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Ze(a){a()}function $e(a,b){b()};var cf=function(a,b){for(var c=[],d=0;d<sb.length;d++)if(a.kb[d]){var e=sb[d];var g=b.add();try{var h=Ve(d,{s:g,o:g,terminate:g},a,d);h?c.push({ze:d,oe:Db(e),eg:h}):(af(d,a),g())}catch(l){g()}}b.Ef();c.sort(bf);for(var k=0;k<c.length;k++)c[k].eg();return 0<c.length};function bf(a,b){var c,d=b.oe,e=a.oe;c=d>e?1:d<e?-1:0;var g;if(0!==c)g=c;else{var h=a.ze,k=b.ze;g=h>k?1:h<k?-1:0}return g}
function af(a,b){if(!sd)return;var c=function(d){var e=b.Jc(sb[d])?"3":"4",g=Bb(sb[d][Gb.Kd],b,[]);g&&g.length&&c(g[0].index);vd(b.id,sb[d],e);var h=Bb(sb[d][Gb.Md],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var df=!1,ef=function(a,b,c,d,e){if("gtm.js"==b){if(df)return!1;df=!0}ud(a,b);var g=xe(a,d,e);Jd(a,"event",1);Jd(a,"ecommerce",1);Jd(a,"gtm");var h={id:a,name:b,Jc:fe(c),kb:[],ih:[],he:function(){I("GTM",6)}};h.kb=Kb(h);var k=cf(h,g);
if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=sb[l];if(m&&!Qc[String(m[Gb.ma])])return!0}return!1};var gf=/^https?:\/\/www\.googletagmanager\.com/;function hf(){var a;return a}function kf(a,b){}
function jf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function lf(){var a=!1;return a};var mf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.Ma={};this.globalConfig={};this.s=function(){};this.o=function(){}},nf=function(a){var b=new mf;b.eventModel=a;return b},of=function(a,b){a.targetConfig=b;return a},pf=function(a,b){a.containerConfig=b;return a},qf=function(a,b){a.Ma=b;return a},rf=function(a,b){a.globalConfig=b;return a},sf=function(a,b){a.s=b;return a},tf=function(a,b){a.o=b;return a};
mf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.Ma[a])return this.Ma[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var uf=function(a){function b(e){za(e,function(g){c[g]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var vf={},wf=["G"];vf.Be="";var xf=vf.Be.split(",");function yf(){var a=Oc;return a.gcq=a.gcq||new zf}
var Af=function(a,b,c){yf().register(a,b,c)},Bf=function(a,b,c,d){yf().push("event",[b,a],c,d)},Cf=function(a,b){yf().push("config",[a],b)},Df={},Ef=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.Ma={};this.pe=null;this.ae=!1},Ff=function(a,b,c,d,e){this.type=a;this.Ae=b;this.L=c||"";this.Hb=d;this.defer=e},zf=function(){this.Sd={};this.$d={};this.eb=[]},Gf=function(a,b){var c=Kc(b);return a.Sd[c.containerId]=a.Sd[c.containerId]||new Ef},Hf=function(a,b,c,d){if(d.L){var e=
Gf(a,d.L),g=e.pe;if(g){var h=C(c),k=C(e.targetConfig[d.L]),l=C(e.containerConfig),m=C(e.Ma),n=C(a.$d),q=Cd("gtm.uniqueEventId"),u=Kc(d.L).prefix,p=tf(sf(rf(qf(pf(of(nf(h),k),l),m),n),function(){wd(q,u,"2");}),function(){wd(q,u,"3");});try{wd(q,u,"1");3===g.length?g(b,d.Ae,p):4===g.length&&
g(d.L,b,d.Ae,p)}catch(r){wd(q,u,"4");}}}};
zf.prototype.register=function(a,b,c){if(3!==Gf(this,a).status){Gf(this,a).pe=b;Gf(this,a).status=3;c&&(Gf(this,a).Ma=c);var d=Kc(a),e=Df[d.containerId];if(void 0!==e){var g=Oc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Oc[d.containerId]._spx&&(h=h.toLowerCase());var k=Cd("gtm.uniqueEventId"),l=h,m=Fa()-g;if(sd&&!kd[k]){k!==gd&&(ed(),gd=k);var n=l+"."+Math.floor(g-e)+"."+Math.floor(m);od=od?od+","+n:"&cl="+n}delete Df[d.containerId]}this.flush()}};
zf.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var g=Kc(c),h;if(h=g){var k;if(k=1===Gf(this,c).status)a:{var l=g.prefix;k=!0}h=k}if(h&&(Gf(this,c).status=2,this.push("require",[],g.containerId),Df[g.containerId]=Fa(),!Ld())){var m=encodeURIComponent(g.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";cc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.eb.push(new Ff(a,e,c,b,d));d||this.flush()};
zf.prototype.flush=function(a){for(var b=this;this.eb.length;){var c=this.eb[0];if(c.defer)c.defer=!1,this.eb.push(c);else switch(c.type){case "require":if(3!==Gf(this,c.L).status&&!a)return;break;case "set":za(c.Hb[0],function(l,m){C(La(l,m),b.$d)});break;case "config":var d=c.Hb[0],e=!!d[H.yb];delete d[H.yb];var g=Gf(this,c.L),h=Kc(c.L),k=h.containerId===h.id;e||(k?g.containerConfig={}:g.targetConfig[c.L]={});g.ae&&e||Hf(this,H.w,d,c);g.ae=!0;delete d[H.la];k?C(d,g.containerConfig):C(d,g.targetConfig[c.L]);
break;case "event":Hf(this,c.Hb[1],c.Hb[0],c)}this.eb.shift()}};var If=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),g=0;g<e.length;g++){var h=e[g].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Lf=function(a,b,c,d){var e=Jf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Kf(e,function(g){return g.Mb},b);if(1===e.length)return e[0].id;e=Kf(e,function(g){return g.lb},c);return e[0]?e[0].id:void 0}};
function Mf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=If(b,e).indexOf(c)}
var Qf=function(a,b,c,d,e,g){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{g&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var r=h[p];if(null!=r)switch(p){case "secure":r&&(m+="; secure");break;case "domain":q=r;break;default:"path"==p&&(u=r),"expires"==p&&r instanceof Date&&(r=
r.toUTCString()),m+="; "+p+"="+r}}if("auto"===q){for(var v=Nf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Pf(y,u)&&Mf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Pf(q,u)&&Mf(m,a,l)}return k};function Kf(a,b,c){for(var d=[],e=[],g,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===g||l<g?(e=[k],g=l):l===g&&e.push(k)}return 0<d.length?d:e}
function Jf(a,b){for(var c=[],d=If(a),e=0;e<d.length;e++){var g=d[e].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var k=g.shift();k&&(k=k.split("-"),c.push({id:g.join("."),Mb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var Rf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Sf=/(^|\.)doubleclick\.net$/i,Pf=function(a,b){return Sf.test(document.location.hostname)||"/"===b&&Rf.test(a)},Nf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;Sf.test(e)||Rf.test(e)||a.push("none");return a};var Tf="".split(/,/),Uf=!1;var Vf=null,Wf={},Xf={},Yf;function Zf(a,b){var c={event:a};b&&(c.eventModel=C(b),b[H.gc]&&(c.eventCallback=b[H.gc]),b[H.Ra]&&(c.eventTimeout=b[H.Ra]));return c}
var eg={config:function(a){},
event:function(a){var b=a[1];if(f(b)&&!(3<a.length)){var c;if(2<a.length){if(!Pa(a[2])&&void 0!=a[2])return;c=a[2]}var d=Zf(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(a){3===a.length&&(void 0).Ih().Ah(a[1],a[2])},set:function(a){var b;2==a.length&&Pa(a[1])?b=
C(a[1]):3==a.length&&f(a[1])&&(b={},Pa(a[2])||ua(a[2])?b[a[1]]=C(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},fg={policy:!0};var gg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},ig=function(a){var b=hg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var pg=function(a){if(og(a))return a;this.ph=a};pg.prototype.lg=function(){return this.ph};var og=function(a){return!a||"object"!==Na(a)||Pa(a)?!1:"getUntrustedUpdateValue"in a};pg.prototype.getUntrustedUpdateValue=pg.prototype.lg;var qg=!1,rg=[];function sg(){if(!qg){qg=!0;for(var a=0;a<rg.length;a++)G(rg[a])}}var tg=function(a){qg?G(a):rg.push(a)};var ug=[],vg=!1,wg=function(a){return D["dataLayer"].push(a)},xg=function(a){var b=Oc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function yg(a){var b=a._clear;za(a,function(g,h){"_clear"!==g&&(b&&Id(g,void 0),Id(g,h))});Tc||(Tc=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=Zc(),a["gtm.uniqueEventId"]=d,Id("gtm.uniqueEventId",d));Vc=c;var e=zg(a);Vc=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}
function zg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Oc.zones;d=e?e.checkState(Nc.m,c):he;return d.active?ef(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Ag(){for(var a=!1;!vg&&0<ug.length;){vg=!0;delete zd.eventModel;Bd();var b=ug.shift();if(null!=b){var c=og(b);if(c){var d=b;b=og(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],g=0;g<e.length;g++){var h=e[g],k=Cd(h,1);if(ua(k)||Pa(k))k=C(k);Ad[h]=k}}try{if(qa(b))try{b.call(Dd)}catch(v){}else if(ua(b)){var l=b;if(f(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Cd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&f(b[0])){var r=eg[b[0]];if(r&&(!c||!fg[b[0]])){b=r(b);break a}}b=void 0}if(!b){vg=!1;continue}}a=yg(b)||a}}finally{c&&Bd(!0)}}vg=!1}
return!a}function Bg(){var a=Ag();try{gg(D["dataLayer"],Nc.m)}catch(b){}return a}
var Dg=function(){var a=ac("dataLayer",[]),b=ac("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};pe(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});tg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Oc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new pg(arguments[e])}else d=[].slice.call(arguments,0);var g=c.apply(a,d);ug.push.apply(ug,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return Ag()&&h};ug.push.apply(ug,a.slice(0));Cg()&&G(Bg)},Cg=function(){var a=!0;return a};var Eg={};Eg.zb=new String("undefined");
var Fg=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Eg.zb?b:a[d]);return c.join("")}};Fg.prototype.toString=function(){return this.resolve("undefined")};Fg.prototype.valueOf=Fg.prototype.toString;Eg.qf=Fg;Eg.wc={};Eg.Xf=function(a){return new Fg(a)};var Gg={};Eg.$g=function(a,b){var c=Zc();Gg[c]=[a,b];return c};Eg.Td=function(a){var b=a?0:1;return function(c){var d=Gg[c];if(d&&"function"===typeof d[b])d[b]();Gg[c]=void 0}};Eg.Dg=function(a){for(var b=!1,c=!1,
d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};Eg.Og=function(a){if(a===Eg.zb)return a;var b=Zc();Eg.wc[b]=a;return'google_tag_manager["'+Nc.m+'"].macro('+b+")"};Eg.Hg=function(a,b,c){a instanceof Eg.qf&&(a=a.resolve(Eg.$g(b,c)),b=pa);return{Hc:a,s:b}};var Hg=function(a,b,c){function d(g,h){var k=g[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||ic(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Ig=function(a){Oc.hasOwnProperty("autoEventsSettings")||(Oc.autoEventsSettings={});var b=Oc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},Jg=function(a,b,c){Ig(a)[b]=c},Kg=function(a,b,c,d){var e=Ig(a),g=Ga(e,b,d);e[b]=c(g)},Lg=function(a,b,c){var d=Ig(a);return Ga(d,b,c)};var Mg=function(){for(var a=Zb.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,g,h;if(a)for(d=0,g=a.length-1;0<=g;g--)h=a.charCodeAt(g),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Pg=function(a,b,c,d){var e=Ng(b);return Lf(a,e,Og(c),d)},Qg=function(a,b,c,d){var e=""+Ng(c),g=Og(d);1<g&&(e+="-"+g);return[b,e,a].join(".")},Ng=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Og=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var Rg=["1"],Sg={},Wg=function(a,b,c,d){var e=Tg(a);Sg[e]||Ug(e,b,c)||(Vg(e,Mg(),b,c,d),Ug(e,b,c))};function Vg(a,b,c,d,e){var g=Qg(b,"1",d,c);Qf(a,g,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function Ug(a,b,c){var d=Pg(a,b,c,Rg);d&&(Sg[a]=d);return d}function Tg(a){return(a||"_gcl")+"_au"};var Xg=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({cd:e[1],value:e[2]})}var g={};if(!a||!a.length)return g;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(g[a[h].cd]||(g[a[h].cd]=[]),g[a[h].cd].push({timestamp:k[1],ig:k[2]}))}return g};function Yg(){for(var a=Zg,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function $g(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var Zg,ah;function bh(a){Zg=Zg||$g();ah=ah||Yg();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,g=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=g>>2,m=(g&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(Zg[l],Zg[m],Zg[n],Zg[q])}return b.join("")}
function ch(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=ah[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}Zg=Zg||$g();ah=ah||Yg();for(var c="",d=0;;){var e=b(-1),g=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|g>>4);64!=h&&(c+=String.fromCharCode(g<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var dh;function eh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var ih=function(){var a=fh,b=gh,c=hh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){gc(F,"mousedown",d);gc(F,"keyup",d);gc(F,"submit",e);var g=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);g.call(this)};c.init=!0}},hh=function(){var a=ac("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var jh=/(.*?)\*(.*?)\*(.*)/,kh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,lh=/^(?:www\.|m\.|amp\.)+/,mh=/([^?#]+)(\?[^#]*)?(#.*)?/,nh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,ph=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(bh(String(d))))}var e=b.join("*");return["1",oh(e),e].join("*")},oh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=dh)){for(var e=Array(256),g=0;256>g;g++){for(var h=g,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[g]=h}d=e}dh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^dh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},rh=function(){return function(a){var b=Qe(D.location.href),c=b.search.replace("?",""),d=Me(c,"_gl",!0)||"";a.query=qh(d)||{};var e=Pe(b,"fragment").match(nh);a.fragment=qh(e&&e[3]||
"")||{}}},sh=function(){var a=rh(),b=hh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},qh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var g=jh.exec(d);if(g){c=g;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===oh(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=ch(u[p+1]);return q}}}}catch(r){}};
function th(a,b,c){function d(m){var n=m,q=nh.exec(n),u=n;if(q){var p=q[2],r=q[4];u=q[1];r&&(u=u+p+r)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=mh.exec(b);if(!e)return"";var g=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+g+h+k}
function uh(a,b,c){for(var d={},e={},g=hh().decorators,h=0;h<g.length;++h){var k=g[h];(!c||k.forms)&&eh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=ph(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],q=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);q=!0;break}}if(!q){var r=F.createElement("input");r.setAttribute("type","hidden");r.setAttribute("name","_gl");r.setAttribute("value",
l);a.appendChild(r)}}else if("post"===m){var v=th(l,a.action);Ke.test(v)&&(a.action=v)}}}else vh(l,a,!1)}if(!c&&Ja(e)){var w=ph(e);vh(w,a,!0)}}function vh(a,b,c){if(b.href){var d=th(a,b.href,void 0===c?!1:c);Ke.test(d)&&(b.href=d)}}
var fh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var g=e.protocol;"http:"!==g&&"https:"!==g||uh(e,e.hostname,!1)}}catch(h){}},gh=function(a){try{if(a.action){var b=Pe(Qe(a.action),"host");uh(a,b,!0)}}catch(c){}},wh=function(a,b,c,d){ih();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};hh().decorators.push(e)},xh=function(){var a=F.location.hostname,b=kh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var g=c.split("/"),h=g[1];e="s"===h?decodeURIComponent(g[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(lh,""),l=e.replace(lh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},yh=function(a,b){return!1===a?!1:a||b||xh()};var zh={};var Ah=/^\w+$/,Bh=/^[\w-]+$/,Ch=/^~?[\w-]+$/,Dh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Eh(a){return a&&"string"==typeof a&&a.match(Ah)?a:"_gcl"}var Gh=function(){var a=Qe(D.location.href),b=Pe(a,"query",!1,void 0,"gclid"),c=Pe(a,"query",!1,void 0,"gclsrc"),d=Pe(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Me(e,"gclid",void 0);c=c||Me(e,"gclsrc",void 0)}return Fh(b,c,d)};
function Fh(a,b,c){var d={},e=function(g,h){d[h]||(d[h]=[]);d[h].push(g)};if(void 0!==a&&a.match(Bh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==zh.gtm_3pds?0:zh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Ih=function(a){var b=Gh();Hh(b,a)};
function Hh(a,b,c){function d(q,u){var p=Jh(q,e);p&&Qf(p,u,h,g,l,!0)}b=b||{};var e=Eh(b.prefix),g=b.domain||"auto",h=b.path||"/",k=void 0==b.Ja?7776E3:b.Ja;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Yh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Lh=function(a,b,c,d,e){for(var g=sh(),h=Eh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Dh[l]){var m=Jh(l,h),n=g[m];if(n){var q=Math.min(Kh(n),Fa()),u;b:{for(var p=q,r=If(m,F.cookie),v=0;v<r.length;++v)if(Kh(r[v])>p){u=!0;break b}u=!1}u||Qf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Hh(Fh(g.gclid,g.gclsrc),w)},Jh=function(a,b){var c=Dh[a];if(void 0!==c)return b+c},Kh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Mh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Nh=function(a,b,c,d,e){if(ua(b)){var g=Eh(e);wh(function(){for(var h={},k=0;k<a.length;++k){var l=Jh(a[k],g);if(l){var m=If(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Oh=function(a){return a.filter(function(b){return Ch.test(b)})},Ph=function(a,b){for(var c=Eh(b&&b.prefix),d={},e=0;e<a.length;e++)Dh[a[e]]&&(d[a[e]]=Dh[a[e]]);za(d,function(g,h){var k=If(c+h,F.cookie);if(k.length){var l=k[0],m=Kh(l),n={};n[g]=[Mh(l)];Hh(n,b,m)}})};var Qh=/^\d+\.fls\.doubleclick\.net$/;function Rh(a){var b=Qe(D.location.href),c=Pe(b,"host",!1);if(c&&c.match(Qh)){var d=Pe(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function Sh(a,b){if("aw"==a||"dc"==a){var c=Rh("gcl"+a);if(c)return c.split(".")}var d=Eh(b);if("_gcl"==d){var e;e=Gh()[a]||[];if(0<e.length)return e}var g=Jh(a,d),h;if(g){var k=[];if(F.cookie){var l=If(g,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Mh(l[m]);n&&-1===t(k,n)&&k.push(n)}h=Oh(k)}else h=k}else h=k}else h=[];return h}
var Th=function(){var a=Rh("gac");if(a)return decodeURIComponent(a);var b=Xg(),c=[];za(b,function(d,e){for(var g=[],h=0;h<e.length;h++)g.push(e[h].ig);g=Oh(g);g.length&&c.push(d+":"+g.join(","))});return c.join(";")},Uh=function(a,b,c,d,e){Wg(b,c,d,e);var g=Sg[Tg(b)],h=Gh().dc||[],k=!1;if(g&&0<h.length){var l=Oc.joined_au=Oc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+g;Zb.sendBeacon&&Zb.sendBeacon(u)||fc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&g){var p=Tg(b),r=Sg[p];r&&Vg(p,r,c,d,e)}};var Vh;if(3===Nc.Db.length)Vh="g";else{var Wh="G";Vh=Wh}
var Xh={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Vh,OPT:"o"},Yh=function(a){var b=Nc.m.split("-"),c=b[0].toUpperCase(),d=Xh[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",g;if(3===Nc.Db.length){var h=void 0;g="2"+(h||"w")}else g=
"";return g+d+Nc.Db+e};
var Zh=function(a){return!(void 0===a||null===a||0===(a+"").length)},$h=function(a,b){var c;if(2===b.S)return a("ord",wa(1E11,1E13)),!0;if(3===b.S)return a("ord","1"),a("num",wa(1E11,1E13)),!0;if(4===b.S)return Zh(b.sessionId)&&a("ord",b.sessionId),!0;if(5===b.S)c="1";else if(6===b.S)c=b.Xc;else return!1;Zh(c)&&a("qty",c);Zh(b.Jb)&&a("cost",b.Jb);Zh(b.transactionId)&&a("ord",b.transactionId);return!0},ai=encodeURIComponent,bi=function(a,b){function c(n,q,u){g.hasOwnProperty(n)||(q+="",e+=";"+n+"="+
(u?q:ai(q)))}var d=a.Ec,e=a.protocol;e+=a.Vb?"//"+d+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";e+=";src="+ai(d)+(";type="+ai(a.Gc))+(";cat="+ai(a.cb));var g=a.Zf||{};za(g,function(n,q){e+=";"+ai(n)+"="+ai(q+"")});if($h(c,a)){Zh(a.bc)&&c("u",a.bc);Zh(a.ac)&&c("tran",a.ac);c("gtm",Yh());!1===a.Af&&c("npa","1");if(a.Cc){var h=Sh("dc",a.Ea);h&&h.length&&c("gcldc",h.join("."));var k=Sh("aw",a.Ea);k&&k.length&&c("gclaw",k.join("."));var l=Th();l&&c("gac",l);Wg(a.Ea,void 0,a.Vf,a.Wf);
var m=Sg[Tg(a.Ea)];m&&c("auiddc",m)}Zh(a.Tc)&&c("prd",a.Tc,!0);za(a.ed,function(n,q){c(n,q)});e+=b||"";Zh(a.Tb)&&c("~oref",a.Tb);a.Vb?ec(e+"?",a.s):fc(e+"?",a.s,a.o)}else G(a.o)};var ci=["input","select","textarea"],di=["button","hidden","image","reset","submit"],ei=function(a){var b=a.tagName.toLowerCase();return!va(ci,function(c){return c===b})||"input"===b&&va(di,function(c){return c===a.type.toLowerCase()})?!1:!0},fi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):lc(a,["form"],100)},gi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,g=1;e<a.elements.length;e++){var h=a.elements[e];if(ei(h)){if(h.getAttribute(c)===d)return g;
g++}}return 0};var ji=!!D.MutationObserver,ki=void 0,li=function(a){if(!ki){var b=function(){var c=F.body;if(c)if(ji)(new MutationObserver(function(){for(var e=0;e<ki.length;e++)G(ki[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;gc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<ki.length;e++)G(ki[e])}))})}};ki=[];F.body?b():G(b)}ki.push(a)};
var wi=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(g,h){return g&&h?Math.min(g,h):Math.max(g,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},xi=function(a){var b=wi(),c=b.height,d=b.width,e=a.getBoundingClientRect(),g=e.bottom-e.top,h=e.right-e.left;return g&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/g,1)):0},yi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var g=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),g=Math.min(h,g))}if(void 0!==g&&0>=g)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};var zi=[],Bi=!(!D.IntersectionObserver||!D.IntersectionObserverEntry),Ci=function(a,b,c){for(var d=new D.IntersectionObserver(a,{threshold:c}),e=0;e<b.length;e++)d.observe(b[e]);for(var g=0;g<zi.length;g++)if(!zi[g])return zi[g]=d,g;return zi.push(d)-1},Di=function(a,b,c){function d(k,l){var m={top:0,bottom:0,right:0,left:0,width:0,
height:0},n={boundingClientRect:k.getBoundingClientRect(),intersectionRatio:l,intersectionRect:m,isIntersecting:0<l,rootBounds:m,target:k,time:Fa()};G(function(){return a(n)})}for(var e=[],g=[],h=0;h<b.length;h++)e.push(0),g.push(-1);c.sort(function(k,l){return k-l});return function(){for(var k=0;k<b.length;k++){var l=xi(b[k]);if(l>e[k])for(;g[k]<c.length-1&&l>=c[g[k]+1];)d(b[k],l),g[k]++;else if(l<e[k])for(;0<=g[k]&&l<=c[g[k]];)d(b[k],l),g[k]--;e[k]=l}}},Ei=function(a,b,c){for(var d=0;d<c.length;d++)1<
c[d]?c[d]=1:0>c[d]&&(c[d]=0);if(Bi){var e=!1;G(function(){e||Di(a,b,c)()});return Ci(function(g){e=!0;for(var h={Oa:0};h.Oa<g.length;h={Oa:h.Oa},h.Oa++)G(function(k){return function(){return a(g[k.Oa])}}(h))},b,c)}return D.setInterval(Di(a,b,c),1E3)},Fi=function(a){Bi?0<=a&&a<zi.length&&zi[a]&&(zi[a].disconnect(),zi[a]=void 0):D.clearInterval(a)};var Hi=D.clearTimeout,Ii=D.setTimeout,T=function(a,b,c){if(Ld()){b&&G(b)}else return cc(a,b,c)},Ji=function(){return D.location.href},Ki=function(a){return Pe(Qe(a),"fragment")},Li=function(a){return Oe(Qe(a))},V=function(a,b){return Cd(a,b||2)},Mi=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return wg(a)},Ni=function(a,b){D[a]=b},W=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=b);return D[a]},
Oi=function(a,b,c){return If(a,b,void 0===c?!0:!!c)},Pi=function(a,b){if(Ld()){b&&G(b)}else ec(a,b)},Qi=function(a){return!!Lg(a,"init",!1)},Ri=function(a){Jg(a,"init",!0)},Si=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Sc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";T(P("https://","http://",c))},Ti=function(a,b){var c=a[b];return c};
var Ui=Eg.Hg;var Vi;var rj=new xa;function sj(a,b){function c(h){var k=Qe(h),l=Pe(k,"protocol"),m=Pe(k,"host",!0),n=Pe(k,"port"),q=Pe(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),g=0;g<d.length;g++)if(d[g]!==e[g])return!1;return!0}
function tj(a){return uj(a)?1:0}
function uj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(tj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){e=b[g[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=t(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,r=rj.get(p);r||(r=new RegExp(c,u),rj.set(p,r));q=r.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return sj(b,
c)}return!1};var vj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var wj={},xj=encodeURI,X=encodeURIComponent,yj=fc;var zj=function(a,b){if(!a)return!1;var c=Pe(Qe(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var g=c.length-e.length;0<g&&"."!=e.charAt(0)&&(g--,e="."+e);if(0<=g&&c.indexOf(e,g)==g)return!0}}return!1};
var Aj=function(a,b,c){for(var d={},e=!1,g=0;a&&g<a.length;g++)a[g]&&a[g].hasOwnProperty(b)&&a[g].hasOwnProperty(c)&&(d[a[g][b]]=a[g][c],e=!0);return e?d:null};wj.Eg=function(){var a=!1;return a};var Kk=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var Vk=window,Wk=document,Xk=function(a){var b=Vk._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vk["ga-disable-"+a])return!0;try{var c=Vk.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(g){}for(var d=If("AMP_TOKEN",Wk.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Wk.getElementById("__gaOptOutExtension")?!0:!1};function $k(a){return"_"===a.charAt(0)}var al=function(a){za(a,function(c){$k(c)&&delete a[c]});var b=a[H.V]||{};za(b,function(c){$k(c)&&delete b[c]})};var el=function(a,b,c){Bf(b,c,a)},fl=function(a,b,c){Bf(b,c,a,!0)},hl=function(a,b){};
function gl(a,b){}var Y={a:{}};


Y.a.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.b="jsm";Y.__jsm.g=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Y.a.flc=[],function(){function a(b,c){c=c?c.slice(0,-1):void 0;bi(b,c)}(function(b){Y.__flc=b;Y.__flc.b="flc";Y.__flc.g=!0;Y.__flc.priorityOverride=0})(function(b){var c=!b.hasOwnProperty("vtp_enableConversionLinker")||b.vtp_enableConversionLinker,d=Aj(b.vtp_customVariable||[],"key","value")||{},e={cb:b.vtp_activityTag,Cc:c,Ea:b.vtp_conversionCookiePrefix||void 0,Jb:void 0,S:{UNIQUE:3,SESSION:4}[b.vtp_ordinalType]||2,Ec:b.vtp_advertiserId,Gc:b.vtp_groupTag,o:b.vtp_gtmOnFailure,s:b.vtp_gtmOnSuccess,
Tb:b.vtp_useImageTag?void 0:b.vtp_url,protocol:"",Xc:void 0,Vb:!b.vtp_useImageTag,sessionId:b.vtp_sessionId,ac:b.vtp_transactionVariable,transactionId:void 0,bc:b.vtp_userVariable,ed:d};if(b.vtp_enableAttribution){var g=b.vtp_attributionFields||[];if(g.length){T("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(e,W("google_attr").build([Aj(g,"key","value")||{}]))},b.vtp_gtmOnFailure);return}}a(e)})}();

Y.a.c=["google"],function(){(function(a){Y.__c=a;Y.__c.b="c";Y.__c.g=!0;Y.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Y.a.d=["google"],function(){(function(a){Y.__d=a;Y.__d.b="d";Y.__d.g=!0;Y.__d.priorityOverride=0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=oc(a.vtp_elementSelector);e&&0<e.length&&(b=e[0])}else b=F.getElementById(a.vtp_elementId);b&&(c=d?ic(b,d):jc(b));return Ea(String(b&&c))})}();
Y.a.e=["google"],function(){(function(a){Y.__e=a;Y.__e.b="e";Y.__e.g=!0;Y.__e.priorityOverride=0})(function(a){return String(Kd(a.vtp_gtmEventId,"event"))})}();
Y.a.f=["google"],function(){(function(a){Y.__f=a;Y.__f.b="f";Y.__f.g=!0;Y.__f.priorityOverride=0})(function(a){var b=V("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Pe(Qe(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Li(String(b)):String(b)})}();
Y.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Hg(c,"gtm.click");Mi(d)}}(function(b){Y.__cl=b;Y.__cl.b="cl";Y.__cl.g=!0;Y.__cl.priorityOverride=0})(function(b){if(!Qi("cl")){var c=W("document");gc(c,"click",a,!0);Ri("cl")}G(b.vtp_gtmOnSuccess)})}();
Y.a.j=["google"],function(){(function(a){Y.__j=a;Y.__j.b="j";Y.__j.g=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Y.a.r=["google"],function(){(function(a){Y.__r=a;Y.__r.b="r";Y.__r.g=!0;Y.__r.priorityOverride=0})(function(a){return wa(a.vtp_min,a.vtp_max)})}();
Y.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.b="u";Y.__u.g=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:V("gtm.url",1))||Ji();var d=b[a("vtp_component")];if(!d||"URL"==d)return Li(String(c));var e=Qe(String(c)),g;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;m=h?ua(k)?k:String(k).replace(/\s+/g,
"").split(","):[String(k)];for(var n=0;n<m.length;n++){var q=Pe(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){g=q;break a}}g=void 0}else g=Pe(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return g})}();
Y.a.v=["google"],function(){(function(a){Y.__v=a;Y.__v.b="v";Y.__v.g=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=V(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Y.a.ua=["google"],function(){var a,b={},c=function(d){var e={},g={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;C(Aj(n.vtp_fieldsToSet,"fieldName","value"),g);C(Aj(n.vtp_contentGroup,"index","group"),h);C(Aj(n.vtp_dimension,"index","dimension"),k);C(Aj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=C(n);d=C(d,q)}C(Aj(d.vtp_fieldsToSet,"fieldName","value"),g);C(Aj(d.vtp_contentGroup,
"index","group"),h);C(Aj(d.vtp_dimension,"index","dimension"),k);C(Aj(d.vtp_metric,"index","metric"),l);var u=Fe(d.vtp_functionName);if(qa(u)){var p="",r="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(r=d.vtp_trackerName,p=r+"."):(r="gtm"+Zc(),p=r+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&y("set",O+sa,K[sa])},B=function(){},A=function(O,K,sa){var Eb=0;if(O)for(var Ba in O)if(O.hasOwnProperty(Ba)&&(sa&&v[Ba]||!sa&&void 0===v[Ba])){var Za=w[Ba]?Ca(O[Ba]):O[Ba];"anonymizeIp"!=Ba||Za||(Za=void 0);K[Ba]=Za;Eb++}return Eb},E={name:r};A(g,E,!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",Yh(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(g,J,!1)&&y("set",J);var M;
d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=g&&g.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());var R={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||
e.value)};A(M,R,!1);y("send",R);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==d.vtp_trackType){}else if("TRACK_TIMING"==
d.vtp_trackType){}else if("DECORATE_LINK"==d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&(y("require","ec","ec.js"),B());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var na=
"_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:na})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ja="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ja})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=P("https:","http:","//www.google-analytics.com/"+ta,g&&g.forceSSL);T(ab,function(){var O=De();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Y.__ua=c;Y.__ua.b="ua";Y.__ua.g=!0;Y.__ua.priorityOverride=0}();



Y.a.opt=["google"],function(){var a,b=function(c){var d={};if(c.vtp_gaSettings){var e=c.vtp_gaSettings;C(Aj(e.vtp_fieldsToSet,"fieldName","value"),d);c.vtp_gaSettings=null;e.vtp_fieldsToSet=void 0;var g=C(e);c=C(c,g)||{}}C(Aj(c.vtp_fieldsToSet,"fieldName","value"),d);var h=Fe(c.vtp_functionName);if(qa(h)){h.r=!0;var k="",l="";c.vtp_setTrackerName&&"string"===typeof c.vtp_trackerName?""!==c.vtp_trackerName&&(l=c.vtp_trackerName,k=l+"."):(l="gtm"+Zc(),k=l+".");var m={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},n={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0},q=function(y,x,z){var B=0,A;for(A in y)if(y.hasOwnProperty(A)&&
(z&&m[A]||!z&&void 0===m[A])){var E=n[A]?Ca(y[A]):y[A];"anonymizeIp"!==A||E||(E=void 0);x[A]=E;B++}return B},u={name:l};q(d,u,!0);var p={"&gtm":Yh(!0)};q(d,p,!1);var r=encodeURI(P("https:","http:","//www.google-analytics.com/"+(c.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js"),!!d.forceSSL));h("create",c.vtp_trackingId,u);h(k+"set",p);h(k+"require",c.vtp_optimizeContainerId,{dataLayer:"dataLayer"});h(c.vtp_gtmOnSuccess);h(k+"require","render");a||(a=!0,T(r,function(){return De().loaded||
c.vtp_gtmOnFailure()},c.vtp_gtmOnFailure));var v=W("dataLayer"),w=v&&v.hide;w&&w.end&&(w[c.vtp_optimizeContainerId]=!0)}else G(c.vtp_gtmOnFailure)};Y.__opt=b;Y.__opt.b="opt";Y.__opt.g=!0;Y.__opt.priorityOverride=0}();
Y.a.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.b="cid";Y.__cid.g=!0;Y.__cid.priorityOverride=0})(function(){return Nc.m})}();
Y.a.hjtc=["nonGoogleScripts"],function(){(function(a){Y.__hjtc=a;Y.__hjtc.b="hjtc";Y.__hjtc.g=!0;Y.__hjtc.priorityOverride=0})(function(a){var b=a.vtp_hotjar_site_id;Ni("hj",function(){(window.hj.q=window.hj.q||[]).push(arguments)});Ni("_hjSettings",{hjid:b,hjsv:5});T("//static.hotjar.com/c/hotjar-"+X(b)+".js?sv=5",a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();
Y.a.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gp"];(function(b){Y.__gclidw=b;Y.__gclidw.b="gclidw";Y.__gclidw.g=!0;Y.__gclidw.priorityOverride=100})(function(b){G(b.vtp_gtmOnSuccess);var c,d,e;b.vtp_enableCookieOverrides&&(e=b.vtp_cookiePrefix,c=b.vtp_path,d=b.vtp_domain);var g=null;b.vtp_enableCookieUpdateFeature&&(g=!0,void 0!==b.vtp_cookieUpdate&&(g=!!b.vtp_cookieUpdate));var h=e,k=c,l=d;if(b.vtp_enableCrossDomainFeature&&(!b.vtp_enableCrossDomain||!1!==b.vtp_acceptIncoming)&&(b.vtp_enableCrossDomain||
xh())){Lh(a,h,k,l,void 0);}var m={prefix:e,path:c,domain:d,Ja:void 0};Ih(m);Ph(["aw","dc"],m);Uh(g,e,c,d);var n=e;if(b.vtp_enableCrossDomainFeature&&b.vtp_enableCrossDomain&&b.vtp_linkerDomains){var q=b.vtp_linkerDomains.toString().replace(/\s+/g,"").split(","),u=b.vtp_urlPosition,p=!!b.vtp_formDecoration;Nh(a,q,u,p,n);}})}();


Y.a.aev=["google"],function(){function a(p,r){var v=Kd(p,"gtm");if(v)return v[r]}function b(p,r,v,w){w||(w="element");var y=p+"."+r,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var B=q.shift();delete n[B]}}return x}function c(p,r,v){var w=a(p,u[r]);return void 0!==w?w:v}function d(p,r){if(!p)return!1;var v=e(Ji());ua(r)||(r=String(r||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<r.length;y++)if(r[y]instanceof RegExp){if(r[y].test(p))return!1}else{var x=
r[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!zj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Pe(Qe(p),"HOST",!0)}function g(p,r,v){switch(p){case "SUBMIT_TEXT":return b(r,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(r,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(r,"id",v);case "INTERACTED_FIELD_NAME":return l(r,"name",v);case "INTERACTED_FIELD_TYPE":return l(r,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(r,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(r,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return ic(p,"value");case "button":return jc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var r=0,v=0;v<p.elements.length;v++)ei(p.elements[v])&&r++;return r}}function l(p,r,v){var w=a(p,"interactedFormField");return w&&ic(w,r)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Y.__aev=p;Y.__aev.b="aev";Y.__aev.g=!0;Y.__aev.priorityOverride=0})(function(p){var r=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(r,"element");return y&&y.tagName||
v;case "TEXT":return b(r,w,jc)||v;case "URL":var x;a:{var z=String(a(r,"elementUrl")||v||""),B=Qe(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Pe(B,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(r,w,v);else{var J=p.vtp_attribute,M=a(r,"element");E=M&&ic(M,J)||v||""}return E;case "MD":var R=p.vtp_mdValue,ca=b(r,"MD",si);return R&&ca?vi(ca,
R)||v:ca||v;case "FORM":return g(String(p.vtp_component||"SUBMIT_TEXT"),r,v);default:return c(r,w,v)}})}();
Y.a.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.b="gas";Y.__gas.g=!0;Y.__gas.priorityOverride=0})(function(a){var b=C(a),c=b;c[Gb.ma]=null;c[Gb.ff]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();

Y.a.awct=["google"],function(){var a=!1,b=[],c=function(k){var l=W("google_trackConversion"),m=k.gtm_onFailure;"function"==typeof l?l(k)||m():m()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},g=function(){return function(){d();b={push:c};}},h=function(k){ye();var l={google_basket_transaction_type:"purchase",google_conversion_domain:"",google_conversion_id:k.vtp_conversionId,google_conversion_label:k.vtp_conversionLabel,
google_conversion_value:k.vtp_conversionValue||0,google_remarketing_only:!1,onload_callback:k.vtp_gtmOnSuccess,gtm_onFailure:k.vtp_gtmOnFailure,google_gtm:Yh()};k.vtp_rdp&&(l.google_restricted_data_processing=!0);var m=function(v){return function(w,y,x){var z="DATA_LAYER"==v?V(x):k[y];z&&(l[w]=z)}},n=m("JSON");n("google_conversion_currency","vtp_currencyCode");n("google_conversion_order_id","vtp_orderId");k.vtp_enableProductReporting&&(n=m(k.vtp_productReportingDataSource),n("google_conversion_merchant_id",
"vtp_awMerchantId","aw_merchant_id"),n("google_basket_feed_country","vtp_awFeedCountry","aw_feed_country"),n("google_basket_feed_language","vtp_awFeedLanguage","aw_feed_language"),n("google_basket_discount","vtp_discount","discount"),n("google_conversion_items","vtp_items","items"),l.google_conversion_items=l.google_conversion_items.map(function(v){return{value:v.price,quantity:v.quantity,item_id:v.id}}));var q=function(v,w){(l.google_additional_conversion_params=l.google_additional_conversion_params||
{})[v]=w},u=function(v){return function(w,y,x,z){var B="DATA_LAYER"==v?V(x):k[y];z(B)&&q(w,B)}},p=-1==navigator.userAgent.toLowerCase().indexOf("firefox")?"//www.googleadservices.com/pagead/conversion_async.js":"https://www.google.com/pagead/conversion_async.js";k.vtp_enableNewCustomerReporting&&(n=u(k.vtp_newCustomerReportingDataSource),n("vdnc","vtp_awNewCustomer","new_customer",function(v){return void 0!=v&&""!==v}),n("vdltv","vtp_awCustomerLTV","customer_lifetime_value",function(v){return void 0!=
v&&""!==v}));!k.hasOwnProperty("vtp_enableConversionLinker")||k.vtp_enableConversionLinker?(k.vtp_conversionCookiePrefix&&(l.google_gcl_cookie_prefix=k.vtp_conversionCookiePrefix),l.google_read_gcl_cookie_opt_out=!1):l.google_read_gcl_cookie_opt_out=!0;var r=!0;r&&b.push(l);a||(a=!0,T(p,g(),e(p)))};Y.__awct=h;Y.__awct.b="awct";Y.__awct.g=!0;Y.__awct.priorityOverride=0}();Y.a.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.b="remm";Y.__remm.g=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var k=new RegExp(h,e);if(k.test(b)){var l=c[g].value;a.vtp_replaceAfterMatch&&(l=String(b).replace(k,l));return l}}return a.vtp_defaultValue})}();
Y.a.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.b="smm";Y.__smm.g=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Aj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Y.a.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.b="paused";Y.__paused.g=!0;Y.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Y.a.twitter_website_tag=["nonGoogleScripts"],function(){(function(a){Y.__twitter_website_tag=a;Y.__twitter_website_tag.b="twitter_website_tag";Y.__twitter_website_tag.g=!0;Y.__twitter_website_tag.priorityOverride=0})(function(a){(function(c,d){c.twq||(d=c.twq=function(){d.exe?d.exe.apply(d,arguments):d.queue.push(arguments)},d.version="1",d.queue=[],T("//static.ads-twitter.com/uwt.js"))})(window,void 0);window.twq("init",String(a.vtp_twitter_pixel_id));var b=Aj(a.vtp_event_parameters,"param_table_key_column",
"param_table_value_column");b&&void 0!==b.content_ids&&(b.content_ids=JSON.parse(b.content_ids.replace(/'/g,'"')));window.twq("track",String(a.vtp_event_type),b);G(a.vtp_gtmOnSuccess)})}();
Y.a.html=["customScripts"],function(){function a(d,e,g,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,g,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,bc(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else g()}catch(u){G(h)}}}var b=function(d,e,g){pe(function(){var h,k=Oc;k.postscribe||(k.postscribe=Yb);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(g)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,g=Ui(d.vtp_html,d.vtp_gtmOnSuccess,e),h=g.Hc,k=g.s;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,kc(h),k,e)()}else Ii(function(){c(d)},
200)};Y.__html=c;Y.__html.b="html";Y.__html.g=!0;Y.__html.priorityOverride=0}();






Y.a.lcl=[],function(){function a(){var e=W("document"),g=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.Cg||k.timeStamp&&k.timeStamp===g)){g=k.timeStamp;l=lc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=Lg("lcl",m?"nv.mwt":"mwt",0),q;q=m?Lg("lcl","nv.ids",[]):Lg("lcl","ids",[]);if(q.length){var u=Hg(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(Ti(l,"rel")||""),r=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
r&&I("GTM",36);var v=W((Ti(l,"target")||"_self").substring(1)),w=!0;if(Mi(u,xg(function(){var y;if(y=w&&v){var x;a:if(r&&d){var z;try{z=new MouseEvent(k.type)}catch(B){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.Cg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=Ti(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else Mi(u,function(){},n||2E3);return!0}}};gc(e,"click",h,!1);gc(e,"auxclick",h,
!1)}function b(e,g,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=Ti(g,"href"),l=k.indexOf("#"),m=Ti(g,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=Li(k),q=Li(h.location);return n!==q}return!0}function c(e){var g=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(g){var m=function(q){return Math.max(k,
q)};Kg("lcl","mwt",m,0);h||Kg("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};Kg("lcl","ids",n,[]);h||Kg("lcl","nv.ids",n,[]);Qi("lcl")||(a(),Ri("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;Y.__lcl=c;Y.__lcl.b="lcl";Y.__lcl.g=!0;Y.__lcl.priorityOverride=0;}();

Y.a.evl=["google"],function(){function a(g,h){this.element=g;this.uid=h}function b(){var g=Number(V("gtm.start"))||0;return(new Date).getTime()-g}function c(g,h,k,l){function m(){if(!yi(g.target)){h.has(e.Cb)||h.set(e.Cb,""+b());h.has(e.uc)||h.set(e.uc,""+b());var q=0;h.has(e.Fb)&&(q=Number(h.get(e.Fb)));q+=100;h.set(e.Fb,""+q);if(q>=k){var u=Hg(g.target,"gtm.elementVisibility",[h.uid]),p=xi(g.target);u["gtm.visibleRatio"]=Math.round(1E3*p)/10;u["gtm.visibleTime"]=k;u["gtm.visibleFirstTime"]=Number(h.get(e.uc));
u["gtm.visibleLastTime"]=Number(h.get(e.Cb));Mi(u);l()}}}if(!h.has(e.$a)&&(0==k&&m(),!h.has(e.Ca))){var n=W("self").setInterval(m,100);h.set(e.$a,n)}}function d(g){g.has(e.$a)&&(W("self").clearInterval(Number(g.get(e.$a))),g.remove(e.$a))}var e={$a:"polling-id-",uc:"first-on-screen-",Cb:"recent-on-screen-",Fb:"total-visible-time-",Ca:"has-fired-"};a.prototype.has=function(g){return!!this.element.getAttribute("data-gtm-vis-"+g+this.uid)};a.prototype.get=function(g){return this.element.getAttribute("data-gtm-vis-"+
g+this.uid)};a.prototype.set=function(g,h){this.element.setAttribute("data-gtm-vis-"+g+this.uid,h)};a.prototype.remove=function(g){this.element.removeAttribute("data-gtm-vis-"+g+this.uid)};(function(g){Y.__evl=g;Y.__evl.b="evl";Y.__evl.g=!0;Y.__evl.priorityOverride=0})(function(g){function h(){var y=!1,x=null;if("CSS"===l){try{x=oc(m)}catch(J){}y=!!x&&v.length!=x.length}else if("ID"===l){var z=F.getElementById(m);z&&(x=[z],y=1!=v.length||v[0]!==z)}x||(x=[],y=0<v.length);if(y){for(var B=0;B<v.length;B++){var A=
new a(v[B],p);d(A)}v=[];for(var E=0;E<x.length;E++)v.push(x[E]);0<=w&&Fi(w);0<v.length&&(w=Ei(k,v,[u]))}}function k(y){var x=new a(y.target,p);y.intersectionRatio>=u?x.has(e.Ca)||c(y,x,q,"ONCE"===r?function(){for(var z=0;z<v.length;z++){var B=new a(v[z],p);B.set(e.Ca,"1");d(B)}Fi(w);if(n&&ki)for(var A=0;A<ki.length;A++)ki[A]===h&&ki.splice(A,1)}:function(){x.set(e.Ca,"1");d(x)}):(d(x),"MANY_PER_ELEMENT"===r&&x.has(e.Ca)&&(x.remove(e.Ca),x.remove(e.Fb)),x.remove(e.Cb))}var l=g.vtp_selectorType,m;"ID"===
l?m=String(g.vtp_elementId):"CSS"===l&&(m=String(g.vtp_elementSelector));var n=!!g.vtp_useDomChangeListener,q=g.vtp_useOnScreenDuration&&Number(g.vtp_onScreenDuration)||0,u=(Number(g.vtp_onScreenRatio)||50)/100,p=g.vtp_uniqueTriggerId,r=g.vtp_firingFrequency,v=[],w=-1;h();n&&li(h);G(g.vtp_gtmOnSuccess)})}();

var $l={};$l.macro=function(a){if(Eg.wc.hasOwnProperty(a))return Eg.wc[a]},$l.onHtmlSuccess=Eg.Td(!0),$l.onHtmlFailure=Eg.Td(!1);$l.dataLayer=Dd;$l.callback=function(a){Xc.hasOwnProperty(a)&&qa(Xc[a])&&Xc[a]();delete Xc[a]};function am(){Oc[Nc.m]=$l;Ia(Yc,Y.a);xb=xb||Eg;yb=ge}
function bm(){zh.gtm_3pds=!0;Oc=D.google_tag_manager=D.google_tag_manager||{};if(Oc[Nc.m]){var a=Oc.zones;a&&a.unregisterChild(Nc.m)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)pb.push(c[d]);for(var e=b.tags||[],g=0;g<e.length;g++)sb.push(e[g]);for(var h=b.predicates||[],k=0;k<
h.length;k++)rb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);qb.push(q)}vb=Y;wb=tj;am();Dg();ke=!1;le=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)ne();else{gc(F,"DOMContentLoaded",ne);gc(F,"readystatechange",ne);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&oe()}gc(D,"load",ne)}qg=!1;"complete"===F.readyState?sg():gc(D,
"load",sg);a:{if(!sd)break a;D.setInterval(td,864E5);}
Uc=(new Date).getTime();
}}bm();

})()
