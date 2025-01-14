

// import React, { Suspense } from 'react';
// import { styles } from './components/HandingAnimation';
// import { Helmet } from 'react-helmet';
// import GoogleSiteVerification from './components/GoogleSiteVerification';
// const Navbar = React.lazy(() => import('./components/Navbar'));
// const Landing = React.lazy(() => import('./components/Landing'));
// const About = React.lazy(() => import('./components/About'));
// const Courses = React.lazy(() => import('./components/Courses'));
// const Testimonials = React.lazy(() => import('./components/Testimonials'));
// const Faq = React.lazy(() => import('./components/Faq'));
// const Footer = React.lazy(() => import('./components/Footer'));
// const Contact = React.lazy(() => import('./components/Contact'));

// const App = () => {
//   return (
//     <main>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <title>Educe Institution</title>
//         <meta
//           name="description"
//           content="Educe Institution offers world-class education, empowering students with knowledge and skills for a brighter future."
//         />
//         <link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Helmet>
//       <GoogleSiteVerification />
//       <style>{styles}</style>
//       <Suspense fallback={<div className='flex items-center m-auto mt-[50%]  justify-center w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin'></div>}>
//         <Navbar />
//         <Landing />
//         <About />
//         <Courses />
//         <Testimonials />
//         <Faq />
//         <Contact />
//         <Footer />
//       </Suspense>
//     </main>
//   );
// };

// export default App;



import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet';
import GoogleSiteVerification from './components/GoogleSiteVerification'; // If you want to keep this.

const App = () => {
  return (
    <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Educe Institution</title>
        <meta
          name="description"
          content="Educe Institution offers world-class education, empowering students with knowledge and skills for a brighter future."
        />
        <link rel="icon" type="image/svg+xml" href="/public/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add Google Site Verification Meta Tag */}
        <meta
          name="google-site-verification"
          content="TyRDl7OUllPsk6iXi-3536sUsALBBGYrpfcZe8ZJ6VI"
        />
      </Helmet>
      <GoogleSiteVerification />
      {/* Your components */}
      <Suspense
        fallback={
          <div className="flex items-center m-auto mt-[50%] justify-center w-12 h-12 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
        }
      >
        {/* Add your components */}
      </Suspense>
    </main>
  );
};

export default App;
