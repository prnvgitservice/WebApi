import PncCities from "../models/PncCities.js";

export const getAllCities = async (req, res) => {
  try {
    const stateId = req.params.stateId;

    const cities = await PncCities.findAll({
      where: { Ct_StateId: stateId }
    });

    res.status(200).json(cities);
  } catch (error) {
    console.error("Error fetching cities:", error);
    res.status(500).json({ error: "Failed to fetch cities" });
  }
};