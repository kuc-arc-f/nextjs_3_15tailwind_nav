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
    <div>
      <div className="navi_main_wrap navi_bg_color">
        <div className="container mx-auto">
          <ul className="flex flex-wrap py-2 px-4 ">
            <li className="w-full py-1 pr-6 sm:w-auto sm:py-0">
              <Link href="/">
                <a className="navi_text_color text-3xl font-bold">
                  Site123
                </a>
              </Link>
            </li>
            <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
              <Link href="/">
                <a className="navi_text_color">Home</a>
              </Link>
            </li>
            <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
              <a className="navi_text_color" href="#"
              onClick={this.clickHandler.bind(this , 1, 1)} >
              Open <span className="text-xs">▼</span>
              </a>
            </li>        
            <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
              <a className="navi_text_color" href="#"
              onClick={this.clickHandler.bind(this , 1, 2)} >
              Open2 <span className="text-xs">▼</span>
              </a>
            </li>        
            <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
              <Link href="/">
                <a className="navi_text_color">Link1</a>
              </Link>
            </li>
            <li className="w-full pr-4 pb-1 pt-1 sm:pt-2 sm:w-auto sm:py-0">
              <Link href="/about">
                <a className="navi_text_color">About</a>
              </Link>
            </li>                  
          </ul>
        </div>
      </div>
      <div className="navi_submain_wrap sub_navi_bg_color">
        <div className="container mx-auto">
        {this.state.subDisplay ==0 ? ""
        : (<NavibarSub subDisplay={this.state.subDisplay}
          subData={this.state.subData} />)
        }
        </div>
      </div>
    </div>

    )
  }

}
