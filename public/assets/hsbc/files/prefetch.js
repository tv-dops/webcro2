var verForGSP = "ca0706201902"; //<day = ##> <month = ##> <year = ####> <count = ##> <backout(optional) = b>
var wcmVersion="wcm1.0706201902";
var nlsLayerFlag=false;
var scripts = document.getElementsByTagName("script");
var srcLoadPath = "";
var gspPrefLle = null;
if(typeof gspPrefLleSaaS != 'undefined'){
gspPrefLle = gspPrefLleSaaS;
}else { 
  gspPrefLle = "en_CA";
}
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
		"lp.security.online-banking.hsbc.ca":"https://static.vh.lp.services.online-banking.hsbc.ca",
		"www.security.online-banking.hsbc.ca":"https://static.services.online-banking.hsbc.ca",
		"www.hsbc.ca":"https://static.services.online-banking.hsbc.ca"
		 				}

var hasCrossDomainXHR = null;
var camLevelInPrefetch= "CAM30";
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
	["/ContentService/gsp/ChannelsLibrary/Components/client/cmn/rum/adrum.js?ECAL=PT_NA&ECAL=ca&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hsbc/utilities/util/static.js?"+verForGSP,
		"/app/dojo/hsbc/utilities/util/HSBCGLBL.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/top_section.js?ECAL=ca&ECAL=hkbc&ECAL=retail&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/top_section.js?ECAL=ca&ECAL=hkbc&ECAL=premier&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/top_section.js?ECAL=ca&ECAL=hkbc&ECAL=advance&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/cmn/config/GlobalEnvConfig.js?"+verForGSP,
		"/app/dojo/dojo/dojo.js?"+verForGSP,
		"/app/dojo/hdx/images/loaders/Spinner32Dark.gif",
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/background.jpg?ECAL=ca&ECAL=hkbc&ECAL=retail&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/background.jpg?ECAL=ca&ECAL=hkbc&ECAL=premier&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/background.jpg?ECAL=ca&ECAL=hkbc&ECAL=advance&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/dojo/nls/dojo_en-ca.js?"+verForGSP,
		"/app/group/gpib/cmn/js/less-1.4.2.min.js?"+verForGSP+"&"+verForGSP,
		"/app/group/layer-dojox.js?"+verForGSP,
		"/app/group/layer-hsbc-utilities.js?"+verForGSP,
		"/app/group/layer-prefetch.js?"+verForGSP,
		"/app/group/nls/layer-prefetch_en-ca.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=ca&ECAL=hkbc&ECAL=retail&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=ca&ECAL=hkbc&ECAL=premier&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=ca&ECAL=hkbc&ECAL=advance&"+verForGSP,
		"/app/dojo/hdx/css/uk_hbuk/fsa-gsp.css?"+verForGSP,
		"/app/dojo/hdx/css/uk_hbuk/fsa-gsp2.css?"+verForGSP,
		"/app/dojo/hdx/css/uk_hbuk/fsa-gsp3.css?"+verForGSP,
		"/app/dojo/hdx/css/uk_hbuk/fsa-gsp4.css?"+verForGSP,
		"/app/dojo/hdx/css/uk_hbuk/fsa-gsp5.css?"+verForGSP,
		"/app/dojo/hdx/css/uk_hbuk/fsa-gsp-print.css?"+verForGSP,
		"/app/group/gpib/cmn/css/hsbcfsa-new.css?"+verForGSP,
		"/app/group/nls/layer-dojox_en-ca.js?"+verForGSP,
		"/app/group/nls/layer-hsbc-utilities_en-ca.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/envConfig.js?"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/nls/PageTitleConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Rg.woff",
		"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Bd.woff",
		"/app/dojo/hdx/fonts/w01/HSBCIcon-Font.woff",
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/nls/en-ca/PageTitleConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/cmn/config/ca/hkbc/MasterConfig.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/rum/adrum-ext.5f3ed04179a28c18e6b99b8ebb7abf59.js",
		"/app/group/gpib/cmn/config/aliases_ca.js?"+verForGSP,
		"/app/group/gpib/client/cmn/formatter/ca/RegexValidator.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/CtryGrpMbrList_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProductTypeDesc_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/client/actservicing/config/ca/ProdCatSequence.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/OtherProdCatSequence.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountSnapshotOnDashboard_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountFilterPayments_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/acct/bijit/config/ca/TransactionGrid_control-data.js?"+verForGSP,
		"/app/group/gpib/acct/bijit/config/ca/AccountFilterPayment_control-data.js?"+verForGSP,
		"/app/group/gpib/acct/bijit/config/ca/AccountSummary_control-data.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProdCatSequence.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/layer-globalpib-app-ca.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/webtrends/customAttributes.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/cmn/config/ca/hkbc/LiveEngageMapping.js?"+verForGSP,
		"/app/group/gpib/cmn/bijit/RefererTool.js?"+verForGSP,
		"/app/dojo/dojo/resources/blank.gif?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/OtherProdCatSequence.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/ProductTypeDesc_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/AccountFilterPayments_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/ProdCatSequence.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/strings.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/errors.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/LostStolenCardDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/PageCmnConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/json/mcmJsonData.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/MessageText.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/Dialog.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/MaturityInstruction_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TermUnit_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/StatusOfAccount_DisplayTest_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/PrintFriendlyAccounts_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/FundDescription_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/DatePatternConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TitlePaneGroup_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/SubBundledAccountGroup.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/BundledAccountGroup.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/Plan_Type_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/RRSPTransactionGrid_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/AlertDialog_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TimerDialogPopup_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/commpref/bijit/nls/CommunicationPreferences_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/cmn/bijit/PageUidConfig.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Header_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Menu_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/LaunchDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/ListOfMonths_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/MsgsMastheadList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Menu_url_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/LostAndStolenContent_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/SessionTerminateDialog_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/LaunchMCABDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CoBrowse_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/PrintFriendlyFormatDialog.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TermsAndConditions_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/termsncond_urls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/AcctInfoTermsConditionsDialog.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/productKeyData.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/bijit/nls/ProductLabels_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/acctTermsandCondPdfPath_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CountryDropDown_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CountryDropDown_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/LanguageToggle_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/SiteSearchInMastHead_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/SiteSearchConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/Footer_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CopyrightDisclaimer_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL="+gspPrefLle+"&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL="+gspPrefLle+"&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/templates/Footer.html?ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL="+gspPrefLle+"&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/strings.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/MessageText.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/errors.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/MaturityInstruction_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/TermUnit_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/PrintFriendlyAccounts_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/FundDescription_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/TitlePaneGroup_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/Plan_Type_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/RRSPTransactionGrid_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/UidMapping_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/Header_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/en-ca/ListOfMonths_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en/Menu_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/Menu_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/commpref/bijit/nls/en-ca/CommunicationPreferences_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/LaunchDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/comms/bijit/nls/en-ca/MsgsMastheadList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/Menu_url_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/LostAndStolenContent_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/LaunchMCABDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/CoBrowse_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/en-ca/termsncond_urls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/TermsAndConditions_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/en-ca/AcctInfoTermsConditionsDialog.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/en-ca/productKeyData.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/bijit/nls/en-ca/ProductLabels_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/termsandcond/content/nls/en-ca/acctTermsandCondPdfPath_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/LanguageToggle_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/CopyrightDisclaimer_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/Footer_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/UidMapping_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hdx/images/icons/std-icons.png",
		"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Md.woff",
		"/app/dojo/hdx/images/icons/flags_16.png",
		"/app/dojo/hdx/images/icons/msgIcon.png",
		"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Lt.woff",
		"/app/dojo/hdx/images/icons/tooltip.png",
		"/app/dojo/hdx/images/icons/bank.png",
		"/app/dojo/hdx/images/icons/lock_icon_on_grey.png",
		"/app/group/gpib/acct/pages/ca/hkbc/retail/dashboard.html?ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL="+gspPrefLle+"&"+verForGSP,
		"/app/group/gpib/acct/pages/ca/hkbc/premier/dashboard.html?ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL="+gspPrefLle+"&"+verForGSP,
		"/app/group/gpib/acct/pages/ca/hkbc/advance/dashboard.html?ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL="+gspPrefLle+"&"+verForGSP,
		"/app/group/layer-dashboard-ca.js?"+verForGSP,
		"/app/dojo/hdx/images/backgrounds/left_nav_underlay.png",
		"/app/dojo/hdx/images/icons/move-money-icon.png",
		"/app/dojo/hdx/images/loaders/Spinner28Dark.gif",
		"/app/dojo/hdx/images/backgrounds/bg_tablefooter1.png",
		"/app/dojo/hdx/images/icons/Printer.png",
		"/app/dojo/hdx/images/icons/view-more.png",
		"/app/dojo/hdx/images/icons/navigationSpacer.gif",
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/logo.jpg?ECAL=ca&ECAL=hkbc&ECAL=retail&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/logo.jpg?ECAL=ca&ECAL=hkbc&ECAL=premier&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/image/logo.jpg?ECAL=ca&ECAL=hkbc&ECAL=advance&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TransactionsGrid_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountSnapshot_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/NonGSPTransactions_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/html/NonGSPBijitContent.html?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ChequeImageDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/nls/strings.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/HelpLinkDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AssetAllocation_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AssetAllocation_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/PendingConsentDialog_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/MorningStar_Url_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/TransactionsGrid_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/AccountSnapshot_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/NonGSPTransactions_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/ChequeImageDialog_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/nls/en-ca/strings.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/AssetAllocation_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/DashboardHeading_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/cmn/bijit/PendingConsentNotification.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ManageAccounts_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/FileDownloadFormat.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/QuickTransfer_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/AccountCurrencyList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/mvmny/bijit/config/ca/MveMny_control-data.js?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SelectAccount_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/CountryDescConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/CurrencyField.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/MegaSelect.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ExchangeRateCalculator_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ExchangeRate_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/config/ExchangeRateConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/TitleButtonPane.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/DashboardHeading_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/group/gpib/cmn/bijit/templates/PendingConsentNotification.html?"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/PendingConsentNotification_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/ManageAccounts_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/QuickTransfer_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/SelectAccount_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-ca/CurrencyField.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/ExchangeRateCalculator_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hdx/images/icons/exclamation_icon.png",
		"/app/dojo/hdx/images/icons/flags_32.png",
		"/app/dojo/hdx/images/icons/swapper.gif",
		"/app/dojo/hdx/images/icons/alert-panel-error_new.gif",
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProductTypeDesc_displayText_nls.js?ECAL=en-gb&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProductTypeDesc_displayText_nls.js?ECAL=en-mx&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProductTypeDesc_displayText_nls.js?ECAL=en-u1&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/ProductTypeDesc_displayText_nls.js?ECAL=en-us&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hdx/images/icons/flags_24.png",
		"/app/dojo/hdx/images/icons/summary_White.png",
		"/app/dojo/hdx/images/scrollbars/Scrollbar_chvup.png",
		"/app/dojo/hdx/images/scrollbars/Scrollbar_chvdwn.png",
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/MutualFundsDisclosure_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/AccountDetails_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/EditNickname_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/validate.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/CCTransactionTypes_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/MFTransactionTypes_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/CCTransactionTypes.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/MFTransactionTypes.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/TransactionsGrid_messages_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/DateRange.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/DateTextBox.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/Calendar.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/CurrencyFieldRange.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/AccountDetails_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/EditNickname_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-ca/validate.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/actservicing/bijit/nls/en-ca/MFTransactionTypes_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hdx/images/icons/alert-panel-info_new.gif",
		"/app/dojo/hdx/images/icons/rightArrowNew.png",
		"/app/dojo/hdx/images/right-arrow.png",
		"/app/dojo/hdx/images/icons/small-right-arrow.png",
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-ca/DateRange.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-ca/DateTextBox.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-ca/CurrencyFieldRange.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
		"/app/dojo/hdx/images/icons/control-icons.png",
	 "/app/group/gpib/mvmny/pages/newtxn.html?mode=transfer&ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL="+gspPrefLle+"&"+verForGSP,
	"/app/group/gpib/mvmny/pages/newtxn.html?mode=transfer&ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL="+gspPrefLle+"&"+verForGSP,
	"/app/group/gpib/mvmny/pages/newtxn.html?mode=transfer&ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL="+gspPrefLle+"&"+verForGSP,
	"/app/group/layer-transaction-ca.js?"+verForGSP,
	"/app/dojo/hdx/images/icons/red-chevron.png",
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/Txn_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/InlineHelp_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TxnDestinationSelector_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TxnMsg_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TdsValidation_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/TDSReauth_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/MegaComboBox.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ReAuthenticationCode.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SelectPayee_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PayeeSelectBox_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SOCheckBox_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/SystemError_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/InlinePayee_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/AccountCurrencyListHSBC.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/AccountCurrencyList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/AccountCurrencyListHSBC_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PayeeBankDetails.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/PayeeBankDetails_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/BankNameList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankNameList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DmstSortCodeList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/DmstSortCodeList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/AccountTypeList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/AccountTypeList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/BankCodeTypeList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankCodeTypeMapping_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DestinationCountry.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/CountryValues_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/SanctionCountryList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/BankSearchCityList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankSearchCityList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/BankSearchRoutingAgents.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/BankSearchRoutingAgents_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/CountryValues.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/mvmny/bijit/config/InlineDmstValConfig.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/AddInterac_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/StepTracker.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/validation/nls/MveMny_valconfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/calender/MveMnyHubDate.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/ExchangeRateCalculatorPopup_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CalcTnC.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/calender/CalendarHolidays.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CaptureTxDetails_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DmstPymtCcyList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/view/nls/PaymentLimits.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SimpleDialog.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/M2MDmstConfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/Transaction_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TransactionDateSelector_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_Dmst.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_IntlGDI.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_IntlPymt.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/Frequency_SO.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TransferFrequency_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/TransferFrequencyNoticeOptions.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/TransferFrequencyNotice_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/DateRangeValidator.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/EmailLangOptions.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/EmailLangOptions_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CustTransferProperty_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ExchangeRateCalculator_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/CuttOffTime_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/DomesticTransferErrorCodes_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/FXToCurrency.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/DefaultTransferCurrencyMap.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PayeeChargesList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/EcaCountryList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/EcaCurrencyList.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PayeeChargesList_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/ChargeListMapping_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PurposeOfPayment_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PurposeOfPaymentOption.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/POP_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/IntPurpPymtOpt_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/IntPurpPymtHUBOpt_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CbwPurpPymtOpt_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PurposeOfPaymentCca_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/CountryCurrencyMapping_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/ValidationTextarea.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/view/CountryCodeToGrdCountry.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/RegulatoryText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/interacNotification_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cust/bijit/nls/InteracDiallingRefData.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cust/refdata/InteracDiallingCode.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/PhoneField.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/Emaildialog_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/SOPmnt_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/PaymentTypeCCLoan_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PaymentType_CC.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/PaymentType_Loan.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/CCExpiryMonth_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/refdata/ExpiryMonth_CCRefdata.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/nls/strings.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/cmn/bijit/ContextMenu.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/InlineHelp_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/Txn_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/TxnDestinationSelector_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/TxnMsg_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/TDSReauth_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/dijits/nls/en-ca/MegaComboBox.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/SelectPayee_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/PayeeSelectBox_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/InlinePayee_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/SystemError_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/AccountCurrencyList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/BankNameList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/DmstSortCodeList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/AccountTypeList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/BankCodeTypeMapping_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/CountryValues_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/BankSearchRoutingAgents_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/BankSearchCityList_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/AddInterac_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/validation/nls/en-ca/MveMny_valconfig.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/CaptureTxDetails_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/view/nls/en-ca/PaymentLimits.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/SimpleDialog.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/Transaction_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/TransactionDateSelector_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/TransferFrequency_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/CustTransferProperty_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/ExchangeRateCalculator_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/PayeeChargesList_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/ChargeListMapping_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/PurposeOfPayment_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/POP_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/IntPurpPymtOpt_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/IntPurpPymtHUBOpt_displayText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/en-ca/CountryCurrencyMapping_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/RegulatoryText_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/interacNotification_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cust/bijit/nls/en-ca/InteracDiallingRefData.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/bijit/nls/en-ca/Emaildialog_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/nls/en-ca/strings.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/cmn/bijit/templates/ContextMenu.html?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/ContextMenu_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/group/gpib/cmn/bijit/config/ContextMenu_control-data.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/bijit/nls/en-ca/ContextMenu_label_nls.js?ECAL=ca&ECAL=hkbc&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/images/icons/key-yellow-button.png",
	"/app/dojo/hdx/images/content/steptracker.png",
	"/app/dojo/hdx/images/icons/alert-panel-success.gif",
	"/app/dojo/hdx/images/icons/tabClose.png",
	"/app/group/layer-futuredatemanagement-ca.js?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/debitCreditCardAcct_tnc.html?ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL=en_ca&ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL="+gspPrefLle+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/debitCreditCardAcct_tnc.html?ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL=en_ca&ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL="+gspPrefLle+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/debitCreditCardAcct_tnc.html?ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL=en_ca&ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL="+gspPrefLle+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/localRecurringPayment_tnc.html?ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL=en_ca&ECAL=ca&ECAL=hkbc&ECAL=retail&ECAL="+gspPrefLle+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/localRecurringPayment_tnc.html?ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL=en_ca&ECAL=ca&ECAL=hkbc&ECAL=premier&ECAL="+gspPrefLle+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/mvmny/html/localRecurringPayment_tnc.html?ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL=en_ca&ECAL=ca&ECAL=hkbc&ECAL=advance&ECAL="+gspPrefLle+"&"+verForGSP
	];
	
	var gsp_list = [
		"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/rum/adrum-ext.5f3ed04179a28c18e6b99b8ebb7abf59.js"
	];
	var akamai_list_layered = 
	[];
//List containing big size files-used only in case of IE
 var resource_List_CAM20_IE=[
	"/app/dojo/dojo/dojo.js?"+verForGSP,
 	"/app/group/layer-dojox.js?"+verForGSP,
	"/app/group/layer-hsbc-utilities.js?"+verForGSP,
	"/app/group/nls/layer-dojox_en-ca.js?"+verForGSP,
	"/app/group/nls/layer-hsbc-utilities_en-ca.js?"+verForGSP,
	"/app/group/layer-prefetch.js?"+verForGSP,
	"/app/group/nls/layer-prefetch_en-ca.js?"+verForGSP,
	"/app/group/layer-globalpib-app-ca.js?"+verForGSP,
	"/app/group/gpib/cmn/js/less-1.4.2.min.js?"+verForGSP+ "&" +verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=ca&ECAL=hkbc&ECAL=retail&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=ca&ECAL=hkbc&ECAL=premier&"+wcmVersion+"&"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/css/fsa-internet-app.css?ECAL=ca&ECAL=hkbc&ECAL=advance&"+wcmVersion+"&"+verForGSP,
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Rg.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Md.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Lt.woff",
	"/app/dojo/hdx/fonts/w01/UniversNextforHSBCW01-Bd.woff",
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp2.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp3.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp4.css?"+verForGSP,
	"/app/dojo/hdx/css/uk_hbuk/fsa-gsp5.css?"+verForGSP,
	"/ContentService/gsp/ChannelsLibrary/Components/client/cmn/nls/errors.js?ECAL=hk&ECAL=hbap&ECAL="+gspPrefLle+"&type=.js&"+wcmVersion+"&"+verForGSP,
	"/app/group/layer-dashboard-ca.js?"+verForGSP,
	"/app/group/layer-transaction-ca.js?"+verForGSP,
 ];
 
 var prefetchFinalList = akamai_list_non_layered;
 if(nlsLayerFlag){
	 prefetchFinalList.splice(15,0,"/ContentService/gsp/ChannelsLibrary/Components/client/content/layers/dashboard_content_layered.js?ECAL=us&ECAL=hbus&ECAL="+gspPrefLle+"&"+ wcmVersion + "&" + verForGSP);
	 prefetchFinalList.splice(82,0,"/ContentService/gsp/ChannelsLibrary/Components/client/content/layers/moveMoney_content_layered.js?ECAL=us&ECAL=hbus&ECAL="+gspPrefLle+"&"+ wcmVersion + "&" + verForGSP);
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
		//Load init 
		prefetchFiles(prefetch_host + "/app/group/gpib/cmn/js/init.js?"+verForGSP);
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