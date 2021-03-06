import Vue from 'vue'
import { expect } from 'chai'
import sinon from 'sinon'
import { shallowMount, mount } from '@vue/test-utils'
import Toast from '@/toast.vue'

describe('Toast', () => {
    it('存在.', () => {
        expect(Toast).to.exist
    })
    
    describe('props',() => {
        it('接受 autoCloseDelay 属性 ',(done) => {
            let div = document.createElement('div');
            document.body.appendChild(div);
            let Constructor = Vue.extend(Toast);
            let vm = new Constructor({
                propsData: {
                    autoCloseDelay: 1
                }
            }).$mount(div);
            vm.$on('close',()=>{
                expect(document.body.contains(vm.$el)).to.eq(false);
                done();
            })
        })
        it('接受 closeButton 属性 ',(done) => {
            const callback = sinon.fake();
            
            let Constructor = Vue.extend(Toast);
            let vm = new Constructor({
                propsData: {
                    closeButton: {
                        text: '关闭',
                        callback
                    }
                }
            }).$mount();
            let closeButton = vm.$el.querySelector('.close');
            expect(closeButton.textContent.trim()).to.eq('关闭');  
            setTimeout(()=>{
                closeButton.click();
                expect(callback.called).to.be.true;
                done();
            },0)
        })
        it('接受 enableHtml 属性 ',() => {
            let Constructor = Vue.extend(Toast);
            let vm = new Constructor({
                propsData: {
                    enableHtml: true
                }
            });
            vm.$slots.default = [`<h1 id="h1">11</h1>`]
            vm.$mount();
            let h1 = vm.$el.querySelector('#h1');
            expect(h1).to.exist;
        })
        it('接受 position 属性',() => {
            const Constructor = Vue.extend(Toast);
            const vm = new Constructor({
                propsData: {
                    position: 'bottom'
                }
            })
            vm.$mount();
            expect(vm.$el.classList.contains('position-bottom')).to.eq(true);
        })
    })
})