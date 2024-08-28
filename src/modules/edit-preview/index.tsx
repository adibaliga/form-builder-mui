import TitleHeader from "../../components/header";

const EditPreview = () => {
  return (
    <div className="ui-container">
      <TitleHeader title="Edit Preview" />
      <div
        style={{
          background: "white",
          height: "calc(100% - 2.5rem)",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
        }}
      ></div>
    </div>
  );
};

export default EditPreview;
