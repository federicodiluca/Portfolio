import React from "react";
import ContactFormModal from "./ContactFormModal";

import axios from "axios";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, messages, link, imgSize, resume, contactForm }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));

  React.useEffect(() => {
    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }
  }, [link]);

  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  return (
    <div id="aboutme" className="jumbotron jumbotron-fluid m-0 bg-light">
      <div className="container container-fluid">
        <div className="row">
          <div className="col-5 d-none d-lg-block align-self-center">
            {showPic && (
              <img
                className="border border-secondary rounded-circle"
                src={profilePicUrl}
                alt="profilepicture"
                width={imgSize}
                height={imgSize}
              />
            )}
          </div>

          <div className={`col-lg-${showPic ? "7" : "12"}`}>
            <h2 className="display-4 mb-5 text-center">{heading}</h2>
            {
              messages.map((message, i) => {
                return (<p className="lead text-center">{message}</p>) 
              })
            }
            <p className="lead text-center">
              {resume && (
                <a
                  className="btn btn-outline-dark btn-lg mt-4"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume <img src="https://img.icons8.com/material-rounded/24/000000/download--v1.png" width="20" height="20"/>
                </a>
                )}
              {contactForm.show && (
                <ContactFormModal
                 contactForm={contactForm} 
                 isButton={true}
                 text={
                  (
                    <>
                      Contact me <img src="https://img.icons8.com/external-flatart-icons-outline-flatarticons/64/000000/external-send-email-flatart-icons-outline-flatarticons.png" width="20" height="20"/>
                    </>
                  )
                 }/>
              )}
              </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
