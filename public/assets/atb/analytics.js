window.MDAnalytics = {
  "loadBanner": function(opts){
    var scheme_host = "https://analytics.moneydesktop.com";
    if(opts.scheme_host){
      scheme_host = opts.scheme_host;
    }
    var path = "/offers/"+opts.analytics_api_key+"/"+opts.user_id+".js?element_id="+opts.element_id+"&default_banner_url="+opts.default_banner_url+"&default_banner_image_url="+opts.default_banner_image_url;
    if(opts.campaign_group_guid){
      path = path + "&campaign_group_guid=" + opts.campaign_group_guid;
    }
    var url = scheme_host + path;

    setTimeout(function(){
      var sc = document.createElement("script");
      sc.setAttribute("type","text/javascript");
      sc.setAttribute("src", url);

      document.body.appendChild(sc);
    },1);
  }
};
