import { LegalContentType } from "@/types/legalContent.types"

export const legalContent : LegalContentType = {
    
    // 1. terms-of-service
    terms: {

        title: "Terms of Service",
        date: "Last Updated: November 2025",
        sections: [
            {
                heading: "1. Introduction & Acceptance of Terms",
                body: "By accessing or using the CampusNest platform (the \"Service\"), you agree to be bound by these Terms of Service, our Privacy Policy, and all referenced guidelines. If you do not agree with any part of these terms, you must discontinue the use of our service immediately."
            },
            {
                heading: "2. Service Description and Scope",
                body: "CampusNest is an online marketplace designed to connect students and other eligible tenants (\"Users\") with property owners (\"Landlords\") for short-term and long-term accommodation bookings. The platform provides tools for safe communication, reservation management, and secure payment processing via an Escrow system."
            },
            {
                heading: "3. User Accounts and Data Integrity",
                list: [
                    "Users are solely responsible for maintaining the confidentiality and security of their account credentials (username and password).",
                    "All information provided during registration, listing (for Landlords), and booking (for Tenants) must be accurate, current, and complete. Providing false information constitutes a breach of these Terms.",
                    "You must be at least 18 years old or the age of legal majority in your jurisdiction to use the Service."
                ]
            },
            {
                heading: "4. Booking, Payment, and Platform Fees",
                body: "All bookings must be processed through the CampusNest platform. Users acknowledge and agree to the following payment rules:",
                list: [
                    "Instant Confirmation: Requires immediate full payment, which secures the booking instantly without further landlord approval. This option typically includes a higher, non-refundable platform service fee.",
                    "Pay and Chat: Requires an initial payment, which is held in Escrow while the Tenant communicates with the Landlord to finalize details. The Landlord must confirm the booking within a set timeframe. This option may have a lower initial service fee but is subject to Landlord confirmation.",
                    "Pricing: Prices displayed are inclusive of the base rental cost and CampusNest's platform service fees (commission)."
                ]
            },
            {
                heading: "5. Escrow Account and Refund Policy",
                body: "All funds transferred for a booking are held in a third-party Escrow account managed by CampusNest until the Tenant successfully checks into the property or the final booking conditions are met.",
                list: [
                    "Guarantee: The Escrow system protects both parties by ensuring the Landlord receives payment only after the service is rendered, and the Tenant can claim a refund if the booking is cancelled according to policy.",
                    "Cancellations: Refund eligibility and the calculation of the final refund amount (after deducting service fees or processing charges) are strictly governed by the cancellation policy selected during the booking process."
                ]
            },
            {
                heading: "6. Intellectual Property Rights",
                body: "All content, including all texts, graphics, logos, images, software, and compilation of data, is the exclusive property of CampusNest and protected by international intellectual property laws. You are granted a limited, non-exclusive license to access and use the Service for personal, non-commercial use only."
            },
            {
                heading: "7. Termination and Suspension",
                body: "CampusNest reserves the right, without notice, to terminate or suspend your access to the Service for any reason, including without limitation, breach of these Terms, providing fraudulent information, or engaging in illegal activity."
            }
        ]
    },

    // 2. privacy-policy
    privacy: {
        title: "Privacy Policy",
        date: "Effective Date: November 2025",
        sections: [
            {
                heading: "1. Information We Collect",
                body: "We collect various types of information to provide and improve our Service:",
                list: [
                    "Personal Identification Data: Collected during account creation (Name, Email Address, Phone Number, Date of Birth).",
                    "Financial Data: Includes payment method details, which are processed securely by our trusted third-party payment providers (we do not store your full card number).",
                    "Usage Data: Information automatically collected about your device and browsing activity (IP Address, browser type, pages visited, time spent on pages)."
                ]
            },
            {
                heading: "2. How We Use Your Data",
                body: "Your information is used for the following primary purposes:",
                list: [
                    "To facilitate and finalize your bookings and process secure payments.",
                    "To personalize your experience and provide relevant property listings.",
                    "To communicate with you regarding your bookings, platform updates, and promotional offers (if consented).",
                    "To monitor and analyze usage to improve the Service's functionality and security."
                ]
            },
            {
                heading: "3. Data Sharing and Disclosure",
                body: "We only share your information as necessary to run the Service or as required by law:",
                list: [
                    "Landlords: Your name and contact details are shared with the Landlord only upon confirmation of a booking to facilitate check-in and communication.",
                    "Service Providers: We use external service providers (e.g., payment gateways, hosting providers, and analytics platforms) to perform functions on our behalf.",
                    "Legal Compliance: We may disclose data when required to comply with a subpoena, court order, or other legal process."
                ]
            },
            {
                heading: "4. Data Security and Retention",
                body: "We employ robust industry-standard security measures, including SSL encryption, firewalls, and strict access controls, to protect your personal data. We retain your information only for as long as necessary to fulfill the purposes outlined in this policy or as required to meet legal obligations."
            },
            {
                heading: "5. Your Rights Regarding Your Data",
                body: "You have the right to request access to the personal data we hold about you, request corrections to inaccurate data, or request the deletion of your account and personal information, subject to certain legal restrictions."
            }
        ]
    },

    // 3. cookie-policy
    cookies: {
        title: "Cookies Policy",
        date: "Effective Date: November 2025",
        sections: [
            {
                heading: "1. What Are Cookies?",
                body: "Cookies are small text files placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, as well as to provide reporting information."
            },
            {
                heading: "2. Types of Cookies We Use",
                body: "We categorize the cookies used on CampusNest as follows:",
                list: [
                    "Essential/Strictly Necessary Cookies: These cookies are vital for the proper functioning of the website (e.g., security, authentication, remembering your shopping cart/booking progress). You cannot opt-out of these cookies.",
                    "Analytical and Performance Cookies: Used to collect information about how visitors use our site (e.g., which pages they visit most often). This data helps us improve the user experience and website speed.",
                    "Functional Cookies: These allow the website to remember choices you make (such as your username, language, or region) and provide enhanced, more personal features.",
                    "Third-party Cookies: Cookies set by external services that appear on our pages, such as embedded social media feeds or advertising platforms."
                ]
            },
            {
                heading: "3. Managing Your Cookie Preferences",
                body: "You have the right to decide whether to accept or reject cookies.",
                list: [
                    "Most web browsers allow you to manage your cookie preferences through the browser settings. Consult your browser's help menu for more information.",
                    "Please note that if you reject essential cookies, your ability to use some features or areas of our Service may be severely limited."
                ]
            }
        ]
    }
};