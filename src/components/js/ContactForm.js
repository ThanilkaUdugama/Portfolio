import React, { useEffect, useState } from "react";
import ContactTitle from './Title.js'
import FormItem from "./FormItem.js";
import { useRef } from "react";
import useIsInViewport from "../../functions/useIsInViewport.js";
import { motion } from "framer-motion";
import { Snackbar, Alert } from "@mui/material";
import emailjs from '@emailjs/browser';

export default function ContactForm({bg_color}){

    const [active, setActive] = useState(false)
    const [sent_msg, setSentMsg ] = useState(false)
    const [sending_msg, setSendingMsg ] = useState(false)
    const [set_err, setErrMsg] = useState(['',false])

    const [field_colors, setFieldColors] = useState({'name' : '#FEAD20', 'email': '#FEAD20', 'message': '#FEAD20' })

    const ref = useRef(null);
    const ref_visible = useIsInViewport(ref);
    const [button_color, setButtonColor] = useState('#FEAD20')

    const [formdata, setFormData] = useState({name: '', email: '', message : ''})


    useEffect(()=> {
            ((field_colors['email'] === field_colors['name']) & (field_colors['message'] === field_colors['name'])) ? setButtonColor(field_colors['name']) : setButtonColor('#EE4238')
    }, [field_colors])

    const styles = {
        offscreen: {
          opacity: 0,
          y: 20
        },
        onscreen: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      }

    const onChange = (e) => {
        setFormData( {...formdata , [e.target.name]:e.target.value})
    } 

    const onUpload = async () =>{
        if (formdata.name === '' | formdata.email === '' | formdata.message === ''){
            if (formdata.name === '') setFieldColors(field_colors => ({...field_colors, 'name' : '#EE4238'}))
            else setFieldColors(field_colors => ({...field_colors, 'name' : '#49AF41'}))
            
            if (formdata.email === '') setFieldColors(field_colors => ({...field_colors, 'email' : '#EE4238'}))
            else setFieldColors(field_colors => ({...field_colors, 'email' : '#49AF41'}))

            if (formdata.message === '') setFieldColors(field_colors => ({...field_colors, 'message' : '#EE4238'}))
            else setFieldColors(field_colors => ({...field_colors, 'message' : '#49AF41'}))

            if (formdata.email !== '' & !formdata.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
                setFieldColors(field_colors => ({...field_colors, 'email' : '#EE4238'}))
                setErrMsg(['All The Fields Are Mandatory and Email is Invalid!', true])
            }
            else{
                setErrMsg(['All The Fields Are Mandatory!', true])
            }
        }else if (!formdata.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
            setErrMsg(['Invalid Email!', true])
            setFieldColors(field_colors => ({...field_colors, 'name' : '#49AF41'}))
            setFieldColors(field_colors => ({...field_colors, 'email' : '#EE4238'}))
            setFieldColors(field_colors => ({...field_colors, 'message' : '#49AF41'}))
        }
        else {
            setFieldColors(field_colors => ({...field_colors, 'name' : '#49AF41'}))
            setFieldColors(field_colors => ({...field_colors, 'email' : '#49AF41'}))
            setFieldColors(field_colors => ({...field_colors, 'message' : '#49AF41'}))
            setSendingMsg(true)
            emailjs.send('service_iid7tvp', 'template_89rbplr', formdata)
            .then(function(response) {
            setSendingMsg(false)
            setErrMsg(['', false])
            setSentMsg(true)
            setFormData({name: '', email: '', message : ''})
            setFieldColors(field_colors => ({...field_colors, 'name' : '#FEAD20'}))
            setFieldColors(field_colors => ({...field_colors, 'email' : '#FEAD20'}))
            setFieldColors(field_colors => ({...field_colors, 'message' : '#FEAD20'}))
            }, function(error) {
            setErrMsg([error, true])
            });
        }
    }

    useEffect(()=>{
        (ref_visible) ? setActive(true) : setActive(false);
    },[ref_visible])


    return(
        <div id="contact-form" className="">
            <ContactTitle title = "Contact Me" bg_color={bg_color} active = {active} />
            <div ref={ref} className={` mobile-s:-mt-[2rem] mobile-s:px-8 tablet:px-[8rem] pb-10 flex flex-col justify-center items-stretch pt-3 bg-[#232533] w-full`}>
                <motion.div
                initial= {styles['offscreen']}    
                whileInView = {styles['onscreen']}                
                className= {`duration-0 mt-1 rounded-lg flex-col items-center justify-center`}>
                    <FormItem color = {field_colors['name']} field='Name' name = 'name' value = {formdata['name']} onChange = {onChange} type = 'text'/>
                    <FormItem color = {field_colors['email']} field='Email' name = 'email' value = {formdata['email']} onChange = {onChange} type = 'text'/>
                    <FormItem color = {field_colors['message']} field='Message' name = 'message' value = {formdata['message']} onChange = {onChange} type = 'textarea'/>
                    <div className="flex justify-center">
                        <motion.button 
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={()=> onUpload()}
                        style = {{'background-color' : button_color }}
                        className="duration-0 border-[0.4rem] border-[#232533] h-16 w-16 -mt-8 bg-[#FEAD20] text-white flex justify-center items-center rounded-full"><svg className="" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><g fill="none"><path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="m21.433 4.861l-6 15.5a1 1 0 0 1-1.624.362l-3.382-3.235l-2.074 2.073a.5.5 0 0 1-.853-.354v-4.519L2.309 9.723a1 1 0 0 1 .442-1.691l17.5-4.5a1 1 0 0 1 1.181 1.329M19 6.001L8.032 13.152l1.735 1.66z"/></g></svg></motion.button>
                    </div>
                </motion.div>
            </div>

            <Snackbar open={sent_msg} autoHideDuration={6000} onClose={()=>setSentMsg(false)}>
                <Alert onClose={()=>setSentMsg(false)} severity="success" sx={{ width: '100%' }}>
                    Message Sent!
                </Alert>
            </Snackbar>

            <Snackbar open={sending_msg} autoHideDuration={6000} onClose={()=>setSendingMsg(false)}>
                <Alert onClose={()=>setSendingMsg(false)} severity="info" sx={{ width: '100%' }}>
                    Sending...
                </Alert>
            </Snackbar>

            <Snackbar open={set_err[1]} autoHideDuration={6000} onClose={()=>setErrMsg(['', false])}>
                <Alert onClose={()=>setErrMsg(['', false])} severity="warning" sx={{ width: '100%' }}>
                    {set_err[0]}
                </Alert>
            </Snackbar>

            <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
            <script type="text/javascript">
                {(function(){
                    emailjs.init("UmcvEGVDjrqj3fN4K");
                })()};
            </script>
        </div>
    )
}