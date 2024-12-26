const Bus = require("../Models/BusModel");

//display all buses
const getAllBuses = async (req, resizeBy, next) => {
  let Buses;
  try {
    Buses = await Bus.find();
  } catch (err) {
    console.log(err);
  }
  //not found
  if (!Buses) {
    return resizeBy.status(404).json({ message: "No Buses found" });
  }

  //display all bueses
  return resizeBy.status(200).json({ Buses });
};
//data insert
const addBuses = async (req, res, next) => {
  const {
    busNumber,
    busName,
    busType,
    busCapacity,
    busRoute,
    busStatus,
    busDriver,
    busConductor,
  } = req.body;
  let Buses;

  try {
    Buses = new Bus({
      busNumber,
      busName,
      busType,
      busCapacity,
      busRoute,
      busStatus,
      busDriver,
      busConductor,
    });
    await Buses.save();
  } catch (err) {
    console.log(err);
  }

  //not insert buses
  if (!Buses) {
    return res.status(404).json({ message: "Unable to add buses" });
  }
  return res.status(200).json({ Buses });
};

// Get bus by ID
const getById = async (req, res, next) => {
  const id = req.params.id;
  let bus;

  try {
    bus = await Bus.findById(id);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to fetch bus" });
  }

  if (!bus) {
    return res.status(404).json({ message: "bus not found" });
  }

  return res.status(200).json({ bus });
};

//update bus
const updateBus = async (req, res) => {
  const id = req.params.id;
  const {
    busNumber,
    busName,
    busType,
    busCapacity,
    busRoute,
    busStatus,
    busDriver,
    busConductor,
  } = req.body;

  let buses;

  try {
    buses = await Bus.findByIdAndUpdate(id, {
      busNumber,
      busName,
      busType,
      busCapacity,
      busRoute,
      busStatus,
      busDriver,
      busConductor,
    });
    buses = await buses.save();
  } catch (err) {
    console.log(err);
  }

  if (!buses) {
    return res.status(404).json({ message: "bus not found" });
  }

  return res.status(200).json({ buses });
};

//delete user
const deleteBus = async (req, res, next) => {
  const id = req.params.id;

  let bus;
  try {
    bus = await Bus.findByIdAndDelete(id);
  } catch (err) {
    console.error(err);
  }

  if (!bus) {
    return res.status(404).json({ message: "unable to delete bus details" });
  }

  return res.status(200).json({ bus });
};

exports.getAllBuses = getAllBuses;
exports.addBuses = addBuses;
exports.getById = getById;
exports.updateBus = updateBus;
exports.deleteBus = deleteBus;
