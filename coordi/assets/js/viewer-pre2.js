(function ($) {

    /* 뷰 활성화 */

    (function handleTrailer() {
        // 셀렉터 캐시
        var $selector = {
            body: $("body"),
            overlay: $(".overlay"),
            Modal: $("#modal"),
            hideButton: $("#hideview"),
            image: $(".item img")
        };

        // 보이기, 숨기기 버튼 활성화
        $(document).on('click',".item img",showView);
        $selector.hideButton.on("click", hideView);
        

 function setimage(id) {
            $('.img img').attr('src', id.attr('src'));
            var a = $(id).width();
            var b = $(id).height();
            
            // 처음 뷰어 크기 설정
            resizeView(a,b);
            // 리사이즈나 화면 회전시 뷰어 크기 다시 설정
            $(window).on("resize orientationchange", function () {
                resizeView(a,b);
            });
        }

        // 화면 크기에 비례해 뷰어의 크기 조절
        // 화면 크기에 비례해 뷰어의 크기 조절
        function resizeView(a,b) {
            var viewport = {},
                modal = {},
                photo ={};
            viewport.width = $(window).innerWidth();
            viewport.height = $(window).innerHeight();
            modal.width = (viewport.height * 0.8 * a / b);
            modal.height=modal.width/a*b;
            modal.top = ( ( viewport.height - modal.height ) / 2-10 ) + "px";
            modal.left = ((viewport.width - modal.width) / 2) + "px";
            if (viewport.width<769){
                modal.top = "0px";
                modal.left = "0px";
                modal.height = "100%";
                modal.width = "100%";
            }
            $selector.Modal.css(modal);
           

        }

        // view 보이기
        function showView() {
            setimage($(this));
            $selector.body.addClass("modal_on");
            $selector.overlay.fadeIn();
            $selector.Modal.show()
            $selector.overlay.on('click', hideView);
        }

        // view 감추기
        function hideView() {
            $selector.overlay.fadeOut();
            $selector.body.removeClass("modal_on");
            $selector.overlay.off('click', hideView);
            $selector.Modal.hide();

            document.getElementById('detail_nick_name').innerText = ' ';
            document.getElementById('detail_email').innerText = ' ';
            document.getElementById('detail_tag').innerText = ' ';
            document.getElementById('em_memo').innerText = ' ';
        }

    })();

})(jQuery);
