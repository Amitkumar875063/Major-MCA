import React from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ArrowLeft, Star } from 'lucide-react';

// Sample services data (this would normally come from an API or database)
const servicesData = [
  {
    id: 'electrician',
    title: 'Electrician Services',
    image: '/images/electrician.jpg',
    description: 'Professional electrical services for your home and office needs. Our expert electricians handle installations, repairs, and maintenance with utmost precision and safety standards.',
    longDescription: 'Our electrician services cover everything from minor electrical repairs to complete home rewiring. All our electricians are licensed, insured, and extensively trained to handle any electrical job safely and efficiently. We pride ourselves on providing prompt service, transparent pricing, and high-quality workmanship for all electrical needs.',
    features: [
      'Home Wiring - Complete house wiring solutions',
      'Electrical Repairs - Quick and reliable fixes',
      'Appliance Installation - Safe and secure setup',
      'Electrical Maintenance - Regular upkeep',
      'Safety Inspection - Thorough assessment',
      'Circuit Installation - Professional setup',
      'Emergency Services - 24/7 availability',
      'Lighting Solutions - Modern installations',
      'Electrical Upgrades - System modernization',
      'Smart Home Integration - Latest technology'
    ],
    benefits: [
      'Licensed and insured professionals',
      'Upfront pricing with no hidden fees',
      'Same-day service available',
      'Satisfaction guaranteed',
      'Quality workmanship warranty'
    ],
    pricing: [
      { name: 'Home Wiring', price: 499, duration: '2-3 hours' },
      { name: 'Electrical Repairs', price: 399, duration: '1-2 hours' },
      { name: 'Appliance Installation', price: 599, duration: '1-2 hours' },
      { name: 'Electrical Maintenance', price: 799, duration: '2-4 hours' },
      { name: 'Safety Inspection', price: 299, duration: '1 hour' }
    ],
    faqs: [
      {
        id: 1,
        question: 'How quickly can an electrician reach my location?',
        answer: 'In most areas, we can dispatch an electrician to your location within 30-60 minutes for emergency situations. For scheduled services, we offer same-day or next-day appointments based on availability.'
      },
      {
        id: 2,
        question: 'Are your electricians licensed and insured?',
        answer: 'Yes, all our electricians are fully licensed, insured, and have undergone extensive background checks. They are also regularly trained on the latest electrical codes and safety practices.'
      },
      {
        id: 3,
        question: 'Do you provide warranties for your electrical work?',
        answer: 'Yes, we offer a 100% satisfaction guarantee on all our electrical services. Additionally, we provide a workmanship warranty of up to 1 year on most installations and repairs.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Raj Kumar',
        rating: 5,
        comment: 'Excellent service! The electrician arrived on time, diagnosed and fixed the issue quickly, and left the area clean. Very professional and knowledgeable.'
      },
      {
        id: 2,
        user: 'Priya Singh',
        rating: 4,
        comment: 'Good service overall. The work was done well but took longer than expected. The electrician was very thorough in explaining what needed to be done.'
      }
    ]
  },
  {
    id: 'plumber',
    title: 'Plumbing Services',
    image: '/images/plumber.jpg',
    description: 'Expert plumbing solutions for your home and office. Our professional plumbers handle all types of plumbing issues with precision.',
    longDescription: 'Our comprehensive plumbing services cover everything from minor repairs to major installations. Our team of skilled plumbers is equipped to handle any plumbing challenge, ensuring your water systems work efficiently and reliably.',
    features: [
      'Pipe Repairs - Quick leak fixes',
      'Fixture Installation - Professional setup',
      'Drain Cleaning - Thorough unclogging',
      'Plumbing Maintenance - Regular service',
      'Emergency Repairs - 24/7 support',
      'Water Heater Service - Expert care',
      'Bathroom Plumbing - Complete solutions',
      'Kitchen Plumbing - Efficient fixes',
      'Sewer Line Service - Deep cleaning',
      'Water Line Installation - New setups'
    ],
    benefits: [
      'Experienced and certified plumbers',
      'Transparent pricing structure',
      'Emergency services available',
      'Quality parts and materials',
      'Cleanliness guaranteed'
    ],
    pricing: [
      { name: 'Pipe Repairs', price: 449, duration: '1-2 hours' },
      { name: 'Fixture Installation', price: 549, duration: '2-3 hours' },
      { name: 'Drain Cleaning', price: 399, duration: '1-2 hours' },
      { name: 'Plumbing Maintenance', price: 699, duration: '2-4 hours' },
      { name: 'Emergency Service', price: 799, duration: 'ASAP' }
    ],
    faqs: [
      {
        id: 1,
        question: 'Do you provide emergency plumbing services?',
        answer: 'Yes, we offer 24/7 emergency plumbing services. Our team can typically reach your location within 60 minutes for urgent issues.'
      },
      {
        id: 2,
        question: 'What types of plumbing issues do you handle?',
        answer: 'We handle all types of plumbing issues including leaks, clogs, installations, repairs, and maintenance for both residential and commercial properties.'
      },
      {
        id: 3,
        question: 'Do you provide warranties on plumbing work?',
        answer: 'Yes, we offer warranties on both our workmanship and the parts we use. The warranty period varies depending on the type of service provided.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Amit Verma',
        rating: 5,
        comment: 'Very prompt and professional service. Fixed our leaking pipe quickly and at a reasonable price.'
      },
      {
        id: 2,
        user: 'Meera Reddy',
        rating: 5,
        comment: 'Excellent emergency service! The plumber came within 30 minutes and fixed our blocked drain.'
      }
    ]
  },
  {
    id: 'cleaning',
    title: 'Home Cleaning Services',
    image: '/images/cleaning.jpg',
    description: 'Professional home cleaning services for a spotless and healthy living environment.',
    longDescription: 'Our comprehensive cleaning services ensure your home is thoroughly cleaned and sanitized. We use eco-friendly products and professional equipment to deliver exceptional results.',
    features: [
      'Deep Cleaning - Thorough service',
      'Regular Cleaning - Scheduled maintenance',
      'Kitchen Deep Clean - Detailed cleaning',
      'Bathroom Deep Clean - Sanitization',
      'Carpet Cleaning - Professional care',
      'Window Cleaning - Crystal clear results',
      'Upholstery Cleaning - Deep cleaning',
      'Post Construction Clean - Detailed service',
      'Move In/Out Clean - Fresh start',
      'Special Event Clean - Perfect preparation'
    ],
    benefits: [
      'Trained and verified cleaners',
      'Eco-friendly cleaning products',
      'Flexible scheduling options',
      'Satisfaction guaranteed',
      'Insured service'
    ],
    pricing: [
      { name: 'Deep Cleaning', price: 1999, duration: '6-8 hours' },
      { name: 'Regular Cleaning', price: 999, duration: '3-4 hours' },
      { name: 'Kitchen Deep Clean', price: 799, duration: '2-3 hours' },
      { name: 'Bathroom Deep Clean', price: 599, duration: '1-2 hours' },
      { name: 'Carpet Cleaning', price: 699, duration: '2-3 hours' }
    ],
    faqs: [
      {
        id: 1,
        question: 'What is included in deep cleaning service?',
        answer: 'Our deep cleaning service includes thorough cleaning of all rooms, including hard-to-reach areas, appliances, windows, and fixtures. We also focus on removing tough stains and sanitizing surfaces.'
      },
      {
        id: 2,
        question: 'Are your cleaning products safe?',
        answer: 'Yes, we use eco-friendly and child-safe cleaning products. If you have specific preferences or allergies, we can accommodate special requests.'
      },
      {
        id: 3,
        question: 'Can I schedule regular cleaning services?',
        answer: 'Yes, we offer weekly, bi-weekly, and monthly cleaning packages. Regular clients receive priority scheduling and special rates.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Sneha Gupta',
        rating: 5,
        comment: 'Outstanding deep cleaning service! My house has never looked better. The team was thorough and professional.'
      },
      {
        id: 2,
        user: 'Karan Shah',
        rating: 4,
        comment: 'Regular cleaning service is consistently good. Always on time and very detailed in their work.'
      }
    ]
  },
  {
    id: 'carpentry',
    title: 'Carpentry Services',
    image: '/images/carpentry.jpg',
    description: 'Expert carpentry services for all your furniture and woodwork needs.',
    longDescription: 'Our skilled carpenters provide comprehensive woodworking services, from furniture repair to custom installations. We combine traditional craftsmanship with modern techniques to deliver exceptional results.',
    features: [
      'Furniture Repair - Expert restoration',
      'Furniture Assembly - Professional setup',
      'Custom Woodwork - Unique designs',
      'Door Installation - Perfect fit',
      'Cabinet Work - Custom solutions',
      'Wooden Flooring - Quality installation',
      'Window Frames - Precise fitting',
      'Shelving Units - Custom storage',
      'Wood Restoration - Careful refinishing',
      'Deck Repair - Outdoor solutions'
    ],
    benefits: [
      'Experienced craftsmen',
      'Quality materials used',
      'Custom design options',
      'Timely completion',
      'Clean work environment'
    ],
    pricing: [
      { name: 'Furniture Repair', price: 599, duration: '1-3 hours' },
      { name: 'Furniture Assembly', price: 499, duration: '2-4 hours' },
      { name: 'Custom Woodwork', price: 1499, duration: 'Varies' },
      { name: 'Door Repair/Install', price: 799, duration: '2-3 hours' },
      { name: 'Cabinet Work', price: 999, duration: '3-5 hours' }
    ],
    faqs: [
      {
        id: 1,
        question: 'Can you match existing woodwork?',
        answer: 'Yes, our carpenters are skilled in matching existing wood types, stains, and finishes to ensure seamless integration with your current furniture or installations.'
      },
      {
        id: 2,
        question: 'Do you provide custom furniture services?',
        answer: 'Yes, we offer custom furniture design and creation services. We work closely with clients to bring their vision to life while ensuring functionality and durability.'
      },
      {
        id: 3,
        question: 'What types of wood do you work with?',
        answer: 'We work with all types of wood including teak, oak, pine, and mahogany. We can recommend the best wood type based on your project requirements and budget.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Rahul Mehta',
        rating: 5,
        comment: 'Excellent craftsmanship! The custom cabinet work exceeded my expectations. Very professional service.'
      },
      {
        id: 2,
        user: 'Anita Desai',
        rating: 5,
        comment: 'Great furniture repair service. They restored my antique table perfectly. Very knowledgeable and skilled team.'
      }
    ]
  },
  {
    id: 'painting',
    title: 'Painting Services',
    image: '/images/painting.jpg',
    description: 'Professional painting services for interior and exterior surfaces.',
    longDescription: 'Our painting services transform your spaces with precision and style. We use premium paints and modern techniques to ensure a lasting, beautiful finish for your home or office.',
    features: [
      'Interior Painting - Perfect finish',
      'Exterior Painting - Weather-resistant',
      'Touch-up Painting - Quick fixes',
      'Wallpaper Installation - Expert application',
      'Texture Painting - Unique patterns',
      'Wall Preparation - Smooth base',
      'Color Consultation - Expert advice',
      'Eco-friendly Options - Safe paints',
      'Special Effects - Custom looks',
      'Protective Coating - Long-lasting'
    ],
    benefits: [
      'Professional painters',
      'Premium quality paints',
      'Clean and safe process',
      'Color consultation included',
      'Long-lasting results'
    ],
    pricing: [
      { name: 'Interior Painting', price: 1499, duration: '1-2 days' },
      { name: 'Exterior Painting', price: 2499, duration: '2-3 days' },
      { name: 'Touch-up Painting', price: 599, duration: '2-4 hours' },
      { name: 'Wallpaper Installation', price: 999, duration: '4-6 hours' },
      { name: 'Texture Painting', price: 1299, duration: '1-2 days' }
    ],
    faqs: [
      {
        id: 1,
        question: 'What type of paints do you use?',
        answer: 'We use premium quality paints from trusted brands. We offer both water-based and oil-based options, and can recommend the best type based on your needs.'
      },
      {
        id: 2,
        question: 'How long does a painting job take?',
        answer: 'The duration varies based on the size and complexity of the project. A standard room typically takes 1-2 days, while exterior painting may take 2-3 days.'
      },
      {
        id: 3,
        question: 'Do you provide color consultation?',
        answer: 'Yes, our experts provide free color consultation to help you choose the perfect colors for your space. We consider lighting, room size, and your preferences.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Vikram Malhotra',
        rating: 5,
        comment: 'Fantastic painting job! The team was very professional and the finish is perfect. They completed the work ahead of schedule.'
      },
      {
        id: 2,
        user: 'Neha Kapoor',
        rating: 4,
        comment: 'Great attention to detail in their work. The color consultation was very helpful. Clean and efficient service.'
      }
    ]
  },
  {
    id: 'ac-repair',
    title: 'AC Repair Services',
    image: '/images/ac-repair.jpg',
    description: 'Professional AC repair and maintenance services for all brands.',
    longDescription: 'Our AC repair services cover all aspects of air conditioning maintenance and repair. Our certified technicians are trained to work on all major brands and models, ensuring your AC runs efficiently.',
    features: [
      'AC Servicing - Regular maintenance',
      'AC Repair - Expert solutions',
      'AC Installation - Professional setup',
      'Gas Refilling - Proper charging',
      'Annual Maintenance - Yearly care',
      'Performance Check - Efficiency test',
      'Part Replacement - Genuine parts',
      'Noise Reduction - Quiet operation',
      'Energy Optimization - Cost saving',
      'Emergency Repairs - Quick response'
    ],
    benefits: [
      'Certified technicians',
      'All brands serviced',
      'Genuine spare parts',
      'Emergency services',
      'Warranty on service'
    ],
    pricing: [
      { name: 'AC Servicing', price: 699, duration: '1-2 hours' },
      { name: 'AC Repair', price: 899, duration: '2-3 hours' },
      { name: 'AC Installation', price: 1499, duration: '3-4 hours' },
      { name: 'Gas Refilling', price: 999, duration: '1-2 hours' },
      { name: 'Annual Maintenance', price: 2499, duration: 'Yearly' }
    ],
    faqs: [
      {
        id: 1,
        question: 'How often should I service my AC?',
        answer: 'We recommend servicing your AC at least twice a year - before summer and after monsoon. Regular servicing ensures efficient operation and longer life.'
      },
      {
        id: 2,
        question: 'Do you service all AC brands?',
        answer: 'Yes, our technicians are trained to work on all major AC brands including Voltas, Blue Star, Daikin, LG, Samsung, and more.'
      },
      {
        id: 3,
        question: 'What is included in AC servicing?',
        answer: 'Our AC service includes cleaning of filters and coils, checking gas pressure, electrical connections, thermostat calibration, and overall performance optimization.'
      }
    ],
    reviews: [
      {
        id: 1,
        user: 'Arun Kumar',
        rating: 5,
        comment: 'Very professional AC service. The technician was knowledgeable and fixed the cooling issue quickly.'
      },
      {
        id: 2,
        user: 'Sanjay Joshi',
        rating: 4,
        comment: 'Good service for AC maintenance. They explained the issues clearly and provided useful tips for AC care.'
      }
    ]
  }
];

const ServiceDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the service with the matching ID
  const service = servicesData.find(s => s.id === id);

  // If the service is not found or the page is still loading, show a loading state
  if (!service) {
    if (router.isFallback) {
      return <div className="container mx-auto px-6 py-12 text-center">Loading...</div>;
    }

    return (
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Service not found</h1>
        <p className="mb-6">The service you're looking for doesn't exist or has been removed.</p>
        <Link href="/services" passHref>
          <Button>
            <ArrowLeft className="mr-2" size={16} /> Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{service.title} - One Stop Home</title>
        <meta name="description" content={service.description.substring(0, 160)} />
      </Head>

      <div className="bg-gray-50 min-h-screen">
        {/* Navigation Bar */}
        <div className="bg-white border-b py-4">
          <div className="container mx-auto px-6">
            <Link href="/services" className="flex items-center text-purple-600 hover:text-purple-800 font-medium">
              <ArrowLeft className="mr-2" size={16} /> Back to Services
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative">
          {/* Service Image */}
          <div className="relative w-full h-64 mb-8 rounded-lg overflow-hidden">
            <div className="relative h-80 w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black opacity-50" />
            </div>
          </div>

          {/* Content */}
          <div className="container mx-auto px-6">
            <div className="relative -mt-24 bg-white rounded-lg shadow-xl p-8 mb-8">
              <Badge className="mb-4 bg-purple-100 text-purple-800 text-sm px-3 py-1">
                Home Services
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{service.title}</h1>
              <p className="text-gray-600 text-lg mb-6">{service.description}</p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link href="/book">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content - 2/3 width on desktop */}
            <div className="lg:col-span-2">
              {/* About Service */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-4">About Our {service.title}</h2>
                <p className="text-gray-700 mb-6">{service.longDescription}</p>

                <h3 className="text-xl font-semibold mb-3">Services We Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start">
                      <CheckCircle size={18} className="text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-3">Why Choose Us</h3>
                <div className="space-y-3 mb-6">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start">
                      <CheckCircle size={18} className="text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQs */}
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                  {service.faqs.map((faq) => (
                    <div key={`faq-${faq.id}`} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Reviews */}
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
                <div className="space-y-6">
                  {service.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-medium">{review.user}</div>
                      </div>
                      <div className="flex items-center mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={`star-${review.id}-${star}`}
                            size={16}
                            className={star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <p className="text-gray-600">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - 1/3 width on desktop */}
            <div>
              {/* Pricing Card */}
              <Card className="mb-6 sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Service Pricing</h2>
                  <p className="text-gray-600 mb-4">Our transparent pricing ensures you know exactly what you're paying for. No hidden fees.</p>

                  <div className="space-y-3 mb-6">
                    {service.pricing.map((item) => (
                      <div key={item.name} className="flex justify-between items-center pb-2 border-b border-gray-100">
                        <span className="text-gray-700">{item.name}</span>
                        <div>
                        <span className="font-bold text-purple-700">₹{item.price}</span>
                        <span className="text-sm text-gray-500 ml-2">{item.duration}</span>
                      </div>
                      </div>
                    ))}
                    <p className="text-xs text-gray-500 mt-2">* Prices may vary based on service complexity</p>
                  </div>

                  <Link href="/book">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 mb-3">
                      Book Service Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Need Help?</h2>
                  <p className="text-gray-600 mb-4">
                    Our customer support team is available 24/7 to answer any questions you might have about our services.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Phone:</span>
                      <span className="text-purple-600">+91 98765 43210</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium mr-2">Email:</span>
                      <span className="text-purple-600">support@onestophome.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailPage;
