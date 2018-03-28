import React from 'react';
import TestForm from '../testform';
import { shallow } from 'enzyme';

describe('TestForm', () => {
  const testForm = shallow(<TestForm />);
  const filters = testForm.find('input');

  test('should handle form submit', () => {
    expect(filters.length).toEqual(1);
  });
});
