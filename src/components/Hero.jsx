import "./Hero.css";

function Hero({ title, subtitle, ctaText, imageUrl }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__text">
          <h2>{title}</h2>
          <p>{subtitle}</p>
          <button className="hero__button">{ctaText}</button>
        </div>

        <div className="hero__imageWrap">
          <img className="hero__image" src={imageUrl} alt="Hero banner" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
