import React from 'react';
import SidebarItem from './SidebarItem';
export default function Sidebar(){
    return(
        <div className='bg-[#323445] w-full z-10 fixed flex flex-col mt-16 pb-5 transition sidebar sidebar-closed tablet:hidden'>
            <SidebarItem tab_name="Introduction" path="#introduction" selected={true}/>
            <SidebarItem tab_name="Qualifications" path="#qualification" selected={false}/>
            <SidebarItem tab_name="Services" path="#services" selected={false}/>
            <SidebarItem tab_name="Contact" path="#contact" selected={false}/>
        </div>
    )
}