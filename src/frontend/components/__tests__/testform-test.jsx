import { shallow } from 'enzyme';
import React from 'react';
import TestForm from '../testform';

describe('TestForm', () => {
  const testForm = shallow(<TestForm />);
  const filters = testForm.find('input');

  test('should handle form submit', () => {
    expect(filters.length).toHaveLength(1);
  });
});
