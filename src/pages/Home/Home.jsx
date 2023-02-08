import React, { useState } from "react";
import Signin from "../../components/SignIn/Signin";
import {
  featuresList,
  howList,
  serviceList,
  feedbackList,
  faqList,
} from "../../context/ListData";
import CCardFeatures from "../../components/CCardFeatures/CCardFeatures";
import CCardHow from "../../components/CCardHow/CCardHow";
import CCardServices from "../../components/CCardServices/CCardServices";
import CFeedback from "../../components/CFeedback/CFeedback";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CHeader from "../../components/CHeader/CHeader";
import CFaq from "../../components/CFaq/CFaq";
import "./styled.scss";
import Register from "../../components/Register/Register";

const Home = () => {
  const [form, setForm] = useState("signin");

  return (
    <div className="home">
      <div className="landing">
        <section className="left" data-aos="zoom-in-down">
          <h1>Cheapest, Fast & High Quality Dynamic</h1>
          <span data-aos="zoom-in-down">SMM Panel</span>
          <p>
            Manage all social media networks from one high quality and cheap
            panel. We serve on today's most popular social networks. You can get
            services for Instagram, Twitter, Facebook, YouTube, TikTok, Spotify,
            Telegram and many more platforms.
          </p>
        </section>
        <section className="right">
          {form === "signin" ? (
            <Signin setTab={() => setForm("signup")} />
          ) : (
            <Register setTab={() => setForm("signin")} />
          )}
        </section>
      </div>
      <div className="features">
        <CHeader
          title="Boost your brand reputation"
          des="We are help dominate social media with the largest social media
            panel."
        />

        <div className="fcard">
          {featuresList.length > 0 &&
            featuresList.map((item, i) => {
              return (
                <CCardFeatures
                  icon={item.icon}
                  key={i}
                  description={item.des}
                  title={item.title}
                  aos={item.anim}
                />
              );
            })}
        </div>
      </div>
      <div className="how">
        <CHeader
          title="Manage your social media in its simplest form"
          des="Fast, Quality & Cheapest Advanced SMM Panel"
        />
        <div className="hcard">
          {howList.length > 0 &&
            howList.map((item, i) => {
              return (
                <CCardHow
                  step={item.step}
                  key={i}
                  description={item.des}
                  title={item.title}
                  aos={item.anim}
                />
              );
            })}
        </div>
      </div>
      <div className="social">
        <CHeader
          title="Available Social Media Services"
          des="We always strive to provide the best services possible."
        />
        <div className="cservices">
          {serviceList.length > 0 &&
            serviceList.map((item, i) => {
              return (
                <CCardServices
                  icon={item.icon}
                  key={i}
                  name={item.title}
                  view={item.view}
                  aos={item.anim}
                />
              );
            })}
        </div>
      </div>
      <div className="t-cards">
        <CHeader
          title="Available Social Media Services"
          des="We always strive to provide the best services possible."
        />
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {feedbackList.length > 0 &&
            feedbackList.map((item, i) => {
              return (
                <SwiperSlide>
                  <CFeedback
                    des={item.pos}
                    name={item.name}
                    dp={item.icon}
                    content={item.content}
                    key={i}
                    aos={item.anim}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="frequently">
        <CHeader title="Frequently Asked Questions (FAQ)" />

        <div className="qcard">
          {faqList.length > 0 &&
            faqList.map((item, i) => {
              return (
                <CFaq question={item.quest} answer={item.answer} key={i} />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
