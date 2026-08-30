function ServiceCard({ title, description, icon }) {
  return (
    <article className="service-card">
      <div className="service-icon" aria-hidden="true">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

export default ServiceCard;
