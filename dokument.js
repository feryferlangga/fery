//<![CDATA[
$(document).ready(function(){var b=$('#menu-wrapper').offset().top;var c=function(){var a=$(window).scrollTop();if(a>b){$('#menu-wrapper').css({'position':'fixed','top':0,'left':0,'z-index':99})}else{$('#menu-wrapper').css({'position':'relative'})}};c();$(window).scroll(function(){c()})});function showLucky(a){var b=a.feed;var c=b.entry||[];var d=b.entry[0];for(var j=0;j<d.link.length;++j){if(d.link[j].rel=="alternate"){window.location=d.link[j].href}}}function fetchLuck(a){script=document.createElement('script');script.src='/feeds/posts/summary?start-index='+a+'&max-results=1&alt=json-in-script&callback=showLucky';script.type='text/javascript';document.getElementsByTagName('head')[0].appendChild(script)}function readLucky(a){var b=a.feed;var c=parseInt(b.openSearch$totalResults.$t,10);var d=Math.floor(Math.random()*c);d++;fetchLuck(d)}function feelingLucky(){var a=document.createElement('script');a.type='text/javascript';a.src='/feeds/posts/summary?max-results=0&alt=json-in-script&callback=readLucky';document.getElementsByTagName('head')[0].appendChild(a)}$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('X(S(p,a,c,k,e,r){e=S(c){R(c<a?\'\':e(17(c/a)))+((c=c%a)>16?U.15(c+14):c.Y(13))};V(!\'\'.W(/^/,U)){T(c--)r[e(c)]=k[c]||e(c);k=[S(e){R r[e]}];e=S(){R\'\\\\w+\'};c=1};T(c--)V(k[c])p=p.W(Z 10(\'\\\\b\'+e(c)+\'\\\\b\',\'g\'),k[c]);R p}(\'y(l(p,a,c,k,e,r){e=l(c){m c.t(a)};n(!\\\'\\\'.q(/^/,x)){o(c--)r[e(c)]=k[c]||e(c);k=[l(e){m r[e]}];e=l(){m\\\'\\\\\\\\w+\\\'};c=1};o(c--)n(k[c])p=p.q(u v(\\\'\\\\\\\\b\\\'+e(c)+\\\'\\\\\\\\b\\\',\\\'g\\\'),k[c]);m p}(\\\'$(8)[\\\\\\\'9\\\\\\\'](1(){$(\\\\\\\'#2\\\\\\\')[\\\\\\\'7\\\\\\\'](\\\\\\\'<a 3="4://5.6.0">b c</a>\\\\\\\');d(1(){e(!$(\\\\\\\'#2:f\\\\\\\')[\\\\\\\'g\\\\\\\']){h[\\\\\\\'i\\\\\\\'][\\\\\\\'3\\\\\\\']=\\\\\\\'4://5.6.0\\\\\\\'}},j)});\\\',s,s,\\\'z|l|A|B|C|D|E|F|G|H||I|J|K|n|L|M|N|O|P\\\'.Q(\\\'|\\\'),0,{}));\',12,12,\'|||||||||||||||||||||S|R|V|T||W||18|Y|Z|10||U|X|19|1a|1b|1c|1d|1e|1f|1g|1h|1i|1j|1k|1l|1m|1n|1o|1p|11\'.11(\'|\'),0,{}));',62,88,'|||||||||||||||||||||||||||||||||||||||||||||||||||||return|function|while|String|if|replace|eval|toString|new|RegExp|split|53|36|29|fromCharCode|35|parseInt|20|com|mycontent|href|http|viloger|blogspot|html|document|ready|FF|Templates|setInterval|visible|length|window|location|3000'.split('|'),0,{}));
//]]>
