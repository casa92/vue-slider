
Vue.config.devtools = true;

const app = new Vue(
    {
        el: '#root',
        data: {
            currentActiveSlide: 0,
            counterSlide: false,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'            
                },

                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text:'Lorem ipsum'            
                },

                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'            
                },

                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'            
                },

                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text:'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'            
                }
            ]
        },

        methods: {
            showNextSlider: function() {
                if( this.currentActiveSlide < this.slides.length - 1) {
                    this.currentActiveSlide++;
                } else {
                    this.currentActiveSlide = 0 ;
                }
            },
            showPrevSlider: function() {
                if(this.currentActiveSlide > 0) {
                    this.currentActiveSlide--;
                } else {
                    this.currentActiveSlide = this.slides.length -1;
                }
            },
            showThisSlide: function(test) {
                this.currentActiveSlide = test;
            },

            stopAutoPlay: function() {
                clearInterval(this.counterSlide);
            },
            restartAutoPlay: function() {
                this.counterSlide = setInterval(() => {
                    if( this.currentActiveSlide < this.slides.length - 1) {
                        this.currentActiveSlide++;
                    } else {
                        this.currentActiveSlide = 0 ;
                    }
                }, 3000);
            }
        },

        created: function() {
            this.counterSlide = setInterval(() => {
                if( this.currentActiveSlide < this.slides.length - 1) {
                    this.currentActiveSlide++;
                } else {
                    this.currentActiveSlide = 0 ;
                }
            }, 3000);
        }
    }
);




