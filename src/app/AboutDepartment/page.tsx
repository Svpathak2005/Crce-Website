import React from 'react'
import AboutDepartment from './AboutDepartment'
import { csDepartment } from './departmentData'
import ProgramInfo from './AboutProgram'

const ComputerSciencePage = () => {
  return (
    <div>
      <AboutDepartment {...csDepartment} />
      <ProgramInfo />
    </div>
  )
}

export default ComputerSciencePage
