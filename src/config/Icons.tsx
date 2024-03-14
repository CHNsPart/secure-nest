import { cn } from '@/lib/utils';
import React from 'react';

interface YourIconProps {
  variant: string;
  size?: string;
  className?: string;
}


const YourIcon: React.FC<YourIconProps> = ({ variant, size, className }) => {

  if(variant==="smartphone") {
      return (
        <svg width="512" height="512" className={cn(size ? `size-${size}` : 'size-6', className)} viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" className={cn('text-green-500', className)} fillRule="evenodd" d="M3.5 1.75a.25.25 0 0 1 .25-.25h6.5a.25.25 0 0 1 .25.25v10.5a.25.25 0 0 1-.25.25H3.802a.753.753 0 0 1-.179-.114a.53.53 0 0 1-.123-.147zM3.75 0A1.75 1.75 0 0 0 2 1.75v10.5c0 .592.361 1.032.65 1.278c.156.133.328.243.498.322c.154.073.37.15.602.15h6.5A1.75 1.75 0 0 0 12 12.25V1.75A1.75 1.75 0 0 0 10.25 0zM6.5 9.75a.75.75 0 0 0 0 1.5h1a.75.75 0 0 0 0-1.5z" clipRule="evenodd"/>
        </svg>
      );
    };

  if(variant==="camera") {
    return (
        <svg width="512" height="512" className={cn(size ? `size-${size}` : 'size-6', className)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" className={cn('text-green-500', className)} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
              <path d="M7 9h.01m9.74 3H22l-3.5 7l-3.09-4.32"/>
              <path d="m18 9.5l-4 8l-10.39-5.2a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3ZM2 19h3.76a2 2 0 0 0 1.8-1.1L9 15m-7 6v-4"/>
          </g>
        </svg>
      )
  }

  if(variant==="tower") {
    return (
        <svg className={cn(size ? `size-${size}` : 'size-6', className)} width="512" height="512" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
          <path className={cn('text-green-500', className)} fill="currentColor" fillRule="evenodd" d="M1.772 2.219a.625.625 0 1 0 .81.953a7.16 7.16 0 0 1 4.421-1.697a7.147 7.147 0 0 1 4.416 1.697a.625.625 0 0 0 .809-.953A8.396 8.396 0 0 0 6.987.225A8.41 8.41 0 0 0 1.772 2.22ZM4.19 4.174a.625.625 0 0 0 .723 1.02c.66-.468 1.379-.725 2.103-.765c.726.038 1.448.294 2.109.762a.625.625 0 0 0 .722-1.02c-.85-.602-1.81-.947-2.804-.992h-.058c-.99.047-1.948.394-2.795.995M9.3 8.636a.66.66 0 0 0-.66.66v2.57a.66.66 0 0 0 .66.659h.857a.66.66 0 0 0 .66-.66v-.231h-.66a.625.625 0 1 1 0-1.25h1.285c.345 0 .625.28.625.625v.856a1.91 1.91 0 0 1-1.91 1.91H9.3a1.91 1.91 0 0 1-1.91-1.91v-2.57a1.91 1.91 0 0 1 1.91-1.91h.857a1.91 1.91 0 0 1 1.8 1.274a.625.625 0 1 1-1.178.417a.66.66 0 0 0-.622-.44zm-3.495.003H3.553l-.16.96c.218-.046.44-.07.664-.07h.678a1.91 1.91 0 0 1 1.91 1.909v.428a1.909 1.909 0 0 1-1.91 1.909H3.88a1.91 1.91 0 0 1-1.8-1.273a.625.625 0 1 1 1.179-.416a.66.66 0 0 0 .621.439h.856a.659.659 0 0 0 .66-.659v-.428a.659.659 0 0 0-.66-.659h-.678c-.301 0-.599.07-.868.205l-.314.157a.625.625 0 0 1-.896-.662l.428-2.568a.625.625 0 0 1 .616-.522h2.782a.625.625 0 1 1 0 1.25Z" clipRule="evenodd"/>
        </svg>
    );
  }

  if(variant==="alarm") {
    return (
      <svg className={cn(size ? `size-${size}` : 'size-6', className)}  width="512" height="512" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <g className={cn('text-green-500', className)} fill="none" stroke="currentColor" strokeLinejoin="round" strokeWidth="4">
              <path d="M14 25c0-5.523 4.477-10 10-10s10 4.477 10 10v16H14z"/>
              <path strokeLinecap="round" d="M24 5v3m11.892 1.328l-1.929 2.298m8.256 8.661l-2.955.521m-33.483-.521l2.955.521m3.373-11.48l1.928 2.298M6 41h37"/>
          </g>
      </svg>
    );
  }

  if(variant==="motion") {
    return (
        <svg width="512" className={cn(size ? `size-${size}` : 'size-6', className)} height="512" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path className={cn('text-green-500', className)} fill="currentColor" d="m5.636 4.223l-.707.707A9.966 9.966 0 0 0 2 12a9.966 9.966 0 0 0 2.929 7.072l.707.707l-1.414 1.414l-.707-.707A11.966 11.966 0 0 1 0 12.001c0-3.314 1.344-6.315 3.515-8.486l.707-.707zm14.141-1.415l.707.707A11.966 11.966 0 0 1 24 12.001c0 3.313-1.344 6.315-3.514 8.485l-.708.707l-1.414-1.414l.707-.707A9.965 9.965 0 0 0 22 12a9.965 9.965 0 0 0-2.93-7.071l-.707-.707zM8.464 7.051l-.707.707A5.978 5.978 0 0 0 6 12c0 1.658.67 3.156 1.757 4.243l.707.707l-1.414 1.414l-.707-.707A7.978 7.978 0 0 1 4 12c0-2.208.897-4.21 2.343-5.656l.707-.708zm8.485-1.415l.707.708A7.978 7.978 0 0 1 20 12c0 2.21-.897 4.21-2.344 5.657l-.707.707l-1.414-1.414l.707-.707A5.978 5.978 0 0 0 18 12a5.977 5.977 0 0 0-1.758-4.242l-.707-.707zM12 10a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 5 3.874v4.905h-2v-4.905A4.002 4.002 0 0 1 8 12"/>
        </svg>
    );
  }

  if(variant==="thermostat") {
    return (
      <svg width="512" height="512" className={cn(size ? `size-${size}` : 'size-6', className)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path className='text-green-500 size-6' fill="currentColor" d="M5 22q-.825 0-1.412-.587T3 20h4.775q-2.35-1.175-3.812-3.437T2.5 11.5q0-1.975.75-3.7t2.038-3.012Q6.575 3.5 8.3 2.75T12 2q1.975 0 3.7.75t3.013 2.038Q20 6.075 20.75 7.8t.75 3.7q0 2.8-1.463 5.063T16.226 20H21q0 .825-.587 1.413T19 22zm7-3q3.125 0 5.313-2.187T19.5 11.5q0-3.125-2.187-5.312T12 4Q8.875 4 6.688 6.188T4.5 11.5q0 3.125 2.188 5.313T12 19m2.35-4q1.125 0 1.763-.862T16.75 12q0-1.275-.65-2.137T14.35 9q-1.125 0-1.762.863T11.95 12q0 1.275.638 2.138T14.35 15m0-1.025q-.65 0-.975-.587T13.05 12q0-.6.275-1.287t1.025-.688q.75 0 1.025.688T15.65 12q0 .8-.325 1.388t-.975.587m-3.725.9q.2 0 .338-.15t.137-.35q0-.2-.137-.337t-.338-.138h-1.85l-.025-.05q.25-.25.463-.45t.375-.375q.162-.175.3-.3t.237-.225q.475-.475.7-.925t.225-.9q0-.725-.537-1.2T9.125 9q-.65 0-1.175.375t-.7.95l-.05.2q0 .225.163.375t.387.15q.175 0 .313-.113t.187-.287q.1-.275.338-.45t.512-.175q.325 0 .563.213t.237.487q0 .275-.112.5t-.413.55q-.15.15-.5.513t-1 1.012l-.425.425q-.05.05-.15.35v.3q0 .2.15.35t.35.15z"/>
      </svg>
    );
  }

}

export default YourIcon;
