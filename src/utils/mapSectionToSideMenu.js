export default sectionName =>
  `btn-${sectionName
    .split(" ")
    .join("-")
    .toLowerCase()}`;
