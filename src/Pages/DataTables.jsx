import React from 'react'
import Layout from '../Components/Layout'
import DevelopmentTable from '../Components/DataTablesComponent/DevelopmentTable'
import CheckDataComponent from '../Components/DataTablesComponent/CheckDataComponent'
import ColumnTable from '../Components/DataTablesComponent/ColumnTable'
import ComplexTable from '../Components/DataTablesComponent/ComplexTable'


const DataTables = () => {
  return (
    <Layout>
      <div className='w-[82%] top-[10%] h-[60%] absolute flex justify-between'>
        <div className='w-[49%] h-[100%]'><DevelopmentTable/></div>
        <div className='w-[49%] h-[100%]'><CheckDataComponent/></div>
      </div>
      <div className='w-[82%] bottom-[2%] h-[30%] absolute flex justify-between'>
        <div className='w-[49%] h-[100%]'><ColumnTable/></div>
        <div className='w-[49%] h-[100%]'><ComplexTable/></div>
      </div>
    </Layout>
  )
}

export default DataTables