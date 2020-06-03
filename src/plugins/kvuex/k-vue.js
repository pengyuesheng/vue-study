let Vue = null;

// 暗号：first blood

class Store {
    constructor(options) {
        this.$options = options;
        this.getters = {}
        var computed = {};
        const {getters} = this.$options;
        for (var key in getters) {
            computed[key] = function(key, store) {
                return function() {
                    return getters[key](store._vm._data.$$state);
                }
            }(key, this);
            Object.defineProperty(this.getters, key, {
                get: () => this._vm[key],
                enumerable: true
            })
        }
        console.log(computed);
        this._vm = new Vue({
            data: {
                $$state: this.$options.state
            },
            computed: computed
        });
        this.commit = this.commit.bind(this);
        this.dispatch = this.dispatch.bind(this);
    }

    commit(name, props) {
        let func = this.$options.mutations[name];
        if (func) {
            func(this._vm._data.$$state, props);
        }
    }

    dispatch(name, props) {
        let func = this.$options.actions[name];
        if (func) {
            func(this, props);
        }
    }

    get state() {
        return this._vm._data.$$state;
    }

    set state(v) {
        console.error("please use replaceState to reset state");
    }
}

const install = function(_vue) {
    Vue = _vue;
    Vue.mixin({
        beforeCreate() {
            if (this.$options.store) {
                Vue.prototype.$store = this.$options.store;
            }
        },
    })
}

export default {
    Store,
    install
}