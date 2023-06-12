import PlaceForm from "../components/Places/PlaceForm";

const AddPlace = ({ navigation }) => {
  function createPlaceHandler() {}
  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlace;
