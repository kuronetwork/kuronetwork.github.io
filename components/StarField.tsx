'use client';

export default function StarField() {
  return (
    <>
      {/* CSS Star field */}
      <div className="star-field" aria-hidden="true">
        {/* Shooting stars */}
        <div className="shooting-star" style={{ top: '10%', left: '20%', animationDelay: '0s' }} />
        <div className="shooting-star" style={{ top: '30%', left: '70%', animationDelay: '5s' }} />
        <div className="shooting-star" style={{ top: '60%', left: '40%', animationDelay: '10s' }} />
      </div>
    </>
  );
}
