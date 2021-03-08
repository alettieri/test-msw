import React from 'react'
import {shallow} from 'enzyme'
import {waitFor} from '@testing-library/dom'
import server, {rest} from './testServer'

import Component from '.'

describe('<Component />', () => {

  it('should render', async () => {
    const wrapper = shallow(<Component />)

    server.use(
      rest.get(
        '/resource/:resourceId',
        (req, res, ctx) => res(ctx.json({id: '1'}))
      )
    )

    await waitFor(() => {
      expect(wrapper.text()).toEqual('Loading')
    })

    await waitFor(() => {
      expect(wrapper.text()).toEqual('1')
    })
  })
})