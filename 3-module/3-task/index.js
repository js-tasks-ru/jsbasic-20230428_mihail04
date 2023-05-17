function camelize(str) {
	if ( str.includes('-') ) {
    let massive = str.split('-');
    for ( let i = 1; i < massive.length; i++ ) {
      if (massive[i].length == 0){
         } else {
    	    massive[i] = massive[i][0].toUpperCase() + massive[i].slice(1);
        }
    }
    return massive.join('');
  } else {
    return str; 
  }
}