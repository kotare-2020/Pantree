import React from 'react'
import { shallow } from 'enzyme'

import { App } from '../client/components/App'

test('<App />', () => {
  const expected = "HashRouter"
  const wrapper = shallow(<App auth={{isAuthenticated: false}}/>)
  expect(wrapper.text()).toContain(expected)
})
