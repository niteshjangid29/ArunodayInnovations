import React from "react";

const StudentCard = (props) => {
  return (
    <div className="flex flex-col border rounded-md overflow-hiddens m-3 font-[poppins]">
      <img className="h-40 w-30" src={props.url} alt={props.name} />

      <h1 className="text-center py-2">{props.name}</h1>
    </div>
  );
};

export default StudentCard;
