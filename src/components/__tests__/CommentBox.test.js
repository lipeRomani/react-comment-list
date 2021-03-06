import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from "Root";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area', () => {
  expect(wrapped.find('textarea').length).toEqual(1);
});

it('has 2 buttons', () => {
  expect(wrapped.find('button').length).toEqual(2);
})

it('has a submit buttom', () => {
  expect(wrapped.find('.submit-comments').length).toEqual(1);
});

it('has a fetch comment buttom', () => {
  expect(wrapped.find('.fetch-comments').length).toEqual(1);
})

describe('the text area', () => {
  beforeEach(() => {
    wrapped.find('textarea').simulate('change', {
      target: { value: "new comment" }
    });
    wrapped.update();
  });
  
  it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
  });
  
  it('when form is submitted, text area gets emptied', () => {
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual("");
  });
});
