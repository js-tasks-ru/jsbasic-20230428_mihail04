function checkSpam(str) {
  let newStr = str. toLowerCase(); 

  if (newStr.indexOf('1xbet')>=0 || newStr.indexOf('xxx')>=0){
    return true;
  } else {
    return false;
  }
}
