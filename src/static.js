import { MdOutlineSpaceDashboard }from 'react-icons/md'
import { BiBell, BiBriefcase, BiMessageDetail } from 'react-icons/bi'
import { AiOutlineBarChart } from 'react-icons/ai'
import { FaEye, FaHeart } from 'react-icons/fa'
import { RiGamepadLine } from 'react-icons/ri'
import { HiShoppingBag } from 'react-icons/hi'
import { HiOutlineCog8Tooth } from 'react-icons/hi2'
import { TbFileInvoice } from 'react-icons/tb'
import { BsCalendar2Check, BsCalendarDate } from 'react-icons/bs'
import { Button } from 'react-bootstrap'


export const sidebarLinks = [
  {
    id:1,
    name:'Dashboard',
    path:'/',
    icon: <MdOutlineSpaceDashboard/>
  },
  {
    id:2,
    name:'Analytics',
    path:'/analytics',
    icon: <AiOutlineBarChart />
  },
  {
    id:3,
    name:'Invoice',
    path:'/invoice',
    icon: <TbFileInvoice />
  },
  {
    id:4,
    name:'Schedule',
    path:'/schedule',
    icon: <BsCalendarDate />
  },
  {
    id:5,
    name:'Calender',
    path:'/calender',
    icon: <BsCalendar2Check />
  },
  {
    id:6,
    name:'Messages',
    path:'/messages',
    icon: <BiMessageDetail/>
  },
  {
    id:7,
    name:'Notifcation',
    path:'/notifcation',
    icon: <BiBell />
  },
  {
    id:8,
    name:'Settings',
    path:'/settings',
    icon: <HiOutlineCog8Tooth />
  },

]


// dashboard data
export const dashboardData = {
  cards:[
    {
      id:0,
      count:178,
      title:'Save products',
      icon: <FaHeart/>,
      color:'blue'
    },
    {
      id:1,
      count:20,
      title:'Stock products',
      icon: <RiGamepadLine />,
      color:'yellow'
    },
    {
      id:2,
      count:190,
      title:'Sales Products',
      icon: <HiShoppingBag />,
      color:'orange'
    },
    {
      id:3,
      count:12,
      title:'Job Application',
      icon: <BiBriefcase />,
      color:'purple'
    },
  ]
}


// products table on dashboard

export const ProductsColumnsDB = [
  {
    name: 'Tracking no',
    selector: row => row?.id,
    sortable: true,
    reorder: true,
    center: true,
    maxWidth: '120px',
  },
  {
    name: 'Product name',
    selector: row => row?.title,
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Price',
    selector: row => row?.price + 'LE',
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Total Order',
    selector: row => row?.quantity,
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Total Amount',
    selector: row => row?.total ,
    sortable: true,
    reorder: true,
    center: true,
  }
]


// Analytics table on dashboard

export const AnalyticsColumnsDB = [
  {
    name: 'Name',
    selector: row => <div className='user-table-row'>
      <img src={row.picture.thumbnail} alt={row.name.first} />
      <span>{`${row.name.first} ${row.name.last}`}</span>
    </div>,
    sortable: true,
    reorder: true,
    center: false,
  },
  {
    name: 'Email',
    selector: row => row?.email,
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Mobile',
    selector: row => row?.phone,
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Gender',
    selector: row => <div className={`gender ${row?.gender === 'male' ? 'male': 'female'}`}>{row?.gender}</div>,
    sortable: true,
    reorder: true,
    center: true,
  },
  {
    name: 'Action',
    selector: row => <Button onClick={()=> console.log(row)} className='btn-info btn-sm'>view <FaEye/> </Button>,
    center: true,
  }
]