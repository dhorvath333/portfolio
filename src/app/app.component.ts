import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'p-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    var webpage = $('html,body');
    
    $('.section-link').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        var menubarHeight = $('.header__nav').height();
        webpage.stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - menubarHeight
        }, 2000, 'easeInOutQuint')
    });
    
    $('#home-link').on('click', function(event) {
        event.preventDefault();
        event.stopPropagation();
        webpage.stop().animate({
            scrollTop: 0
        }, 2000, 'easeInOutQuint')
    });
    
    $(window).on('scroll', ChangeHeader);
    
    const mq = window.matchMedia("(min-width: 768px)").addListener(ChangeHeader);
    
    function ChangeHeader(mq) {
        mq.matches = mq.matches || true;
    
        if (document.body.scrollTop == 0 && mq.matches) {
            $('#header .navbar').removeClass('header__nav-background');
        } else {
            $('#header .navbar').addClass('header__nav-background');
        }
    }
  }

}
