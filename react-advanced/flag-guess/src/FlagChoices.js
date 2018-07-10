import React from 'react';
import StyledButton from './StyledButton';
import './FlagChoices.css';

const FlagChoices = props => {
    let options = props.options || []
    const {handleChange, handleSubmit} = props;
    let inputs = options.map(opt => (
        <lable key={opt.id}>
            <input type="radio"
                   value={opt.id}
                   checked={opt.checked}
                   onChange={handleChange}
                   name="flag-choice"
            />
            {opt.name}
        </lable>
    ));

    return (
        <form className="flag-form" onSubmit={handleSubmit}>
            {inputs}
            <StyledButton text="Guess" type="submit" />
        </form>
    )
}

export default FlagChoices;