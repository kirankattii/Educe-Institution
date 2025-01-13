
export default function Contact() {

  return (
    <section id='contact' className="isolate md:mb-20 bg-white px-6 py-24 sm:py-0 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-bold tracking-tight text-primarydarkblue sm:text-4xl font-quicksand">Contact Us Today</h2>
        <p className="mt-1 text-sm md:text-lg text-primarypink leading-tight">Ready to join Educe? Contact us for more information or to enroll today</p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-6 max-w-xl ">
        <div className="grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold text-primarydarkblue">
              Name
            </label>
            <div className="mt-0.5">
              <input
                id="name"
                name="name"
                type="name"
                autoComplete="name"
                placeholder="Your name"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-primarydarkblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primarydarkblue/80"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold text-primarydarkblue">
              Email
            </label>
            <div className="mt-0.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="Your email"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-primarydarkblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primarydarkblue/80"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm/6 font-semibold text-primarydarkblue">
              Phone number
            </label>
            <div className="mt-0.5">
              <div className="flex rounded-md bg-white outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-primarydarkblue/80">

                <input
                  id="phone-number"
                  name="phone-number"
                  type="text"
                  placeholder="+91 12345 67890"
                  className="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-primarydarkblue placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold text-primarydarkblue">
              Message
            </label>
            <div className="mt-0.5">
              <textarea
                id="message"
                name="message"
                rows={2}

                placeholder="Type your message"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-primarydarkblue outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-primarydarkblue/80"
                defaultValue={''}
              />
            </div>
          </div>

        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="block w-full rounded-md bg-slate-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primarydarkblue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </section>
  )
}
