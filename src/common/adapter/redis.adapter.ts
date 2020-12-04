import { IoAdapter } from '@nestjs/platform-socket.io';
import * as redisAdapter from 'socket.io-redis';

export class RedisIoAdapter extends IoAdapter {
    public createIOServer(port: number): any {
        const server = super.createIOServer(port);
        const adapter = redisAdapter.createAdapter(`${process.env.REDIS_HOST}://localhost:${parseInt(process.env.REDIS_PORT)}`);

        server.adapter(adapter);
        return server;
    }
}
