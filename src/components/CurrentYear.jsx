function CurrentYear() {
  const element = (
    <h3>Current Year: {new Date().getFullYear()}</h3>
  );

  return element;
}

export default CurrentYear;