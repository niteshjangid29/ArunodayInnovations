import React from "react";

const MemberCard = (props) => {
  return (
    <div className="flex flex-col w-11/12 sm:w-3/5 md:flex-row lg:w-3/5 md:w-4/5 bg-white rounded-xl overflow-hidden my-6 drop-shadow-[0px_3px_3px_rgba(0,0,0,0.3)]">
      <div className="xl:basis-1/4 md:basis-1/3">
        <img className="w-full h-full" src={props.image} alt="sohom" draggable="false" />
      </div>
      <div className="xl:basis-3/4 md:basis-2/3 flex flex-col p-5">
        <h1 className="font-bold text-lg">{props.name}</h1>
        <h2 className="font-semibold text-md">{props.position}</h2>
        <p className="text-justify">{props.about}</p>
        <div className="flex w-full justify-end">
          <a
            className="pt-2 pb-2.5 px-3 rounded-md leading-none bg-red-500 text-white font-semibold"
            href={props.url}
          >
            More...
          </a>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
