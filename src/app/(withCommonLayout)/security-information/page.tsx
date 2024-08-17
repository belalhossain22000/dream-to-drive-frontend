import backgroundImage from "@/assets/securityPage/banner.jpg";
import PageBanner from "@/shared/pageBanner/PageBanner";
const pageTitle = "SECURITY";
const overlayColor = "bg-primary/70";
const Security = () => {
  return (
    <div>
      <PageBanner
        button={false}
        image={backgroundImage}
        title={pageTitle}
        overlayColor={overlayColor}
      >
        Collecting Cars neither owns nor inspects the vehicles that are listed
        for sale on www.collectingcars.com. We cannot accept liability for
        reliance on information published to the website. Please refer to our
        Terms & Conditions for more information.
      </PageBanner>
      <div className="px-5 lg:px-0">
        <div className="max-w-[700px]  mx-auto py-12">
          <h3 className="text-md font-bold mb-5">Stay vigilant</h3>
          <p className="text-md mt-2">
            Most vehicle transactions proceed without issue. However, you should
            always exercise caution and conduct thorough research when
            considering the purchase of a pre-owned vehicle.
          </p>
          <p className="text-md mt-2">
            Be vigilant and safeguard both your personal safety and financial
            interests. Keep in mind that if a deal appears significantly under
            market value or too good to be true, then it may conceal a hidden
            risk. If something does not feel right about the transaction, trust
            your instincts; conduct more research and use safeguards before
            paying.
          </p>
          <p className="text-md mt-2">
            We have provided some safety tips below to help you have a
            hassle-free buying experience.
          </p>
          <h3 className="text-md font-bold my-8">
            Check the vehicle’s historyt
          </h3>
          <p className="text-md mt-2">
            Whilst Collecting Cars performs some screening of vehicles (for
            example, a basic HPI check on every UK-registered vehicle listed),
            it’s best to do one for yourself. This ensures that you personally
            have the results of the search and that the search is as up to date
            as possible. Please also note that data held by different vehicle
            history services is not always identical. In rare cases, issues may
            be shown via the Experian service that are not visible on the HPI
            service, and vice versa. Collecting Cars is not responsible for any
            data errors or omissions from either third-party service.
          </p>
          <h3 className="text-md font-bold my-8">
            Check the vehicle’s documents
          </h3>
          <p className="text-md mt-2">
            Before completing your purchase, you should make sure you have
            checked the vehicle documents. Check the vehicle registration number
            (VRN), vehicle identification number (VIN) and the vehicle’s
            registration document (called a V5C or logbook in the UK). A genuine
            V5C certificate will have a watermark showing its authenticity. You
            should also review any previous MOT test certificates and service
            history documentation.
          </p>
          <h3 className="text-md font-bold my-8">
            Inspect the vehicle before bidding at auction or buying via
            Classifieds
          </h3>
          <p className="text-md mt-2">
            It’s always a good idea to inspect or arrange a professional
            inspection before committing to bid at auction or buy a vehicle
            listed in a classified advert. If the seller says that you can’t
            inspect the vehicle, then be cautious and think why this may be the
            case.
          </p>
          <h3 className="text-md font-bold my-8">
            Use a safe payment method and consider escrow
          </h3>
          <p className="text-md mt-2">
            Be cautious of paying for the vehicle before seeing it and use a
            trackable payment method, like a credit card when you do. Always
            consider the use of an escrow service, whether you are buying a
            vehicle or automobilia or number plates, which will provide you with
            additional transaction security. Collecting Cars has partnered with{" "}
            <span className="mx-1">
              <a href="#" className="text-[#17A398] font-bold">
                escrow.com
              </a>
            </span>{" "}
            as our escrow partner. We recommend the use of escrow particularly
            if you are unable to see a vehicle prior to purchasing it or if you
            are selling or buying a number plate.
          </p>
          <p className="text-md mt-2">
            Be cautious if a seller is requesting to be paid in cash as this
            carries additional risk for you as a buyer.
          </p>
          <h3 className="text-md font-bold my-8">
            Be aware of common red flags and criminal tactics
          </h3>
          <p className="text-md mt-2">
            Additional information on buying and selling vehicles, as well as up
            to date information on common tactics used by criminals can be found
            on the
            <span className="mx-1">
              <a href="#" className="text-[#17A398] font-bold">
                VSTAG website.
              </a>
            </span>
          </p>
          <h3 className="text-md font-bold my-8">
            Make sure you have correct insurance in place before driving away
          </h3>
          <p className="text-md mt-2">
            Tell your insurer that you are purchasing a new vehicle before you
            pick it up. Not providing up to date information on your new vehicle
            may otherwise invalidate your insurance.
          </p>
          <h3 className="text-md font-bold my-8">Report fraud</h3>
          <p className="text-md mt-2">
            To report fraud, criminal or suspicious behaviour, please contact
            Action Fraud in the first instance and/or Collecting Cars. Action
            Fraud allows victims to report instances where they have been the
            victim of fraud and these will be added to a national database to
            combat future occurrence.F
          </p>
        </div>
      </div>
    </div>
  );
};

export default Security;
