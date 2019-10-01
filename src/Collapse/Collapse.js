import React from 'react';
import './collapse.css';

class Collapse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
        this.togglePanel = this.togglePanel.bind(this);
    }

    togglePanel(e){
        this.setState({open: !this.state.open})
    }

    render() {
        const { headerStyle, bodyStyle, collapseHeader, collapseBody } = this.props;
        return (
        <div>
            <div 
                style={headerStyle}
                className='header'
                onClick={(e)=>this.togglePanel(e)}
            >
                {collapseHeader}
            </div>
            {this.state.open 
                ? <div className='content' style={bodyStyle}>{collapseBody}</div> 
                : null
            }
        </div>
        );
    }
}

Collapse.defaultProps = {
    headerStyle: {
        cursor: 'pointer',
        padding: 15,
        backgroundColor: '#0089CC',
        color: '#FFF',
        fontFamily: 'verdana',
    },
    bodyStyle: {
        padding: 15,
        fontFamily: 'verdana',
        fontSize: 14,
        cursor: 'pointer',
    },
    text:'e',
    styles: {},
    handleClick: () => {}
}

export default Collapse;