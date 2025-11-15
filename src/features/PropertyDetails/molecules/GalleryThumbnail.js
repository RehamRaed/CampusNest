export default function GalleryThumbnail({ img, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`w-32 flex-shrink-0 rounded-lg overflow-hidden cursor-pointer border-2 ${
        isActive ? "border-[#F5801D]" : "border-transparent"
      } transform transition hover:scale-102 duration-300`}
    >
      <img src={img} className="w-full h-24 object-cover" />
    </div>
  );
}
