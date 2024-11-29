import ChevronIcon from '@components/icon/chevron-icon';
import { Button } from '@components/ui/button';
import React from 'react'

const NewsFrame = () => {
  return (
    <div className="flex flex-grow flex-shrink-0 max-w-[30%]">
      <div className="bg-[#1a285f] w-full h-full overflow-auto font-sans flex items-stretch justify-center px-6 pt-[22vh]">
        <h1>
          <Button className="font-[650] font-sans text-[#1a285f] bg-[#dfa4cf] text-xs mb-2 p-4 rounded-sm hover:text-white">
            Guide
          </Button>
          <p className="text-white font-bold text-xl">
            How secure is my password? A guide to staying safe online
          </p>
          <img
            className="my-4"
            src="https://1password.com/signin/IDCReport_375x176_2x.png"
            alt=""
          />
          <p className="text-white">
            As an average internet user, you probably have over 100 passwords
            for various online accounts. All of these login credentials should
            be strong and unique but the reality is that people often choose
            passwords that could take an hour or two for a hacker to crack. Read
            our guide to learn how to stay safe online.
          </p>
          <div className="text-white font-bold mt-5 flex items-center gap-2 cursor-pointer">
            <div className='items-center justify-center'>Read the guide</div>
            <ChevronIcon width="12" height="12" className="-rotate-90" />
          </div>
        </h1>
      </div>
    </div>
  );
}

export default NewsFrame
