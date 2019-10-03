import React from 'react';
import "./AlertWrapper.css";

class AlertWrapper extends React.Component {

    getClassName() {
        return (this.props.alertMsg) ? 'alert-container' : 'wrapper-container';
    }

    getAlertMessageClass() {
        switch (this.props.typeAlert) {
            case "error":
                return 'error-message';
            case "warning":
                return 'warning-message';
        }
    }

    render() {
        return (
            <div className={this.getClassName()}>
                <div className={"alert-message " + this.getAlertMessageClass()}>{this.props.alertMsg}</div>
                {this.props.children}
            </div>
        )
    }
}

AlertWrapper.defaultProps = {
    alertMsg: "",
    typeAlert: "error"
};

export default AlertWrapper;

