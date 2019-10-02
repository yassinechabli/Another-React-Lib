import React from 'react';
import SocialIcon from '../SocialIcon/SocialIcon';
//To do: create styling and different pre-set profile style types

function Profile(props){
    const {name, image, bio, className, link, socials} = props;

    return(
        <section className={className && className || `${name}-profile`}>

            <img src={image.location}></img>

            <h2>{name}</h2>

            <p>{bio}</p>

            {link && <a href={link.source}>{link.text}</a>}
            {link && <br></br>}
            
            {socials && <div className = 'social-links'>{socials.map(social => {
                return <a href={social.source}><SocialIcon name={social.name} size={social.size || 'md'}/></a>
            })}</div>}
        </section>
    )
}

export default Profile;