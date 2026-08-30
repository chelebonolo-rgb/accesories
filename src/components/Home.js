import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Premium Jewellery',
    description: 'Curated gold, silver, and handmade pieces designed to elevate every outfit.',
    icon: '✦',
  },
  {
    title: 'Fashion Accessories',
    description: 'Statement bags, scarves, sunglasses, and everyday essentials for stylish living.',
    icon: '◌',
  },
  {
    title: 'Personal Styling',
    description: 'Expert guidance to match your look, personality, and event with the right pieces.',
    icon: '✧',
  },
];

function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Accessorize with confidence</p>
          <h1>Your everyday style, elevated.</h1>
          <p className="hero-text">
            Discover elegant accessories that blend quality, personality, and practical beauty.
            From statement jewellery to polished finishing touches, we bring trend-led style to
            every moment.
          </p>
          <div className="hero-actions">
            <button type="button" className="primary-btn">
              Shop Collection
            </button>
            <button type="button" className="secondary-btn">
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-visual" aria-label="Accessory showcase">
          <div className="showcase-card card-one">
            <span>Luxury Bags</span>
          </div>
          <div className="showcase-card card-two">
            <span>Jewellery</span>
          </div>
          <div className="showcase-card card-three">
            <span>Gift Sets</span>
          </div>
        </div>
      </section>

      <section className="info-section" id="about">
        <div className="section-header">
          <p className="eyebrow">About us</p>
          <h2>Beauty in every detail.</h2>
        </div>

        <div className="about-grid">
          <div className="about-image" aria-label="Store display" />
          <div className="about-copy">
            <p>
              Chele Accessories Department stands for refined, practical elegance. We curate
              premium accessories that help students, professionals, and trend lovers express their
              individual style with confidence.
            </p>
            <p>
              Our collections are selected for quality, comfort, and timeless appeal, bringing a
              polished look to both everyday wear and special occasions.
            </p>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="section-header center">
          <p className="eyebrow">Our services</p>
          <h2>What we offer</h2>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
