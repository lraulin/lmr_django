$('#likes').click(function () {
   var catid;
   catid = $(this).attr("data-catid");
   $.get('/main_app/like/', {category_id: catid}, function(data) {
       $('#like_count').html(data);
       $('#likes').hide();
   });

   $('#suggestion').keyup(function () {
       var query;
       query = $(this).val();
       $.get('/main_app/suggest/', {suggestion: query}, function(data) {
           $('#cats').html(data);
       });
   });

   $('.main_app-add').click(function() {
       var catid = $(this).attr("data-catid");
       var url = $(this).attr("data-url");
       var title = $(this).attr("data-title")
       var me = $(this)
       $.get('/main_app/add/', {category_id: catid, url: url, title: title}, function(data) {
           $('#pages').html(data);
           me.hide();
       });
   });
});