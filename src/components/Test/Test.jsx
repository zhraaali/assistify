import React from 'react'
import './Test.css'
const Test = () => {
  return (
    <div className='modal-container'>
        <div className='modal'>
            <div className='modal-header'>
                <p className='close' onClick={()=> onClose()}>X</p>
                <p>Settings</p>
                {/* <img src={moreicon} alt='moreicon' /> */}
            </div>

            <div className='hr'></div>

            <div className='zh-currency-setting'>
                <p>Currency</p>
                <div className='currency-setting-icons'>
                    {/* <img src={usaflag} /> */}
                    <span>USD</span>
                    {/* <img src={arrowright}/> */}
                </div>
            </div>
            <div className='hr'></div>

            <div className='zh-theme-setting'>
                <p>Theme</p>
                <div className="zh-dark-white">
                <button>
                    {/* <img src={img14} alt="" /> */}
                    Light
                </button>
                <button>
                    {/* <img src={img13} alt="" /> */}
                    Dark
                </button>
            </div>
            </div>
            <div className='hr'></div>

            <div className='zh-language-setting'>
                <p>Language</p>
                <div className='zh-EnglishUS-icons-setting'>
                    <p>English US</p>
                    {/* <img src={arrowright}/> */}
                </div>
            </div>
            <div className='hr'></div>

            <div className='zh-allseetings-setting'>
                <span>All settings</span>
                {/* <img src={arrowright}/> */}
            </div>
            
        </div>
    </div>
  )
}

export default Test