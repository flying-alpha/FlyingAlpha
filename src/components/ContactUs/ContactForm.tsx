import Form from './Form';
import React from 'react'

const ContactForm = () => {
  return (
    <div className='flex mt-10 justify-center gap-20  mb-10   '>
      <div className='flex flex-col max-w-[500px] bg-[#F7EFE5]
      min-h-[400px] items-center p-10 '>
        <div>
          <h1 className='text-xl font-bold mb-5 '>CONTACT INFORMATION</h1>
        </div>
        <div>
          <p>Founded on August 28, 196693 (formerly known as Truong Thinh Phat Construction Co., Ltd.), Flex Home operates in the field of real estate business, building villas for rent. Slogan "Breaking time, through space".</p>
        </div>
      </div>
      
      <div className='flex flex-col min-w-[500px] bg-[#F7EFE5]  min-h-[400px] items-center p-10  '>
        <div>
          <h1 className='text-xl font-bold mb-5'>HOW WE CAN HELP YOU?</h1>
        </div>
        <div>
          <Form/>
        </div>
      </div>
    </div>
  );
}

export default ContactForm

  

