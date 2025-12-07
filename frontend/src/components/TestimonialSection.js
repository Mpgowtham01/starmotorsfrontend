import React from "react";
import "./TestimonialSection.css";

export default function TestimonialSection() {
  const testimonials = [
    {
      img: "https://scontent-maa3-1.xx.fbcdn.net/v/t39.30808-6/472095336_3729792897285720_782623845681350279_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=TepATjUqZ0cQ7kNvwHgwxcg&_nc_oc=Adl9FroDMFDw92xTm9erZZ2clyWoem2G2wRuPsgCzT9xnz-THLY-NeLWMVoI9MLqV1r16v2ZY-i3ntpslrbZWuu7&_nc_zt=23&_nc_ht=scontent-maa3-1.xx&_nc_gid=fMXLDbnnBDGO_AueZHTc4w&oh=00_Afka6YAns7_GkSS1tIJX1U1t2zHe6k2DzK0MU-N5B7uveQ&oe=693B8CC9",
      name: "Gowtham",
      rating: 5.0,
      text: "RoamPrime exceeded my expectations with their exceptional customer service.",
    },
    {
      img: "https://scontent-maa3-4.xx.fbcdn.net/v/t1.6435-9/120036303_670937853555118_5977814022545098874_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=elOO3I6tEmEQ7kNvwEXbpT9&_nc_oc=Adnwxcvlt7F5Y-Kd02HBUHDfliHDS_OM3EqMKzWVr7QOPuNhbSvFr2eYMJhreU_IDBZuRVWLsAN5BoPfDziSe20-&_nc_zt=23&_nc_ht=scontent-maa3-4.xx&_nc_gid=bS4tjZ-1M_wAhlOGYc6IrQ&oh=00_AfkVfm2wfO1rEjfAzXfsZ61StigCIOzfj5hNnqoLfyUxwA&oe=695D3DBD",
      name: "Abilash",
      rating: 5.0,
      text: "Good condition vehicle and people cooperation was also good.",
    },
    {
      img: "https://scontent-maa3-3.xx.fbcdn.net/v/t1.6435-9/44460883_176789483255477_4505487166712840192_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=aDI7-HBr_rAQ7kNvwHyq3nb&_nc_oc=AdlbYUqTLVK0896ed21viXvpQ2GzW9kXttTYVJBvOKjhWNUK6fHSAOTt-X1ia3TEFfA17_DAwlXODLhQllQVf4oE&_nc_zt=23&_nc_ht=scontent-maa3-3.xx&_nc_gid=1c9ELLXi9_1AteAnAZrHEg&oh=00_AfllPgXEkATgQ5Vuh1GEFUFkzhODSeuQirau6qCMdJbAmg&oe=695D2F02",
      name: "Karthick",
      rating: 5.0,
      text: "Roamprime is selling very low price than other second-hand bike sellers.",
    },
  ];

  return (
    <div className="testimonial-container">
      <h2 className="testimonial-title">Stories that keep us going!</h2>

      <div className="testimonial-grid">
        {testimonials.map((item, index) => (
          <div className="testimonial-card" key={index}>
            <div className="testimonial-img-wrapper">
              <img src={item.img} alt={item.name} className="testimonial-img" />
            </div>

            <h3 className="testimonial-name">{item.name}</h3>

            <div className="testimonial-rating">
              <span className="rating-number">{item.rating.toFixed(1)}</span>
              <span className="stars">★★★★★</span>
            </div>

            <p className="testimonial-text">"{item.text}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
