Vue.component("accordion", {
    data() {
        return {
            menu: [],
            category: [],
            brand: [],
            designer: [],
            isShowedCategory: true,
            isShowedBrand: false,
            isShowedDesigner: false,
            up: "fa-caret-up",
            down: "fa-caret-down",
            menuURL: "/menu.json"
        }
    },
    template:`
        <div class="shop-menu">
            <ul class="shop-menu-main-list">
                <li class="shop-menu-main-element"><a href="#" class="shop-menu-main-link" :class="{unactive : !isShowedCategory}" @click.prevent="isShowedCategory = !isShowedCategory">Category<i class="fa" :class="[isShowedCategory ? up : down]" aria-hidden="true"></i></a></li>
                <ul class="shop-submenu-list">
                    <li class="shop-submenu-elements" v-for="item of category" v-show="isShowedCategory"><a href="#" class="shop-submenu-link">{{ item }}</a></li>
                </ul>
                <li class="shop-menu-main-element"><a href="#" class="shop-menu-main-link" :class="{unactive : !isShowedBrand}" @click.prevent="isShowedBrand = !isShowedBrand">BRAND<i class="fa" :class="[isShowedBrand ? up : down]" aria-hidden="true"></i></a></li>
                <ul class="shop-submenu-list">
                    <li class="shop-submenu-elements" v-for="item of brand" v-show="isShowedBrand"><a href="#" class="shop-submenu-link">{{ item }}</a></li>
                </ul>
                <li class="shop-menu-main-element"><a href="#" class="shop-menu-main-link" :class="{unactive : !isShowedDesigner}" @click.prevent="isShowedDesigner = !isShowedDesigner">dESIGNER<i class="fa" :class="[isShowedDesigner ? up : down]" aria-hidden="true"></i></a></li>
                <ul class="shop-submenu-list">
                    <li class="shop-submenu-elements" v-for="item of designer" v-show="isShowedDesigner"><a href="#" class="shop-submenu-link">{{ item }}</a></li>
                </ul>
            </ul>
        </div>
    `,
    mounted() {
        this.$parent.getJson(`${API+this.menuURL}`)
            .then(data => {({categories:this.category, brand:this.brand, designer:this.designer} = data[0]);
            });
    },
});