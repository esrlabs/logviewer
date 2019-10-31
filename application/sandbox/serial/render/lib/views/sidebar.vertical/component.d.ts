import { OnDestroy, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import { IPortInfo, IPortState } from '../../common/interface.portinfo';
import { IOptions } from '../../common/interface.options';
import { SidebarVerticalPortOptionsWriteComponent } from './port.options.write/component';

import { InputStandardComponent } from 'logviewer-client-primitive';
import * as Toolkit from 'chipmunk.client.toolkit';

interface IConnected {
    port: IPortInfo;
    options: IOptions;
    state: IPortState;
}
interface IPortListItem {
    comPort: IPortInfo;
    caption: string;
}
export declare class SidebarVerticalComponent implements AfterViewInit, OnDestroy {
    private _cdRef;
    _optionsCom: SidebarVerticalPortOptionsWriteComponent;
    _inputCom: InputStandardComponent;
    api: Toolkit.IAPI;
    session: string;
    sessions: Toolkit.ControllerSessionsEvents;
    private _subscriptions;
    private _logger;
    private _destroyed;
    private _chosenPort;
    private _portItem;
    _ng_ports: IPortInfo[];
    _ng_connected: IConnected[];
    _ng_selected: IPortInfo | undefined;
    _ng_busy: boolean;
    _ng_error: string | undefined;
    _ng_options: boolean;
    _ng_msg: string;
    _ng_portList: IPortListItem[];
    constructor(_cdRef: ChangeDetectorRef);
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    _ng_isPortSelected(port: IPortInfo): boolean;
    _ng_onPortSelect(port: IPortInfo): boolean;
    _ng_canBeConnected(): boolean;
    _ng_onOptions(): void;
    _ng_onConnect(): void;
    _ng_getState(port: IPortInfo): IPortState;
    _ng_onDisconnectPort(port: IPortInfo): void;
    _ng_onReloadPortsList(): void;
    private _onIncomeMessage;
    private _onIncomeEvent;
    private _onSessionChange;
    private _onSessionOpen;
    private _onSessionClose;
    private _saveState;
    private _loadState;
    private _requestPortsList;
    private _getOptions;
    private _error;
    private _hostEvents_onState;
    private _hostEvents_onDisconnected;
    private _hostEvents_onError;
    private _forceUpdate;
    _ng_sendMessage(value: string, event: KeyboardEvent): void;
    private _createDropdownElement;
    private _removeDropdownElement;
    private _updateSelection;
    _ng_change(value: string): void;
    private _updateDisconnectPort;
    private _updateConnectPort;
    private _checkOption;
    private _saveOption;
    private _loadOption;
}
export {};
