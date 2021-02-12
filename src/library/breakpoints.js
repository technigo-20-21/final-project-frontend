const size = {
  phone: "480px",
  tablet: "768px",
  computer: "1198px",
};
const device = {
  phone: `(min-width: ${size.phone})`,
  tablet: `(min-width: ${size.tablet})`,
  computer: `(min-width: ${size.computer})`,
};

export default { size, device };
