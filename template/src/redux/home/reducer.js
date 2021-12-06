import update from 'react-addons-update';

function handlerupdateLanguage(state, action) {
  return update(state, {
    language: {$set: action.payload},
  });
}

function handlerUpdateTest(state, action) {
  return update(state, {
    test: {$set: action.payload},
  });
}

 

export {
  handlerUpdateTest,
  handlerupdateLanguage
};
