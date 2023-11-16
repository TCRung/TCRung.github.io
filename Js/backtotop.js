$('#back-to-top').load('/backtotop.html', function () {
    var progressPath = $('.progress-wrap path')[0];
    var pathLength = progressPath.getTotalLength();
    $(progressPath).css('transition', 'none').css('WebkitTransition', 'none');
    $(progressPath).css('strokeDasharray', pathLength + ' ' + pathLength);
    $(progressPath).css('strokeDashoffset', pathLength);
    progressPath.getBoundingClientRect();
    var updateProgress = function () {
        var scroll = $(window).scrollTop();
        var height = $(document).height() - $(window).height();
        var progress = pathLength - (scroll * pathLength / height);
        progressPath.style.strokeDashoffset = progress;
    }
    updateProgress();
    $(window).scroll(updateProgress);

    var offset = 50;
    var duration = 1000;
    $(window).on('scroll', function () {
        //console.log($(this).scrollTop());
        if ($(this).scrollTop() > offset) {
            $('.progress-wrap').addClass('active-progress');
        } else {
            $('.progress-wrap').removeClass('active-progress');
        }
        $('.progress-wrap').css({
            position: 'fixed',
            bottom: '25px',
            top: 'auto'
        });
    });



    $('.progress-wrap').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, duration);
        return false;
    });
});
