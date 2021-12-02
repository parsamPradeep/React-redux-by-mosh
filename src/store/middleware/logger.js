const logger = (param) => (store) => (next) => (action) => {
  console.log("Logged", param);
  next(action);
};

export default logger;
