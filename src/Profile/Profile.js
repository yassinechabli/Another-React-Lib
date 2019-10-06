import React from "react";
import SocialIcon from "../SocialIcon/SocialIcon";
//To do: create styling and different pre-set profile style types
import "./styles.css";

function Profile(props) {
  const { name, image, bio, className, link, socials } = props;

  return (
    <section className={(className && className) || `${name}-profile`}>
      {image && <img src={image.location}></img>}

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

export default Profile;
