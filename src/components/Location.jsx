import React from 'react';

const Location = () => {
    return (
        <section>
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
                <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl font-extrabold text-white">Visit Our Location</h2>
                    <p className="mt-4 text-lg text-white">
                    We are conveniently located at the Nextgen Building on Mombasa Road, next to EKA Hotel.
                       
                    </p>
                </div>
                <div className="mt-16 lg:mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="rounded-lg overflow-hidden">
                            <iframe
                               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127641.85055377484!2d36.71187392904904!3d-1.289544585144252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11be560b5283%3A0x9dacf93424a76a51!2sThe%20Nextgen%20Mall!5e0!3m2!1sen!2ske!4v1721741267787!5m2!1sen!2ske"
                                width="100%"
                                height="480"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div>
                            <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                                <div className="px-6 py-4">
                                    <h3 className="text-lg  font-medium text-white">Our Address</h3>
                                    <p className="mt-1 text-white">5th Floor, Nextgen Building, Mombasa Road next to EKA Hotel</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Hours</h3>
                                    <p className="mt-1 text-white">Monday - Friday: 9am - 5pm</p>
                                    <p className="mt-1 text-white">Saturday: 10am - 4pm</p>
                                    <p className="mt-1 text-white">Sunday: Closed</p>
                                </div>
                                <div className="border-t border-gray-200 px-6 py-4">
                                    <h3 className="text-lg font-medium text-white">Contact</h3>
                                    <p className="mt-1 text-white"><a href="https://ditechengineering.co.ke:2096">info@ditechengineering.co.ke</a></p>
                                    <p className="mt-1 text-white">Telephone: +254 -20-3517066, +254(0)728 162 245, +254(0)735 162 245</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Location;
