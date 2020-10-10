import React, { useState, useEffect } from "react";
import {
  DropdownContainer,
  DropButton,
  DropdownDataList,
  DropdownElement,
} from "./Dropdown.styled";

const Dropdown = ({ data, onSelect, defaultValue }) => {
  console.info("::data", data);
  console.info("::defaultValue", defaultValue);
  const [list] = useState(data);
  const [selectedValue, setSelected] = useState(defaultValue);
  const [showData, setShowData] = useState(false);

  const handler = ({ target }) => {
    const { value: selected } = target;
    const selectedJSON = JSON.parse(selected);
    setShowData(!showData);
    setSelected(selectedJSON);
    onSelect(selectedJSON);
  };

  useEffect(() => {
    onSelect(defaultValue);
  }, [defaultValue]);

  return (
    <>
      <DropdownContainer>
        <DropButton onClick={() => setShowData(!showData)}>
          {selectedValue.displayText}
        </DropButton>
      </DropdownContainer>
      {showData && (
        <DropdownDataList>
          {list.map((l) => {
            console.info(":l", l);
            return (
              <DropdownElement>
                <DropButton
                  key={l.id}
                  onClick={handler}
                  value={JSON.stringify(l)}
                >
                  {l.displayText}
                </DropButton>
              </DropdownElement>
            );
          })}
        </DropdownDataList>
      )}
    </>
  );
};

export default Dropdown;
