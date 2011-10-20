var Twitter = function(){};

Twitter.prototype.isTwitterAvailable = function(response){
    PhoneGap.exec(response, null, "Twitter", "isTwitterAvailable", []);
};

Twitter.prototype.isTwitterEnabled = function(response){
    PhoneGap.exec(response, null, "Twitter", "isTwitterEnabled", []);
};

Twitter.prototype.sendTweet = function(success, failure, tweetText, urlAttach, imageAttach){
    if(typeof urlAttach === "undefined") urlAttach = "";
    if(typeof imageAttach === "undefined") imageAttach = "";
    
    PhoneGap.exec(success, failure, "Twitter", "sendTweet", [tweetText, urlAttach, imageAttach]);
};

PhoneGap.addConstructor(function() {
    if(!window.plugins) window.plugins = {};
    window.plugins.twitter = new Twitter();
});
