"use client"

import React, { useState } from "react"

export default function Home() {
  // Build Accordion in React
  // Creating an accordion that toggles text content on click of the accordion header using React State and conditional rendering.
  // The following are the steps to create an accordion in React JS:
  // Display every title of accordion with body.
  // Hide every accordion body using element.display = none;
  // Toggle visibility of accordion body on click of title.

  const dataForAccordion = [
    {
      id: 1,
      heading: "accordion1",
      body: "accordion1 body",
    },
    {
      id: 2,
      heading: "accordion2",
      body: "accordion2 body",
    },
    {
      id: 3,
      heading: "accordion3",
      body: "accordion3 body",
    },
  ]

  const [activeAccordionId, setActiveAccordionId] = useState<number | null>(
    null,
  )

  const toggleAccordion = (id: number | null) => {
    setActiveAccordionId(activeAccordionId === id ? null : id)
  }

  return (
    <main className="flex items-center flex-col min-h-screen justify-center p-4 gap-4 select-none">
      {dataForAccordion?.map((item) => {
        return (
          <div
            key={item.id}
            className="border border-gray-400 p-4 w-full cursor-pointer rounded-sm"
          >
            <div
              className="flex justify-between bg-gray-900 p-2 rounded-sm"
              onClick={() => {
                toggleAccordion(item.id)
              }}
            >
              <div>{item.heading}</div>
              <span>-</span>
            </div>

            {activeAccordionId === item.id && (
              <div className="p-2">{item.body}</div>
            )}
          </div>
        )
      })}
    </main>
  )
}
