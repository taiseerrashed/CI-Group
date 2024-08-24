interface ImageProps {
    images: string[]
}
const Images = ({images}: ImageProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
        {images.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index + 1}`} className="w-full max-h-[215px] rounded-2xl" />
        ))}
    </div>
  );
};

export default Images;