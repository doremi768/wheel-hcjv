import Toast from './toast.vue'
export default {
    install(Vue,options) {
        Vue.prototype.$toast = function(message) {
            let Constructor = Vue.extend(Toast);
            let toast = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback: () => {
                            console.log('sdfgdf')
                        }
                    }
                }
            });
            toast.$slots.default = message;
            toast.$mount();
            document.body.appendChild(toast.$el);
        }
    }
}