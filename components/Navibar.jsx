import Link from 'next/link';
import Head from 'next/head';
import React from 'react';

import NavibarSub from '../components/NavibarSub';
import LibNavigation from '../lib/LibNavigation';
//
export default class Navibar extends React.Component {
  constructor(props){
    super(props)
    this.state = {subDisplay: 0 , subData: [] }
  }
  clickHandler(display , parent_id){
    var sub_maenu = LibNavigation.get_sub_items(parent_id)
    this.setState({ subDisplay: display, subData: sub_maenu })
  }    
  render(){
    return (
    <div className="bg-white ">
      <div className="container mx-auto">
        <ul className="flex flex-wrap py-2 px-4">
          <li className="w-full py-1 pr-6 sm:w-auto sm:py-0">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800 text-3xl font-bold">
                Site123
              </a>
            </Link>
          </li>
          <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800">Home</a>
            </Link>
          </li>
          <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
            <a className="text-blue-500 hover:text-blue-800" href="#"
            onClick={this.clickHandler.bind(this , 1, 1)} >
            Open <span className="text-xs">▼</span>
            </a>
          </li>        
          <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
            <a className="text-blue-500 hover:text-blue-800" href="#"
            onClick={this.clickHandler.bind(this , 1, 2)} >
            Open2 <span className="text-xs">▼</span>
            </a>
          </li>        
          <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
            <Link href="/">
              <a className="text-blue-500 hover:text-blue-800">Link1</a>
            </Link>
          </li>
          <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
            <Link href="/about">
              <a className="text-blue-500 hover:text-blue-800">About</a>
            </Link>
          </li>                  
        </ul>
        {this.state.subDisplay ==0 ? ""
        : (<NavibarSub subDisplay={this.state.subDisplay}
           subData={this.state.subData} />)
        }
      </div>
    </div>
    )
  }

}
