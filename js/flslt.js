/*flslt.js-fl20150709gz*/function flslt(){var a=$(".sltbox");a&&a.each(function(b,c){var l,m,f,h,i,j,k,n,o,d=$(c),e=d.attr("rel");e||(e=","),f=d.find(".slted"),d.find(".sltpop"),h=d.find(".sltopt"),i=d.find(".sltxt"),j=d.find(".sltshut"),k=Array(),n=a.not(a[b]),o=d.find(".slted,.v"),h.each(function(a,b){var g,h,c=$(b),d=c.find(".sltipt"),e=c.find(".sltxt");i.not(e),g=d.prop("checked"),h=e.html(),g&&(k.push(h),e.addClass("sltcked"))}),l=k.join(e),f.is("input")?f.val(l):f.html(l),o.click(function(a){a.stopPropagation(),d.toggleClass("slton"),n.removeClass("slton")}),j.click(function(a){a.stopPropagation(),d.removeClass("slton")}),h.each(function(a,b){var c=$(b),d=c.find(".sltipt"),g=c.find(".sltxt"),h=i.not(g);d.click(function(a){var b,c,i;a.stopPropagation(),b=d.prop("checked"),c=g.html(),d.is(":checkbox")&&(b?g.addClass("sltcked"):g.removeClass("sltcked")),d.is(":radio")&&(g.addClass("sltcked"),h.removeClass("sltcked")),m=f.is("input")?f.val():f.html(),k=m?m.split(e):Array(),i=$.inArray(c,k),d.is(":checkbox")&&(i>=0&&!b&&(k.splice(i,1),l=k.join(e)),0>i&&b&&(k.unshift(c),l=k.join(e))),d.is(":radio")&&(l=c),f.is("input")?f.val(l):f.html(l)}),g.click(function(a){a.stopPropagation(),d.trigger("click")})})}),$(document).click(function(){a.removeClass("slton")})}/*feilong.org-20150709-gz-end*/
