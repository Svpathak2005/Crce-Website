'use server'

// app/achievements/page.tsx
import getDepartmentAchievements from '../api/achievements'
import { type DepartmentAchievement } from '../api/achievements'

export default async function AchievementsPage() {
  let achievements: DepartmentAchievement[] = []

  try {
    achievements = await getDepartmentAchievements('computers')
  } catch (error) {
    console.error('Failed to fetch achievements:', error)
  }

  return (
    <div className="p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Computer Engineering Achievements
      </h1>
      <ul className="space-y-4">
        {achievements.length > 0 ? (
          achievements.map((achievement) => (
            <li
              key={achievement.id}
              className="rounded border bg-white p-4 shadow-sm"
            >
              <h2 className="text-xl font-semibold">{achievement.title}</h2>
              <p className="text-sm text-gray-500">{achievement.date}</p>
              <p className="mt-1">{achievement.description}</p>
              <p className="text-sm text-blue-700">
                <strong>People:</strong> {achievement.people}
              </p>
              <p className="text-sm text-purple-700">
                <strong>Event:</strong> {achievement.event}
              </p>
              <p className="text-sm text-green-700">
                <strong>Category:</strong> {achievement.category}
              </p>
            </li>
          ))
        ) : (
          <p>No achievements found.</p>
        )}
      </ul>
    </div>
  )
}
