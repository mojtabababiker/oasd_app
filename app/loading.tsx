import Image from "next/image";

export default function Loading() {
  return (
    <section className="loading-section loading-section-home">
      <div className="container-fluid loading-container">
        <div className="loading-text">
          <span>O</span>
          <span>A</span>
          <span>S</span>
          <span>D</span>
          <span> </span>
          <span><Image src={'/images/favicon.ico'} alt="OASD Icon" width={40} height={40} /></span>
        </div>
      </div>
    </section>
  )
}