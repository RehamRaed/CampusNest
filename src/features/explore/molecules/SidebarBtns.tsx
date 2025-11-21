import { SidebarBtnsProps } from "@/features/explore/types/explore.types";
import Button from "@/components/molecules/button/Button";

export default function SidebarBtns({ onApply, onReset }: SidebarBtnsProps) {
  return (
    <div className="flex gap-2 mt-6">
      <Button variant="orangeOutline" size="sm" className="flex-1" onClick={onApply}>
        Apply
      </Button>
      <Button variant="orangeOutline" size="sm" className="flex-1" onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
