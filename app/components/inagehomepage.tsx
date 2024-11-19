import Image from 'next/image';

const ImageSection: React.FC = () => {
  return (
    <section className="mb-12">
      <div className="flex justify-center overflow-hidden max-h-[600px] w-full">
        <Image
          src="/homepage.jpeg"
          alt="Descriptive Alt Text"
          layout="intrinsic"
          width={800}
          height={300}
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default ImageSection;
