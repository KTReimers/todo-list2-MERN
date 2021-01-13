import React, {useState} from 'react';

const TodoForm = props => {
    const {list, setList} =props;

    const btnStyle={
        backgroundColor: "orange",
        width: '70px',
        height: '30px',
        borderRadius: '8px',
        marginLeft: "10px"
    }

    let input = {
        task: "",
        isFinished: false
    };

    const onChangeHandler = e => {
        input.task = e.target.value;
    };

    const onClickHandler = e => {
        e.preventDefault()
        setList([...list, input]);
        e.target.value = "";
        input = "";
    };

    return(
        <div>
            <input type= "text" onChange = { onChangeHandler } name="input"/>
            <button type="submit" onClick={ onClickHandler } style={btnStyle} >Add</button>
        </div>
    );

}
export default TodoForm;