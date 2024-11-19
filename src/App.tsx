// App.tsx
import React, { useState, useEffect } from 'react';
import './App.css';

// Context
import { useContact, ContactProvider, Contact } from './context/ContactContext';
// Components
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import EditModal from './components/EditModal';

function AppContent() {
  const { state: { contacts }, dispatch } = useContact(); // ดึงข้อมูลจาก Context
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);

  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined); // เคลียร์ข้อมูลที่จะแก้ไขเมื่อ modal ปิด
    }
  }, [showModal]);

  const toggleModal = () => {
    setShowModal((prevShow) => !prevShow); // เปลี่ยนสถานะการแสดงผล modal
  };

  const handleEdit = (id: string) => {
    const contactToEdit = contacts.find((contact) => contact.id === id); // ค้นหาข้อมูลที่ต้องการแก้ไข
    if (contactToEdit) {
      setDataToEdit(contactToEdit); // กำหนดข้อมูลที่จะแก้ไข
      toggleModal(); // เปิด modal
    }
  };

  return (
    <div className="container mt-4">
      <Header /> {/* แสดงหัวข้อ */}
      <ContactForm dataToEdit={dataToEdit} dispatch={dispatch} /> {/* ฟอร์มเพิ่ม/แก้ไขข้อมูล */}
      <hr />
      {contacts.length > 0 && (
        <ContactList contacts={contacts} handleEdit={handleEdit} dispatch={dispatch} /> 
      )}
      <EditModal
        showModal={showModal} // สถานะการแสดงผลของ modal
        dataToEdit={dataToEdit} // ข้อมูลที่จะแก้ไขใน modal
        toggleModal={toggleModal} // ฟังก์ชันในการปิด/เปิด modal
        dispatch={dispatch}
      />
    </div>
  );
}

function App() {
  return (
    <ContactProvider> {/* ให้ Context รอบ AppContent */}
      <AppContent />
    </ContactProvider>
  );
}

export default App;

