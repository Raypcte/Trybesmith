import findAll from '../models/ordersModel';

const readOrdersServices = async () => {
  const result = await findAll();

  if (result) return result[0];
};

export default readOrdersServices;
