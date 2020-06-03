let Vue = null;

class VueRouter {
    constructor(options) {
        this.$options = options;
        this.current = "/";
        this.routeMap = {};
        Vue.util.defineReactive(this, 'current', "/");
        this.$options.routes.forEach((route) => {
            this.routeMap[route.path] = route;
        });
        window.addEventListener("hashchange", function(){
            this.current = location.hash.slice(1);
            console.log(this.current);
        }.bind(this));
    }
}

VueRouter.install = function(_vue) {
    Vue = _vue;

    Vue.mixin({
        beforeCreate() {
            if (this.$options.router) {
                Vue.prototype.$router = this.$options.router;
            }
        },
    })

    Vue.component("router-view", {
        render(h) {
            const {routeMap, current} = this.$router;
            const comp = routeMap[current]? routeMap[current].component: null;
            return h(comp);
        },
    });

    Vue.component("router-link", {
        props: {
            to: {
                type: String,
                default: ""
            }
        },
        render(h) {
            return h("a", {attrs: {href: "#" + this.to}}, this.$slots.default);
        }
    })

}

export default VueRouter;