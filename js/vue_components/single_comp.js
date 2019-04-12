Vue.component("single",{
    data(){
        return{
            item: {},
            itemURL: "/item.json",
            catalog: [],
            catalogURL: "/catalog.json"
        }
    },
    mounted(){
        this.$parent.getJson(`${API+this.itemURL}`)
            .then(data => {
                for (let el of data) {
                    this.item = Object.assign(el);
                }
            });
        this.$parent.getJson(`${API+this.catalogURL}`)
            .then(data => {
                for (let el of data) {
                    this.catalog.push(el);
                }
            });
    },
    template: `
        <div class="item-page">
                <div class="item-page-show">
                    <a href="#" class="arrow-left">
                        <div class="item-page-arrow-left"><i class="fa fa-angle-left" aria-hidden="true"></i></div>
                    </a>
                    <img :src="item.img" :alt="item.title" class="item-page-img">
                    <a href="#" class="arrow-right">
                        <div class="item-page-arrow-right"><i class="fa fa-angle-right" aria-hidden="true"></i></div>
                    </a>
                </div>
                <section class="item-page-description">
                    <div class="item-page-show-carusel">
                        <p class="item-page-show-carusel-description">WOMEN COLLECTION</p>
                        <ul class="item-page-show-carusel-list">
                            <li class="item-page-show-carusel-element"><a href="#" class="item-page-show-carusel-link">1</a></li>
                            <li class="item-page-show-carusel-element active-carusel-element"><a href="#" class="item-page-show-carusel-link">2</a></li>
                            <li class="item-page-show-carusel-element"><a href="#" class="item-page-show-carusel-link">3</a></li>
                        </ul>
                    </div>
                    <h3 class="item-page-description-h">{{ item.title }}</h3>
                    <p class="item-page-description-p">{{ item.description }}</p>
                    <div class="item-page-description-flex">
                        <p class="item-page-description-material">MATERIAL: <span class="strong">{{ item.material }}</span></p>
                        <p class="item-page-description-designer">DESIGNER: <span class="strong">{{ item.designer }}</span></p>
                    </div>
                    <p class="item-page-description-price">{{ item.price }}</p>

                    <!--<div class="item-page-description-form">-->
                        <!--<form action="#" class="item-page-description-choose">-->
                            <!--<label class="item-page-description-choose-param">CHOOSE COLOR<br><input list="Color"></label>-->
                            <!--<datalist id="Color" v-for="color of item.color">-->
                                <!--<option :value="color"></option>-->
                            <!--</datalist>-->
                            <!--<label class="item-page-description-choose-param">CHOOSE SIZE<br><input list="Size"></label>-->
                            <!--<datalist id="Size" v-for="size of item.size">-->
                                <!--<option :value="size"></option>-->
                            <!--</datalist>-->
                            <!--<label class="item-page-description-choose-param">QUANTITY<br><input list="Quanity"></label>-->
                            <!--<input type="number"></input>-->
                        <!--</form>-->
                        <!--<a href="#" class="item-page-description-add">-->
                            <!--<img src="img/cart_red.png" alt="Add" class="item-page-description-cart">-->
                            <!--<p class="item-page-description-addto">Add to Cart</p>-->
                        <!--</a>-->
                    <!--</div>-->
                </section>
                <article class="alsolike">
                    <div class="container alsolike-flex">
                        <h3 class="alsolike-h">you may like also</h3>
                        <div class="alsolike-items">
<!--                            <a href="#" class="alsolike-item-link">-->
<!--                                <div class="alsolike-item">-->
<!--                                    <img :src="catalog[10].img" alt="ItemImg" class="alsolike-item-img">-->
<!--                                    <p class="alsolike-item-description">{{ catalog[10].title }}</p>-->
<!--                                    <p class="alsolike-item-price">{{ catalog[10].price }}</p>-->
<!--                                    <div class="alsolike-add-product"><a href="#" class="add" @click.prevent="$root.$refs.cart.addItem(item)">Add to Cart</a></div>-->
<!--                                </div>-->
<!--                            </a>-->
<!--                            <a href="#" class="alsolike-item-link">-->
<!--                                <div class="alsolike-item">-->
<!--                                    <img :src="catalog[11].img" alt="ItemImg" class="alsolike-item-img">-->
<!--                                    <p class="alsolike-item-description">{{ catalog[11].title }}</p>-->
<!--                                    <p class="alsolike-item-price">{{ catalog[11].price }}</p>-->
<!--                                    <div class="alsolike-add-product"><a href="#" class="add" @click.prevent="$root.$refs.cart.addItem(item)">Add to Cart</a></div>-->
<!--                                </div>-->
<!--                            </a>-->
<!--                            <a href="#" class="alsolike-item-link">-->
<!--                                <div class="alsolike-item">-->
<!--                                    <img :src="catalog[12].img" alt="ItemImg" class="alsolike-item-img">-->
<!--                                    <p class="alsolike-item-description">{{ catalog[12].title }}</p>-->
<!--                                    <p class="alsolike-item-price">{{ catalog[12].price }}</p>-->
<!--                                    <div class="alsolike-add-product"><a href="#" class="add" @click.prevent="$root.$refs.cart.addItem(item)">Add to Cart</a></div>-->
<!--                                </div>-->
<!--                            </a>-->
<!--                            <a href="#" class="alsolike-item-link">-->
<!--                                <div class="alsolike-item">-->
<!--                                    <img :src="catalog[13].img" alt="ItemImg" class="alsolike-item-img">-->
<!--                                    <p class="alsolike-item-description">{{ catalog[13].title }}</p>-->
<!--                                    <p class="alsolike-item-price">{{ catalog[13].price }}</p>-->
<!--                                    <div class="alsolike-add-product"><a href="#" class="add" @click.prevent="$root.$refs.cart.addItem(item)">Add to Cart</a></div>-->
<!--                                </div>-->
<!--                            </a>-->
                        </div>
                    </div>
                </article>
            </div>
    `
});