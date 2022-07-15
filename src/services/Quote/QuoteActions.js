import createAction from '../../@common/utils/create-action';

const asyncActions = createAction({
  quote: [
    'getQuoteRandom'
  ]
})

export default asyncActions