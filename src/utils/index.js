export const getLocationSearch = key => {
	var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
	var r = window.location.search.substr(1).match(reg) || []
	if (r != null && r[2]) return unescape(r[2])
	return null
}

export const getTriggerId = id => `#${id}`

function makeid(length) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export const hashCode = (s = 'random_anim_') => s + makeid(24)