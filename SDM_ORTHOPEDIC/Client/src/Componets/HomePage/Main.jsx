import './Main.css';
import main2 from "../../assets/Images/Main3.jpg"
import CountUp from 'react-countup';
import { useEffect, useState } from 'react';

export default function Main() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector('.section-counter');
      if (section) {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-sky-600">
        <div className="lg:grid lg:grid-cols-2">
          <div className="py-24 px-10 lg:px-0 max-w-3xl lg:max-w-md mx-auto">
            <h2 className="text-4xl tracking-tight font-extrabold text-gray-100">
              <span className="block">Welcome To</span>
              <span className="block">SDM Orthopedic.</span>
            </h2>
            <p className="text-gray-300 mt-5">
              The overall healthcare system in most Asian countries is relatively poorer than countries in Europe
              and North America. However, India is known for producing the best minds in international medicine
              and science generally. At SDM Orthopaedic, our goal is to make world-class orthopaedic products
              easily accessible for new and existing doctors, medical centres or hospitals, partners in India.
              Our products are supplied all over India. SDM Orthopedic is a high-quality orthopedic instruments & implants
              manufacturing unit in India. We manufacture a wide range of Spine implants
              and instruments. SDM is FDA Certified.
            </p>
            <div className="inline-block shadow mt-5">
              <a
                href="/about"
                className="inline-block py-3 px-4 bg-white hover:bg-blue-100 text-indigo-500 font-medium border border-transparent rounded-md"
              >
                About Us
              </a>
            </div>
          </div>
          <div className="lg:relative lg:mt-16">
            <img
              className="lg:absolute lg:inset-0 h-60 w-full lg:h-full object-cover object-center lg:rounded-tl-md"
              src={main2}
              alt="Spine"
            />
          </div>
        </div>
      </div>

      <section className="section-counter py-12 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                {isVisible && <CountUp end={20} duration={2} />}
              </b>
              <span className="text-xl font-semibold">+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Years of Excellence</p>
          </div>

          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                {isVisible && <CountUp end={2} duration={2} />}
              </b>
              <span className="text-xl font-semibold">k+</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Products</p>
          </div>

          <div className="single-counter animate__animated animate__fadeInUp flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
            <div className="inner flex items-baseline">
              <b className="counter text-4xl font-bold">
                {isVisible && <CountUp end={100} duration={2} />}
              </b>
              <span className="text-xl font-semibold">%</span>
            </div>
            <p className="mt-2 text-center text-gray-700">Satisfied Clients</p>
          </div>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13987.204181124724!2d77.27600120000001!3d28.785193500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cff0fa36ae7c9%3A0xb2767678a349a48b!2sSdm%20Orthopaedic!5e0!3m2!1sen!2sin!4v1722071985989!5m2!1sen!2sin"
          width="1197"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
}
