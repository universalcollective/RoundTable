import React from "react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  CloudIcon,
} from "@heroicons/react/20/solid";
import Header from "../partials/Header";
import Banner from "../partials/Banner";
import Footer from "../partials/Footer";
import { useNightMode } from "../utils/NightModeContext";

const sections = document.querySelectorAll(".section-paragraph");

sections.forEach((section, index) => {
  setTimeout(() => {
    section.classList.add("animate");
  }, index * 500); // Change this number to adjust the delay between each paragraph
});

function PrivacyPolicy() {
  const { isNightMode } = useNightMode();

  return (
    <>
      <Header />
      <section
        className={`${
          isNightMode
            ? "bg-slate-800 text-gray-100"
            : "bg-gray-100 text-gray-700"
        }`}
      >
        <div
          className={`px-6 py-32 lg:px-8 ${
            isNightMode
              ? "bg-slate-800 text-gray-100"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <div
            className={`mx-auto max-w-3xl text-base leading-7 ${
              isNightMode
                ? "bg-slate-800 text-gray-100"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            <p className="text-base font-semibold tracking-tight text-custom-100">
              Round Table Entertainment
            </p>
            <span
              className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
                isNightMode
                  ? "bg-slate-800 text-gray-100"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              Privacy Policy
            </span>
            <p className="mt-6 text-xl leading-8">
              Round Table Entertainment (“Round Table,” “we,” “us,” or “our”)
              respects your privacy. This Privacy Policy explains how Round
              Table collects, uses, discloses, and secures information about you
              through our website, mobile applications, and other services
              provided by us (collectively, the “Service”). By using the
              Service, you consent to the processing of your information as set
              forth in this Privacy Policy.
            </p>
            <div
              className={`mt-10 max-w-2xl ${
                isNightMode
                  ? "bg-slate-800 text-gray-100"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              <p className="mt-6">
                In providing the Service, we collect and obtain information
                about individual consumers (“End Users”) to, among other things,
                provide End Users access to our platform through which End Users
                can connect with Contractors to obtain the support and creative
                services desired. In providing the Service, we also act as a
                service provider to Contractors who use the Service to reduce
                the administrative costs of creating their own website,
                marketing, developing their client-base, and payment processing
                system so they can focus on providing their services to End
                Users.
              </p>
              <p className="mt-6">
                This Privacy Policy is incorporated into and is subject to our
                Terms of Service. Capitalized terms used but not defined in this
                Privacy Policy have the meaning given to them in our Terms of
                Service.
              </p>

              {/* <ul role="list" className="mt-8 max-w-xl space-y-8 hover:text-custom-100600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-custom-100" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Data types.</strong> Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                blanditiis ratione.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-custom-100" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Loops.</strong> Anim aute id magna aliqua ad ad non
                deserunt sunt. Qui irure qui lorem cupidatat commodo.
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-custom-100" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Events.</strong> Ac tincidunt sapien vehicula erat
                auctor pellentesque rhoncus. Et magna sit morbi lobortis.
              </span>
            </li>
          </ul> */}
              <h2
                id="information"
                className="mt-16 text-2xl font-bold tracking-tight text-custom-100"
              >
                Information We May Collect
              </h2>
              <p className="mt-6">
                At Round Table, we collect different types of information from
                you when you use our Service, including:
              </p>
              <ul role="list" className="mt-8 max-w-xl space-y-4">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold">
                      Information You Provide:
                    </strong>{" "}
                    When you register an account with us or otherwise
                    communicate with us, we collect information you provide,
                    such as your name, email address, phone number, and payment
                    information (handled via our third-party payment processor
                    in accordance with our Terms of Service). We may also
                    collect information you submit through your use of the
                    Service, such as your messaging history, files you upload,
                    and feedback you provide. If you are a Contractor, we may
                    collect additional information about your business, such as
                    your business name, location, services offered, and
                    portfolio.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold">
                      End User Submitted Information:
                    </strong>{" "}
                    Contractors may provide us with information about End Users
                    that they provide services to via the Service.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">
                      Device and Usage Information:
                    </strong>{" "}
                    Like most online services, we automatically receive standard
                    technical information when you interact with our Service,
                    including browser and device information such as unique
                    device identifiers, mobile phone carrier, internet protocol
                    (IP) addresses (which may identify your general geographic
                    location), browser types, and the date and time of your
                    interactions. We also receive information about your
                    interactions with our Service, such as which website pages
                    you visited and how much time was spent on the page.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold">
                      Automatically Collected Information:
                    </strong>{" "}
                    We may collect this information using cookies or similar
                    technologies. Cookies are pieces of information that are
                    stored by your browser on the hard drive or memory of your
                    device. Cookies enable us to personalize your experience on
                    the Service, maintain a persistent session, passively
                    collect demographic information, and monitor advertisements
                    and other activities. Our Service may use different kinds of
                    cookies and other types of local storage (such as
                    browser-based or plugin-based local storage).
                  </span>
                </li>
              </ul>
              <p className="mt-6">
                We may combine the information we collect from you with
                information we receive from third-party sources, such as social
                media platforms or publicly available sources. We may also
                collect information about you from our business partners or
                service providers who help us operate the Service or perform
                other functions on our behalf.
              </p>
              <p className="mt-6">
                By using the Service, you consent to the collection, use, and
                disclosure of your information as described in this Privacy
                Policy.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                How We Use Your Information
              </h2>
              <p className="mt-6">
                We use the information we collect from you to provide, maintain,
                and improve our Service, as well as to communicate with you and
                market our products and services. Specifically, we may use your
                information to:
              </p>

              <ul role="list" className="mt-8 max-w-xl space-y-5">
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    Provide access to our platform and facilitate connections
                    between End Users and Contractors;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>Process transactions and payment information;</span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    Respond to your customer service inquiries and support
                    needs;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>Customize and personalize your user experience;</span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    Send you information about our products, services, and
                    promotions, and to provide you with marketing and
                    advertising materials that may be of interest to you;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    Conduct research and analyze usage data to improve our
                    Service and develop new products and features;
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <InformationCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    Comply with legal obligations and protect the rights and
                    safety of our users and our business.{" "}
                  </span>
                </li>
              </ul>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                Information Sharing and Disclosure
              </h2>
              <p className="mt-6">
                Round Table may share your information with certain third
                parties to provide our Service or to comply with legal
                obligations. We may share your information with Contractors who
                use our Service to provide you with the support and creative
                services you desire. Additionally, we may share your information
                with third-party service providers who assist us in providing
                the Service, such as hosting providers, payment processors, and
                email service providers. These third-party service providers are
                required to keep your information confidential and secure and
                are not authorized to use your information for any other purpose
                than to provide services on our behalf.
              </p>
              <p className="mt-6">
                We may also share your information with government entities or
                law enforcement officials if we believe such disclosure is
                necessary to comply with applicable laws, regulations, legal
                processes, or governmental requests, or to protect the rights,
                property, and safety of Round Table, our users, and the public.
              </p>
              <p className="mt-6">
                In the event that Round Table is involved in a merger,
                acquisition, or sale of all or a portion of our assets, your
                information may be included in the assets transferred to the
                acquiring entity. In such a case, we will provide notice before
                your information is transferred and becomes subject to a
                different privacy policy.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                Cookies and Other Tracking Technologies
              </h2>
              <p className="mt-6">
                We and our partners use cookies and similar technologies on our
                Service to improve its performance, to personalize your
                experience, to analyze how the Service is being used, and for
                advertising purposes. Cookies are small data files that are
                placed on your device when you visit our Service, and they may
                store unique identifiers that allow us to recognize your device.
              </p>
              <p className="mt-6">
                We use both session cookies, which expire when you close your
                browser, and persistent cookies, which remain on your device
                until they expire or you delete them. Some cookies are placed by
                us, and others are placed by our third-party partners.
              </p>
              <p className="mt-6">
                We use the following types of cookies and other tracking
                technologies on our Service:
              </p>

              <ul role="list" className="mt-8 max-w-xl space-y-3">
                <li className="flex gap-x-3">
                  <CloudIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">
                      Essential cookies.
                    </strong>{" "}
                    These cookies are necessary for our Service to function
                    properly and cannot be switched off in our systems. They are
                    usually only set in response to actions made by you which
                    amount to a request for services, such as setting your
                    privacy preferences, logging in, or filling in forms.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold">
                      Analytics cookies.
                    </strong>{" "}
                    These cookies allow us to collect information about how
                    visitors use our Service, such as which pages are visited
                    most often, and to see how users interact with our Service.
                    We use this information to improve our Service and to
                    understand how users are engaging with our content.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CloudIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold">
                      Advertising cookies.
                    </strong>{" "}
                    These cookies may be used to deliver targeted advertising on
                    our Service and other websites, and to measure the
                    effectiveness of our advertising campaigns.
                  </span>
                </li>
              </ul>

              <p className="mt-6">
                You can choose to set your browser to refuse all or some browser
                cookies, or to alert you when cookies are being sent. However,
                if you disable or refuse cookies, please note that some parts of
                our Service may become inaccessible or not function properly.
              </p>
              <p className="mt-6">
                Additionally, you can opt-out of some of our partners' tracking
                technologies used for advertising purposes by visiting the
                Network Advertising Initiative's opt-out page at
                <a
                  href="http://www.networkadvertising.org/choices"
                  className="text-custom-100 hover:underline"
                >
                  {" "}
                  http://www.networkadvertising.org/choices
                </a>{" "}
                or the Digital Advertising Alliance's opt-out page at{" "}
                <a
                  href="http://www.aboutads.info/choices"
                  className="text-custom-100 hover:underline"
                >
                  http://www.aboutads.info/choices
                </a>
                .
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                User Choices & Access
              </h2>
              <p className="mt-6">
                We believe that you should have control over the collection,
                use, and disclosure of your personal information. Here are the
                choices you have:
              </p>

              <ul role="list" className="mt-8 max-w-xl space-y-4">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold">
                      Information Collection:
                    </strong>{" "}
                    You can choose not to provide certain information to us,
                    although this may limit the features and functionality of
                    our Service that you are able to use.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">Communications:</strong>{" "}
                    You can opt-out of receiving promotional communications from
                    us by following the instructions provided in those
                    communications. If you opt-out, we may still send you
                    non-promotional communications, such as those about your
                    account or our ongoing business relations.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">Cookies:</strong> You
                    have the ability to manage cookies and other tracking
                    technologies through your browser settings or through other
                    tools. However, please note that disabling cookies may limit
                    the features and functionality of our Service that you are
                    able to use.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    className="mt-1 h-5 w-5 flex-none text-custom-100"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold ">
                      Access and Correction:
                    </strong>{" "}
                    You can access and update certain personal information that
                    we have about you by logging into your account and making
                    the necessary changes. If you need further assistance,
                    please contact us using the information provided below.
                  </span>
                </li>
              </ul>

              <p className="mt-6">
                If you have any questions or concerns about your choices or
                access to your personal information, please contact us at{" "}
                <a
                  href="mailto:roundtablesound@gmail.com"
                  className="text-custom-100 hover:underline"
                >
                  roundtablesound@gmail.com
                </a>
                . We will respond to your request within a reasonable timeframe.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                Security
              </h2>
              <p className="mt-6">
                At Round Table, we take the security of our users' information
                seriously. We implement industry-standard physical, technical,
                and administrative safeguards to protect against unauthorized
                access, use, disclosure, modification, or destruction of the
                information that we collect.
              </p>
              <p className="mt-6">
                We store user information in secure data centers with restricted
                access, and we use firewalls, encryption, and other security
                technologies to protect against unauthorized access to our
                systems. We also regularly review and update our security
                practices to ensure that we are following the latest standards
                and best practices.
              </p>
              <p className="mt-6">
                However, no method of transmission or storage can be 100%
                secure, so we cannot guarantee absolute security. If you have
                any concerns about the security of your information, please
                contact us at{" "}
                <a
                  href="mailto:roundtablesound@gmail.com"
                  className="text-custom-100 hover:underline"
                >
                  roundtablesound@gmail.com
                </a>
                , and we will do our best to address your concerns.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                Children's Policy
              </h2>
              <p className="mt-6">
                Our Service is not directed to children under the age of 13, and
                we do not knowingly collect personal information from children
                under the age of 13. If you are a parent or guardian and believe
                that your child has provided personal information to us, please
                contact us at {""}
                <a
                  href="mailto:roundtablesound@gmail.com"
                  className="text-custom-100 hover:underline"
                >
                  roundtablesound@gmail.com
                </a>
                . We will promptly delete such information from our systems.
              </p>

              <p className="mt-6">
                We comply with the Children's Online Privacy Protection Act
                (COPPA) and other applicable laws and regulations concerning
                children's privacy. If we learn that we have collected personal
                information from a child under the age of 13, we will take steps
                to promptly delete the information and terminate the child's
                account, if applicable.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                Changes to this Policy
              </h2>
              <p className="mt-6">
                We reserve the right to modify this Privacy Policy at any time,
                so please review it frequently. Any changes to this Privacy
                Policy will be posted on this page with an updated date. If we
                make any material changes to this Privacy Policy, we will notify
                you either through the email address you have provided us or by
                placing a prominent notice on our website. Your continued use of
                the Service after any such changes constitutes your acceptance
                of the new Privacy Policy.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-custom-100">
                Contact Us
              </h2>
              <p className="mt-6">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at:
              </p>

              <p className="mt-6">
                Email:{" "}
                <a
                  href="mailto:roundtablesound@gmail.com"
                  className="text-custom-100 hover:underline"
                >
                  roundtablesound@gmail.com
                </a>
              </p>

              <p className="mt-6"> </p>
              <p className="mt-1">Round Table </p>
              <p className="mt-1">123 Main Street </p>
              <p className="mt-1">Anytown, USA 12345</p>
              <p className="mt-6">
                We take your privacy seriously and will do our best to address
                any concerns or inquiries in a timely and professional manner.
              </p>

              <figure className="mt-10 border-l border-custom-100 pl-9">
                <blockquote
                  className={`font-bold ${
                    isNightMode
                      ? "bg-slate-800 text-gray-100"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  <p>Last Updated: April 2, 2023.</p>
                </blockquote>
              </figure>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Banner />
    </>
  );
}
export default PrivacyPolicy;
