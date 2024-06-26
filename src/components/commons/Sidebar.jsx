import React from 'react';
import { Link } from 'react-router-dom';
import 
{BsHeart, BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsHeart  className='icon_header'/> BKMEC
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>

            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div>Trang chủ</div>
                </li>
            </Link>
            <Link to="/doctor" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div>Bác sĩ</div>
                </li>
            </Link>
            <li className='sidebar-list-item'>
                <div>Y tá</div>
            </li>
            <li className='sidebar-list-item'>
                <div>Bệnh nhân</div>
            </li>
            <Link to="/medicine" style={{ textDecoration: 'none', color: 'inherit' }}>
                <li className='sidebar-list-item'>
                    <div>Kiểm kê thuốc</div>
                </li>
            </Link>
            <li className='sidebar-list-item'>
                <div>Thống kê</div>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar