// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

function chinaUnion(cardNumber){
	// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
	var length = cardNumber.length;
	var prefix1 = Number(cardNumber.slice(0,6));
	var prefix2 = Number(cardNumber.slice(0,3));
	var prefix3 = Number(cardNumber.slice(0,4));
	if(length >= 16 && length <= 19){
		if(prefix1 >= 622126 && prefix1 <= 622925){
			return true;
		}else if(prefix2 >= 624 && prefix2 <= 626){
			return true;
		}else if(prefix3 >= 6282 && prefix3 <= 6288){
			return true;
		}
		return false;
	}
	return false;
}

/*
Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
Heads up! Switch and Visa seem to have some overlapping card numbers - in any apparent conflict, you should choose the network with the longer prefix.
*/
function switchCheck(cardNumber){
	var length = cardNumber.length;
	var prefix1 = cardNumber.slice(0,4);
	var prefix2 = cardNumber.slice(0,6);
	if(length === 16 || length === 18 || length === 19){
		if(prefix1 === '4903' || prefix1 === '4905' || prefix1 === '4911' || prefix1 === '4936' || prefix1 === '6333' || prefix1 === '6759'){
			return true;
		}else if(prefix2 === '564182' || prefix2 === '633110'){
			return true;
		}
		return false;
	}
	return false;
}

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if((cardNumber.substring(0,2) === '38' || cardNumber.substring(0,2) === '39') && cardNumber.length === 14){
  	return "Diner's Club";
  }else if((cardNumber.substring(0,2) === '34' || cardNumber.substring(0,2) === '37') && cardNumber.length === 15){
  	return 'American Express';
  }else if(cardNumber.charAt(0) === '4' && !switchCheck(cardNumber) && (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19)){
  	return 'Visa';
  }else if(cardNumber.length === 16 && (cardNumber.substring(0,2) === '51' || cardNumber.substring(0,2) === '52' || cardNumber.substring(0,2) === '53' || cardNumber.substring(0,2) === '54' || cardNumber.substring(0,2) === '55')){
  	return 'MasterCard';
  }else if((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.substring(0,4) === '6011' || cardNumber.substring(0,3) === '644' || cardNumber.substring(0,3) === '645' || cardNumber.substring(0,3) === '646' || cardNumber.substring(0,3) === '647' || cardNumber.substring(0,3) === '648' || cardNumber.substring(0,3) === '649' ||  cardNumber.substring(0,2) === '65')){
  	return 'Discover';
  }else if(cardNumber.length >= 12 && cardNumber.length <= 19 && (cardNumber.substring(0,4) === '5018' || cardNumber.substring(0,4) === '5020' || cardNumber.substring(0,4) === '5038' || cardNumber.substring(0,4) === '6304')){
  	return 'Maestro';
  }else if(chinaUnion(cardNumber)){
  	return 'China UnionPay';
  }else if(switchCheck(cardNumber)){
  	return 'Switch';
  }
};


