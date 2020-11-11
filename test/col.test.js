const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col.vue'
Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Col).to.exist
    })
    
    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: '1'
            }
        }).$mount(div)
        const element = vm.$el;
        expect(element.classList.contains('col-1')).to.eq(true);
        vm.$el.remove()
        vm.$destroy()
    })
    it('接收 blank 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                blank: '1'
            }
        }).$mount(div)
        const element = vm.$el;
        expect(vm.$el.classList.contains('blank-1')).to.eq(true);
        vm.$el.remove()
        vm.$destroy()
    })
})
