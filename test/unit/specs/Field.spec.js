// import Vue from 'vue'
// import Field from '@/components/Field'
import { mutations, actions } from '@/store/modules/form'

const { updateFirstName, updateLastName } = mutations

const { updateFields } = actions

describe('Field.vue', () => {
  it('should invoke mutation when submit', () => {
    const firstName = 'Jane'
    const lastName = 'Doe'
    const state = {
      firstName: '',
      lastName: ''
    }

    updateFirstName(state, firstName)
    expect(state.firstName).to.equal('Jane')
    updateLastName(state, lastName)
    expect(state.lastName).to.equal('Doe')
  })

  it('should invoke action when submit', () => {
    const state = {
      firstName: '',
      lastName: ''
    }
    const expectedPayload = {
      firstName: 'Jane',
      lastName: 'Doe'
    }
    const expectedTypes = ['updateFirstName', 'updateLastName']

    const commit = (type, payload) => {
      expect(expectedTypes).to.include(type)
      expect([expectedPayload.firstName, expectedPayload.lastName]).to.include(payload)
    }
    updateFields({commit, state}, expectedPayload)
  })
})
