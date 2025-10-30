import React from "react";
import { motion } from "framer-motion";

export default function TermsConditions() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12 mt-20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms and Conditions</h1>
          
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Introduction</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions govern your use of the Zafar Suits Designer website and the purchase of products from our store. 
              By accessing our website and placing an order, you agree to be bound by these Terms and Conditions.
            </p>
            <p className="text-gray-700 mb-6">
              Please read these Terms and Conditions carefully before using our services. If you do not agree with any part of these terms, 
              you must not use our website or services.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Definitions</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>"Company", "we", "us", or "our" refers to Zafar Suits Designer.</li>
              <li>"Website" refers to www.zafarsuits.com.</li>
              <li>"Customer", "you", or "your" refers to the person accessing the website and/or placing an order.</li>
              <li>"Products" refers to the items offered for sale on our website.</li>
              <li>"Order" refers to a request to purchase products from us.</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Products and Pricing</h2>
            <p className="text-gray-700 mb-4">
              All products displayed on our website are subject to availability. We reserve the right to discontinue any product at any time.
            </p>
            <p className="text-gray-700 mb-4">
              Prices for our products are subject to change without notice. We reserve the right to modify or discontinue any product without notice.
            </p>
            <p className="text-gray-700 mb-4">
              We make every effort to display as accurately as possible the colors and images of our products. However, we cannot guarantee that your 
              computer monitor's display of any color will be accurate.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Orders and Payment</h2>
            <p className="text-gray-700 mb-4">
              When you place an order, you are making an offer to purchase the products you have selected. We reserve the right to accept or decline your order.
            </p>
            <p className="text-gray-700 mb-4">
              Payment must be made in full at the time of placing an order. We accept various payment methods as indicated on our website.
            </p>
            <p className="text-gray-700 mb-4">
              All prices are inclusive of applicable taxes unless otherwise stated.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Shipping and Delivery</h2>
            <p className="text-gray-700 mb-4">
              Delivery times are estimates only and commence from the date of shipping, not the date of order.
            </p>
            <p className="text-gray-700 mb-4">
              We are not responsible for delays in delivery due to customs processing, local duties or taxes, or circumstances outside our control 
              such as natural disasters, severe weather, or civil unrest.
            </p>
            <p className="text-gray-700 mb-4">
              Risk of loss and title for items purchased pass to you upon delivery of the items to the carrier.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Returns and Refunds</h2>
            <p className="text-gray-700 mb-4">
              You may return new, unopened items within 30 days of delivery for a full refund. We'll also pay the return shipping costs if the return 
              is a result of our error.
            </p>
            <p className="text-gray-700 mb-4">
              Custom-made or personalized items cannot be returned unless they are defective or damaged upon receipt.
            </p>
            <p className="text-gray-700 mb-4">
              To initiate a return, please contact our customer service team with your order number and details about the product you wish to return.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              All content on our website, including text, graphics, logos, images, and software, is the property of Zafar Suits Designer 
              and is protected by copyright and other intellectual property laws.
            </p>
            <p className="text-gray-700 mb-4">
              You may not reproduce, distribute, modify, or create derivative works from any content on our website without our express written consent.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">User Accounts</h2>
            <p className="text-gray-700 mb-4">
              You may need to create an account to use certain features of our website. You are responsible for maintaining the confidentiality 
              of your account information and for all activities that occur under your account.
            </p>
            <p className="text-gray-700 mb-4">
              You agree to provide accurate and complete information when creating an account and to update your information to keep it accurate and current.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall Zafar Suits Designer be liable for any indirect, incidental, special, consequential, or punitive damages, 
              including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
            <p className="text-gray-700 mb-4">
              Our liability is limited to the maximum extent permitted by law.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms and Conditions shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles.
            </p>
            <p className="text-gray-700 mb-6">
              Any dispute arising under or relating to these Terms and Conditions shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-amber-800 mb-4">Contact Us</h2>
            <p className="text-gray-700 mb-6">
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <div className="text-gray-700">
              <p>Zafar Suits Designer</p>
              <p>123 Fashion Street, Design District</p>
              <p>Mumbai, India 400001</p>
              <p>Email: legal@zafarsuits.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
          </div>

          <div className="text-center mt-8 text-gray-600">
            <p>Last Updated: June 15, 2023</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}