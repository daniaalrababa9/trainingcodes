'use strict'
 var creatgreetind = function(){
var today = new Date();
var hournow = today.getHours();
var greeting ;
if (hournow > 18) {
    greeting = 'good evening !';

}else if ( hournow > 12) {
    greeting = 'good afternoon !'
}else if (hournow > 0){
    greeting='good morning !'
}else {
    greeting = 'welcome';
}
return (greeting)
}

