var Twitter = function(){};

Twitter.prototype.isTwitterAvailable = function(response){
    PhoneGap.exec(response, null, "Twitter", "isTwitterAvailable", []);
};

Twitter.prototype.isTwitterSetup = function(response){
    PhoneGap.exec(response, null, "Twitter", "isTwitterSetup", []);
};

Twitter.prototype.sendTweet = function(success, failure, tweetText, urlAttach, imageAttach){
    if(typeof urlAttach === "undefined") urlAttach = "";
    if(typeof imageAttach === "undefined") imageAttach = "";
    
    PhoneGap.exec(success, failure, "Twitter", "sendTweet", [tweetText, urlAttach, imageAttach]);
};

Twitter.prototype.getPublicTimeline = function(success, failure){
    PhoneGap.exec(success, failure, "Twitter", "getPublicTimeline", []);
};

Twitter.prototype.getMentions = function(success, failure){
    PhoneGap.exec(success, failure, "Twitter", "getMentions", []);
};

PhoneGap.addConstructor(function() {
    if(!window.plugins) window.plugins = {};
    window.plugins.twitter = new Twitter();
});
