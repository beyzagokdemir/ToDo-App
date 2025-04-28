import React from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { CiEdit } from "react-icons/ci";
function Todo() {
    return (
        <div className='todo'
            style={{
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems
                    : 'center'
            }}>
            <div>
                Ben ilk todoyum
            </div>
            <div>
                <IoIosRemoveCircle className='todo-icons' />
                <CiEdit className='todo-icons' />
            </div>
        </div>
    )
}

export default Todo