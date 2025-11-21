import { Property } from "@/types/property.types";

export interface AmenitiesSelectionProps {
options: string[];
selectedValues: string[];
onValueChange: (values: string[]) => void;
}

export interface HousingTypesProps {
label: string;
value: string;
onChange: (val: string) => void;
}

export interface LocationFilterProps {
label: string;
value: string;
onChange: (val: string) => void;
}

export interface PriceFilterProps {
label: string;
value: number;
onChange: (val: number) => void;
}

export interface RatingFilterProps {
label: string;
value: number | null;
onChange: (val: number) => void;
}

export interface SidebarBtnsProps {
onApply: () => void;
onReset: () => void;
}

export interface ExploreTemplateProps {
paginatedData: Property[];
currentPage: number;
totalPages: number;
onPageChange: (page: number) => void;
}
