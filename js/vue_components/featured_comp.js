Vue.component("featured", {
    data() {
        return {
            featured: [],
            featuredURL: "/catalog.json"
        };
    },
    template: `
        <div class="fetured-items">
            <featured-item v-for="item of featured" :key="item.id" :item="item"></featured-item>
        </div>
    `,
    computed: {
        addToCart(){

        }
    },
    mounted() {
        this.$parent.getJson(`${API+this.featuredURL}`)
            .then(data => {
                for (let el of data) {
                    this.featured.push(el);
                }
            });
    }
});

Vue.component("featured-item", {
   props: ["item"],
   template: `
        <a :href="item.link" class="fetured-item-link">
            <div class="fetured-item"><img class="fetured-item-img" :src="item.img" :alt="item.title">
                <p class="fetured-item-name">{{ item.title }}<span class="pink fetured-item-price">{{ item.price }}</span></p>
                <div class="add-product"><a href="#" class="add" @click.prevent="$root.$refs.cart.addItem(item)">Add to Cart</a></div>
            </div>
        </a>
   `
});