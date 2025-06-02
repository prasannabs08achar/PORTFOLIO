const CertificateCard = ({ image, altText, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-[#131c31] rounded-xl p-4 hover:scale-105 transition-transform shadow-md"
    >
      <img
        src={image}
        alt={altText}
        className="w-full h-64 object-contain rounded-lg"
      />
    </a>
  );
}

export default CertificateCard
