Vue.component("accordion", {
    data() {
        return {
            menu: [],
            category: [],
            brand: [],
            designer: [],
            menuURL: "/menu.json"
        }
    },
    template:`
        <div class="shop-menu">
            <ul class="shop-menu-main-list">
                <li class="shop-menu-main-element"><a href="#" class="shop-menu-main-link">Category<i class="fa fa-caret-up shop-menu-main-element-caret" aria-hidden="true"></i></a></li>
                <ul class="shop-submenu-list">
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Accessories</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Bags</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Denim</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Hoodies & Sweatshirts</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Jackets & Coats</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Pants</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Polos</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Shirts</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Shoes</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Shorts</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Sweaters & Knits</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">T-Shirts</a></li>
                    <li class="shop-submenu-elements"><a href="#" class="shop-submenu-link">Tanks</a></li>
                </ul>
                <li class="shop-menu-main-element"><a href="#" class="shop-menu-main-link unactive">BRAND<i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
                <li class="shop-menu-main-element"><a href="#" class="shop-menu-main-link unactive">dESIGNER<i class="fa fa-caret-down" aria-hidden="true"></i></a></li>
            </ul>
        </div>
    `,
    mounted() {
        this.$parent.getJson(`${API+this.menuURL}`)
            .then(data => {
                for (let el of data) {
                    this.menu.push(el);
                }
                [this.category, this.brand, this.designer] = [...this.menu];
                console.log(this.menu)
                console.log(this.category)
                console.log(this.brand)
                console.log(this.designer)

            });
    },
});