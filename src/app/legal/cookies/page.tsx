  import LegalDocumentTemplate from "@/components/templates/LegalDocumentTemplate";
  import { legalContent } from "../../../../data/legalContent";
  
  export default function CookiePolicy() {
    const content = legalContent.cookies;
  
    return <LegalDocumentTemplate content={content} />;
  }
  