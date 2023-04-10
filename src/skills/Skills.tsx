import React from 'react';
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>
                    Skills
                </h2>
                <div className={style.skills}>
                    <Skill title={'Js'} description={'java-script'}/>
                    <Skill title={'React'} description={'react'}/>
                    <Skill title={'Redux'} description={'redux'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
