import constants from '../../constants/constants';

export const saveCardsData = saveCardData=> ({
      type: constants.SAVE_CARD,
      payload:saveCardData,
});