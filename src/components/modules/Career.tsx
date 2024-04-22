import BgContainer from "@/components/uiKit/BgContainer";
import Text from "@/components/uiKit/Text";
import Title from "@/components/uiKit/Title";
import RegistrationForm from "../uiKit/RegistrationForm";

import career from "@/data/career.json";

export default function Career() {
  const { title, text, subtitle, callText, careers, RegistrationFormProps } =
    career;
  return (
    <section id="career">
      <div className="bg-careerMobile bg-cover bg-center">
        <BgContainer>
          <Title extraProps="mb-6">{title}</Title>
          <div className="ml-auto w-45 mb-9">
            <Text extraProps="mb-9">{text}</Text>
            <h3 className="text-3xl font-extralight uppercase">{subtitle}</h3>
          </div>
          <ul className="w-45">
            {careers.map(({ careerTitle, careerText }, index) => (
              <li key={index} className="mb-4 last:mb-0">
                <h4 className="font-normal text-sm text-right mb-2">
                  {careerTitle}
                </h4>
                <p className="font-extralight text-xs text-right">
                  {careerText}
                </p>
              </li>
            ))}
          </ul>
        </BgContainer>
      </div>
      <div className="bg-careerMobile bg-cover bg-center">
        <BgContainer>
          <Text extraProps="w-45 ml-auto mb-6">{callText}</Text>
          <RegistrationForm registrationFormProps={RegistrationFormProps} />
        </BgContainer>
      </div>
    </section>
  );
}
