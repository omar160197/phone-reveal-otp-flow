
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil, Check, X } from "lucide-react";

interface PhoneNumberInputProps {
  phoneNumber: string;
  onPhoneNumberChange: (phone: string) => void;
  isEditing: boolean;
  onEditingChange: (editing: boolean) => void;
}

const PhoneNumberInput = ({
  phoneNumber,
  onPhoneNumberChange,
  isEditing,
  onEditingChange,
}: PhoneNumberInputProps) => {
  const [tempPhoneNumber, setTempPhoneNumber] = useState(phoneNumber);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleEdit = () => {
    setTempPhoneNumber(phoneNumber);
    onEditingChange(true);
  };

  const handleSave = () => {
    if (tempPhoneNumber.trim()) {
      onPhoneNumberChange(tempPhoneNumber.trim());
      onEditingChange(false);
    }
  };

  const handleCancel = () => {
    setTempPhoneNumber(phoneNumber);
    onEditingChange(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSave();
    } else if (e.key === "Escape") {
      handleCancel();
    }
  };

  const formatPhoneNumber = (phone: string) => {
    // Simple formatting for display
    const cleaned = phone.replace(/\D/g, "");
    if (cleaned.length >= 10) {
      return `+1 (${cleaned.slice(-10, -7)}) ${cleaned.slice(-7, -4)}-${cleaned.slice(-4)}`;
    }
    return phone;
  };

  if (isEditing) {
    return (
      <div className="space-y-3">
        <div className="flex items-center space-x-2">
          <Input
            ref={inputRef}
            value={tempPhoneNumber}
            onChange={(e) => setTempPhoneNumber(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Enter phone number"
            className="flex-1 border-orange-200 focus:border-orange-400 focus:ring-orange-400"
            type="tel"
          />
        </div>
        <div className="flex space-x-2 justify-center">
          <Button
            onClick={handleSave}
            size="sm"
            className="bg-green-500 hover:bg-green-600 text-white px-4"
            disabled={!tempPhoneNumber.trim()}
          >
            <Check className="w-4 h-4 mr-1" />
            Save
          </Button>
          <Button
            onClick={handleCancel}
            size="sm"
            variant="outline"
            className="px-4"
          >
            <X className="w-4 h-4 mr-1" />
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-200 hover:border-orange-300 transition-colors group">
      <div className="flex-1">
        <div className="text-lg font-semibold text-gray-800 tracking-wide">
          {formatPhoneNumber(phoneNumber)}
        </div>
        <div className="text-xs text-gray-500 mt-1">
          Phone number
        </div>
      </div>
      <Button
        onClick={handleEdit}
        size="sm"
        variant="ghost"
        className="ml-3 text-orange-600 hover:text-orange-700 hover:bg-orange-50 p-2 group-hover:bg-orange-50"
      >
        <Pencil className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default PhoneNumberInput;
