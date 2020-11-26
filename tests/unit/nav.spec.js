import { expect } from 'chai'
import sinon from 'sinon'
import Vue from 'vue'
import { shallowMount, mount, } from '@vue/test-utils'
import Nav from '@/nav/nav.vue'
import NavItem from '@/nav/nav-item.vue'
import SubNav from '@/nav/sub-nav.vue'


describe('Nav.vue',() => {
    it('存在', () => {
        expect(Nav).to.be.ok 
    })
    it('支持 selected 属性',(done) => {
        Vue.component('NavItem',NavItem);
        Vue.component('SubNav',SubNav);
        const wrapper = mount(Nav,{
            prposData: {
                selected: 'home'
            },
            slots: {
                default: `
                    <NavItem name="home">首页</NavItem>
                `
            }
        })
        setTimeout(() => {
            expect(wrapper.find('[data-name="home"]').exists()).to.be.true;
            done();
        })
    })

    it('会触发 update:selected 事件',(done) => {
        Vue.component('NavItem',NavItem);
        Vue.component('SubNav',SubNav);
        const callback = sinon.fake();
        const wrapper = mount(Nav,{
            prposData: {
                selected: 'home'
            },
            slots: {
                default: `
                    <SubNav name="about">
                        <template slot="title">关于</template>
                        <SubNav name="info">
                            <template slot="title">开发团队</template>
                            <NavItem name="weixin">微信</NavItem>
                        </SubNav>
                    </SubNav>
                `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-name="weixin"]').trigger('click');
            expect(callback.called).to.be.true;
            done();
        })
    })
})