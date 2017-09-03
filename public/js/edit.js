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
            var baseUrl = `${location.protocol}//${document.domain}:${location.port}`;
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
    }
    bindEvent();
}

$(document).ready(function () {
    new Post();
});