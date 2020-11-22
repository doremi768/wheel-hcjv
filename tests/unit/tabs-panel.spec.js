import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import TabsPanel from '@/tabs-panel.vue'

describe('TabsPanel',() => {
    it('存在',() => {
        expect(TabsPanel).to.exist
    })
})
