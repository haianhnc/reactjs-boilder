/* global describe, it */
import { expect } from 'chai';
import * as actions from '../dummy';

import { DUMMY_FETCH_DATA, DUMMY_SET_DATA } from '../../constants/dummy';

function foo() {}

describe('dummy actions', () => {
  it('fetchData should create DUMMY_FETCH_DATA action', () => {
    expect(actions.fetchData(1, foo, foo)).to.deep.equal({
      type: DUMMY_FETCH_DATA,
      articleId: 1,
      onLoading: foo,
      onError: foo,
    });
  });

  it('setData should create DUMMY_SET_DATA action', () => {
    expect(actions.setData({})).to.deep.equal({
      type: DUMMY_SET_DATA,
      data: {},
    });
  });
});