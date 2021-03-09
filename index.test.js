import React from 'react'
import {act} from 'react-dom/test-utils'
import {mount} from 'enzyme'
import {waitFor} from '@testing-library/dom'
import server, {rest} from './testServer'

import Component from '.'

describe('<Component />', () => {
  it('should render', async () => {
    server.use(
      rest.get(
        '/resource/:resourceId',
        (req, res, ctx) => res(ctx.json({id: '1'}))
      )
    )

    let wrapper = mount(<Component />)

    await waitFor(() => {
      expect(wrapper.text()).toEqual('Loading')
    })

    await waitFor(() => {
      expect(wrapper.text()).not.toEqual('Loading')
    })
    
    expect(wrapper.text()).toEqual('1')
  })
})