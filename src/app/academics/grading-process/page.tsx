'use client'
import React from 'react'
import { Zilla_Slab } from 'next/font/google'
import { FileText, Book, Award } from 'lucide-react'

const zilla = Zilla_Slab({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const CreditBasedEvaluationSystem = () => {
  return (
    <div className="flex h-fit w-full flex-col bg-gradient-to-b from-white to-[#E5F0FF] text-gray-900">
      {/* Header Section */}
      <div className="flex h-full w-full flex-col bg-white pt-24 md:flex-row">
        <div className="flex w-full flex-col px-28 pt-36 text-[#00122a]">
          <h1
            className={`mb-4 flex items-center text-center font-serif text-2xl font-bold md:text-3xl lg:text-4xl`}
          >
            CREDIT BASED EVALUATION SYSTEM
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto w-full px-4 sm:px-8 md:px-16 lg:px-28 py-8 md:py-16">
        <div className="mb-8 md:mb-16">
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <p className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#4a90e2]">
              "University of Mumbai Evaluation System"
            </p>
            <p className="text-sm md:text-base text-gray-700">
              A student at the entry-level is expected to have information about
              the examination system, rules, and regulations as laid down by the
              University of Mumbai.
            </p>
          </div>
        </div>

        {/* Scheme of Examination */}
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Scheme of Examination
          </h2>
          
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <div className="flex items-start">
              <span className="mr-3 md:mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                <Award className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div>
                <p className="text-sm md:text-base text-gray-700">
                  The performance of the learners shall be evaluated into two
                  components. The learner's performance shall be assessed by
                  Internal Assessment with 40% marks in the first component by
                  conducting the Semester End Examinations with 60% marks in the
                  second component.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Minimum Credit Requirements */}
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Minimum Credit Requirements
          </h2>
          
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <div className="flex items-start">
              <span className="mr-3 md:mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                <Book className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div>
                <p className="text-sm md:text-base text-gray-700">
                  The minimum credit required for the award of a B.E. degree is 180.
                  This is normally divided into Theory courses, tutorials,
                  laboratory courses, seminars and projects in the duration of eight
                  semesters. The minimum credit required for the award of an M.E.
                  degree is 70. The credits are distributed semester wise as shown
                  in the structure and syllabus manual of each programme. Courses
                  generally progress in sequences, building competencies and their
                  positioning indicates certain academic maturity on the part of the
                  learners. Learners are expected to follow the semester wise
                  schedule of courses given in the syllabus manual of respective
                  programmes.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Examination / Assessment and Grading */}
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Examination / Assessment and Grading
          </h2>
          
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <div className="flex items-start">
              <span className="mr-3 md:mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                <FileText className="h-4 w-4 md:h-5 md:w-5" />
              </span>
              <div>
                <p className="text-sm md:text-base text-gray-700">
                  Semester wise performance assessment of every registered learner
                  is to be carried out through various modes of examinations. These
                  include the Internal Assessment and End Semester Examination.
                  Internal Assessment includes class tests, home assignments based
                  on live problems, course projects either in a group or
                  individually. The modes of evaluation and distribution of
                  weightage for each of the assessments is given in the syllabus
                  manual of each programmes. Normally weightage of Internal
                  Assessment and End Semester Examinations 20 and 80 percent
                  respectively in theory courses. In laboratory courses, continuous
                  assessment should be carried out and appropriate weightage should
                  be given to each practical/assignment/course project and proper
                  record of the same to be preserved by the concerned faculty for
                  the purpose of inspection as and when required.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Attendance */}
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Attendance
          </h2>
          
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <div className="flex items-start">
              <span className="mr-3 md:mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#4a90e2] text-white">
                <span className="text-sm md:text-base">A</span>
              </span>
              <div>
                <p className="text-sm md:text-base text-gray-700">
                  Attendance for all Theory, Tutorial, Practical, Seminar and
                  Project/Dissertation is compulsory. As per the University
                  Ordinance 119, 75% attendance is compulsory for keeping the term.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Modes of Assessment/Evaluation */}
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Modes of Assessment/Evaluation
          </h2>
          
          <div className="space-y-4 md:space-y-6">
            {/* Theory Courses */}
            <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-[#4a90e2]">
                Modes of Evaluation for Theory Courses
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Various modes of assessment used for rating learners' performance
                in a theory course include Internal Assessment and End Semester
                Examination. Relative weightage for Internal Assessment is
                typically 20 percent. This will consist of two tests out of which
                one is a compulsory class test and another is either a class test
                or assignment on live problems or course projects in a
                group/individually. The end semester examination will be held as
                per the university schedule and the relative weightage for this
                would be 80 percent. It is normally of 3 hours duration and will
                cover the full syllabus of the course. The end semester
                examination is mandatory. The grade for theory courses can be
                awarded only after successfully completion of both Internal
                Assessment and End Semester Examination of the respective course
                as per the curriculum manual of the respective programme.
              </p>
            </div>

            {/* Laboratory Courses */}
            <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-[#4a90e2]">
                Modes of Evaluation for Laboratory Courses
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                The assessment in a laboratory course will be based on regular
                supervision of the learner's work, her/his performance in
                viva-voce examinations, the quality of their work as prescribed
                through laboratory journals and an end semester test that contains
                performing an experiment if the practical examination is
                mentioned. It is obligatory to maintain a laboratory journal as
                prescribed by the course instructor. Final submission/examination
                for laboratory courses will normally be held before the end
                semester examination (final theory examinations). The grade for
                laboratory courses can be awarded only after successfully
                completion of Term Work, Practical and/or Oral examination as per
                the curriculum manual of the respective programme.
              </p>
            </div>

            {/* Seminars */}
            <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-[#4a90e2]">
                Modes of Evaluation for Seminars
              </h3>
              <p className="text-sm md:text-base text-gray-700">
                Seminars are evaluated based on a written report, and an oral
                presentation before a panel of examiners appointed by the
                University. The supervisor and/or co-supervisor, when involved,
                are part of the panel. The grade for Seminar can be awarded only
                after successfully completion of Term Work and Oral Presentation
                as per the curriculum manual of the respective programme. The
                evaluation of the seminars is completed before the commencement of
                the end semester examination.
              </p>
            </div>

            {/* Projects/Dissertation */}
            <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
              <h3 className="mb-2 md:mb-3 text-lg md:text-xl font-semibold text-[#4a90e2]">
                Modes of Evaluation for Projects/Dissertation
              </h3>
              
              <p className="mb-3 text-sm md:text-base text-gray-700">
                <span className="font-semibold">B.E. Project:</span> Project-I and Project-II are
                separately graded, at the end of the respective semesters. These
                projects are supervised or guided and need regular interaction (at
                least once a week) with the supervisor/guide. The project group
                has to submit a project report and defend it in front of a panel
                of examiners. Panel of examiners for Project-I evaluation will be
                appointed by Head of Department/Institute, while as for Project-II
                evaluation will be conducted by pair of Internal and External
                examiners appointed by University. The dates for submission of
                reports, the dates for presentations are to be scheduled as per
                the guidelines of University and details of mode of assessment are
                given in the curriculum manual of respective programmes. Project
                is a part of term work; the project report will not be accepted if
                students fail to complete the project successfully. The grade for
                Project can be awarded only after successfully completion of Term
                Work and Oral Presentation as per the curriculum manual of the
                respective programme.
              </p>

              <p className="text-sm md:text-base text-gray-700">
                <span className="font-semibold">M.E. Dissertation:</span> For evaluation of
                Dissertation-I, a learner has to submit the required number of
                copies of the report to the respective department of affiliated
                Institute/ College as per the University academic calendar. The
                evaluation will be done, by a panel of examiners appointed by the
                head of Department / Institute, based on the report and
                presentation. The criteria for evaluation of the Dissertation –I
                are given in the curriculum manual. The panel shall consist of the
                supervisor(s) and at least one or two more faculty members, to act
                as internal examiners. For evaluation of Dissertation-II, a
                learner has to submit the required number of hardbound
                Dissertation reports to the respective section of University. A
                learner is eligible for viva-voce of Dissertation-II only if s/he
                passes in the semester –I, semester –II and semester –III in all
                respect. The evaluation will be done by a pair of examiners based
                on the report and a viva-voce. The viva-voce will be conducted in
                the parent Institute. Final Grade reports are to be sent by the
                Institute to the respective section of the university on
                completion of the viva-voce. The criteria of evaluation of
                Dissertation –II are given in the curriculum manual. The Pair of
                Examiners for the assessment of Dissertation-II will be appointed
                by the University.
              </p>
            </div>
          </div>
        </div>

        {/* Grading of Performance */}
        <div className="mb-8 md:mb-16">
          <h2 className={`mb-4 md:mb-6 text-xl md:text-2xl font-bold text-[#001f3f]`}>
            Grading of Performance
          </h2>
          
          <div className="rounded-lg bg-gray-100 p-4 md:p-6 shadow-lg">
            <h3 className="mb-3 md:mb-4 text-lg md:text-xl font-semibold text-[#4a90e2]">
              Letter Grade and Grade Point Allocation
            </h3>
            <p className="mb-4 text-sm md:text-base text-gray-700">
              The Credit and Grading system will be effective from the academic
              year 2012-2013 for the Faculty of Technology of the University of
              Mumbai. In every course, based on the combined performance in all
              assessments in a particular semester as per the
              curriculum/syllabus, the student is awarded a letter grade. These
              letter grades not only indicate a qualitative assessment of the
              learner's performance but also carry a quantitative (numeric)
              equivalent called the Grade Point. The letter grades and their
              equivalent grade point applicable for undergraduate programme are
              given below:
            </p>

            <div className="overflow-x-auto">
              <table className="mb-4 w-full border-collapse border border-gray-300 text-sm md:text-base">
                <thead className="bg-[#4a90e2] text-white">
                  <tr>
                    <th className="border border-gray-300 p-2">
                      Percentage of Marks Obtained
                    </th>
                    <th className="border border-gray-300 p-2">Letter Grade</th>
                    <th className="border border-gray-300 p-2">Grade Points</th>
                    <th className="border border-gray-300 p-2">Performance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      80.00 and above
                    </td>
                    <td className="border border-gray-300 p-2 text-center">O</td>
                    <td className="border border-gray-300 p-2 text-center">10</td>
                    <td className="border border-gray-300 p-2">Outstanding</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">75.00 – 79.99</td>
                    <td className="border border-gray-300 p-2 text-center">A</td>
                    <td className="border border-gray-300 p-2 text-center">9</td>
                    <td className="border border-gray-300 p-2">Excellent</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">70.00 – 74.99</td>
                    <td className="border border-gray-300 p-2 text-center">B</td>
                    <td className="border border-gray-300 p-2 text-center">8</td>
                    <td className="border border-gray-300 p-2">Very Good</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">60.00 – 69.99</td>
                    <td className="border border-gray-300 p-2 text-center">C</td>
                    <td className="border border-gray-300 p-2 text-center">7</td>
                    <td className="border border-gray-300 p-2">Good</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">50.00 – 59.99</td>
                    <td className="border border-gray-300 p-2 text-center">D</td>
                    <td className="border border-gray-300 p-2 text-center">6</td>
                    <td className="border border-gray-300 p-2">Fair</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">45.00 – 49.99</td>
                    <td className="border border-gray-300 p-2 text-center">E</td>
                    <td className="border border-gray-300 p-2 text-center">5</td>
                    <td className="border border-gray-300 p-2">Average</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">40.00 – 44.99</td>
                    <td className="border border-gray-300 p-2 text-center">P</td>
                    <td className="border border-gray-300 p-2 text-center">4</td>
                    <td className="border border-gray-300 p-2">Pass</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-2">
                      Less than 40.00
                    </td>
                    <td className="border border-gray-300 p-2 text-center">F</td>
                    <td className="border border-gray-300 p-2 text-center">0</td>
                    <td className="border border-gray-300 p-2">Fail</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-sm md:text-base text-gray-700">
              A learner who remains absent in any form of
              evaluation/examination, letter grade allocated to him/her should
              be AB and corresponding grade point is zero. S/he should reappear
              for the said evaluation/examination in due course.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditBasedEvaluationSystem