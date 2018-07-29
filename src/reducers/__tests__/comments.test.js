import commentReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

it ("handle actions of type SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New Comment"
  }

  const newState = commentReducer([], action);

  expect(newState).toEqual(["New Comment"]);
});

it ("handle actions of empty type", () => {
  const newState = commentReducer([], {});

  expect(newState).toEqual([]);
})

it ("handle actions of unknow type", () => {
  const newState = commentReducer([], { type: "UNKNOW_TYPE_TEST", payload: "unknow" });

  expect(newState).toEqual([]);
})