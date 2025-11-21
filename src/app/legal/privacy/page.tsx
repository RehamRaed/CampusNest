import LegalDocumentTemplate from "@/components/templates/LegalDocumentTemplate";
import { legalContent } from "../../../../data/legalContent";

export default function PrivacyPolicy() {
  const content = legalContent.privacy;

  return <LegalDocumentTemplate content={content} />;
}
