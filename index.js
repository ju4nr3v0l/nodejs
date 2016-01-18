var WPCOM = require('wpcom')(<>);
var wpcom = WPCOM();
var site = wpcom.site('https://developer.wordpress.com/docs/api/1.1/get/sites/%24site/stats/post/%24post_id/');
// get users list
site.usersList(function(err, data) {
    if (err) return console.log(err);
    console.log(data);
});