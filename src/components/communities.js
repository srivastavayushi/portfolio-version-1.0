import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import  "react-vertical-timeline-component/style.min.css";

import experience from "./content/experience";

export default function Communities() {

  return (
    <section className="body-font" id="experience">
      <div className="container px-5 py-16 mx-auto flex flex-wrap flex-col">
        <div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl py-4 mb-3">
          <h2 className="text-2xl font-bold leading-none sm:text-4xl">
            Work Experience
          </h2>
        </div>
        <VerticalTimeline lineColor="#FCA311">
          {experience.map(element => {
              return(
                <VerticalTimelineElement 
                  contentStyle={element.style}
                  contentArrowStyle={element.arrowStyle}
                  key={element.id}
                  date={element.date}
                  dateClassName="text-basic-blue"
                  iconClassName="bg-basic-blue text-project-yellow hover:bg-basic-yellow hover:text-basic-blue border-basic-yellow"
                  icon={element.icon}
                  
                  >
                    <h3 className="text-xl font-semibold">{element.company}</h3>
                    <h5 className="italic">{element.title}</h5>
                    <div className="text-sm my-2">{element.description}</div>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {element.technology.map(tech => {return(
                        <img src={tech} alt=""/>
                      )})}
                    </div>

                </VerticalTimelineElement>
              )
          })}
        </VerticalTimeline>

      </div>
    </section>
  );
}
