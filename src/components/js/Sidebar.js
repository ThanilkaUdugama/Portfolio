import React from 'react';
import SidebarItem from './SidebarItem';
export default function Sidebar({menu_func, activity, references}){
    return(
        <div className='bg-[#323445] w-full z-10 fixed flex flex-col mt-14 pb-5 transition sidebar sidebar-closed tablet:hidden'>
            <SidebarItem menu_func = {menu_func} tab_name="Introduction" selected={activity['intro']} reference = {references[0]}/>
            <SidebarItem menu_func = {menu_func} tab_name="Qualifications" selected={activity['qualifications']} reference = {references[1]}/>
            <SidebarItem menu_func = {menu_func} tab_name="Skills" selected={activity['skills']} reference = {references[2]}/>
            <SidebarItem menu_func = {menu_func} tab_name="Contact" selected={activity['contact']} reference = {references[3]}/>
        </div>
    )
}