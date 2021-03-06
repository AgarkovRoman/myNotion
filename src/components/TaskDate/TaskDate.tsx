import React from 'react'
import dayjs from 'dayjs'
import { FaRegPaperPlane, FaSpaceShuttle, FaSun } from 'react-icons/fa'
import classes from './TaskDate.module.scss'

interface TaskDatePropsI {
  setShowTaskDate: (value: boolean) => void
  setTaskDate: (value: string) => void
  showTaskDate: boolean
}

export const TaskDate: React.FC<TaskDatePropsI> = ({
  setShowTaskDate,
  setTaskDate,
  showTaskDate,
}) => (
  <>
    {showTaskDate && (
      <div className={classes.taskDate} data-testid="task-date-overlay">
        <ul className={classes.list}>
          <li className={classes.listItem}>
            <div
              className={classes.listItemElement}
              aria-label="Select today as the task date"
              onClick={() => {
                setShowTaskDate(false)
                setTaskDate(dayjs().format('DD/MM/YYYY'))
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDate(false)
                  setTaskDate(dayjs().format('DD/MM/YYYY'))
                }
              }}
              role="button"
              data-testid="task-date-today"
              tabIndex={0}
            >
              <span>
                <FaSpaceShuttle />
              </span>
              <span>Today</span>
            </div>
          </li>

          <li className={classes.listItem}>
            <div
              className={classes.listItemElement}
              aria-label="Select tomorrow as the task date"
              onClick={() => {
                setShowTaskDate(false)
                setTaskDate(dayjs().add(1, 'day').format('DD/MM/YYYY'))
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDate(false)
                  setTaskDate(dayjs().add(1, 'day').format('DD/MM/YYYY'))
                }
              }}
              role="button"
              tabIndex={0}
              data-testid="task-date-tomorrow"
            >
              <span>
                <FaSun />
              </span>
              <span>Tomorrow</span>
            </div>
          </li>

          <li className={classes.listItem}>
            <div
              className={classes.listItemElement}
              aria-label="Select next week as the task date"
              onClick={() => {
                setShowTaskDate(false)
                setTaskDate(dayjs().add(7, 'day').format('DD/MM/YYYY'))
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setShowTaskDate(false)
                  setTaskDate(dayjs().add(7, 'day').format('DD/MM/YYYY'))
                }
              }}
              role="button"
              tabIndex={0}
              data-testid="task-date-next-week"
            >
              <span>
                <FaRegPaperPlane />
              </span>
              <span>Next week</span>
            </div>
          </li>
        </ul>
      </div>
    )}
  </>
)
