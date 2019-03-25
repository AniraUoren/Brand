Vue.component("catalog", {
    data() {
        return {
            catalog: [],
            catalogURL: "/catalog.json"
        };
    },
    template: `
        <div class="store-items">
            <catalog-item v-for="item of catalog" :key="item.id" :item="item"></catalog-item>
        </div>
    `,
    mounted(){
        this.$parent.getJson(`${API+this.catalogURL}`)
            .then(data => {
                for (let el of data) {
                    this.catalog.push(el);
                }
            });
    },
});

Vue.component("catalog-item", {
    props: ["item"],
    template: `
        <a :href="item.link" class="store-item-link">
            <div class="store-items-container">
                <div class="store-item">
                    <img :src="item.img" :alt="item.title" class="store-item-img">
                    <p class="store-item-description">{{ item.title }}</p>
                    <p class="store-item-prise">{{ item.price }}</p>
                </div>
                <div class="store-items-buttons">
                        <button class="store-items-button-add-link" @click.prevent="$root.$refs.cart.addItem(item)">
                            <img class="store-items-button-add-link-img" src="img/cart_white.png">Add to Cart    
                        </button>
                        <button href="#" class="store-items-button-compare-link">
                             <img class="store-items-button-compare-link-img" src="img/compare.png">
                        </button>
                        <button href="#" class="store-items-button-like-link">
                            <img class="store-items-button-like-link-img" src="img/like.png">
                        </button>
                </div>
            </div>
        
                
        </a>
    `,
});