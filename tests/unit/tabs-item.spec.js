import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'

Vue.config.productionTip = false
Vue.config.devtools = false

import Tabs from '@/tabs/tabs.vue'
import TabsHead from '@/tabs/tabs-head.vue'
import TabsItem from '@/tabs/tabs-item.vue'
import TabsBody from '@/tabs/tabs-body.vue'
import TabsPanel from '@/tabs/tabs-panel.vue'
describe('TabsItem', () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    Vue.component('Tabs',Tabs);
    Vue.component('w-tabs-head',TabsHead);
    Vue.component('w-tabs-item',TabsItem);
    Vue.component('w-tabs-body',TabsBody);
    Vue.component('w-tabs-panel',TabsPanel);
    it('存在.', () => {
        expect(TabsItem).to.exist;
    })
    it('接受 name 属性',(done) => {
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
            }
        })
        setTimeout(() => {
            expect(wrapper.find('[data-name="a"]').exists()).to.be.true;
            done();
        })

    })

    it('接受 disabled 属性',(done) => {
        const wrapper = mount(Tabs,{
            prposData: {
                selected: 'a'
            },
            slots: {
                default: `
                <w-tabs-head>
                    <w-tabs-item name="a" disabled>bbb</w-tabs-item>
                </w-tabs-head>
                <w-tabs-body>
                    <w-tabs-panel name="a">bbb111</w-tabs-panel>
                </w-tabs-body>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('[data-name="a"]').classes('disabled')).to.be.eq;
            done();
        })
    })
})