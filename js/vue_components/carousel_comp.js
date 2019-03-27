Vue.component("carousel", {
    data(){
        return {
            feedback: [],
            feedbackURL: "/feedback.json",
            active: 0,
            direction: 1,
        }
    },
    template: `
        <div class="carousel">
            <transition-group tag="div" :name="direction > 0 ? 'slide' : 'slide-invert'" class="carousel-slide">
                <carousel-item v-for="item of feedback" :key="item.id" :item="item"></carousel-item>
            </transition-group>
            <ul class="carousel-buttons">
            <li v-for="(src,index) in feedback" :class="{active:index === active}" @click="change(index)"></li>
                <!--<li class="carousel-button">1</li>-->
                <!--<li class="carousel-button carousel-button__active">2</li>-->
                <!--<li class="carousel-button">3</li>-->
            </ul>
        </div>
    `,
    computed: {
        total() {
            return this.feedback.length
        }
    },
    methods: {
        change(index) {
            this.direction = index > this.active ? 1 : -1;
            this.active = (index + this.total) % this.total
        }
    }
});

Vue.component("carousel-item", {
    props: ["item"],
    template: `
            <div>
                <img class="carousel-slide__face" :src="item.img" :alt="item.name">
                <p class="carousel-slide__note">{{ item.note }}</p>
                <p class="carousel-slide__name">
                    <span class="carousel-slide__name__big">{{ item.name }}</span> {{ item.from }}
                </p>
            </div>
    `,
});