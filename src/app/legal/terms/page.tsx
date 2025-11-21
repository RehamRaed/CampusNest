
import LegalDocumentTemplate from "@/components/templates/LegalDocumentTemplate";
import { legalContent } from "../../../../data/legalContent" 

export default function TermsOfServicePage() {
    const content = legalContent.terms; 
    
    return (
        <LegalDocumentTemplate 
            content={content} 
        />
    );
}