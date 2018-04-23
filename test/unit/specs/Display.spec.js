import { getters } from '@/store/modules/form'

describe('Display.vue', () => {
  it('should invoke getter when rendering', () => {
    const state = {
      firstName: 'Jane',
      lastName: 'Doe'
    }
    const firstName = getters.firstName(state)
    const lastName = getters.lastName(state)

    expect(firstName).to.equal('Jane')
    expect(lastName).to.equal('Doe')
  })
})
