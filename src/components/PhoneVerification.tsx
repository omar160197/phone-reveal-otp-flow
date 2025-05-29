
import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import PhoneNumberInput from "./PhoneNumberInput";
import VerificationMethodSelector from "./VerificationMethodSelector";

const PhoneVerification = () => {
  const [phoneNumber, setPhoneNumber] = useState("1024098151");
  const [selectedMethod, setSelectedMethod] = useState<"sms" | "whatsapp">("sms");
  const [isEditing, setIsEditing] = useState(false);

  const handleSendOTP = () => {
    console.log(`Sending OTP to ${phoneNumber} via ${selectedMethod}`);
    // Here you would implement the actual OTP sending logic
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-xl border-0 bg-white/95 backdrop-blur-sm">
        <CardHeader className="text-center pb-6">
          <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
            <span className="text-white font-bold text-2xl">esa</span>
            <span className="text-orange-200 font-light text-lg">PX</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Phone Verification
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed">
            You need to verify your phone number to continue.
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Verification Method Selection */}
          <div>
            <p className="text-gray-700 font-medium mb-4 text-center">
              Where do you want to get the verification code?
            </p>
            <VerificationMethodSelector
              selectedMethod={selectedMethod}
              onMethodChange={setSelectedMethod}
            />
          </div>

          {/* Phone Number Display/Edit */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
            <p className="text-sm text-gray-600 mb-3 text-center">
              This is the phone we'll send the OTP to.
              <br />
              <span className="text-gray-500">You can edit it if needed:</span>
            </p>
            
            <PhoneNumberInput
              phoneNumber={phoneNumber}
              onPhoneNumberChange={setPhoneNumber}
              isEditing={isEditing}
              onEditingChange={setIsEditing}
            />
          </div>

          {/* Send OTP Button */}
          <Button
            onClick={handleSendOTP}
            className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
            disabled={isEditing || !phoneNumber.trim()}
          >
            Send Verification Code
          </Button>

          {/* Additional Info */}
          <p className="text-xs text-gray-500 text-center leading-relaxed">
            By continuing, you agree to receive SMS messages or WhatsApp notifications at the number provided. Message and data rates may apply.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PhoneVerification;
