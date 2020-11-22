import { expect } from 'chai'
import Vue from 'vue'
import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/button.vue'

describe('Button.vue', () => {
    it('存在.', () => {
        expect(Button).to.be.ok 
    })
    it('可以设置icon.', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'settings'
            }
        })
        const useElement = wrapper.find('use');
        expect(useElement.attributes()['href']).to.equal('#i-settings')
    })
    it('可以设置loading.', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'loading'
            }
        })
        const useElement = wrapper.find('use');
        expect(useElement.attributes()['href']).to.equal('#i-loading')
    })
    xit('icon 默认的 order 是 1', () => {
        const wrapper = mount(Button,{
            propsData: {
                icon: 'settings'
            }
        })
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('1')
        vm.$el.remove()
        vm.$destroy()
    })
    xit('设置 iconPosition 可以改变 order', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
        propsData: {
            icon: 'settings',
            iconPosition: 'right'
        }
        }).$mount(div)
        const icon = vm.$el.querySelector('svg')
        expect(getComputedStyle(icon).order).to.eq('2')
        vm.$el.remove()
        vm.$destroy()
    })
})