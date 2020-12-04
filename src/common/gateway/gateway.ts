import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(80, { namespace: 'events'})
export class Gateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer() private server: Server;

    private logger: Logger = new Logger(Gateway.name);

    @SubscribeMessage('server')
    public handleMessage(client: Socket, payload: string): void {
        this.server.emit('client', payload);
    }

    public sendEvent(eventName: string, value: any): void {
        this.server.emit(eventName, value);
    }

    public afterInit(server: Server): void {
        this.logger.log('Initialized');
    }

    public handleDisconnect(client: Socket): void {
        this.logger.log(`Client disconnected: ${client.id}`);
    }

    public handleConnection(client: Socket, ...args: any[]): void {
        this.logger.log(`Client connected: ${client.id}`);
    }
}
