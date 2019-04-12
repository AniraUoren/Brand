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
                <carousel-item v-for="(src, index) of feedback" :key="src.id" v-show="index === active" :item="src"></carousel-item>
            </transition-group>
            <ul class="carousel-buttons_ul">
                <li v-for="(src,index) in feedback" class="carousel-buttons_li" @click="change(index)">
                    <button class="carousel_button" :class="{buttonctive:index === active}">{{ index }}</button>
                </li>
            </ul>
        </div>
    `,
    mounted(){
        this.$parent.getJson(`${API+this.feedbackURL}`)
            .then(data => {
                for (let el of data) {
                    this.feedback.push(el);
                }
            });
    },
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