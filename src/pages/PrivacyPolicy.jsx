import React from "react";
import Container from "../components/Container";

const PrivacyPolicy = () => {
  return (
    <div className="pt-32">
      <Container>
        <div className="px-6">
          <div>
            {/* সার্ভিসস্নাপ এর প্রতিশ্রুতি */}
            <h2 className="text-3xl md:text-4xl text-center md:text-left font-rubikMedium text-primary uppercase">
              Servicesnap Agreement{" "}
            </h2>
            <p className="w-4/5 pt-6 text-base text-gray-500 font-rubikRegular">
              We respect your privacy and are committed to protecting your
              personal information. This Privacy Policy describes how we
              collect, use, and disclose your information when you access our
              website and online courses.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
