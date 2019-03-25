Vue.component("sales",{
    data(){
        return {
            sales: [],
            salesURL: "/sales.json"
        }
    },
    template:`
        <div class="container sell">
            <sales-item v-for="item of sales" :key="item.id" :item="item"></sales-item>
        </div>
    `,
    mounted() {
        this.$parent.getJson(`${API+this.salesURL}`)
            .then(data => {
                for (let el of data) {
                    this.sales.push(el);
                }
            });
    }
});

Vue.component("sales-item",{
   props:["item"],
    template: `
        <a :href="item.link" class="sellitem-link">
            <div :class="item.class" >
                <p class="sell-item-text" v-html="item.title"></p>
            </div>
         </a>
    `
});