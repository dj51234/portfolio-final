

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

// To be used to define portfolio items
// Define name of title, project description and tools used
// ie {title: 'Project Title', description: 'Project description', tools: ['tool1','tool2']}
const portfolioContent = {
    1: { title: 'crowdAmerica', description: 'For this project I was tasked with designing a website from scratch with photoshop and implementing it into wordpress using a generic wordpress theme.  The task was to create a visually appealing website while leveraging wordpress to start with the structure, then proceeding to customize everything else with CSS and some elements with HTML.  The client was very adamant about having their site be easily maintained with a CMS, so this was a fun project to be able to learn more about wordpress and the different tools you can use to customize a website.', tools: ['html5','css3','wordpress'], link: 'http://crowdamerica.org'},
    2: { title: 'Amex Corporate', description: 'This was one site from American Express that was especially exciting to work on because it was my first project working with their team of developers and working in a structured top/down approach with a full team of Customer Experience, designers and other developers.  I was mainly responsible for building the card selector on the page that injects code into the page depending on what card is selected.  I leveraged tools such as HTML, SASS, PHP and some Javascript to complete the project.', tools: ['html5','css3', 'sass', 'javascript'], link: 'https://creditcard.americanexpress.com/corporate-business-extra/'},
    3: { title: 'Clear View Escapes', description: 'This was a personal project that I recently completed in my down time, as I wanted to focus on taking an Object Oriented approach to many common tasks like mobile nav, smooth scrolling, modal interactions, etc.  Usually I take a more functional approach but I was excited to leverage ES6 and the introduction to "classes" to create functionality that I would normally just code out using a couple functions and jQuery.  I must say it was much more fun creating a modular structure that I could go to and know exactly what was happening.  I plan to pursue more personal projects using this approach to maintain organization in future projects!',  tools: ['html5','css3', 'sass', 'javascript', 'nodejs'], link: 'https://dj51234.github.io/travel-site/' },
    4: { title: 'Custom Video Player', description: 'This was a project I recently completed on the side as a fun way to build a video player from scratch using only SASS and Javascript to build the functionality.  Thinking of ways to leverage Javascript to complete tasks that are normally done differently helped me understand how powerful Javascript can really be, from coding the progress bar to move depending on the current time of the video, to coding the volume/slow motion functionality was a blast.',  tools: ['html5','css3', 'sass', 'javascript'], link: 'https://dj51234.github.io/Custom-video-player/'},
    5: { title: 'Amex Green', description: 'For this website I helped develop the top section which is the multicard navigation and top header.  PHP was leveraged to load each card section and its\' info in dynamically and of course Javascript was used for the main functionality of sliding in the card info on button presses.  Also if you scroll down the page a neat multicard navigation sticks to the top of the page and corresponds with the page columns that correspond with that card.  This project was fun because it helped me understand the real importance of communicating with a web designer to help achieve their final vision of what they want their designs to accomplish.',  tools: ['html5','css3', 'sass', 'javascript'], link: 'https://card.americanexpress.com/green/' },
    6: { title: 'Amex Delta', description: 'My latest project was a small redesign of one of American Express\' more recent cards.  They wanted to take a more simple and elegant approach to this design to get straight to the point in terms of what the website was trying to portray.  Nothing too fancy or different from the other American Express sites although I really enjoyed working with the designer on this one and was very eager to get the designer\'s beautiful design actually running in a browser to see it in action.  We decided to use the multicard navigation again when scrolling down the page as well to add a bit of oomph to the overall UX.',  tools: ['html5','css3', 'sass', 'javascript'], link: 'https://creditcard.americanexpress.com/delta/' }
  };
  
  class WorkContent {
  
    constructor() {
      this.$thumbnails = $('.thumbnail-unit');
      this.$workImage = $('.content-image');
      this.$workDescription = $('.content-description');
      this.$workTitle = $('.content-title');
      this.$tools = $('.content-tools');
      this.$visit = $('.visit');
      this.thumbTitles = Array.from(document.querySelectorAll('.thumb-overlay span'));
      this.loadContent();
      this.loadTitles();
    }
  
    loadTitles() {
  
      this.thumbTitles.map(function(item) {
        let currentNum = item.getAttribute('data-content');
        item.innerHTML = portfolioContent[currentNum].title;
      });
  
    }
  
    loadContent() {
  
      const that = this;
  
      this.$thumbnails.on('click', function(){
  
        const contentNum = this.getAttribute('data-content');
        const tools = portfolioContent[contentNum].tools;
        const link = portfolioContent[contentNum].link;
  
        that.$workImage.css({
          'background': `url("../dest/images/content_img_${contentNum}.jpg")`,
          'background-size': 'cover',
          'background-position': 'center center'
        });
        that.$workDescription.html(portfolioContent[contentNum].description);
        that.$workTitle.html(portfolioContent[contentNum].title);
        that.$visit.attr('href',link);
  
        const spanOutput = tools.map(function(tool) {
          return `<abbr title="${tool}" class="ion-social-${tool}"></abbr>`;
        });
  
        that.$tools.html(spanOutput);
  
      });
    }
  }

new MobileNavToggle();
new WorkBeltToggle();
new WorkContent();