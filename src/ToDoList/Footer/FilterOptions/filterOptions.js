import React from 'react';
import styled from 'styled-components';

const FilterOptionsContainer = styled.div`
    display: inline-block;
    padding-left: 20px;
    font-size: 16px;
`;

const ToggleRadioButton = styled.input.attrs({type: "radio"})`
    display: none;

    & + label {
        padding-left: 8px;
        padding-right: 8px;

        margin-left: 2px;
        margin-right: 2px;

        border: solid 1px transparent;
        border-radius: 5px;
    }

    :hover + label {
        border-color: rgba(200, 200, 200, 0.5);
    }

    :checked + label {
        border-color: rgba(200, 200, 200, 1);
    }
`;

function FilterOptions(props) {
    function handleFilterOptionChanged(e) {
      props.onFilterOptionChanged(e.target.value);
    }

        return (
            <FilterOptionsContainer>
                <ToggleRadioButton name="filter" id="all" value="All" checked={props.filterValue === "All"} 
                    onChange={handleFilterOptionChanged} />
                <label for="all">All</label>
                <ToggleRadioButton name="filter" id="active" value="Active" checked={props.filterValue === "Active"}
                    onChange={handleFilterOptionChanged} />
                <label for="active">Active</label>
                <ToggleRadioButton name="filter" id="completed" value="Completed" checked={props.filterValue === "Completed"}
                    onChange={handleFilterOptionChanged} />
                <label for="completed">Completed</label>
            </FilterOptionsContainer>
            );
        }

export default FilterOptions;
