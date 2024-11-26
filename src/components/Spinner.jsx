import ClipLoader from "react-spinners/ClipLoader";

const override = {
  display: "block",
  margin: "100px auto",
};

const Spinner = ({ loading }) => {
  return (
    <ClipLoader
      color="#4338ca" // Valid color
      loading={loading} // Pass loading state
      cssOverride={override} // Apply styles
      size={150} // Set spinner size
    />
  );
};

export default Spinner;
