import React, {useState} from "react";
import {FaAdjust} from 'react-icons/fa';
import {AddTask} from "../AddTask";

export const Header = ({darkMode, setDarkMode}) => {
    const [shouldShowMain, setShouldShowMain] = useState(false)
    const [showQuickAddTask, setShowQuickAddTask] = useState(false)

    return (
        <header className="header" data-testid="header">
            <nav>
                <div className="logo">
                    <img src={"/images/logo.png"} alt="myNotion"/>
                </div>
                <div className="settings">
                    <ul>
                        <li
                            aria-label='Quick add task'
                            data-testid="quick-add-task-action"
                            className="settings__add">
                            <button
                            type='button'
                            onClick={() => {
                                setShowQuickAddTask(true)
                                setShouldShowMain(true)
                            }}
                            onKeyDown={() => {
                                setShowQuickAddTask(true)
                                setShouldShowMain(true)
                            }}>+</button>
                        </li>
                        <li
                            aria-label='Toggle dark mode'
                            data-testid="dark-mode-action"
                            className="settings__darkmode"
                        >
                            <button
                                type='button'
                                onClick={() => setDarkMode(!darkMode)}
                                onKeyDown={() => setDarkMode(!darkMode)}
                            >
                            <FaAdjust/>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
            <AddTask
                showAddTaskMain={false}
                showShouldMain={shouldShowMain}
                showQuickAddTask={showQuickAddTask}
                setShowQuickAddTask={setShowQuickAddTask}
            />
        </header>
    )
}
