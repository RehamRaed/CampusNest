import Button from "@/components/atoms/Button";

export default function SidebarBtns({ onApply, onReset }) {
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
