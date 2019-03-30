Vue.component("coupon", {
    data(){
        return{
            couponNumber: ""
        }
    },
    template: `
        <div class="cart-form">
            <h3 class="cart-form-h">coupon discount</h3>
            <p class="cart-form-p">Enter your coupon code if you have one</p>
            <form class="cart-form-flex" action="#" @submit.prevent="$parent.$refs['cart-page'].applyCoupon(couponNumber)">
                <input class="cart-form-textform" type="text" placeholder="State" v-model="couponNumber">
            <button class="cart-form-buttonform">Apply coupon</button>
            </form>
        </div>
    `,
});