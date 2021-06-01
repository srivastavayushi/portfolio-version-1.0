import React, { useState } from "react";
//import Community from "./community";
import EquiCodeLogo from "../assets/logo.png";
import styled from "styled-components";

const Tab = styled.button`
  cursor: pointer;
  opacity: 0.6;
  border: 0;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid #8B5CF6;
    opacity:1;
    background-color : #111827;
  `}
`;

export default function Communities() {
  const communities = [
    {
      id: 1,
      name: "EquiCode",
      image: EquiCodeLogo,
      about:
        " Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
    },
    {
      id: 2,
      name: "EquiCode",
      image: EquiCodeLogo,
      about:
        " Whatever1 cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
    },
    {
      id: 3,
      name: "EquiCode",
      image: EquiCodeLogo,
      about:
        " Whatever2 cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
    },
    {
      id: 4,
      name: "EquiCode",
      image: EquiCodeLogo,
      about:
        " Whatever3 cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.",
    },
  ];

  const [active, setActive] = useState(communities[0]);

  return (
    <div>
      <section className="text-coolGray-100 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap flex-col">
          <div className="flex mx-auto flex-wrap mb-20">
            {communities.map((community) => {
              return (
                <Tab
                  key={community.id}
                  active={active === community}
                  onClick={() => setActive(community)}
                >
                  <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start border-b-2 title-font font-medium  inline-flex items-center leading-none  text-white tracking-wider rounded-t">
                    <img
                      src={community.image}
                      alt=" "
                      className="w-5 h-5 mr-3"
                    />
                    {community.name}
                  </a>
                </Tab>
              );
            })}
          </div>
          <img
            className="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="flex flex-col text-center w-full">
            <h1 className="text-xl font-medium title-font mb-4 text-white">
              {active.name}
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              {active.about}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
