function usMoney (aValue){
	
	return formatCurrency(aValue, '$', ',', '.', 2)	
}



function formatCurrency(aValue, aCurrencySymbol, thousandSeparator, decimalSymbol, decimalPrecision){
	var retval = '';
	var currPos;
	var decimalPosition = aValue.indexOf(decimalSymbol);
	var leftOfDecimal = aValue.substring(0, decimalPosition);
	var rightOfDecimal = aValue.substring(decimalPosition+1, aValue.length);
	
	if (decimalPosition>0) {
		currPos = leftOfDecimal.length;	
	} else {
		currPos = aValue.length;	
	}

	while (currPos > 0) {
		
		if (currPos > 3) {
			retval = aValue.substring(currPos-3, currPos) + retval;
			
			//add Thousand Separator
			retval = thousandSeparator + retval;			
			currPos -= 3;
		}	else {
			retval = aValue.substring(0, currPos) + retval;
			currPos = 0;
		}
	}

	//set the Currency Symbol last
	retval = aCurrencySymbol + retval + decimalSymbol;
	
	//add decimal symbol as a suffix
	
	if (decimalPosition > 0) {
		retval += rightOfDecimal;
	} else {
		retval += "00";
	}
	
	return retval;
	//return currPos;

}
