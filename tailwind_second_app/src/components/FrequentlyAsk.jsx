import React from "react";

const FrequentlyAsk = () => {
  return (
    <div className="  justify-between items-center mx-[155px] my-3">
      <div>
        <h1 className="font-bold text-3xl text-center p-4">
          Frequently asked questions
        </h1>
        <div className="flex flex-col justify-center items-center py-8" >
          <details>
            <summary>Can I use Landwind in open-source projects?</summary>
            <p>
              Epcot is a theme park at Walt Disney World ResoLandwind is an
              open-source library of interactive components built on top of
              Tailwind CSS including buttons, dropdowns, modals, navbars, and
              more. Check out this guide to learn how to get started and start
              developing websites even faster with components on top of Tailwind
              CSS.
            </p>
          </details>
          <details>
            <summary>Is there a Figma file available?</summary>
            <p>
              Landwind is first conceptualized and designed using the Figma
              software so everything you see in the library has a design
              equivalent in our Figma file. Check out the Figma design system
              based on the utility classes from Tailwind CSS and components from
              Landwind.
            </p>
          </details>
          <details>
            <summary>
              What are the differences between Landwind and Tailwind UI?
            </summary>
            <p>
              The main difference is that the core components from Landwind are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Landwind relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages. However, we actually recommend using both Landwind,
              Landwind Pro, and even Tailwind UI as there is no technical reason
              stopping you from using the best of two worlds.
            </p>
          </details>
          <details>
            <summary>What about browser support?</summary>
            <p>
              The main difference is that the core components from Landwind are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Landwind relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages. However, we actually recommend using both Landwind,
              Landwind Pro, and even Tailwind UI as there is no technical reason
              stopping you from using the best of two worlds. Learn more about
              these technologies:
            </p>
          </details>
        </div>
      </div>
    </div>
  );
};

export default FrequentlyAsk;
