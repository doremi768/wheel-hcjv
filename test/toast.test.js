const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    describe('props',() => {
        it('接受 autoClose 属性',() => {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let Constructor = Vue.extend(Toast);
            let vm = new Constructor({
                propsData: {
                    autoClose: true
                }
            }).$mount(div);
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).t0.eq(true);
                done();
            })
        })
        
    })
})