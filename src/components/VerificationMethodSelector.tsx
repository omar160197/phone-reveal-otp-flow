
import { Button } from "@/components/ui/button";
import { MessageSquare, Phone } from "lucide-react";

interface VerificationMethodSelectorProps {
  selectedMethod: "sms" | "whatsapp";
  onMethodChange: (method: "sms" | "whatsapp") => void;
}

const VerificationMethodSelector = ({
  selectedMethod,
  onMethodChange,
}: VerificationMethodSelectorProps) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <Button
        onClick={() => onMethodChange("sms")}
        variant={selectedMethod === "sms" ? "default" : "outline"}
        className={`flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-200 ${
          selectedMethod === "sms"
            ? "bg-[#F9C019] hover:bg-[#E6AD16] text-white shadow-lg"
            : "border-gray-200 hover:border-[#F9C019] hover:bg-[#F9C019]/10 text-gray-700"
        }`}
      >
        <Phone className="w-5 h-5" />
        <span className="font-medium">SMS</span>
      </Button>

      <Button
        onClick={() => onMethodChange("whatsapp")}
        variant={selectedMethod === "whatsapp" ? "default" : "outline"}
        className={`flex items-center justify-center space-x-2 py-4 rounded-xl transition-all duration-200 ${
          selectedMethod === "whatsapp"
            ? "bg-green-500 hover:bg-green-600 text-white shadow-lg"
            : "border-gray-200 hover:border-green-300 hover:bg-green-50 text-gray-700"
        }`}
      >
        <MessageSquare className="w-5 h-5" />
        <span className="font-medium">WhatsApp</span>
      </Button>
    </div>
  );
};

export default VerificationMethodSelector;
