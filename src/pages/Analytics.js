import PageTitleWithBtn from 'components/PageTitleWithBtn'
import DataTableDT from 'components/DataTableDT'
import {AnalyticsColumnsDB} from 'static'
import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers, setUsers } from 'redux/lib/users'

const Analytics = () => {
  const [customers, setCustomers] = useState([])
  const dispatch = useDispatch()
  const {users} = useSelector(state => state.users)
  useEffect(() => {
    dispatch(fetchUsers())
    const editedusers = users.map((user, id) => ({...user, id: id}))
    setCustomers(editedusers)
    dispatch(setUsers(editedusers))
  }, [dispatch])
  return (
    <div className='analytics_page'>
      <PageTitleWithBtn
        title='Customer list'
        icon={<FaPlus/>}
        btnTitle='Add customer'
        onClick={() => console.log('x')}
      />
      <DataTableDT
        columns={AnalyticsColumnsDB}
        data={customers}
        pagination={true}
      />
    </div>
  )
}

export default Analytics