const addTrailingAlertMessage = (alert, add) => ({
  type: alert.type,
  message: `${alert.message}${add}`,
  icon: alert.icon
});

export default addTrailingAlertMessage;
