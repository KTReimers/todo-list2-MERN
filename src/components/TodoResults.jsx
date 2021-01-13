import React from 'react';

const TodoResults = props => {
    const deleteStyle={
        backgroundColor: "cyan",
    }
    const {input, index, list, setList} = props;

    const onClickHandler = () => {
        setList(() => {
            return list.filter(input => list.indexOf(input) !== index);
        });
    }

    const onChangeHandler = e => {
        list[index].isFinished = !list[index].isFinished;
        setList([...list])
    };

    return(
        <>
            <div>
                {input.isFinished ? <span><s>{input.task}</s>&#127881;</span> : <span>{input.task}</span>}
            </div>
            <div>
                <input onChange= { onChangeHandler } type = "checkbox" name="" checked= {input.isFinished}/>
                <button onClick={ onClickHandler } style={deleteStyle} >Delete</button>
            </div>
        </>
    )
}
export default TodoResults;