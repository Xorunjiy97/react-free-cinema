import constants from '../../constants/constants';

export const saveCardData =  data => ({
      type: constants.SAVE_CARDS,
      payload: data ,
});