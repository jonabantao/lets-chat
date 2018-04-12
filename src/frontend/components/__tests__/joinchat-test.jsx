import React from 'react';
import JoinPage from '../join_page';

describe('JoinPage', () => {
  test('trimString static method should trim excessive spaces', () => {
    const strTest1 = 'tester';
    const strTest2 = '  tester ';
    const strTest3 = ' test    er ';

    expect(JoinPage.trimString(strTest1)).toEqual('tester');
    expect(JoinPage.trimString(strTest2)).toEqual('tester');
    expect(JoinPage.trimString(strTest3)).toEqual('test er');
  });
});
