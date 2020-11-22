import Vue from 'vue'
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Tabsbody from '@/tabs-body.vue'

describe('TabsBody',() => {
    it('存在',() => {
        expect(Tabsbody).to.exist
    })
})

