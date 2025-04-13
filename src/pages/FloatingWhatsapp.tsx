import { useState } from "react";

import { FaWhatsapp } from "react-icons/fa";

const FloatingWhatsapp = () => {
    const [show, setIsShow] = useState(false);
    
    const contacts = [
        {
          name: "Sket Assistant",
          role: "Brand Assistant",
          number: "6285135402983",
        },
        {
          name: "Rivaldi",
          role: "Brand Consultant",
          number: "62895365441554",
        },
        {
            name: "Danu",
            role: "Brand Consultant",
            number: "6285781424194",
        },
        
      ];
      
      const toggleContacts = () => {
        setIsShow(!show);
      }

      const openWhatsapp = (number: string) => {
        const url = `https://api.whatsapp.com/send?phone=${number}&text=Halo%2C%20saya%20tertarik%20dengan%20layanan%20Sket%20Creative.%20Bisa%20diskusi%20lebih%20lanjut%3F`;
        window.open(url, "_blank");
    }


      return (
        <div className="fixed bottom-6 right-6 z-50">
          {show && (
            <div className="mb-2 space-y-2 bg-white p-2 rounded-xl shadow-md">
              {contacts.map((contact, idx) => (
                <button
                  key={idx}
                  onClick={() => openWhatsapp(contact.number)}
                  className="flex px-3 py-2 text-sm text-white bg-green-500 rounded-lg hover:bg-green-600 w-full"
                >
                  <FaWhatsapp className="mr-1 text-[20px] text-left flex" /> 
                  <span className="flex flex-col text-left">
                    <span className="text-[16px]">{contact.name}</span>
                    {contact.number}
                  </span>
                  
                </button>
              ))}
            </div>
          )}
    
          <button
            onClick={toggleContacts}
            className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600"
          >
            <FaWhatsapp size={28} />
          </button>
        </div>
      );
}

export default FloatingWhatsapp;
