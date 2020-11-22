import Vue from 'vue'
import { expect } from 'chai'
import Row from '@/row.vue'

describe('Row', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    xit('接收 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Row)
        const vm = new Constructor({
            propsData: {
                align: 'center'
            }
        }).$mount(div)
        const element = vm.$el; 
        expect(getComputedStyle(element).justifyContent).to.eq('center');
        vm.$el.remove()
        vm.$destroy()
    })
})