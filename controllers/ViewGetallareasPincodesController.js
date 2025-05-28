import ViewGetAllAreasPincodes from "../models/ViewGetallareasPincodes.js";

export const getAllAreasPincodes = async (req, res) => {
  try {
    const data = await ViewGetAllAreasPincodes.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching pincodes:uday", error);
    res.status(500).json({ error: error.message });
  }
};
