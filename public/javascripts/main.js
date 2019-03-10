(function () {

    $(document).ready(function () {
        var $navbar = $('.navbar')
        var $navbarNav = $navbar.find('.navbar-nav');
        $navbarNav.find('a').click(function () {
            if (!this.hash || this.hash.length === 0) {
                return
            }
            event.preventDefault();
            var hash = this.hash;
            
            var offset = $(hash).offset().top// + $navbar.outerHeight();
            console.log(offset);
            
            $('html, body').animate({
                scrollTop: offset
            }, 800, function () {
                window.location.hash = hash;
            })
        })

        $('body').scrollspy({target: ".navbar", offset: 50});
    });
})();