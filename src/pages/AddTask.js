import React from 'react';
import "../styles/AddTask.css";

class AddTask extends React.Component {


    minDate = new Date().toISOString().slice(0, 10);
    counter = 3;
    state = {
        checked: false,
        text: '',
        date: this.minDate,

    }


    handleAddClick = () => {
        const { text, checked, date } = this.state
        if (text.length > 2) {
            const add = this.props.add(text, date, checked)
            if (add) {
                this.setState({
                    text: '',
                    checked: false,
                    date: this.minDate
                })
            }
        } else {
            alert("za krótka informacja")
        }
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value,
        })
    }

    handleClick = (e) => {
        this.setState({
            checked: e.target.checked,
        })
    }

    handleDateChange = (e) => {
        this.setState({
            date: e.target.value,
        })
    }


    render() {

        let maxDate = this.minDate.slice(0, 4) * 1 + 3;
        maxDate = maxDate + "-12-31"

        return (
            <div className="formularz">
                <h3>Add task:</h3>
                <input type="text" onChange={this.handleTextChange} value={this.state.text}></input>
                <input type="checkbox" id="priorytet" onClick={this.handleClick} checked={this.state.checked}></input>
                <label htmlFor="priorytet">priority</label>
                <br />
                <h3>Deadline</h3>
                <input type="date" onChange={this.handleDateChange} value={this.state.date} min={this.state.date} max={maxDate} />
                <button onClick={this.handleAddClick} >Add task</button>
            </div>
        );
    }
}

export default AddTask;