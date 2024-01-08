import React from 'react'
import Footer from './footer'
const about = () => {
  return (
    <>
      <div className="container mx-auto mt-12 p-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">About Our Furniture Store</h1>
      <p className="text-lg leading-relaxed mb-8 text-gray-700">
        Welcome to our online furniture store, where we believe in transforming houses into homes. Our passion for providing quality furniture has driven us to curate a collection that not only reflects style and comfort but also embraces individuality and personal taste.
      </p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Mission</h2>
      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        At <span className="text-brand font-semibold">[Your Furniture Store Name]</span>, our mission is to offer a seamless shopping experience by providing a diverse range of furniture that caters to various tastes and preferences. We aim to help you create a space that truly feels like yours, where every piece of furniture tells a unique story.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Quality Assurance</h2>
      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        We take pride in the quality of our furniture. Each piece is crafted with precision and care, ensuring durability and longevity. We source our materials from reputable suppliers and work with skilled artisans to bring you furniture that stands the test of time.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Customer Satisfaction</h2>
      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        Your satisfaction is our priority. Our dedicated customer support team is here to assist you at every step of your furniture shopping journey. We value your feedback and strive to continuously improve our services to exceed your expectations.
      </p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact Us</h2>
      <p className="text-lg leading-relaxed mb-6 text-gray-700">
        Have questions or need assistance? Feel free to reach out to us. You can contact our customer support team via email at <span className="text-brand font-semibold">saurabhmaurya0025@gmail.com</span> or give us a call at <span className="text-brand font-semibold">7266817216</span>.
      </p>
    </div>

    <Footer/>
    </>
  )
}

export default about
