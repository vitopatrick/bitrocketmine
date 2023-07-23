import React from "react";

const company = [
  {
    id: 1,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/c0cd0555-trust-pilot-stars_1000000000000000000028.png",
  },
  {
    id: 2,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/8f6b10fa-global-forex-retail-logo-01_1000000000000000000028.png",
  },
  {
    id: 3,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/801dfbcf-best-mt5-broker-transparent_105k04g000000000000028.png",
  },
  {
    id: 4,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/6c37727c-2022-fx-badge-best-in-class-cryptotrading_104g04w000000000000028.png",
  },
  {
    id: 5,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/a448c408-gbm-logo-2021_1000000000000000000028.png",
  },
  {
    id: 6,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/4cc6b69c-eightcap-2021-atoz-awards-laurel_104605u04605a00000a028.png",
  },
  {
    id: 7,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/c409aba7-eightcap-best-mt4-trading-experience-asia-white-winning-logo_105006c05005e00000g028.png",
  },
  {
    id: 8,
    url: "https://d9hhrg4mnvzow.cloudfront.net/trade.eightcap.com/en/trade-smarter/forexbrokers/256df0b1-google-logo_1000000000000000000028.png",
  },
];

const CompanyFooter = () => {
  return (
    <section className="bg-neutral-200">
      <div className="p-4 md:w-[70%] mx-auto">
        {/* company logos */}
        <div className="grid grid-cols-2 md:grid-cols-8 gap-8 place-items-center">
          {company.map((com) => (
            <div key={com.id} className="md:w-[60%] w-[30%] mx-auto">
              <img src={com.url} alt="support link" />
            </div>
          ))}
        </div>
        {/* end of company logos */}
        {/* write up */}
        <div className="space-y-10 text-[10px] my-10">
          <div>
            <span className="text-black font-bold leading-loose">
              Risk Warning:
            </span>{" "}
            Margin trading involves a high level of risk, and may not be
            suitable for all investors. You should carefully consider your
            objectives, financial situation, needs and level of experience
            before entering into any margined transactions with Bit rocket mine,
            and seek independent advice if necessary. Forex and Derivatives
            (margin trading) are highly leveraged products which mean both gains
            and losses are magnified. You should only trade in these products if
            you fully understand the risks involved and can afford losses
            without adversely affecting your lifestyle (including the risk of
            losing the entirety of your initial investment). You must assess and
            consider them carefully before making any decision about using our
            products or services. CFDs are complex instruments and come with a
            high risk of losing money rapidly due to leverage. The majority of
            retail investor accounts lose money when trading CFDs. You should
            consider whether you understand how CFDs work and whether you can
            afford to take the high risk of losing your money.
          </div>
          <div>
            Bit rocket mine Global Limited regulated by The Securities
            Commission of The Bahamas (SCB) (SIA-F220).
          </div>
          <div>
            The information on this website is not targeted at the general
            public of any specific country and is not intended for distribution
            to residents in any jurisdiction where that distribution would be
            unlawful or contravene regulatory requirements. Bit rocket mine
            makes reasonable efforts to provide accurate translations of the
            website in other languages for your convenience. Where content is
            missing, inaccurate or incomplete, the English version prevails.
          </div>
        </div>
        {/* end of write up */}
      </div>
    </section>
  );
};

export default CompanyFooter;
