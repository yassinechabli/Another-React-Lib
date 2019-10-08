import React from "react";
import PropTypes from "prop-types";
import SocialIcon from "../SocialIcon/SocialIcon";
//To do: create styling and different pre-set profile style types
import "./Profile.css";

function Profile(props) {
  const { name, image, bio, className, link, socials } = props;

  return (
    <section className={(className && className) || `${name}-profile`}>
      {image && <img className="profile" src={image.location || image}></img>}

      <h2>{name}</h2>

      <p>{bio}</p>

      {link && <a href={link.source}>{link.text}</a>}
      {link && <br></br>}

      {socials && (
        <div className="social-links">
          {socials.map(social => {
            return (
              <SocialIcon
                key={social.name}
                name={social.name}
                size={social.size || "md"}
                link={social.link}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}

Profile.propTypes = {
  name: PropTypes.string,
  image: PropTypes.element || PropTypes.string,
  bio: PropTypes.string,
  className: PropTypes.string,
  link: PropTypes.string,
  socials: PropTypes.array
};

export default Profile;
