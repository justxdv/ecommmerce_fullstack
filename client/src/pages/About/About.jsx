import React from "react";
import "./about.css";

const About = () => {
  return (
    <>
              <div className="about__page">
                {/* 1st verse */}
                <div className="row flex">
                  <div className="col__2">
                    <img src="https://images.pexels.com/photos/7097/people-coffee-tea-meeting.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                  <div className="col__2">
                    <div className="meta">
                      <span
                        style={{
                          fontSize: "40px",
                          fontWeight: "700",
                          lineHeight: "1.2",
                          
                        }}
                      >
                        Welcome to La Galarie
                      </span>
                      <p>
                        We are a leading online retailer offering the latest
                        fashion trends at affordable prices. Our mission is to
                        provide our customers with a seamless shopping
                        experience that combines convenience, quality, and
                        style. Since our launch, we have been committed to
                        bringing you the best in fashion, with a wide range of
                        clothing, shoes, and accessories for women, men, and
                        children. Our collections are inspired by the latest
                        runway shows, as well as street style and customer
                        feedback, ensuring that we always stay on-trend.
                      </p>
                      <p>
                        We pride ourselves on our commitment to sustainability
                        and ethical practices. We believe that fashion should
                        not come at the cost of the environment or human rights.
                        That's why we are constantly seeking out new ways to
                        reduce our environmental footprint and improve the
                        working conditions of those who produce our products.
                        Our website is easy to navigate, with clear categories
                        and filters to help you find exactly what you're looking
                        for. We offer free shipping on all orders over [insert
                        amount], as well as easy returns and exchanges. Our
                        customer service team is available 24/7 to answer any
                        questions you may have. Thank you for choosing [Your
                        E-Commerce Website] as your go-to destination for
                        fashion online. We look forward to serving you and
                        helping you look and feel your best!
                      </p>
                    </div>
                  </div>
                </div>

                {/* 2nd verse */}
                <div className="second">
                  <div className="heading">
                    <h2>What We Provide?</h2>
                  </div>
                  <div className="row flex">
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" />
                        </div>
                        <span>Best Prices & Offers</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "10px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-2.svg" />
                        </div>
                        <span>Best For Trust & Quality</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-3.svg" />
                        </div>
                        <span>Fast Delivery System</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-4.svg" />
                        </div>
                        <span>Easy Returns Service</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-5.svg" />
                        </div>
                        <span>100% satisfication</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>

                    <div className="col__3">
                      <div
                        style={{
                          padding: "15px",
                          border: "1px solid rgb(0 0 0 / 14%)",
                          minHeight: "230px",
                        }}
                      >
                        <div className="flex align__items__center justify__content__center image">
                          <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-6.svg" />
                        </div>
                        <span>Great Daily Deal</span>
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration
                          in some form
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
  
  );
};
  
export default About;