$("#cpcv-navs").load("../../app/set_/cpcv-categories.html");$("#cpcv-covers").load("../../app/set_/cpcv-front.html");function CALL(_url){$.ajax({type:'post',url:_url,success:function(data){$('#cpcv-pagecall').html(data);},error:function(){$('#cpcv-pagecall').text('waiting to write!');}});}
