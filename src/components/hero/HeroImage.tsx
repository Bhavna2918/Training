import dashboardImg from '../../assets/images/image.png';

export const HeroImage = () => {
  return (
    <div className="relative w-full mx-auto lg:mx-0 flex justify-center lg:justify-end transition-transform duration-700 hover:-translate-y-3">
      {/* Soft Purple Radial Glow Behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#6C63FF]/30 blur-[100px] rounded-full pointer-events-none -z-10 opacity-70"></div>

      <img 
        src={dashboardImg} 
        alt="Dashboard Preview" 
        className="w-full max-w-4xl h-auto rounded-3xl object-contain"
      />
    </div>
  );
};
