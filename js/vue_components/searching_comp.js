Vue.component("search", {
    data() {
        return {
            modalSearchShowed: false
        };
    },
    template: `
        <div class="search">
            <div class="btn-browse" @click="modalSearchShowed = !modalSearchShowed">Browse <i class="fa fa-caret-down browse-fa-caret-down" aria-hidden="true"></i></div>
                <form class="search-form" action="#" name="search">
                    <input class="search-input" type="text" name="search" placeholder="Search for item..."><button class="search-submit" type="submit">?</button>
                </form>
                <div class="search-modal" v-show="modalSearchShowed">
                    <h3 class="search-modal-headers">Women</h3>
                        <ul class="search-modal-list">
                            <li><a href="product.html" class="search-modal-link">Dresses</a></li>
                            <li><a href="product.html" class="search-modal-link">Tops</a></li>
                            <li><a href="product.html" class="search-modal-link">Sweaters/Knits</a></li>
                            <li><a href="product.html" class="search-modal-link">Jackets/Coats</a></li>
                            <li><a href="product.html" class="search-modal-link">Blazers</a></li>
                            <li><a href="product.html" class="search-modal-link">Denim</a></li>
                            <li><a href="product.html" class="search-modal-link">Leggings/Pants</a></li>
                            <li><a href="product.html" class="search-modal-link">Skirts/Shorts</a></li>
                            <li><a href="product.html" class="search-modal-link">Accessories</a></li>
                        </ul>
                    <h3 class="search-modal-headers">Men</h3>
                        <ul class="search-modal-list">
                            <li><a href="product.html" class="search-modal-link">Tees/Tank tops</a></li>
                            <li><a href="product.html" class="search-modal-link">Shirts/Polos</a></li>
                            <li><a href="product.html" class="search-modal-link">Sweaters</a></li>
                            <li><a href="product.html" class="search-modal-link">Sweatshirts/Hoodies</a></li>
                            <li><a href="product.html" class="search-modal-link">Blazers</a></li>
                            <li><a href="product.html" class="search-modal-link">Jackets/vests</a></li>
                        </ul>
                </div>
            </div>
        </div>
    `,
});