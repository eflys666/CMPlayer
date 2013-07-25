/*
 * CMP embed JavaScript
 * http://bbs.cenfun.com/
 *
 * 1, CMP.write(id, width, height, swf_url, flashvars, params, attrs);
 * 2, CMP.create(id, width, height, swf_url, flashvars, params, attrs);
 * 3, CMP.get(id);
 *
 * file: http://cenfunmusicplayer.googlecode.com/svn/trunk/js/cmp.js
 * source: http://cenfunmusicplayer.googlecode.com/svn/trunk/js/cmp_src.js
 * mini by: http://marijnhaverbeke.nl/uglifyjs
 */
if(typeof window.CMP=="undefined")var CMP=window.CMP=new function(){function b(a,b){if(b&&typeof b=="object")for(var c in b)a[c]=b[c];return a}var a=/msie/.test(navigator.userAgent.toLowerCase());this.write=function(a,b,c,d,e,f,g){var h=this.create(a,b,c,d,e,f,g);document.write(h)},this.get=function(b){var c=document.getElementById(b);if(!c||c.nodeName.toLowerCase()!=="object")c=a?window[b]:document[b];return c},this.create=function(c,d,e,f,g,h,i){var j={width:d,height:e,id:c};b(j,i);var k={allowfullscreen:"true",allowscriptaccess:"always"};b(k,h);var l;if(g)if(typeof g=="object"){var m=[];for(var n in g)m.push(n+"="+encodeURIComponent(g[n]));l=m.join("&")}else l=g+"";l&&(k.flashvars=l);var o="<object ";a?o+='classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=10,0,0,0" ':o+='type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer" data="'+f+'" ';for(var p in j)o+=p+'="'+j[p]+'" ';o+=a?'><param name="movie" value="'+f+'" />':">";for(var q in k)o+='<param name="'+q+'" value="'+k[q]+'" />';o+="</object>";return o}}