//tealium universal tag - utag.12 ut4.0.201803021426, Copyright 2018 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){u=utag.o[loader].sender[id]={};if(utag.ut===undefined){utag.ut={};}
if(utag.ut.loader===undefined){u.loader=function(o){var b,c,l,a=document;if(o.type==="iframe"){b=a.createElement("iframe");o.attrs=o.attrs||{"height":"1","width":"1","style":"display:none"};for(l in utag.loader.GV(o.attrs)){b.setAttribute(l,o.attrs[l]);}b.setAttribute("src",o.src);}else if(o.type=="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";for(l in utag.loader.GV(o.attrs)){b[l]=o.attrs[l];}b.src=o.src;}if(o.id){b.id=o.id};if(typeof o.cb=="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb()},false);}else{b.onreadystatechange=function(){if(this.readyState=='complete'||this.readyState=='loaded'){this.onreadystatechange=null;o.cb()}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l=="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b)}}}}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.data={};u.data.google_conversion_id="923604950";u.data.google_conversion_language="en";u.data.google_conversion_format="3";u.data.google_conversion_color="ffffff";u.data.google_conversion_label="";u.data.google_conversion_value="";u.data.base_url="//www.googleadservices.com/pagead/conversion_async.js";u.map={};u.extend=[function(a,b){try{if(1){if(!!document.location.hostname.match(/banking\.meridiancu\.ca/i)){return false;}else{return true}}}catch(e){utag.DB(e)}}];u.send=function(a,b){if(u.ev[a]||typeof u.ev.all!="undefined"){for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};var c,d,e,f,g;g={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!=="undefined"&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
u.data.google_conversion_id=parseInt(u.data.google_conversion_id);if(isNaN(u.data.google_conversion_id)){utag.DB("ERROR: Google Conversion ID should be an integer.");}
u.data.google_conversion_value=u.data.google_conversion_value||b._csubtotal||"";u.data.google_conversion_currency=u.data.google_conversion_currency||b._ccurrency||"";u.data.google_conversion_order_id=u.data.order_id||b._corder||"";for(var key in u.data){if(key.indexOf("google_conversion")===0&&u.data[key]){g[key]=u.data[key];}}
u.gac_callback=function(){window.google_trackConversion(g);};if(!u.initialized){u.initialized=true;u.loader({src:u.data.base_url,cb:u.gac_callback});}else{u.gac_callback();}}};utag.o[loader].loader.LOAD(id);})('12','meridian.main');}catch(e){}