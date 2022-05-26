$(document).ready(function () {
    $('.route li').click(function () {
        if (document.getElementsByClassName(`${this.id}`)[0]) {
            $(`.${this.id}`).show()
        }
    });
    $(document).mouseup(function (e) {
        var container = $(".popup");
        if (!container.is(e.target) &&
            container.has(e.target).length === 0) {
            container.hide();
        }
    });
})