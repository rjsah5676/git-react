import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

class TopHome extends Component {
    render() {
        const topStyle = {
            color: '#444444',
            padding: '16px',
            borderWidth: '0px 0px 4px 0px',
            borderStyle: 'solid',
            fontWeight: '800'
        };
        const archiveStyle = {
                color: '#444444',
                padding: '16px',
                borderWidth: '0px 0px 0px 0px',
                borderStyle: 'solid',
                fontWeight: '800',
                textDecoration:'none'
        };
        const topStyle2 = {
            borderBottom: '0px'
        };     
        return(
            <div className="top">  
            <NavLink to="/" style={topStyle2}>
                <div className="top-left">
                    <table>
                        <tr>
                            <td><div className="top-left-img"/></td>
                            <td><div className="top-left-title"><b>Gunmo's Dev Life</b></div></td>
                        </tr>
                    </table>
                </div>
            </NavLink>
            <div className="top-right">
                <table>
                        <tr>
                            <td><div className="top-right-home"> <NavLink className="activ" style={topStyle} to="/">Home</NavLink></div></td>
                            <td><div className="top-right-archives"><NavLink style={archiveStyle} to="/archive">Archive</NavLink></div></td>
                        </tr>
                    </table>
                </div>
            </div>
        );
    };
}

export default TopHome;