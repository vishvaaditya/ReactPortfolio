import React from 'react';
import { NavLink } from 'react-router-dom';
import './Project.css';

const ProjectTable = React.memo(({ projectName, languages, githubLink, aboutProject }) => (
    <div className="project-container" key={projectName}>
        <div className="row">
            <div className="col-sm-2">
                <div className="profile-image">
                    <img src='https://media.licdn.com/dms/image/D5603AQGxVvXw0DO3Yw/profile-displayphoto-shrink_400_400/0/1673576050739?e=1698883200&v=beta&t=X_8A7T7WlGa82fLfYEdNuSq2U8BqTplcTWiocFbFx9A' 
                        className="rounded-circle mx-auto d-block" alt='My Image' width='150px' height='150px'/>
                </div>
            </div>
            <div className="col-sm-10">
                <h2 className="project-title">{projectName}</h2>
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th>Project name</th>
                            <th>Languages used</th>
                            <th>GitHub link for Project</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{projectName}</td>
                            <td>{languages}</td>
                            <td><a href={githubLink}>{projectName}</a></td>
                        </tr>
                    </tbody>
                </table>
                <h2 className="project-subtitle"> About Project: </h2>
                <p className="project-description">{aboutProject}</p>
            </div>
        </div>
    </div>
));

const Project = () => {
    const projects = [
        {
            projectName: "Early Detection of Chronic Kidney Disease using Machine Learning",
            languages: "Html, Css, Python, Flask",
            githubLink: "https://github.com/IBM-EPBL/IBM-Project-18233-1659681545",
            aboutProject: "Chronic Kidney Disease (CKD) is a major medical problem and can be cured if treated in the early stages. Usually, people are not aware that medical tests we take for different purposes could contain valuable information concerning kidney diseases. Consequently, attributes of various medical tests are investigated to distinguish which attributes may contain helpful information about the disease. The information says that it helps us to measure the severity of the problem and we make use of such information to build a machine learning model that predicts Chronic Kidney Disease."
        },
        {
            projectName: "ChatBot",
            languages: "Python, AI",
            githubLink: "https://github.com/vishvaaditya/ChatBot",
            aboutProject: "This is an initial level chat bot which makes use of pre-defined intents to train and understands the entire data. Which is then trained using Neural Network. The messages are classified and tested with the intents. This bot helps customers in ordering their food based on the availability and interests."
        },
        {
            projectName: "Sales Forecasting Website",
            languages: "Angular, Flask, MongoDB, PowerBI, Python",
            githubLink: "https://github.com/vishvaaditya/Sales_Forecasting_Website",
            aboutProject: "The ultimate aim of this sales forecasting website is to allow users to input sales data for a specific period, which will be analyzed using an ARIMA model to provide sales predictions for the next 6 to 12 months. Users can create accounts for personalized access, and the uploaded data will be stored in MongoDB for future analysis. Real-time sales data tracking will be accomplished using PowerBI to compare current and forecasted results."
        }
    ];

    return (
        <div>
            <div className="heading">
                <div className="jumbotron text-center">
                    <h1 className="myname">Vishva Aditya R T</h1>
                    <p className="myjob">Intern Cloud Engineering</p>
                    <ul className="nav nav-pills nav-justified">
                        <li className="nav-item"><a className="nav-link active" href='/'> Home </a></li>
                        <li className="nav-item"><a className="nav-link active" href='/Project'> Project </a></li>
                        <li className="nav-item"><a className="nav-link active" href='/Contact'> Contact </a></li>
                    </ul>
                </div>
            </div>

            {projects.map(project => (
                <ProjectTable
                    key={project.projectName}
                    projectName={project.projectName}
                    languages={project.languages}
                    githubLink={project.githubLink}
                    aboutProject={project.aboutProject}
                />
            ))}

            <div className="jumbotron text-center" id="footer">
                <ul className="nav justify-content-center">
                    <li className="nav-item" style={{ marginRight: "40px", marginLeft: "40px", fontSize: "40px" }}>
                        <NavLink to="https://www.linkedin.com/in/vishva-aditya-r-t-8885751b0/" className="nav-link">
                            <ion-icon name="logo-linkedin">Linkedin</ion-icon>
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ marginRight: "40px", marginLeft: "40px", fontSize: "40px" }}>
                        <NavLink to="https://github.com/vishvaaditya/" className="nav-link">
                            <ion-icon name="logo-github">GitHub</ion-icon>
                        </NavLink>
                    </li>
                    <li className="nav-item" style={{ marginRight: "40px", marginLeft: "40px", fontSize: "40px" }}>
                        <NavLink to="https://instagram.com/vishva_aditya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D" className="nav-link">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Project;
