import React from "react";
import DaumPostcode from "react-daum-postcode";


function SearchAddress(props) {

  const handleComplete = (data) => {
    let fullAddress = data.address;
    let extraAddress = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    props.setPostAddres(fullAddress)
    props.popupPostCode()

  };

  return (
    <div>
      <DaumPostcode
        onComplete={handleComplete}
        {...props}

      />
    </div>

  );
}

export default SearchAddress;

SearchAddress.defaultProps = {
  style: {
    width: "98%",
    height: "350px",
  },
};