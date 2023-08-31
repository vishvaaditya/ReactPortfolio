import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './Contact.css';

class Contact extends Component {
  state = {
    subject: '',
    body: '',
  };

  validateForm = (event) => {
    const { subject, body } = this.state;
    const mailtoLink = `mailto:thirunavukarasuvsr@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
    event.preventDefault();
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <body>
        <div className="heading">
          <div className="jumbotron text-center">
            <h1 className="myname"> Vishva Aditya R T</h1>
            <p className="myjob">Intern Cloud Engineering</p>
            <ul className="nav nav-pills nav-justified">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  {' '}
                  Home{' '}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/Project">
                  {' '}
                  Project{' '}
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link active" href="/Contact">
                  {' '}
                  Contact{' '}
                </a>
              </li>
            </ul>
            <br />
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
                <br />
              </div>
            </div>
            <br />

            <div className="project-container">
              <h1>Feedback Form</h1>
              <div className="project-container" id="mail">
                <div className="row">
                  <div className="col-sm-8 offset-md-2">
                    <form
                      className="justify-content-center"
                      onSubmit={this.validateForm}
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
                          onChange={this.handleInputChange}
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
                          onChange={this.handleInputChange}
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

            <div className="jumbotron text-center" id="footer">
              <ul className="nav justify-content-center">
                <li
                  className="nav-item"
                  style={{
                    marginRight: '40px',
                    marginLeft: '40px',
                    fontSize: '40px',
                  }}
                >
                  <NavLink
                    to="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/"
                    className="nav-link"
                  >
                    <SocialIcon url="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/" />
                  </NavLink>
                </li>

                <li
                  className="nav-item"
                  style={{
                    marginRight: '40px',
                    marginLeft: '40px',
                    fontSize: '40px',
                  }}
                >
                  <NavLink
                    to="https://github.com/vishvaaditya/"
                    className="nav-link"
                  >
                    <SocialIcon url="https://github.com/vishvaaditya/" />
                  </NavLink>
                </li>

                <li
                  className="nav-item"
                  style={{
                    marginRight: '40px',
                    marginLeft: '40px',
                    fontSize: '40px',
                  }}
                >
                  <NavLink
                    to="https://instagram.com/vishva_aditya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"
                    className="nav-link"
                  >
                    <SocialIcon url="https://instagram.com/vishva_aditya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </body>
    );
  }
}

const MemoizedContact = React.memo(Contact);
export default MemoizedContact;
