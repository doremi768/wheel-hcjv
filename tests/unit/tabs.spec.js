import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import sinon from 'sinon'

import Tabs from '@/tabs/tabs.vue'
import TabsHead from '@/tabs/tabs-head.vue'
import TabsItem from '@/tabs/tabs-item.vue'
import TabsBody from '@/tabs/tabs-body.vue'
import TabsPanel from '@/tabs/tabs-panel.vue'

describe('Tabs', () => {
    Vue.component('Tabs',Tabs);
    Vue.component('w-tabs-head',TabsHead);
    Vue.component('w-tabs-item',TabsItem);
    Vue.component('w-tabs-body',TabsBody);
    Vue.component('w-tabs-panel',TabsPanel);
    it('存在', () => {
        expect(Tabs).to.exist;
    })
    
    it('接受 selected 属性',(done) => {
        const callback = sinon.fake();
        const wrapper = mount(Tabs,{
            prposData: {
                selected: 'a'
            },
            slots: {
                default: `
                <w-tabs-head>
                    <w-tabs-item name="a">bbb</w-tabs-item>
                </w-tabs-head>
                <w-tabs-body>
                    <w-tabs-panel name="a">bbb111</w-tabs-panel>
                </w-tabs-body>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
       
        setTimeout(() => {
            expect(wrapper.find('[data-name="a"]').classes('active')).to.be.eq;
            done();
        })
    })
})