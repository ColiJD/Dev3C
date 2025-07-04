import Image from "next/image";
import banner from "@/app/assets/img/banner.webp";
import "./banner.css";

export function Banner() {
  return (
    <section className="banner">
      <div className="banner-content">
        <h1>Dev3C</h1>
        <Image src={banner} alt="Banner Image" priority={true} />
        <p>
          Dev3C is a platform designed to help developers learn and grow in the
          world of web development. Whether you're a beginner or an experienced
          developer, we have resources and tools to help you succeed.
        </p>
      </div>
    </section>
  );
}
