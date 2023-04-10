import React from 'react';
import style from './Project.module.css';

type PropsType = {
    title: string
    description: string
}

function Project(props: PropsType) {
    return (
        <div className={style.project}>
            <div className={style.previewContainer}>
                <div className={style.preview}>
                    <button className={style.button}>
                        View
                    </button>
                </div>
            </div>
                <div className={style.descriptionContainer}>
                <h3 className={style.title}>
                    {props.title}
                </h3>
                <span className={style.description}>
                {props.description}
                </span>
            </div>
        </div>
    );
}

export default Project;
