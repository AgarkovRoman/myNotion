import React from 'react'
import moment from 'moment'
import {FaRegPaperPlane, FaSpaceShuttle, FaSun} from "react-icons/fa";

export const TaskDate = ({setShowTaskDate, setTaskDate, showTaskDate}) => {
    return (
        showTaskDate && <div className='task-date' data-tesid='task-date-overlay'>
            <ul className='task-date__list'>
                <li>
                    <div
                        aria-label='Select today as the task date'
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().format('DD/MM/YYYY'))
                        }}
                        role='button'
                        data-testid='task-date-today'
                        tabIndex={0}>
                        <span><FaSpaceShuttle/></span>
                        <span>Today</span>
                    </div>
                </li>

                <li>
                    <div
                        aria-label='Select tomorrow as the task date'
                        onClick={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
                        }}
                        onKeyDown={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(1, 'day').format('DD/MM/YYYY'))
                        }}
                        role='button'
                        tabIndex={0}
                        data-testid='task-date-tomorrow'
                    >
                        <span><FaSun/></span>
                        <span>Tomorrow</span>
                    </div>
                </li>

                <li>
                    <div
                        aria-label='Select next week as the task date'
                        onClick={() => {
                        setShowTaskDate(false)
                        setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
                    }}
                        onKeyDown={() => {
                            setShowTaskDate(false)
                            setTaskDate(moment().add(7, 'days').format('DD/MM/YYYY'))
                        }}
                        role='button'
                        tabIndex={0}
                        data-testid='task-date-next-week'
                    >
                    <span><FaRegPaperPlane/></span>
                    <span>Next week</span>
                    </div>
                </li>
            </ul>
        </div>
    )
}
