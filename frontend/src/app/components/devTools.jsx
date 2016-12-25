/**
 * @author rlapin
 */

import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

export class DevTools{
    render(){
        (
            <DockMonitor
                /**
                 * Hide or show the dock with "ctrl-h".
                 */
                toggleVisibilityKey='ctrl-h'
                /**
                 * Change the position of the dock with "ctrl-q".
                 */
                changePositionKey='ctrl-q'
                defaultIsVisible={true}
            >
                <LogMonitor theme='tomorrow' />
            </DockMonitor>
        )
    }
}