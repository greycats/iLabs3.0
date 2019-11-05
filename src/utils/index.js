export const getLocationSearch = key => {
	var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)", "i")
	var r = window.location.search.substr(1).match(reg) || []
	if (r != null && r[2]) return unescape(r[2])
	return null
}