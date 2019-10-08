import React from "react";
import "./CountDown.css";


class CountDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            min: 0,
            sec: this.props.sec,
            done: false
        }
    }

    componentDidMount() {
        this.interval = setInterval(() => {
            if (this.state.sec > 0) {
                this.setState({
                    sec: this.state.sec - 1
                });
            }
            if (this.state.sec === 0) {
                this.setState({
                    done: true
                })
            }
        }, 1000);
    }

    render() {
        const time = this.state;
        return (
            <div className={`countdown-div ${time.done ? "timer-done" : ""}`}>
                <p>{time.min} : {time.sec}</p>
            </div>
        )
    }
}

export default CountDown;
