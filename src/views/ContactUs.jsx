import React, { useState } from 'react';

export default function ContactUs() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Thank you for contacting us, ${name}!`);

    // Reset form fields
    setName('');
    setPhone('');
    setEmail('');
  };

  return (
    <section className="text-center mt-4">
      <h2>Purrfect Adoption</h2>
      <p>Contact us</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Maecenas leo lorem, tincidunt et, consectetur adipiscing.
      </p>

      <form onSubmit={handleSubmit} className="mt-4  w-60 h-10">
        <div className="mb-3">
          <input 
            type="text" 
            placeholder="Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="form-control text-center bg-pink-100 placeholder-pink-400 py-1 px-2 rounded-md w-60 h-10" 
            required 
          />
        </div>
        <div className="mb-3  w-60 h-10">
          <input 
            type="tel" 
            placeholder="Phone" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            className="form-control text-center bg-pink-100 placeholder-pink-400 py-1 px-2 rounded-md w-60 h-10" 
            required 
          />
        </div>
        <div className="mb-3">
          <input 
            type="email" 
            placeholder="Email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="form-control text-center bg-pink-100 placeholder-pink-400 py-1 px-2 rounded-md w-60 h-10" 
            required 
          />
        </div>
        <button type="submit" className="btn btn-primary bg-pink-200 rounded-xl">Submit</button>
      </form>
    </section>
  );
}
