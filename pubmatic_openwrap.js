// Pubmatic PreBidding JS

var PWT={}; //Initialize Namespace
var notifyId;
var dfp_ad_slots = {};
var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];

PWT.jsLoaded = function(){ //PubMatic pwt.js on load callback is used to load GPT
  (function() {
  var gads = document.createElement('script');
  gads.async = true;
  gads.type = 'text/javascript';
  var useSSL = 'https:' == document.location.protocol;
  gads.src = (useSSL ? 'https:' : 'http:') +
  '//www.googletagservices.com/tag/js/gpt.js';
  var node = document.getElementsByTagName('script')[0];
  node.parentNode.insertBefore(gads, node);
  })();
};

(function() {
  var purl = window.location.href;
  var url = '//ads.pubmatic.com/AdServer/js/pwt/156708/981';
  var profileVersionId = '';

  if(purl.indexOf('pwtv=')>0){
    var regexp = /pwtv=(.*?)(&|$)/g;
    var matches = regexp.exec(purl);

    if(matches.length >= 2 && matches[1].length > 0){
      profileVersionId = '/'+matches[1];
    }
  }

  var wtads = document.createElement('script');
  wtads.async = true;
  wtads.type = 'text/javascript';
  wtads.src = url+profileVersionId+'/pwt.js';
  var node = document.getElementsByTagName('script')[0];

  node.parentNode.insertBefore(wtads, node);
})();
