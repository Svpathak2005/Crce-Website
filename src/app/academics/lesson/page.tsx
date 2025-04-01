import React from 'react'
import { Zilla_Slab } from 'next/font/google'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const LessonPlanPage = () => {
  return (
    <div className="flex min-h-screen w-full flex-col bg-linear-to-b from-white to-[#E5F0FF] pt-10 text-gray-900 md:pt-36">
      <div className="container mx-auto px-4 py-16">
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h1
            className={`${zilla.className} mb-6 text-4xl font-bold text-[#001f3f]`}
          >
            Lesson Plan
          </h1>
          <p className="mb-6 text-justify">
            Fr. Conceicao Rodrigues College of Engineering (FR.CRCE) is
            affiliated to the University of Mumbai. The University curriculum is
            revised every four to five years taking inputs from academic and
            industry experts. Our faculty members contribute to framing the
            syllabus as members/coordinators of Board of Studies (BOS) and
            syllabus revision committees.
          </p>
          <ol className="mb-6 ml-6 list-decimal space-y-4 text-justify">
            <li>
              Executive Committee (EC) approves the Institute Academic Calendar
              prepared on the basis of the University academic calendar at the
              beginning of the semester. This calendar includes semester wise
              schedules for Institute-level Curricular, Co-curricular and
              extracurricular activities.
            </li>
            <li>
              Program Assessment Committee (PAC) at department level plans and
              monitors academic activities for effective curriculum delivery.
            </li>
            <li>
              Departmental Academic Calendar is prepared by adding timelines and
              schedules for department-level activities and events like Lesson
              Plan Submission, final year project evaluation, Faculty
              Development Programs(FDPs), Industrial Visits, PAC meetings, DAB
              meeting.
            </li>
            <li>
              Faculty prepares Lesson Plan consisting of Course Outcomes (COs),
              CO-PO-PSO Mappings, Targets, Tools used for attainment, Curriculum
              Gaps, Content beyond Syllabus and detailed Lecture Plan/Lab Plan.
              PAC reviews the lesson plans. The Plans are discussed in the class
              and uploaded on the website for students to refer.
            </li>
            <li>
              Regular classroom teaching is supplemented with Guest Lectures,
              Seminars, Assignments, Quizzes, Tutorials, Case Studies,
              hands-on-sessions, Mini projects, Industry visits, Internships,
              Online resources, NPTEL lectures. Learning Management System
              (MOODLE) is used by faculty and students.
            </li>
            <li>
              Class teachers and HODs monitor regular academic activities.
            </li>
            <li>
              Internal Assessment tests are conducted and mid-term academic
              progress report with attendance is conveyed to the parents.
              Advanced and slow learners are identified and necessary actions
              are taken wherever applicable.
            </li>
            <li>
              Periodic Final Year Project evaluation is organized by the Project
              Coordinator for continuous assessment of the project work.
            </li>
            <li>
              Term work assessment is based on continuous evaluation of student
              performance in laboratory/tutorials and assignments.
            </li>
            <li>End Semester examinations are conducted by the University.</li>
            <li>
              Mid-term and End-term feedback is collected from students.
              Mid-term feedback is taken by the HODs from approximately 20
              percent randomly selected students. End-term feedback is collected
              online based on like depth and breadth of syllabus covered, how
              well the subject delivered, effective time utilization of time
              during the lecture, real-life examples used, etc.
            </li>
            <li>
              All faculty members conduct course exit surveys and calculate CO
              attainment for their subjects after the semester examination
              results are declared. Remedial actions are taken as required.
            </li>
            <li>
              The academic audit is conducted every academic year to evaluate
              the curriculum delivery on parameters like course plan, teaching
              and learning methods, evaluation rubrics, lab experiments,
              attainment tools, CO Attainment.
            </li>
            <li>
              Departmental Advisory Board (DAB) meeting is conducted every year.
              The board evaluates the department performance and recommends
              steps for curriculum enhancement and infrastructure improvement.
            </li>
          </ol>
          <div className="space-y-4">
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/4-computer-engineering"
                className="text-blue-500 hover:underline"
              >
                Computer Engineering
              </a>{' '}
              <small>(0)</small>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/5-production-engineering"
                className="text-blue-500 hover:underline"
              >
                Production Engineering
              </a>{' '}
              <small>(0)</small>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/8-mechanical-engineering"
                className="text-blue-500 hover:underline"
              >
                Mechanical Engineering
              </a>{' '}
              <small>(0)</small>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/9-electronics-and-computer-science"
                className="text-blue-500 hover:underline"
              >
                Electronics and Computer Science
              </a>{' '}
              <small>(0)</small>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/68-fy-lp"
                className="text-blue-500 hover:underline"
              >
                First Year Engineering
              </a>{' '}
              <small>(0)</small>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/74-science-humanities"
                className="text-blue-500 hover:underline"
              >
                Science &amp; Humanities
              </a>{' '}
              <small>(0)</small>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 shadow-sm">
              <a
                href="/index.php/academics/tlp/lesson-plan/category/135-artificial-intelligence-data-science"
                className="text-blue-500 hover:underline"
              >
                Artificial Intelligence &amp; Data Science
              </a>{' '}
              <small>(0)</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LessonPlanPage
