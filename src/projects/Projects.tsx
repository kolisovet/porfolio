import React from 'react';
import style from './Projects.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Project from "./Project/Project";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>
                    My projects
                </h2>
                <div className={style.projects}>
                    <Project title={'SN'} description={'social-network'}/>
                    <Project title={'TDL'} description={'todolist'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
