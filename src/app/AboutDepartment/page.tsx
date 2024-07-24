import React from 'react'
import AboutDepartment from './AboutDepartment'
import { csDepartment } from './departmentData'

const ComputerSciencePage = () => {
  return <AboutDepartment {...csDepartment} />
}

export default ComputerSciencePage
