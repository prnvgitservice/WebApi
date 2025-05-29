import PrnvCart from "../models/PrnvCart.js";

export const addToCart = async (req, res) => {
  try {
    const { user_id, provider_id, service_id } = req.body;

    if (!user_id || !provider_id || !service_id) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const newEntry = await PrnvCart.create({
      user_id,
      provider_id,
      service_id
    });

    res.status(201).json(newEntry);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create entry' });
  }
};


export const getCartDetails = async (req, res) => {
  try {
    const cartDetails = await PrnvCart.findAll();
    res.json(cartDetails);
  } catch (error) {
    res.status(500).json({ error: "Error fetching Cart Details." })
  }
};