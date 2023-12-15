import React, { useEffect, useState } from "react";
import Select from "react-select"

function SelectComponent({valores,defaultValue,onValueChange}){
    const [selected, setSelected] = useState(defaultValue);

    useEffect(() => {
      setSelected(defaultValue);
    }, [defaultValue]);

    const handleChange = (selectedOption) => {
        setSelected(selectedOption);
        onValueChange(selectedOption.value);
      };

 return(
    <Select options={valores} value={selected}
    onChange={handleChange}></Select>
 )
}

export{SelectComponent};