import React, { useState, useCallback } from 'react';
import { SocialIcon } from 'react-social-icons';
import './Contact.css';

const Contact = () => {
  const [emailData, setEmailData] = useState({
    subject: '',
    body: '',
  });

  const handleInputChange = useCallback((event) => {
    const { name, value } = event.target;
    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }, []);

  const validateForm = useCallback(
    (event) => {
      event.preventDefault();
      const mailtoLink = `mailto:thirunavukarasuvsr@gmail.com?subject=${encodeURIComponent(
        emailData.subject
      )}&body=${encodeURIComponent(emailData.body)}`;
      window.location.href = mailtoLink;
    },
    [emailData]
  );

  return (
    <div className="heading">
      <div className="jumbotron text-center">
        <h1 className="myname">Vishva Aditya R T</h1>
        <p className="myjob">Intern Cloud Engineering</p>

        {/* Navigation */}
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/Project">
              Project
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/Contact">
              Contact
            </a>
          </li>
        </ul>
        <br />
        {/* Profile Image */}
        <div className="project-container">
          <div className="row">
            <div className="col-sm-4">
              <div className="profile-image">
                <img
                  src="https://media.licdn.com/dms/image/D5603AQGxVvXw0DO3Yw/profile-displayphoto-shrink_400_400/0/1673576050739?e=1698883200&v=beta&t=X_8A7T7WlGa82fLfYEdNuSq2U8BqTplcTWiocFbFx9A"
                  className="rounded-circle mx-auto d-block"
                  alt="My Image"
                  width="150px"
                  height="150px"
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        {/* Feedback Form */}
        <div className="project-container">
          <h1>Feedback Form</h1>
          <div className="project-container" id="mail">
            <div className="row">
              <div className="col-sm-8 offset-md-2">
                <form
                  className="justify-content-center"
                  onSubmit={validateForm}
                >
                  <div className="form-group form-group-lg">
                    <label className="skills" htmlFor="subject">
                      <strong>Name</strong>
                    </label>
                    <input
                      name="subject"
                      type="text"
                      id="subject"
                      className="form-control"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group form-group-lg">
                    <label className="skills" htmlFor="body">
                      <strong>Comments</strong>
                    </label>
                    <textarea
                      name="body"
                      id="body"
                      className="form-control"
                      rows="5"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <input
                    type="submit"
                    value="send"
                    id="navigation"
                    className="btn btn-success"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Social Media Icons */}
        <div className="jumbotron text-center" id="footer">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a
                href="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/"
                className="nav-link"
              >
                <SocialIcon url="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/" />
              </a>
            </li>
            <li className="nav-item">
              <a href="https://github.com/vishvaaditya/" className="nav-link">
                <SocialIcon url="https://github.com/vishvaaditya/" />
              </a>
            </li>
            <li className="nav-item">
              <a
                href="https://instagram.com/vishva_aditya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                className="nav-link"
              >
                <SocialIcon url="https://instagram.com/vishva_aditya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const MemoizedContact = React.memo(Contact);
export default MemoizedContact;
