import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'

import Tabs from '@/tabs.vue'

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.exist;
    })
    
    xit('接受 selected 属性',(done) => {
        const div = document.createElement('div');
        document.body.appendChild(div);
        
        div.innerHTML = `
        <w-tabs selected="a">
            <w-tabs-head>
                <w-tabs-item name="a" >bbb</w-tabs-item>
                <w-tabs-item name="b">ccc</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-panel name="a">bbb111</w-tabs-panel>
                <w-tabs-panel name="b">ccc111</w-tabs-panel>
            </w-tabs-body>
        </w-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(()=>{
            let x = vm.$el.querySelector(`.tabs-item:nth-child(1)`);
            expect(x.classList.contains('active')).to.eq(true);
            done();
        })
    })
})