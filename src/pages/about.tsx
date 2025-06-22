import React from 'react';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <>
      <Head>
        <title>About Us - One Stop Home</title>
        <meta name="description" content="Learn about One Stop Home's mission, vision, and journey in connecting service providers with customers across India." />
      </Head>

      <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About Us</h1>

          <div className="space-y-8 bg-white p-8 rounded-lg shadow-md">
            {/* Who We Are Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Who We Are</h2>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-medium italic">"The currency of real networking is not greed but generosity"</span> is a famous quotation by philanthropist and author - Keith Ferraz. It is also the target of our company, what we want to accomplish in the coming few years. We wish to establish a successful network between consumers and Vendors for home services offered all over India. You can find various experienced service providers available in real-time on our platform to cater to your home service needs.
              </p>
            </section>

            {/* Our Vision Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                By establishing a safe and secure connection between service providers and customers, One Stop Home focuses on creating value for all local trade. So does the slogan - <span className="font-medium">Go Vocal for Local</span> - perfectly align with our vision as our objective also includes promoting local service providers.
              </p>
            </section>

            {/* Our Mission Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                We aim to become the no. 1 marketplace across PAN India where local service providers can be registered. We want to provide a single place where all the service providers of one city can enlist with us, and customers can quickly locate them according to their needs. A substantial number of businesses have already been recognized on One Stop Home and is growing with every passing day. We want to become India's most cherished and happy platform that provides real-time local home service providers to ease customer's daily hustle.
              </p>
            </section>

            {/* Our Journey Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                One Stop Home came into existence as a brainchild of our visionary <span className="font-medium">Founder & CEO - Abhinav Sharma</span> and our dynamic <span className="font-medium">Founder - Amit Kumar</span>. They once experienced first-hand unavailability of service provider issues. This incident made them realize the urgent need to build a platform for local search services available to users across India and websites. Our Company came under operation in the year <span className="font-medium">2021</span> with the vision of bridging the gap between users and service providers.
              </p>
            </section>

            {/* How We Work Section */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">How We Work</h2>
              <p className="text-gray-600 leading-relaxed">
                One Stop Home is your premium platform where you can find contact details, ratings and reviews of any professional at-home services you want to avail. It includes a wide span of service providers from electricians, plumbers, beauticians, cleaning, AC/RO/washing machine/refrigerator services, etc. On our prime platform, you are looking at in-depth, well-researched and verified service providers working exclusively in your nearby area. One Stop Home's vision is to provide you with a one-stop shop for your daily needs by offering a user-friendly platform where customers can readily book the service providers in real-time.
              </p>
            </section>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutUs;
