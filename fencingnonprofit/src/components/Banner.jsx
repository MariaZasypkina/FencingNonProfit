import "../App.css"; // ✅ правильный путь

export default function Banner() {
  return (
    <div className="relative w-full h-[40vh] overflow-hidden">
      <div className="banner-overlay"></div>
      <img
        src="/images/banner1.jpg"
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div className="relative flex items-center justify-center h-full z-20">
        <h1 className="banner-heading">COLORADO YOUTH FENCING NON-PROFIT ORGANIZATION</h1>
      </div>
    </div>
  );
}
