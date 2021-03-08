import React from 'react'
import {mount} from 'enzyme'
import {waitFor} from '@testing-library/dom'
import server, {rest} from './testServer'

import Component from '.'

describe('<Component />', () => {
  it('should render', async () => {
    const wrapper = mount(<Component />)
    const requestHandler = rest.get(
      '/resource/:resourceId',
      (req, res, ctx) => res(ctx.json({id: '1'}))
    )

    server.use(
      requestHandler
    )

    await waitFor(() => {
      expect(wrapper.text()).toEqual('Loading')
    })

    await waitFor(() => {
      expect(wrapper.text()).not.toEqual('Loading')
    })
    
    expect(wrapper.text()).toEqual('1')
  })
})