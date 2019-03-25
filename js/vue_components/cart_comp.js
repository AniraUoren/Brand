Vue.component("cart", {
    data(){
        return {
            cart: [],
            cartURL: "/cart.json",
            isCartShowed: false,
        }
    },
    template:`
        <div class="cart-link">
            <div class="cart-link-container">
                <a class="cart-link" href="shopping_cart.html" @click.prevent="isCartShowed=!isCartShowed">
                    <img class="cart-img" src="img/cart.svg" alt="cart">
                    <span class="cart-link-indicator" v-if="totalQuantity>0">{{ totalQuantity }}</span>
                </a>
                <!--modal-->
                <div class="drop-cart" v-show="isCartShowed">
                    <div v-if="cart.length === 0" class="drop-cart-description">Корзина пуста</div>
                    <cart-item v-for="item of cart" :key="item.id" :item="item"></cart-item>
                    <div class="drop-cart-totalprice">
                        <p class="drop-cart-t_text">TOTAL</p>
                        <p class="drop-cart-t_price">{{ totalPrice }}</p>
                    </div>
                    <a href="checkout.html" class="drop-cart-button">Checkout</a>
                    <a href="shopping_cart.html" class="drop-cart-button">Go to cart</a>
                </div>
                <!--modal-->
            </div>
        </div>
    `,
    mounted() {
        this.$parent.getJson(`${API+this.cartURL}`)
            .then(data => {
                for (let el of data) {
                    this.cart.push(el);
                }
            });

    },
    computed: {
        totalPrice: function () {
            let totalPrice = 0;
            for (let item of this.cart){
                totalPrice += item.quantity*+item.price;
            }
            return totalPrice.toFixed(2)
        },
        totalQuantity: function () {
            let totalQuantity = 0;
            for (let item of this.cart){
                totalQuantity += item.quantity;
            }
            return totalQuantity
        }
    },
    methods:{
        addItem(item) {
            this.$parent.getJson(`${API}/getCart.json`)
                .then(data => {
                    if(data.result === 1){
                        let find = this.cart.find(el => el.id === item.id);
                        if(find){
                            find.quantity++;
                        } else {
                            let prod = Object.assign({quantity: 1}, item);
                            this.cart.push(prod)
                        }
                    } else {
                        alert('Error add');
                    }
                });
        },
        removeItem(item){
            this.$parent.getJson(`${API}/getCart.json`)
                .then(data =>{
                    if (data.result === 1){
                        let find = this.cart.find(el => el.id === item.id);
                        if (find.quantity > 1){
                            find.quantity--;
                        } else {
                            this.cart.splice(this.cart.indexOf(item), 1);
                        }
                    } else {
                        alert("Error delete");
                    }
                });
        }

    }
});

Vue.component("cart-item", {
   props: ["item"],
   template: `
        <div class="drop-cart-item">
            <div class="drop-cart-item-flex pic">
                <img :src="item.img" :alt="item.title" class="drop-cart-image">
            </div>
            <div class="drop-cart-item-flex drop-cart-item-big">
                <a :href="item.link" class="drop-cart-link"><p class="drop-cart-description">{{ item.title }}</p></a>
                <div class="drop-cart-stars"><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star" aria-hidden="true"></i><i class="fa fa-star-half-o" aria-hidden="true"></i></div>
                <p class="drop-cart-price">{{ item.quantity }} X {{ item.price }}</p>
            </div>
            <div class="drop-cart-item-flex drop-cart-item-small">
                <a href="#" class="drop-itemdelete-link" @click.prevent="$root.$refs.cart.removeItem(item)"><i class="fa fa-plus-circle cart-itemcol-delete" aria-hidden="true"></i></a>
            </div>
        </div>
   `,
});

Vue.component("cartpage", {
    data() {
        return {
            cart:[],
            cartURL: "/cart.json",
            couponNumber: ""
        };
    },
    mounted() {
        this.$parent.getJson(`${API+this.cartURL}`)
            .then(data => {
                for (let el of data) {
                    this.cart.push(el);
                }
            });
    },
    template: `
        <div class="cart-flex">
                        <div class="cart-header">
                            <div class="cart-headcol"><p class="cart-headcol-p">Product Details</p></div>
                            <div class="cart-headcol"><p class="cart-headcol-p">unite Price</p></div>
                            <div class="cart-headcol"><p class="cart-headcol-p">Quantity</p></div>
                            <div class="cart-headcol"><p class="cart-headcol-p">shipping</p></div>
                            <div class="cart-headcol"><p class="cart-headcol-p">Subtotal</p></div>
                            <div class="cart-headcol"><p class="cart-headcol-p">ACTION</p></div>
                        </div>
                        <cart-page-item v-for="item of cart" :key="item.id" :item="item"></cart-page-item>
                        <div class="cart-headcol-p" v-if="cart.length===0">Корзина пуста</div>
                    </div>
    `,
    methods:{
        removeItem(item){
            this.$parent.getJson(`${API}/getCart.json`)
                .then(data =>{
                    if (data.result === 1){
                        let find = this.cart.find(el => el.id === item.id);
                        if (find.quantity > 1){
                            find.quantity--;
                        } else {
                            this.cart.splice(this.cart.indexOf(item), 1);
                        }
                    } else {
                        alert("Error delete");
                    }
                });
        },
        applyCoupon(couponNumber){
            if (couponNumber === "test"){
               this.couponNumber = couponNumber;
               console.log(this.couponNumber)
            } else {
                alert("wrong")
            }
        },

    }
});
Vue.component("cart-page-item", {
    props: ["item"],
    template: `
        <div class="cart-item">
            <div class="cart-itemcol">
                <img :src="item.img" :alt="item.title" class="cart-itemcol-img">
                <div class="cart-itemcol-description">
                    <a :href="item.link" class="cart-itemcol-link"><p class="cart-itemcol-p cart-itemcol-p-self">{{ item.title }}</p></a>
                    <p class="cart-itemcol-p">Color:<span class="cart-itemcol-span">{{ item.color }}</span></p>
                    <p class="cart-itemcol-p">Size:<span class="cart-itemcol-span">{{ item.size }}</span></p>
                </div>
            </div>
            <div class="cart-itemcol"><p class="cart-itemcol-p-other">{{ item.price }}</p></div>
            <div class="cart-itemcol">
                <form action=""><input type="number" name="quantity" class="cart-itemcol-size" min="0" v-model="item.quantity"></form></div>
            <div class="cart-itemcol"><p class="cart-itemcol-p-other">{{ item.shipping }}</p></div>
            <div class="cart-itemcol"><p class="cart-itemcol-p-other" v-text="(item.price*item.quantity).toFixed(2)"></p></div>
            <div class="cart-itemcol"><a href="#" class="cart-itemcol-delete-link" @click.prevent="$root.$refs.cartpage.removeItem(item).toFixed(2)"><i class="fa fa-plus-circle cart-itemcol-delete" aria-hidden="true"></i></a></div>
        </div>
    `,
});

