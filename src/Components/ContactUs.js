import React from 'react'
import {Tab, Tabs } from 'react-bootstrap';
import {LoremIpsum} from 'react-lorem-ipsum';
import { House, CarFront, Briefcase, Tools, TrainFreightFrontFill } from 'react-bootstrap-icons';
import './ContactUs.css'
import { useForm } from "react-hook-form";


function ContactUs() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example"));

  return (
    <div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="About US">
                {/* <LoremIpsum p={1} /> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                
                <input defaultValue="test" {...register("example")} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input {...register("exampleRequired", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

      
                <input type="submit" />
            </form>
            </Tab>
            
            <Tab eventKey="BLOGS" title="BLOGS">
                <LoremIpsum p={1} />
            </Tab>

            <Tab eventKey="HELP" title="HELP">
                <LoremIpsum p={1} />
            </Tab>

            <Tab eventKey="services" title="Our Services">
                <div className='p-div'>
                <div className='main-div'>
                    <h1>Our Services</h1>
                    <div className="child-div">
                        <div className='first-line-child'>
                            <House size={50} color="#2991D6" className="house"/>
                            {/* <h3>House Cleaning</h3> */}
                        </div>
                        <div className='first-line-child'>
                            <CarFront size={50} color="#2991D6" className="house"/>
                        </div>
                        <div className='first-line-child'>
                            <Briefcase size={45} color="#2991D6" className="house1"/>
                        </div>
                    </div>
                    <div className="child-div-2">
                        <div className='first-line-child'>
                            <Tools size={40} color="#2991D6" className="house2"/>
                        </div>
                        <div className='first-line-child'>
                            <TrainFreightFrontFill size={40} color="#2991D6" className="house2"/>
                        </div>
                    </div>
                </div>
                </div>
            </Tab>
        </Tabs>
    </div>
  )
}

export default ContactUs;
