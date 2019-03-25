Vue.component("carousel", {
    data(){
        return {
            feedback: [],
            feedbackURL: "/feedback.json",
            firstBlock: false,
            secondBlock: false,
            thirdBlock: false,
        }
    },
    template: `
        <div class="carousel">
            <carousel-item v-for="item of feedback" :key="item.id" :item="item"></carousel-item>
            <ul class="carousel-buttons">
                <li class="carousel-button">1</li>
                <li class="carousel-button carousel-button__active">2</li>
                <li class="carousel-button">3</li>
            </ul>
        </div>
    `,
    mounted() {
        this.$parent.getJson(`${API+this.feedbackURL}`)
            .then(data => {
                for (let el of data) {
                    this.feedback.push(el);
                }
            });
        this.addAttributesToSlide()
    },
    methods: {
        addAttributesToSlide(){
            //надо выбрать слайды из блока слайдер, дам им v-show и повесить on-click на кнопки
            //получается выбрать только элемент с классом ".carousel", как найти его
            let slides = [];

        }
    }
});

Vue.component("carousel-item", {
    props: ["item"],
    template: `
            <div class="carousel-slide">
                <img class="carousel-slide__face" :src="item.img" :alt="item.name">
                <p class="carousel-slide__note">{{ item.note }}</p>
                <p class="carousel-slide__name">
                    <span class="carousel-slide__name__big">{{ item.name }}</span> {{ item.from }}
                </p>
            </div>
    `,
});