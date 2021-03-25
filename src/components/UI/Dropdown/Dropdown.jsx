import React, { useState } from 'react';
import './Dropdown.css';
import { AiFillCaretDown } from 'react-icons/ai';

const Dropdown = (props) => {
    const [showItems, setShowItems] = useState(false);
    const [selectedItems, setSelectedItem] = useState(props.difficultyLevel[0]);
    const difficultyLevel = props.difficultyLevel || [];
    const selectItem = (item) => {
        setSelectedItem(item);
        setShowItems(false);
        props.onSelectHandler(item);
    }

    return (
        <div className="dropdown-box">
            <div className="dropdown">
                <div className="selected-item" onClick={() => setShowItems(!showItems)}>{selectedItems}</div>
                <AiFillCaretDown className="air-dropdown" onClick={() => setShowItems(!showItems)} />
            </div>
            <div className="">
                {showItems && <div
                    className={"select-box--items"}>
                    {difficultyLevel.map((item, index) => (
                        <div
                            key={index}
                            onClick={() => selectItem(item)}
                            className="options"
                        >{item}
                        </div>
                    ))}
                </div>}
            </div>
        </div>
    );
}

export default Dropdown;
