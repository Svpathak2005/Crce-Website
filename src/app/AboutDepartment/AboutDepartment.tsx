import React from "react";
import { File } from "lucide-react";
interface AboutDepartmentProps {
  filename?: string;
  name?: string;
  videoSrc?: string;
  p1?: string;
  p2?: string;
  p3?: string;
  p4?: string;
  pointers?: string[];
}

const AboutDepartment: React.FC<AboutDepartmentProps> = ({
  filename,
  name,
  videoSrc,
  p1,
  p2,
  p3,
  p4,
  pointers = [],
}) => {
  return (
    <div className="bg-[#fafafa] h-fit min-h-screen text-black w-full px-10 py-12">
      <div className="bg-white text-black p-10 mx-auto shadow-md hover:shadow-lg mr-64 ml-64">
        <div className="flex flex-col items-start pb-10">
          <div className="flex flex-row items-center">
            <File className="text-gray-500" />
            <p className="text-sm text-gray-500">{filename}</p>
          </div>
          <h2 className="font-semibold text-2xl pt-2">{name}</h2>
        </div>

        <div className="flex flex-col space-y-5">
          <video className="w-1/5 h-auto mb-8" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <p>{p1}</p>
          <p>{p2}</p>
          <p>{p3}</p>
          <p>{p4}</p>
          <h1 className="font-bold underline pt-3">Highlights of Department</h1>
          <ul className="list-disc list-inside pt-6 space-y-2">
            {pointers.map((pointer, index) => (
              <li key={index}>{pointer}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutDepartment;
