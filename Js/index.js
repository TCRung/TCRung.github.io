$(window).on('scroll', function () {
    var animationArea = $('#software');
    // 獲取動畫觸發元素
    var animationTrigger = $('.progress svg:nth-child(2) path');

    // 檢測用戶是否已經滾動到動畫區域
    var elementPosition = animationArea[0].getBoundingClientRect();

    // 設定觸發動畫的位置
    if (elementPosition.top - window.innerHeight < -100 && elementPosition.bottom > 0) {
        // 如果滾動位置符合條件，觸發動畫
        animationTrigger.addClass('animation-trigger');
    }
    else {
        animationTrigger.removeClass('animation-trigger');
    }
});