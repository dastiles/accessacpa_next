import { Lead } from "@/types";
import React from "react";

const EmailLead = ({lead} :{lead:Lead}) => {
  return (
    <div>
      <table className="w-full bg-gray-100">
        <tr>
          <td className="p-8">
            <table className="w-full max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-lg">
              <tr>
                <td className="bg-[#ff5900] text-white text-center py-6">
                  <h1 className="text-2xl font-bold m-0">Access A CPA</h1>
                </td>
              </tr>
              <tr>
                <td className="p-6 text-gray-700">
                  <p className="mb-4">Dear {lead.name},</p>
                  <p className="mb-4">
                    Thank you for submitting your lead. Our team will get in
                    touch with you soon.
                  </p>
                  <p className="mb-4">Regards,</p>
                  <p>Access A CPA Team</p>
                </td>
              </tr>

              <tr>
                <td className="bg-[#ff5900] text-white text-center py-4">
                  <p className="text-sm m-0">&copy; 2024 Access A CPA</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default EmailLead;
