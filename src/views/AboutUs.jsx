import React from 'react';
import images from "../../public/images.jpg";
import imagess from "../../public/imagess.jpg";
import imagesss from "../../public/imagesss.jpg";
export default function AboutUs() {
  return (
    <section className="text-center mt-4">
      <h2>Purrfect Adoption</h2>
      
      <h3>Our Mission</h3>
      <p>
      At Purrfect Adoption, our mission is to provide a loving and safe environment for cats in need of homes. We are dedicated to rescuing, rehabilitating, and rehoming abandoned and neglected cats, ensuring that every feline receives the care and love they deserve. Our goal is to foster a community of compassion and responsibility towards all animals, encouraging adoption over purchasing pets. Together, we aim to create a world where every cat has a forever home.
      </p>

      <h3>Our History</h3>
      <p>
      Purrfect Adoption was founded in 2024 by a group of passionate animal lovers who recognized the urgent need for a dedicated shelter for cats. Since our inception, we have rescued thousands of cats, providing them with medical care, socialization, and a nurturing environment until they find their forever homes. Over the years, we have grown from a small grassroots organization into a well-respected shelter, collaborating with local communities and organizations to spread awareness about the importance of adoption. Our journey has been fueled by the love and support of volunteers, donors, and adopters who share our vision of a brighter future for all cats.
      </p>

      <h3>Our Team</h3>
      <div className="row mt-4">
        <div className="col-md-4">
          <div className="team-member">
          <div className="w-48 h-48 mx-auto">
              <img
                src={images}
                alt="Srabani Mitra"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <h4>Srabani</h4>
            <p>Director</p>
           
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-member">
          <div className="w-48 h-48 mx-auto">
              <img
                src={imagess}
                alt="aDIBA"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
            <h4>Adiba</h4>
            <p>Manager</p>
            
          </div>
        </div>
        <div className="col-md-4">
          <div className="team-member">
          <div className="w-48 h-48 mx-auto">
              <img
                src={imagesss}
                alt="Prova"
                className="w-full h-full object-cover rounded-full shadow-md"
              />
            </div>
        
            <h4>Prova</h4>
            <p>Volunteer Coordinator</p>
           
          </div>
        </div>
      </div>
    </section>
  );
}