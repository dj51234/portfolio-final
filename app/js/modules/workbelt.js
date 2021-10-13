import smoothScroll from 'jquery-smooth-scroll';
import $ from 'jquery';

class WorkBeltToggle {

  constructor() {
    this.$thumbWrap = $('.thumb-wrap');
    this.$contentWrap = $('.content-wrap');
    this.$thumbnails = $('.thumbnail-unit');
    this.$workContainer = $('.portfolio-wrap');
    this.$goBackBtn = $('.go-back-btn');
    this.$thumbnails.smoothScroll();
    this.events();
  }

  events() {
    this.$thumbnails.on('click',this.toggleBelt.bind(this), this.hideThumbs.bind(this));
    this.$goBackBtn.on('click',this.toggleBelt.bind(this), this.showThumbs.bind(this));

  }

  toggleBelt() {
    this.$workContainer.toggleClass('is-slided');
    return false;
  }

  hideThumbs() {
    const that = this;
    setTimeout(function() {
      that.$thumbWrap.hide(300);
    },0);
    this.$contentWrap.show(0);
    return false;
  }

  showThumbs() {
    const that = this;
    setTimeout(function() {
      that.$contentWrap.hide(300);
    },300);
    this.$thumbWrap.show(300);
    return false;
  }
}

export default WorkBeltToggle;