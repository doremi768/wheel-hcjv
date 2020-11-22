import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import TabsItem from '@/tabs-item.vue'

describe('TabsItem', () => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    it('存在.', () => {
        expect(TabsItem).to.exist;
    })
    xit('接受 name 属性',() => {
        div.innerHTML = `
        <w-tabs selected="a">
            <w-tabs-head>
                <w-tabs-item name="a" >bbb</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-panel name="a">bbb111</w-tabs-panel>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        let Vmitem = document.querySelector('.tabs-item');
        expect(Vmitem.getAttribute('data-name')).to.eq('a'); 
    })

    xit('接受 disabled 属性',() => {
        div.innerHTML = `
        <w-tabs selected="a">
            <w-tabs-head>
                <w-tabs-item name="a" disabled>bbb</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-panel name="a">bbb111</w-tabs-panel>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        let vmItem = vm.$el.querySelector('.disabled');
        expect(vmItem.classList.contains('disabled')).to.be.true;
    })
})