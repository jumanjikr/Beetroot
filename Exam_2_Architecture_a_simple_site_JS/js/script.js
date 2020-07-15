function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});
;
// NEWS SLIDER

const news = [{
    image: 'img/page/latest-news/news-1.jpg',
    title: 'See The Unmatched Beauty Of The Great.',
    description: 'Free directories: directories are perfect for customers that are... searching for',
    icon: 'img/icon/photos-13323rs3Du9xyQ3KR.png',
    authorName: 'Isaac Dunn',
    date: '09 Feb 2017'
}, {
    image: 'img/page/latest-news/news-3.jpg',
    title: 'Effective Advertising Pointers.',
    description: 'Having a home based business is a wonderful asset to your life...',
    icon: 'img/icon/photos-13323vsWmKApDZJIh.png',
    authorName: 'Dominic Freeman',
    date: '24 Apr 2017'
}, {
    image: 'img/page/latest-news/news-4.jpg',
    title: 'Hypnotize Yourself Into The Ghost.',
    description: 'There are many things that are important to catalog design....',
    icon: 'img/icon/photos-13323TAfapiSrc9IO.png',
    authorName: 'Alice Ward',
    date: '30 Dec 2017'
}, {
    image: 'img/page/latest-news/news-2.jpg',
    title: 'See The Unmatched Beauty Of The Great.',
    description: 'There are many things that are important to catalog design....',
    icon: 'img/icon/photos-13323rs3Du9xyQ3KR.png',
    authorName: 'Isaac Dunn',
    date: '14 Mar 2016'
}, {
    image: 'img/page/latest-news/news-8.jpg',
    title: 'Hypnotize Yourself Into The Ghost.',
    description: 'Free directories: directories are perfect for customers that are... searching for',
    icon: 'img/icon/photos-13323vsWmKApDZJIh.png',
    authorName: 'Dominic Freeman',
    date: '21 Jan 2016'
}]

const blockSlider = $('.block-slider');

class News {
    constructor(data) {
        this.image = data.image;
        this.title = data.title;
        this.description = data.description;
        this.icon = data.icon;
        this.authorName = data.authorName;
        this.date = data.date;
    }

    print() {
        let result = `<div class="block-slider__item">`;
        result += `<img src="${this.image}" alt="">`;
        result += `<div class="slider-info">`;
        result += `<div class="slider-info__title">${this.title}</div>`;
        result += `<div class="slider-info__description">${this.description}</div>`;
        result += `<div class="slider-info__author">`;
        result += `<div class="profile-photo"><img src="${this.icon}" alt=""></div>`;
        result += `<div class="profile-info">`;
        result += `<div class="profile-info__name">${this.authorName}</div>`;
        result += `<div class="profile-info__date">${this.date}</div>`;
        result += `</div>`;
        result += `</div>`;
        result += `</div>`;
        result += `</div>`;

        blockSlider.append(result);
    }
}


class NewsList {
    constructor(data) {
        this.data = data;
    }

    print() {
        this.data.forEach(element => {
            const news = new News(element);
            news.print();
        })
    }
}

newsList = new NewsList(news);
newsList.print();

$('#news-standard').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,

    dots: true,
    responsive: [
        {
            breakpoint: 1340,
            settings: {
                arrows: false,
            }
        }
    ]
});

$('#news-mini').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    dots: true,
});;
// GALLERY


let active = false;

function toggleGallery() {
    const gallery = $('.block-gallery');
    const galleryActive = $('.block-active');


    if (!active) {
        gallery.fadeToggle(50);
        galleryActive.fadeToggle(1000);
        active = true;
    } else {
        $('html, body').animate({
            scrollTop: $('#gallery').offset().top
        });
        galleryActive.fadeToggle(0);
        gallery.fadeToggle(1000);
        active = false;

    }

}

$('.block-gallery__button').click(toggleGallery);
$('.block-active__button').click(toggleGallery);
;
$('.main__circle-arrow').click(() => {
    $('html, body').animate(
        {
            scrollTop: $('#about').offset().top
        })
}
);
$('.main__circle-arrow').scroll(() => {
    $('html, body').animate(
        {
            scrollTop: $('#about').offset().top
        })
}
);

$('.header__logo').click(() => {
    $('html, body').animate(
        {
            scrollTop: $('body').offset().top
        })
}
);

$('.info-brand__logo').click(() => {
    $('html, body').animate(
        {
            scrollTop: $('body').offset().top
        })
}
);


document.querySelectorAll('.tab-item').forEach(item => {
    item.addEventListener('click', event => {
        $('.tab-item__circle.active').removeClass('active');

        const tab = (event.target.getAttribute('data-tab'));
        event.target.querySelector('span').classList.add('active');
        if (tab == 'contact') {
            $('html, body').animate({
                scrollTop: $(`#${tab}`).offset().top - 400
            }, 1000)
        } else {
            $('html, body').animate({
                scrollTop: $(`#${tab}`).offset().top
            }, 700)
        }

    })
})



$('.js-menu-toggler').click(function () {
    $(this).toggleClass('header__toggler--open');
    $('.js-menu').fadeToggle();
    $('.header').toggleClass('toggled')

});
;
// HEADER SLIDER

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    vertical: true,
    centerMode: true,
    arrows: false,
    cssEase: "linear",
});;

