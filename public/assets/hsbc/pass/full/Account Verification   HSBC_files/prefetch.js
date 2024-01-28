var verForGSP = "uk306";
var wcmVersion="w321";
var nlsLayerFlag=false;
var scripts = document.getElementsByTagName("script");
var srcLoadPath = "";
for (i = 0; i < scripts.length; i++) { 
    var tempPrefetchUrl  = scripts[i].src;
	if(tempPrefetchUrl.indexOf("prefetch") > -1) {
	   srcLoadPath = "https://" + tempPrefetchUrl.split("/")[2];
	}
}

if(!wcmVersion) {
	wcmVersion = verForGSP;
}
var map_prefetch_host = {
		 				 "www.pilot.security.online-banking.hsbc.co.uk": "https://www.content.pilot.online-banking.hsbc.co.uk",
		 				 "www1.pilot.security.online-banking.hsbc.co.uk": "https://www.content.pilot.online-banking.hsbc.co.uk",
		 				 "www2.pilot.security.online-banking.hsbc.co.uk": "https://www.content.pilot.online-banking.hsbc.co.uk",
		 				 "maint-security-lp.hsbc.co.uk": "https://www.content.maint-online-banking.hsbc.co.uk",
		 				 "www.security.hsbc.co.uk" : "https://www.content.online-banking.hsbc.co.uk",
		 				 "www1.security.hsbc.co.uk" : "https://www.content.online-banking.hsbc.co.uk",
		 				 "www2.security.hsbc.co.uk" : "https://www.content.online-banking.hsbc.co.uk"
		 				}

var hasCrossDomainXHR = null;
var camLevelInPrefetch;
var prefetchForm = document.forms[0];
if (prefetchForm.action.indexOf("idv.Authentication") > 0 && !prefetchForm.userid) {
	camLevelInPrefetch = "CAM30";
}					
function getPrefetchHost(host){
  var retValHost =  map_prefetch_host[host];
  if(!retValHost) {
	  retValHost = srcLoadPath;
  }
  var hasXDR = ("undefined" !== typeof window.XDomainRequest);
  hasCrossDomainXHR = (new XMLHttpRequest()).withCredentials !== undefined;
  if (!hasXDR && !hasCrossDomainXHR) {
	  retValHost = srcLoadPath;
  }
  return retValHost;
}

var prefetch_host = getPrefetchHost(location.host);
var gsp_host = srcLoadPath;

//Check if addEventListener is supported in browser.
if (window.addEventListener) {
    window.addEventListener("load",  preFetchData, false);
} else {
    window.attachEvent("onload", preFetchData );
} 

function preFetchData(){

	var akamai_list_non_layered = 
	["/app/group/gpib/cmn/js/init.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/rum/adrum.js?ECAL=PROD_SANFRANCISCO&ECAL=gb&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hsbc/utilities/util/static.js?"+verForGSP,
	"/app/dojo/hsbc/utilities/util/HSBCGLBL.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/top_section.js?ECAL=gb&ECAL=hbeu&ECAL=retail&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/top_section.js?ECAL=gb&ECAL=hbeu&ECAL=premier&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/top_section.js?ECAL=gb&ECAL=hbeu&ECAL=advance&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/cmn/config/GlobalEnvConfig.js?"+verForGSP,
	"/app/dojo/dojo/dojo.js?"+verForGSP,
	"/app/dojo/hdx/images/loaders/Spinner32Dark.gif",
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/background.jpg?ECAL=gb&ECAL=hbeu&ECAL=retail&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/background.jpg?ECAL=gb&ECAL=hbeu&ECAL=premier&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/background.jpg?ECAL=gb&ECAL=hbeu&ECAL=advance&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/dojo/nls/dojo_en-gb.js?"+verForGSP,
	"/app/group/gpib/cmn/js/less-1.4.2.min.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=gb&ECAL=hbeu&ECAL=retail&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=gb&ECAL=hbeu&ECAL=premier&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=gb&ECAL=hbeu&ECAL=advance&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp2.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp3.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp4.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp5.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp-print.css?"+verForGSP,
	"/app/group/gpib/cmn/css/hsbcfsa-new.css?"+verForGSP,
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Rg.woff",
	"/app/group/layer-dojox.js?"+verForGSP,
	"/app/group/layer-hsbc-utilities.js?"+verForGSP,
	"/app/group/layer-prefetch.js?"+verForGSP,
	"/app/group/nls/layer-prefetch_en-gb.js?"+verForGSP,
	"/app/group/nls/layer-dojox_en-gb.js?"+verForGSP,
	"/app/group/nls/layer-hsbc-utilities_en-gb.js?"+verForGSP,
	"/app/group/gpib/cmn/module/InitializeGSP.js?"+verForGSP,
	"/app/group/gpib/cmn/config/gb/hbeu/MasterConfig.js?"+verForGSP,
	"/app/group/gpib/client/actservicing/config/gb/ProdCatSequence.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/acct/bijit/config/gb/TransactionGrid_control-data.js?"+verForGSP,
	"/app/group/gpib/acct/bijit/config/gb/AccountFilterPayment_control-data.js?"+verForGSP,
	"/app/group/layer-globalpib-app-gb.js?"+verForGSP,
	"/app/group/gpib/cmn/bijit/RefererTool.js?"+verForGSP,
	"/app/dojo/dojo/resources/blank.gif?"+verForGSP,
	"/app/group/gpib/client/cmn/refdata/TermUnit.js?"+verForGSP,
	"/app/group/gpib/client/actservicing/config/ProdCatSequence.js?"+verForGSP,
	"/app/group/gpib/comms/bijit/MsgsMastheadList.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/comms/bijit/templates/MsgsMastheadList.html?"+verForGSP,
	"/app/dojo/hdx/images/icons/std-icons.png",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Md.woff",
	"/app/dojo/hdx/images/icons/flags_16.png",
	"/app/dojo/hdx/images/icons/msgIcon.png",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Lt.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Bd.woff",
	"/app/dojo/hdx/images/icons/lock_icon_on_grey.png",
	"/app/group/gpib/acct/pages/gb/hbeu/retail/dashboard.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/acct/pages/gb/hbeu/premier/dashboard.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/acct/pages/gb/hbeu/advance/dashboard.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mcm/config/gb/hbeu/SpeedTrapInsert_Perf_v8.js?"+verForGSP,
	"/app/group/layer-dashboard-gb.js?"+verForGSP,
	"/app/dojo/hdx/images/backgrounds/left_nav_underlay.png",
	"/app/dojo/hdx/images/icons/move-money-icon.png",
	"/app/dojo/hdx/images/loaders/Spinner28Dark.gif",
	"/app/dojo/hdx/images/backgrounds/bg_tablefooter1.png",
	"/app/dojo/hdx/images/icons/Printer.png",
	"/app/dojo/hdx/images/icons/view-more.png",
	"/app/dojo/hdx/images/icons/navigationSpacer.gif",
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/logo.jpg?ECAL=gb&ECAL=hbeu&ECAL=retail&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/logo.jpg?ECAL=gb&ECAL=hbeu&ECAL=premier&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/logo.jpg?ECAL=gb&ECAL=hbeu&ECAL=advance&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/acct/bijit/config/NonGSPTransactions_control-data.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/html/NonGSPBijitContent.html?ECAL=gb&ECAL=hbeu&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/images/icons/flags_24.png",
	"/app/dojo/hdx/images/backgrounds/scroll-handle.gif",
	"/app/dojo/hdx/images/icons/summary_White.png",
	"/app/dojo/hdx/images/icons/alert-panel-info_new.gif",
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/AccountDetails_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/images/icons/toolTipClose.gif",
	"/app/dojo/hdx/images/icons/alert-panel-info.gif",
	"/app/dojo/hdx/images/icons/alert-panel-warning_dark.gif",
	"/app/dojo/hdx/images/icons/alert-panel-error_new.gif",
	"/app/group/gpib/mvmny/pages/newtxn.html?mode=transfer&ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/mvmny/pages/newtxn.html?mode=transfer&ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/mvmny/pages/newtxn.html?mode=transfer&ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/group/layer-transaction-gb.js?"+verForGSP,
	"/app/dojo/hdx/images/icons/red-chevron.png",
	"/app/group/gpib/mvmny/bijit/ConfirmBillPymt.js?"+verForGSP,
	"/app/group/gpib/cmn/bijit/ContextMenu.js?"+verForGSP,
	"/app/dojo/hdx/images/backgrounds/cam40Step3.png",
	"/app/dojo/hdx/images/icons/new_key_btn.png",
	"/app/dojo/hdx/images/icons/3-image.png",
	"/app/dojo/hdx/images/backgrounds/cam40Step1.png",
	"/app/dojo/hdx/images/backgrounds/cam40Step2.png",
	"/app/dojo/hdx/images/backgrounds/sotpSecurity1.jpg",
	"/app/dojo/hdx/images/backgrounds/sotpSecurity2.jpg",
	"/app/dojo/hdx/images/backgrounds/sotpSecurity3.jpg",
	"/app/dojo/hdx/images/backgrounds/SoftTokenLogon.png",
	"/app/dojo/hdx/images/backgrounds/Soft_token_image.png",
	"/app/dojo/hdx/images/backgrounds/Soft_token_Key1.png",
	"/app/group/gpib/mvmny/bijit/templates/ConfirmBillPymt.html?"+verForGSP,
	"/app/group/gpib/cmn/bijit/templates/ContextMenu.html?"+verForGSP,
	"/app/group/gpib/cmn/bijit/config/ContextMenu_control-data.js?"+verForGSP,
	"/app/dojo/hdx/images/content/steptracker.png",
	"/app/dojo/hdx/images/icons/tabClose.png",
	"/app/dojo/hdx/images/icons/icon-padlock-tiny.gif",
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/debitCreditCardAcct_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/debitCreditCardAcct_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/debitCreditCardAcct_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/localRecurringPayment_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/localRecurringPayment_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/localRecurringPayment_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/rmbRecurringPayment_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/rmbRecurringPayment_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/rmbRecurringPayment_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/wayfoongGoldStatementFactSheet_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/wayfoongGoldStatementFactSheet_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/wayfoongGoldStatementFactSheet_tnc.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/images/icons/control-icons.png"];
	
	var gsp_list = [
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/rum/adrum-ext.5f3ed04179a28c18e6b99b8ebb7abf59.js"
	];
	var akamai_list_layered=[
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/envConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/CtryGrpMbrList_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProductTypeDesc_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/OtherProdCatSequence.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountSnapshotOnDashboard_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountFilterPayments_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/customAttributes.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/ProductTypeDesc_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/OtherProdCatSequence.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/AccountSnapshotOnDashboard_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/AccountFilterPayments_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/strings.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/errors.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/LostStolenCardDialog_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/nls/PageTitleConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/PageCmnConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/json/mcmJsonData.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/Carousel_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/Dialog.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Header_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/MessageText.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/MaturityInstruction_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TermUnit_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/StatusOfAccount_DisplayTest_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/PrintFriendlyAccounts_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/nls/DatePatternConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TitlePaneGroup_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/SubBundledAccountGroup.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/BundledAccountGroup.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/MsgsReadAndCompose_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TimerDialogPopup_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Menu_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/LaunchDialog_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/MsgsMastheadList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Menu_url_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CountryDropDown_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CountryDropDown_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/LanguageToggle_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/SiteSearchInMastHead_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/SiteSearchConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Footer_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CopyrightDisclaimer_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CoBrowse_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TermsAndConditions_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/TermsAndConditions_control-data.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/termsncond_urls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=gb&ECAL=hbeu&ECAL=retail&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=gb&ECAL=hbeu&ECAL=premier&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=gb&ECAL=hbeu&ECAL=advance&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-gb/strings.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-gb/errors.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/LostStolenCardDialog_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/nls/en-gb/PageTitleConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/Header_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/CopyrightDisclaimer_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/scm/bijit/nls/en-gb/TimerDialogCampaign_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/scm/bijit/nls/TimerDialogCampaign_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/scm/nls/CampaignAttributes_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/LanguageToggle_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/scm/bijit/nls/CampaignDetails_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/scm/config/actservicing/SCM_control-data.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/Footer_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TransactionsGrid_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/PrintFriendlyAccounts_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/TitlePaneGroup_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/BundledAccountGroup.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/en-gb/MsgsReadAndCompose_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/TimerDialogPopup_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en/Menu_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/Menu_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/LaunchDialog_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/en-gb/MsgsMastheadList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/NonGSPTransactions_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/html/NonGSPBijitContent.html?ECAL=gb&ECAL=hbeu&ECAL=en_GB&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/nls/strings.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/PendingTransaction_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/TitleButtonPane.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/TransactionsGrid_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/NonGSPTransactions_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/nls/en-gb/strings.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/DashboardHeading_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/eDocument/bijit/nls/eDocument_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/eDocument/config/eDocumentLinkMapping.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ManageAccounts_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/AcctInfoTermsConditionsDialog.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/bijit/nls/ProductLabels_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/FileDownloadFormat.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/QuickTransfer_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/AccountCurrencyList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SelectAccount_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/CountryDescConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/CurrencyField.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/MegaSelect.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/ManageAccounts_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/QuickTransfer_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/SelectAccount_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-gb/CurrencyField.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountSnapshot_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountDetails_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/CCTransactionTypes_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/CCTransactionTypes.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TransactionsGrid_messages_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/DateRange.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/DateTextBox.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/Calendar.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/CurrencyFieldRange.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/PrintFriendlyFormatDialog.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/eDocument/config/gb/hbeu/eDocumentConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/AccountSnapshot_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-gb/AccountDetails_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-gb/DateRange.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-gb/DateTextBox.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/Txn_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/InlineHelp_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TxnDestinationSelector_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TxnMsg_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TdsValidation_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TDSReauth_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/validate.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/MegaComboBox.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ReAuthenticationCode.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SelectPayee_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SOCheckBox_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/SystemError_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/InlinePayee_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/AccountCurrencyListHSBC.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/AccountCurrencyList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/AccountCurrencyListHSBC_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PayeeBankDetails.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/PayeeBankDetails_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/BankNameList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankNameList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DmstSortCodeList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/DmstSortCodeList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/AccountTypeList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/AccountTypeList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/BankCodeTypeList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankCodeTypeMapping_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DestinationCountry.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/CountryValues_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/SanctionCountryList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/CountryValues.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/StepTracker.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ExchangeRateCalculator_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/validation/nls/MveMny_valconfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/calender/MveMnyHubDate.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/ExchangeRateCalculatorPopup_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CalcTnC.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ExchangeRate_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/ExchangeRateConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/calender/CalendarHolidays.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CaptureTxDetails_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DmstPymtCcyList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/view/nls/PaymentLimits.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SimpleDialog.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/M2MDmstConfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/Transaction_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TransactionDateSelector_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_Dmst.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_IntlGDI.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_IntlPymt.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_SO.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TransferFrequency_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/TransferFrequencyNoticeOptions.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TransferFrequencyNotice_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/DateRangeValidator.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/EmailLangOptions.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/EmailLangOptions_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CustTransferProperty_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CuttOffTime_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/DomesticTransferErrorCodes_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/FXToCurrency.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DefaultTransferCurrencyMap.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PayeeChargesList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/EcaCountryList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/EcaCurrencyList.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PayeeChargesList_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/ChargeListMapping_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ExchangeRateCalculator_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PurposeOfPayment_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PurposeOfPaymentOption.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/POP_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/IntPurpPymtOpt_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/IntPurpPymtHUBOpt_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CbwPurpPymtOpt_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PurposeOfPaymentCca_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/ValidationTextarea.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/view/CountryCodeToGrdCountry.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SOPmnt_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/RegulatoryText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankSearchCityList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/nls/strings.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/Txn_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/InlineHelp_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/TxnMsg_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/TdsValidation_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/TxnDestinationSelector_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/TDSReauth_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-gb/validate.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/SOCheckBox_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/SystemError_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/InlinePayee_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-gb/AccountCurrencyList_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-gb/BankCodeTypeMapping_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/validation/nls/en-gb/MveMny_valconfig.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/CaptureTxDetails_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/view/nls/en-gb/PaymentLimits.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/SimpleDialog.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/Transaction_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/TransactionDateSelector_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/TransferFrequency_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/TransferFrequencyNotice_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/EmailLangOptions_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/CustTransferProperty_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/CuttOffTime_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/DomesticTransferErrorCodes_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/PayeeChargesList_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/ExchangeRateCalculator_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/PurposeOfPayment_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/IntPurpPymtOpt_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/CbwPurpPymtOpt_displayText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-gb/RegulatoryText_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ContextMenu_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/nls/en-gb/strings.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-gb/ContextMenu_label_nls.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+wcmVersion+"&"+verForGSP
];
//List containing big size files-used only in case of IE
 var resource_List_CAM20_IE=[
	"/app/dojo/dojo/dojo.js?"+verForGSP,
 	"/app/group/layer-dojox.js?"+verForGSP,
	"/app/group/layer-hsbc-utilities.js?"+verForGSP,
	"/app/group/nls/layer-dojox_en-gb.js?"+verForGSP,
	"/app/group/nls/layer-hsbc-utilities_en-gb.js?"+verForGSP,
	"/app/group/layer-prefetch.js?"+verForGSP,
	"/app/group/nls/layer-prefetch_en-gb.js?"+verForGSP,
	"/app/group/layer-globalpib-app-gb.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/content/layers/dashboard_content_layered.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&"+ wcmVersion + "&" + verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/content/layers/moveMoney_content_layered.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&"+ wcmVersion + "&" + verForGSP,
	"/app/group/gpib/cmn/js/less-1.4.2.min.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=gb&ECAL=hbeu&ECAL=retail&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=gb&ECAL=hbeu&ECAL=premier&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=gb&ECAL=hbeu&ECAL=advance&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Rg.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Md.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Lt.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Bd.woff",
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp2.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp3.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp4.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp5.css?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/errors.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&type=.js&"+verForGSP,
	"/app/group/layer-dashboard-gb.js?"+verForGSP,
	"/app/group/layer-transaction-gb.js?"+verForGSP
 ];
 
 var prefetchFinalList = akamai_list_non_layered;
 if(nlsLayerFlag){
	 prefetchFinalList.splice(15,0,"/ContentService/gsp/ChannelsLibrary/Components/client/content/layers/dashboard_content_layered.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&"+ wcmVersion + "&" + verForGSP);
	 prefetchFinalList.splice(82,0,"/ContentService/gsp/ChannelsLibrary/Components/client/content/layers/moveMoney_content_layered.js?ECAL=gb&ECAL=hbeu&ECAL=en_GB&"+ wcmVersion + "&" + verForGSP);
 }
 else{
	 prefetchFinalList = prefetchFinalList.concat(akamai_list_layered);
 }

 function prefetchFiles(url) {
		// For loading images
		if (url.indexOf(".png") != -1 || url.indexOf(".gif") != -1
				|| url.indexOf(".jp") != -1) {
			var img = new Image();
			img.src = url;
		} else {
			// FF
			if (navigator.userAgent.indexOf("Firefox") >= 0) {
				var link = document.createElement('link');
				link.rel = 'prefetch';
				link.href = url;
				if (url.indexOf(".woff") != -1) {
					link.crossorigin = 'anonymous';
				}
				document.body.appendChild(link);

			} else {// Chrome
				var xmlhttp = new XMLHttpRequest();
				xmlhttp.open('GET', url, true);
				xmlhttp.send();
			}
		}
	}
	var prefetchConcurrencyIE = 5;
	var prefetchCounter = 0;
	var prefetchInterval = 100;
	
	//Function to prefetch in IE
	function fetchFor_IE(host,listForIE) {
		setTimeout(function() {
			for (var index = 1; index <= prefetchConcurrencyIE; index++) {
				var item = listForIE.pop();
				if (item) {
					// Check if resource is a large file
					if (resource_List_CAM20_IE.indexOf(item) == -1) {
						triggerAsImage(host + item, index, host,listForIE);
					} else {
						// For Large files check the cam level
						if (camLevelInPrefetch) {// Cam20/30-->Large files
													// downloaded as xhr
							triggerAsXhr(host + item, index, host,listForIE)
						} else {// Cam10- large files downloaded as image
							prefetchCounter++;
							if (index == prefetchConcurrencyIE) {
								fetchFor_IE(host,listForIE);
							} else {
								continue;
							}
						}
					}
				}
			}
		}, prefetchInterval);
	}
	function triggerAsImage(url, index, host,listForIE) {
		var img = new Image();
		img.src = url;
		img.onload = img.onerror =  function() {
			prefetchCounter++;
			if (prefetchCounter % prefetchConcurrencyIE == 0) {
				fetchFor_IE(host,listForIE);
			}
		};
	}
	function triggerAsXhr(url, index, host,listForIE) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4) {
				prefetchCounter++;
				if (prefetchCounter % prefetchConcurrencyIE == 0) {
					fetchFor_IE(host,listForIE);
				}
			}
		};
	}
	var listForIE = null;
	window.setTimeout(function() {
		if (window.navigator.userAgent.match(/Trident/)) {//For IE
			listForIE = prefetchFinalList.reverse();
			fetchFor_IE(prefetch_host,listForIE);
			//2nd list
			for (var index = 0; index < gsp_list.length; index++) {
				prefetchFiles(gsp_host + gsp_list[index]);
			}
			
		} else {//For other browsers
			for (var index = 0; index < prefetchFinalList.length; index++) {
				prefetchFiles(prefetch_host + prefetchFinalList[index]);
			}
			for (var index = 0; index < gsp_list.length; index++) {
				prefetchFiles(gsp_host + gsp_list[index]);
			}
		}

	}, 2000);
}