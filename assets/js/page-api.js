
var conf_data = null;

$.ajax({
    type: "GET",
    url: "/api/get-prof.json",
    success: function (response) {
        $(".discord-my-icon").attr("src", response.avatar);
    }
});