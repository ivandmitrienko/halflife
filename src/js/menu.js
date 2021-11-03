$(document).ready(function() {
    $('.main-sidebar__burger').click(function(event) {
        $('.main-sidebar__burger,.main-sidebar-menu').toggleClass('active');
    });
});

$(document).ready(function() {
    $('.blog-content__burger').click(function(event) {
        $('.blog-content__burger,.blogs-sidebar').toggleClass('active');
    });
});