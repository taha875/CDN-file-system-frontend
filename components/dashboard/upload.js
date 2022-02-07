import React from "react";

function upload({ name, dc, download }) {
  return (
    <div className="flex items-center justify-center w-full my-3">
      <div className="w-[424px] shadow-lg rounded-md p-8 ">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-file-analytics"
                width={44}
                height={44}
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                <line x1={9} y1={17} x2={9} y2={12} />
                <line x1={12} y1={17} x2={12} y2={16} />
                <line x1={15} y1={17} x2={15} y2={14} />
              </svg>
            </div>
            <div className="mt-8">
              <p className="text-base text-gray-600">File Name: {name}</p>
              <p className="text-base text-gray-600 mt-2">File Created: {dc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default upload;
