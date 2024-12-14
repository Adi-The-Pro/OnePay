const RAZORPAY_CURRENCY_SUBUNITS = {
    'INR': 100,   // Indian Rupee (paise)
    'USD': 100,   // United States Dollar (cents)
    'EUR': 100,   // Euro (cents)
    'GBP': 100,   // British Pound Sterling (pence)
    'AUD': 100,   // Australian Dollar (cents)
    'CAD': 100,   // Canadian Dollar (cents)
    'SGD': 100,   // Singapore Dollar (cents)
    'CHF': 100,   // Swiss Franc (centimes)
    'AED': 100,   // United Arab Emirates Dirham (fils)
    'BRL': 100,   // Brazilian Real (centavo)
    'CZK': 100,   // Czech Koruna (haléř)
    'DKK': 100,   // Danish Krone (øre)
    'HKD': 100,   // Hong Kong Dollar (cents)
    'HUF': 100,   // Hungarian Forint (fillér)
    'JPY': 1,     // Japanese Yen (no subunit)
    'MXN': 100,   // Mexican Peso (centavo)
    'MYR': 100,   // Malaysian Ringgit (sen)
    'NOK': 100,   // Norwegian Krone (øre)
    'PLN': 100,   // Polish Złoty (grosze)
    'SEK': 100,   // Swedish Krona (öre)
    'TWD': 1,     // Taiwanese Dollar (no subunit)
    'THB': 100,   // Thai Baht (satang)
    'PHP': 100,   // Philippine Peso (centavo)
    'SAR': 100,   // Saudi Riyal (halala)
  };
  
  // Utility function to convert amount to subunit
  function toSubunit(amount, currency) {
    const subunitFactor = RAZORPAY_CURRENCY_SUBUNITS[currency] || 100;
    return Math.round(amount * subunitFactor);
  }
  
  // Utility function to convert from subunit to main unit
  function fromSubunit(subunitAmount, currency) {
    const subunitFactor = RAZORPAY_CURRENCY_SUBUNITS[currency] || 100;
    return subunitAmount / subunitFactor;
  }
    
module.exports = { RAZORPAY_CURRENCY_SUBUNITS, toSubunit, fromSubunit};