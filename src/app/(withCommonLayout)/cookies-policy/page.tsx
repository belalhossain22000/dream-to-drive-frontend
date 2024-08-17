import backgroundImage from "@/assets/cookiesPage/banner.jpg";
import PageBanner from "@/shared/pageBanner/PageBanner";
const CookiesPolicy = () => {
  const pageTitle = "COOKIE POLICY";
  const overlayColor = "bg-primary/70";
  return (
    <div className="min-h-screen">
      {/* page-header  */}
      <PageBanner
        button={false}
        image={backgroundImage}
        title={pageTitle}
        overlayColor={overlayColor}
      />
      {/* page body  */}
      <div className="px-5 lg:px-0">
        <div className="max-w-[700px]  mx-auto py-12">
          <p className="text-md">
            This site uses cookies and other internet tracking software, small
            files that are downloaded to your device and collect data while you
            use our websites and mobile apps.
          </p>
          <h2 className="text-md font-semibold mt-4">HOW WE USE COOKIES</h2>
          <p className="text-md mt-2">
            We use the data we collect to improve your browsing experience and
            enable certain features. We may share this data with other companies
            in The Collecting Group Ltd group of companies.
          </p>
          <p className="text-md mt-2">
            You can prevent cookies being saved by changing the settings on your
            browser. Disabling cookies may also disable certain functionality
            and features of this site. Therefore it is recommended that you do
            not disable cookies.
          </p>
          <h2 className="text-md font-semibold mt-4">THE COOKIES WE SET</h2>
          <p className="text-md mt-2">
            We set a number of cookies that are essential for the operation of
            certain features of our site.
          </p>
          <ul className="text-md mt-2 list-disc list-inside ml-5">
            <li className="mt-4">
              Login related cookies
              <span className="pl-[29px] block mt-2">
                when you are logged in so that we can recognise you when you
                return to the site. This prevents you from having to log in
                every time you visit. These cookies are usually removed or
                cleared when you log out to ensure that you can only access
                restricted features and areas when logged in.
              </span>
            </li>
            <li className="mt-4">
              Forms related cookies
              <span className="pl-[29px] block mt-2">
                When you submit data to through a form such as those found on
                contact pages or comment forms cookies may be set to process
                those transaction securely.
              </span>
            </li>
            <li className="mt-4">
              Site preferences cookies
              <span className="pl-[29px] block mt-2">
                In order to provide you with a tailored experience we provide
                the functionality to set your preferences for how this site
                operates when you use it. In order to remember your preferences
                we need to set cookies so that this information can be called
                whenever you interact with a page is affected by your
                preferences.
              </span>
            </li>
          </ul>
          <h2 className="text-md font-semibold mt-4">HOW WE USE COOKIES</h2>
          <p className="text-md mt-2">
            We also use third party services that place cookies on your device.
          </p>
          <ul className="text-md mt-2 list-disc list-inside ml-5">
            <li className="mt-4">
              <span className="pl-[29px] block -mt-6">
                This site uses Google Analytics to help us to understand how you
                use the site and ways that we can improve the experience. These
                cookies may track things such as how long you spend on the site
                and the pages that you visit so we can continue to produce
                engaging content.
              </span>
            </li>
            <li className="mt-4">
              <span className="pl-[29px] block -mt-6">
                We use Stripe to process card payments. Stripe also places
                cookies on your device for the purposes of processing payments
                and fraud detection.
              </span>
            </li>
            <li className="mt-4">
              <span className="pl-[29px] block -mt-6">
                We also use Sharethis.com to present buttons and plugins that
                allow you to connect with social networks. For these to work,
                social media sites including Facebook, Instagram and Twitter
                will set cookies through our site which may be used to enhance
                your profile on their site or contribute to the data they hold
                for various purposes outlined in their respective privacy
                policies.
              </span>
            </li>
          </ul>
          <h2 className="text-md font-semibold mt-4">MORE INFORMATION</h2>
          <p className="text-md mt-2">
            Your current cookie preferences can be seen and adjusted in Cookie
            Settings If you require more information, please contact us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesPolicy;
