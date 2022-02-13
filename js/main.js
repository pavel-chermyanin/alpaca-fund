$(function () {



    // if the page is main start video

    // const runVideo = () => {
    //     if ($('.top__video').length) {
    //         $('.top__video').get(0).play()
    //     }
    // }
    // runVideo()

    // connected animate library

    new WOW().init();



    // animate for product-page__todo-item


        $('.product-page__todo-item span').each(function(index, item) {
            setTimeout(() => {
                item.style.opacity = '1';
            }, (index + 2) * 300);
        })

})