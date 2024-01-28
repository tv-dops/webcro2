//This function collects an HSBC cookie that otherwise would
//not be available for tracking  The desired cookie is 
//passed as a parameter and the cookie value returned.
function dcsGetHSBCCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1)
    {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1)
    {
        end = dc.length;
    }
    return unescape(dc.substring(begin + prefix.length, end));
}

function dcsFixUT(c) {
       var d="";
       if ((c)&&(c.length>0)&&(c.indexOf("!ut") != -1))
       {
              // Clean the title of unwanted characters
              if (document.title)
              {
                     t=document.title;
                     t=t.replace(/\v\t\f\n\r/g,"");
                     t=t.replace(/[" "]/g,"_");
              }
              if (t.length == 0)
              {
                     t="no_title_found";
              }
              var d = c.replace(/!ut.*/,"amended_url/" + t);
       }
       return (d!="")?d:c;
}

function initializeWebtrends(i18n){
	var tagversion=i18n.webtrends_mt.tagversion;
	HSBC.SITE.tagversion =tagversion;	

	var channel=i18n.webtrends_mt.channel;
	HSBC.SITE.channel =channel;	

	var rgn=i18n.webtrends_mt.rgn;
	HSBC.SITE.rgN =rgn;

	var subrgn=i18n.webtrends_mt.subrgn;
	HSBC.SITE.subrgn =subrgn;

	var cnty=i18n.webtrends_mt.cnty;
	HSBC.SITE.cnty =cnty;

	var ent=i18n.webtrends_mt.ent;
	HSBC.SITE.ent =ent;

	var brand =i18n.webtrends_mt.brand;
	HSBC.SITE.brand =brand;
    if(typeof mngTknMngr!= "undefined")
	 HSBC.LOG.dcsuri=i18n.webtrends_mt.dcsuri?i18n.webtrends_mt.dcsuri:"/gsa/SAAS_MANAGE_SECURE_KEY/";
    if(typeof regMnger!= "undefined")
    	HSBC.LOG.dcsuri=i18n.webtrends.dcsuri?i18n.webtrends.dcsuri:"/gsa/SAAS_REGISTRATION_UTILITY/";	
	

	var Id =i18n.webtrends_mt.ID;
	HSBC.DCS.ID=Id;

	var custgrp =i18n.webtrends_mt.custgrp;
	HSBC.SITE.custgrp=custgrp;

	var busline =i18n.webtrends_mt.busline;
	HSBC.SITE.busline=busline;

	var prodline=i18n.webtrends_mt.prodline;

	var cg_n=i18n.webtrends_mt.cg_n;
	HSBC.PAGE.cg_n=cg_n;

	//HSBC.PAGE.cg_n =HSBC_PAGE_cg_n;

	var site=i18n.webtrends_mt.site;
	var ibtype=i18n.webtrends_mt.ibtype;
	HSBC.SITE.ibtype=ibtype;

	var language=i18n.webtrends_mt.language;
	var camlvl=commonProp.currentCamLevel ? commonProp.currentCamLevel  : "0" ;
	HSBC.SITE.cam =camlvl;

	if(prodline != "undefined"){
		HSBC.SITE.prodline= prodline;
	}
	else{
		HSBC.SITE.prodline= "NoProductLine";
	}
		
	if(site != "undefined"){
		HSBC.SITE.site= site;
	}
	else{
		HSBC.SITE.site=" ";
	}
	// Language
	if(language != "undefined"){
		HSBC.SITE.language = language;
	}
	return HSBC;
}



var HSBC=new Object();
HSBC.SITE = new Object(); // SITE specific variables go into this object.  They are translated to DCSext vairables
HSBC.PAGE = new Object(); // WT Overrides --portal variables that need to overrride WT variables go into this object
HSBC.EXT = new Object(); //  This is a placeholder for non SITE oriented DCSext variables
HSBC.LOG = new Object(); //  DCS overrides -- Variables in here will override DCS.* variables matching the name
HSBC.DCS = new Object(); // This object contains HSBC.DCS.ID with the dcsid and HSBC.DCS.Doms with the comma-separated
HSBC.SITE.tagversion = "6.0";  // HSBC internal tag version for v10
HSBC.rewrite=0;


