let nameIndex = 1;
class MobileNavToggle {
  constructor() {
    this.$menuIcon = $(".mobile-header__menu-icon");
    this.$mobileNav = $(".mobile-header");
    this.$navLinks = $(".header__nav-link");
    this.$mobileNavLinks = $(".mobile-header__link");
    this.events();
  }

  events() {
    const that = this;
    this.$menuIcon.on("click", this.toggle.bind(this));
    this.$mobileNavLinks.on("click", this.closeMenu.bind(this));
    this.$navLinks.smoothScroll();
    this.$mobileNavLinks.smoothScroll();
  }

  toggle() {
    this.$mobileNav.toggleClass("mobile-header--is-expanded");
  }

  closeMenu() {
    this.$mobileNav.removeClass("mobile-header--is-expanded");
  }
}

class WorkBeltToggle {
  constructor() {
    this.$thumbWrap = $(".thumb-wrap");
    this.$contentWrap = $(".content-wrap");
    this.$thumbnails = $(".thumbnail-unit");
    this.$workContainer = $(".portfolio-wrap");
    this.$goBackBtn = $(".go-back-btn");
    this.$thumbnails.smoothScroll();
    this.events();
  }

  events() {
    this.$thumbnails.on(
      "click",
      this.toggleBelt.bind(this),
      this.hideThumbs.bind(this)
    );
    this.$goBackBtn.on(
      "click",
      this.toggleBelt.bind(this),
      this.showThumbs.bind(this)
    );
  }

  toggleBelt() {
    this.$workContainer.toggleClass("is-slided");
    return false;
  }

  hideThumbs() {
    const that = this;
    setTimeout(function () {
      that.$thumbWrap.hide(300);
    }, 0);
    this.$contentWrap.show(0);
    return false;
  }

  showThumbs() {
    const that = this;
    setTimeout(function () {
      that.$contentWrap.hide(300);
    }, 300);
    this.$thumbWrap.show(300);
    return false;
  }
}

const portfolioContent = {
  1: {
    title: "Investor Management Services",
    description:
      "For this project I was tasked with designing/rebranding a website using photoshop for design templates and implementing it into wordpress using a generic wordpress theme.  The task was to create a visually appealing website that appeared more modern to generally older individuals who invest in real estate properties. I leveraged the previous website/theme as a foundation for the structure, then proceeded to customize everything else with HTML, CSS and jQuery.  At this company it was important to the CEO that the site be easily maintained with a CMS to allow non-developers to add different components easily over time.  This was a fun project to be able to learn more about Wordpress and the different tools you can use to customize a website.",
    tools: ["html5", "css3", "wordpress", "javascript"],
    link: "https://www.investormanagementservices.com/",
  },
  2: {
    title: "AMEX Delta",
    description:
      "This project was a small redesign of one of American Express' more recent cards.  They wanted to take a more simple and elegant approach to this design to get straight to the point in terms of what the website was trying to portray.  Nothing too fancy or different from the other American Express sites although I really enjoyed working with the designer on this one and was very eager to get the designer's beautiful design actually running in a browser to see it in action.  We decided to use the multicard navigation when scrolling down the page as well to add a bit more oomph to the overall UX.",
    tools: ["html5", "css3", "sass", "javascript"],
    link: "https://card.americanexpress.com/d/delta-reserve-credit-card/",
  },

  3: {
    title: "CloudMe",
    description:
      "This is an older design I created for CloudMe.  I leveraged a lot of jQuery libraries to accomplish the desired outcomes and overall UI/UX of the website.  This was a good project to go a little more in depth with jQuery and learn some of the quirks and nuances that come with it.",
    tools: ["html5", "css3", "javascript"],
    link: "http://dj51234.github.io/CloudMe/",
  },
  // 6: {
  //   title: "Amex Delta",
  //   description:
  //     "My latest project was a small redesign of one of American Express' more recent cards.  They wanted to take a more simple and elegant approach to this design to get straight to the point in terms of what the website was trying to portray.  Nothing too fancy or different from the other American Express sites although I really enjoyed working with the designer on this one and was very eager to get the designer's beautiful design actually running in a browser to see it in action.  We decided to use the multicard navigation when scrolling down the page as well to add a bit more oomph to the overall UX.",
  //   tools: ["html5", "css3", "sass", "javascript"],
  //   link: "https://creditcard.americanexpress.com/delta/",
  // },
};

class WorkContent {
  constructor() {
    this.$thumbnails = $(".thumbnail-unit");
    this.$workImage = $(".content-image");
    this.$workDescription = $(".content-description");
    this.$workTitle = $(".content-title");
    this.$tools = $(".content-tools");
    this.$visit = $(".visit");
    this.thumbTitles = Array.from(
      document.querySelectorAll(".thumb-overlay span")
    );
    this.loadContent();
    this.loadTitles();
  }

  loadTitles() {
    this.thumbTitles.map(function (item) {
      let currentNum = item.getAttribute("data-content");
      item.innerHTML = portfolioContent[currentNum].title;
    });
  }

  loadContent() {
    const that = this;

    this.$thumbnails.on("click", function () {
      const contentNum = this.getAttribute("data-content");
      const tools = portfolioContent[contentNum].tools;
      const link = portfolioContent[contentNum].link;

      that.$workImage.css({
        background: `url("./dest/images/content_img_${contentNum}.jpg")`,
        "background-size": "cover",
        "background-position": "center center",
      });
      that.$workDescription.html(portfolioContent[contentNum].description);
      that.$workTitle.html(portfolioContent[contentNum].title);
      that.$visit.attr("href", link);

      const spanOutput = tools.map(function (tool) {
        return `<abbr title="${tool}" class="ion-social-${tool}"></abbr>`;
      });

      that.$tools.html(spanOutput);
    });
  }
}

function renderName() {
  const $title = document.querySelector(".section__title");
  $title.textContent = "";
  let myName = "Derrick Johnson";

  if (nameIndex < myName.length) {
    $title.textContent = myName.slice(0, nameIndex) + "_";
    nameIndex++;
  } else if (nameIndex === myName.length) {
    $title.textContent = myName.slice(0, nameIndex);
  }
  if (!nameIndex) {
    return false;
  }
  setTimeout(renderName, 300);
}

new MobileNavToggle();
new WorkBeltToggle();
new WorkContent();
renderName();
