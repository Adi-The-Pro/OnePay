const crypto = require('crypto');
function generateUniqueId(){
    const timestamp = Date.now();
    
    // Generate cryptographically strong random bytes
    const randomBytes = crypto.randomBytes(16).toString('hex');
    
    // Create a hash to further ensure uniqueness
    const hash = crypto.createHash('sha256')
      .update(`${timestamp}-${randomBytes}`)
      .digest('hex')
      .substring(0, 12);
    
    // Combine prefix, timestamp, and hash
    return `${timestamp}-${hash}`;
}

module.exports = {generateUniqueId};