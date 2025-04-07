'use server'

export interface DepartmentNotice {
  id: number
  status: string
  title: string
  category: string
  date: string
  content: string
  issued_by: string
  department: string
}

export default async function getDepartmentNotices(
  department: string
): Promise<DepartmentNotice[]> {
  const encodedDept = encodeURIComponent(department)
  const url = `http://localhost:8055/items/department_notices?filter[department][_eq]=${encodedDept}&filter[status][_eq]=published`

  const response = await fetch(url, { cache: 'no-store' })
  if (!response.ok) {
    throw new Error(
      `Failed to fetch department notices: ${response.statusText}`
    )
  }

  const { data } = await response.json()
  return data
}
