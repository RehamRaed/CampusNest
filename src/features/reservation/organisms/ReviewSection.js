"use client";
import Button from "@/components/atoms/Button";

export default function ReviewSection({
  details,
  selectedAgree,
  setSelectedAgree,
  onNextStep,
}) {
  return (
    <div>
      <label className="flex items-center gap-2 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={selectedAgree}
          onChange={(e) => setSelectedAgree(e.target.checked)}
          className="custom-checkbox"
        />
        <span className="text-gray-700">
          By selecting the button, I agree to the booking terms.
        </span>
      </label>

      <div className="flex justify-end">
        
        <Button variant="blackSolid" size="md" onClick={onNextStep}>
          Confirm & Pay
        </Button>
      </div>
    </div>
  );
}
