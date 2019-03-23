const API = "https://raw.githubusercontent.com/AniraUoren/Brand/some/request";

const app = new Vue({
    el: "#app",
    data: {
        clickedItem: {},
    },
    methods:{
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    this.errorShow = true;
                })
        },
        showMe(some){
            console.log(some);
        }
    }
});