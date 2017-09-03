function Post() {
    function bindEvent() {
        $(".edit-form").submit(function (e) {
            e.preventDefault();
            var params = {
                id: $(".id").val(),
                title: $(".title").val(),
                content: tinymce.get("content-editor").getContent(),
                author: $(".author").val()
            };
            $.ajax({
                url: `/admin/post/edit`,
                method: "PUT",
                data: params,
                dataType: "json",
                success: function (data) {
                    if(data && data.status_code === 200){
                        location.reload();
                    }
                },
                error: function (data) {

                }
            });
        });

        $("#post-delete").click(function (e) {
            e.preventDefault();
            let postID = $(this).attr("post-id");
            $.ajax({
               url:"/admin/post/delete",
               method: "DELETE",
               data:{
                   id: postID
               },
               dataType:"json",
               success: function (data) {
                   if(data && data.status_code === 200){}
                   location.reload();
               }
            });
        });
    }
    bindEvent();
}

$(document).ready(function () {
    new Post();
});