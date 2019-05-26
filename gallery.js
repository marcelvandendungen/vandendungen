
var wireUpLinks = function() {
    document.getElementById('links').onclick = function (event) {
        event = event || window.event;
        var target = event.target || event.srcElement,
            link = target.src ? target.parentNode : target,
            options = {index: link, event: event},
            links = document.querySelectorAll("#links a");
        blueimp.Gallery(links, options);
    };

}