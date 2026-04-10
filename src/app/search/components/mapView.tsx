"use client";

const MapView = () => {
  return (
    <div className="sticky top-[73px] h-[calc(100vh-73px)] w-full overflow-hidden rounded-l-2xl">
      <iframe
        title="Property Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d158858.47340002653!2d-0.0877321!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
        className="h-full w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
};

export default MapView;
