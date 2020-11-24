import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Collapse from '@/collapse/collapse.vue'
import CollapseItem from '@/collapse/collapse-item.vue'


describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.exist
    })
})
describe('CollapseItem', () => {
    it('存在.', () => {
        expect(CollapseItem).to.exist
    })
})