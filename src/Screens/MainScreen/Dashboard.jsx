import React, { useState } from 'react'
import AddNotesModal from '../../Componets/AddNotesModal';
import styles from "./MainScreen.module.css"
import { Table } from 'antd';
export default function Dashboard() {
    const [isModalOpen, setIsModalOpen] = useState(false);
const [overallNotes,setOverallNotes]=useState([])
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log('OK button clicked');
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    console.log('Cancel button clicked');
    setIsModalOpen(false);
  };
  console.log(overallNotes,"overallnoteds");
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  const columns = [
    {
      title: 'S.No',
      key: 'sno',
      render: (text, record, index) => index + 1, // Adding S.No
    },
    {
      title: 'Name',
      dataIndex: 'notes',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'message',
      key: 'age',
    },
  ];
  return (
    <div>
        <div className={styles.AddbtnOutline}>
        <button className={styles.AddBtn} onClick={showModal}>Add</button>
        </div>
        <div className={styles.TableOutline}>
<Table dataSource={overallNotes} columns={columns} />
</div>
        <AddNotesModal 
        isOpen={isModalOpen} 
        setOverallNotes={(values)=>{
console.log(values,"valuessssss");
 setOverallNotes((prev)=>[...prev,{notes:values.notes,message:values.message}])
        }}
        handleOk={handleOk} 
        handleCancel={handleCancel} 
      />
    </div>
  )
}
