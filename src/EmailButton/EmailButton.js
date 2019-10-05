import React from 'react';
import email from './email.png'

export default class EmailButton extends React.Component {
    render() {
        let { mailto, subject, body, size } = this.props;
        subject = encodeURIComponent(subject);
        body = encodeURIComponent(body);
        return (
            <div className="container">
                <a href={`mailto:${mailto}?subject=${subject}&body=${body}`}>
                    <img src={email} className={`icon-${size || 'md'}`} />
                </a>
            </div>
        )
    }
}