import smoothScroll from 'jquery-smooth-scroll';
import $ from 'jquery';

class MobileNavToggle {
  constructor() {
    this.$menuIcon = $('.mobile-header__menu-icon');
    this.$mobileNav = $('.mobile-header');
    this.$navLinks = $('.header__nav-link');
    this.$mobileNavLinks = $('.mobile-header__link');
    this.events();
  }

  events() {
    const that = this;
    this.$menuIcon.on('click', this.toggle.bind(this));
    this.$mobileNavLinks.on('click', this.closeMenu.bind(this));
    this.$navLinks.smoothScroll();
    this.$mobileNavLinks.smoothScroll();
  }

  toggle() {
    this.$mobileNav.toggleClass('mobile-header--is-expanded');
  }

  closeMenu() {
    this.$mobileNav.removeClass('mobile-header--is-expanded');
  }
}

export default MobileNavToggle;