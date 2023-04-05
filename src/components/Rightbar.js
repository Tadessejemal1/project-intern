import React from 'react'

const Rightbar = () => {
    const Shortcuts = [
        { title: "Key Facts", image: 'key' },
        { title: "Property History", image: 'history-line' },
        { title: "Demographics", image: 'donut-chart-line' },
        { title: "Points of interest", image: 'location-tick' },
    ]
  return (
    <div>
        <ul className='py-4'>
            {Shortcuts.map((shortcut, index) => (   
                <li key={index} className='flex gap-3 p-2 w-48 bg-slate-50 text-black border border-bg-white-100 rounded my-1'>
                    <img src={require('./../assets/' + shortcut.image + '.png')} alt='no' />
                    <h3>{shortcut.title}</h3>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Rightbar;
