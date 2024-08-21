import React from 'react'

const LocalManagementCouncil = () => {
  return (
    <div className="flex min-h-max w-full flex-col ">
      <main className="container mx-auto flex-grow p-4">
        <div className="rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-semibold">Local Management Council</h2>
          <div className="mx-auto grid max-w-[60%] grid-cols-3 grid-rows-6 gap-y-2 gap-x-0 border-2 border-black p-4">
            {/* Title */}
            <div className="flex font-bold ">
              <h2>Sr. THIS IS DUMMY</h2>
            </div>
            <div className="flex font-bold">
              <h2>Name</h2>
            </div>
            <div className="flex font-bold">
              <h2>Designation</h2>
            </div>
            {/* 1 */}
            <div className="flex gap-4">
              <h2>1.</h2>
            </div>
            <div className="flex gap-4">
              <h2>Fr. Bento Rodrigues</h2>
            </div>
            <div className="flex gap-4">
              <h2>Chairman</h2>
            </div>
            {/* 2 */}
            <div className="flex gap-4">
              <h2>2.</h2>
            </div>
            <div className="flex gap-4">
              <h2>Fr. Alarico Carvalho</h2>
            </div>
            <div className="flex gap-4">
              <h2>Vice Chairman</h2>
            </div>
            {/* 3 */}
            <div className="flex gap-4">
              <h2>3.</h2>
            </div>
            <div className="flex gap-4">
              <h2>Fr. Peter D’Souza</h2>
            </div>
            <div className="flex gap-4">
              <h2>Treasurer</h2>
            </div>
            {/* 4 */}
            <div className="flex gap-4">
              <h2>4.</h2>
            </div>
            <div className="flex gap-4">
              <h2>Fr. Valerian D’Souza</h2>
            </div>
            <div className="flex gap-4">
              <h2>Secretary</h2>
            </div>
            {/* 5 */}
            <div className="flex gap-4">
              <h2>5.</h2>
            </div>
            <div className="flex gap-4">
              <h2> Fr. Agnelo Gomes</h2>
            </div>
            <div className="flex gap-4">
              <h2>Member</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LocalManagementCouncil
