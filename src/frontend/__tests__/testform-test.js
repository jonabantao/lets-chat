import React from 'react';
import TestChatBox from '../testform';
import { shallow } from 'enzyme';

describe("TestForm", () => {
  const testForm = shallow(<TestChatBox />);
  const filters = testForm.find('input');

  test('should handle form submit', () => {
    expect(filters.length).toEqual(1);
  });
});
