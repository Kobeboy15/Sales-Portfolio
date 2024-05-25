export default function HeroSection() {
  return (
    <header id="hero-section">
      <h1 className="text-6xl font-bold text-primary">KC Lamb</h1>
      <p className="mt-1 text-xl font-semibold text-slate-800">
        Sales and Marketing Specialist
      </p>
      <div className="">
        <p className="max-w-sm mt-4 text-base text-slate-800">
          Fusing creativity with strategy to deliver digital experiences that
          drive business success.
        </p>
        <div className="flex gap-3 mt-4 text-[28px] text-slate-800">
          <i class="uil uil-linkedin"></i>
          <i class="uil uil-medium-m"></i>
          <i class="uil uil-envelope"></i>
        </div>
      </div>
    </header>
  );
}
