function isValidPhone(str) {
  var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
  if (!myreg.test(str)) {
    return false;
  } else {
    return true;
  }
}

/**
 * 过滤特殊字符
 */
function filterText(s) {
  var pattern = /[^\a-\z\A-\Z0-9\u4E00-\u9FA5]/g
  var rs = "";
  for (var i = 0; i < s.length; i++) {
    rs = rs + s.substr(i, 1).replace(pattern, '');
  }
  return rs;
}

module.exports = {
  isValidPhone,
  filterText
}