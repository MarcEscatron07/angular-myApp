import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})

export class ServerComponent implements OnInit {
    allowNewServer: boolean = false;
    serverCreationStatus: string = "Server is offline";
    serverName: string = '';
    isServerCreated: boolean = false;
    serverList: string[] = [];

    constructor(){
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit() {

    }

    onCreateServer = () => {
        this.isServerCreated = true;
        this.serverList.push(this.serverName);
        return this.serverCreationStatus = 'Server is now online!';
    }

    onUpdateServerName = (e: any) => {
        console.log('onUpdateServerName events', e.target.value)
        return this.serverName = e.target.value;
    }
}