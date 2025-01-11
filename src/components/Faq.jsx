import React from 'react'

const faq = [
  {
    question: "1. What courses does Educe Institution offer?",
    answer: "We offer diploma courses in Office Management (DOM), Advanced Accounting (DAA), and Corporate Accounting (DCA), along with specialized programs like Spoken English, Advanced Excel, and more."
  }, {
    question: "2. Are the courses job-oriented?",
    answer: "Yes, our courses are designed to equip students with practical, industry-relevant skills to prepare them for the job market."
  }, {
    question: "3. Do you offer any discounts on course fees?",
    answer: "Yes, we frequently provide discounted fees on select courses. Check our current offerings for details."
  }, {
    question: "4. How do I enroll?",
    answer: "You can visit our institution or contact us via phone or email to complete your enrollment process."
  }
]

const Faq = () => {

  return (
    <section className="py-16 lg:px-60 px-4" >
      <p className='text-center text-xl font-semibold text-primarypink'>Faq</p>
      <h1 className='text-3xl font-semibold font-quicksand text-primarydarkblue text-center mb-5 '>Frequently Asked Questions</h1>
      <div
        className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white dark:divide-gray-800 dark:border-gray-800 dark:bg-gray-900"
      >
        {
          faq.map((faq) => (
            <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" >
              <summary
                className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
              >
                <h2 className="text-lg font-medium">{faq.question}</h2>

                <span className="relative size-5 shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </summary>

              <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
                {faq.answer}
              </p>
            </details>
          ))
        }

        {/* <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
          <summary
            className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900 dark:text-white"
          >
            <h2 className="text-lg font-medium">Lorem ipsum dolor sit amet consectetur adipisicing?</h2>

            <span className="relative size-5 shrink-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </summary>

          <p className="mt-4 leading-relaxed text-gray-700 dark:text-gray-200">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
            recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
            consequuntur distinctio corporis earum similique!
          </p>
        </details> */}
      </div>
    </section>
  )
}

export default Faq
